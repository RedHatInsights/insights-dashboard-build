(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[968],{18968:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var n=a(22122),c=a(57149),l=a(31765),r=a(61282),o=a(81217),i=a(14087),s=a(27511),m=a(47173),p=a(9947),u=a(60485),d=a(75106),f=a(35293),g=a(28191),h=a(92298),E=a(93264),_=a.n(E),y=a(66794),k=a(98756),S=a(10358),b=a(37486),Z=a(48320),x=a(46891),N=a(45697),C=a.n(N),I=a(59303),v=a(88931),w=a(30893),F=a(36873),M=a(86896),T=function(e){var t=e.fetchCompliance,a=e.complianceFetchStatus,c=e.complianceSummary,N=e.selectedTags,C=e.workloads,v=e.SID;(0,E.useEffect)((function(){t()}),[t]);var F,T=(0,M.Z)();return _().createElement(S.t,(0,n.Z)({appName:"Compliance",className:"ins-c-card__compliance ins-m-toggle-right-on-md"},"pending"!==a?{"data-ouia-safe":!0}:{"data-ouia-safe":!1},{title:T.formatMessage(w.Z.complianceTitle),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_compliance")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_compliance",e)},header:_().createElement(y.KZ,null),body:_().createElement(y.jA,null,(0,k.PF)(N,C,v)?_().createElement(_().Fragment,null,"fulfilled"===a&&Array.isArray(c.data)&&(c.data.length>0?_().createElement(_().Fragment,null,_().createElement(l.FR,{className:"ins-m-no-padding ins-m-no-top-border",isCompact:!0},(F=c,F.data.length>1?F.data.slice(0,3):F.data.slice()).map((function(e,t){return _().createElement(r.L,{key:t},_().createElement(o.V,null,_().createElement(i.p,{dataListCells:[_().createElement(s.K,{key:t},_().createElement(g.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"}},_().createElement(m.zx,{id:"compliance-link-".concat(t+1),className:"ins-c-compliance__policy-link",component:"a",href:"".concat(I.Pu,"/compliance/reports/").concat(e.id),variant:"link",isInline:!0},e.attributes.name),_().createElement(g.k,null,_().createElement(h.B,{flex:{default:"flex_1"}},_().createElement("p",null,"description")),_().createElement(g.k,{flex:{default:"None"}},_().createElement(h.B,null,T.formatMessage(w.Z.compliantHostCount,{count:e.attributes.test_result_host_count})),_().createElement(h.B,null,T.formatMessage(w.Z.compliantScore,{score:+(e.attributes.test_result_host_count&&e.attributes.compliant_host_count/e.attributes.test_result_host_count*100).toFixed(1)}))))))]})))}))),_().createElement(m.zx,{className:"ins-c-compliance__policy-link",component:"a",href:"".concat(I.Pu,"/compliance/reports/"),variant:"link",isInline:!0},"fulfilled"===a&&Array.isArray(c.data)&&c.data.length-3>=1&&"".concat(c.data.length-3," more compliance reports"))):_().createElement(p.u,{className:"ins-c-compliance__empty-state",variant:p.I.full},_().createElement(u.D,{headingLevel:"h5",size:"md"},T.formatMessage(w.Z.complianceEmptyStateTitle)),_().createElement(d.B,null,T.formatMessage(w.Z.complianceEmptyStateBody)),_().createElement(f.i,null,_().createElement(m.zx,{variant:"link",href:"".concat(I.Pu,"/compliance/reports/"),component:"a"},T.formatMessage(w.Z.complianceEmptyStateAction1)),_().createElement(m.zx,{variant:"link",component:"a",href:"https://www.open-scap.org/getting-started/"},T.formatMessage(w.Z.complianceEmptyStateAction2))))),"pending"===a&&_().createElement(x.Z,null),"rejected"===a&&_().createElement(b.Z,{appName:"Compliance"})):_().createElement(Z.Z,{href:"".concat(I.Pu,"/compliance/"),title:T.formatMessage(w.Z.filterNotApplicable),appName:T.formatMessage(w.Z.complianceTitle)}))}))};T.propTypes={fetchCompliance:C().func,complianceSummary:C().object,complianceFetchStatus:C().string,intl:C().any,selectedTags:C().array,workloads:k.ib,SID:C().arrayOf(C().string)};const A=(0,F.Z)((0,v.connect)((function(e){var t=e.DashboardStore;return{complianceSummary:t.complianceSummary,complianceFetchStatus:t.complianceFetchStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchCompliance:function(t){return e(c.T2(t))}}}))(T))}}]);
//# sourceMappingURL=../sourcemaps/968.09c199b80bd03690b3f4.js.map