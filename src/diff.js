import SplitEditor from './split.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DiffMatchPatch from 'diff-match-patch';

export default class DiffComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.onChange = this.onChange.bind(this);
    this.diff = this.diff.bind(this);
  }

  componentDidUpdate() {
    const { value } = this.props;

    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  onChange(value) {
    this.setState({
      value: value,
    });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  diff() {
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

  generateDiffedLines(diff) {
    const C = {
      DIFF_EQUAL: 0,
      DIFF_DELETE: -1,
      DIFF_INSERT: 1,
    };

    const diffedLines = {
      left: [],
      right: [],
    };

    const cursor = {
      left: 1,
      right: 1,
    };

    diff.forEach(chunk => {
      const chunkType = chunk[0];
      const text = chunk[1];
      let lines = text.split('\n').length - 1;

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
          if (firstChar === '\n') {
            cursor.left++;
            lines--;
          }

          linesToHighlight = lines;

          // If the deletion does not include a newline, highlight the same line on the right
          if (linesToHighlight === 0) {
            diffedLines.right.push({
              startLine: cursor.right,
              endLine: cursor.right,
            });
          }

          // If the last character is a newline, we don't want to highlight that line
          if (lastChar === '\n') {
            linesToHighlight -= 1;
          }

          diffedLines.left.push({
            startLine: cursor.left,
            endLine: cursor.left + linesToHighlight,
          });

          cursor.left += lines;
          break;
        case C.DIFF_INSERT:
          // If the insertion starts with a newline, push the cursor down to that line
          if (firstChar === '\n') {
            cursor.right++;
            lines--;
          }

          linesToHighlight = lines;

          // If the insertion does not include a newline, highlight the same line on the left
          if (linesToHighlight === 0) {
            diffedLines.left.push({
              startLine: cursor.left,
              endLine: cursor.left,
            });
          }

          // If the last character is a newline, we don't want to highlight that line
          if (lastChar === '\n') {
            linesToHighlight -= 1;
          }

          diffedLines.right.push({
            startLine: cursor.right,
            endLine: cursor.right + linesToHighlight,
          });

          cursor.right += lines;
          break;
        default:
          throw new Error('Diff type was not defined.');
      }
    });
    return diffedLines;
  }

  // Receives a collection of line numbers and iterates through them to highlight appropriately
  // Returns an object that tells the render() method how to display the code editors
  setCodeMarkers(diffedLines = { left: [], right: [] }) {
    const codeEditorSettings = [];

    const newMarkerSet = {
      left: [],
      right: [],
    };

    for (let i = 0; i < diffedLines.left.length; i++) {
      let markerObj = {
        startRow: diffedLines.left[i].startLine - 1,
        endRow: diffedLines.left[i].endLine,
        type: 'text',
        className: 'codeMarker',
      };
      newMarkerSet.left.push(markerObj);
    }

    for (let i = 0; i < diffedLines.right.length; i++) {
      let markerObj = {
        startRow: diffedLines.right[i].startLine - 1,
        endRow: diffedLines.right[i].endLine,
        type: 'text',
        className: 'codeMarker',
      };
      newMarkerSet.right.push(markerObj);
    }

    codeEditorSettings[0] = newMarkerSet.left;
    codeEditorSettings[1] = newMarkerSet.right;

    return codeEditorSettings;
  }

  render() {
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

DiffComponent.propTypes = {
  cursorStart: PropTypes.number,
  editorProps: PropTypes.object,
  enableBasicAutocompletion: PropTypes.bool,
  enableLiveAutocompletion: PropTypes.bool,
  focus: PropTypes.bool,
  fontSize: PropTypes.number,
  height: PropTypes.string,
  highlightActiveLine: PropTypes.bool,
  maxLines: PropTypes.func,
  minLines: PropTypes.func,
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
  wrapEnabled: PropTypes.bool,
};

DiffComponent.defaultProps = {
  cursorStart: 1,
  editorProps: {},
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  focus: false,
  fontSize: 12,
  height: '500px',
  highlightActiveLine: true,
  maxLines: null,
  minLines: null,
  mode: '',
  name: 'brace-editor',
  onLoad: null,
  onScroll: null,
  onPaste: null,
  onChange: null,
  orientation: 'beside',
  readOnly: false,
  scrollMargin: [0, 0, 0, 0],
  setOptions: {},
  showGutter: true,
  showPrintMargin: true,
  splits: 2,
  style: {},
  tabSize: 4,
  theme: 'github',
  value: ['', ''],
  width: '500px',
  wrapEnabled: true,
};
