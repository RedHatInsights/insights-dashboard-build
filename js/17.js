(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1102:function(t,n,e){var a=e(6),i=e(830);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1},o=a(i,r);if(!i.locals||t.hot.invalidate){var l=i.locals;t.hot.accept(830,(function(){"string"==typeof(i=(i=e(830)).__esModule?i.default:i)&&(i=[[t.i,i,""]]),function(t,n){if(!t&&n||t&&!n)return!1;var e;for(e in t)if(t[e]!==n[e])return!1;for(e in n)if(!t[e])return!1;return!0}(l,i.locals)?(l=i.locals,o(i)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=i.locals||{}},1119:function(t,n,e){"use strict";e.r(n);var a=e(1),i=e.n(a),r=e(0),o=e.n(r),l=e(691),s=e(93),c=e(78),u=e(697),f=e(762),d=e(706),m=e(354),p=e(671),v=e(694),y=(e(1102),function(t){var n=t.fetchInventory,e=t.inventoryFetchStatus,r=t.inventorySummary,o=t.fetchInventoryStale,l=t.inventoryStaleFetchStatus,s=t.inventoryStaleSummary,y=t.fetchInventoryWarning,h=t.inventoryWarningFetchStatus,g=t.inventoryWarningSummary,b=t.fetchInventoryTotal,S=t.inventoryTotalFetchStatus,_=t.inventoryTotalSummary;Object(a.useEffect)((function(){b(),n(),o(),y()}),[b,n,o,y]);var x=Object(m.a)();return i.a.createElement(u.a,{appName:"SystemInventory"},i.a.createElement(u.d,{subtitle:x.formatMessage(p.a.systemInventoryTitle)}),i.a.createElement(u.b,{isFilled:!1},"fulfilled"===e&&"fulfilled"===S&&i.a.createElement(f.a,{data:r.total.toLocaleString()||0,dataSize:"lg",percentageData:x.formatMessage(p.a.systemInventoryPercentageData,{count:Math.floor(r.total/_.total*100)||0}),linkDescription:x.formatMessage(p.a.systemInventoryDescription,{count:r.total||0}),link:"./insights/inventory",iconTooltipText:x.formatMessage(p.a.systemInventoryNotUsingClient,{count:_.total-r.total||0})}),"fulfilled"===l&&i.a.createElement(c.Button,{component:"a",variant:"link",href:"./insights/inventory/?status=stale",isInline:!0},i.a.createElement(d.a,{message:x.formatMessage(p.a.systemInventoryStale,{count:s.total||0}),state:"warning",systemInventory:"true"})),"fulfilled"===h&&i.a.createElement(c.Button,{component:"a",variant:"link",href:"./insights/inventory/?status=stale_warning",isInline:!0},i.a.createElement(d.a,{message:x.formatMessage(p.a.systemInventoryStaleWarning,{count:g.total||0}),state:"critical",systemInventory:"true"})),"rejected"===S&&i.a.createElement(v.a,{appName:"Inventory",isSmall:!0})))});y.propTypes={fetchInventory:o.a.func,inventorySummary:o.a.object,inventoryFetchStatus:o.a.string,fetchInventoryStale:o.a.func,inventoryStaleSummary:o.a.object,inventoryStaleFetchStatus:o.a.string,fetchInventoryWarning:o.a.func,inventoryWarningSummary:o.a.object,inventoryWarningFetchStatus:o.a.string,fetchInventoryTotal:o.a.func,inventoryTotalSummary:o.a.object,inventoryTotalFetchStatus:o.a.string,intl:o.a.any},n.default=Object(s.connect)((function(t){var n=t.DashboardStore;return{inventorySummary:n.inventorySummary,inventoryFetchStatus:n.inventoryFetchStatus,inventoryStaleSummary:n.inventoryStaleSummary,inventoryStaleFetchStatus:n.inventoryStaleFetchStatus,inventoryWarningSummary:n.inventoryWarningSummary,inventoryWarningFetchStatus:n.inventoryWarningFetchStatus,inventoryTotalSummary:n.inventoryTotalSummary,inventoryTotalFetchStatus:n.inventoryTotalFetchStatus}}),(function(t){return{fetchInventory:function(){return t(l.f())},fetchInventoryStale:function(){return t(l.e())},fetchInventoryWarning:function(){return t(l.h())},fetchInventoryTotal:function(){return t(l.g())}}}))(y)},685:function(t,n,e){(n=e(5)(!1)).push([t.i,".ins-c-dashboard__number-description>*{text-align:left}.ins-c-dashboard__number-description .pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-left:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:var(--pf-global--FontSize--sm);text-align:left}.ins-c-dashboard__number-description .pf-c-button.pf-m-link>.pf-c-button__text{display:flex;flex-direction:column;align-items:baseline;min-width:0;max-width:100%}.ins-c-dashboard__number-description.pf-m-horizontal svg{margin-right:var(--pf-global--spacer--sm)}.ins-c-dashboard__number-description.pf-m-horizontal .pf-c-button.pf-m-link .pf-c-button__text{flex-direction:row}.ins-c-dashboard__number-description.pf-m-horizontal .pf-c-button.pf-m-link .pf-c-button__text>:first-child{padding-right:var(--pf-global--spacer--sm)}\n",""]),t.exports=n},686:function(t,n,e){(n=e(5)(!1)).push([t.i,".ins-c-dashboard__number-data--xl{font-size:calc(var(--pf-global--FontSize--2xl) * 2);line-height:40px}.ins-c-dashboard__number-data--lg{font-size:30px;line-height:30px}.ins-c-dashboard__number-data--md{font-size:var(--pf-global--FontSize--lg);line-height:var(--pf-global--FontSize--lg)}.ins-c-dashboard__number-data--xl,.ins-c-dashboard__number-data--lg,.ins-c-dashboard__number-data--md{font-family:var(--pf-global--FontFamily--redhatfont--heading--sans-serif)}.ins-c-dashboard__number-data--number-percentage{display:flex;flex-direction:row;align-items:flex-end}.ins-c-dashboard__number-data--number-percentage>*{color:#000}.ins-c-dashboard__number-percentage{display:flex;align-items:baseline;margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%}.ins-c-dashboard__number-percentage span{display:inline-block;max-width:80%;margin-right:var(--pf-global--spacer--sm);overflow:hidden;text-overflow:ellipsis}\n",""]),t.exports=n},739:function(t,n,e){var a=e(6),i=e(685);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1},o=a(i,r);if(!i.locals||t.hot.invalidate){var l=i.locals;t.hot.accept(685,(function(){"string"==typeof(i=(i=e(685)).__esModule?i.default:i)&&(i=[[t.i,i,""]]),function(t,n){if(!t&&n||t&&!n)return!1;var e;for(e in t)if(t[e]!==n[e])return!1;for(e in n)if(!t[e])return!1;return!0}(l,i.locals)?(l=i.locals,o(i)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=i.locals||{}},740:function(t,n,e){var a=e(6),i=e(686);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1},o=a(i,r);if(!i.locals||t.hot.invalidate){var l=i.locals;t.hot.accept(686,(function(){"string"==typeof(i=(i=e(686)).__esModule?i.default:i)&&(i=[[t.i,i,""]]),function(t,n){if(!t&&n||t&&!n)return!1;var e;for(e in t)if(t[e]!==n[e])return!1;for(e in n)if(!t[e])return!1;return!0}(l,i.locals)?(l=i.locals,o(i)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=i.locals||{}},762:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var a=e(1),i=e.n(a),r=e(78),o=e(0),l=e.n(o),s=(e(739),e(740),e(104)),c=e(692),u=function(t){var n=t.data,e=t.dataSize,a=t.percentageData,o=t.iconTooltipText;return i.a.createElement("div",{className:"ins-c-dashboard__number-data--number-percentage"},i.a.createElement("span",{className:"ins-c-dashboard__number-data--".concat(e)},n),a&&i.a.createElement("span",{className:"ins-c-dashboard__number-percentage"},i.a.createElement("span",null,a),i.a.createElement(s.Tooltip,{position:s.TooltipPosition.top,content:i.a.createElement("div",null,o)},i.a.createElement(r.Button,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},i.a.createElement(c.a,null)))))};u.propTypes={data:l.a.any,dataSize:l.a.string,linkDescription:l.a.string,percentageData:l.a.string,iconTooltipText:l.a.node};var f=e(693),d=function(t){var n=t.data,e=t.dataSize,a=t.percentageData,o=t.link,l=t.linkDescription,s=t.layout,c=t.critical,d=t.iconTooltipText;return i.a.createElement("div",{className:"ins-c-dashboard__number-description ".concat(s?"pf-m-".concat(s):"")},"true"===c&&i.a.createElement(f.a,null),i.a.createElement(r.Button,{component:"a",variant:"link",href:o},i.a.createElement(u,{data:n,dataSize:e,percentageData:a,iconTooltipText:d}),l))};d.propTypes={data:l.a.any,dataSize:l.a.string,percentageData:l.a.string,link:l.a.any,linkDescription:l.a.string,layout:l.a.string,critical:l.a.string,iconTooltipText:l.a.node}},830:function(t,n,e){(n=e(5)(!1)).push([t.i,".dashboard-card-system-inventory .ins-c-info-icon{padding:0;cursor:default}\n",""]),t.exports=n}}]);
//# sourceMappingURL=17.js.map