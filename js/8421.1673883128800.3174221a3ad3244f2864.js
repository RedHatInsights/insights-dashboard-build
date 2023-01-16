(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[8421,5467,9477],{48320:(t,e,s)=>{"use strict";s.d(e,{Z:()=>b});var r=s(9947),n=s(38424),i=s(75106),a=s(47173),o=s(45697),c=s.n(o),l=s(93264),u=s.n(l),d=s(80810),p=s(38779),j=s(30893),m=s(86896),f=function(t){var e=t.href,s=t.title,o=t.appName,c=(0,m.Z)();return u().createElement(r.u,null,u().createElement(n.k,{className:"fontSizeOverride",icon:d.ZP}),u().createElement(p.D,{headingLevel:"h4",size:"md"},s," "),u().createElement(i.B,null,c.formatMessage("Vulnerability"!==o?j.Z.functionalityNotSupported:j.Z.filteredResultsInApp,{appname:u().createElement(a.zx,{component:"a",href:e,variant:"link",isInline:!0},o)})))};f.propTypes={appName:c().string,href:c().string,title:c().string};const b=f},52953:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>R});var r=s(70885),n=s(57149),i=s(9947),a=s(75106),o=s(59303),c={CORES:"cores",DATE:"date",SOCKETS:"sockets",HAS_DATA:"has_data",HAS_INFINITE:"has_infinite_quantity"},l="SUBSCRIPTIONS1004",u={APP:"".concat(o.Pu,"/subscriptions/rhel"),RHEL:"".concat(o.Pu,"/subscriptions/rhel"),OPENSHIFT:"".concat(o.wG,"/subscriptions/openshift-container")},d=s(93264),p=s.n(d),j=s(75824),m=s(4942),f=s(30381),b=s.n(f);function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(Object(s),!0).forEach((function(e){(0,m.Z)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t.map((function(t){var s={};return(Array.isArray(t)&&t||Object.values(t)).forEach((function(t){s[t]=e})),s}))},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2?arguments[2]:void 0,n=t.reverse(),i=e.reverse(),a={},o=null,l=v([c]),u=(0,r.Z)(l,1),d=u[0],p=void 0===d?{}:d,j=n.find((function(t,e){return o=e,!0===t[c.HAS_DATA]}));if(j){var m=j[c.DATE];(a={date:m,report:h(h({},p),j),capacity:h(h({},p),i[o]),percentage:void 0}).report=a.report[s],a.capacity=a.capacity[c.HAS_INFINITE]?null:a.capacity[s];var f=null===a.capacity?null:(a.report||0)/(a.capacity||0)*100;Number.isNaN(f)&&(f=0),f===1/0&&(f=void 0),"number"==typeof f&&(f=Math.ceil(f)),a.percentage=f}return a},y=s(98756),O=s(47173),E=s(35293),k=s(10358),P=s(37486),S=s(48320),w=s(33042),T=s.n(w),U=s(46891),D=s(59129),Z=s(36223),M=s(45697),N=s.n(M),I=function(t){var e=t.distance,s=t.label,r=t.value,n=t.title,i=t.variant;return p().createElement(D.E,{distance:e,label:s,value:r,title:n,size:D.L.sm,variant:"danger"===i&&Z.n9.danger})};I.propTypes={distance:N().number,label:N().string,value:N().number,title:N().string,variant:N().string};var _=s(66794),F=s(28216),A=s(30893),C=s(86896),x=function(t){var e=t.subscriptionsUtilizedProductOne,s=t.subscriptionsUtilizedProductOneFetch,n=t.subscriptionsUtilizedProductOneFetchStatus,o=t.subscriptionsUtilizedProductTwo,m=t.subscriptionsUtilizedProductTwoFetch,f=t.subscriptionsUtilizedProductTwoFetchStatus,g=t.workloads,h=t.selectedTags,v=t.SID,w=(0,d.useState)([]),D=(0,r.Z)(w,2),Z=D[0],M=D[1],N=(0,C.Z)();(0,d.useEffect)((function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days";return{startDate:b().utc(t).startOf(s).subtract(e,s).toDate(),endDate:b().utc(t).startOf(s).endOf("days").toDate()}}(),e=t.startDate,r=t.endDate,n={granularity:"daily",beginning:e.toISOString(),ending:r.toISOString()};s("OpenShift Container Platform",n),m("RHEL",n)}),[s,m]),(0,d.useEffect)((function(){var t={productError:!1,productOptIn:!1,productOne:{},productTwo:{}};if("fulfilled"===n||"fulfilled"===f){var s=T().asMutable(e,{deep:!0})||[],i=(0,r.Z)(s,2),a=i[0],u=void 0===a?{}:a,d=i[1],p=void 0===d?{}:d,j=T().asMutable(o,{deep:!0})||[],m=(0,r.Z)(j,2),b=m[0],g=void 0===b?{}:b,h=m[1],v=void 0===h?{}:h;t.productOne=z(u.data,p.data,c.CORES),t.productTwo=z(g.data,v.data,c.SOCKETS)}if("rejected"===n&&"rejected"===f){var y,O,E=(null===(y=e.data)||void 0===y?void 0:y.errors)||[],k=(0,r.Z)(E,1)[0],P=void 0===k?{}:k,S=(null===(O=e.data)||void 0===O?void 0:O.errors)||[],w=(0,r.Z)(S,1)[0],U=void 0===w?{}:w;t.productError=!0,t.productOptIn=P.code===l&&U.code===l}M(t)}),[e,o,n,f]);var F=Z.productError,x=Z.productOptIn,R=Z.productOne,H=void 0===R?{}:R,L=Z.productTwo,Y=void 0===L?{}:L,B=p().createElement("ul",null,p().createElement("li",null,N.formatMessage(A.Z.subscriptionsUtilizedProductTwoReport,{totalReport:Y.report})),p().createElement("li",null,N.formatMessage(A.Z.subscriptionsUtilizedProductCapacity,{totalCapacity:Y.capacity})),p().createElement("li",null,N.formatMessage(A.Z.subscriptionsUtilizedProductDate,{formattedDate:b().utc(Y.date).format("MMM D, YYYY")}))),q=p().createElement("ul",null,p().createElement("li",null,N.formatMessage(A.Z.subscriptionsUtilizedProductOneReport,{totalReport:H.report})),p().createElement("li",null,N.formatMessage(A.Z.subscriptionsUtilizedProductCapacity,{totalCapacity:H.capacity})),p().createElement("li",null,N.formatMessage(A.Z.subscriptionsUtilizedProductDate,{formattedDate:b().utc(H.date).format("MMM D, YYYY")}))),K=[],G=function(t){var e=t.fetchStatus,s=t.percentage,r=t.title,n=t.tooltip,i=t.link;switch(e){case"pending":K.push(p().createElement(U.Z,{key:"su-loading-".concat(r)}));break;case"fulfilled":null!=s&&K.push(p().createElement(j.u,{key:"su-tooltip-".concat(r),content:n,position:j.D.top,distance:-10,entryDelay:200},p().createElement(O.zx,{className:"insd-c-subscriptions-utilized__chart-link",variant:"link",href:i,component:"a"},p().createElement(I,{title:r,value:s,label:"".concat(s,"%"),variant:s>100?"danger":"info"}))))}};return G({fetchStatus:f,percentage:Y.percentage,title:N.formatMessage(A.Z.subscriptionsUtilizedProductTwoTitle),tooltip:B,link:u.RHEL}),G({fetchStatus:n,percentage:H.percentage,title:N.formatMessage(A.Z.subscriptionsUtilizedProductOneTitle),tooltip:q,link:u.OPENSHIFT}),H.percentage>Y.percentage&&H.percentage>100&&K.reverse(),p().createElement(k.t,{appName:"SubscriptionsUtilized",className:"insd-m-toggle-right-on-md",title:N.formatMessage(A.Z.subscriptionsUtilizedTitle),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_subwatch")||"true"),isExpandedCallback:function(t){return localStorage.setItem("dashboard_expanded_subwatch",t)},body:p().createElement(_.jA,null,(0,y.PF)(h,g,v)?p().createElement(p().Fragment,null,x&&p().createElement(i.u,{className:"insd-c-subscriptions-utilized__empty-state",variant:i.I.full},p().createElement(a.B,null,N.formatMessage(A.Z.subscriptionsUtilizedLearnMore)),p().createElement(E.i,null,p().createElement(O.zx,{className:"insd-c-subscriptions-utilized__app-link",variant:"link",href:u.APP,component:"a"},N.formatMessage(A.Z.subscriptionsUtilizedLearnMoreAction))))||F&&p().createElement(P.Z,{appName:N.formatMessage(A.Z.subscriptionsUtilizedTitle),isSmall:!0})||!K.length&&p().createElement(i.u,{className:"insd-c-subscriptions-utilized__empty-state",variant:i.I.full},p().createElement(a.B,null,N.formatMessage(A.Z.subscriptionsUtilizedNoProductData)))||K):p().createElement(S.Z,{href:u.APP,title:N.formatMessage(A.Z.filterNotApplicable),appName:N.formatMessage(A.Z.subscriptionsTitle)}))})};x.propTypes={intl:N().any,subscriptionsUtilizedProductOne:N().array,subscriptionsUtilizedProductOneFetch:N().func,subscriptionsUtilizedProductOneFetchStatus:N().string,subscriptionsUtilizedProductTwo:N().array,subscriptionsUtilizedProductTwoFetch:N().func,subscriptionsUtilizedProductTwoFetchStatus:N().string,selectedTags:N().array,workloads:y.ib,SID:N().arrayOf(N().string)};const R=(0,F.$j)((function(t){var e=t.DashboardStore;return{subscriptionsUtilizedProductOne:e.subscriptionsUtilizedProductOne,subscriptionsUtilizedProductOneFetchStatus:e.subscriptionsUtilizedProductOneFetchStatus,subscriptionsUtilizedProductTwo:e.subscriptionsUtilizedProductTwo,subscriptionsUtilizedProductTwoFetchStatus:e.subscriptionsUtilizedProductTwoFetchStatus,selectedTags:e.selectedTags,workloads:e.workloads,SID:e.SID}}),(function(t){return{subscriptionsUtilizedProductOneFetch:function(e,s){return t(n.hW(e,s))},subscriptionsUtilizedProductTwoFetch:function(e,s){return t(n._z(e,s))}}}))(x)},46700:(t,e,s)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(t){var e=i(t);return s(e)}function i(t){if(!s.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id=46700},45467:()=>{}}]);