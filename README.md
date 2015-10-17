#React-Ace

[![npm version](https://badge.fury.io/js/react-ace.svg)](http://badge.fury.io/js/react-ace)

[![Build Status](https://travis-ci.org/securingsincity/react-ace.svg)](https://travis-ci.org/securingsincity/react-ace)

A react component for Ace / Brace

##Install

`npm install react-ace`

##Usage

```javascript
var React = require('react');
var brace  = require('brace');
var AceEditor  = require('react-ace');

require('brace/mode/java')
require('brace/theme/github')

function onChange(newValue) {
  console.log('change',newValue)
}

// render a first
React.render(
  <AceEditor
    mode="java"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
  />,
  document.getElementById('example')
);


```


Looking for a way to set it up using webpack? Checkout this example :

[React-Ace Webpack Example](https://github.com/securingsincity/react-ace-webpack-example) a working example using webpack


Available Props

|Prop|Description|
|-----|----------|
|name| Unique Id to be used for the editor|
|mode| Language for parsing and code highlighting|
|theme| theme to use|
|height| CSS value for height|
|width| CSS value for width|
|className|custom className|
|fontSize| pixel value for font-size|
|showGutter| boolean|
|showPrintMargin| boolean|
|highlightActiveLine| boolean|
|readOnly| boolean|
|maxLines| Maximum number of lines to be displayed|
|tabSize| tabSize number|
|value | String value you want to populate in the code highlighter|
|onLoad| Function onLoad|
|onBeforeLoad| function that trigger before editor setup|
|onChange| function that occurs on document change it has 1 argument value. see the example above|
|onCopy| function that trigger by editor `copy` event, and pass text as argument|
|onPaste| function that trigger by editor `paste` event, and pass text as argument|
|onFocus| function that trigger by editor `focus` event|
|onBlur| function that trigger by editor `blur` event|
|editorProps| Object of properties to apply directly to the Ace editor instance|
|keyboardHandler| String corresponding to the keybinding mode to set (such as vim)|


## Modes, Themes, and Keyboard Handlers

All modes, themes, and keyboard handlers should be required through ```brace``` directly.  Browserify will grab these modes / themes / keyboard handlers through ```brace``` and will be available at run time.  See the example above.  This prevents bloating the compiled javascript with extra modes and themes for your application.

### Example Modes

* javascript
* java
* python
* xml
* ruby
* sass
* markdown
* mysql
* json
* html
* handlebars
* golang
* csharp
* coffee
* css

### Example Themes

* monokai
* github
* tomorrow
* kuroir
* twilight
* xcode
* textmate
* solarized dark
* solarized light
* terminal

### Example Keyboard Handlers

* vim
* emacs
