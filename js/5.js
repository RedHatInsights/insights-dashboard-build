(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{402:function(e,t,a){"use strict";a.r(t);var i=a(369),l=a.n(i),s=a(39),n=a.n(s),r=a(40),c=a.n(r),u=a(41),m=a.n(u),b=a(42),o=a.n(b),h=a(43),f=a.n(h),V=a(2),p=a.n(V),d=a(1),_=a.n(d),S=a(110),v=a(29),y=a(129),E=a(130),F=a(116),N=a(119),g=a(115),w=a(117),C=a(118),D=a(377),j=a(375),k=(a(376),a(17)),L=function(e){function t(e){var a;return n()(this,t),(a=m()(this,o()(t).call(this,e))).props={},a}return f()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.props.fetchCriticalVulnerabilities(),this.props.fetchLatestVulnerabilities(),this.props.fetchVulnerabilities()}},{key:"render",value:function(){var e=this.props,t=e.criticalVulnerabilitiesFetchStatus,a=e.latestVulnerabilitiesFetchStatus,i=e.criticalVulnerabilities,l=e.latestVulnerabilities,s=e.vulnerabilitiesFetchStatus,n=e.vulnerabilities;return p.a.createElement(F.a,{className:"ins-c-card__vulnerability"},p.a.createElement(N.a,null,p.a.createElement(g.a,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Vulnerability")),p.a.createElement(w.a,null,"fulfilled"===t&&p.a.createElement("div",{className:"ins-c-summary"},p.a.createElement(y.a,{className:"ins-c-summary__icon ins-c-summary__icon-critical"}),p.a.createElement("span",{className:"ins-c-summary__emphasis"},i.meta.total_items),p.a.createElement("span",{className:"ins-c-summary__label"},p.a.createElement("a",{href:"/".concat(k.g,"/vulnerability/")},"CVEs with CVSS Score >= 7")))," ","pending"===t&&p.a.createElement(j.a,null),"fulfilled"===a&&p.a.createElement("div",{className:"ins-c-summary"},p.a.createElement(E.a,{className:"ins-c-summary__icon ins-c-summary__icon-flag"}),p.a.createElement("span",{className:"ins-c-summary__emphasis"},l.meta.total_items),p.a.createElement("span",{className:"ins-c-summary__label"},"CVEs added in the last 7 days"))),p.a.createElement(C.a,null,p.a.createElement("a",{href:"".concat(k.g,"/vulnerability/")},"View All","fulfilled"===s&&n.meta.total_items>0?" ".concat(n.meta.total_items," "):""," Vulnerabilities")))}}]),t}(V.Component);L.propTypes={fetchCriticalVulnerabilities:_.a.func,criticalVulnerabilities:_.a.object,criticalVulnerabilitiesFetchStatus:_.a.string,fetchLatestVulnerabilities:_.a.func,latestVulnerabilities:_.a.object,latestVulnerabilitiesFetchStatus:_.a.string,fetchVulnerabilities:_.a.func,vulnerabilities:_.a.object,vulnerabilitiesFetchStatus:_.a.string};t.default=Object(S.routerParams)(Object(v.connect)(function(e,t){return l()({criticalVulnerabilities:e.DashboardStore.criticalVulnerabilities,criticalVulnerabilitiesFetchStatus:e.DashboardStore.criticalVulnerabilitiesFetchStatus,latestVulnerabilities:e.DashboardStore.latestVulnerabilities,latestVulnerabilitiesFetchStatus:e.DashboardStore.latestVulnerabilitiesFetchStatus,vulnerabilities:e.DashboardStore.vulnerabilities,vulnerabilitiesFetchStatus:e.DashboardStore.vulnerabilitiesFetchStatus},t)},function(e){return{fetchCriticalVulnerabilities:function(t){return e(D.b(t))},fetchLatestVulnerabilities:function(t){return e(D.c(t))},fetchVulnerabilities:function(t){return e(D.d(t))}}})(L))}}]);
//# sourceMappingURL=../sourcemaps/5.js.map