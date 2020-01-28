!function(e){function t(t){for(var r,o,a=t[0],s=t[1],c=t[2],i=0,u=[];i<a.length;i++)o=a[i],P[o]&&u.push(P[o][0]),P[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(H&&H(t);u.length;)u.shift()();return F.push.apply(F,c||[]),n()}function n(){for(var e,t=0;t<F.length;t++){for(var n=F[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==P[a]&&(r=!1)}r&&(F.splice(t--,1),e=L(L.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--y&&0===b&&S()}(e,t),r&&r(e,t)};var o,a=!0,s="ba0f35dc6baa4a1fbd32",c=1e4,i={},u=[],l=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:k,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:i[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var j,m,v,y=0,b=0,g={},E={},w={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=L.p+""+s+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;E={},g={},w=e.c,v=e.h,h("prepare");var t=new Promise(function(e,t){j={resolve:e,reject:t}});for(var n in m={},P)D(n);return"prepare"===f&&0===b&&0===y&&S(),t});var t}function D(e){w[e]?(E[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+s+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function S(){h("ready");var e=j;if(j=null,e)if(a)Promise.resolve().then(function(){return k(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(_(n));e.resolve(t)}}function k(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),s=o.id,c=o.chain;if((a=I[s])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:s};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:s};for(var i=0;i<a.parents.length;i++){var u=a.parents[i],l=I[u];if(l){if(l.hot._declinedDependencies[s])return{type:"declined",chain:c.concat([u]),moduleId:s,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[s]?(n[u]||(n[u]=[]),d(n[u],[s])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},j=[],y={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)){var E;c=_(g);var O=!1,D=!1,S=!1,k="";switch((E=m[g]?l(c):{type:"disposed",moduleId:g}).chain&&(k="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+c+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(E),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),S=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return h("abort"),Promise.reject(O);if(D)for(c in y[c]=m[c],d(j,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,c)&&(p[c]||(p[c]=[]),d(p[c],E.outdatedDependencies[c]));S&&(d(j,[E.moduleId]),y[c]=b)}var F,x=[];for(r=0;r<j.length;r++)c=j[r],I[c]&&I[c].hot._selfAccepted&&x.push({module:c,errorHandler:I[c].hot._selfAccepted});h("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete P[e]}(e)});for(var A,T,H=j.slice();H.length>0;)if(c=H.pop(),a=I[c]){var z={},C=a.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(z);for(i[c]=z,a.hot.active=!1,delete I[c],delete p[c],o=0;o<a.children.length;o++){var M=I[a.children[o]];M&&((F=M.parents.indexOf(c))>=0&&M.parents.splice(F,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=I[c]))for(T=p[c],o=0;o<T.length;o++)A=T[o],(F=a.children.indexOf(A))>=0&&a.children.splice(F,1);for(c in h("apply"),s=v,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var N=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=I[c])){T=p[c];var U=[];for(r=0;r<T.length;r++)if(A=T[r],n=a.hot._acceptedDependencies[A]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(T)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:T[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<x.length;r++){var R=x[r];c=R.module,u=[c];try{L(c)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||N||(N=e)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(j)}))}var I={},P={1:0},F=[];function L(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:d(t),parents:(l=u,u=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=I[e];if(!t)return L;var n=function(n){return t.hot.active?(I[n]?-1===I[n].parents.indexOf(e)&&I[n].parents.push(e):(u=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),L(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var a in L)Object.prototype.hasOwnProperty.call(L,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,L.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(g[e]||D(e),0===b&&0===y&&S())}},n.t=function(e,t){return 1&t&&(e=n(e)),L.t(e,-2&t)},n}(t)),n.l=!0,n.exports}L.e=function(e){var t=[],n=P[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=P[e]=[t,r]});t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,L.nc&&a.setAttribute("nonce",L.nc),a.src=function(e){return L.p+"js/"+({2:"Dashboard"}[e]||e)+".js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=P[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}P[e]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},L.m=e,L.c=I,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="/apps/dashboard/",L.oe=function(e){throw console.error(e),e},L.h=function(){return s};var x=window.webpackJsonp=window.webpackJsonp||[],A=x.push.bind(x);x.push=t,x=x.slice();for(var T=0;T<x.length;T++)t(x[T]);var H=A;F.push([431,3]),n()}({34:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"h",function(){return u}),n.d(t,"g",function(){return l}),n.d(t,"b",function(){return p}),n.d(t,"d",function(){return f}),n.d(t,"f",function(){return h}),n.d(t,"i",function(){return j});var r=n(4),o=n.n(r),a=n(92),s="COMPLIANCE_SUMMARY_FETCH",c="CRITICAL_VULNERABILITIES_FETCH",i="LATEST_VULNERABILITIES_FETCH",u="VULNERABILITIES_FETCH",l="./rhel",d="/vulnerability/v1/vulnerabilities/cves",p="".concat("/api","/compliance/profiles"),f=a("".concat("/api").concat(d)).addSearch("cvss_from",8).toString(),h=a("".concat("/api").concat(d)).addSearch("show_all","true").addSearch("public_from",o()().subtract(7,"days").format("YYYY-MM-DD")).toString(),j=a("".concat("/api").concat(d)).addSearch("page_size",1).toString()},354:function(e,t,n){var r=n(94);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(7)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(94,function(){var t=n(94);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},429:function(e,t,n){var r={"./af":193,"./af.js":193,"./ar":194,"./ar-dz":195,"./ar-dz.js":195,"./ar-kw":196,"./ar-kw.js":196,"./ar-ly":197,"./ar-ly.js":197,"./ar-ma":198,"./ar-ma.js":198,"./ar-sa":199,"./ar-sa.js":199,"./ar-tn":200,"./ar-tn.js":200,"./ar.js":194,"./az":201,"./az.js":201,"./be":202,"./be.js":202,"./bg":203,"./bg.js":203,"./bm":204,"./bm.js":204,"./bn":205,"./bn.js":205,"./bo":206,"./bo.js":206,"./br":207,"./br.js":207,"./bs":208,"./bs.js":208,"./ca":209,"./ca.js":209,"./cs":210,"./cs.js":210,"./cv":211,"./cv.js":211,"./cy":212,"./cy.js":212,"./da":213,"./da.js":213,"./de":214,"./de-at":215,"./de-at.js":215,"./de-ch":216,"./de-ch.js":216,"./de.js":214,"./dv":217,"./dv.js":217,"./el":218,"./el.js":218,"./en-SG":219,"./en-SG.js":219,"./en-au":220,"./en-au.js":220,"./en-ca":221,"./en-ca.js":221,"./en-gb":222,"./en-gb.js":222,"./en-ie":223,"./en-ie.js":223,"./en-il":224,"./en-il.js":224,"./en-nz":225,"./en-nz.js":225,"./eo":226,"./eo.js":226,"./es":227,"./es-do":228,"./es-do.js":228,"./es-us":229,"./es-us.js":229,"./es.js":227,"./et":230,"./et.js":230,"./eu":231,"./eu.js":231,"./fa":232,"./fa.js":232,"./fi":233,"./fi.js":233,"./fo":234,"./fo.js":234,"./fr":235,"./fr-ca":236,"./fr-ca.js":236,"./fr-ch":237,"./fr-ch.js":237,"./fr.js":235,"./fy":238,"./fy.js":238,"./ga":239,"./ga.js":239,"./gd":240,"./gd.js":240,"./gl":241,"./gl.js":241,"./gom-latn":242,"./gom-latn.js":242,"./gu":243,"./gu.js":243,"./he":244,"./he.js":244,"./hi":245,"./hi.js":245,"./hr":246,"./hr.js":246,"./hu":247,"./hu.js":247,"./hy-am":248,"./hy-am.js":248,"./id":249,"./id.js":249,"./is":250,"./is.js":250,"./it":251,"./it-ch":252,"./it-ch.js":252,"./it.js":251,"./ja":253,"./ja.js":253,"./jv":254,"./jv.js":254,"./ka":255,"./ka.js":255,"./kk":256,"./kk.js":256,"./km":257,"./km.js":257,"./kn":258,"./kn.js":258,"./ko":259,"./ko.js":259,"./ku":260,"./ku.js":260,"./ky":261,"./ky.js":261,"./lb":262,"./lb.js":262,"./lo":263,"./lo.js":263,"./lt":264,"./lt.js":264,"./lv":265,"./lv.js":265,"./me":266,"./me.js":266,"./mi":267,"./mi.js":267,"./mk":268,"./mk.js":268,"./ml":269,"./ml.js":269,"./mn":270,"./mn.js":270,"./mr":271,"./mr.js":271,"./ms":272,"./ms-my":273,"./ms-my.js":273,"./ms.js":272,"./mt":274,"./mt.js":274,"./my":275,"./my.js":275,"./nb":276,"./nb.js":276,"./ne":277,"./ne.js":277,"./nl":278,"./nl-be":279,"./nl-be.js":279,"./nl.js":278,"./nn":280,"./nn.js":280,"./pa-in":281,"./pa-in.js":281,"./pl":282,"./pl.js":282,"./pt":283,"./pt-br":284,"./pt-br.js":284,"./pt.js":283,"./ro":285,"./ro.js":285,"./ru":286,"./ru.js":286,"./sd":287,"./sd.js":287,"./se":288,"./se.js":288,"./si":289,"./si.js":289,"./sk":290,"./sk.js":290,"./sl":291,"./sl.js":291,"./sq":292,"./sq.js":292,"./sr":293,"./sr-cyrl":294,"./sr-cyrl.js":294,"./sr.js":293,"./ss":295,"./ss.js":295,"./sv":296,"./sv.js":296,"./sw":297,"./sw.js":297,"./ta":298,"./ta.js":298,"./te":299,"./te.js":299,"./tet":300,"./tet.js":300,"./tg":301,"./tg.js":301,"./th":302,"./th.js":302,"./tl-ph":303,"./tl-ph.js":303,"./tlh":304,"./tlh.js":304,"./tr":305,"./tr.js":305,"./tzl":306,"./tzl.js":306,"./tzm":307,"./tzm-latn":308,"./tzm-latn.js":308,"./tzm.js":307,"./ug-cn":309,"./ug-cn.js":309,"./uk":310,"./uk.js":310,"./ur":311,"./ur.js":311,"./uz":312,"./uz-latn":313,"./uz-latn.js":313,"./uz.js":312,"./vi":314,"./vi.js":314,"./x-pseudo":315,"./x-pseudo.js":315,"./yo":316,"./yo.js":316,"./zh-cn":317,"./zh-cn.js":317,"./zh-hk":318,"./zh-hk.js":318,"./zh-tw":319,"./zh-tw.js":319};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=429},431:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(20),s=n.n(a),c=n(192),i=n(64),u=n(76),l=n.n(u),d=n(77),p=n.n(d),f=n(78),h=n.n(f),j=n(79),m=n.n(j),v=n(80),y=n.n(v),b=n(1),g=n.n(b),E=n(326),w=n(169),_=n.n(w),O=n(330),D=n.n(O),S=n(83),k=n(327),I=n(93),P=n.n(I),F=n(170),L=n.n(F);var x,A=(x=function(){return n.e(2).then(n.bind(null,473))},function(e){function t(e){var n;return l()(this,t),(n=h()(this,m()(t).call(this,e))).state={component:null},n}return y()(t,e),p()(t,[{key:"componentDidMount",value:(n=L()(P.a.mark(function e(){var t,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement("div",null,"Loading...")}}]),t;var n}(r.Component)),T=function(e){var t=e.component,n=e.rootClass,r=D()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),o.a.createElement(S.a,_()({},r,{component:t}))};T.propTypes={component:g.a.func,rootClass:g.a.string};var H=function(){return o.a.createElement(k.a,null,o.a.createElement(T,{exact:!0,path:"/",component:A,rootClass:"dashboard"}))},z=(n(354),function(e){function t(){return l()(this,t),h()(this,m()(t).apply(this,arguments))}return y()(t,e),p()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("dashboard")}},{key:"render",value:function(){return o.a.createElement(H,{childProps:this.props})}}]),t}(r.Component));z.propTypes={history:g.a.object};var C=Object(E.a)(Object(i.connect)()(z));var M,N=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1])},U=n(339),R=n(66),V=n(166),q=n(165),G=n(73),J=n.n(G),B=n(34),Y=J()({complianceSummary:{},complianceFetchStatus:"",criticalVulnerabilities:{},criticalVulnerabilitiesFetchStatus:"",latestVulnerabilities:{},latestVulnerabilitiesFetchStatus:""}),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(B.a,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(B.a,"_FULFILLED"):return J.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(B.a,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(B.c,"_PENDING"):return e.set("criticalVulnerabilitiesFetchStatus","pending");case"".concat(B.c,"_FULFILLED"):return J.a.merge(e,{criticalVulnerabilities:t.payload,criticalVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(B.c,"_REJECTED"):return e.set("criticalVulnerabilitiesFetchStatus","rejected");case"".concat(B.e,"_PENDING"):return e.set("latestVulnerabilitiesFetchStatus","pending");case"".concat(B.e,"_FULFILLED"):return J.a.merge(e,{latestVulnerabilities:t.payload,latestVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(B.e,"_REJECTED"):return e.set("latestVulnerabilitiesFetchStatus","rejected");case"".concat(B.h,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(B.h,"_FULFILLED"):return J.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(B.h,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");default:return e}};var K=document.getElementById("root");s.a.render(o.a.createElement(i.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.compose,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(M=Object(V.getRegistry)({},[].concat(n,[Object(U.a)(),Object(q.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({DashboardStore:X}),M.register({notifications:q.notifications}),M}().getStore()},o.a.createElement(c.a,{basename:N(window.location.pathname)},o.a.createElement(C,null))),K,function(){return K.setAttribute("data-ouia-safe",!0)})},94:function(e,t,n){(t=e.exports=n(6)(!1)).i(n(355),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n",""])}});
//# sourceMappingURL=../sourcemaps/App.js.map