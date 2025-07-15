import{a0 as b}from"./theme-terminal-ylQyTtHj.js";function s(a,o){for(var r=0;r<o.length;r++){const e=o[r];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in a)){const c=Object.getOwnPropertyDescriptor(e,n);c&&Object.defineProperty(a,n,c.get?c:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}},i;function l(){return i||(i=1,function(a,o){ace.define("ace/theme/merbivore-css",["require","exports","module"],function(r,e,n){n.exports=`.ace-merbivore .ace_gutter {
  background: #202020;
  color: #E6E1DC
}

.ace-merbivore .ace_print-margin {
  width: 1px;
  background: #555651
}

.ace-merbivore {
  background-color: #161616;
  color: #E6E1DC
}

.ace-merbivore .ace_cursor {
  color: #FFFFFF
}

.ace-merbivore .ace_marker-layer .ace_selection {
  background: #454545
}

.ace-merbivore.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #161616;
}

.ace-merbivore .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-merbivore .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040
}

.ace-merbivore .ace_marker-layer .ace_active-line {
  background: #333435
}

.ace-merbivore .ace_gutter-active-line {
  background-color: #333435
}

.ace-merbivore .ace_marker-layer .ace_selected-word {
  border: 1px solid #454545
}

.ace-merbivore .ace_invisible {
  color: #404040
}

.ace-merbivore .ace_entity.ace_name.ace_tag,
.ace-merbivore .ace_keyword,
.ace-merbivore .ace_meta,
.ace-merbivore .ace_meta.ace_tag,
.ace-merbivore .ace_storage,
.ace-merbivore .ace_support.ace_function {
  color: #FC6F09
}

.ace-merbivore .ace_constant,
.ace-merbivore .ace_constant.ace_character,
.ace-merbivore .ace_constant.ace_character.ace_escape,
.ace-merbivore .ace_constant.ace_other,
.ace-merbivore .ace_support.ace_type {
  color: #1EDAFB
}

.ace-merbivore .ace_constant.ace_character.ace_escape {
  color: #519F50
}

.ace-merbivore .ace_constant.ace_language {
  color: #FDC251
}

.ace-merbivore .ace_constant.ace_library,
.ace-merbivore .ace_string,
.ace-merbivore .ace_support.ace_constant {
  color: #8DFF0A
}

.ace-merbivore .ace_constant.ace_numeric {
  color: #58C554
}

.ace-merbivore .ace_invalid {
  color: #FFFFFF;
  background-color: #990000
}

.ace-merbivore .ace_fold {
  background-color: #FC6F09;
  border-color: #E6E1DC
}

.ace-merbivore .ace_comment {
  font-style: italic;
  color: #AD2EA4
}

.ace-merbivore .ace_entity.ace_other.ace_attribute-name {
  color: #FFFF89
}

.ace-merbivore .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQFxf3ZXB1df0PAAdsAmERTkEHAAAAAElFTkSuQmCC) right repeat-y
}

.ace-merbivore .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/merbivore",["require","exports","module","ace/theme/merbivore-css","ace/lib/dom"],function(r,e,n){e.isDark=!0,e.cssClass="ace-merbivore",e.cssText=r("./merbivore-css");var c=r("../lib/dom");c.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/merbivore"],function(r){a&&(a.exports=r)})}()}(t)),t.exports}var m=l();const _=b(m),v=s({__proto__:null,default:_},[m]);export{v as t};
