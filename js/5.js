(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{528:function(e,t,a){"use strict";a.r(t);var i=a(495),l=a.n(i),s=a(205),n=a.n(s),r=a(93),c=a.n(r),u=a(94),m=a.n(u),o=a(95),b=a.n(o),h=a(96),f=a.n(h),p=a(97),V=a.n(p),d=a(2),_=a.n(d),v=a(1),S=a.n(v),y=a(202),E=a(76),g=a(184),F=a(185),N=a(212),w=a(215),C=a(209),D=a(213),j=a(214),k=a(503),L=a(501),J=(a(502),a(39)),O=function(e){function t(e){var a;return c()(this,t),(a=b()(this,f()(t).call(this,e))).props={},a}return V()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.props.fetchCriticalVulnerabilities(),this.props.fetchLatestVulnerabilities(),this.props.fetchVulnerabilities()}},{key:"render",value:function(){var e=this.props,t=e.criticalVulnerabilitiesFetchStatus,a=e.latestVulnerabilitiesFetchStatus,i=e.criticalVulnerabilities,l=e.latestVulnerabilities,s=e.vulnerabilitiesFetchStatus,r=e.vulnerabilities;return _.a.createElement(N.a,n()({className:"ins-c-card__vulnerability"},"pending"!==t&&"pending"!==a&&"pending"!==s?{"data-ouia-safe":!0}:{"data-ouia-safe":!1}),_.a.createElement(w.a,null,_.a.createElement(C.a,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Vulnerability")),_.a.createElement(D.a,null,"fulfilled"===t&&_.a.createElement("div",{className:"ins-c-summary"},_.a.createElement(g.b,{className:"ins-c-summary__icon ins-c-summary__icon-critical"}),_.a.createElement("span",{className:"ins-c-summary__emphasis"},i.meta.total_items),_.a.createElement("span",{className:"ins-c-summary__label"},_.a.createElement("a",{href:"".concat(J.g,"/vulnerability/cves?cvss_filter=from8to10")},"CVEs with CVSS score >= 8")))," ","pending"===t&&_.a.createElement(L.a,null),"fulfilled"===a&&_.a.createElement("div",{className:"ins-c-summary"},_.a.createElement(F.b,{className:"ins-c-summary__icon ins-c-summary__icon-flag"}),_.a.createElement("span",{className:"ins-c-summary__emphasis"},l.meta.total_items),_.a.createElement("span",{className:"ins-c-summary__label"},_.a.createElement("a",{href:"".concat(J.g,"/vulnerability/cves?publish_date=last7&show_irrelevant=true")},"CVEs added in the last 7 days")))),_.a.createElement(j.a,null,_.a.createElement("a",{href:"".concat(J.g,"/vulnerability/")},"View all","fulfilled"===s&&r.meta.total_items>0?" ".concat(r.meta.total_items," "):""," vulnerabilities")))}}]),t}(d.Component);O.propTypes={fetchCriticalVulnerabilities:S.a.func,criticalVulnerabilities:S.a.object,criticalVulnerabilitiesFetchStatus:S.a.string,fetchLatestVulnerabilities:S.a.func,latestVulnerabilities:S.a.object,latestVulnerabilitiesFetchStatus:S.a.string,fetchVulnerabilities:S.a.func,vulnerabilities:S.a.object,vulnerabilitiesFetchStatus:S.a.string};t.default=Object(y.routerParams)(Object(E.connect)(function(e,t){return l()({criticalVulnerabilities:e.DashboardStore.criticalVulnerabilities,criticalVulnerabilitiesFetchStatus:e.DashboardStore.criticalVulnerabilitiesFetchStatus,latestVulnerabilities:e.DashboardStore.latestVulnerabilities,latestVulnerabilitiesFetchStatus:e.DashboardStore.latestVulnerabilitiesFetchStatus,vulnerabilities:e.DashboardStore.vulnerabilities,vulnerabilitiesFetchStatus:e.DashboardStore.vulnerabilitiesFetchStatus},t)},function(e){return{fetchCriticalVulnerabilities:function(t){return e(k.b(t))},fetchLatestVulnerabilities:function(t){return e(k.c(t))},fetchVulnerabilities:function(t){return e(k.d(t))}}})(O))}}]);
//# sourceMappingURL=../sourcemaps/5.js.map