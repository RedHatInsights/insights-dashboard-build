!function(e){function t(t){for(var r,o,s=t[0],a=t[1],c=t[2],i=0,l=[];i<s.length;i++)o=s[i],P[o]&&l.push(P[o][0]),P[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(H&&H(t);l.length;)l.shift()();return F.push.apply(F,c||[]),n()}function n(){for(var e,t=0;t<F.length;t++){for(var n=F[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==P[s]&&(r=!1)}r&&(F.splice(t--,1),e=L(L.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--y&&0===b&&S()}(e,t),r&&r(e,t)};var o,s=!0,a="1fe047189f1af13f1fe7",c=1e4,i={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:k,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:i[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var j,m,v,y=0,b=0,g={},E={},w={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return s=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=L.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;E={},g={},w=e.c,v=e.h,h("prepare");var t=new Promise(function(e,t){j={resolve:e,reject:t}});for(var n in m={},P)D(n);return"prepare"===f&&0===b&&0===y&&S(),t});var t}function D(e){w[e]?(E[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function S(){h("ready");var e=j;if(j=null,e)if(s)Promise.resolve().then(function(){return k(s)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(_(n));e.resolve(t)}}function k(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,s,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((s=I[a])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var i=0;i<s.parents.length;i++){var l=s.parents[i],u=I[l];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),d(n[l],[a])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},j=[],y={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)){var E;c=_(g);var O=!1,D=!1,S=!1,k="";switch((E=m[g]?u(c):{type:"disposed",moduleId:g}).chain&&(k="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+c+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(E),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),S=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return h("abort"),Promise.reject(O);if(D)for(c in y[c]=m[c],d(j,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,c)&&(p[c]||(p[c]=[]),d(p[c],E.outdatedDependencies[c]));S&&(d(j,[E.moduleId]),y[c]=b)}var F,x=[];for(r=0;r<j.length;r++)c=j[r],I[c]&&I[c].hot._selfAccepted&&x.push({module:c,errorHandler:I[c].hot._selfAccepted});h("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete P[e]}(e)});for(var T,A,H=j.slice();H.length>0;)if(c=H.pop(),s=I[c]){var z={},C=s.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(z);for(i[c]=z,s.hot.active=!1,delete I[c],delete p[c],o=0;o<s.children.length;o++){var M=I[s.children[o]];M&&((F=M.parents.indexOf(c))>=0&&M.parents.splice(F,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(s=I[c]))for(A=p[c],o=0;o<A.length;o++)T=A[o],(F=s.children.indexOf(T))>=0&&s.children.splice(F,1);for(c in h("apply"),a=v,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var N=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(s=I[c])){A=p[c];var U=[];for(r=0;r<A.length;r++)if(T=A[r],n=s.hot._acceptedDependencies[T]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:A[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<x.length;r++){var R=x[r];c=R.module,l=[c];try{L(c)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||N||(N=e)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(j)}))}var I={},P={1:0},F=[];function L(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=I[e];if(!t)return L;var n=function(n){return t.hot.active?(I[n]?-1===I[n].parents.indexOf(e)&&I[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),L(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var s in L)Object.prototype.hasOwnProperty.call(L,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(n,s,r(s));return n.e=function(e){return"ready"===f&&h("prepare"),b++,L.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(g[e]||D(e),0===b&&0===y&&S())}},n.t=function(e,t){return 1&t&&(e=n(e)),L.t(e,-2&t)},n}(t)),n.l=!0,n.exports}L.e=function(e){var t=[],n=P[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=P[e]=[t,r]});t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,L.nc&&s.setAttribute("nonce",L.nc),s.src=function(e){return L.p+"js/"+({2:"Dashboard"}[e]||e)+".js"}(e),o=function(t){s.onerror=s.onload=null,clearTimeout(a);var n=P[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}P[e]=void 0}};var a=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},L.m=e,L.c=I,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="/apps/dashboard/",L.oe=function(e){throw console.error(e),e},L.h=function(){return a};var x=window.webpackJsonp=window.webpackJsonp||[],T=x.push.bind(x);x.push=t,x=x.slice();for(var A=0;A<x.length;A++)t(x[A]);var H=T;F.push([652,3]),n()}({114:function(e,t,n){(t=e.exports=n(162)(!1)).i(n(424),""),t.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n",""])},22:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"h",function(){return l}),n.d(t,"g",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"d",function(){return f}),n.d(t,"f",function(){return h}),n.d(t,"i",function(){return j});var r=n(5),o=n.n(r),s=n(111),a="COMPLIANCE_SUMMARY_FETCH",c="CRITICAL_VULNERABILITIES_FETCH",i="LATEST_VULNERABILITIES_FETCH",l="VULNERABILITIES_FETCH",u="./rhel",d="/vulnerability/v1/vulnerabilities/cves",p="".concat("/api","/compliance/profiles"),f=s("".concat("/api").concat(d)).addSearch("cvss_from",7).toString(),h=s("".concat("/api").concat(d)).addSearch("show_all","true").addSearch("public_from",o()().subtract(7,"days").format("YYYY-MM-DD")).toString(),j=s("".concat("/api").concat(d)).addSearch("page_size",1).toString()},423:function(e,t,n){var r=n(114);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},s=n(410)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(114,function(){var t=n(114);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)}),e.hot.dispose(function(){s()})},649:function(e,t,n){var r={"./af":259,"./af.js":259,"./ar":260,"./ar-dz":261,"./ar-dz.js":261,"./ar-kw":262,"./ar-kw.js":262,"./ar-ly":263,"./ar-ly.js":263,"./ar-ma":264,"./ar-ma.js":264,"./ar-sa":265,"./ar-sa.js":265,"./ar-tn":266,"./ar-tn.js":266,"./ar.js":260,"./az":267,"./az.js":267,"./be":268,"./be.js":268,"./bg":269,"./bg.js":269,"./bm":270,"./bm.js":270,"./bn":271,"./bn.js":271,"./bo":272,"./bo.js":272,"./br":273,"./br.js":273,"./bs":274,"./bs.js":274,"./ca":275,"./ca.js":275,"./cs":276,"./cs.js":276,"./cv":277,"./cv.js":277,"./cy":278,"./cy.js":278,"./da":279,"./da.js":279,"./de":280,"./de-at":281,"./de-at.js":281,"./de-ch":282,"./de-ch.js":282,"./de.js":280,"./dv":283,"./dv.js":283,"./el":284,"./el.js":284,"./en-SG":285,"./en-SG.js":285,"./en-au":286,"./en-au.js":286,"./en-ca":287,"./en-ca.js":287,"./en-gb":288,"./en-gb.js":288,"./en-ie":289,"./en-ie.js":289,"./en-il":290,"./en-il.js":290,"./en-nz":291,"./en-nz.js":291,"./eo":292,"./eo.js":292,"./es":293,"./es-do":294,"./es-do.js":294,"./es-us":295,"./es-us.js":295,"./es.js":293,"./et":296,"./et.js":296,"./eu":297,"./eu.js":297,"./fa":298,"./fa.js":298,"./fi":299,"./fi.js":299,"./fo":300,"./fo.js":300,"./fr":301,"./fr-ca":302,"./fr-ca.js":302,"./fr-ch":303,"./fr-ch.js":303,"./fr.js":301,"./fy":304,"./fy.js":304,"./ga":305,"./ga.js":305,"./gd":306,"./gd.js":306,"./gl":307,"./gl.js":307,"./gom-latn":308,"./gom-latn.js":308,"./gu":309,"./gu.js":309,"./he":310,"./he.js":310,"./hi":311,"./hi.js":311,"./hr":312,"./hr.js":312,"./hu":313,"./hu.js":313,"./hy-am":314,"./hy-am.js":314,"./id":315,"./id.js":315,"./is":316,"./is.js":316,"./it":317,"./it-ch":318,"./it-ch.js":318,"./it.js":317,"./ja":319,"./ja.js":319,"./jv":320,"./jv.js":320,"./ka":321,"./ka.js":321,"./kk":322,"./kk.js":322,"./km":323,"./km.js":323,"./kn":324,"./kn.js":324,"./ko":325,"./ko.js":325,"./ku":326,"./ku.js":326,"./ky":327,"./ky.js":327,"./lb":328,"./lb.js":328,"./lo":329,"./lo.js":329,"./lt":330,"./lt.js":330,"./lv":331,"./lv.js":331,"./me":332,"./me.js":332,"./mi":333,"./mi.js":333,"./mk":334,"./mk.js":334,"./ml":335,"./ml.js":335,"./mn":336,"./mn.js":336,"./mr":337,"./mr.js":337,"./ms":338,"./ms-my":339,"./ms-my.js":339,"./ms.js":338,"./mt":340,"./mt.js":340,"./my":341,"./my.js":341,"./nb":342,"./nb.js":342,"./ne":343,"./ne.js":343,"./nl":344,"./nl-be":345,"./nl-be.js":345,"./nl.js":344,"./nn":346,"./nn.js":346,"./pa-in":347,"./pa-in.js":347,"./pl":348,"./pl.js":348,"./pt":349,"./pt-br":350,"./pt-br.js":350,"./pt.js":349,"./ro":351,"./ro.js":351,"./ru":352,"./ru.js":352,"./sd":353,"./sd.js":353,"./se":354,"./se.js":354,"./si":355,"./si.js":355,"./sk":356,"./sk.js":356,"./sl":357,"./sl.js":357,"./sq":358,"./sq.js":358,"./sr":359,"./sr-cyrl":360,"./sr-cyrl.js":360,"./sr.js":359,"./ss":361,"./ss.js":361,"./sv":362,"./sv.js":362,"./sw":363,"./sw.js":363,"./ta":364,"./ta.js":364,"./te":365,"./te.js":365,"./tet":366,"./tet.js":366,"./tg":367,"./tg.js":367,"./th":368,"./th.js":368,"./tl-ph":369,"./tl-ph.js":369,"./tlh":370,"./tlh.js":370,"./tr":371,"./tr.js":371,"./tzl":372,"./tzl.js":372,"./tzm":373,"./tzm-latn":374,"./tzm-latn.js":374,"./tzm.js":373,"./ug-cn":375,"./ug-cn.js":375,"./uk":376,"./uk.js":376,"./ur":377,"./ur.js":377,"./uz":378,"./uz-latn":379,"./uz-latn.js":379,"./uz.js":378,"./vi":380,"./vi.js":380,"./x-pseudo":381,"./x-pseudo.js":381,"./yo":382,"./yo.js":382,"./zh-cn":383,"./zh-cn.js":383,"./zh-hk":384,"./zh-hk.js":384,"./zh-tw":385,"./zh-tw.js":385};function o(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=649},652:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),s=n(7),a=n.n(s),c=n(246),i=n(53),l=n(78),u=n.n(l),d=n(79),p=n.n(d),f=n(80),h=n.n(f),j=n(81),m=n.n(j),v=n(82),y=n.n(v),b=n(0),g=n.n(b),E=n(390),w=n(75),_=n.n(w),O=n(395),D=n.n(O),S=n(101),k=n(391),I=n(113),P=n.n(I),F=n(163),L=n.n(F);var x,T=(x=function(){return n.e(2).then(n.bind(null,692))},function(e){function t(e){var n;return u()(this,t),(n=h()(this,m()(t).call(this,e))).state={component:null},n}return y()(t,e),p()(t,[{key:"componentDidMount",value:(n=L()(P.a.mark(function e(){var t,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement("div",null,"Loading...")}}]),t;var n}(r.Component)),A=function(e){var t=e.component,n=e.rootClass,r=D()(e,["component","rootClass"]),s=document.getElementById("root");return s.removeAttribute("class"),s.classList.add("page__".concat(n),"pf-c-page__main"),s.setAttribute("role","main"),o.a.createElement(S.a,_()({},r,{component:t}))};A.propTypes={component:g.a.func,rootClass:g.a.string};var H=function(){return o.a.createElement(k.a,null,o.a.createElement(A,{exact:!0,path:"/",component:T,rootClass:"dashboard"}))},z=(n(423),function(e){function t(){return u()(this,t),h()(this,m()(t).apply(this,arguments))}return y()(t,e),p()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("dashboard")}},{key:"render",value:function(){return o.a.createElement(H,{childProps:this.props})}}]),t}(r.Component));z.propTypes={history:g.a.object};var C=Object(E.a)(Object(i.connect)()(z));var M,N=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1])},U=n(409),R=n(57),V=n(160),q=n(159),G=n(65),J=n.n(G),B=n(22),Y=J()({complianceSummary:{},complianceFetchStatus:"",criticalVulnerabilities:{},criticalVulnerabilitiesFetchStatus:"",latestVulnerabilities:{},latestVulnerabilitiesFetchStatus:""}),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(B.a,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(B.a,"_FULFILLED"):return J.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(B.a,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(B.c,"_PENDING"):return e.set("criticalVulnerabilitiesFetchStatus","pending");case"".concat(B.c,"_FULFILLED"):return J.a.merge(e,{criticalVulnerabilities:t.payload,criticalVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(B.c,"_REJECTED"):return e.set("criticalVulnerabilitiesFetchStatus","rejected");case"".concat(B.e,"_PENDING"):return e.set("latestVulnerabilitiesFetchStatus","pending");case"".concat(B.e,"_FULFILLED"):return J.a.merge(e,{latestVulnerabilities:t.payload,latestVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(B.e,"_REJECTED"):return e.set("latestVulnerabilitiesFetchStatus","rejected");case"".concat(B.h,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(B.h,"_FULFILLED"):return J.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(B.h,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");default:return e}};a.a.render(o.a.createElement(i.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.compose,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(M=Object(V.getRegistry)({},[].concat(n,[Object(U.a)(),Object(q.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({DashboardStore:X}),M.register({notifications:q.notifications}),M}().getStore()},o.a.createElement(c.a,{basename:N(window.location.pathname)},o.a.createElement(C,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map