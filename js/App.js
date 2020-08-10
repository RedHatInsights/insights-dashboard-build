!function(e){function t(t){for(var r,a,i=t[0],o=t[1],s=t[2],c=0,u=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(L,a)&&L[a]&&u.push(L[a][0]),L[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(x&&x(t);u.length;)u.shift()();return C.push.apply(C,s||[]),n()}function n(){for(var e,t=0;t<C.length;t++){for(var n=C[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==L[i]&&(r=!1)}r&&(C.splice(t--,1),e=R(R.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!b[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===S&&P()}(e,t),r&&r(e,t)};var a,i=!0,o="8bdb4ae10bcd67a00339",s={},c=[],u=[];function l(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],f("ready");break;case"ready":w(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:I,apply:F,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[t]};return a=void 0,n}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,y,v,g=0,S=0,_={},E={},b={};function D(e){return+e+""===e?+e:e}function I(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=R.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f(O()?"ready":"idle"),null;E={},_={},b=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},L)T(n);return"prepare"===p&&0===S&&0===g&&P(),t}));var t}function T(e){b[e]?(E[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):_[e]=!0}function P(){f("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then((function(){return F(i)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(D(n));e.resolve(t)}}function F(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var r,i,u,l,d;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,o=a.chain;if((l=N[i])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var s=0;s<l.parents.length;s++){var c=l.parents[s],u=N[c];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(u.hot._acceptedDependencies[i]?(n[c]||(n[c]=[]),m(n[c],[i])):(delete n[c],t.push(c),r.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}O();var g={},S=[],_={},E=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var I in h)if(Object.prototype.hasOwnProperty.call(h,I)){var T;d=D(I),T=h[I]?p(d):{type:"disposed",moduleId:I};var P=!1,F=!1,w=!1,C="";switch(T.chain&&(C="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":n.onDeclined&&n.onDeclined(T),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+T.moduleId+C));break;case"declined":n.onDeclined&&n.onDeclined(T),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+C));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(T),n.ignoreUnaccepted||(P=new Error("Aborted because "+d+" is not accepted"+C));break;case"accepted":n.onAccepted&&n.onAccepted(T),F=!0;break;case"disposed":n.onDisposed&&n.onDisposed(T),w=!0;break;default:throw new Error("Unexception type "+T.type)}if(P)return f("abort"),Promise.reject(P);if(F)for(d in _[d]=h[d],m(S,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,d)&&(g[d]||(g[d]=[]),m(g[d],T.outdatedDependencies[d]));w&&(m(S,[T.moduleId]),_[d]=E)}var U,j=[];for(i=0;i<S.length;i++)d=S[i],N[d]&&N[d].hot._selfAccepted&&_[d]!==E&&!N[d].hot._selfInvalidated&&j.push({module:d,parents:N[d].parents.slice(),errorHandler:N[d].hot._selfAccepted});f("dispose"),Object.keys(b).forEach((function(e){!1===b[e]&&function(e){delete L[e]}(e)}));var H,x,A=S.slice();for(;A.length>0;)if(d=A.pop(),l=N[d]){var k={},z=l.hot._disposeHandlers;for(u=0;u<z.length;u++)(r=z[u])(k);for(s[d]=k,l.hot.active=!1,delete N[d],delete g[d],u=0;u<l.children.length;u++){var M=N[l.children[u]];M&&((U=M.parents.indexOf(d))>=0&&M.parents.splice(U,1))}}for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=N[d]))for(x=g[d],u=0;u<x.length;u++)H=x[u],(U=l.children.indexOf(H))>=0&&l.children.splice(U,1);f("apply"),void 0!==y&&(o=y,y=void 0);for(d in h=void 0,_)Object.prototype.hasOwnProperty.call(_,d)&&(e[d]=_[d]);var G=null;for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=N[d])){x=g[d];var J=[];for(i=0;i<x.length;i++)if(H=x[i],r=l.hot._acceptedDependencies[H]){if(-1!==J.indexOf(r))continue;J.push(r)}for(i=0;i<J.length;i++){r=J[i];try{r(x)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:x[i],error:e}),n.ignoreErrored||G||(G=e)}}}for(i=0;i<j.length;i++){var B=j[i];d=B.module,c=B.parents,a=d;try{R(d)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||G||(G=t),G||(G=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||G||(G=e)}}if(G)return f("fail"),Promise.reject(G);if(v)return t(n).then((function(e){return S.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(S)}))}(t=t||{})}function O(){if(v)return h||(h={}),v.forEach(w),v=void 0,!0}function w(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var N={},L={7:0},C=[];function R(t){if(N[t])return N[t].exports;var n=N[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=c,c=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=N[e];if(!t)return R;var n=function(n){return t.hot.active?(N[n]?-1===N[n].parents.indexOf(e)&&N[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),R(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var i in R)Object.prototype.hasOwnProperty.call(R,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===p&&f("prepare"),S++,R.e(e).then(t,(function(e){throw t(),e}));function t(){S--,"prepare"===p&&(_[e]||T(e),0===S&&0===g&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),R.t(e,-2&t)},n}(t)),n.l=!0,n.exports}R.e=function(e){var t=[],n=L[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=L[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,R.nc&&i.setAttribute("nonce",R.nc),i.src=function(e){return R.p+"js/"+({8:"Dashboard",11:"vendors~Dashboard"}[e]||e)+".js"}(e);var o=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=L[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}L[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},R.m=e,R.c=N,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)R.d(n,r,function(t){return e[t]}.bind(null,r));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="/beta/apps/dashboard/",R.oe=function(e){throw console.error(e),e},R.h=function(){return o};var U=window.webpackJsonp=window.webpackJsonp||[],j=U.push.bind(U);U.push=t,U=U.slice();for(var H=0;H<U.length;H++)t(U[H]);var x=j;C.push([674,0,2,9,10]),n()}({152:function(e,t,n){var r=n(8),a=n(461);(t=r(!1)).i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-summary .ins-m-green{color:var(--pf-global--palette--green-400)}.ins-c-summary .ins-m-red{color:var(--pf-global--palette--red-100)}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}\n",""]),e.exports=t},153:function(e,t,n){(t=n(8)(!1)).push([e.i,".pf-c-spinner{display:block;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},356:function(e,t,n){"use strict";var r=n(124),a=n.n(r);a.a.defaults.headers.common={"x-rh-insights-use-path-prefix":1},t.a={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.get(e,{headers:t,params:n})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.put(e,t,{headers:n})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.post(e,t,{headers:n})}}},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n(93),a=n.n(r),i=n(126),o=n.n(i),s=n(110),c=n.n(s),u=(n(460),n(0)),l=n.n(u),d=n(5),p=n(356),f=n(47),m=n.n(f),h=n(354),y=n.n(h),v=n(355),g=n.n(v),S=n(15),_=n(415),E=n.n(_),b=n(416),D=n.n(b),I=n(417),T=n.n(I),P=n(418),F=n.n(P),O=n(347),w=n.n(O),N=(n(485),n(359)),L=n(420),C=function(){return l.a.createElement(N.Main,null,l.a.createElement(L.Spinner,{className:"ins-c-loading-spinner"}))};function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w()(e);if(t){var a=w()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return F()(this,n)}}var U,j=(U=function(){return Promise.all([n.e(0),n.e(2),n.e(11),n.e(8)]).then(n.bind(null,1167))},function(e){T()(r,e);var t,n=R(r);function r(e){var t;return E()(this,r),(t=n.call(this,e)).state={component:null},t}return D()(r,[{key:"componentDidMount",value:(t=o()(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?l.a.createElement(e,this.props):l.a.createElement(C,null)}}]),r}(u.Component)),H=function(e){var t=e.component,n=e.rootClass,r=g()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),l.a.createElement(S.d,y()({},r,{component:t}))};H.propTypes={component:m.a.func,rootClass:m.a.string};var x=function(){return l.a.createElement(S.g,null,l.a.createElement(H,{exact:!0,path:"/",component:j,rootClass:"dashboard"}))},A=Object(u.createContext)(),k=function(e){var t=Object(u.useState)({customPolicies:!1,compliance:!1,drift:!1,advisor:!1,remediations:!1,patch:!1,vulnerability:!1,subscriptions:!1}),n=c()(t,2),r=n[0],i=n[1],s=Object(u.useState)(!1),f=c()(s,2),m=f[0],h=f[1],y=Object(u.useState)(!1),v=c()(y,2),g=v[0],S=v[1],_=Object(u.useState)(),E=c()(_,2),b=E[0],D=E[1];function I(){return(I=o()(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return insights.chrome.init(),insights.chrome.identifyApp("dashboard"),e.next=4,window.insights.chrome.auth.getUser().then((function(e){return h(e.identity.user.is_org_admin)}));case 4:return insights.chrome.getUserPermissions().then((function(e){var t=e.length&&e.map((function(e){return e.permission}));t.length&&i({customPolicies:t.includes("custom-policies:*:*"),compliance:t.includes("compliance:*:*"),drift:t.includes("drift:*:*"),advisor:t.includes("insights:*:*"),remediations:t.includes("remediations:*:*")||t.includes("remediations:remediation:*")||t.includes("remediations:remediation:read")||t.includes("remediations:*:read"),patch:t.includes("patch:*:*"),vulnerability:t.includes("vulnerability:*:*"),subscriptions:t.includes("subscriptions:*:*")}),S(!0)})),e.next=7,p.a.get("".concat(d.n));case 7:t=e.sent,D(t.data.total>0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]),g?l.a.createElement(A.Provider,{value:{customPolicies:r.customPolicies,compliance:r.compliance,drift:r.drift,advisor:r.advisor,remediations:r.remediations,patch:r.patch,vulnerability:r.vulnerability,subscriptions:r.subscriptions,isOrgAdmin:m,hasSystems:b}},l.a.createElement(x,{childProps:e})):l.a.createElement(C,null)};k.propTypes={history:m.a.object};t.b=k},425:function(e){e.exports=JSON.parse('{"en":{"dashboardTitle":"Dashboard","subscriptionsUtilizedTitle":"Subscription Watch utilization summary","subscriptionsUtilizedLearnMore":"Activate Subscription Watch to monitor your subscription utilization.","subscriptionsUtilizedLearnMoreAction":"Learn about Subscription Watch","subscriptionsUtilizedNoProductData":"No data available","subscriptionsUtilizedProductOneTitle":"Red Hat OpenShift","subscriptionsUtilizedProductOneDesc":"OpenShift cores: {totalReport}","subscriptionsUtilizedProductTwoTitle":"Red Hat Enterprise Linux","subscriptionsUtilizedProductTwoTitleDesc":"RHEL sockets: {totalReport}","subscriptionsUtilizedProductCapacity":"Subscription threshold: {totalCapacity}","subscriptionsUtilizedProductDate":"Data from: {formattedDate}","recsImpactingSystems":"{totalRecs, plural, one {# Recommendation} other {# Recommendations}}  impacting {systems, plural, one {# system} other {# systems}}","incidentsDetected":"{incidents, plural, one {Incident} other {Incidents}} detected","critical":"Critical","important":"important","moderate":"moderate","low":"low","compliantHostCount":"{count, plural, one {# system} other {# systems}}","compliantScore":"{score}% passes","vulnerabilitiesTitle":"Vulnerability","vulnerabilitiesTotalItems":"{total}","lastxdays":"Last {days} days","cvesImpactingSystems":"{cves, plural, one {CVE} other {CVEs}} impacting your systems","vulnerabilityLearnMore":"Learn about CVSS Scores","latestVulnerabilitiesTotal":"{totalLatest}","deniedStateTitle":"You do not have access to {appName}","deniedStateBody":"Contact your organization administrator(s) for more information","complianceEmptyStateTitle":"No policies","complianceEmptyStateBody":"The compliance service uses OpenSCAP policies to track your organization\'s adherence to compliance requirements","complianceEmptyStateAction1":"Create a policy","complianceEmptyStateAction2":"Learn about OpenSCAP","securityAdvisories":"{count, plural, one {security advisory} other {security advisories}}","bugfixAdvisories":"{count, plural, one {bug fix} other {bug fixes}}","enhancementAdvisories":"{count, plural, one {enhancement} other {enhancements}}","systemsAffected":"{count, plural, one {# system} other {# systems}} affected","patchTitle":"Patch","systemInventoryDescription":"{count, plural, one {System} other {Systems}} running insights-client","systemInventoryStaleWarning":"{count, plural, one {# system} other {# systems}} to be removed","systemInventoryStale":"{count, plural, one {# stale system} other {# stale systems}}","systemInventoryPercentageData":"{count}% of total systems","systemInventoryTitle":"Insights system inventory","systemInventoryNotUsingClient":"{count, plural, one {# additional system} other {# additional systems}} not running insights-client        are not taking advantage of Red Hat Insights capabilities.","remediationsTotal":"{total} more remediations","remediationsPlaybookStatus":"{status}","remediationsPlaybookNoActivity":"No activity","remediationsNoActivity":"Failure","remediationsNoDataTitle":"You haven\'t created any remediation Playbooks yet","remediationsNoDataBody":"Create an Ansible Playbook to remediate or mitigate vulnerabilities or configuration issues.","errorStateTitle":"{appName} has experienced an error. Contact Red Hat support if the problem persists.","noSystemsTitle":"Get started with Red Hat Insights","noSystemsDescription":"With predictive analytics, avoid problems and unplanned                        downtime in your Red Hat environment. Red Hat Insights is                        included with your Red Hat Enterprise Linux subscription.","noSystemsInstall":"Install the client on the RHEL system","noSystemsRegister":"Register the system to Red Hat Insights","noSystemsLink":"Getting started documentation","advisorChartDescription":"This chart shows recommendations effecting your system","registerYourSystems":"Register your systems"}}')},460:function(e,t,n){var r=n(10),a=n(152);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var s=a.locals;e.hot.accept(152,(function(){"string"==typeof(a=(a=n(152)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(s,a.locals)?(s=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},485:function(e,t,n){var r=n(10),a=n(153);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var s=a.locals;e.hot.accept(153,(function(){"string"==typeof(a=(a=n(153)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(s,a.locals)?(s=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},5:function(e,t,n){"use strict";n.d(t,"G",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"H",(function(){return s})),n.d(t,"I",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"u",(function(){return h})),n.d(t,"y",(function(){return y})),n.d(t,"x",(function(){return v})),n.d(t,"w",(function(){return g})),n.d(t,"v",(function(){return S})),n.d(t,"r",(function(){return _})),n.d(t,"q",(function(){return E})),n.d(t,"t",(function(){return b})),n.d(t,"s",(function(){return D})),n.d(t,"D",(function(){return I})),n.d(t,"E",(function(){return T})),n.d(t,"F",(function(){return P})),n.d(t,"C",(function(){return F})),n.d(t,"m",(function(){return O})),n.d(t,"n",(function(){return w})),n.d(t,"i",(function(){return N})),n.d(t,"j",(function(){return L})),n.d(t,"k",(function(){return C})),n.d(t,"l",(function(){return R})),n.d(t,"o",(function(){return U})),n.d(t,"p",(function(){return j})),n.d(t,"z",(function(){return H})),n.d(t,"A",(function(){return x})),n.d(t,"B",(function(){return A}));var r=n(414),a="./insights",i="COMPLIANCE_SUMMARY_FETCH",o="".concat("/api","/compliance/profiles?search=has_test_results=true"),s="VULNERABILITIES_FETCH",c=r("".concat("/api").concat("/vulnerability/v1/report/executive")),u="".concat("/api").concat("/insights/v1","/stats/rules/"),l="ADVISOR_STATS_REC_FETCH",d="".concat("/api").concat("/insights/v1","/stats/systems/"),p="ADVISOR_STATS_SYSTEMS_FETCH",f="ADVISOR_INCIDENTS_FETCH",m="".concat("/api","/insights/v1/rule/?impacting=true&limit=1&incident=true"),h="patch",y="".concat("/api","/").concat(h,"/").concat("v1","/systems"),v="PATCHMAN_SYSTEMS_FETCH",g="".concat("/api","/").concat(h,"/").concat("v1","/advisories?filter[advisory_type]=3&limit=1"),S="PATCHMAN_SECURITY_FETCH",_="".concat("/api","/").concat(h,"/").concat("v1","/advisories?filter[advisory_type]=2&limit=1"),E="PATCHMAN_BUGS_FETCH",b="".concat("/api","/").concat(h,"/").concat("v1","/advisories/?filter[advisory_type]=1&limit=1"),D="PATCHMAN_ENHANCEMENTS_FETCH",I="SUBSCRIPTIONS_UTILIZED_PRODUCT_ONE_FETCH",T="SUBSCRIPTIONS_UTILIZED_PRODUCT_TWO_FETCH",P="".concat("/api","/rhsm-subscriptions/v1/tally/products/"),F="".concat("/api","/rhsm-subscriptions/v1/capacity/products/"),O="INVENTORY_TOTAL_FETCH",w="".concat("/api").concat("/inventory/v1","/hosts?").concat("per_page=1"),N="INVENTORY_FETCH",L="".concat("/api").concat("/inventory/v1","/hosts?registered_with=insights&").concat("per_page=1"),C="INVENTORY_STALE_FETCH",R="".concat("/api").concat("/inventory/v1","/hosts?staleness=stale&registered_with=insights&").concat("per_page=1"),U="INVENTORY_WARNING_FETCH",j="".concat("/api").concat("/inventory/v1","/hosts?staleness=stale_warning&registered_with=insights&").concat("per_page=1"),H="REMEDIATIONS_FETCH",x="".concat("/api").concat("/remediations/v1","/remediations?sort=-updated_at&limit=4&offset=0"),A="".concat("/api").concat("/remediations/v1","/remediations/")},674:function(e,t,n){"use strict";n.r(t);var r,a=n(413),i=n(421),o=n(109),s=n(0),c=n.n(s),u=n(51),l=n.n(u),d=n(119),p=n(426),f=n(5),m=n(17),h=n.n(m),y=h()({complianceSummary:{},complianceFetchStatus:"",vulnerabilities:{},vulnerabilitiesFetchStatus:"",advisorStatsRecs:{},advisorStatsRecsStatus:"",advisorStatsSystems:{},advisorStatsSystemsStatus:"",advisorIncidents:{},advisorIncidentsStatus:"",patchmanSystems:{},patchmanSystemsStatus:"",patchmanSecurity:{},patchmanSecurityStatus:"",patchmanBugs:{},patchmanBugsStatus:"",patchmanEnhancements:{},patchmanEnhancementsStatus:"",subscriptionsUtilizedProductOne:[],subscriptionsUtilizedProductOneFetchStatus:"",subscriptionsUtilizedProductTwo:[],subscriptionsUtilizedProductTwoFetchStatus:"",inventorySummary:{},inventoryFetchStatus:"",inventoryStaleSummary:{},inventoryStaleFetchStatus:"",inventoryWarningSummary:{},inventoryWarningFetchStatus:"",inventoryTotalSummary:{},inventoryTotalFetchStatus:"",remediations:{},remediationsFetchStatus:""}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(f.g,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(f.g,"_FULFILLED"):return h.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(f.g,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(f.H,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(f.H,"_FULFILLED"):return h.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(f.H,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");case"".concat(f.c,"_PENDING"):return e.set("advisorStatsRecsStatus","pending");case"".concat(f.c,"_FULFILLED"):return h.a.merge(e,{advisorStatsRecs:t.payload,advisorStatsRecsStatus:"fulfilled"});case"".concat(f.c,"_REJECTED"):return e.set("advisorStatsRecsStatus","rejected");case"".concat(f.e,"_PENDING"):return e.set("advisorStatsSystemsStatus","pending");case"".concat(f.e,"_FULFILLED"):return h.a.merge(e,{advisorStatsSystems:t.payload,advisorStatsSystemsStatus:"fulfilled"});case"".concat(f.e,"_REJECTED"):return e.set("advisorStatsSystemsStatus","rejected");case"".concat(f.a,"_PENDING"):return e.set("advisorIncidentsStatus","pending");case"".concat(f.a,"_FULFILLED"):return h.a.merge(e,{advisorIncidents:t.payload,advisorIncidentsStatus:"fulfilled"});case"".concat(f.a,"_REJECTED"):return e.set("advisorIncidentsStatus","rejected");case"".concat(f.x,"_PENDING"):return e.set("patchmanSystemsStatus","pending");case"".concat(f.x,"_FULFILLED"):return h.a.merge(e,{patchmanSystems:t.payload.meta.total_items,patchmanSystemsStatus:"fulfilled"});case"".concat(f.x,"_REJECTED"):return e.set("patchmanSystemsStatus","rejected");case"".concat(f.v,"_PENDING"):return e.set("patchmanSecurityStatus","pending");case"".concat(f.v,"_FULFILLED"):return h.a.merge(e,{patchmanSecurity:t.payload.meta.total_items,patchmanSecurityStatus:"fulfilled"});case"".concat(f.v,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(f.q,"_PENDING"):return e.set("patchmanBugsStatus","pending");case"".concat(f.q,"_FULFILLED"):return h.a.merge(e,{patchmanBugs:t.payload.meta.total_items,patchmanBugsStatus:"fulfilled"});case"".concat(f.q,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(f.s,"_PENDING"):return e.set("patchmanEnhancementsStatus","pending");case"".concat(f.s,"_FULFILLED"):return h.a.merge(e,{patchmanEnhancements:t.payload.meta.total_items,patchmanEnhancementsStatus:"fulfilled"});case"".concat(f.s,"_REJECTED"):return e.set("patchmanEnhancementsStatus","rejected");case"".concat(f.D,"_PENDING"):return e.set("subscriptionsUtilizedProductOneFetchStatus","pending");case"".concat(f.D,"_FULFILLED"):return h.a.merge(e,{subscriptionsUtilizedProductOne:t.payload,subscriptionsUtilizedProductOneFetchStatus:"fulfilled"});case"".concat(f.D,"_REJECTED"):return h.a.merge(e,{subscriptionsUtilizedProductOne:t.payload.response,subscriptionsUtilizedProductOneFetchStatus:"rejected"});case"".concat(f.E,"_PENDING"):return e.set("subscriptionsUtilizedProductTwoFetchStatus","pending");case"".concat(f.E,"_FULFILLED"):return h.a.merge(e,{subscriptionsUtilizedProductTwo:t.payload,subscriptionsUtilizedProductTwoFetchStatus:"fulfilled"});case"".concat(f.E,"_REJECTED"):return h.a.merge(e,{subscriptionsUtilizedProductTwo:t.payload.response,subscriptionsUtilizedProductTwoFetchStatus:"rejected"});default:return e;case"".concat(f.i,"_PENDING"):return e.set("inventoryFetchStatus","pending");case"".concat(f.i,"_FULFILLED"):return h.a.merge(e,{inventorySummary:t.payload,inventoryFetchStatus:"fulfilled"});case"".concat(f.i,"_REJECTED"):return e.set("inventoryFetchStatus","rejected");case"".concat(f.k,"_PENDING"):return e.set("inventoryStaleFetchStatus","pending");case"".concat(f.k,"_FULFILLED"):return h.a.merge(e,{inventoryStaleSummary:t.payload,inventoryStaleFetchStatus:"fulfilled"});case"".concat(f.k,"_REJECTED"):return e.set("inventoryStaleFetchStatus","rejected");case"".concat(f.o,"_PENDING"):return e.set("inventoryWarningFetchStatus","pending");case"".concat(f.o,"_FULFILLED"):return h.a.merge(e,{inventoryWarningSummary:t.payload,inventoryWarningFetchStatus:"fulfilled"});case"".concat(f.o,"_REJECTED"):return e.set("inventoryWarningFetchStatus","rejected");case"".concat(f.m,"_PENDING"):return e.set("inventoryTotalFetchStatus","pending");case"".concat(f.m,"_FULFILLED"):return h.a.merge(e,{inventoryTotalSummary:t.payload,inventoryTotalFetchStatus:"fulfilled"});case"".concat(f.m,"_REJECTED"):return e.set("inventoryTotalFetchStatus","rejected");case"".concat(f.z,"_PENDING"):return e.set("remediationsFetchStatus","pending");case"".concat(f.z,"_FULFILLED"):return h.a.merge(e,{remediations:t.payload,remediationsFetchStatus:"fulfilled"});case"".concat(f.z,"_REJECTED"):return e.set("remediationsFetchStatus","rejected")}},g=n(144),S=n(424),_=n(423),E=n(425),b=document.getElementById("root");l.a.render(c.a.createElement(i.IntlProvider,{locale:navigator.language,messages:E,onError:console.log},c.a.createElement(o.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(r=Object(S.getRegistry)({},[].concat(n,[_.a]),e)).register({DashboardStore:v}),r}().getStore()},c.a.createElement(d.BrowserRouter,{basename:Object(p.getBaseName)(window.location.pathname)},c.a.createElement(a.b,null)))),b,(function(){return b.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.js.map