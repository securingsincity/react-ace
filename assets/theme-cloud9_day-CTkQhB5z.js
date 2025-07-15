import{a0 as u}from"./theme-terminal-ylQyTtHj.js";function A(n,r){for(var a=0;a<r.length;a++){const e=r[a];if(typeof e!="string"&&!Array.isArray(e)){for(const c in e)if(c!=="default"&&!(c in n)){const o=Object.getOwnPropertyDescriptor(e,c);o&&Object.defineProperty(n,c,o.get?o:{enumerable:!0,get:()=>e[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}},l;function g(){return l||(l=1,function(n,r){ace.define("ace/theme/cloud9_day-css",["require","exports","module"],function(a,e,c){c.exports=`.ace-cloud9-day .ace_gutter {
    background: #ECECEC;
    color: #333;
}

.ace-cloud9-day .ace_print-margin {
    width: 1px;
    background: #e8e8e8;
}

.ace-cloud9-day .ace_fold {
    background-color: #6B72E6;
}

.ace-cloud9-day {
    background-color: #FBFBFB;
    color: black;
}

.ace-cloud9-day .ace_cursor {
    color: black;
}

.ace-cloud9-day .ace_invisible {
    color: rgb(191, 191, 191);
}

.ace-cloud9-day .ace_storage,
.ace-cloud9-day .ace_keyword {
    color: rgb(24, 122, 234);
}

.ace-cloud9-day .ace_constant {
    color: rgb(197, 6, 11);
}

.ace-cloud9-day .ace_constant.ace_buildin {
    color: rgb(88, 72, 246);
}

.ace-cloud9-day .ace_constant.ace_language {
    color: rgb(88, 92, 246);
}

.ace-cloud9-day .ace_constant.ace_library {
    color: rgb(6, 150, 14);
}

.ace-cloud9-day .ace_invalid {
    background-color: rgba(255, 0, 0, 0.1);
    color: red;
}

.ace-cloud9-day .ace_support.ace_function {
    color: rgb(60, 76, 114);
}

.ace-cloud9-day .ace_support.ace_constant {
    color: rgb(6, 150, 14);
}

.ace-cloud9-day .ace_support.ace_type,
.ace-cloud9-day .ace_support.ace_class {
    color: rgb(109, 121, 222);
}

.ace-cloud9-day .ace_keyword.ace_operator {
    color: rgb(104, 118, 135);
}

.ace-cloud9-day .ace_string {
    color: rgb(3, 106, 7);
}

.ace-cloud9-day .ace_comment {
    color: rgb(76, 136, 107);
}

.ace-cloud9-day .ace_comment.ace_doc {
    color: rgb(0, 102, 255);
}

.ace-cloud9-day .ace_comment.ace_doc.ace_tag {
    color: rgb(128, 159, 191);
}

.ace-cloud9-day .ace_constant.ace_numeric {
    color: rgb(0, 0, 205);
}

.ace-cloud9-day .ace_variable {
    color: rgb(49, 132, 149);
}

.ace-cloud9-day .ace_xml-pe {
    color: rgb(104, 104, 91);
}

.ace-cloud9-day .ace_entity.ace_name.ace_function {
    color: #0000A2;
}


.ace-cloud9-day .ace_heading {
    color: rgb(12, 7, 255);
}

.ace-cloud9-day .ace_list {
    color: rgb(185, 6, 144);
}

.ace-cloud9-day .ace_meta.ace_tag {
    color: rgb(0, 22, 142);
}

.ace-cloud9-day .ace_string.ace_regex {
    color: rgb(255, 0, 0)
}

.ace-cloud9-day .ace_marker-layer .ace_selection {
    background: rgb(181, 213, 255);
}

.ace-cloud9-day.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px white;
}

.ace-cloud9-day .ace_marker-layer .ace_step {
    background: rgb(247, 237, 137);
}

.ace-cloud9-day .ace_marker-layer .ace_stack {
    background: #BAE0A0;
}

.ace-cloud9-day .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid rgb(192, 192, 192);
}

.ace-cloud9-day .ace_marker-layer .ace_active-line {
    background: rgba(0, 0, 0, 0.07);
}

.ace-cloud9-day .ace_gutter-active-line {
    background-color: #E5E5E5;
}

.ace-cloud9-day .ace_marker-layer .ace_selected-word {
    background: rgb(250, 250, 255);
    border: 1px solid rgb(200, 200, 250);
}

.ace-cloud9-day .ace_indent-guide {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

.ace-cloud9-day .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
} 
`}),ace.define("ace/theme/cloud9_day",["require","exports","module","ace/theme/cloud9_day-css","ace/lib/dom"],function(a,e,c){e.isDark=!1,e.cssClass="ace-cloud9-day",e.cssText=a("./cloud9_day-css");var o=a("../lib/dom");o.importCssString(e.cssText,e.cssClass)}),function(){ace.require(["ace/theme/cloud9_day"],function(a){n&&(n.exports=a)})}()}(d)),d.exports}var t=g();const _=u(t),y=A({__proto__:null,default:_},[t]);export{y as t};
