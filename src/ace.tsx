import { Annotation, Editor} from 'brace'
const ace = require('brace')
import * as React from 'react'
const PropTypes = require('prop-types')
const isEqual = require( 'lodash.isequal')

const { Range } = ace.acequire('ace/range');
import { editorOptions, editorEvents } from './editorOptions'
import { EditorProps, Marker, Command, AceOptions} from './types'
/**
 * See https://github.com/ajaxorg/ace/wiki/Configuring-Ace
 */


export interface AceEditorProps {
    [index:string] : any
    name?: string
    style: any
    /** For available modes see https://github.com/thlorenz/brace/tree/master/mode */
    mode?: string
    /** For available themes see https://github.com/thlorenz/brace/tree/master/theme */
    theme?: string
    height?: string
    width?: string
    className?: string
    fontSize?: number
    showGutter?: boolean
    showPrintMargin?: boolean
    highlightActiveLine?: boolean
    focus?: boolean
    cursorStart?: number
    wrapEnabled?: boolean
    readOnly?: boolean
    minLines?: number
    maxLines?: number
    enableBasicAutocompletion?: boolean
    enableLiveAutocompletion?: boolean
    tabSize?: number
    value?: string
    defaultValue?: string
    scrollMargin?: number[]
    onLoad?: (editor: EditorProps) => void
    onBeforeLoad?: (ace: any) => void
    onChange?: (value: string, event?: any) => void
    onSelection?: (selectedText: string, event?: any) => void
    onCopy?: (value: string) => void
    onPaste?: (value: string) => void
    onFocus?: () => void
    onBlur?: () => void
    onScroll?: (editor: EditorProps) => void
    editorProps?: EditorProps
    setOptions?: AceOptions
    keyboardHandler?: string
    commands?: Array<Command>
    annotations?: Array<Annotation>
    markers?: Array<Marker>
}

class AceEditorClass {
  [index:string] : any
}

export default class ReactAce extends React.Component<AceEditorProps, undefined> {
  editor: AceEditorClass
  refEditor: HTMLElement
  [index:string]:any
  silent: boolean
  constructor(props: AceEditorProps) {
    super(props);
    editorEvents.forEach(method => {
      this[method] = this[method].bind(this);
    });
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
      scrollMargin = [ 0, 0, 0, 0],
      keyboardHandler,
      onLoad,
      commands,
      annotations,
      markers,
    } = this.props;
    const aceEditor : AceEditorClass = ace.edit(this.refEditor)
    this.editor = aceEditor

    if (onBeforeLoad) {
      onBeforeLoad(ace);
    }

    const editorProps = Object.keys(this.props.editorProps);
    for (let i = 0; i < editorProps.length; i++) {
      this.editor[editorProps[i]] = this.props.editorProps[editorProps[i]];
    }

    this.editor.renderer.setScrollMargin(scrollMargin[0], scrollMargin[1], scrollMargin[2], scrollMargin[3])
    this.editor.getSession().setMode(`ace/mode/${mode}`);
    this.editor.setTheme(`ace/theme/${theme}`);
    this.editor.setFontSize(fontSize.toString());
    this.editor.setValue(defaultValue === undefined ? value : defaultValue, cursorStart);
    this.editor.renderer.setShowGutter(showGutter);
    this.editor.getSession().setUseWrapMode(wrapEnabled);
    this.editor.setShowPrintMargin(showPrintMargin);
    this.editor.on('focus', this.onFocus);
    this.editor.on('blur', this.onBlur);
    this.editor.on('copy', this.onCopy);
    this.editor.on('paste', this.onPaste);
    this.editor.on('change', this.onChange);
    this.editor.getSession().selection.on('changeSelection', this.onSelectionChange);
    this.editor.session.on('changeScrollTop', this.onScroll);
    this.handleOptions(this.props);
    this.editor.getSession().setAnnotations(annotations || []);
    if(markers && markers.length > 0){
      this.handleMarkers(markers);
    }

    // get a list of possible options to avoid 'misspelled option errors'
    const availableOptions = this.editor.$options;
    for (let i = 0; i < editorOptions.length; i++) {
      const option = editorOptions[i];
      if (availableOptions.hasOwnProperty(option)) {
        this.editor.setOption(option, this.props[option]);
      } else if (this.props[option]) {
        console.warn(`ReaceAce: editor option ${option} was activated but not found. Did you need to import a related tool or did you possibly mispell the option?`)
      }
    }

    if (Array.isArray(commands)) {
      commands.forEach((command) => {
        this.editor.commands.addCommand(command);
      });
    }

    if (keyboardHandler) {
      this.editor.setKeyboardHandler('ace/keyboard/' + keyboardHandler);
    }

    if (className) {
      this.refEditor.className += ' ' + className;
    }

    if (focus) {
      this.editor.focus();
    }

