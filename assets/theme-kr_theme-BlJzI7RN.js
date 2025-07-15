import{a0 as s}from"./theme-terminal-ylQyTtHj.js";function i(a,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in a)){const c=Object.getOwnPropertyDescriptor(e,r);c&&Object.defineProperty(a,r,c.get?c:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var o={exports:{}},m;function h(){return m||(m=1,function(a,t){ace.define("ace/theme/kr_theme-css",["require","exports","module"],function(n,e,r){r.exports=`.ace-kr-theme .ace_gutter {
  background: #1c1917;
  color: #FCFFE0
}

.ace-kr-theme .ace_print-margin {
  width: 1px;
  background: #1c1917
}

.ace-kr-theme {
  background-color: #0B0A09;
  color: #FCFFE0
}

.ace-kr-theme .ace_cursor {
  color: #FF9900
}

.ace-kr-theme .ace_marker-layer .ace_selection {
  background: rgba(170, 0, 255, 0.45)
}

.ace-kr-theme.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0B0A09;
}

.ace-kr-theme .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-kr-theme .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 177, 111, 0.32)
}

.ace-kr-theme .ace_marker-layer .ace_active-line {
  background: #38403D
}

.ace-kr-theme .ace_gutter-active-line {
  background-color : #38403D
}

.ace-kr-theme .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(170, 0, 255, 0.45)
}

.ace-kr-theme .ace_invisible {
  color: rgba(255, 177, 111, 0.32)
}

.ace-kr-theme .ace_keyword,
.ace-kr-theme .ace_meta {
  color: #949C8B
}

.ace-kr-theme .ace_constant,
.ace-kr-theme .ace_constant.ace_character,
.ace-kr-theme .ace_constant.ace_character.ace_escape,
.ace-kr-theme .ace_constant.ace_other {
  color: rgba(210, 117, 24, 0.76)
}

.ace-kr-theme .ace_invalid {
  color: #F8F8F8;
  background-color: #A41300
}

.ace-kr-theme .ace_support {
  color: #9FC28A
}

.ace-kr-theme .ace_support.ace_constant {
  color: #C27E66
}

.ace-kr-theme .ace_fold {
  background-color: #949C8B;
  border-color: #FCFFE0
}

.ace-kr-theme .ace_support.ace_function {
  color: #85873A
}

.ace-kr-theme .ace_storage {
  color: #FFEE80
}

.ace-kr-theme .ace_string {
  color: rgba(164, 161, 181, 0.8)
}

.ace-kr-theme .ace_string.ace_regexp {
  color: rgba(125, 255, 192, 0.65)
}

.ace-kr-theme .ace_comment {
  font-style: italic;
  color: #706D5B
}

.ace-kr-theme .ace_variable {
  color: #D1A796
}

.ace-kr-theme .ace_list,
.ace-kr-theme .ace_markup.ace_list {
  background-color: #0F0040
}

.ace-kr-theme .ace_variable.ace_language {
  color: #FF80E1
}

.ace-kr-theme .ace_meta.ace_tag {
  color: #BABD9C
}

.ace-kr-theme .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y
}

.ace-kr-theme .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/kr_theme",["require","exports","module","ace/theme/kr_theme-css","ace/lib/dom"],function(n,e,r){e.isDark=!0,e.cssClass="ace-kr-theme",e.cssText=n("./kr_theme-css");var c=n("../lib/dom");c.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/kr_theme"],function(n){a&&(a.exports=n)})}()}(o)),o.exports}var l=h();const k=s(l),A=i({__proto__:null,default:k},[l]);export{A as t};
