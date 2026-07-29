import{R as D}from"./theme-terminal-BAREzoZ5.js";function I(v,y){for(var r=0;r<y.length;r++){const i=y[r];if(typeof i!="string"&&!Array.isArray(i)){for(const p in i)if(p!=="default"&&!(p in v)){const h=Object.getOwnPropertyDescriptor(i,p);h&&Object.defineProperty(v,p,h.get?h:{enumerable:!0,get:()=>i[p]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var w={exports:{}},O;function F(){return O||(O=1,(function(v,y){ace.define("ace/ext/code_lens",["require","exports","module","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/editor","ace/config"],function(r,i,p){var h=r("../lib/event"),k=r("../lib/lang"),_=r("../lib/dom");function N(e){var t=e.$textLayer,n=t.$lenses;n&&n.forEach(function(a){a.remove()}),t.$lenses=null}function H(e,t){var n=e&t.CHANGE_LINES||e&t.CHANGE_FULL||e&t.CHANGE_SCROLL||e&t.CHANGE_TEXT;if(n){var a=t.session,s=t.session.lineWidgets,g=t.$textLayer,o=g.$lenses;if(!s){o&&N(t);return}var L=t.$textLayer.$lines.cells,l=t.layerConfig,x=t.$padding;o||(o=g.$lenses=[]);for(var f=0,$=0;$<L.length;$++){var d=L[$].row,m=s[d],C=m&&m.lenses;if(!(!C||!C.length)){var c=o[f];c||(c=o[f]=_.buildDom(["div",{class:"ace_codeLens"}],t.container)),c.style.height=l.lineHeight+"px",f++;for(var u=0;u<C.length;u++){var E=c.childNodes[2*u];E||(u!=0&&c.appendChild(_.createTextNode(" | ")),E=_.buildDom(["a"],c)),E.textContent=C[u].title,E.lensCommand=C[u]}for(;c.childNodes.length>2*u-1;)c.lastChild.remove();var M=t.$cursorLayer.getPixelPosition({row:d,column:0},!0).top-l.lineHeight*m.rowsAbove-l.offset;c.style.top=M+"px";var W=t.gutterWidth,b=a.getLine(d).search(/\S|$/);b==-1&&(b=0),W+=b*l.characterWidth,c.style.paddingLeft=x+W+"px"}}for(;f<o.length;)o.pop().remove()}}function S(e){if(e.lineWidgets){var t=e.widgetManager;e.lineWidgets.forEach(function(n){n&&n.lenses&&t.removeLineWidget(n)})}}i.setLenses=function(e,t){var n=Number.MAX_VALUE;return S(e),t&&t.forEach(function(a){var s=a.start.row,g=a.start.column,o=e.lineWidgets&&e.lineWidgets[s];(!o||!o.lenses)&&(o=e.widgetManager.$registerLineWidget({rowCount:1,rowsAbove:1,row:s,column:g,lenses:[]})),o.lenses.push(a.command),s<n&&(n=s)}),e._emit("changeFold",{data:{start:{row:n}}}),n};function A(e){e.codeLensProviders=[],e.renderer.on("afterRender",H),e.$codeLensClickHandler||(e.$codeLensClickHandler=function(n){var a=n.target.lensCommand;a&&(e.execCommand(a.id,a.arguments),e._emit("codeLensClick",n))},h.addListener(e.container,"click",e.$codeLensClickHandler,e)),e.$updateLenses=function(){var n=e.session;if(!n)return;var a=e.codeLensProviders.length,s=[];e.codeLensProviders.forEach(function(o){o.provideCodeLenses(n,function(L,l){L||(l.forEach(function(x){s.push(x)}),a--,a==0&&g())})});function g(){var o=n.selection.cursor,L=n.documentToScreenRow(o),l=n.getScrollTop(),x=i.setLenses(n,s),f=n.$undoManager&&n.$undoManager.$lastDelta;if(!(f&&f.action=="remove"&&f.lines.length>1)){var $=n.documentToScreenRow(o),d=e.renderer.layerConfig.lineHeight,m=n.getScrollTop()+($-L)*d;x==0&&l<d/4&&l>-d/4&&(m=-d),n.setScrollTop(m)}}};var t=k.delayedCall(e.$updateLenses);e.$updateLensesOnInput=function(){t.delay(250)},e.on("input",e.$updateLensesOnInput)}function P(e){e.off("input",e.$updateLensesOnInput),e.renderer.off("afterRender",H),e.$codeLensClickHandler&&e.container.removeEventListener("click",e.$codeLensClickHandler)}i.registerCodeLensProvider=function(e,t){e.setOption("enableCodeLens",!0),e.codeLensProviders.push(t),e.$updateLensesOnInput()},i.clear=function(e){i.setLenses(e,null)};var R=r("../editor").Editor;r("../config").defineOptions(R.prototype,"editor",{enableCodeLens:{set:function(e){e?A(this):P(this)}}}),_.importCssString(`
.ace_codeLens {
    position: absolute;
    color: #aaa;
    font-size: 88%;
    background: inherit;
    width: 100%;
    display: flex;
    align-items: flex-end;
    pointer-events: none;
}
.ace_codeLens > a {
    cursor: pointer;
    pointer-events: auto;
}
.ace_codeLens > a:hover {
    color: #0000ff;
    text-decoration: underline;
}
.ace_dark > .ace_codeLens > a:hover {
    color: #4e94ce;
}
`,"codelense.css",!1)}),(function(){ace.require(["ace/ext/code_lens"],function(r){v&&(v.exports=r)})})()})(w)),w.exports}var T=F();const G=D(T),U=I({__proto__:null,default:G},[T]);export{U as e};
