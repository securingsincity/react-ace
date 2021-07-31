import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { languages, themes } from "./constants";

languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});
themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

import * as React from "react";

export interface IReactAceProps {
  language: string;
  theme: string;
  readOnly?: boolean;
  value: string;
  setText?: (text: string) => void;
  fontSize: number | string;
  showPrintMargin?: boolean;
  showGutter?: boolean;
  highlightActiveLine?: boolean;
  enableBasicAutocompletion?: boolean;
  enableLiveAutocompletion?: boolean;
  enableSnippets?: boolean;
  showLineNumbers?: boolean;
}

export default function ReactAce(props: IReactAceProps) {
  return (
    <AceEditor
      mode={props.language}
      theme={props.theme}
      onChange={props.setText}
      readOnly={props.readOnly}
      value={props.value}
      name="UNIQUE_ID_OF_DIV"
      fontSize={props.fontSize}
      showGutter={props.showGutter}
      showPrintMargin={props.showPrintMargin}
      highlightActiveLine={props.highlightActiveLine}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        useWorker: false,
        enableBasicAutocompletion: props.enableBasicAutocompletion,
        enableLiveAutocompletion: props.enableLiveAutocompletion,
        enableSnippets: props.enableSnippets,
        showLineNumbers: props.showLineNumbers,
        tabSize: 2
      }}
    />
  );
}
