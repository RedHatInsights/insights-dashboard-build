(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1153:function(t,e,s){var i={"./af":927,"./af.js":927,"./ar":928,"./ar-dz":929,"./ar-dz.js":929,"./ar-kw":930,"./ar-kw.js":930,"./ar-ly":931,"./ar-ly.js":931,"./ar-ma":932,"./ar-ma.js":932,"./ar-sa":933,"./ar-sa.js":933,"./ar-tn":934,"./ar-tn.js":934,"./ar.js":928,"./az":935,"./az.js":935,"./be":936,"./be.js":936,"./bg":937,"./bg.js":937,"./bm":938,"./bm.js":938,"./bn":939,"./bn.js":939,"./bo":940,"./bo.js":940,"./br":941,"./br.js":941,"./bs":942,"./bs.js":942,"./ca":943,"./ca.js":943,"./cs":944,"./cs.js":944,"./cv":945,"./cv.js":945,"./cy":946,"./cy.js":946,"./da":947,"./da.js":947,"./de":948,"./de-at":949,"./de-at.js":949,"./de-ch":950,"./de-ch.js":950,"./de.js":948,"./dv":951,"./dv.js":951,"./el":952,"./el.js":952,"./en-au":953,"./en-au.js":953,"./en-ca":954,"./en-ca.js":954,"./en-gb":955,"./en-gb.js":955,"./en-ie":956,"./en-ie.js":956,"./en-il":957,"./en-il.js":957,"./en-in":958,"./en-in.js":958,"./en-nz":959,"./en-nz.js":959,"./en-sg":960,"./en-sg.js":960,"./eo":961,"./eo.js":961,"./es":962,"./es-do":963,"./es-do.js":963,"./es-us":964,"./es-us.js":964,"./es.js":962,"./et":965,"./et.js":965,"./eu":966,"./eu.js":966,"./fa":967,"./fa.js":967,"./fi":968,"./fi.js":968,"./fil":969,"./fil.js":969,"./fo":970,"./fo.js":970,"./fr":971,"./fr-ca":972,"./fr-ca.js":972,"./fr-ch":973,"./fr-ch.js":973,"./fr.js":971,"./fy":974,"./fy.js":974,"./ga":975,"./ga.js":975,"./gd":976,"./gd.js":976,"./gl":977,"./gl.js":977,"./gom-deva":978,"./gom-deva.js":978,"./gom-latn":979,"./gom-latn.js":979,"./gu":980,"./gu.js":980,"./he":981,"./he.js":981,"./hi":982,"./hi.js":982,"./hr":983,"./hr.js":983,"./hu":984,"./hu.js":984,"./hy-am":985,"./hy-am.js":985,"./id":986,"./id.js":986,"./is":987,"./is.js":987,"./it":988,"./it-ch":989,"./it-ch.js":989,"./it.js":988,"./ja":990,"./ja.js":990,"./jv":991,"./jv.js":991,"./ka":992,"./ka.js":992,"./kk":993,"./kk.js":993,"./km":994,"./km.js":994,"./kn":995,"./kn.js":995,"./ko":996,"./ko.js":996,"./ku":997,"./ku.js":997,"./ky":998,"./ky.js":998,"./lb":999,"./lb.js":999,"./lo":1e3,"./lo.js":1e3,"./lt":1001,"./lt.js":1001,"./lv":1002,"./lv.js":1002,"./me":1003,"./me.js":1003,"./mi":1004,"./mi.js":1004,"./mk":1005,"./mk.js":1005,"./ml":1006,"./ml.js":1006,"./mn":1007,"./mn.js":1007,"./mr":1008,"./mr.js":1008,"./ms":1009,"./ms-my":1010,"./ms-my.js":1010,"./ms.js":1009,"./mt":1011,"./mt.js":1011,"./my":1012,"./my.js":1012,"./nb":1013,"./nb.js":1013,"./ne":1014,"./ne.js":1014,"./nl":1015,"./nl-be":1016,"./nl-be.js":1016,"./nl.js":1015,"./nn":1017,"./nn.js":1017,"./oc-lnc":1018,"./oc-lnc.js":1018,"./pa-in":1019,"./pa-in.js":1019,"./pl":1020,"./pl.js":1020,"./pt":1021,"./pt-br":1022,"./pt-br.js":1022,"./pt.js":1021,"./ro":1023,"./ro.js":1023,"./ru":1024,"./ru.js":1024,"./sd":1025,"./sd.js":1025,"./se":1026,"./se.js":1026,"./si":1027,"./si.js":1027,"./sk":1028,"./sk.js":1028,"./sl":1029,"./sl.js":1029,"./sq":1030,"./sq.js":1030,"./sr":1031,"./sr-cyrl":1032,"./sr-cyrl.js":1032,"./sr.js":1031,"./ss":1033,"./ss.js":1033,"./sv":1034,"./sv.js":1034,"./sw":1035,"./sw.js":1035,"./ta":1036,"./ta.js":1036,"./te":1037,"./te.js":1037,"./tet":1038,"./tet.js":1038,"./tg":1039,"./tg.js":1039,"./th":1040,"./th.js":1040,"./tk":1041,"./tk.js":1041,"./tl-ph":1042,"./tl-ph.js":1042,"./tlh":1043,"./tlh.js":1043,"./tr":1044,"./tr.js":1044,"./tzl":1045,"./tzl.js":1045,"./tzm":1046,"./tzm-latn":1047,"./tzm-latn.js":1047,"./tzm.js":1046,"./ug-cn":1048,"./ug-cn.js":1048,"./uk":1049,"./uk.js":1049,"./ur":1050,"./ur.js":1050,"./uz":1051,"./uz-latn":1052,"./uz-latn.js":1052,"./uz.js":1051,"./vi":1053,"./vi.js":1053,"./x-pseudo":1054,"./x-pseudo.js":1054,"./yo":1055,"./yo.js":1055,"./zh-cn":1056,"./zh-cn.js":1056,"./zh-hk":1057,"./zh-hk.js":1057,"./zh-mo":1058,"./zh-mo.js":1058,"./zh-tw":1059,"./zh-tw.js":1059};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id=1153},1154:function(t,e,s){var i=s(10),a=s(893);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var r={insert:"head",singleton:!1},n=i(a,r);if(!a.locals||t.hot.invalidate){var o=a.locals;t.hot.accept(893,(function(){"string"==typeof(a=(a=s(893)).__esModule?a.default:a)&&(a=[[t.i,a,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var s;for(s in t)if(t[s]!==e[s])return!1;for(s in e)if(!t[s])return!1;return!0}(o,a.locals)?(o=a.locals,n(a)):t.hot.invalidate()}))}t.hot.dispose((function(){n()})),t.exports=a.locals||{}},1155:function(t,e,s){var i=s(10),a=s(894);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var r={insert:"head",singleton:!1},n=i(a,r);if(!a.locals||t.hot.invalidate){var o=a.locals;t.hot.accept(894,(function(){"string"==typeof(a=(a=s(894)).__esModule?a.default:a)&&(a=[[t.i,a,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var s;for(s in t)if(t[s]!==e[s])return!1;for(s in e)if(!t[s])return!1;return!0}(o,a.locals)?(o=a.locals,n(a)):t.hot.invalidate()}))}t.hot.dispose((function(){n()})),t.exports=a.locals||{}},1171:function(t,e,s){"use strict";s.r(e);var i=s(111),a=s.n(i),r=s(0),n=s.n(r),o=s(47),c=s.n(o),l=s(737),u=s.n(l),d=s(17),p=s.n(d),j=s(125),f=s(145),m=s(146),b=s(450),g=s(71),h=s(110),v=s(758),y=s(784),z=s(705),O=(s(1154),function(t){var e=t.distance,s=t.label,i=t.value,a=t.title,r=t.variant;return n.a.createElement(z.Progress,{distance:e,label:s,value:i,title:a,size:z.ProgressSize.sm,variant:"danger"===r&&z.ProgressVariant.danger})});O.propTypes={distance:c.a.number,label:c.a.string,value:c.a.number,title:c.a.string,variant:c.a.string};var E=s(378),k=s(748),P=s(754),S=s(842),w=s.n(S),U={CORES:"cores",DATE:"date",SOCKETS:"sockets",HAS_DATA:"has_data",HAS_INFINITE:"has_infinite_quantity"},_="code",T="SUBSCRIPTIONS1004",M="RHEL",D="OpenShift Container Platform",F="daily",N="/subscriptions",A="/subscriptions/rhel-sw",I="/subscriptions/openshift-sw";function C(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function x(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?C(Object(s),!0).forEach((function(e){w()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):C(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t.map((function(t){var s={};return(Array.isArray(t)&&t||Object.values(t)).forEach((function(t){s[t]=e})),s}))},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2?arguments[2]:void 0,i=t.reverse(),r=e.reverse(),n={},o=null,c=R([U]),l=a()(c,1),u=l[0],d=void 0===u?{}:u,p=i.find((function(t,e){return o=e,!0===t[U.HAS_DATA]}));if(p){var j=p[U.DATE];(n={date:j,report:x(x({},d),p),capacity:x(x({},d),r[o]),percentage:void 0}).report=n.report[s],n.capacity=n.capacity[U.HAS_INFINITE]?null:n.capacity[s];var f=null===n.capacity?null:(n.report||0)/(n.capacity||0)*100;Number.isNaN(f)&&(f=0),f===1/0&&(f=void 0),"number"==typeof f&&(f=Math.ceil(f)),n.percentage=f}return n},B=s(755),H=(s(1155),function(t){var e=t.subscriptionsUtilizedProductOne,s=t.subscriptionsUtilizedProductOneFetch,i=t.subscriptionsUtilizedProductOneFetchStatus,o=t.subscriptionsUtilizedProductTwo,c=t.subscriptionsUtilizedProductTwoFetch,l=t.subscriptionsUtilizedProductTwoFetchStatus,d=Object(r.useState)([]),h=a()(d,2),z=h[0],P=h[1],S=Object(E.a)();Object(r.useEffect)((function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days";return{startDate:u.a.utc(t).startOf(s).subtract(e,s).toDate(),endDate:u.a.utc(t).startOf(s).endOf("days").toDate()}}(),e=t.startDate,i=t.endDate,a={granularity:F,beginning:e.toISOString(),ending:i.toISOString()};s(D,a),c(M,a)}),[s,c]),Object(r.useEffect)((function(){var t={productError:!1,productOptIn:!1,productOne:{},productTwo:{}};if("fulfilled"===i||"fulfilled"===l){var s=p.a.asMutable(e,{deep:!0})||[],r=a()(s,2),n=r[0],c=void 0===n?{}:n,u=r[1],d=void 0===u?{}:u,j=p.a.asMutable(o,{deep:!0})||[],f=a()(j,2),m=f[0],b=void 0===m?{}:m,g=f[1],h=void 0===g?{}:g;t.productOne=Y(c.data,d.data,U.CORES),t.productTwo=Y(b.data,h.data,U.SOCKETS)}if("rejected"===i&&"rejected"===l){var v,y,z=(null===(v=e.data)||void 0===v?void 0:v.errors)||[],O=a()(z,1)[0],E=void 0===O?{}:O,k=(null===(y=e.data)||void 0===y?void 0:y.errors)||[],S=a()(k,1)[0],w=void 0===S?{}:S;t.productError=!0,t.productOptIn=E[_]===T&&w[_]===T}P(t)}),[e,o,i,l]);var w=z.productError,C=z.productOptIn,x=z.productOne,R=void 0===x?{}:x,H=z.productTwo,L=void 0===H?{}:H,q=n.a.createElement("ul",null,n.a.createElement("li",null,S.formatMessage(k.a.subscriptionsUtilizedProductTwoReport,{totalReport:L.report})),n.a.createElement("li",null,S.formatMessage(k.a.subscriptionsUtilizedProductCapacity,{totalCapacity:L.capacity})),n.a.createElement("li",null,S.formatMessage(k.a.subscriptionsUtilizedProductDate,{formattedDate:u.a.utc(L.date).format("MMM D, YYYY")}))),V=n.a.createElement("ul",null,n.a.createElement("li",null,S.formatMessage(k.a.subscriptionsUtilizedProductOneReport,{totalReport:R.report})),n.a.createElement("li",null,S.formatMessage(k.a.subscriptionsUtilizedProductCapacity,{totalCapacity:R.capacity})),n.a.createElement("li",null,S.formatMessage(k.a.subscriptionsUtilizedProductDate,{formattedDate:u.a.utc(R.date).format("MMM D, YYYY")}))),J=[],K=function(t){var e=t.fetchStatus,s=t.percentage,i=t.title,a=t.tooltip,r=t.link;switch(e){case"pending":J.push(n.a.createElement(y.a,{key:"su-loading-".concat(i)}));break;case"fulfilled":null!=s&&J.push(n.a.createElement(g.Tooltip,{key:"su-tooltip-".concat(i),content:a,position:g.TooltipPosition.top,distance:-10,entryDelay:200},n.a.createElement(j.Button,{className:"ins-c-subscriptions-utilized__chart-link",variant:"link",href:r,component:"a"},n.a.createElement(O,{title:i,value:s,label:"".concat(s,"%"),variant:s>100?"danger":"info"}))))}};return K({fetchStatus:l,percentage:L.percentage,title:S.formatMessage(k.a.subscriptionsUtilizedProductTwoTitle),tooltip:q,link:A}),K({fetchStatus:i,percentage:R.percentage,title:S.formatMessage(k.a.subscriptionsUtilizedProductOneTitle),tooltip:V,link:I}),R.percentage>L.percentage&&R.percentage>100&&J.reverse(),n.a.createElement(v.a,{appName:"SubscriptionsUtilized"},n.a.createElement(v.c,{subtitle:S.formatMessage(k.a.subscriptionsUtilizedTitle)}),n.a.createElement(v.b,null,C&&n.a.createElement(f.EmptyState,{className:"ins-c-subscriptions-utilized__empty-state",variant:f.EmptyStateVariant.full},n.a.createElement(m.EmptyStateBody,null,S.formatMessage(k.a.subscriptionsUtilizedLearnMore)),n.a.createElement(b.EmptyStateSecondaryActions,null,n.a.createElement(j.Button,{className:"ins-c-subscriptions-utilized__app-link",variant:"link",href:N,component:"a"},S.formatMessage(k.a.subscriptionsUtilizedLearnMoreAction))))||w&&n.a.createElement(B.a,{appName:S.formatMessage(k.a.subscriptionsUtilizedTitle),isSmall:!0})||!J.length&&n.a.createElement(f.EmptyState,{className:"ins-c-subscriptions-utilized__empty-state",variant:f.EmptyStateVariant.full},n.a.createElement(m.EmptyStateBody,null,S.formatMessage(k.a.subscriptionsUtilizedNoProductData)))||J))});H.propTypes={intl:c.a.any,subscriptionsUtilizedProductOne:c.a.array,subscriptionsUtilizedProductOneFetch:c.a.func,subscriptionsUtilizedProductOneFetchStatus:c.a.string,subscriptionsUtilizedProductTwo:c.a.array,subscriptionsUtilizedProductTwoFetch:c.a.func,subscriptionsUtilizedProductTwoFetchStatus:c.a.string};e.default=Object(h.connect)((function(t){var e=t.DashboardStore;return{subscriptionsUtilizedProductOne:e.subscriptionsUtilizedProductOne,subscriptionsUtilizedProductOneFetchStatus:e.subscriptionsUtilizedProductOneFetchStatus,subscriptionsUtilizedProductTwo:e.subscriptionsUtilizedProductTwo,subscriptionsUtilizedProductTwoFetchStatus:e.subscriptionsUtilizedProductTwoFetchStatus}}),(function(t){return{subscriptionsUtilizedProductOneFetch:function(e,s){return t(P.o(e,s))},subscriptionsUtilizedProductTwoFetch:function(e,s){return t(P.p(e,s))}}}))(H)},893:function(t,e,s){(e=s(9)(!1)).push([t.i,".pf-c-progress{grid-gap:var(--pf-global--spacer--xs)}\n",""]),t.exports=e},894:function(t,e,s){(e=s(9)(!1)).push([t.i,".ins-c-subscriptions-utilized__app-link{padding-left:0}.ins-c-subscriptions-utilized__chart-link{padding-left:0;padding-right:0}.ins-c-subscriptions-utilized__chart-link .pf-c-progress{color:inherit}.ins-c-subscriptions-utilized__empty-state.pf-c-empty-state{padding:0;text-align:left}.ins-c-subscriptions-utilized__empty-state .pf-c-empty-state__secondary{justify-content:inherit;margin-top:var(--pf-global--spacer--md);text-align:left}\n",""]),t.exports=e}}]);
//# sourceMappingURL=20.js.map