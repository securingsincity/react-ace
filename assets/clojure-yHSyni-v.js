import{a0 as a}from"./theme-terminal-ylQyTtHj.js";function c(p,s){for(var n=0;n<s.length;n++){const e=s[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in p)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(p,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},o;function f(){return o||(o=1,function(p,s){ace.define("ace/snippets/clojure.snippets",["require","exports","module"],function(n,e,t){t.exports=`snippet comm
	(comment
	  \${1}
	  )
snippet condp
	(condp \${1:pred} \${2:expr}
	  \${3})
snippet def
	(def \${1})
snippet defm
	(defmethod \${1:multifn} "\${2:doc-string}" \${3:dispatch-val} [\${4:args}]
	  \${5})
snippet defmm
	(defmulti \${1:name} "\${2:doc-string}" \${3:dispatch-fn})
snippet defma
	(defmacro \${1:name} "\${2:doc-string}" \${3:dispatch-fn})
snippet defn
	(defn \${1:name} "\${2:doc-string}" [\${3:arg-list}]
	  \${4})
snippet defp
	(defprotocol \${1:name}
	  \${2})
snippet defr
	(defrecord \${1:name} [\${2:fields}]
	  \${3:protocol}
	  \${4})
snippet deft
	(deftest \${1:name}
	    (is (= \${2:assertion})))
	  \${3})
snippet is
	(is (= \${1} \${2}))
snippet defty
	(deftype \${1:Name} [\${2:fields}]
	  \${3:Protocol}
	  \${4})
snippet doseq
	(doseq [\${1:elem} \${2:coll}]
	  \${3})
snippet fn
	(fn [\${1:arg-list}] \${2})
snippet if
	(if \${1:test-expr}
	  \${2:then-expr}
	  \${3:else-expr})
snippet if-let 
	(if-let [\${1:result} \${2:test-expr}]
		(\${3:then-expr} $1)
		(\${4:else-expr}))
snippet imp
	(:import [\${1:package}])
	& {:keys [\${1:keys}] :or {\${2:defaults}}}
snippet let
	(let [\${1:name} \${2:expr}]
		\${3})
snippet letfn
	(letfn [(\${1:name) [\${2:args}]
	          \${3})])
snippet map
	(map \${1:func} \${2:coll})
snippet mapl
	(map #(\${1:lambda}) \${2:coll})
snippet met
	(\${1:name} [\${2:this} \${3:args}]
	  \${4})
snippet ns
	(ns \${1:name}
	  \${2})
snippet dotimes
	(dotimes [_ 10]
	  (time
	    (dotimes [_ \${1:times}]
	      \${2})))
snippet pmethod
	(\${1:name} [\${2:this} \${3:args}])
snippet refer
	(:refer-clojure :exclude [\${1}])
snippet require
	(:require [\${1:namespace} :as [\${2}]])
snippet use
	(:use [\${1:namespace} :only [\${2}]])
snippet print
	(println \${1})
snippet reduce
	(reduce \${1:(fn [p n] \${3})} \${2})
snippet when
	(when \${1:test} \${2:body})
snippet when-let
	(when-let [\${1:result} \${2:test}]
		\${3:body})
`}),ace.define("ace/snippets/clojure",["require","exports","module","ace/snippets/clojure.snippets"],function(n,e,t){e.snippetText=n("./clojure.snippets"),e.scope="clojure"}),function(){ace.require(["ace/snippets/clojure"],function(n){p&&(p.exports=n)})}()}(i)),i.exports}var $=f();const l=a($),u=c({__proto__:null,default:l},[$]);export{u as c};
