import React from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';
import brace from 'brace';

import 'brace/mode/java';
import 'brace/mode/javascript';

import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';
import 'brace/ext/language_tools';


function onLoad(editor) {
  console.log('i\'ve loaded');
}

function onChange(newValue) {
  console.log('change', newValue);
}

// Render first editor
render(
  <AceEditor
    mode="java"
    theme="github"
    name="blah1"
    height="6em"
    onChange={onChange}
  />,
  document.getElementById('example')
);

const defaultValue =
`function onLoad(editor) {
  console.log(\"i\'ve loaded\");
}`;

// Render second editor
render(
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

global.reloadProps = function() {
  render(
    <AceEditor
      mode="javascript"
      theme="solarized_light"
      name="blah2"
      fontSize={40}
      height="8em"
    />,
    document.getElementById('example2')
  );
};

// Render the third editor using setOptions prop

const defaultValue2 =
`function onLoad(editor) {
  if (true) {
    console.log(\"i\'ve loaded\");
  }
}`;

render(
  <AceEditor
    mode="javascript"
    theme="monokai"
    name="blah3"
    onLoad={onLoad}
    height="6em"
    setOptions={{
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      tabSize: 4,
      fontSize: 14,
      showGutter: true
    }}
    value={defaultValue2}
  />,
  document.getElementById('example3')
);

global.reloadProps2 = function() {
  render(
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="blah3"
      onLoad={onLoad}
      height="6em"
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        tabSize: 2,
        fontSize: 16,
        showGutter: false
      }}
      value={defaultValue2}
    />,
    document.getElementById('example3')
  );
};
