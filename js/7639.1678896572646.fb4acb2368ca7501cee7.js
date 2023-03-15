"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[7639],{5964:(e,t,n)=>{n.d(t,{kc:()=>r,VA:()=>l,ZP:()=>s});var a=n(40400);const r={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},l=(0,a.IU)(r),s=l},5978:(e,t,n)=>{n.d(t,{pP:()=>r,Mx:()=>l,ZP:()=>s});var a=n(40400);const r={name:"SortUpIcon",height:512,width:320,svgPath:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z",yOffset:0,xOffset:0},l=(0,a.IU)(r),s=l},47639:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(70885),r=n(57149),l=n(59303),s=n(4001),i=n(93264),c=n.n(i),o=n(86896),m=n(10358),f=n(66794),d=n(28191),u=n(92298),p=n(45697),E=n.n(p),g=n(14938),h=n(5964),y=function(e){var t=e.fetchDriftData,n=e.selectedFilter,r=(0,o.Z)(),l=(0,i.useRef)([]),m=(0,i.useState)(!1),f=(0,a.Z)(m,2),d=f[0],u=f[1];return(0,i.useEffect)((function(){l.current=(0,s.J1)(r)}),[]),c().createElement(g.Dropdown,{toggle:c().createElement(g.DropdownToggle,{onToggle:u,toggleIndicator:h.ZP},n.description),isOpen:d,dropdownItems:l.current.map((function(e,n){return c().createElement(g.DropdownItem,{key:n,ref:function(e){return l.current[n].el=e},onClick:function(){return function(e,n){t(e),u((function(e){return!e})),n.focus()}(e,l.current[n].el)}},e.description)}))})};y.propTypes={fetchDriftData:E().func,selectedFilter:E().shape({description:E().string})};var D=n(30893),_=n(5978),v=function(){var e=(0,o.Z)();return c().createElement(g.EmptyState,null,c().createElement(g.Title,{headingLevel:"h4",size:"lg"},e.formatMessage(D.Z.driftEmptyStateTitle)),c().createElement(g.EmptyStateBody,null,c().createElement(g.Text,null,e.formatMessage(D.Z.driftEmptyStateBodyCreateBaseline)),c().createElement(g.Text,null,e.formatMessage(D.Z.driftEmptyStateBodyEnableNotif))),c().createElement(g.Button,{href:"".concat(l.fz),component:"a",variant:"primary"},"Go to Baselines"))},C=n(28216),b=n(54291),Z=function(){var e,t=(0,o.Z)(),n=(0,C.I0)(),p=(0,i.useState)({id:"hours-24",description:t.formatMessage(D.Z.driftDropDown24hours),startDate:(0,s._3)(1),endDate:(0,s._3)(0)}),E=(0,a.Z)(p,2),h=E[0],b=E[1],Z=(0,i.useState)(!0),I=(0,a.Z)(Z,2),k=I[0],w=I[1],x=(0,C.v9)((function(e){return e.DashboardStore.driftEvents})),N=(0,C.v9)((function(e){return e.DashboardStore.driftEventFetchStatus})),T=(0,i.useCallback)((function(e){n(r.fP({appIds:l.R9,startDate:e.startDate,endDate:e.endDate,includePayload:!0})),b(e)}),[n]);return(0,i.useEffect)((function(){T(h)}),[T,h.id]),c().createElement(m.t,{className:"insd-m-toggle-right-on-md",appName:"Drift",isExpanded:k,isExpandedCallback:w,title:c().createElement(d.k,null,c().createElement(u.B,null,t.formatMessage(D.Z.driftCardTitle)),k?c().createElement(u.B,{className:"ins-c-drift__drop_down",align:{default:"alignRight"}},c().createElement(y,{fetchDriftData:T,selectedFilter:h})):null),body:c().createElement(c().Fragment,null,"pending"===N?c().createElement(c().Fragment,null,c().createElement(g.Bullseye,null,c().createElement(g.Spinner,{className:"ins-c-drift__drift_spinner"}))):c().createElement(c().Fragment,null,(null===(e=x.baselineDetail)||void 0===e?void 0:e.length)>0?c().createElement(f.jA,null,c().createElement(d.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},c().createElement(u.B,null,c().createElement(d.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},c().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},x.numEvents)),c().createElement(g.TextContent,{className:"insd-c-width-limiter pf-u-text-align-center"},c().createElement("p",{className:"pf-u-font-size-sm"},t.formatMessage(D.Z.driftNumberOfEvents)))),c().createElement(g.Button,{variant:"secondary",component:"a",className:"ins-c-drift__investigate_button",href:l.Ld},t.formatMessage(D.Z.driftInventigateButtton))),c().createElement(g.Divider,null),c().createElement(g.TextContent,{className:"insd-c-width-limiter ins-c-drift__top_5"},c().createElement("p",{className:"pf-u-font-size-sm pf-u-font-weight-bold"},t.formatMessage(D.Z.driftTop5))),c().createElement(g.DataList,{className:"insd-m-no-padding insd-m-no-top-border insd-m-no-bottom-border",isCompact:!0},x.baselineDetail.slice(0,l.ds).map((function(e,n){return c().createElement(g.DataListItem,{key:n},c().createElement(g.DataListItemRow,null,c().createElement(g.DataListItemCells,{dataListCells:[c().createElement(c().Fragment,{key:n},c().createElement(g.DataListCell,{key:"title-".concat(n),wrapModifier:g.DataListWrapModifier.truncate},c().createElement(g.Text,{component:g.TextVariants.a,href:"".concat(l.fz,"/").concat(e.baselineId)},e.baselineName)),c().createElement(g.DataListCell,{key:"system-".concat(n),className:"ins-c-drift__data_list_cell_system_len"},c().createElement("span",{className:"pf-u-font-weight-normal ins-c-drift__system_len"},c().createElement(_.ZP,{color:"black"}),t.formatMessage(D.Z.driftSystems,{systems:e.systems.length}))),c().createElement(g.DataListCell,{key:"compare-".concat(n),className:"ins-c-drift__data_list_cell_compare"},c().createElement(g.Tooltip,{content:c().createElement("div",null,t.formatMessage(D.Z.driftCompareTooltip))},c().createElement(g.Text,{component:g.TextVariants.a,href:(0,s.My)(e.baselineId,e.systems),className:"ins-c-drift__text_compare"},t.formatMessage(D.Z.driftCompare)))))]})))})))):c().createElement(v,null)))})};Z.propTypes={fetchDrift:E().func,driftEvents:E().object,driftEventFetchStatus:E().string,intl:E().any};const I=(0,b.Z)(Z)}}]);
//# sourceMappingURL=../sourcemaps/7639.2fb476217afc9ecff99562686b5b3b2f.js.map