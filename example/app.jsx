import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AceEditor from "../src/ace";
import "ace-builds/esm-resolver";
import "ace-builds/src-noconflict/mode-jsx";
const languages = [
  "javascript",
  "java",
  "python",
  "xml",
  "ruby",
  "sass",
  "markdown",
  "mysql",
  "json",
  "html",
  "handlebars",
  "golang",
  "csharp",
  "elixir",
  "typescript",
  "css"
];

const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
  "terminal"
];

// Language imports

// Snippet imports

// Theme imports
/*eslint-disable no-alert, no-console */
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-elixir";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/xml";
import "ace-builds/src-noconflict/snippets/ruby";
import "ace-builds/src-noconflict/snippets/sass";
import "ace-builds/src-noconflict/snippets/markdown";
import "ace-builds/src-noconflict/snippets/mysql";
import "ace-builds/src-noconflict/snippets/json";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/handlebars";
import "ace-builds/src-noconflict/snippets/golang";
import "ace-builds/src-noconflict/snippets/csharp";
import "ace-builds/src-noconflict/snippets/elixir";
import "ace-builds/src-noconflict/snippets/typescript";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";

const defaultValue = `function onLoad(editor) {
  console.log("i've loaded");
}`;
export default class App extends Component {
  onLoad() {
    console.log("i've loaded");
  }
  onChange(newValue) {
    console.log("change", newValue);
    this.setState({
      value: newValue
    });
  }

  onSelectionChange(newValue, event) {
    console.log("select-change", newValue);
    console.log("select-change-event", event);
  }

  onCursorChange(newValue, event) {
    console.log("cursor-change", newValue);
    console.log("cursor-change-event", event);
  }

  onValidate(annotations) {
    console.log("onValidate", annotations);
  }

  setPlaceholder(e) {
    this.setState({
      placeholder: e.target.value
    });
  }
  setTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }
  setMode(e) {
    this.setState({
      mode: e.target.value
    });
  }
  setBoolean(name, value) {
    this.setState({
      [name]: value
    });
  }
  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value, 10)
    });
  }
  setLineHeight(e) {
    this.setState({
      lineHeight: parseInt(e.target.value, 10)
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      placeholder: "Placeholder Text",
      theme: "monokai",
      mode: "javascript",
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 14,
      lineHeight: 19,
      showGutter: true,
      enableMobileMenu: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true
    };
    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setMode = this.setMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    (this.setLineHeight = this.setLineHeight.bind(this)),
      (this.setBoolean = this.setBoolean.bind(this));
  }
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="field">
            <label>Mode:</label>
            <p className="control">
              <span className="select">
                <select
                  name="mode"
                  onChange={this.setMode}
                  value={this.state.mode}
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Theme:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Theme"
                  onChange={this.setTheme}
                  value={this.state.theme}
                >
                  {themes.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Font Size:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Font Size"
                  onChange={this.setFontSize}
                  value={this.state.fontSize}
                >
                  {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Line Height:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Line Height"
                  onChange={this.setLineHeight}
                  value={this.state.lineHeight}
                >
                  {[19, 24, 28, 32, 40].map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Placeholder:</label>
            <p className="control">
              <input
                className="input"
                type="text"
                onChange={this.setPlaceholder}
                value={this.state.placeholder}
              />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableBasicAutocompletion}
                  onChange={e =>
                    this.setBoolean(
                      "enableBasicAutocompletion",
                      e.target.checked
                    )
                  }
                />
                Enable Basic Autocomplete
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableLiveAutocompletion}
                  onChange={e =>
                    this.setBoolean(
                      "enableLiveAutocompletion",
                      e.target.checked
                    )
                  }
                />
                Enable Live Autocomplete
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableMobileMenu}
                  onChange={e => {
                    this.setBoolean("enableMobileMenu", e.target.checked);
                  }}
                />
                Enable Mobile Menue
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showGutter}
                  onChange={e =>
                    this.setBoolean("showGutter", e.target.checked)
                  }
                />
                Show Gutter
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showPrintMargin}
                  onChange={e =>
                    this.setBoolean("showPrintMargin", e.target.checked)
                  }
                />
                Show Print Margin
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.highlightActiveLine}
                  onChange={e =>
                    this.setBoolean("highlightActiveLine", e.target.checked)
                  }
                />
                Highlight Active Line
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableSnippets}
                  onChange={e =>
                    this.setBoolean("enableSnippets", e.target.checked)
                  }
                />
                Enable Snippets
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showLineNumbers}
                  onChange={e =>
                    this.setBoolean("showLineNumbers", e.target.checked)
                  }
                />
                Show Line Numbers
              </label>
            </p>
          </div>
        </div>
        <div className="examples column">
          <h2>Editor</h2>
          <AceEditor
            placeholder={this.state.placeholder}
            mode={this.state.mode}
            theme={this.state.theme}
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            onSelectionChange={this.onSelectionChange}
            onCursorChange={this.onCursorChange}
            onValidate={this.onValidate}
            value={this.state.value}
            lineHeight={this.state.lineHeight}
            fontSize={this.state.fontSize}
            showPrintMargin={this.state.showPrintMargin}
            showGutter={this.state.showGutter}
            highlightActiveLine={this.state.highlightActiveLine}
            setOptions={{
              useWorker: false,
              enableBasicAutocompletion: this.state.enableBasicAutocompletion,
              enableMobileMenu: this.state.enableMobileMenu,
              enableLiveAutocompletion: this.state.enableLiveAutocompletion,
              enableSnippets: this.state.enableSnippets,
              showLineNumbers: this.state.showLineNumbers,
              tabSize: 2
            }}
          />
        </div>
        <div className="column">
          <h2>Code</h2>
          <AceEditor
            mode="jsx"
            theme="monokai"
            readOnly={true}
            value={`<AceEditor
  placeholder="${this.state.placeholder}"
  mode="${this.state.mode}"
  theme="${this.state.theme}"
  name="blah2"
  onLoad={this.onLoad}
  onChange={this.onChange}
  fontSize={${this.state.fontSize}}
  lineHeight={${this.state.lineHeight}}
  showPrintMargin={${this.state.showPrintMargin}}
  showGutter={${this.state.showGutter}}
  highlightActiveLine={${this.state.highlightActiveLine}}
  value={\`${this.state.value}\`}
  setOptions={{
  enableBasicAutocompletion: ${this.state.enableBasicAutocompletion},
  enableLiveAutocompletion: ${this.state.enableLiveAutocompletion},
  enableSnippets: ${this.state.enableSnippets},
  enableMobileMenu: ${this.state.enableMobileMenu},
  showLineNumbers: ${this.state.showLineNumbers},
  tabSize: 2,
  }}/>
            `}
          />
        </div>
      </div>
    );
  }
}
