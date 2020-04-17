(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1338:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),i=n(1),o=n.n(i),s=n(582),l=n(155),c=n(297),u=n(590),m=n(644),d=n(1047),f=n(332),p=n(537),y=n(583),v=function(t){var e=t.fetchInventory,n=t.inventoryFetchStatus,i=t.inventorySummary,o=t.fetchInventoryStale,s=t.inventoryStaleFetchStatus,l=t.inventoryStaleSummary,v=t.fetchInventoryWarning,g=t.inventoryWarningFetchStatus,h=t.inventoryWarningSummary,b=t.fetchInventoryTotal,S=t.inventoryTotalFetchStatus,_=t.inventoryTotalSummary;Object(a.useEffect)((function(){b(),e(),o(),v()}),[b,e,o,v]);var F=Object(f.a)();return r.a.createElement(u.a,{appName:"SystemInventory"},r.a.createElement(u.d,{subtitle:F.formatMessage(p.a.systemInventoryTitle)}),r.a.createElement(u.b,{isFilled:!1},"fulfilled"===n&&"fulfilled"===S&&r.a.createElement(m.a,{data:i.total.toLocaleString()||0,dataSize:"lg",percentageData:F.formatMessage(p.a.systemInventoryPercentageData,{count:Math.floor(i.total/_.total*100)||0}),linkDescription:F.formatMessage(p.a.systemInventoryDescription,{count:i.total||0}),link:"./insights/inventory"}),"fulfilled"===s&&r.a.createElement(c.Button,{component:"a",variant:"link",href:"./insights/inventory/?status=stale",isInline:!0},r.a.createElement(d.a,{message:F.formatMessage(p.a.systemInventoryStale,{count:l.total||0}),state:"warning",systemInventory:"true"})),"fulfilled"===g&&r.a.createElement(c.Button,{component:"a",variant:"link",href:"./insights/inventory/?status=stale_warning",isInline:!0},r.a.createElement(d.a,{message:F.formatMessage(p.a.systemInventoryStaleWarning,{count:h.total||0}),state:"critical",systemInventory:"true"})),"rejected"===S&&r.a.createElement(y.a,{appName:"Inventory"})))};v.propTypes={fetchInventory:o.a.func,inventorySummary:o.a.object,inventoryFetchStatus:o.a.string,fetchInventoryStale:o.a.func,inventoryStaleSummary:o.a.object,inventoryStaleFetchStatus:o.a.string,fetchInventoryWarning:o.a.func,inventoryWarningSummary:o.a.object,inventoryWarningFetchStatus:o.a.string,fetchInventoryTotal:o.a.func,inventoryTotalSummary:o.a.object,inventoryTotalFetchStatus:o.a.string,intl:o.a.any},e.default=Object(l.connect)((function(t){var e=t.DashboardStore;return{inventorySummary:e.inventorySummary,inventoryFetchStatus:e.inventoryFetchStatus,inventoryStaleSummary:e.inventoryStaleSummary,inventoryStaleFetchStatus:e.inventoryStaleFetchStatus,inventoryWarningSummary:e.inventoryWarningSummary,inventoryWarningFetchStatus:e.inventoryWarningFetchStatus,inventoryTotalSummary:e.inventoryTotalSummary,inventoryTotalFetchStatus:e.inventoryTotalFetchStatus}}),(function(t){return{fetchInventory:function(){return t(s.f())},fetchInventoryStale:function(){return t(s.e())},fetchInventoryWarning:function(){return t(s.h())},fetchInventoryTotal:function(){return t(s.g())}}}))(v)},584:function(t,e,n){(e=n(6)(!1)).push([t.i,".ins-c-dashboard__number-description{display:flex;flex-direction:column;min-width:0;max-width:100%}.ins-c-dashboard__number-description>*{text-align:left}.ins-c-dashboard__number-description .pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-left:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:var(--pf-global--FontSize--sm);text-align:left}.ins-c-dashboard__number-description.pf-m-horizontal{flex-direction:row;align-items:baseline}.ins-c-dashboard__number-description.pf-m-horizontal svg{margin-right:var(--pf-global--spacer--sm)}.ins-c-dashboard__number-description.pf-m-horizontal .pf-c-button.pf-m-link{padding-left:var(--pf-global--spacer--sm)}\n",""]),t.exports=e},585:function(t,e,n){(e=n(6)(!1)).push([t.i,".ins-c-dashboard__number-data--xl{font-size:calc(var(--pf-global--FontSize--2xl) * 2);line-height:40px}.ins-c-dashboard__number-data--lg{font-size:30px;line-height:30px}.ins-c-dashboard__number-data--md{font-size:var(--pf-global--FontSize--lg);line-height:var(--pf-global--FontSize--lg)}.ins-c-dashboard__number-data--xl,.ins-c-dashboard__number-data--lg,.ins-c-dashboard__number-data--md{font-family:var(--pf-global--FontFamily--redhatfont--heading--sans-serif)}.ins-c-dashboard__number-data--number-percentage{display:flex;flex-direction:row;align-items:flex-end}.ins-c-dashboard__number-percentage{display:flex;align-items:baseline;margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%}.ins-c-dashboard__number-percentage span{display:inline-block;max-width:80%;margin-right:var(--pf-global--spacer--sm);overflow:hidden;text-overflow:ellipsis}\n",""]),t.exports=e},644:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var a=n(2),r=n.n(a),i=n(297),o=n(1),s=n.n(o),l=(n(656),n(657),n(652)),c=function(t){var e=t.data,n=t.dataSize,a=t.percentageData;return r.a.createElement("div",{className:"ins-c-dashboard__number-data--number-percentage"},r.a.createElement("span",{className:"ins-c-dashboard__number-data--".concat(n)},e),a&&r.a.createElement("span",{className:"ins-c-dashboard__number-percentage"},r.a.createElement("span",null,a),r.a.createElement(l.a,null)))};c.propTypes={data:s.a.any,dataSize:s.a.string,linkDescription:s.a.string,percentageData:s.a.string};var u=n(654),m=function(t){var e=t.data,n=t.dataSize,a=t.percentageData,o=t.link,s=t.linkDescription,l=t.layout,m=t.critical;return r.a.createElement("div",{className:"ins-c-dashboard__number-description ".concat(l?"pf-m-".concat(l):"")},"true"===m&&r.a.createElement(u.a,null),r.a.createElement(c,{data:e,dataSize:n,percentageData:a}),r.a.createElement(i.Button,{component:"a",variant:"link",href:o},s))};m.propTypes={data:s.a.any,dataSize:s.a.string,percentageData:s.a.string,link:s.a.any,linkDescription:s.a.string,layout:s.a.string,critical:s.a.string}},656:function(t,e,n){var a=n(7),r=n(584);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=a(r,i),s=r.locals?r.locals:{};r.locals||t.hot.accept(584,(function(){var e=n(584);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[t.i,e,""]]),o(e)})),t.hot.dispose((function(){o()})),t.exports=s},657:function(t,e,n){var a=n(7),r=n(585);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=a(r,i),s=r.locals?r.locals:{};r.locals||t.hot.accept(585,(function(){var e=n(585);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[t.i,e,""]]),o(e)})),t.hot.dispose((function(){o()})),t.exports=s}}]);
//# sourceMappingURL=11.js.map