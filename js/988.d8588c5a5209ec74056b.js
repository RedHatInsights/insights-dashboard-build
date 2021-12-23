"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[988],{54988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(4942),s=a(28191),c=a(59303),r=a(93264),u=a.n(r),i=a(66794),o=a(98756),l=a(57149),m=a(47173),d=a(10358),f=a(37486),h=a(46891),y=a(33818),g=a(45697),p=a.n(g),b=a(55490),S=a(34925),_=a(1900),v=a(82041),E=a(96191),O=a(30893),P=a(86896),Z=a(89319);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=function(e){var t=e.systems,a=e.systemsStatus,n=e.fetchSystems,l=e.fetchSecurity,g=e.securityStatus,p=e.security,v=e.bugs,k=e.fetchBugs,w=e.bugsStatus,x=e.enhancements,N=e.fetchEnhancements,D=e.enhancementsStatus,B=e.selectedTags,M=e.workloads,T=e.SID,A=(0,P.Z)(),C=[a,g,w,D].every((function(e){return"fulfilled"===e})),I=[{x:A.formatMessage(O.Z.securityAdvisories,{count:p}),y:p,fill:_.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=security")},{x:A.formatMessage(O.Z.bugfixAdvisories,{count:v}),y:v,fill:S.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=bugfix")},{x:A.formatMessage(O.Z.enhancementAdvisories,{count:x}),y:x,fill:b.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=enhancement")}],z=[b.Z.value,S.Z.value,_.Z.value];(0,r.useEffect)((function(){var e=j(j({},(0,o.nY)(M,T)),(null==B?void 0:B.length)>0&&{tags:B});n(e),l(e),k(e),N(e)}),[n,l,k,N,M,T,B]);var J=(0,Z.s)();return"rejected"===a?u().createElement(i.wh,{appName:"PatchManager",className:"insd-c-dashboard__card--Patch"},u().createElement(i.ME,{subtitle:A.formatMessage(O.Z.patchTitle)}),u().createElement(i.jA,null,u().createElement(f.Z,{appName:"Patch",isSmall:!0}))):u().createElement(d.t,{appName:"PatchManager",isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_patch")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_patch",e)},title:A.formatMessage(O.Z.patchTitle),className:"insd-c-dashboard__card--Patch insd-m-toggle-right-on-md",body:u().createElement(i.jA,null,C?u().createElement(s.k,{direction:{default:"column"}},u().createElement(m.zx,{component:"a",onClick:function(e){return J(e,"".concat(c.Pu,"/").concat(c._1,"/systems"))},href:"".concat(c.Pu,"/").concat(c._1,"/systems"),variant:"link",isInline:!0},u().createElement("span",null,A.formatMessage(O.Z.systemsAffected,{count:t}))),u().createElement("div",{className:"insd-c-dashboard__card-chart-container"},u().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},u().createElement(y.u,{colorScale:C&&0===p&&0===v&&0===x?[E.Z.value]:z,ariaDesc:"Patch systems chart",ariaTitle:"Patch systems chart",constrainToVisibleArea:!0,data:I,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:{bottom:0,left:0,right:0,top:0}})),u().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},u().createElement("div",{className:"insd-c-legend"},I.map((function(e,t){return u().createElement("a",{key:e.url,onClick:function(t){return J(t,e.url)},href:e.url,className:"insd-c-legend__item"},u().createElement("span",{className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(z[t])}}),u().createElement("span",{className:"insd-c-legend__text"},e.y," ",(0,o.kC)(e.x)))})))))):u().createElement(h.Z,null))})};w.propTypes={systems:p().any,systemsStatus:p().string,fetchSystems:p().func,fetchSecurity:p().func,security:p().any,securityStatus:p().string,fetchBugs:p().func,bugs:p().any,bugsStatus:p().string,fetchEnhancements:p().func,enhancements:p().any,enhancementsStatus:p().string,selectedTags:p().arrayOf(p().string),workloads:o.ib,SID:p().arrayOf(p().string)};const x=(0,v.connect)((function(e){var t=e.DashboardStore;return{systems:t.patchmanSystems,systemsStatus:t.patchmanSystemsStatus,security:t.patchmanSecurity,securityStatus:t.patchmanSecurityStatus,bugs:t.patchmanBugs,bugsStatus:t.patchmanBugsStatus,enhancements:t.patchmanEnhancements,enhancementsStatus:t.patchmanEnhancementsStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchSystems:function(t){return e((0,l.Zw)(t))},fetchSecurity:function(t){return e((0,l.yZ)(t))},fetchBugs:function(t){return e((0,l.Nx)(t))},fetchEnhancements:function(t){return e((0,l.rQ)(t))}}}))(w)}}]);
//# sourceMappingURL=../sourcemaps/988.c31793f163b34d84bfd0db86adc8da53.js.map