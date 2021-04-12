(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[7095],{47095:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var n=a(96156),r=(a(6447),a(72474)),l=a(68774),s=a(47173),i=a(28191),c=a(92298),o=a(93264),u=a.n(o),d=a(67415),f=a(50845),m=a(77121),p=a(86951),b=a(58658),h=a(8116),g=a(13317),v=a(19188),y=a(71221),x=a(96191),E=a(60578),_=a(59458);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const w=function(){var e=(0,_.Z)(),t=[{title:"CVSS score",transforms:[d.fitContent]},{title:"CVE totals",transforms:[d.fitContent]},{title:"Known exploits",transforms:[d.fitContent]}],a=[],n=[],C=[],w=(0,m.useDispatch)(),A=(0,m.useSelector)((function(e){return e.DashboardStore.vulnerabilities})),N=(0,m.useSelector)((function(e){return e.DashboardStore.vulnerabilitiesFetchStatus})),k=(0,m.useSelector)((function(e){return e.DashboardStore.selectedTags})),O=(0,m.useSelector)((function(e){return e.DashboardStore.workloads})),j=(0,m.useSelector)((function(e){return e.DashboardStore.SID})),I=function(e){return u().createElement("strong",null,e)};if((0,o.useEffect)((function(){var e,t;t=S(S(S({},(null==O||null===(e=O.SAP)||void 0===e?void 0:e.isSelected)&&{sap_system:!0}),(null==j?void 0:j.length)>0&&{sap_sids:j}),(null==k?void 0:k.length)>0&&{tags:k}),w(r.Q6(t))}),[O,j,k,w]),"fulfilled"===N){var D=A.cves_by_severity;a=[{x:"CVSS 8.0 - 10",from:8,to:10,y:D["8to10"].count,fill:"#a30000",data:D["8to10"]},{x:"CVSS 4.0 - 7.9",from:4,to:7.9,y:D["4to7.9"].count,fill:"#ec7a08",data:D["4to7.9"]},{x:"CVSS 0.0 - 3.9",from:0,to:3.9,y:D["0to3.9"].count,fill:"#f0ab00",data:D["0to3.9"]}],C=function(e,t){return"".concat(y.Pu,"/vulnerability/cves?cvss_from=").concat(e,"&cvss_to=").concat(t)},n=a.map((function(e){var t=e.data,a=e.from,n=e.to,r=e.fill;return[{title:u().createElement(d.TableText,{wrapModifier:"nowrap",className:"ins-c-legend__dot",style:{"--ins-c-legend__dot--BackgroundColor":"".concat(r)}},u().createElement("a",{href:C(a,n)},"".concat(a,".0 - ").concat(n)))},{title:u().createElement("a",{href:C(a,n),className:"pf-u-text-align-center"},t.count),props:{textCenter:!0}},{title:u().createElement("a",{href:C(a,n)+"&known_exploit=true",className:"pf-u-text-align-center"},void 0===t.known_exploits?"N/A":t.known_exploits),props:{textCenter:!0}}]}))}return"rejected"===N?u().createElement(f.wh,{isFilled:!1,className:"ins-c-card__vulnerability","data-ouia-safe":!0},u().createElement(f.ME,{title:e.formatMessage(E.Z.vulnerabilitiesTitle)}),u().createElement(f.jA,null,u().createElement(h.Z,{appName:"Vulnerability"}))):u().createElement(p.M,{className:"ins-c-dashboard-card-parent ins-c-dashboard__card--compound--Vulnerabilities","data-ouia-safe":"pending"!==N},u().createElement(b.t,{appName:"Vulnerabilities",className:"ins-m-toggle-right-on-md ins-m-short-header","data-ouia-safe":"pending"!==N,title:e.formatMessage(E.Z.vulnerabilitiesTitle),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_vulnerability1")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_vulnerability1",e)},body:"fulfilled"===N?u().createElement(f.jA,{className:"ins-c-custom-policies__card-body pf-u-pb-2xl"},u().createElement(i.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},u().createElement(l.D,{className:"ins-c-width-limiter",style:{"--ins-c-width-limiter--MaxWidth":"54ch"}},u().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(E.Z.vulnerabilityMessage))),u().createElement(i.k,{direction:{default:"column",md:"row"}},u().createElement(i.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"},justifyContent:{default:"justifyContentCenter"},flex:{default:"flex_1"}},u().createElement(i.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"}},u().createElement("a",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-color-100",href:"".concat(y.Pu,"/vulnerability/cves?affecting=true,false&rule_presence=true"),rel:"noreferrer"},A.rules_total||A.cves_total),u().createElement(l.D,{className:"ins-c-width-limiter pf-u-text-align-center",style:{"--ins-c-width-limiter--MaxWidth":"18ch"}},u().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(E.Z.cvesImpactingOneOrMoreSystems,{cves:A.rules_total||A.cves_total,strong:function(e){return I(e)}})))),u().createElement(s.zx,{component:"a",href:"".concat(y.Pu,"/vulnerability/cves?affecting=true,false&rule_presence=true"),rel:"noreferrer",variant:"secondary",isSmall:!0},e.formatMessage(E.Z.vulnerabilityCardCTAText))),u().createElement(i.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"},justifyContent:{default:"justifyContentCenter"},flex:{default:"flex_1"}},u().createElement(i.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"}},u().createElement("a",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-color-100",href:"".concat(y.Pu,"/vulnerability/cves?known_exploit=true&affecting=true,false"),rel:"noreferrer"},A.exploited_cves_count||A.cves_total),u().createElement(l.D,{className:"ins-c-width-limiter pf-u-text-align-center",style:{"--ins-c-width-limiter--MaxWidth":"18ch"}},u().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(E.Z.knownExploitsOneOrMoreSystems,{cves:A.exploited_cves_count||A.cves_total,strong:function(e){return I(e)}})))),u().createElement(s.zx,{component:"a",href:"".concat(y.Pu,"/vulnerability/cves?known_exploit=true&affecting=true,false"),rel:"noreferrer",variant:"secondary",isSmall:!0},e.formatMessage(E.Z.vulnerabilityCardKnownExploitsCTAText)))))):u().createElement(g.Z,null)}),u().createElement(b.t,{appName:"CVESbyCVSS",className:"ins-m-toggle-right-on-md","data-ouia-safe":"pending"!==N,title:e.formatMessage(E.Z.cveByCvssScoreTitle),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_vulnerability2")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_vulnerability2",e)},hasDivider:!0,body:"fulfilled"===N?u().createElement(f.jA,{className:"ins-c-cves-by-cvss-card-body pf-u-pt-sm"},u().createElement(i.k,{alignItems:{default:"alignItemsCenter"}},u().createElement(c.B,null,u().createElement(v.u,{ariaDesc:e.formatMessage(E.Z.cvesImpactingSystems,{cves:A.cves_total}),ariaTitle:"Vulnerabilities chart",constrainToVisibleArea:!0,data:a,padding:{bottom:0,left:0,right:0,top:0},height:100,width:100,colorScale:"fulfilled"===N&&0===A.cves_total?[x.Z.value]:["#a30000","#ec7a08","#f0ab00"]})),u().createElement(c.B,{flex:{default:"flex_1s"}},u().createElement(d.Table,{borders:!1,"aria-label":"Simple Table",cells:t,rows:n,className:"ins-m-no-styling",gridBreakPoint:""},u().createElement(d.TableHeader,null),u().createElement(d.TableBody,null))))):u().createElement(g.Z,null)}))}},74824:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(94015),r=a.n(n),l=a(23645),s=a.n(l)()(r());s.push([e.id,"@media screen and (min-width: 768px){.dashboard .ins-c-dashboard__card--compound--Vulnerabilities>*:nth-child(2).pf-m-expanded{min-height:16.125rem}}.dashboard .ins-c-cves-by-cvss-card-body{display:flex;flex-direction:column;justify-content:center}\n","",{version:3,sources:["webpack://./src/SmartComponents/Vulnerability/VulnerabilityCard.scss"],names:[],mappings:"AACA,qCADA,0FACoH,oBAAoB,CAAE,CAD1I,yCACwK,YAAY,CAAC,qBAAqB,CAAC,sBAAsB",sourcesContent:[".dashboard{\n@media screen and (min-width: 768px){.ins-c-dashboard__card--compound--Vulnerabilities>*:nth-child(2).pf-m-expanded{min-height:16.125rem}}.ins-c-cves-by-cvss-card-body{display:flex;flex-direction:column;justify-content:center}\n\n}"],sourceRoot:""}]);const i=s},6447:(e,t,a)=>{"use strict";var n=a(93379),r=a.n(n),l=a(74824),s=r()(l.default,{insert:"head",singleton:!1});if(!l.default.locals||e.hot.invalidate){var i=l.default.locals;e.hot.accept(74824,(t=>{l=a(74824),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(i,l.default.locals)?(i=l.default.locals,s(l.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),l.default.locals}}]);