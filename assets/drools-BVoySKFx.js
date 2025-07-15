import{a0 as a}from"./theme-terminal-ylQyTtHj.js";function l(n,o){for(var t=0;t<o.length;t++){const e=o[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}},i;function c(){return i||(i=1,function(n,o){ace.define("ace/snippets/drools.snippets",["require","exports","module"],function(t,e,r){r.exports=`
snippet rule
	rule "\${1?:rule_name}"
	when
		\${2:// when...} 
	then
		\${3:// then...}
	end

snippet query
	query \${1?:query_name}
		\${2:// find} 
	end
	
snippet declare
	declare \${1?:type_name}
		\${2:// attributes} 
	end

`}),ace.define("ace/snippets/drools",["require","exports","module","ace/snippets/drools.snippets"],function(t,e,r){e.snippetText=t("./drools.snippets"),e.scope="drools"}),function(){ace.require(["ace/snippets/drools"],function(t){n&&(n.exports=t)})}()}(p)),p.exports}var u=c();const d=a(u),x=l({__proto__:null,default:d},[u]);export{x as d};
