(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[988],{54988:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var s=a(96156),n=a(28191),c=a(59303),r=a(93264),u=a.n(r),i=a(66794),o=a(98756),l=a(57149),m=a(47173),d=a(10358),f=a(37486),h=a(46891),y=a(33818),g=a(45697),p=a.n(g),b=a(55490),S=a(34925),v=a(1900),_=a(88931),E=a(96191),O=a(30893),P=a(86896);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){var t=e.systems,a=e.systemsStatus,s=e.fetchSystems,l=e.fetchSecurity,g=e.securityStatus,p=e.security,_=e.bugs,Z=e.fetchBugs,j=e.bugsStatus,w=e.enhancements,N=e.fetchEnhancements,x=e.enhancementsStatus,D=e.selectedTags,B=e.workloads,M=e.SID,T=(0,P.Z)(),A=[a,g,j,x].every((function(e){return"fulfilled"===e})),I=[{x:T.formatMessage(O.Z.securityAdvisories,{count:p}),y:p,fill:v.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type%5D=3")},{x:T.formatMessage(O.Z.bugfixAdvisories,{count:_}),y:_,fill:S.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type%5D=2")},{x:T.formatMessage(O.Z.enhancementAdvisories,{count:w}),y:w,fill:b.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type%5D=1")}],C=[b.Z.value,S.Z.value,v.Z.value];return(0,r.useEffect)((function(){var e=k(k({},(0,o.nY)(B,M)),(null==D?void 0:D.length)>0&&{tags:D});s(e),l(e),Z(e),N(e)}),[s,l,Z,N,B,M,D]),"rejected"===a?u().createElement(i.wh,{appName:"PatchManager",className:"ins-c-dashboard__card--Patch"},u().createElement(i.ME,{subtitle:T.formatMessage(O.Z.patchTitle)}),u().createElement(i.jA,null,u().createElement(f.Z,{appName:"Patch",isSmall:!0}))):u().createElement(d.t,{appName:"PatchManager",isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_patch")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_patch",e)},title:T.formatMessage(O.Z.patchTitle),className:"ins-c-dashboard__card--Patch ins-m-toggle-right-on-md",body:u().createElement(i.jA,null,A?u().createElement(n.k,{direction:{default:"column"}},u().createElement(m.zx,{component:"a",href:"".concat(c.Pu,"/").concat(c._1,"/systems"),variant:"link",isInline:!0},u().createElement("span",null,T.formatMessage(O.Z.systemsAffected,{count:t}))),u().createElement("div",{className:"ins-c-dashboard__card-chart-container"},u().createElement("div",{className:"ins-c-dashboard__card-pie-chart"},u().createElement(y.u,{colorScale:A&&0===p&&0===_&&0===w?[E.Z.value]:C,ariaDesc:"Patch systems chart",ariaTitle:"Patch systems chart",constrainToVisibleArea:!0,data:I,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:{bottom:0,left:0,right:0,top:0}})),u().createElement("div",{className:"ins-c-dashboard__card-pie-chart-legend"},u().createElement("div",{className:"ins-c-legend"},I.map((function(e,t){return u().createElement("a",{key:e.url,href:e.url,className:"ins-c-legend__item"},u().createElement("span",{className:"ins-c-legend__dot",style:{"--ins-c-legend__dot--BackgroundColor":"".concat(C[t])}}),u().createElement("span",{className:"ins-c-legend__text"},e.y," ",(0,o.kC)(e.x)))})))))):u().createElement(h.Z,null))})};j.propTypes={systems:p().any,systemsStatus:p().string,fetchSystems:p().func,fetchSecurity:p().func,security:p().any,securityStatus:p().string,fetchBugs:p().func,bugs:p().any,bugsStatus:p().string,fetchEnhancements:p().func,enhancements:p().any,enhancementsStatus:p().string,selectedTags:p().arrayOf(p().string),workloads:o.ib,SID:p().arrayOf(p().string)};const w=(0,_.connect)((function(e){var t=e.DashboardStore;return{systems:t.patchmanSystems,systemsStatus:t.patchmanSystemsStatus,security:t.patchmanSecurity,securityStatus:t.patchmanSecurityStatus,bugs:t.patchmanBugs,bugsStatus:t.patchmanBugsStatus,enhancements:t.patchmanEnhancements,enhancementsStatus:t.patchmanEnhancementsStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchSystems:function(t){return e((0,l.Zw)(t))},fetchSecurity:function(t){return e((0,l.yZ)(t))},fetchBugs:function(t){return e((0,l.Nx)(t))},fetchEnhancements:function(t){return e((0,l.rQ)(t))}}}))(j)}}]);
//# sourceMappingURL=../sourcemaps/988.ebd0f26c593c4ca1fdc7.js.map