    if (onLoad) {
      onLoad(this.editor);
    }
  }

  componentWillReceiveProps(nextProps: AceEditorProps) {
    const oldProps = this.props;

    for (let i = 0; i < editorOptions.length; i++) {
      const option = editorOptions[i];
      if (nextProps[option] !== oldProps[option]) {
        this.editor.setOption(option, nextProps[option]);
      }
    }

    if (nextProps.className !== oldProps.className) {
      let appliedClasses = this.refEditor.className;
      let appliedClassesArray = appliedClasses.trim().split(' ');
      let oldClassesArray = oldProps.className.trim().split(' ');
      oldClassesArray.forEach((oldClass: string) => {
        let index = appliedClassesArray.indexOf(oldClass);
        appliedClassesArray.splice(index, 1);
      });
      this.refEditor.className = ' ' + nextProps.className + ' ' + appliedClassesArray.join(' ');
    }

    if (nextProps.mode !== oldProps.mode) {
      this.editor.getSession().setMode('ace/mode/' + nextProps.mode);
    }
    if (nextProps.theme !== oldProps.theme) {
      this.editor.setTheme('ace/theme/' + nextProps.theme);
    }
    if (nextProps.keyboardHandler !== oldProps.keyboardHandler) {
      if (nextProps.keyboardHandler) {
        this.editor.setKeyboardHandler('ace/keyboard/' + nextProps.keyboardHandler);
      } else {
        this.editor.setKeyboardHandler(null);
      }
    }
    if (nextProps.fontSize !== oldProps.fontSize) {
      this.editor.setFontSize(nextProps.fontSize.toString());
    }
    if (nextProps.wrapEnabled !== oldProps.wrapEnabled) {
      this.editor.getSession().setUseWrapMode(nextProps.wrapEnabled);
    }
    if (nextProps.showPrintMargin !== oldProps.showPrintMargin) {
      this.editor.setShowPrintMargin(nextProps.showPrintMargin);
    }
    if (nextProps.showGutter !== oldProps.showGutter) {
      this.editor.renderer.setShowGutter(nextProps.showGutter);
    }
    if (!isEqual(nextProps.setOptions, oldProps.setOptions)) {
      this.handleOptions(nextProps);
    }
    if (!isEqual(nextProps.annotations, oldProps.annotations)) {
      this.editor.getSession().setAnnotations(nextProps.annotations || []);
    }
    if (!isEqual(nextProps.markers, oldProps.markers) && (nextProps.markers && nextProps.markers.length > 0)) {
      this.handleMarkers(nextProps.markers);
    }

    // this doesn't look like it works at all....
    if (!isEqual(nextProps.scrollMargin, oldProps.scrollMargin)) {
      this.handleScrollMargins(nextProps.scrollMargin)
    }
    if (this.editor && this.editor.getValue() !== nextProps.value) {
      // editor.setValue is a synchronous function call, change event is emitted before setValue return.
      this.silent = true;
      const pos = this.editor.session.selection
      this.editor.setValue(nextProps.value, nextProps.cursorStart);
      this.editor.session.selection = pos
      this.silent = false;
    }

    if (nextProps.focus && !oldProps.focus) {
      this.editor.focus();
    }
    if(nextProps.height !== this.props.height || nextProps.width !== this.props.width){
      this.editor.resize();
    }
  }

  handleScrollMargins(margins = [0, 0, 0, 0]) {
    this.editor.renderer.setScrollMargin(margins[0], margins[1], margins[2], margins[3])
  }

  componentWillUnmount() {
    this.editor.destroy();
    this.editor = null;
  }

  onChange(event: Event) {
    if (this.props.onChange && !this.silent) {
      const value = this.editor.getValue();
      this.props.onChange(value, event);
    }
  }

  onSelectionChange(event: Event) {
    if (this.props.onSelectionChange) {
      const value = this.editor.getSelection();
      this.props.onSelectionChange(value, event);
    }
  }

  onFocus() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur() {
    if (this.props.onBlur) {
      this.props.onBlur();
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

  handleOptions(props: AceEditorProps) {
    const setOptions = Object.keys(props.setOptions);
    for (let y = 0; y < setOptions.length; y++) {
      this.editor.setOption(setOptions[y], props.setOptions[setOptions[y]]);
    }
  }

  handleMarkers(markers: Marker[]) {
    // remove foreground markers
    let currentMarkers = this.editor.getSession().getMarkers(true);
    for (const i in currentMarkers) {
      if (currentMarkers.hasOwnProperty(i)) {
        this.editor.getSession().removeMarker(currentMarkers[i].id);
      }
    }
    // remove background markers
    currentMarkers = this.editor.getSession().getMarkers(false);
    for (const i in currentMarkers) {
      if (currentMarkers.hasOwnProperty(i)) {
        this.editor.getSession().removeMarker(currentMarkers[i].id);
      }
    }
    // add new markers
    markers.forEach(({ startRow, startCol, endRow, endCol, className, type, inFront = false }) => {
      const range = new Range(startRow, startCol, endRow, endCol);
      this.editor.getSession().addMarker(range, className, type, inFront);
    });
  }

  updateRef(item: HTMLDivElement) {
    this.refEditor = item;
  }

  render() {
    const { name, width, height, style } = this.props;
    const divStyle = { width, height, ...style };
    return (
      <div ref={this.updateRef}
        id={name}
        style={divStyle}
      >
      </div>
    );
  }
  public static defaultProps: Partial<AceEditorProps> = {
    name: 'brace-editor',
    focus: false,
    mode: '',
    theme: '',
    height: '500px',
    width: '500px',
    value: '',
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
    scrollMargin: [ 0, 0, 0, 0],
    setOptions: {},
    wrapEnabled: false,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
  };

  public static propTypes: AceEditorProps = {
    mode: PropTypes.string,
    focus: PropTypes.bool,
    theme: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    fontSize: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    showGutter: PropTypes.bool,
    onChange: PropTypes.func,
    onCopy: PropTypes.func,
    onPaste: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onScroll: PropTypes.func,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onLoad: PropTypes.func,
    onSelectionChange: PropTypes.func,
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
      PropTypes.array,
    ]),
    enableLiveAutocompletion: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.array,
    ]),
    commands: PropTypes.array,
  }

}

