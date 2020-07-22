(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4],{1175:function(t,e,a){"use strict";a.r(e);var n=a(111),r=a.n(n),i=a(754),o={critical:4,important:3,moderate:2,low:1},s=a(0),l=a.n(s),c=a(759),d=a(125),u=a(755),f=a(784),p=a(822),m=a(13),h=a.n(m),g=a(900),v=a(5),b=a(110),y=a(748),_=a(377),x=function(t){var e=t.recStats,a=t.recStatsStatus,n=t.advisorFetchStatsRecs,i=t.advisorFetchStatsSystems,m=t.advisorIncidents,h=t.advisorIncidentsStatus,b=t.advisorFetchIncidents,x=t.systemsStats,S=t.systemsStatsStatus,E=Object(_.a)(),w=Object(s.useState)([]),z=r()(w,2),k=z[0],T=z[1];Object(s.useEffect)((function(){n(),i(),b()}),[b,n,i]),Object(s.useEffect)((function(){"fulfilled"===a&&T([{name:E.formatMessage(y.a.critical),y:e.total_risk[o.critical]},{name:E.formatMessage(y.a.important),y:e.total_risk[o.important]},{name:E.formatMessage(y.a.moderate),y:e.total_risk[o.moderate]},{name:E.formatMessage(y.a.low),y:e.total_risk[o.low]}])}),[E,e,a]);var F=k.map((function(t){var e=t.name.toLowerCase();return"".concat(v.G,"/advisor/recommendations?total_risk=").concat(o[e],"&reports_shown=true&impacting=true&offset=0&limit=10")}));return l.a.createElement(c.a,{appName:"Advisor","data-ouia-safe":!0},l.a.createElement(c.c,{title:"Advisor recommendations"}),"rejected"===h?l.a.createElement(c.b,null,l.a.createElement(u.a,{appName:"Advisor"})):l.a.createElement(c.b,null,"fulfilled"!==h?l.a.createElement(f.a,null):l.a.createElement(p.a,{data:m.meta.count,dataSize:"md",layout:"horizontal",linkDescription:E.formatMessage(y.a.incidentsDetected,{incidents:m.meta.count}),critical:m.meta.count>50?"true":"false",link:"".concat(v.G).concat("/advisor/recommendations?reports_shown=undefined&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true")}),"fulfilled"!==a?l.a.createElement(f.a,null):l.a.createElement(g.a,{ariaDesc:E.formatMessage(y.a.advisorChartDescription),ariaTitle:"Advisor recommendations chart",height:40,width:600,maxWidth:600,legendHeight:36,legendWidth:600,data:k,legendClick:F}),"fulfilled"!==S?l.a.createElement(f.a,null):l.a.createElement(d.Button,{component:"a",href:"".concat(v.G).concat("/advisor/recommendations?reports_shown=undefined&impacting=true&offset=0&limit=10&sort=-publish_date"),variant:"link",isInline:!0},E.formatMessage(y.a.recsImpactingSystems,{totalRecs:e.total,systems:x.total}))))};x.propTypes={advisorFetchStatsRecs:h.a.func,recStats:h.a.object,recStatsStatus:h.a.string,advisorFetchStatsSystems:h.a.func,systemsStats:h.a.object,systemsStatsStatus:h.a.string,advisorIncidents:h.a.object,advisorIncidentsStatus:h.a.string,advisorFetchIncidents:h.a.func};e.default=Object(b.connect)((function(t){var e=t.DashboardStore;return{recStats:e.advisorStatsRecs,recStatsStatus:e.advisorStatsRecsStatus,systemsStats:e.advisorStatsSystems,systemsStatsStatus:e.advisorStatsSystemsStatus,advisorIncidents:e.advisorIncidents,advisorIncidentsStatus:e.advisorIncidentsStatus}}),(function(t){return{advisorFetchStatsRecs:function(e){return t(i.b(e))},advisorFetchStatsSystems:function(e){return t(i.c(e))},advisorFetchIncidents:function(e){return t(i.a(e))}}}))(x)},741:function(t,e,a){var n=a(10),r=a(744);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||t.hot.invalidate){var s=r.locals;t.hot.accept(744,(function(){"string"==typeof(r=(r=a(744)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(s,r.locals)?(s=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},742:function(t,e,a){(e=a(7)(!1)).push([t.i,".ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.ins-c-dashboard__card--header.ins-m-padding-small{padding-bottom:6px}.ins-c-dashboard__card--body{display:flex;flex-direction:column}.ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}\n",""]),t.exports=e},743:function(t,e,a){(e=a(7)(!1)).push([t.i,".ins-c-download-report__button.pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-right:0}.pf-c-button__icon{color:var(--pf-global--Color--100)}\n",""]),t.exports=e},744:function(t,e,a){(e=a(7)(!1)).push([t.i,".ins-c-dashboard__icon-finished{fill:var(--pf-global--success-color--200)}.ins-c-dashboard__icon-running{fill:var(--pf-global--primary-color--100)}.ins-c-dashboard__icon-warning{fill:var(--pf-global--warning-color--100)}.ins-c-dashboard__icon-critical{fill:var(--pf-global--danger-color--100)}.ins-c-dashboard__icon-info{fill:var(--pf-global--info-color--100)}\n",""]),t.exports=e},745:function(t,e,a){(e=a(7)(!1)).push([t.i,".pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm)}.pf-c-button__icon{color:var(--pf-global--Color--100)}.ins-c-dashboard__info-inline{display:flex;flex-direction:row;align-items:center}.ins-c-dashboard__info-inline p{font-size:var(--pf-global--FontSize--sm);margin-left:var(--pf-global--spacer--sm);color:var(--pf-global--primary-color--100)}.ins-c-dashboard__info-inline.ins-m-padding-top{padding-top:var(--pf-global--spacer--xs)}\n",""]),t.exports=e},746:function(t,e,a){(e=a(7)(!1)).push([t.i,".ins-c-dashboard__error-state{margin-left:auto;margin-right:auto}.ins-c-dashboard__error-state--isSmall{padding:0}\n",""]),t.exports=e},750:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(691),o=a.n(i);a(741);e.a=function(){return r.a.createElement(o.a,{className:"ins-c-dashboard__icon-info"})}},751:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(439),o=a.n(i);a(741);e.a=function(){return r.a.createElement(o.a,{className:"ins-c-dashboard__icon-critical"})}},754:function(t,e,a){"use strict";a.d(e,"d",(function(){return d})),a.d(e,"j",(function(){return u})),a.d(e,"b",(function(){return f})),a.d(e,"c",(function(){return p})),a.d(e,"a",(function(){return m})),a.d(e,"n",(function(){return h})),a.d(e,"m",(function(){return g})),a.d(e,"k",(function(){return v})),a.d(e,"l",(function(){return b})),a.d(e,"o",(function(){return y})),a.d(e,"p",(function(){return _})),a.d(e,"f",(function(){return x})),a.d(e,"g",(function(){return S})),a.d(e,"e",(function(){return E})),a.d(e,"h",(function(){return w})),a.d(e,"i",(function(){return z}));var n=a(95),r=a.n(n),i=a(126),o=a.n(i),s=a(5),l=a(357),c=function(){var t=o()(r.a.mark((function t(e,a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.insights.chrome.auth.getUser();case 2:return t.next=4,l.a.get(e,a,n);case 4:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),d=function(t){return{type:s.g,payload:c(s.h,{},t)}},u=function(t){return{type:s.H,payload:c(s.I,{},t)}},f=function(t){return{type:s.c,payload:c(s.d,{},t)}},p=function(t){return{type:s.e,payload:c(s.f,{},t)}},m=function(t){return{type:s.a,payload:c(s.b,{},t)}},h=function(t){return{type:s.x,payload:c(s.y,{},t)}},g=function(t){return{type:s.v,payload:c(s.w,{},t)}},v=function(t){return{type:s.q,payload:c(s.r,{},t)}},b=function(t){return{type:s.s,payload:c(s.t,{},t)}},y=function(t,e){return{type:s.D,payload:Promise.all([c("".concat(s.F).concat(t),{},e),c("".concat(s.C).concat(t),{},e)])}},_=function(t,e){return{type:s.E,payload:Promise.all([c("".concat(s.F).concat(t),{},e),c("".concat(s.C).concat(t),{},e)])}},x=function(t){return{type:s.i,payload:c(s.j,{},t)}},S=function(t){return{type:s.m,payload:c(s.n,{},t)}},E=function(t){return{type:s.k,payload:c(s.l,{},t)}},w=function(t){return{type:s.o,payload:c(s.p,{},t)}},z=function(t){return{type:s.z,payload:c(s.A,{},t)}}},755:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(13),o=a.n(i),s=a(354),l=a(688),c=a(377),d=a(748),u=(a(763),function(t){var e=t.appName,a=t.isSmall,n=Object(c.a)();return r.a.createElement(l.EmptyState,{variant:l.EmptyStateVariant.full,className:"ins-c-dashboard__error-state ".concat(a&&"ins-c-dashboard__error-state--isSmall")},a?r.a.createElement(l.EmptyStateBody,null,n.formatMessage(d.a.errorStateTitle,{appName:e})):r.a.createElement(s.Title,{headingLevel:"h2",size:"md"}," ",n.formatMessage(d.a.errorStateTitle,{appName:e})," "))});u.propTypes={appName:o.a.string.isRequired,isSmall:o.a.bool},e.a=u},758:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),r=a.n(n),i=a(13),o=a.n(i),s=a(750),l=a(438),c=a.n(l),d=(a(741),function(){return r.a.createElement(c.a,{className:"ins-c-dashboard__icon-warning"})}),u=a(751),f=(a(762),{warning:d,info:s.a,critical:u.a}),p=function(t){var e=t.message,a=t.state,n=t.systemInventory,i=f[a]||r.a.Fragment;return r.a.createElement("div",{className:"ins-c-dashboard__info-inline ".concat(n?" ins-m-padding-top":"")},r.a.createElement(i,{"aria-hidden":"true"}),r.a.createElement("p",null,e))};p.propTypes={message:o.a.string,state:o.a.string,systemInventory:o.a.boolean};e.b=p},759:function(t,e,a){"use strict";a.d(e,"a",(function(){return y})),a.d(e,"c",(function(){return _})),a.d(e,"b",(function(){return x}));var n=a(355),r=a.n(n),i=a(356),o=a.n(i),s=(a(760),a(125)),l=a(689),c=(a(693),a(695)),d=(a(696),a(692)),u=a(736),f=a(0),p=a.n(f),m=(a(690),a(761),a(758),a(440)),h=a(694),g=a(354),v=a(13),b=a.n(v),y=function(t){var e=t.appName,a=t.children,n=o()(t,["appName","children"]);return p.a.createElement(l.Card,r()({className:"ins-c-dashboard__card ins-c-dashboard__card--".concat(e)},n),a)};y.propTypes={appName:b.a.string,children:b.a.any};b.a.any;b.a.any,b.a.any,b.a.string,b.a.string;var _=function(t){var e=t.title,a=t.subtitle,n=t.onDownload,i=t.children,l=o()(t,["title","subtitle","onDownload","children"]);return p.a.createElement(d.CardHeader,r()({className:"ins-c-dashboard__card--header ".concat(a?" ins-m-padding-small ":"")},l),p.a.createElement(m.Level,null,e&&p.a.createElement(h.LevelItem,null,p.a.createElement(g.Title,{headingLevel:"h2",size:"lg"}," ",e," ")),a&&p.a.createElement(h.LevelItem,null,p.a.createElement("h2",{className:"ins-c-dashboard__card--header-subtitle"},a)),p.a.createElement(h.LevelItem,null,i,n&&p.a.createElement(s.Button,{variant:"link",icon:p.a.createElement(u.a,null),onClick:n},"Report"))))};_.propTypes={title:b.a.string,subtitle:b.a.string,children:b.a.any,onDownload:b.a.func};var x=function(t){var e=t.children,a=t.isHorizontalLayout,n=o()(t,["children","isHorizontalLayout"]);return p.a.createElement(c.CardBody,r()({className:"ins-c-dashboard__card--body ".concat(a?" ins-m-horizontal":"")},n),e)};x.propTypes={isHorizontalLayout:b.a.any,children:b.a.any};b.a.any},760:function(t,e,a){var n=a(10),r=a(742);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||t.hot.invalidate){var s=r.locals;t.hot.accept(742,(function(){"string"==typeof(r=(r=a(742)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(s,r.locals)?(s=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},761:function(t,e,a){var n=a(10),r=a(743);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||t.hot.invalidate){var s=r.locals;t.hot.accept(743,(function(){"string"==typeof(r=(r=a(743)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(s,r.locals)?(s=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},762:function(t,e,a){var n=a(10),r=a(745);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||t.hot.invalidate){var s=r.locals;t.hot.accept(745,(function(){"string"==typeof(r=(r=a(745)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(s,r.locals)?(s=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},763:function(t,e,a){var n=a(10),r=a(746);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||t.hot.invalidate){var s=r.locals;t.hot.accept(746,(function(){"string"==typeof(r=(r=a(746)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(s,r.locals)?(s=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},764:function(t,e,a){(e=a(7)(!1)).push([t.i,".ins-c-dashboard__number-description>*{text-align:left}.ins-c-dashboard__number-description .pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-left:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:var(--pf-global--FontSize--sm);text-align:left}\n",""]),t.exports=e},765:function(t,e,a){(e=a(7)(!1)).push([t.i,".ins-c-dashboard__number-data--xl{font-size:calc(var(--pf-global--FontSize--2xl) * 2);line-height:40px}.ins-c-dashboard__number-data--lg{font-size:30px;line-height:30px}.ins-c-dashboard__number-data--md{font-size:var(--pf-global--FontSize--lg);line-height:var(--pf-global--FontSize--lg)}.ins-c-dashboard__number-data--xl,.ins-c-dashboard__number-data--lg,.ins-c-dashboard__number-data--md{font-family:var(--pf-global--FontFamily--redhatfont--heading--sans-serif)}.ins-c-dashboard__number-data--number-percentage{display:flex;flex-direction:row;align-items:flex-end}.ins-c-dashboard__number-data--number-percentage>*{color:#000}.ins-c-dashboard__number-percentage{display:flex;align-items:baseline;margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%}.ins-c-dashboard__number-percentage span{display:inline-block;max-width:85%;margin-right:var(--pf-global--spacer--sm);overflow:hidden;text-overflow:ellipsis}\n",""]),t.exports=e},775:function(t,e,a){(e=a(7)(!1)).push([t.i,".stackChartLegend{left:-9px;position:relative}.pf-c-chart{height:unset !important}.visually-hidden{position:absolute !important;top:-40px;font-size:10px;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}\n",""]),t.exports=e},798:function(t,e,a){var n=a(10),r=a(764);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||t.hot.invalidate){var s=r.locals;t.hot.accept(764,(function(){"string"==typeof(r=(r=a(764)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(s,r.locals)?(s=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},799:function(t,e,a){var n=a(10),r=a(765);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||t.hot.invalidate){var s=r.locals;t.hot.accept(765,(function(){"string"==typeof(r=(r=a(765)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(s,r.locals)?(s=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},822:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));a(798);var n=a(697),r=a(125),i=a(751),o=(a(799),a(72)),s=a(750),l=a(0),c=a.n(l),d=a(13),u=a.n(d),f=function(t){var e=t.data,a=t.dataSize,n=t.percentageData,i=t.iconTooltipText;return c.a.createElement("div",{className:"ins-c-dashboard__number-data--number-percentage"},c.a.createElement("span",{className:"ins-c-dashboard__number-data--".concat(a)},e),n&&c.a.createElement("span",{className:"ins-c-dashboard__number-percentage"},c.a.createElement("span",null,n),c.a.createElement(o.Tooltip,{key:"".concat(i),position:o.TooltipPosition.top,content:c.a.createElement("div",null,i)},c.a.createElement(r.Button,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},c.a.createElement(s.a,null)))))};f.propTypes={data:u.a.any,dataSize:u.a.string,linkDescription:u.a.string,percentageData:u.a.string,iconTooltipText:u.a.node};var p=function(t){var e=t.data,a=t.dataSize,o=t.percentageData,s=t.link,l=t.linkDescription,d=t.layout,u=t.critical,p=t.iconTooltipText,m=t.flexDirection;return c.a.createElement("div",{className:"ins-c-dashboard__number-description ".concat(d?"pf-m-".concat(d):"")},"true"===u&&c.a.createElement(i.a,null),c.a.createElement(n.Flex,{direction:m},c.a.createElement(n.FlexItem,{spacer:{default:"spacerXs"}},c.a.createElement(f,{data:e,dataSize:a,percentageData:o,iconTooltipText:p})),c.a.createElement(n.FlexItem,{spacer:{default:"spacerXs"}},c.a.createElement(r.Button,{component:"a",isInline:!0,variant:"link",href:s},l))))};p.propTypes={data:u.a.any,dataSize:u.a.string,percentageData:u.a.string,link:u.a.any,linkDescription:u.a.string,layout:u.a.string,critical:u.a.string,iconTooltipText:u.a.node,flexDirection:u.a.object}},850:function(t,e,a){var n=a(10),r=a(775);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||t.hot.invalidate){var s=r.locals;t.hot.accept(775,(function(){"string"==typeof(r=(r=a(775)).__esModule?r.default:r)&&(r=[[t.i,r,""]]),function(t,e){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(s,r.locals)?(s=r.locals,o(r)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),t.exports=r.locals||{}},900:function(t,e,a){"use strict";var n=a(356),r=a.n(n),i=a(355),o=a.n(i),s=(a(850),a(684)),l=a(734),c=a(725),d=a(726),u=a(727),f=a(728),p=a(735),m=a(721),h=a(722),g=a(723),v=a(724),b=a(729),y=a(730),_=a(0),x=a.n(_),S=function(t){return t[0].toUpperCase()+t.substring(1)},E=a(13),w=a.n(E),z=function(t){var e=o()({},t),a=[m.a.value,h.a.value,g.a.value,v.a.value],n=e.data.map((function(t){return{name:"".concat(t.y," ").concat(S(t.name)),symbol:{type:null}}})),i=e.data.length&&e.data.filter((function(t){return t.y>0})).map((function(t){return t.y})),_=i.length&&i.reduce((function(t,e){return Math.min(t,e)})),E=function(t){var a=t.index,n=r()(t,["index"]);return x.a.createElement("a",{id:"".concat(e.ariaTitle.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(a+1),href:e.legendClick[a],className:"pf-c-button pf-m-link pf-m-inline"},x.a.createElement(s.a,n))};return x.a.createElement(x.a.Fragment,null,x.a.createElement(l.a,{ariaDesc:e.ariaDesc,ariaTitle:e.ariaTitle,padding:{bottom:0,left:0,right:0,top:0},width:e.width,height:e.height,maxWidth:e.maxWidth},x.a.createElement(c.a,{axisComponent:x.a.createElement(x.a.Fragment,null)}),x.a.createElement(d.a,{horizontal:!0,colorScale:a},e.data.map((function(t){return x.a.createElement(u.a,{key:t,barWidth:25,labelComponent:x.a.createElement(f.a,{style:{fontSize:"12px",padding:"10"},dx:_?-t.y/_*5:0,orientation:"top"}),data:[{name:t.name,y:t.y,x:1,label:function(t){var e=t.datum;return"".concat(S(e.name),": ").concat(e.y)}}]})})))),x.a.createElement("span",{className:"stackChartLegend","aria-label":"Chart legend"},x.a.createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":e.ariaTitle+" data"},e.data.map((function(t,e){return[x.a.createElement("tr",{key:e},x.a.createElement("td",null,t.y),x.a.createElement("td",null,t.name))]}))),x.a.createElement(p.a,{data:n,responsive:!1,height:e.legendHeight,width:e.legendWidth,fontSize:12,className:"pf-m-redhat-font",labelComponent:x.a.createElement(E,null),orientation:"horizontal",gutter:0,style:{labels:{fill:b.a.value}},events:[{target:"labels",eventHandlers:{onMouseOver:function(){return[{mutation:function(t){return{style:Object.assign({},t.style,{fill:y.a.value,textDecoration:"underline"})}}}]},onMouseOut:function(){return[{mutation:function(){return null}}]},onClick:function(){return[{mutation:function(t){return{style:Object.assign({},t.style,{fill:y.a.value,textDecoration:"underline"})}}}]}}}],colorScale:a})))};z.propTypes={maxWidth:w.a.number,ariaDesc:w.a.string,ariaTitle:w.a.string,data:w.a.array,height:w.a.number,width:w.a.number,legendHeight:w.a.number,legendWidth:w.a.number,legendClick:w.a.any,style:w.a.any};e.a=z}}]);
//# sourceMappingURL=17.js.map