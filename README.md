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
Available Props

|Prop|Description| 
|-----|----------|
|name| Unique Id to be used for the editor|
|mode| Language for parsing and code highlighting| 
|theme| theme to use|
|height| CSS value for height|
|width| CSS value for width|


##List of available modes and themes

###Modes

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

###Themes

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