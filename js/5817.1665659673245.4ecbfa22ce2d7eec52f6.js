(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[5817,5467,9477],{48926:t=>{function e(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(a,o){var i=t.apply(n,r);function s(t){e(i,a,o,s,c,"next",t)}function c(t){e(i,a,o,s,c,"throw",t)}s(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},31876:(t,e,n)=>{"use strict";var r=n(95318);e.T=function(t,e){var n=(0,s.useState)({isLoading:!0}),r=(0,i.default)(n,2),l=r[0],u=r[1];return(0,s.useEffect)((function(){u({isLoading:!0}),(0,o.default)(a.default.mark((function n(){var r,o,i;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.getRBAC)(t);case 2:r=n.sent,o=r.isOrgAdmin,i=r.permissions,u({isLoading:!1,isOrgAdmin:o,permissions:i,hasAccess:(0,c.doesHavePermissions)(i,e)});case 6:case"end":return n.stop()}}),n)})))()}),[t]),l};var a=r(n(87757)),o=r(n(48926)),i=r(n(63038)),s=n(93264),c=n(64862)},64862:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r.default,doesHavePermissions:()=>l,getRBAC:()=>s});var r={};n.r(r),n.d(r,{C:()=>l,_:()=>s});var a=n(15861),o=n(87757),i=n.n(o);function s(){return c.apply(this,arguments)}function c(){return c=(0,a.Z)(i().mark((function t(){var e,n,r,a,o,s,c,l,u=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>0&&void 0!==u[0]?u[0]:"",c=window.insights,t.next=4,null==c||null===(e=c.chrome)||void 0===e||null===(n=e.auth)||void 0===n?void 0:n.getUser();case 4:return l=t.sent,t.t0=(null==l||null===(r=l.identity)||void 0===r||null===(a=r.user)||void 0===a?void 0:a.is_org_admin)||!1,t.next=8,null==c||null===(o=c.chrome)||void 0===o?void 0:o.getUserPermissions(s);case 8:if(t.t1=t.sent,t.t1){t.next=11;break}t.t1=null;case 11:return t.t2=t.t1,t.abrupt("return",{isOrgAdmin:t.t0,permissions:t.t2});case 13:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}function l(t,e){return!!t&&t.some((function(t){return e.includes((null==t?void 0:t.permission)||t)}))}},85333:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(93264),a=n.n(r),o=n(14938),i=n(52017),s=function(){return s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},s.apply(this,arguments)},c=function(){return a().createElement(a().Fragment,null,"Contact your organization administrator(s) for more information or visit ",a().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")};const l=function(t){var e=t.prevPageButtonText,n=void 0===e?"Return to previous page":e,r=t.toLandingPageText,l=void 0===r?"Go to landing page":r,u=t.title,m=t.actions,v=void 0===m?null:m,y=t.serviceName,f=t.icon,d=void 0===f?i.LockIcon:f,p=t.description,g=void 0===p?a().createElement(c,null):p,h=t.showReturnButton,S=void 0===h||h,E=t.className,I=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(t,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),b=u||"You do not have access to ".concat(y);return a().createElement(o.EmptyState,s({variant:o.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(E||"")},I),a().createElement(o.EmptyStateIcon,{icon:d}),a().createElement(o.Title,{headingLevel:"h5",size:"lg"},b),a().createElement(o.EmptyStateBody,null,g),v,S&&(document.referrer?a().createElement(o.Button,{variant:"primary",onClick:function(){return history.back()}},n):a().createElement(o.Button,{variant:"primary",component:"a",href:"."},l)))}},10984:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>D});var r=n(4942),a=n(57149),o=n(28191),i=n(92298),s=n(93264),c=n.n(s),l=n(98756),u=n(47173),m=n(37486),v=n(90098),y=n(85333),f=n(52564),d=n(75824),p=n(91727),g=n(45697),h=n.n(g),S=function(t){var e=t.data,n=t.dataSize,r=t.percentageData,a=t.iconTooltipText;return c().createElement("div",null,c().createElement("span",{className:"insd-c-dashboard__number-data--".concat(n)},e),r&&c().createElement("span",{className:"insd-c-dashboard__number-percentage"},c().createElement("span",null,r),c().createElement(d.u,{key:"".concat(a),position:d.D.top,content:c().createElement("div",null,a)},c().createElement(u.zx,{variant:"plain","aria-label":"Action",className:"insd-c-info-icon"},c().createElement(p.Z,null)))))};S.propTypes={data:h().any,dataSize:h().string,linkDescription:h().string,percentageData:h().string,iconTooltipText:h().node};var E=n(89319),I=function(t){var e=t.data,n=t.dataSize,r=t.link,a=t.linkDescription,s=t.layout,l=t.critical,m=t.iconTooltipText,v=(0,E.s)();return c().createElement("div",{className:"".concat(s?"pf-m-".concat(s):"")},"true"===l&&c().createElement(f.Z,null),c().createElement(o.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsXs"}},c().createElement(i.B,null,c().createElement(S,{data:e,dataSize:n,iconTooltipText:m})),c().createElement(i.B,null,c().createElement(u.zx,{component:"a",onClick:function(t){return v(t,r)},isInline:!0,variant:"link",href:r},a))))};I.propTypes={data:h().any,dataSize:h().string,percentageData:h().string,link:h().any,linkDescription:h().string,layout:h().string,critical:h().string,iconTooltipText:h().node,flexDirection:h().object};var b=n(59303),T=n(28216),k=n(30893),w=n(86896),O=n(31876);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=function(t){var e=t.fetchInventory,n=t.inventoryFetchStatus,r=t.inventorySummary,a=t.fetchInventoryStale,f=t.inventoryStaleFetchStatus,d=t.inventoryStaleSummary,p=t.fetchInventoryWarning,g=t.inventoryWarningFetchStatus,h=t.inventoryWarningSummary,S=t.fetchInventoryTotal,T=t.inventoryTotalFetchStatus,x=(t.inventoryTotalSummary,t.selectedTags),P=t.workloads,D=t.SID,F=(0,O.T)("inventory",["inventory:*:*","inventory:*:read","inventory:hosts:*","inventory:hosts:read"]).hasAccess;(0,s.useEffect)((function(){var t=j(j({},(0,l.Rm)(P,D)),(null==x?void 0:x.length)>0&&{tags:x});S(t),e(t),a(t),p(t)}),[S,e,a,p,x,P,D]);var B=(0,w.Z)(),z=(0,E.s)();return c().createElement(c().Fragment,null,!1===F?c().createElement(y.Z,{showReturnButton:!1,serviceName:"Inventory",icon:function(){return""},variant:"xs",description:c().createElement("div",null,B.formatMessage(k.Z.systemInventoryNoAccess))}):c().createElement(o.k,{spaceItems:{md:"spaceItemsXl"},alignItems:{md:"alignItemsCenter"},direction:{default:"column",md:"row"}},c().createElement(o.k,{spaceItems:{default:"spaceItemsXl"}},"fulfilled"===n&&"fulfilled"===T&&c().createElement(I,{data:r.total.toLocaleString()||0,dataSize:"lg",linkDescription:B.formatMessage(k.Z.systemInventoryDescription,{count:r.total||0}),link:"./insights/inventory/?status=fresh&status=stale&source=puptoo"})),c().createElement(o.k,{spaceItems:{default:"spaceItemsXl"},alignItems:{md:"alignItemsCenter"},flex:{default:"flex_1"},direction:{default:"column",md:"row"}},c().createElement(o.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"}},c().createElement(i.B,null,"fulfilled"===f&&c().createElement(u.zx,{component:"a",variant:"link",onClick:function(t){return z(t,"./insights/inventory/?status=stale&source=puptoo")},href:"./insights/inventory/?status=stale&source=puptoo",isInline:!0},c().createElement(v.w,{message:B.formatMessage(k.Z.systemInventoryStale,{count:d.total||0}),state:"warning",systemInventory:!0}))),c().createElement(i.B,null,"fulfilled"===g&&c().createElement(u.zx,{component:"a",variant:"link",onClick:function(t){return z(t,"./insights/inventory/?status=stale_warning&source=puptoo")},href:"./insights/inventory/?status=stale_warning&source=puptoo",isInline:!0},c().createElement(v.w,{message:B.formatMessage(k.Z.systemInventoryStaleWarning,{count:h.total||0}),state:"critical",systemInventory:!0}))),"rejected"===T&&c().createElement(m.Z,{appName:"Inventory",isSmall:!0})),c().createElement(i.B,{align:{md:"alignRight"}},c().createElement(u.zx,{component:"a",variant:"primary",onClick:function(t){return z(t,"".concat(b.Pu,"/registration"))},href:"".concat(b.Pu,"/registration")},B.formatMessage(k.Z.systemInventoryCTA))))))};P.propTypes={fetchInventory:h().func,inventorySummary:h().object,inventoryFetchStatus:h().string,fetchInventoryStale:h().func,inventoryStaleSummary:h().object,inventoryStaleFetchStatus:h().string,fetchInventoryWarning:h().func,inventoryWarningSummary:h().object,inventoryWarningFetchStatus:h().string,fetchInventoryTotal:h().func,inventoryTotalSummary:h().object,inventoryTotalFetchStatus:h().string,intl:h().any,selectedTags:h().arrayOf(h().string),workloads:l.ib,SID:h().arrayOf(h().string)};const D=(0,T.$j)((function(t){var e=t.DashboardStore;return{inventorySummary:e.inventorySummary,inventoryFetchStatus:e.inventoryFetchStatus,inventoryStaleSummary:e.inventoryStaleSummary,inventoryStaleFetchStatus:e.inventoryStaleFetchStatus,inventoryWarningSummary:e.inventoryWarningSummary,inventoryWarningFetchStatus:e.inventoryWarningFetchStatus,inventoryTotalSummary:e.inventoryTotalSummary,inventoryTotalFetchStatus:e.inventoryTotalFetchStatus,selectedTags:e.selectedTags,workloads:e.workloads,SID:e.SID}}),(function(t){return{fetchInventory:function(e){return t(a.r7(e))},fetchInventoryStale:function(e){return t(a.n(e))},fetchInventoryWarning:function(e){return t(a.Qo(e))},fetchInventoryTotal:function(e){return t(a.nB(e))}}}))(P)},45467:()=>{}}]);