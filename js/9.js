(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1013:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),o=t(634),i=t(268),l=t(727),c=t(981),s=t.n(c),u=(t(687),function(){return a.a.createElement(s.a,{className:"ins-c-dashboard__running-icon"})}),d=t(734),f=[{status:"Running",name:"Name",timestamp:"Timestamp"},{status:"Running",name:"Name",timestamp:"Timestamp"},{status:"Running",name:"Name",timestamp:"Timestamp"},{status:"Finished",name:"Name",timestamp:"Timestamp"}];n.default=function(){var e=f.map((function(e,n){return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement("div",{className:"ins-c-remediations-container"},a.a.createElement("div",{className:"ins-c-remediation-status",span:4},a.a.createElement(a.a.Fragment,null,"Running"===e.status?a.a.createElement(u,null):a.a.createElement(l.a,null),a.a.createElement("p",null,e.status))),a.a.createElement("div",{span:8},a.a.createElement(i.Button,{component:"a",variant:"link",isInline:!0},e.name),a.a.createElement(d.b,{timestamp:e.timestamp}))))}));return a.a.createElement(o.a,{appName:"Remediations"},a.a.createElement(o.e,null,a.a.createElement(o.b,{downloadReport:"true"}),a.a.createElement(o.f,{title:"Remediations"})),a.a.createElement(o.c,null,e))}},618:function(e,n,t){(n=t(7)(!1)).push([e.i,".ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.ins-c-dashboard__card--body{display:flex;flex-direction:column}.ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}\n",""]),e.exports=n},619:function(e,n,t){(n=t(7)(!1)).push([e.i,".pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-right:0}.pf-c-button__icon{color:var(--pf-global--Color--100)}\n",""]),e.exports=n},620:function(e,n,t){(n=t(7)(!1)).push([e.i,".pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm)}.pf-c-button__icon{color:var(--pf-global--Color--100)}.ins-c-dashboard__info-inline{display:flex;flex-direction:row;align-items:center}.ins-c-dashboard__info-inline svg{color:var(--pf-global--active-color--300)}.ins-c-dashboard__info-inline p{font-size:var(--pf-global--FontSize--sm);margin-left:var(--pf-global--spacer--sm);color:var(--pf-global--primary-color--100)}\n",""]),e.exports=n},634:function(e,n,t){"use strict";var r=t(269),a=t.n(r),o=t(271),i=t.n(o),l=t(2),c=t.n(l),s=t(1),u=t.n(s),d=t(268),f=t(461),p=t(640),m=t(462),v=t(639),h=t(653),b=t(641),g=t(464),y=t(465),_=t(652),O=t(246),E=(t(635),t(637)),w=t.n(E),j=(t(636),function(){return c.a.createElement(d.Button,{variant:"link",icon:c.a.createElement(w.a,null)},"Report")}),M=t(463),P=t.n(M),N=(t(638),function(e){var n=e.message;return c.a.createElement("div",{className:"ins-c-dashboard__info-inline"},c.a.createElement(P.a,null),c.a.createElement("p",null,n))});N.propTypes={message:u.a.string};var z=N;t.d(n,"a",(function(){return x})),t.d(n,"e",(function(){return C})),t.d(n,"b",(function(){return k})),t.d(n,"f",(function(){return I})),t.d(n,"c",(function(){return T})),t.d(n,"d",(function(){return S}));var x=function(e){var n=e.appName,t=e.children,r=i()(e,["appName","children"]);return c.a.createElement(f.Card,a()({className:"ins-c-dashboard__card ins-c-dashboard__card--".concat(n)},r),t)};x.propTypes={appName:u.a.string,children:u.a.any};var C=function(e){var n=e.children,t=i()(e,["children"]);return c.a.createElement(v.CardHead,t,n)};C.propTypes={children:u.a.any};var k=function(e){var n=e.children,t=e.downloadReport,r=e.infoInlineMessage,a=i()(e,["children","downloadReport","infoInlineMessage"]);return c.a.createElement(p.CardActions,a,r&&c.a.createElement(z,{message:r}),t&&c.a.createElement(j,null),n)};k.propTypes={children:u.a.any,downloadReport:u.a.any,infoInlineMessage:u.a.string};var I=function(e){var n=e.title,t=e.subtitle,r=e.onDownload,o=e.children,l=i()(e,["title","subtitle","onDownload","children"]);return c.a.createElement(h.CardHeader,a()({className:"ins-c-dashboard__card--header"},l),c.a.createElement(g.Level,null,n&&c.a.createElement(y.LevelItem,null,c.a.createElement(_.Title,{headingLevel:"h2",size:"lg"}," ",n," ")),t&&c.a.createElement(y.LevelItem,null,c.a.createElement("p",{className:"ins-c-dashboard__card--header-subtitle"},t)),c.a.createElement(y.LevelItem,null,o,r&&c.a.createElement(d.Button,{variant:"link",icon:c.a.createElement(O.b,null),onClick:r},"Report"))))};I.propTypes={title:u.a.string,subtitle:u.a.string,children:u.a.any,onDownload:u.a.func};var T=function(e){var n=e.children,t=e.isHorizontalLayout,r=i()(e,["children","isHorizontalLayout"]);return c.a.createElement(m.CardBody,a()({className:"ins-c-dashboard__card--body"+(t?" ins-m-horizontal":"")},r),n)};T.propTypes={isHorizontalLayout:u.a.any,children:u.a.any};var S=function(e){var n=e.children,t=i()(e,["children"]);return c.a.createElement(b.CardFooter,a()({className:"ins-c-dashboard__card--footer"},t),n)};S.propTypes={children:u.a.any}},635:function(e,n,t){var r=t(9),a=t(618);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o),l=a.locals?a.locals:{};a.locals||e.hot.accept(618,(function(){var n=t(618);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()})),e.exports=l},636:function(e,n,t){var r=t(9),a=t(619);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o),l=a.locals?a.locals:{};a.locals||e.hot.accept(619,(function(){var n=t(619);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()})),e.exports=l},637:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.DownloadIconConfig=void 0;var r,a=(r=t(47))&&r.__esModule?r:{default:r};var o={name:"DownloadIcon",height:512,width:512,svgPath:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",yOffset:"",xOffset:"",transform:""};n.DownloadIconConfig=o;var i=(0,a.default)(o);n.default=i},638:function(e,n,t){var r=t(9),a=t(620);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o),l=a.locals?a.locals:{};a.locals||e.hot.accept(620,(function(){var n=t(620);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()})),e.exports=l},639:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CardHead=void 0;var r=c(t(1)),a=function(e){if(e&&e.__esModule)return e;var n=l();if(n&&n.has(e))return n.get(e);var t={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(t,a,o):t[a]=e[a]}}t.default=e,n&&n.set(e,t);return t}(t(2)),o=t(3),i=c(t(40));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=function(e){var n=e.children,t=void 0===n?null:n,r=e.className,l=void 0===r?"":r,c=u(e,["children","className"]);return a.createElement("div",s({className:(0,o.css)(i.default.cardHead,l)},c),t)};n.CardHead=d,d.propTypes={children:r.default.node,className:r.default.string}},640:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CardActions=void 0;var r=c(t(1)),a=function(e){if(e&&e.__esModule)return e;var n=l();if(n&&n.has(e))return n.get(e);var t={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(t,a,o):t[a]=e[a]}}t.default=e,n&&n.set(e,t);return t}(t(2)),o=t(3),i=c(t(40));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=function(e){var n=e.children,t=void 0===n?null:n,r=e.className,l=void 0===r?"":r,c=u(e,["children","className"]);return a.createElement("div",s({className:(0,o.css)(i.default.cardActions,l)},c),t)};n.CardActions=d,d.propTypes={children:r.default.node,className:r.default.string}},641:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CardFooter=void 0;var r=c(t(1)),a=function(e){if(e&&e.__esModule)return e;var n=l();if(n&&n.has(e))return n.get(e);var t={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(t,a,o):t[a]=e[a]}}t.default=e,n&&n.set(e,t);return t}(t(2)),o=c(t(40)),i=t(3);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=function(e){var n=e.children,t=void 0===n?null:n,r=e.className,l=void 0===r?"":r,c=e.component,d=void 0===c?"div":c,f=u(e,["children","className","component"]),p=d;return a.createElement(p,s({className:(0,i.css)(o.default.cardFooter,l)},f),t)};n.CardFooter=d,d.propTypes={children:r.default.node,className:r.default.string,component:r.default.node}},650:function(e,n,t){(n=t(7)(!1)).push([e.i,".ins-c-dashboard__finished-icon{color:var(--pf-global--success-color--200)}.ins-c-dashboard__running-icon{color:var(--pf-global--primary-color--100)}\n",""]),e.exports=n},687:function(e,n,t){var r=t(9),a=t(650);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o),l=a.locals?a.locals:{};a.locals||e.hot.accept(650,(function(){var n=t(650);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()})),e.exports=l},727:function(e,n,t){"use strict";var r=t(2),a=t.n(r),o=t(466),i=t.n(o);t(687);n.a=function(){return a.a.createElement(i.a,{className:"ins-c-dashboard__finished-icon"})}},981:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.SpinnerIconConfig=void 0;var r,a=(r=t(47))&&r.__esModule?r:{default:r};var o={name:"SpinnerIcon",height:512,width:512,svgPath:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z",yOffset:"",xOffset:"",transform:""};n.SpinnerIconConfig=o;var i=(0,a.default)(o);n.default=i}}]);
//# sourceMappingURL=9.js.map