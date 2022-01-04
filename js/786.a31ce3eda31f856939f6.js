"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[786],{76786:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var a=n(4942),r=n(57149),i=n(93264),s=n.n(i),c=n(66794),o=n(47173),l=n(10358),m=n(37486),d=n(45697),u=n.n(d),p=n(9947),f=n(75106),g=n(60485),h=n(30893),E=n(86896),b=function(){var e=(0,E.Z)();return s().createElement(p.u,{variant:p.I.small},s().createElement(g.D,{headingLevel:"h6",size:"md"},e.formatMessage(h.Z.remediationsNoDataTitle)),s().createElement(f.B,null,e.formatMessage(h.Z.remediationsNoDataBody)))};b.propTypes={intl:u().any};var v=n(15861),y=n(29439),_=n(87757),k=n.n(_),Z=n(90238),N=n(71094),O=n(68778),S=n(94768),P=n(73479);const x=function(){return s().createElement(P.ZP,{className:"insd-c-dashboard__icon-question"})};var j=n(59303),w=function(e){var t=e.timestamp;return s().createElement("p",{className:"insd-c-dashboard__time-stamp"},t)};w.propTypes={timestamp:u().string};const D=w;var F=n(72781),C=n(35224),I=n(89319),M=function(e){return{running:"running",pending:"running",acked:"running",failure:"failure",canceled:"failure",success:"success"}[e]},R="insd-c-remediation__status-icon",z=function(e){var t=e.id,n=e.name,a=e.index,r=(0,i.useState)({}),c=(0,y.Z)(r,2),l=c[0],m=c[1],d=(0,i.useState)(),u=(0,y.Z)(d,2),p=u[0],f=u[1],g=(0,i.useState)(),b=(0,y.Z)(g,2),_=b[0],P=b[1],w=(0,i.useState)(!1),z=(0,y.Z)(w,2),T=z[0],A=z[1],B=(0,E.Z)();(0,i.useEffect)((function(){!function(){var e=(0,v.Z)(k().mark((function e(){var n;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.Z.get("".concat(j.X9).concat(t,"/playbook_runs?limit=1&offset=0&sort=-updated_at"));case 3:n=e.sent,m(n.data.data),P(!0),f(n.data.data.length),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),P(!1),f(!1),A(!0),console.error("Error contacting remediations API");case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);var q,H=(0,I.s)();return s().createElement("div",{className:"insd-c-remediations-container"},s().createElement("div",{className:"insd-c-remediation__status"},void 0===_&&s().createElement(Z.Skeleton,{size:"md"}),_&&p?s().createElement(s().Fragment,null,(q=M(l[0].status),{running:s().createElement(S.ZP,{className:"".concat(R," ").concat(R,"--running"),"aria-label":"Remediation in progress"}),success:s().createElement(O.ZP,{className:"".concat(R," ").concat(R,"--passed"),"aria-label":"Remediation passed"}),failure:s().createElement(F.ZP,{className:"".concat(R," ").concat(R,"--failed"),"aria-label":"Remediation failed"})}[q]),s().createElement("p",{className:"insd-c-remediation__status-text"},B.formatMessage(h.Z.remediationsPlaybookStatus,{status:M(l[0].status)}))):null,_&&!p&&s().createElement(s().Fragment,null,s().createElement(x,null),s().createElement("p",null,B.formatMessage(h.Z.remediationsPlaybookNoActivity))),T&&s().createElement(s().Fragment,null,s().createElement("span",null,B.formatMessage(h.Z.remediationsPlaybookFailure))," ")),s().createElement("div",{className:"insd-c-remediation__timestamp"},n.length>65?s().createElement(C.u,{content:n},s().createElement(o.zx,{id:"remediation-link-".concat(a),component:"a",variant:"link",isInline:!0,onClick:function(e){return H(e,"./insights/remediations/".concat(t))},href:"./insights/remediations/".concat(t)},n)):s().createElement(o.zx,{id:"remediation-link-".concat(a),component:"a",variant:"link",isInline:!0,onClick:function(e){return H(e,"./insights/remediations/".concat(t))},href:"./insights/remediations/".concat(t)},n),void 0===_&&s().createElement(Z.Skeleton,{size:"md"}),_&&p?s().createElement(D,{timestamp:s().createElement(Z.DateFormat,{type:"exact",date:l[0].created_at})}):null))};z.propTypes={id:u().string,name:u().string,intl:u().any,index:u().any};const T=z;var A=n(82041),B=n(36873);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var H=function(e){var t=e.fetchRemediations,n=e.remediationsFetchStatus,a=e.remediations,r=(0,E.Z)();(0,i.useEffect)((function(){t()}),[t]);var d=(0,I.s)();return s().createElement(l.t,{appName:"remediations",className:"ins-c-card__remediations insd-m-toggle-right-on-md",title:r.formatMessage(h.Z.remediationsCardHeader),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_remediations")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_remediations",e)},header:s().createElement(c.KZ,null),body:s().createElement(c.jA,null,"fulfilled"===n&&Array.isArray(a.data)&&(a.data.length>0?s().createElement(s().Fragment,null,a.data.map((function(e,t){return s().createElement(T,{id:e.id,name:e.name,key:e.id,index:t+1})})),a.meta.total>a.meta.count&&s().createElement("div",{className:"insd-c-remediations-container"},s().createElement("div",{className:"insd-c-remediation__status"}),s().createElement("div",{className:"insd-c-remediation__timestamp"},s().createElement(o.zx,{id:"remediations-link-more",component:"a",onClick:function(e){return d(e,"./insights/remediations")},href:"./insights/remediations",variant:"link",isInline:!0},r.formatMessage(h.Z.remediationsTotal,{total:a.meta.total-a.meta.count}))))):s().createElement(b,null)),"rejected"===n&&s().createElement(m.Z,{appName:"Remediations"}))})};H.propTypes={fetchRemediations:u().func,remediations:u().object,remediationsFetchStatus:u().string,intl:u().any};const J=(0,B.Z)((0,A.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({remediations:e.DashboardStore.remediations,remediationsFetchStatus:e.DashboardStore.remediationsFetchStatus},t)}),(function(e){return{fetchRemediations:function(){return e(r.y7())}}}))(H))}}]);
//# sourceMappingURL=../sourcemaps/786.8fb1f4444d911a34a074896faa558369.js.map