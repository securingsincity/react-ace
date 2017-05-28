import { Selection, Annotation, Editor, UndoManager } from "brace";
const ace = require("brace");
import * as React from "react";
import * as PropTypes from "prop-types";
const isEqual = require('lodash.isequal');
const get = require('lodash.get');

import { editorOptions, editorEvents, debounce } from "./editorOptions.js";
const { Range } = ace.acequire("ace/range");
import { EditorProps, Marker, Command, AceOptions, CommandManager } from "./types";
import "brace/ext/split";
const { Split } = ace.acequire("ace/split");

class AceEditorClass extends Editor {
  [index: string]: any;
  $options: any;
}

export interface SplitEditorProps {
  [index: string]: any;
  name?: string;
  style: any;
  /** For available modes see https://github.com/thlorenz/brace/tree/master/mode */
  mode?: string;
  /** For available themes see https://github.com/thlorenz/brace/tree/master/theme */
  theme?: string;
  height?: string;
  width?: string;
  className?: string;
  fontSize?: number | string;
  showGutter?: boolean;
  showPrintMargin?: boolean;
  highlightActiveLine?: boolean;
  focus?: boolean;
  cursorStart?: number;
  wrapEnabled?: boolean;
  readOnly?: boolean;
  minLines?: number;
  maxLines?: number;
  enableBasicAutocompletion?: boolean | string[];
  enableLiveAutocompletion?: boolean | string[];
  tabSize?: number;
  value?: string[];
  defaultValue?: string[];
  scrollMargin?: number[];
  onLoad?: (editor: EditorProps) => void;
  onBeforeLoad?: (ace: any) => void;
  onChange?: (value: string[], event?: any) => void;
  onSelection?: (selectedText: string, event?: any) => void;
  onCopy?: (value: string) => void;
  onPaste?: (value: string) => void;
  onFocus?: (value: Event) => void;
  onBlur?: (value: Event) => void;
  onScroll?: (editor: EditorProps) => void;
  editorProps?: EditorProps;
  setOptions?: AceOptions;
  keyboardHandler?: string;
  commands?: Array<Command>;
  annotations?: Array<Array<Annotation>>;
  markers?: Array<Array<Marker>>;
}

export default class SplitComponent extends React.Component<
  SplitEditorProps,
  undefined
