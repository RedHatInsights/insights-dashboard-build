(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1201:function(e,t,a){var i=a(7),l=a(684);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1},n=i(l,r),c=l.locals?l.locals:{};l.locals||e.hot.accept(684,(function(){var t=a(684);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),n(t)})),e.hot.dispose((function(){n()})),e.exports=c},1234:function(e,t,a){"use strict";a.r(t);var i=a(605),l=a(640),r=a(586),n=a(2),c=a.n(n),s=a(588),d=a(1),o=a.n(d),f=a(18),v=a(323),u=a(567),m=a(155),p=a(635),h=(a(1201),function(){return c.a.createElement(l.Divider,{className:"pf-m-vertical"})}),b=a(1014),g={"0.0 - 3.9":"less4","4.0 - 7.9":"from4to8","8.0 - 10":"from8to10"},y=function(e){var t=e.fetchVulnerabilities,a=e.vulnerabilities,i=e.vulnerabilitiesFetchStatus;Object(n.useEffect)((function(){t()}),[t]);var d=[],o=[],m=Object(v.a)();if("fulfilled"===i){var y=a.cves_by_severity,x=a.cves_total;o=(d=[{name:"CVSS 8.0 - 10",x:x,y:y["8to10"].count,fill:"#a30000"},{name:"CVSS 4.0 - 7.9",x:x,y:y["4to7.9"].count,fill:"#ec7a08"},{name:"CVSS 0.0 - 3.9",x:x,y:y["0to3.9"].count,fill:"#f0ab00"}]).map((function(e){return{name:"".concat(e.name),class:e.name,symbol:{fill:"".concat(e.fill),type:"circle"}}}))}return c.a.createElement(r.a,{isFilled:!1,className:"ins-c-card__vulnerability","data-ouia-safe":"pending"!==i},c.a.createElement(r.e,{title:m.formatMessage(u.a.vulnerabilitiesTitle)}),c.a.createElement(r.c,null,"fulfilled"!==i?c.a.createElement(s.a,null):c.a.createElement(p.a,{data:m.formatMessage(u.a.vulnerabilitiesTotalItems,{total:a.cves_total}),dataSize:"md",linkDescription:m.formatMessage(u.a.cvesImpactingSystems,{cves:a.cves_total}),layout:"horizontal",link:"".concat(f.v,"/vulnerability/")}),"fulfilled"!==i?c.a.createElement(s.a,null):c.a.createElement(b.a,{ariaDesc:m.formatMessage(u.a.cvesImpactingSystems,{cves:a.cves_total}),ariaTitle:"Vulnerabilities chart",height:40,width:600,maxWidth:600,legendHeight:36,legendWidth:600,data:d,legendData:o,legendClick:function(){return[{target:"labels",mutation:function(e){var t=e.datum.name.split("CVSS ")[1];window.location.href="".concat(f.v,"/vulnerability/cves?cvss_filter=").concat(g[t])}}]}})),c.a.createElement(l.Divider,null),"fulfilled"!==i?c.a.createElement(s.a,null):c.a.createElement(r.c,{isFilled:!1,isHorizontalLayout:"true"},c.a.createElement(p.a,{data:a.recent_cves.last90days,dataSize:"md",linkDescription:m.formatMessage(u.a.lastxdays,{days:90}),link:"".concat(f.v,"/vulnerability/cves?publish_date=last90")}),c.a.createElement(h,null),c.a.createElement(p.a,{data:a.recent_cves.last30days,dataSize:"md",linkDescription:m.formatMessage(u.a.lastxdays,{days:30}),link:"".concat(f.v,"/vulnerability/cves?publish_date=last30")}),c.a.createElement(h,null),c.a.createElement(p.a,{data:m.formatMessage(u.a.latestVulnerabilitiesTotal,{totalLatest:a.recent_cves.last7days}),dataSize:"md",linkDescription:m.formatMessage(u.a.lastxdays,{days:7}),link:"".concat(f.v,"/vulnerability/cves?publish_date=last7")})))};y.propTypes={fetchVulnerabilities:o.a.func,vulnerabilities:o.a.object,vulnerabilitiesFetchStatus:o.a.string};t.default=Object(m.connect)((function(e){var t=e.DashboardStore;return{vulnerabilities:t.vulnerabilities,vulnerabilitiesFetchStatus:t.vulnerabilitiesFetchStatus}}),(function(e){return{fetchVulnerabilities:function(t){return e(i.e(t))}}}))(y)},684:function(e,t,a){(t=a(6)(!1)).push([e.i,'.pf-c-divider{--pf-c-divider--Height: var(--pf-global--BorderWidth--sm);--pf-c-divider--BackgroundColor: var(--pf-global--BorderColor--100);--pf-c-divider--after--Height: var(--pf-c-divider--Height);--pf-c-divider--after--BackgroundColor: var(--pf-c-divider--BackgroundColor);--pf-c-divider--after--FlexBasis: 100%;--pf-c-divider--after--Inset: 0%;--pf-c-divider--m-vertical--after--FlexBasis: 100%;--pf-c-divider--m-vertical--after--Width: var(--pf-global--BorderWidth--sm);display:flex;align-items:center;align-self:stretch;justify-content:center;width:100%;border:0}.pf-c-divider::after{flex-basis:calc(var(--pf-c-divider--after--FlexBasis) - calc(var(--pf-c-divider--after--Inset) * 2));align-self:stretch;height:var(--pf-c-divider--after--Height);content:"";background-color:var(--pf-c-divider--after--BackgroundColor);justify-self:center}.pf-c-divider.pf-m-vertical{display:inline-flex;flex-direction:column;margin-left:24px;width:auto;height:inherit;min-height:100%;max-height:100%}.pf-c-divider.pf-m-vertical::after{flex-basis:calc(var(--pf-c-divider--m-vertical--after--FlexBasis) - var(--pf-c-divider--after--Inset));width:var(--pf-c-divider--m-vertical--after--Width)}\n',""]),e.exports=t}}]);
//# sourceMappingURL=10.js.map