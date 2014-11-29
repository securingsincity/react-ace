var React = require('react');
var AceEditor  = require('../src/ace.js');


// render a first
React.render(
  <AceEditor mode="java" theme="github" name="blah1" height="6em"/>,
  document.getElementById('example')
);

//render a second 
React.render(
  <AceEditor mode="javascript" theme="monokai" name="blah2" height="6em"/>,
  document.getElementById('example2')
);