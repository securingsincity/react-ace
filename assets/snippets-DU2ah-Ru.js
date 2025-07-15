import{a0 as a}from"./theme-terminal-ylQyTtHj.js";function u(s,n){for(var t=0;t<n.length;t++){const e=n[t];if(typeof e!="string"&&!Array.isArray(e)){for(const p in e)if(p!=="default"&&!(p in s)){const r=Object.getOwnPropertyDescriptor(e,p);r&&Object.defineProperty(s,p,r.get?r:{enumerable:!0,get:()=>e[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},o;function f(){return o||(o=1,function(s,n){ace.define("ace/snippets/snippets.snippets",["require","exports","module"],function(t,e,p){p.exports=`# snippets for making snippets :)
snippet snip
	snippet \${1:trigger}
		\${2}
snippet msnip
	snippet \${1:trigger} \${2:description}
		\${3}
snippet v
	{VISUAL}
`}),ace.define("ace/snippets/snippets",["require","exports","module","ace/snippets/snippets.snippets"],function(t,e,p){e.snippetText=t("./snippets.snippets"),e.scope="snippets"}),function(){ace.require(["ace/snippets/snippets"],function(t){s&&(s.exports=t)})}()}(i)),i.exports}var c=f();const g=a(c),l=u({__proto__:null,default:g},[c]);export{l as s};
