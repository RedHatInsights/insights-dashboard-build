(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[984],{10984:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var a=n(96156),r=n(57149),o=n(28191),i=n(92298),c=n(93264),s=n.n(c),l=n(98756),m=n(47173),u=n(37486),y=n(90098),v=n(27839),f=n(52564),g=n(35224),d=n(91727),p=n(45697),S=n.n(p),h=function(e){var t=e.data,n=e.dataSize,a=e.percentageData,r=e.iconTooltipText;return s().createElement("div",null,s().createElement("span",{className:"ins-c-dashboard__number-data--".concat(n)},t),a&&s().createElement("span",{className:"ins-c-dashboard__number-percentage"},s().createElement("span",null,a),s().createElement(g.u,{key:"".concat(r),position:g.D.top,content:s().createElement("div",null,r)},s().createElement(m.zx,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},s().createElement(d.Z,null)))))};h.propTypes={data:S().any,dataSize:S().string,linkDescription:S().string,percentageData:S().string,iconTooltipText:S().node};var I=function(e){var t=e.data,n=e.dataSize,a=e.link,r=e.linkDescription,c=e.layout,l=e.critical,u=e.iconTooltipText;return s().createElement("div",{className:"".concat(c?"pf-m-".concat(c):"")},"true"===l&&s().createElement(f.Z,null),s().createElement(o.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsXs"}},s().createElement(i.B,null,s().createElement(h,{data:t,dataSize:n,iconTooltipText:u})),s().createElement(i.B,null,s().createElement(m.zx,{component:"a",isInline:!0,variant:"link",href:a},r))))};I.propTypes={data:S().any,dataSize:S().string,percentageData:S().string,link:S().any,linkDescription:S().string,layout:S().string,critical:S().string,iconTooltipText:S().node,flexDirection:S().object};var E=n(59303),b=n(88931),T=n(30893),k=n(86896),w=n(31876);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.fetchInventory,n=e.inventoryFetchStatus,a=e.inventorySummary,r=e.fetchInventoryStale,f=e.inventoryStaleFetchStatus,g=e.inventoryStaleSummary,d=e.fetchInventoryWarning,p=e.inventoryWarningFetchStatus,S=e.inventoryWarningSummary,h=e.fetchInventoryTotal,b=e.inventoryTotalFetchStatus,D=(e.inventoryTotalSummary,e.selectedTags),j=e.workloads,F=e.SID,x=(0,w.T)("inventory",["inventory:*:*","inventory:*:read","inventory:hosts:*","inventory:hosts:read"]).hasAccess;(0,c.useEffect)((function(){var e=O(O({},(0,l.nY)(j,F)),(null==D?void 0:D.length)>0&&{tags:D});h(e),t(e),r(e),d(e)}),[h,t,r,d,D,j,F]);var W=(0,k.Z)();return s().createElement(s().Fragment,null,!1===x?s().createElement(v.Z,{showReturnButton:!1,serviceName:"Inventory",icon:function(){return""},variant:"xs",description:s().createElement("div",null,W.formatMessage(T.Z.systemInventoryNoAccess))}):s().createElement(o.k,{spaceItems:{md:"spaceItemsXl"},alignItems:{md:"alignItemsCenter"},direction:{default:"column",md:"row"}},s().createElement(o.k,{spaceItems:{default:"spaceItemsXl"}},"fulfilled"===n&&"fulfilled"===b&&s().createElement(I,{data:a.total.toLocaleString()||0,dataSize:"lg",linkDescription:W.formatMessage(T.Z.systemInventoryDescription,{count:a.total||0}),link:"./insights/inventory/?status=fresh&status=stale&source=insights"})),s().createElement(o.k,{spaceItems:{default:"spaceItemsXl"},alignItems:{md:"alignItemsCenter"},flex:{default:"flex_1"},direction:{default:"column",md:"row"}},s().createElement(o.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"}},s().createElement(i.B,null,"fulfilled"===f&&s().createElement(m.zx,{component:"a",variant:"link",href:"./insights/inventory/?status=stale",isInline:!0},s().createElement(y.w,{message:W.formatMessage(T.Z.systemInventoryStale,{count:g.total||0}),state:"warning",systemInventory:!0}))),s().createElement(i.B,null,"fulfilled"===p&&s().createElement(m.zx,{component:"a",variant:"link",href:"./insights/inventory/?status=stale_warning",isInline:!0},s().createElement(y.w,{message:W.formatMessage(T.Z.systemInventoryStaleWarning,{count:S.total||0}),state:"critical",systemInventory:!0}))),"rejected"===b&&s().createElement(u.Z,{appName:"Inventory",isSmall:!0})),s().createElement(i.B,{align:{md:"alignRight"}},s().createElement(m.zx,{component:"a",variant:"primary",href:"".concat(E.Pu,"/registration")},W.formatMessage(T.Z.systemInventoryCTA))))))};j.propTypes={fetchInventory:S().func,inventorySummary:S().object,inventoryFetchStatus:S().string,fetchInventoryStale:S().func,inventoryStaleSummary:S().object,inventoryStaleFetchStatus:S().string,fetchInventoryWarning:S().func,inventoryWarningSummary:S().object,inventoryWarningFetchStatus:S().string,fetchInventoryTotal:S().func,inventoryTotalSummary:S().object,inventoryTotalFetchStatus:S().string,intl:S().any,selectedTags:S().arrayOf(S().string),workloads:l.ib,SID:S().arrayOf(S().string)};const F=(0,b.connect)((function(e){var t=e.DashboardStore;return{inventorySummary:t.inventorySummary,inventoryFetchStatus:t.inventoryFetchStatus,inventoryStaleSummary:t.inventoryStaleSummary,inventoryStaleFetchStatus:t.inventoryStaleFetchStatus,inventoryWarningSummary:t.inventoryWarningSummary,inventoryWarningFetchStatus:t.inventoryWarningFetchStatus,inventoryTotalSummary:t.inventoryTotalSummary,inventoryTotalFetchStatus:t.inventoryTotalFetchStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchInventory:function(t){return e(r.r7(t))},fetchInventoryStale:function(t){return e(r.n(t))},fetchInventoryWarning:function(t){return e(r.Qo(t))},fetchInventoryTotal:function(t){return e(r.nB(t))}}}))(j)}}]);
//# sourceMappingURL=../sourcemaps/984.8b57d7a235e4a6d52272.js.map