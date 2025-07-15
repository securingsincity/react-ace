import{a0 as f}from"./theme-terminal-ylQyTtHj.js";function c(r,s){for(var t=0;t<s.length;t++){const e=s[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={exports:{}},a;function u(){return a||(a=1,function(r,s){ace.define("ace/snippets/fsl.snippets",["require","exports","module"],function(t,e,n){n.exports=`snippet header
	machine_name     : "";
	machine_author   : "";
	machine_license  : MIT;
	machine_comment  : "";
	machine_language : en;
	machine_version  : 1.0.0;
	fsl_version      : 1.0.0;
	start_states     : [];
`}),ace.define("ace/snippets/fsl",["require","exports","module","ace/snippets/fsl.snippets"],function(t,e,n){e.snippetText=t("./fsl.snippets"),e.scope="fsl"}),function(){ace.require(["ace/snippets/fsl"],function(t){r&&(r.exports=t)})}()}(o)),o.exports}var p=u();const l=f(p),_=c({__proto__:null,default:l},[p]);export{_ as f};
