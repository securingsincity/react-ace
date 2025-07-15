import{a0 as u}from"./theme-terminal-ylQyTtHj.js";function d(e,r){for(var c=0;c<r.length;c++){const o=r[c];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in e)){const l=Object.getOwnPropertyDescriptor(o,n);l&&Object.defineProperty(e,n,l.get?l:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}},t;function g(){return t||(t=1,function(e,r){ace.define("ace/theme/cloud9_night_low_color-css",["require","exports","module"],function(c,o,n){n.exports=`.ace-cloud9-night-low-color .ace_gutter {
    background: #303130;
    color: #eee
}

.ace-cloud9-night-low-color .ace_print-margin {
    width: 1px;
    background: #222
}

.ace-cloud9-night-low-color {
    background-color: #181818;
    color: #EBEBEB
}

.ace-cloud9-night-low-color .ace_cursor {
    color: #9F9F9F
}

.ace-cloud9-night-low-color .ace_marker-layer .ace_selection {
    background: #424242
}

.ace-cloud9-night-low-color.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px #000000;
    border-radius: 2px
}

.ace-cloud9-night-low-color .ace_marker-layer .ace_step {
    background: rgb(102, 82, 0)
}

.ace-cloud9-night-low-color .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid #888888
}

.ace-cloud9-night-low-color .ace_marker-layer .ace_highlight {
    border: 1px solid rgb(110, 119, 0);
    border-bottom: 0;
    box-shadow: inset 0 -1px rgb(110, 119, 0);
    margin: -1px 0 0 -1px;
    background: rgba(255, 235, 0, 0.1);
}

.ace-cloud9-night-low-color .ace_marker-layer .ace_active-line {
    background: #292929
}

.ace-cloud9-night-low-color .ace_gutter-active-line {
    background-color: #3D3D3D
}

.ace-cloud9-night-low-color .ace_stack {
    background-color: rgb(66, 90, 44)
}

.ace-cloud9-night-low-color .ace_marker-layer .ace_selected-word {
    border: 1px solid #888888
}

.ace-cloud9-night-low-color .ace_invisible {
    color: #343434
}

.ace-cloud9-night-low-color .ace_keyword,
.ace-cloud9-night-low-color .ace_meta,
.ace-cloud9-night-low-color .ace_storage {
    color: #C397D8
}

.ace-cloud9-night-low-color .ace_keyword.ace_operator {
    color: #70C0B1
}

.ace-cloud9-night-low-color .ace_constant.ace_character,
.ace-cloud9-night-low-color .ace_constant.ace_language,
.ace-cloud9-night-low-color .ace_constant.ace_numeric,
.ace-cloud9-night-low-color .ace_keyword.ace_other.ace_unit {
    color: #DAA637
}

.ace-cloud9-night-low-color .ace_constant.ace_other {
    color: #EEEEEE
}

.ace-cloud9-night-low-color .ace_invalid {
    color: #CED2CF;
    background-color: #DF5F5F
}

.ace-cloud9-night-low-color .ace_invalid.ace_deprecated {
    color: #CED2CF;
    background-color: #B798BF
}

.ace-cloud9-night-low-color .ace_fold {
    background-color: #7AA6DA;
    border-color: #DEDEDE
}

.ace-cloud9-night-low-color .ace_entity.ace_name.ace_function,
.ace-cloud9-night-low-color .ace_support.ace_function,
.ace-cloud9-night-low-color .ace_variable:not(.ace_parameter),
.ace-cloud9-night-low-color .ace_constant:not(.ace_numeric) {
    color: #7AA6DA
}

.ace-cloud9-night-low-color .ace_support.ace_class,
.ace-cloud9-night-low-color .ace_support.ace_type {
    color: #E7C547
}

.ace-cloud9-night-low-color .ace_heading,
.ace-cloud9-night-low-color .ace_markup.ace_heading,
.ace-cloud9-night-low-color .ace_string {
    color: #B9CA4A
}

.ace-cloud9-night-low-color .ace_comment {
    color: #969896
}

.ace-cloud9-night-low-color .ace_c9searchresults.ace_keyword {
    color: #C2C280;
}

.ace-cloud9-night-low-color .ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y
}

.ace-cloud9-night-low-color .ace_indent-guide-active {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/cloud9_night_low_color",["require","exports","module","ace/theme/cloud9_night_low_color-css","ace/lib/dom"],function(c,o,n){o.isDark=!0,o.cssClass="ace-cloud9-night-low-color",o.cssText=c("./cloud9_night_low_color-css");var l=c("../lib/dom");l.importCssString(o.cssText,o.cssClass)}),function(){ace.require(["ace/theme/cloud9_night_low_color"],function(c){e&&(e.exports=c)})}()}(a)),a.exports}var i=g();const _=u(i),s=d({__proto__:null,default:_},[i]);export{s as t};
