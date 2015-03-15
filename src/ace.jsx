/** @jsx React.DOM */

var ace = require('brace');
var React = require('react');
require('brace/theme/monokai');
require('brace/theme/github');
require('brace/theme/tomorrow');
require('brace/theme/kuroir');
require('brace/theme/twilight');
require('brace/theme/xcode');
require('brace/theme/textmate');
require('brace/theme/terminal');
require('brace/theme/solarized_dark');
require('brace/theme/solarized_light');


//include as many of the libraries
require('brace/mode/javascript');
require('brace/mode/java');
require('brace/mode/php');
require('brace/mode/python');
require('brace/mode/xml');
require('brace/mode/ruby');
require('brace/mode/sass');
require('brace/mode/markdown');
require('brace/mode/mysql');
require('brace/mode/json');
require('brace/mode/html');
require('brace/mode/handlebars');
require('brace/mode/golang');
require('brace/mode/csharp');
require('brace/mode/coffee');
require('brace/mode/css');



module.exports = React.createClass({
  propTypes: {
    mode  : React.PropTypes.string,
    theme : React.PropTypes.string,
    name : React.PropTypes.string,
    height : React.PropTypes.string,
    width : React.PropTypes.string,
    fontSize : React.PropTypes.number,
    showGutter : React.PropTypes.bool,
    onChange: React.PropTypes.func,
    value: React.PropTypes.string,
    onLoad: React.PropTypes.func,
    maxLines : React.PropTypes.number,
    readOnly : React.PropTypes.bool,
    highlightActiveLine : React.PropTypes.bool,
    showPrintMargin : React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      name   : 'brace-editor',
      mode   : 'javascript',
      theme  : 'monokai',
      height : '500px',
      width  : '500px',
      value  : '',
      fontSize   : 12,
      showGutter : true,
      onChange   : null,
      onLoad     : null,
      maxLines   : null,
      readOnly   : false,
      highlightActiveLine : true,
      showPrintMargin     : true
    };
  },
  onChange: function() {
    var value = this.editor.getValue();
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  },
  componentDidMount: function() {
    var self = this;
    this.editor = ace.edit(this.props.name);
    this.editor.getSession().setMode('ace/mode/'+this.props.mode);
    this.editor.setTheme('ace/theme/'+this.props.theme);
    this.editor.setFontSize(this.props.fontSize);
    this.editor.on('change', this.onChange);
    this.editor.setValue(this.props.value);
    this.editor.renderer.setShowGutter(this.props.showGutter);
    this.editor.setOption('maxLines', this.props.maxLines);
    this.editor.setOption('readOnly', this.props.readOnly);
    this.editor.setOption('highlightActiveLine', this.props.highlightActiveLine);
    this.editor.setShowPrintMargin(this.props.setShowPrintMargin);

    if (this.props.onLoad) {
      this.props.onLoad(this.editor);
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.editor = ace.edit(nextProps.name);
    this.editor.getSession().setMode('ace/mode/'+nextProps.mode);
    this.editor.setTheme('ace/theme/'+nextProps.theme);
    this.editor.setFontSize(nextProps.fontSize);
    this.editor.setOption('maxLines', nextProps.maxLines);
    this.editor.setOption('readOnly', nextProps.readOnly);
    this.editor.setOption('highlightActiveLine', nextProps.highlightActiveLine);
    this.editor.setShowPrintMargin(nextProps.setShowPrintMargin);
    if (this.editor.getValue() !== nextProps.value) {
      this.editor.setValue(nextProps.value);
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
    return (<div id={this.props.name} onChange={this.onChange} style={divStyle}></div>);
  }
});
