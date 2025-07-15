import{a0 as w}from"./theme-terminal-ylQyTtHj.js";function B(d,b){for(var i=0;i<b.length;i++){const h=b[i];if(typeof h!="string"&&!Array.isArray(h)){for(const p in h)if(p!=="default"&&!(p in d)){const r=Object.getOwnPropertyDescriptor(h,p);r&&Object.defineProperty(d,p,r.get?r:{enumerable:!0,get:()=>h[p]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}},A;function $(){return A||(A=1,function(d,b){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(i,h,p){p.exports=`

/* ------------------------------------------------------------------------------------------
 * Editor Search Form
 * --------------------------------------------------------------------------------------- */
.ace_search {
    background-color: #ddd;
    color: #666;
    border: 1px solid #cbcbcb;
    border-top: 0 none;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px 0 4px;
    position: absolute;
    top: 0;
    z-index: 99;
    white-space: normal;
}
.ace_search.left {
    border-left: 0 none;
    border-radius: 0px 0px 5px 0px;
    left: 0;
}
.ace_search.right {
    border-radius: 0px 0px 0px 5px;
    border-right: 0 none;
    right: 0;
}

.ace_search_form, .ace_replace_form {
    margin: 0 20px 4px 0;
    overflow: hidden;
    line-height: 1.9;
}
.ace_replace_form {
    margin-right: 0;
}
.ace_search_form.ace_nomatch {
    outline: 1px solid red;
}

.ace_search_field {
    border-radius: 3px 0 0 3px;
    background-color: white;
    color: black;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
    outline: 0;
    padding: 0;
    font-size: inherit;
    margin: 0;
    line-height: inherit;
    padding: 0 6px;
    min-width: 17em;
    vertical-align: top;
    min-height: 1.8em;
    box-sizing: content-box;
}
.ace_searchbtn {
    border: 1px solid #cbcbcb;
    line-height: inherit;
    display: inline-block;
    padding: 0 6px;
    background: #fff;
    border-right: 0 none;
    border-left: 1px solid #dcdcdc;
    cursor: pointer;
    margin: 0;
    position: relative;
    color: #666;
}
.ace_searchbtn:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #cbcbcb;
}
.ace_searchbtn:disabled {
    background: none;
    cursor: default;
}
.ace_searchbtn:hover {
    background-color: #eef1f6;
}
.ace_searchbtn.prev, .ace_searchbtn.next {
     padding: 0px 0.7em
}
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {
     content: "";
     border: solid 2px #888;
     width: 0.5em;
     height: 0.5em;
     border-width:  2px 0 0 2px;
     display:inline-block;
     transform: rotate(-45deg);
}
.ace_searchbtn.next:after {
     border-width: 0 2px 2px 0 ;
}
.ace_searchbtn_close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;
    border-radius: 50%;
    border: 0 none;
    color: #656565;
    cursor: pointer;
    font: 16px/16px Arial;
    padding: 0;
    height: 14px;
    width: 14px;
    top: 9px;
    right: 7px;
    position: absolute;
}
.ace_searchbtn_close:hover {
    background-color: #656565;
    background-position: 50% 100%;
    color: white;
}

.ace_button {
    margin-left: 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    border: 1px solid rgba(100,100,100,0.23);
    padding: 1px;
    box-sizing:    border-box!important;
    color: black;
}

.ace_button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_button:active {
    background-color: #ddd;
}

.ace_button.checked {
    border-color: #3399ff;
    opacity:1;
}

.ace_search_options{
    margin-bottom: 3px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    clear: both;
}

.ace_search_counter {
    float: left;
    font-family: arial;
    padding: 0 8px;
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(i,h,p){var r=i("../lib/dom"),k=i("../lib/lang"),l=i("../lib/event"),S=i("./searchbox-css"),O=i("../keyboard/hash_handler").HashHandler,R=i("../lib/keys"),s=i("../config").nls,m=999;r.importCssString(S,"ace_searchbox",!1);var x=function(){function e(t,n,c){this.activeInput;var a=r.createElement("div");r.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:s("search-box.find.placeholder","Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},s("search-box.find-all.text","All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:s("search-box.replace.placeholder","Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},s("search-box.replace-next.text","Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},s("search-box.replace-all.text","All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:s("search-box.toggle-replace.title","Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:s("search-box.toggle-regexp.title","RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:s("search-box.toggle-case.title","CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:s("search-box.toggle-whole-word.title","Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:s("search-box.toggle-in-selection.title","Search In Selection")},"S"]]],a),this.element=a.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(t),r.importCssString(S,"ace_searchbox",t.container)}return e.prototype.setEditor=function(t){t.searchBox=this,t.renderer.scroller.appendChild(this.element),this.editor=t},e.prototype.setSession=function(t){this.searchRange=null,this.$syncOptions(!0)},e.prototype.$initElements=function(t){this.searchBox=t.querySelector(".ace_search_form"),this.replaceBox=t.querySelector(".ace_replace_form"),this.searchOption=t.querySelector("[action=searchInSelection]"),this.replaceOption=t.querySelector("[action=toggleReplace]"),this.regExpOption=t.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=t.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=t.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=t.querySelector(".ace_search_counter")},e.prototype.$init=function(){var t=this.element;this.$initElements(t);var n=this;l.addListener(t,"mousedown",function(c){setTimeout(function(){n.activeInput.focus()},0),l.stopPropagation(c)}),l.addListener(t,"click",function(c){var a=c.target||c.srcElement,o=a.getAttribute("action");o&&n[o]?n[o]():n.$searchBarKb.commands[o]&&n.$searchBarKb.commands[o].exec(n),l.stopPropagation(c)}),l.addCommandKeyListener(t,function(c,a,o){var f=R.keyCodeToString(o),u=n.$searchBarKb.findKeyCommand(a,f);u&&u.exec&&(u.exec(n),l.stopEvent(c))}),this.$onChange=k.delayedCall(function(){n.find(!1,!1)}),l.addListener(this.searchInput,"input",function(){n.$onChange.schedule(20)}),l.addListener(this.searchInput,"focus",function(){n.activeInput=n.searchInput,n.searchInput.value&&n.highlight()}),l.addListener(this.replaceInput,"focus",function(){n.activeInput=n.replaceInput,n.searchInput.value&&n.highlight()})},e.prototype.setSearchRange=function(t){this.searchRange=t,t?this.searchRangeMarker=this.editor.session.addMarker(t,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},e.prototype.$syncOptions=function(t){r.setCssClass(this.replaceOption,"checked",this.searchRange),r.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",r.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),r.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),r.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var n=this.editor.getReadOnly();this.replaceOption.style.display=n?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!n?"":"none",this.find(!1,!1,t)},e.prototype.highlight=function(t){this.editor.session.highlight(t||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},e.prototype.find=function(t,n,c){var a=this.editor.find(this.searchInput.value,{skipCurrent:t,backwards:n,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:c,range:this.searchRange}),o=!a&&this.searchInput.value;r.setCssClass(this.searchBox,"ace_nomatch",o),this.editor._emit("findSearchBox",{match:!o}),this.highlight(),this.updateCounter()},e.prototype.updateCounter=function(){var t=this.editor,n=t.$search.$options.re,c=n.unicode,a=0,o=0;if(n){var f=this.searchRange?t.session.getTextRange(this.searchRange):t.getValue(),u=t.session.doc.positionToIndex(t.selection.anchor);this.searchRange&&(u-=t.session.doc.positionToIndex(this.searchRange.start));for(var g=n.lastIndex=0,y;(y=n.exec(f))&&(a++,g=y.index,g<=u&&o++,!(a>m||!y[0]&&(n.lastIndex=g+=k.skipEmptyMatch(f,g,c),g>=f.length))););}this.searchCounter.textContent=s("search-box.search-counter","$0 of $1",[o,a>m?m+"+":a])},e.prototype.findNext=function(){this.find(!0,!1)},e.prototype.findPrev=function(){this.find(!0,!0)},e.prototype.findAll=function(){var t=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),n=!t&&this.searchInput.value;r.setCssClass(this.searchBox,"ace_nomatch",n),this.editor._emit("findSearchBox",{match:!n}),this.highlight(),this.hide()},e.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},e.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},e.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},e.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},e.prototype.show=function(t,n){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=n,t&&(this.searchInput.value=t),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},e.prototype.isFocused=function(){var t=document.activeElement;return t==this.searchInput||t==this.replaceInput},e}(),v=new O;v.bindKeys({"Ctrl-f|Command-f":function(e){var t=e.isReplace=!e.isReplace;e.replaceBox.style.display=t?"":"none",e.replaceOption.checked=!1,e.$syncOptions(),e.searchInput.focus()},"Ctrl-H|Command-Option-F":function(e){e.editor.getReadOnly()||(e.replaceOption.checked=!0,e.$syncOptions(),e.replaceInput.focus())},"Ctrl-G|Command-G":function(e){e.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(e){e.findPrev()},esc:function(e){setTimeout(function(){e.hide()})},Return:function(e){e.activeInput==e.replaceInput&&e.replace(),e.findNext()},"Shift-Return":function(e){e.activeInput==e.replaceInput&&e.replace(),e.findPrev()},"Alt-Return":function(e){e.activeInput==e.replaceInput&&e.replaceAll(),e.findAll()},Tab:function(e){(e.activeInput==e.replaceInput?e.searchInput:e.replaceInput).focus()}}),v.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(e){e.regExpOption.checked=!e.regExpOption.checked,e.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(e){e.caseSensitiveOption.checked=!e.caseSensitiveOption.checked,e.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(e){e.wholeWordOption.checked=!e.wholeWordOption.checked,e.$syncOptions()}},{name:"toggleReplace",exec:function(e){e.replaceOption.checked=!e.replaceOption.checked,e.$syncOptions()}},{name:"searchInSelection",exec:function(e){e.searchOption.checked=!e.searchRange,e.setSearchRange(e.searchOption.checked&&e.editor.getSelectionRange()),e.$syncOptions()}}]);var I=new O([{bindKey:"Esc",name:"closeSearchBar",exec:function(e){e.searchBox.hide()}}]);x.prototype.$searchBarKb=v,x.prototype.$closeSearchBarKb=I,h.SearchBox=x,h.Search=function(e,t){var n=e.searchBox||new x(e);n.show(e.session.getTextRange(),t)}}),function(){ace.require(["ace/ext/searchbox"],function(i){d&&(d.exports=i)})}()}(_)),_.exports}var C=$();const E=w(C),K=B({__proto__:null,default:E},[C]);export{K as e};
