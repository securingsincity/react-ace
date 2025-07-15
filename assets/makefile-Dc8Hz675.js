import{a0 as a}from"./theme-terminal-ylQyTtHj.js";function c(i,n){for(var t=0;t<n.length;t++){const e=n[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in i)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(i,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}},f;function u(){return f||(f=1,function(i,n){ace.define("ace/snippets/makefile.snippets",["require","exports","module"],function(t,e,r){r.exports=`snippet ifeq
	ifeq (\${1:cond0},\${2:cond1})
		\${3:code}
	endif
`}),ace.define("ace/snippets/makefile",["require","exports","module","ace/snippets/makefile.snippets"],function(t,e,r){e.snippetText=t("./makefile.snippets"),e.scope="makefile"}),function(){ace.require(["ace/snippets/makefile"],function(t){i&&(i.exports=t)})}()}(s)),s.exports}var p=u();const l=a(p),d=c({__proto__:null,default:l},[p]);export{d as m};
