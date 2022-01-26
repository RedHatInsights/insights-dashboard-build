(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[9767],{96191:(e,t,a)=>{"use strict";a.d(t,{J:()=>n,Z:()=>r});const n={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},r=n},33818:(e,t,a)=>{"use strict";a.d(t,{u:()=>m});var n=a(45987),r=a(10310),l=a(80469),i=a(28738),c=a(93264),s=a.n(c),o=a(45697),d=a.n(o),u=["index"],m=function(e){var t=e.ariaDesc,a=e.ariaTitle,c=e.constrainToVisibleArea,o=e.data,d=e.legendData,m=e.padding,f=e.height,p=e.width,b=e.legendOrientation,g=e.colorScale,v=e.legend,h=e.legendWidth,_=e.legendHeight,E=e.legendClick,y=function(e){var t=e.index,l=(0,n.Z)(e,u);return s().createElement("a",{id:"".concat(a.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:E[t],className:"pf-c-button pf-m-link pf-m-inline"},s().createElement(r.Df,l))};return s().createElement("div",{className:"insd-c-pie-chart__row"},s().createElement("div",{style:{width:p,height:f,position:"relative"}},s().createElement(i.Td,{ariaDesc:t,ariaTitle:a,constrainToVisibleArea:c,data:o,height:f,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:m,width:p,colorScale:g}),s().createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a+" data"},s().createElement("tbody",null,o.map((function(e,t){return[s().createElement("tr",{key:t},s().createElement("td",null,e.y),s().createElement("td",null,e.x))]}))))),v&&s().createElement("div",{className:"insd-c-pie-chart__legend","aria-label":"Chart legend",style:{width:h,height:_}},s().createElement(l.Qk,{height:_,width:h,fontSize:14,data:d,rowGutter:{top:-5,bottom:-5},orientation:b,labelComponent:E&&s().createElement(y,null)})))};m.propTypes={ariaDesc:d().string,ariaTitle:d().string,constrainToVisibleArea:d().bool,data:d().array,legendData:d().array,padding:d().object,height:d().number,width:d().number,legendOrientation:d().string,colorScale:d().array,legend:d().bool,legendWidth:d().number,legendHeight:d().number,legendClick:d().any}},74183:(e,t,a)=>{"use strict";a.d(t,{M:()=>u});var n=a(87462),r=a(45987),l=a(32203),i=a(93264),c=a.n(i),s=a(45697),o=a.n(s),d=["className","children"],u=function(e){var t=e.className,a=e.children,i=(0,r.Z)(e,d);return c().createElement(l.Z,(0,n.Z)({className:"insd-c-dashboard-compound-card insd-c-dashboard__card ".concat(t)},i),a)};u.propTypes={children:o().any,className:o().string}},23897:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var n=a(4942),r=a(57149),l=a(35224),i=a(68774),c=a(47173),s=a(28191),o=a(93264),d=a.n(o),u=a(27577),m=a(66794),f=a(28216),p=a(74183),b=a(10358),g=a(37486),v=a(91727),h=a(46891),_=a(33818),E=a(59303),y=a(96191),x=a(30893),S=a(86896),N=a(89319);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const k=function(){var e=(0,S.Z)(),t=[],a=[],n=[],w=(0,f.I0)(),k=(0,f.v9)((function(e){return e.DashboardStore.vulnerabilities})),T=(0,f.v9)((function(e){return e.DashboardStore.vulnerabilitiesFetchStatus})),O=(0,f.v9)((function(e){return e.DashboardStore.selectedTags})),M=(0,f.v9)((function(e){return e.DashboardStore.workloads})),Z=(0,f.v9)((function(e){return e.DashboardStore.SID})),D=function(e){return d().createElement("strong",null,e)},V=(0,N.s)(),P=function(e){return d().createElement(l.u,{key:e,position:l.D.right,content:d().createElement("div",null,e)},d().createElement("span",{"aria-label":"Action",className:"insd-c-info-icon pf-u-ml-sm"},d().createElement(v.Z,null)))},j=[{title:"CVSS score"},{title:"CVE totals",transforms:[u.textCenter],cellTransforms:[u.textCenter]},{title:d().createElement("span",null,"Known exploits",P(e.formatMessage(x.Z.exploitedCveTooltip))),transforms:[u.fitContent]}];if((0,o.useEffect)((function(){var e,t;t=C(C(C({},(null==M||null===(e=M.SAP)||void 0===e?void 0:e.isSelected)&&{sap_system:!0}),(null==Z?void 0:Z.length)>0&&{sap_sids:Z}),(null==O?void 0:O.length)>0&&{tags:O}),w(r.Q6(t))}),[M,Z,O,w]),"fulfilled"===T){var A=k.cves_by_severity;t=[{x:"CVSS 8.0 - 10",from:8,to:10,y:A["8to10"].count,fill:"#a30000",data:A["8to10"]},{x:"CVSS 4.0 - 7.9",from:4,to:7.9,y:A["4to7.9"].count,fill:"#ec7a08",data:A["4to7.9"]},{x:"CVSS 0.0 - 3.9",from:0,to:3.9,y:A["0to3.9"].count,fill:"#f0ab00",data:A["0to3.9"]}],n=function(e,t){return"".concat(E.Pu,"/vulnerability/cves?cvss_from=").concat(e,"&cvss_to=").concat(t)},a=t.map((function(e){var t=e.data,a=e.from,r=e.to,l=e.fill;return[{title:d().createElement(u.TableText,{wrapModifier:"nowrap",className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(l)}},d().createElement("a",{onClick:function(e){return V(e,n(a,r))},href:n(a,r)},"".concat(a,".0 - ").concat(r)))},{title:d().createElement("a",{onClick:function(e){return V(e,n(a,r))},href:n(a,r),className:"pf-u-text-align-center"},t.count),props:{textCenter:!0}},{title:d().createElement("a",{onClick:function(e){return V(e,n(a,r)+"&known_exploit=true")},href:n(a,r)+"&known_exploit=true",className:"pf-u-text-align-center"},void 0===t.known_exploits?"N/A":t.known_exploits),props:{textCenter:!0}}]}))}return"rejected"===T?d().createElement(m.wh,{isFilled:!1,className:"ins-c-card__vulnerability","data-ouia-safe":!0},d().createElement(m.ME,{title:e.formatMessage(x.Z.vulnerabilitiesTitle)}),d().createElement(m.jA,null,d().createElement(g.Z,{appName:"Vulnerability"}))):d().createElement(p.M,{className:"insd-c-dashboard-card-parent insd-c-dashboard__card--compound--Vulnerabilities","data-ouia-safe":"pending"!==T},d().createElement(b.t,{appName:"Vulnerabilities",className:"insd-m-toggle-right-on-md insd-m-short-header","data-ouia-safe":"pending"!==T,title:e.formatMessage(x.Z.vulnerabilitiesTitle),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_vulnerability1")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_vulnerability1",e)},body:"fulfilled"===T?d().createElement(m.jA,{className:"insd-c-dashboard__card--Vulnerabilities__card-body"},d().createElement(s.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"},flexWrap:{default:"nowrap"}},d().createElement(i.D,{className:"insd-c-width-limiter",style:{"--insd-c-width-limiter--MaxWidth":"54ch"}},d().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(x.Z.vulnerabilityMessage))),d().createElement("div",{className:"insd-c-dashboard__card--Vulnerabilities--SplitMetrics"},d().createElement("div",{className:"insd-c-dashboard__card--Vulnerabilities--SplitMetrics__item"},d().createElement("div",{className:"insd-c-dashboard__card--Vulnerabilities--SplitMetrics__content"},d().createElement("a",{className:"pf-u-font-size-2xl pf-u-color-100",onClick:function(e){return V(e,"".concat(E.Pu,"/vulnerability/cves?affecting=true&rule_presence=true"))},href:"".concat(E.Pu,"/vulnerability/cves?affecting=true&rule_presence=true"),rel:"noreferrer"},k.rules_cves_total),d().createElement(i.D,null,d().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(x.Z.cvesImpactingOneOrMoreSystems,{cves:k.rules_cves_total,strong:function(e){return D(e)}})))),d().createElement(c.zx,{component:"a",href:"".concat(E.Pu,"/vulnerability/cves?affecting=true&rule_presence=true"),onClick:function(e){return V(e,"".concat(E.Pu,"/vulnerability/cves?affecting=true&rule_presence=true"))},rel:"noreferrer",variant:"secondary",isSmall:!0},e.formatMessage(x.Z.vulnerabilityCardCTAText))),d().createElement("div",{className:"insd-c-dashboard__card--Vulnerabilities--SplitMetrics__item"},d().createElement("div",{className:"insd-c-dashboard__card--Vulnerabilities--SplitMetrics__content"},d().createElement("a",{className:"pf-u-font-size-2xl pf-u-color-100",onClick:function(e){return V(e,"".concat(E.Pu,"/vulnerability/cves?known_exploit=true&affecting=true"))},href:"".concat(E.Pu,"/vulnerability/cves?known_exploit=true&affecting=true"),rel:"noreferrer"},k.exploited_cves_count),d().createElement(i.D,null,d().createElement("p",{className:"pf-u-font-size-sm"},e.formatMessage(x.Z.knownExploitsOneOrMoreSystems,{cves:k.exploited_cves_count,strong:function(e){return D(e)},tooltip:function(){return P(e.formatMessage(x.Z.exploitedCveTooltip))}})))),d().createElement(c.zx,{component:"a",href:"".concat(E.Pu,"/vulnerability/cves?known_exploit=true&affecting=true"),onClick:function(e){return V(e,"".concat(E.Pu,"/vulnerability/cves?known_exploit=true&affecting=true"))},rel:"noreferrer",variant:"secondary",isSmall:!0},e.formatMessage(x.Z.vulnerabilityCardKnownExploitsCTAText)))))):d().createElement(h.Z,null)}),d().createElement(b.t,{appName:"CVESbyCVSS",className:"insd-m-toggle-right-on-md","data-ouia-safe":"pending"!==T,title:e.formatMessage(x.Z.cveByCvssScoreTitle),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_vulnerability2")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_vulnerability2",e)},hasDivider:!0,body:"fulfilled"===T?d().createElement(m.jA,{className:"ins-c-cves-by-cvss-card-body pf-u-pt-sm"},d().createElement("div",{className:"insd-c-dashboard__card-chart-container"},d().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},d().createElement(_.u,{ariaDesc:e.formatMessage(x.Z.cvesImpactingSystems,{cves:k.cves_total}),ariaTitle:"Vulnerabilities chart",constrainToVisibleArea:!0,data:t,padding:{bottom:0,left:0,right:0,top:0},colorScale:"fulfilled"===T&&0===k.cves_total?[y.Z.value]:["#a30000","#ec7a08","#f0ab00"]})),d().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},d().createElement(u.Table,{borders:!1,"aria-label":"Simple Table",cells:j,rows:a,className:"insd-m-no-styling",gridBreakPoint:""},d().createElement(u.TableHeader,null),d().createElement(u.TableBody,null))))):d().createElement(h.Z,null)}))}},45467:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9767.370da4a746d829c2db53e348bdfe2292.js.map