import SplitEditor from './split.js';
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DiffMatchPatch from 'diff-match-patch';

export default class DiffComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: this.props.value,
    };
    this.onChange = this.onChange.bind(this);
    this.diff = this.diff.bind(this);
  }

  onChange(value) {
    this.setState({
      value: value
    });
  }

  diff() {
    const C = {
      DIFF_EQUAL: 0,
      DIFF_DELETE: -1,
      DIFF_INSERT: 1,
    };


    const dmp = new DiffMatchPatch();
    const lhstring = this.state.value[0];
    const rhstring = this.state.value[1];

    if (lhstring.length === 0 && rhstring.length === 0) {
      return [];
    }

    const diff = dmp.diff_main(lhstring, rhstring);
    dmp.diff_cleanupSemantic(diff);

    const diffedLines = {
      left: [],
      right: [],
    };

    const cursor = {
      left: 1,
      right: 1,
    };

    diff.forEach((chunk) => {
      const chunkType = chunk[0];
      const text = chunk[1];
      const lines = text.split('\n').length - 1;

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
        linesToHighlight = lines;

        // If the last character is a newline, we don't want to highlight that line
        if (lastChar === '\n') {
          linesToHighlight -= 1;
        }

        // If the deletion starts with a newline, push the cursor down to that line
        if (firstChar === '\n') {
          cursor.left++;
        }

        // console.log('Diff Delete:', chunk);
        diffedLines.left.push({
          startLine: cursor.left,
          endLine: cursor.left + linesToHighlight,
        });

        // If the deletion does not include a newline, highlight the same line on the right
        if (linesToHighlight === 0) {
          diffedLines.right.push({
            startLine: cursor.right,
            endLine: cursor.right,
          });
        }

        cursor.left += lines;
        break;

      case C.DIFF_INSERT:
        linesToHighlight = lines;

        // If the last character is a newline, we don't want to highlight that line
        if (lastChar === '\n') {
          linesToHighlight -= 1;
        }

        // If the insertion starts with a newline, push the cursor down to the next line
        if (firstChar === '\n') {
          cursor.right++;
        }

        diffedLines.right.push({
          startLine: cursor.right,
          endLine: cursor.right + linesToHighlight,
        });

        // If the insertion does not include a newline, highlight the same line on the left
        if (linesToHighlight === 0) {
          diffedLines.left.push({
            startLine: cursor.left,
            endLine: cursor.left,
          });
        }

        cursor.right += lines;
        break;
      default:
        throw new Error('Diff type was not defined.');
      }
    });

    const codeEditorSettings = this.setCodeMarkers(diffedLines);
    return codeEditorSettings;
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
      // <SplitEditor
      //   onChange={this.onChange}
      //   defaultValue={this.props.defaultValue}
      //   value={this.state.value}
      //   height={this.props.height}
      //   width={this.props.width}
      //   mode={this.props.mode}
      //   wrapEnabled={true}
      //   markers={markers}
      // />
    );
  }
}

DiffComponent.propTypes = {
  name: PropTypes.string,
  focus: PropTypes.bool,
  orientation: PropTypes.string,
  splits: PropTypes.number,
  mode: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.array,
  fontSize: PropTypes.number,
  showGutter: PropTypes.bool,
  onPaste: PropTypes.func,
  onLoad: PropTypes.func,
  onScroll: PropTypes.func,
  minLines: PropTypes.func,
  maxLines: PropTypes.func,
  readOnly: PropTypes.bool,
  highlightActiveLine: PropTypes.bool,
  showPrintMargin: PropTypes.bool,
  tabSize: PropTypes.number,
  cursorStart: PropTypes.number,
  editorProps: PropTypes.object,
  style: PropTypes.object,
  scrollMargin: PropTypes.array,
  setOptions: PropTypes.object,
  wrapEnabled: PropTypes.bool,
  enableBasicAutocompletion: PropTypes.bool,
  enableLiveAutocompletion: PropTypes.bool,
}

DiffComponent.defaultProps = {
  name: 'brace-editor',
  focus: false,
  orientation: 'beside',
  splits: 2,
  mode: '',
  theme: 'github',
  height: '500px',
  width: '500px',
  value: [],
  fontSize: 12,
  showGutter: true,
  onPaste: null,
  onLoad: null,
  onScroll: null,
  minLines: null,
  maxLines: null,
  readOnly: false,
  highlightActiveLine: true,
  showPrintMargin: true,
  tabSize: 4,
  cursorStart: 1,
  editorProps: {},
  style: {},
  scrollMargin: [ 0, 0, 0, 0],
  setOptions: {},
  wrapEnabled: true,
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
}
