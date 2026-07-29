import{R as a}from"./theme-terminal-CpvPyzw-.js";function u(r,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}},s;function d(){return s||(s=1,(function(r,i){ace.define("ace/snippets/cedar.snippets",["require","exports","module"],function(n,e,t){t.exports=`snippet permit
	permit (
	    principal == \${1:Principal}::"\${2:id}",
	    action == Action::"\${3:action}",
	    resource == \${4:Resource}::"\${5:id}"
	)\${0};
snippet permit_when
	permit (principal, action, resource)
	when { \${0:condition} };
snippet forbid
	forbid (principal, action, resource)
	when { \${0:condition} };
snippet forbid_unless
	forbid (principal, action, resource)
	unless { \${0:condition} };
snippet when
	when { \${0:condition} }
snippet unless
	unless { \${0:condition} }
snippet annotation
	@\${1:name}("\${2:value}")
`}),ace.define("ace/snippets/cedar",["require","exports","module","ace/snippets/cedar.snippets"],function(n,e,t){e.snippetText=n("./cedar.snippets"),e.scope="cedar"}),(function(){ace.require(["ace/snippets/cedar"],function(n){r&&(r.exports=n)})})()})(p)),p.exports}var c=d();const f=a(c),$=u({__proto__:null,default:f},[c]);export{$ as c};
