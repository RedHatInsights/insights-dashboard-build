(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1220:function(t,e,n){var a=n(8),s=n(814);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var c={insert:"head",singleton:!1},u=a(s,c),r=s.locals?s.locals:{};s.locals||t.hot.accept(814,(function(){var e=n(814);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[t.i,e,""]]),u(e)})),t.hot.dispose((function(){u()})),t.exports=r},1255:function(t,e,n){"use strict";n.r(e);var a=n(300),s=n(1),c=n.n(s),u=n(2),r=n.n(u),i=n(45),o=n(155),l=n(772),m=n(19),f=n(1011),h=n(703),y=n(731),g=n(693),d=(n(1220),function(t){var e=t.systems,n=t.systemsStatus,s=t.fetchSystems,c=t.fetchSecurity,u=t.securityStatus,i=t.security,o=t.bugs,l=t.fetchBugs,d=t.bugsStatus,p=t.enhancements,b=t.fetchEnhancements,S=t.enhancementsStatus,v=t.intl;r.a.useEffect((function(){s(),c(),l(),b()}),[s,c,l,b]);var E=[n,u,d,S].every((function(t){return"fulfilled"===t})),x=[{x:v.formatMessage(h.a.securityAdvisories,{count:i}),y:i,fill:"#004b95"},{x:v.formatMessage(h.a.bugfixAdvisories,{count:o}),y:o,fill:"#06c"},{x:v.formatMessage(h.a.enhancementAdvisories,{count:p}),y:p,fill:"#519de9"}],O=x.map((function(t){return{name:"".concat(t.y," ").concat(t.x),symbol:{fill:"".concat(t.fill),type:"circle"}}}));return r.a.createElement(g.a,{appName:"PatchManager",className:"ins-c-dashboard__card--Patch"},r.a.createElement(g.e,{subtitle:"Patch manager"}),r.a.createElement(g.c,null,E?r.a.createElement(r.a.Fragment,null,r.a.createElement(a.Button,{component:"a",href:"".concat(m.v,"/").concat(m.q,"/systems"),variant:"link",isInline:!0},r.a.createElement("span",null,v.formatMessage(h.a.systemsAffected,{count:e}))),r.a.createElement(f.a,{ariaDesc:"Operating systems used",ariaTitle:"Pie chart operating systems",constrainToVisibleArea:!0,data:x,labels:function(t){var e=t.datum;return"".concat(e.x,": ").concat(e.y)},padding:{bottom:0,left:0,right:0,top:0},height:65,width:65,colorScale:["#004b95","#06c","#519de9"],legend:"true",legendData:O,legendOrientation:"vertical",legendHeight:75,legendWidth:200})):r.a.createElement(y.a,null)))});d.propTypes={systems:c.a.number,systemsStatus:c.a.string,fetchSystems:c.a.func,fetchSecurity:c.a.func,security:c.a.number,securityStatus:c.a.string,fetchBugs:c.a.func,bugs:c.a.number,bugsStatus:c.a.string,fetchEnhancements:c.a.func,enhancements:c.a.number,enhancementsStatus:c.a.string,intl:c.a.any},e.default=Object(i.c)(Object(o.connect)((function(t){var e=t.DashboardStore;return{systems:e.patchmanSystems,systemsStatus:e.patchmanSystemsStatus,security:e.patchmanSecurity,securityStatus:e.patchmanSecurityStatus,bugs:e.patchmanBugs,bugsStatus:e.patchmanBugsStatus,enhancements:e.patchmanEnhancements,enhancementsStatus:e.patchmanEnhancementsStatus}}),(function(t){return{fetchSystems:function(e){return t(Object(l.k)(e))},fetchSecurity:function(e){return t(Object(l.j)(e))},fetchBugs:function(e){return t(Object(l.h)(e))},fetchEnhancements:function(e){return t(Object(l.i)(e))}}}))(d))},814:function(t,e,n){(e=n(7)(!1)).push([t.i,".ins-c-dashboard__card--Patch .pf-c-button.pf-m-link{text-align:left}\n",""]),t.exports=e}}]);
//# sourceMappingURL=15.js.map