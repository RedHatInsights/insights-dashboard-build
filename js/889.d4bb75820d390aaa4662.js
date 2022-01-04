"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[889],{17889:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var n=a(4942),r=a(29439),c=a(57149),s=a(35224),o=a(68774),l=a(47173),i=a(56186),d=a(32203),u=a(70),m=a(60485),f=a(62394),p=a(28191),g=a(92298),v=a(93264),b=a.n(v),h=a(59303),E=a(98756),y=a(72550),S=a(50340),_=a(2447),k=a(24584),C=a(96191),x=a(82041),N=a(74183),Z=a(69957),j=a(10358),w=a(37486),I="/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true",O=a(91727),D=a(46891),M=a(33818),P=a(66794),A=a(30893),J=a(86896),z=a(89319);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const H=function(){var e,t,a=[y.r.value,S.k.value,_.$.value,k.x.value],n=(0,J.Z)(),L=(0,v.useState)([]),H=(0,r.Z)(L,2),R=H[0],B=H[1],F=(0,v.useState)([]),W=(0,r.Z)(F,2),$=W[0],V=W[1],Y=(0,v.useState)(),q=(0,r.Z)(Y,2),G=q[0],K=q[1],Q=(0,x.useDispatch)(),U=(0,x.useSelector)((function(e){return e.DashboardStore.advisorStatsRecs})),X=(0,x.useSelector)((function(e){return e.DashboardStore.advisorStatsRecsStatus})),ee=(0,x.useSelector)((function(e){return e.DashboardStore.advisorIncidents})),te=(0,x.useSelector)((function(e){return e.DashboardStore.advisorIncidentsStatus})),ae=(0,x.useSelector)((function(e){return e.DashboardStore.selectedTags})),ne=(0,x.useSelector)((function(e){return e.DashboardStore.workloads})),re=(0,x.useSelector)((function(e){return e.DashboardStore.SID})),ce="&reports_shown=true&impacting=true&offset=0&limit=10".concat(null!=ae&&ae.length?"&tags=".concat(null==ae?void 0:ae.join()):"").concat(null!=ne&&ne.SAP?"&sap_system=true":"").concat(null!=re&&re.length?"&sap_sids=".concat(null==re?void 0:re.join()):""),se=function(e){return"".concat(h.Pu,"/advisor/recommendations?total_risk=").concat(e).concat(ce)},oe=$.map((function(e){return{name:"".concat(e.y," ").concat(e.x," "),fill:"".concat(e.fill),url:"".concat(h.Pu,"/advisor/recommendations?category=").concat(e.value).concat(ce)}}));(0,v.useEffect)((function(){var e=T(T({},(0,E.nY)(ne,re)),(null==ae?void 0:ae.length)>0&&{tags:ae});!function(e){Q(c.$i(e))}(e),function(e){Q(c.l5(e))}(e),function(e){Q(c.ag(e))}(e)}),[ae,ne,re,Q]),(0,v.useEffect)((function(){if("fulfilled"===X){var e=U.total_risk,t=U.category,r=t.Stability+t.Availability+t.Performance+t.Security;B([{title:"".concat((0,E.kC)(n.formatMessage(A.Z.critical))," "),risk:"".concat(e[h.eJ.critical]),value:h.eJ.critical},{title:"".concat((0,E.kC)(n.formatMessage(A.Z.important))," "),risk:"".concat(e[h.eJ.important]),value:h.eJ.important},{title:"".concat((0,E.kC)(n.formatMessage(A.Z.moderate))," "),risk:"".concat(e[h.eJ.moderate]),value:h.eJ.moderate},{title:"".concat((0,E.kC)(n.formatMessage(A.Z.low))," "),risk:"".concat(e[h.eJ.low]),value:h.eJ.low}]),V([{x:n.formatMessage(A.Z.availability,{count:t.Availability}),y:t.Availability,fill:a[0],value:1},{x:n.formatMessage(A.Z.stability,{count:t.Stability}),y:t.Stability,fill:a[1],value:3},{x:n.formatMessage(A.Z.performance,{count:t.Performance}),y:t.Performance,fill:a[2],value:4},{x:n.formatMessage(A.Z.security,{count:t.Security}),y:t.Security,fill:a[3],value:2}]),K(0===r?[C.J.value]:a)}}),[U,X]);var le,ie=(0,z.s)();return b().createElement(N.M,{className:"insd-c-dashboard-card-parent insd-c-dashboard__card--compound--Advisor"},"pending"===te||"pending"===X&&b().createElement(D.Z,null),"rejected"===te?b().createElement(P.jA,null,b().createElement(w.Z,{appName:"Advisor"})):b().createElement(b().Fragment,null,b().createElement(j.t,{appName:"Advisor",className:"insd-m-toggle-right-on-md",title:n.formatMessage(A.Z.advisorCardHeader1),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor1")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_advisor1",e)},body:b().createElement(P.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-2xl"},b().createElement(p.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},b().createElement(g.B,null,b().createElement(p.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},(null==ee||null===(e=ee.meta)||void 0===e?void 0:e.count)>0&&b().createElement(Z.ZP,{className:"pf-u-font-size-xl pf-u-warning-color-100"}),b().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},n.formatMessage(A.Z.incidents,{incidents:null==ee||null===(t=ee.meta)||void 0===t?void 0:t.count}))),b().createElement(o.D,{className:"insd-c-width-limiter pf-u-text-align-center",style:{"--insd-c-width-limiter--MaxWidth":"34ch"}},b().createElement("p",{className:"pf-u-font-size-sm"},n.formatMessage(A.Z.advisorCardMessage)))),b().createElement(l.zx,{variant:"secondary",isSmall:!0,component:"a",onClick:function(e){return ie(e,"".concat(h.Pu).concat(I))},href:"".concat(h.Pu).concat(I)},n.formatMessage(A.Z.advisorCardCTA))))}),b().createElement(i.i,{inset:{md:"insetLg"}}),b().createElement(j.t,{appName:"advisor-recommendation-by-total-risk",className:"insd-m-toggle-right-on-md",title:b().createElement(p.k,{flexWrap:{default:"nowrap"}},b().createElement("h3",null,n.formatMessage(A.Z.advisorCardHeader2)),(le=n.formatMessage(A.Z.totalRiskDef,{strong:function(e){return b().createElement("strong",null,e)}}),b().createElement(s.u,{key:le,position:s.D.top,content:b().createElement("div",null,le)},b().createElement("span",{"aria-label":"Action",className:"insd-c-info-icon"},b().createElement(O.Z,null))))),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor2")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_advisor2",e)},body:b().createElement(P.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-0"},b().createElement(p.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItemsLg",sm:"spaceItems2xl"}},R.map((function(e){var t=e.title,a=e.risk,n=e.value;return b().createElement("a",{key:t,onClick:function(e){return ie(e,se(n))},href:se(n)},b().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},b().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-normal"},a),b().createElement("span",{className:"pf-u-font-size-sm"},t)))}))),b().createElement(d.Z,{component:"div"},b().createElement(u.l,null,b().createElement(m.D,{headingLevel:"h4",size:"lg"},n.formatMessage(A.Z.advisorCardHeader3))),b().createElement(f.e,{className:"pf-u-pt-sm"},b().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},b().createElement("div",{className:"insd-c-dashboard__card-chart-container"},b().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},b().createElement(M.u,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chart",constrainToVisibleArea:!0,data:$,colorScale:G,padding:{bottom:0,left:0,right:0,top:0}})),b().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},b().createElement("div",{className:"insd-c-legend insd-m-2-col"},oe.map((function(e){return b().createElement("a",{key:e.url,onClick:function(t){return ie(t,e.url)},href:e.url,className:"insd-c-legend__item"},b().createElement("span",{className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(e.fill)}}),b().createElement("span",{className:"insd-c-legend__text"},e.name))})))))))))})))}}}]);
//# sourceMappingURL=../sourcemaps/889.35919ca2bfbf2077ab92338e6bbaa372.js.map