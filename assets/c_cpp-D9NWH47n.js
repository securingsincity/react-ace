import{a0 as d}from"./theme-terminal-ylQyTtHj.js";function c(p,s){for(var n=0;n<s.length;n++){const t=s[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in p)){const i=Object.getOwnPropertyDescriptor(t,e);i&&Object.defineProperty(p,e,i.get?i:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var r={exports:{}},$;function a(){return $||($=1,function(p,s){ace.define("ace/snippets/c_cpp.snippets",["require","exports","module"],function(n,t,e){e.exports=`## STL Collections
# std::array
snippet array
	std::array<\${1:T}, \${2:N}> \${3};\${4}
# std::vector
snippet vector
	std::vector<\${1:T}> \${2};\${3}
# std::deque
snippet deque
	std::deque<\${1:T}> \${2};\${3}
# std::forward_list
snippet flist
	std::forward_list<\${1:T}> \${2};\${3}
# std::list
snippet list
	std::list<\${1:T}> \${2};\${3}
# std::set
snippet set
	std::set<\${1:T}> \${2};\${3}
# std::map
snippet map
	std::map<\${1:Key}, \${2:T}> \${3};\${4}
# std::multiset
snippet mset
	std::multiset<\${1:T}> \${2};\${3}
# std::multimap
snippet mmap
	std::multimap<\${1:Key}, \${2:T}> \${3};\${4}
# std::unordered_set
snippet uset
	std::unordered_set<\${1:T}> \${2};\${3}
# std::unordered_map
snippet umap
	std::unordered_map<\${1:Key}, \${2:T}> \${3};\${4}
# std::unordered_multiset
snippet umset
	std::unordered_multiset<\${1:T}> \${2};\${3}
# std::unordered_multimap
snippet ummap
	std::unordered_multimap<\${1:Key}, \${2:T}> \${3};\${4}
# std::stack
snippet stack
	std::stack<\${1:T}> \${2};\${3}
# std::queue
snippet queue
	std::queue<\${1:T}> \${2};\${3}
# std::priority_queue
snippet pqueue
	std::priority_queue<\${1:T}> \${2};\${3}
##
## Access Modifiers
# private
snippet pri
	private
# protected
snippet pro
	protected
# public
snippet pub
	public
# friend
snippet fr
	friend
# mutable
snippet mu
	mutable
## 
## Class
# class
snippet cl
	class \${1:\`Filename('$1', 'name')\`} 
	{
	public:
		$1(\${2});
		~$1();

	private:
		\${3:/* data */}
	};
# member function implementation
snippet mfun
	\${4:void} \${1:\`Filename('$1', 'ClassName')\`}::\${2:memberFunction}(\${3}) {
		\${5:/* code */}
	}
# namespace
snippet ns
	namespace \${1:\`Filename('', 'my')\`} {
		\${2}
	} /* namespace $1 */
##
## Input/Output
# std::cout
snippet cout
	std::cout << \${1} << std::endl;\${2}
# std::cin
snippet cin
	std::cin >> \${1};\${2}
##
## Iteration
# for i 
snippet fori
	for (int \${2:i} = 0; $2 < \${1:count}; $2\${3:++}) {
		\${4:/* code */}
	}\${5}

# foreach
snippet fore
	for (\${1:auto} \${2:i} : \${3:container}) {
		\${4:/* code */}
	}\${5}
# iterator
snippet iter
	for (\${1:std::vector}<\${2:type}>::\${3:const_iterator} \${4:i} = \${5:container}.begin(); $4 != $5.end(); ++$4) {
		\${6}
	}\${7}

# auto iterator
snippet itera
	for (auto \${1:i} = $1.begin(); $1 != $1.end(); ++$1) {
		\${2:std::cout << *$1 << std::endl;}
	}\${3}
##
## Lambdas
# lamda (one line)
snippet ld
	[\${1}](\${2}){\${3:/* code */}}\${4}
# lambda (multi-line)
snippet lld
	[\${1}](\${2}){
		\${3:/* code */}
	}\${4}
`}),ace.define("ace/snippets/c_cpp",["require","exports","module","ace/snippets/c_cpp.snippets"],function(n,t,e){t.snippetText=n("./c_cpp.snippets"),t.scope="c_cpp"}),function(){ace.require(["ace/snippets/c_cpp"],function(n){p&&(p.exports=n)})}()}(r)),r.exports}var o=a();const u=d(o),l=c({__proto__:null,default:u},[o]);export{l as c};
