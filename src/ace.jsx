var ace = require('brace');
var React = require('react');

module.exports = React.createClass({
  displayName: 'ReactAce',

  propTypes: {
    mode: React.PropTypes.string,
    theme: React.PropTypes.string,
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    height: React.PropTypes.string,
    width: React.PropTypes.string,
    fontSize: React.PropTypes.number,
    showGutter: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onCopy: React.PropTypes.func,
    onPaste: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    value: React.PropTypes.string,
    onLoad: React.PropTypes.func,
    onBeforeLoad: React.PropTypes.func,
    maxLines: React.PropTypes.number,
    readOnly: React.PropTypes.bool,
    highlightActiveLine: React.PropTypes.bool,
    tabSize: React.PropTypes.number,
    showPrintMargin: React.PropTypes.bool,
    cursorStart: React.PropTypes.number,
    editorProps: React.PropTypes.object,
    keyboardHandler: React.PropTypes.string,
    wrapEnabled: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      name: 'brace-editor',
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
      maxLines: null,
      readOnly: false,
      highlightActiveLine: true,
      showPrintMargin: true,
      tabSize: 4,
      cursorStart: 1,
      editorProps: {},
      wrapEnabled:false
    };
  },
  onChange: function() {
    if (this.props.onChange && !this.silent) {
      var value = this.editor.getValue();
      this.props.onChange(value);
    }
  },
  onFocus: function() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  },
  onBlur: function() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },
  onCopy: function(text) {
    if (this.props.onCopy) {
      this.props.onCopy(text);
    }
  },
  onPaste: function(text) {
    if (this.props.onPaste) {
      this.props.onPaste(text);
    }
  },
  componentDidMount: function() {
    this.editor = ace.edit(this.props.name);
    if (this.props.onBeforeLoad) {
      this.props.onBeforeLoad(ace);
    }

    var editorProps = Object.keys(this.props.editorProps);
    for (var i = 0; i < editorProps.length; i++) {
      this.editor[editorProps[i]] = this.props.editorProps[editorProps[i]];
    }

    this.editor.getSession().setMode('ace/mode/' + this.props.mode);
    this.editor.setTheme('ace/theme/' + this.props.theme);
    this.editor.setFontSize(this.props.fontSize);
    this.editor.setValue(this.props.value, this.props.cursorStart);
    this.editor.renderer.setShowGutter(this.props.showGutter);
    this.editor.getSession().setUseWrapMode(this.props.wrapEnabled);
    this.editor.setOption('maxLines', this.props.maxLines);
    this.editor.setOption('readOnly', this.props.readOnly);
    this.editor.setOption('highlightActiveLine', this.props.highlightActiveLine);
    this.editor.setOption('tabSize', this.props.tabSize);
    this.editor.setShowPrintMargin(this.props.showPrintMargin);
    this.editor.on('focus', this.onFocus);
    this.editor.on('blur', this.onBlur);
    this.editor.on('copy', this.onCopy);
    this.editor.on('paste', this.onPaste);
    this.editor.on('change', this.onChange);

    if (this.props.keyboardHandler) {
      this.editor.setKeyboardHandler('ace/keyboard/' + this.props.keyboardHandler);
    }

    if (this.props.onLoad) {
      this.props.onLoad(this.editor);
    }
  },

  componentWillUnmount: function() {
    this.editor = null;
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.mode !== this.props.mode) {
      this.editor.getSession().setMode('ace/mode/' + nextProps.mode);
    }
    if (nextProps.theme !== this.props.theme) {
      this.editor.setTheme('ace/theme/' + nextProps.theme);
    }
    if (nextProps.fontSize !== this.props.fontSize) {
      this.editor.setFontSize(nextProps.fontSize);
    }
    if (nextProps.maxLines !== this.props.maxLines) {
      this.editor.setOption('maxLines', nextProps.maxLines);
    }
    if (nextProps.readOnly !== this.props.readOnly) {
      this.editor.setOption('readOnly', nextProps.readOnly);
    }
    if (nextProps.highlightActiveLine !== this.props.highlightActiveLine) {
      this.editor.setOption('highlightActiveLine', nextProps.highlightActiveLine);
    }
    if (nextProps.tabSize !== this.props.tabSize) {
      this.editor.setOption('tabSize', nextProps.tabSize);
    }
    if (nextProps.showPrintMargin !== this.props.showPrintMargin) {
      this.editor.setShowPrintMargin(nextProps.showPrintMargin);
    }
    if (nextProps.showGutter !== this.props.showGutter) {
      this.editor.renderer.setShowGutter(nextProps.showGutter);
    }
    if (this.editor.getValue() !== nextProps.value) {
      // editor.setValue is a synchronous function call, change event is emitted before setValue return.
      this.silent = true;
      this.editor.setValue(nextProps.value, nextProps.cursorStart);
      this.silent = false;
    }
  },

  render: function() {
    var divStyle = {
      width: this.props.width,
      height: this.props.height
    };
    var className = this.props.className;
    return (
      <div id={this.props.name}
        className={className}
        style={divStyle}>
      </div>
    );
  }
});
