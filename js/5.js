(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{455:function(e,t,a){"use strict";a.r(t);var i=a(422),l=a.n(i),s=a(157),n=a.n(s),r=a(73),c=a.n(r),u=a(74),m=a.n(u),o=a(75),b=a.n(o),h=a(76),f=a.n(h),p=a(77),V=a.n(p),d=a(2),_=a.n(d),v=a(1),S=a.n(v),y=a(154),E=a(60),g=a(180),F=a(181),N=a(164),w=a(167),C=a(161),D=a(165),j=a(166),k=a(430),L=a(428),J=(a(429),a(31)),O=function(e){function t(e){var a;return c()(this,t),(a=b()(this,f()(t).call(this,e))).props={},a}return V()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.props.fetchCriticalVulnerabilities(),this.props.fetchLatestVulnerabilities(),this.props.fetchVulnerabilities()}},{key:"render",value:function(){var e=this.props,t=e.criticalVulnerabilitiesFetchStatus,a=e.latestVulnerabilitiesFetchStatus,i=e.criticalVulnerabilities,l=e.latestVulnerabilities,s=e.vulnerabilitiesFetchStatus,r=e.vulnerabilities;return _.a.createElement(N.a,n()({className:"ins-c-card__vulnerability"},"pending"!==t&&"pending"!==a&&"pending"!==s?{"data-ouia-safe":!0}:{"data-ouia-safe":!1}),_.a.createElement(w.a,null,_.a.createElement(C.a,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Vulnerability")),_.a.createElement(D.a,null,"fulfilled"===t&&_.a.createElement("div",{className:"ins-c-summary"},_.a.createElement(g.a,{className:"ins-c-summary__icon ins-c-summary__icon-critical"}),_.a.createElement("span",{className:"ins-c-summary__emphasis"},i.meta.total_items),_.a.createElement("span",{className:"ins-c-summary__label"},_.a.createElement("a",{href:"/".concat(J.g,"/vulnerability/cves?cvss_filter=from7to10")},"CVEs with CVSS Score >= 7")))," ","pending"===t&&_.a.createElement(L.a,null),"fulfilled"===a&&_.a.createElement("div",{className:"ins-c-summary"},_.a.createElement(F.a,{className:"ins-c-summary__icon ins-c-summary__icon-flag"}),_.a.createElement("span",{className:"ins-c-summary__emphasis"},l.meta.total_items),_.a.createElement("span",{className:"ins-c-summary__label"},_.a.createElement("a",{href:"/".concat(J.g,"/vulnerability/cves?publish_date=last7&show_irrelevant=true")},"CVEs added in the last 7 days")))),_.a.createElement(j.a,null,_.a.createElement("a",{href:"".concat(J.g,"/vulnerability/")},"View All","fulfilled"===s&&r.meta.total_items>0?" ".concat(r.meta.total_items," "):""," Vulnerabilities")))}}]),t}(d.Component);O.propTypes={fetchCriticalVulnerabilities:S.a.func,criticalVulnerabilities:S.a.object,criticalVulnerabilitiesFetchStatus:S.a.string,fetchLatestVulnerabilities:S.a.func,latestVulnerabilities:S.a.object,latestVulnerabilitiesFetchStatus:S.a.string,fetchVulnerabilities:S.a.func,vulnerabilities:S.a.object,vulnerabilitiesFetchStatus:S.a.string};t.default=Object(y.routerParams)(Object(E.connect)(function(e,t){return l()({criticalVulnerabilities:e.DashboardStore.criticalVulnerabilities,criticalVulnerabilitiesFetchStatus:e.DashboardStore.criticalVulnerabilitiesFetchStatus,latestVulnerabilities:e.DashboardStore.latestVulnerabilities,latestVulnerabilitiesFetchStatus:e.DashboardStore.latestVulnerabilitiesFetchStatus,vulnerabilities:e.DashboardStore.vulnerabilities,vulnerabilitiesFetchStatus:e.DashboardStore.vulnerabilitiesFetchStatus},t)},function(e){return{fetchCriticalVulnerabilities:function(t){return e(k.b(t))},fetchLatestVulnerabilities:function(t){return e(k.c(t))},fetchVulnerabilities:function(t){return e(k.d(t))}}})(O))}}]);
//# sourceMappingURL=../sourcemaps/5.js.map