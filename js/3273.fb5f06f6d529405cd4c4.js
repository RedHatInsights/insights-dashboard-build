(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[3273],{16062:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(94015),i=a.n(n),r=a(23645),s=a.n(r)()(i());s.push([e.id,".dashboard .ins-c-dashboard__time-stamp{color:var(--pf-global--disabled-color--100);font-size:var(--pf-global--FontSize--sm)}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/TimeStamp/TimeStamp.scss"],names:[],mappings:"AAAA,wCAC6B,2CAA2C,CAAC,wCAAwC",sourcesContent:[".dashboard{\n.ins-c-dashboard__time-stamp{color:var(--pf-global--disabled-color--100);font-size:var(--pf-global--FontSize--sm)}\n\n}"],sourceRoot:""}]);const o=s},29021:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(94015),i=a.n(n),r=a(23645),s=a.n(r)()(i());s.push([e.id,".dashboard .ins-c-remediations-container{display:flex;flex-direction:row}.dashboard .ins-c-remediations-container:not(:last-child){padding-bottom:var(--pf-global--spacer--md)}.dashboard .ins-c-remediation__status{display:flex;flex-direction:row;padding-top:2px;padding-right:16px;min-width:110px}.dashboard .ins-c-remediation__status>p{margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm)}\n","",{version:3,sources:["webpack://./src/SmartComponents/Remediations/RemediationsCard.scss"],names:[],mappings:"AAAA,yCAC8B,YAAY,CAAC,kBAAkB,CAD7D,0DAC6G,2CAA2C,CADxJ,sCACoL,YAAY,CAAC,kBAAkB,CAAC,eAAe,CAAC,kBAAkB,CAAC,eAAe,CADtQ,wCACoS,wCAAwC,CAAC,wCAAwC",sourcesContent:[".dashboard{\n.ins-c-remediations-container{display:flex;flex-direction:row}.ins-c-remediations-container:not(:last-child){padding-bottom:var(--pf-global--spacer--md)}.ins-c-remediation__status{display:flex;flex-direction:row;padding-top:2px;padding-right:16px;min-width:110px}.ins-c-remediation__status>p{margin-left:var(--pf-global--spacer--sm);font-size:var(--pf-global--FontSize--sm)}\n\n}"],sourceRoot:""}]);const o=s},11195:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(94015),i=a.n(n),r=a(23645),s=a.n(r)()(i());s.push([e.id,".dashboard .ins-c-dashboard__card--Remediations .pf-c-empty-state{margin-left:auto;margin-right:auto}\n","",{version:3,sources:["webpack://./src/SmartComponents/Remediations/RemediationsEmptyState.scss"],names:[],mappings:"AAAA,kEACuD,gBAAgB,CAAC,iBAAiB",sourcesContent:[".dashboard{\n.ins-c-dashboard__card--Remediations .pf-c-empty-state{margin-left:auto;margin-right:auto}\n\n}"],sourceRoot:""}]);const o=s},38700:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(94015),i=a.n(n),r=a(23645),s=a.n(r)()(i());s.push([e.id,".dashboard .ins-c-remediation__status-icon--passed{color:var(--pf-global--success-color--200)}.dashboard .ins-c-remediation__status-icon--failed{color:var(--pf-global--danger-color--100)}.dashboard .ins-c-remediation__status-icon--running{color:var(--pf-global--default-color--300)}.dashboard .ins-c-remediation__status-text{text-transform:capitalize}\n","",{version:3,sources:["webpack://./src/SmartComponents/Remediations/RunStatus.scss"],names:[],mappings:"AAAA,mDACwC,0CAA0C,CADlF,mDAC2H,yCAAyC,CADpK,oDAC8M,0CAA0C,CADxP,2CACyR,yBAAyB",sourcesContent:[".dashboard{\n.ins-c-remediation__status-icon--passed{color:var(--pf-global--success-color--200)}.ins-c-remediation__status-icon--failed{color:var(--pf-global--danger-color--100)}.ins-c-remediation__status-icon--running{color:var(--pf-global--default-color--300)}.ins-c-remediation__status-text{text-transform:capitalize}\n\n}"],sourceRoot:""}]);const o=s},53273:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});var n=a(96156),i=(a(84157),a(64169)),r=a(93264),s=a.n(r),o=a(81404),c=a(47173),l=a(58471),d=a(58093),m=a(45697),u=a.n(m),f=(a(71870),a(9947)),p=a(75106),g=a(60485),h=a(18623),A=a(86896),b=function(){var e=(0,A.Z)();return s().createElement(f.u,{variant:f.I.small},s().createElement(g.D,{headingLevel:"h6",size:"md"},e.formatMessage(h.Z.remediationsNoDataTitle)),s().createElement(p.B,null,e.formatMessage(h.Z.remediationsNoDataBody)))};b.propTypes={intl:u().any};var v=a(92137),C=a(28481),_=a(87757),y=a.n(_),E=(a(97628),a(72487)),x=a(37802),k=a(68778),S=a(94768),w=(a(96327),a(73479));const Z=function(){return s().createElement(w.ZP,{className:"ins-c-dashboard__icon-question"})};var D=a(20999),R=(a(17083),function(e){var t=e.timestamp;return s().createElement("p",{className:"ins-c-dashboard__time-stamp"},t)});R.propTypes={timestamp:u().string};const N=R;var O=a(72781),P=a(35224),z=function(e){return{running:"running",pending:"running",acked:"running",failure:"failure",canceled:"failure",success:"success"}[e]},B="ins-c-remediation__status-icon",F=function(e){var t,a=e.id,n=e.name,i=e.index,o=(0,r.useState)({}),l=(0,C.Z)(o,2),d=l[0],m=l[1],u=(0,r.useState)(),f=(0,C.Z)(u,2),p=f[0],g=f[1],b=(0,r.useState)(),_=(0,C.Z)(b,2),w=_[0],R=_[1],F=(0,r.useState)(!1),j=(0,C.Z)(F,2),M=j[0],T=j[1],I=(0,A.Z)();return(0,r.useEffect)((function(){!function(){var e=(0,v.Z)(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("".concat(D.X9).concat(a,"/playbook_runs?limit=1&offset=0&sort=-updated_at"));case 3:t=e.sent,m(t.data.data),R(!0),g(t.data.data.length),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),R(!1),g(!1),T(!0),console.error("Error contacting remediations API");case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),s().createElement("div",{className:"ins-c-remediations-container"},s().createElement("div",{className:"ins-c-remediation__status"},void 0===w&&s().createElement(E.Skeleton,{size:"md"}),w&&p?s().createElement(s().Fragment,null,(t=z(d[0].status),{running:s().createElement(S.ZP,{className:"".concat(B," ").concat(B,"--running"),"aria-label":"Remediation in progress"}),success:s().createElement(k.ZP,{className:"".concat(B," ").concat(B,"--passed"),"aria-label":"Remediation passed"}),failure:s().createElement(O.ZP,{className:"".concat(B," ").concat(B,"--failed"),"aria-label":"Remediation failed"})}[t]),s().createElement("p",{className:"ins-c-remediation__status-text"},I.formatMessage(h.Z.remediationsPlaybookStatus,{status:z(d[0].status)}))):null,w&&!p&&s().createElement(s().Fragment,null,s().createElement(Z,null),s().createElement("p",null,I.formatMessage(h.Z.remediationsPlaybookNoActivity))),M&&s().createElement(s().Fragment,null,s().createElement("span",null,I.formatMessage(h.Z.remediationsPlaybookFailure))," ")),s().createElement("div",{className:"ins-c-remediation__timestamp"},n.length>20?s().createElement(P.u,{content:n},s().createElement(c.zx,{id:"remediation-link-".concat(i),component:"a",variant:"link",isInline:!0,href:"./insights/remediations/".concat(a)},"".concat(n.substring(0,20),"...")," ")):s().createElement(c.zx,{id:"remediation-link-".concat(i),component:"a",variant:"link",isInline:!0,href:"./insights/remediations/".concat(a)},n," "),void 0===w&&s().createElement(E.Skeleton,{size:"md"}),w&&p?s().createElement(N,{timestamp:s().createElement(E.DateFormat,{type:"exact",date:d[0].created_at})}):null))};F.propTypes={id:u().string,name:u().string,intl:u().any,index:u().any};const j=F;var M=a(77121),T=a(36873);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Y=function(e){var t=e.fetchRemediations,a=e.remediationsFetchStatus,n=e.remediations,i=(0,A.Z)();return(0,r.useEffect)((function(){t()}),[t]),s().createElement(l.t,{appName:"remediations",className:"ins-c-card__remediations ins-m-toggle-right-on-md",title:i.formatMessage(h.Z.remediationsCardHeader),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_remediations")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_remediations",e)},header:s().createElement(o.KZ,null),body:s().createElement(o.jA,null,"fulfilled"===a&&Array.isArray(n.data)&&(n.data.length>0?s().createElement(s().Fragment,null,n.data.map((function(e,t){return s().createElement(j,{id:e.id,name:e.name,key:e.id,index:t+1})})),n.meta.total>n.meta.count&&s().createElement("div",{className:"ins-c-remediations-container"},s().createElement("div",{className:"ins-c-remediation__status"}),s().createElement("div",{className:"ins-c-remediation__timestamp"},s().createElement(c.zx,{id:"remediations-link-more",component:"a",href:"./insights/remediations",variant:"link",isInline:!0},i.formatMessage(h.Z.remediationsTotal,{total:n.meta.total-n.meta.count}))))):s().createElement(b,null)),"rejected"===a&&s().createElement(d.Z,{appName:"Remediations"}))})};Y.propTypes={fetchRemediations:u().func,remediations:u().object,remediationsFetchStatus:u().string,intl:u().any};const H=(0,T.Z)((0,M.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({remediations:e.DashboardStore.remediations,remediationsFetchStatus:e.DashboardStore.remediationsFetchStatus},t)}),(function(e){return{fetchRemediations:function(){return e(i.y7())}}}))(Y))},17083:(e,t,a)=>{"use strict";var n=a(93379),i=a.n(n),r=a(16062),s=i()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var o=r.default.locals;e.hot.accept(16062,(t=>{r=a(16062),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,s(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),r.default.locals},84157:(e,t,a)=>{"use strict";var n=a(93379),i=a.n(n),r=a(29021),s=i()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var o=r.default.locals;e.hot.accept(29021,(t=>{r=a(29021),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,s(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),r.default.locals},71870:(e,t,a)=>{"use strict";var n=a(93379),i=a.n(n),r=a(11195),s=i()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var o=r.default.locals;e.hot.accept(11195,(t=>{r=a(11195),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,s(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),r.default.locals},97628:(e,t,a)=>{"use strict";var n=a(93379),i=a.n(n),r=a(38700),s=i()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var o=r.default.locals;e.hot.accept(38700,(t=>{r=a(38700),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,s(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),r.default.locals}}]);
//# sourceMappingURL=3273.fb5f06f6d529405cd4c4.js.map