> {
  editor: AceEditorClass;
  refEditor: HTMLElement;
  [index: string]: any;
  silent: boolean;
  constructor(props: SplitEditorProps) {
    super(props);
    editorEvents.forEach(method => {
      this[method] = this[method].bind(this);
    });
    this.debounce = debounce;
  }

  componentDidMount() {
    const {
      className,
      onBeforeLoad,
      mode,
      focus,
      theme,
      fontSize,
      value,
      defaultValue,
      cursorStart,
      showGutter,
      wrapEnabled,
      showPrintMargin,
      scrollMargin = [0, 0, 0, 0],
      keyboardHandler,
      onLoad,
      commands,
      annotations,
      markers,
      splits
    } = this.props;

    this.editor = ace.edit(this.refEditor);

    if (onBeforeLoad) {
      onBeforeLoad(ace);
    }

    const editorProps = Object.keys(this.props.editorProps);

    var split = new Split(this.editor.container, `ace/theme/${theme}`, splits);
    this.editor.env.split = split;

    this.splitEditor = split.getEditor(0);
    this.split = split;
    // in a split scenario we don't want a print margin for the entire application
    this.editor.setShowPrintMargin(false);
    this.editor.renderer.setShowGutter(false);
    // get a list of possible options to avoid 'misspelled option errors'
    const availableOptions = this.splitEditor.$options;
    if (this.props.debounceChangePeriod) {
      this.onChange = this.debounce(
        this.onChange,
        this.props.debounceChangePeriod
      );
    }
    split.forEach((editor: AceEditorClass, index: number) => {
      for (let i = 0; i < editorProps.length; i++) {
        editor[editorProps[i]] = this.props.editorProps[editorProps[i]];
      }
      const defaultValueForEditor = get(defaultValue, index);
      const valueForEditor = get(value, index, "");
      editor.session.setUndoManager(new UndoManager());
      editor.setTheme(`ace/theme/${theme}`);
      editor.renderer.setScrollMargin(
        scrollMargin[0],
        scrollMargin[1],
        scrollMargin[2],
        scrollMargin[3]
      );
      editor.getSession().setMode(`ace/mode/${mode}`);
      editor.setFontSize(fontSize.toString());
      editor.renderer.setShowGutter(showGutter);
      editor.getSession().setUseWrapMode(wrapEnabled);
      editor.setShowPrintMargin(showPrintMargin);
      editor.on("focus", this.onFocus);
      editor.on("blur", this.onBlur);
      editor.on("input", this.onInput);
      editor.on("copy", this.onCopy);
      editor.on("paste", this.onPaste);
      editor.on("change", this.onChange);
      editor
        .getSession()
        .selection.on("changeSelection", this.onSelectionChange);
      editor.getSession().selection.on("changeCursor", this.onCursorChange);
      editor.session.on("changeScrollTop", this.onScroll);
      editor.setValue(
        defaultValueForEditor === undefined
          ? valueForEditor
          : defaultValueForEditor,
        cursorStart
      );
      const newAnnotations = get(annotations, index, []);
      const newMarkers = get(markers, index, []);
      editor.getSession().setAnnotations(newAnnotations);
      if (newMarkers && newMarkers.length > 0) {
        this.handleMarkers(newMarkers, editor);
      }

      for (let i = 0; i < editorOptions.length; i++) {
        const option = editorOptions[i];
        if (availableOptions.hasOwnProperty(option)) {
          editor.setOption(option, this.props[option]);
        } else if (this.props[option]) {
          console.warn(
            `ReaceAce: editor option ${option} was activated but not found. Did you need to import a related tool or did you possibly mispell the option?`
          );
        }
      }
      this.handleOptions(this.props, editor);

      if (Array.isArray(commands)) {
        const editorCommands: CommandManager = editor.commands
        commands.forEach(command => {
          if (typeof command.exec == "string") {
            editorCommands.bindKey(command.bindKey, command.exec);
          } else {
            editorCommands.addCommand(command);
          }
        });
      }

      if (keyboardHandler) {
        editor.setKeyboardHandler("ace/keyboard/" + keyboardHandler);
      }
    });

    if (className) {
      this.refEditor.className += " " + className;
    }

    if (focus) {
      this.splitEditor.focus();
    }

    const sp = this.editor.env.split;
    sp.setOrientation(
      this.props.orientation === "below" ? sp.BELOW : sp.BESIDE
    );
    sp.resize(true);
    if (onLoad) {
      onLoad(sp);
    }
  }

  componentDidUpdate(prevProps: SplitEditorProps) {
    const oldProps = prevProps;
    const nextProps = this.props;

    const split = this.editor.env.split;

    if (nextProps.splits !== oldProps.splits) {
      split.setSplits(nextProps.splits);
    }

    if (nextProps.orientation !== oldProps.orientation) {
      split.setOrientation(
        nextProps.orientation === "below" ? split.BELOW : split.BESIDE
      );
    }

    split.forEach((editor: Editor, index: number) => {
      if (nextProps.mode !== oldProps.mode) {
        editor.getSession().setMode("ace/mode/" + nextProps.mode);
      }
      if (nextProps.keyboardHandler !== oldProps.keyboardHandler) {
        if (nextProps.keyboardHandler) {
          editor.setKeyboardHandler(
            "ace/keyboard/" + nextProps.keyboardHandler
          );
        } else {
          editor.setKeyboardHandler(null);
        }
      }
      if (nextProps.fontSize !== oldProps.fontSize) {
        editor.setFontSize(nextProps.fontSize.toString());
      }
      if (nextProps.wrapEnabled !== oldProps.wrapEnabled) {
        editor.getSession().setUseWrapMode(nextProps.wrapEnabled);
      }
      if (nextProps.showPrintMargin !== oldProps.showPrintMargin) {
        editor.setShowPrintMargin(nextProps.showPrintMargin);
      }
      if (nextProps.showGutter !== oldProps.showGutter) {
        editor.renderer.setShowGutter(nextProps.showGutter);
      }

      for (let i = 0; i < editorOptions.length; i++) {
        const option = editorOptions[i];
        if (nextProps[option] !== oldProps[option]) {
          editor.setOption(option, nextProps[option]);
        }
      }
      if (!isEqual(nextProps.setOptions, oldProps.setOptions)) {
        this.handleOptions(nextProps, editor);
      }
      const nextValue = get(nextProps.value, index, "");
      if (editor.getValue() !== nextValue) {
        // editor.setValue is a synchronous function call, change event is emitted before setValue return.
        this.silent = true;
        const editorSelection: any = editor.session.selection
        const pos = editorSelection.toJSON();
        editor.setValue(nextValue, nextProps.cursorStart);
        editorSelection.fromJSON(pos);
        this.silent = false;
      }
      const newAnnotations = get(nextProps.annotations, index, []);
      const oldAnnotations = get(oldProps.annotations, index, []);
      if (!isEqual(newAnnotations, oldAnnotations)) {
        editor.getSession().setAnnotations(newAnnotations);
      }

      const newMarkers = get(nextProps.markers, index, []);
      const oldMarkers = get(oldProps.markers, index, []);
      if (!isEqual(newMarkers, oldMarkers) && Array.isArray(newMarkers)) {
        this.handleMarkers(newMarkers, editor);
      }
    });

    if (nextProps.className !== oldProps.className) {
      let appliedClasses = this.refEditor.className;
      let appliedClassesArray = appliedClasses.trim().split(" ");
      let oldClassesArray = oldProps.className.trim().split(" ");
      oldClassesArray.forEach(oldClass => {
        let index = appliedClassesArray.indexOf(oldClass);
        appliedClassesArray.splice(index, 1);
      });
      this.refEditor.className =
        " " + nextProps.className + " " + appliedClassesArray.join(" ");
    }

    if (nextProps.theme !== oldProps.theme) {
      split.setTheme("ace/theme/" + nextProps.theme);
    }

    if (nextProps.focus && !oldProps.focus) {
      this.splitEditor.focus();
    }
    if (
      nextProps.height !== this.props.height ||
      nextProps.width !== this.props.width
    ) {
      this.editor.resize();
    }
  }

  componentWillUnmount() {
    this.editor.destroy();
    this.editor = null;
  }

  onChange(event: Event) {
    if (this.props.onChange && !this.silent) {
      let value: string[] = [];
      this.editor.env.split.forEach((editor: Editor) => {
        value.push(editor.getValue());
      });
      this.props.onChange(value, event);
    }
  }

  onSelectionChange(event: Event) {
    if (this.props.onSelectionChange) {
      let value: Selection[] = [];
      this.editor.env.split.forEach((editor: Editor) => {
        value.push(editor.getSelection());
      });
      this.props.onSelectionChange(value, event);
    }
  }
  onCursorChange(event: Event) {
    if (this.props.onCursorChange) {
      let value: Selection[] = [];
      this.editor.env.split.forEach((editor: Editor) => {
        value.push(editor.getSelection());
      });
      this.props.onCursorChange(value, event);
    }
  }
  onFocus(event: Event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onInput(event: Event) {
    if (this.props.onInput) {
      this.props.onInput(event);
    }
  }

  onBlur(event: Event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  onCopy(text: string) {
    if (this.props.onCopy) {
      this.props.onCopy(text);
    }
  }

  onPaste(text: string) {
    if (this.props.onPaste) {
      this.props.onPaste(text);
    }
  }

  onScroll() {
    if (this.props.onScroll) {
      this.props.onScroll(this.editor);
    }
  }

  handleOptions(props: SplitEditorProps, editor: Editor) {
    const setOptions = Object.keys(props.setOptions);
    for (let y = 0; y < setOptions.length; y++) {
      editor.setOption(setOptions[y], props.setOptions[setOptions[y]]);
    }
  }

  handleMarkers(markers: Marker[], editor: Editor) {
    // remove foreground markers
    let currentMarkers = editor.getSession().getMarkers(true);
    for (const i in currentMarkers) {
      if (currentMarkers.hasOwnProperty(i)) {
        editor.getSession().removeMarker(currentMarkers[i].id);
      }
    }
    // remove background markers
    currentMarkers = editor.getSession().getMarkers(false);
    for (const i in currentMarkers) {
      if (currentMarkers.hasOwnProperty(i)) {
        editor.getSession().removeMarker(currentMarkers[i].id);
      }
    }
    // add new markers
    markers.forEach(
      ({
        startRow,
        startCol,
        endRow,
        endCol,
        className,
        type,
        inFront = false
      }) => {
        const range = new Range(startRow, startCol, endRow, endCol);
        editor.getSession().addMarker(range, className, type, inFront);
      }
    );
  }

  updateRef(item: HTMLElement) {
    this.refEditor = item;
  }

  render() {
    const { name, width, height, style } = this.props;
    const divStyle = { width, height, ...style };
    return <div ref={this.updateRef} id={name} style={divStyle} />;
  }
  public static propTypes:  PropTypes.ValidationMap<SplitEditorProps> = {
    mode: PropTypes.string,
    splits: PropTypes.number,
    orientation: PropTypes.string,
    focus: PropTypes.bool,
    theme: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showGutter: PropTypes.bool,
    onChange: PropTypes.func,
    onCopy: PropTypes.func,
    onPaste: PropTypes.func,
    onFocus: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    onScroll: PropTypes.func,
    onSelection: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.string),
    defaultValue: PropTypes.arrayOf(PropTypes.string),
    debounceChangePeriod: PropTypes.number,
    onLoad: PropTypes.func,
    onSelectionChange: PropTypes.func,
    onCursorChange: PropTypes.func,
    onBeforeLoad: PropTypes.func,
    minLines: PropTypes.number,
    maxLines: PropTypes.number,
    readOnly: PropTypes.bool,
    highlightActiveLine: PropTypes.bool,
    tabSize: PropTypes.number,
    showPrintMargin: PropTypes.bool,
    cursorStart: PropTypes.number,
    editorProps: PropTypes.object,
    setOptions: PropTypes.object,
    style: PropTypes.object,
    scrollMargin: PropTypes.array,
    annotations: PropTypes.array,
    markers: PropTypes.array,
    keyboardHandler: PropTypes.string,
    wrapEnabled: PropTypes.bool,
    enableBasicAutocompletion: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.array
    ]),
    enableLiveAutocompletion: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.array
    ]),
    commands: PropTypes.array
  };

  public static defaultProps: Partial<SplitEditorProps> = {
    name: "brace-editor",
    focus: false,
    orientation: "beside",
    splits: 2,
    mode: "",
    theme: "",
    height: "500px",
    width: "500px",
    value: [],
    fontSize: 12,
    showGutter: true,
    onChange: null,
    onPaste: null,
    onLoad: null,
    onScroll: null,
    minLines: null,
    maxLines: null,
    readOnly: false,
    highlightActiveLine: true,
    showPrintMargin: true,
    tabSize: 4,
    cursorStart: 1,
    editorProps: {},
    style: {},
    scrollMargin: [0, 0, 0, 0],
    setOptions: {},
    wrapEnabled: false,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false
  };
}
