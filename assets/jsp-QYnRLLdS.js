import{a0 as $}from"./theme-terminal-ylQyTtHj.js";function o(s,p){for(var n=0;n<p.length;n++){const t=p[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in s)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(s,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},c;function u(){return c||(c=1,function(s,p){ace.define("ace/snippets/jsp.snippets",["require","exports","module"],function(n,t,e){e.exports=`snippet @page
	<%@page contentType="text/html" pageEncoding="UTF-8"%>
snippet jstl
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
snippet jstl:c
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
snippet jstl:fn
	<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
snippet cpath
	\${pageContext.request.contextPath}
snippet cout
	<c:out value="\${1}" default="\${2}" />
snippet cset
	<c:set var="\${1}" value="\${2}" />
snippet cremove
	<c:remove var="\${1}" scope="\${2:page}" />
snippet ccatch
	<c:catch var="\${1}" />
snippet cif
	<c:if test="\${\${1}}">
		\${2}
	</c:if>
snippet cchoose
	<c:choose>
		\${1}
	</c:choose>
snippet cwhen
	<c:when test="\${\${1}}">
		\${2}
	</c:when>
snippet cother
	<c:otherwise>
		\${1}
	</c:otherwise>
snippet cfore
	<c:forEach items="\${\${1}}" var="\${2}" varStatus="\${3}">
		\${4:<c:out value="$2" />}
	</c:forEach>
snippet cfort
	<c:set var="\${1}">\${2:item1,item2,item3}</c:set>
	<c:forTokens var="\${3}" items="\${$1}" delims="\${4:,}">
		\${5:<c:out value="$3" />}
	</c:forTokens>
snippet cparam
	<c:param name="\${1}" value="\${2}" />
snippet cparam+
	<c:param name="\${1}" value="\${2}" />
	cparam+\${3}
snippet cimport
	<c:import url="\${1}" />
snippet cimport+
	<c:import url="\${1}">
		<c:param name="\${2}" value="\${3}" />
		cparam+\${4}
	</c:import>
snippet curl
	<c:url value="\${1}" var="\${2}" />
	<a href="\${$2}">\${3}</a>
snippet curl+
	<c:url value="\${1}" var="\${2}">
		<c:param name="\${4}" value="\${5}" />
		cparam+\${6}
	</c:url>
	<a href="\${$2}">\${3}</a>
snippet credirect
	<c:redirect url="\${1}" />
snippet contains
	\${fn:contains(\${1:string}, \${2:substr})}
snippet contains:i
	\${fn:containsIgnoreCase(\${1:string}, \${2:substr})}
snippet endswith
	\${fn:endsWith(\${1:string}, \${2:suffix})}
snippet escape
	\${fn:escapeXml(\${1:string})}
snippet indexof
	\${fn:indexOf(\${1:string}, \${2:substr})}
snippet join
	\${fn:join(\${1:collection}, \${2:delims})}
snippet length
	\${fn:length(\${1:collection_or_string})}
snippet replace
	\${fn:replace(\${1:string}, \${2:substr}, \${3:replace})}
snippet split
	\${fn:split(\${1:string}, \${2:delims})}
snippet startswith
	\${fn:startsWith(\${1:string}, \${2:prefix})}
snippet substr
	\${fn:substring(\${1:string}, \${2:begin}, \${3:end})}
snippet substr:a
	\${fn:substringAfter(\${1:string}, \${2:substr})}
snippet substr:b
	\${fn:substringBefore(\${1:string}, \${2:substr})}
snippet lc
	\${fn:toLowerCase(\${1:string})}
snippet uc
	\${fn:toUpperCase(\${1:string})}
snippet trim
	\${fn:trim(\${1:string})}
`}),ace.define("ace/snippets/jsp",["require","exports","module","ace/snippets/jsp.snippets"],function(n,t,e){t.snippetText=n("./jsp.snippets"),t.scope="jsp"}),function(){ace.require(["ace/snippets/jsp"],function(n){s&&(s.exports=n)})}()}(i)),i.exports}var a=u();const f=$(a),m=o({__proto__:null,default:f},[a]);export{m as j};
