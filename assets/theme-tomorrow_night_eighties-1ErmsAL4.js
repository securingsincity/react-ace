import{a0 as h}from"./theme-terminal-ylQyTtHj.js";function s(n,i){for(var o=0;o<i.length;o++){const e=i[o];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}},c;function m(){return c||(c=1,function(n,i){ace.define("ace/theme/tomorrow_night_eighties-css",["require","exports","module"],function(o,e,t){t.exports=`.ace-tomorrow-night-eighties .ace_gutter {
  background: #272727;
  color: #CCC
}

.ace-tomorrow-night-eighties .ace_print-margin {
  width: 1px;
  background: #272727
}

.ace-tomorrow-night-eighties {
  background-color: #2D2D2D;
  color: #CCCCCC
}

.ace-tomorrow-night-eighties .ace_constant.ace_other,
.ace-tomorrow-night-eighties .ace_cursor {
  color: #CCCCCC
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_selection {
  background: #515151
}

.ace-tomorrow-night-eighties.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #2D2D2D;
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #6A6A6A
}

.ace-tomorrow-night-bright .ace_stack {
  background: rgb(66, 90, 44)
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_active-line {
  background: #393939
}

.ace-tomorrow-night-eighties .ace_gutter-active-line {
  background-color: #393939
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_selected-word {
  border: 1px solid #515151
}

.ace-tomorrow-night-eighties .ace_invisible {
  color: #6A6A6A
}

.ace-tomorrow-night-eighties .ace_keyword,
.ace-tomorrow-night-eighties .ace_meta,
.ace-tomorrow-night-eighties .ace_storage,
.ace-tomorrow-night-eighties .ace_storage.ace_type,
.ace-tomorrow-night-eighties .ace_support.ace_type {
  color: #CC99CC
}

.ace-tomorrow-night-eighties .ace_keyword.ace_operator {
  color: #66CCCC
}

.ace-tomorrow-night-eighties .ace_constant.ace_character,
.ace-tomorrow-night-eighties .ace_constant.ace_language,
.ace-tomorrow-night-eighties .ace_constant.ace_numeric,
.ace-tomorrow-night-eighties .ace_keyword.ace_other.ace_unit,
.ace-tomorrow-night-eighties .ace_support.ace_constant,
.ace-tomorrow-night-eighties .ace_variable.ace_parameter {
  color: #F99157
}

.ace-tomorrow-night-eighties .ace_invalid {
  color: #CDCDCD;
  background-color: #F2777A
}

.ace-tomorrow-night-eighties .ace_invalid.ace_deprecated {
  color: #CDCDCD;
  background-color: #CC99CC
}

.ace-tomorrow-night-eighties .ace_fold {
  background-color: #6699CC;
  border-color: #CCCCCC
}

.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_function,
.ace-tomorrow-night-eighties .ace_support.ace_function,
.ace-tomorrow-night-eighties .ace_variable {
  color: #6699CC
}

.ace-tomorrow-night-eighties .ace_support.ace_class,
.ace-tomorrow-night-eighties .ace_support.ace_type {
  color: #FFCC66
}

.ace-tomorrow-night-eighties .ace_heading,
.ace-tomorrow-night-eighties .ace_markup.ace_heading,
.ace-tomorrow-night-eighties .ace_string {
  color: #99CC99
}

.ace-tomorrow-night-eighties .ace_comment {
  color: #999999
}

.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_tag,
.ace-tomorrow-night-eighties .ace_entity.ace_other.ace_attribute-name,
.ace-tomorrow-night-eighties .ace_meta.ace_tag,
.ace-tomorrow-night-eighties .ace_variable {
  color: #F2777A
}

.ace-tomorrow-night-eighties .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y
}

.ace-tomorrow-night-eighties .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/tomorrow_night_eighties",["require","exports","module","ace/theme/tomorrow_night_eighties-css","ace/lib/dom"],function(o,e,t){e.isDark=!0,e.cssClass="ace-tomorrow-night-eighties",e.cssText=o("./tomorrow_night_eighties-css");var r=o("../lib/dom");r.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/tomorrow_night_eighties"],function(o){n&&(n.exports=o)})}()}(a)),a.exports}var g=m();const _=h(g),w=s({__proto__:null,default:_},[g]);export{w as t};
