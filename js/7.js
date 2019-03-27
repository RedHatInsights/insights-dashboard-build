(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{784:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=V(a(740)),l=V(a(152)),r=V(a(153)),s=V(a(154)),n=V(a(155)),u=a(1),c=V(u),f=V(a(0)),o=a(399),d=a(69),m=a(17),b=a(156),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(741)),p=V(a(742));function V(e){return e&&e.__esModule?e:{default:e}}a(743);var _=function(e){function t(e){(0,l.default)(this,t);var a=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.props={},a}return(0,n.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.props.fetchCriticalVulnerabilities(),this.props.fetchLatestVulnerabilities(),this.props.fetchVulnerabilities()}},{key:"render",value:function(){var e=this.props,t=e.criticalVulnerabilitiesFetchStatus,a=e.latestVulnerabilitiesFetchStatus,i=e.criticalVulnerabilities,l=e.latestVulnerabilities,r=e.vulnerabilitiesFetchStatus,s=e.vulnerabilities;return c.default.createElement(b.Card,{className:"ins-c-card__vulnerabilities"},c.default.createElement(b.CardHeader,null,c.default.createElement(b.Title,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Vulnerabilities")),c.default.createElement(b.CardBody,null,"fulfilled"===t&&c.default.createElement("div",{className:"ins-c-summary"},c.default.createElement(m.ExclamationCircleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-critical"}),c.default.createElement("span",{className:"ins-c-summary__emphasis"},i.meta.total_items),c.default.createElement("span",{className:"ins-c-summary__label"},c.default.createElement("a",{href:"/insightsbeta/platform/vulnerability/"},"Critical")))," ","pending"===t&&c.default.createElement(p.default,null),"fulfilled"===a&&c.default.createElement("div",{className:"ins-c-summary"},c.default.createElement(m.FlagIcon,{className:"ins-c-summary__icon ins-c-summary__icon-flag"}),c.default.createElement("span",{className:"ins-c-summary__emphasis"},l.meta.total_items),c.default.createElement("span",{className:"ins-c-summary__label"},"CVEs added in the last 7 days"))),c.default.createElement(b.CardFooter,null,c.default.createElement("a",{href:"/insightsbeta/platform/vulnerability/"},"View All","fulfilled"===r&&s.meta.total_items>0?" "+s.meta.total_items+" ":""," Vulnerabilities")))}}]),t}(u.Component);_.propTypes={fetchCriticalVulnerabilities:f.default.func,criticalVulnerabilities:f.default.object,criticalVulnerabilitiesFetchStatus:f.default.string,fetchLatestVulnerabilities:f.default.func,latestVulnerabilities:f.default.object,latestVulnerabilitiesFetchStatus:f.default.string,fetchVulnerabilities:f.default.func,vulnerabilities:f.default.object,vulnerabilitiesFetchStatus:f.default.string};t.default=(0,o.routerParams)((0,d.connect)(function(e,t){return(0,i.default)({criticalVulnerabilities:e.DashboardStore.criticalVulnerabilities,criticalVulnerabilitiesFetchStatus:e.DashboardStore.criticalVulnerabilitiesFetchStatus,latestVulnerabilities:e.DashboardStore.latestVulnerabilities,latestVulnerabilitiesFetchStatus:e.DashboardStore.latestVulnerabilitiesFetchStatus,vulnerabilities:e.DashboardStore.vulnerabilities,vulnerabilitiesFetchStatus:e.DashboardStore.vulnerabilitiesFetchStatus},t)},function(e){return{fetchCriticalVulnerabilities:function(t){return e(h.fetchCriticalVulnerabilities(t))},fetchLatestVulnerabilities:function(t){return e(h.fetchLatestVulnerabilities(t))},fetchVulnerabilities:function(t){return e(h.fetchVulnerabilities(t))}}})(_))}}]);
//# sourceMappingURL=../sourcemaps/7.js.map