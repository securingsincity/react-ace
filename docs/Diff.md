# Diff Editor

The diff editor is contained in a Split editor and will highlight differences between the two editor boxes.

## Demo

## Example Code

```import React, { Component } from 'react';
   import { render } from 'react-dom';
   import { diff as DiffEditor } from 'react-ace';

   import 'brace/theme/github'; // this is needed as the default theme

   render(
       <DiffEditor
       value={['Test code differences', 'Test code difference']}
       height="1000px"
       width="1000px"
       mode="text"
     />
   );
   ```

Also see the [diff](../example/diff.js) [example](../example/diff.html) in the example folder for more robust sample code (seen in the [demo](http://securingsincity.github.io/react-ace/diff.html)).

   ## Available Props

   |Prop|Default|Type|Description|
   |-----|------|----|-----------|
   |cursorStart| 1| Number| the location of the cursor
   |editorProps| | Object | properties to apply directly to the Ace editor instance|
   |enableBasicAutocompletion| false| Boolean | Enable basic autocompletion|
   |enableLiveAutocompletion| false| Boolean | Enable live autocompletion|
   |focus|false|Boolean|Whether to focus|
   |fontSize| 12| Number |pixel value for font-size|
   |height| '500px'| String |CSS value for height|
   |highlightActiveLine| true| Boolean| highlight active line|
   |maxLines| | Number |Maximum number of lines to be displayed|
   |minLines| | Number |Minimum number of lines to be displayed|
   |mode|''|String|The language to be used for the editor (Java, Javascript, Ruby, etc.)|
   |name|'brace-editor'|string|Unique ID to be used for the split editor|
   |onLoad| | Function | called on editor load. The first argument is the instance of the editor |
   |onScroll| | Function | triggered by editor `scroll` event|
   |onChange| | Function | occurs on document change it has one argument the values array|
   |onPaste| | Function | Triggered by editor `paste` event, and passes text as argument|
   |orientation|'beside'|String|The orientation of splits either 'beside' or 'below'|
   |readOnly| false| Boolean| make the editor read only |
   |scrollMargin|[0, 0, 0, 0]|Array of Numbers|Sets the scroll margins|
   |setOptions| | Object | [options](https://github.com/ajaxorg/ace/wiki/Configuring-Ace) to apply directly to the Ace editor instance|
   |showGutter| true| Boolean | show gutter |
   |showPrintMargin| true| Boolean| show print margin |
   |style| | Object  | camelCased properties |
   |tabSize|4|Number|Number of spaces to include as tab|
   |theme|'github'|String|Theme to use|
   |value|['','']|Array of Strings|Index 0: Value of first editor. Index 1: Value of second editor|
   |width| '500px'| String |CSS value for width|
   |wrapEnabled|true|Boolean|Whether lines wrap on the editor

