!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],s=0,u=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(L,a)&&L[a]&&u.push(L[a][0]),L[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(A&&A(t);u.length;)u.shift()();return N.push.apply(N,c||[]),n()}function n(){for(var e,t=0;t<N.length;t++){for(var n=N[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==L[o]&&(r=!1)}r&&(N.splice(t--,1),e=j(j.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!b[e]||!S[e])return;for(var n in S[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===E&&F()}(e,t),r&&r(e,t)};var a,o=!0,i="b33f71f2b6924734e1bf",c={},s=[],u=[];function l(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],f("ready");break;case"ready":w(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:T,apply:O,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return a=void 0,n}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,y,v,g=0,E=0,_={},S={},b={};function D(e){return+e+""===e?+e:e}function T(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=j.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f(P()?"ready":"idle"),null;S={},_={},b=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},L)I(n);return"prepare"===p&&0===E&&0===g&&F(),t}));var t}function I(e){b[e]?(S[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=j.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):_[e]=!0}function F(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return O(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(D(n));e.resolve(t)}}function O(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var r,o,u,l,d;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((l=C[o])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var c=0;c<l.parents.length;c++){var s=l.parents[c],u=C[s];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([s]),moduleId:o,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[o]?(n[s]||(n[s]=[]),m(n[s],[o])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}P();var g={},E=[],_={},S=function(){console.warn("[HMR] unexpected require("+I.moduleId+") to disposed module")};for(var T in h)if(Object.prototype.hasOwnProperty.call(h,T)){var I;d=D(T),I=h[T]?p(d):{type:"disposed",moduleId:T};var F=!1,O=!1,w=!1,N="";switch(I.chain&&(N="\nUpdate propagation: "+I.chain.join(" -> ")),I.type){case"self-declined":n.onDeclined&&n.onDeclined(I),n.ignoreDeclined||(F=new Error("Aborted because of self decline: "+I.moduleId+N));break;case"declined":n.onDeclined&&n.onDeclined(I),n.ignoreDeclined||(F=new Error("Aborted because of declined dependency: "+I.moduleId+" in "+I.parentId+N));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(I),n.ignoreUnaccepted||(F=new Error("Aborted because "+d+" is not accepted"+N));break;case"accepted":n.onAccepted&&n.onAccepted(I),O=!0;break;case"disposed":n.onDisposed&&n.onDisposed(I),w=!0;break;default:throw new Error("Unexception type "+I.type)}if(F)return f("abort"),Promise.reject(F);if(O)for(d in _[d]=h[d],m(E,I.outdatedModules),I.outdatedDependencies)Object.prototype.hasOwnProperty.call(I.outdatedDependencies,d)&&(g[d]||(g[d]=[]),m(g[d],I.outdatedDependencies[d]));w&&(m(E,[I.moduleId]),_[d]=S)}var R,U=[];for(o=0;o<E.length;o++)d=E[o],C[d]&&C[d].hot._selfAccepted&&_[d]!==S&&!C[d].hot._selfInvalidated&&U.push({module:d,parents:C[d].parents.slice(),errorHandler:C[d].hot._selfAccepted});f("dispose"),Object.keys(b).forEach((function(e){!1===b[e]&&function(e){delete L[e]}(e)}));var x,A,H=E.slice();for(;H.length>0;)if(d=H.pop(),l=C[d]){var z={},k=l.hot._disposeHandlers;for(u=0;u<k.length;u++)(r=k[u])(z);for(c[d]=z,l.hot.active=!1,delete C[d],delete g[d],u=0;u<l.children.length;u++){var M=C[l.children[u]];M&&((R=M.parents.indexOf(d))>=0&&M.parents.splice(R,1))}}for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=C[d]))for(A=g[d],u=0;u<A.length;u++)x=A[u],(R=l.children.indexOf(x))>=0&&l.children.splice(R,1);f("apply"),void 0!==y&&(i=y,y=void 0);for(d in h=void 0,_)Object.prototype.hasOwnProperty.call(_,d)&&(e[d]=_[d]);var G=null;for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=C[d])){A=g[d];var J=[];for(o=0;o<A.length;o++)if(x=A[o],r=l.hot._acceptedDependencies[x]){if(-1!==J.indexOf(r))continue;J.push(r)}for(o=0;o<J.length;o++){r=J[o];try{r(A)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:A[o],error:e}),n.ignoreErrored||G||(G=e)}}}for(o=0;o<U.length;o++){var B=U[o];d=B.module,s=B.parents,a=d;try{j(d)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||G||(G=t),G||(G=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||G||(G=e)}}if(G)return f("fail"),Promise.reject(G);if(v)return t(n).then((function(e){return E.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(E)}))}(t=t||{})}function P(){if(v)return h||(h={}),v.forEach(w),v=void 0,!0}function w(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var C={},L={5:0},N=[];function j(t){if(C[t])return C[t].exports;var n=C[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=C[e];if(!t)return j;var n=function(n){return t.hot.active?(C[n]?-1===C[n].parents.indexOf(e)&&C[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),j(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(t){j[e]=t}}};for(var o in j)Object.prototype.hasOwnProperty.call(j,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),E++,j.e(e).then(t,(function(e){throw t(),e}));function t(){E--,"prepare"===p&&(_[e]||I(e),0===E&&0===g&&F())}},n.t=function(e,t){return 1&t&&(e=n(e)),j.t(e,-2&t)},n}(t)),n.l=!0,n.exports}j.e=function(e){var t=[],n=L[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=L[e]=[t,r]}));t.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,j.nc&&o.setAttribute("nonce",j.nc),o.src=function(e){return j.p+"js/"+({6:"Dashboard"}[e]||e)+".js"}(e);var i=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(c);var n=L[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}L[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},j.m=e,j.c=C,j.d=function(e,t,n){j.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},j.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,t){if(1&t&&(e=j(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(j.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)j.d(n,r,function(t){return e[t]}.bind(null,r));return n},j.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(t,"a",t),t},j.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},j.p="/apps/dashboard/",j.oe=function(e){throw console.error(e),e},j.h=function(){return i};var R=window.webpackJsonp=window.webpackJsonp||[],U=R.push.bind(R);R.push=t,R=R.slice();for(var x=0;x<R.length;x++)t(R[x]);var A=U;N.push([497,7]),n()}({10:function(e,t,n){"use strict";n.d(t,"G",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"H",(function(){return c})),n.d(t,"I",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"u",(function(){return h})),n.d(t,"y",(function(){return y})),n.d(t,"x",(function(){return v})),n.d(t,"w",(function(){return g})),n.d(t,"v",(function(){return E})),n.d(t,"r",(function(){return _})),n.d(t,"q",(function(){return S})),n.d(t,"t",(function(){return b})),n.d(t,"s",(function(){return D})),n.d(t,"D",(function(){return T})),n.d(t,"E",(function(){return I})),n.d(t,"F",(function(){return F})),n.d(t,"C",(function(){return O})),n.d(t,"m",(function(){return P})),n.d(t,"n",(function(){return w})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return L})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return j})),n.d(t,"o",(function(){return R})),n.d(t,"p",(function(){return U})),n.d(t,"z",(function(){return x})),n.d(t,"A",(function(){return A})),n.d(t,"B",(function(){return H}));var r=n(345),a="./insights",o="COMPLIANCE_SUMMARY_FETCH",i="".concat("/api","/compliance/profiles"),c="VULNERABILITIES_FETCH",s=r("".concat("/api").concat("/vulnerability/v1/report/executive")),u="".concat("/api").concat("/insights/v1","/stats/rules/"),l="ADVISOR_STATS_REC_FETCH",d="".concat("/api").concat("/insights/v1","/stats/systems/"),p="ADVISOR_STATS_SYSTEMS_FETCH",f="ADVISOR_INCIDENTS_FETCH",m="".concat("/api","/insights/v1/rule/?impacting=true&limit=1&incident=true"),h="patch",y="".concat("/api","/").concat(h,"/").concat("v1","/systems"),v="PATCHMAN_SYSTEMS_FETCH",g="".concat("/api","/").concat(h,"/").concat("v1","/advisories?filter[advisory_type]=3"),E="PATCHMAN_SECURITY_FETCH",_="".concat("/api","/").concat(h,"/").concat("v1","/advisories?filter[advisory_type]=2"),S="PATCHMAN_BUGS_FETCH",b="".concat("/api","/").concat(h,"/").concat("v1","/advisories/?filter[advisory_type]=1"),D="PATCHMAN_ENHANCEMENTS_FETCH",T="SUBSCRIPTIONS_UTILIZED_PRODUCT_ONE_FETCH",I="SUBSCRIPTIONS_UTILIZED_PRODUCT_TWO_FETCH",F="".concat("/api","/rhsm-subscriptions/v1/tally/products/"),O="".concat("/api","/rhsm-subscriptions/v1/capacity/products/"),P="INVENTORY_TOTAL_FETCH",w="".concat("/api").concat("/inventory/v1","/hosts"),C="INVENTORY_FETCH",L="".concat("/api").concat("/inventory/v1","/hosts?registered_with=insights"),N="INVENTORY_STALE_FETCH",j="".concat("/api").concat("/inventory/v1","/hosts?staleness=stale&registered_with=insights"),R="INVENTORY_WARNING_FETCH",U="".concat("/api").concat("/inventory/v1","/hosts?staleness=stale_warning&registered_with=insights"),x="REMEDIATIONS_FETCH",A="".concat("/api").concat("/remediations/v1","/remediations?sort=-updated_at&limit=4&offset=0"),H="".concat("/api").concat("/remediations/v1","/remediations/")},188:function(e,t,n){var r=n(6),a=n(384);(t=r(!1)).i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-summary .ins-m-green{color:var(--pf-global--palette--green-400)}.ins-c-summary .ins-m-red{color:var(--pf-global--palette--red-100)}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}\n",""]),e.exports=t},268:function(e,t,n){(t=n(6)(!1)).push([e.i,".pf-c-spinner{display:block;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},287:function(e,t,n){"use strict";var r=n(150),a=n.n(r);a.a.defaults.headers.common={"x-rh-insights-use-path-prefix":1},t.a={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.get(e,{headers:t,params:n})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.put(e,t,{headers:n})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.post(e,t,{headers:n})}}},343:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r=n(121),a=n.n(r),o=n(155),i=n.n(o),c=n(140),s=n.n(c),u=(n(383),n(2)),l=n.n(u),d=n(10),p=n(287),f=n(1),m=n.n(f),h=n(286),y=n.n(h),v=n(308),g=n.n(v),E=n(104),_=n(346),S=n.n(_),b=n(347),D=n.n(b),T=n(348),I=n.n(T),F=n(349),O=n.n(F),P=n(272),w=n.n(P),C=n(288),L=n(335),N=(n(488),function(){return l.a.createElement(C.Main,null,l.a.createElement(L.Spinner,{className:"ins-c-loading-spinner"}))});function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var R,U=(R=function(){return n.e(6).then(n.bind(null,1347))},function(e){I()(o,e);var t,n,r=(t=o,function(){var e,n=w()(t);if(j()){var r=w()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return O()(this,e)});function o(e){var t;return S()(this,o),(t=r.call(this,e)).state={component:null},t}return D()(o,[{key:"componentDidMount",value:(n=i()(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?l.a.createElement(e,this.props):l.a.createElement(N,null)}}]),o}(u.Component)),x=function(e){var t=e.component,n=e.rootClass,r=g()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),l.a.createElement(E.d,y()({},r,{component:t}))};x.propTypes={component:m.a.func,rootClass:m.a.string};var A=function(){return l.a.createElement(E.g,null,l.a.createElement(x,{exact:!0,path:"/",component:U,rootClass:"dashboard"}))},H=Object(u.createContext)(),z=function(e){var t=Object(u.useState)({customPolicies:!1,compliance:!1,drift:!1,advisor:!1,remediations:!1,patch:!1,vulnerability:!1}),n=s()(t,2),r=n[0],o=n[1],c=Object(u.useState)(!1),f=s()(c,2),m=f[0],h=f[1],y=Object(u.useState)(!1),v=s()(y,2),g=v[0],E=v[1],_=Object(u.useState)(),S=s()(_,2),b=S[0],D=S[1];function T(){return(T=i()(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return insights.chrome.init(),insights.chrome.identifyApp("dashboard"),e.next=4,window.insights.chrome.auth.getUser().then((function(e){return h(e.identity.user.is_org_admin)}));case 4:return insights.chrome.getUserPermissions().then((function(e){var t=e.map((function(e){return e.permission}));o({customPolicies:t.includes("custom-policies:*:*"),compliance:t.includes("compliance:*:*"),drift:t.includes("drift:*:*"),advisor:t.includes("insights:*:*"),remediations:t.includes("remediations:*:*")||t.includes("remediations:remediation:*")||t.includes("remediations:remediation:read")||t.includes("remediations:*:read"),patch:t.includes("patch:*:*"),vulnerability:t.includes("vulnerability:*:*")}),E(!0)})),e.next=7,p.a.get("".concat(d.n));case 7:t=e.sent,D(t.data.total>0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){T.apply(this,arguments)}()}),[]),g?l.a.createElement(H.Provider,{value:{customPolicies:r.customPolicies,compliance:r.compliance,drift:r.drift,advisor:r.advisor,remediations:r.remediations,patch:r.patch,vulnerability:r.vulnerability,subscriptions:!0,isOrgAdmin:m,hasSystems:b}},l.a.createElement(A,{childProps:e})):l.a.createElement(N,null)};z.propTypes={history:m.a.object};t.b=z},367:function(e){e.exports=JSON.parse('{"en":{"dashboardTitle":"Dashboard","subscriptionsUtilizedTitle":"Subscription watch utilization summary","subscriptionsUtilizedProductOneTitle":"Red Hat OpenShift","subscriptionsUtilizedProductOneDesc":"OpenShift Cores: {totalReport}","subscriptionsUtilizedProductTwoTitle":"Red Hat Enterprise Linux","subscriptionsUtilizedProductTwoTitleDesc":"RHEL sockets: {totalReport}","subscriptionsUtilizedProductCapacity":"Subscription threshold: {totalCapacity}","subscriptionsUtilizedProductDate":"Data from: {formattedDate}","recsImpactingSystems":"{totalRecs, plural, one {# recommendation} other {# recommendations}}  impacting {systems, plural, one {# system} other {# systems}}","incidentsDetected":"{incidents, plural, one {incident} other {incidents}} detected","critical":"Critical","important":"important","moderate":"moderate","low":"low","compliantHostCount":"{count, plural, one {# system} other {# systems}}","compliantScore":"{score}% passes","remediationsTotal":"{total} more remediations","vulnerabilitiesTitle":"Vulnerabilities","vulnerabilitiesTotalItems":"{total}","lastxdays":"Last {days} days","cvesImpactingSystems":"{cves, plural, one {CVE} other {CVEs}} impacting your systems","vulnerabilityLearnMore":"Learn about CVSS Scores","latestVulnerabilitiesTotal":"{totalLatest}","deniedStateTitle":"You do not have access to {appName}","deniedStateBody":"Contact your organization administrator(s) for more information","complianceEmptyStateTitle":"No policies","complianceEmptyStateBody":"The compliance service uses OpenSCAP policies to track your organization\'s adherence to compliance requirements","complianceEmptyStateAction1":"Create a policy","complianceEmptyStateAction2":"Learn about OpenSCAP","securityAdvisories":"{count, plural, one {security advisory} other {security advisories}}","bugfixAdvisories":"{count, plural, one {bug fix} other {bug fixes}}","enhancementAdvisories":"{count, plural, one {enhancement} other {enhancements}}","systemsAffected":"{count, plural, one {# system} other {# systems}} affected","patchTitle":"Patch","systemInventoryDescription":"Systems running insights-client","systemInventoryWarning":"stale systems","systemInventoryDanger":"systems to be removed","systemInventoryPercentageData":"0% of total systems","systemInventoryTitle":"Insights system inventory"}}')},383:function(e,t,n){var r=n(7),a=n(188);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o),c=a.locals?a.locals:{};a.locals||e.hot.accept(188,(function(){var t=n(188);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),i(t)})),e.hot.dispose((function(){i()})),e.exports=c},488:function(e,t,n){var r=n(7),a=n(268);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o),c=a.locals?a.locals:{};a.locals||e.hot.accept(268,(function(){var t=n(268);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),i(t)})),e.hot.dispose((function(){i()})),e.exports=c},497:function(e,t,n){"use strict";n.r(t);var r,a=n(343),o=n(364),i=n(183),c=n(2),s=n.n(c),u=n(31),l=n.n(u),d=n(185),p=n(368),f=n(10),m=n(42),h=n.n(m),y=h()({complianceSummary:{},complianceFetchStatus:"",vulnerabilities:{},vulnerabilitiesFetchStatus:"",advisorStatsRecs:{},advisorStatsRecsStatus:"",advisorStatsSystems:{},advisorStatsSystemsStatus:"",advisorIncidents:{},advisorIncidentsStatus:"",patchmanSystems:{},patchmanSystemsStatus:"",patchmanSecurity:{},patchmanSecurityStatus:"",patchmanBugs:{},patchmanBugsStatus:"",patchmanEnhancements:{},patchmanEnhancementsStatus:"",subscriptionsUtilizedProductOne:[],subscriptionsUtilizedProductOneFetchStatus:"",subscriptionsUtilizedProductTwo:[],subscriptionsUtilizedProductTwoFetchStatus:"",inventorySummary:{},inventoryFetchStatus:"",inventoryStaleSummary:{},inventoryStaleFetchStatus:"",inventoryWarningSummary:{},inventoryWarningFetchStatus:"",inventoryTotalSummary:{},inventoryTotalFetchStatus:"",remediations:{},remediationsFetchStatus:""}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(f.g,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(f.g,"_FULFILLED"):return h.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(f.g,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(f.H,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(f.H,"_FULFILLED"):return h.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(f.H,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");case"".concat(f.c,"_PENDING"):return e.set("advisorStatsRecsStatus","pending");case"".concat(f.c,"_FULFILLED"):return h.a.merge(e,{advisorStatsRecs:t.payload,advisorStatsRecsStatus:"fulfilled"});case"".concat(f.c,"_REJECTED"):return e.set("advisorStatsRecsStatus","rejected");case"".concat(f.e,"_PENDING"):return e.set("advisorStatsSystemsStatus","pending");case"".concat(f.e,"_FULFILLED"):return h.a.merge(e,{advisorStatsSystems:t.payload,advisorStatsSystemsStatus:"fulfilled"});case"".concat(f.e,"_REJECTED"):return e.set("advisorStatsSystemsStatus","rejected");case"".concat(f.a,"_PENDING"):return e.set("advisorIncidentsStatus","pending");case"".concat(f.a,"_FULFILLED"):return h.a.merge(e,{advisorIncidents:t.payload,advisorIncidentsStatus:"fulfilled"});case"".concat(f.a,"_REJECTED"):return e.set("advisorIncidentsStatus","rejected");case"".concat(f.x,"_PENDING"):return e.set("patchmanSystemsStatus","pending");case"".concat(f.x,"_FULFILLED"):return h.a.merge(e,{patchmanSystems:t.payload.meta.total_items,patchmanSystemsStatus:"fulfilled"});case"".concat(f.x,"_REJECTED"):return e.set("patchmanSystemsStatus","rejected");case"".concat(f.v,"_PENDING"):return e.set("patchmanSecurityStatus","pending");case"".concat(f.v,"_FULFILLED"):return h.a.merge(e,{patchmanSecurity:t.payload.meta.total_items,patchmanSecurityStatus:"fulfilled"});case"".concat(f.v,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(f.q,"_PENDING"):return e.set("patchmanBugsStatus","pending");case"".concat(f.q,"_FULFILLED"):return h.a.merge(e,{patchmanBugs:t.payload.meta.total_items,patchmanBugsStatus:"fulfilled"});case"".concat(f.q,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(f.s,"_PENDING"):return e.set("patchmanEnhancementsStatus","pending");case"".concat(f.s,"_FULFILLED"):return h.a.merge(e,{patchmanEnhancements:t.payload.meta.total_items,patchmanEnhancementsStatus:"fulfilled"});case"".concat(f.s,"_REJECTED"):return e.set("patchmanEnhancementsStatus","rejected");case"".concat(f.D,"_PENDING"):return e.set("subscriptionsUtilizedProductOneFetchStatus","pending");case"".concat(f.D,"_FULFILLED"):return h.a.merge(e,{subscriptionsUtilizedProductOne:t.payload,subscriptionsUtilizedProductOneFetchStatus:"fulfilled"});case"".concat(f.D,"_REJECTED"):return h.a.merge(e,{subscriptionsUtilizedProductOne:t.payload.response,subscriptionsUtilizedProductOneFetchStatus:"rejected"});case"".concat(f.E,"_PENDING"):return e.set("subscriptionsUtilizedProductTwoFetchStatus","pending");case"".concat(f.E,"_FULFILLED"):return h.a.merge(e,{subscriptionsUtilizedProductTwo:t.payload,subscriptionsUtilizedProductTwoFetchStatus:"fulfilled"});case"".concat(f.E,"_REJECTED"):return h.a.merge(e,{subscriptionsUtilizedProductTwo:t.payload.response,subscriptionsUtilizedProductTwoFetchStatus:"rejected"});default:return e;case"".concat(f.i,"_PENDING"):return e.set("inventoryFetchStatus","pending");case"".concat(f.i,"_FULFILLED"):return h.a.merge(e,{inventorySummary:t.payload,inventoryFetchStatus:"fulfilled"});case"".concat(f.i,"_REJECTED"):return e.set("inventoryFetchStatus","rejected");case"".concat(f.k,"_PENDING"):return e.set("inventoryStaleFetchStatus","pending");case"".concat(f.k,"_FULFILLED"):return h.a.merge(e,{inventoryStaleSummary:t.payload,inventoryStaleFetchStatus:"fulfilled"});case"".concat(f.k,"_REJECTED"):return e.set("inventoryStaleFetchStatus","rejected");case"".concat(f.o,"_PENDING"):return e.set("inventoryWarningFetchStatus","pending");case"".concat(f.o,"_FULFILLED"):return h.a.merge(e,{inventoryWarningSummary:t.payload,inventoryWarningFetchStatus:"fulfilled"});case"".concat(f.o,"_REJECTED"):return e.set("inventoryWarningFetchStatus","rejected");case"".concat(f.m,"_PENDING"):return e.set("inventoryTotalFetchStatus","pending");case"".concat(f.m,"_FULFILLED"):return h.a.merge(e,{inventoryTotalSummary:t.payload,inventoryTotalFetchStatus:"fulfilled"});case"".concat(f.m,"_REJECTED"):return e.set("inventoryTotalFetchStatus","rejected");case"".concat(f.z,"_PENDING"):return e.set("remediationsFetchStatus","pending");case"".concat(f.z,"_FULFILLED"):return h.a.merge(e,{remediations:t.payload,remediationsFetchStatus:"fulfilled"});case"".concat(f.z,"_REJECTED"):return e.set("remediationsFetchStatus","rejected")}},g=n(180),E=n(366),_=n(365),S=n(367),b=document.getElementById("root");l.a.render(s.a.createElement(o.IntlProvider,{locale:navigator.language,messages:S,onError:console.log},s.a.createElement(i.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(r=Object(E.getRegistry)({},[].concat(n,[_.a]),e)).register({DashboardStore:v}),r}().getStore()},s.a.createElement(d.BrowserRouter,{basename:Object(p.getBaseName)(window.location.pathname)},s.a.createElement(a.b,null)))),b,(function(){return b.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.js.map