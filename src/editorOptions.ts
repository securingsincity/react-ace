type EditorOption =
  | "minLines"
  | "maxLines"
  | "readOnly"
  | "highlightActiveLine"
  | "tabSize"
  | "enableBasicAutocompletion"
  | "enableLiveAutocompletion"
  | "enableSnippets";

const editorOptions: EditorOption[] = [
  "minLines",
  "maxLines",
  "readOnly",
  "highlightActiveLine",
  "tabSize",
  "enableBasicAutocompletion",
  "enableLiveAutocompletion",
  "enableSnippets"
];

type EditorEvent =
  | "onChange"
  | "onFocus"
  | "onInput"
  | "onBlur"
  | "onCopy"
  | "onPaste"
  | "onSelectionChange"
  | "onCursorChange"
  | "onScroll"
  | "handleOptions"
  | "updateRef";

const editorEvents: EditorEvent[] = [
  "onChange",
  "onFocus",
  "onInput",
  "onBlur",
  "onCopy",
  "onPaste",
  "onSelectionChange",
  "onCursorChange",
  "onScroll",
  "handleOptions",
  "updateRef"
];
const getAceInstance = () => {
  let ace;
  // Fallback for ace.require when vanilla ACE is hosted over a CDN
  if ((window as any).ace) {
    ace = (window as any).ace;
    ace.acequire = (window as any).ace.require || (window as any).ace.acequire;
  } else {
    ace = require("ace-builds");
  }
  return ace;
};

const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timer: any = null;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
export { editorOptions, editorEvents, debounce, getAceInstance };
