!function(e){function t(t){for(var r,a,o=t[0],s=t[1],i=t[2],c=0,l=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(I,a)&&I[a]&&l.push(I[a][0]),I[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(z&&z(t);l.length;)l.shift()();return x.push.apply(x,i||[]),n()}function n(){for(var e,t=0;t<x.length;t++){for(var n=x[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==I[o]&&(r=!1)}r&&(x.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--v&&0===y&&D()}(e,t),r&&r(e,t)};var a,o=!0,s="a4443ca8dee400b09044",i={},c=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:k,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:i[e]};return a=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,m,j,v=0,y=0,g={},b={},_={};function E(e){return+e+""===e?+e:e}function w(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=P.p+""+s+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;b={},g={},_=e.c,j=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in m={},I)O(n);return"prepare"===p&&0===y&&0===v&&D(),t}));var t}function O(e){_[e]?(b[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+s+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then((function(){return k(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(E(n));e.resolve(t)}}function k(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),s=a.id,i=a.chain;if((o=S[s])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(o.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=S[l];if(u){if(u.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([l]),moduleId:s,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[s]?(n[l]||(n[l]=[]),d(n[l],[s])):(delete n[l],t.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},v=[],y={},g=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){var w;l=E(b);var O=!1,D=!1,k=!1,x="";switch((w=m[b]?u(l):{type:"disposed",moduleId:b}).chain&&(x="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+w.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(O=new Error("Aborted because "+l+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(w),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),k=!0;break;default:throw new Error("Unexception type "+w.type)}if(O)return f("abort"),Promise.reject(O);if(D)for(l in y[l]=m[l],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,l)&&(h[l]||(h[l]=[]),d(h[l],w.outdatedDependencies[l]));k&&(d(v,[w.moduleId]),y[l]=g)}var F,L=[];for(r=0;r<v.length;r++)l=v[r],S[l]&&S[l].hot._selfAccepted&&y[l]!==g&&L.push({module:l,errorHandler:S[l].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete I[e]}(e)}));for(var T,z,A=v.slice();A.length>0;)if(l=A.pop(),o=S[l]){var H={},M=o.hot._disposeHandlers;for(a=0;a<M.length;a++)(n=M[a])(H);for(i[l]=H,o.hot.active=!1,delete S[l],delete h[l],a=0;a<o.children.length;a++){var C=S[o.children[a]];C&&((F=C.parents.indexOf(l))>=0&&C.parents.splice(F,1))}}for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(o=S[l]))for(z=h[l],a=0;a<z.length;a++)T=z[a],(F=o.children.indexOf(T))>=0&&o.children.splice(F,1);for(l in f("apply"),s=j,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var N=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(o=S[l])){z=h[l];var U=[];for(r=0;r<z.length;r++)if(T=z[r],n=o.hot._acceptedDependencies[T]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(z)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:z[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<L.length;r++){var R=L[r];l=R.module,c=[l];try{P(l)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||N||(N=e)}}return N?(f("fail"),Promise.reject(N)):(f("idle"),new Promise((function(e){e(v)})))}var S={},I={1:0},x=[];function P(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return P;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var o in P)Object.prototype.hasOwnProperty.call(P,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),y++,P.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===p&&(g[e]||O(e),0===y&&0===v&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.e=function(e){var t=[],n=I[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=I[e]=[t,r]}));t.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,P.nc&&o.setAttribute("nonce",P.nc),o.src=function(e){return P.p+"js/"+({2:"Dashboard"}[e]||e)+".js"}(e);var s=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(i);var n=I[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}I[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},P.m=e,P.c=S,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/beta/apps/dashboard/",P.oe=function(e){throw console.error(e),e},P.h=function(){return s};var F=window.webpackJsonp=window.webpackJsonp||[],L=F.push.bind(F);F.push=t,F=F.slice();for(var T=0;T<F.length;T++)t(F[T]);var z=L;x.push([529,3]),n()}({123:function(e,t,n){var r=n(6),a=n(390);(t=r(!1)).i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:#8a8d90}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:#c9190b}.ins-c-summary__icon-high{fill:#ec7a08}.ins-c-summary__icon-medium{fill:#f4c145}.ins-c-summary__icon-low{fill:#2b9af3}.ins-c-summary__icon-flag{fill:#004080}.ins-c-summary__icon-check{fill:#6ec664}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-summary .ins-m-green{color:#5ba352}.ins-c-summary .ins-m-red{color:#c9190b}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}\n",""]),e.exports=t},381:function(e){e.exports=JSON.parse('{"en":{"dashboardTitle":"Overview"}}')},389:function(e,t,n){var r=n(8),a=n(123);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},s=r(a,o),i=a.locals?a.locals:{};a.locals||e.hot.accept(123,(function(){var t=n(123);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),s(t)})),e.hot.dispose((function(){s()})),e.exports=i},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return h})),n.d(t,"i",(function(){return m}));var r=n(4),a=n.n(r),o=n(119),s="COMPLIANCE_SUMMARY_FETCH",i="CRITICAL_VULNERABILITIES_FETCH",c="LATEST_VULNERABILITIES_FETCH",l="VULNERABILITIES_FETCH",u="./rhel",d="/vulnerability/v1/vulnerabilities/cves",p="".concat("/api","/compliance/profiles"),f=o("".concat("/api").concat(d)).addSearch("cvss_from",8).toString(),h=o("".concat("/api").concat(d)).addSearch("show_all","true").addSearch("public_from",a()().subtract(7,"days").format("YYYY-MM-DD")).toString(),m=o("".concat("/api").concat(d)).addSearch("page_size",1).toString()},469:function(e,t,n){var r={"./af":221,"./af.js":221,"./ar":222,"./ar-dz":223,"./ar-dz.js":223,"./ar-kw":224,"./ar-kw.js":224,"./ar-ly":225,"./ar-ly.js":225,"./ar-ma":226,"./ar-ma.js":226,"./ar-sa":227,"./ar-sa.js":227,"./ar-tn":228,"./ar-tn.js":228,"./ar.js":222,"./az":229,"./az.js":229,"./be":230,"./be.js":230,"./bg":231,"./bg.js":231,"./bm":232,"./bm.js":232,"./bn":233,"./bn.js":233,"./bo":234,"./bo.js":234,"./br":235,"./br.js":235,"./bs":236,"./bs.js":236,"./ca":237,"./ca.js":237,"./cs":238,"./cs.js":238,"./cv":239,"./cv.js":239,"./cy":240,"./cy.js":240,"./da":241,"./da.js":241,"./de":242,"./de-at":243,"./de-at.js":243,"./de-ch":244,"./de-ch.js":244,"./de.js":242,"./dv":245,"./dv.js":245,"./el":246,"./el.js":246,"./en-SG":247,"./en-SG.js":247,"./en-au":248,"./en-au.js":248,"./en-ca":249,"./en-ca.js":249,"./en-gb":250,"./en-gb.js":250,"./en-ie":251,"./en-ie.js":251,"./en-il":252,"./en-il.js":252,"./en-nz":253,"./en-nz.js":253,"./eo":254,"./eo.js":254,"./es":255,"./es-do":256,"./es-do.js":256,"./es-us":257,"./es-us.js":257,"./es.js":255,"./et":258,"./et.js":258,"./eu":259,"./eu.js":259,"./fa":260,"./fa.js":260,"./fi":261,"./fi.js":261,"./fo":262,"./fo.js":262,"./fr":263,"./fr-ca":264,"./fr-ca.js":264,"./fr-ch":265,"./fr-ch.js":265,"./fr.js":263,"./fy":266,"./fy.js":266,"./ga":267,"./ga.js":267,"./gd":268,"./gd.js":268,"./gl":269,"./gl.js":269,"./gom-latn":270,"./gom-latn.js":270,"./gu":271,"./gu.js":271,"./he":272,"./he.js":272,"./hi":273,"./hi.js":273,"./hr":274,"./hr.js":274,"./hu":275,"./hu.js":275,"./hy-am":276,"./hy-am.js":276,"./id":277,"./id.js":277,"./is":278,"./is.js":278,"./it":279,"./it-ch":280,"./it-ch.js":280,"./it.js":279,"./ja":281,"./ja.js":281,"./jv":282,"./jv.js":282,"./ka":283,"./ka.js":283,"./kk":284,"./kk.js":284,"./km":285,"./km.js":285,"./kn":286,"./kn.js":286,"./ko":287,"./ko.js":287,"./ku":288,"./ku.js":288,"./ky":289,"./ky.js":289,"./lb":290,"./lb.js":290,"./lo":291,"./lo.js":291,"./lt":292,"./lt.js":292,"./lv":293,"./lv.js":293,"./me":294,"./me.js":294,"./mi":295,"./mi.js":295,"./mk":296,"./mk.js":296,"./ml":297,"./ml.js":297,"./mn":298,"./mn.js":298,"./mr":299,"./mr.js":299,"./ms":300,"./ms-my":301,"./ms-my.js":301,"./ms.js":300,"./mt":302,"./mt.js":302,"./my":303,"./my.js":303,"./nb":304,"./nb.js":304,"./ne":305,"./ne.js":305,"./nl":306,"./nl-be":307,"./nl-be.js":307,"./nl.js":306,"./nn":308,"./nn.js":308,"./pa-in":309,"./pa-in.js":309,"./pl":310,"./pl.js":310,"./pt":311,"./pt-br":312,"./pt-br.js":312,"./pt.js":311,"./ro":313,"./ro.js":313,"./ru":314,"./ru.js":314,"./sd":315,"./sd.js":315,"./se":316,"./se.js":316,"./si":317,"./si.js":317,"./sk":318,"./sk.js":318,"./sl":319,"./sl.js":319,"./sq":320,"./sq.js":320,"./sr":321,"./sr-cyrl":322,"./sr-cyrl.js":322,"./sr.js":321,"./ss":323,"./ss.js":323,"./sv":324,"./sv.js":324,"./sw":325,"./sw.js":325,"./ta":326,"./ta.js":326,"./te":327,"./te.js":327,"./tet":328,"./tet.js":328,"./tg":329,"./tg.js":329,"./th":330,"./th.js":330,"./tl-ph":331,"./tl-ph.js":331,"./tlh":332,"./tlh.js":332,"./tr":333,"./tr.js":333,"./tzl":334,"./tzl.js":334,"./tzm":335,"./tzm-latn":336,"./tzm-latn.js":336,"./tzm.js":335,"./ug-cn":337,"./ug-cn.js":337,"./uk":338,"./uk.js":338,"./ur":339,"./ur.js":339,"./uz":340,"./uz-latn":341,"./uz-latn.js":341,"./uz.js":340,"./vi":342,"./vi.js":342,"./x-pseudo":343,"./x-pseudo.js":343,"./yo":344,"./yo.js":344,"./zh-cn":345,"./zh-cn.js":345,"./zh-hk":346,"./zh-hk.js":346,"./zh-tw":347,"./zh-tw.js":347};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=469},529:function(e,t,n){"use strict";n.r(t);n(389);var r=n(2),a=n.n(r),o=n(1),s=n.n(o),i=n(207),c=n.n(i),l=n(370),u=n.n(l),d=n(70),p=n(124),f=n.n(p),h=n(208),m=n.n(h),j=n(201),v=n.n(j),y=n(202),g=n.n(y),b=n(203),_=n.n(b),E=n(204),w=n.n(E),O=n(205),D=n.n(O);var k,S=(k=function(){return n.e(2).then(n.bind(null,579))},function(e){function t(e){var n;return v()(this,t),(n=_()(this,w()(t).call(this,e))).state={component:null},n}var n;return D()(t,e),g()(t,[{key:"componentDidMount",value:(n=m()(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),t}(r.Component)),I=function(e){var t=e.component,n=e.rootClass,r=u()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(d.d,c()({},r,{component:t}))};I.propTypes={component:s.a.func,rootClass:s.a.string};var x=function(){return a.a.createElement(d.g,null,a.a.createElement(I,{exact:!0,path:"/",component:S,rootClass:"dashboard"}))},P=function(e){return Object(r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("dashboard")}),[]),a.a.createElement(x,{childProps:e})};P.propTypes={history:s.a.object};var F,L=P,T=n(373),z=n(106),A=n(110),H=n(23),M=n.n(H),C=n(192),N=n(382),U=n(90),R=n.n(U),V=n(44),q=R()({complianceSummary:{},complianceFetchStatus:"",criticalVulnerabilities:{},criticalVulnerabilitiesFetchStatus:"",latestVulnerabilities:{},latestVulnerabilitiesFetchStatus:""}),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(V.a,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(V.a,"_FULFILLED"):return R.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(V.a,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(V.c,"_PENDING"):return e.set("criticalVulnerabilitiesFetchStatus","pending");case"".concat(V.c,"_FULFILLED"):return R.a.merge(e,{criticalVulnerabilities:t.payload,criticalVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(V.c,"_REJECTED"):return e.set("criticalVulnerabilitiesFetchStatus","rejected");case"".concat(V.e,"_PENDING"):return e.set("latestVulnerabilitiesFetchStatus","pending");case"".concat(V.e,"_FULFILLED"):return R.a.merge(e,{latestVulnerabilities:t.payload,latestVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(V.e,"_REJECTED"):return e.set("latestVulnerabilitiesFetchStatus","rejected");case"".concat(V.h,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(V.h,"_FULFILLED"):return R.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(V.h,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");default:return e}},B=n(115),G=n(206),Y=n(380),X=n(381),K=document.getElementById("root");M.a.render(a.a.createElement(T.IntlProvider,{locale:navigator.language,messages:X,onError:console.log},a.a.createElement(A.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.b,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(F=Object(G.getRegistry)({},[].concat(n,[Y.a,Object(z.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({DashboardStore:J}),F.register({notifications:z.notifications}),F}().getStore()},a.a.createElement(C.BrowserRouter,{basename:Object(N.getBaseName)(window.location.pathname)},a.a.createElement(a.a.Fragment,null,a.a.createElement(z.NotificationsPortal,null),a.a.createElement(L,null))))),K,(function(){return K.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.js.map