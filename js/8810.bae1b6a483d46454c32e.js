(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[8810],{10358:(a,e,n)=>{"use strict";n.d(e,{t:()=>g});var t=n(22122),r=n(28481),d=n(81253),i=n(32203),o=n(56186),l=n(70401),c=n(70),s=n(60485),p=n(42744),h=n(93264),u=n.n(h),f=n(45697),b=n.n(f),g=function(a){var e=a.className,n=a.appName,f=a.title,b=a.header,g=a.body,m=a.hasDivider,_=a.isExpanded,v=void 0===_||_,y=a.isExpandedCallback,E=(0,d.Z)(a,["className","appName","title","header","body","hasDivider","isExpanded","isExpandedCallback"]),x=(0,h.useState)(v),Z=(0,r.Z)(x,2),N=Z[0],w=Z[1];return u().createElement(i.Z,(0,t.Z)({className:"ins-c-dashboard__card ins-c-dashboard__card--".concat(n," ").concat(e),id:"ins-c-dashboard__card--".concat(n),isExpanded:N},E),m&&u().createElement(o.i,{inset:{md:"insetLg"}}),u().createElement(l.O,{onExpand:function(){w(!N),y&&y(!N)},toggleButtonProps:{id:"ins-c-dashboard__card-title--".concat(n,"-toggle-button"),"aria-label":"Details","aria-labelledby":"ins-c-dashboard__card-title--".concat(n," toggle-button"),"aria-expanded":N}},f&&u().createElement(c.l,null,u().createElement(s.D,{headingLevel:"h2",size:"lg"},f)),b),u().createElement(p.K,null,g))};g.propTypes={appName:b().string,className:b().string,title:b().any,header:b().any,body:b().any,hasDivider:b().any,isExpanded:b().bool,isExpandedCallback:b().func,footer:b().any}},66794:(a,e,n)=>{"use strict";n.d(e,{wh:()=>v,KZ:()=>y,jA:()=>x,ME:()=>E});var t=n(22122),r=n(81253),d=(n(22214),n(32203)),i=n(70401),o=n(21005),l=n(70),c=n(60485),s=n(47173),p=n(62394),h=(n(49734),n(53983)),u=(n(27086),n(93264)),f=n.n(u);const b=function(){return f().createElement(s.zx,{className:"ins-c-download-report__button",variant:"link",icon:f().createElement(h.ZP,null)},"Report")};var g=n(90098),m=n(45697),_=n.n(m),v=function(a){var e=a.appName,n=a.children,i=(0,r.Z)(a,["appName","children"]);return f().createElement(d.Z,(0,t.Z)({className:"ins-c-dashboard__card ins-c-dashboard__card--".concat(e)},i),n)};v.propTypes={appName:_().string,children:_().any},_().any;var y=function(a){var e=a.children,n=a.downloadReport,t=a.iconInlineMessage,d=a.iconInlineState,i=(0,r.Z)(a,["children","downloadReport","iconInlineMessage","iconInlineState"]);return f().createElement(o.T,i,t&&f().createElement(g.Z,{message:t,state:d}),n&&f().createElement(b,null),e)};y.propTypes={children:_().any,downloadReport:_().any,iconInlineMessage:_().string,iconInlineState:_().string};var E=function(a){var e=a.title,n=a.onDownload,d=a.subtitle,p=a.children,u=(0,r.Z)(a,["title","onDownload","subtitle","children"]);return f().createElement(i.O,(0,t.Z)({className:"ins-c-dashboard__card--header"},u),f().createElement(l.l,null,f().createElement(c.D,{headingLevel:"h4",size:"lg"},e),d&&f().createElement("div",null,d)),f().createElement(o.T,null,p,n&&f().createElement(s.zx,{variant:"link",icon:f().createElement(h.ZP,null),onClick:n},"Report")))};E.propTypes={title:_().string,titleClassName:_().string,subtitle:_().any,children:_().any,onDownload:_().func};var x=function(a){var e=a.children,n=a.isHorizontalLayout,d=(0,r.Z)(a,["children","isHorizontalLayout"]);return f().createElement(p.e,(0,t.Z)({className:"ins-c-dashboard__card--body ".concat(n?" ins-m-horizontal":"")},d),e)};x.propTypes={isHorizontalLayout:_().any,children:_().any},_().any},59730:(a,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var t=n(23645),r=n.n(t)()((function(a){return a[1]}));r.push([a.id,".dashboard .ins-c-download-report__button.pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-right:0}.dashboard .pf-c-button__icon{color:var(--pf-global--Color--100)}\n",""]);const d=r},76550:(a,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var t=n(23645),r=n.n(t)()((function(a){return a[1]}));r.push([a.id,".dashboard .ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.dashboard .ins-c-dashboard__card--header.ins-m-padding-small{padding-bottom:6px}.dashboard .ins-c-dashboard__card--body{display:flex;flex-direction:column}.dashboard .ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.dashboard .ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.dashboard .ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.dashboard .ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}.dashboard .pf-c-card.ins-m-short-header .ins-c-dashboard__card--header{--pf-c-card__title--not--last-child--PaddingBottom: 6px}.dashboard .pf-c-card__body .pf-c-card{--pf-c-card--child--PaddingRight: calc(var(--pf-c-card--child--PaddingRight) * -1);--pf-c-card--child--PaddingLeft: calc(var(--pf-c-card--child--PaddingLeft) * -1);--pf-c-card--BoxShadow: none}\n",""]);const d=r},27086:(a,e,n)=>{"use strict";var t=n(93379),r=n.n(t),d=n(59730),i=r()(d.default,{insert:"head",singleton:!1});if(!d.default.locals||a.hot.invalidate){var o=d.default.locals;a.hot.accept(59730,(e=>{d=n(59730),function(a,e,n){if(!a&&e||a&&!e)return!1;var t;for(t in a)if(a[t]!==e[t])return!1;for(t in e)if(!a[t])return!1;return!0}(o,d.default.locals)?(o=d.default.locals,i(d.default)):a.hot.invalidate()}))}a.hot.dispose((function(){i()})),d.default.locals},22214:(a,e,n)=>{"use strict";var t=n(93379),r=n.n(t),d=n(76550),i=r()(d.default,{insert:"head",singleton:!1});if(!d.default.locals||a.hot.invalidate){var o=d.default.locals;a.hot.accept(76550,(e=>{d=n(76550),function(a,e,n){if(!a&&e||a&&!e)return!1;var t;for(t in a)if(a[t]!==e[t])return!1;for(t in e)if(!a[t])return!1;return!0}(o,d.default.locals)?(o=d.default.locals,i(d.default)):a.hot.invalidate()}))}a.hot.dispose((function(){i()})),d.default.locals}}]);