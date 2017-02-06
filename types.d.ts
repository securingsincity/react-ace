// Type definitions for react-ace 4.1.3
// Project: https://github.com/securingsincity/react-ace
// Definitions by: Alberto Nicoletti <https://github.com/illbexyz>

import { Component } from 'react'

export interface Annotation {
    row: number
    column: number
    type: string
    text: string
}

export interface Marker {
    startRow: number
    startCol: number
    endRow: number
    endCol: number
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

/**
 * See https://github.com/ajaxorg/ace/wiki/Configuring-Ace
 */
export interface AceOptions {
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

export interface EditorProps {
    $blockScrolling?: number
    $blockSelectEnabled?: boolean
    $enableBlockSelect?: boolean
    $enableMultiselect?: boolean
    $highlightPending?: boolean
    $highlightTagPending?: boolean
    $multiselectOnSessionChange?(): any
    $onAddRange?(): any
    $onChangeAnnotation?(): any
    $onChangeBackMarker?(): any
    $onChangeBreakpoint?(): any
    $onChangeFold?(): any
    $onChangeFrontMarker?(): any
    $onChangeMode?(): any
    $onChangeTabSize?(): any
    $onChangeWrapLimit?(): any
    $onChangeWrapMode?(): any
    $onCursorChange?(): any
    $onDocumentChange?(): any
    $onMultiSelect?(): any
    $onRemoveRange?(): any
    $onScrollLeftChange?(): any
    $onScrollTopChange?(): any
    $onSelectionChange?(): any
    $onSingleSelect?(): any
    $onTokenizerUpdate?(): any
}

export interface AceEditorProps {
    name?: string
    /** For available modes see https://github.com/thlorenz/brace/tree/master/mode */
    mode?: string
    /** For available themes see https://github.com/thlorenz/brace/tree/master/theme */
    theme?: string
    height?: string
    width?: string
    className?: string
    fontSize?: number
    showGutter?: boolean
    showPrintMargin?: boolean
    highlightActiveLine?: boolean
    focus?: boolean
    cursorStart?: number
    wrapEnabled?: boolean
    readOnly?: boolean
    minLines?: number
    maxLines?: number
    enableBasicAutocompletion?: boolean
    enableLiveAutocompletion?: boolean
    tabSize?: number
    value?: string
    defaultValue?: string
    onLoad?(): any
    onBeforeLoad?(): any
    onChange?(value: string): any
    onCopy?(value: string): any
    onPaste?(value: string): any
    onFocus?(): any
    onBlur?(): any
    onScroll?(): any
    editorProps?: EditorProps
    setOptions?: AceOptions
    keyboardHandler?: string
    commands?: Array<Command>
    annotations?: Array<Annotation>
    markers?: Array<Marker>
}

export default class AceEditor extends Component<AceEditorProps, undefined> {}