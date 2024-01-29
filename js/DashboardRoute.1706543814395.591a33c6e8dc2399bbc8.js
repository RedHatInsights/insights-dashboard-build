(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[468],{52564:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(43047),l=n(93264),r=n.n(l);const s=function(){return r().createElement(a.ZP,{className:"insd-c-dashboard__icon-critical"})}},91727:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(53688),l=n(93264),r=n.n(l);const s=function(){return r().createElement(a.ZP,{className:"insd-c-dashboard__icon-info"})}},90942:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var a=n(50693),l=n(16475),r=n(32045),s=n(38779),i=n(93264),c=n.n(i),o=n(46891),m=n(40827),d=n(86227),u=n(60932),p=n(28216),f=n(30893),g=n(86896),h=n(98756),E=n(57149),b=n(10358),y=n(66794),Z=n(45697),v=n.n(Z),N=n(37486),_=n(28191),w=n(92298),S=n(14938),k=n(92397),z=function(e){var t=e.fetchRosIsConfigured,n=e.rosIsConfiguredFetchStatus,a=e.rosIsConfigured,l=(0,g.Z)();return(0,i.useEffect)((function(){t()}),[t]),c().createElement(b.t,{appName:"ResourceOptimization",className:"insd-m-toggle-right-on-md",title:l.formatMessage(f.Z.resourceOptimizationCardHeader),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_ros")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_ros",e)},body:c().createElement(y.jA,null,"fulfilled"===n&&(a.success?c().createElement(c().Fragment,null,c().createElement("div",null,l.formatMessage(f.Z.rosSystemsGenericMessage)),c().createElement(_.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},c().createElement(_.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItemsLg",sm:"spaceItems2xl"}},a.systems_stats.waiting_for_data>0&&c().createElement(_.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},c().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.systems_stats.waiting_for_data),c().createElement(k.Z,{app:"ros",to:"/?with_waiting_for_data=true"},c().createElement("span",{className:"pf-u-font-size-sm"},c().createElement("span",null,l.formatMessage(f.Z.waitingForData))))),c().createElement(_.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},c().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.systems_stats.with_suggestions),c().createElement(k.Z,{app:"ros",to:"/?with_suggestions=true"},c().createElement("span",{className:"pf-u-font-size-sm"},l.formatMessage(f.Z.systemsWithSuggestions)))),c().createElement(_.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},c().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-bold"},a.count),c().createElement(k.Z,{app:"ros",to:"/"},c().createElement("span",{className:"pf-u-font-size-sm"},l.formatMessage(f.Z.totalSystems))))))):c().createElement(_.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},c().createElement(w.B,null,l.formatMessage(f.Z.rosSystemsNotConfiguredMessage)),c().createElement(k.Z,{app:"ros",to:"/"},c().createElement(S.Button,{variant:"secondary",isSmall:!0},l.formatMessage(f.Z.rosCardConfigureSystemsCTA))))),"pending"===n&&c().createElement(o.Z,null),"rejected"===n&&c().createElement(N.Z,{appName:"Resource optimization"}))})};z.propTypes={fetchRosIsConfigured:v().func,rosIsConfigured:v().object,rosIsConfiguredFetchStatus:v().string};const M=(0,p.$j)((function(e){var t=e.DashboardStore;return{rosIsConfigured:t.rosIsConfigured,rosIsConfiguredFetchStatus:t.rosIsConfiguredFetchStatus}}),(function(e){return{fetchRosIsConfigured:function(){return e(E.pR())}}}))(z);var I=n(55140),P=(0,i.lazy)((function(){return Promise.all([n.e(5824),n.e(3715),n.e(6482)]).then(n.bind(n,15006))})),x=(0,i.lazy)((function(){return Promise.all([n.e(3749),n.e(1844)]).then(n.bind(n,6070))})),C=(0,i.lazy)((function(){return Promise.all([n.e(5824),n.e(3715),n.e(7855),n.e(9082),n.e(9767)]).then(n.bind(n,23897))})),D=(0,i.lazy)((function(){return Promise.all([n.e(5824),n.e(8764),n.e(387),n.e(2017),n.e(9082),n.e(1753)]).then(n.bind(n,10984))})),L=(0,i.lazy)((function(){return Promise.all([n.e(5824),n.e(3749),n.e(9682),n.e(7845)]).then(n.bind(n,90851))})),O=(0,i.lazy)((function(){return Promise.all([n.e(3715),n.e(4988)]).then(n.bind(n,54988))})),j=(0,i.lazy)((function(){return Promise.all([n.e(5824),n.e(9682),n.e(7935)]).then(n.bind(n,76786))})),R=(0,i.lazy)((function(){return n.e(8419).then(n.bind(n,34873))})),T=(0,i.lazy)((function(){return n.e(7639).then(n.bind(n,47639))})),B=function(){var e=(0,i.useContext)(d.B),t=(0,g.Z)(),n=(0,p.v9)((function(e){return e.DashboardStore.vulnerabilities.recent_rules})),h=(0,I.Z)();return(0,i.useEffect)((function(){h.updateDocumentTitle("Dashboard | Red Hat Insights")}),[h]),e.hasSystems?c().createElement(c().Fragment,null,c().createElement(r.NP,{isWidthLimited:!0,variant:r.Dk.light,className:"insd-c-dashboard-header"},c().createElement(s.D,{headingLevel:"h1",size:"2xl",className:"pf-u-screen-reader"},t.formatMessage(f.Z.dashboardTitle)),c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},c().createElement(D,null))),c().createElement(r.NP,{isFilled:!0,isWidthLimited:!0},c().createElement(a.r,{hasGutter:!0},c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},(null==n?void 0:n.length)>0&&e.vulnerability&&c().createElement(l.P,null,c().createElement(L,null))),c().createElement(m.Z,{breakpointCols:{default:2,992:1},className:"ins-l-masonry",columnClassName:"ins-l-masonry_column"},c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},e.vulnerability&&c().createElement(C,null)),c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},e.advisor&&c().createElement(P,null)),c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},e.compliance&&c().createElement(x,null)),c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},e.remediations&&c().createElement(j,null)),c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},e.patch&&c().createElement(O,null)),c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},e.ros&&c().createElement(M,null)),c().createElement(i.Suspense,null,e.drift&&e.notifications&&c().createElement(T,null))))),c().createElement(R,{supportsSap:!0})):c().createElement(u.default,null)};B.propTypes={workloads:h.ib};const A=(0,p.$j)((function(e){return{workloads:e.DashboardStore.workloads}}),null)(B)},37486:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(9947),l=n(75106),r=n(45697),s=n.n(r),i=n(93264),c=n.n(i),o=n(38779),m=n(30893),d=n(86896),u=function(e){var t=e.appName,n=e.isSmall,r=(0,d.Z)();return c().createElement(a.u,{variant:a.I.full,className:"insd-c-dashboard__error-state ".concat(n&&"insd-c-dashboard__error-state--isSmall")},n?c().createElement(l.B,null,r.formatMessage(m.Z.errorStateTitle,{appName:t})):c().createElement(o.D,{headingLevel:"h2",size:"md"}," ",r.formatMessage(m.Z.errorStateTitle,{appName:t})," "))};u.propTypes={appName:s().string.isRequired,isSmall:s().bool};const p=u},90098:(e,t,n)=>{"use strict";n.d(t,{w:()=>d,Z:()=>u});var a=n(93264),l=n.n(a),r=n(45697),s=n.n(r),i=n(91727),c=n(69957);var o=n(52564),m={warning:function(){return l().createElement(c.ZP,{className:"insd-c-dashboard__icon-warning"})},info:i.Z,critical:o.Z},d=function(e){var t=e.message,n=e.state,a=e.systemInventory,r=m[n]||l().Fragment;return l().createElement("div",{className:"insd-c-dashboard__info-inline ".concat(a?" insd-m-padding-top":"")},l().createElement(r,{"aria-hidden":"true"}),l().createElement("p",null,t))};d.propTypes={message:s().string,state:s().string,systemInventory:s().bool};const u=d},20940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(93264),l=n.n(a),r=n(94184),s=n.n(r),i=n(45697),c=n.n(i),o=function(e){var t=e.iconListStyle,n=e.className,a=e.children,r=s()(n,"insd-c-icon-list");return l().createElement("ul",{className:r,style:t},a)};const m=o;o.propTypes={children:c().any.isRequired,iconListStyle:c().string,className:c().string}},31486:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(93264),l=n.n(a),r=n(94184),s=n.n(r),i=n(45697),c=n.n(i),o=function(e){var t=e.className,n=e.iconListItemStyle,a=e.children,r=s()(t,"insd-c-icon-list__item");return l().createElement("li",{className:r,style:n},a)};const m=o;o.propTypes={className:c().string,iconListItemStyle:c().string,children:c().any.isRequired}},3203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(4942),l=n(14938),r=n(93264),s=n.n(r),i=n(94184),c=n.n(i),o=n(45697),m=n.n(o),d=function(e){var t=e.className,n=e.hasGraphic,r=e.graphicRight,i=e.dark1000,o=e.fullBleed,m=e.style,d=e.children,u=c()(t,"insd-c-marketing-banner",(0,a.Z)({},"insd-m-with-graphic",n),(0,a.Z)({},"insd-m-graphic-right",r),(0,a.Z)({},"insd-m-dark-1000 pf-m-dark-1000",i),(0,a.Z)({},"insd-m-full-bleed",o));return s().createElement(l.PageSection,{className:u,style:m,isWidthLimited:!0},d)};const u=d;d.propTypes={children:m().any.isRequired,className:m().string,style:m().any,graphicRight:m().bool,hasGraphic:m().bool,dark1000:m().bool,fullBleed:m().bool,isWidthLimited:m().bool}},10358:(e,t,n)=>{"use strict";n.d(t,{t:()=>E});var a=n(87462),l=n(98152),r=n(45987),s=n(32203),i=n(15627),c=n(70401),o=n(70),m=n(38779),d=n(42744),u=n(93264),p=n.n(u),f=n(45697),g=n.n(f),h=["className","appName","title","header","body","hasDivider","isExpanded","isExpandedCallback"],E=function(e){var t=e.className,n=e.appName,f=e.title,g=e.header,E=e.body,b=e.hasDivider,y=e.isExpanded,Z=void 0===y||y,v=e.isExpandedCallback,N=(0,r.Z)(e,h),_=(0,u.useState)(Z),w=(0,l.Z)(_,2),S=w[0],k=w[1];return p().createElement(s.Z,(0,a.Z)({className:"insd-c-dashboard__card insd-c-dashboard__card--".concat(n," ").concat(t),id:"insd-c-dashboard__card--".concat(n),isExpanded:S},N),b&&p().createElement(i.i,{inset:{md:"insetLg"}}),p().createElement(c.O,{onExpand:function(){k(!S),v&&v(!S)},toggleButtonProps:{id:"insd-c-dashboard__card-title--".concat(n,"-toggle-button"),"aria-label":"Details","aria-labelledby":"insd-c-dashboard__card-title--".concat(n," toggle-button"),"aria-expanded":S}},f&&p().createElement(o.l,null,p().createElement(m.D,{headingLevel:"h2",size:"lg"},f)),g),p().createElement(d.K,null,E))};E.propTypes={appName:g().string,className:g().string,title:g().any,header:g().any,body:g().any,hasDivider:g().any,isExpanded:g().bool,isExpandedCallback:g().func,footer:g().any}},66794:(e,t,n)=>{"use strict";n.d(t,{wh:()=>_,KZ:()=>w,jA:()=>k,ME:()=>S});var a=n(87462),l=n(45987),r=n(32203),s=n(70401),i=n(21005),c=n(70),o=n(38779),m=n(47173),d=n(62394),u=(n(49734),n(53983)),p=n(93264),f=n.n(p);const g=function(){return f().createElement(m.zx,{className:"insd-c-button-report-download",variant:"link",icon:f().createElement(u.ZP,null)},"Report")};var h=n(90098),E=n(45697),b=n.n(E),y=["appName","children"],Z=["children","downloadReport","iconInlineMessage","iconInlineState"],v=["title","onDownload","subtitle","children"],N=["children","isHorizontalLayout"],_=function(e){var t=e.appName,n=e.children,s=(0,l.Z)(e,y);return f().createElement(r.Z,(0,a.Z)({className:"insd-c-dashboard__card insd-c-dashboard__card--".concat(t)},s),n)};_.propTypes={appName:b().string,children:b().any},b().any;var w=function(e){var t=e.children,n=e.downloadReport,a=e.iconInlineMessage,r=e.iconInlineState,s=(0,l.Z)(e,Z);return f().createElement(i.T,s,a&&f().createElement(h.Z,{message:a,state:r}),n&&f().createElement(g,null),t)};w.propTypes={children:b().any,downloadReport:b().any,iconInlineMessage:b().string,iconInlineState:b().string};var S=function(e){var t=e.title,n=e.onDownload,r=e.subtitle,d=e.children,p=(0,l.Z)(e,v);return f().createElement(s.O,(0,a.Z)({className:"insd-c-dashboard__card--header"},p),f().createElement(c.l,null,f().createElement(o.D,{headingLevel:"h4",size:"lg"},t),r&&f().createElement("div",null,r)),f().createElement(i.T,null,d,n&&f().createElement(m.zx,{variant:"link",icon:f().createElement(u.ZP,null),onClick:n},"Report")))};S.propTypes={title:b().string,titleClassName:b().string,subtitle:b().any,children:b().any,onDownload:b().func};var k=function(e){var t=e.children,n=e.isHorizontalLayout,r=(0,l.Z)(e,N);return f().createElement(d.e,(0,a.Z)({className:"insd-c-dashboard__card--body ".concat(n?" insd-m-horizontal":"")},r),t)};k.propTypes={isHorizontalLayout:b().any,children:b().any},b().any},60932:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I}),n(87757);var a=n(38779),l=n(47173),r=n(32045),s=n(32203),i=n(70401),c=n(68774),o=n(62394),m=n(72936),d=n(49345),u=n(28191),p=n(92298),f=n(50693),g=n(16475),h=n(93264),E=n.n(h),b=(n(71094),n(20940)),y=n(31486);const Z=n.p+"fonts/img__ins-and-sm.png";var v=n(3203),N=n(59303),_=n(30893),w=n(86896),S=n(55140),k=n(11306),z=n(15432),M=n.n(z);const I=function(){var e=(0,w.Z)(),t=(0,S.Z)().hideGlobalFilter;return(0,h.useEffect)((function(){return null==t||t(),function(){null==t||t(!1)}}),[]),E().createElement("div",{className:"insd-c-marketing-page"},E().createElement(v.Z,{hasGraphic:!0,graphicRight:!0,dark1000:!0,fullBleed:!0,isWidthLimited:!0,style:{"--ins-c-marketing-banner--graphic--width-on-md":"200px","--ins-c-marketing-banner--graphic--width-on-xl":"400px"}},E().createElement(f.r,null,E().createElement(g.P,null,E().createElement(u.k,{direction:{default:"column"}},E().createElement(p.B,null,E().createElement(a.D,{headingLevel:"h1",size:"2xl"},e.formatMessage(_.Z.noSystemsTitle))),E().createElement(p.B,{spacer:{default:"spacer2xl"}},E().createElement("div",{className:"insd-c-width-limiter",style:{"--insd-c-width-limiter--MaxWidth":"600px"}},E().createElement("p",{className:"ins-c-text--black-400"},e.formatMessage(_.Z.singleConsistent)))),E().createElement(p.B,null,E().createElement(M(),{app:"registration",to:"/"},E().createElement(l.zx,{isLarge:!0,component:"a",variant:"primary",style:{color:"white"},href:"".concat(N.Pu,"/registration")},e.formatMessage(_.Z.registerYourSystems)))),E().createElement(p.B,null,E().createElement(l.zx,{className:"pf-m-plain",component:"a",variant:"secondary",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},e.formatMessage(_.Z.learnmoreRHI),"   ",E().createElement(k.ZP,null))))))),E().createElement(r.NP,{isWidthLimited:!0},E().createElement(f.r,{lg:6,hasGutter:!0},E().createElement(g.P,null,E().createElement(s.Z,{style:{height:"100%"}},E().createElement(i.O,null,E().createElement(c.D,null,E().createElement(a.D,{headingLevel:"h2"},e.formatMessage(_.Z.zslblTitle)),E().createElement("p",null,e.formatMessage(_.Z.zslblBody)))),E().createElement(o.e,null,E().createElement(b.Z,null,E().createElement(y.Z,null,e.formatMessage(_.Z.zslblb1)),E().createElement(y.Z,null,e.formatMessage(_.Z.zslblb2)),E().createElement(y.Z,null,e.formatMessage(_.Z.zslblb3)),E().createElement(y.Z,null,e.formatMessage(_.Z.zslblb4)),E().createElement(y.Z,null,e.formatMessage(_.Z.zslblb5)))))),E().createElement(g.P,null,E().createElement(s.Z,{style:{height:"100%"}},E().createElement(i.O,null,E().createElement(c.D,null,E().createElement(a.D,{headingLevel:"h2"},e.formatMessage(_.Z.zsrblTitle)),E().createElement("p",null,e.formatMessage(_.Z.zsrblBody)))),E().createElement(o.e,null,E().createElement(b.Z,null,E().createElement(y.Z,null,e.formatMessage(_.Z.zsrblb1)),E().createElement(y.Z,null,e.formatMessage(_.Z.zsrblb2)),E().createElement(y.Z,null,e.formatMessage(_.Z.zsrblb3)),E().createElement(y.Z,null,e.formatMessage(_.Z.zsrblb4)),E().createElement(y.Z,null,e.formatMessage(_.Z.zsrblb5)))))))),E().createElement(v.Z,{isWidthLimited:"true",hasGraphic:!0,graphicRight:!0,dark1000:!0,fullBleed:!0,style:{"--ins-c-marketing-banner--graphic--width":"400px"}},E().createElement(u.k,{direction:{default:"column"}},E().createElement(p.B,{spacer:{default:"spacerLg"}},E().createElement(a.D,{headingLevel:"h3",size:"lg"},e.formatMessage(_.Z.dataPrivacyAndControlsTitle))),E().createElement(p.B,{spacer:{default:"spacerXl"}},E().createElement("p",{className:"insd-c-width-limiter ins-c-text--black-400",style:{"--insd-c-width-limiter--MaxWidth":"70ch"}},e.formatMessage(_.Z.dataPrivacyAndControls))),E().createElement(p.B,null,E().createElement(l.zx,{component:"a",target:"_blank",rel:"noreferrer",href:"./security/insights"},e.formatMessage(_.Z.securityRedirect))))),E().createElement(r.NP,{isWidthLimited:!0},E().createElement(u.k,{direction:{default:"column"}},E().createElement(p.B,{spacer:{default:"spacerXl"}},E().createElement(c.D,null,E().createElement(a.D,{headingLevel:"h3"},e.formatMessage(_.Z.insightsandsatellite)),E().createElement("div",{className:"insd-c-width-limiter",style:{"--insd-c-width-limiter--MaxWidth":"900px"}},E().createElement("p",null,e.formatMessage(_.Z.satellite))))),E().createElement(p.B,null,E().createElement(f.r,{hasGutter:!0},E().createElement(g.P,{md:6,lg:5,mdRowSpan:3},E().createElement("img",{src:Z,alt:"Insights Satellite"})),E().createElement(g.P,{md:6,lg:7},E().createElement("div",{className:"insd-c-width-limiter pf-u-pt-lg-on-lg",style:{"--insd-c-width-limiter--MaxWidth":"600px"}},E().createElement(m.aV,null,E().createElement(d.H,null,e.formatMessage(_.Z.rhm1)),E().createElement(d.H,null,e.formatMessage(_.Z.rhm2)),E().createElement(d.H,null,e.formatMessage(_.Z.rhm3))))),E().createElement(g.P,{md:6,lg:7,className:"pf-u-pl-lg"},E().createElement(u.k,null,E().createElement(p.B,null,E().createElement(l.zx,{className:"pf-m-secondary",component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/satellite"},e.formatMessage(_.Z.learnmore))),E().createElement(p.B,null,E().createElement(l.zx,{className:"pf-m-secondary",component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/contact"},e.formatMessage(_.Z.contactsales))))))))))}},98756:(e,t,n)=>{"use strict";n.d(t,{PF:()=>u,Rm:()=>d,ib:()=>m,kC:()=>o});var a=n(4942),l=n(71002),r=n(1284);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=["SAP","All workloads"],o=function(e){return e[0].toUpperCase()+e.substring(1)},m=function(e,t,n){var a,r,s=null==e?void 0:e[t];"object"!==(0,l.Z)(e)&&(r=new Error("`".concat(n,"` only accepts object as `").concat(t,"` prop.")));var i=Object.keys(s);i.some((function(e){return!c.includes(e)}))&&(r=new Error("`".concat(n,"` accepts either SAP or All workloads as `").concat(t,".` prop."))),(null===(a=i.find((function(e){return c.includes(e)})))||void 0===a?void 0:a.length)>1&&(r=new Error("`".concat(n,"` accepts only one of SAP or All workloads as `").concat(t,".` prop.")));var o=Object.values(s).findIndex((function(e){var t=e.isSelected;return void 0!==t&&"boolean"!=typeof t}));return-1!==o&&(r=new Error("`".concat(n,"` requires isSelected as boolean prop in `").concat(t,".").concat(null==i?void 0:i[o],"`."))),r},d=function(e,t){var n,a,l;return(0,r.generateFilter)({system_profile:i(i(i(i({},(null==e||null===(n=e.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==e||null===(a=e["Ansible Automation Platform"])||void 0===a?void 0:a.isSelected)&&{ansible:"not_nil"}),(null==e||null===(l=e["Microsoft SQL"])||void 0===l?void 0:l.isSelected)&&{mssql:"not_nil"}),(null==t?void 0:t.length)>0&&{sap_sids:t})},void 0,{arrayEnhancer:"contains"})},u=function(e,t,n){return void 0===t||!Object.values(t).map((function(e){return e.isSelected})).reduce((function(e,t){return e||t}),!1)&&0===e.length&&0===Object.entries(n).length}},11452:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},28992:()=>{},90776:()=>{},92084:()=>{},38299:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/DashboardRoute.3ca8cd723e2a896529a7a08f6c8c6243.js.map