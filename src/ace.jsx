import ace from 'brace';
import React, { Component, PropTypes } from 'react';

const ReactDom = require('react-dom');
const setEditorProperties = require('./set-editor-properties');
const editorEvents = require('./editor-events');

const acequire = ace.acequire;
const Editor = acequire('./editor').Editor;
const EditSession = acequire('./edit_session').EditSession;
const UndoManager = acequire('./undomanager').UndoManager;
const Renderer = acequire('./virtual_renderer').VirtualRenderer;

export default class ReactAce extends Component {
  constructor(props) {
    super(props);
    editorEvents.createListeners.call(this);
  }

  componentDidMount() {
    const elem = ReactDom.findDOMNode(this);
    const document = this.doc = this.createEditSession('', '');
    const editor = this.editor = new Editor(new Renderer(elem));
    this.editor.setSession(this.doc);

    const env = { document, editor };
    editor.container.env = editor.env = env;

    const {
      onBeforeLoad,
      value,
      cursorStart,
      keyboardHandler,
      onLoad,
    } = this.props;

    if (onBeforeLoad) {
      onBeforeLoad(ace);
    }

    const editorProps = Object.keys(this.props.editorProps);
    for (let i = 0; i < editorProps.length; i++) {
      this.editor[editorProps[i]] = this.props.editorProps[editorProps[i]];
    }

    setEditorProperties(editor, {}, this.props);

    this.setContent(value, cursorStart);

    editorEvents.bindListeners.call(this, this.editor);

    if (keyboardHandler) {
      this.editor.setKeyboardHandler('ace/keyboard/' + keyboardHandler);
    }

    if (onLoad) {
      onLoad(this.editor);
    }
  }

  componentDidUpdate(oldProps) {
    const editor = this.editor;
    const nextProps = this.props;

    setEditorProperties(editor, oldProps, nextProps);

    if (editor.getValue() !== nextProps.value) {
      this.setContent(nextProps.value, nextProps.cursorStart || this.props.cursorStart);
    }

    if (oldProps.width !== nextProps.width || oldProps.height !== nextProps.height) {
      this.editor.renderer.onResize(true);
    }
  }

  componentWillUnmount() {
    // Remove Resize Listeners
    const editor = this.editor;

    editor.destroy();
    this.editor = this.editor.container.env = null; // prevent memory leak on old ie
  }

  onChange() {
    if (this.props.onChange && !this.silent) {
      const value = this.editor.getValue();
      this.props.onChange(value);
    }
  }

  setContent(content, start) {
    // editor.setValue is a synchronous function call, change event is emitted before setValue return.
    this.silent = true;
    this.editor.setValue(content, start || 0);
    this.silent = false;
  }

  createEditSession(text, mode) {
    const doc = new EditSession(text, mode);
    doc.setUndoManager(new UndoManager());
    return doc;
  }

  render() {
    const { className, width, height } = this.props;
    const divStyle = { width, height };

    // pre due to brace/index.js lin 18617
    return <pre className={className} style={divStyle} ></pre>;
  }

}

ReactAce.propTypes = {

  // generic
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewPort(obj) {
    if (!obj) return true;
    return obj === window;
  },

  // loadable content
  value: PropTypes.string,
  mode: PropTypes.string,
  theme: PropTypes.string,

  // editor styling
  fontSize: PropTypes.number,
  showGutter: PropTypes.bool,
  minLines: PropTypes.number,
  maxLines: PropTypes.number,
  readOnly: PropTypes.bool,
  highlightActiveLine: PropTypes.bool,
  tabSize: PropTypes.number,
  showPrintMargin: PropTypes.bool,
  cursorStart: PropTypes.number,
  editorProps: PropTypes.object,
  keyboardHandler: PropTypes.string,
  wrapEnabled: PropTypes.bool,

  // events
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  onPaste: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onLoad: PropTypes.func,
  onBeforeLoad: PropTypes.func,

};

ReactAce.defaultProps = {
  // generic
  height: '500px',
  width: '500px',
  viewPort: window, // Long term Resize checks only come from the parent

  // loadable content
  mode: '',
  theme: '',
  value: '',

  fontSize: 12,
  showGutter: true,
  onChange: null,
  onPaste: null,
  onLoad: null,
  minLines: null,
  maxLines: null,
  readOnly: false,
  highlightActiveLine: true,
  showPrintMargin: true,
  tabSize: 4,
  cursorStart: 1,
  editorProps: {},
  wrapEnabled: false,
};
