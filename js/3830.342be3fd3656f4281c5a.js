(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[3830],{31806:t=>{"use strict";t.exports=JSON.parse('{"en":{"dashboardTitle":"Dashboard","subscriptionsUtilizedTitle":"Subscription Watch utilization summary","subscriptionsUtilizedLearnMore":"Activate Subscription Watch to monitor your subscription utilization.","subscriptionsUtilizedLearnMoreAction":"Learn about Subscription Watch","subscriptionsUtilizedNoProductData":"No data available","subscriptionsUtilizedProductOneTitle":"Red Hat OpenShift","subscriptionsUtilizedProductOneDesc":"OpenShift cores: {totalReport}","subscriptionsUtilizedProductTwoTitle":"Red Hat Enterprise Linux","subscriptionsUtilizedProductTwoTitleDesc":"RHEL sockets: {totalReport}","subscriptionsUtilizedProductCapacity":"Subscription threshold: {totalCapacity}","subscriptionsUtilizedProductDate":"Data from: {formattedDate}","recsImpactingSystems":"{totalRecs, plural, one {# Recommendation} other {# Recommendations}}  impacting {systems, plural, one {# system} other {# systems}}","incidentsDetected":"{incidents, plural, one {Incident} other {Incidents}} detected","critical":"Critical","important":"important","moderate":"moderate","low":"low","compliantHostCount":"{count, plural, one {# system} other {# systems}}","compliantScore":"{score}% passes","vulnerabilitiesTitle":"Vulnerability","vulnerabilitiesTotalItems":"{total}","lastxdays":"Last {days} days","cvesImpactingSystems":"{cves, plural, one {CVE} other {CVEs}} impacting your systems","vulnerabilityLearnMore":"Learn about CVSS Scores","latestVulnerabilitiesTotal":"{totalLatest}","deniedStateTitle":"You do not have access to {appName}","deniedStateBody":"Contact your organization administrator(s) for more information","complianceEmptyStateTitle":"No policies","complianceEmptyStateBody":"The compliance service uses OpenSCAP policies to track your organization\'s adherence to compliance requirements","complianceEmptyStateAction1":"Create a policy","complianceEmptyStateAction2":"Learn about OpenSCAP","securityAdvisories":"{count, plural, one {security advisory} other {security advisories}}","bugfixAdvisories":"{count, plural, one {bug fix} other {bug fixes}}","enhancementAdvisories":"{count, plural, one {enhancement} other {enhancements}}","systemsAffected":"{count, plural, one {# system} other {# systems}} affected","patchTitle":"Patch","systemInventoryDescription":"{count, plural, one {System} other {Systems}} running insights-client","systemInventoryStaleWarning":"{count, plural, one {# system} other {# systems}} to be removed","systemInventoryStale":"{count, plural, one {# stale system} other {# stale systems}}","systemInventoryPercentageData":"{count}% of total systems","systemInventoryTitle":"Insights system inventory","systemInventoryNotUsingClient":"{count, plural, one {# additional system} other {# additional systems}} not running insights-client        are not taking advantage of Red Hat Insights capabilities.","remediationsTotal":"{total} more remediations","remediationsPlaybookStatus":"{status}","remediationsPlaybookNoActivity":"No activity","remediationsNoActivity":"Failure","remediationsNoDataTitle":"You haven\'t created any remediation playbooks yet","remediationsNoDataBody":"Create an Ansible Playbook to remediate or mitigate vulnerabilities or configuration issues.","errorStateTitle":"{appName} has experienced an error. Contact Red Hat support if the problem persists.","noSystemsTitle":"Get started with Red Hat Insights","noSystemsDescription":"With predictive analytics, avoid problems and unplanned                        downtime in your Red Hat environment. Red Hat Insights is                        included with your Red Hat Enterprise Linux subscription.","noSystemsInstall":"Install the client on the RHEL system","noSystemsRegister":"Register the system to Red Hat Insights","noSystemsLink":"Getting started documentation","advisorChartDescription":"This chart shows recommendations effecting your system","registerYourSystems":"Register your systems"}}')},67073:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(94015),n=i.n(a),s=i(23645),r=i.n(s)()(n());r.push([t.id,".dashboard :root{--ins-color--orange: #ec7a08}.dashboard button:focus{outline:none}.dashboard .ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.dashboard .ins-c-summary__emphasis{font-size:32px;font-size:2rem}.dashboard .ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.dashboard .ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.dashboard .ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.dashboard .ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.dashboard .ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.dashboard .ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.dashboard .ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.dashboard .ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.dashboard .ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.dashboard .ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.dashboard .ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.dashboard .page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.dashboard .ins-m-green{color:var(--pf-global--palette--green-400)}.dashboard .ins-m-red{color:var(--pf-global--palette--red-100)}.dashboard .pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.dashboard .ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.dashboard .ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;max-width:var(--ins-c-width-limiter--MaxWidth)}@media (min-width: 576px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}.dashboard .ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(\n        auto-fit,\n        minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr)\n    );--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.dashboard .ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,iBACM,4BAAoB,CAD1B,wBACgD,YAAY,CAD5D,kCACoF,0CAA0C,CAD9H,oCACwJ,cAAc,CAAC,cAAc,CADrL,yCACoN,uCAAuC,CAD3P,qCACsR,0CAA0C,CADhU,uCAC6V,wCAAwC,CADrY,oCAC+Z,wCAAwC,CADvc,qCACke,wCAAwC,CAD1gB,sCACsiB,yCAAyC,CAD/kB,qCAC0mB,wCAAwC,CADlpB,iCACyqB,kBAAkB,CAAC,qBAAqB,CADjtB,wEAC+wB,gBAAgB,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,oBAAoB,CAD11B,4BAC42B,gBAAgB,CAAC,gBAAgB,CAD74B,4CAC+6B,eAAe,CAAC,iBAAiB,CADh9B,oDAC0/B,wCAAwC,CADliC,wBACgjC,0CAA0C,CAD1lC,sBACsmC,wCAAwC,CAD9oC,mDACurC,iFAA2C,CADluC,kCACgyC,0CAA0C,CAD10C,gCACg2C,qCAAgC,CAAM,8CAA8C,CAAC,0BADr7C,gCACo+C,0FAA0F,CAAE,CAAA,0BADhkD,gCAC+mD,sIAAsI,CAAE,CAAA,0BADvvD,gCACsyD,kLAAkL,CAAE,CAAA,2BAD19D,gCAC0gE,8NAA8N,CAAE,CAAA,2BAD1uE,gCAC0xE,2QAA2Q,CAAE,CADviF,0BACsjF,kEAAqC,CAA8B,+DAAkC,CAA8B,gDAA0C,CAAO,iGAAkD,CAAgD;;;KAAqC,CAG32F,uCAAkC,CAAM,YAAY,CAAC,+DAA+D,CAAC,yDAAyD,CAAC,gGAAkD,CAJvO,sCAIiT,8CAA8C,CAAC,oDAAoD,CAAC,0BAJrZ,0BAI8b,sJAAkD,CAAsG,CAAA,0BAJtlB,0BAI+nB,4MAAkD,CAA4J,CAAA,0BAJ70B,0BAIs3B,kQAAkD,CAAkN,CAAA,2BAJ1nC,0BAIoqC,wTAAkD,CAAwQ,CAAA,2BAJ99C,0BAIwgD,+WAAkD,CAA+T",sourcesContent:[".dashboard{\n:root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.ins-m-green{color:var(--pf-global--palette--green-400)}.ins-m-red{color:var(--pf-global--palette--red-100)}.pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;max-width:var(--ins-c-width-limiter--MaxWidth)}@media (min-width: 576px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}.ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(\n        auto-fit,\n        minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr)\n    );--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}\n\n}"],sourceRoot:""}]);const o=r},36598:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(94015),n=i.n(a),s=i(23645),r=i.n(s)()(n());r.push([t.id,".dashboard .pf-c-spinner{display:block;margin-left:auto;margin-right:auto}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/PageLoading/PageLoading.scss"],names:[],mappings:"AAAA,yBACc,aAAa,CAAC,gBAAgB,CAAC,iBAAiB",sourcesContent:[".dashboard{\n.pf-c-spinner{display:block;margin-left:auto;margin-right:auto}\n\n}"],sourceRoot:""}]);const o=r},72234:(t,e,i)=>{"use strict";i.d(e,{B:()=>w,Z:()=>D});var a=i(87757),n=i.n(a),s=i(48926),r=i.n(s),o=i(63038),l=i.n(o),c=(i(14154),i(97522)),m=i.n(c),u=i(86588),d=i(64169),p=i(37802),h=i(20999),C=(i(81481),i(9947)),f=i(38424),A=i(60485),g=i(42151);const v=function(){return m().createElement(C.u,null,m().createElement(f.k,{variant:"container",component:g.Spinner}),m().createElement(A.D,{size:"lg",headingLevel:"h4"},"Loading"))};var y=i(45697),S=i.n(y),b=i(55399),_=i(82141),T=(0,c.lazy)((function(){return Promise.all([i.e(6410),i.e(5252),i.e(4291),i.e(1667),i.e(6708),i.e(6896),i.e(9770),i.e(1981),i.e(1430)]).then(i.bind(i,50850))})),E=function(){return m().createElement(b.Switch,null,m().createElement(b.Route,{exact:!0,path:"/",component:function(){return m().createElement(c.Suspense,{fallback:m().createElement(_.Z,null)}," ",m().createElement(T,null)," ")},rootClass:"dashboard"}))},w=(0,c.createContext)(),x=function(t){var e=(0,u.useDispatch)(),i=(0,c.useState)({customPolicies:!1,compliance:!1,drift:!1,advisor:!1,remediations:!1,patch:!1,vulnerability:!1,subscriptions:!1}),a=l()(i,2),s=a[0],o=a[1],C=(0,c.useState)(!1),f=l()(C,2),A=f[0],g=f[1],y=(0,c.useState)(!1),S=l()(y,2),b=S[0],_=S[1],T=(0,c.useState)(),x=l()(T,2),D=x[0],G=x[1];function F(){return(F=r()(n().mark((function t(){var i,a,s,r,c,m;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return insights.chrome.init(),insights.chrome.identifyApp("dashboard"),null===(i=insights.chrome)||void 0===i||null===(a=i.globalFilterScope)||void 0===a||a.call(i,"insights"),null!==(s=insights.chrome)&&void 0!==s&&s.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(t){var i,a,n=t.data,s=null===(i=insights.chrome)||void 0===i||null===(a=i.mapGlobalFilter)||void 0===a?void 0:a.call(i,n,!1,!0),r=l()(s,3),o=r[0],c=r[1],m=r[2];(0,u.batch)((function(){e((0,d.e9)(o)),e((0,d.TD)(c)),e((0,d.tF)(m))}))})),t.next=6,window.insights.chrome.auth.getUser().then((function(t){return g(t.identity.user.is_org_admin)}));case 6:return insights.chrome.getUserPermissions().then((function(t){var e=t.length&&t.map((function(t){return t.permission}));e.length&&o({customPolicies:e.includes("custom-policies:*:*"),compliance:e.includes("compliance:*:*"),drift:e.includes("drift:*:*"),advisor:e.includes("insights:*:*")||"advisor:*:*",remediations:e.includes("remediations:*:*")||e.includes("remediations:remediation:*")||e.includes("remediations:remediation:read")||e.includes("remediations:*:read"),patch:e.includes("patch:*:*"),vulnerability:e.includes("vulnerability:*:*"),subscriptions:e.includes("subscriptions:*:*")}),_(!0)})),t.prev=7,t.next=10,p.Z.get("".concat(h.XA));case 10:if(t.t2=r=t.sent,t.t1=null===t.t2,t.t1){t.next=14;break}t.t1=void 0===r;case 14:if(!t.t1){t.next=18;break}t.t3=void 0,t.next=19;break;case 18:t.t3=r.data;case 19:if(t.t0=t.t3,t.t0){t.next=22;break}t.t0={total:0};case 22:c=t.t0,m=c.total,G(m>0),0===m&&insights.chrome.hideGlobalFilter(),t.next=31;break;case 28:t.prev=28,t.t4=t.catch(7),insights.chrome.hideGlobalFilter();case 31:case"end":return t.stop()}}),t,null,[[7,28]])})))).apply(this,arguments)}return(0,c.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[]),b?m().createElement(w.Provider,{value:{customPolicies:s.customPolicies,compliance:s.compliance,drift:s.drift,advisor:s.advisor,remediations:s.remediations,patch:s.patch,vulnerability:s.vulnerability,subscriptions:s.subscriptions,isOrgAdmin:A,hasSystems:D}},m().createElement(E,{childProps:t})):m().createElement(v,null)};x.propTypes={history:S().object};const D=x},64169:(t,e,i)=>{"use strict";i.d(e,{T2:()=>m,Q6:()=>u,$i:()=>d,l5:()=>p,ag:()=>h,Zw:()=>C,yZ:()=>f,Nx:()=>A,rQ:()=>g,hW:()=>v,_z:()=>y,r7:()=>S,nB:()=>b,n:()=>_,Qo:()=>T,y7:()=>E,tF:()=>w,e9:()=>x,TD:()=>D});var a=i(87757),n=i.n(a),s=i(48926),r=i.n(s),o=i(20999),l=i(37802),c=function(){var t=r()(n().mark((function t(e,i,a){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.insights.chrome.auth.getUser();case 2:return t.next=4,l.Z.get(e,i,a);case 4:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}}),t)})));return function(e,i,a){return t.apply(this,arguments)}}(),m=function(t){return{type:o.lZ,payload:c(o.yE,{},t)}},u=function(t){return{type:o.nr,payload:c(o.EX,{},t)}},d=function(t){return{type:o.xu,payload:c(o.u3,{},t)}},p=function(t){return{type:o.mt,payload:c(o.Uu,{},t)}},h=function(t){return{type:o.zI,payload:c(o.x6,{},t)}},C=function(t){return{type:o.AZ,payload:c(o.cx,{},t)}},f=function(t){return{type:o.Ou,payload:c(o.JE,{},t)}},A=function(t){return{type:o.wF,payload:c(o.NG,{},t)}},g=function(t){return{type:o.Md,payload:c(o.B8,{},t)}},v=function(t,e){return{type:o.CZ,payload:Promise.all([c("".concat(o.IJ).concat(t),{},e),c("".concat(o.qp).concat(t),{},e)])}},y=function(t,e){return{type:o.D,payload:Promise.all([c("".concat(o.IJ).concat(t),{},e),c("".concat(o.qp).concat(t),{},e)])}},S=function(t){return{type:o.Re,payload:c(o.U6,{},t)}},b=function(t){return{type:o.L1,payload:c(o.XA,{},t)}},_=function(t){return{type:o.JC,payload:c(o.eG,{},t)}},T=function(t){return{type:o.aC,payload:c(o.S,{},t)}},E=function(t){return{type:o.Zv,payload:c(o.YO,{},t)}},w=function(t){return{type:o.uO,payload:t}},x=function(t){return{type:o.IY,payload:t}},D=function(t){return{type:o.Q3,payload:t}}},20999:(t,e,i)=>{"use strict";i.d(e,{Pu:()=>n,uO:()=>s,IY:()=>r,Q3:()=>o,lZ:()=>l,yE:()=>m,nr:()=>u,EX:()=>d,u3:()=>h,xu:()=>C,Uu:()=>f,mt:()=>A,zI:()=>g,x6:()=>v,_1:()=>y,cx:()=>b,AZ:()=>_,JE:()=>T,Ou:()=>E,NG:()=>w,wF:()=>x,B8:()=>D,Md:()=>G,CZ:()=>F,D:()=>I,IJ:()=>B,qp:()=>L,L1:()=>P,XA:()=>M,Re:()=>U,U6:()=>k,JC:()=>W,eG:()=>O,aC:()=>z,S:()=>J,Zv:()=>Z,YO:()=>Y,X9:()=>j,U7:()=>V});var a="/api",n="./insights",s="SELECTED_TAGS_SET",r="WORKLOADS_SET",o="SID_SET",l="COMPLIANCE_SUMMARY_FETCH",c=encodeURIComponent("(has_policy_test_results=true AND external=false) OR (has_policy=false AND has_test_results=true)"),m="".concat(a,"/compliance/profiles?search=").concat(c),u="VULNERABILITIES_FETCH",d="".concat(a).concat("/vulnerability/v1","/dashboard"),p=("".concat(a,"/vulnerability/v1/vulnerabilities/cves"),"/insights/v1"),h="".concat(a).concat(p,"/stats/rules/"),C="ADVISOR_STATS_REC_FETCH",f="".concat(a).concat(p,"/stats/systems/"),A="ADVISOR_STATS_SYSTEMS_FETCH",g="ADVISOR_INCIDENTS_FETCH",v="".concat(a,"/insights/v1/rule/?impacting=true&limit=1&incident=true"),y="patch",S="v1",b="".concat(a,"/").concat(y,"/").concat(S,"/systems"),_="PATCHMAN_SYSTEMS_FETCH",T="".concat(a,"/").concat(y,"/").concat(S,"/advisories?filter[advisory_type]=3&limit=1"),E="PATCHMAN_SECURITY_FETCH",w="".concat(a,"/").concat(y,"/").concat(S,"/advisories?filter[advisory_type]=2&limit=1"),x="PATCHMAN_BUGS_FETCH",D="".concat(a,"/").concat(y,"/").concat(S,"/advisories/?filter[advisory_type]=1&limit=1"),G="PATCHMAN_ENHANCEMENTS_FETCH",F="SUBSCRIPTIONS_UTILIZED_PRODUCT_ONE_FETCH",I="SUBSCRIPTIONS_UTILIZED_PRODUCT_TWO_FETCH",B="".concat(a,"/rhsm-subscriptions/v1/tally/products/"),L="".concat(a,"/rhsm-subscriptions/v1/capacity/products/"),N="/inventory/v1",R="per_page=1",P="INVENTORY_TOTAL_FETCH",M="".concat(a).concat(N,"/hosts?").concat(R),U="INVENTORY_FETCH",k="".concat(a).concat(N,"/hosts?registered_with=insights&").concat(R),W="INVENTORY_STALE_FETCH",O="".concat(a).concat(N,"/hosts?staleness=stale&registered_with=insights&").concat(R),z="INVENTORY_WARNING_FETCH",J="".concat(a).concat(N,"/hosts?staleness=stale_warning&registered_with=insights&").concat(R),H="/remediations/v1",Z="REMEDIATIONS_FETCH",Y="".concat(a).concat(H,"/remediations?sort=-updated_at&limit=4&offset=0"),j="".concat(a).concat(H,"/remediations/"),V="".concat(a,"/inventory/v1/system_profile/sap_system")},82141:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var a=i(97522),n=i.n(a),s=i(56455);const r=function(){return n().createElement(n().Fragment,null,n().createElement(s.Z,{size:"md"}),n().createElement("br",null),n().createElement(s.Z,{size:"md"}))}},51066:(t,e,i)=>{"use strict";i.d(e,{S1:()=>p});var a,n=i(20999),s=i(33042),r=i.n(s),o=r()({complianceSummary:{},complianceFetchStatus:"",vulnerabilities:{},vulnerabilitiesFetchStatus:"",advisorStatsRecs:{},advisorStatsRecsStatus:"",advisorStatsSystems:{},advisorStatsSystemsStatus:"",advisorIncidents:{},advisorIncidentsStatus:"",patchmanSystems:{},patchmanSystemsStatus:"",patchmanSecurity:{},patchmanSecurityStatus:"",patchmanBugs:{},patchmanBugsStatus:"",patchmanEnhancements:{},patchmanEnhancementsStatus:"",subscriptionsUtilizedProductOne:[],subscriptionsUtilizedProductOneFetchStatus:"",subscriptionsUtilizedProductTwo:[],subscriptionsUtilizedProductTwoFetchStatus:"",inventorySummary:{},inventoryFetchStatus:"",inventoryStaleSummary:{},inventoryStaleFetchStatus:"",inventoryWarningSummary:{},inventoryWarningFetchStatus:"",inventoryTotalSummary:{},inventoryTotalFetchStatus:"",remediations:{},remediationsFetchStatus:"",selectedTags:[],workloads:{},SID:{}}),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.uO:return r().merge(t,{selectedTags:e.payload});case n.IY:return r().merge(t,{workloads:e.payload});case n.Q3:return r().merge(t,{SID:e.payload});case"".concat(n.lZ,"_PENDING"):return t.set("complianceFetchStatus","pending");case"".concat(n.lZ,"_FULFILLED"):return r().merge(t,{complianceSummary:e.payload,complianceFetchStatus:"fulfilled"});case"".concat(n.lZ,"_REJECTED"):return t.set("complianceFetchStatus","rejected");case"".concat(n.nr,"_PENDING"):return t.set("vulnerabilitiesFetchStatus","pending");case"".concat(n.nr,"_FULFILLED"):return r().merge(t,{vulnerabilities:e.payload,vulnerabilitiesFetchStatus:"fulfilled"});case"".concat(n.nr,"_REJECTED"):return t.set("vulnerabilitiesFetchStatus","rejected");case"".concat(n.xu,"_PENDING"):return t.set("advisorStatsRecsStatus","pending");case"".concat(n.xu,"_FULFILLED"):return r().merge(t,{advisorStatsRecs:e.payload,advisorStatsRecsStatus:"fulfilled"});case"".concat(n.xu,"_REJECTED"):return t.set("advisorStatsRecsStatus","rejected");case"".concat(n.mt,"_PENDING"):return t.set("advisorStatsSystemsStatus","pending");case"".concat(n.mt,"_FULFILLED"):return r().merge(t,{advisorStatsSystems:e.payload,advisorStatsSystemsStatus:"fulfilled"});case"".concat(n.mt,"_REJECTED"):return t.set("advisorStatsSystemsStatus","rejected");case"".concat(n.zI,"_PENDING"):return t.set("advisorIncidentsStatus","pending");case"".concat(n.zI,"_FULFILLED"):return r().merge(t,{advisorIncidents:e.payload,advisorIncidentsStatus:"fulfilled"});case"".concat(n.zI,"_REJECTED"):return t.set("advisorIncidentsStatus","rejected");case"".concat(n.AZ,"_PENDING"):return t.set("patchmanSystemsStatus","pending");case"".concat(n.AZ,"_FULFILLED"):return r().merge(t,{patchmanSystems:e.payload.meta.total_items,patchmanSystemsStatus:"fulfilled"});case"".concat(n.AZ,"_REJECTED"):return t.set("patchmanSystemsStatus","rejected");case"".concat(n.Ou,"_PENDING"):return t.set("patchmanSecurityStatus","pending");case"".concat(n.Ou,"_FULFILLED"):return r().merge(t,{patchmanSecurity:e.payload.meta.total_items,patchmanSecurityStatus:"fulfilled"});case"".concat(n.Ou,"_REJECTED"):return t.set("patchmanBugsStatus","rejected");case"".concat(n.wF,"_PENDING"):return t.set("patchmanBugsStatus","pending");case"".concat(n.wF,"_FULFILLED"):return r().merge(t,{patchmanBugs:e.payload.meta.total_items,patchmanBugsStatus:"fulfilled"});case"".concat(n.wF,"_REJECTED"):return t.set("patchmanBugsStatus","rejected");case"".concat(n.Md,"_PENDING"):return t.set("patchmanEnhancementsStatus","pending");case"".concat(n.Md,"_FULFILLED"):return r().merge(t,{patchmanEnhancements:e.payload.meta.total_items,patchmanEnhancementsStatus:"fulfilled"});case"".concat(n.Md,"_REJECTED"):return t.set("patchmanEnhancementsStatus","rejected");case"".concat(n.CZ,"_PENDING"):return t.set("subscriptionsUtilizedProductOneFetchStatus","pending");case"".concat(n.CZ,"_FULFILLED"):return r().merge(t,{subscriptionsUtilizedProductOne:e.payload,subscriptionsUtilizedProductOneFetchStatus:"fulfilled"});case"".concat(n.CZ,"_REJECTED"):return r().merge(t,{subscriptionsUtilizedProductOne:e.payload.response,subscriptionsUtilizedProductOneFetchStatus:"rejected"});case"".concat(n.D,"_PENDING"):return t.set("subscriptionsUtilizedProductTwoFetchStatus","pending");case"".concat(n.D,"_FULFILLED"):return r().merge(t,{subscriptionsUtilizedProductTwo:e.payload,subscriptionsUtilizedProductTwoFetchStatus:"fulfilled"});case"".concat(n.D,"_REJECTED"):return r().merge(t,{subscriptionsUtilizedProductTwo:e.payload.response,subscriptionsUtilizedProductTwoFetchStatus:"rejected"});case"".concat(n.Re,"_PENDING"):return t.set("inventoryFetchStatus","pending");case"".concat(n.Re,"_FULFILLED"):return r().merge(t,{inventorySummary:e.payload,inventoryFetchStatus:"fulfilled"});case"".concat(n.Re,"_REJECTED"):return t.set("inventoryFetchStatus","rejected");case"".concat(n.JC,"_PENDING"):return t.set("inventoryStaleFetchStatus","pending");case"".concat(n.JC,"_FULFILLED"):return r().merge(t,{inventoryStaleSummary:e.payload,inventoryStaleFetchStatus:"fulfilled"});case"".concat(n.JC,"_REJECTED"):return t.set("inventoryStaleFetchStatus","rejected");case"".concat(n.aC,"_PENDING"):return t.set("inventoryWarningFetchStatus","pending");case"".concat(n.aC,"_FULFILLED"):return r().merge(t,{inventoryWarningSummary:e.payload,inventoryWarningFetchStatus:"fulfilled"});case"".concat(n.aC,"_REJECTED"):return t.set("inventoryWarningFetchStatus","rejected");case"".concat(n.L1,"_PENDING"):return t.set("inventoryTotalFetchStatus","pending");case"".concat(n.L1,"_FULFILLED"):return r().merge(t,{inventoryTotalSummary:e.payload,inventoryTotalFetchStatus:"fulfilled"});case"".concat(n.L1,"_REJECTED"):return t.set("inventoryTotalFetchStatus","rejected");case"".concat(n.Zv,"_PENDING"):return t.set("remediationsFetchStatus","pending");case"".concat(n.Zv,"_FULFILLED"):return r().merge(t,{remediations:e.payload,remediationsFetchStatus:"fulfilled"});case"".concat(n.Zv,"_REJECTED"):return t.set("remediationsFetchStatus","rejected");default:return t}},c=i(49381),m=i(8738),u=i(61553),d=i.n(u),p=function(){for(var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.compose,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return(a=(0,m.JH)({},[].concat(i,[d()]),t)).register({DashboardStore:l}),a}},37802:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var a=i(80129),n=i.n(a),s=i(66191),r=i.n(s);r().defaults.headers.common={"x-rh-insights-use-path-prefix":1};const o={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r().get(t,{headers:e,params:i,paramsSerializer:function(t){return n().stringify(t,{arrayFormat:"repeat"})}})},put:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r().put(t,e,{headers:i})},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r().post(t,e,{headers:i})}}},14154:(t,e,i)=>{"use strict";var a=i(93379),n=i.n(a),s=i(67073),r=n()(s.default,{insert:"head",singleton:!1});if(!s.default.locals||t.hot.invalidate){var o=s.default.locals;t.hot.accept(67073,(e=>{s=i(67073),function(t,e,i){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(o,s.default.locals)?(o=s.default.locals,r(s.default)):t.hot.invalidate()}))}t.hot.dispose((function(){r()})),s.default.locals},81481:(t,e,i)=>{"use strict";var a=i(93379),n=i.n(a),s=i(36598),r=n()(s.default,{insert:"head",singleton:!1});if(!s.default.locals||t.hot.invalidate){var o=s.default.locals;t.hot.accept(36598,(e=>{s=i(36598),function(t,e,i){if(!t&&e||t&&!e)return!1;var a;for(a in t)if(t[a]!==e[a])return!1;for(a in e)if(!t[a])return!1;return!0}(o,s.default.locals)?(o=s.default.locals,r(s.default)):t.hot.invalidate()}))}t.hot.dispose((function(){r()})),s.default.locals}}]);
//# sourceMappingURL=3830.342be3fd3656f4281c5a.js.map