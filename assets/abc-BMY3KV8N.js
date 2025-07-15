import{a0 as c}from"./theme-terminal-ylQyTtHj.js";function f(o,p){for(var t=0;t<p.length;t++){const e=p[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in o)){const s=Object.getOwnPropertyDescriptor(e,n);s&&Object.defineProperty(o,n,s.get?s:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var r={exports:{}},i;function u(){return i||(i=1,function(o,p){ace.define("ace/snippets/abc.snippets",["require","exports","module"],function(t,e,n){n.exports=`
snippet zupfnoter.print
	%%%%hn.print {"startpos": \${1:pos_y}, "t":"\${2:title}", "v":[\${3:voices}], "s":[[\${4:syncvoices}1,2]], "f":[\${5:flowlines}],  "sf":[\${6:subflowlines}], "j":[\${7:jumplines}]}

snippet zupfnoter.note
	%%%%hn.note {"pos": [\${1:pos_x},\${2:pos_y}], "text": "\${3:text}", "style": "\${4:style}"}

snippet zupfnoter.annotation
	%%%%hn.annotation {"id": "\${1:id}", "pos": [\${2:pos}], "text": "\${3:text}"}

snippet zupfnoter.lyrics
	%%%%hn.lyrics {"pos": [\${1:x_pos},\${2:y_pos}]}

snippet zupfnoter.legend
	%%%%hn.legend {"pos": [\${1:x_pos},\${2:y_pos}]}



snippet zupfnoter.target
	"^:\${1:target}"

snippet zupfnoter.goto
	"^@\${1:target}@\${2:distance}"

snippet zupfnoter.annotationref
	"^#\${1:target}"

snippet zupfnoter.annotation
	"^!\${1:text}@\${2:x_offset},\${3:y_offset}"


`}),ace.define("ace/snippets/abc",["require","exports","module","ace/snippets/abc.snippets"],function(t,e,n){e.snippetText=t("./abc.snippets"),e.scope="abc"}),function(){ace.require(["ace/snippets/abc"],function(t){o&&(o.exports=t)})}()}(r)),r.exports}var a=u();const $=c(a),x=f({__proto__:null,default:$},[a]);export{x as a};
