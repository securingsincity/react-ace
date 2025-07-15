import{a0 as a}from"./theme-terminal-ylQyTtHj.js";function c(o,s){for(var t=0;t<s.length;t++){const n=s[t];if(typeof n!="string"&&!Array.isArray(n)){for(const e in n)if(e!=="default"&&!(e in o)){const p=Object.getOwnPropertyDescriptor(n,e);p&&Object.defineProperty(o,e,p.get?p:{enumerable:!0,get:()=>n[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},r;function u(){return r||(r=1,function(o,s){ace.define("ace/snippets/wollok.snippets",["require","exports","module"],function(t,n,e){e.exports=`##
## Basic Java packages and import
snippet im
	import
snippet w.l
	wollok.lang
snippet w.i
	wollok.lib

## Class and object
snippet cl
	class \${1:\`Filename("", "untitled")\`} \${2}
snippet obj
	object \${1:\`Filename("", "untitled")\`} \${2:inherits Parent}\${3}
snippet te
	test \${1:\`Filename("", "untitled")\`}

##
## Enhancements
snippet inh
	inherits

##
## Comments
snippet /*
	/*
	 * \${1}
	 */

##
## Control Statements
snippet el
	else
snippet if
	if (\${1}) \${2}

##
## Create a Method
snippet m
	method \${1:method}(\${2}) \${5}

##  
## Tests
snippet as
	assert.equals(\${1:expected}, \${2:actual})

##
## Exceptions
snippet ca
	catch \${1:e} : (\${2:Exception} ) \${3}
snippet thr
	throw
snippet try
	try {
		\${3}
	} catch \${1:e} : \${2:Exception} {
	}

##
## Javadocs
snippet /**
	/**
	 * \${1}
	 */

##
## Print Methods
snippet print
	console.println("\${1:Message}")

##
## Setter and Getter Methods
snippet set
	method set\${1:}(\${2:}) {
		$1 = $2
	}
snippet get
	method get\${1:}() {
		return \${1:};
	}

##
## Terminate Methods or Loops
snippet re
	return`}),ace.define("ace/snippets/wollok",["require","exports","module","ace/snippets/wollok.snippets"],function(t,n,e){n.snippetText=t("./wollok.snippets"),n.scope="wollok"}),function(){ace.require(["ace/snippets/wollok"],function(t){o&&(o.exports=t)})}()}(i)),i.exports}var l=u();const $=a(l),f=c({__proto__:null,default:$},[l]);export{f as w};
