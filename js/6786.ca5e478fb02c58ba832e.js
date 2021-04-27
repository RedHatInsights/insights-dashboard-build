(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[6786],{76786:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});var n=a(96156),i=(a(84157),a(57149)),r=a(93264),s=a.n(r),o=a(66794),c=a(47173),l=a(10358),d=a(37486),m=a(45697),u=a.n(m),f=(a(71870),a(9947)),p=a(75106),A=a(60485),g=a(30893),h=a(86896),v=function(){var e=(0,h.Z)();return s().createElement(f.u,{variant:f.I.small},s().createElement(A.D,{headingLevel:"h6",size:"md"},e.formatMessage(g.Z.remediationsNoDataTitle)),s().createElement(p.B,null,e.formatMessage(g.Z.remediationsNoDataBody)))};v.propTypes={intl:u().any};var b=a(92137),C=a(28481),_=a(87757),y=a.n(_),E=(a(97628),a(88596)),x=a(71094),k=a(68778),w=a(94768),S=(a(96327),a(73479));const Z=function(){return s().createElement(S.ZP,{className:"ins-c-dashboard__icon-question"})};var D=a(59303),R=(a(17083),function(e){var t=e.timestamp;return s().createElement("p",{className:"ins-c-dashboard__time-stamp"},t)});R.propTypes={timestamp:u().string};const N=R;var B=a(72781),O=a(35224),P=function(e){return{running:"running",pending:"running",acked:"running",failure:"failure",canceled:"failure",success:"success"}[e]},z="ins-c-remediation__status-icon",F=function(e){var t,a=e.id,n=e.name,i=e.index,o=(0,r.useState)({}),l=(0,C.Z)(o,2),d=l[0],m=l[1],u=(0,r.useState)(),f=(0,C.Z)(u,2),p=f[0],A=f[1],v=(0,r.useState)(),_=(0,C.Z)(v,2),S=_[0],R=_[1],F=(0,r.useState)(!1),j=(0,C.Z)(F,2),T=j[0],M=j[1],I=(0,h.Z)();return(0,r.useEffect)((function(){!function(){var e=(0,b.Z)(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("".concat(D.X9).concat(a,"/playbook_runs?limit=1&offset=0&sort=-updated_at"));case 3:t=e.sent,m(t.data.data),R(!0),A(t.data.data.length),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),R(!1),A(!1),M(!0),console.error("Error contacting remediations API");case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),s().createElement("div",{className:"ins-c-remediations-container"},s().createElement("div",{className:"ins-c-remediation__status"},void 0===S&&s().createElement(E.Skeleton,{size:"md"}),S&&p?s().createElement(s().Fragment,null,(t=P(d[0].status),{running:s().createElement(w.ZP,{className:"".concat(z," ").concat(z,"--running"),"aria-label":"Remediation in progress"}),success:s().createElement(k.ZP,{className:"".concat(z," ").concat(z,"--passed"),"aria-label":"Remediation passed"}),failure:s().createElement(B.ZP,{className:"".concat(z," ").concat(z,"--failed"),"aria-label":"Remediation failed"})}[t]),s().createElement("p",{className:"ins-c-remediation__status-text"},I.formatMessage(g.Z.remediationsPlaybookStatus,{status:P(d[0].status)}))):null,S&&!p&&s().createElement(s().Fragment,null,s().createElement(Z,null),s().createElement("p",null,I.formatMessage(g.Z.remediationsPlaybookNoActivity))),T&&s().createElement(s().Fragment,null,s().createElement("span",null,I.formatMessage(g.Z.remediationsPlaybookFailure))," ")),s().createElement("div",{className:"ins-c-remediation__timestamp"},n.length>65?s().createElement(O.u,{content:n},s().createElement(c.zx,{id:"remediation-link-".concat(i),component:"a",variant:"link",isInline:!0,href:"./insights/remediations/".concat(a)},n)):s().createElement(c.zx,{id:"remediation-link-".concat(i),component:"a",variant:"link",isInline:!0,href:"./insights/remediations/".concat(a)},n),void 0===S&&s().createElement(E.Skeleton,{size:"md"}),S&&p?s().createElement(N,{timestamp:s().createElement(E.DateFormat,{type:"exact",date:d[0].created_at})}):null))};F.propTypes={id:u().string,name:u().string,intl:u().any,index:u().any};const j=F;var T=a(77121),M=a(36873);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Y=function(e){var t=e.fetchRemediations,a=e.remediationsFetchStatus,n=e.remediations,i=(0,h.Z)();return(0,r.useEffect)((function(){t()}),[t]),s().createElement(l.t,{appName:"remediations",className:"ins-c-card__remediations ins-m-toggle-right-on-md",title:i.formatMessage(g.Z.remediationsCardHeader),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_remediations")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_remediations",e)},header:s().createElement(o.KZ,null),body:s().createElement(o.jA,null,"fulfilled"===a&&Array.isArray(n.data)&&(n.data.length>0?s().createElement(s().Fragment,null,n.data.map((function(e,t){return s().createElement(j,{id:e.id,name:e.name,key:e.id,index:t+1})})),n.meta.total>n.meta.count&&s().createElement("div",{className:"ins-c-remediations-container"},s().createElement("div",{className:"ins-c-remediation__status"}),s().createElement("div",{className:"ins-c-remediation__timestamp"},s().createElement(c.zx,{id:"remediations-link-more",component:"a",href:"./insights/remediations",variant:"link",isInline:!0},i.formatMessage(g.Z.remediationsTotal,{total:n.meta.total-n.meta.count}))))):s().createElement(v,null)),"rejected"===a&&s().createElement(d.Z,{appName:"Remediations"}))})};Y.propTypes={fetchRemediations:u().func,remediations:u().object,remediationsFetchStatus:u().string,intl:u().any};const H=(0,M.Z)((0,T.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({remediations:e.DashboardStore.remediations,remediationsFetchStatus:e.DashboardStore.remediationsFetchStatus},t)}),(function(e){return{fetchRemediations:function(){return e(i.y7())}}}))(Y))},16062:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(94015),i=a.n(n),r=a(23645),s=a.n(r)()(i());s.push([e.id,".dashboard .ins-c-dashboard__time-stamp{color:var(--pf-global--disabled-color--100);font-size:var(--pf-global--FontSize--sm)}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/TimeStamp/TimeStamp.scss"],names:[],mappings:"AAAA,wCAC6B,2CAA2C,CAAC,wCAAwC",sourcesContent:[".dashboard{\n.ins-c-dashboard__time-stamp{color:var(--pf-global--disabled-color--100);font-size:var(--pf-global--FontSize--sm)}\n\n}"],sourceRoot:""}]);const o=s},29021:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(94015),i=a.n(n),r=a(23645),s=a.n(r)()(i());s.push([e.id,".dashboard .ins-c-remediations-container{display:flex;flex-direction:row}.dashboard .ins-c-remediations-container:not(:last-child){padding-bottom:var(--pf-global--spacer--md)}.dashboard .ins-c-remediation__status{display:flex;flex-direction:row;padding-top:2px;padding-right:16px;min-width:110px}.dashboard .ins-c-remediation__status>p{margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm)}\n","",{version:3,sources:["webpack://./src/SmartComponents/Remediations/RemediationsCard.scss"],names:[],mappings:"AAAA,yCAC8B,YAAY,CAAC,kBAAkB,CAD7D,0DAC6G,2CAA2C,CADxJ,sCACoL,YAAY,CAAC,kBAAkB,CAAC,eAAe,CAAC,kBAAkB,CAAC,eAAe,CADtQ,wCACoS,wCAAwC,CAAC,wCAAwC",sourcesContent:[".dashboard{\n.ins-c-remediations-container{display:flex;flex-direction:row}.ins-c-remediations-container:not(:last-child){padding-bottom:var(--pf-global--spacer--md)}.ins-c-remediation__status{display:flex;flex-direction:row;padding-top:2px;padding-right:16px;min-width:110px}.ins-c-remediation__status>p{margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm)}\n\n}"],sourceRoot:""}]);const o=s},11195:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(94015),i=a.n(n),r=a(23645),s=a.n(r)()(i());s.push([e.id,".dashboard .ins-c-dashboard__card--Remediations .pf-c-empty-state{margin-left:auto;margin-right:auto}\n","",{version:3,sources:["webpack://./src/SmartComponents/Remediations/RemediationsEmptyState.scss"],names:[],mappings:"AAAA,kEACuD,gBAAgB,CAAC,iBAAiB",sourcesContent:[".dashboard{\n.ins-c-dashboard__card--Remediations .pf-c-empty-state{margin-left:auto;margin-right:auto}\n\n}"],sourceRoot:""}]);const o=s},38700:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(94015),i=a.n(n),r=a(23645),s=a.n(r)()(i());s.push([e.id,".dashboard .ins-c-remediation__status-icon--passed{color:var(--pf-global--success-color--200)}.dashboard .ins-c-remediation__status-icon--failed{color:var(--pf-global--danger-color--100)}.dashboard .ins-c-remediation__status-icon--running{color:var(--pf-global--default-color--300)}.dashboard .ins-c-remediation__status-text{text-transform:capitalize}.dashboard .ins-c-remediation__timestamp{text-overflow:ellipsis;overflow:hidden}\n","",{version:3,sources:["webpack://./src/SmartComponents/Remediations/RunStatus.scss"],names:[],mappings:"AAAA,mDACwC,0CAA0C,CADlF,mDAC2H,yCAAyC,CADpK,oDAC8M,0CAA0C,CADxP,2CACyR,yBAAyB,CADlT,yCACiV,sBAAsB,CAAC,eAAe",sourcesContent:[".dashboard{\n.ins-c-remediation__status-icon--passed{color:var(--pf-global--success-color--200)}.ins-c-remediation__status-icon--failed{color:var(--pf-global--danger-color--100)}.ins-c-remediation__status-icon--running{color:var(--pf-global--default-color--300)}.ins-c-remediation__status-text{text-transform:capitalize}.ins-c-remediation__timestamp{text-overflow:ellipsis;overflow:hidden}\n\n}"],sourceRoot:""}]);const o=s},17083:(e,t,a)=>{"use strict";var n=a(93379),i=a.n(n),r=a(16062),s=i()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var o=r.default.locals;e.hot.accept(16062,(t=>{r=a(16062),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,s(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),r.default.locals},84157:(e,t,a)=>{"use strict";var n=a(93379),i=a.n(n),r=a(29021),s=i()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var o=r.default.locals;e.hot.accept(29021,(t=>{r=a(29021),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,s(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),r.default.locals},71870:(e,t,a)=>{"use strict";var n=a(93379),i=a.n(n),r=a(11195),s=i()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var o=r.default.locals;e.hot.accept(11195,(t=>{r=a(11195),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,s(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),r.default.locals},97628:(e,t,a)=>{"use strict";var n=a(93379),i=a.n(n),r=a(38700),s=i()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var o=r.default.locals;e.hot.accept(38700,(t=>{r=a(38700),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,s(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),r.default.locals}}]);
//# sourceMappingURL=../sourcemaps/6786.b40bf7574ef961b5b21f.js.map