const editorOptions = [
  'minLines',
  'maxLines',
  'readOnly',
  'highlightActiveLine',
  'tabSize',
  'enableBasicAutocompletion',
  'enableLiveAutocompletion',
  'enableSnippets',
];

const editorEvents = [
  'onChange',
  'onFocus',
  'onInput',
  'onBlur',
  'onCopy',
  'onPaste',
  'onSelectionChange',
  'onCursorChange',
  'onScroll',
  'handleOptions',
  'updateRef',
]
const getAceInstance = ()=>{
  let ace;
  // Fallback for ace.require when vanilla ACE is hosted over a CDN
  if(window.ace) {
    ace = window.ace;
    ace.acequire = window.ace.require || window.ace.acequire;
  } else {
    ace = require('brace');
  }
  return ace;
}

const debounce = (fn, delay) => {
  var timer = null;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
};
export { editorOptions, editorEvents, debounce,getAceInstance };
