(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[6482],{96191:(e,t,a)=>{"use strict";a.d(t,{J:()=>n,Z:()=>r});const n={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},r=n},33818:(e,t,a)=>{"use strict";a.d(t,{u:()=>u});var n=a(45987),r=a(10310),l=a(80469),c=a(33101),i=a(93264),o=a.n(i),s=a(45697),d=a.n(s),m=["index"],u=function(e){var t=e.ariaDesc,a=e.ariaTitle,i=e.constrainToVisibleArea,s=e.data,d=e.legendData,u=e.padding,f=e.height,p=e.width,g=e.legendOrientation,h=e.colorScale,v=e.legend,b=e.legendWidth,E=e.legendHeight,y=e.legendClick,_=function(e){var t=e.index,l=(0,n.Z)(e,m);return o().createElement("a",{id:"".concat(a.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:y[t],className:"pf-c-button pf-m-link pf-m-inline"},o().createElement(r.Df,l))};return o().createElement("div",{className:"insd-c-pie-chart__row"},o().createElement("div",{style:{width:p,height:f,position:"relative"}},o().createElement(c.Td,{ariaDesc:t,ariaTitle:a,constrainToVisibleArea:i,data:s,height:f,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:u,width:p,colorScale:h}),o().createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a+" data"},o().createElement("tbody",null,s.map((function(e,t){return[o().createElement("tr",{key:t},o().createElement("td",null,e.y),o().createElement("td",null,e.x))]}))))),v&&o().createElement("div",{className:"insd-c-pie-chart__legend","aria-label":"Chart legend",style:{width:b,height:E}},o().createElement(l.Qk,{height:E,width:b,fontSize:14,data:d,rowGutter:{top:-5,bottom:-5},orientation:g,labelComponent:y&&o().createElement(_,null)})))};u.propTypes={ariaDesc:d().string,ariaTitle:d().string,constrainToVisibleArea:d().bool,data:d().array,legendData:d().array,padding:d().object,height:d().number,width:d().number,legendOrientation:d().string,colorScale:d().array,legend:d().bool,legendWidth:d().number,legendHeight:d().number,legendClick:d().any}},74183:(e,t,a)=>{"use strict";a.d(t,{M:()=>m});var n=a(87462),r=a(45987),l=a(32203),c=a(93264),i=a.n(c),o=a(45697),s=a.n(o),d=["className","children"],m=function(e){var t=e.className,a=e.children,c=(0,r.Z)(e,d);return i().createElement(l.Z,(0,n.Z)({className:"insd-c-dashboard-compound-card insd-c-dashboard__card ".concat(t)},c),a)};m.propTypes={children:s().any,className:s().string}},15006:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>z});var n=a(4942),r=a(98152),l=a(57149),c=a(75824),i=a(68774),o=a(47173),s=a(15627),d=a(32203),m=a(70),u=a(38779),f=a(62394),p=a(28191),g=a(92298),h=a(93264),v=a.n(h),b=a(59303),E=a(98756);const y="#bee1f4",_="#73bcf7",k="#2b9af3",S="#06c";var N=a(96191),x=a(28216),C=a(74183),Z=a(43047),w=a(10358),D=a(37486),j=a(91727),I=a(46891),O=a(33818),M=a(66794),A=a(30893),P=a(86896);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const z=function(){var e,t,a,n=[y,_,k,S],T=(0,P.Z)(),z=(0,h.useState)([]),H=(0,r.Z)(z,2),L=H[0],R=H[1],V=(0,h.useState)([]),W=(0,r.Z)(V,2),B=W[0],F=W[1],G=(0,h.useState)(),Q=(0,r.Z)(G,2),$=Q[0],q=Q[1],K=(0,x.I0)(),U=(0,x.v9)((function(e){return e.DashboardStore.advisorStatsRecs})),X=(0,x.v9)((function(e){return e.DashboardStore.advisorStatsRecsStatus})),Y=(0,x.v9)((function(e){return e.DashboardStore.advisorIncidents})),ee=(0,x.v9)((function(e){return e.DashboardStore.advisorIncidentsStatus})),te=(0,x.v9)((function(e){return e.DashboardStore.selectedTags})),ae=(0,x.v9)((function(e){return e.DashboardStore.workloads})),ne=(0,x.v9)((function(e){return e.DashboardStore.SID})),re="&reports_shown=true&impacting=true&offset=0&limit=10".concat(null!=te&&te.length?"&tags=".concat(null==te?void 0:te.join()):"").concat(null!=ae&&ae.SAP?"&sap_system=true":"").concat(null!=ne&&ne.length?"&sap_sids=".concat(null==ne?void 0:ne.join()):""),le=function(e){return"".concat(b.Pu,"/advisor/recommendations?sort=-total_risk&total_risk=").concat(e).concat(re)},ce=B.map((function(e){return{name:"".concat(e.y," ").concat(e.x," "),fill:"".concat(e.fill),url:"".concat(b.Pu,"/advisor/recommendations?sort=-category&category=").concat(e.value).concat(re)}}));return(0,h.useEffect)((function(){var e=J(J({},(0,E.Rm)(ae,ne)),(null==te?void 0:te.length)>0&&{tags:te});!function(e){K(l.$i(e))}(e),function(e){K(l.l5(e))}(e),function(e){K(l.ag(e))}(e)}),[te,ae,ne,K]),(0,h.useEffect)((function(){if("fulfilled"===X){var e=U.total_risk,t=U.category,a=t.Stability+t.Availability+t.Performance+t.Security;R([{title:"".concat((0,E.kC)(T.formatMessage(A.Z.critical))," "),risk:"".concat(e[b.eJ.critical]),value:b.eJ.critical},{title:"".concat((0,E.kC)(T.formatMessage(A.Z.important))," "),risk:"".concat(e[b.eJ.important]),value:b.eJ.important},{title:"".concat((0,E.kC)(T.formatMessage(A.Z.moderate))," "),risk:"".concat(e[b.eJ.moderate]),value:b.eJ.moderate},{title:"".concat((0,E.kC)(T.formatMessage(A.Z.low))," "),risk:"".concat(e[b.eJ.low]),value:b.eJ.low}]),F([{x:T.formatMessage(A.Z.availability,{count:t.Availability}),y:t.Availability,fill:n[0],value:1},{x:T.formatMessage(A.Z.stability,{count:t.Stability}),y:t.Stability,fill:n[1],value:3},{x:T.formatMessage(A.Z.performance,{count:t.Performance}),y:t.Performance,fill:n[2],value:4},{x:T.formatMessage(A.Z.security,{count:t.Security}),y:t.Security,fill:n[3],value:2}]),q(0===a?[N.J.value]:n)}}),[U,X]),v().createElement(C.M,{className:"insd-c-dashboard-card-parent insd-c-dashboard__card--compound--Advisor"},"pending"===ee||"pending"===X&&v().createElement(I.Z,null),"rejected"===ee?v().createElement(M.jA,null,v().createElement(D.Z,{appName:"Advisor"})):v().createElement(v().Fragment,null,v().createElement(w.t,{appName:"Advisor",className:"insd-m-toggle-right-on-md",title:T.formatMessage(A.Z.advisorCardHeader1),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor1")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_advisor1",e)},body:v().createElement(M.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-2xl"},v().createElement(p.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},v().createElement(g.B,null,v().createElement(p.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},(null==Y||null===(e=Y.meta)||void 0===e?void 0:e.count)>0&&v().createElement(Z.ZP,{className:"pf-u-font-size-xl pf-u-danger-color-100"}),v().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},T.formatMessage(A.Z.incidents,{incidents:null==Y||null===(t=Y.meta)||void 0===t?void 0:t.count}))),v().createElement(i.D,{className:"insd-c-width-limiter pf-u-text-align-center",style:{"--insd-c-width-limiter--MaxWidth":"34ch"}},v().createElement("p",{className:"pf-u-font-size-md pf-u-text-center"},T.formatMessage(A.Z.advisorCardMessage)))),v().createElement(o.zx,{variant:"secondary",isSmall:!0,component:"a",href:"".concat(b.Pu).concat("/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true")},T.formatMessage(A.Z.advisorCardCTA))))}),v().createElement(s.i,{inset:{md:"insetLg"}}),v().createElement(w.t,{appName:"advisor-recommendation-by-total-risk",className:"insd-m-toggle-right-on-md",title:v().createElement(p.k,{flexWrap:{default:"nowrap"}},v().createElement("h3",null,T.formatMessage(A.Z.advisorCardHeader2)),(a=T.formatMessage(A.Z.totalRiskDef,{strong:function(e){return v().createElement("strong",null,e)}}),v().createElement(c.u,{key:a,position:c.D.top,content:v().createElement("div",null,a)},v().createElement("span",{"aria-label":"Action",className:"insd-c-info-icon"},v().createElement(j.Z,null))))),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor2")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_advisor2",e)},body:v().createElement(M.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-0"},v().createElement(p.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItemsLg",sm:"spaceItems2xl"}},L.map((function(e){var t=e.title,a=e.risk,n=e.value;return v().createElement("a",{key:t,href:le(n)},v().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},v().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-normal"},a),v().createElement("span",{className:"pf-u-font-size-sm"},t)))}))),v().createElement(d.Z,{component:"div"},v().createElement(m.l,null,v().createElement(u.D,{headingLevel:"h4",size:"lg"},T.formatMessage(A.Z.advisorCardHeader3))),v().createElement(f.e,{className:"pf-u-pt-sm"},v().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},v().createElement("div",{className:"insd-c-dashboard__card-chart-container"},v().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},v().createElement(O.u,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chart",constrainToVisibleArea:!0,data:B,colorScale:$,padding:{bottom:0,left:0,right:0,top:0}})),v().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},v().createElement("div",{className:"insd-c-legend insd-m-2-col"},ce.map((function(e){return v().createElement("a",{key:e.url,href:e.url,className:"insd-c-legend__item"},v().createElement("span",{className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(e.fill)}}),v().createElement("span",{className:"insd-c-legend__text"},e.name))})))))))))})))}},45467:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6482.b19a54bd1e9083adbcd617dcc918ff13.js.map