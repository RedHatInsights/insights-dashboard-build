(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4],{1152:function(e,a,t){var n=t(10),i=t(891);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(891,(function(){"string"==typeof(i=(i=t(891)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},1174:function(e,a,t){"use strict";t.r(a);var n=t(754),i=t(0),r=t.n(i),l=t(759),o={"0.0 - 3.9":"less4","4.0 - 7.9":"from4to8","8.0 - 10":"from8to10"},c=t(441),s=t(755),d=t(785),u=t(823),f=t(13),p=t.n(f),m=t(900),h=t(5),v=(t(1152),function(){return r.a.createElement(c.Divider,{className:"pf-m-vertical"})}),g=t(110),b=t(748),y=t(377),_=function(e){var a=e.fetchVulnerabilities,t=e.vulnerabilities,n=e.vulnerabilitiesFetchStatus;Object(i.useEffect)((function(){a()}),[a]);var f=[],p=[],g=Object(y.a)();if("fulfilled"===n){var _=t.cves_by_severity,x=t.cves_total;p=(f=[{name:"CVSS 8.0 - 10",x:x,y:_["8to10"].count,fill:"#a30000"},{name:"CVSS 4.0 - 7.9",x:x,y:_["4to7.9"].count,fill:"#ec7a08"},{name:"CVSS 0.0 - 3.9",x:x,y:_["0to3.9"].count,fill:"#f0ab00"}]).map((function(e){return{name:"".concat(e.name),class:e.name,symbol:{fill:"".concat(e.fill),type:"circle"}}}))}var E=f.map((function(e){var a=e.name.split("CVSS ")[1];return"".concat(h.G,"/vulnerability/cves?cvss_filter=").concat(o[a])}));return"rejected"===n?r.a.createElement(l.a,{isFilled:!1,className:"ins-c-card__vulnerability","data-ouia-safe":!0},r.a.createElement(l.c,{title:g.formatMessage(b.a.vulnerabilitiesTitle)}),r.a.createElement(l.b,null,r.a.createElement(s.a,{appName:"Vulnerability"}))):r.a.createElement(l.a,{isFilled:!1,className:"ins-c-card__vulnerability","data-ouia-safe":"pending"!==n},r.a.createElement(l.c,{title:g.formatMessage(b.a.vulnerabilitiesTitle)}),r.a.createElement(l.b,null,"fulfilled"!==n?r.a.createElement(d.a,null):r.a.createElement(u.a,{data:g.formatMessage(b.a.vulnerabilitiesTotalItems,{total:t.cves_total}),dataSize:"md",linkDescription:g.formatMessage(b.a.cvesImpactingSystems,{cves:t.cves_total}),layout:"horizontal",link:"".concat(h.G,"/vulnerability/")}),"fulfilled"!==n?r.a.createElement(d.a,null):r.a.createElement(m.a,{ariaDesc:g.formatMessage(b.a.cvesImpactingSystems,{cves:t.cves_total}),ariaTitle:"Vulnerabilities chart",height:40,maxWidth:500,legendHeight:36,legendWidth:500,data:f,constrainToVisibleArea:!1,legendData:p,legendClick:E})),r.a.createElement(c.Divider,null),"fulfilled"!==n?r.a.createElement(d.a,null):r.a.createElement(l.b,{isFilled:!1,isHorizontalLayout:"true"},r.a.createElement(u.a,{data:t.recent_cves.last90days,dataSize:"md",linkDescription:g.formatMessage(b.a.lastxdays,{days:90}),link:"".concat(h.G,"/vulnerability/cves?publish_date=last90"),flexDirection:{default:"column"}}),r.a.createElement(v,null),r.a.createElement(u.a,{data:t.recent_cves.last30days,dataSize:"md",linkDescription:g.formatMessage(b.a.lastxdays,{days:30}),link:"".concat(h.G,"/vulnerability/cves?publish_date=last30"),flexDirection:{default:"column"}}),r.a.createElement(v,null),r.a.createElement(u.a,{data:g.formatMessage(b.a.latestVulnerabilitiesTotal,{totalLatest:t.recent_cves.last7days}),dataSize:"md",linkDescription:g.formatMessage(b.a.lastxdays,{days:7}),link:"".concat(h.G,"/vulnerability/cves?publish_date=last7"),flexDirection:{default:"column"}})))};_.propTypes={fetchVulnerabilities:p.a.func,vulnerabilities:p.a.object,vulnerabilitiesFetchStatus:p.a.string};a.default=Object(g.connect)((function(e){var a=e.DashboardStore;return{vulnerabilities:a.vulnerabilities,vulnerabilitiesFetchStatus:a.vulnerabilitiesFetchStatus}}),(function(e){return{fetchVulnerabilities:function(a){return e(n.j(a))}}}))(_)},741:function(e,a,t){var n=t(10),i=t(744);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(744,(function(){"string"==typeof(i=(i=t(744)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},742:function(e,a,t){(a=t(7)(!1)).push([e.i,".ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.ins-c-dashboard__card--header.ins-m-padding-small{padding-bottom:6px}.ins-c-dashboard__card--body{display:flex;flex-direction:column}.ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}\n",""]),e.exports=a},743:function(e,a,t){(a=t(7)(!1)).push([e.i,".ins-c-download-report__button.pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-right:0}.pf-c-button__icon{color:var(--pf-global--Color--100)}\n",""]),e.exports=a},744:function(e,a,t){(a=t(7)(!1)).push([e.i,".ins-c-dashboard__icon-finished{fill:var(--pf-global--success-color--200)}.ins-c-dashboard__icon-running{fill:var(--pf-global--primary-color--100)}.ins-c-dashboard__icon-warning{fill:var(--pf-global--warning-color--100)}.ins-c-dashboard__icon-critical{fill:var(--pf-global--danger-color--100)}.ins-c-dashboard__icon-info{fill:var(--pf-global--info-color--100)}\n",""]),e.exports=a},745:function(e,a,t){(a=t(7)(!1)).push([e.i,".pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm)}.pf-c-button__icon{color:var(--pf-global--Color--100)}.ins-c-dashboard__info-inline{display:flex;flex-direction:row;align-items:center}.ins-c-dashboard__info-inline p{font-size:var(--pf-global--FontSize--sm);margin-left:var(--pf-global--spacer--sm);color:var(--pf-global--primary-color--100)}.ins-c-dashboard__info-inline.ins-m-padding-top{padding-top:var(--pf-global--spacer--xs)}\n",""]),e.exports=a},746:function(e,a,t){(a=t(7)(!1)).push([e.i,".ins-c-dashboard__error-state{margin-left:auto;margin-right:auto}.ins-c-dashboard__error-state--isSmall{padding:0}\n",""]),e.exports=a},751:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(691),l=t.n(r);t(741);a.a=function(){return i.a.createElement(l.a,{className:"ins-c-dashboard__icon-info"})}},752:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(439),l=t.n(r);t(741);a.a=function(){return i.a.createElement(l.a,{className:"ins-c-dashboard__icon-critical"})}},754:function(e,a,t){"use strict";t.d(a,"d",(function(){return d})),t.d(a,"j",(function(){return u})),t.d(a,"b",(function(){return f})),t.d(a,"c",(function(){return p})),t.d(a,"a",(function(){return m})),t.d(a,"n",(function(){return h})),t.d(a,"m",(function(){return v})),t.d(a,"k",(function(){return g})),t.d(a,"l",(function(){return b})),t.d(a,"o",(function(){return y})),t.d(a,"p",(function(){return _})),t.d(a,"f",(function(){return x})),t.d(a,"g",(function(){return E})),t.d(a,"e",(function(){return S})),t.d(a,"h",(function(){return w})),t.d(a,"i",(function(){return z}));var n=t(95),i=t.n(n),r=t(126),l=t.n(r),o=t(5),c=t(357),s=function(){var e=l()(i.a.mark((function e(a,t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,c.a.get(a,t,n);case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),d=function(e){return{type:o.g,payload:s(o.h,{},e)}},u=function(e){return{type:o.H,payload:s(o.I,{},e)}},f=function(e){return{type:o.c,payload:s(o.d,{},e)}},p=function(e){return{type:o.e,payload:s(o.f,{},e)}},m=function(e){return{type:o.a,payload:s(o.b,{},e)}},h=function(e){return{type:o.x,payload:s(o.y,{},e)}},v=function(e){return{type:o.v,payload:s(o.w,{},e)}},g=function(e){return{type:o.q,payload:s(o.r,{},e)}},b=function(e){return{type:o.s,payload:s(o.t,{},e)}},y=function(e,a){return{type:o.D,payload:Promise.all([s("".concat(o.F).concat(e),{},a),s("".concat(o.C).concat(e),{},a)])}},_=function(e,a){return{type:o.E,payload:Promise.all([s("".concat(o.F).concat(e),{},a),s("".concat(o.C).concat(e),{},a)])}},x=function(e){return{type:o.i,payload:s(o.j,{},e)}},E=function(e){return{type:o.m,payload:s(o.n,{},e)}},S=function(e){return{type:o.k,payload:s(o.l,{},e)}},w=function(e){return{type:o.o,payload:s(o.p,{},e)}},z=function(e){return{type:o.z,payload:s(o.A,{},e)}}},755:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(13),l=t.n(r),o=t(354),c=t(688),s=t(377),d=t(748),u=(t(763),function(e){var a=e.appName,t=e.isSmall,n=Object(s.a)();return i.a.createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"ins-c-dashboard__error-state ".concat(t&&"ins-c-dashboard__error-state--isSmall")},t?i.a.createElement(c.EmptyStateBody,null,n.formatMessage(d.a.errorStateTitle,{appName:a})):i.a.createElement(o.Title,{headingLevel:"h2",size:"md"}," ",n.formatMessage(d.a.errorStateTitle,{appName:a})," "))});u.propTypes={appName:l.a.string.isRequired,isSmall:l.a.bool},a.a=u},758:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(0),i=t.n(n),r=t(13),l=t.n(r),o=t(751),c=t(438),s=t.n(c),d=(t(741),function(){return i.a.createElement(s.a,{className:"ins-c-dashboard__icon-warning"})}),u=t(752),f=(t(762),{warning:d,info:o.a,critical:u.a}),p=function(e){var a=e.message,t=e.state,n=e.systemInventory,r=f[t]||i.a.Fragment;return i.a.createElement("div",{className:"ins-c-dashboard__info-inline ".concat(n?" ins-m-padding-top":"")},i.a.createElement(r,{"aria-hidden":"true"}),i.a.createElement("p",null,a))};p.propTypes={message:l.a.string,state:l.a.string,systemInventory:l.a.boolean};a.b=p},759:function(e,a,t){"use strict";t.d(a,"a",(function(){return y})),t.d(a,"c",(function(){return _})),t.d(a,"b",(function(){return x}));var n=t(355),i=t.n(n),r=t(356),l=t.n(r),o=(t(760),t(125)),c=t(689),s=(t(693),t(695)),d=(t(696),t(692)),u=t(736),f=t(0),p=t.n(f),m=(t(690),t(761),t(758),t(440)),h=t(694),v=t(354),g=t(13),b=t.n(g),y=function(e){var a=e.appName,t=e.children,n=l()(e,["appName","children"]);return p.a.createElement(c.Card,i()({className:"ins-c-dashboard__card ins-c-dashboard__card--".concat(a)},n),t)};y.propTypes={appName:b.a.string,children:b.a.any};b.a.any;b.a.any,b.a.any,b.a.string,b.a.string;var _=function(e){var a=e.title,t=e.subtitle,n=e.onDownload,r=e.children,c=l()(e,["title","subtitle","onDownload","children"]);return p.a.createElement(d.CardHeader,i()({className:"ins-c-dashboard__card--header ".concat(t?" ins-m-padding-small ":"")},c),p.a.createElement(m.Level,null,a&&p.a.createElement(h.LevelItem,null,p.a.createElement(v.Title,{headingLevel:"h2",size:"lg"}," ",a," ")),t&&p.a.createElement(h.LevelItem,null,p.a.createElement("h2",{className:"ins-c-dashboard__card--header-subtitle"},t)),p.a.createElement(h.LevelItem,null,r,n&&p.a.createElement(o.Button,{variant:"link",icon:p.a.createElement(u.a,null),onClick:n},"Report"))))};_.propTypes={title:b.a.string,subtitle:b.a.string,children:b.a.any,onDownload:b.a.func};var x=function(e){var a=e.children,t=e.isHorizontalLayout,n=l()(e,["children","isHorizontalLayout"]);return p.a.createElement(s.CardBody,i()({className:"ins-c-dashboard__card--body ".concat(t?" ins-m-horizontal":"")},n),a)};x.propTypes={isHorizontalLayout:b.a.any,children:b.a.any};b.a.any},760:function(e,a,t){var n=t(10),i=t(742);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(742,(function(){"string"==typeof(i=(i=t(742)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},761:function(e,a,t){var n=t(10),i=t(743);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(743,(function(){"string"==typeof(i=(i=t(743)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},762:function(e,a,t){var n=t(10),i=t(745);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(745,(function(){"string"==typeof(i=(i=t(745)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},763:function(e,a,t){var n=t(10),i=t(746);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(746,(function(){"string"==typeof(i=(i=t(746)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},764:function(e,a,t){(a=t(7)(!1)).push([e.i,".ins-c-dashboard__number-description>*{text-align:left}.ins-c-dashboard__number-description .pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-left:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:var(--pf-global--FontSize--sm);text-align:left}\n",""]),e.exports=a},765:function(e,a,t){(a=t(7)(!1)).push([e.i,".ins-c-dashboard__number-data--xl{font-size:calc(var(--pf-global--FontSize--2xl) * 2);line-height:40px}.ins-c-dashboard__number-data--lg{font-size:30px;line-height:30px}.ins-c-dashboard__number-data--md{font-size:var(--pf-global--FontSize--lg);line-height:var(--pf-global--FontSize--lg)}.ins-c-dashboard__number-data--xl,.ins-c-dashboard__number-data--lg,.ins-c-dashboard__number-data--md{font-family:var(--pf-global--FontFamily--redhatfont--heading--sans-serif)}.ins-c-dashboard__number-data--number-percentage{display:flex;flex-direction:row;align-items:flex-end}.ins-c-dashboard__number-data--number-percentage>*{color:#000}.ins-c-dashboard__number-percentage{display:flex;align-items:baseline;margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%}.ins-c-dashboard__number-percentage span{display:inline-block;max-width:85%;margin-right:var(--pf-global--spacer--sm);overflow:hidden;text-overflow:ellipsis}\n",""]),e.exports=a},775:function(e,a,t){(a=t(7)(!1)).push([e.i,".stackChartLegend{left:-9px;position:relative}.ins-c-stack-chart{height:40px;width:525px;margin:10px 0 10px 0}.visually-hidden{position:absolute !important;top:-40px;font-size:10px;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}\n",""]),e.exports=a},799:function(e,a,t){var n=t(10),i=t(764);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(764,(function(){"string"==typeof(i=(i=t(764)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},800:function(e,a,t){var n=t(10),i=t(765);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(765,(function(){"string"==typeof(i=(i=t(765)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},823:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));t(799);var n=t(697),i=t(125),r=t(752),l=(t(800),t(72)),o=t(751),c=t(0),s=t.n(c),d=t(13),u=t.n(d),f=function(e){var a=e.data,t=e.dataSize,n=e.percentageData,r=e.iconTooltipText;return s.a.createElement("div",{className:"ins-c-dashboard__number-data--number-percentage"},s.a.createElement("span",{className:"ins-c-dashboard__number-data--".concat(t)},a),n&&s.a.createElement("span",{className:"ins-c-dashboard__number-percentage"},s.a.createElement("span",null,n),s.a.createElement(l.Tooltip,{key:"".concat(r),position:l.TooltipPosition.top,content:s.a.createElement("div",null,r)},s.a.createElement(i.Button,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},s.a.createElement(o.a,null)))))};f.propTypes={data:u.a.any,dataSize:u.a.string,linkDescription:u.a.string,percentageData:u.a.string,iconTooltipText:u.a.node};var p=function(e){var a=e.data,t=e.dataSize,l=e.percentageData,o=e.link,c=e.linkDescription,d=e.layout,u=e.critical,p=e.iconTooltipText,m=e.flexDirection;return s.a.createElement("div",{className:"ins-c-dashboard__number-description ".concat(d?"pf-m-".concat(d):"")},"true"===u&&s.a.createElement(r.a,null),s.a.createElement(n.Flex,{direction:m},s.a.createElement(n.FlexItem,{spacer:{default:"spacerXs"}},s.a.createElement(f,{data:a,dataSize:t,percentageData:l,iconTooltipText:p})),s.a.createElement(n.FlexItem,{spacer:{default:"spacerXs"}},s.a.createElement(i.Button,{component:"a",isInline:!0,variant:"link",href:o},c))))};p.propTypes={data:u.a.any,dataSize:u.a.string,percentageData:u.a.string,link:u.a.any,linkDescription:u.a.string,layout:u.a.string,critical:u.a.string,iconTooltipText:u.a.node,flexDirection:u.a.object}},850:function(e,a,t){var n=t(10),i=t(775);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},l=n(i,r);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(775,(function(){"string"==typeof(i=(i=t(775)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,l(i)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=i.locals||{}},891:function(e,a,t){(a=t(7)(!1)).push([e.i,'.pf-c-divider{--pf-c-divider--Height: var(--pf-global--BorderWidth--sm);--pf-c-divider--BackgroundColor: var(--pf-global--BorderColor--100);--pf-c-divider--after--Height: var(--pf-c-divider--Height);--pf-c-divider--after--BackgroundColor: var(--pf-c-divider--BackgroundColor);--pf-c-divider--after--FlexBasis: 100%;--pf-c-divider--after--Inset: 0%;--pf-c-divider--m-vertical--after--FlexBasis: 100%;--pf-c-divider--m-vertical--after--Width: var(--pf-global--BorderWidth--sm);display:flex;align-items:center;align-self:stretch;justify-content:center;width:100%;border:0}.pf-c-divider::after{flex-basis:calc(var(--pf-c-divider--after--FlexBasis) - calc(var(--pf-c-divider--after--Inset) * 2));align-self:stretch;height:var(--pf-c-divider--after--Height);content:"";background-color:var(--pf-c-divider--after--BackgroundColor);justify-self:center}.pf-c-divider.pf-m-vertical{display:inline-flex;flex-direction:column;margin-left:24px;width:auto;height:inherit;min-height:100%;max-height:100%}.pf-c-divider.pf-m-vertical::after{flex-basis:calc(var(--pf-c-divider--m-vertical--after--FlexBasis) - var(--pf-c-divider--after--Inset));width:var(--pf-c-divider--m-vertical--after--Width)}\n',""]),e.exports=a},900:function(e,a,t){"use strict";var n=t(356),i=t.n(n),r=t(111),l=t.n(r),o=t(355),c=t.n(o),s=(t(850),t(684)),d=t(734),u=t(725),f=t(726),p=t(727),m=t(728),h=t(735),v=t(0),g=t.n(v),b=t(721),y=t(722),_=t(723),x=t(724),E=t(729),S=t(730),w=function(e){return e[0].toUpperCase()+e.substring(1)},z=t(13),k=t.n(z),T=function(e){var a=c()({},e),t=[b.a.value,y.a.value,_.a.value,x.a.value],n=a.data.map((function(e){return{name:"".concat(e.y," ").concat(w(e.name)),symbol:{type:null}}})),r=a.data.length&&a.data.filter((function(e){return e.y>0})).map((function(e){return e.y})),o=r.length&&r.reduce((function(e,a){return e+a}),0),z=Object(v.useState)(),k=l()(z,2),T=k[0],D=k[1],F=Object(v.useRef)(),M=function(){return F.current&&D(F.current.clientWidth)};Object(v.useEffect)((function(){M(),window.addEventListener("resize",M)}),[]);var C=function(e){var t=e.index,n=i()(e,["index"]);return g.a.createElement("a",{id:"".concat(a.ariaTitle.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:a.legendClick[t],className:"pf-c-button pf-m-link pf-m-inline"},g.a.createElement(s.a,n))};return g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{ref:F,"aria-label":"Stack Chart"},g.a.createElement(d.a,{ariaDesc:a.ariaDesc,ariaTitle:a.ariaTitle,padding:{bottom:0,left:0,right:0,top:0},width:T,height:a.height,maxWidth:a.maxWidth},g.a.createElement(u.a,{axisComponent:g.a.createElement(g.a.Fragment,null)}),g.a.createElement(f.a,{horizontal:!0,colorScale:t},a.data.map((function(e){return g.a.createElement(p.a,{key:e,barWidth:25,labelComponent:g.a.createElement(m.a,{pointerOrientation:"bottom",style:{fontSize:"12px",padding:"10"},orientation:"top",constrainToVisibleArea:a.constrainToVisibleArea,dx:-T*(e.y/o)/2,dy:-12}),data:[{name:e.name,y:e.y,x:1,label:function(e){var a=e.datum;return"".concat(w(a.name),": ").concat(a.y)}}]})}))))),g.a.createElement("span",{className:"stackChartLegend","aria-label":"Chart legend"},g.a.createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a.ariaTitle+" data"},a.data.map((function(e,a){return[g.a.createElement("tr",{key:a},g.a.createElement("td",null,e.y),g.a.createElement("td",null,e.name))]}))),g.a.createElement(h.a,{data:n,responsive:!1,height:a.legendHeight,width:a.legendWidth,fontSize:12,className:"pf-m-redhat-font",labelComponent:g.a.createElement(C,null),orientation:"horizontal",gutter:0,style:{labels:{fill:E.a.value}},events:[{target:"labels",eventHandlers:{onMouseOver:function(){return[{mutation:function(e){return{style:Object.assign({},e.style,{fill:S.a.value,textDecoration:"underline"})}}}]},onMouseOut:function(){return[{mutation:function(){return null}}]},onClick:function(){return[{mutation:function(e){return{style:Object.assign({},e.style,{fill:S.a.value,textDecoration:"underline"})}}}]}}}],colorScale:t})))};T.propTypes={maxWidth:k.a.number,ariaDesc:k.a.string,ariaTitle:k.a.string,data:k.a.array,height:k.a.number,legendHeight:k.a.number,legendWidth:k.a.number,legendClick:k.a.any,style:k.a.any,constrainToVisibleArea:k.a.bool};a.a=T}}]);
//# sourceMappingURL=15.js.map