import{a0 as l}from"./theme-terminal-ylQyTtHj.js";function k(c,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in c)){const r=Object.getOwnPropertyDescriptor(e,a);r&&Object.defineProperty(c,a,r.get?r:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}},d;function i(){return d||(d=1,function(c,o){ace.define("ace/theme/one_dark-css",["require","exports","module"],function(n,e,a){a.exports=`.ace-one-dark .ace_gutter {
    background: #282c34;
    color: #6a6f7a
}

.ace-one-dark .ace_print-margin {
    width: 1px;
    background: #e8e8e8
}

.ace-one-dark {
    background-color: #282c34;
    color: #abb2bf
}

.ace-one-dark .ace_cursor {
    color: #528bff
}

.ace-one-dark .ace_marker-layer .ace_selection {
    background: #3d4350
}

.ace-one-dark.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0 #282c34;
    border-radius: 2px
}

.ace-one-dark .ace_marker-layer .ace_step {
    background: #c6dbae
}

.ace-one-dark .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid #747369
}

.ace-one-dark .ace_marker-layer .ace_active-line {
    background: rgba(76, 87, 103, .19)
}

.ace-one-dark .ace_gutter-active-line {
    background-color: rgba(76, 87, 103, .19)
}

.ace-one-dark .ace_marker-layer .ace_selected-word {
    border: 1px solid #3d4350
}

.ace-one-dark .ace_fold {
    background-color: #61afef;
    border-color: #abb2bf
}

.ace-one-dark .ace_keyword {
    color: #c678dd
}

.ace-one-dark .ace_keyword.ace_operator {
    color: #c678dd
}

.ace-one-dark .ace_keyword.ace_other.ace_unit {
    color: #d19a66
}

.ace-one-dark .ace_constant.ace_language {
    color: #d19a66
}

.ace-one-dark .ace_constant.ace_numeric {
    color: #d19a66
}

.ace-one-dark .ace_constant.ace_character {
    color: #56b6c2
}

.ace-one-dark .ace_constant.ace_other {
    color: #56b6c2
}

.ace-one-dark .ace_support.ace_function {
    color: #61afef
}

.ace-one-dark .ace_support.ace_constant {
    color: #d19a66
}

.ace-one-dark .ace_support.ace_class {
    color: #e5c07b
}

.ace-one-dark .ace_support.ace_type {
    color: #e5c07b
}

.ace-one-dark .ace_storage {
    color: #c678dd
}

.ace-one-dark .ace_storage.ace_type {
    color: #c678dd
}

.ace-one-dark .ace_invalid {
    color: #fff;
    background-color: #f2777a
}

.ace-one-dark .ace_invalid.ace_deprecated {
    color: #272b33;
    background-color: #d27b53
}

.ace-one-dark .ace_string {
    color: #98c379
}

.ace-one-dark .ace_string.ace_regexp {
    color: #e06c75
}

.ace-one-dark .ace_comment {
    font-style: italic;
    color: #5c6370
}

.ace-one-dark .ace_variable {
    color: #e06c75
}

.ace-one-dark .ace_variable.ace_parameter {
    color: #d19a66
}

.ace-one-dark .ace_meta.ace_tag {
    color: #e06c75
}

.ace-one-dark .ace_entity.ace_other.ace_attribute-name {
    color: #e06c75
}

.ace-one-dark .ace_entity.ace_name.ace_function {
    color: #61afef
}

.ace-one-dark .ace_entity.ace_name.ace_tag {
    color: #e06c75
}

.ace-one-dark .ace_markup.ace_heading {
    color: #98c379
}

.ace-one-dark .ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y
}

.ace-one-dark .ace_indent-guide-active {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/one_dark",["require","exports","module","ace/theme/one_dark-css","ace/lib/dom"],function(n,e,a){e.isDark=!0,e.cssClass="ace-one-dark",e.cssText=n("./one_dark-css");var r=n("../lib/dom");r.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/one_dark"],function(n){c&&(c.exports=n)})}()}(t)),t.exports}var _=i();const s=l(_),A=k({__proto__:null,default:s},[_]);export{A as t};
