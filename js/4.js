(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{504:function(e,a,t){"use strict";t.r(a);var n=t(472),c=t.n(n),l=t(185),r=t.n(l),i=t(83),o=t.n(i),u=t(84),m=t.n(u),s=t(85),p=t.n(s),d=t(86),h=t.n(d),f=t(87),g=t.n(f),E=t(2),y=t.n(E),b=t(1),S=t.n(b),w=t(182),_=t(70),v=t(192),k=t(195),C=t(189),A=t(193),F=t(205),j=t(206),D=t(203),M=t(204),N=t(197),J=t(199),O=t(198),x=t(194),z=t(164),G=t(480),P=t(478),T=(t(479),t(37)),V=function(e){function a(e){return o()(this,a),p()(this,h()(a).call(this,e))}return g()(a,e),m()(a,[{key:"componentDidMount",value:function(){this.props.fetchCompliance()}},{key:"render",value:function(){var e,a=this.props,t=a.complianceFetchStatus,n=a.complianceSummary;return y.a.createElement(v.a,r()({className:"ins-c-card__compliance"},"pending"!==t?{"data-ouia-safe":!0}:{"data-ouia-safe":!1}),y.a.createElement(k.a,null,y.a.createElement(C.a,{size:"lg"},"Compliance")),y.a.createElement(A.a,null,y.a.createElement(F.a,null,"fulfilled"===t&&Array.isArray(n.data)&&(n.data.length>0?(e=n,e.data.length>1?e.data.slice(0,2):e.data.slice()).map(function(e){return y.a.createElement(j.a,{gutter:"sm",key:e.id},y.a.createElement(D.a,{gutter:"md",key:e.id},y.a.createElement(M.a,{className:"ins-c-gauge pf-u-text-align-center"},y.a.createElement("div",{className:"ins-c-gauge__metrics-percentage"},Math.trunc(100*e.attributes.score),"%"),y.a.createElement(w.Gauge,{label:e.attributes.name,value:Math.trunc(100*e.attributes.score),width:82,height:82,timeframe:"30",identifier:"compliance-gauge-".concat(e.id)})),y.a.createElement(M.a,null,y.a.createElement(F.a,null,y.a.createElement(j.a,null,y.a.createElement("a",{href:"/".concat(T.g,"/compliance/policies/")},e.attributes.name)),y.a.createElement(j.a,null,e.attributes.compliant_host_count," of  ",e.attributes.total_host_count," systems")))))}):y.a.createElement(N.a,null,y.a.createElement(J.a,{icon:z.b}),y.a.createElement(O.a,null," You have not uploaded any reports yet "))),"pending"===t&&y.a.createElement(P.a,null))),y.a.createElement(x.a,null,y.a.createElement("a",{href:"".concat(T.g,"/compliance/policies/")},"View all","fulfilled"===t&&Array.isArray(n.data)&&n.data.length>1?" ".concat(n.data.length," "):" ","compliance policies")))}}]),a}(E.Component);V.propTypes={fetchCompliance:S.a.func,complianceSummary:S.a.object,complianceFetchStatus:S.a.string};a.default=Object(w.routerParams)(Object(_.connect)(function(e,a){return c()({complianceSummary:e.DashboardStore.complianceSummary,complianceFetchStatus:e.DashboardStore.complianceFetchStatus},a)},function(e){return{fetchCompliance:function(a){return e(G.a(a))}}})(V))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map