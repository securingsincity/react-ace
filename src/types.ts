export interface ICommandManager {
  byName: any;
  commands: any;
  platform: string;
  addCommands(commands: any[]): void;
  addCommand(command: any): void;
  exec(name: string, editor: any, args: any): void;
  bindKey?(bindKey: any, command: any): void;
}
export interface IEditorProps {
  [index: string]: any;
  $blockScrolling?: number | boolean;
  $blockSelectEnabled?: boolean;
  $enableBlockSelect?: boolean;
  $enableMultiselect?: boolean;
  $highlightPending?: boolean;
  $highlightTagPending?: boolean;
  $multiselectOnSessionChange?: (...args: any[]) => any;
  $onAddRange?: (...args: any[]) => any;
  $onChangeAnnotation?: (...args: any[]) => any;
  $onChangeBackMarker?: (...args: any[]) => any;
  $onChangeBreakpoint?: (...args: any[]) => any;
  $onChangeFold?: (...args: any[]) => any;
  $onChangeFrontMarker?: (...args: any[]) => any;
  $onChangeMode?: (...args: any[]) => any;
  $onChangeTabSize?: (...args: any[]) => any;
  $onChangeWrapLimit?: (...args: any[]) => any;
  $onChangeWrapMode?: (...args: any[]) => any;
  $onCursorChange?: (...args: any[]) => any;
  $onDocumentChange?: (...args: any[]) => any;
  $onMultiSelect?: (...args: any[]) => any;
  $onRemoveRange?: (...args: any[]) => any;
  $onScrollLeftChange?: (...args: any[]) => any;
  $onScrollTopChange?: (...args: any[]) => any;
  $onSelectionChange?: (...args: any[]) => any;
  $onSingleSelect?: (...args: any[]) => any;
  $onTokenizerUpdate?: (...args: any[]) => any;
}

export interface IMarker {
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;
  className: string;
  type: string;
  inFront?: boolean;
}

export interface ICommandBindKey {
  win: string;
  mac: string;
}

export interface ICommand {
  name: string;
  bindKey: ICommandBindKey;
  exec(): any;
}
export interface IAceOptions {
  [index: string]: any;
  selectionStyle?: "line" | "text";
  highlightActiveLine?: boolean;
  highlightSelectedWord?: boolean;
  readOnly?: boolean;
  cursorStyle?: "ace" | "slim" | "smooth" | "wide";
  mergeUndoDeltas?: false | true | "always";
  behavioursEnabled?: boolean;
  wrapBehavioursEnabled?: boolean;
  /** this is needed if editor is inside scrollable page */
  autoScrollEditorIntoView?: boolean;
  hScrollBarAlwaysVisible?: boolean;
  vScrollBarAlwaysVisible?: boolean;
  highlightGutterLine?: boolean;
  animatedScroll?: boolean;
  showInvisibles?: boolean;
  showPrintMargin?: boolean;
  printMarginColumn?: boolean;
  printMargin?: boolean;
  fadeFoldWidgets?: boolean;
  showFoldWidgets?: boolean;
  showLineNumbers?: boolean;
  showGutter?: boolean;
  displayIndentGuides?: boolean;
  /** number or css font-size string */
  fontSize?: number | string;
  /** css */
  fontFamily?: string;
  maxLines?: number;
  minLines?: number;
  scrollPastEnd?: boolean;
  fixedWidthGutter?: boolean;
  /** path to a theme e.g "ace/theme/textmate" */
  theme?: string;
  scrollSpeed?: number;
  dragDelay?: number;
  dragEnabled?: boolean;
  focusTimout?: number;
  tooltipFollowsMouse?: boolean;
  firstLineNumber?: number;
  overwrite?: boolean;
  newLineMode?: boolean;
  useWorker?: boolean;
  useSoftTabs?: boolean;
  tabSize?: number;
  wrap?: boolean;
  foldStyle?: boolean;
  /** path to a mode e.g "ace/mode/text" */
  mode?: string;
  /** on by default */
  enableMultiselect?: boolean;
  enableEmmet?: boolean;
  enableBasicAutocompletion?: boolean;
  enableLiveAutocompletion?: boolean;
  enableSnippets?: boolean;
  spellcheck?: boolean;
  useElasticTabstops?: boolean;
}

export interface IAnnotation {
  row: number;
  column: number;
  text: string;
  type: string;
}
