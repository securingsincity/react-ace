var ace = require('brace');
var React = require('react');
require('brace/theme/monokai');
require('brace/theme/github');
require('brace/theme/tomorrow');
require('brace/theme/kuroir');
require('brace/theme/twilight');
require('brace/theme/xcode');
require('brace/theme/textmate');


//include as many of the libraries
require('brace/mode/javascript');
require('brace/mode/java');
require('brace/mode/php');



module.exports = React.createClass({
  propTypes: {
    mode  : React.PropTypes.string,
    theme : React.PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      name   : 'brace-editor',
      mode   : 'javascript',
      theme  : 'monokai',
      height : '500px',
      width  : '500px'
    };
  },
  componentDidMount: function() {
    var editor = ace.edit(this.props.name);
    editor.getSession().setMode('ace/mode/'+this.props.mode);
    editor.setTheme('ace/theme/'+this.props.theme);
  },
  render: function() {
    var divStyle = {
      width: this.props.width, 
      height: this.props.height
    };
    return (<div id={this.props.name} style={divStyle}></div>);
  }
});
