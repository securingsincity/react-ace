import type * as AceBuilds from "ace-builds";
import aceBuilds from "ace-builds";

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

const getAceInstance = (): typeof AceBuilds => {
  if (typeof window !== "undefined" && (window as any).ace) {
    // Fallback for ace.require when vanilla ACE is hosted over a CDN
    const ace = (window as any).ace;
    ace.acequire = ace.require || ace.acequire;
    return ace;
  }
  // ace-builds evaluates without a window object during SSR.
  return aceBuilds;
};

const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timer: any = null;
  return function () {
    const context = this; // oxlint-disable-line
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
export { editorOptions, editorEvents, debounce, getAceInstance };
