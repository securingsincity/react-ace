import{a0 as l}from"./theme-terminal-ylQyTtHj.js";function _(n,a){for(var o=0;o<a.length;o++){const e=a[o];if(typeof e!="string"&&!Array.isArray(e)){for(const c in e)if(c!=="default"&&!(c in n)){const r=Object.getOwnPropertyDescriptor(e,c);r&&Object.defineProperty(n,c,r.get?r:{enumerable:!0,get:()=>e[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}},d;function u(){return d||(d=1,function(n,a){ace.define("ace/theme/cloud_editor-css",["require","exports","module"],function(o,e,c){c.exports=`
.ace-cloud_editor .ace_gutter {
    background: #ffffff;
    color: #3a3a42;
}

.ace-cloud_editor .ace_tooltip-marker-error.ace_tooltip-marker {
    background-color: #d13212;
}
.ace-cloud_editor .ace_tooltip-marker-security.ace_tooltip-marker {
    background-color: #d13212;
}
.ace-cloud_editor .ace_tooltip-marker-warning.ace_tooltip-marker {
    background-color: #906806;
}

.ace-cloud_editor .ace_print-margin {
    width: 1px;
    background: #697077;
}

.ace-cloud_editor {
    background-color: #ffffff;
    color: #3a3a42;
}

.ace-cloud_editor .ace_cursor {
    color: #3a3a42;
}

.ace-cloud_editor .ace_marker-layer .ace_selection {
    background: #bfceff;
}

.ace-cloud_editor.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px #ffffff;
    border-radius: 2px;
}

.ace-cloud_editor .ace_marker-layer .ace_step {
    background: #697077;
}

.ace-cloud_editor .ace_marker-layer .ace_bracket {
    margin: 0 0 0 -1px;
    border: 1px solid #697077;
}

.ace-cloud_editor .ace_marker-layer .ace_active-line {
    box-sizing: border-box;
    border-top: 1px solid #9191ac;
    border-bottom: 1px solid #9191ac;
}

.ace-cloud_editor .ace_gutter-cell_svg-icons {
    box-sizing: border-box;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
}

.ace-cloud_editor .ace_gutter-active-line {
    background-repeat: no-repeat;
    box-sizing: border-box;
    border-top: 1px solid #9191ac;
    border-bottom: 1px solid #9191ac;
}

.ace-cloud_editor .ace_marker-layer .ace_selected-word {
    border: 1px solid #bfceff;
}

.ace-cloud_editor .ace_fold {
    background-color: #0E45B4;
    border-color: #3a3a42;
}

.ace-cloud_editor .ace_keyword {
    color: #9749d1;
}

.ace-cloud_editor .ace_meta.ace_tag {
    color: #0E45B4;
}

.ace-cloud_editor .ace_constant {
    color: #A16101;
}

.ace-cloud_editor .ace_constant.ace_numeric {
    color: #A16101;
}

.ace-cloud_editor .ace_constant.ace_character.ace_escape {
    color: #BD1880;
}

.ace-cloud_editor .ace_support.ace_function {
    color: #A81700;
}

.ace-cloud_editor .ace_support.ace_class {
    color: #A16101;
}

.ace-cloud_editor .ace_storage {
    color: #9749d1;
}

.ace-cloud_editor .ace_invalid.ace_illegal {
    color: #ffffff;
    background-color: #0E45B4;
}

.ace-cloud_editor .ace_invalid.ace_deprecated {
    color: #ffffff;
    background-color: #A16101;
}

.ace-cloud_editor .ace_string {
    color: #207A7F;
}

.ace-cloud_editor .ace_string.ace_regexp {
    color: #207A7F;
}

.ace-cloud_editor .ace_comment,
.ace-cloud_editor .ace_ghost_text {
    color: #697077;
    opacity: 1;
}

.ace-cloud_editor .ace_variable {
    color: #0E45B4;
}

.ace-cloud_editor .ace_meta.ace_selector {
    color: #9749d1;
}

.ace-cloud_editor .ace_entity.ace_other.ace_attribute-name {
    color: #A16101;
}

.ace-cloud_editor .ace_entity.ace_name.ace_function {
    color: #A81700;
}

.ace-cloud_editor .ace_entity.ace_name.ace_tag {
    color: #0E45B4;
}

.ace-cloud_editor .ace_heading {
    color: #A81700;
}

.ace-cloud_editor .ace_xml-pe {
    color: #A16101;
}
.ace-cloud_editor .ace_doctype {
    color: #0E45B4;
}

.ace-cloud_editor .ace_tooltip {
    background-color: #ffffff;
    color: #3a3a42;
}

.ace-cloud_editor .ace_icon_svg.ace_error,
.ace-cloud_editor .ace_icon_svg.ace_error_fold {
    background-color: #d13212;
}
.ace-cloud_editor .ace_icon_svg.ace_security,
.ace-cloud_editor .ace_icon_svg.ace_security_fold {
    background-color: #d13212;
}
.ace-cloud_editor .ace_icon_svg.ace_warning,
.ace-cloud_editor .ace_icon_svg.ace_warning_fold {
    background-color: #906806;
}
.ace-cloud_editor .ace_icon_svg.ace_info {
    background-color: #0073bb;
}
.ace-cloud_editor .ace_icon_svg.ace_hint {
    background-color: #0073bb;
}
.ace-cloud_editor .ace_highlight-marker {
    background: none;
    border: #0E45B4 1px solid;
}
.ace-cloud_editor .ace_tooltip.ace_hover-tooltip:focus > div {
    outline: 1px solid #0073bb;
}
.ace-cloud_editor .ace_snippet-marker {
    background-color: #CED6E0;
    border: 0;
}

.ace-cloud_editor.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #f2f3f3;
    border: #0F68AE 1.5px solid;
}
.ace-cloud_editor.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid #16191f;
    background: #f2f3f3;
}
.ace-cloud_editor.ace_editor.ace_autocomplete .ace_completion-meta {
    color: #545b64;
    opacity: 1;
}
.ace-cloud_editor.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #0F68AE;
}
.ace-cloud_editor.ace_editor.ace_autocomplete {
    box-shadow: 0 1px 1px 0 #001c244d, 1px 1px 1px 0 #001c2426, -1px 1px 1px 0 #001c2426;
    line-height: 1.5;
    border: 1px solid #eaeded;
    background: #ffffff;
    color: #16191f;
}

`}),ace.define("ace/theme/cloud_editor",["require","exports","module","ace/theme/cloud_editor-css","ace/lib/dom"],function(o,e,c){e.isDark=!1,e.cssClass="ace-cloud_editor",e.cssText=o("./cloud_editor-css");var r=o("../lib/dom");r.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/cloud_editor"],function(o){n&&(n.exports=o)})}()}(t)),t.exports}var i=u();const f=l(i),p=_({__proto__:null,default:f},[i]);export{p as t};
