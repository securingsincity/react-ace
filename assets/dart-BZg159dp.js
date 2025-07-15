import{a0 as $}from"./theme-terminal-ylQyTtHj.js";function c(i,p){for(var n=0;n<p.length;n++){const t=p[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in i)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(i,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}},o;function f(){return o||(o=1,function(i,p){ace.define("ace/snippets/dart.snippets",["require","exports","module"],function(n,t,e){e.exports=`snippet lib
	library \${1};
	\${2}
snippet im
	import '\${1}';
	\${2}
snippet pa
	part '\${1}';
	\${2}
snippet pao
	part of \${1};
	\${2}
snippet main
	void main() {
	  \${1:/* code */}
	}
snippet st
	static \${1}
snippet fi
	final \${1}
snippet re
	return \${1}
snippet br
	break;
snippet th
	throw \${1}
snippet cl
	class \${1:\`Filename("", "untitled")\`} \${2}
snippet imp
	implements \${1}
snippet ext
	extends \${1}
snippet if
	if (\${1:true}) {
	  \${2}
	}
snippet ife
	if (\${1:true}) {
	  \${2}
	} else {
	  \${3}
	}
snippet el
	else
snippet sw
	switch (\${1}) {
	  \${2}
	}
snippet cs
	case \${1}:
	  \${2}
snippet de
	default:
	  \${1}
snippet for
	for (var \${2:i} = 0, len = \${1:things}.length; $2 < len; \${3:++}$2) {
	  \${4:$1[$2]}
	}
snippet fore
	for (final \${2:item} in \${1:itemList}) {
	  \${3:/* code */}
	}
snippet wh
	while (\${1:/* condition */}) {
	  \${2:/* code */}
	}
snippet dowh
	do {
	  \${2:/* code */}
	} while (\${1:/* condition */});
snippet as
	assert(\${1:/* condition */});
snippet try
	try {
	  \${2}
	} catch (\${1:Exception e}) {
	}
snippet tryf
	try {
	  \${2}
	} catch (\${1:Exception e}) {
	} finally {
	}
`}),ace.define("ace/snippets/dart",["require","exports","module","ace/snippets/dart.snippets"],function(n,t,e){t.snippetText=n("./dart.snippets"),t.scope="dart"}),function(){ace.require(["ace/snippets/dart"],function(n){i&&(i.exports=n)})}()}(s)),s.exports}var a=f();const d=$(a),u=c({__proto__:null,default:d},[a]);export{u as d};
