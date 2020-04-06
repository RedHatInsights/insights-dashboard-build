!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],s=0,u=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(I,a)&&I[a]&&u.push(I[a][0]),I[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(N&&N(t);u.length;)u.shift()();return C.push.apply(C,c||[]),n()}function n(){for(var e,t=0;t<C.length;t++){for(var n=C[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==I[o]&&(r=!1)}r&&(C.splice(t--,1),e=L(L.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!S[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===g&&P()}(e,t),r&&r(e,t)};var a,o=!0,i="f33c122ee265c25d3207",c={},s=[],u=[];function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:D,apply:O,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return a=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,y,v=0,g=0,_={},E={},S={};function b(e){return+e+""===e?+e:e}function D(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=L.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;E={},_={},S=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},I)w(n);return"prepare"===p&&0===g&&0===v&&P(),t}));var t}function w(e){S[e]?(E[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):_[e]=!0}function P(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return O(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(b(n));e.resolve(t)}}function O(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,u;function l(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=T[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<o.parents.length;s++){var u=o.parents[s],l=T[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),d(n[u],[i])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],g={},_=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var D;u=b(E);var w=!1,P=!1,O=!1,C="";switch((D=h[E]?l(u):{type:"disposed",moduleId:E}).chain&&(C="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":t.onDeclined&&t.onDeclined(D),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+D.moduleId+C));break;case"declined":t.onDeclined&&t.onDeclined(D),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+C));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(D),t.ignoreUnaccepted||(w=new Error("Aborted because "+u+" is not accepted"+C));break;case"accepted":t.onAccepted&&t.onAccepted(D),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(D),O=!0;break;default:throw new Error("Unexception type "+D.type)}if(w)return f("abort"),Promise.reject(w);if(P)for(u in g[u]=h[u],d(v,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,u)&&(m[u]||(m[u]=[]),d(m[u],D.outdatedDependencies[u]));O&&(d(v,[D.moduleId]),g[u]=_)}var j,F=[];for(r=0;r<v.length;r++)u=v[r],T[u]&&T[u].hot._selfAccepted&&g[u]!==_&&F.push({module:u,errorHandler:T[u].hot._selfAccepted});f("dispose"),Object.keys(S).forEach((function(e){!1===S[e]&&function(e){delete I[e]}(e)}));for(var U,N,R=v.slice();R.length>0;)if(u=R.pop(),o=T[u]){var x={},A=o.hot._disposeHandlers;for(a=0;a<A.length;a++)(n=A[a])(x);for(c[u]=x,o.hot.active=!1,delete T[u],delete m[u],a=0;a<o.children.length;a++){var H=T[o.children[a]];H&&((j=H.parents.indexOf(u))>=0&&H.parents.splice(j,1))}}for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(o=T[u]))for(N=m[u],a=0;a<N.length;a++)U=N[a],(j=o.children.indexOf(U))>=0&&o.children.splice(j,1);for(u in f("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var M=null;for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(o=T[u])){N=m[u];var k=[];for(r=0;r<N.length;r++)if(U=N[r],n=o.hot._acceptedDependencies[U]){if(-1!==k.indexOf(n))continue;k.push(n)}for(r=0;r<k.length;r++){n=k[r];try{n(N)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:N[r],error:e}),t.ignoreErrored||M||(M=e)}}}for(r=0;r<F.length;r++){var z=F[r];u=z.module,s=[u];try{L(u)}catch(e){if("function"==typeof z.errorHandler)try{z.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||M||(M=n),M||(M=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||M||(M=e)}}return M?(f("fail"),Promise.reject(M)):(f("idle"),new Promise((function(e){e(v)})))}var T={},I={4:0},C=[];function L(t){if(T[t])return T[t].exports;var n=T[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=T[e];if(!t)return L;var n=function(n){return t.hot.active?(T[n]?-1===T[n].parents.indexOf(e)&&T[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),L(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var o in L)Object.prototype.hasOwnProperty.call(L,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),g++,L.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===p&&(_[e]||w(e),0===g&&0===v&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),L.t(e,-2&t)},n}(t)),n.l=!0,n.exports}L.e=function(e){var t=[],n=I[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=I[e]=[t,r]}));t.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,L.nc&&o.setAttribute("nonce",L.nc),o.src=function(e){return L.p+"js/"+({5:"Dashboard"}[e]||e)+".js"}(e);var i=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(c);var n=I[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}I[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},L.m=e,L.c=T,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="/beta/apps/dashboard/",L.oe=function(e){throw console.error(e),e},L.h=function(){return i};var j=window.webpackJsonp=window.webpackJsonp||[],F=j.push.bind(j);j.push=t,j=j.slice();for(var U=0;U<j.length;U++)t(j[U]);var N=F;C.push([510,6]),n()}({18:function(e,t,n){"use strict";n.d(t,"v",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"w",(function(){return c})),n.d(t,"x",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"m",(function(){return h})),n.d(t,"q",(function(){return y})),n.d(t,"p",(function(){return v})),n.d(t,"o",(function(){return g})),n.d(t,"n",(function(){return _})),n.d(t,"j",(function(){return E})),n.d(t,"i",(function(){return S})),n.d(t,"l",(function(){return b})),n.d(t,"k",(function(){return D})),n.d(t,"s",(function(){return w})),n.d(t,"t",(function(){return P})),n.d(t,"u",(function(){return O})),n.d(t,"r",(function(){return T}));var r=n(363),a="./insights",o="COMPLIANCE_SUMMARY_FETCH",i="".concat("/api","/compliance/profiles"),c="VULNERABILITIES_FETCH",s=r("".concat("/api").concat("/vulnerability/v1/report/executive")),u="".concat("/api").concat("/insights/v1","/stats/rules/"),l="ADVISOR_STATS_REC_FETCH",d="".concat("/api").concat("/insights/v1","/stats/systems/"),p="ADVISOR_STATS_SYSTEMS_FETCH",f="ADVISOR_INCIDENTS_FETCH",m="".concat("/api","/insights/v1/rule/?impacting=true&reports_shown=true&sort=-publish_date&offset=0&limit=10&incident=true"),h="patch",y="".concat("/api","/").concat(h,"/").concat("v1","/systems"),v="PATCHMAN_SYSTEMS_FETCH",g="".concat("/api","/").concat(h,"/").concat("v1","/advisories?filter[advisory_type]=3"),_="PATCHMAN_SECURITY_FETCH",E="".concat("/api","/").concat(h,"/").concat("v1","/advisories?filter[advisory_type]=2"),S="PATCHMAN_BUGS_FETCH",b="".concat("/api","/").concat(h,"/").concat("v1","/advisories/?filter[advisory_type]=1"),D="PATCHMAN_ENHANCEMENTS_FETCH",w="SUBSCRIPTIONS_UTILIZED_PRODUCT_ONE_FETCH",P="SUBSCRIPTIONS_UTILIZED_PRODUCT_TWO_FETCH",O="".concat("/api","/rhsm-subscriptions/v1/tally/products/"),T="".concat("/api","/rhsm-subscriptions/v1/capacity/products/")},194:function(e,t,n){var r=n(6),a=n(385);(t=r(!1)).i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-summary .ins-m-green{color:var(--pf-global--palette--green-400)}.ins-c-summary .ins-m-red{color:var(--pf-global--palette--red-100)}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}\n",""]),e.exports=t},271:function(e,t,n){(t=n(6)(!1)).push([e.i,".pf-c-spinner{display:block;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(124),a=n.n(r),o=n(163),i=n.n(o),c=n(187),s=n.n(c),u=(n(384),n(2)),l=n.n(u),d=n(1),p=n.n(d),f=n(297),m=n.n(f),h=n(298),y=n.n(h),v=n(103),g=n(341),_=n.n(g),E=n(342),S=n.n(E),b=n(343),D=n.n(b),w=n(282),P=n.n(w),O=n(344),T=n.n(O),I=n(164),C=n(360),L=(n(474),function(){return l.a.createElement(I.Main,null,l.a.createElement(C.Spinner,{className:"ins-c-loading-spinner"}))});function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F,U=(F=function(){return n.e(5).then(n.bind(null,1236))},function(e){T()(o,e);var t,n,r=(t=o,function(){var e,n=P()(t);if(j()){var r=P()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return D()(this,e)});function o(e){var t;return _()(this,o),(t=r.call(this,e)).state={component:null},t}return S()(o,[{key:"componentDidMount",value:(n=i()(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?l.a.createElement(e,this.props):l.a.createElement(L,null)}}]),o}(u.Component)),N=function(e){var t=e.component,n=e.rootClass,r=y()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),l.a.createElement(v.d,m()({},r,{component:t}))};N.propTypes={component:p.a.func,rootClass:p.a.string};var R=function(){return l.a.createElement(v.g,null,l.a.createElement(N,{exact:!0,path:"/",component:U,rootClass:"dashboard"}))},x=Object(u.createContext)(),A=function(e){var t=Object(u.useState)({customPolicies:!1,compliance:!1,drift:!1,advisor:!1,remediations:!1,patch:!1,vulnerability:!1}),n=s()(t,2),r=n[0],o=n[1],c=Object(u.useState)(!1),d=s()(c,2),p=d[0],f=d[1];function m(){return(m=i()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return insights.chrome.init(),insights.chrome.identifyApp("dashboard"),e.next=4,window.insights.chrome.auth.getUser();case 4:insights.chrome.getUserPermissions().then((function(e){var t=e.map((function(e){return e.permission}));o({customPolicies:t.includes("custom-policies:*:*"),compliance:t.includes("compliance:*:*"),drift:t.includes("drift:*:*"),advisor:t.includes("insights:*:*"),remediations:t.includes("remediations:*:*")||t.includes("remediations:remediation:*")||t.includes("remediations:remediation:read")||t.includes("remediations:*:read"),patch:t.includes("patch:*:*"),vulnerability:t.includes("vulnerability:*:*")}),f(!0)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),p?l.a.createElement(x.Provider,{value:{customPolicies:r.customPolicies,compliance:r.compliance,drift:r.drift,advisor:r.advisor,remediations:r.remediations,patch:r.patch,vulnerability:r.vulnerability}},l.a.createElement(R,{childProps:e})):l.a.createElement(L,null)};A.propTypes={history:p.a.object};t.b=A},365:function(e){e.exports=JSON.parse('{"en":{"dashboardTitle":"Overview","subscriptionsUtilizedTitle":"Subscription watch utilization summary","subscriptionsUtilizedProductOneTitle":"Red Hat OpenShift","subscriptionsUtilizedProductOneDesc":"OpenShift Cores: {totalReport}","subscriptionsUtilizedProductTwoTitle":"Red Hat Enterprise Linux","subscriptionsUtilizedProductTwoTitleDesc":"RHEL sockets: {totalReport}","subscriptionsUtilizedProductCapacity":"Subscription threshold: {totalCapacity}","subscriptionsUtilizedProductDate":"Data from: {formattedDate}","recsImpactingSystems":"{totalRecs, plural, one {# recommendation} other {# recommendations}}  impacting {systems, plural, one {# system} other {# systems}}","incidentsDetected":"{incidents, plural, one {incident} other {incidents}} detected","critical":"Critical","important":"important","moderate":"moderate","low":"low","compliantHostCount":"{count, plural, one {# system} other {# systems}}","compliantScore":"{score}% passes","remediationsTotal":"{total} more remediations","vulnerabilitiesTitle":"Vulnerabilities","vulnerabilitiesTotalItems":"{total}","lastxdays":"Last {days} days","cvesImpactingSystems":"{cves, plural, one {CVE} other {CVEs}} impacting your systems","vulnerabilityLearnMore":"Learn about CVSS Scores","latestVulnerabilitiesTotal":"{totalLatest}","deniedStateTitle":"You do not have access to {appName}","deniedStateBody":"Contact your organization administrator(s) for more information","complianceEmptyStateTitle":"No policies","complianceEmptyStateBody":"The compliance service uses OpenSCAP policies to track your organization\'s adherence to compliance requirements","complianceEmptyStateAction1":"Create a policy","complianceEmptyStateAction2":"Learn about OpenSCAP","securityAdvisories":"{count, plural, one {security advisory} other {security advisories}}","bugfixAdvisories":"{count, plural, one {bug fix} other {bug fixes}}","enhancementAdvisories":"{count, plural, one {enhancement} other {enhancements}}","systemsAffected":"{count, plural, one {# system} other {# systems}} affected","patchTitle":"Patch","systemInventoryDescription":"Systems running insights-client","systemInventoryWarning":"stale systems","systemInventoryDanger":"systems to be removed","systemInventoryPercentageData":"0% of total systems","systemInventoryTitle":"Insights system inventory"}}')},384:function(e,t,n){var r=n(7),a=n(194);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o),c=a.locals?a.locals:{};a.locals||e.hot.accept(194,(function(){var t=n(194);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),i(t)})),e.hot.dispose((function(){i()})),e.exports=c},474:function(e,t,n){var r=n(7),a=n(271);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o),c=a.locals?a.locals:{};a.locals||e.hot.accept(271,(function(){var t=n(271);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),i(t)})),e.hot.dispose((function(){i()})),e.exports=c},510:function(e,t,n){"use strict";n.r(t);var r,a=n(339),o=n(362),i=n(152),c=n(155),s=n(2),u=n.n(s),l=n(29),d=n.n(l),p=n(273),f=n(366),m=n(18),h=n(66),y=n.n(h),v=y()({complianceSummary:{},complianceFetchStatus:"",vulnerabilities:{},vulnerabilitiesFetchStatus:"",advisorStatsRecs:{},advisorStatsRecsStatus:"",advisorStatsSystems:{},advisorStatsSystemsStatus:"",advisorIncidents:{},advisorIncidentsStatus:"",patchmanSystems:{},patchmanSystemsStatus:"",patchmanSecurity:{},patchmanSecurityStatus:"",patchmanBugs:{},patchmanBugsStatus:"",patchmanEnhancements:{},patchmanEnhancementsStatus:"",subscriptionsUtilizedProductOne:[],subscriptionsUtilizedProductOneFetchStatus:"",subscriptionsUtilizedProductTwo:[],subscriptionsUtilizedProductTwoFetchStatus:""}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(m.g,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(m.g,"_FULFILLED"):return y.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(m.g,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(m.w,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(m.w,"_FULFILLED"):return y.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(m.w,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");case"".concat(m.c,"_PENDING"):return e.set("advisorStatsRecsStatus","pending");case"".concat(m.c,"_FULFILLED"):return y.a.merge(e,{advisorStatsRecs:t.payload,advisorStatsRecsStatus:"fulfilled"});case"".concat(m.c,"_REJECTED"):return e.set("advisorStatsRecsStatus","rejected");case"".concat(m.e,"_PENDING"):return e.set("advisorStatsSystemsStatus","pending");case"".concat(m.e,"_FULFILLED"):return y.a.merge(e,{advisorStatsSystems:t.payload,advisorStatsSystemsStatus:"fulfilled"});case"".concat(m.e,"_REJECTED"):return e.set("advisorStatsSystemsStatus","rejected");case"".concat(m.a,"_PENDING"):return e.set("advisorIncidentsStatus","pending");case"".concat(m.a,"_FULFILLED"):return y.a.merge(e,{advisorIncidents:t.payload,advisorIncidentsStatus:"fulfilled"});case"".concat(m.a,"_REJECTED"):return e.set("advisorIncidentsStatus","rejected");case"".concat(m.p,"_PENDING"):return e.set("patchmanSystemsStatus","pending");case"".concat(m.p,"_FULFILLED"):return y.a.merge(e,{patchmanSystems:t.payload.meta.total_items,patchmanSystemsStatus:"fulfilled"});case"".concat(m.p,"_REJECTED"):return e.set("patchmanSystemsStatus","rejected");case"".concat(m.n,"_PENDING"):return e.set("patchmanSecurityStatus","pending");case"".concat(m.n,"_FULFILLED"):return y.a.merge(e,{patchmanSecurity:t.payload.meta.total_items,patchmanSecurityStatus:"fulfilled"});case"".concat(m.n,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(m.i,"_PENDING"):return e.set("patchmanBugsStatus","pending");case"".concat(m.i,"_FULFILLED"):return y.a.merge(e,{patchmanBugs:t.payload.meta.total_items,patchmanBugsStatus:"fulfilled"});case"".concat(m.i,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(m.k,"_PENDING"):return e.set("patchmanEnhancementsStatus","pending");case"".concat(m.k,"_FULFILLED"):return y.a.merge(e,{patchmanEnhancements:t.payload.meta.total_items,patchmanEnhancementsStatus:"fulfilled"});case"".concat(m.k,"_REJECTED"):return e.set("patchmanEnhancementsStatus","rejected");case"".concat(m.s,"_PENDING"):return e.set("subscriptionsUtilizedProductOneFetchStatus","pending");case"".concat(m.s,"_FULFILLED"):return y.a.merge(e,{subscriptionsUtilizedProductOne:t.payload,subscriptionsUtilizedProductOneFetchStatus:"fulfilled"});case"".concat(m.s,"_REJECTED"):return e.set("subscriptionsUtilizedProductOneFetchStatus","rejected");case"".concat(m.t,"_PENDING"):return e.set("subscriptionsUtilizedProductTwoFetchStatus","pending");case"".concat(m.t,"_FULFILLED"):return y.a.merge(e,{subscriptionsUtilizedProductTwo:t.payload,subscriptionsUtilizedProductTwoFetchStatus:"fulfilled"});case"".concat(m.t,"_REJECTED"):return e.set("subscriptionsUtilizedProductTwoFetchStatus","rejected");default:return e}},_=n(184),E=n(164),S=n(364),b=n(365),D=document.getElementById("root");d.a.render(u.a.createElement(o.IntlProvider,{locale:navigator.language,messages:b,onError:console.log},u.a.createElement(c.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.b,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(r=Object(E.getRegistry)({},[].concat(n,[S.a,Object(i.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({DashboardStore:g}),r.register({notifications:i.notifications}),r}().getStore()},u.a.createElement(p.BrowserRouter,{basename:Object(f.getBaseName)(window.location.pathname)},u.a.createElement(u.a.Fragment,null,u.a.createElement(i.NotificationsPortal,null),u.a.createElement(a.b,null))))),D,(function(){return D.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.js.map