"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[468,5605],{52564:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(43047),l=n(93264),r=n.n(l);const s=function(){return r().createElement(a.ZP,{className:"insd-c-dashboard__icon-critical"})}},91727:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(53688),l=n(93264),r=n.n(l);const s=function(){return r().createElement(a.ZP,{className:"insd-c-dashboard__icon-info"})}},90942:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var a=n(50693),l=n(16475),r=n(32045),s=n(38779),c=n(93264),i=n.n(c),o=n(55140),m=n(46891),d=n(40827),u=n(20333),p=n(32267),f=n(28216),g=n(30893),h=n(86896),E=n(98756),b=n(57149),y=n(10358),v=n(66794),Z=n(45697),N=n.n(Z),_=n(54291),w=n(37486),S=n(28191),k=n(92298),M=n(59303),z=n(14938),P=function(e){var t=e.fetchRosIsConfigured,n=e.rosIsConfiguredFetchStatus,a=e.rosIsConfigured,l=(0,h.Z)();(0,c.useEffect)((function(){t()}),[t]);var r="".concat(M.Pu,"/ros?with_waiting_for_data=true"),s="".concat(M.Pu,"/ros?with_suggestions=true"),o="".concat(M.Pu,"/ros");return i().createElement(y.t,{appName:"ResourceOptimization",className:"insd-m-toggle-right-on-md",title:l.formatMessage(g.Z.resourceOptimizationCardHeader),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_ros")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_ros",e)},body:i().createElement(v.jA,null,"fulfilled"===n&&(a.success?i().createElement(i().Fragment,null,i().createElement("div",null,l.formatMessage(g.Z.rosSystemsGenericMessage)),i().createElement(S.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},i().createElement(S.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItemsLg",sm:"spaceItems2xl"}},a.systems_stats.waiting_for_data>0&&i().createElement(S.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},i().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.systems_stats.waiting_for_data),i().createElement("a",{href:r},i().createElement("span",{className:"pf-u-font-size-sm"},i().createElement("span",null,l.formatMessage(g.Z.waitingForData))))),i().createElement(S.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},i().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.systems_stats.with_suggestions),i().createElement("a",{href:s},i().createElement("span",{className:"pf-u-font-size-sm"},l.formatMessage(g.Z.systemsWithSuggestions)))),i().createElement(S.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},i().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.count),i().createElement("a",{href:o},i().createElement("span",{className:"pf-u-font-size-sm"},l.formatMessage(g.Z.totalSystems))))))):i().createElement(S.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},i().createElement(k.B,null,l.formatMessage(g.Z.rosSystemsNotConfiguredMessage)),i().createElement(z.Button,{variant:"secondary",isSmall:!0,component:"a",href:"".concat(M.Pu,"/ros")},l.formatMessage(g.Z.rosCardConfigureSystemsCTA)))),"pending"===n&&i().createElement(m.Z,null),"rejected"===n&&i().createElement(w.Z,{appName:"Resource optimization"}))})};P.propTypes={fetchRosIsConfigured:N().func,rosIsConfigured:N().object,rosIsConfiguredFetchStatus:N().string};const I=(0,_.Z)((0,f.$j)((function(e){var t=e.DashboardStore;return{rosIsConfigured:t.rosIsConfigured,rosIsConfiguredFetchStatus:t.rosIsConfiguredFetchStatus}}),(function(e){return{fetchRosIsConfigured:function(){return e(b.pR())}}}))(P));var x=(0,c.lazy)((function(){return Promise.all([n.e(5824),n.e(3101),n.e(9372)]).then(n.bind(n,15006))})),C=(0,c.lazy)((function(){return Promise.all([n.e(3749),n.e(9458)]).then(n.bind(n,18968))})),L=(0,c.lazy)((function(){return Promise.all([n.e(5824),n.e(3101),n.e(7855),n.e(3202)]).then(n.bind(n,23897))})),D=(0,c.lazy)((function(){return Promise.all([n.e(5824),n.e(2017),n.e(5817)]).then(n.bind(n,10984))})),O=(0,c.lazy)((function(){return Promise.all([n.e(5824),n.e(3101),n.e(3749),n.e(1062),n.e(6036)]).then(n.bind(n,90851))})),j=(0,c.lazy)((function(){return Promise.all([n.e(5824),n.e(1062),n.e(8594)]).then(n.bind(n,52953))})),R=(0,c.lazy)((function(){return Promise.all([n.e(3101),n.e(4988)]).then(n.bind(n,54988))})),B=(0,c.lazy)((function(){return Promise.all([n.e(5824),n.e(1062),n.e(6065)]).then(n.bind(n,76786))})),T=(0,c.lazy)((function(){return n.e(884).then(n.bind(n,50884))})),A=(0,c.lazy)((function(){return n.e(7639).then(n.bind(n,47639))})),W=function(){var e=(0,c.useContext)(u.B),t=(0,h.Z)(),n=(0,f.v9)((function(e){return e.DashboardStore.vulnerabilities.recent_rules})),E=(0,o.Z)().isFedramp;return e.hasSystems?i().createElement(i().Fragment,null,i().createElement(r.NP,{isWidthLimited:!0,variant:r.Dk.light,className:"insd-c-dashboard-header"},i().createElement(s.D,{headingLevel:"h1",size:"2xl",className:"pf-u-screen-reader"},t.formatMessage(g.Z.dashboardTitle)),i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},i().createElement(D,null))),i().createElement(r.NP,{isFilled:!0,isWidthLimited:!0},i().createElement(a.r,{hasGutter:!0},i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},(null==n?void 0:n.length)>0&&e.vulnerability&&i().createElement(l.P,null,i().createElement(O,null))),i().createElement(d.Z,{breakpointCols:{default:2,992:1},className:"ins-l-masonry",columnClassName:"ins-l-masonry_column"},i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},e.vulnerability&&i().createElement(L,null)),i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},e.advisor&&i().createElement(x,null)),i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},e.compliance&&i().createElement(C,null)),i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},e.remediations&&i().createElement(B,null)),i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},e.patch&&i().createElement(R,null)),i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},e.ros&&i().createElement(I,null)),i().createElement(c.Suspense,null,e.drift&&e.notifications&&i().createElement(A,null)),!E&&i().createElement(c.Suspense,{fallback:i().createElement(m.Z,null)},e.subscriptions&&i().createElement(j,null))))),i().createElement(T,{supportsSap:!0})):i().createElement(p.default,null)};W.propTypes={workloads:E.ib};const F=(0,f.$j)((function(e){return{workloads:e.DashboardStore.workloads}}),null)(W)},37486:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(9947),l=n(75106),r=n(45697),s=n.n(r),c=n(93264),i=n.n(c),o=n(38779),m=n(30893),d=n(86896),u=function(e){var t=e.appName,n=e.isSmall,r=(0,d.Z)();return i().createElement(a.u,{variant:a.I.full,className:"insd-c-dashboard__error-state ".concat(n&&"insd-c-dashboard__error-state--isSmall")},n?i().createElement(l.B,null,r.formatMessage(m.Z.errorStateTitle,{appName:t})):i().createElement(o.D,{headingLevel:"h2",size:"md"}," ",r.formatMessage(m.Z.errorStateTitle,{appName:t})," "))};u.propTypes={appName:s().string.isRequired,isSmall:s().bool};const p=u},90098:(e,t,n)=>{n.d(t,{w:()=>d,Z:()=>u});var a=n(93264),l=n.n(a),r=n(45697),s=n.n(r),c=n(91727),i=n(69957);var o=n(52564),m={warning:function(){return l().createElement(i.ZP,{className:"insd-c-dashboard__icon-warning"})},info:c.Z,critical:o.Z},d=function(e){var t=e.message,n=e.state,a=e.systemInventory,r=m[n]||l().Fragment;return l().createElement("div",{className:"insd-c-dashboard__info-inline ".concat(a?" insd-m-padding-top":"")},l().createElement(r,{"aria-hidden":"true"}),l().createElement("p",null,t))};d.propTypes={message:s().string,state:s().string,systemInventory:s().bool};const u=d},10358:(e,t,n)=>{n.d(t,{t:()=>E});var a=n(87462),l=n(70885),r=n(45987),s=n(32203),c=n(15627),i=n(70401),o=n(70),m=n(38779),d=n(42744),u=n(93264),p=n.n(u),f=n(45697),g=n.n(f),h=["className","appName","title","header","body","hasDivider","isExpanded","isExpandedCallback"],E=function(e){var t=e.className,n=e.appName,f=e.title,g=e.header,E=e.body,b=e.hasDivider,y=e.isExpanded,v=void 0===y||y,Z=e.isExpandedCallback,N=(0,r.Z)(e,h),_=(0,u.useState)(v),w=(0,l.Z)(_,2),S=w[0],k=w[1];return p().createElement(s.Z,(0,a.Z)({className:"insd-c-dashboard__card insd-c-dashboard__card--".concat(n," ").concat(t),id:"insd-c-dashboard__card--".concat(n),isExpanded:S},N),b&&p().createElement(c.i,{inset:{md:"insetLg"}}),p().createElement(i.O,{onExpand:function(){k(!S),Z&&Z(!S)},toggleButtonProps:{id:"insd-c-dashboard__card-title--".concat(n,"-toggle-button"),"aria-label":"Details","aria-labelledby":"insd-c-dashboard__card-title--".concat(n," toggle-button"),"aria-expanded":S}},f&&p().createElement(o.l,null,p().createElement(m.D,{headingLevel:"h2",size:"lg"},f)),g),p().createElement(d.K,null,E))};E.propTypes={appName:g().string,className:g().string,title:g().any,header:g().any,body:g().any,hasDivider:g().any,isExpanded:g().bool,isExpandedCallback:g().func,footer:g().any}},66794:(e,t,n)=>{n.d(t,{wh:()=>_,KZ:()=>w,jA:()=>k,ME:()=>S});var a=n(87462),l=n(45987),r=n(32203),s=n(70401),c=n(21005),i=n(70),o=n(38779),m=n(47173),d=n(62394),u=(n(49734),n(53983)),p=n(93264),f=n.n(p);const g=function(){return f().createElement(m.zx,{className:"insd-c-button-report-download",variant:"link",icon:f().createElement(u.ZP,null)},"Report")};var h=n(90098),E=n(45697),b=n.n(E),y=["appName","children"],v=["children","downloadReport","iconInlineMessage","iconInlineState"],Z=["title","onDownload","subtitle","children"],N=["children","isHorizontalLayout"],_=function(e){var t=e.appName,n=e.children,s=(0,l.Z)(e,y);return f().createElement(r.Z,(0,a.Z)({className:"insd-c-dashboard__card insd-c-dashboard__card--".concat(t)},s),n)};_.propTypes={appName:b().string,children:b().any},b().any;var w=function(e){var t=e.children,n=e.downloadReport,a=e.iconInlineMessage,r=e.iconInlineState,s=(0,l.Z)(e,v);return f().createElement(c.T,s,a&&f().createElement(h.Z,{message:a,state:r}),n&&f().createElement(g,null),t)};w.propTypes={children:b().any,downloadReport:b().any,iconInlineMessage:b().string,iconInlineState:b().string};var S=function(e){var t=e.title,n=e.onDownload,r=e.subtitle,d=e.children,p=(0,l.Z)(e,Z);return f().createElement(s.O,(0,a.Z)({className:"insd-c-dashboard__card--header"},p),f().createElement(i.l,null,f().createElement(o.D,{headingLevel:"h4",size:"lg"},t),r&&f().createElement("div",null,r)),f().createElement(c.T,null,d,n&&f().createElement(m.zx,{variant:"link",icon:f().createElement(u.ZP,null),onClick:n},"Report")))};S.propTypes={title:b().string,titleClassName:b().string,subtitle:b().any,children:b().any,onDownload:b().func};var k=function(e){var t=e.children,n=e.isHorizontalLayout,r=(0,l.Z)(e,N);return f().createElement(d.e,(0,a.Z)({className:"insd-c-dashboard__card--body ".concat(n?" insd-m-horizontal":"")},r),t)};k.propTypes={isHorizontalLayout:b().any,children:b().any},b().any},32267:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j}),n(87757);var a=n(38779),l=n(47173),r=n(32045),s=n(32203),c=n(70401),i=n(68774),o=n(62394),m=n(72936),d=n(49345),u=n(28191),p=n(92298),f=n(50693),g=n(16475),h=n(93264),E=n.n(h),b=(n(71094),n(11306)),y=n(94184),v=n.n(y),Z=n(45697),N=n.n(Z),_=function(e){var t=e.iconListStyle,n=e.className,a=e.children,l=v()(n,"insd-c-icon-list");return E().createElement("ul",{className:l,style:t},a)};const w=_;_.propTypes={children:N().any.isRequired,iconListStyle:N().string,className:N().string};var S=function(e){var t=e.className,n=e.iconListItemStyle,a=e.children,l=v()(t,"insd-c-icon-list__item");return E().createElement("li",{className:l,style:n},a)};const k=S;S.propTypes={className:N().string,iconListItemStyle:N().string,children:N().any.isRequired};var M=n(71523),z=n(4942),P=n(14938),I=function(e){var t=e.className,n=e.hasGraphic,a=e.graphicRight,l=e.dark1000,r=e.fullBleed,s=e.style,c=e.children,i=v()(t,"insd-c-marketing-banner",(0,z.Z)({},"insd-m-with-graphic",n),(0,z.Z)({},"insd-m-graphic-right",a),(0,z.Z)({},"insd-m-dark-1000 pf-m-dark-1000",l),(0,z.Z)({},"insd-m-full-bleed",r));return E().createElement(P.PageSection,{className:i,style:s,isWidthLimited:!0},c)};const x=I;I.propTypes={children:N().any.isRequired,className:N().string,style:N().any,graphicRight:N().bool,hasGraphic:N().bool,dark1000:N().bool,fullBleed:N().bool,isWidthLimited:N().bool};var C=n(59303),L=n(30893),D=n(86896),O=n(55140);const j=function(){var e=(0,D.Z)(),t=(0,O.Z)().hideGlobalFilter;return(0,h.useEffect)((function(){return null==t||t(),function(){null==t||t(!1)}}),[]),E().createElement("div",{className:"insd-c-marketing-page"},E().createElement(x,{hasGraphic:!0,graphicRight:!0,dark1000:!0,fullBleed:!0,isWidthLimited:!0,style:{"--ins-c-marketing-banner--graphic--width-on-md":"200px","--ins-c-marketing-banner--graphic--width-on-xl":"400px"}},E().createElement(f.r,null,E().createElement(g.P,null,E().createElement(u.k,{direction:{default:"column"}},E().createElement(p.B,null,E().createElement(a.D,{headingLevel:"h1",size:"2xl"},e.formatMessage(L.Z.noSystemsTitle))),E().createElement(p.B,{spacer:{default:"spacer2xl"}},E().createElement("div",{className:"insd-c-width-limiter",style:{"--insd-c-width-limiter--MaxWidth":"600px"}},E().createElement("p",{className:"ins-c-text--black-400"},e.formatMessage(L.Z.singleConsistent)))),E().createElement(p.B,null,E().createElement(l.zx,{isLarge:!0,component:"a",variant:"primary",href:"".concat(C.Pu,"/registration")},e.formatMessage(L.Z.registerYourSystems))),E().createElement(p.B,null,E().createElement(l.zx,{className:"pf-m-plain",component:"a",variant:"secondary",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},e.formatMessage(L.Z.learnmoreRHI),"   ",E().createElement(b.ZP,null))))))),E().createElement(r.NP,{isWidthLimited:!0},E().createElement(f.r,{lg:6,hasGutter:!0},E().createElement(g.P,null,E().createElement(s.Z,{style:{height:"100%"}},E().createElement(c.O,null,E().createElement(i.D,null,E().createElement(a.D,{headingLevel:"h2"},e.formatMessage(L.Z.zslblTitle)),E().createElement("p",null,e.formatMessage(L.Z.zslblBody)))),E().createElement(o.e,null,E().createElement(w,null,E().createElement(k,null,e.formatMessage(L.Z.zslblb1)),E().createElement(k,null,e.formatMessage(L.Z.zslblb2)),E().createElement(k,null,e.formatMessage(L.Z.zslblb3)),E().createElement(k,null,e.formatMessage(L.Z.zslblb4)),E().createElement(k,null,e.formatMessage(L.Z.zslblb5)))))),E().createElement(g.P,null,E().createElement(s.Z,{style:{height:"100%"}},E().createElement(c.O,null,E().createElement(i.D,null,E().createElement(a.D,{headingLevel:"h2"},e.formatMessage(L.Z.zsrblTitle)),E().createElement("p",null,e.formatMessage(L.Z.zsrblBody)))),E().createElement(o.e,null,E().createElement(w,null,E().createElement(k,null,e.formatMessage(L.Z.zsrblb1)),E().createElement(k,null,e.formatMessage(L.Z.zsrblb2)),E().createElement(k,null,e.formatMessage(L.Z.zsrblb3)),E().createElement(k,null,e.formatMessage(L.Z.zsrblb4)),E().createElement(k,null,e.formatMessage(L.Z.zsrblb5)))))))),E().createElement(x,{isWidthLimited:"true",hasGraphic:!0,graphicRight:!0,dark1000:!0,fullBleed:!0,style:{"--ins-c-marketing-banner--graphic--width":"400px"}},E().createElement(u.k,{direction:{default:"column"}},E().createElement(p.B,{spacer:{default:"spacerLg"}},E().createElement(a.D,{headingLevel:"h3",size:"lg"},e.formatMessage(L.Z.dataPrivacyAndControlsTitle))),E().createElement(p.B,{spacer:{default:"spacerXl"}},E().createElement("p",{className:"insd-c-width-limiter ins-c-text--black-400",style:{"--insd-c-width-limiter--MaxWidth":"70ch"}},e.formatMessage(L.Z.dataPrivacyAndControls))),E().createElement(p.B,null,E().createElement(l.zx,{component:"a",target:"_blank",rel:"noreferrer",href:"./security/insights"},e.formatMessage(L.Z.securityRedirect))))),E().createElement(r.NP,{isWidthLimited:!0},E().createElement(u.k,{direction:{default:"column"}},E().createElement(p.B,{spacer:{default:"spacerXl"}},E().createElement(i.D,null,E().createElement(a.D,{headingLevel:"h3"},e.formatMessage(L.Z.insightsandsmartmanagement)),E().createElement("div",{className:"insd-c-width-limiter",style:{"--insd-c-width-limiter--MaxWidth":"900px"}},E().createElement("p",null,e.formatMessage(L.Z.smartManagement))))),E().createElement(p.B,null,E().createElement(f.r,{hasGutter:!0},E().createElement(g.P,{md:6,lg:5,mdRowSpan:3},E().createElement("img",{src:M,alt:"Insights Smart Management"})),E().createElement(g.P,{md:6,lg:7},E().createElement("div",{className:"insd-c-width-limiter pf-u-pt-lg-on-lg",style:{"--insd-c-width-limiter--MaxWidth":"600px"}},E().createElement(m.aV,null,E().createElement(d.H,null,e.formatMessage(L.Z.rhm1)),E().createElement(d.H,null,e.formatMessage(L.Z.rhm2)),E().createElement(d.H,null,e.formatMessage(L.Z.rhm3))))),E().createElement(g.P,{md:6,lg:7,className:"pf-u-pl-lg"},E().createElement(u.k,null,E().createElement(p.B,null,E().createElement(l.zx,{className:"pf-m-secondary",component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/smart-management"},e.formatMessage(L.Z.learnmore))),E().createElement(p.B,null,E().createElement(l.zx,{className:"pf-m-secondary",component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/contact"},e.formatMessage(L.Z.contactsales))))))))))}},98756:(e,t,n)=>{n.d(t,{kC:()=>o,ib:()=>m,Rm:()=>d,PF:()=>u});var a=n(4942),l=n(71002),r=n(1284);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=["SAP","All workloads"],o=function(e){return e[0].toUpperCase()+e.substring(1)},m=function(e,t,n){var a,r,s=null==e?void 0:e[t];"object"!==(0,l.Z)(e)&&(r=new Error("`".concat(n,"` only accepts object as `").concat(t,"` prop.")));var c=Object.keys(s);c.some((function(e){return!i.includes(e)}))&&(r=new Error("`".concat(n,"` accepts either SAP or All workloads as `").concat(t,".` prop."))),(null===(a=c.find((function(e){return i.includes(e)})))||void 0===a?void 0:a.length)>1&&(r=new Error("`".concat(n,"` accepts only one of SAP or All workloads as `").concat(t,".` prop.")));var o=Object.values(s).findIndex((function(e){var t=e.isSelected;return void 0!==t&&"boolean"!=typeof t}));return-1!==o&&(r=new Error("`".concat(n,"` requires isSelected as boolean prop in `").concat(t,".").concat(null==c?void 0:c[o],"`."))),r},d=function(e,t){var n,a,l;return(0,r.h3)({system_profile:c(c(c(c({},(null==e||null===(n=e.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==e||null===(a=e["Ansible Automation Platform"])||void 0===a?void 0:a.isSelected)&&{ansible:"not_nil"}),(null==e||null===(l=e["Microsoft SQL"])||void 0===l?void 0:l.isSelected)&&{mssql:"not_nil"}),(null==t?void 0:t.length)>0&&{sap_sids:t})},void 0,{arrayEnhancer:"contains"})},u=function(e,t,n){return void 0===t||!Object.values(t).map((function(e){return e.isSelected})).reduce((function(e,t){return e||t}),!1)&&0===e.length&&0===Object.entries(n).length}},71523:(e,t,n)=>{e.exports=n.p+"fonts/img__ins-and-sm.png"}}]);
//# sourceMappingURL=../sourcemaps/DashboardRoute.039287cf10f3587d84257f0b48152cba.js.map