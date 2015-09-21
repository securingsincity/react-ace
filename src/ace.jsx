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
    maxLines: React.PropTypes.number,
    readOnly: React.PropTypes.bool,
    highlightActiveLine: React.PropTypes.bool,
    showPrintMargin: React.PropTypes.bool,
    cursorStart: React.PropTypes.number,
    editorProps: React.PropTypes.object
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
      cursorStart: 1,
      editorProps: {}
    };
  },
  onChange: function() {
    var value = this.editor.getValue();
    if (this.props.onChange) {
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
    this.editor.setOption('maxLines', this.props.maxLines);
    this.editor.setOption('readOnly', this.props.readOnly);
    this.editor.setOption('highlightActiveLine', this.props.highlightActiveLine);
    this.editor.setShowPrintMargin(this.props.setShowPrintMargin);
    this.editor.on('focus', this.onFocus);
    this.editor.on('blur', this.onBlur);
    this.editor.on('copy', this.onCopy);
    this.editor.on('paste', this.onPaste);
    this.editor.on('change', this.onChange);
    

    if (this.props.onLoad) {
      this.props.onLoad(this.editor);
    }
  },

  componentWillUnmount: function() {
    this.editor = null;
  },

  componentWillReceiveProps: function(nextProps) {
    this.editor = ace.edit(nextProps.name);
    this.editor.getSession().setMode('ace/mode/' + nextProps.mode);
    this.editor.setTheme('ace/theme/' + nextProps.theme);
    this.editor.setFontSize(nextProps.fontSize);
    this.editor.setOption('maxLines', nextProps.maxLines);
    this.editor.setOption('readOnly', nextProps.readOnly);
    this.editor.setOption('highlightActiveLine', nextProps.highlightActiveLine);
    this.editor.setShowPrintMargin(nextProps.setShowPrintMargin);
    if (this.editor.getValue() !== nextProps.value) {
      this.editor.setValue(nextProps.value, nextProps.cursorStart);
    }
    this.editor.renderer.setShowGutter(nextProps.showGutter);
    if (nextProps.onLoad) {
      nextProps.onLoad(this.editor);
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
        onChange={this.onChange}
        onPaste={this.onPaste}
        style={divStyle}>
      </div>
    );
  }
});
