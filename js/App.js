!function(e){function t(t){for(var r,a,s=t[0],o=t[1],i=t[2],c=0,l=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(k,a)&&k[a]&&l.push(k[a][0]),k[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(R&&R(t);l.length;)l.shift()();return T.push.apply(T,i||[]),n()}function n(){for(var e,t=0;t<T.length;t++){for(var n=T[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==k[s]&&(r=!1)}r&&(T.splice(t--,1),e=L(L.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===y&&D()}(e,t),r&&r(e,t)};var a,s=!0,o="ea453f101da714cefb4d",i={},c=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:S,apply:O,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:i[e]};return a=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,j,v=0,y=0,g={},b={},_={};function E(e){return+e+""===e?+e:e}function S(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return s=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=L.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;b={},g={},_=e.c,j=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},k)w(n);return"prepare"===p&&0===y&&0===v&&D(),t}));var t}function w(e){_[e]?(b[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function D(){f("ready");var e=m;if(m=null,e)if(s)Promise.resolve().then((function(){return O(s)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(E(n));e.resolve(t)}}function O(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,s,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((s=I[o])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var c=0;c<s.parents.length;c++){var l=s.parents[c],u=I[l];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),d(n[l],[o])):(delete n[l],t.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],y={},g=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var b in h)if(Object.prototype.hasOwnProperty.call(h,b)){var S;l=E(b);var w=!1,D=!1,O=!1,T="";switch((S=h[b]?u(l):{type:"disposed",moduleId:b}).chain&&(T="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+S.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(S),t.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(S),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(S),O=!0;break;default:throw new Error("Unexception type "+S.type)}if(w)return f("abort"),Promise.reject(w);if(D)for(l in y[l]=h[l],d(v,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,l)&&(m[l]||(m[l]=[]),d(m[l],S.outdatedDependencies[l]));O&&(d(v,[S.moduleId]),y[l]=g)}var P,F=[];for(r=0;r<v.length;r++)l=v[r],I[l]&&I[l].hot._selfAccepted&&y[l]!==g&&F.push({module:l,errorHandler:I[l].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete k[e]}(e)}));for(var x,R,C=v.slice();C.length>0;)if(l=C.pop(),s=I[l]){var A={},N=s.hot._disposeHandlers;for(a=0;a<N.length;a++)(n=N[a])(A);for(i[l]=A,s.hot.active=!1,delete I[l],delete m[l],a=0;a<s.children.length;a++){var z=I[s.children[a]];z&&((P=z.parents.indexOf(l))>=0&&z.parents.splice(P,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(s=I[l]))for(R=m[l],a=0;a<R.length;a++)x=R[a],(P=s.children.indexOf(x))>=0&&s.children.splice(P,1);for(l in f("apply"),o=j,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var H=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(s=I[l])){R=m[l];var M=[];for(r=0;r<R.length;r++)if(x=R[r],n=s.hot._acceptedDependencies[x]){if(-1!==M.indexOf(n))continue;M.push(n)}for(r=0;r<M.length;r++){n=M[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<F.length;r++){var U=F[r];l=U.module,c=[l];try{L(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||H||(H=e)}}return H?(f("fail"),Promise.reject(H)):(f("idle"),new Promise((function(e){e(v)})))}var I={},k={5:0},T=[];function L(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=I[e];if(!t)return L;var n=function(n){return t.hot.active?(I[n]?-1===I[n].parents.indexOf(e)&&I[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),L(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var s in L)Object.prototype.hasOwnProperty.call(L,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(n,s,r(s));return n.e=function(e){return"ready"===p&&f("prepare"),y++,L.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===p&&(g[e]||w(e),0===y&&0===v&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),L.t(e,-2&t)},n}(t)),n.l=!0,n.exports}L.e=function(e){var t=[],n=k[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=k[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,L.nc&&s.setAttribute("nonce",L.nc),s.src=function(e){return L.p+"js/"+({6:"Dashboard"}[e]||e)+".js"}(e);var o=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(i);var n=k[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}k[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},L.m=e,L.c=I,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="/beta/apps/dashboard/",L.oe=function(e){throw console.error(e),e},L.h=function(){return o};var P=window.webpackJsonp=window.webpackJsonp||[],F=P.push.bind(P);P.push=t,P=P.slice();for(var x=0;x<P.length;x++)t(P[x]);var R=F;T.push([629,7]),n()}({196:function(e,t,n){var r=n(7),a=n(510);(t=r(!1)).i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-summary .ins-m-green{color:var(--pf-global--palette--green-400)}.ins-c-summary .ins-m-red{color:var(--pf-global--palette--red-100)}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}\n",""]),e.exports=t},37:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"n",(function(){return p})),n.d(t,"j",(function(){return f})),n.d(t,"l",(function(){return m})),n.d(t,"o",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return y})),n.d(t,"e",(function(){return g})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return _}));var r=n(185),a=n(4),s=n.n(a),o="./rhel",i="COMPLIANCE_SUMMARY_FETCH",c="".concat("/api","/compliance/profiles"),l="/vulnerability/v1/vulnerabilities/cves",u="CRITICAL_VULNERABILITIES_FETCH",d="LATEST_VULNERABILITIES_FETCH",p="VULNERABILITIES_FETCH",f=r("".concat("/api").concat(l)).addSearch("cvss_from",8).toString(),m=r("".concat("/api").concat(l)).addSearch("show_all","true").addSearch("public_from",s()().subtract(7,"days").format("YYYY-MM-DD")).toString(),h=r("".concat("/api").concat(l)).addSearch("page_size",1).toString(),j="".concat("/api").concat("/insights/v1","/stats/rules/"),v="ADVISOR_STATS_REC_FETCH",y="".concat("/api").concat("/insights/v1","/stats/systems/"),g="ADVISOR_STATS_SYSTEMS_FETCH",b="ADVISOR_INCIDENTS_FETCH",_="".concat("/api","/insights/v1/rule/?impacting=true&reports_shown=true&sort=-publish_date&offset=0&limit=10&incident=true")},490:function(e){e.exports=JSON.parse('{"en":{"dashboardTitle":"Overview","subscriptionsUtilized":"Subscriptions utilized","recsImpactingSystems":"{totalRecs, plural, one {# recommendation} other {# recommendations}}  impacting {systems, plural, one {# system} other {# systems}}","incidentsDetected":"{incidents, plural, one {incident} other {incidents}} detected","critical":"Critical","important":"important","moderate":"moderate","low":"low","compliantHostCount":"{count, plural, one {# system} other {# systems}}","compliantScore":"{score}% passes","remediationsTotal":"{total} more remediations","vulnerabilitiesTotalItems":"{total}","latestVulnerabilitiesTotal":"{totalLatest}","complianceEmptyStateTitle":"No policies","complianceEmptyStateAction1":"Create a policy","complianceEmptyStateAction2":"Learn about OpenSCAP"}}')},509:function(e,t,n){var r=n(8),a=n(196);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1},o=r(a,s),i=a.locals?a.locals:{};a.locals||e.hot.accept(196,(function(){var t=n(196);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),o(t)})),e.hot.dispose((function(){o()})),e.exports=i},564:function(e,t,n){var r={"./af":321,"./af.js":321,"./ar":322,"./ar-dz":323,"./ar-dz.js":323,"./ar-kw":324,"./ar-kw.js":324,"./ar-ly":325,"./ar-ly.js":325,"./ar-ma":326,"./ar-ma.js":326,"./ar-sa":327,"./ar-sa.js":327,"./ar-tn":328,"./ar-tn.js":328,"./ar.js":322,"./az":329,"./az.js":329,"./be":330,"./be.js":330,"./bg":331,"./bg.js":331,"./bm":332,"./bm.js":332,"./bn":333,"./bn.js":333,"./bo":334,"./bo.js":334,"./br":335,"./br.js":335,"./bs":336,"./bs.js":336,"./ca":337,"./ca.js":337,"./cs":338,"./cs.js":338,"./cv":339,"./cv.js":339,"./cy":340,"./cy.js":340,"./da":341,"./da.js":341,"./de":342,"./de-at":343,"./de-at.js":343,"./de-ch":344,"./de-ch.js":344,"./de.js":342,"./dv":345,"./dv.js":345,"./el":346,"./el.js":346,"./en-SG":347,"./en-SG.js":347,"./en-au":348,"./en-au.js":348,"./en-ca":349,"./en-ca.js":349,"./en-gb":350,"./en-gb.js":350,"./en-ie":351,"./en-ie.js":351,"./en-il":352,"./en-il.js":352,"./en-nz":353,"./en-nz.js":353,"./eo":354,"./eo.js":354,"./es":355,"./es-do":356,"./es-do.js":356,"./es-us":357,"./es-us.js":357,"./es.js":355,"./et":358,"./et.js":358,"./eu":359,"./eu.js":359,"./fa":360,"./fa.js":360,"./fi":361,"./fi.js":361,"./fo":362,"./fo.js":362,"./fr":363,"./fr-ca":364,"./fr-ca.js":364,"./fr-ch":365,"./fr-ch.js":365,"./fr.js":363,"./fy":366,"./fy.js":366,"./ga":367,"./ga.js":367,"./gd":368,"./gd.js":368,"./gl":369,"./gl.js":369,"./gom-latn":370,"./gom-latn.js":370,"./gu":371,"./gu.js":371,"./he":372,"./he.js":372,"./hi":373,"./hi.js":373,"./hr":374,"./hr.js":374,"./hu":375,"./hu.js":375,"./hy-am":376,"./hy-am.js":376,"./id":377,"./id.js":377,"./is":378,"./is.js":378,"./it":379,"./it-ch":380,"./it-ch.js":380,"./it.js":379,"./ja":381,"./ja.js":381,"./jv":382,"./jv.js":382,"./ka":383,"./ka.js":383,"./kk":384,"./kk.js":384,"./km":385,"./km.js":385,"./kn":386,"./kn.js":386,"./ko":387,"./ko.js":387,"./ku":388,"./ku.js":388,"./ky":389,"./ky.js":389,"./lb":390,"./lb.js":390,"./lo":391,"./lo.js":391,"./lt":392,"./lt.js":392,"./lv":393,"./lv.js":393,"./me":394,"./me.js":394,"./mi":395,"./mi.js":395,"./mk":396,"./mk.js":396,"./ml":397,"./ml.js":397,"./mn":398,"./mn.js":398,"./mr":399,"./mr.js":399,"./ms":400,"./ms-my":401,"./ms-my.js":401,"./ms.js":400,"./mt":402,"./mt.js":402,"./my":403,"./my.js":403,"./nb":404,"./nb.js":404,"./ne":405,"./ne.js":405,"./nl":406,"./nl-be":407,"./nl-be.js":407,"./nl.js":406,"./nn":408,"./nn.js":408,"./pa-in":409,"./pa-in.js":409,"./pl":410,"./pl.js":410,"./pt":411,"./pt-br":412,"./pt-br.js":412,"./pt.js":411,"./ro":413,"./ro.js":413,"./ru":414,"./ru.js":414,"./sd":415,"./sd.js":415,"./se":416,"./se.js":416,"./si":417,"./si.js":417,"./sk":418,"./sk.js":418,"./sl":419,"./sl.js":419,"./sq":420,"./sq.js":420,"./sr":421,"./sr-cyrl":422,"./sr-cyrl.js":422,"./sr.js":421,"./ss":423,"./ss.js":423,"./sv":424,"./sv.js":424,"./sw":425,"./sw.js":425,"./ta":426,"./ta.js":426,"./te":427,"./te.js":427,"./tet":428,"./tet.js":428,"./tg":429,"./tg.js":429,"./th":430,"./th.js":430,"./tl-ph":431,"./tl-ph.js":431,"./tlh":432,"./tlh.js":432,"./tr":433,"./tr.js":433,"./tzl":434,"./tzl.js":434,"./tzm":435,"./tzm-latn":436,"./tzm-latn.js":436,"./tzm.js":435,"./ug-cn":437,"./ug-cn.js":437,"./uk":438,"./uk.js":438,"./ur":439,"./ur.js":439,"./uz":440,"./uz-latn":441,"./uz-latn.js":441,"./uz.js":440,"./vi":442,"./vi.js":442,"./x-pseudo":443,"./x-pseudo.js":443,"./yo":444,"./yo.js":444,"./zh-cn":445,"./zh-cn.js":445,"./zh-hk":446,"./zh-hk.js":446,"./zh-tw":447,"./zh-tw.js":447};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=564},629:function(e,t,n){"use strict";n.r(t);n(509);var r=n(2),a=n.n(r),s=n(1),o=n.n(s),i=n(298),c=n.n(i),l=n(300),u=n.n(l),d=n(104),p=n(277),f=n.n(p),m=n(309),h=n.n(m),j=n(301),v=n.n(j),y=n(302),g=n.n(y),b=n(303),_=n.n(b),E=n(190),S=n.n(E),w=n(304),D=n.n(w);function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I,k=(I=function(){return n.e(6).then(n.bind(null,1238))},function(e){D()(s,e);var t,n,r=(t=s,function(){var e,n=S()(t);if(O()){var r=S()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _()(this,e)});function s(e){var t;return v()(this,s),(t=r.call(this,e)).state={component:null},t}return g()(s,[{key:"componentDidMount",value:(n=h()(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,n=t.default,this.setState({component:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),s}(r.Component)),T=function(e){var t=e.component,n=e.rootClass,r=u()(e,["component","rootClass"]),s=document.getElementById("root");return s.removeAttribute("class"),s.classList.add("page__".concat(n),"pf-c-page__main"),s.setAttribute("role","main"),a.a.createElement(d.d,c()({},r,{component:t}))};T.propTypes={component:o.a.func,rootClass:o.a.string};var L=function(){return a.a.createElement(d.g,null,a.a.createElement(T,{exact:!0,path:"/",component:k,rootClass:"dashboard"}))},P=function(e){return Object(r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("dashboard")}),[]),a.a.createElement(L,{childProps:e})};P.propTypes={history:o.a.object};var F,x=P,R=n(475),C=n(149),A=n(155),N=n(28),z=n.n(N),H=n(193),M=n(491),U=n(37),V=n(89),J=n.n(V),G=J()({complianceSummary:{},complianceFetchStatus:"",criticalVulnerabilities:{},criticalVulnerabilitiesFetchStatus:"",latestVulnerabilities:{},latestVulnerabilitiesFetchStatus:"",advisorStatsRecs:{},advisorStatsRecsStatus:"",advisorStatsSystems:{},advisorStatsSystemsStatus:"",advisorIncidents:{},advisorIncidentsStatus:""}),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(U.g,"_PENDING"):return e.set("complianceFetchStatus","pending");case"".concat(U.g,"_FULFILLED"):return J.a.merge(e,{complianceSummary:t.payload,complianceFetchStatus:"fulfilled"});case"".concat(U.g,"_REJECTED"):return e.set("complianceFetchStatus","rejected");case"".concat(U.i,"_PENDING"):return e.set("criticalVulnerabilitiesFetchStatus","pending");case"".concat(U.i,"_FULFILLED"):return J.a.merge(e,{criticalVulnerabilities:t.payload,criticalVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(U.i,"_REJECTED"):return e.set("criticalVulnerabilitiesFetchStatus","rejected");case"".concat(U.k,"_PENDING"):return e.set("latestVulnerabilitiesFetchStatus","pending");case"".concat(U.k,"_FULFILLED"):return J.a.merge(e,{latestVulnerabilities:t.payload,latestVulnerabilitiesFetchStatus:"fulfilled"});case"".concat(U.k,"_REJECTED"):return e.set("latestVulnerabilitiesFetchStatus","rejected");case"".concat(U.n,"_PENDING"):return e.set("vulnerabilitiesFetchStatus","pending");case"".concat(U.n,"_FULFILLED"):return J.a.merge(e,{vulnerabilities:t.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(U.n,"_REJECTED"):return e.set("vulnerabilitiesFetchStatus","rejected");case"".concat(U.c,"_PENDING"):return e.set("advisorStatsRecsStatus","pending");case"".concat(U.c,"_FULFILLED"):return J.a.merge(e,{advisorStatsRecs:t.payload,advisorStatsRecsStatus:"fulfilled"});case"".concat(U.c,"_REJECTED"):return e.set("advisorStatsRecsStatus","rejected");case"".concat(U.e,"_PENDING"):return e.set("advisorStatsSystemsStatus","pending");case"".concat(U.e,"_FULFILLED"):return J.a.merge(e,{advisorStatsSystems:t.payload,advisorStatsSystemsStatus:"fulfilled"});case"".concat(U.e,"_REJECTED"):return e.set("advisorStatsSystemsStatus","rejected");case"".concat(U.a,"_PENDING"):return e.set("advisorIncidentsStatus","pending");case"".concat(U.a,"_FULFILLED"):return J.a.merge(e,{advisorIncidents:t.payload,advisorIncidentsStatus:"fulfilled"});case"".concat(U.a,"_REJECTED"):return e.set("advisorIncidentsStatus","rejected");default:return e}},B=n(177),Y=n(448),X=n(489),K=n(490),Q=document.getElementById("root");z.a.render(a.a.createElement(R.IntlProvider,{locale:navigator.language,messages:K,onError:console.log},a.a.createElement(A.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.b,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(F=Object(Y.getRegistry)({},[].concat(n,[X.a,Object(C.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({DashboardStore:q}),F.register({notifications:C.notifications}),F}().getStore()},a.a.createElement(H.BrowserRouter,{basename:Object(M.getBaseName)(window.location.pathname)},a.a.createElement(a.a.Fragment,null,a.a.createElement(C.NotificationsPortal,null),a.a.createElement(x,null))))),Q,(function(){return Q.setAttribute("data-ouia-safe",!0)}))}});
//# sourceMappingURL=App.js.map