(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[9372,5467,9477],{96191:(e,t,a)=>{"use strict";a.d(t,{J:()=>n,Z:()=>r});const n={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},r=n},33818:(e,t,a)=>{"use strict";a.d(t,{u:()=>u});var n=a(45987),r=a(10310),c=a(80469),l=a(33101),i=a(93264),o=a.n(i),s=a(45697),d=a.n(s),m=["index"],u=function(e){var t=e.ariaDesc,a=e.ariaTitle,i=e.constrainToVisibleArea,s=e.data,d=e.legendData,u=e.padding,f=e.height,p=e.width,g=e.legendOrientation,v=e.colorScale,h=e.legend,b=e.legendWidth,E=e.legendHeight,y=e.legendClick,_=function(e){var t=e.index,c=(0,n.Z)(e,m);return o().createElement("a",{id:"".concat(a.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:y[t],className:"pf-c-button pf-m-link pf-m-inline"},o().createElement(r.Df,c))};return o().createElement("div",{className:"insd-c-pie-chart__row"},o().createElement("div",{style:{width:p,height:f,position:"relative"}},o().createElement(l.Td,{ariaDesc:t,ariaTitle:a,constrainToVisibleArea:i,data:s,height:f,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:u,width:p,colorScale:v}),o().createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a+" data"},o().createElement("tbody",null,s.map((function(e,t){return[o().createElement("tr",{key:t},o().createElement("td",null,e.y),o().createElement("td",null,e.x))]}))))),h&&o().createElement("div",{className:"insd-c-pie-chart__legend","aria-label":"Chart legend",style:{width:b,height:E}},o().createElement(c.Qk,{height:E,width:b,fontSize:14,data:d,rowGutter:{top:-5,bottom:-5},orientation:g,labelComponent:y&&o().createElement(_,null)})))};u.propTypes={ariaDesc:d().string,ariaTitle:d().string,constrainToVisibleArea:d().bool,data:d().array,legendData:d().array,padding:d().object,height:d().number,width:d().number,legendOrientation:d().string,colorScale:d().array,legend:d().bool,legendWidth:d().number,legendHeight:d().number,legendClick:d().any}},74183:(e,t,a)=>{"use strict";a.d(t,{M:()=>m});var n=a(87462),r=a(45987),c=a(32203),l=a(93264),i=a.n(l),o=a(45697),s=a.n(o),d=["className","children"],m=function(e){var t=e.className,a=e.children,l=(0,r.Z)(e,d);return i().createElement(c.Z,(0,n.Z)({className:"insd-c-dashboard-compound-card insd-c-dashboard__card ".concat(t)},l),a)};m.propTypes={children:s().any,className:s().string}},15006:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var n=a(4942),r=a(70885),c=a(57149),l=a(75824),i=a(68774),o=a(47173),s=a(15627),d=a(32203),m=a(70),u=a(38779),f=a(62394),p=a(28191),g=a(92298),v=a(93264),h=a.n(v),b=a(59303),E=a(98756);const y="#bee1f4",_="#73bcf7",k="#2b9af3",S="#06c";var C=a(96191),N=a(28216),x=a(74183),Z=a(43047),w=a(10358),D=a(37486),j="/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true",I=a(91727),O=a(46891),M=a(33818),A=a(66794),P=a(30893),T=a(86896),J=a(89319);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const L=function(){var e,t,a=[y,_,k,S],n=(0,T.Z)(),z=(0,v.useState)([]),L=(0,r.Z)(z,2),R=L[0],V=L[1],W=(0,v.useState)([]),B=(0,r.Z)(W,2),F=B[0],G=B[1],Q=(0,v.useState)(),$=(0,r.Z)(Q,2),q=$[0],K=$[1],U=(0,N.I0)(),X=(0,N.v9)((function(e){return e.DashboardStore.advisorStatsRecs})),Y=(0,N.v9)((function(e){return e.DashboardStore.advisorStatsRecsStatus})),ee=(0,N.v9)((function(e){return e.DashboardStore.advisorIncidents})),te=(0,N.v9)((function(e){return e.DashboardStore.advisorIncidentsStatus})),ae=(0,N.v9)((function(e){return e.DashboardStore.selectedTags})),ne=(0,N.v9)((function(e){return e.DashboardStore.workloads})),re=(0,N.v9)((function(e){return e.DashboardStore.SID})),ce="&reports_shown=true&impacting=true&offset=0&limit=10".concat(null!=ae&&ae.length?"&tags=".concat(null==ae?void 0:ae.join()):"").concat(null!=ne&&ne.SAP?"&sap_system=true":"").concat(null!=re&&re.length?"&sap_sids=".concat(null==re?void 0:re.join()):""),le=function(e){return"".concat(b.Pu,"/advisor/recommendations?total_risk=").concat(e).concat(ce)},ie=F.map((function(e){return{name:"".concat(e.y," ").concat(e.x," "),fill:"".concat(e.fill),url:"".concat(b.Pu,"/advisor/recommendations?category=").concat(e.value).concat(ce)}}));(0,v.useEffect)((function(){var e=H(H({},(0,E.Rm)(ne,re)),(null==ae?void 0:ae.length)>0&&{tags:ae});!function(e){U(c.$i(e))}(e),function(e){U(c.l5(e))}(e),function(e){U(c.ag(e))}(e)}),[ae,ne,re,U]),(0,v.useEffect)((function(){if("fulfilled"===Y){var e=X.total_risk,t=X.category,r=t.Stability+t.Availability+t.Performance+t.Security;V([{title:"".concat((0,E.kC)(n.formatMessage(P.Z.critical))," "),risk:"".concat(e[b.eJ.critical]),value:b.eJ.critical},{title:"".concat((0,E.kC)(n.formatMessage(P.Z.important))," "),risk:"".concat(e[b.eJ.important]),value:b.eJ.important},{title:"".concat((0,E.kC)(n.formatMessage(P.Z.moderate))," "),risk:"".concat(e[b.eJ.moderate]),value:b.eJ.moderate},{title:"".concat((0,E.kC)(n.formatMessage(P.Z.low))," "),risk:"".concat(e[b.eJ.low]),value:b.eJ.low}]),G([{x:n.formatMessage(P.Z.availability,{count:t.Availability}),y:t.Availability,fill:a[0],value:1},{x:n.formatMessage(P.Z.stability,{count:t.Stability}),y:t.Stability,fill:a[1],value:3},{x:n.formatMessage(P.Z.performance,{count:t.Performance}),y:t.Performance,fill:a[2],value:4},{x:n.formatMessage(P.Z.security,{count:t.Security}),y:t.Security,fill:a[3],value:2}]),K(0===r?[C.J.value]:a)}}),[X,Y]);var oe,se=(0,J.s)();return h().createElement(x.M,{className:"insd-c-dashboard-card-parent insd-c-dashboard__card--compound--Advisor"},"pending"===te||"pending"===Y&&h().createElement(O.Z,null),"rejected"===te?h().createElement(A.jA,null,h().createElement(D.Z,{appName:"Advisor"})):h().createElement(h().Fragment,null,h().createElement(w.t,{appName:"Advisor",className:"insd-m-toggle-right-on-md",title:n.formatMessage(P.Z.advisorCardHeader1),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor1")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_advisor1",e)},body:h().createElement(A.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-2xl"},h().createElement(p.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},h().createElement(g.B,null,h().createElement(p.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},(null==ee||null===(e=ee.meta)||void 0===e?void 0:e.count)>0&&h().createElement(Z.ZP,{className:"pf-u-font-size-xl pf-u-danger-color-100"}),h().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},n.formatMessage(P.Z.incidents,{incidents:null==ee||null===(t=ee.meta)||void 0===t?void 0:t.count}))),h().createElement(i.D,{className:"insd-c-width-limiter pf-u-text-align-center",style:{"--insd-c-width-limiter--MaxWidth":"34ch"}},h().createElement("p",{className:"pf-u-font-size-md pf-u-text-center"},n.formatMessage(P.Z.advisorCardMessage)))),h().createElement(o.zx,{variant:"secondary",isSmall:!0,component:"a",onClick:function(e){return se(e,"".concat(b.Pu).concat(j))},href:"".concat(b.Pu).concat(j)},n.formatMessage(P.Z.advisorCardCTA))))}),h().createElement(s.i,{inset:{md:"insetLg"}}),h().createElement(w.t,{appName:"advisor-recommendation-by-total-risk",className:"insd-m-toggle-right-on-md",title:h().createElement(p.k,{flexWrap:{default:"nowrap"}},h().createElement("h3",null,n.formatMessage(P.Z.advisorCardHeader2)),(oe=n.formatMessage(P.Z.totalRiskDef,{strong:function(e){return h().createElement("strong",null,e)}}),h().createElement(l.u,{key:oe,position:l.D.top,content:h().createElement("div",null,oe)},h().createElement("span",{"aria-label":"Action",className:"insd-c-info-icon"},h().createElement(I.Z,null))))),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor2")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_advisor2",e)},body:h().createElement(A.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-0"},h().createElement(p.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItemsLg",sm:"spaceItems2xl"}},R.map((function(e){var t=e.title,a=e.risk,n=e.value;return h().createElement("a",{key:t,onClick:function(e){return se(e,le(n))},href:le(n)},h().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},h().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-normal"},a),h().createElement("span",{className:"pf-u-font-size-sm"},t)))}))),h().createElement(d.Z,{component:"div"},h().createElement(m.l,null,h().createElement(u.D,{headingLevel:"h4",size:"lg"},n.formatMessage(P.Z.advisorCardHeader3))),h().createElement(f.e,{className:"pf-u-pt-sm"},h().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},h().createElement("div",{className:"insd-c-dashboard__card-chart-container"},h().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},h().createElement(M.u,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chart",constrainToVisibleArea:!0,data:F,colorScale:q,padding:{bottom:0,left:0,right:0,top:0}})),h().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},h().createElement("div",{className:"insd-c-legend insd-m-2-col"},ie.map((function(e){return h().createElement("a",{key:e.url,onClick:function(t){return se(t,e.url)},href:e.url,className:"insd-c-legend__item"},h().createElement("span",{className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(e.fill)}}),h().createElement("span",{className:"insd-c-legend__text"},e.name))})))))))))})))}},45467:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9372.a43ca02b492afbf100a125922aaa210f.js.map