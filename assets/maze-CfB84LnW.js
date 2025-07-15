import{a0 as c}from"./theme-terminal-ylQyTtHj.js";function u(n,s){for(var t=0;t<s.length;t++){const e=s[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}},i;function f(){return i||(i=1,function(n,s){ace.define("ace/snippets/maze.snippets",["require","exports","module"],function(t,e,r){r.exports=`snippet >
description assignment
scope maze
	-> \${1}= \${2}

snippet >
description if
scope maze
	-> IF \${2:**} THEN %\${3:L} ELSE %\${4:R}
`}),ace.define("ace/snippets/maze",["require","exports","module","ace/snippets/maze.snippets"],function(t,e,r){e.snippetText=t("./maze.snippets"),e.scope="maze"}),function(){ace.require(["ace/snippets/maze"],function(t){n&&(n.exports=t)})}()}(p)),p.exports}var a=f();const m=c(a),d=u({__proto__:null,default:m},[a]);export{d as m};
