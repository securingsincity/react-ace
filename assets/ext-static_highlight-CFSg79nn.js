import{a0 as D}from"./theme-terminal-ylQyTtHj.js";function F(m,S){for(var a=0;a<S.length;a++){const u=S[a];if(typeof u!="string"&&!Array.isArray(u)){for(const l in u)if(l!=="default"&&!(l in m)){const v=Object.getOwnPropertyDescriptor(u,l);v&&Object.defineProperty(m,l,v.get?v:{enumerable:!0,get:()=>u[l]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}},E;function H(){return E||(E=1,function(m,S){ace.define("ace/ext/static-css",["require","exports","module"],function(a,u,l){l.exports=`.ace_static_highlight {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'Source Code Pro', 'source-code-pro', 'Droid Sans Mono', monospace;
    font-size: 12px;
    white-space: pre-wrap
}

.ace_static_highlight .ace_gutter {
    width: 2em;
    text-align: right;
    padding: 0 3px 0 0;
    margin-right: 3px;
    contain: none;
}

.ace_static_highlight.ace_show_gutter .ace_line {
    padding-left: 2.6em;
}

.ace_static_highlight .ace_line { position: relative; }

.ace_static_highlight .ace_gutter-cell {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    top: 0;
    bottom: 0;
    left: 0;
    position: absolute;
}


.ace_static_highlight .ace_gutter-cell:before {
    content: counter(ace_line, decimal);
    counter-increment: ace_line;
}
.ace_static_highlight {
    counter-reset: ace_line;
}
`}),ace.define("ace/ext/static_highlight",["require","exports","module","ace/edit_session","ace/layer/text","ace/ext/static-css","ace/config","ace/lib/dom","ace/lib/lang"],function(a,u,l){var v=a("../edit_session").EditSession,L=a("../layer/text").Text,$=a("./static-css"),w=a("../config"),O=a("../lib/dom"),z=a("../lib/lang").escapeHTML,N=function(){function e(t){this.className,this.type=t,this.style={},this.textContent=""}return e.prototype.cloneNode=function(){return this},e.prototype.appendChild=function(t){this.textContent+=t.toString()},e.prototype.toString=function(){var t=[];if(this.type!="fragment"){t.push("<",this.type),this.className&&t.push(" class='",this.className,"'");var r=[];for(var o in this.style)r.push(o,":",this.style[o]);r.length&&t.push(" style='",r.join(""),"'"),t.push(">")}return this.textContent&&t.push(this.textContent),this.type!="fragment"&&t.push("</",this.type,">"),t.join("")},e}(),_={createTextNode:function(e,t){return z(e)},createElement:function(e){return new N(e)},createFragment:function(){return new N("fragment")}},M=function(){this.config={},this.dom=_};M.prototype=L.prototype;var x=function(e,t,r){var o=e.className.match(/lang-(\w+)/),d=t.mode||o&&"ace/mode/"+o[1];if(!d)return!1;var c=t.theme||"ace/theme/textmate",n="",g=[];if(e.firstElementChild)for(var h=0,s=0;s<e.childNodes.length;s++){var i=e.childNodes[s];i.nodeType==3?(h+=i.data.length,n+=i.data):g.push(h,i)}else n=e.textContent,t.trim&&(n=n.trim());x.render(n,d,c,t.firstLineNumber,!t.showGutter,function(f){O.importCssString(f.css,"ace_highlight",!0),e.innerHTML=f.html;for(var y=e.firstChild.firstChild,p=0;p<g.length;p+=2){var C=f.session.doc.indexToPosition(g[p]),P=g[p+1],T=y.children[C.row];T&&T.appendChild(P)}r&&r()})};x.render=function(e,t,r,o,d,c){var n=1,g=v.prototype.$modes;typeof r=="string"&&(n++,w.loadModule(["theme",r],function(i){r=i,--n||s()}));var h;t&&typeof t=="object"&&!t.getTokenizer&&(h=t,t=h.path),typeof t=="string"&&(n++,w.loadModule(["mode",t],function(i){(!g[t]||h)&&(g[t]=new i.Mode(h)),t=g[t],--n||s()}));function s(){var i=x.renderSync(e,t,r,o,d);return c?c(i):i}return--n||s()},x.renderSync=function(e,t,r,o,d){o=parseInt(o||1,10);var c=new v("");c.setUseWorker(!1),c.setMode(t);var n=new M;n.setSession(c),Object.keys(n.$tabStrings).forEach(function(p){if(typeof n.$tabStrings[p]=="string"){var C=_.createFragment();C.textContent=n.$tabStrings[p],n.$tabStrings[p]=C}}),c.setValue(e);var g=c.getLength(),h=_.createElement("div");h.className=r.cssClass;var s=_.createElement("div");s.className="ace_static_highlight"+(d?"":" ace_show_gutter"),s.style["counter-reset"]="ace_line "+(o-1);for(var i=0;i<g;i++){var f=_.createElement("div");if(f.className="ace_line",!d){var y=_.createElement("span");y.className="ace_gutter ace_gutter-cell",y.textContent="",f.appendChild(y)}n.$renderLine(f,i,!1),f.textContent+=`
`,s.appendChild(f)}return h.appendChild(s),{css:$+r.cssText,html:h.toString(),session:c}},l.exports=x,l.exports.highlight=x}),function(){ace.require(["ace/ext/static_highlight"],function(a){m&&(m.exports=a)})}()}(b)),b.exports}var j=H();const A=D(j),k=F({__proto__:null,default:A},[j]);export{k as e};
