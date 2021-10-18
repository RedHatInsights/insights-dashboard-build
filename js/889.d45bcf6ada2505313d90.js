"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[889],{17889:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(4942),r=a(29439),c=a(57149),s=a(35224),l=a(68774),o=a(47173),i=a(56186),d=a(32203),u=a(70),m=a(60485),f=a(62394),p=a(28191),g=a(92298),v=a(93264),b=a.n(v),h=a(59303),E=a(98756),y=a(72550),S=a(50340),_=a(2447),k=a(24584),x=a(96191),C=a(82041),N=a(74183),Z=a(69957),j=a(10358),w=a(37486),I=a(91727),O=a(46891),D=a(33818),M=a(66794),P=a(30893),A=a(86896);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const L=function(){var e,t,a,n=[y.r.value,S.k.value,_.$.value,k.x.value],J=(0,A.Z)(),L=(0,v.useState)([]),T=(0,r.Z)(L,2),H=T[0],R=T[1],B=(0,v.useState)([]),F=(0,r.Z)(B,2),W=F[0],$=F[1],V=(0,v.useState)(),Y=(0,r.Z)(V,2),q=Y[0],G=Y[1],K=(0,C.useDispatch)(),Q=(0,C.useSelector)((function(e){return e.DashboardStore.advisorStatsRecs})),U=(0,C.useSelector)((function(e){return e.DashboardStore.advisorStatsRecsStatus})),X=(0,C.useSelector)((function(e){return e.DashboardStore.advisorIncidents})),ee=(0,C.useSelector)((function(e){return e.DashboardStore.advisorIncidentsStatus})),te=(0,C.useSelector)((function(e){return e.DashboardStore.selectedTags})),ae=(0,C.useSelector)((function(e){return e.DashboardStore.workloads})),ne=(0,C.useSelector)((function(e){return e.DashboardStore.SID})),re="&reports_shown=true&impacting=true&offset=0&limit=10".concat(null!=te&&te.length?"&tags=".concat(null==te?void 0:te.join()):"").concat(null!=ae&&ae.SAP?"&sap_system=true":"").concat(null!=ne&&ne.length?"&sap_sids=".concat(null==ne?void 0:ne.join()):""),ce=function(e){return"".concat(h.Pu,"/advisor/recommendations?total_risk=").concat(e).concat(re)},se=W.map((function(e){return{name:"".concat(e.y," ").concat(e.x," "),fill:"".concat(e.fill),url:"".concat(h.Pu,"/advisor/recommendations?category=").concat(e.value).concat(re)}}));return(0,v.useEffect)((function(){var e=z(z({},(0,E.nY)(ae,ne)),(null==te?void 0:te.length)>0&&{tags:te});!function(e){K(c.$i(e))}(e),function(e){K(c.l5(e))}(e),function(e){K(c.ag(e))}(e)}),[te,ae,ne,K]),(0,v.useEffect)((function(){if("fulfilled"===U){var e=Q.total_risk,t=Q.category,a=t.Stability+t.Availability+t.Performance+t.Security;R([{title:"".concat((0,E.kC)(J.formatMessage(P.Z.critical))," "),risk:"".concat(e[h.eJ.critical]),value:h.eJ.critical},{title:"".concat((0,E.kC)(J.formatMessage(P.Z.important))," "),risk:"".concat(e[h.eJ.important]),value:h.eJ.important},{title:"".concat((0,E.kC)(J.formatMessage(P.Z.moderate))," "),risk:"".concat(e[h.eJ.moderate]),value:h.eJ.moderate},{title:"".concat((0,E.kC)(J.formatMessage(P.Z.low))," "),risk:"".concat(e[h.eJ.low]),value:h.eJ.low}]),$([{x:J.formatMessage(P.Z.availability,{count:t.Availability}),y:t.Availability,fill:n[0],value:1},{x:J.formatMessage(P.Z.stability,{count:t.Stability}),y:t.Stability,fill:n[1],value:3},{x:J.formatMessage(P.Z.performance,{count:t.Performance}),y:t.Performance,fill:n[2],value:4},{x:J.formatMessage(P.Z.security,{count:t.Security}),y:t.Security,fill:n[3],value:2}]),G(0===a?[x.J.value]:n)}}),[Q,U]),b().createElement(N.M,{className:"insd-c-dashboard-card-parent insd-c-dashboard__card--compound--Advisor"},"pending"===ee||"pending"===U&&b().createElement(O.Z,null),"rejected"===ee?b().createElement(M.jA,null,b().createElement(w.Z,{appName:"Advisor"})):b().createElement(b().Fragment,null,b().createElement(j.t,{appName:"Advisor",className:"insd-m-toggle-right-on-md",title:J.formatMessage(P.Z.advisorCardHeader1),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor1")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_advisor1",e)},body:b().createElement(M.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-2xl"},b().createElement(p.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},b().createElement(g.B,null,b().createElement(p.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},(null==X||null===(e=X.meta)||void 0===e?void 0:e.count)>0&&b().createElement(Z.ZP,{className:"pf-u-font-size-xl pf-u-warning-color-100"}),b().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},J.formatMessage(P.Z.incidents,{incidents:null==X||null===(t=X.meta)||void 0===t?void 0:t.count}))),b().createElement(l.D,{className:"insd-c-width-limiter pf-u-text-align-center",style:{"--insd-c-width-limiter--MaxWidth":"34ch"}},b().createElement("p",{className:"pf-u-font-size-sm"},J.formatMessage(P.Z.advisorCardMessage)))),b().createElement(o.zx,{variant:"secondary",isSmall:!0,component:"a",href:"".concat(h.Pu).concat("/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true")},J.formatMessage(P.Z.advisorCardCTA))))}),b().createElement(i.i,{inset:{md:"insetLg"}}),b().createElement(j.t,{appName:"advisor-recommendation-by-total-risk",className:"insd-m-toggle-right-on-md",title:b().createElement(p.k,{flexWrap:{default:"nowrap"}},b().createElement("h3",null,J.formatMessage(P.Z.advisorCardHeader2)),(a=J.formatMessage(P.Z.totalRiskDef,{strong:function(e){return b().createElement("strong",null,e)}}),b().createElement(s.u,{key:a,position:s.D.top,content:b().createElement("div",null,a)},b().createElement("span",{"aria-label":"Action",className:"insd-c-info-icon"},b().createElement(I.Z,null))))),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor2")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_advisor2",e)},body:b().createElement(M.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-0"},b().createElement(p.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItemsLg",sm:"spaceItems2xl"}},H.map((function(e){var t=e.title,a=e.risk,n=e.value;return b().createElement("a",{key:t,href:ce(n)},b().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},b().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-normal"},a),b().createElement("span",{className:"pf-u-font-size-sm"},t)))}))),b().createElement(d.Z,{component:"div"},b().createElement(u.l,null,b().createElement(m.D,{headingLevel:"h4",size:"lg"},J.formatMessage(P.Z.advisorCardHeader3))),b().createElement(f.e,{className:"pf-u-pt-sm"},b().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},b().createElement("div",{className:"insd-c-dashboard__card-chart-container"},b().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},b().createElement(D.u,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chart",constrainToVisibleArea:!0,data:W,colorScale:q,padding:{bottom:0,left:0,right:0,top:0}})),b().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},b().createElement("div",{className:"insd-c-legend insd-m-2-col"},se.map((function(e){return b().createElement("a",{key:e.url,href:e.url,className:"insd-c-legend__item"},b().createElement("span",{className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(e.fill)}}),b().createElement("span",{className:"insd-c-legend__text"},e.name))})))))))))})))}}}]);
//# sourceMappingURL=../sourcemaps/889.2e06485023ec58d5509fb0943edc2b23.js.map