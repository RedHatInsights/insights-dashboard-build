!function(e){function t(t){for(var r,a,o=t[0],s=t[1],i=t[2],c=0,l=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(I,a)&&I[a]&&l.push(I[a][0]),I[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(z&&z(t);l.length;)l.shift()();return x.push.apply(x,i||[]),n()}function n(){for(var e,t=0;t<x.length;t++){for(var n=x[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==I[o]&&(r=!1)}r&&(x.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--v&&0===y&&D()}(e,t),r&&r(e,t)};var a,o=!0,s="bb2b003f9511c038b370",i={},c=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:k,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:i[e]};return a=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,m,j,v=0,y=0,g={},b={},_={};function E(e){return+e+""===e?+e:e}function w(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=P.p+""+s+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;b={},g={},_=e.c,j=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in m={},I)O(n);return"prepare"===p&&0===y&&0===v&&D(),t}));var t}function O(e){_[e]?(b[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+s+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then((function(){return k(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(E(n));e.resolve(t)}}function k(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),s=a.id,i=a.chain;if((o=S[s])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(o.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=S[l];if(u){if(u.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([l]),moduleId:s,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[s]?(n[l]||(n[l]=[]),d(n[l],[s])):(delete n[l],t.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},v=[],y={},g=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){var w;l=E(b);var O=!1,D=!1,k=!1,x="";switch((w=m[b]?u(l):{type:"disposed",moduleId:b}).chain&&(x="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+w.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(O=new Error("Aborted because "+l+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(w),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),k=!0;break;default:throw new Error("Unexception type "+w.type)}if(O)return f("abort"),Promise.reject(O);if(D)for(l in y[l]=m[l],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,l)&&(h[l]||(h[l]=[]),d(h[l],w.outdatedDependencies[l]));k&&(d(v,[w.moduleId]),y[l]=g)}var F,L=[];for(r=0;r<v.length;r++)l=v[r],S[l]&&S[l].hot._selfAccepted&&y[l]!==g&&L.push({module:l,errorHandler:S[l].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete I[e]}(e)}));for(var T,z,A=v.slice();A.length>0;)if(l=A.pop(),o=S[l]){var H={},M=o.hot._disposeHandlers;for(a=0;a<M.length;a++)(n=M[a])(H);for(i[l]=H,o.hot.active=!1,delete S[l],delete h[l],a=0;a<o.children.length;a++){var C=S[o.children[a]];C&&((F=C.parents.indexOf(l))>=0&&C.parents.splice(F,1))}}for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(o=S[l]))for(z=h[l],a=0;a<z.length;a++)T=z[a],(F=o.children.indexOf(T))>=0&&o.children.splice(F,1);for(l in f("apply"),s=j,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var N=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(o=S[l])){z=h[l];var U=[];for(r=0;r<z.length;r++)if(T=z[r],n=o.hot._acceptedDependencies[T]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(z)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:z[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<L.length;r++){var R=L[r];l=R.module,c=[l];try{P(l)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||N||(N=e)}}return N?(f("fail"),Promise.reject(N)):(f("idle"),new Promise((function(e){e(v)})))}var S={},I={2:0},x=[];function P(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return P;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var o in P)Object.prototype.hasOwnProperty.call(P,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),y++,P.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===p&&(g[e]||O(e),0===y&&0===v&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.e=function(e){var t=[],n=I[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=I[e]=[t,r]}));t.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,P.nc&&o.setAttribute("nonce",P.nc),o.src=function(e){return P.p+"js/"+({3:"Dashboard"}[e]||e)+".js"}(e);var s=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(i);var n=I[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}I[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},P.m=e,P.c=S,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/beta/apps/dashboard/",P.oe=function(e){throw console.error(e),e},P.h=function(){return s};var F=window.webpackJsonp=window.webpackJsonp||[],L=F.push.bind(F);F.push=t,F=F.slice();for(var T=0;T<F.length;T++)t(F[T]);var z=L;x.push([605,4]),n()}({181:function(e,t,n){var r=n(7),a=n(478);(t=r(!1)).i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:#8a8d90}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:#c9190b}.ins-c-summary__icon-high{fill:#ec7a08}.ins-c-summary__icon-medium{fill:#f4c145}.ins-c-summary__icon-low{fill:#2b9af3}.ins-c-summary__icon-flag{fill:#004080}.ins-c-summary__icon-check{fill:#6ec664}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-summary .ins-m-green{color:#5ba352}.ins-c-summary .ins-m-red{color:#c9190b}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}\n",""]),e.exports=t},457:function(e){e.exports=JSON.parse('{"en":{"dashboardTitle":"Overview"}}')},477:function(e,t,n){var r=n(9),a=n(181);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},s=r(a,o),i=a.locals?a.locals:{};a.locals||e.hot.accept(181,(function(){var t=n(181);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),s(t)})),e.hot.dispose((function(){s()})),e.exports=i},545:function(e,t,n){var r={"./af":291,"./af.js":291,"./ar":292,"./ar-dz":293,"./ar-dz.js":293,"./ar-kw":294,"./ar-kw.js":294,"./ar-ly":295,"./ar-ly.js":295,"./ar-ma":296,"./ar-ma.js":296,"./ar-sa":297,"./ar-sa.js":297,"./ar-tn":298,"./ar-tn.js":298,"./ar.js":292,"./az":299,"./az.js":299,"./be":300,"./be.js":300,"./bg":301,"./bg.js":301,"./bm":302,"./bm.js":302,"./bn":303,"./bn.js":303,"./bo":304,"./bo.js":304,"./br":305,"./br.js":305,"./bs":306,"./bs.js":306,"./ca":307,"./ca.js":307,"./cs":308,"./cs.js":308,"./cv":309,"./cv.js":309,"./cy":310,"./cy.js":310,"./da":311,"./da.js":311,"./de":312,"./de-at":313,"./de-at.js":313,"./de-ch":314,"./de-ch.js":314,"./de.js":312,"./dv":315,"./dv.js":315,"./el":316,"./el.js":316,"./en-SG":317,"./en-SG.js":317,"./en-au":318,"./en-au.js":318,"./en-ca":319,"./en-ca.js":319,"./en-gb":320,"./en-gb.js":320,"./en-ie":321,"./en-ie.js":321,"./en-il":322,"./en-il.js":322,"./en-nz":323,"./en-nz.js":323,"./eo":324,"./eo.js":324,"./es":325,"./es-do":326,"./es-do.js":326,"./es-us":327,"./es-us.js":327,"./es.js":325,"./et":328,"./et.js":328,"./eu":329,"./eu.js":329,"./fa":330,"./fa.js":330,"./fi":331,"./fi.js":331,"./fo":332,"./fo.js":332,"./fr":333,"./fr-ca":334,"./fr-ca.js":334,"./fr-ch":335,"./fr-ch.js":335,"./fr.js":333,"./fy":336,"./fy.js":336,"./ga":337,"./ga.js":337,"./gd":338,"./gd.js":338,"./gl":339,"./gl.js":339,"./gom-latn":340,"./gom-latn.js":340,"./gu":341,"./gu.js":341,"./he":342,"./he.js":342,"./hi":343,"./hi.js":343,"./hr":344,"./hr.js":344,"./hu":345,"./hu.js":345,"./hy-am":346,"./hy-am.js":346,"./id":347,"./id.js":347,"./is":348,"./is.js":348,"./it":349,"./it-ch":350,"./it-ch.js":350,"./it.js":349,"./ja":351,"./ja.js":351,"./jv":352,"./jv.js":352,"./ka":353,"./ka.js":353,"./kk":354,"./kk.js":354,"./km":355,"./km.js":355,"./kn":356,"./kn.js":356,"./ko":357,"./ko.js":357,"./ku":358,"./ku.js":358,"./ky":359,"./ky.js":359,"./lb":360,"./lb.js":360,"./lo":361,"./lo.js":361,"./lt":362,"./lt.js":362,"./lv":363,"./lv.js":363,"./me":364,"./me.js":364,"./mi":365,"./mi.js":365,"./mk":366,"./mk.js":366,"./ml":367,"./ml.js":367,"./mn":368,"./mn.js":368,"./mr":369,"./mr.js":369,"./ms":370,"./ms-my":371,"./ms-my.js":371,"./ms.js":370,"./mt":372,"./mt.js":372,"./my":373,"./my.js":373,"./nb":374,"./nb.js":374,"./ne":375,"./ne.js":375,"./nl":376,"./nl-be":377,"./nl-be.js":377,"./nl.js":376,"./nn":378,"./nn.js":378,"./pa-in":379,"./pa-in.js":379,"./pl":380,"./pl.js":380,"./pt":381,"./pt-br":382,"./pt-br.js":382,"./pt.js":381,"./ro":383,"./ro.js":383,"./ru":384,"./ru.js":384,"./sd":385,"./sd.js":385,"./se":386,"./se.js":386,"./si":387,"./si.js":387,"./sk":388,"./sk.js":388,"./sl":389,"./sl.js":389,"./sq":390,"./sq.js":390,"./sr":391,"./sr-cyrl":392,"./sr-cyrl.js":392,"./sr.js":391,"./ss":393,"./ss.js":393,"./sv":394,"./sv.js":394,"./sw":395,"./sw.js":395,"./ta":396,"./ta.js":396,"./te":397,"./te.js":397,"./tet":398,"./tet.js":398,"./tg":399,"./tg.js":399,"./th":400,"./th.js":400,"./tl-ph":401,"./tl-ph.js":401,"./tlh":402,"./tlh.js":402,"./tr":403,"./tr.js":403,"./tzl":404,"./tzl.js":404,"./tzm":405,"./tzm-latn":406,"./tzm-latn.js":406,"./tzm.js":405,"./ug-cn":407,"./ug-cn.js":407,"./uk":408,"./uk.js":408,"./ur":409,"./ur.js":409,"./uz":410,"./uz-latn":411,"./uz-latn.js":411,"./uz.js":410,"./vi":412,"./vi.js":412,"./x-pseudo":413,"./x-pseudo.js":413,"./yo":414,"./yo.js":414,"./zh-cn":415,"./zh-cn.js":415,"./zh-hk":416,"./zh-hk.js":416,"./zh-tw":417,"./zh-tw.js":417};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=545},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return h})),n.d(t,"i",(function(){return m}));var r=n(4),a=n.n(r),o=n(173),s="COMPLIANCE_SUMMARY_FETCH",i="CRITICAL_VULNERABILITIES_FETCH",c="LATEST_VULNERABILITIES_FETCH",l="VULNERABILITIES_FETCH",u="./rhel",d="/vulnerability/v1/vulnerabilities/cves",p="".concat("/api","/compliance/profiles"),f=o("".concat("/api").concat(d)).addSearch("cvss_from",8).toString(),h=o("".concat("/api").concat(d)).addSearch("show_all","true").addSearch("public_from",a()().subtract(7,"days").format("YYYY-MM-DD")).toString(),m=o("".concat("/api").concat(d)).addSearch("page_size",1).toString()},605:function(e,t,n){"use strict";n.r(t);n(477);var r=n(2),a=n.n(r),o=n(1),s=n.n(o),i=n(269),c=n.n(i),l=n(271),u=n.n(l),d=n(94),p=n(258),f=n.n(p),h=n(281),m=n.n(h),j=n(272),v=n.n(j),y=n(273),g=n.n(y),b=n(274),_=n.n(b),E=n(275),w=n.n(E),O=n(276),D=n.n(O);var k,S=(k=function(){return n.e(3).then(n.bind(null,1011))},function(e){function t(e){var n;return v()(this,t),(n=_()(this,w()(t).call(this,e))).state={component:null},n}var n;return D()(t,e),g()(t,[{key:"componentDidMount",value:(n=m()(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),t}(r.Component)),I=function(e){var t=e.component,n=e.rootClass,r=u()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(d.d,c()({},r,{component:t}))};I.propTypes={component:s.a.func,rootClass:s.a.string};var x=function(){return a.a.createElement(d.g,null,a.a.createElement(I,{exact:!0,path:"/",component:S,rootClass:"dashboard"}))},P=function(e){return Object(r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("dashboard")}),[]),a.a.createElement(x,{childProps:e})};P.propTypes={history:s.a.object};var F,L=P,T=n(451),z=n(147),A=n(152),H=n(32),M=n.n(H),C=n(256),N=n(458),U=n(123),R=n.n(U),V=n(55),q=R()({complianceSummary:{},complianceFetchStatus:"",criticalVulnerabilities:{},criticalVulnerabilitiesFetchStatus:"",latestVulnerabilities:{},latestVulnerabilitiesFetchStatus:""}),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(V.a,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(V.a,"_FULFILLED"):return R.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(V.a,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(V.c,"_PENDING"):return e.set("criticalVulnerabilitiesFetchStatus","pending");case"".concat(V.c,"_FULFILLED"):return R.a.merge(e,{criticalVulnerabilities:t.payload,criticalVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(V.c,"_REJECTED"):return e.set("criticalVulnerabilitiesFetchStatus","rejected");case"".concat(V.e,"_PENDING"):return e.set("latestVulnerabilitiesFetchStatus","pending");case"".concat(V.e,"_FULFILLED"):return R.a.merge(e,{latestVulnerabilities:t.payload,latestVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(V.e,"_REJECTED"):return e.set("latestVulnerabilitiesFetchStatus","rejected");case"".concat(V.h,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(V.h,"_FULFILLED"):return R.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(V.h,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");default:return e}},B=n(168),G=n(277),Y=n(456),X=n(457),K=document.getElementById("root");M.a.render(a.a.createElement(T.IntlProvider,{locale:navigator.language,messages:X,onError:console.log},a.a.createElement(A.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.b,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(F=Object(G.getRegistry)({},[].concat(n,[Y.a,Object(z.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({DashboardStore:J}),F.register({notifications:z.notifications}),F}().getStore()},a.a.createElement(C.BrowserRouter,{basename:Object(N.getBaseName)(window.location.pathname)},a.a.createElement(a.a.Fragment,null,a.a.createElement(z.NotificationsPortal,null),a.a.createElement(L,null))))),K,(function(){return K.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.js.map