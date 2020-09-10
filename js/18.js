(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1251:function(t,e,n){var a=n(7),r=n(992);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=a(r,i);if(!r.locals||t.hot.invalidate){var l=r.locals;t.hot.accept(992,(function(){"string"==typeof(r=(r=n(992)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var n;for(n in t)if(t[n]!==e[n])return!1;for(n in e)if(!t[n])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},1265:function(t,e,n){"use strict";n.r(e);n(1251);var a=n(461),r=n(1),i=n.n(r),o=n(860),l=n(216),s=n(856),c=n(859),u=n(922),f=n(14),d=n.n(f),m=n(136),p=n(850),y=n(481),v=function(t){var e=t.fetchInventory,n=t.inventoryFetchStatus,a=t.inventorySummary,f=t.fetchInventoryStale,d=t.inventoryStaleFetchStatus,m=t.inventoryStaleSummary,v=t.fetchInventoryWarning,h=t.inventoryWarningFetchStatus,g=t.inventoryWarningSummary,b=t.fetchInventoryTotal,S=t.inventoryTotalFetchStatus,_=t.inventoryTotalSummary;Object(r.useEffect)((function(){b(),e(),f(),v()}),[b,e,f,v]);var x=Object(y.a)();return i.a.createElement(o.a,{appName:"SystemInventory"},i.a.createElement(o.c,{subtitle:x.formatMessage(p.a.systemInventoryTitle)}),i.a.createElement(o.b,{isFilled:!1,className:"dashboard-card-system-inventory-body"},"fulfilled"===n&&"fulfilled"===S&&i.a.createElement(u.a,{data:a.total.toLocaleString()||0,dataSize:"lg",percentageData:x.formatMessage(p.a.systemInventoryPercentageData,{count:Math.floor(a.total/_.total*100)||0}),linkDescription:x.formatMessage(p.a.systemInventoryDescription,{count:a.total||0}),link:"./insights/inventory",iconTooltipText:x.formatMessage(p.a.systemInventoryNotUsingClient,{count:_.total-a.total||0})}),"fulfilled"===d&&i.a.createElement(l.Button,{component:"a",variant:"link",href:"./insights/inventory/?status=stale",isInline:!0},i.a.createElement(c.a,{message:x.formatMessage(p.a.systemInventoryStale,{count:m.total||0}),state:"warning",systemInventory:"true"})),"fulfilled"===h&&i.a.createElement(l.Button,{component:"a",variant:"link",href:"./insights/inventory/?status=stale_warning",isInline:!0},i.a.createElement(c.a,{message:x.formatMessage(p.a.systemInventoryStaleWarning,{count:g.total||0}),state:"critical",systemInventory:"true"})),"rejected"===S&&i.a.createElement(s.a,{appName:"Inventory",isSmall:!0})))};v.propTypes={fetchInventory:d.a.func,inventorySummary:d.a.object,inventoryFetchStatus:d.a.string,fetchInventoryStale:d.a.func,inventoryStaleSummary:d.a.object,inventoryStaleFetchStatus:d.a.string,fetchInventoryWarning:d.a.func,inventoryWarningSummary:d.a.object,inventoryWarningFetchStatus:d.a.string,fetchInventoryTotal:d.a.func,inventoryTotalSummary:d.a.object,inventoryTotalFetchStatus:d.a.string,intl:d.a.any},e.default=Object(m.connect)((function(t){var e=t.DashboardStore;return{inventorySummary:e.inventorySummary,inventoryFetchStatus:e.inventoryFetchStatus,inventoryStaleSummary:e.inventoryStaleSummary,inventoryStaleFetchStatus:e.inventoryStaleFetchStatus,inventoryWarningSummary:e.inventoryWarningSummary,inventoryWarningFetchStatus:e.inventoryWarningFetchStatus,inventoryTotalSummary:e.inventoryTotalSummary,inventoryTotalFetchStatus:e.inventoryTotalFetchStatus}}),(function(t){return{fetchInventory:function(){return t(a.f())},fetchInventoryStale:function(){return t(a.e())},fetchInventoryWarning:function(){return t(a.h())},fetchInventoryTotal:function(){return t(a.g())}}}))(v)},865:function(t,e,n){(e=n(6)(!1)).push([t.i,".ins-c-dashboard__number-description>*{text-align:left}.ins-c-dashboard__number-description .pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-left:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:var(--pf-global--FontSize--sm);text-align:left}\n",""]),t.exports=e},866:function(t,e,n){(e=n(6)(!1)).push([t.i,".ins-c-dashboard__number-data--xl{font-size:calc(var(--pf-global--FontSize--2xl) * 2);line-height:40px}.ins-c-dashboard__number-data--lg{font-size:30px;line-height:30px}.ins-c-dashboard__number-data--md{font-size:var(--pf-global--FontSize--lg);line-height:var(--pf-global--FontSize--lg)}.ins-c-dashboard__number-data--xl,.ins-c-dashboard__number-data--lg,.ins-c-dashboard__number-data--md{font-family:var(--pf-global--FontFamily--redhatfont--heading--sans-serif)}.ins-c-dashboard__number-data--number-percentage{display:flex;flex-direction:row;align-items:flex-end}.ins-c-dashboard__number-data--number-percentage>*{color:#000}.ins-c-dashboard__number-percentage{display:flex;align-items:baseline;margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%}.ins-c-dashboard__number-percentage span{display:inline-block;max-width:85%;margin-right:var(--pf-global--spacer--sm);overflow:hidden;text-overflow:ellipsis}\n",""]),t.exports=e},898:function(t,e,n){var a=n(7),r=n(865);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=a(r,i);if(!r.locals||t.hot.invalidate){var l=r.locals;t.hot.accept(865,(function(){"string"==typeof(r=(r=n(865)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var n;for(n in t)if(t[n]!==e[n])return!1;for(n in e)if(!t[n])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},899:function(t,e,n){var a=n(7),r=n(866);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=a(r,i);if(!r.locals||t.hot.invalidate){var l=r.locals;t.hot.accept(866,(function(){"string"==typeof(r=(r=n(866)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var n;for(n in t)if(t[n]!==e[n])return!1;for(n in e)if(!t[n])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},922:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));n(898);var a=n(799),r=n(216),i=n(854),o=(n(899),n(138)),l=n(853),s=n(1),c=n.n(s),u=n(14),f=n.n(u),d=function(t){var e=t.data,n=t.dataSize,a=t.percentageData,i=t.iconTooltipText;return c.a.createElement("div",{className:"ins-c-dashboard__number-data--number-percentage"},c.a.createElement("span",{className:"ins-c-dashboard__number-data--".concat(n)},e),a&&c.a.createElement("span",{className:"ins-c-dashboard__number-percentage"},c.a.createElement("span",null,a),c.a.createElement(o.Tooltip,{key:"".concat(i),position:o.TooltipPosition.top,content:c.a.createElement("div",null,i)},c.a.createElement(r.Button,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},c.a.createElement(l.a,null)))))};d.propTypes={data:f.a.any,dataSize:f.a.string,linkDescription:f.a.string,percentageData:f.a.string,iconTooltipText:f.a.node};var m=function(t){var e=t.data,n=t.dataSize,o=t.percentageData,l=t.link,s=t.linkDescription,u=t.layout,f=t.critical,m=t.iconTooltipText,p=t.flexDirection;return c.a.createElement("div",{className:"ins-c-dashboard__number-description ".concat(u?"pf-m-".concat(u):"")},"true"===f&&c.a.createElement(i.a,null),c.a.createElement(a.Flex,{direction:p},c.a.createElement(a.FlexItem,{spacer:{default:"spacerXs"}},c.a.createElement(d,{data:e,dataSize:n,percentageData:o,iconTooltipText:m})),c.a.createElement(a.FlexItem,{spacer:{default:"spacerXs"}},c.a.createElement(r.Button,{component:"a",isInline:!0,variant:"link",href:l},s))))};m.propTypes={data:f.a.any,dataSize:f.a.string,percentageData:f.a.string,link:f.a.any,linkDescription:f.a.string,layout:f.a.string,critical:f.a.string,iconTooltipText:f.a.node,flexDirection:f.a.object}},992:function(t,e,n){(e=n(6)(!1)).push([t.i,".dashboard-card-system-inventory .ins-c-info-icon{padding:0;cursor:default}.dashboard-card-system-inventory-body{max-width:400px}\n",""]),t.exports=e}}]);
//# sourceMappingURL=18.js.map