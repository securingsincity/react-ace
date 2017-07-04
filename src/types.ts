
export interface EditorProps {
    [index:string] : any
    $blockScrolling?: number
    $blockSelectEnabled?: boolean
    $enableBlockSelect?: boolean
    $enableMultiselect?: boolean
    $highlightPending?: boolean
    $highlightTagPending?: boolean
    $multiselectOnSessionChange?: (...args: any[]) => any
    $onAddRange?: (...args: any[]) => any
    $onChangeAnnotation?: (...args: any[]) => any
    $onChangeBackMarker?: (...args: any[]) => any
    $onChangeBreakpoint?: (...args: any[]) => any
    $onChangeFold?: (...args: any[]) => any
    $onChangeFrontMarker?: (...args: any[]) => any
    $onChangeMode?: (...args: any[]) => any
    $onChangeTabSize?: (...args: any[]) => any
    $onChangeWrapLimit?: (...args: any[]) => any
    $onChangeWrapMode?: (...args: any[]) => any
    $onCursorChange?: (...args: any[]) => any
    $onDocumentChange?: (...args: any[]) => any
    $onMultiSelect?: (...args: any[]) => any
    $onRemoveRange?: (...args: any[]) => any
    $onScrollLeftChange?: (...args: any[]) => any
    $onScrollTopChange?: (...args: any[]) => any
    $onSelectionChange?: (...args: any[]) => any
    $onSingleSelect?: (...args: any[]) => any
    $onTokenizerUpdate?: (...args: any[]) => any
}

export interface Marker {
    startRow: number
    startCol: number
    endRow: number
    endCol: number
    inFront: boolean
    className: string
    type: string
}

export interface CommandBindKey {
    win: string
    mac: string
}

export interface Command {
    name: string
    bindKey: CommandBindKey
    exec(): any
}
export interface AceOptions {
    [index:string] : any
    selectionStyle?: "line" | "text"
    highlightActiveLine?: boolean
    highlightSelectedWord?: boolean
    readOnly?: boolean
    cursorStyle?: "ace"|"slim"|"smooth"|"wide"
    mergeUndoDeltas?: false | true | "always"
    behavioursEnabled?: boolean
    wrapBehavioursEnabled?: boolean
    /** this is needed if editor is inside scrollable page */
    autoScrollEditorIntoView?: boolean
    hScrollBarAlwaysVisible?: boolean
    vScrollBarAlwaysVisible?: boolean
    highlightGutterLine?: boolean
    animatedScroll?: boolean
    showInvisibles?: boolean
    showPrintMargin?: boolean
    printMarginColumn?: boolean
    printMargin?: boolean
    fadeFoldWidgets?: boolean
    showFoldWidgets?: boolean
    showLineNumbers?: boolean
    showGutter?: boolean
    displayIndentGuides?: boolean
    /** number or css font-size string */
    fontSize?: number | string
    /** css */
    fontFamily?: string
    maxLines?: number
    minLines?: number
    scrollPastEnd?: boolean
    fixedWidthGutter?: boolean
    /** path to a theme e.g "ace/theme/textmate" */
    theme?: string
    scrollSpeed?: number
    dragDelay?:  number
    dragEnabled?: boolean
    focusTimout?: number
    tooltipFollowsMouse?: boolean
    firstLineNumber?: number
    overwrite?: boolean
    newLineMode?: boolean
    useWorker?: boolean
    useSoftTabs?: boolean
    tabSize?: number
    wrap?: boolean
    foldStyle?: boolean
    /** path to a mode e.g "ace/mode/text" */
    mode?: string
    /** on by default */
    enableMultiselect?: boolean
    enableEmmet?: boolean
    enableBasicAutocompletion?: boolean
    enableLiveAutocompletion?:  boolean
    enableSnippets?: boolean
    spellcheck?: boolean
    useElasticTabstops?: boolean
}