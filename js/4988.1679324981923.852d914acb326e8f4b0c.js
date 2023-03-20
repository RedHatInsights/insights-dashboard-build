"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[4988],{96191:(e,t,a)=>{a.d(t,{J:()=>n,Z:()=>r});const n={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},r=n},33818:(e,t,a)=>{a.d(t,{u:()=>m});var n=a(45987),r=a(10310),s=a(80469),c=a(33101),i=a(93264),l=a.n(i),o=a(45697),d=a.n(o),u=["index"],m=function(e){var t=e.ariaDesc,a=e.ariaTitle,i=e.constrainToVisibleArea,o=e.data,d=e.legendData,m=e.padding,h=e.height,f=e.width,g=e.legendOrientation,p=e.colorScale,y=e.legend,b=e.legendWidth,v=e.legendHeight,_=e.legendClick,E=function(e){var t=e.index,s=(0,n.Z)(e,u);return l().createElement("a",{id:"".concat(a.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:_[t],className:"pf-c-button pf-m-link pf-m-inline"},l().createElement(r.Df,s))};return l().createElement("div",{className:"insd-c-pie-chart__row"},l().createElement("div",{style:{width:f,height:h,position:"relative"}},l().createElement(c.Td,{ariaDesc:t,ariaTitle:a,constrainToVisibleArea:i,data:o,height:h,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:m,width:f,colorScale:p}),l().createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a+" data"},l().createElement("tbody",null,o.map((function(e,t){return[l().createElement("tr",{key:t},l().createElement("td",null,e.y),l().createElement("td",null,e.x))]}))))),y&&l().createElement("div",{className:"insd-c-pie-chart__legend","aria-label":"Chart legend",style:{width:b,height:v}},l().createElement(s.Qk,{height:v,width:b,fontSize:14,data:d,rowGutter:{top:-5,bottom:-5},orientation:g,labelComponent:_&&l().createElement(E,null)})))};m.propTypes={ariaDesc:d().string,ariaTitle:d().string,constrainToVisibleArea:d().bool,data:d().array,legendData:d().array,padding:d().object,height:d().number,width:d().number,legendOrientation:d().string,colorScale:d().array,legend:d().bool,legendWidth:d().number,legendHeight:d().number,legendClick:d().any}},54988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(4942),r=a(28191),s=a(59303),c=a(93264),i=a.n(c),l=a(66794),o=a(98756),d=a(57149),u=a(47173),m=a(10358),h=a(37486),f=a(46891),g=a(33818),p=a(45697),y=a.n(p),b=a(55490),v=a(34925),_=a(1900),E=a(28216),S=a(96191),w=a(30893),O=a(86896);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){var t=e.systems,a=e.systemsStatus,n=e.fetchSystems,d=e.advisories,p=e.advisoriesStatus,y=e.fetchAdvisories,E=e.selectedTags,k=e.workloads,x=e.SID,D=(0,O.Z)(),P=[a,p].every((function(e){return"fulfilled"===e})),N=d||{},T=N.security,j=N.bugfix,A=N.enhancement,C=[{x:D.formatMessage(w.Z.securityAdvisories,{count:T}),y:T,fill:_.Z.value,url:"".concat(s.Pu,"/").concat(s._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=security")},{x:D.formatMessage(w.Z.bugfixAdvisories,{count:j}),y:j,fill:v.Z.value,url:"".concat(s.Pu,"/").concat(s._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=bugfix")},{x:D.formatMessage(w.Z.enhancementAdvisories,{count:A}),y:A,fill:b.Z.value,url:"".concat(s.Pu,"/").concat(s._1,"/advisories?offset=0&filter%5Badvisory_type_name%5D=enhancement")}],M=[b.Z.value,v.Z.value,_.Z.value];return(0,c.useEffect)((function(){var e=Z(Z({},(0,o.Rm)(k,x)),(null==E?void 0:E.length)>0&&{tags:E});n(e),y(e)}),[n,y,k,x,E]),"rejected"===a?i().createElement(l.wh,{appName:"PatchManager",className:"insd-c-dashboard__card--Patch"},i().createElement(l.ME,{subtitle:D.formatMessage(w.Z.patchTitle)}),i().createElement(l.jA,null,i().createElement(h.Z,{appName:"Patch",isSmall:!0}))):i().createElement(m.t,{appName:"PatchManager",isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_patch")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_patch",e)},title:D.formatMessage(w.Z.patchTitle),className:"insd-c-dashboard__card--Patch insd-m-toggle-right-on-md",body:i().createElement(l.jA,null,P?i().createElement(r.k,{direction:{default:"column"}},i().createElement(u.zx,{component:"a",href:"".concat(s.Pu,"/").concat(s._1,"/systems"),variant:"link",isInline:!0},i().createElement("span",null,D.formatMessage(w.Z.systemsAffected,{count:t}))),i().createElement("div",{className:"insd-c-dashboard__card-chart-container"},i().createElement("div",{className:"insd-c-dashboard__card-pie-chart"},i().createElement(g.u,{colorScale:P&&0===T&&0===j&&0===A?[S.Z.value]:M,ariaDesc:"Patch systems chart",ariaTitle:"Patch systems chart",constrainToVisibleArea:!0,data:C,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:{bottom:0,left:0,right:0,top:0}})),i().createElement("div",{className:"insd-c-dashboard__card-pie-chart-legend"},i().createElement("div",{className:"insd-c-legend"},C.map((function(e,t){return i().createElement("a",{key:e.url,href:e.url,className:"insd-c-legend__item"},i().createElement("span",{className:"insd-c-legend__dot",style:{"--insd-c-legend__dot--BackgroundColor":"".concat(M[t])}}),i().createElement("span",{className:"insd-c-legend__text"},e.y," ",(0,o.kC)(e.x)))})))))):i().createElement(f.Z,null))})};x.propTypes={systems:y().any,systemsStatus:y().string,fetchSystems:y().func,advisories:y().any,advisoriesStatus:y().string,fetchAdvisories:y().func,selectedTags:y().arrayOf(y().string),workloads:o.ib,SID:y().arrayOf(y().string)};const D=(0,E.$j)((function(e){var t=e.DashboardStore;return{systems:t.patchmanSystems,systemsStatus:t.patchmanSystemsStatus,advisories:t.patchmanAdvisories,advisoriesStatus:t.patchmanAdvisoriesStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchSystems:function(t){return e((0,d.Zw)(t))},fetchAdvisories:function(t){return e((0,d.cL)(t))}}}))(x)}}]);