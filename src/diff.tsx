import * as PropTypes from "prop-types";
import * as React from "react";
import SplitEditor from "./split";
import DiffMatchPatch from "diff-match-patch";
import { IEditorProps } from "./types";

export interface IDiffEditorProps {
  cursorStart?: number;
  editorProps?: object;
  enableBasicAutocompletion?: boolean | string[];
  enableLiveAutocompletion?: boolean | string[];
  focus?: boolean;
  fontSize?: number;
  height?: string;
  highlightActiveLine?: boolean;
  maxLines?: number;
  minLines?: number;
  mode?: string;
  name?: string;
  className?: string;
  onLoad?: (editor: IEditorProps) => void;
  onChange?: (value: string[], event?: any) => void;
  onPaste?: (value: string) => void;
  onScroll?: (editor: IEditorProps) => void;
  orientation?: string;
  readOnly?: boolean;
  scrollMargin?: number[];
  setOptions?: object;
  showGutter?: boolean;
  showPrintMargin?: boolean;
  splits?: number;
  style?: object;
  tabSize?: number;
  theme?: string;
  value?: string[];
  width?: string;
  wrapEnabled?: boolean;
}

export interface IDiffEditorState {
  value: string[];
}

export default class DiffComponent extends React.Component<
  IDiffEditorProps,
  IDiffEditorState
