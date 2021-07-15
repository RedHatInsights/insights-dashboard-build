(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[430],{30893:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});const s=(0,i(50049).vU)({dashboardTitle:{id:"dashboardTitle",description:"Title of the dashboard",defaultMessage:"Dashboard"},newRulesDateTitle:{id:"newRulesDateTitle",description:"New rules date title",defaultMessage:"Newly released security rule"},subscriptionsUtilizedTitle:{id:"subscriptionsUtilizedTitle",description:"Title of the subscriptions utilized card",defaultMessage:"Subscription Watch utilization summary"},subscriptionsTitle:{id:"subscriptionsTitle",description:"Title of the subscriptions utilized card",defaultMessage:"Subscription Watch"},subscriptionsUtilizedLearnMore:{id:"subscriptionsUtilizedLearnMore",description:"Subscriptions utilized card - learn more description",defaultMessage:"Activate Subscription Watch to monitor your subscription utilization."},subscriptionsUtilizedLearnMoreAction:{id:"subscriptionsUtilizedLearnMoreAction",description:"Subscriptions utilized card - learn more action",defaultMessage:"Learn about Subscription Watch"},subscriptionsUtilizedNoProductData:{id:"subscriptionsUtilizedNoProductData",description:"Subscriptions utilized card - no data",defaultMessage:"No data available"},subscriptionsUtilizedProductOneTitle:{id:"subscriptionsUtilizedProductOneTitle",description:"Subscriptions utilized card - product one title",defaultMessage:"OpenShift"},subscriptionsUtilizedProductOneReport:{id:"subscriptionsUtilizedProductOneDesc",description:"Subscriptions utilized card - product one report total",defaultMessage:"OpenShift cores: {totalReport}"},subscriptionsUtilizedProductTwoTitle:{id:"subscriptionsUtilizedProductTwoTitle",description:"Subscriptions utilized card - product two title",defaultMessage:"Red Hat Enterprise Linux"},subscriptionsUtilizedProductTwoReport:{id:"subscriptionsUtilizedProductTwoTitleDesc",description:"Subscriptions utilized card - product two report total",defaultMessage:"RHEL sockets: {totalReport}"},subscriptionsUtilizedProductCapacity:{id:"subscriptionsUtilizedProductCapacity",description:"Subscriptions utilized card - product capacity",defaultMessage:"Subscription threshold: {totalCapacity}"},subscriptionsUtilizedProductDate:{id:"subscriptionsUtilizedProductDate",description:"Subscriptions utilized card - product date",defaultMessage:"Data from: {formattedDate}"},recsImpactingSystems:{id:"recsImpactingSystems",description:"Advisor - recs impacting systems",defaultMessage:"{totalRecs, plural, one {# Recommendation} other {# Recommendations}}  impacting {systems, plural, one {# system} other {# systems}}"},incidents:{id:"incidents",description:"Advisor - incidents ",defaultMessage:"{incidents, plural, one {# incident} other {# incidents}} detected"},critical:{id:"critical",description:"Critical",defaultMessage:"Critical"},important:{id:"important",description:"Important",defaultMessage:"Important"},moderate:{id:"moderate",description:"Moderate",defaultMessage:"Moderate"},low:{id:"low",description:"Low",defaultMessage:"Low"},compliantHostCount:{id:"compliantHostCount",description:"Compliance - compliant host count",defaultMessage:"{count, plural, one {# system} other {# systems}}"},compliantScore:{id:"compliantScore",description:"Compliance - compliant score",defaultMessage:"{score}% compliant"},vulnerabilitiesTitle:{id:"vulnerabilitiesTitle",description:"Vulnerability card header",defaultMessage:"Vulnerability"},cveByCvssScoreTitle:{id:"cveByCvssScoreTitle",description:"CVE by cvss score card header",defaultMessage:"CVEs by CVSS score"},complianceTitle:{id:"complianceTitle",description:"Compliance card header",defaultMessage:"Compliance"},lastxdays:{id:"lastxdays",description:"Last x days label where x is a predefined value",defaultMessage:"Last {days} days"},cvesImpactingSystems:{id:"cvesImpactingSystems",description:"Vulnerability - cve impacting link",defaultMessage:"{cves, plural, one {CVE} other {CVEs}} impacting your systems"},cvesImpactingOneOrMoreSystems:{id:"cvesImpactingOneOrMoreSystems",description:"Vulnerability - cve impacting link",defaultMessage:"{cves, plural, one {CVE} other {CVEs}} with <strong>security rules</strong> impacting 1 or more systems"},knownExploitsOneOrMoreSystems:{id:"knownExploitsOneOrMoreSystems",description:"Vulnerability - known exploits link",defaultMessage:"{cves, plural, one {CVE} other {CVEs}} with <strong>known exploits</strong> impacting 1 or more systems<tooltip></tooltip>"},vulnerabilityMessage:{id:"vulnerabilityMessage",description:"Vulnerability message",defaultMessage:"Red Hat recommends addressing these CVEs with high priority due to heightened risk associated with these security issues"},vulnerabilityCardCTAText:{id:"vulnerabilityCardCTAText",description:"Vulnerability card cta text",defaultMessage:"View CVEs"},vulnerabilityCardKnownExploitsCTAText:{id:"vulnerabilityCardKnownExploitsCTAText",description:"Vulnerability card known exploits cta text",defaultMessage:"View known exploits"},vulnerabilityLearnMore:{id:"vulnerabilityLearnMore",description:"Vulnerability - learn more link",defaultMessage:"Learn about CVSS Scores"},latestVulnerabilitiesTotal:{id:"latestVulnerabilitiesTotal",description:"Vulnerabilities - latest vulnerabilities",defaultMessage:"{totalLatest}"},deniedStateTitle:{id:"deniedStateTitle",description:"Denied state title",defaultMessage:"You do not have access to {appName}"},deniedStateBody:{id:"deniedStateBody",description:"Denied access body",defaultMessage:"Contact your organization administrator(s) for more information"},complianceEmptyStateTitle:{id:"complianceEmptyStateTitle",description:"Compliance - empty state title",defaultMessage:"No policies"},complianceEmptyStateBody:{id:"complianceEmptyStateBody",description:"Compliance - empty state body",defaultMessage:"The compliance service uses OpenSCAP policies to track your organization's adherence to compliance requirements"},complianceEmptyStateAction1:{id:"complianceEmptyStateAction1",description:"Compliance - empty state action 1",defaultMessage:"Create a policy"},complianceEmptyStateAction2:{id:"complianceEmptyStateAction2",description:"Compliance - empty state action 2",defaultMessage:"Learn about OpenSCAP"},securityAdvisories:{id:"securityAdvisories",description:"Patch - security advisories",defaultMessage:"{count, plural, one {security advisory} other {security advisories}}"},bugfixAdvisories:{id:"bugfixAdvisories",description:"Patch - bugfix advisories",defaultMessage:"{count, plural, one {bug fix} other {bug fixes}}"},enhancementAdvisories:{id:"enhancementAdvisories",description:"Patch - enhancement advisories",defaultMessage:"{count, plural, one {enhancement} other {enhancements}}"},systemsAffected:{id:"systemsAffected",description:"Patch - systems affected",defaultMessage:"{count, plural, one {# system} other {# systems}} affected"},patchTitle:{id:"patchTitle",description:"Patch - title",defaultMessage:"Patch"},systemInventoryDescription:{id:"systemInventoryDescription",description:"System inventory - description",defaultMessage:"{count, plural, one {System} other {Systems}} running insights-client"},systemInventoryUnregisteredDescription:{id:"systemInventoryUnregisteredDescription",description:"System unregistered - description",defaultMessage:"{count, plural, one {System} other {Systems}} unregistered"},systemInventoryStaleWarning:{id:"systemInventoryStaleWarning",description:"System inventory - stale warning",defaultMessage:"{count, plural, one {# system} other {# systems}} to be removed"},systemInventoryStale:{id:"systemInventoryStale",description:"System inventory - stale",defaultMessage:"{count, plural, one {# stale system} other {# stale systems}}"},systemInventoryCTA:{id:"systemInventoryCTA",description:"System inventory - cta",defaultMessage:"Register systems"},systemInventoryPercentageData:{id:"systemInventoryPercentageData",description:"System Inventory - percentage data",defaultMessage:"{count}% of total systems"},systemInventoryTitle:{id:"systemInventoryTitle",description:"System Inventory - title",defaultMessage:"Insights system inventory"},systemInventoryNotUsingClient:{id:"systemInventoryNotUsingClient",description:"Number of systems not running insights client",defaultMessage:"{count, plural, one {# additional system} other {# additional systems}} not running insights-client        are not taking advantage of Insights capabilities."},systemInventoryNoAccess:{id:"systemInventoryNoAccess",description:"User has no access to read inventory systems",defaultMessage:"Your organization administrator must grant you inventory access to view your systems."},remediationsTotal:{id:"remediationsTotal",description:"Remediations - remediations total",defaultMessage:"{total} more remediations"},remediationsPlaybookStatus:{id:"remediationsPlaybookStatus",description:"Remediations playbook - status",defaultMessage:"{status}"},remediationsPlaybookNoActivity:{id:"remediationsPlaybookNoActivity",description:"Remediations playbook - no activity",defaultMessage:"No activity"},remediationsPlaybookFailure:{id:"remediationsNoActivity",description:"Remediations playbook - failed getting data",defaultMessage:"Failure"},remediationsNoDataTitle:{id:"remediationsNoDataTitle",description:"No remediations",defaultMessage:"You haven't created any remediation Playbooks yet"},remediationsNoDataBody:{id:"remediationsNoDataBody",description:"Create a playbook to see remediations",defaultMessage:"Create an Ansible Playbook to remediate or mitigate vulnerabilities or configuration issues."},errorStateTitle:{id:"errorStateTitle",description:"Error fetching API",defaultMessage:"{appName} has experienced an error. Contact Red Hat support if the problem persists."},noSystemsTitle:{id:"noSystemsTitle",description:"No systems",defaultMessage:"Get started with Insights"},noSystemsDescription:{id:"noSystemsDescription",description:"Register systems to use Insights",defaultMessage:"With predictive analytics, avoid problems and unplanned                        downtime in your Red Hat environment. Insights is                        included with your Red Hat Enterprise Linux subscription."},noSystemsInstall:{id:"noSystemsInstall",description:"Install the client",defaultMessage:"Install the client on the RHEL system"},noSystemsRegister:{id:"noSystemsRegister",description:"Register systems",defaultMessage:"Register the system to Insights"},noSystemsLink:{id:"noSystemsLink",description:"Getting started documentation",defaultMessage:"Getting started documentation"},advisorChartDescription:{id:"advisorChartDescription",description:"Advisor chart description",defaultMessage:"This chart shows recommendations effecting your system"},registerYourSystems:{id:"registerYourSystems",description:"Register your systems",defaultMessage:"Register your systems"},recommendations:{id:"recommendations",description:"Recommendations",defaultMessage:"recommendations"},inAdvisor:{id:"inAdvisor",description:"in Advisor",defaultMessage:"in Advisor"},totalRisk:{id:"totalRisk",description:"Total risk",defaultMessage:"Total risk"},category:{id:"category",description:"Category",defaultMessage:"Category"},availability:{id:"availability",description:"Category chart value",defaultMessage:"Availability"},performance:{id:"performance",description:"Category chart  value",defaultMessage:"Performance"},stability:{id:"stability",description:"Category chart  value",defaultMessage:"Stability"},security:{id:"security",description:"Category chart  value",defaultMessage:"Security"},totalRiskDef:{id:"totalRiskDef",description:"Total risk definition",defaultMessage:"A value derived from the <em>likelihood</em> that the condition will negatively affect your infrastructure, and the <em>impact</em> on system operation if that were to happen"},dashboardFiltration:{id:"dashboardFiltration",description:"Dashboard filtration temporarily unavailable",defaultMessage:"Dashboard filtration temporarily unavailable"},functionalityNotSupported:{id:"functionalityNotSupported",description:"This functionality is not supported within",defaultMessage:"This functionality is not supported within {appname}. Remove all filters to show dashboard results."},filteredResultsInApp:{id:"filteredResultsInApp",description:"Filtered results are available directly",defaultMessage:"Filtered results are available directly within the {appname} application."},filterNotApplicable:{id:"filterNotApplicable",description:"Filter not applicable",defaultMessage:"Filter not applicable"},insightsForSap:{id:"insightsForSap",description:"Insights for SAP",defaultMessage:"Insights for SAP"},providesAdditionalSAPworkload:{id:"providesAdditionalSAPworkload",description:"Insights provides additional SAP",defaultMessage:"Insights provides additional SAP workload-focused enhancements to provide a curated view of the health across the SAP Landscape on Red Hat Enterprise Linux. This functionality further enables Insights detection and remediation capabilities for workload optimization, performance, stability, compliance & security. <break></break> Insights has not detected any hosts running a SAP workload. To take advantage of these features, please install the Insights-client on an RHEL host running SAP & these systems will be automatically profiled."},learnmore:{id:"learnmore",description:"learnmore",defaultMessage:"Learn more"},more:{id:"more",description:"more",defaultMessage:"more"},singleConsistent:{id:"singleConsistent",description:"Single, consistent management solution",defaultMessage:"Single, consistent management solution across on-premise, hybrid cloud, and public cloud. Included with Red Hat Enterprise Linux subscription."},learnmoreRHI:{id:"learnmoreRHI",description:"Learn more about Insights",defaultMessage:"Learn more about Insights"},contactsales:{id:"contactsales",description:"Contact sales",defaultMessage:"Contact sales"},smartManagement:{id:"smartManagement",description:"Smart Management subscription",defaultMessage:"Smart Management subscription enables push-button remediation of issues identified by Insights. Any issues identified by Insights are accompanied by remediation instructions, and with Smart Management, remediation is available at scale."},insightsandsmartmanagement:{id:"insightsandsmartmanagement",description:"Insights and Smart Management",defaultMessage:"Insights and Smart Management"},rhm1:{id:"rhm1",description:"zero state last box",defaultMessage:"Red Hat Management gives you the flexibility to manage Red Hat Enterprise Linux on-premise or in a hosted environment"},rhm2:{id:"rhm2",description:"zero state last box",defaultMessage:"Red Hat Management covers your entire system and security management life cycle"},rhm3:{id:"rhm3",description:"zero state last box",defaultMessage:"Red Hat Management includes Red Hat Satellite and the new cloud management services for Red Hat Enterprise Linux"},securityRedirect:{id:"securityRedirect",description:"Understanding our security measures",defaultMessage:"Understanding our security measures"},dataPrivacyAndControls:{id:"dataPrivacyAndControls",description:"Data privacy body",defaultMessage:"Red Hat Insights provides a mechanism for users to obtain actionable intelligence regarding suggested improvements to deployed Red Hat software. This document covers the security measures Red Hat puts in place to provide secure transmission, processing, and analysis of this data by those tools."},dataPrivacyAndControlsTitle:{id:"dataPrivacyAndControlsTitle",description:"Data privacy and controls title",defaultMessage:"Data privacy and controls in Insights"},zslblTitle:{id:"zslblTitle",description:"zero state left bullet list title",defaultMessage:"Improve operational confidence"},zslblBody:{id:"zslblBody",description:"zero state left bullet body",defaultMessage:"Deliver more reliable IT solutions by identifying performance and configuration risks before downtime occurs. With less downtime, IT can focus on higher value projects and deepen their skills."},zslblb1:{id:"zslblb1",description:"zero state left bullet list b1",defaultMessage:"Meet high IT performance and security demands across traditional and cloud instances."},zslblb2:{id:"zslblb2",description:"zero state left bullet list b2",defaultMessage:"Gain operational confidence through enhanced visibility into IT environments."},zslblb3:{id:"zslblb3",description:"zero state left bullet list b3",defaultMessage:"Optimize staff efficiency and extend Linux skills."},zslblb4:{id:"zslblb4",description:"zero state left bullet list b4",defaultMessage:"Shift teams to focus on delivering innovation."},zslblb5:{id:"zslblb5",description:"zero state left bullet list b5",defaultMessage:"Control complexity by working with fewer and more reliable configurations."},zsrblTitle:{id:"zsrblTitle",description:"zero state right bullet list title",defaultMessage:"Continually manage vulnerability risks"},zsrblBody:{id:"zsrblBody",description:"zero state right bullet body",defaultMessage:"Identify risks in advance, and filter to focus on the most important ones. Continually analyze against a large volume of Red Hat industry vulnerability and compliance advisories, as well as your own policies without manual steps."},zsrblb1:{id:"zsrblb1",description:"zero state right bullet list b1",defaultMessage:"Implement more defined analytics-driven processes for risk assessment and prioritization."},zsrblb2:{id:"zsrblb2",description:"zero state right bullet list b2",defaultMessage:"Remediate prioritized risks using easy to understand guidance or Ansible ™ Playbooks to address threats at scale."},zsrblb3:{id:"zsrblb3",description:"zero state right bullet list b3",defaultMessage:"Gain visibility into your posture regarding security vulnerabilities, industry compliance, and internally defined security policies."},zsrblb4:{id:"zsrblb4",description:"zero state right bullet list b4",defaultMessage:"Easily create audience-appropriate reporting."},zsrblb5:{id:"zsrblb5",description:"zero state right bullet list b5",defaultMessage:"Implement predictable processes. Shift teams to more predictable processes for continuous security visibility."},zssampleTitleL:{id:"zssampleTitleL",description:"zero state sample title left",defaultMessage:"Latest security vulnerabilities affecting RHEL infrastructures"},zssampleTitleR:{id:"zssampleTitleR",description:"zero state sample title right",defaultMessage:"CVSS Base Score"},zssampleActionButton:{id:"zssampleActionButton",description:"zero state sample call to action button",defaultMessage:"Register systems to find issues across your infrastructure"},footerTitle:{id:"footerTitle",description:"Footer section title",defaultMessage:"Setup additional services"},advisorCardHeader1:{id:"advisorCardHeader1",description:"Advisor card header 1",defaultMessage:"Advisor recommendations"},advisorCardHeader2:{id:"advisorCardHeader2",description:"Advisor card header 2",defaultMessage:"Recommendations by total risk"},advisorCardHeader3:{id:"advisorCardHeader3",description:"Advisor card header 3",defaultMessage:"Recommendations by category"},policiesCardHeader:{id:"policiesCardHeader",description:"Policies card header",defaultMessage:"Policies"},remediationsCardHeader:{id:"remediationsCardHeader",description:"Remediations card header",defaultMessage:"Remediations"},advisorCardCTA:{id:"advisorCardCTA",description:"Advisor card CTA",defaultMessage:"View incidents"},policiesCardCTA:{id:"policiesCardCTA",description:"Policies CTA",defaultMessage:"View all policies"},advisorCardMessage:{id:"advisorCardMessage",description:"Advisor card message",defaultMessage:"Problematic conditions that cause an issue have been actively detected on your systems"},complianceAppBlockHeader:{id:"complianceAppBlockHeader",description:"compliance app block header",defaultMessage:"Compliance"},remediationsAppBlockHeader:{id:"remediationsAppBlockHeader",description:"Remediations app block header",defaultMessage:"Remediations"},complianceAppBlockBody:{id:"complianceAppBlockBody",description:"compliance app block body",defaultMessage:"Easily identify and manage security compliance issues in the RHEL infrastructure."},remediationsAppBlockBody:{id:"remediationsAppBlockBody",description:"Remediations app block body",defaultMessage:"Fully automate resolution procedures tailored to each system. Either remediate issues manually or create Ansible Playbooks."},viewDetails:{id:"viewDetails",description:"View details",defaultMessage:"View details"},moreAbout:{id:"moreAbout",description:"More about Red Hat's response",defaultMessage:"More about Red Hat's response"},systemsExposed:{id:"systemsExposed",description:"Systems exposed",defaultMessage:"Systems exposed"},collapse:{id:"collapse",description:"collapse",defaultMessage:"Collapse"},collapseAll:{id:"collapseAll",description:"collapse all",defaultMessage:"Collapse all"},expand:{id:"expand",description:"expand",defaultMessage:"Expand"},latestCritical:{id:"latestCritical",description:"latestCritical",defaultMessage:"Latest critical notifications on your systems"},exploitedCveTooltip:{id:"exploitedCveTooltip",description:"exploitedCveTooltip",defaultMessage:'These CVEs are identified with a "Known Exploit" flag because Red Hat has determined that there are known examples of exploits for this particular CVEs. It does not reflect your environment. CVEs with this label should be addressed with higher priority.'}})},22324:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>me});var s=i(92137),a=i(28481),n=i(87757),r=i.n(n),l=i(50693),o=i(16475),d=i(32045),c=i(60485),u=i(93264),m=i.n(u),p=i(71094),g=i(46891),y=i(40827),f=i(9947),b=i(38424),h=i(75106),v=i(47173),M=i(74761),E=i(86350),S=i(7081),z=i(45697),k=i.n(z),w=i(49739),C=i(83826),A=i(59303),T=i(30893),P=i(86896),R=function(e){var t,i,s,a=e.workloadIs,n=(0,P.Z)(),r={SAP:{icon:S.ZP,title:n.formatMessage(T.Z.insightsForSap),body:n.formatMessage(T.Z.providesAdditionalSAPworkload,{break:function(){return m().createElement(m().Fragment,null,m().createElement("br",null)," ",m().createElement("br",null))}})}};return m().createElement(E.Z,null,m().createElement(f.u,{variant:f.I.small,className:"ins-c-no-systems"},m().createElement(b.k,{icon:(null===(t=r[a])||void 0===t?void 0:t.icon)||M.ZP}),m().createElement(c.D,{headingLevel:"h5",size:"lg"},(null===(i=r[a])||void 0===i?void 0:i.title)||n.formatMessage(T.Z.noSystemsTitle)),m().createElement(h.B,null,m().createElement(w.K,{hasGutter:!0},m().createElement(C.v,null,(null===(s=r[a])||void 0===s?void 0:s.body)||n.formatMessage(T.Z.noSystemsDescription)))),m().createElement(v.zx,{component:"a",href:"".concat(A.Pu,"/registration"),variant:"primary"},n.formatMessage(T.Z.registerYourSystems))))};R.propTypes={workloadIs:k().string};const x=R;var I=i(20333),Z=i(32203),L=i(70401),D=i(68774),N=i(62394),H=i(72936),B=i(49345),O=i(28191),V=i(92298),U=i(11306),W=i(94184),j=i.n(W),F=function(e){var t=e.iconListStyle,i=e.className,s=e.children,a=j()(i,"ins-c-icon-list");return m().createElement("ul",{className:a,style:t},s)};const _=F;F.propTypes={children:k().any.isRequired,iconListStyle:k().string,className:k().string};var G=function(e){var t=e.className,i=e.iconListItemStyle,s=e.children,a=j()(t,"ins-c-icon-list__item");return m().createElement("li",{className:a,style:i},s)};const Y=G;G.propTypes={className:k().string,iconListItemStyle:k().string,children:k().any.isRequired};const q=i.p+"fonts/img__ins-and-sm.png";var K=i(96156),X=i(58788),J=function(e){var t=e.className,i=e.hasGraphic,s=e.graphicRight,a=e.dark1000,n=e.fullBleed,r=e.style,l=e.children,o=j()(t,"ins-c-marketing-banner",(0,K.Z)({},"ins-m-with-graphic ",i),(0,K.Z)({},"ins-m-graphic-right",s),(0,K.Z)({},"ins-m-dark-1000 pf-m-dark-1000",a),(0,K.Z)({},"ins-m-full-bleed",n));return m().createElement(X.PageSection,{className:o,style:r,isWidthLimited:!0},l)};const Q=J;J.propTypes={children:k().any.isRequired,className:k().string,style:k().any,graphicRight:k().bool,hasGraphic:k().bool,dark1000:k().bool,fullBleed:k().bool,isWidthLimited:k().bool};const $=function(){var e=(0,P.Z)();return m().createElement("div",{className:"ins-c-marketing-page"},m().createElement(Q,{hasGraphic:!0,graphicRight:!0,dark1000:!0,fullBleed:!0,isWidthLimited:!0,style:{"--ins-c-marketing-banner--graphic--width-on-md":"200px","--ins-c-marketing-banner--graphic--width-on-xl":"400px"}},m().createElement(l.r,null,m().createElement(o.P,null,m().createElement(O.k,{direction:{default:"column"}},m().createElement(V.B,null,m().createElement(c.D,{headingLevel:"h1",size:"2xl"},e.formatMessage(T.Z.noSystemsTitle))),m().createElement(V.B,{spacer:{default:"spacer2xl"}},m().createElement("div",{className:"ins-c-width-limiter",style:{"--ins-c-width-limiter--MaxWidth":"600px"}},m().createElement("p",{className:"ins-c-text--black-400"},e.formatMessage(T.Z.singleConsistent)))),m().createElement(V.B,null,m().createElement(v.zx,{isLarge:!0,component:"a",variant:"primary",href:"".concat(A.Pu,"/registration")},e.formatMessage(T.Z.registerYourSystems))),m().createElement(V.B,null,m().createElement(v.zx,{className:"pf-m-plain",component:"a",variant:"secondary",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},e.formatMessage(T.Z.learnmoreRHI),"   ",m().createElement(U.ZP,null))))))),m().createElement(d.NP,{isWidthLimited:!0},m().createElement(l.r,{lg:6,hasGutter:!0},m().createElement(o.P,null,m().createElement(Z.Z,{style:{height:"100%"}},m().createElement(L.O,null,m().createElement(D.D,null,m().createElement(c.D,{headingLevel:"h2"},e.formatMessage(T.Z.zslblTitle)),m().createElement("p",null,e.formatMessage(T.Z.zslblBody)))),m().createElement(N.e,null,m().createElement(_,null,m().createElement(Y,null,e.formatMessage(T.Z.zslblb1)),m().createElement(Y,null,e.formatMessage(T.Z.zslblb2)),m().createElement(Y,null,e.formatMessage(T.Z.zslblb3)),m().createElement(Y,null,e.formatMessage(T.Z.zslblb4)),m().createElement(Y,null,e.formatMessage(T.Z.zslblb5)))))),m().createElement(o.P,null,m().createElement(Z.Z,{style:{height:"100%"}},m().createElement(L.O,null,m().createElement(D.D,null,m().createElement(c.D,{headingLevel:"h2"},e.formatMessage(T.Z.zsrblTitle)),m().createElement("p",null,e.formatMessage(T.Z.zsrblBody)))),m().createElement(N.e,null,m().createElement(_,null,m().createElement(Y,null,e.formatMessage(T.Z.zsrblb1)),m().createElement(Y,null,e.formatMessage(T.Z.zsrblb2)),m().createElement(Y,null,e.formatMessage(T.Z.zsrblb3)),m().createElement(Y,null,e.formatMessage(T.Z.zsrblb4)),m().createElement(Y,null,e.formatMessage(T.Z.zsrblb5)))))))),m().createElement(Q,{isWidthLimited:"true",hasGraphic:!0,graphicRight:!0,dark1000:!0,fullBleed:!0,style:{"--ins-c-marketing-banner--graphic--width":"400px"}},m().createElement(O.k,{direction:{default:"column"}},m().createElement(V.B,{spacer:{default:"spacerLg"}},m().createElement(c.D,{headingLevel:"h3",size:"lg"},e.formatMessage(T.Z.dataPrivacyAndControlsTitle))),m().createElement(V.B,{spacer:{default:"spacerXl"}},m().createElement("p",{className:"ins-c-width-limiter ins-c-text--black-400",style:{"--ins-c-width-limiter--MaxWidth":"70ch"}},e.formatMessage(T.Z.dataPrivacyAndControls))),m().createElement(V.B,null,m().createElement(v.zx,{component:"a",target:"_blank",rel:"noreferrer",href:"./security/insights"},e.formatMessage(T.Z.securityRedirect))))),m().createElement(d.NP,{isWidthLimited:!0},m().createElement(O.k,{direction:{default:"column"}},m().createElement(V.B,{spacer:{default:"spacerXl"}},m().createElement(D.D,null,m().createElement(c.D,{headingLevel:"h3"},e.formatMessage(T.Z.insightsandsmartmanagement)),m().createElement("div",{className:"ins-c-width-limiter",style:{"--ins-c-width-limiter--MaxWidth":"900px"}},m().createElement("p",null,e.formatMessage(T.Z.smartManagement))))),m().createElement(V.B,null,m().createElement(l.r,{hasGutter:!0},m().createElement(o.P,{md:6,lg:5,mdRowSpan:3},m().createElement("img",{src:q,alt:"Insights Smart Management"})),m().createElement(o.P,{md:6,lg:7},m().createElement("div",{className:"ins-c-width-limiter pf-u-pt-lg-on-lg",style:{"--ins-c-width-limiter--MaxWidth":"600px"}},m().createElement(H.aV,null,m().createElement(B.H,null,e.formatMessage(T.Z.rhm1)),m().createElement(B.H,null,e.formatMessage(T.Z.rhm2)),m().createElement(B.H,null,e.formatMessage(T.Z.rhm3))))),m().createElement(o.P,{md:6,lg:7,className:"pf-u-pl-lg"},m().createElement(O.k,null,m().createElement(V.B,null,m().createElement(v.zx,{className:"pf-m-secondary",component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/smart-management"},e.formatMessage(T.Z.learnmore))),m().createElement(V.B,null,m().createElement(v.zx,{className:"pf-m-secondary",component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/contact"},e.formatMessage(T.Z.contactsales))))))))))};var ee=i(88931),te=i(98756),ie=(0,u.lazy)((function(){return Promise.all([i.e(410),i.e(736),i.e(718),i.e(810),i.e(818),i.e(183),i.e(889)]).then(i.bind(i,17889))})),se=(0,u.lazy)((function(){return Promise.all([i.e(410),i.e(252),i.e(736),i.e(718),i.e(810),i.e(320),i.e(968)]).then(i.bind(i,18968))})),ae=(0,u.lazy)((function(){return Promise.all([i.e(410),i.e(736),i.e(718),i.e(810),i.e(818),i.e(550),i.e(183),i.e(897)]).then(i.bind(i,23897))})),ne=(0,u.lazy)((function(){return Promise.all([i.e(410),i.e(252),i.e(736),i.e(718),i.e(984)]).then(i.bind(i,10984))})),re=(0,u.lazy)((function(){return Promise.all([i.e(410),i.e(736),i.e(818),i.e(979),i.e(851)]).then(i.bind(i,90851))})),le=(0,u.lazy)((function(){return Promise.all([i.e(410),i.e(736),i.e(718),i.e(810),i.e(320),i.e(65)]).then(i.bind(i,52953))})),oe=(0,u.lazy)((function(){return Promise.all([i.e(410),i.e(736),i.e(718),i.e(810),i.e(818),i.e(988)]).then(i.bind(i,54988))})),de=(0,u.lazy)((function(){return Promise.all([i.e(410),i.e(252),i.e(736),i.e(718),i.e(810),i.e(979),i.e(786)]).then(i.bind(i,76786))})),ce=(0,u.lazy)((function(){return i.e(358).then(i.bind(i,44358))})),ue=function(e){var t,i,n,f,b=e.workloads,h=(0,u.useContext)(I.B),v=(0,P.Z)(),M=(0,u.useState)(!0),E=(0,a.Z)(M,2),S=E[0],z=E[1],k=(0,ee.useSelector)((function(e){return e.DashboardStore.vulnerabilities.recent_rules}));return(0,u.useEffect)((function(){!function(){var e=(0,s.Z)(r().mark((function e(){var t,i,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.get(A.U7);case 3:s=e.sent,z((null===(t=s.data.results)||void 0===t||null===(i=t.find((function(e){return e.value})))||void 0===i?void 0:i.count)>0),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),"".concat(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]),h.hasSystems?null==b||null===(t=b.SAP)||void 0===t||!t.isSelected||null!=b&&null!==(i=b.SAP)&&void 0!==i&&i.isSelected&&S?m().createElement(m().Fragment,null,m().createElement(d.NP,{isWidthLimited:!0,variant:d.Dk.light,className:"ins-c-dashboard-header"},m().createElement(c.D,{headingLevel:"h1",size:"2xl",className:"pf-u-screen-reader"},v.formatMessage(T.Z.dashboardTitle)),m().createElement(u.Suspense,{fallback:m().createElement(g.Z,null)},m().createElement(ne,null))),m().createElement(d.NP,{isFilled:!0,isWidthLimited:!0},m().createElement(l.r,{hasGutter:!0},m().createElement(u.Suspense,{fallback:m().createElement(g.Z,null)},(null==k?void 0:k.length)>0&&h.vulnerability&&m().createElement(o.P,null,m().createElement(re,null))),m().createElement(y.Z,{breakpointCols:{default:2,992:1},className:"ins-l-masonry",columnClassName:"ins-l-masonry_column"},m().createElement(u.Suspense,{fallback:m().createElement(g.Z,null)},h.vulnerability&&m().createElement(ae,null)),m().createElement(u.Suspense,{fallback:m().createElement(g.Z,null)},h.advisor&&m().createElement(ie,null)),m().createElement(u.Suspense,{fallback:m().createElement(g.Z,null)},h.compliance&&m().createElement(se,null)),m().createElement(u.Suspense,{fallback:m().createElement(g.Z,null)},h.remediations&&m().createElement(de,null)),m().createElement(u.Suspense,{fallback:m().createElement(g.Z,null)},h.patch&&m().createElement(oe,null)),m().createElement(u.Suspense,{fallback:m().createElement(g.Z,null)},h.subscriptions&&m().createElement(le,null))))),m().createElement(ce,{supportsSap:!(null!=b&&null!==(n=b.SAP)&&void 0!==n&&n.isSelected)||(null==b||null===(f=b.SAP)||void 0===f?void 0:f.isSelected)&&S})):m().createElement(x,{workloadIs:"SAP"}):m().createElement($,null)};ue.propTypes={workloads:te.ib};const me=(0,ee.connect)((function(e){return{workloads:e.DashboardStore.workloads}}),null)(ue)},98756:(e,t,i)=>{"use strict";i.d(t,{kC:()=>d,ib:()=>c,nY:()=>u,PF:()=>m});var s=i(96156),a=i(90484),n=i(1284);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var o=["SAP","All workloads"],d=function(e){return e[0].toUpperCase()+e.substring(1)},c=function(e,t,i){var s,n,r=null==e?void 0:e[t];"object"!==(0,a.Z)(e)&&(n=new Error("`".concat(i,"` only accepts object as `").concat(t,"` prop.")));var l=Object.keys(r);l.some((function(e){return!o.includes(e)}))&&(n=new Error("`".concat(i,"` accepts either SAP or All workloads as `").concat(t,".` prop."))),(null===(s=l.find((function(e){return o.includes(e)})))||void 0===s?void 0:s.length)>1&&(n=new Error("`".concat(i,"` accepts only one of SAP or All workloads as `").concat(t,".` prop.")));var d=Object.values(r).findIndex((function(e){var t=e.isSelected;return void 0!==t&&"boolean"!=typeof t}));return-1!==d&&(n=new Error("`".concat(i,"` requires isSelected as boolean prop in `").concat(t,".").concat(null==l?void 0:l[d],"`."))),n},u=function(e,t){var i;return(0,n.h3)({system_profile:l(l({},(null==e||null===(i=e.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),(null==t?void 0:t.length)>0&&{sap_sids:t})},void 0,{arrayEnhancer:"contains"})},m=function(e,t,i){return void 0===t||!Object.values(t).map((function(e){return e.isSelected})).reduce((function(e,t){return e||t}),!1)&&0===e.length&&0===Object.entries(i).length}}}]);
//# sourceMappingURL=../sourcemaps/dashboard-route.7f3eb6989269d1f3b994.js.map