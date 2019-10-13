import {
  debounce,
  editorEvents,
  editorOptions,
  getAceInstance
} from "./editorOptions";
const ace = getAceInstance();
import { Ace, Range } from "ace-builds";
import Editor = Ace.Editor;
import { Split } from "ace-builds/src-noconflict/ext-split";
import * as PropTypes from "prop-types";
import * as React from "react";
const isEqual = require("lodash.isequal");
const get = require("lodash.get");
import {
  IAceOptions,
  IAnnotation,
  ICommand,
  IEditorProps,
  IMarker
} from "./types";

interface IAceEditorClass extends Editor {
  [index: string]: any;
  $options?: any;
}

export interface ISplitEditorProps {
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
  splits: number;
  debounceChangePeriod?: number;
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
  orientation?: string;
  onSelectionChange?: (value: any, event?: any) => void;
  onCursorChange?: (value: any, event?: any) => void;
  onInput?: (event?: any) => void;
  onLoad?: (editor: IEditorProps) => void;
  onBeforeLoad?: (ace: any) => void;
  onChange?: (value: string[], event?: any) => void;
  onSelection?: (selectedText: string, event?: any) => void;
  onCopy?: (value: string) => void;
  onPaste?: (value: string) => void;
  onFocus?: (value: Event) => void;
  onBlur?: (value: Event) => void;
  onScroll?: (editor: IEditorProps) => void;
  editorProps?: IEditorProps;
  setOptions?: IAceOptions;
  keyboardHandler?: string;
  commands?: ICommand[];
  annotations?: IAnnotation[][];
  markers?: IMarker[][];
}

export default class SplitComponent extends React.Component<
  ISplitEditorProps,
  undefined
