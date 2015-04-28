var React = require('react');
var AceEditor  = require('../src/ace.jsx');

var brace = require("brace");
require('brace/mode/java')
require('brace/mode/javascript')

require('brace/theme/github')
require('brace/theme/monokai')
require('brace/theme/solarized_light')

function onLoad(editor) {
  console.log('i\'ve loaded');
}

function onChange(newValue) {
  console.log('change',newValue)
}

// render a first
React.render(
  <AceEditor
    mode="java"
    theme="github"
    name="blah1"
    height="6em"
    onChange={onChange}
    />,
  document.getElementById('example')
);



var defaultValue = "function onLoad(editor) { \n  console.log(\"i've loaded\");\n}";
//render a second
React.render(
  <AceEditor
    mode="javascript"
    theme="monokai"
    name="blah2"
    onLoad={onLoad}
    fontSize={14}
    height="6em"
    value={defaultValue}
  />,
  document.getElementById('example2')
);

global.reloadProps = function () {
  React.render(
  <AceEditor mode="javascript" theme="solarized_light" name="blah2" fontSize={40} height="8em"/>,
  document.getElementById('example2')
);
}
