import{a0 as $}from"./theme-terminal-ylQyTtHj.js";function u(t,p){for(var n=0;n<p.length;n++){const e=p[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},a;function x(){return a||(a=1,function(t,p){ace.define("ace/snippets/xquery.snippets",["require","exports","module"],function(n,e,r){r.exports=`snippet for
			for $\${1:item} in \${2:expr}
		snippet return
			return \${1:expr}
		snippet import
			import module namespace \${1:ns} = "\${2:http://www.example.com/}";
		snippet some
			some $\${1:varname} in \${2:expr} satisfies \${3:expr}
		snippet every
			every $\${1:varname} in \${2:expr} satisfies \${3:expr}
		snippet if
			if(\${1:true}) then \${2:expr} else \${3:true}
		snippet switch
			switch(\${1:"foo"})
			case \${2:"foo"}
			return \${3:true}
			default return \${4:false}
		snippet try
			try { \${1:expr} } catch \${2:*} { \${3:expr} }
		snippet tumbling
			for tumbling window $\${1:varname} in \${2:expr}
			start at $\${3:start} when \${4:expr}
			end at $\${5:end} when \${6:expr}
			return \${7:expr}
		snippet sliding
			for sliding window $\${1:varname} in \${2:expr}
			start at $\${3:start} when \${4:expr}
			end at $\${5:end} when \${6:expr}
			return \${7:expr}
		snippet let
			let $\${1:varname} := \${2:expr}
		snippet group
			group by $\${1:varname} := \${2:expr}
		snippet order
			order by \${1:expr} \${2:descending}
		snippet stable
			stable order by \${1:expr}
		snippet count
			count $\${1:varname}
		snippet ordered
			ordered { \${1:expr} }
		snippet unordered
			unordered { \${1:expr} }
		snippet treat 
			treat as \${1:expr}
		snippet castable
			castable as \${1:atomicType}
		snippet cast
			cast as \${1:atomicType}
		snippet typeswitch
			typeswitch(\${1:expr})
			case \${2:type}  return \${3:expr}
			default return \${4:expr}
		snippet var
			declare variable $\${1:varname} := \${2:expr};
		snippet fn
			declare function \${1:ns}:\${2:name}(){
			\${3:expr}
			};
		snippet module
			module namespace \${1:ns} = "\${2:http://www.example.com}";
		`}),ace.define("ace/snippets/xquery",["require","exports","module","ace/snippets/xquery.snippets"],function(n,e,r){e.snippetText=n("./xquery.snippets"),e.scope="xquery"}),function(){ace.require(["ace/snippets/xquery"],function(n){t&&(t.exports=n)})}()}(i)),i.exports}var o=x();const c=$(o),f=u({__proto__:null,default:c},[o]);export{f as x};
