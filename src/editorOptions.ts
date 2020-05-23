import * as AceBuilds from "ace-builds";

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

// Typescript globals definition to allow us to create a window object during SSR.
declare global {
  namespace NodeJS {
    // tslint:disable-next-line
    interface Global {
      window: any;
    }
  }
}
const getAceInstance = (): typeof AceBuilds => {
  let ace;
  if (typeof window === "undefined") {
    // ace-builds just needs some window object to attach ace to.
    // During SSR even just an empty object will work.
    global.window = {};
    ace = require("ace-builds");
    // And it can be discarded immediately afterward to avoid confusing
    // other libraries that might detect SSR the same way we did.
    delete global.window;
  } else if ((window as any).ace) {
    // Fallback for ace.require when vanilla ACE is hosted over a CDN
    ace = (window as any).ace;
    ace.acequire = (window as any).ace.require || (window as any).ace.acequire;
  } else {
    ace = require("ace-builds");
  }
  return ace;
};

const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timer: any = null;
  // tslint:disable-next-line
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
export { editorOptions, editorEvents, debounce, getAceInstance };
