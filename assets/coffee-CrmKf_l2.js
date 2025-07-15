import{a0 as c}from"./theme-terminal-ylQyTtHj.js";function a(s,o){for(var t=0;t<o.length;t++){const n=o[t];if(typeof n!="string"&&!Array.isArray(n)){for(const e in n)if(e!=="default"&&!(e in s)){const r=Object.getOwnPropertyDescriptor(n,e);r&&Object.defineProperty(s,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},p;function $(){return p||(p=1,function(s,o){ace.define("ace/snippets/coffee.snippets",["require","exports","module"],function(t,n,e){e.exports=`# Closure loop
snippet forindo
	for \${1:name} in \${2:array}
		do ($1) ->
			\${3:// body}
# Array comprehension
snippet fora
	for \${1:name} in \${2:array}
		\${3:// body...}
# Object comprehension
snippet foro
	for \${1:key}, \${2:value} of \${3:object}
		\${4:// body...}
# Range comprehension (inclusive)
snippet forr
	for \${1:name} in [\${2:start}..\${3:finish}]
		\${4:// body...}
snippet forrb
	for \${1:name} in [\${2:start}..\${3:finish}] by \${4:step}
		\${5:// body...}
# Range comprehension (exclusive)
snippet forrex
	for \${1:name} in [\${2:start}...\${3:finish}]
		\${4:// body...}
snippet forrexb
	for \${1:name} in [\${2:start}...\${3:finish}] by \${4:step}
		\${5:// body...}
# Function
snippet fun
	(\${1:args}) ->
		\${2:// body...}
# Function (bound)
snippet bfun
	(\${1:args}) =>
		\${2:// body...}
# Class
snippet cla class ..
	class \${1:\`substitute(Filename(), '\\(_\\|^\\)\\(.\\)', '\\u\\2', 'g')\`}
		\${2}
snippet cla class .. constructor: ..
	class \${1:\`substitute(Filename(), '\\(_\\|^\\)\\(.\\)', '\\u\\2', 'g')\`}
		constructor: (\${2:args}) ->
			\${3}

		\${4}
snippet cla class .. extends ..
	class \${1:\`substitute(Filename(), '\\(_\\|^\\)\\(.\\)', '\\u\\2', 'g')\`} extends \${2:ParentClass}
		\${3}
snippet cla class .. extends .. constructor: ..
	class \${1:\`substitute(Filename(), '\\(_\\|^\\)\\(.\\)', '\\u\\2', 'g')\`} extends \${2:ParentClass}
		constructor: (\${3:args}) ->
			\${4}

		\${5}
# If
snippet if
	if \${1:condition}
		\${2:// body...}
# If __ Else
snippet ife
	if \${1:condition}
		\${2:// body...}
	else
		\${3:// body...}
# Else if
snippet elif
	else if \${1:condition}
		\${2:// body...}
# Ternary If
snippet ifte
	if \${1:condition} then \${2:value} else \${3:other}
# Unless
snippet unl
	\${1:action} unless \${2:condition}
# Switch
snippet swi
	switch \${1:object}
		when \${2:value}
			\${3:// body...}

# Log
snippet log
	console.log \${1}
# Try __ Catch
snippet try
	try
		\${1}
	catch \${2:error}
		\${3}
# Require
snippet req
	\${2:$1} = require '\${1:sys}'\${3}
# Export
snippet exp
	\${1:root} = exports ? this
`}),ace.define("ace/snippets/coffee",["require","exports","module","ace/snippets/coffee.snippets"],function(t,n,e){n.snippetText=t("./coffee.snippets"),n.scope="coffee"}),function(){ace.require(["ace/snippets/coffee"],function(t){s&&(s.exports=t)})}()}(i)),i.exports}var f=$();const u=c(f),d=a({__proto__:null,default:u},[f]);export{d as c};
