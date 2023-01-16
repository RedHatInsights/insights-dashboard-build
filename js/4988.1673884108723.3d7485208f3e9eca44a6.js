"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[4988],{96191:(e,t,a)=>{a.d(t,{J:()=>n,Z:()=>r});const n={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},r=n},33818:(e,t,a)=>{a.d(t,{u:()=>m});var n=a(45987),r=a(10310),s=a(80469),c=a(33101),l=a(93264),i=a.n(l),o=a(45697),d=a.n(o),u=["index"],m=function(e){var t=e.ariaDesc,a=e.ariaTitle,l=e.constrainToVisibleArea,o=e.data,d=e.legendData,m=e.padding,h=e.height,g=e.width,f=e.legendOrientation,p=e.colorScale,y=e.legend,b=e.legendWidth,v=e.legendHeight,E=e.legendClick,S=function(e){var t=e.index,s=(0,n.Z)(e,u);return i().createElement("a",{id:"".concat(a.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:E[t],className:"pf-c-button pf-m-link pf-m-inline"},i().createElement(r.Df,s))};return i().createElement("div",{className:"insd-c-pie-chart__row"},i().createElement("div",{style:{width:g,height:h,position:"relative"}},i().createElement(c.Td,{ariaDesc:t,ariaTitle:a,constrainToVisibleArea:l,data:o,height:h,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:m,width:g,colorScale:p}),i().createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a+" data"},i().createElement("tbody",null,o.map((function(e,t){return[i().createElement("tr",{key:t},i().createElement("td",null,e.y),i().createElement("td",null,e.x))]}))))),y&&i().createElement("div",{className:"insd-c-pie-chart__legend","aria-label":"Chart legend",style:{width:b,height:v}},i().createElement(s.Qk,{height:v,width:b,fontSize:14,data:d,rowGutter:{top:-5,bottom:-5},orientation:f,labelComponent:E&&i().createElement(S,null)})))};m.propTypes={ariaDesc:d().string,ariaTitle:d().string,constrainToVisibleArea:d().bool,data:d().array,legendData:d().array,padding:d().object,height:d().number,width:d().number,legendOrientation:d().string,colorScale:d().array,legend:d().bool,legendWidth:d().number,legendHeight:d().number,legendClick:d().any}},54988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(4942),r=a(28191),s=a(59303),c=a(93264),l=a.n(c),i=a(66794),o=a(98756),d=a(57149),u=a(47173),m=a(10358),h=a(37486),g=a(46891),f=a(33818),p=a(45697),y=a.n(p),b=a(55490),v=a(34925),E=a(1900),S=a(28216),_=a(96191),w=a(30893),O=a(86896);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){var t=e.systems,a=e.systemsStatus,n=e.fetchSystems,d=e.fetchSecurity,p=e.securityStatus,y=e.security,S=e.bugs,Z=e.fetchBugs,x=e.bugsStatus,D=e.enhancements,P=e.fetchEnhancements,N=e.enhancementsStatus,T=e.selectedTags,j=e.workloads,A=e.SID,C=(0,O.Z)(),B=[a,p,x,N].every((function(e){return"fulfilled"===e})),M=[{x:C.formatMessage(w.Z.securityAdvisories,{count:y}),y,fill:E.Z.value,url:"".concat(s.Pu,"/").concat(s._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=security")},{x:C.formatMessage(w.Z.bugfixAdvisories,{count:S}),y:S,fill:v.Z.value,url:"".concat(s.Pu,"/").concat(s._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=bugfix")},{x:C.formatMessage(w.Z.enhancementAdvisories,{count:D}),y:D,fill:b.Z.value,url:"".concat(s.Pu,"/").concat(s._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=enhancement")}],I=[b.Z.value,v.Z.value,E.Z.value];return(0,c.useEffect)((function(){var e=k(k({},(0,o.Rm)(j,A)),(null==T?void 0:T.length)>0&&{tags:T});n(e),d(e),Z(e),P(e)}),[n,d,Z,P,j,A,T]),"rejected"===a?l().createElement(i.wh,{appName:"PatchManager",className:"insd-c-dashboard__card--Patch"},l().createElement(i.ME,{subtitle:C.formatMessage(w.Z.patchTitle)}),l().createElement(i.jA,null,l().createElement(h.Z,{appName:"Patch",isSmall:!0}))):l().createElement(m.t,{appName:"PatchManager",isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_patch")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_patch",e)},title:C.formatMessage(w.Z.patchTitle),className:"insd-c-dashboard__card--Patch insd-m-toggle-right-on-md",body:l().createElement(i.jA,null,B?l().createElement(r.k,{direction:{default:"column"}},l().createElement(u.zx,{component:"a",href:"".concat(s.Pu,"/").concat(s._1,"/systems"),variant:"link",isInline:!0},l().createElement("span",null,C.formatMessage(w.Z.systemsAffected,{count:t}))),l().createElement("div",{className:"insd-c-dashboard__card-chart-container"},l().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},l().createElement(f.u,{colorScale:B&&0===y&&0===S&&0===D?[_.Z.value]:I,ariaDesc:"Patch systems chart",ariaTitle:"Patch systems chart",constrainToVisibleArea:!0,data:M,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:{bottom:0,left:0,right:0,top:0}})),l().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},l().createElement("div",{className:"insd-c-legend"},M.map((function(e,t){return l().createElement("a",{key:e.url,href:e.url,className:"insd-c-legend__item"},l().createElement("span",{className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(I[t])}}),l().createElement("span",{className:"insd-c-legend__text"},e.y," ",(0,o.kC)(e.x)))})))))):l().createElement(g.Z,null))})};x.propTypes={systems:y().any,systemsStatus:y().string,fetchSystems:y().func,fetchSecurity:y().func,security:y().any,securityStatus:y().string,fetchBugs:y().func,bugs:y().any,bugsStatus:y().string,fetchEnhancements:y().func,enhancements:y().any,enhancementsStatus:y().string,selectedTags:y().arrayOf(y().string),workloads:o.ib,SID:y().arrayOf(y().string)};const D=(0,S.$j)((function(e){var t=e.DashboardStore;return{systems:t.patchmanSystems,systemsStatus:t.patchmanSystemsStatus,security:t.patchmanSecurity,securityStatus:t.patchmanSecurityStatus,bugs:t.patchmanBugs,bugsStatus:t.patchmanBugsStatus,enhancements:t.patchmanEnhancements,enhancementsStatus:t.patchmanEnhancementsStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchSystems:function(t){return e((0,d.Zw)(t))},fetchSecurity:function(t){return e((0,d.yZ)(t))},fetchBugs:function(t){return e((0,d.Nx)(t))},fetchEnhancements:function(t){return e((0,d.rQ)(t))}}}))(x)}}]);