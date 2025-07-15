import{a0 as a}from"./theme-terminal-ylQyTtHj.js";function d(s,o){for(var e=0;e<o.length;e++){const t=o[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in s)){const r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(s,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},p;function u(){return p||(p=1,function(s,o){ace.define("ace/snippets/csound_orchestra.snippets",["require","exports","module"],function(e,t,n){n.exports=`# else
snippet else
	else
		\${1:/* statements */}
# elseif
snippet elseif
	elseif \${1:/* condition */} then
		\${2:/* statements */}
# if
snippet if
	if \${1:/* condition */} then
		\${2:/* statements */}
	endif
# instrument block
snippet instr
	instr \${1:name}
		\${2:/* statements */}
	endin
# i-time while loop
snippet iwhile
	i\${1:Index} = \${2:0}
	while i\${1:Index} < \${3:/* count */} do
		\${4:/* statements */}
		i\${1:Index} += 1
	od
# k-rate while loop
snippet kwhile
	k\${1:Index} = \${2:0}
	while k\${1:Index} < \${3:/* count */} do
		\${4:/* statements */}
		k\${1:Index} += 1
	od
# opcode
snippet opcode
	opcode \${1:name}, \${2:/* output types */ 0}, \${3:/* input types */ 0}
		\${4:/* statements */}
	endop
# until loop
snippet until
	until \${1:/* condition */} do
		\${2:/* statements */}
	od
# while loop
snippet while
	while \${1:/* condition */} do
		\${2:/* statements */}
	od
`}),ace.define("ace/snippets/csound_orchestra",["require","exports","module","ace/snippets/csound_orchestra.snippets"],function(e,t,n){t.snippetText=e("./csound_orchestra.snippets"),t.scope="csound_orchestra"}),function(){ace.require(["ace/snippets/csound_orchestra"],function(e){s&&(s.exports=e)})}()}(i)),i.exports}var c=u();const l=a(c),$=d({__proto__:null,default:l},[c]);export{$ as c};
