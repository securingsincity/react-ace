import{a0 as l}from"./theme-terminal-ylQyTtHj.js";function c(n,p){for(var e=0;e<p.length;e++){const t=p[e];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in n)){const a=Object.getOwnPropertyDescriptor(t,r);a&&Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},s;function u(){return s||(s=1,function(n,p){ace.define("ace/snippets/haml.snippets",["require","exports","module"],function(e,t,r){r.exports=`snippet t
	%table
		%tr
			%th
				\${1:headers}
		%tr
			%td
				\${2:headers}
snippet ul
	%ul
		%li
			\${1:item}
		%li
snippet =rp
	= render :partial => '\${1:partial}'
snippet =rpl
	= render :partial => '\${1:partial}', :locals => {}
snippet =rpc
	= render :partial => '\${1:partial}', :collection => @$1

`}),ace.define("ace/snippets/haml",["require","exports","module","ace/snippets/haml.snippets"],function(e,t,r){t.snippetText=e("./haml.snippets"),t.scope="haml"}),function(){ace.require(["ace/snippets/haml"],function(e){n&&(n.exports=e)})}()}(i)),i.exports}var o=u();const f=l(o),d=c({__proto__:null,default:f},[o]);export{d as h};
