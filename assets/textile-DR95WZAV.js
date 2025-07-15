import{a0 as a}from"./theme-terminal-ylQyTtHj.js";function u(r,i){for(var t=0;t<i.length;t++){const e=i[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const o=Object.getOwnPropertyDescriptor(e,n);o&&Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}},s;function c(){return s||(s=1,function(r,i){ace.define("ace/snippets/textile.snippets",["require","exports","module"],function(t,e,n){n.exports=`# Jekyll post header
snippet header
	---
	title: \${1:title}
	layout: post
	date: \${2:date} \${3:hour:minute:second} -05:00
	---

# Image
snippet img
	!\${1:url}(\${2:title}):\${3:link}!

# Table
snippet |
	|\${1}|\${2}

# Link
snippet link
	"\${1:link text}":\${2:url}

# Acronym
snippet (
	(\${1:Expand acronym})\${2}

# Footnote
snippet fn
	[\${1:ref number}] \${3}

	fn$1. \${2:footnote}
	
`}),ace.define("ace/snippets/textile",["require","exports","module","ace/snippets/textile.snippets"],function(t,e,n){e.snippetText=t("./textile.snippets"),e.scope="textile"}),function(){ace.require(["ace/snippets/textile"],function(t){r&&(r.exports=t)})}()}(p)),p.exports}var l=c();const f=a(l),$=u({__proto__:null,default:f},[l]);export{$ as t};
