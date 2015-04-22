#React-Ace

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
|fontSize| pixel value for font-size|
|showGutter| boolean|
|showPrintMargin| boolean|
|highlightActiveLine| boolean|
|readOnly| boolean|
|maxLines| Maximum number of lines to be displayed|
|value | String value you want to populate in the code highlighter|
|onLoad| Function onLoad |
|onChange| function that occurs on document change it has 1 argument value. see the example above| 

## Modes and Themes

All modes and themes should be required through ```brace``` directly.  Browserify will grab these modes / themes through ```brace``` and will be available at run time.  See the example above.  This prevents bloating the compiled javascript with extra modes and themes for your application.

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
