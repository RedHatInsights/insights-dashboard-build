(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1017:function(e,a,t){var s=t(6),i=t(788);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1},r=s(i,n);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(788,(function(){"string"==typeof(i=(i=t(788)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,r(i)):e.hot.invalidate()}))}e.hot.dispose((function(){r()})),e.exports=i.locals||{}},1018:function(e,a,t){var s=t(6),i=t(789);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1},r=s(i,n);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(789,(function(){"string"==typeof(i=(i=t(789)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,r(i)):e.hot.invalidate()}))}e.hot.dispose((function(){r()})),e.exports=i.locals||{}},1019:function(e,a,t){var s=t(6),i=t(790);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1},r=s(i,n);if(!i.locals||e.hot.invalidate){var o=i.locals;e.hot.accept(790,(function(){"string"==typeof(i=(i=t(790)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(o,i.locals)?(o=i.locals,r(i)):e.hot.invalidate()}))}e.hot.dispose((function(){r()})),e.exports=i.locals||{}},1124:function(e,a,t){"use strict";t.r(a);t(1017);var s=t(1),i=t.n(s),n=t(0),r=t.n(n),o=t(630),l=t(123),d=t(629),c=t(354),u=t(671),m=(t(1018),function(e){var a=e.appName,t=Object(c.a)();return i.a.createElement(o.Card,{className:"ins-c-dashboard__card"},i.a.createElement(d.EmptyState,{variant:d.EmptyStateVariant.full,className:"ins-c-dashboard__denied-state"},i.a.createElement(l.Title,{headingLevel:"h2",size:"md"}," ",t.formatMessage(u.a.deniedStateTitle,{appName:a})," "),i.a.createElement(d.EmptyStateBody,{className:"ins-c-dashboard__denied-state--body"},t.formatMessage(u.a.deniedStateBody))))});m.propTypes={appName:r.a.string};var p=m,f=t(409),g=t(725),b=t(337),h=t(645),y=t(94),v=t(414),E=t(415),S=t(644),M=t.n(S),T=(t(1019),function(){var e=Object(c.a)();return i.a.createElement(b.Main,null,i.a.createElement(d.EmptyState,{variant:d.EmptyStateVariant.small,className:"ins-c-no-systems"},i.a.createElement(d.EmptyStateIcon,{icon:M.a}),i.a.createElement(l.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(u.a.noSystemsTitle)),i.a.createElement(d.EmptyStateBody,null,i.a.createElement(v.Stack,{gutter:"md"},i.a.createElement(E.StackItem,null,e.formatMessage(u.a.noSystemsDescription)),i.a.createElement(E.StackItem,null,i.a.createElement("span",{className:"ins-c-no-systems__helper"},"1. ",e.formatMessage(u.a.noSystemsInstall)),i.a.createElement(h.ClipboardCopy,null,"yum install insights-client")),i.a.createElement(E.StackItem,null,i.a.createElement("span",{className:"ins-c-no-systems__helper"},"2. ",e.formatMessage(u.a.noSystemsRegister)),i.a.createElement(h.ClipboardCopy,null,"insights-client --register")))),i.a.createElement(y.Button,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"primary"},e.formatMessage(u.a.noSystemsLink))))}),x=t(646),w=t(383),z=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4),t.e(16)]).then(t.bind(null,1129))})),N=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(1),t.e(3),t.e(11)]).then(t.bind(null,1118))})),_=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4),t.e(15)]).then(t.bind(null,1125))})),P=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(17)]).then(t.bind(null,1119))})),k=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(10),t.e(4),t.e(18)]).then(t.bind(null,1123))})),I=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(12),t.e(14)]).then(t.bind(null,1120))})),C=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(1),t.e(5),t.e(13)]).then(t.bind(null,1122))}));a.default=function(){var e=Object(s.useContext)(w.a),a=Object(c.a)();return e.hasSystems?i.a.createElement(i.a.Fragment,null,i.a.createElement(x.PageSection,null,i.a.createElement(l.Title,{headingLevel:"h1",size:"2xl"},a.formatMessage(u.a.dashboardTitle))),i.a.createElement(b.Main,{className:"ins-l-dashboard"},i.a.createElement("div",{className:"dashboard-card-group"},i.a.createElement("div",{className:"dashboard-card-system-inventory"},i.a.createElement(s.Suspense,{fallback:i.a.createElement(g.a,null)},i.a.createElement(P,null))),i.a.createElement("div",{className:"dashboard-card-entitlements"},i.a.createElement(s.Suspense,{fallback:i.a.createElement(g.a,null)},e.subscriptions?i.a.createElement(k,null):i.a.createElement(p,{appName:"Subscription Watch"}))),i.a.createElement("div",{className:"dashboard-card-operating-systems"},i.a.createElement(s.Suspense,{fallback:i.a.createElement(g.a,null)},e.patch?i.a.createElement(I,null):i.a.createElement(p,{appName:"Patch"})))),i.a.createElement("div",{className:"dashboard-card-rules"},i.a.createElement(s.Suspense,{fallback:i.a.createElement(g.a,null)},e.advisor?i.a.createElement(z,null):i.a.createElement(p,{appName:"Advisor"}))),i.a.createElement("div",{className:"dashboard-card-vulnerabilities"},i.a.createElement(s.Suspense,{fallback:i.a.createElement(g.a,null)},e.vulnerability?i.a.createElement(_,null):i.a.createElement(p,{appName:"Vulnerability"}))),i.a.createElement("div",{className:"dashboard-card-compliance-remediations"},i.a.createElement(s.Suspense,{fallback:i.a.createElement(g.a,null)},e.compliance?i.a.createElement(N,null):i.a.createElement(p,{appName:"Compliance"})),i.a.createElement(f.Divider,null),i.a.createElement(s.Suspense,{fallback:i.a.createElement(g.a,null)},e.remediations?i.a.createElement(C,null):i.a.createElement(p,{appName:"Remediations"}))))):i.a.createElement(T,null)}},671:function(e,a,t){"use strict";var s=t(405);a.a=Object(s.defineMessages)({dashboardTitle:{id:"dashboardTitle",defaultMessage:"Dashboard"},subscriptionsUtilizedTitle:{id:"subscriptionsUtilizedTitle",defaultMessage:"Subscription Watch utilization summary"},subscriptionsUtilizedLearnMore:{id:"subscriptionsUtilizedLearnMore",defaultMessage:"Activate Subscription Watch to monitor your subscription utilization."},subscriptionsUtilizedLearnMoreAction:{id:"subscriptionsUtilizedLearnMoreAction",defaultMessage:"Learn about Subscription Watch"},subscriptionsUtilizedNoProductData:{id:"subscriptionsUtilizedNoProductData",defaultMessage:"No data available"},subscriptionsUtilizedProductOneTitle:{id:"subscriptionsUtilizedProductOneTitle",defaultMessage:"Red Hat OpenShift"},subscriptionsUtilizedProductOneReport:{id:"subscriptionsUtilizedProductOneDesc",defaultMessage:"OpenShift cores: {totalReport}"},subscriptionsUtilizedProductTwoTitle:{id:"subscriptionsUtilizedProductTwoTitle",defaultMessage:"Red Hat Enterprise Linux"},subscriptionsUtilizedProductTwoReport:{id:"subscriptionsUtilizedProductTwoTitleDesc",defaultMessage:"RHEL sockets: {totalReport}"},subscriptionsUtilizedProductCapacity:{id:"subscriptionsUtilizedProductCapacity",defaultMessage:"Subscription threshold: {totalCapacity}"},subscriptionsUtilizedProductDate:{id:"subscriptionsUtilizedProductDate",defaultMessage:"Data from: {formattedDate}"},recsImpactingSystems:{id:"recsImpactingSystems",defaultMessage:"{totalRecs, plural, one {# Recommendation} other {# Recommendations}}  impacting {systems, plural, one {# system} other {# systems}}"},incidentsDetected:{id:"incidentsDetected",defaultMessage:"{incidents, plural, one {Incident} other {Incidents}} detected"},critical:{id:"critical",defaultMessage:"Critical"},important:{id:"important",defaultMessage:"important"},moderate:{id:"moderate",defaultMessage:"moderate"},low:{id:"low",defaultMessage:"low"},compliantHostCount:{id:"compliantHostCount",defaultMessage:"{count, plural, one {# system} other {# systems}}"},compliantScore:{id:"compliantScore",defaultMessage:"{score}% compliant"},vulnerabilitiesTitle:{id:"vulnerabilitiesTitle",defaultMessage:"Vulnerability"},vulnerabilitiesTotalItems:{id:"vulnerabilitiesTotalItems",defaultMessage:"{total}"},lastxdays:{id:"lastxdays",defaultMessage:"Last {days} days"},cvesImpactingSystems:{id:"cvesImpactingSystems",defaultMessage:"{cves, plural, one {CVE} other {CVEs}} impacting your systems"},vulnerabilityLearnMore:{id:"vulnerabilityLearnMore",defaultMessage:"Learn about CVSS Scores"},latestVulnerabilitiesTotal:{id:"latestVulnerabilitiesTotal",defaultMessage:"{totalLatest}"},deniedStateTitle:{id:"deniedStateTitle",defaultMessage:"You do not have access to {appName}"},deniedStateBody:{id:"deniedStateBody",defaultMessage:"Contact your organization administrator(s) for more information"},complianceEmptyStateTitle:{id:"complianceEmptyStateTitle",defaultMessage:"No policies"},complianceEmptyStateBody:{id:"complianceEmptyStateBody",defaultMessage:"The compliance service uses OpenSCAP policies to track your organization's adherence to compliance requirements"},complianceEmptyStateAction1:{id:"complianceEmptyStateAction1",defaultMessage:"Create a policy"},complianceEmptyStateAction2:{id:"complianceEmptyStateAction2",defaultMessage:"Learn about OpenSCAP"},securityAdvisories:{id:"securityAdvisories",defaultMessage:"{count, plural, one {security advisory} other {security advisories}}"},bugfixAdvisories:{id:"bugfixAdvisories",defaultMessage:"{count, plural, one {bug fix} other {bug fixes}}"},enhancementAdvisories:{id:"enhancementAdvisories",defaultMessage:"{count, plural, one {enhancement} other {enhancements}}"},systemsAffected:{id:"systemsAffected",defaultMessage:"{count, plural, one {# system} other {# systems}} affected"},patchTitle:{id:"patchTitle",defaultMessage:"Patch"},systemInventoryDescription:{id:"systemInventoryDescription",defaultMessage:"{count, plural, one {System} other {Systems}} running insights-client"},systemInventoryStaleWarning:{id:"systemInventoryStaleWarning",defaultMessage:"{count, plural, one {# system} other {# systems}} to be removed"},systemInventoryStale:{id:"systemInventoryStale",defaultMessage:"{count, plural, one {# stale system} other {# stale systems}}"},systemInventoryPercentageData:{id:"systemInventoryPercentageData",defaultMessage:"{count}% of total systems"},systemInventoryTitle:{id:"systemInventoryTitle",defaultMessage:"Insights system inventory"},systemInventoryNotUsingClient:{id:"systemInventoryNotUsingClient",defaultMessage:"{count, plural, one {# additional system} other {# additional systems}} not running insights-client        are not taking advantage of Red Hat Insights capabilities."},remediationsTotal:{id:"remediationsTotal",defaultMessage:"{total} more remediations"},remediationsPlaybookStatus:{id:"remediationsPlaybookStatus",defaultMessage:"{status}"},remediationsPlaybookNoActivity:{id:"remediationsPlaybookNoActivity",defaultMessage:"No activity"},remediationsPlaybookFailure:{id:"remediationsNoActivity",defaultMessage:"Failure"},remediationsNoDataTitle:{id:"remediationsNoDataTitle",defaultMessage:"You haven't created any remediation Playbooks yet"},remediationsNoDataBody:{id:"remediationsNoDataBody",defaultMessage:"Create an Ansible Playbook to remediate or mitigate vulnerabilities or configuration issues."},errorStateTitle:{id:"errorStateTitle",defaultMessage:"{appName} has experienced an error. Contact Red Hat support if the problem persists."},noSystemsTitle:{id:"noSystemsTitle",defaultMessage:"Get started with Red Hat Insights"},noSystemsDescription:{id:"noSystemsDescription",defaultMessage:"With predictive analytics, avoid problems and unplanned                        downtime in your Red Hat environment. Red Hat Insights is                        included with your Red Hat Enterprise Linux subscription."},noSystemsInstall:{id:"noSystemsInstall",defaultMessage:"Install the client on the RHEL system"},noSystemsRegister:{id:"noSystemsRegister",defaultMessage:"Register the system to Red Hat Insights"},noSystemsLink:{id:"noSystemsLink",defaultMessage:"Getting started documentation"},advisorChartDescription:{id:"advisorChartDescription",defaultMessage:"This chart shows recommendations effecting your system"}})},725:function(e,a,t){"use strict";var s=t(1),i=t.n(s),n=t(643);a.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.Skeleton,{size:"md"}),i.a.createElement("br",null),i.a.createElement(n.Skeleton,{size:"md"}))}},788:function(e,a,t){(a=t(5)(!1)).push([e.i,'.pf-c-button.pf-m-link{text-align:left;font-size:14px}.ins-l-dashboard{display:grid;grid-gap:24px;grid-template-columns:minmax(0, 1fr);grid-template-rows:auto}.ins-l-dashboard>*:not(.dashboard-card-group){background-color:#fff}.ins-l-dashboard .dashboard-card-group{display:grid;grid-row:1}.ins-l-dashboard .dashboard-card-group>*{background-color:#fff}.ins-l-dashboard .dashboard-card-group>*:not(:last-child){border-bottom:1px solid var(--pf-global--BorderColor--100)}.ins-l-dashboard .dashboard-card-group .dashboard-card-system-inventory{grid-column:1}.ins-l-dashboard .dashboard-card-group .dashboard-card-entitlements{grid-column:1;grid-row:2}.ins-l-dashboard .dashboard-card-group .dashboard-card-operating-systems{grid-column:1;grid-row:3}.ins-l-dashboard .dashboard-card-group>*>.pf-c-card{position:relative}.ins-l-dashboard .dashboard-card-group>*>.pf-c-card::before{position:absolute;content:"";top:0;right:0;bottom:0;left:0;border-top:0px}.ins-l-dashboard .dashboard-card-group>*:first-child .pf-c-card::before{border-top:3px solid var(--pf-global--primary-color--100)}.ins-l-dashboard .dashboard-card-rules{grid-column:1;grid-row:1fr}.ins-l-dashboard .dashboard-card-vulnerabilities{grid-column:1;grid-row:1fr}.ins-l-dashboard .dashboard-card-custom-policies{grid-column:1;grid-row:5}.ins-l-dashboard .dashboard-card-compliance-remediations{grid-column:1;grid-row:4}@media screen and (min-width: 1200px){.ins-l-dashboard{grid-template-columns:1fr 1fr 1fr}.ins-l-dashboard .dashboard-card-group{grid-column:1 / span 3;grid-row:1;column-gap:24px;grid-template-columns:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)}.ins-l-dashboard .dashboard-card-group>*:not(:last-child){border-bottom:initial}.ins-l-dashboard .dashboard-card-group .dashboard-card-system-inventory{grid-column:1 / span 1;grid-row:1}.ins-l-dashboard .dashboard-card-group .dashboard-card-entitlements{grid-column:2 / span 1;grid-row:1}.ins-l-dashboard .dashboard-card-group .dashboard-card-operating-systems{grid-column:3 / span 1;grid-row:1}.ins-l-dashboard .dashboard-card-group>*>.pf-c-card::before{border-top:3px solid var(--pf-global--primary-color--100)}.ins-l-dashboard .dashboard-card-rules{grid-column:1 / span 2;grid-row:2}.ins-l-dashboard .dashboard-card-vulnerabilities{grid-column:1 / span 2;grid-row:3}.ins-l-dashboard .dashboard-card-custom-policies{grid-column:1 / span 2;grid-row:4}.ins-l-dashboard .dashboard-card-compliance-remediations{display:flex;flex-direction:column;grid-column:3;grid-row:2 / span 2}.ins-l-dashboard .dashboard-card-compliance-remediations .pf-c-card{flex-grow:1}.ins-l-dashboard .dashboard-card-rules-vulnerabilities{display:flex;flex-direction:column}.ins-l-dashboard .dashboard-card-rules-vulnerabilities .pf-c-card{flex-grow:1}.ins-l-dashboard div:not(.dashboard-card-compliance-remediations)>.pf-c-card{height:100%}}@media screen and (min-width: 576px){.pf-c-page__main-section:first-child{padding-bottom:0px}}@media screen and (max-width: 576px){.pf-c-page__main-section:last-child{padding:0px}}\n',""]),e.exports=a},789:function(e,a,t){(a=t(5)(!1)).push([e.i,".ins-c-dashboard__denied-state svg{height:var(--pf-global--icon--FontSize--lg)}.ins-c-dashboard__denied-state--body{font-size:var(--pf-global--FontSize--sm)}\n",""]),e.exports=a},790:function(e,a,t){(a=t(5)(!1)).push([e.i,".ins-c-no-systems{margin-left:auto;margin-right:auto;margin-top:var(--pf-global--spacer--2xl)}.ins-c-no-systems .pf-c-empty-state__icon{fill:var(--pf-global--primary-color--100);height:1.5em;width:1.5em}.ins-c-no-systems .pf-c-empty-state__body .pf-l-stack{color:var(--pf-c-empty-state__body--Color)}.ins-c-no-systems .pf-c-form-control,.ins-c-no-systems .pf-c-clipboard-copy__group{background:white}\n",""]),e.exports=a}}]);
//# sourceMappingURL=Dashboard.js.map