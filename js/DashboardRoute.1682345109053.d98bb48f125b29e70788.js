(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[468,5605],{52564:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(43047),r=n(93264),l=n.n(r);const s=function(){return l().createElement(a.ZP,{className:"insd-c-dashboard__icon-critical"})}},91727:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(53688),r=n(93264),l=n.n(r);const s=function(){return l().createElement(a.ZP,{className:"insd-c-dashboard__icon-info"})}},90942:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var a=n(50693),r=n(16475),l=n(32045),s=n(38779),o=n(93264),c=n.n(o),i=n(46891),d=n(40827),u=n(20333),m=n(60932),p=n(28216),f=n(30893),g=n(86896),E=n(98756),h=n(57149),b=n(10358),y=n(66794),v=n(45697),_=n.n(v),Z=n(36873),S=n(37486),N=n(28191),I=n(92298),w=n(59303),C=n(14938),k=function(e){var t=e.fetchRosIsConfigured,n=e.rosIsConfiguredFetchStatus,a=e.rosIsConfigured,r=(0,g.Z)();(0,o.useEffect)((function(){t()}),[t]);var l="".concat(w.Pu,"/ros?with_waiting_for_data=true"),s="".concat(w.Pu,"/ros?with_suggestions=true"),d="".concat(w.Pu,"/ros");return c().createElement(b.t,{appName:"ResourceOptimization",className:"insd-m-toggle-right-on-md",title:r.formatMessage(f.Z.resourceOptimizationCardHeader),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_ros")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_ros",e)},body:c().createElement(y.jA,null,"fulfilled"===n&&(a.success?c().createElement(c().Fragment,null,c().createElement("div",null,r.formatMessage(f.Z.rosSystemsGenericMessage)),c().createElement(N.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},c().createElement(N.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItemsLg",sm:"spaceItems2xl"}},a.systems_stats.waiting_for_data>0&&c().createElement(N.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},c().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.systems_stats.waiting_for_data),c().createElement("a",{href:l},c().createElement("span",{className:"pf-u-font-size-sm"},c().createElement("span",null,r.formatMessage(f.Z.waitingForData))))),c().createElement(N.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},c().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.systems_stats.with_suggestions),c().createElement("a",{href:s},c().createElement("span",{className:"pf-u-font-size-sm"},r.formatMessage(f.Z.systemsWithSuggestions)))),c().createElement(N.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},c().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.count),c().createElement("a",{href:d},c().createElement("span",{className:"pf-u-font-size-sm"},r.formatMessage(f.Z.totalSystems))))))):c().createElement(N.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},c().createElement(I.B,null,r.formatMessage(f.Z.rosSystemsNotConfiguredMessage)),c().createElement(C.Button,{variant:"secondary",isSmall:!0,component:"a",href:"".concat(w.Pu,"/ros")},r.formatMessage(f.Z.rosCardConfigureSystemsCTA)))),"pending"===n&&c().createElement(i.Z,null),"rejected"===n&&c().createElement(S.Z,{appName:"Resource optimization"}))})};k.propTypes={fetchRosIsConfigured:_().func,rosIsConfigured:_().object,rosIsConfiguredFetchStatus:_().string};const P=(0,Z.Z)((0,p.$j)((function(e){var t=e.DashboardStore;return{rosIsConfigured:t.rosIsConfigured,rosIsConfiguredFetchStatus:t.rosIsConfiguredFetchStatus}}),(function(e){return{fetchRosIsConfigured:function(){return e(h.pR())}}}))(k));var z=(0,o.lazy)((function(){return Promise.all([n.e(5824),n.e(7549),n.e(3101),n.e(6482)]).then(n.bind(n,15006))})),O=(0,o.lazy)((function(){return Promise.all([n.e(3749),n.e(1844)]).then(n.bind(n,6070))})),j=(0,o.lazy)((function(){return Promise.all([n.e(5824),n.e(7549),n.e(3101),n.e(7855),n.e(9767)]).then(n.bind(n,23897))})),x=(0,o.lazy)((function(){return Promise.all([n.e(5824),n.e(2017),n.e(1282)]).then(n.bind(n,10984))})),D=(0,o.lazy)((function(){return Promise.all([n.e(5824),n.e(7549),n.e(3101),n.e(3749),n.e(1062),n.e(7845)]).then(n.bind(n,90851))})),M=(0,o.lazy)((function(){return Promise.all([n.e(7549),n.e(3101),n.e(4988)]).then(n.bind(n,54988))})),T=(0,o.lazy)((function(){return Promise.all([n.e(5824),n.e(1062),n.e(7935)]).then(n.bind(n,76786))})),R=(0,o.lazy)((function(){return n.e(8419).then(n.bind(n,34873))})),A=(0,o.lazy)((function(){return n.e(7639).then(n.bind(n,47639))})),L=function(){var e=(0,o.useContext)(u.B),t=(0,g.Z)(),n=(0,p.v9)((function(e){return e.DashboardStore.vulnerabilities.recent_rules}));return e.hasSystems?c().createElement(c().Fragment,null,c().createElement(l.NP,{isWidthLimited:!0,variant:l.Dk.light,className:"insd-c-dashboard-header"},c().createElement(s.D,{headingLevel:"h1",size:"2xl",className:"pf-u-screen-reader"},t.formatMessage(f.Z.dashboardTitle)),c().createElement(o.Suspense,{fallback:c().createElement(i.Z,null)},c().createElement(x,null))),c().createElement(l.NP,{isFilled:!0,isWidthLimited:!0},c().createElement(a.r,{hasGutter:!0},c().createElement(o.Suspense,{fallback:c().createElement(i.Z,null)},(null==n?void 0:n.length)>0&&e.vulnerability&&c().createElement(r.P,null,c().createElement(D,null))),c().createElement(d.Z,{breakpointCols:{default:2,992:1},className:"ins-l-masonry",columnClassName:"ins-l-masonry_column"},c().createElement(o.Suspense,{fallback:c().createElement(i.Z,null)},e.vulnerability&&c().createElement(j,null)),c().createElement(o.Suspense,{fallback:c().createElement(i.Z,null)},e.advisor&&c().createElement(z,null)),c().createElement(o.Suspense,{fallback:c().createElement(i.Z,null)},e.compliance&&c().createElement(O,null)),c().createElement(o.Suspense,{fallback:c().createElement(i.Z,null)},e.remediations&&c().createElement(T,null)),c().createElement(o.Suspense,{fallback:c().createElement(i.Z,null)},e.patch&&c().createElement(M,null)),c().createElement(o.Suspense,{fallback:c().createElement(i.Z,null)},e.ros&&c().createElement(P,null)),c().createElement(o.Suspense,null,e.drift&&e.notifications&&c().createElement(A,null))))),c().createElement(R,{supportsSap:!0})):c().createElement(m.default,null)};L.propTypes={workloads:E.ib};const F=(0,p.$j)((function(e){return{workloads:e.DashboardStore.workloads}}),null)(L)},37486:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(9947),r=n(75106),l=n(45697),s=n.n(l),o=n(93264),c=n.n(o),i=n(38779),d=n(30893),u=n(86896),m=function(e){var t=e.appName,n=e.isSmall,l=(0,u.Z)();return c().createElement(a.u,{variant:a.I.full,className:"insd-c-dashboard__error-state ".concat(n&&"insd-c-dashboard__error-state--isSmall")},n?c().createElement(r.B,null,l.formatMessage(d.Z.errorStateTitle,{appName:t})):c().createElement(i.D,{headingLevel:"h2",size:"md"}," ",l.formatMessage(d.Z.errorStateTitle,{appName:t})," "))};m.propTypes={appName:s().string.isRequired,isSmall:s().bool};const p=m},90098:(e,t,n)=>{"use strict";n.d(t,{w:()=>u,Z:()=>m});var a=n(93264),r=n.n(a),l=n(45697),s=n.n(l),o=n(91727),c=n(69957);var i=n(52564),d={warning:function(){return r().createElement(c.ZP,{className:"insd-c-dashboard__icon-warning"})},info:o.Z,critical:i.Z},u=function(e){var t=e.message,n=e.state,a=e.systemInventory,l=d[n]||r().Fragment;return r().createElement("div",{className:"insd-c-dashboard__info-inline ".concat(a?" insd-m-padding-top":"")},r().createElement(l,{"aria-hidden":"true"}),r().createElement("p",null,t))};u.propTypes={message:s().string,state:s().string,systemInventory:s().bool};const m=u},10358:(e,t,n)=>{"use strict";n.d(t,{t:()=>h});var a=n(87462),r=n(98152),l=n(45987),s=n(32203),o=n(15627),c=n(70401),i=n(70),d=n(38779),u=n(42744),m=n(93264),p=n.n(m),f=n(45697),g=n.n(f),E=["className","appName","title","header","body","hasDivider","isExpanded","isExpandedCallback"],h=function(e){var t=e.className,n=e.appName,f=e.title,g=e.header,h=e.body,b=e.hasDivider,y=e.isExpanded,v=void 0===y||y,_=e.isExpandedCallback,Z=(0,l.Z)(e,E),S=(0,m.useState)(v),N=(0,r.Z)(S,2),I=N[0],w=N[1];return p().createElement(s.Z,(0,a.Z)({className:"insd-c-dashboard__card insd-c-dashboard__card--".concat(n," ").concat(t),id:"insd-c-dashboard__card--".concat(n),isExpanded:I},Z),b&&p().createElement(o.i,{inset:{md:"insetLg"}}),p().createElement(c.O,{onExpand:function(){w(!I),_&&_(!I)},toggleButtonProps:{id:"insd-c-dashboard__card-title--".concat(n,"-toggle-button"),"aria-label":"Details","aria-labelledby":"insd-c-dashboard__card-title--".concat(n," toggle-button"),"aria-expanded":I}},f&&p().createElement(i.l,null,p().createElement(d.D,{headingLevel:"h2",size:"lg"},f)),g),p().createElement(u.K,null,h))};h.propTypes={appName:g().string,className:g().string,title:g().any,header:g().any,body:g().any,hasDivider:g().any,isExpanded:g().bool,isExpandedCallback:g().func,footer:g().any}},66794:(e,t,n)=>{"use strict";n.d(t,{wh:()=>S,KZ:()=>N,jA:()=>w,ME:()=>I});var a=n(87462),r=n(45987),l=n(32203),s=n(70401),o=n(21005),c=n(70),i=n(38779),d=n(47173),u=n(62394),m=(n(49734),n(53983)),p=n(93264),f=n.n(p);const g=function(){return f().createElement(d.zx,{className:"insd-c-button-report-download",variant:"link",icon:f().createElement(m.ZP,null)},"Report")};var E=n(90098),h=n(45697),b=n.n(h),y=["appName","children"],v=["children","downloadReport","iconInlineMessage","iconInlineState"],_=["title","onDownload","subtitle","children"],Z=["children","isHorizontalLayout"],S=function(e){var t=e.appName,n=e.children,s=(0,r.Z)(e,y);return f().createElement(l.Z,(0,a.Z)({className:"insd-c-dashboard__card insd-c-dashboard__card--".concat(t)},s),n)};S.propTypes={appName:b().string,children:b().any},b().any;var N=function(e){var t=e.children,n=e.downloadReport,a=e.iconInlineMessage,l=e.iconInlineState,s=(0,r.Z)(e,v);return f().createElement(o.T,s,a&&f().createElement(E.Z,{message:a,state:l}),n&&f().createElement(g,null),t)};N.propTypes={children:b().any,downloadReport:b().any,iconInlineMessage:b().string,iconInlineState:b().string};var I=function(e){var t=e.title,n=e.onDownload,l=e.subtitle,u=e.children,p=(0,r.Z)(e,_);return f().createElement(s.O,(0,a.Z)({className:"insd-c-dashboard__card--header"},p),f().createElement(c.l,null,f().createElement(i.D,{headingLevel:"h4",size:"lg"},t),l&&f().createElement("div",null,l)),f().createElement(o.T,null,u,n&&f().createElement(d.zx,{variant:"link",icon:f().createElement(m.ZP,null),onClick:n},"Report")))};I.propTypes={title:b().string,titleClassName:b().string,subtitle:b().any,children:b().any,onDownload:b().func};var w=function(e){var t=e.children,n=e.isHorizontalLayout,l=(0,r.Z)(e,Z);return f().createElement(u.e,(0,a.Z)({className:"insd-c-dashboard__card--body ".concat(n?" insd-m-horizontal":"")},l),t)};w.propTypes={isHorizontalLayout:b().any,children:b().any},b().any},98756:(e,t,n)=>{"use strict";n.d(t,{PF:()=>m,Rm:()=>u,ib:()=>d,kC:()=>i});var a=n(4942),r=n(71002),l=n(1284);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=["SAP","All workloads"],i=function(e){return e[0].toUpperCase()+e.substring(1)},d=function(e,t,n){var a,l,s=null==e?void 0:e[t];"object"!==(0,r.Z)(e)&&(l=new Error("`".concat(n,"` only accepts object as `").concat(t,"` prop.")));var o=Object.keys(s);o.some((function(e){return!c.includes(e)}))&&(l=new Error("`".concat(n,"` accepts either SAP or All workloads as `").concat(t,".` prop."))),(null===(a=o.find((function(e){return c.includes(e)})))||void 0===a?void 0:a.length)>1&&(l=new Error("`".concat(n,"` accepts only one of SAP or All workloads as `").concat(t,".` prop.")));var i=Object.values(s).findIndex((function(e){var t=e.isSelected;return void 0!==t&&"boolean"!=typeof t}));return-1!==i&&(l=new Error("`".concat(n,"` requires isSelected as boolean prop in `").concat(t,".").concat(null==o?void 0:o[i],"`."))),l},u=function(e,t){var n,a,r;return(0,l.generateFilter)({system_profile:o(o(o(o({},(null==e||null===(n=e.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==e||null===(a=e["Ansible Automation Platform"])||void 0===a?void 0:a.isSelected)&&{ansible:"not_nil"}),(null==e||null===(r=e["Microsoft SQL"])||void 0===r?void 0:r.isSelected)&&{mssql:"not_nil"}),(null==t?void 0:t.length)>0&&{sap_sids:t})},void 0,{arrayEnhancer:"contains"})},m=function(e,t,n){return void 0===t||!Object.values(t).map((function(e){return e.isSelected})).reduce((function(e,t){return e||t}),!1)&&0===e.length&&0===Object.entries(n).length}},28992:()=>{}}]);
//# sourceMappingURL=../sourcemaps/DashboardRoute.4439b86d4c6a88e2f20e0d0ee75c5199.js.map