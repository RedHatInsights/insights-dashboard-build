(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1162:function(t,e,s){"use strict";var a=s(4),i=s.n(a),n=s(862),r=s.n(n),o={insert:"head",singleton:!1},c=i()(r.a,o);if(!r.a.locals||t.hot.invalidate){var l=r.a.locals;t.hot.accept(862,function(e){n=s(862),function(t,e,s){if(!t&&e||t&&!e)return!1;var a;for(a in t)if((!s||"default"!==a)&&t[a]!==e[a])return!1;for(a in e)if(!(s&&"default"===a||t[a]))return!1;return!0}(l,(r=s.n(n)).a.locals,void 0)?(l=r.a.locals,c(r.a)):t.hot.invalidate()}.bind(this))}t.hot.dispose((function(){c()}));r.a.locals},1163:function(t,e,s){var a={"./af":917,"./af.js":917,"./ar":918,"./ar-dz":919,"./ar-dz.js":919,"./ar-kw":920,"./ar-kw.js":920,"./ar-ly":921,"./ar-ly.js":921,"./ar-ma":922,"./ar-ma.js":922,"./ar-sa":923,"./ar-sa.js":923,"./ar-tn":924,"./ar-tn.js":924,"./ar.js":918,"./az":925,"./az.js":925,"./be":926,"./be.js":926,"./bg":927,"./bg.js":927,"./bm":928,"./bm.js":928,"./bn":929,"./bn-bd":930,"./bn-bd.js":930,"./bn.js":929,"./bo":931,"./bo.js":931,"./br":932,"./br.js":932,"./bs":933,"./bs.js":933,"./ca":934,"./ca.js":934,"./cs":935,"./cs.js":935,"./cv":936,"./cv.js":936,"./cy":937,"./cy.js":937,"./da":938,"./da.js":938,"./de":939,"./de-at":940,"./de-at.js":940,"./de-ch":941,"./de-ch.js":941,"./de.js":939,"./dv":942,"./dv.js":942,"./el":943,"./el.js":943,"./en-au":944,"./en-au.js":944,"./en-ca":945,"./en-ca.js":945,"./en-gb":946,"./en-gb.js":946,"./en-ie":947,"./en-ie.js":947,"./en-il":948,"./en-il.js":948,"./en-in":949,"./en-in.js":949,"./en-nz":950,"./en-nz.js":950,"./en-sg":951,"./en-sg.js":951,"./eo":952,"./eo.js":952,"./es":953,"./es-do":954,"./es-do.js":954,"./es-mx":955,"./es-mx.js":955,"./es-us":956,"./es-us.js":956,"./es.js":953,"./et":957,"./et.js":957,"./eu":958,"./eu.js":958,"./fa":959,"./fa.js":959,"./fi":960,"./fi.js":960,"./fil":961,"./fil.js":961,"./fo":962,"./fo.js":962,"./fr":963,"./fr-ca":964,"./fr-ca.js":964,"./fr-ch":965,"./fr-ch.js":965,"./fr.js":963,"./fy":966,"./fy.js":966,"./ga":967,"./ga.js":967,"./gd":968,"./gd.js":968,"./gl":969,"./gl.js":969,"./gom-deva":970,"./gom-deva.js":970,"./gom-latn":971,"./gom-latn.js":971,"./gu":972,"./gu.js":972,"./he":973,"./he.js":973,"./hi":974,"./hi.js":974,"./hr":975,"./hr.js":975,"./hu":976,"./hu.js":976,"./hy-am":977,"./hy-am.js":977,"./id":978,"./id.js":978,"./is":979,"./is.js":979,"./it":980,"./it-ch":981,"./it-ch.js":981,"./it.js":980,"./ja":982,"./ja.js":982,"./jv":983,"./jv.js":983,"./ka":984,"./ka.js":984,"./kk":985,"./kk.js":985,"./km":986,"./km.js":986,"./kn":987,"./kn.js":987,"./ko":988,"./ko.js":988,"./ku":989,"./ku.js":989,"./ky":990,"./ky.js":990,"./lb":991,"./lb.js":991,"./lo":992,"./lo.js":992,"./lt":993,"./lt.js":993,"./lv":994,"./lv.js":994,"./me":995,"./me.js":995,"./mi":996,"./mi.js":996,"./mk":997,"./mk.js":997,"./ml":998,"./ml.js":998,"./mn":999,"./mn.js":999,"./mr":1e3,"./mr.js":1e3,"./ms":1001,"./ms-my":1002,"./ms-my.js":1002,"./ms.js":1001,"./mt":1003,"./mt.js":1003,"./my":1004,"./my.js":1004,"./nb":1005,"./nb.js":1005,"./ne":1006,"./ne.js":1006,"./nl":1007,"./nl-be":1008,"./nl-be.js":1008,"./nl.js":1007,"./nn":1009,"./nn.js":1009,"./oc-lnc":1010,"./oc-lnc.js":1010,"./pa-in":1011,"./pa-in.js":1011,"./pl":1012,"./pl.js":1012,"./pt":1013,"./pt-br":1014,"./pt-br.js":1014,"./pt.js":1013,"./ro":1015,"./ro.js":1015,"./ru":1016,"./ru.js":1016,"./sd":1017,"./sd.js":1017,"./se":1018,"./se.js":1018,"./si":1019,"./si.js":1019,"./sk":1020,"./sk.js":1020,"./sl":1021,"./sl.js":1021,"./sq":1022,"./sq.js":1022,"./sr":1023,"./sr-cyrl":1024,"./sr-cyrl.js":1024,"./sr.js":1023,"./ss":1025,"./ss.js":1025,"./sv":1026,"./sv.js":1026,"./sw":1027,"./sw.js":1027,"./ta":1028,"./ta.js":1028,"./te":1029,"./te.js":1029,"./tet":1030,"./tet.js":1030,"./tg":1031,"./tg.js":1031,"./th":1032,"./th.js":1032,"./tk":1033,"./tk.js":1033,"./tl-ph":1034,"./tl-ph.js":1034,"./tlh":1035,"./tlh.js":1035,"./tr":1036,"./tr.js":1036,"./tzl":1037,"./tzl.js":1037,"./tzm":1038,"./tzm-latn":1039,"./tzm-latn.js":1039,"./tzm.js":1038,"./ug-cn":1040,"./ug-cn.js":1040,"./uk":1041,"./uk.js":1041,"./ur":1042,"./ur.js":1042,"./uz":1043,"./uz-latn":1044,"./uz-latn.js":1044,"./uz.js":1043,"./vi":1045,"./vi.js":1045,"./x-pseudo":1046,"./x-pseudo.js":1046,"./yo":1047,"./yo.js":1047,"./zh-cn":1048,"./zh-cn.js":1048,"./zh-hk":1049,"./zh-hk.js":1049,"./zh-mo":1050,"./zh-mo.js":1050,"./zh-tw":1051,"./zh-tw.js":1051};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=1163},1164:function(t,e,s){"use strict";var a=s(4),i=s.n(a),n=s(863),r=s.n(n),o={insert:"head",singleton:!1},c=i()(r.a,o);if(!r.a.locals||t.hot.invalidate){var l=r.a.locals;t.hot.accept(863,function(e){n=s(863),function(t,e,s){if(!t&&e||t&&!e)return!1;var a;for(a in t)if((!s||"default"!==a)&&t[a]!==e[a])return!1;for(a in e)if(!(s&&"default"===a||t[a]))return!1;return!0}(l,(r=s.n(n)).a.locals,void 0)?(l=r.a.locals,c(r.a)):t.hot.invalidate()}.bind(this))}t.hot.dispose((function(){c()}));r.a.locals},1184:function(t,e,s){"use strict";s.r(e);var a=s(246),i=s.n(a),n=(s(1162),s(297)),r=s(421),o=s(433),c={CORES:"cores",DATE:"date",SOCKETS:"sockets",HAS_DATA:"has_data",HAS_INFINITE:"has_infinite_quantity"},l="code",u="SUBSCRIPTIONS1004",d="RHEL",p="OpenShift Container Platform",f="daily",j="/subscriptions",m="/subscriptions/rhel-sw",b="/subscriptions/openshift-sw",g=s(1),h=s.n(g),v=s(781),y=s(503),z=s(784),O=s.n(z),E=s(763),k=s.n(E);function S(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function P(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?S(Object(s),!0).forEach((function(e){O()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):S(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t.map((function(t){var s={};return(Array.isArray(t)&&t||Object.values(t)).forEach((function(t){s[t]=e})),s}))},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2?arguments[2]:void 0,a=t.reverse(),n=e.reverse(),r={},o=null,l=w([c]),u=i()(l,1),d=u[0],p=void 0===d?{}:d,f=a.find((function(t,e){return o=e,!0===t[c.HAS_DATA]}));if(f){var j=f[c.DATE];(r={date:j,report:P(P({},p),f),capacity:P(P({},p),n[o]),percentage:void 0}).report=r.report[s],r.capacity=r.capacity[c.HAS_INFINITE]?null:r.capacity[s];var m=null===r.capacity?null:(r.report||0)/(r.capacity||0)*100;Number.isNaN(m)&&(m=0),m===1/0&&(m=void 0),"number"==typeof m&&(m=Math.ceil(m)),r.percentage=m}return r},U=s(782),D=s(392),_=s(508),M=s(779),N=s(810),I=s(45),F=s.n(I),A=s(789),x=s(18),C=s.n(x),R=s(732),Y=(s(1164),function(t){var e=t.distance,s=t.label,a=t.value,i=t.title,n=t.variant;return h.a.createElement(R.Progress,{distance:e,label:s,value:a,title:i,size:R.ProgressSize.sm,variant:"danger"===n&&R.ProgressVariant.danger})});Y.propTypes={distance:C.a.number,label:C.a.string,value:C.a.number,title:C.a.string,variant:C.a.string};var B=s(210),H=s(765),L=s(424),q=function(t){var e=t.subscriptionsUtilizedProductOne,s=t.subscriptionsUtilizedProductOneFetch,a=t.subscriptionsUtilizedProductOneFetchStatus,n=t.subscriptionsUtilizedProductTwo,z=t.subscriptionsUtilizedProductTwoFetch,O=t.subscriptionsUtilizedProductTwoFetchStatus,E=t.workloads,S=t.selectedTags,P=t.SID,w=Object(g.useState)([]),I=i()(w,2),x=I[0],C=I[1],R=Object(L.a)();Object(g.useEffect)((function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days";return{startDate:k.a.utc(t).startOf(s).subtract(e,s).toDate(),endDate:k.a.utc(t).startOf(s).endOf("days").toDate()}}(),e=t.startDate,a=t.endDate,i={granularity:f,beginning:e.toISOString(),ending:a.toISOString()};s(p,i),z(d,i)}),[s,z]),Object(g.useEffect)((function(){var t={productError:!1,productOptIn:!1,productOne:{},productTwo:{}};if("fulfilled"===a||"fulfilled"===O){var s=F.a.asMutable(e,{deep:!0})||[],r=i()(s,2),o=r[0],d=void 0===o?{}:o,p=r[1],f=void 0===p?{}:p,j=F.a.asMutable(n,{deep:!0})||[],m=i()(j,2),b=m[0],g=void 0===b?{}:b,h=m[1],v=void 0===h?{}:h;t.productOne=T(d.data,f.data,c.CORES),t.productTwo=T(g.data,v.data,c.SOCKETS)}if("rejected"===a&&"rejected"===O){var y,z,E=(null===(y=e.data)||void 0===y?void 0:y.errors)||[],k=i()(E,1)[0],S=void 0===k?{}:k,P=(null===(z=e.data)||void 0===z?void 0:z.errors)||[],w=i()(P,1)[0],U=void 0===w?{}:w;t.productError=!0,t.productOptIn=S[l]===u&&U[l]===u}C(t)}),[e,n,a,O]);var B=x.productError,q=x.productOptIn,J=x.productOne,K=void 0===J?{}:J,V=x.productTwo,G=void 0===V?{}:V,Q=h.a.createElement("ul",null,h.a.createElement("li",null,R.formatMessage(H.a.subscriptionsUtilizedProductTwoReport,{totalReport:G.report})),h.a.createElement("li",null,R.formatMessage(H.a.subscriptionsUtilizedProductCapacity,{totalCapacity:G.capacity})),h.a.createElement("li",null,R.formatMessage(H.a.subscriptionsUtilizedProductDate,{formattedDate:k.a.utc(G.date).format("MMM D, YYYY")}))),W=h.a.createElement("ul",null,h.a.createElement("li",null,R.formatMessage(H.a.subscriptionsUtilizedProductOneReport,{totalReport:K.report})),h.a.createElement("li",null,R.formatMessage(H.a.subscriptionsUtilizedProductCapacity,{totalCapacity:K.capacity})),h.a.createElement("li",null,R.formatMessage(H.a.subscriptionsUtilizedProductDate,{formattedDate:k.a.utc(K.date).format("MMM D, YYYY")}))),X=[],Z=function(t){var e=t.fetchStatus,s=t.percentage,a=t.title,i=t.tooltip,n=t.link;switch(e){case"pending":X.push(h.a.createElement(A.a,{key:"su-loading-".concat(a)}));break;case"fulfilled":null!=s&&X.push(h.a.createElement(y.Tooltip,{key:"su-tooltip-".concat(a),content:i,position:y.TooltipPosition.top,distance:-10,entryDelay:200},h.a.createElement(D.Button,{className:"ins-c-subscriptions-utilized__chart-link",variant:"link",href:n,component:"a"},h.a.createElement(Y,{title:a,value:s,label:"".concat(s,"%"),variant:s>100?"danger":"info"}))))}};return Z({fetchStatus:O,percentage:G.percentage,title:R.formatMessage(H.a.subscriptionsUtilizedProductTwoTitle),tooltip:Q,link:m}),Z({fetchStatus:a,percentage:K.percentage,title:R.formatMessage(H.a.subscriptionsUtilizedProductOneTitle),tooltip:W,link:b}),K.percentage>G.percentage&&K.percentage>100&&X.reverse(),h.a.createElement(v.a,{appName:"SubscriptionsUtilized"},h.a.createElement(v.c,{subtitle:R.formatMessage(H.a.subscriptionsUtilizedTitle)}),h.a.createElement(v.b,null,Object(U.c)(S,E,P)?h.a.createElement(h.a.Fragment,null,q&&h.a.createElement(r.a,{className:"ins-c-subscriptions-utilized__empty-state",variant:r.b.full},h.a.createElement(o.a,null,R.formatMessage(H.a.subscriptionsUtilizedLearnMore)),h.a.createElement(_.EmptyStateSecondaryActions,null,h.a.createElement(D.Button,{className:"ins-c-subscriptions-utilized__app-link",variant:"link",href:j,component:"a"},R.formatMessage(H.a.subscriptionsUtilizedLearnMoreAction))))||B&&h.a.createElement(M.a,{appName:R.formatMessage(H.a.subscriptionsUtilizedTitle),isSmall:!0})||!X.length&&h.a.createElement(r.a,{className:"ins-c-subscriptions-utilized__empty-state",variant:r.b.full},h.a.createElement(o.a,null,R.formatMessage(H.a.subscriptionsUtilizedNoProductData)))||X):h.a.createElement(N.a,{href:j,title:R.formatMessage(H.a.filterNotApplicable),appName:R.formatMessage(H.a.subscriptionsTitle)})))};q.propTypes={intl:C.a.any,subscriptionsUtilizedProductOne:C.a.array,subscriptionsUtilizedProductOneFetch:C.a.func,subscriptionsUtilizedProductOneFetchStatus:C.a.string,subscriptionsUtilizedProductTwo:C.a.array,subscriptionsUtilizedProductTwoFetch:C.a.func,subscriptionsUtilizedProductTwoFetchStatus:C.a.string,selectedTags:C.a.array,workloads:U.d,SID:C.a.arrayOf(C.a.string)};e.default=Object(B.connect)((function(t){var e=t.DashboardStore;return{subscriptionsUtilizedProductOne:e.subscriptionsUtilizedProductOne,subscriptionsUtilizedProductOneFetchStatus:e.subscriptionsUtilizedProductOneFetchStatus,subscriptionsUtilizedProductTwo:e.subscriptionsUtilizedProductTwo,subscriptionsUtilizedProductTwoFetchStatus:e.subscriptionsUtilizedProductTwoFetchStatus,selectedTags:e.selectedTags,workloads:e.workloads,SID:e.SID}}),(function(t){return{subscriptionsUtilizedProductOneFetch:function(e,s){return t(n.r(e,s))},subscriptionsUtilizedProductTwoFetch:function(e,s){return t(n.s(e,s))}}}))(q)},777:function(t,e,s){(e=s(7)(!1)).push([t.i,".fontSizeOverride{font-size:30px}\n",""]),t.exports=e},810:function(t,e,s){"use strict";s(811);var a=s(706),i=s(392),n=s(18),r=s.n(n),o=s(1),c=s.n(o),l=s(248),u=s(499),d=s(765),p=s(424),f=function(t){var e=t.href,s=t.title,n=t.appName,r=Object(p.a)();return c.a.createElement(a.EmptyState,null,c.a.createElement(a.EmptyStateIcon,{className:"fontSizeOverride",icon:l.c}),c.a.createElement(u.Title,{headingLevel:"h4",size:"md"},s," "),c.a.createElement(a.EmptyStateBody,null,r.formatMessage("Vulnerability"!==n?d.a.functionalityNotSupported:d.a.filteredResultsInApp,{appname:c.a.createElement(i.Button,{component:"a",href:e,variant:"link",isInline:!0},n)})))};f.propTypes={appName:r.a.string,href:r.a.string,title:r.a.string},e.a=f},811:function(t,e,s){"use strict";var a=s(4),i=s.n(a),n=s(777),r=s.n(n),o={insert:"head",singleton:!1},c=i()(r.a,o);if(!r.a.locals||t.hot.invalidate){var l=r.a.locals;t.hot.accept(777,function(e){n=s(777),function(t,e,s){if(!t&&e||t&&!e)return!1;var a;for(a in t)if((!s||"default"!==a)&&t[a]!==e[a])return!1;for(a in e)if(!(s&&"default"===a||t[a]))return!1;return!0}(l,(r=s.n(n)).a.locals,void 0)?(l=r.a.locals,c(r.a)):t.hot.invalidate()}.bind(this))}t.hot.dispose((function(){c()}));r.a.locals},862:function(t,e,s){(e=s(7)(!1)).push([t.i,".ins-c-subscriptions-utilized__app-link{padding-left:0}.ins-c-subscriptions-utilized__chart-link{padding-left:0;padding-right:0}.ins-c-subscriptions-utilized__chart-link .pf-c-progress{color:inherit}.ins-c-subscriptions-utilized__empty-state.pf-c-empty-state{padding:0;text-align:left}.ins-c-subscriptions-utilized__empty-state .pf-c-empty-state__secondary{justify-content:inherit;margin-top:var(--pf-global--spacer--md);text-align:left}\n",""]),t.exports=e},863:function(t,e,s){(e=s(7)(!1)).push([t.i,".pf-c-progress{grid-gap:var(--pf-global--spacer--xs)}\n",""]),t.exports=e}}]);
//# sourceMappingURL=15.08a45f32962a272d5ccb.js.map