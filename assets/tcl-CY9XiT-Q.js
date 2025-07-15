import{a0 as a}from"./theme-terminal-ylQyTtHj.js";function f(i,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in i)){const s=Object.getOwnPropertyDescriptor(t,e);s&&Object.defineProperty(i,e,s.get?s:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}},o;function l(){return o||(o=1,function(i,r){ace.define("ace/snippets/tcl.snippets",["require","exports","module"],function(n,t,e){e.exports=`# #!/usr/bin/env tclsh
snippet #!
	#!/usr/bin/env tclsh
	
# Process
snippet pro
	proc \${1:function_name} {\${2:args}} {
		\${3:#body ...}
	}
#xif
snippet xif
	\${1:expr}? \${2:true} : \${3:false}
# Conditional
snippet if
	if {\${1}} {
		\${2:# body...}
	}
# Conditional if..else
snippet ife
	if {\${1}} {
		\${2:# body...}
	} else {
		\${3:# else...}
	}
# Conditional if..elsif..else
snippet ifee
	if {\${1}} {
		\${2:# body...}
	} elseif {\${3}} {
		\${4:# elsif...}
	} else {
		\${5:# else...}
	}
# If catch then
snippet ifc
	if { [catch {\${1:#do something...}} \${2:err}] } {
		\${3:# handle failure...}
	}
# Catch
snippet catch
	catch {\${1}} \${2:err} \${3:options}
# While Loop
snippet wh
	while {\${1}} {
		\${2:# body...}
	}
# For Loop
snippet for
	for {set \${2:var} 0} {$$2 < \${1:count}} {\${3:incr} $2} {
		\${4:# body...}
	}
# Foreach Loop
snippet fore
	foreach \${1:x} {\${2:#list}} {
		\${3:# body...}
	}
# after ms script...
snippet af
	after \${1:ms} \${2:#do something}
# after cancel id
snippet afc
	after cancel \${1:id or script}
# after idle
snippet afi
	after idle \${1:script}
# after info id
snippet afin
	after info \${1:id}
# Expr
snippet exp
	expr {\${1:#expression here}}
# Switch
snippet sw
	switch \${1:var} {
		\${3:pattern 1} {
			\${4:#do something}
		}
		default {
			\${2:#do something}
		}
	}
# Case
snippet ca
	\${1:pattern} {
		\${2:#do something}
	}\${3}
# Namespace eval
snippet ns
	namespace eval \${1:path} {\${2:#script...}}
# Namespace current
snippet nsc
	namespace current
`}),ace.define("ace/snippets/tcl",["require","exports","module","ace/snippets/tcl.snippets"],function(n,t,e){t.snippetText=n("./tcl.snippets"),t.scope="tcl"}),function(){ace.require(["ace/snippets/tcl"],function(n){i&&(i.exports=n)})}()}(p)),p.exports}var c=l();const $=a(c),d=f({__proto__:null,default:$},[c]);export{d as t};
