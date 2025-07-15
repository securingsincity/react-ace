import{a0 as o}from"./theme-terminal-ylQyTtHj.js";function u(r,p){for(var n=0;n<p.length;n++){const e=p[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}},a;function g(){return a||(a=1,function(r,p){ace.define("ace/snippets/graphqlschema.snippets",["require","exports","module"],function(n,e,t){t.exports=`# Type Snippet
trigger type
snippet type
	type \${1:type_name} {
		\${2:type_siblings}
	}

# Input Snippet
trigger input
snippet input
	input \${1:input_name} {
		\${2:input_siblings}
	}

# Interface Snippet
trigger interface
snippet interface
	interface \${1:interface_name} {
		\${2:interface_siblings}
	}

# Interface Snippet
trigger union
snippet union
	union \${1:union_name} = \${2:type} | \${3: type}

# Enum Snippet
trigger enum
snippet enum
	enum \${1:enum_name} {
		\${2:enum_siblings}
	}
`}),ace.define("ace/snippets/graphqlschema",["require","exports","module","ace/snippets/graphqlschema.snippets"],function(n,e,t){e.snippetText=n("./graphqlschema.snippets"),e.scope="graphqlschema"}),function(){ace.require(["ace/snippets/graphqlschema"],function(n){r&&(r.exports=n)})}()}(s)),s.exports}var c=g();const f=o(c),l=u({__proto__:null,default:f},[c]);export{l as g};
