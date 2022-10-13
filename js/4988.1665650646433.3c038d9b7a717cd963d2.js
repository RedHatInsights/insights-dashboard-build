"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[4988],{96191:(e,t,a)=>{a.d(t,{J:()=>n,Z:()=>r});const n={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},r=n},33818:(e,t,a)=>{a.d(t,{u:()=>m});var n=a(45987),r=a(10310),c=a(80469),s=a(33101),l=a(93264),i=a.n(l),o=a(45697),u=a.n(o),d=["index"],m=function(e){var t=e.ariaDesc,a=e.ariaTitle,l=e.constrainToVisibleArea,o=e.data,u=e.legendData,m=e.padding,h=e.height,f=e.width,g=e.legendOrientation,y=e.colorScale,p=e.legend,b=e.legendWidth,v=e.legendHeight,E=e.legendClick,S=function(e){var t=e.index,c=(0,n.Z)(e,d);return i().createElement("a",{id:"".concat(a.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:E[t],className:"pf-c-button pf-m-link pf-m-inline"},i().createElement(r.Df,c))};return i().createElement("div",{className:"insd-c-pie-chart__row"},i().createElement("div",{style:{width:f,height:h,position:"relative"}},i().createElement(s.Td,{ariaDesc:t,ariaTitle:a,constrainToVisibleArea:l,data:o,height:h,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:m,width:f,colorScale:y}),i().createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a+" data"},i().createElement("tbody",null,o.map((function(e,t){return[i().createElement("tr",{key:t},i().createElement("td",null,e.y),i().createElement("td",null,e.x))]}))))),p&&i().createElement("div",{className:"insd-c-pie-chart__legend","aria-label":"Chart legend",style:{width:b,height:v}},i().createElement(c.Qk,{height:v,width:b,fontSize:14,data:u,rowGutter:{top:-5,bottom:-5},orientation:g,labelComponent:E&&i().createElement(S,null)})))};m.propTypes={ariaDesc:u().string,ariaTitle:u().string,constrainToVisibleArea:u().bool,data:u().array,legendData:u().array,padding:u().object,height:u().number,width:u().number,legendOrientation:u().string,colorScale:u().array,legend:u().bool,legendWidth:u().number,legendHeight:u().number,legendClick:u().any}},54988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(4942),r=a(28191),c=a(59303),s=a(93264),l=a.n(s),i=a(66794),o=a(98756),u=a(57149),d=a(47173),m=a(10358),h=a(37486),f=a(46891),g=a(33818),y=a(45697),p=a.n(y),b=a(55490),v=a(34925),E=a(1900),S=a(28216),_=a(96191),w=a(30893),k=a(86896),O=a(89319);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){var t=e.systems,a=e.systemsStatus,n=e.fetchSystems,u=e.fetchSecurity,y=e.securityStatus,p=e.security,S=e.bugs,Z=e.fetchBugs,x=e.bugsStatus,D=e.enhancements,N=e.fetchEnhancements,T=e.enhancementsStatus,j=e.selectedTags,C=e.workloads,A=e.SID,B=(0,k.Z)(),M=[a,y,x,T].every((function(e){return"fulfilled"===e})),I=[{x:B.formatMessage(w.Z.securityAdvisories,{count:p}),y:p,fill:E.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=security")},{x:B.formatMessage(w.Z.bugfixAdvisories,{count:S}),y:S,fill:v.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=bugfix")},{x:B.formatMessage(w.Z.enhancementAdvisories,{count:D}),y:D,fill:b.Z.value,url:"".concat(c.Pu,"/").concat(c._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=enhancement")}],V=[b.Z.value,v.Z.value,E.Z.value];(0,s.useEffect)((function(){var e=P(P({},(0,o.Rm)(C,A)),(null==j?void 0:j.length)>0&&{tags:j});n(e),u(e),Z(e),N(e)}),[n,u,Z,N,C,A,j]);var z=(0,O.s)();return"rejected"===a?l().createElement(i.wh,{appName:"PatchManager",className:"insd-c-dashboard__card--Patch"},l().createElement(i.ME,{subtitle:B.formatMessage(w.Z.patchTitle)}),l().createElement(i.jA,null,l().createElement(h.Z,{appName:"Patch",isSmall:!0}))):l().createElement(m.t,{appName:"PatchManager",isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_patch")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_patch",e)},title:B.formatMessage(w.Z.patchTitle),className:"insd-c-dashboard__card--Patch insd-m-toggle-right-on-md",body:l().createElement(i.jA,null,M?l().createElement(r.k,{direction:{default:"column"}},l().createElement(d.zx,{component:"a",onClick:function(e){return z(e,"".concat(c.Pu,"/").concat(c._1,"/systems"))},href:"".concat(c.Pu,"/").concat(c._1,"/systems"),variant:"link",isInline:!0},l().createElement("span",null,B.formatMessage(w.Z.systemsAffected,{count:t}))),l().createElement("div",{className:"insd-c-dashboard__card-chart-container"},l().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},l().createElement(g.u,{colorScale:M&&0===p&&0===S&&0===D?[_.Z.value]:V,ariaDesc:"Patch systems chart",ariaTitle:"Patch systems chart",constrainToVisibleArea:!0,data:I,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:{bottom:0,left:0,right:0,top:0}})),l().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},l().createElement("div",{className:"insd-c-legend"},I.map((function(e,t){return l().createElement("a",{key:e.url,onClick:function(t){return z(t,e.url)},href:e.url,className:"insd-c-legend__item"},l().createElement("span",{className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(V[t])}}),l().createElement("span",{className:"insd-c-legend__text"},e.y," ",(0,o.kC)(e.x)))})))))):l().createElement(f.Z,null))})};x.propTypes={systems:p().any,systemsStatus:p().string,fetchSystems:p().func,fetchSecurity:p().func,security:p().any,securityStatus:p().string,fetchBugs:p().func,bugs:p().any,bugsStatus:p().string,fetchEnhancements:p().func,enhancements:p().any,enhancementsStatus:p().string,selectedTags:p().arrayOf(p().string),workloads:o.ib,SID:p().arrayOf(p().string)};const D=(0,S.$j)((function(e){var t=e.DashboardStore;return{systems:t.patchmanSystems,systemsStatus:t.patchmanSystemsStatus,security:t.patchmanSecurity,securityStatus:t.patchmanSecurityStatus,bugs:t.patchmanBugs,bugsStatus:t.patchmanBugsStatus,enhancements:t.patchmanEnhancements,enhancementsStatus:t.patchmanEnhancementsStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchSystems:function(t){return e((0,u.Zw)(t))},fetchSecurity:function(t){return e((0,u.yZ)(t))},fetchBugs:function(t){return e((0,u.Nx)(t))},fetchEnhancements:function(t){return e((0,u.rQ)(t))}}}))(x)}}]);
//# sourceMappingURL=../sourcemaps/4988.90cbfda0b12e8c448c658b5a3f16332a.js.map