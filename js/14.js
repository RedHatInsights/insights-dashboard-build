(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{904:function(e,t,a){"use strict";a.r(t);var n=a(778),c=a.n(n),r=a(269),l=a.n(r),i=a(272),o=a.n(i),u=a(273),m=a.n(u),s=a(274),p=a.n(s),f=a(275),d=a.n(f),h=a(276),b=a.n(h),g=a(733),y=a(423),E=a(426),O=a(422),w=a(424),j=a(435),v=a(436),S=a(433),P=a(434),_=a(429),k=a(431),D=a(430),C=a(425),A=a(2),F=a.n(A),M=a(245),N=a(277),J=a(668),x=a(1),z=a.n(x),G=a(34),T=a(152),V=a(779),Y=a.n(V);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var B=function(e){function t(e){return o()(this,t),p()(this,d()(t).call(this,e))}return b()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.props.fetchCompliance()}},{key:"render",value:function(){var e,t=this.props,a=t.complianceFetchStatus,n=t.complianceSummary;return F.a.createElement(y.a,l()({className:"ins-c-card__compliance"},"pending"!==a?{"data-ouia-safe":!0}:{"data-ouia-safe":!1}),F.a.createElement(E.a,null,F.a.createElement(O.a,{size:"lg"},"Compliance")),F.a.createElement(w.a,null,F.a.createElement(j.a,null,"fulfilled"===a&&Array.isArray(n.data)&&(n.data.length>0?(e=n,e.data.length>1?e.data.slice(0,2):e.data.slice()).map((function(e){return F.a.createElement(v.a,{gutter:"sm",key:e.id},F.a.createElement(S.a,{gutter:"md",key:e.id},F.a.createElement(P.a,{className:"ins-c-gauge pf-u-text-align-center"},F.a.createElement("div",{className:"ins-c-gauge__metrics-percentage"},Math.trunc(100*e.attributes.score),"%"),F.a.createElement(N.Gauge,{label:e.attributes.name,value:Math.trunc(100*e.attributes.score),width:82,height:82,timeframe:"30",identifier:"compliance-gauge-".concat(e.id)})),F.a.createElement(P.a,null,F.a.createElement(j.a,null,F.a.createElement(v.a,null,F.a.createElement("a",{href:"/".concat(G.m,"/compliance/policies/")},e.attributes.name)),F.a.createElement(v.a,null,e.attributes.compliant_host_count," of  ",e.attributes.total_host_count," systems")))))})):F.a.createElement(_.a,null,F.a.createElement(k.a,{icon:M.b}),F.a.createElement(D.a,null," You have not uploaded any reports yet "))),"pending"===a&&F.a.createElement(J.a,null))),F.a.createElement(C.a,null,F.a.createElement("a",{href:"".concat(G.m,"/compliance/policies/")},"View all","fulfilled"===a&&Array.isArray(n.data)&&n.data.length>1?" ".concat(n.data.length," "):" ","compliance policies")))}}]),t}(A.Component);B.propTypes={fetchCompliance:z.a.func,complianceSummary:z.a.object,complianceFetchStatus:z.a.string};t.default=Y()(Object(T.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({complianceSummary:e.DashboardStore.complianceSummary,complianceFetchStatus:e.DashboardStore.complianceFetchStatus},t)}),(function(e){return{fetchCompliance:function(t){return e(g.d(t))}}}))(B))}}]);
//# sourceMappingURL=14.js.map