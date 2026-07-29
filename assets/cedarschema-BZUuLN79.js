import{R as o}from"./theme-terminal-CpvPyzw-.js";function u(r,a){for(var t=0;t<a.length;t++){const e=a[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const c=Object.getOwnPropertyDescriptor(e,n);c&&Object.defineProperty(r,n,c.get?c:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},s;function m(){return s||(s=1,(function(r,a){ace.define("ace/snippets/cedarschema.snippets",["require","exports","module"],function(t,e,n){n.exports=`snippet namespace
	namespace \${1:Namespace} {
	    \${0}
	}
snippet entity
	entity \${1:EntityName} {
	    \${0}
	};
snippet entity_in
	entity \${1:EntityName} in [\${2:Parent}] {
	    \${0}
	};
snippet action
	action "\${1:actionName}" appliesTo {
	    principal: [\${2:Principal}],
	    resource: [\${3:Resource}],
	    context: {\${0}}
	};
snippet action_in
	action "\${1:actionName}" in [\${2:ParentAction}] appliesTo {
	    principal: [\${3:Principal}],
	    resource: [\${4:Resource}],
	    context: {\${0}}
	};
snippet type
	type \${1:TypeName} = {
	    \${0}
	};
`}),ace.define("ace/snippets/cedarschema",["require","exports","module","ace/snippets/cedarschema.snippets"],function(t,e,n){e.snippetText=t("./cedarschema.snippets"),e.scope="cedarschema"}),(function(){ace.require(["ace/snippets/cedarschema"],function(t){r&&(r.exports=t)})})()})(i)),i.exports}var p=m();const f=o(p),$=u({__proto__:null,default:f},[p]);export{$ as c};
