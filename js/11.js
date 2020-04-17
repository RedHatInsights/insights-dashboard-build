(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1355:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(1),o=n.n(i),s=n(581),l=n(155),c=n(298),u=n(589),f=n(642),d=n(1052),m=n(332),p=n(533),y=n(582),v=function(e){var t=e.fetchInventory,n=e.inventoryFetchStatus,i=e.inventorySummary,o=e.fetchInventoryStale,s=e.inventoryStaleFetchStatus,l=e.inventoryStaleSummary,v=e.fetchInventoryWarning,g=e.inventoryWarningFetchStatus,h=e.inventoryWarningSummary,b=e.fetchInventoryTotal,S=e.inventoryTotalFetchStatus,_=e.inventoryTotalSummary;Object(a.useEffect)((function(){b(),t(),o(),v()}),[b,t,o,v]);var w=Object(m.a)();return r.a.createElement(u.a,{appName:"SystemInventory"},r.a.createElement(u.d,{subtitle:w.formatMessage(p.a.systemInventoryTitle)}),r.a.createElement(u.b,{isFilled:!1},"fulfilled"===n&&"fulfilled"===S&&r.a.createElement(f.a,{data:i.total.toLocaleString()||0,dataSize:"lg",percentageData:w.formatMessage(p.a.systemInventoryPercentageData,{count:Math.floor(i.total/_.total*100)||0}),linkDescription:w.formatMessage(p.a.systemInventoryDescription,{count:i.total||0}),link:"./insights/inventory"}),"fulfilled"===s&&r.a.createElement(c.Button,{component:"a",variant:"link",href:"./insights/inventory/?status=stale",isInline:!0},r.a.createElement(d.a,{message:w.formatMessage(p.a.systemInventoryStale,{count:l.total||0}),state:"warning",systemInventory:"true"})),"fulfilled"===g&&r.a.createElement(c.Button,{component:"a",variant:"link",href:"./insights/inventory/?status=stale_warning",isInline:!0},r.a.createElement(d.a,{message:w.formatMessage(p.a.systemInventoryStaleWarning,{count:h.total||0}),state:"critical",systemInventory:"true"})),"rejected"===S&&r.a.createElement(y.a,{appName:"Inventory"})))};v.propTypes={fetchInventory:o.a.func,inventorySummary:o.a.object,inventoryFetchStatus:o.a.string,fetchInventoryStale:o.a.func,inventoryStaleSummary:o.a.object,inventoryStaleFetchStatus:o.a.string,fetchInventoryWarning:o.a.func,inventoryWarningSummary:o.a.object,inventoryWarningFetchStatus:o.a.string,fetchInventoryTotal:o.a.func,inventoryTotalSummary:o.a.object,inventoryTotalFetchStatus:o.a.string,intl:o.a.any},t.default=Object(l.connect)((function(e){var t=e.DashboardStore;return{inventorySummary:t.inventorySummary,inventoryFetchStatus:t.inventoryFetchStatus,inventoryStaleSummary:t.inventoryStaleSummary,inventoryStaleFetchStatus:t.inventoryStaleFetchStatus,inventoryWarningSummary:t.inventoryWarningSummary,inventoryWarningFetchStatus:t.inventoryWarningFetchStatus,inventoryTotalSummary:t.inventoryTotalSummary,inventoryTotalFetchStatus:t.inventoryTotalFetchStatus}}),(function(e){return{fetchInventory:function(){return e(s.f())},fetchInventoryStale:function(){return e(s.e())},fetchInventoryWarning:function(){return e(s.h())},fetchInventoryTotal:function(){return e(s.g())}}}))(v)},582:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(1),o=n.n(i),s=n(656),l=n(571),c=n(647),u=n(332),f=n(533),d=function(e){var t=e.appName,n=Object(u.a)();return r.a.createElement(s.Bullseye,null,r.a.createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"ins-c-dashboard__error-state"},r.a.createElement(l.Title,{headingLevel:"h2",size:"md"}," ",n.formatMessage(f.a.errorStateTitle,{appName:t})," ")))};d.propTypes={appName:o.a.string.isRequired},t.a=d},583:function(e,t,n){(t=n(6)(!1)).push([e.i,".ins-c-dashboard__number-description{display:flex;flex-direction:column;min-width:0;max-width:100%}.ins-c-dashboard__number-description>*{text-align:left}.ins-c-dashboard__number-description .pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-left:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:var(--pf-global--FontSize--sm);text-align:left}.ins-c-dashboard__number-description.pf-m-horizontal{flex-direction:row;align-items:baseline}.ins-c-dashboard__number-description.pf-m-horizontal svg{margin-right:var(--pf-global--spacer--sm)}.ins-c-dashboard__number-description.pf-m-horizontal .pf-c-button.pf-m-link{padding-left:var(--pf-global--spacer--sm)}\n",""]),e.exports=t},584:function(e,t,n){(t=n(6)(!1)).push([e.i,".ins-c-dashboard__number-data--xl{font-size:calc(var(--pf-global--FontSize--2xl) * 2);line-height:40px}.ins-c-dashboard__number-data--lg{font-size:30px;line-height:30px}.ins-c-dashboard__number-data--md{font-size:var(--pf-global--FontSize--lg);line-height:var(--pf-global--FontSize--lg)}.ins-c-dashboard__number-data--xl,.ins-c-dashboard__number-data--lg,.ins-c-dashboard__number-data--md{font-family:var(--pf-global--FontFamily--redhatfont--heading--sans-serif)}.ins-c-dashboard__number-data--number-percentage{display:flex;flex-direction:row;align-items:flex-end}.ins-c-dashboard__number-percentage{display:flex;align-items:baseline;margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%}.ins-c-dashboard__number-percentage span{display:inline-block;max-width:80%;margin-right:var(--pf-global--spacer--sm);overflow:hidden;text-overflow:ellipsis}\n",""]),e.exports=t},642:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(2),r=n.n(a),i=n(298),o=n(1),s=n.n(o),l=(n(657),n(658),n(652)),c=function(e){var t=e.data,n=e.dataSize,a=e.percentageData;return r.a.createElement("div",{className:"ins-c-dashboard__number-data--number-percentage"},r.a.createElement("span",{className:"ins-c-dashboard__number-data--".concat(n)},t),a&&r.a.createElement("span",{className:"ins-c-dashboard__number-percentage"},r.a.createElement("span",null,a),r.a.createElement(l.a,null)))};c.propTypes={data:s.a.any,dataSize:s.a.string,linkDescription:s.a.string,percentageData:s.a.string};var u=n(654),f=function(e){var t=e.data,n=e.dataSize,a=e.percentageData,o=e.link,s=e.linkDescription,l=e.layout,f=e.critical;return r.a.createElement("div",{className:"ins-c-dashboard__number-description ".concat(l?"pf-m-".concat(l):"")},"true"===f&&r.a.createElement(u.a,null),r.a.createElement(c,{data:t,dataSize:n,percentageData:a}),r.a.createElement(i.Button,{component:"a",variant:"link",href:o},s))};f.propTypes={data:s.a.any,dataSize:s.a.string,percentageData:s.a.string,link:s.a.any,linkDescription:s.a.string,layout:s.a.string,critical:s.a.string}},656:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Bullseye=void 0;var a=l(n(1)),r=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(2)),i=n(3),o=l(n(120));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=function(e){var t=e.children,n=void 0===t?null:t,a=e.className,s=void 0===a?"":a,l=e.component,f=void 0===l?"div":l,d=u(e,["children","className","component"]),m=f;return r.createElement(m,c({className:(0,i.css)(o.default.bullseye,s)},d),n)};t.Bullseye=f,f.propTypes={children:a.default.node,className:a.default.string,component:a.default.any}},657:function(e,t,n){var a=n(7),r=n(583);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=a(r,i),s=r.locals?r.locals:{};r.locals||e.hot.accept(583,(function(){var t=n(583);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),o(t)})),e.hot.dispose((function(){o()})),e.exports=s},658:function(e,t,n){var a=n(7),r=n(584);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=a(r,i),s=r.locals?r.locals:{};r.locals||e.hot.accept(584,(function(){var t=n(584);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),o(t)})),e.hot.dispose((function(){o()})),e.exports=s}}]);
//# sourceMappingURL=11.js.map