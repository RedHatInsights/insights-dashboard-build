(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{401:function(e,a,t){"use strict";t.r(a);var n=t(369),c=t.n(n),l=t(112),r=t.n(l),i=t(39),o=t.n(i),u=t(40),m=t.n(u),s=t(41),p=t.n(s),d=t(42),h=t.n(d),f=t(43),g=t.n(f),E=t(2),y=t.n(E),b=t(1),S=t.n(b),w=t(110),_=t(29),v=t(117),k=t(120),C=t(116),A=t(118),F=t(126),j=t(127),D=t(124),M=t(125),N=t(80),J=t(122),O=t(121),P=t(119),x=t(129),z=t(377),G=t(375),T=(t(376),t(17)),V=function(e){function a(e){return o()(this,a),p()(this,h()(a).call(this,e))}return g()(a,e),m()(a,[{key:"componentDidMount",value:function(){this.props.fetchCompliance()}},{key:"render",value:function(){var e,a=this.props,t=a.complianceFetchStatus,n=a.complianceSummary;return y.a.createElement(v.a,r()({className:"ins-c-card__compliance"},"pending"!==t&&{"data-ouia-safe":!0}),y.a.createElement(k.a,null,y.a.createElement(C.a,{size:"lg"},"Compliance")),y.a.createElement(A.a,null,y.a.createElement(F.a,null,"fulfilled"===t&&Array.isArray(n.data)&&(n.data.length>0?(e=n,e.data.length>1?e.data.slice(0,2):e.data.slice()).map(function(e){return y.a.createElement(j.a,{gutter:"sm",key:e.id},y.a.createElement(D.a,{gutter:"md",key:e.id},y.a.createElement(M.a,{className:"ins-c-gauge pf-u-text-align-center"},y.a.createElement("div",{className:"ins-c-gauge__metrics-percentage"},Math.trunc(100*e.attributes.score),"%"),y.a.createElement(w.Gauge,{label:e.attributes.name,value:Math.trunc(100*e.attributes.score),width:82,height:82,timeframe:"30",identifier:"compliance-gauge-".concat(e.id)})),y.a.createElement(M.a,null,y.a.createElement(F.a,null,y.a.createElement(j.a,null,y.a.createElement("a",{href:"/".concat(T.g,"/compliance/policies/")},e.attributes.name)),y.a.createElement(j.a,null,e.attributes.compliant_host_count," of  ",e.attributes.total_host_count," systems")))))}):y.a.createElement(N.b,null,y.a.createElement(J.a,{icon:x.a}),y.a.createElement(O.a,null," You have not uploaded any reports yet "))),"pending"===t&&y.a.createElement(G.a,null))),y.a.createElement(P.a,null,y.a.createElement("a",{href:"".concat(T.g,"/compliance/policies/")},"View All","fulfilled"===t&&Array.isArray(n.data)&&n.data.length>1?" ".concat(n.data.length," "):" ","Compliance Policies")))}}]),a}(E.Component);V.propTypes={fetchCompliance:S.a.func,complianceSummary:S.a.object,complianceFetchStatus:S.a.string};a.default=Object(w.routerParams)(Object(_.connect)(function(e,a){return c()({complianceSummary:e.DashboardStore.complianceSummary,complianceFetchStatus:e.DashboardStore.complianceFetchStatus},a)},function(e){return{fetchCompliance:function(a){return e(z.a(a))}}})(V))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map