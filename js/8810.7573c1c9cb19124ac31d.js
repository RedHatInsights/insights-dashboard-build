(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[8810],{10358:(a,e,n)=>{"use strict";n.d(e,{t:()=>g});var d=n(22122),r=n(28481),t=n(81253),o=n(32203),s=n(56186),i=n(70401),c=n(70),l=n(60485),p=n(42744),h=n(93264),f=n.n(h),b=n(45697),u=n.n(b),g=function(a){var e=a.className,n=a.appName,b=a.title,u=a.header,g=a.body,m=a.hasDivider,A=a.isExpanded,_=void 0===A||A,C=a.isExpandedCallback,v=(0,t.Z)(a,["className","appName","title","header","body","hasDivider","isExpanded","isExpandedCallback"]),y=(0,h.useState)(_),w=(0,r.Z)(y,2),E=w[0],D=w[1];return f().createElement(o.Z,(0,d.Z)({className:"ins-c-dashboard__card ins-c-dashboard__card--".concat(n," ").concat(e),id:"ins-c-dashboard__card--".concat(n),isExpanded:E},v),m&&f().createElement(s.i,{inset:{md:"insetLg"}}),f().createElement(i.O,{onExpand:function(){D(!E),C&&C(!E)},toggleButtonProps:{id:"ins-c-dashboard__card-title--".concat(n,"-toggle-button"),"aria-label":"Details","aria-labelledby":"ins-c-dashboard__card-title--".concat(n," toggle-button"),"aria-expanded":E}},b&&f().createElement(c.l,null,f().createElement(l.D,{headingLevel:"h2",size:"lg"},b)),u),f().createElement(p.K,null,g))};g.propTypes={appName:u().string,className:u().string,title:u().any,header:u().any,body:u().any,hasDivider:u().any,isExpanded:u().bool,isExpandedCallback:u().func,footer:u().any}},66794:(a,e,n)=>{"use strict";n.d(e,{wh:()=>_,KZ:()=>C,jA:()=>y,ME:()=>v});var d=n(22122),r=n(81253),t=(n(22214),n(32203)),o=n(70401),s=n(21005),i=n(70),c=n(60485),l=n(47173),p=n(62394),h=(n(49734),n(53983)),f=(n(27086),n(93264)),b=n.n(f);const u=function(){return b().createElement(l.zx,{className:"ins-c-download-report__button",variant:"link",icon:b().createElement(h.ZP,null)},"Report")};var g=n(90098),m=n(45697),A=n.n(m),_=function(a){var e=a.appName,n=a.children,o=(0,r.Z)(a,["appName","children"]);return b().createElement(t.Z,(0,d.Z)({className:"ins-c-dashboard__card ins-c-dashboard__card--".concat(e)},o),n)};_.propTypes={appName:A().string,children:A().any},A().any;var C=function(a){var e=a.children,n=a.downloadReport,d=a.iconInlineMessage,t=a.iconInlineState,o=(0,r.Z)(a,["children","downloadReport","iconInlineMessage","iconInlineState"]);return b().createElement(s.T,o,d&&b().createElement(g.Z,{message:d,state:t}),n&&b().createElement(u,null),e)};C.propTypes={children:A().any,downloadReport:A().any,iconInlineMessage:A().string,iconInlineState:A().string};var v=function(a){var e=a.title,n=a.onDownload,t=a.subtitle,p=a.children,f=(0,r.Z)(a,["title","onDownload","subtitle","children"]);return b().createElement(o.O,(0,d.Z)({className:"ins-c-dashboard__card--header"},f),b().createElement(i.l,null,b().createElement(c.D,{headingLevel:"h4",size:"lg"},e),t&&b().createElement("div",null,t)),b().createElement(s.T,null,p,n&&b().createElement(l.zx,{variant:"link",icon:b().createElement(h.ZP,null),onClick:n},"Report")))};v.propTypes={title:A().string,titleClassName:A().string,subtitle:A().any,children:A().any,onDownload:A().func};var y=function(a){var e=a.children,n=a.isHorizontalLayout,t=(0,r.Z)(a,["children","isHorizontalLayout"]);return b().createElement(p.e,(0,d.Z)({className:"ins-c-dashboard__card--body ".concat(n?" ins-m-horizontal":"")},t),e)};y.propTypes={isHorizontalLayout:A().any,children:A().any},A().any},59730:(a,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var d=n(94015),r=n.n(d),t=n(23645),o=n.n(t)()(r());o.push([a.id,".dashboard .ins-c-download-report__button.pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-right:0}.dashboard .pf-c-button__icon{color:var(--pf-global--Color--100)}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/DownloadReport/DownloadReport.scss"],names:[],mappings:"AAAA,gEACqD,wCAAwC,CAAC,eAAe,CAD7G,8BACiI,kCAAkC",sourcesContent:[".dashboard{\n.ins-c-download-report__button.pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-right:0}.pf-c-button__icon{color:var(--pf-global--Color--100)}\n\n}"],sourceRoot:""}]);const s=o},76550:(a,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var d=n(94015),r=n.n(d),t=n(23645),o=n.n(t)()(r());o.push([a.id,".dashboard .ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.dashboard .ins-c-dashboard__card--header.ins-m-padding-small{padding-bottom:6px}.dashboard .ins-c-dashboard__card--body{display:flex;flex-direction:column}.dashboard .ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.dashboard .ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.dashboard .ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.dashboard .ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}.dashboard .pf-c-card.ins-m-short-header .ins-c-dashboard__card--header{--pf-c-card__title--not--last-child--PaddingBottom: 6px}.dashboard .pf-c-card__body .pf-c-card{--pf-c-card--child--PaddingRight: calc(var(--pf-c-card--child--PaddingRight) * -1);--pf-c-card--child--PaddingLeft: calc(var(--pf-c-card--child--PaddingLeft) * -1);--pf-c-card--BoxShadow: none}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/Template/TemplateCard.scss"],names:[],mappings:"AAAA,mDACwC,wCAAwC,CADhF,8DACoI,kBAAkB,CADtJ,wCACoL,YAAY,CAAC,qBAAqB,CADtN,yDACqQ,kBAAkB,CAAC,wCAAwC,CAAC,oBAAoB,CADrV,+FAC0a,yCAAyC,CADnd,sEAC+gB,wCAAwC,CADvjB,sEACmnB,uCAAuC,CAD1pB,wEACwtB,uDAAmD,CAD3wB,uCAC4yB,kFAAiC,CAAkD,gFAAgC,CAAiD,4BAAuB",sourcesContent:[".dashboard{\n.ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.ins-c-dashboard__card--header.ins-m-padding-small{padding-bottom:6px}.ins-c-dashboard__card--body{display:flex;flex-direction:column}.ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}.pf-c-card.ins-m-short-header .ins-c-dashboard__card--header{--pf-c-card__title--not--last-child--PaddingBottom: 6px}.pf-c-card__body .pf-c-card{--pf-c-card--child--PaddingRight: calc(var(--pf-c-card--child--PaddingRight) * -1);--pf-c-card--child--PaddingLeft: calc(var(--pf-c-card--child--PaddingLeft) * -1);--pf-c-card--BoxShadow: none}\n\n}"],sourceRoot:""}]);const s=o},27086:(a,e,n)=>{"use strict";var d=n(93379),r=n.n(d),t=n(59730),o=r()(t.default,{insert:"head",singleton:!1});if(!t.default.locals||a.hot.invalidate){var s=t.default.locals;a.hot.accept(59730,(e=>{t=n(59730),function(a,e,n){if(!a&&e||a&&!e)return!1;var d;for(d in a)if(a[d]!==e[d])return!1;for(d in e)if(!a[d])return!1;return!0}(s,t.default.locals)?(s=t.default.locals,o(t.default)):a.hot.invalidate()}))}a.hot.dispose((function(){o()})),t.default.locals},22214:(a,e,n)=>{"use strict";var d=n(93379),r=n.n(d),t=n(76550),o=r()(t.default,{insert:"head",singleton:!1});if(!t.default.locals||a.hot.invalidate){var s=t.default.locals;a.hot.accept(76550,(e=>{t=n(76550),function(a,e,n){if(!a&&e||a&&!e)return!1;var d;for(d in a)if(a[d]!==e[d])return!1;for(d in e)if(!a[d])return!1;return!0}(s,t.default.locals)?(s=t.default.locals,o(t.default)):a.hot.invalidate()}))}a.hot.dispose((function(){o()})),t.default.locals}}]);
//# sourceMappingURL=../sourcemaps/8810.30d06ee68e9aae200a69.js.map