> {
  [index: string]: any;

  public static propTypes: PropTypes.ValidationMap<ISplitEditorProps> = {
    className: PropTypes.string,
    debounceChangePeriod: PropTypes.number,
    defaultValue: PropTypes.arrayOf(PropTypes.string),
    focus: PropTypes.bool,
    fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.string,
    mode: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onCopy: PropTypes.func,
    onFocus: PropTypes.func,
    onInput: PropTypes.func,
    onLoad: PropTypes.func,
    onPaste: PropTypes.func,
    onScroll: PropTypes.func,
    orientation: PropTypes.string,
    showGutter: PropTypes.bool,
    splits: PropTypes.number,
    theme: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    width: PropTypes.string,
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
  public static defaultProps: Partial<ISplitEditorProps> = {
    name: "ace-editor",
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
  public editor: IAceEditorClass;
  public refEditor: HTMLElement;
  public silent: boolean;
  public split: IAceEditorClass;
  public splitEditor: IAceEditorClass;
  public debounce: (fn: any, delay: number) => (...args: any) => void;
  constructor(props: ISplitEditorProps) {
    super(props);
    editorEvents.forEach(method => {
      this[method] = this[method].bind(this);
    });
    this.debounce = debounce;
  }

  public componentDidMount() {
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

    const split = new Split(
      this.editor.container,
      `ace/theme/${theme}`,
      splits
    );
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
    split.forEach((editor: IAceEditorClass, index: number) => {
      for (let i = 0; i < editorProps.length; i++) {
        editor[editorProps[i]] = this.props.editorProps[editorProps[i]];
      }
      const defaultValueForEditor = get(defaultValue, index);
      const valueForEditor = get(value, index, "");
      editor.session.setUndoManager(new ace.UndoManager());
      editor.setTheme(`ace/theme/${theme}`);
      editor.renderer.setScrollMargin(
        scrollMargin[0],
        scrollMargin[1],
        scrollMargin[2],
        scrollMargin[3]
      );
      editor.getSession().setMode(`ace/mode/${mode}`);
      editor.setFontSize(fontSize as any);
      editor.renderer.setShowGutter(showGutter);
      editor.getSession().setUseWrapMode(wrapEnabled);
      editor.setShowPrintMargin(showPrintMargin);
      editor.on("focus", this.onFocus);
      editor.on("blur", this.onBlur);
      editor.on("input" as any, this.onInput);
      editor.on("copy", this.onCopy as any);
      editor.on("paste", this.onPaste as any);
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
          editor.setOption(option as any, this.props[option]);
        } else if (this.props[option]) {
          console.warn(
            `ReaceAce: editor option ${option} was activated but not found. Did you need to import a related tool or did you possibly mispell the option?`
          );
        }
      }
      this.handleOptions(this.props, editor);

      if (Array.isArray(commands)) {
        commands.forEach(command => {
          if (typeof command.exec === "string") {
            (editor.commands as any).bindKey(command.bindKey, command.exec);
          } else {
            editor.commands.addCommand(command);
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

  public componentDidUpdate(prevProps: ISplitEditorProps) {
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

    split.forEach((editor: IAceEditorClass, index: number) => {
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
        editor.setFontSize(nextProps.fontSize as any);
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
          editor.setOption(option as any, nextProps[option]);
        }
      }
      if (!isEqual(nextProps.setOptions, oldProps.setOptions)) {
        this.handleOptions(nextProps, editor);
      }
      const nextValue = get(nextProps.value, index, "");
      if (editor.getValue() !== nextValue) {
        // editor.setValue is a synchronous function call, change event is emitted before setValue return.
        this.silent = true;
        const pos = (editor.session.selection as any).toJSON();
        editor.setValue(nextValue, nextProps.cursorStart);
        (editor.session.selection as any).fromJSON(pos);
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
      const appliedClasses = this.refEditor.className;
      const appliedClassesArray = appliedClasses.trim().split(" ");
      const oldClassesArray = oldProps.className.trim().split(" ");
      oldClassesArray.forEach(oldClass => {
        const index = appliedClassesArray.indexOf(oldClass);
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

  public componentWillUnmount() {
    this.editor.destroy();
    this.editor = null;
  }

  public onChange(event: any) {
    if (this.props.onChange && !this.silent) {
      const value: any = [];
      this.editor.env.split.forEach((editor: IAceEditorClass) => {
        value.push(editor.getValue());
      });
      this.props.onChange(value, event);
    }
  }

  public onSelectionChange(event: any) {
    if (this.props.onSelectionChange) {
      const value: any = [];
      this.editor.env.split.forEach((editor: IAceEditorClass) => {
        value.push(editor.getSelection());
      });
      this.props.onSelectionChange(value, event);
    }
  }
  public onCursorChange(event: any) {
    if (this.props.onCursorChange) {
      const value: any = [];
      this.editor.env.split.forEach((editor: IAceEditorClass) => {
        value.push(editor.getSelection());
      });
      this.props.onCursorChange(value, event);
    }
  }
  public onFocus(event: any) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  public onInput(event: any) {
    if (this.props.onInput) {
      this.props.onInput(event);
    }
  }

  public onBlur(event: any) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  public onCopy(text: string) {
    if (this.props.onCopy) {
      this.props.onCopy(text);
    }
  }

  public onPaste(text: string) {
    if (this.props.onPaste) {
      this.props.onPaste(text);
    }
  }

  public onScroll() {
    if (this.props.onScroll) {
      this.props.onScroll(this.editor);
    }
  }

  public handleOptions(props: ISplitEditorProps, editor: IAceEditorClass) {
    const setOptions = Object.keys(props.setOptions);
    for (let y = 0; y < setOptions.length; y++) {
      editor.setOption(setOptions[y] as any, props.setOptions[setOptions[y]]);
    }
  }

  public handleMarkers(markers: IMarker[], editor: IAceEditorClass) {
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
        editor
          .getSession()
          .addMarker(range as any, className, type as any, inFront);
      }
    );
  }

  public updateRef(item: HTMLElement) {
    this.refEditor = item;
  }

  public render() {
    const { name, width, height, style } = this.props;
    const divStyle = { width, height, ...style };
    return <div ref={this.updateRef} id={name} style={divStyle} />;
  }
}
