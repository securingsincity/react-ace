import{a0 as s}from"./theme-terminal-ylQyTtHj.js";function i(r,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in r)){const c=Object.getOwnPropertyDescriptor(e,a);c&&Object.defineProperty(r,a,c.get?c:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}},t;function k(){return t||(t=1,function(r,o){ace.define("ace/theme/nord_dark-css",["require","exports","module"],function(n,e,a){a.exports=`.ace-nord-dark .ace_gutter {
  color: #616e88;
}

.ace-nord-dark .ace_print-margin {
  width: 1px;
  background: #4c566a;
}

.ace-nord-dark {
  background-color: #2e3440;
  color: #d8dee9;
}

.ace-nord-dark .ace_entity.ace_other.ace_attribute-name,
.ace-nord-dark .ace_storage {
  color: #d8dee9;
}

.ace-nord-dark .ace_cursor {
  color: #d8dee9;
}

.ace-nord-dark .ace_string.ace_regexp {
  color: #bf616a;
}

.ace-nord-dark .ace_marker-layer .ace_active-line {
  background: #434c5ecc;
}
.ace-nord-dark .ace_marker-layer .ace_selection {
  background: #434c5ecc;
}

.ace-nord-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #2e3440;
}

.ace-nord-dark .ace_marker-layer .ace_step {
  background: #ebcb8b;
}

.ace-nord-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #88c0d066;
}

.ace-nord-dark .ace_gutter-active-line {
  background-color: #434c5ecc;
}

.ace-nord-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid #88c0d066;
}

.ace-nord-dark .ace_invisible {
  color: #4c566a;
}

.ace-nord-dark .ace_keyword,
.ace-nord-dark .ace_meta,
.ace-nord-dark .ace_support.ace_class,
.ace-nord-dark .ace_support.ace_type {
  color: #81a1c1;
}

.ace-nord-dark .ace_constant.ace_character,
.ace-nord-dark .ace_constant.ace_other {
  color: #d8dee9;
}

.ace-nord-dark .ace_constant.ace_language {
  color: #5e81ac;
}

.ace-nord-dark .ace_constant.ace_escape {
  color: #ebcB8b;
}

.ace-nord-dark .ace_constant.ace_numeric {
  color: #b48ead;
}

.ace-nord-dark .ace_fold {
  background-color: #4c566a;
  border-color: #d8dee9;
}

.ace-nord-dark .ace_entity.ace_name.ace_function,
.ace-nord-dark .ace_entity.ace_name.ace_tag,
.ace-nord-dark .ace_support.ace_function,
.ace-nord-dark .ace_variable,
.ace-nord-dark .ace_variable.ace_language {
  color: #8fbcbb;
}

.ace-nord-dark .ace_string {
  color: #a3be8c;
}

.ace-nord-dark .ace_comment {
  color: #616e88;
}

.ace-nord-dark .ace_indent-guide {
  box-shadow: inset -1px 0 0 0 #434c5eb3;
}

.ace-nord-dark .ace_indent-guide-active {
  box-shadow: inset -1px 0 0 0 #8395b8b3;
}
`}),ace.define("ace/theme/nord_dark",["require","exports","module","ace/theme/nord_dark-css","ace/lib/dom"],function(n,e,a){e.isDark=!0,e.cssClass="ace-nord-dark",e.cssText=n("./nord_dark-css"),e.$selectionColorConflict=!0;var c=n("../lib/dom");c.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/nord_dark"],function(n){r&&(r.exports=n)})}()}(d)),d.exports}var _=k();const l=s(_),b=i({__proto__:null,default:l},[_]);export{b as t};
