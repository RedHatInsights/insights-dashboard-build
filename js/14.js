(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1231:function(t,e,n){var a=n(7),s=n(692);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var c={insert:"head",singleton:!1},u=a(s,c),r=s.locals?s.locals:{};s.locals||t.hot.accept(692,(function(){var e=n(692);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[t.i,e,""]]),u(e)})),t.hot.dispose((function(){u()})),t.exports=r},1283:function(t,e,n){"use strict";n.r(e);var a=n(298),s=n(1),c=n.n(s),u=n(2),r=n.n(u),i=n(331),o=n(155),l=n(619),m=n(18),f=n(892),h=n(576),g=n(605),y=n(569),d=(n(1231),function(t){var e=t.systems,n=t.systemsStatus,s=t.fetchSystems,c=t.fetchSecurity,u=t.securityStatus,o=t.security,l=t.bugs,d=t.fetchBugs,p=t.bugsStatus,b=t.enhancements,S=t.fetchEnhancements,v=t.enhancementsStatus;r.a.useEffect((function(){s(),c(),d(),S()}),[s,c,d,S]);var E=Object(i.a)(),x=[n,u,p,v].every((function(t){return"fulfilled"===t})),O=[{x:E.formatMessage(h.a.securityAdvisories,{count:o}),y:o,fill:"#004b95"},{x:E.formatMessage(h.a.bugfixAdvisories,{count:l}),y:l,fill:"#06c"},{x:E.formatMessage(h.a.enhancementAdvisories,{count:b}),y:b,fill:"#519de9"}],_=O.map((function(t){return{name:"".concat(t.y," ").concat(t.x),symbol:{fill:"".concat(t.fill),type:"circle"}}}));return r.a.createElement(y.a,{appName:"PatchManager",className:"ins-c-dashboard__card--Patch"},r.a.createElement(y.e,{subtitle:"Patch manager"}),r.a.createElement(y.c,null,x?r.a.createElement(r.a.Fragment,null,r.a.createElement(a.Button,{component:"a",href:"".concat(m.v,"/").concat(m.m,"/systems"),variant:"link",isInline:!0},r.a.createElement("span",null,E.formatMessage(h.a.systemsAffected,{count:e}))),r.a.createElement(f.a,{ariaDesc:"Operating systems used",ariaTitle:"Pie chart operating systems",constrainToVisibleArea:!0,data:O,labels:function(t){var e=t.datum;return"".concat(e.x,": ").concat(e.y)},padding:{bottom:0,left:0,right:0,top:0},height:65,width:65,colorScale:["#004b95","#06c","#519de9"],legend:"true",legendData:_,legendOrientation:"vertical",legendHeight:75,legendWidth:200})):r.a.createElement(g.a,null)))});d.propTypes={systems:c.a.number,systemsStatus:c.a.string,fetchSystems:c.a.func,fetchSecurity:c.a.func,security:c.a.number,securityStatus:c.a.string,fetchBugs:c.a.func,bugs:c.a.number,bugsStatus:c.a.string,fetchEnhancements:c.a.func,enhancements:c.a.number,enhancementsStatus:c.a.string},e.default=Object(o.connect)((function(t){var e=t.DashboardStore;return{systems:e.patchmanSystems,systemsStatus:e.patchmanSystemsStatus,security:e.patchmanSecurity,securityStatus:e.patchmanSecurityStatus,bugs:e.patchmanBugs,bugsStatus:e.patchmanBugsStatus,enhancements:e.patchmanEnhancements,enhancementsStatus:e.patchmanEnhancementsStatus}}),(function(t){return{fetchSystems:function(e){return t(Object(l.i)(e))},fetchSecurity:function(e){return t(Object(l.h)(e))},fetchBugs:function(e){return t(Object(l.f)(e))},fetchEnhancements:function(e){return t(Object(l.g)(e))}}}))(d)},692:function(t,e,n){(e=n(6)(!1)).push([t.i,".ins-c-dashboard__card--Patch .pf-c-button.pf-m-link{text-align:left}\n",""]),t.exports=e}}]);
//# sourceMappingURL=14.js.map