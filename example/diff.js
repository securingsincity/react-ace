import React, { Component } from "react";
import { render } from "react-dom";
import { diff as DiffEditor } from "../src/index.js";

import "brace/mode/jsx";
import "brace/ext/searchbox";

const defaultValue = [
  `// Use this tool to display differences in code.
// Deletions will be highlighted on the left, insertions highlighted on the right.`,
  `// Use this too to show difference in code.
// Deletions will be highlighted on the left, insertions highlighted on the right.
// The diff highlighting style can be altered in CSS.
`
];

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

languages.forEach(lang => {
  require(`brace/mode/${lang}`);
  require(`brace/snippets/${lang}`);
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      fontSize: 14,
      markers: {},
      mode: "javascript"
    };
    this.onChange = this.onChange.bind(this);
    this.setMode = this.setMode.bind(this);
  }

  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  setMode(e) {
    this.setState({
      mode: e.target.value
    });
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

          <div className="field" />
        </div>
        <div className="examples column">
          <h2>Editor</h2>
          <DiffEditor
            value={this.state.value}
            height="1000px"
            width="1000px"
            mode={this.state.mode}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("example"));
