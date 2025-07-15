import{a0 as u}from"./theme-terminal-ylQyTtHj.js";function f(r,o){for(var t=0;t<o.length;t++){const e=o[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}},s;function l(){return s||(s=1,function(r,o){ace.define("ace/snippets/lua.snippets",["require","exports","module"],function(t,e,n){n.exports=`snippet #!
	#!/usr/bin/env lua
	$1
snippet local
	local \${1:x} = \${2:1}
snippet fun
	function \${1:fname}(\${2:...})
		\${3:-- body}
	end
snippet for
	for \${1:i}=\${2:1},\${3:10} do
		\${4:print(i)}
	end
snippet forp
	for \${1:i},\${2:v} in pairs(\${3:table_name}) do
	   \${4:-- body}
	end
snippet fori
	for \${1:i},\${2:v} in ipairs(\${3:table_name}) do
	   \${4:-- body}
	end
`}),ace.define("ace/snippets/lua",["require","exports","module","ace/snippets/lua.snippets"],function(t,e,n){e.snippetText=t("./lua.snippets"),e.scope="lua"}),function(){ace.require(["ace/snippets/lua"],function(t){r&&(r.exports=t)})}()}(p)),p.exports}var a=l();const c=u(a),$=f({__proto__:null,default:c},[a]);export{$ as l};
