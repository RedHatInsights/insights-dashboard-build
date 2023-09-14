"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[7639],{5964:(e,t,n)=>{n.d(t,{VA:()=>l,ZP:()=>s,kc:()=>r});var a=n(40400);const r={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},l=(0,a.IU)(r),s=l},5978:(e,t,n)=>{n.d(t,{Mx:()=>l,ZP:()=>s,pP:()=>r});var a=n(40400);const r={name:"SortUpIcon",height:512,width:320,svgPath:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z",yOffset:0,xOffset:0},l=(0,a.IU)(r),s=l},47639:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(98152),r=n(57149),l=n(59303),s=n(4001),i=n(93264),c=n.n(i),o=n(86896),m=n(10358),f=n(66794),d=n(28191),u=n(92298),p=n(45697),E=n.n(p),g=n(14938),h=n(5964),y=function(e){var t=e.fetchDriftData,n=e.selectedFilter,r=(0,o.Z)(),l=(0,i.useRef)([]),m=(0,i.useState)(!1),f=(0,a.Z)(m,2),d=f[0],u=f[1];return(0,i.useEffect)((function(){l.current=(0,s.J1)(r)}),[]),c().createElement(g.Dropdown,{toggle:c().createElement(g.DropdownToggle,{onToggle:u,toggleIndicator:h.ZP},n.description),isOpen:d,dropdownItems:l.current.map((function(e,n){return c().createElement(g.DropdownItem,{key:n,ref:function(e){return l.current[n].el=e},onClick:function(){return function(e,n){t(e),u((function(e){return!e})),n.focus()}(e,l.current[n].el)}},e.description)}))})};y.propTypes={fetchDriftData:E().func,selectedFilter:E().shape({description:E().string})};var D=n(30893),_=n(5978),b=function(){var e=(0,o.Z)();return c().createElement(g.EmptyState,null,c().createElement(g.Title,{headingLevel:"h4",size:"lg"},e.formatMessage(D.Z.driftEmptyStateTitle)),c().createElement(g.EmptyStateBody,null,c().createElement(g.Text,null,e.formatMessage(D.Z.driftEmptyStateBodyCreateBaseline)),c().createElement(g.Text,null,e.formatMessage(D.Z.driftEmptyStateBodyEnableNotif))),c().createElement(g.Button,{href:"".concat(l.fz),component:"a",variant:"primary"},"Go to Baselines"))},v=n(28216),C=n(55140),Z=function(){var e,t="prod"===(0,C.Z)().getEnvironment()?"2212b1ce-4ed0-49a3-ba3c-bc147f1690fd":"ccb37fde-8564-4a7c-8720-d78a07e2fbde",n=(0,o.Z)(),p=(0,v.I0)(),E=(0,i.useState)({id:"hours-24",description:n.formatMessage(D.Z.driftDropDown24hours),startDate:(0,s._3)(1),endDate:(0,s._3)(0)}),h=(0,a.Z)(E,2),Z=h[0],I=h[1],k=(0,i.useState)(!0),w=(0,a.Z)(k,2),x=w[0],N=w[1],T=(0,v.v9)((function(e){return e.DashboardStore.driftEvents})),M=(0,v.v9)((function(e){return e.DashboardStore.driftEventFetchStatus})),S=(0,i.useCallback)((function(e){p(r.fP({appIds:t,startDate:e.startDate,endDate:e.endDate,includePayload:!0})),I(e)}),[p]);return(0,i.useEffect)((function(){S(Z)}),[S,Z.id]),c().createElement(m.t,{className:"insd-m-toggle-right-on-md",appName:"Drift",isExpanded:x,isExpandedCallback:N,title:c().createElement(d.k,null,c().createElement(u.B,null,n.formatMessage(D.Z.driftCardTitle)),x?c().createElement(u.B,{className:"ins-c-drift__drop_down",align:{default:"alignRight"}},c().createElement(y,{fetchDriftData:S,selectedFilter:Z})):null),body:c().createElement(c().Fragment,null,"pending"===M?c().createElement(c().Fragment,null,c().createElement(g.Bullseye,null,c().createElement(g.Spinner,{className:"ins-c-drift__drift_spinner"}))):c().createElement(c().Fragment,null,(null===(e=T.baselineDetail)||void 0===e?void 0:e.length)>0?c().createElement(f.jA,null,c().createElement(d.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},c().createElement(u.B,null,c().createElement(d.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},c().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},T.numEvents)),c().createElement(g.TextContent,{className:"insd-c-width-limiter pf-u-text-align-center"},c().createElement("p",{className:"pf-u-font-size-sm"},n.formatMessage(D.Z.driftNumberOfEvents)))),c().createElement(g.Button,{variant:"secondary",component:"a",className:"ins-c-drift__investigate_button",href:l.Ld},n.formatMessage(D.Z.driftInventigateButtton))),c().createElement(g.Divider,null),c().createElement(g.TextContent,{className:"insd-c-width-limiter ins-c-drift__top_5"},c().createElement("p",{className:"pf-u-font-size-sm pf-u-font-weight-bold"},n.formatMessage(D.Z.driftTop5))),c().createElement(g.DataList,{className:"insd-m-no-padding insd-m-no-top-border insd-m-no-bottom-border",isCompact:!0},T.baselineDetail.slice(0,l.ds).map((function(e,t){return c().createElement(g.DataListItem,{key:t},c().createElement(g.DataListItemRow,null,c().createElement(g.DataListItemCells,{dataListCells:[c().createElement(c().Fragment,{key:t},c().createElement(g.DataListCell,{key:"title-".concat(t),wrapModifier:g.DataListWrapModifier.truncate},c().createElement(g.Text,{component:g.TextVariants.a,href:"".concat(l.fz,"/").concat(e.baselineId)},e.baselineName)),c().createElement(g.DataListCell,{key:"system-".concat(t),className:"ins-c-drift__data_list_cell_system_len"},c().createElement("span",{className:"pf-u-font-weight-normal ins-c-drift__system_len"},c().createElement(_.ZP,{color:"black"}),n.formatMessage(D.Z.driftSystems,{systems:e.systems.length}))),c().createElement(g.DataListCell,{key:"compare-".concat(t),className:"ins-c-drift__data_list_cell_compare"},c().createElement(g.Tooltip,{content:c().createElement("div",null,n.formatMessage(D.Z.driftCompareTooltip))},c().createElement(g.Text,{component:g.TextVariants.a,href:(0,s.My)(e.baselineId,e.systems),className:"ins-c-drift__text_compare"},n.formatMessage(D.Z.driftCompare)))))]})))})))):c().createElement(b,null)))})};Z.propTypes={fetchDrift:E().func,driftEvents:E().object,driftEventFetchStatus:E().string,intl:E().any};const I=Z}}]);
//# sourceMappingURL=../sourcemaps/7639.572b3489f5d33a533b1e35a8fe24ee0f.js.map