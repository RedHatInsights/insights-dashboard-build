(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{784:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=_(a(740)),i=_(a(152)),r=_(a(153)),s=_(a(154)),n=_(a(155)),u=a(1),c=_(u),f=_(a(0)),o=a(399),m=a(69),d=a(17),b=a(156),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(741)),p=_(a(742));function _(e){return e&&e.__esModule?e:{default:e}}a(743);var V=function(e){function t(e){(0,i.default)(this,t);var a=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.props={},a}return(0,n.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.props.fetchCriticalVulnerabilities(),this.props.fetchLatestVulnerabilities()}},{key:"render",value:function(){var e=this.props,t=e.criticalVulnerabilitiesFetchStatus,a=e.latestVulnerabilitiesFetchStatus,l=e.criticalVulnerabilities,i=e.latestVulnerabilities;return c.default.createElement(b.Card,{className:"ins-c-card__vulnerabilities"},c.default.createElement(b.CardHeader,null,c.default.createElement(b.Title,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Vulnerabilities")),c.default.createElement(b.CardBody,null,"fulfilled"===t&&c.default.createElement("div",{className:"ins-c-summary"},c.default.createElement(d.ExclamationCircleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-critical"}),c.default.createElement("span",{className:"ins-c-summary__emphasis"},l.meta.total_items),c.default.createElement("span",{className:"ins-c-summary__label"},c.default.createElement("a",{href:"/insightsbeta/platform/vulnerability/"},"Critical")))," ","pending"===t&&c.default.createElement(p.default,null),"fulfilled"===a&&c.default.createElement("div",{className:"ins-c-summary"},c.default.createElement(d.FlagIcon,{className:"ins-c-summary__icon ins-c-summary__icon-flag"}),c.default.createElement("span",{className:"ins-c-summary__emphasis"},i.meta.total_items),c.default.createElement("span",{className:"ins-c-summary__label"},"CVEs added in the last 7 days"))),c.default.createElement(b.CardFooter,null,c.default.createElement("a",{href:"/insightsbeta/platform/vulnerability/"},"View All Vulnerabilities")))}}]),t}(u.Component);V.propTypes={fetchCriticalVulnerabilities:f.default.func,criticalVulnerabilities:f.default.object,criticalVulnerabilitiesFetchStatus:f.default.string,fetchLatestVulnerabilities:f.default.func,latestVulnerabilities:f.default.object,latestVulnerabilitiesFetchStatus:f.default.string};t.default=(0,o.routerParams)((0,m.connect)(function(e,t){return(0,l.default)({criticalVulnerabilities:e.DashboardStore.criticalVulnerabilities,criticalVulnerabilitiesFetchStatus:e.DashboardStore.criticalVulnerabilitiesFetchStatus,latestVulnerabilities:e.DashboardStore.latestVulnerabilities,latestVulnerabilitiesFetchStatus:e.DashboardStore.latestVulnerabilitiesFetchStatus},t)},function(e){return{fetchCriticalVulnerabilities:function(t){return e(h.fetchCriticalVulnerabilities(t))},fetchLatestVulnerabilities:function(t){return e(h.fetchLatestVulnerabilities(t))}}})(V))}}]);
//# sourceMappingURL=../sourcemaps/7.js.map