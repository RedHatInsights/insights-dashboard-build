!function(t){function e(e){for(var i,r,a=e[0],o=e[1],s=e[2],c=0,u=[];c<a.length;c++)r=a[c],Object.prototype.hasOwnProperty.call(P,r)&&P[r]&&u.push(P[r][0]),P[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);for(U&&U(e);u.length;)u.shift()();return L.push.apply(L,s||[]),n()}function n(){for(var t,e=0;e<L.length;e++){for(var n=L[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==P[a]&&(i=!1)}i&&(L.splice(e--,1),t=N(N.s=n[0]))}return t}var i=window.webpackHotUpdate;window.webpackHotUpdate=function(t,e){!function(t,e){if(!_[t]||!E[t])return;for(var n in E[t]=!1,e)Object.prototype.hasOwnProperty.call(e,n)&&(h[n]=e[n]);0==--g&&0===S&&D()}(t,e),i&&i(t,e)};var r,a=!0,o="87c817dfa887012edd1e",s={},c=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(t,e){if(void 0===t)n._selfAccepted=!0;else if("function"==typeof t)n._selfAccepted=t;else if("object"==typeof t)for(var i=0;i<t.length;i++)n._acceptedDependencies[t[i]]=e||function(){};else n._acceptedDependencies[t]=e||function(){}},decline:function(t){if(void 0===t)n._selfDeclined=!0;else if("object"==typeof t)for(var e=0;e<t.length;e++)n._declinedDependencies[t[e]]=!0;else n._declinedDependencies[t]=!0},dispose:function(t){n._disposeHandlers.push(t)},addDisposeHandler:function(t){n._disposeHandlers.push(t)},removeDisposeHandler:function(t){var e=n._disposeHandlers.indexOf(t);e>=0&&n._disposeHandlers.splice(e,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[e]=t[e],m("ready");break;case"ready":F(e);break;case"prepare":case"check":case"dispose":case"apply":(y=y||[]).push(e)}},check:w,apply:I,status:function(t){if(!t)return p;d.push(t)},addStatusHandler:function(t){d.push(t)},removeStatusHandler:function(t){var e=d.indexOf(t);e>=0&&d.splice(e,1)},data:s[e]};return r=void 0,n}var d=[],p="idle";function m(t){p=t;for(var e=0;e<d.length;e++)d[e].call(null,t)}var f,h,v,y,g=0,S=0,b={},E={},_={};function T(t){return+t+""===t?+t:t}function w(t){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=t,m("check"),(e=1e4,e=e||1e4,new Promise((function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var i=new XMLHttpRequest,r=N.p+""+o+".hot-update.json";i.open("GET",r,!0),i.timeout=e,i.send(null)}catch(t){return n(t)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===i.status)t();else if(200!==i.status&&304!==i.status)n(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(i.responseText)}catch(t){return void n(t)}t(e)}}}))).then((function(t){if(!t)return m(C()?"ready":"idle"),null;E={},b={},_=t.c,v=t.h,m("prepare");var e=new Promise((function(t,e){f={resolve:t,reject:e}}));for(var n in h={},P)x(n);return"prepare"===p&&0===S&&0===g&&D(),e}));var e}function x(t){_[t]?(E[t]=!0,g++,function(t){var e=document.createElement("script");e.charset="utf-8",e.src=N.p+""+t+"."+o+".hot-update.js",document.head.appendChild(e)}(t)):b[t]=!0}function D(){m("ready");var t=f;if(f=null,t)if(a)Promise.resolve().then((function(){return I(a)})).then((function(e){t.resolve(e)}),(function(e){t.reject(e)}));else{var e=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&e.push(T(n));t.resolve(e)}}function I(e){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function e(n){var i,a,u,l,d;function p(t){for(var e=[t],n={},i=e.map((function(t){return{chain:[t],id:t}}));i.length>0;){var r=i.pop(),a=r.id,o=r.chain;if((l=O[a])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:a};for(var s=0;s<l.parents.length;s++){var c=l.parents[s],u=O[c];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:o.concat([c]),moduleId:a,parentId:c};-1===e.indexOf(c)&&(u.hot._acceptedDependencies[a]?(n[c]||(n[c]=[]),f(n[c],[a])):(delete n[c],e.push(c),i.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:t,outdatedModules:e,outdatedDependencies:n}}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];-1===t.indexOf(i)&&t.push(i)}}C();var g={},S=[],b={},E=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var x;d=T(w),x=h[w]?p(d):{type:"disposed",moduleId:w};var D=!1,I=!1,F=!1,L="";switch(x.chain&&(L="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+x.moduleId+L));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+L));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(D=new Error("Aborted because "+d+" is not accepted"+L));break;case"accepted":n.onAccepted&&n.onAccepted(x),I=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),F=!0;break;default:throw new Error("Unexception type "+x.type)}if(D)return m("abort"),Promise.reject(D);if(I)for(d in b[d]=h[d],f(S,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,d)&&(g[d]||(g[d]=[]),f(g[d],x.outdatedDependencies[d]));F&&(f(S,[x.moduleId]),b[d]=E)}var R,G=[];for(a=0;a<S.length;a++)d=S[a],O[d]&&O[d].hot._selfAccepted&&b[d]!==E&&!O[d].hot._selfInvalidated&&G.push({module:d,parents:O[d].parents.slice(),errorHandler:O[d].hot._selfAccepted});m("dispose"),Object.keys(_).forEach((function(t){!1===_[t]&&function(t){delete P[t]}(t)}));var j,U,A=S.slice();for(;A.length>0;)if(d=A.pop(),l=O[d]){var H={},k=l.hot._disposeHandlers;for(u=0;u<k.length;u++)(i=k[u])(H);for(s[d]=H,l.hot.active=!1,delete O[d],delete g[d],u=0;u<l.children.length;u++){var M=O[l.children[u]];M&&((R=M.parents.indexOf(d))>=0&&M.parents.splice(R,1))}}for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=O[d]))for(U=g[d],u=0;u<U.length;u++)j=U[u],(R=l.children.indexOf(j))>=0&&l.children.splice(R,1);m("apply"),void 0!==v&&(o=v,v=void 0);for(d in h=void 0,b)Object.prototype.hasOwnProperty.call(b,d)&&(t[d]=b[d]);var z=null;for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=O[d])){U=g[d];var W=[];for(a=0;a<U.length;a++)if(j=U[a],i=l.hot._acceptedDependencies[j]){if(-1!==W.indexOf(i))continue;W.push(i)}for(a=0;a<W.length;a++){i=W[a];try{i(U)}catch(t){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:U[a],error:t}),n.ignoreErrored||z||(z=t)}}}for(a=0;a<G.length;a++){var B=G[a];d=B.module,c=B.parents,r=d;try{N(d)}catch(t){if("function"==typeof B.errorHandler)try{B.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:e,originalError:t}),n.ignoreErrored||z||(z=e),z||(z=t)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:t}),n.ignoreErrored||z||(z=t)}}if(z)return m("fail"),Promise.reject(z);if(y)return e(n).then((function(t){return S.forEach((function(e){t.indexOf(e)<0&&t.push(e)})),t}));return m("idle"),new Promise((function(t){t(S)}))}(e=e||{})}function C(){if(y)return h||(h={}),y.forEach(F),y=void 0,!0}function F(e){Object.prototype.hasOwnProperty.call(h,e)||(h[e]=t[e])}var O={},P={5:0},L=[];function N(e){if(O[e])return O[e].exports;var n=O[e]={i:e,l:!1,exports:{},hot:l(e),parents:(u=c,c=[],u),children:[]};return t[e].call(n.exports,n,n.exports,function(t){var e=O[t];if(!e)return N;var n=function(n){return e.hot.active?(O[n]?-1===O[n].parents.indexOf(t)&&O[n].parents.push(t):(c=[t],r=n),-1===e.children.indexOf(n)&&e.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+t),c=[]),N(n)},i=function(t){return{configurable:!0,enumerable:!0,get:function(){return N[t]},set:function(e){N[t]=e}}};for(var a in N)Object.prototype.hasOwnProperty.call(N,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,i(a));return n.e=function(t){return"ready"===p&&m("prepare"),S++,N.e(t).then(e,(function(t){throw e(),t}));function e(){S--,"prepare"===p&&(b[t]||x(t),0===S&&0===g&&D())}},n.t=function(t,e){return 1&e&&(t=n(t)),N.t(t,-2&e)},n}(e)),n.l=!0,n.exports}N.e=function(t){var e=[],n=P[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=P[t]=[e,i]}));e.push(n[2]=i);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,N.nc&&a.setAttribute("nonce",N.nc),a.src=function(t){return N.p+"js/"+({6:"Dashboard",9:"vendors~Dashboard"}[t]||t)+"."+o+".js"}(t);var s=new Error;r=function(e){a.onerror=a.onload=null,clearTimeout(c);var n=P[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,n[1](s)}P[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(e)},N.m=t,N.c=O,N.d=function(t,e,n){N.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},N.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},N.t=function(t,e){if(1&e&&(t=N(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(N.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)N.d(n,i,function(e){return t[e]}.bind(null,i));return n},N.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return N.d(e,"a",e),e},N.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},N.p="/beta/apps/dashboard/",N.oe=function(t){throw console.error(t),t},N.h=function(){return o};var R=window.webpackJsonp=window.webpackJsonp||[],G=R.push.bind(R);R.push=e,R=R.slice();for(var j=0;j<R.length;j++)e(R[j]);var U=G;L.push([694,0,1,7,8]),n()}({112:function(t,e,n){var i=n(7),r=n(506);(e=i(!1)).i(r),e.push([t.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.ins-m-green{color:var(--pf-global--palette--green-400)}.ins-m-red{color:var(--pf-global--palette--red-100)}.pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;max-width:var(--ins-c-width-limiter--MaxWidth)}@media (min-width: 576px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}.ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(\n        auto-fit,\n        minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr)\n    );--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}\n",""]),t.exports=e},113:function(t,e,n){(e=n(7)(!1)).push([t.i,".pf-c-spinner{display:block;margin-left:auto;margin-right:auto}\n",""]),t.exports=e},297:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return f})),n.d(e,"n",(function(){return h})),n.d(e,"m",(function(){return v})),n.d(e,"k",(function(){return y})),n.d(e,"l",(function(){return g})),n.d(e,"r",(function(){return S})),n.d(e,"s",(function(){return b})),n.d(e,"f",(function(){return E})),n.d(e,"g",(function(){return _})),n.d(e,"e",(function(){return T})),n.d(e,"h",(function(){return w})),n.d(e,"i",(function(){return x})),n.d(e,"p",(function(){return D})),n.d(e,"q",(function(){return I})),n.d(e,"o",(function(){return C}));var i=n(200),r=n.n(i),a=n(250),o=n.n(a),s=n(6),c=n(299),u=function(){var t=o()(r.a.mark((function t(e,n,i){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.insights.chrome.auth.getUser();case 2:return t.next=4,c.a.get(e,n,i);case 4:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}(),l=function(t){return{type:s.g,payload:u(s.h,{},t)}},d=function(t){return{type:s.L,payload:u(s.M,{},t)}},p=function(t){return{type:s.c,payload:u(s.d,{},t)}},m=function(t){return{type:s.e,payload:u(s.f,{},t)}},f=function(t){return{type:s.a,payload:u(s.b,{},t)}},h=function(t){return{type:s.x,payload:u(s.y,{},t)}},v=function(t){return{type:s.v,payload:u(s.w,{},t)}},y=function(t){return{type:s.q,payload:u(s.r,{},t)}},g=function(t){return{type:s.s,payload:u(s.t,{},t)}},S=function(t,e){return{type:s.G,payload:Promise.all([u("".concat(s.I).concat(t),{},e),u("".concat(s.F).concat(t),{},e)])}},b=function(t,e){return{type:s.H,payload:Promise.all([u("".concat(s.I).concat(t),{},e),u("".concat(s.F).concat(t),{},e)])}},E=function(t){return{type:s.i,payload:u(s.j,{},t)}},_=function(t){return{type:s.m,payload:u(s.n,{},t)}},T=function(t){return{type:s.k,payload:u(s.l,{},t)}},w=function(t){return{type:s.o,payload:u(s.p,{},t)}},x=function(t){return{type:s.z,payload:u(s.A,{},t)}},D=function(t){return{type:s.D,payload:t}},I=function(t){return{type:s.N,payload:t}},C=function(t){return{type:s.E,payload:t}}},299:function(t,e,n){"use strict";var i=n(466),r=n.n(i),a=n(292),o=n.n(a);o.a.defaults.headers.common={"x-rh-insights-use-path-prefix":1},e.a={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.get(t,{headers:e,params:n,paramsSerializer:function(t){return r.a.stringify(t,{arrayFormat:"repeat"})}})},put:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.put(t,e,{headers:n})},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.post(t,e,{headers:n})}}},462:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var i=n(200),r=n.n(i),a=n(250),o=n.n(a),s=n(246),c=n.n(s),u=(n(521),n(1)),l=n.n(u),d=n(210),p=n(297),m=n(299),f=n(6),h=(n(548),n(421)),v=n(422),y=n(423),g=n(376),S=function(){return l.a.createElement(h.a,null,l.a.createElement(v.a,{variant:"container",component:g.Spinner}),l.a.createElement(y.a,{size:"lg",headingLevel:"h4"},"Loading"))},b=n(18),E=n.n(b),_=n(394),T=n.n(_),w=n(393),x=n.n(w),D=n(47),I=n(467),C=n.n(I),F=n(468),O=n.n(F),P=n(469),L=n.n(P),N=n(470),R=n.n(N),G=n(384),j=n.n(G);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=j()(t);if(e){var r=j()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return R()(this,n)}}var A,H=(A=function(){return Promise.all([n.e(0),n.e(1),n.e(9),n.e(6)]).then(n.bind(null,1181))},function(t){L()(i,t);var e,n=U(i);function i(t){var e;return C()(this,i),(e=n.call(this,t)).state={component:null},e}return O()(i,[{key:"componentDidMount",value:(e=o()(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:e=t.sent,n=e.default,this.setState({component:n});case 5:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this.state.component;return t?l.a.createElement(t,this.props):l.a.createElement(S,null)}}]),i}(u.Component)),k=function(t){var e=t.component,n=t.rootClass,i=x()(t,["component","rootClass"]),r=document.getElementById("root");return r.removeAttribute("class"),r.classList.add("page__".concat(n),"pf-c-page__main"),r.setAttribute("role","main"),l.a.createElement(D.d,T()({},i,{component:e}))};k.propTypes={component:E.a.func,rootClass:E.a.string};var M=function(){return l.a.createElement(D.g,null,l.a.createElement(k,{exact:!0,path:"/",component:H,rootClass:"dashboard"}))},z=Object(u.createContext)(),W=function(t){var e=Object(d.useDispatch)(),n=Object(u.useState)({customPolicies:!1,compliance:!1,drift:!1,advisor:!1,remediations:!1,patch:!1,vulnerability:!1,subscriptions:!1}),i=c()(n,2),a=i[0],s=i[1],h=Object(u.useState)(!1),v=c()(h,2),y=v[0],g=v[1],b=Object(u.useState)(!1),E=c()(b,2),_=E[0],T=E[1],w=Object(u.useState)(),x=c()(w,2),D=x[0],I=x[1];function C(){return(C=o()(r.a.mark((function t(){var n,i,a,o,u,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return insights.chrome.init(),insights.chrome.identifyApp("dashboard"),null===(n=insights.chrome)||void 0===n||null===(i=n.globalFilterScope)||void 0===i||i.call(n,"insights"),(null===(a=insights.chrome)||void 0===a?void 0:a.globalFilterScope)&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(t){var n,i,r=t.data,a=null===(n=insights.chrome)||void 0===n||null===(i=n.mapGlobalFilter)||void 0===i?void 0:i.call(n,r,!1,!0),o=c()(a,3),s=o[0],u=o[1],l=o[2];Object(d.batch)((function(){e(Object(p.q)(s)),e(Object(p.o)(u)),e(Object(p.p)(l))}))})),t.next=6,window.insights.chrome.auth.getUser().then((function(t){return g(t.identity.user.is_org_admin)}));case 6:return insights.chrome.getUserPermissions().then((function(t){var e=t.length&&t.map((function(t){return t.permission}));e.length&&s({customPolicies:e.includes("custom-policies:*:*"),compliance:e.includes("compliance:*:*"),drift:e.includes("drift:*:*"),advisor:e.includes("insights:*:*")||"advisor:*:*",remediations:e.includes("remediations:*:*")||e.includes("remediations:remediation:*")||e.includes("remediations:remediation:read")||e.includes("remediations:*:read"),patch:e.includes("patch:*:*"),vulnerability:e.includes("vulnerability:*:*"),subscriptions:e.includes("subscriptions:*:*")}),T(!0)})),t.prev=7,t.next=10,m.a.get("".concat(f.n));case 10:if(t.t2=o=t.sent,t.t1=null===t.t2,t.t1){t.next=14;break}t.t1=void 0===o;case 14:if(!t.t1){t.next=18;break}t.t3=void 0,t.next=19;break;case 18:t.t3=o.data;case 19:if(t.t0=t.t3,t.t0){t.next=22;break}t.t0={total:0};case 22:u=t.t0,l=u.total,I(l>0),0===l&&insights.chrome.hideGlobalFilter(),t.next=31;break;case 28:t.prev=28,t.t4=t.catch(7),insights.chrome.hideGlobalFilter();case 31:case"end":return t.stop()}}),t,null,[[7,28]])})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){C.apply(this,arguments)}()}),[]),_?l.a.createElement(z.Provider,{value:{customPolicies:a.customPolicies,compliance:a.compliance,drift:a.drift,advisor:a.advisor,remediations:a.remediations,patch:a.patch,vulnerability:a.vulnerability,subscriptions:a.subscriptions,isOrgAdmin:y,hasSystems:D}},l.a.createElement(M,{childProps:t})):l.a.createElement(S,null)};W.propTypes={history:E.a.object};e.b=W},475:function(t){t.exports=JSON.parse('{"en":{"dashboardTitle":"Dashboard","subscriptionsUtilizedTitle":"Subscription Watch utilization summary","subscriptionsUtilizedLearnMore":"Activate Subscription Watch to monitor your subscription utilization.","subscriptionsUtilizedLearnMoreAction":"Learn about Subscription Watch","subscriptionsUtilizedNoProductData":"No data available","subscriptionsUtilizedProductOneTitle":"Red Hat OpenShift","subscriptionsUtilizedProductOneDesc":"OpenShift cores: {totalReport}","subscriptionsUtilizedProductTwoTitle":"Red Hat Enterprise Linux","subscriptionsUtilizedProductTwoTitleDesc":"RHEL sockets: {totalReport}","subscriptionsUtilizedProductCapacity":"Subscription threshold: {totalCapacity}","subscriptionsUtilizedProductDate":"Data from: {formattedDate}","recsImpactingSystems":"{totalRecs, plural, one {# Recommendation} other {# Recommendations}}  impacting {systems, plural, one {# system} other {# systems}}","incidentsDetected":"{incidents, plural, one {Incident} other {Incidents}} detected","critical":"Critical","important":"important","moderate":"moderate","low":"low","compliantHostCount":"{count, plural, one {# system} other {# systems}}","compliantScore":"{score}% passes","vulnerabilitiesTitle":"Vulnerability","vulnerabilitiesTotalItems":"{total}","lastxdays":"Last {days} days","cvesImpactingSystems":"{cves, plural, one {CVE} other {CVEs}} impacting your systems","vulnerabilityLearnMore":"Learn about CVSS Scores","latestVulnerabilitiesTotal":"{totalLatest}","deniedStateTitle":"You do not have access to {appName}","deniedStateBody":"Contact your organization administrator(s) for more information","complianceEmptyStateTitle":"No policies","complianceEmptyStateBody":"The compliance service uses OpenSCAP policies to track your organization\'s adherence to compliance requirements","complianceEmptyStateAction1":"Create a policy","complianceEmptyStateAction2":"Learn about OpenSCAP","securityAdvisories":"{count, plural, one {security advisory} other {security advisories}}","bugfixAdvisories":"{count, plural, one {bug fix} other {bug fixes}}","enhancementAdvisories":"{count, plural, one {enhancement} other {enhancements}}","systemsAffected":"{count, plural, one {# system} other {# systems}} affected","patchTitle":"Patch","systemInventoryDescription":"{count, plural, one {System} other {Systems}} running insights-client","systemInventoryStaleWarning":"{count, plural, one {# system} other {# systems}} to be removed","systemInventoryStale":"{count, plural, one {# stale system} other {# stale systems}}","systemInventoryPercentageData":"{count}% of total systems","systemInventoryTitle":"Insights system inventory","systemInventoryNotUsingClient":"{count, plural, one {# additional system} other {# additional systems}} not running insights-client        are not taking advantage of Red Hat Insights capabilities.","remediationsTotal":"{total} more remediations","remediationsPlaybookStatus":"{status}","remediationsPlaybookNoActivity":"No activity","remediationsNoActivity":"Failure","remediationsNoDataTitle":"You haven\'t created any remediation playbooks yet","remediationsNoDataBody":"Create an Ansible Playbook to remediate or mitigate vulnerabilities or configuration issues.","errorStateTitle":"{appName} has experienced an error. Contact Red Hat support if the problem persists.","noSystemsTitle":"Get started with Red Hat Insights","noSystemsDescription":"With predictive analytics, avoid problems and unplanned                        downtime in your Red Hat environment. Red Hat Insights is                        included with your Red Hat Enterprise Linux subscription.","noSystemsInstall":"Install the client on the RHEL system","noSystemsRegister":"Register the system to Red Hat Insights","noSystemsLink":"Getting started documentation","advisorChartDescription":"This chart shows recommendations effecting your system","registerYourSystems":"Register your systems"}}')},521:function(t,e,n){"use strict";var i=n(4),r=n.n(i),a=n(112),o=n.n(a),s={insert:"head",singleton:!1},c=r()(o.a,s);if(!o.a.locals||t.hot.invalidate){var u=o.a.locals;t.hot.accept(112,function(e){a=n(112),function(t,e,n){if(!t&&e||t&&!e)return!1;var i;for(i in t)if((!n||"default"!==i)&&t[i]!==e[i])return!1;for(i in e)if(!(n&&"default"===i||t[i]))return!1;return!0}(u,(o=n.n(a)).a.locals,void 0)?(u=o.a.locals,c(o.a)):t.hot.invalidate()}.bind(this))}t.hot.dispose((function(){c()}));o.a.locals},548:function(t,e,n){"use strict";var i=n(4),r=n.n(i),a=n(113),o=n.n(a),s={insert:"head",singleton:!1},c=r()(o.a,s);if(!o.a.locals||t.hot.invalidate){var u=o.a.locals;t.hot.accept(113,function(e){a=n(113),function(t,e,n){if(!t&&e||t&&!e)return!1;var i;for(i in t)if((!n||"default"!==i)&&t[i]!==e[i])return!1;for(i in e)if(!(n&&"default"===i||t[i]))return!1;return!0}(u,(o=n.n(a)).a.locals,void 0)?(u=o.a.locals,c(o.a)):t.hot.invalidate()}.bind(this))}t.hot.dispose((function(){c()}));o.a.locals},6:function(t,e,n){"use strict";n.d(e,"J",(function(){return r})),n.d(e,"D",(function(){return a})),n.d(e,"N",(function(){return o})),n.d(e,"E",(function(){return s})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"L",(function(){return l})),n.d(e,"M",(function(){return d})),n.d(e,"K",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"e",(function(){return v})),n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return g})),n.d(e,"u",(function(){return S})),n.d(e,"y",(function(){return b})),n.d(e,"x",(function(){return E})),n.d(e,"w",(function(){return _})),n.d(e,"v",(function(){return T})),n.d(e,"r",(function(){return w})),n.d(e,"q",(function(){return x})),n.d(e,"t",(function(){return D})),n.d(e,"s",(function(){return I})),n.d(e,"G",(function(){return C})),n.d(e,"H",(function(){return F})),n.d(e,"I",(function(){return O})),n.d(e,"F",(function(){return P})),n.d(e,"m",(function(){return L})),n.d(e,"n",(function(){return N})),n.d(e,"i",(function(){return R})),n.d(e,"j",(function(){return G})),n.d(e,"k",(function(){return j})),n.d(e,"l",(function(){return U})),n.d(e,"o",(function(){return A})),n.d(e,"p",(function(){return H})),n.d(e,"z",(function(){return k})),n.d(e,"A",(function(){return M})),n.d(e,"B",(function(){return z})),n.d(e,"C",(function(){return W}));var i=n(465),r="./insights",a="SELECTED_TAGS_SET",o="WORKLOADS_SET",s="SID_SET",c="COMPLIANCE_SUMMARY_FETCH",u="".concat("/api","/compliance/profiles?search=has_test_results=true"),l="VULNERABILITIES_FETCH",d=i("".concat("/api").concat("/vulnerability/v1/report/executive")),p="".concat("/api","/vulnerability/v1/vulnerabilities/cves"),m="".concat("/api").concat("/insights/v1","/stats/rules/"),f="ADVISOR_STATS_REC_FETCH",h="".concat("/api").concat("/insights/v1","/stats/systems/"),v="ADVISOR_STATS_SYSTEMS_FETCH",y="ADVISOR_INCIDENTS_FETCH",g="".concat("/api","/insights/v1/rule/?impacting=true&limit=1&incident=true"),S="patch",b="".concat("/api","/").concat(S,"/").concat("v1","/systems"),E="PATCHMAN_SYSTEMS_FETCH",_="".concat("/api","/").concat(S,"/").concat("v1","/advisories?filter[advisory_type]=3&limit=1"),T="PATCHMAN_SECURITY_FETCH",w="".concat("/api","/").concat(S,"/").concat("v1","/advisories?filter[advisory_type]=2&limit=1"),x="PATCHMAN_BUGS_FETCH",D="".concat("/api","/").concat(S,"/").concat("v1","/advisories/?filter[advisory_type]=1&limit=1"),I="PATCHMAN_ENHANCEMENTS_FETCH",C="SUBSCRIPTIONS_UTILIZED_PRODUCT_ONE_FETCH",F="SUBSCRIPTIONS_UTILIZED_PRODUCT_TWO_FETCH",O="".concat("/api","/rhsm-subscriptions/v1/tally/products/"),P="".concat("/api","/rhsm-subscriptions/v1/capacity/products/"),L="INVENTORY_TOTAL_FETCH",N="".concat("/api").concat("/inventory/v1","/hosts?").concat("per_page=1"),R="INVENTORY_FETCH",G="".concat("/api").concat("/inventory/v1","/hosts?registered_with=insights&").concat("per_page=1"),j="INVENTORY_STALE_FETCH",U="".concat("/api").concat("/inventory/v1","/hosts?staleness=stale&registered_with=insights&").concat("per_page=1"),A="INVENTORY_WARNING_FETCH",H="".concat("/api").concat("/inventory/v1","/hosts?staleness=stale_warning&registered_with=insights&").concat("per_page=1"),k="REMEDIATIONS_FETCH",M="".concat("/api").concat("/remediations/v1","/remediations?sort=-updated_at&limit=4&offset=0"),z="".concat("/api").concat("/remediations/v1","/remediations/"),W="".concat("/api","/inventory/v1/system_profile/sap_system")},694:function(t,e,n){"use strict";n.r(e);var i,r=n(462),a=n(471),o=n(210),s=n(1),c=n.n(s),u=n(37),l=n.n(u),d=n(283),p=n(425),m=n(6),f=n(45),h=n.n(f),v=h()({complianceSummary:{},complianceFetchStatus:"",vulnerabilities:{},vulnerabilitiesFetchStatus:"",advisorStatsRecs:{},advisorStatsRecsStatus:"",advisorStatsSystems:{},advisorStatsSystemsStatus:"",advisorIncidents:{},advisorIncidentsStatus:"",patchmanSystems:{},patchmanSystemsStatus:"",patchmanSecurity:{},patchmanSecurityStatus:"",patchmanBugs:{},patchmanBugsStatus:"",patchmanEnhancements:{},patchmanEnhancementsStatus:"",subscriptionsUtilizedProductOne:[],subscriptionsUtilizedProductOneFetchStatus:"",subscriptionsUtilizedProductTwo:[],subscriptionsUtilizedProductTwoFetchStatus:"",inventorySummary:{},inventoryFetchStatus:"",inventoryStaleSummary:{},inventoryStaleFetchStatus:"",inventoryWarningSummary:{},inventoryWarningFetchStatus:"",inventoryTotalSummary:{},inventoryTotalFetchStatus:"",remediations:{},remediationsFetchStatus:"",selectedTags:[],workloads:{},SID:{}}),y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.D:return h.a.merge(t,{selectedTags:e.payload});case m.N:return h.a.merge(t,{workloads:e.payload});case m.E:return h.a.merge(t,{SID:e.payload});case"".concat(m.g,"_PENDING"):return t.set("complianceFetchStatus","pending");case"".concat(m.g,"_FULFILLED"):return h.a.merge(t,{complianceSummary:e.payload,complianceFetchStatus:"fulfilled"});case"".concat(m.g,"_REJECTED"):return t.set("complianceFetchStatus","rejected");case"".concat(m.L,"_PENDING"):return t.set("vulnerabilitiesFetchStatus","pending");case"".concat(m.L,"_FULFILLED"):return h.a.merge(t,{vulnerabilities:e.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(m.L,"_REJECTED"):return t.set("vulnerabilitiesFetchStatus","rejected");case"".concat(m.c,"_PENDING"):return t.set("advisorStatsRecsStatus","pending");case"".concat(m.c,"_FULFILLED"):return h.a.merge(t,{advisorStatsRecs:e.payload,advisorStatsRecsStatus:"fulfilled"});case"".concat(m.c,"_REJECTED"):return t.set("advisorStatsRecsStatus","rejected");case"".concat(m.e,"_PENDING"):return t.set("advisorStatsSystemsStatus","pending");case"".concat(m.e,"_FULFILLED"):return h.a.merge(t,{advisorStatsSystems:e.payload,advisorStatsSystemsStatus:"fulfilled"});case"".concat(m.e,"_REJECTED"):return t.set("advisorStatsSystemsStatus","rejected");case"".concat(m.a,"_PENDING"):return t.set("advisorIncidentsStatus","pending");case"".concat(m.a,"_FULFILLED"):return h.a.merge(t,{advisorIncidents:e.payload,advisorIncidentsStatus:"fulfilled"});case"".concat(m.a,"_REJECTED"):return t.set("advisorIncidentsStatus","rejected");case"".concat(m.x,"_PENDING"):return t.set("patchmanSystemsStatus","pending");case"".concat(m.x,"_FULFILLED"):return h.a.merge(t,{patchmanSystems:e.payload.meta.total_items,patchmanSystemsStatus:"fulfilled"});case"".concat(m.x,"_REJECTED"):return t.set("patchmanSystemsStatus","rejected");case"".concat(m.v,"_PENDING"):return t.set("patchmanSecurityStatus","pending");case"".concat(m.v,"_FULFILLED"):return h.a.merge(t,{patchmanSecurity:e.payload.meta.total_items,patchmanSecurityStatus:"fulfilled"});case"".concat(m.v,"_REJECTED"):return t.set("patchmanBugsStatus","rejected");case"".concat(m.q,"_PENDING"):return t.set("patchmanBugsStatus","pending");case"".concat(m.q,"_FULFILLED"):return h.a.merge(t,{patchmanBugs:e.payload.meta.total_items,patchmanBugsStatus:"fulfilled"});case"".concat(m.q,"_REJECTED"):return t.set("patchmanBugsStatus","rejected");case"".concat(m.s,"_PENDING"):return t.set("patchmanEnhancementsStatus","pending");case"".concat(m.s,"_FULFILLED"):return h.a.merge(t,{patchmanEnhancements:e.payload.meta.total_items,patchmanEnhancementsStatus:"fulfilled"});case"".concat(m.s,"_REJECTED"):return t.set("patchmanEnhancementsStatus","rejected");case"".concat(m.G,"_PENDING"):return t.set("subscriptionsUtilizedProductOneFetchStatus","pending");case"".concat(m.G,"_FULFILLED"):return h.a.merge(t,{subscriptionsUtilizedProductOne:e.payload,subscriptionsUtilizedProductOneFetchStatus:"fulfilled"});case"".concat(m.G,"_REJECTED"):return h.a.merge(t,{subscriptionsUtilizedProductOne:e.payload.response,subscriptionsUtilizedProductOneFetchStatus:"rejected"});case"".concat(m.H,"_PENDING"):return t.set("subscriptionsUtilizedProductTwoFetchStatus","pending");case"".concat(m.H,"_FULFILLED"):return h.a.merge(t,{subscriptionsUtilizedProductTwo:e.payload,subscriptionsUtilizedProductTwoFetchStatus:"fulfilled"});case"".concat(m.H,"_REJECTED"):return h.a.merge(t,{subscriptionsUtilizedProductTwo:e.payload.response,subscriptionsUtilizedProductTwoFetchStatus:"rejected"});case"".concat(m.i,"_PENDING"):return t.set("inventoryFetchStatus","pending");case"".concat(m.i,"_FULFILLED"):return h.a.merge(t,{inventorySummary:e.payload,inventoryFetchStatus:"fulfilled"});case"".concat(m.i,"_REJECTED"):return t.set("inventoryFetchStatus","rejected");case"".concat(m.k,"_PENDING"):return t.set("inventoryStaleFetchStatus","pending");case"".concat(m.k,"_FULFILLED"):return h.a.merge(t,{inventoryStaleSummary:e.payload,inventoryStaleFetchStatus:"fulfilled"});case"".concat(m.k,"_REJECTED"):return t.set("inventoryStaleFetchStatus","rejected");case"".concat(m.o,"_PENDING"):return t.set("inventoryWarningFetchStatus","pending");case"".concat(m.o,"_FULFILLED"):return h.a.merge(t,{inventoryWarningSummary:e.payload,inventoryWarningFetchStatus:"fulfilled"});case"".concat(m.o,"_REJECTED"):return t.set("inventoryWarningFetchStatus","rejected");case"".concat(m.m,"_PENDING"):return t.set("inventoryTotalFetchStatus","pending");case"".concat(m.m,"_FULFILLED"):return h.a.merge(t,{inventoryTotalSummary:e.payload,inventoryTotalFetchStatus:"fulfilled"});case"".concat(m.m,"_REJECTED"):return t.set("inventoryTotalFetchStatus","rejected");case"".concat(m.z,"_PENDING"):return t.set("remediationsFetchStatus","pending");case"".concat(m.z,"_FULFILLED"):return h.a.merge(t,{remediations:e.payload,remediationsFetchStatus:"fulfilled"});case"".concat(m.z,"_REJECTED"):return t.set("remediationsFetchStatus","rejected");default:return t}},g=n(285),S=n(474),b=n(473),E=n(475),_=document.getElementById("root");l.a.render(c.a.createElement(a.IntlProvider,{locale:navigator.language.slice(0,2),messages:E,onError:console.log},c.a.createElement(o.Provider,{store:function(){for(var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.compose,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(i=Object(S.getRegistry)({},[].concat(n,[b.a]),t)).register({DashboardStore:y}),i}().getStore()},c.a.createElement(d.BrowserRouter,{basename:Object(p.getBaseName)(window.location.pathname)},c.a.createElement(r.b,null)))),_,(function(){return _.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.87c817dfa887012edd1e.js.map