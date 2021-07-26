(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[897],{23897:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var r=a(96156),n=a(57149),l=a(35224),s=a(68774),i=a(47173),c=a(28191),o=a(93264),u=a.n(o),d=a(94550),m=a(66794),f=a(88931),p=a(74183),b=a(10358),v=a(37486),_=a(91727),g=a(46891),h=a(33818),E=a(59303),y=a(96191),S=a(30893),x=a(86896);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const C=function(){var e=(0,x.Z)(),t=[],a=[],r=[],N=(0,f.useDispatch)(),C=(0,f.useSelector)((function(e){return e.DashboardStore.vulnerabilities})),M=(0,f.useSelector)((function(e){return e.DashboardStore.vulnerabilitiesFetchStatus})),O=(0,f.useSelector)((function(e){return e.DashboardStore.selectedTags})),T=(0,f.useSelector)((function(e){return e.DashboardStore.workloads})),k=(0,f.useSelector)((function(e){return e.DashboardStore.SID})),V=function(e){return u().createElement("strong",null,e)},Z=function(e){return u().createElement(l.u,{key:e,position:l.D.right,content:u().createElement("div",null,e)},u().createElement("span",{"aria-label":"Action",className:"ins-c-info-icon pf-u-ml-sm"},u().createElement(_.Z,null)))},D=[{title:"CVSS score"},{title:"CVE totals",transforms:[d.textCenter],cellTransforms:[d.textCenter]},{title:u().createElement("span",null,"Known exploits",Z(e.formatMessage(S.Z.exploitedCveTooltip))),transforms:[d.fitContent]}];if((0,o.useEffect)((function(){var e,t;t=w(w(w({},(null==T||null===(e=T.SAP)||void 0===e?void 0:e.isSelected)&&{sap_system:!0}),(null==k?void 0:k.length)>0&&{sap_sids:k}),(null==O?void 0:O.length)>0&&{tags:O}),N(n.Q6(t))}),[T,k,O,N]),"fulfilled"===M){var j=C.cves_by_severity;t=[{x:"CVSS 8.0 - 10",from:8,to:10,y:j["8to10"].count,fill:"#a30000",data:j["8to10"]},{x:"CVSS 4.0 - 7.9",from:4,to:7.9,y:j["4to7.9"].count,fill:"#ec7a08",data:j["4to7.9"]},{x:"CVSS 0.0 - 3.9",from:0,to:3.9,y:j["0to3.9"].count,fill:"#f0ab00",data:j["0to3.9"]}],r=function(e,t){return"".concat(E.Pu,"/vulnerability/cves?cvss_from=").concat(e,"&cvss_to=").concat(t)},a=t.map((function(e){var t=e.data,a=e.from,n=e.to,l=e.fill;return[{title:u().createElement(d.TableText,{wrapModifier:"nowrap",className:"ins-c-legend__dot",style:{"--ins-c-legend__dot--BackgroundColor":"".concat(l)}},u().createElement("a",{href:r(a,n)},"".concat(a,".0 - ").concat(n)))},{title:u().createElement("a",{href:r(a,n),className:"pf-u-text-align-center"},t.count),props:{textCenter:!0}},{title:u().createElement("a",{href:r(a,n)+"&known_exploit=true",className:"pf-u-text-align-center"},void 0===t.known_exploits?"N/A":t.known_exploits),props:{textCenter:!0}}]}))}return"rejected"===M?u().createElement(m.wh,{isFilled:!1,className:"ins-c-card__vulnerability","data-ouia-safe":!0},u().createElement(m.ME,{title:e.formatMessage(S.Z.vulnerabilitiesTitle)}),u().createElement(m.jA,null,u().createElement(v.Z,{appName:"Vulnerability"}))):u().createElement(p.M,{className:"ins-c-dashboard-card-parent ins-c-dashboard__card--compound--Vulnerabilities","data-ouia-safe":"pending"!==M},u().createElement(b.t,{appName:"Vulnerabilities",className:"ins-m-toggle-right-on-md ins-m-short-header","data-ouia-safe":"pending"!==M,title:e.formatMessage(S.Z.vulnerabilitiesTitle),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_vulnerability1")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_vulnerability1",e)},body:"fulfilled"===M?u().createElement(m.jA,{className:"ins-c-dashboard__card--Vulnerabilities__card-body"},u().createElement(c.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"},flexWrap:{default:"nowrap"}},u().createElement(s.D,{className:"ins-c-width-limiter",style:{"--ins-c-width-limiter--MaxWidth":"54ch"}},u().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(S.Z.vulnerabilityMessage))),u().createElement("div",{className:"ins-c-dashboard__card--Vulnerabilities--SplitMetrics"},u().createElement("div",{className:"ins-c-dashboard__card--Vulnerabilities--SplitMetrics__item"},u().createElement("div",{className:"ins-c-dashboard__card--Vulnerabilities--SplitMetrics__content"},u().createElement("a",{className:"pf-u-font-size-2xl pf-u-color-100",href:"".concat(E.Pu,"/vulnerability/cves?affecting=true&rule_presence=true"),rel:"noreferrer"},C.rules_cves_total),u().createElement(s.D,null,u().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(S.Z.cvesImpactingOneOrMoreSystems,{cves:C.rules_cves_total,strong:function(e){return V(e)}})))),u().createElement(i.zx,{component:"a",href:"".concat(E.Pu,"/vulnerability/cves?affecting=true&rule_presence=true"),rel:"noreferrer",variant:"secondary",isSmall:!0},e.formatMessage(S.Z.vulnerabilityCardCTAText))),u().createElement("div",{className:"ins-c-dashboard__card--Vulnerabilities--SplitMetrics__item"},u().createElement("div",{className:"ins-c-dashboard__card--Vulnerabilities--SplitMetrics__content"},u().createElement("a",{className:"pf-u-font-size-2xl pf-u-color-100",href:"".concat(E.Pu,"/vulnerability/cves?known_exploit=true&affecting=true"),rel:"noreferrer"},C.exploited_cves_count),u().createElement(s.D,null,u().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(S.Z.knownExploitsOneOrMoreSystems,{cves:C.exploited_cves_count,strong:function(e){return V(e)},tooltip:function(){return Z(e.formatMessage(S.Z.exploitedCveTooltip))}})))),u().createElement(i.zx,{component:"a",href:"".concat(E.Pu,"/vulnerability/cves?known_exploit=true&affecting=true"),rel:"noreferrer",variant:"secondary",isSmall:!0},e.formatMessage(S.Z.vulnerabilityCardKnownExploitsCTAText)))))):u().createElement(g.Z,null)}),u().createElement(b.t,{appName:"CVESbyCVSS",className:"ins-m-toggle-right-on-md","data-ouia-safe":"pending"!==M,title:e.formatMessage(S.Z.cveByCvssScoreTitle),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_vulnerability2")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_vulnerability2",e)},hasDivider:!0,body:"fulfilled"===M?u().createElement(m.jA,{className:"ins-c-cves-by-cvss-card-body pf-u-pt-sm"},u().createElement("div",{className:"ins-c-dashboard__card-chart-container"},u().createElement("div",{className:"ins-c-dashboard__card-pie-chart"},u().createElement(h.u,{ariaDesc:e.formatMessage(S.Z.cvesImpactingSystems,{cves:C.cves_total}),ariaTitle:"Vulnerabilities chart",constrainToVisibleArea:!0,data:t,padding:{bottom:0,left:0,right:0,top:0},colorScale:"fulfilled"===M&&0===C.cves_total?[y.Z.value]:["#a30000","#ec7a08","#f0ab00"]})),u().createElement("div",{className:"ins-c-dashboard__card-pie-chart-legend"},u().createElement(d.Table,{borders:!1,"aria-label":"Simple Table",cells:D,rows:a,className:"ins-m-no-styling",gridBreakPoint:""},u().createElement(d.TableHeader,null),u().createElement(d.TableBody,null))))):u().createElement(g.Z,null)}))}}}]);
//# sourceMappingURL=../sourcemaps/897.855981e5c4c8bdd14427.js.map