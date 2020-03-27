!function(e){function t(t){for(var r,a,o=t[0],c=t[1],i=t[2],s=0,u=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(T,a)&&T[a]&&u.push(T[a][0]),T[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(N&&N(t);u.length;)u.shift()();return j.push.apply(j,i||[]),n()}function n(){for(var e,t=0;t<j.length;t++){for(var n=j[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==T[o]&&(r=!1)}r&&(j.splice(t--,1),e=C(C.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!S[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===g&&O()}(e,t),r&&r(e,t)};var a,o=!0,c="a6cdd2440d5c3f8e884a",i={},s=[],u=[];function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:I,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:i[e]};return a=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,v,y=0,g=0,_={},E={},S={};function b(e){return+e+""===e?+e:e}function w(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=C.p+""+c+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;E={},_={},S=e.c,v=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},T)D(n);return"prepare"===p&&0===g&&0===y&&O(),t}));var t}function D(e){S[e]?(E[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=C.p+""+e+"."+c+".hot-update.js",document.head.appendChild(t)}(e)):_[e]=!0}function O(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return I(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(b(n));e.resolve(t)}}function I(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,u;function l(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),c=a.id,i=a.chain;if((o=P[c])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(o.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var s=0;s<o.parents.length;s++){var u=o.parents[s],l=P[u];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([u]),moduleId:c,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),d(n[u],[c])):(delete n[u],t.push(u),r.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},y=[],g={},_=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var w;u=b(E);var D=!1,O=!1,I=!1,j="";switch((w=h[E]?l(u):{type:"disposed",moduleId:E}).chain&&(j="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+w.moduleId+j));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+j));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(D=new Error("Aborted because "+u+" is not accepted"+j));break;case"accepted":t.onAccepted&&t.onAccepted(w),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),I=!0;break;default:throw new Error("Unexception type "+w.type)}if(D)return f("abort"),Promise.reject(D);if(O)for(u in g[u]=h[u],d(y,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,u)&&(m[u]||(m[u]=[]),d(m[u],w.outdatedDependencies[u]));I&&(d(y,[w.moduleId]),g[u]=_)}var x,A=[];for(r=0;r<y.length;r++)u=y[r],P[u]&&P[u].hot._selfAccepted&&g[u]!==_&&A.push({module:u,errorHandler:P[u].hot._selfAccepted});f("dispose"),Object.keys(S).forEach((function(e){!1===S[e]&&function(e){delete T[e]}(e)}));for(var L,N,F=y.slice();F.length>0;)if(u=F.pop(),o=P[u]){var R={},H=o.hot._disposeHandlers;for(a=0;a<H.length;a++)(n=H[a])(R);for(i[u]=R,o.hot.active=!1,delete P[u],delete m[u],a=0;a<o.children.length;a++){var M=P[o.children[a]];M&&((x=M.parents.indexOf(u))>=0&&M.parents.splice(x,1))}}for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(o=P[u]))for(N=m[u],a=0;a<N.length;a++)L=N[a],(x=o.children.indexOf(L))>=0&&o.children.splice(x,1);for(u in f("apply"),c=v,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var k=null;for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(o=P[u])){N=m[u];var U=[];for(r=0;r<N.length;r++)if(L=N[r],n=o.hot._acceptedDependencies[L]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(N)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:N[r],error:e}),t.ignoreErrored||k||(k=e)}}}for(r=0;r<A.length;r++){var B=A[r];u=B.module,s=[u];try{C(u)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||k||(k=n),k||(k=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||k||(k=e)}}return k?(f("fail"),Promise.reject(k)):(f("idle"),new Promise((function(e){e(y)})))}var P={},T={4:0},j=[];function C(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return C;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),C(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var o in C)Object.prototype.hasOwnProperty.call(C,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),g++,C.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===p&&(_[e]||D(e),0===g&&0===y&&O())}},n.t=function(e,t){return 1&t&&(e=n(e)),C.t(e,-2&t)},n}(t)),n.l=!0,n.exports}C.e=function(e){var t=[],n=T[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=T[e]=[t,r]}));t.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,C.nc&&o.setAttribute("nonce",C.nc),o.src=function(e){return C.p+"js/"+({5:"Dashboard"}[e]||e)+".js"}(e);var c=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(i);var n=T[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}T[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},C.m=e,C.c=P,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},C.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(C.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)C.d(n,r,function(t){return e[t]}.bind(null,r));return n},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="/beta/apps/dashboard/",C.oe=function(e){throw console.error(e),e},C.h=function(){return c};var x=window.webpackJsonp=window.webpackJsonp||[],A=x.push.bind(x);x.push=t,x=x.slice();for(var L=0;L<x.length;L++)t(x[L]);var N=A;j.push([511,6]),n()}({195:function(e,t,n){var r=n(6),a=n(390);(t=r(!1)).i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-summary .ins-m-green{color:var(--pf-global--palette--green-400)}.ins-c-summary .ins-m-red{color:var(--pf-global--palette--red-100)}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}\n",""]),e.exports=t},27:function(e,t,n){"use strict";n.d(t,"r",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"s",(function(){return i})),n.d(t,"t",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"m",(function(){return h})),n.d(t,"q",(function(){return v})),n.d(t,"p",(function(){return y})),n.d(t,"o",(function(){return g})),n.d(t,"n",(function(){return _})),n.d(t,"j",(function(){return E})),n.d(t,"i",(function(){return S})),n.d(t,"l",(function(){return b})),n.d(t,"k",(function(){return w}));var r=n(363),a="./insights",o="COMPLIANCE_SUMMARY_FETCH",c="".concat("/api","/compliance/profiles"),i="VULNERABILITIES_FETCH",s=r("".concat("/api").concat("/vulnerability/v1/report/executive")),u="".concat("/api").concat("/insights/v1","/stats/rules/"),l="ADVISOR_STATS_REC_FETCH",d="".concat("/api").concat("/insights/v1","/stats/systems/"),p="ADVISOR_STATS_SYSTEMS_FETCH",f="ADVISOR_INCIDENTS_FETCH",m="".concat("/api","/insights/v1/rule/?impacting=true&reports_shown=true&sort=-publish_date&offset=0&limit=10&incident=true"),h="patch",v="".concat("/api","/").concat(h,"/").concat("v1","/systems"),y="PATCHMAN_SYSTEMS_FETCH",g="".concat("/api","/").concat(h,"/").concat("v1","/advisories?filter[advisory_type]=3"),_="PATCHMAN_SECURITY_FETCH",E="".concat("/api","/").concat(h,"/").concat("v1","/advisories?filter[advisory_type]=2"),S="PATCHMAN_BUGS_FETCH",b="".concat("/api","/").concat(h,"/").concat("v1","/advisories/?filter[advisory_type]=1"),w="PATCHMAN_ENHANCEMENTS_FETCH"},275:function(e,t,n){(t=n(6)(!1)).push([e.i,".pf-c-spinner{display:block;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var r=n(125),a=n.n(r),o=n(162),c=n.n(o),i=n(279),s=n.n(i),u=(n(389),n(2)),l=n.n(u),d=n(1),p=n.n(d),f=n(300),m=n.n(f),h=n(302),v=n.n(h),y=n(103),g=n(303),_=n.n(g),E=n(304),S=n.n(E),b=n(305),w=n.n(b),D=n(196),O=n.n(D),I=n(306),P=n.n(I),T=n(163),j=n(359),C=(n(480),function(){return l.a.createElement(T.Main,null,l.a.createElement(j.Spinner,{className:"ins-c-loading-spinner"}))});function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var A,L=(A=function(){return n.e(5).then(n.bind(null,1132))},function(e){P()(o,e);var t,n,r=(t=o,function(){var e,n=O()(t);if(x()){var r=O()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return w()(this,e)});function o(e){var t;return _()(this,o),(t=r.call(this,e)).state={component:null},t}return S()(o,[{key:"componentDidMount",value:(n=c()(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?l.a.createElement(e,this.props):l.a.createElement(C,null)}}]),o}(u.Component)),N=function(e){var t=e.component,n=e.rootClass,r=v()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),l.a.createElement(y.d,m()({},r,{component:t}))};N.propTypes={component:p.a.func,rootClass:p.a.string};var F=function(){return l.a.createElement(y.g,null,l.a.createElement(N,{exact:!0,path:"/",component:L,rootClass:"dashboard"}))},R=Object(u.createContext)(),H=function(e){var t=Object(u.useState)({customPolicies:!1,compliance:!1,drift:!1,advisor:!1,remediations:!1,patch:!1,vulnerability:!1}),n=s()(t,2),r=n[0],o=n[1],i=Object(u.useState)(!1),d=s()(i,2),p=d[0],f=d[1];function m(){return(m=c()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return insights.chrome.init(),insights.chrome.identifyApp("dashboard"),e.next=4,window.insights.chrome.auth.getUser();case 4:insights.chrome.getUserPermissions().then((function(e){var t=e.map((function(e){return e.permission}));o({customPolicies:t.includes("custom-policies:*:*"),compliance:t.includes("compliance:*:*"),drift:t.includes("drift:*:*"),advisor:t.includes("insights:*:*"),remediations:t.includes("remediations:*:*")||t.includes("remediations:remediation:*")||t.includes("remediations:remediation:read")||t.includes("remediations:*:read"),patch:t.includes("patch:*:*"),vulnerability:t.includes("vulnerability:*:*")}),f(!0)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),p?l.a.createElement(R.Provider,{value:{customPolicies:r.customPolicies,compliance:r.compliance,drift:r.drift,advisor:r.advisor,remediations:r.remediations,patch:r.patch,vulnerability:r.vulnerability}},l.a.createElement(F,{childProps:e})):l.a.createElement(C,null)};H.propTypes={history:p.a.object};t.b=H},365:function(e){e.exports=JSON.parse('{"en":{"dashboardTitle":"Overview","subscriptionsUtilized":"Subscriptions utilized","recsImpactingSystems":"{totalRecs, plural, one {# recommendation} other {# recommendations}}  impacting {systems, plural, one {# system} other {# systems}}","incidentsDetected":"{incidents, plural, one {incident} other {incidents}} detected","critical":"Critical","important":"important","moderate":"moderate","low":"low","compliantHostCount":"{count, plural, one {# system} other {# systems}}","compliantScore":"{score}% passes","remediationsTotal":"{total} more remediations","vulnerabilitiesTitle":"Vulnerabilities","vulnerabilitiesTotalItems":"{total}","lastxdays":"Last {days} days","cvesImpactingSystems":"{cves, plural, one {CVE} other {CVEs}} impacting your systems","vulnerabilityLearnMore":"Learn about CVSS Scores","latestVulnerabilitiesTotal":"{totalLatest}","deniedStateTitle":"You do not have access to {appName}","deniedStateBody":"Contact your organization administrator(s) for more information","complianceEmptyStateTitle":"No policies","complianceEmptyStateBody":"The compliance service uses OpenSCAP policies to track your organization\'s adherence to compliance requirements","complianceEmptyStateAction1":"Create a policy","complianceEmptyStateAction2":"Learn about OpenSCAP","securityAdvisories":"{count, plural, one {security advisory} other {security advisories}}","bugfixAdvisories":"{count, plural, one {bug fix} other {bug fixes}}","enhancementAdvisories":"{count, plural, one {enhancement} other {enhancements}}","systemsAffected":"{count, plural, one {# system} other {# systems}} affected"}}')},389:function(e,t,n){var r=n(7),a=n(195);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},c=r(a,o),i=a.locals?a.locals:{};a.locals||e.hot.accept(195,(function(){var t=n(195);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),c(t)})),e.hot.dispose((function(){c()})),e.exports=i},480:function(e,t,n){var r=n(7),a=n(275);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},c=r(a,o),i=a.locals?a.locals:{};a.locals||e.hot.accept(275,(function(){var t=n(275);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),c(t)})),e.hot.dispose((function(){c()})),e.exports=i},511:function(e,t,n){"use strict";n.r(t);var r,a=n(344),o=n(362),c=n(152),i=n(155),s=n(2),u=n.n(s),l=n(28),d=n.n(l),p=n(277),f=n(366),m=n(27),h=n(73),v=n.n(h),y=v()({complianceSummary:{},complianceFetchStatus:"",vulnerabilities:{},vulnerabilitiesFetchStatus:"",advisorStatsRecs:{},advisorStatsRecsStatus:"",advisorStatsSystems:{},advisorStatsSystemsStatus:"",advisorIncidents:{},advisorIncidentsStatus:"",patchmanSystems:{},patchmanSystemsStatus:"",patchmanSecurity:{},patchmanSecurityStatus:"",patchmanBugs:{},patchmanBugsStatus:"",patchmanEnhancements:{},patchmanEnhancementsStatus:""}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(m.g,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(m.g,"_FULFILLED"):return v.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(m.g,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(m.s,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(m.s,"_FULFILLED"):return v.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(m.s,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");case"".concat(m.c,"_PENDING"):return e.set("advisorStatsRecsStatus","pending");case"".concat(m.c,"_FULFILLED"):return v.a.merge(e,{advisorStatsRecs:t.payload,advisorStatsRecsStatus:"fulfilled"});case"".concat(m.c,"_REJECTED"):return e.set("advisorStatsRecsStatus","rejected");case"".concat(m.e,"_PENDING"):return e.set("advisorStatsSystemsStatus","pending");case"".concat(m.e,"_FULFILLED"):return v.a.merge(e,{advisorStatsSystems:t.payload,advisorStatsSystemsStatus:"fulfilled"});case"".concat(m.e,"_REJECTED"):return e.set("advisorStatsSystemsStatus","rejected");case"".concat(m.a,"_PENDING"):return e.set("advisorIncidentsStatus","pending");case"".concat(m.a,"_FULFILLED"):return v.a.merge(e,{advisorIncidents:t.payload,advisorIncidentsStatus:"fulfilled"});case"".concat(m.a,"_REJECTED"):return e.set("advisorIncidentsStatus","rejected");case"".concat(m.p,"_PENDING"):return e.set("patchmanSystemsStatus","pending");case"".concat(m.p,"_FULFILLED"):return v.a.merge(e,{patchmanSystems:t.payload.meta.total_items,patchmanSystemsStatus:"fulfilled"});case"".concat(m.p,"_REJECTED"):return e.set("patchmanSystemsStatus","rejected");case"".concat(m.n,"_PENDING"):return e.set("patchmanSecurityStatus","pending");case"".concat(m.n,"_FULFILLED"):return v.a.merge(e,{patchmanSecurity:t.payload.meta.total_items,patchmanSecurityStatus:"fulfilled"});case"".concat(m.n,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(m.i,"_PENDING"):return e.set("patchmanBugsStatus","pending");case"".concat(m.i,"_FULFILLED"):return v.a.merge(e,{patchmanBugs:t.payload.meta.total_items,patchmanBugsStatus:"fulfilled"});case"".concat(m.i,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(m.k,"_PENDING"):return e.set("patchmanEnhancementsStatus","pending");case"".concat(m.k,"_FULFILLED"):return v.a.merge(e,{patchmanEnhancements:t.payload.meta.total_items,patchmanEnhancementsStatus:"fulfilled"});case"".concat(m.k,"_REJECTED"):return e.set("patchmanEnhancementsStatus","rejected");default:return e}},_=n(185),E=n(163),S=n(364),b=n(365),w=document.getElementById("root");d.a.render(u.a.createElement(o.IntlProvider,{locale:navigator.language,messages:b,onError:console.log},u.a.createElement(i.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.b,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(r=Object(E.getRegistry)({},[].concat(n,[S.a,Object(c.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({DashboardStore:g}),r.register({notifications:c.notifications}),r}().getStore()},u.a.createElement(p.BrowserRouter,{basename:Object(f.getBaseName)(window.location.pathname)},u.a.createElement(u.a.Fragment,null,u.a.createElement(c.NotificationsPortal,null),u.a.createElement(a.b,null))))),w,(function(){return w.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.js.map