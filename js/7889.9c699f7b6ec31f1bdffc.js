(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[7889],{17889:(a,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>z});var e=i(96156),n=i(28481),r=(i(32796),i(57149)),l=i(35224),o=i(47173),s=i(68774),d=i(56186),m=i(32203),c=i(70),p=i(60485),u=i(62394),f=i(28191),h=i(92298),g=i(93264),b=i.n(g),v=i(59303),w=i(98756),_=i(72550),x=i(50340),y=i(2447),C=i(24584),M=i(96191),E=i(77121),W=i(74183),k=i(69957),S=i(10358),T=i(37486),G=i(91727),Z=i(46891),I=i(33818),N=i(66794),P=i(30893),j=i(86896);function O(a,t){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.push.apply(i,e)}return i}function D(a){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(Object(i),!0).forEach((function(t){(0,e.Z)(a,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(i,t))}))}return a}const z=function(){var a,t,i,e=[_.r.value,x.k.value,y.$.value,C.x.value],O=(0,j.Z)(),z=(0,g.useState)([]),B=(0,n.Z)(z,2),A=B[0],J=B[1],R=(0,g.useState)([]),L=(0,n.Z)(R,2),F=L[0],H=L[1],$=(0,g.useState)(),V=(0,n.Z)($,2),X=V[0],Y=V[1],q=(0,E.useDispatch)(),K=(0,E.useSelector)((function(a){return a.DashboardStore.advisorStatsRecs})),Q=(0,E.useSelector)((function(a){return a.DashboardStore.advisorStatsRecsStatus})),U=(0,E.useSelector)((function(a){return a.DashboardStore.advisorIncidents})),aa=(0,E.useSelector)((function(a){return a.DashboardStore.advisorIncidentsStatus})),ta=(0,E.useSelector)((function(a){return a.DashboardStore.selectedTags})),ia=(0,E.useSelector)((function(a){return a.DashboardStore.workloads})),ea=(0,E.useSelector)((function(a){return a.DashboardStore.SID})),na="&reports_shown=true&impacting=true&offset=0&limit=10".concat(null!=ta&&ta.length?"&tags=".concat(null==ta?void 0:ta.join()):"").concat(null!=ia&&ia.SAP?"&sap_system=true":"").concat(null!=ea&&ea.length?"&sap_sids=".concat(null==ea?void 0:ea.join()):""),ra=function(a){return"".concat(v.Pu,"/advisor/recommendations?total_risk=").concat(a).concat(na)},la=F.map((function(a){return{name:"".concat(a.y," ").concat(a.x," "),fill:"".concat(a.fill),url:"".concat(v.Pu,"/advisor/recommendations?category=").concat(a.value).concat(na)}}));return(0,g.useEffect)((function(){var a=D(D({},(0,w.nY)(ia,ea)),(null==ta?void 0:ta.length)>0&&{tags:ta});!function(a){q(r.$i(a))}(a),function(a){q(r.l5(a))}(a),function(a){q(r.ag(a))}(a)}),[ta,ia,ea,q]),(0,g.useEffect)((function(){if("fulfilled"===Q){var a=K.total_risk,t=K.category,i=t.Stability+t.Availability+t.Performance+t.Security;J([{title:"".concat((0,w.kC)(O.formatMessage(P.Z.critical))," "),risk:"".concat(a[v.eJ.critical]),value:v.eJ.critical},{title:"".concat((0,w.kC)(O.formatMessage(P.Z.important))," "),risk:"".concat(a[v.eJ.important]),value:v.eJ.important},{title:"".concat((0,w.kC)(O.formatMessage(P.Z.moderate))," "),risk:"".concat(a[v.eJ.moderate]),value:v.eJ.moderate},{title:"".concat((0,w.kC)(O.formatMessage(P.Z.low))," "),risk:"".concat(a[v.eJ.low]),value:v.eJ.low}]),H([{x:O.formatMessage(P.Z.availability,{count:t.Availability}),y:t.Availability,fill:e[0],value:1},{x:O.formatMessage(P.Z.stability,{count:t.Stability}),y:t.Stability,fill:e[1],value:3},{x:O.formatMessage(P.Z.performance,{count:t.Performance}),y:t.Performance,fill:e[2],value:4},{x:O.formatMessage(P.Z.security,{count:t.Security}),y:t.Security,fill:e[3],value:2}]),Y(0===i?[M.J.value]:e)}}),[K,Q]),b().createElement(W.M,{className:"ins-c-dashboard-card-parent ins-c-dashboard__card--compound--Advisor"},"pending"===aa||"pending"===Q&&b().createElement(Z.Z,null),"rejected"===aa?b().createElement(N.jA,null,b().createElement(T.Z,{appName:"Advisor"})):b().createElement(b().Fragment,null,b().createElement(S.t,{appName:"Advisor",className:"ins-m-toggle-right-on-md",title:O.formatMessage(P.Z.advisorCardHeader1),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor1")||"true"),isExpandedCallback:function(a){return localStorage.setItem("dashboard_expanded_advisor1",a)},body:b().createElement(N.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-2xl"},b().createElement(f.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},b().createElement(h.B,null,b().createElement(f.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},(null==U||null===(a=U.meta)||void 0===a?void 0:a.count)>0&&b().createElement(k.ZP,{className:"pf-u-font-size-xl pf-u-warning-color-100"}),b().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},O.formatMessage(P.Z.incidents,{incidents:null==U||null===(t=U.meta)||void 0===t?void 0:t.count}))),b().createElement(s.D,{className:"ins-c-width-limiter pf-u-text-align-center",style:{"--ins-c-width-limiter--MaxWidth":"34ch"}},b().createElement("p",{className:"pf-u-font-size-sm"},O.formatMessage(P.Z.advisorCardMessage)))),b().createElement(o.zx,{variant:"secondary",isSmall:!0,component:"a",href:"".concat(v.Pu).concat("/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true")},O.formatMessage(P.Z.advisorCardCTA))))}),b().createElement(d.i,{inset:{md:"insetLg"}}),b().createElement(S.t,{appName:"advisor-recommendation-by-total-risk",className:"ins-m-toggle-right-on-md",title:b().createElement(f.k,{flexWrap:{default:"nowrap"}},O.formatMessage(P.Z.advisorCardHeader2),(i=O.formatMessage(P.Z.totalRiskDef,{em:function(a){return b().createElement("em",null,a)}}),b().createElement(l.u,{key:i,position:l.D.top,content:b().createElement("div",null,i)},b().createElement(o.zx,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},b().createElement(G.Z,null))))),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor2")||"true"),isExpandedCallback:function(a){return localStorage.setItem("dashboard_expanded_advisor2",a)},body:b().createElement(N.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-0"},b().createElement(f.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItems3xl"}},A.map((function(a){var t=a.title,i=a.risk,e=a.value;return b().createElement("a",{key:t,href:ra(e)},b().createElement(f.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},b().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-normal"},i),b().createElement("span",{className:"pf-u-font-size-sm"},t)))}))),b().createElement(m.Z,{component:"div"},b().createElement(c.l,null,b().createElement(p.D,{headingLevel:"h4",size:"lg"},O.formatMessage(P.Z.advisorCardHeader3))),b().createElement(u.e,{className:"pf-u-pt-sm"},b().createElement(f.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},b().createElement(f.k,{alignItems:{default:"alignItemsCenter"},spaceItems:{default:"spaceItemsXl"}},b().createElement(h.B,null,b().createElement(I.u,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chartt",constrainToVisibleArea:!0,data:F,colorScale:X,padding:{bottom:0,left:0,right:0,top:0},height:100,width:100})),b().createElement("div",{className:"ins-c-legend"},la.map((function(a){return b().createElement("a",{key:a.url,href:a.url,className:"ins-c-legend__item"},b().createElement("span",{className:"ins-c-legend__dot",style:{"--ins-c-legend__dot--BackgroundColor":"".concat(a.fill)}}),b().createElement("span",{className:"ins-c-legend__text"},a.name))}))))))))})))}},29849:(a,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var e=i(23645),n=i.n(e),r=i(35080),l=n()((function(a){return a[1]}));l.i(r.Z),l.push([a.id,".dashboard{}.dashboard :root{--ins-color--orange: #ec7a08}.dashboard #root.pf-c-page__main.dashboard{height:auto}.dashboard html,.dashboard body{height:100vh;overflow:hidden}.dashboard .ins-c-sidebar+.pf-c-page__drawer .pf-c-drawer__content>div{display:contents}.dashboard .ins-c-drawer-control{position:absolute;top:100px;right:10px;z-index:1000}.dashboard .ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.dashboard .ins-c-summary__emphasis{font-size:32px;font-size:2rem}.dashboard .ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.dashboard .ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.dashboard .ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.dashboard .ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.dashboard .ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.dashboard .ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.dashboard .ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.dashboard .ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.dashboard .ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.dashboard .ins-c-metrics{position:relative;display:flex;justify-content:space-evenly}.dashboard .ins-c-metrics::before{position:absolute;content:'';top:0;right:0;bottom:0;left:0;pointer-events:none;border-top:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100)}.dashboard .ins-c-metrics__metric{display:inline-grid;align-items:center;grid-auto-flow:column;grid-gap:var(--pf-global--spacer--sm);padding:var(--pf-global--spacer--md) var(--pf-global--spacer--sm)}.dashboard .ins-c-metrics__metric>svg{font-size:var(--pf-global--icon--FontSize--md)}.dashboard .ins-c-metrics__metric-number{font-size:var(--pf-global--icon--FontSize--md)}.dashboard .ins-c-metrics__metric__label{color:var(--pf-global--Color--200)}.dashboard .ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.dashboard .ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.dashboard .page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.dashboard .ins-m-green{color:var(--pf-global--palette--green-400)}.dashboard .ins-m-red{color:var(--pf-global--palette--red-100)}.dashboard .pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.dashboard .ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.dashboard .ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;--ins-c-width-limiter--MinWidth: 0;max-width:var(--ins-c-width-limiter--MaxWidth);min-width:var(--ins-c-width-limiter--MinWidth)}@media (min-width: 576px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}@media (min-width: 576px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))}}@media (min-width: 768px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))}}@media (min-width: 992px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))}}@media (min-width: 1200px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))))}}@media (min-width: 1450px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-2xl, var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))))}}.dashboard .pf-c-data-list{--ins-c-data-list__item-row--MinHeight: auto}@media screen and (min-width: 768px){.dashboard .pf-c-data-list.ins-m-toggle-right-on-md .pf-c-data-list__item-control{order:1;margin-right:calc(var(--pf-global--spacer--sm) * -1)}}.dashboard .pf-c-data-list .pf-c-data-list__cell.pf-m-display-flex{display:flex}.dashboard .pf-c-data-list .pf-c-data-list__cell+.pf-c-data-list__cell.pf-m-flex-none,.dashboard .pf-c-data-list .pf-c-data-list__cell.pf-m-flex-none{flex:none}.dashboard .pf-c-data-list.ins-m-no-border .pf-c-data-list__item::before{content:none}.dashboard .pf-c-data-list.ins-m-no-border .pf-c-data-list__expandable-content{border-top:none}.dashboard .pf-c-data-list.ins-m-no-padding{--pf-c-data-list__item-row--PaddingRight: 0;--pf-c-data-list__item-row--PaddingLeft: 0}.dashboard .pf-c-data-list.ins-m-no-top-border{--pf-c-data-list--BorderTopWidth: 0;--pf-c-data-list--BorderTopColor: transparent}.dashboard .pf-c-card>.pf-c-card{--pf-c-card--BoxShadow: none}@media screen and (min-width: 768px){.dashboard .pf-c-card.ins-m-toggle-right-on-md .pf-c-card__title{flex:1}.dashboard .pf-c-card.ins-m-toggle-right-on-md .pf-c-card__header-toggle{order:5;margin-right:calc(var(--pf-global--spacer--sm) * -1);margin-left:0;padding-left:var(--pf-c-card__header-toggle--MarginRight)}}.dashboard .pf-c-table.ins-m-no-left-padding{padding-right:var(--pf-c-table--cell--PaddingLeft);padding-left:0}.dashboard .pf-c-table.ins-m-no-styling tr:not(.pf-c-table__expandable-row){border-bottom:none}.dashboard .pf-c-table.ins-m-no-styling tr>*{--pf-c-table--cell--PaddingTop: 0;--pf-c-table--cell--PaddingRight: var(--pf-global--spacer--md);--pf-c-table--cell--PaddingBottom: 0;--pf-c-table--cell--PaddingLeft: var(--pf-global--spacer--md)}.dashboard .ins-c-legend{display:grid;grid-template-columns:max-content 1fr;column-gap:var(--pf-global--spacer--md)}.dashboard .ins-c-legend__item{display:flex;flex-wrap:nowrap}.dashboard .ins-c-legend__dot{--ins-c-legend__dot--BackgroundColor: #000;display:flex;align-items:center;margin-right:var(--pf-global--spacer--sm)}.dashboard .ins-c-legend__dot::before{content:'';display:block;width:12px;height:12px;border-radius:50%;background-color:var(--ins-c-legend__dot--BackgroundColor)}.dashboard .ins-c-legend__dot>*{margin-left:var(--pf-global--spacer--sm)}.dashboard .ins-c-legend__text{white-space:nowrap}.dashboard .pf-c-form-control.pf-m-plain{border:none}.dashboard .ins-l-columns{--ins-l-columns--MarginBottom: var(--pf-global--spacer--md);--ins-l-columns--Gap: var(--pf-global--gutter);gap:var(--ins-l-columns--Gap);column-fill:balance}@media screen and (min-width: 768px){.dashboard .ins-l-columns{columns:2}}@media screen and (min-width: 1200px){.dashboard .ins-l-columns.ins-m-3-col-on-xl{columns:3}}.dashboard .ins-l-columns>*{margin-bottom:var(--ins-l-columns--MarginBottom);break-inside:avoid}.dashboard .ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(auto-fit, minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr));--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.dashboard .ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}.dashboard .pf-l-grid.pf-m-full-height>.pf-c-card{align-self:stretch}.dashboard #root.pf-c-page__main{height:auto}.dashboard .ins-c-info-icon{padding-top:0;padding-bottom:0}\n",""]);const o=l},32796:(a,t,i)=>{"use strict";var e=i(93379),n=i.n(e),r=i(29849),l=n()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||a.hot.invalidate){var o=r.default.locals;a.hot.accept(29849,(t=>{r=i(29849),function(a,t,i){if(!a&&t||a&&!t)return!1;var e;for(e in a)if(a[e]!==t[e])return!1;for(e in t)if(!a[e])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,l(r.default)):a.hot.invalidate()}))}a.hot.dispose((function(){l()})),r.default.locals}}]);