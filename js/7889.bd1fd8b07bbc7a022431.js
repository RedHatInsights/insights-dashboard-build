(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[7889],{17889:(i,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var e=a(96156),n=a(28481),r=(a(32796),a(57149)),l=a(35224),o=a(47173),s=a(68774),d=a(56186),m=a(32203),c=a(70),A=a(60485),p=a(62394),C=a(28191),f=a(92298),h=a(93264),u=a.n(h),g=a(59303),v=a(98756),b=a(72550),w=a(50340),x=a(2447),_=a(24584),B=a(96191),y=a(77121),D=a(74183),M=a(69957),W=a(10358),k=a(37486),G=a(91727),T=a(46891),E=a(33818),S=a(66794),z=a(30893),N=a(86896);function O(i,t){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.push.apply(a,e)}return a}function j(i){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){(0,e.Z)(i,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(a,t))}))}return i}const P=function(){var i,t,a,e=[b.r.value,w.k.value,x.$.value,_.x.value],O=(0,N.Z)(),P=(0,h.useState)([]),I=(0,n.Z)(P,2),q=I[0],Z=I[1],F=(0,h.useState)([]),L=(0,n.Z)(F,2),R=L[0],J=L[1],Y=(0,h.useState)(),K=(0,n.Z)(Y,2),Q=K[0],H=K[1],U=(0,y.useDispatch)(),V=(0,y.useSelector)((function(i){return i.DashboardStore.advisorStatsRecs})),$=(0,y.useSelector)((function(i){return i.DashboardStore.advisorStatsRecsStatus})),X=(0,y.useSelector)((function(i){return i.DashboardStore.advisorIncidents})),ii=(0,y.useSelector)((function(i){return i.DashboardStore.advisorIncidentsStatus})),ti=(0,y.useSelector)((function(i){return i.DashboardStore.selectedTags})),ai=(0,y.useSelector)((function(i){return i.DashboardStore.workloads})),ei=(0,y.useSelector)((function(i){return i.DashboardStore.SID})),ni="&reports_shown=true&impacting=true&offset=0&limit=10".concat(null!=ti&&ti.length?"&tags=".concat(null==ti?void 0:ti.join()):"").concat(null!=ai&&ai.SAP?"&sap_system=true":"").concat(null!=ei&&ei.length?"&sap_sids=".concat(null==ei?void 0:ei.join()):""),ri=function(i){return"".concat(g.Pu,"/advisor/recommendations?total_risk=").concat(i).concat(ni)},li=R.map((function(i){return{name:"".concat(i.y," ").concat(i.x," "),fill:"".concat(i.fill),url:"".concat(g.Pu,"/advisor/recommendations?category=").concat(i.value).concat(ni)}}));return(0,h.useEffect)((function(){var i=j(j({},(0,v.nY)(ai,ei)),(null==ti?void 0:ti.length)>0&&{tags:ti});!function(i){U(r.$i(i))}(i),function(i){U(r.l5(i))}(i),function(i){U(r.ag(i))}(i)}),[ti,ai,ei,U]),(0,h.useEffect)((function(){if("fulfilled"===$){var i=V.total_risk,t=V.category,a=t.Stability+t.Availability+t.Performance+t.Security;Z([{title:"".concat((0,v.kC)(O.formatMessage(z.Z.critical))," "),risk:"".concat(i[g.eJ.critical]),value:g.eJ.critical},{title:"".concat((0,v.kC)(O.formatMessage(z.Z.important))," "),risk:"".concat(i[g.eJ.important]),value:g.eJ.important},{title:"".concat((0,v.kC)(O.formatMessage(z.Z.moderate))," "),risk:"".concat(i[g.eJ.moderate]),value:g.eJ.moderate},{title:"".concat((0,v.kC)(O.formatMessage(z.Z.low))," "),risk:"".concat(i[g.eJ.low]),value:g.eJ.low}]),J([{x:O.formatMessage(z.Z.availability,{count:t.Availability}),y:t.Availability,fill:e[0],value:1},{x:O.formatMessage(z.Z.stability,{count:t.Stability}),y:t.Stability,fill:e[1],value:3},{x:O.formatMessage(z.Z.performance,{count:t.Performance}),y:t.Performance,fill:e[2],value:4},{x:O.formatMessage(z.Z.security,{count:t.Security}),y:t.Security,fill:e[3],value:2}]),H(0===a?[B.J.value]:e)}}),[V,$]),u().createElement(D.M,{className:"ins-c-dashboard-card-parent ins-c-dashboard__card--compound--Advisor"},"pending"===ii||"pending"===$&&u().createElement(T.Z,null),"rejected"===ii?u().createElement(S.jA,null,u().createElement(k.Z,{appName:"Advisor"})):u().createElement(u().Fragment,null,u().createElement(W.t,{appName:"Advisor",className:"ins-m-toggle-right-on-md",title:O.formatMessage(z.Z.advisorCardHeader1),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor1")||"true"),isExpandedCallback:function(i){return localStorage.setItem("dashboard_expanded_advisor1",i)},body:u().createElement(S.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-2xl"},u().createElement(C.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},u().createElement(f.B,null,u().createElement(C.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},(null==X||null===(i=X.meta)||void 0===i?void 0:i.count)>0&&u().createElement(M.ZP,{className:"pf-u-font-size-xl pf-u-warning-color-100"}),u().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},O.formatMessage(z.Z.incidents,{incidents:null==X||null===(t=X.meta)||void 0===t?void 0:t.count}))),u().createElement(s.D,{className:"ins-c-width-limiter pf-u-text-align-center",style:{"--ins-c-width-limiter--MaxWidth":"34ch"}},u().createElement("p",{className:"pf-u-font-size-sm"},O.formatMessage(z.Z.advisorCardMessage)))),u().createElement(o.zx,{variant:"secondary",isSmall:!0,component:"a",href:"".concat(g.Pu).concat("/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true")},O.formatMessage(z.Z.advisorCardCTA))))}),u().createElement(d.i,{inset:{md:"insetLg"}}),u().createElement(W.t,{appName:"advisor-recommendation-by-total-risk",className:"ins-m-toggle-right-on-md",title:u().createElement(C.k,{flexWrap:{default:"nowrap"}},O.formatMessage(z.Z.advisorCardHeader2),(a=O.formatMessage(z.Z.totalRiskDef,{em:function(i){return u().createElement("em",null,i)}}),u().createElement(l.u,{key:a,position:l.D.top,content:u().createElement("div",null,a)},u().createElement(o.zx,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},u().createElement(G.Z,null))))),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor2")||"true"),isExpandedCallback:function(i){return localStorage.setItem("dashboard_expanded_advisor2",i)},body:u().createElement(S.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-0"},u().createElement(C.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItems3xl"}},q.map((function(i){var t=i.title,a=i.risk,e=i.value;return u().createElement("a",{key:t,href:ri(e)},u().createElement(C.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},u().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-normal"},a),u().createElement("span",{className:"pf-u-font-size-sm"},t)))}))),u().createElement(m.Z,{component:"div"},u().createElement(c.l,null,u().createElement(A.D,{headingLevel:"h4",size:"lg"},O.formatMessage(z.Z.advisorCardHeader3))),u().createElement(p.e,{className:"pf-u-pt-sm"},u().createElement(C.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},u().createElement(C.k,{alignItems:{default:"alignItemsCenter"},spaceItems:{default:"spaceItemsXl"}},u().createElement(f.B,null,u().createElement(E.u,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chartt",constrainToVisibleArea:!0,data:R,colorScale:Q,padding:{bottom:0,left:0,right:0,top:0},height:100,width:100})),u().createElement("div",{className:"ins-c-legend"},li.map((function(i){return u().createElement("a",{key:i.url,href:i.url,className:"ins-c-legend__item"},u().createElement("span",{className:"ins-c-legend__dot",style:{"--ins-c-legend__dot--BackgroundColor":"".concat(i.fill)}}),u().createElement("span",{className:"ins-c-legend__text"},i.name))}))))))))})))}},29849:(i,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var e=a(94015),n=a.n(e),r=a(23645),l=a.n(r),o=a(35080),s=l()(n());s.i(o.Z),s.push([i.id,".dashboard{}.dashboard :root{--ins-color--orange: #ec7a08}.dashboard #root.pf-c-page__main.dashboard{height:auto}.dashboard html,.dashboard body{height:100vh;overflow:hidden}.dashboard .ins-c-sidebar+.pf-c-page__drawer .pf-c-drawer__content>div{display:contents}.dashboard .ins-c-drawer-control{position:absolute;top:100px;right:10px;z-index:1000}.dashboard .ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.dashboard .ins-c-summary__emphasis{font-size:32px;font-size:2rem}.dashboard .ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.dashboard .ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.dashboard .ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.dashboard .ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.dashboard .ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.dashboard .ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.dashboard .ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.dashboard .ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.dashboard .ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.dashboard .ins-c-metrics{position:relative;display:flex;justify-content:space-evenly}.dashboard .ins-c-metrics::before{position:absolute;content:'';top:0;right:0;bottom:0;left:0;pointer-events:none;border-top:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100)}.dashboard .ins-c-metrics__metric{display:inline-grid;align-items:center;grid-auto-flow:column;grid-gap:var(--pf-global--spacer--sm);padding:var(--pf-global--spacer--md) var(--pf-global--spacer--sm)}.dashboard .ins-c-metrics__metric>svg{font-size:var(--pf-global--icon--FontSize--md)}.dashboard .ins-c-metrics__metric-number{font-size:var(--pf-global--icon--FontSize--md)}.dashboard .ins-c-metrics__metric__label{color:var(--pf-global--Color--200)}.dashboard .ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.dashboard .ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.dashboard .page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.dashboard .ins-m-green{color:var(--pf-global--palette--green-400)}.dashboard .ins-m-red{color:var(--pf-global--palette--red-100)}.dashboard .pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.dashboard .ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.dashboard .ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;--ins-c-width-limiter--MinWidth: 0;max-width:var(--ins-c-width-limiter--MaxWidth);min-width:var(--ins-c-width-limiter--MinWidth)}@media (min-width: 576px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}@media (min-width: 576px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))}}@media (min-width: 768px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))}}@media (min-width: 992px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))}}@media (min-width: 1200px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))))}}@media (min-width: 1450px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-2xl, var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))))}}.dashboard .pf-c-data-list{--ins-c-data-list__item-row--MinHeight: auto}@media screen and (min-width: 768px){.dashboard .pf-c-data-list.ins-m-toggle-right-on-md .pf-c-data-list__item-control{order:1;margin-right:calc(var(--pf-global--spacer--sm) * -1)}}.dashboard .pf-c-data-list .pf-c-data-list__cell.pf-m-display-flex{display:flex}.dashboard .pf-c-data-list .pf-c-data-list__cell+.pf-c-data-list__cell.pf-m-flex-none,.dashboard .pf-c-data-list .pf-c-data-list__cell.pf-m-flex-none{flex:none}.dashboard .pf-c-data-list.ins-m-no-border .pf-c-data-list__item::before{content:none}.dashboard .pf-c-data-list.ins-m-no-border .pf-c-data-list__expandable-content{border-top:none}.dashboard .pf-c-data-list.ins-m-no-padding{--pf-c-data-list__item-row--PaddingRight: 0;--pf-c-data-list__item-row--PaddingLeft: 0}.dashboard .pf-c-data-list.ins-m-no-top-border{--pf-c-data-list--BorderTopWidth: 0;--pf-c-data-list--BorderTopColor: transparent}.dashboard .pf-c-card>.pf-c-card{--pf-c-card--BoxShadow: none}@media screen and (min-width: 768px){.dashboard .pf-c-card.ins-m-toggle-right-on-md .pf-c-card__title{flex:1}.dashboard .pf-c-card.ins-m-toggle-right-on-md .pf-c-card__header-toggle{order:5;margin-right:calc(var(--pf-global--spacer--sm) * -1);margin-left:0;padding-left:var(--pf-c-card__header-toggle--MarginRight)}}.dashboard .pf-c-table.ins-m-no-left-padding{padding-right:var(--pf-c-table--cell--PaddingLeft);padding-left:0}.dashboard .pf-c-table.ins-m-no-styling tr:not(.pf-c-table__expandable-row){border-bottom:none}.dashboard .pf-c-table.ins-m-no-styling tr>*{--pf-c-table--cell--PaddingTop: 0;--pf-c-table--cell--PaddingRight: var(--pf-global--spacer--md);--pf-c-table--cell--PaddingBottom: 0;--pf-c-table--cell--PaddingLeft: var(--pf-global--spacer--md)}.dashboard .ins-c-legend{display:grid;grid-template-columns:max-content 1fr;column-gap:var(--pf-global--spacer--md)}.dashboard .ins-c-legend__item{display:flex;flex-wrap:nowrap}.dashboard .ins-c-legend__dot{--ins-c-legend__dot--BackgroundColor: #000;display:flex;align-items:center;margin-right:var(--pf-global--spacer--sm)}.dashboard .ins-c-legend__dot::before{content:'';display:block;width:12px;height:12px;border-radius:50%;background-color:var(--ins-c-legend__dot--BackgroundColor)}.dashboard .ins-c-legend__dot>*{margin-left:var(--pf-global--spacer--sm)}.dashboard .ins-c-legend__text{white-space:nowrap}.dashboard .pf-c-form-control.pf-m-plain{border:none}.dashboard .ins-l-columns{--ins-l-columns--MarginBottom: var(--pf-global--spacer--md);--ins-l-columns--Gap: var(--pf-global--gutter);gap:var(--ins-l-columns--Gap);column-fill:balance}@media screen and (min-width: 768px){.dashboard .ins-l-columns{columns:2}}@media screen and (min-width: 1200px){.dashboard .ins-l-columns.ins-m-3-col-on-xl{columns:3}}.dashboard .ins-l-columns>*{margin-bottom:var(--ins-l-columns--MarginBottom);break-inside:avoid}.dashboard .ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(auto-fit, minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr));--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.dashboard .ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}.dashboard .pf-l-grid.pf-m-full-height>.pf-c-card{align-self:stretch}.dashboard #root.pf-c-page__main{height:auto}.dashboard .ins-c-info-icon{padding-top:0;padding-bottom:0}\n","",{version:3,sources:["webpack://./src/SmartComponents/Advisor/Advisor.scss"],names:[],mappings:"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",sourcesContent:[".dashboard{\n@import url(~@patternfly/patternfly/utilities/Alignment/alignment.css);:root{--ins-color--orange: #ec7a08}#root.pf-c-page__main.dashboard{height:auto}html,body{height:100vh;overflow:hidden}.ins-c-sidebar+.pf-c-page__drawer .pf-c-drawer__content>div{display:contents}.ins-c-drawer-control{position:absolute;top:100px;right:10px;z-index:1000}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-metrics{position:relative;display:flex;justify-content:space-evenly}.ins-c-metrics::before{position:absolute;content:'';top:0;right:0;bottom:0;left:0;pointer-events:none;border-top:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100)}.ins-c-metrics__metric{display:inline-grid;align-items:center;grid-auto-flow:column;grid-gap:var(--pf-global--spacer--sm);padding:var(--pf-global--spacer--md) var(--pf-global--spacer--sm)}.ins-c-metrics__metric>svg{font-size:var(--pf-global--icon--FontSize--md)}.ins-c-metrics__metric-number{font-size:var(--pf-global--icon--FontSize--md)}.ins-c-metrics__metric__label{color:var(--pf-global--Color--200)}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.ins-m-green{color:var(--pf-global--palette--green-400)}.ins-m-red{color:var(--pf-global--palette--red-100)}.pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;--ins-c-width-limiter--MinWidth: 0;max-width:var(--ins-c-width-limiter--MaxWidth);min-width:var(--ins-c-width-limiter--MinWidth)}@media (min-width: 576px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}@media (min-width: 576px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))}}@media (min-width: 768px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))}}@media (min-width: 992px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))}}@media (min-width: 1200px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))))}}@media (min-width: 1450px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-2xl, var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))))}}.pf-c-data-list{--ins-c-data-list__item-row--MinHeight: auto}@media screen and (min-width: 768px){.pf-c-data-list.ins-m-toggle-right-on-md .pf-c-data-list__item-control{order:1;margin-right:calc(var(--pf-global--spacer--sm) * -1)}}.pf-c-data-list .pf-c-data-list__cell.pf-m-display-flex{display:flex}.pf-c-data-list .pf-c-data-list__cell+.pf-c-data-list__cell.pf-m-flex-none,.pf-c-data-list .pf-c-data-list__cell.pf-m-flex-none{flex:none}.pf-c-data-list.ins-m-no-border .pf-c-data-list__item::before{content:none}.pf-c-data-list.ins-m-no-border .pf-c-data-list__expandable-content{border-top:none}.pf-c-data-list.ins-m-no-padding{--pf-c-data-list__item-row--PaddingRight: 0;--pf-c-data-list__item-row--PaddingLeft: 0}.pf-c-data-list.ins-m-no-top-border{--pf-c-data-list--BorderTopWidth: 0;--pf-c-data-list--BorderTopColor: transparent}.pf-c-card>.pf-c-card{--pf-c-card--BoxShadow: none}@media screen and (min-width: 768px){.pf-c-card.ins-m-toggle-right-on-md .pf-c-card__title{flex:1}.pf-c-card.ins-m-toggle-right-on-md .pf-c-card__header-toggle{order:5;margin-right:calc(var(--pf-global--spacer--sm) * -1);margin-left:0;padding-left:var(--pf-c-card__header-toggle--MarginRight)}}.pf-c-table.ins-m-no-left-padding{padding-right:var(--pf-c-table--cell--PaddingLeft);padding-left:0}.pf-c-table.ins-m-no-styling tr:not(.pf-c-table__expandable-row){border-bottom:none}.pf-c-table.ins-m-no-styling tr>*{--pf-c-table--cell--PaddingTop: 0;--pf-c-table--cell--PaddingRight: var(--pf-global--spacer--md);--pf-c-table--cell--PaddingBottom: 0;--pf-c-table--cell--PaddingLeft: var(--pf-global--spacer--md)}.ins-c-legend{display:grid;grid-template-columns:max-content 1fr;column-gap:var(--pf-global--spacer--md)}.ins-c-legend__item{display:flex;flex-wrap:nowrap}.ins-c-legend__dot{--ins-c-legend__dot--BackgroundColor: #000;display:flex;align-items:center;margin-right:var(--pf-global--spacer--sm)}.ins-c-legend__dot::before{content:'';display:block;width:12px;height:12px;border-radius:50%;background-color:var(--ins-c-legend__dot--BackgroundColor)}.ins-c-legend__dot>*{margin-left:var(--pf-global--spacer--sm)}.ins-c-legend__text{white-space:nowrap}.pf-c-form-control.pf-m-plain{border:none}.ins-l-columns{--ins-l-columns--MarginBottom: var(--pf-global--spacer--md);--ins-l-columns--Gap: var(--pf-global--gutter);gap:var(--ins-l-columns--Gap);column-fill:balance}@media screen and (min-width: 768px){.ins-l-columns{columns:2}}@media screen and (min-width: 1200px){.ins-l-columns.ins-m-3-col-on-xl{columns:3}}.ins-l-columns>*{margin-bottom:var(--ins-l-columns--MarginBottom);break-inside:avoid}.ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(auto-fit, minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr));--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}.pf-l-grid.pf-m-full-height>.pf-c-card{align-self:stretch}#root.pf-c-page__main{height:auto}.ins-c-info-icon{padding-top:0;padding-bottom:0}\n\n}"],sourceRoot:""}]);const d=s},32796:(i,t,a)=>{"use strict";var e=a(93379),n=a.n(e),r=a(29849),l=n()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||i.hot.invalidate){var o=r.default.locals;i.hot.accept(29849,(t=>{r=a(29849),function(i,t,a){if(!i&&t||i&&!t)return!1;var e;for(e in i)if(i[e]!==t[e])return!1;for(e in t)if(!i[e])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,l(r.default)):i.hot.invalidate()}))}i.hot.dispose((function(){l()})),r.default.locals}}]);
//# sourceMappingURL=../sourcemaps/7889.7fb93e63a4ab00f6e8ac.js.map