> {
  public static propTypes: PropTypes.ValidationMap<IDiffEditorProps> = {
    cursorStart: PropTypes.number,
    editorProps: PropTypes.object,
    enableBasicAutocompletion: PropTypes.bool,
    enableLiveAutocompletion: PropTypes.bool,
    focus: PropTypes.bool,
    fontSize: PropTypes.number,
    height: PropTypes.string,
    highlightActiveLine: PropTypes.bool,
    maxLines: PropTypes.number,
    minLines: PropTypes.number,
    mode: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    onLoad: PropTypes.func,
    onPaste: PropTypes.func,
    onScroll: PropTypes.func,
    onChange: PropTypes.func,
    orientation: PropTypes.string,
    readOnly: PropTypes.bool,
    scrollMargin: PropTypes.array,
    setOptions: PropTypes.object,
    showGutter: PropTypes.bool,
    showPrintMargin: PropTypes.bool,
    splits: PropTypes.number,
    style: PropTypes.object,
    tabSize: PropTypes.number,
    theme: PropTypes.string,
    value: PropTypes.array,
    width: PropTypes.string,
    wrapEnabled: PropTypes.bool
  };

  public static defaultProps: Partial<IDiffEditorProps> = {
    cursorStart: 1,
    editorProps: {},
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    focus: false,
    fontSize: 12,
    height: "500px",
    highlightActiveLine: true,
    maxLines: null,
    minLines: null,
    mode: "",
    name: "ace-editor",
    onLoad: null,
    onScroll: null,
    onPaste: null,
    onChange: null,
    orientation: "beside",
    readOnly: false,
    scrollMargin: [0, 0, 0, 0],
    setOptions: {},
    showGutter: true,
    showPrintMargin: true,
    splits: 2,
    style: {},
    tabSize: 4,
    theme: "github",
    value: ["", ""],
    width: "500px",
    wrapEnabled: true
  };
  constructor(props: IDiffEditorProps) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.onChange = this.onChange.bind(this);
    this.diff = this.diff.bind(this);
  }

  public componentDidUpdate() {
    const { value } = this.props;

    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  public onChange(value: any) {
    this.setState({
      value
    });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  public diff() {
    const dmp = new DiffMatchPatch();
    const lhString = this.state.value[0];
    const rhString = this.state.value[1];

    if (lhString.length === 0 && rhString.length === 0) {
      return [];
    }

    const diff = dmp.diff_main(lhString, rhString);
    dmp.diff_cleanupSemantic(diff);

    const diffedLines = this.generateDiffedLines(diff);
    const codeEditorSettings = this.setCodeMarkers(diffedLines);
    return codeEditorSettings;
  }

  public generateDiffedLines(diff: any) {
    const C = {
      DIFF_EQUAL: 0,
      DIFF_DELETE: -1,
      DIFF_INSERT: 1
    };

    const diffedLines = {
      left: [] as any[],
      right: [] as any[]
    };

    const cursor = {
      left: 1,
      right: 1
    };

    diff.forEach((chunk: any) => {
      const chunkType = chunk[0];
      const text = chunk[1];
      let lines = text.split("\n").length - 1;

      // diff-match-patch sometimes returns empty strings at random
      if (text.length === 0) {
        return;
      }

      const firstChar = text[0];
      const lastChar = text[text.length - 1];
      let linesToHighlight = 0;

      switch (chunkType) {
        case C.DIFF_EQUAL:
          cursor.left += lines;
          cursor.right += lines;

          break;
        case C.DIFF_DELETE:
          // If the deletion starts with a newline, push the cursor down to that line
          if (firstChar === "\n") {
            cursor.left++;
            lines--;
          }

          linesToHighlight = lines;

          // If the deletion does not include a newline, highlight the same line on the right
          if (linesToHighlight === 0) {
            diffedLines.right.push({
              startLine: cursor.right,
              endLine: cursor.right
            });
          }

          // If the last character is a newline, we don't want to highlight that line
          if (lastChar === "\n") {
            linesToHighlight -= 1;
          }

          diffedLines.left.push({
            startLine: cursor.left,
            endLine: cursor.left + linesToHighlight
          });

          cursor.left += lines;
          break;
        case C.DIFF_INSERT:
          // If the insertion starts with a newline, push the cursor down to that line
          if (firstChar === "\n") {
            cursor.right++;
            lines--;
          }

          linesToHighlight = lines;

          // If the insertion does not include a newline, highlight the same line on the left
          if (linesToHighlight === 0) {
            diffedLines.left.push({
              startLine: cursor.left,
              endLine: cursor.left
            });
          }

          // If the last character is a newline, we don't want to highlight that line
          if (lastChar === "\n") {
            linesToHighlight -= 1;
          }

          diffedLines.right.push({
            startLine: cursor.right,
            endLine: cursor.right + linesToHighlight
          });

          cursor.right += lines;
          break;
        default:
          throw new Error("Diff type was not defined.");
      }
    });
    return diffedLines;
  }

  // Receives a collection of line numbers and iterates through them to highlight appropriately
  // Returns an object that tells the render() method how to display the code editors
  public setCodeMarkers(diffedLines: any = { left: [], right: [] }) {
    const codeEditorSettings = [];

    const newMarkerSet = {
      left: [] as any[],
      right: [] as any[]
    };

    for (let i = 0; i < diffedLines.left.length; i++) {
      const markerObj = {
        startRow: diffedLines.left[i].startLine - 1,
        endRow: diffedLines.left[i].endLine,
        type: "text",
        className: "codeMarker"
      };
      newMarkerSet.left.push(markerObj);
    }

    for (let i = 0; i < diffedLines.right.length; i++) {
      const markerObj = {
        startRow: diffedLines.right[i].startLine - 1,
        endRow: diffedLines.right[i].endLine,
        type: "text",
        className: "codeMarker"
      };
      newMarkerSet.right.push(markerObj);
    }

    codeEditorSettings[0] = newMarkerSet.left;
    codeEditorSettings[1] = newMarkerSet.right;

    return codeEditorSettings;
  }

  public render() {
    const markers = this.diff();
    return (
      <SplitEditor
        name={this.props.name}
        className={this.props.className}
        focus={this.props.focus}
        orientation={this.props.orientation}
        splits={this.props.splits}
        mode={this.props.mode}
        theme={this.props.theme}
        height={this.props.height}
        width={this.props.width}
        fontSize={this.props.fontSize}
        showGutter={this.props.showGutter}
        onChange={this.onChange}
        onPaste={this.props.onPaste}
        onLoad={this.props.onLoad}
        onScroll={this.props.onScroll}
        minLines={this.props.minLines}
        maxLines={this.props.maxLines}
        readOnly={this.props.readOnly}
        highlightActiveLine={this.props.highlightActiveLine}
        showPrintMargin={this.props.showPrintMargin}
        tabSize={this.props.tabSize}
        cursorStart={this.props.cursorStart}
        editorProps={this.props.editorProps}
        style={this.props.style}
        scrollMargin={this.props.scrollMargin}
        setOptions={this.props.setOptions}
        wrapEnabled={this.props.wrapEnabled}
        enableBasicAutocompletion={this.props.enableBasicAutocompletion}
        enableLiveAutocompletion={this.props.enableLiveAutocompletion}
        value={this.state.value}
        markers={markers}
      />
    );
  }
}
