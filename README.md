#React-Ace

A react component for Ace / Brace

##Install

`npm install react-ace`

##Usage

```javascript
var React = require('react');
var AceEditor  = require('react-ace');


// render a first
React.render(
  <AceEditor mode="java" theme="github" name="UNIQUE_ID_OF_DIV"/>,
  document.getElementById('example')
);

```

##List of available modes and themes

###Modes

* javascript
* java

###Themes

* monokai
* github
* tomorrow
* kuroir
* twilight
* xcode
* textmate