(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[1753],{31876:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.usePermissionsWithContext=t.usePermissions=void 0;var s=n(93264),c=n(57911);function l(e,t,n,i,l){var u=this;void 0===l&&(l=!1);var m=(0,s.useState)({isLoading:!0,hasAccess:!1,isOrgAdmin:!1,permissions:[]}),y=m[0],f=m[1];return(0,s.useEffect)((function(){var s=!1;return f((function(e){return r(r({},e),{isLoading:!0})})),a(u,void 0,void 0,(function(){var r,a,u;return o(this,(function(o){switch(o.label){case 0:return[4,(0,c.getRBAC)(e,n)];case 1:return r=o.sent(),a=r.isOrgAdmin,u=r.permissions,!s&&f({isLoading:!1,isOrgAdmin:a,permissions:u,hasAccess:i?(0,c.hasAllPermissions)(u,t,l):(0,c.doesHavePermissions)(u,t,l)}),[2]}}))})),function(){s=!0}}),[e,n]),y}t.usePermissions=l,t.usePermissionsWithContext=function(e,t,n){var a=(0,s.useContext)(c.RBACContext),o=a.hasAccess,l=i(a,["hasAccess"]);return r(r({},l),{hasAccess:(null==o?void 0:o(e,t,n))||!1})},t.default=l},57911:(e,t,n)=>{"use strict";n.r(t),n.d(t,{RBACContext:()=>r.RM,default:()=>r.ZP,doesHavePermissions:()=>r.Cs,getRBAC:()=>r._s,hasAllPermissions:()=>r.wP,initialPermissions:()=>r.lo});var r=n(34663)},10984:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var r=n(4942),a=n(57149),o=n(28191),i=n(92298),s=n(93264),c=n.n(s),l=n(98756),u=n(47173),m=n(37486),y=n(90098),f=n(85333),p=n(52564),v=n(75824),d=n(91727),g=n(45697),h=n.n(g),S=function(e){var t=e.data,n=e.dataSize,r=e.percentageData,a=e.iconTooltipText;return c().createElement("div",null,c().createElement("span",{className:"insd-c-dashboard__number-data--".concat(n)},t),r&&c().createElement("span",{className:"insd-c-dashboard__number-percentage"},c().createElement("span",null,r),c().createElement(v.u,{key:"".concat(a),position:v.D.top,content:c().createElement("div",null,a)},c().createElement(u.zx,{variant:"plain","aria-label":"Action",className:"insd-c-info-icon"},c().createElement(d.Z,null)))))};S.propTypes={data:h().any,dataSize:h().string,linkDescription:h().string,percentageData:h().string,iconTooltipText:h().node};var b=n(15432),E=n.n(b),I=function(e){var t=e.data,n=e.dataSize,r=e.app,a=e.link,s=e.linkDescription,l=e.layout,m=e.critical,y=e.iconTooltipText;return c().createElement("div",{className:"".concat(l?"pf-m-".concat(l):"")},"true"===m&&c().createElement(p.Z,null),c().createElement(o.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsXs"}},c().createElement(i.B,null,c().createElement(S,{data:t,dataSize:n,iconTooltipText:y})),c().createElement(i.B,null,c().createElement(E(),{app:r,to:a},c().createElement(u.zx,{isInline:!0,variant:"link"},s)))))};I.propTypes={data:h().any,dataSize:h().string,percentageData:h().string,link:h().any,linkDescription:h().string,layout:h().string,critical:h().string,iconTooltipText:h().node,flexDirection:h().object,app:h().string},n(59303);var w=n(28216),O=n(30893),k=n(86896),T=n(31876),P=n(62012);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.fetchInventory,n=e.inventoryFetchStatus,r=e.inventorySummary,a=e.fetchInventoryStale,p=e.inventoryStaleFetchStatus,v=e.inventoryStaleSummary,d=e.fetchInventoryWarning,g=e.inventoryWarningFetchStatus,h=e.inventoryWarningSummary,S=e.fetchInventoryTotal,b=e.inventoryTotalFetchStatus,w=(e.inventoryTotalSummary,e.selectedTags),j=e.workloads,D=e.SID,_=(0,T.usePermissions)("inventory",["inventory:*:*","inventory:*:read","inventory:hosts:*","inventory:hosts:read"]).hasAccess;(0,s.useEffect)((function(){var e=x(x({},(0,l.Rm)(j,D)),(null==w?void 0:w.length)>0&&{tags:w});S(e),t(e),a(e),d(e)}),[S,t,a,d,w,j,D]);var A=(0,k.Z)();return c().createElement(c().Fragment,null,!1===_?c().createElement(f.Z,{showReturnButton:!1,serviceName:"Inventory",icon:function(){return""},variant:"xs",description:c().createElement("div",null,A.formatMessage(O.Z.systemInventoryNoAccess))}):c().createElement(o.k,{spaceItems:{md:"spaceItemsXl"},alignItems:{md:"alignItemsCenter"},direction:{default:"column",md:"row"}},c().createElement(o.k,{spaceItems:{default:"spaceItemsXl"}},"fulfilled"===n&&"fulfilled"===b&&c().createElement(I,{data:r.total.toLocaleString()||0,dataSize:"lg",linkDescription:A.formatMessage(O.Z.systemInventoryDescription,{count:r.total||0}),app:"inventory",link:"/?source=puptoo"})),c().createElement(o.k,{spaceItems:{default:"spaceItemsXl"},alignItems:{md:"alignItemsCenter"},flex:{default:"flex_1"},direction:{default:"column",md:"row"}},c().createElement(o.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"}},c().createElement(i.B,null,"fulfilled"===p&&c().createElement(E(),{app:"inventory",to:"/?status=stale&source=puptoo",className:"pf-c-button pf-m-link pf-m-inline"},c().createElement(y.w,{message:A.formatMessage(O.Z.systemInventoryStale,{count:v.total||0}),state:"warning",systemInventory:!0}))),c().createElement(i.B,null,"fulfilled"===g&&c().createElement(E(),{app:"inventory",to:"/?status=stale_warning&source=puptoo",className:"pf-c-button pf-m-link pf-m-inline"},c().createElement(y.w,{message:A.formatMessage(O.Z.systemInventoryStaleWarning,{count:h.total||0}),state:"critical",systemInventory:!0}))),"rejected"===b&&c().createElement(m.Z,{appName:"Inventory",isSmall:!0})),c().createElement(i.B,{align:{md:"alignRight"}},c().createElement(P.Link,{to:"/settings/integrations"},c().createElement(u.zx,{className:"pf-u-mr-sm pf-u-font-size-md",variant:"secondary",isSmall:!0},A.formatMessage(O.Z.configureIntegrations))),c().createElement(E(),{app:"registration",to:"/"},c().createElement(u.zx,{variant:"primary"},A.formatMessage(O.Z.systemInventoryCTA)))))))};D.propTypes={fetchInventory:h().func,inventorySummary:h().object,inventoryFetchStatus:h().string,fetchInventoryStale:h().func,inventoryStaleSummary:h().object,inventoryStaleFetchStatus:h().string,fetchInventoryWarning:h().func,inventoryWarningSummary:h().object,inventoryWarningFetchStatus:h().string,fetchInventoryTotal:h().func,inventoryTotalSummary:h().object,inventoryTotalFetchStatus:h().string,intl:h().any,selectedTags:h().arrayOf(h().string),workloads:l.ib,SID:h().arrayOf(h().string)};const _=(0,w.$j)((function(e){var t=e.DashboardStore;return{inventorySummary:t.inventorySummary,inventoryFetchStatus:t.inventoryFetchStatus,inventoryStaleSummary:t.inventoryStaleSummary,inventoryStaleFetchStatus:t.inventoryStaleFetchStatus,inventoryWarningSummary:t.inventoryWarningSummary,inventoryWarningFetchStatus:t.inventoryWarningFetchStatus,inventoryTotalSummary:t.inventoryTotalSummary,inventoryTotalFetchStatus:t.inventoryTotalFetchStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchInventory:function(t){return e(a.r7(t))},fetchInventoryStale:function(t){return e(a.n(t))},fetchInventoryWarning:function(t){return e(a.Qo(t))},fetchInventoryTotal:function(t){return e(a.nB(t))}}}))(D)},45467:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1753.3c8d363a20f09e02f01496b3a55cb5e6.js.map