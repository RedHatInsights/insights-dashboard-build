(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1234:function(e,t,a){var n=a(7),c=a(694);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var s={insert:"head",singleton:!1},r=n(c,s),u=c.locals?c.locals:{};c.locals||e.hot.accept(694,(function(){var t=a(694);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),r(t)})),e.hot.dispose((function(){r()})),e.exports=u},1343:function(e,t,a){"use strict";a.r(t);var n=a(514),c=a(1),s=a.n(c),r=a(2),u=a.n(r),l=a(337),i=a(183),o=a(567),m=a(10),h=a(890),f=a(518),p=a(577),g=a(575),d=(a(1234),a(184)),b=a(568),y=function(e){var t=e.systems,a=e.systemsStatus,c=e.fetchSystems,s=e.fetchSecurity,r=e.securityStatus,i=e.security,o=e.bugs,y=e.fetchBugs,_=e.bugsStatus,S=e.enhancements,v=e.fetchEnhancements,E=e.enhancementsStatus;u.a.useEffect((function(){c(),s(),y(),v()}),[c,s,y,v]);var M=Object(l.a)(),x=[a,r,_,E].every((function(e){return"fulfilled"===e})),O=[{x:M.formatMessage(f.a.securityAdvisories,{count:i}),y:i,fill:d.chart_color_blue_400.value},{x:M.formatMessage(f.a.bugfixAdvisories,{count:o}),y:o,fill:d.chart_color_blue_200.value},{x:M.formatMessage(f.a.enhancementAdvisories,{count:S}),y:S,fill:d.chart_color_blue_300.value}],j=O.map((function(e){return{name:"".concat(e.y," ").concat(e.x),symbol:{fill:"".concat(e.fill),type:"circle"}}})),w=[d.chart_color_blue_400.value,d.chart_color_blue_300.value,d.chart_color_blue_200.value];return"rejected"===a?u.a.createElement(g.a,{appName:"PatchManager",className:"ins-c-dashboard__card--Patch"},u.a.createElement(g.d,{subtitle:M.formatMessage(f.a.patchTitle)}),u.a.createElement(g.b,null,u.a.createElement(b.a,{appName:"Patch",isSmall:!0}))):u.a.createElement(g.a,{appName:"PatchManager",className:"ins-c-dashboard__card--Patch"},u.a.createElement(g.d,{subtitle:M.formatMessage(f.a.patchTitle)}),u.a.createElement(g.b,null,x?u.a.createElement(u.a.Fragment,null,u.a.createElement(n.Button,{component:"a",href:"".concat(m.G,"/").concat(m.u,"/systems"),variant:"link",isInline:!0},u.a.createElement("span",null,M.formatMessage(f.a.systemsAffected,{count:t}))),u.a.createElement("div",{className:"ins-c-patch__chart"},u.a.createElement(h.a,{ariaDesc:"Operating systems used",ariaTitle:"Pie chart operating systems",constrainToVisibleArea:!0,data:O,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:{bottom:0,left:0,right:0,top:0},height:65,width:65,colorScale:w,legend:"true",legendData:j,legendOrientation:"vertical",legendHeight:75,legendWidth:200}))):u.a.createElement(p.a,null)))};y.propTypes={systems:s.a.number,systemsStatus:s.a.string,fetchSystems:s.a.func,fetchSecurity:s.a.func,security:s.a.number,securityStatus:s.a.string,fetchBugs:s.a.func,bugs:s.a.number,bugsStatus:s.a.string,fetchEnhancements:s.a.func,enhancements:s.a.number,enhancementsStatus:s.a.string},t.default=Object(i.connect)((function(e){var t=e.DashboardStore;return{systems:t.patchmanSystems,systemsStatus:t.patchmanSystemsStatus,security:t.patchmanSecurity,securityStatus:t.patchmanSecurityStatus,bugs:t.patchmanBugs,bugsStatus:t.patchmanBugsStatus,enhancements:t.patchmanEnhancements,enhancementsStatus:t.patchmanEnhancementsStatus}}),(function(e){return{fetchSystems:function(t){return e(Object(o.n)(t))},fetchSecurity:function(t){return e(Object(o.m)(t))},fetchBugs:function(t){return e(Object(o.k)(t))},fetchEnhancements:function(t){return e(Object(o.l)(t))}}}))(y)},694:function(e,t,a){(t=a(6)(!1)).push([e.i,".ins-c-patch__chart{padding-top:var(--pf-global--spacer--sm)}.ins-c-patch__chart .pf-c-chart{margin-right:var(--pf-global--spacer--md);top:var(--pf-global--spacer--sm)}.ins-c-pie-chart__legend .pf-c-chart{top:var(--pf-global--spacer--sm);left:var(--pf-global--spacer--md)}\n",""]),e.exports=t}}]);
//# sourceMappingURL=13.js.map