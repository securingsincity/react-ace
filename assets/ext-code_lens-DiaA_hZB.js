import{a0 as I}from"./theme-terminal-ylQyTtHj.js";function F(v,w){for(var r=0;r<w.length;r++){const i=w[r];if(typeof i!="string"&&!Array.isArray(i)){for(const g in i)if(g!=="default"&&!(g in v)){const h=Object.getOwnPropertyDescriptor(i,g);h&&Object.defineProperty(v,g,h.get?h:{enumerable:!0,get:()=>i[g]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}},O;function G(){return O||(O=1,function(v,w){ace.define("ace/ext/code_lens",["require","exports","module","ace/line_widgets","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/editor","ace/config"],function(r,i,g){var h=r("../line_widgets").LineWidgets,k=r("../lib/event"),N=r("../lib/lang"),C=r("../lib/dom");function S(e){var t=e.$textLayer,n=t.$lenses;n&&n.forEach(function(o){o.remove()}),t.$lenses=null}function W(e,t){var n=e&t.CHANGE_LINES||e&t.CHANGE_FULL||e&t.CHANGE_SCROLL||e&t.CHANGE_TEXT;if(n){var o=t.session,s=t.session.lineWidgets,p=t.$textLayer,a=p.$lenses;if(!s){a&&S(t);return}var L=t.$textLayer.$lines.cells,l=t.layerConfig,x=t.$padding;a||(a=p.$lenses=[]);for(var d=0,_=0;_<L.length;_++){var f=L[_].row,m=s[f],$=m&&m.lenses;if(!(!$||!$.length)){var c=a[d];c||(c=a[d]=C.buildDom(["div",{class:"ace_codeLens"}],t.container)),c.style.height=l.lineHeight+"px",d++;for(var u=0;u<$.length;u++){var E=c.childNodes[2*u];E||(u!=0&&c.appendChild(C.createTextNode(" | ")),E=C.buildDom(["a"],c)),E.textContent=$[u].title,E.lensCommand=$[u]}for(;c.childNodes.length>2*u-1;)c.lastChild.remove();var D=t.$cursorLayer.getPixelPosition({row:f,column:0},!0).top-l.lineHeight*m.rowsAbove-l.offset;c.style.top=D+"px";var H=t.gutterWidth,y=o.getLine(f).search(/\S|$/);y==-1&&(y=0),H+=y*l.characterWidth,c.style.paddingLeft=x+H+"px"}}for(;d<a.length;)a.pop().remove()}}function A(e){if(e.lineWidgets){var t=e.widgetManager;e.lineWidgets.forEach(function(n){n&&n.lenses&&t.removeLineWidget(n)})}}i.setLenses=function(e,t){var n=Number.MAX_VALUE;return A(e),t&&t.forEach(function(o){var s=o.start.row,p=o.start.column,a=e.lineWidgets&&e.lineWidgets[s];(!a||!a.lenses)&&(a=e.widgetManager.$registerLineWidget({rowCount:1,rowsAbove:1,row:s,column:p,lenses:[]})),a.lenses.push(o.command),s<n&&(n=s)}),e._emit("changeFold",{data:{start:{row:n}}}),n};function M(e){e.codeLensProviders=[],e.renderer.on("afterRender",W),e.$codeLensClickHandler||(e.$codeLensClickHandler=function(n){var o=n.target.lensCommand;o&&(e.execCommand(o.id,o.arguments),e._emit("codeLensClick",n))},k.addListener(e.container,"click",e.$codeLensClickHandler,e)),e.$updateLenses=function(){var n=e.session;if(!n)return;n.widgetManager||(n.widgetManager=new h(n),n.widgetManager.attach(e));var o=e.codeLensProviders.length,s=[];e.codeLensProviders.forEach(function(a){a.provideCodeLenses(n,function(L,l){L||(l.forEach(function(x){s.push(x)}),o--,o==0&&p())})});function p(){var a=n.selection.cursor,L=n.documentToScreenRow(a),l=n.getScrollTop(),x=i.setLenses(n,s),d=n.$undoManager&&n.$undoManager.$lastDelta;if(!(d&&d.action=="remove"&&d.lines.length>1)){var _=n.documentToScreenRow(a),f=e.renderer.layerConfig.lineHeight,m=n.getScrollTop()+(_-L)*f;x==0&&l<f/4&&l>-f/4&&(m=-f),n.setScrollTop(m)}}};var t=N.delayedCall(e.$updateLenses);e.$updateLensesOnInput=function(){t.delay(250)},e.on("input",e.$updateLensesOnInput)}function P(e){e.off("input",e.$updateLensesOnInput),e.renderer.off("afterRender",W),e.$codeLensClickHandler&&e.container.removeEventListener("click",e.$codeLensClickHandler)}i.registerCodeLensProvider=function(e,t){e.setOption("enableCodeLens",!0),e.codeLensProviders.push(t),e.$updateLensesOnInput()},i.clear=function(e){i.setLenses(e,null)};var R=r("../editor").Editor;r("../config").defineOptions(R.prototype,"editor",{enableCodeLens:{set:function(e){e?M(this):P(this)}}}),C.importCssString(`
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
`,"codelense.css",!1)}),function(){ace.require(["ace/ext/code_lens"],function(r){v&&(v.exports=r)})}()}(b)),b.exports}var T=G();const z=I(T),X=F({__proto__:null,default:z},[T]);export{X as e};
