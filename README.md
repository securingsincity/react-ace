# React-Ace-Builds

![logo](https://github.com/manubb/react-ace-builds/raw/local/logo.png)

[![Greenkeeper badge](https://badges.greenkeeper.io/manubb/react-ace-builds.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/react-ace-builds.svg)](http://badge.fury.io/js/react-ace-builds)
[![Build Status](https://travis-ci.com/manubb/react-ace-builds.svg)](https://travis-ci.com/manubb/react-ace-builds)
[![jsdeliver](https://data.jsdelivr.com/v1/package/npm/react-ace-builds/badge)](https://www.jsdelivr.com/package/npm/react-ace-builds)
[![Coverage Status](https://coveralls.io/repos/github/manubb/react-ace-builds/badge.svg)](https://coveralls.io/github/manubb/react-ace-builds)

A set of react components for Ace / Brace

[DEMO of React Ace](http://manubb.github.io/react-ace-builds/)

[DEMO of React Ace Split Editor](http://manubb.github.io/react-ace-builds/split.html)

[DEMO of React Ace Diff Editor](http://manubb.github.io/react-ace-builds/diff.html)

## Install

`npm install react-ace-builds`

## Basic Usage

```javascript
import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace-builds";
import "ace-builds/webpack-resolver";

function onChange(newValue) {
  console.log("change", newValue);
}

// Render editor
render(
  <AceEditor
    mode="java"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />,
  document.getElementById("example")
);
```

## Examples

Checkout the `example` directory for a working example using webpack.

## Documentation

[Ace Editor](https://github.com/manubb/react-ace-builds/blob/local/docs/Ace.md)

[Split View Editor](https://github.com/manubb/react-ace-builds/blob/local/docs/Split.md)

[Diff Editor](https://github.com/manubb/react-ace-builds/blob/local/docs/Diff.md)

[How to add modes, themes and keyboard handlers](https://github.com/manubb/react-ace-builds/blob/local/docs/Modes.md)

[Frequently Asked Questions](https://github.com/manubb/react-ace-builds/blob/local/docs/FAQ.md)
