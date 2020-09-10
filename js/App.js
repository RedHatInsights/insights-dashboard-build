!function(e){function t(t){for(var r,a,i=t[0],o=t[1],c=t[2],s=0,u=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(C,a)&&C[a]&&u.push(C[a][0]),C[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(A&&A(t);u.length;)u.shift()();return N.push.apply(N,c||[]),n()}function n(){for(var e,t=0;t<N.length;t++){for(var n=N[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==C[i]&&(r=!1)}r&&(N.splice(t--,1),e=R(R.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!b[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===S&&F()}(e,t),r&&r(e,t)};var a,i=!0,o="6e9ae2a946f116d4ae91",c={},s=[],u=[];function l(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],f("ready");break;case"ready":O(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:D,apply:P,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return a=void 0,n}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,y,v,g=0,S=0,E={},_={},b={};function T(e){return+e+""===e?+e:e}function D(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=R.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f(w()?"ready":"idle"),null;_={},E={},b=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},C)I(n);return"prepare"===p&&0===S&&0===g&&F(),t}));var t}function I(e){b[e]?(_[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function F(){f("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then((function(){return P(i)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(T(n));e.resolve(t)}}function P(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var r,i,u,l,d;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,o=a.chain;if((l=L[i])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var c=0;c<l.parents.length;c++){var s=l.parents[c],u=L[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),m(n[s],[i])):(delete n[s],t.push(s),r.push({chain:o.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}w();var g={},S=[],E={},_=function(){console.warn("[HMR] unexpected require("+I.moduleId+") to disposed module")};for(var D in h)if(Object.prototype.hasOwnProperty.call(h,D)){var I;d=T(D),I=h[D]?p(d):{type:"disposed",moduleId:D};var F=!1,P=!1,O=!1,N="";switch(I.chain&&(N="\nUpdate propagation: "+I.chain.join(" -> ")),I.type){case"self-declined":n.onDeclined&&n.onDeclined(I),n.ignoreDeclined||(F=new Error("Aborted because of self decline: "+I.moduleId+N));break;case"declined":n.onDeclined&&n.onDeclined(I),n.ignoreDeclined||(F=new Error("Aborted because of declined dependency: "+I.moduleId+" in "+I.parentId+N));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(I),n.ignoreUnaccepted||(F=new Error("Aborted because "+d+" is not accepted"+N));break;case"accepted":n.onAccepted&&n.onAccepted(I),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(I),O=!0;break;default:throw new Error("Unexception type "+I.type)}if(F)return f("abort"),Promise.reject(F);if(P)for(d in E[d]=h[d],m(S,I.outdatedModules),I.outdatedDependencies)Object.prototype.hasOwnProperty.call(I.outdatedDependencies,d)&&(g[d]||(g[d]=[]),m(g[d],I.outdatedDependencies[d]));O&&(m(S,[I.moduleId]),E[d]=_)}var U,j=[];for(i=0;i<S.length;i++)d=S[i],L[d]&&L[d].hot._selfAccepted&&E[d]!==_&&!L[d].hot._selfInvalidated&&j.push({module:d,parents:L[d].parents.slice(),errorHandler:L[d].hot._selfAccepted});f("dispose"),Object.keys(b).forEach((function(e){!1===b[e]&&function(e){delete C[e]}(e)}));var x,A,H=S.slice();for(;H.length>0;)if(d=H.pop(),l=L[d]){var k={},z=l.hot._disposeHandlers;for(u=0;u<z.length;u++)(r=z[u])(k);for(c[d]=k,l.hot.active=!1,delete L[d],delete g[d],u=0;u<l.children.length;u++){var M=L[l.children[u]];M&&((U=M.parents.indexOf(d))>=0&&M.parents.splice(U,1))}}for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=L[d]))for(A=g[d],u=0;u<A.length;u++)x=A[u],(U=l.children.indexOf(x))>=0&&l.children.splice(U,1);f("apply"),void 0!==y&&(o=y,y=void 0);for(d in h=void 0,E)Object.prototype.hasOwnProperty.call(E,d)&&(e[d]=E[d]);var G=null;for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=L[d])){A=g[d];var J=[];for(i=0;i<A.length;i++)if(x=A[i],r=l.hot._acceptedDependencies[x]){if(-1!==J.indexOf(r))continue;J.push(r)}for(i=0;i<J.length;i++){r=J[i];try{r(A)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:A[i],error:e}),n.ignoreErrored||G||(G=e)}}}for(i=0;i<j.length;i++){var B=j[i];d=B.module,s=B.parents,a=d;try{R(d)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||G||(G=t),G||(G=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||G||(G=e)}}if(G)return f("fail"),Promise.reject(G);if(v)return t(n).then((function(e){return S.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(S)}))}(t=t||{})}function w(){if(v)return h||(h={}),v.forEach(O),v=void 0,!0}function O(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var L={},C={7:0},N=[];function R(t){if(L[t])return L[t].exports;var n=L[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=L[e];if(!t)return R;var n=function(n){return t.hot.active?(L[n]?-1===L[n].parents.indexOf(e)&&L[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),R(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var i in R)Object.prototype.hasOwnProperty.call(R,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===p&&f("prepare"),S++,R.e(e).then(t,(function(e){throw t(),e}));function t(){S--,"prepare"===p&&(E[e]||I(e),0===S&&0===g&&F())}},n.t=function(e,t){return 1&t&&(e=n(e)),R.t(e,-2&t)},n}(t)),n.l=!0,n.exports}R.e=function(e){var t=[],n=C[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=C[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,R.nc&&i.setAttribute("nonce",R.nc),i.src=function(e){return R.p+"js/"+({8:"Dashboard"}[e]||e)+".js"}(e);var o=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=C[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}C[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},R.m=e,R.c=L,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)R.d(n,r,function(t){return e[t]}.bind(null,r));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="/apps/dashboard/",R.oe=function(e){throw console.error(e),e},R.h=function(){return o};var U=window.webpackJsonp=window.webpackJsonp||[],j=U.push.bind(U);U.push=t,U=U.slice();for(var x=0;x<U.length;x++)t(U[x]);var A=j;N.push([782,0,2,9,10]),n()}({194:function(e,t,n){"use strict";var r=n(182),a=n.n(r);a.a.defaults.headers.common={"x-rh-insights-use-path-prefix":1},t.a={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.get(e,{headers:t,params:n})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.put(e,t,{headers:n})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.post(e,t,{headers:n})}}},220:function(e,t,n){var r=n(6),a=n(573);(t=r(!1)).i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-summary .ins-m-green{color:var(--pf-global--palette--green-400)}.ins-c-summary .ins-m-red{color:var(--pf-global--palette--red-100)}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}\n",""]),e.exports=t},221:function(e,t,n){(t=n(6)(!1)).push([e.i,".pf-c-spinner{display:block;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},461:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"n",(function(){return h})),n.d(t,"m",(function(){return y})),n.d(t,"k",(function(){return v})),n.d(t,"l",(function(){return g})),n.d(t,"p",(function(){return S})),n.d(t,"q",(function(){return E})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return T})),n.d(t,"h",(function(){return D})),n.d(t,"i",(function(){return I})),n.d(t,"o",(function(){return F}));var r=n(122),a=n.n(r),i=n(153),o=n.n(i),c=n(5),s=n(194),u=function(){var e=o()(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,s.a.get(t,n,r);case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(e){return{type:c.g,payload:u(c.h,{},e)}},d=function(e){return{type:c.I,payload:u(c.J,{},e)}},p=function(e){return{type:c.c,payload:u(c.d,{},e)}},f=function(e){return{type:c.e,payload:u(c.f,{},e)}},m=function(e){return{type:c.a,payload:u(c.b,{},e)}},h=function(e){return{type:c.x,payload:u(c.y,{},e)}},y=function(e){return{type:c.v,payload:u(c.w,{},e)}},v=function(e){return{type:c.q,payload:u(c.r,{},e)}},g=function(e){return{type:c.s,payload:u(c.t,{},e)}},S=function(e,t){return{type:c.E,payload:Promise.all([u("".concat(c.G).concat(e),{},t),u("".concat(c.D).concat(e),{},t)])}},E=function(e,t){return{type:c.F,payload:Promise.all([u("".concat(c.G).concat(e),{},t),u("".concat(c.D).concat(e),{},t)])}},_=function(e){return{type:c.i,payload:u(c.j,{},e)}},b=function(e){return{type:c.m,payload:u(c.n,{},e)}},T=function(e){return{type:c.k,payload:u(c.l,{},e)}},D=function(e){return{type:c.o,payload:u(c.p,{},e)}},I=function(e){return{type:c.z,payload:u(c.A,{},e)}},F=function(e){return{type:c.C,payload:e}}},5:function(e,t,n){"use strict";n.d(t,"H",(function(){return a})),n.d(t,"C",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"I",(function(){return s})),n.d(t,"J",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"u",(function(){return y})),n.d(t,"y",(function(){return v})),n.d(t,"x",(function(){return g})),n.d(t,"w",(function(){return S})),n.d(t,"v",(function(){return E})),n.d(t,"r",(function(){return _})),n.d(t,"q",(function(){return b})),n.d(t,"t",(function(){return T})),n.d(t,"s",(function(){return D})),n.d(t,"E",(function(){return I})),n.d(t,"F",(function(){return F})),n.d(t,"G",(function(){return P})),n.d(t,"D",(function(){return w})),n.d(t,"m",(function(){return O})),n.d(t,"n",(function(){return L})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return N})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return U})),n.d(t,"o",(function(){return j})),n.d(t,"p",(function(){return x})),n.d(t,"z",(function(){return A})),n.d(t,"A",(function(){return H})),n.d(t,"B",(function(){return k}));var r=n(510),a="./insights",i="SELECTED_TAGS_SET",o="COMPLIANCE_SUMMARY_FETCH",c="".concat("/api","/compliance/profiles?search=has_test_results=true"),s="VULNERABILITIES_FETCH",u=r("".concat("/api").concat("/vulnerability/v1/report/executive")),l="".concat("/api").concat("/insights/v1","/stats/rules/"),d="ADVISOR_STATS_REC_FETCH",p="".concat("/api").concat("/insights/v1","/stats/systems/"),f="ADVISOR_STATS_SYSTEMS_FETCH",m="ADVISOR_INCIDENTS_FETCH",h="".concat("/api","/insights/v1/rule/?impacting=true&limit=1&incident=true"),y="patch",v="".concat("/api","/").concat(y,"/").concat("v1","/systems"),g="PATCHMAN_SYSTEMS_FETCH",S="".concat("/api","/").concat(y,"/").concat("v1","/advisories?filter[advisory_type]=3&limit=1"),E="PATCHMAN_SECURITY_FETCH",_="".concat("/api","/").concat(y,"/").concat("v1","/advisories?filter[advisory_type]=2&limit=1"),b="PATCHMAN_BUGS_FETCH",T="".concat("/api","/").concat(y,"/").concat("v1","/advisories/?filter[advisory_type]=1&limit=1"),D="PATCHMAN_ENHANCEMENTS_FETCH",I="SUBSCRIPTIONS_UTILIZED_PRODUCT_ONE_FETCH",F="SUBSCRIPTIONS_UTILIZED_PRODUCT_TWO_FETCH",P="".concat("/api","/rhsm-subscriptions/v1/tally/products/"),w="".concat("/api","/rhsm-subscriptions/v1/capacity/products/"),O="INVENTORY_TOTAL_FETCH",L="".concat("/api").concat("/inventory/v1","/hosts?").concat("per_page=1"),C="INVENTORY_FETCH",N="".concat("/api").concat("/inventory/v1","/hosts?registered_with=insights&").concat("per_page=1"),R="INVENTORY_STALE_FETCH",U="".concat("/api").concat("/inventory/v1","/hosts?staleness=stale&registered_with=insights&").concat("per_page=1"),j="INVENTORY_WARNING_FETCH",x="".concat("/api").concat("/inventory/v1","/hosts?staleness=stale_warning&registered_with=insights&").concat("per_page=1"),A="REMEDIATIONS_FETCH",H="".concat("/api").concat("/remediations/v1","/remediations?sort=-updated_at&limit=4&offset=0"),k="".concat("/api").concat("/remediations/v1","/remediations/")},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r=n(122),a=n.n(r),i=n(153),o=n.n(i),c=n(172),s=n.n(c),u=(n(572),n(1)),l=n.n(u),d=n(194),p=n(5),f=(n(591),n(464)),m=n(512),h=function(){return l.a.createElement(f.Main,null,l.a.createElement(m.Spinner,{className:"ins-c-loading-spinner"}))},y=n(14),v=n.n(y),g=n(459),S=n.n(g),E=n(460),_=n.n(E),b=n(38),T=n(513),D=n.n(T),I=n(514),F=n.n(I),P=n(515),w=n.n(P),O=n(516),L=n.n(O),C=n(451),N=n.n(C);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N()(e);if(t){var a=N()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return L()(this,n)}}var U,j=(U=function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,1270))},function(e){w()(r,e);var t,n=R(r);function r(e){var t;return D()(this,r),(t=n.call(this,e)).state={component:null},t}return F()(r,[{key:"componentDidMount",value:(t=o()(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?l.a.createElement(e,this.props):l.a.createElement(h,null)}}]),r}(u.Component)),x=function(e){var t=e.component,n=e.rootClass,r=_()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),l.a.createElement(b.d,S()({},r,{component:t}))};x.propTypes={component:v.a.func,rootClass:v.a.string};var A=function(){return l.a.createElement(b.g,null,l.a.createElement(x,{exact:!0,path:"/",component:j,rootClass:"dashboard"}))},H=n(461),k=n(136),z=Object(u.createContext)(),M=function(e){var t=Object(k.useDispatch)(),n=Object(u.useState)({customPolicies:!1,compliance:!1,drift:!1,advisor:!1,remediations:!1,patch:!1,vulnerability:!1,subscriptions:!1}),r=s()(n,2),i=r[0],c=r[1],f=Object(u.useState)(!1),m=s()(f,2),y=m[0],v=m[1],g=Object(u.useState)(!1),S=s()(g,2),E=S[0],_=S[1],b=Object(u.useState)(),T=s()(b,2),D=T[0],I=T[1];function F(){return(F=o()(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return insights.chrome.init(),insights.chrome.identifyApp("dashboard"),null===(n=insights.chrome)||void 0===n||null===(r=n.globalFilterScope)||void 0===r||r.call(n,"insights"),(null===(i=insights.chrome)||void 0===i?void 0:i.globalFilterScope)&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var n,r,a,i=e.data,o=(null===(n=insights.chrome)||void 0===n||null===(r=n.mapGlobalFilter)||void 0===r||null===(a=r.call(n,i))||void 0===a?void 0:a.filter((function(e){return!e.includes("Workloads")})))||void 0;t(Object(H.o)(o))})),e.next=6,window.insights.chrome.auth.getUser().then((function(e){return v(e.identity.user.is_org_admin)}));case 6:return insights.chrome.getUserPermissions().then((function(e){var t=e.length&&e.map((function(e){return e.permission}));t.length&&c({customPolicies:t.includes("custom-policies:*:*"),compliance:t.includes("compliance:*:*"),drift:t.includes("drift:*:*"),advisor:t.includes("insights:*:*"),remediations:t.includes("remediations:*:*")||t.includes("remediations:remediation:*")||t.includes("remediations:remediation:read")||t.includes("remediations:*:read"),patch:t.includes("patch:*:*"),vulnerability:t.includes("vulnerability:*:*"),subscriptions:t.includes("subscriptions:*:*")}),_(!0)})),e.next=9,d.a.get("".concat(p.n));case 9:o=e.sent,I(o.data.total>0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[]),E?l.a.createElement(z.Provider,{value:{customPolicies:i.customPolicies,compliance:i.compliance,drift:i.drift,advisor:i.advisor,remediations:i.remediations,patch:i.patch,vulnerability:i.vulnerability,subscriptions:i.subscriptions,isOrgAdmin:y,hasSystems:D}},l.a.createElement(A,{childProps:e})):l.a.createElement(h,null)};M.propTypes={history:v.a.object};t.b=M},521:function(e){e.exports=JSON.parse('{"en":{"dashboardTitle":"Dashboard","subscriptionsUtilizedTitle":"Subscription Watch utilization summary","subscriptionsUtilizedLearnMore":"Activate Subscription Watch to monitor your subscription utilization.","subscriptionsUtilizedLearnMoreAction":"Learn about Subscription Watch","subscriptionsUtilizedNoProductData":"No data available","subscriptionsUtilizedProductOneTitle":"Red Hat OpenShift","subscriptionsUtilizedProductOneDesc":"OpenShift cores: {totalReport}","subscriptionsUtilizedProductTwoTitle":"Red Hat Enterprise Linux","subscriptionsUtilizedProductTwoTitleDesc":"RHEL sockets: {totalReport}","subscriptionsUtilizedProductCapacity":"Subscription threshold: {totalCapacity}","subscriptionsUtilizedProductDate":"Data from: {formattedDate}","recsImpactingSystems":"{totalRecs, plural, one {# Recommendation} other {# Recommendations}}  impacting {systems, plural, one {# system} other {# systems}}","incidentsDetected":"{incidents, plural, one {Incident} other {Incidents}} detected","critical":"Critical","important":"important","moderate":"moderate","low":"low","compliantHostCount":"{count, plural, one {# system} other {# systems}}","compliantScore":"{score}% passes","vulnerabilitiesTitle":"Vulnerability","vulnerabilitiesTotalItems":"{total}","lastxdays":"Last {days} days","cvesImpactingSystems":"{cves, plural, one {CVE} other {CVEs}} impacting your systems","vulnerabilityLearnMore":"Learn about CVSS Scores","latestVulnerabilitiesTotal":"{totalLatest}","deniedStateTitle":"You do not have access to {appName}","deniedStateBody":"Contact your organization administrator(s) for more information","complianceEmptyStateTitle":"No policies","complianceEmptyStateBody":"The compliance service uses OpenSCAP policies to track your organization\'s adherence to compliance requirements","complianceEmptyStateAction1":"Create a policy","complianceEmptyStateAction2":"Learn about OpenSCAP","securityAdvisories":"{count, plural, one {security advisory} other {security advisories}}","bugfixAdvisories":"{count, plural, one {bug fix} other {bug fixes}}","enhancementAdvisories":"{count, plural, one {enhancement} other {enhancements}}","systemsAffected":"{count, plural, one {# system} other {# systems}} affected","patchTitle":"Patch","systemInventoryDescription":"{count, plural, one {System} other {Systems}} running insights-client","systemInventoryStaleWarning":"{count, plural, one {# system} other {# systems}} to be removed","systemInventoryStale":"{count, plural, one {# stale system} other {# stale systems}}","systemInventoryPercentageData":"{count}% of total systems","systemInventoryTitle":"Insights system inventory","systemInventoryNotUsingClient":"{count, plural, one {# additional system} other {# additional systems}} not running insights-client        are not taking advantage of Red Hat Insights capabilities.","remediationsTotal":"{total} more remediations","remediationsPlaybookStatus":"{status}","remediationsPlaybookNoActivity":"No activity","remediationsNoActivity":"Failure","remediationsNoDataTitle":"You haven\'t created any remediation Playbooks yet","remediationsNoDataBody":"Create an Ansible Playbook to remediate or mitigate vulnerabilities or configuration issues.","errorStateTitle":"{appName} has experienced an error. Contact Red Hat support if the problem persists.","noSystemsTitle":"Get started with Red Hat Insights","noSystemsDescription":"With predictive analytics, avoid problems and unplanned                        downtime in your Red Hat environment. Red Hat Insights is                        included with your Red Hat Enterprise Linux subscription.","noSystemsInstall":"Install the client on the RHEL system","noSystemsRegister":"Register the system to Red Hat Insights","noSystemsLink":"Getting started documentation","advisorChartDescription":"This chart shows recommendations effecting your system","registerYourSystems":"Register your systems"}}')},572:function(e,t,n){var r=n(7),a=n(220);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(220,(function(){"string"==typeof(a=(a=n(220)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},591:function(e,t,n){var r=n(7),a=n(221);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(221,(function(){"string"==typeof(a=(a=n(221)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},782:function(e,t,n){"use strict";n.r(t);var r,a=n(508),i=n(517),o=n(136),c=n(1),s=n.n(c),u=n(29),l=n.n(u),d=n(177),p=n(522),f=n(5),m=n(39),h=n.n(m),y=h()({complianceSummary:{},complianceFetchStatus:"",vulnerabilities:{},vulnerabilitiesFetchStatus:"",advisorStatsRecs:{},advisorStatsRecsStatus:"",advisorStatsSystems:{},advisorStatsSystemsStatus:"",advisorIncidents:{},advisorIncidentsStatus:"",patchmanSystems:{},patchmanSystemsStatus:"",patchmanSecurity:{},patchmanSecurityStatus:"",patchmanBugs:{},patchmanBugsStatus:"",patchmanEnhancements:{},patchmanEnhancementsStatus:"",subscriptionsUtilizedProductOne:[],subscriptionsUtilizedProductOneFetchStatus:"",subscriptionsUtilizedProductTwo:[],subscriptionsUtilizedProductTwoFetchStatus:"",inventorySummary:{},inventoryFetchStatus:"",inventoryStaleSummary:{},inventoryStaleFetchStatus:"",inventoryWarningSummary:{},inventoryWarningFetchStatus:"",inventoryTotalSummary:{},inventoryTotalFetchStatus:"",remediations:{},remediationsFetchStatus:"",selectedTags:[]}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.C:return h.a.merge(e,{selectedTags:t.payload});case"".concat(f.g,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(f.g,"_FULFILLED"):return h.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(f.g,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(f.I,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(f.I,"_FULFILLED"):return h.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(f.I,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");case"".concat(f.c,"_PENDING"):return e.set("advisorStatsRecsStatus","pending");case"".concat(f.c,"_FULFILLED"):return h.a.merge(e,{advisorStatsRecs:t.payload,advisorStatsRecsStatus:"fulfilled"});case"".concat(f.c,"_REJECTED"):return e.set("advisorStatsRecsStatus","rejected");case"".concat(f.e,"_PENDING"):return e.set("advisorStatsSystemsStatus","pending");case"".concat(f.e,"_FULFILLED"):return h.a.merge(e,{advisorStatsSystems:t.payload,advisorStatsSystemsStatus:"fulfilled"});case"".concat(f.e,"_REJECTED"):return e.set("advisorStatsSystemsStatus","rejected");case"".concat(f.a,"_PENDING"):return e.set("advisorIncidentsStatus","pending");case"".concat(f.a,"_FULFILLED"):return h.a.merge(e,{advisorIncidents:t.payload,advisorIncidentsStatus:"fulfilled"});case"".concat(f.a,"_REJECTED"):return e.set("advisorIncidentsStatus","rejected");case"".concat(f.x,"_PENDING"):return e.set("patchmanSystemsStatus","pending");case"".concat(f.x,"_FULFILLED"):return h.a.merge(e,{patchmanSystems:t.payload.meta.total_items,patchmanSystemsStatus:"fulfilled"});case"".concat(f.x,"_REJECTED"):return e.set("patchmanSystemsStatus","rejected");case"".concat(f.v,"_PENDING"):return e.set("patchmanSecurityStatus","pending");case"".concat(f.v,"_FULFILLED"):return h.a.merge(e,{patchmanSecurity:t.payload.meta.total_items,patchmanSecurityStatus:"fulfilled"});case"".concat(f.v,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(f.q,"_PENDING"):return e.set("patchmanBugsStatus","pending");case"".concat(f.q,"_FULFILLED"):return h.a.merge(e,{patchmanBugs:t.payload.meta.total_items,patchmanBugsStatus:"fulfilled"});case"".concat(f.q,"_REJECTED"):return e.set("patchmanBugsStatus","rejected");case"".concat(f.s,"_PENDING"):return e.set("patchmanEnhancementsStatus","pending");case"".concat(f.s,"_FULFILLED"):return h.a.merge(e,{patchmanEnhancements:t.payload.meta.total_items,patchmanEnhancementsStatus:"fulfilled"});case"".concat(f.s,"_REJECTED"):return e.set("patchmanEnhancementsStatus","rejected");case"".concat(f.E,"_PENDING"):return e.set("subscriptionsUtilizedProductOneFetchStatus","pending");case"".concat(f.E,"_FULFILLED"):return h.a.merge(e,{subscriptionsUtilizedProductOne:t.payload,subscriptionsUtilizedProductOneFetchStatus:"fulfilled"});case"".concat(f.E,"_REJECTED"):return h.a.merge(e,{subscriptionsUtilizedProductOne:t.payload.response,subscriptionsUtilizedProductOneFetchStatus:"rejected"});case"".concat(f.F,"_PENDING"):return e.set("subscriptionsUtilizedProductTwoFetchStatus","pending");case"".concat(f.F,"_FULFILLED"):return h.a.merge(e,{subscriptionsUtilizedProductTwo:t.payload,subscriptionsUtilizedProductTwoFetchStatus:"fulfilled"});case"".concat(f.F,"_REJECTED"):return h.a.merge(e,{subscriptionsUtilizedProductTwo:t.payload.response,subscriptionsUtilizedProductTwoFetchStatus:"rejected"});case"".concat(f.i,"_PENDING"):return e.set("inventoryFetchStatus","pending");case"".concat(f.i,"_FULFILLED"):return h.a.merge(e,{inventorySummary:t.payload,inventoryFetchStatus:"fulfilled"});case"".concat(f.i,"_REJECTED"):return e.set("inventoryFetchStatus","rejected");case"".concat(f.k,"_PENDING"):return e.set("inventoryStaleFetchStatus","pending");case"".concat(f.k,"_FULFILLED"):return h.a.merge(e,{inventoryStaleSummary:t.payload,inventoryStaleFetchStatus:"fulfilled"});case"".concat(f.k,"_REJECTED"):return e.set("inventoryStaleFetchStatus","rejected");case"".concat(f.o,"_PENDING"):return e.set("inventoryWarningFetchStatus","pending");case"".concat(f.o,"_FULFILLED"):return h.a.merge(e,{inventoryWarningSummary:t.payload,inventoryWarningFetchStatus:"fulfilled"});case"".concat(f.o,"_REJECTED"):return e.set("inventoryWarningFetchStatus","rejected");case"".concat(f.m,"_PENDING"):return e.set("inventoryTotalFetchStatus","pending");case"".concat(f.m,"_FULFILLED"):return h.a.merge(e,{inventoryTotalSummary:t.payload,inventoryTotalFetchStatus:"fulfilled"});case"".concat(f.m,"_REJECTED"):return e.set("inventoryTotalFetchStatus","rejected");case"".concat(f.z,"_PENDING"):return e.set("remediationsFetchStatus","pending");case"".concat(f.z,"_FULFILLED"):return h.a.merge(e,{remediations:t.payload,remediationsFetchStatus:"fulfilled"});case"".concat(f.z,"_REJECTED"):return e.set("remediationsFetchStatus","rejected");default:return e}},g=n(200),S=n(520),E=n(519),_=n(521),b=document.getElementById("root");l.a.render(s.a.createElement(i.IntlProvider,{locale:navigator.language.slice(0,2),messages:_,onError:console.log},s.a.createElement(o.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(r=Object(S.getRegistry)({},[].concat(n,[E.a]),e)).register({DashboardStore:v}),r}().getStore()},s.a.createElement(d.BrowserRouter,{basename:Object(p.getBaseName)(window.location.pathname)},s.a.createElement(a.b,null)))),b,(function(){return b.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.js.map