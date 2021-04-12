(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[6270],{36270:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var s=a(96156),n=(a(59123),a(28191)),r=a(92298),c=a(71221),l=a(93264),i=a.n(l),o=a(50845),u=a(54490),f=a(72474),h=a(47173),m=a(58658),d=a(8116),p=a(13317),g=a(19188),y=a(45697),b=a.n(y),v=a(55490),S=a(34925),_=a(1900),E=a(77121),A=a(96191),C=a(60578),O=a(59458);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(e){var t=e.systems,a=e.systemsStatus,s=e.fetchSystems,f=e.fetchSecurity,y=e.securityStatus,b=e.security,E=e.bugs,Z=e.fetchBugs,k=e.bugsStatus,w=e.enhancements,D=e.fetchEnhancements,j=e.enhancementsStatus,x=e.selectedTags,I=e.workloads,M=e.SID,N=(0,O.Z)(),B=[a,y,k,j].every((function(e){return"fulfilled"===e})),T=[{x:N.formatMessage(C.Z.securityAdvisories,{count:b}),y:b,fill:_.Z.value,url:"/insights/patch/advisories?offset=0&filter%5Badvisory_type%5D=3"},{x:N.formatMessage(C.Z.bugfixAdvisories,{count:E}),y:E,fill:S.Z.value,url:"/insights/patch/advisories?offset=0&filter%5Badvisory_type%5D=2"},{x:N.formatMessage(C.Z.enhancementAdvisories,{count:w}),y:w,fill:v.Z.value,url:"/insights/patch/advisories?offset=0&filter%5Badvisory_type%5D=1"}],J=[v.Z.value,S.Z.value,_.Z.value];return(0,l.useEffect)((function(){var e=P(P({},(0,u.nY)(I,M)),(null==x?void 0:x.length)>0&&{tags:x});s(e),f(e),Z(e),D(e)}),[s,f,Z,D,I,M,x]),"rejected"===a?i().createElement(o.wh,{appName:"PatchManager",className:"ins-c-dashboard__card--Patch"},i().createElement(o.ME,{subtitle:N.formatMessage(C.Z.patchTitle)}),i().createElement(o.jA,null,i().createElement(d.Z,{appName:"Patch",isSmall:!0}))):i().createElement(m.t,{appName:"PatchManager",isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_patch")||"true"),isExpandedCallback:function(e){return localStorage.setItem("dashboard_expanded_patch",e)},title:N.formatMessage(C.Z.patchTitle),className:"ins-c-dashboard__card--Patch ins-m-toggle-right-on-md",body:i().createElement(o.jA,null,B?i().createElement(n.k,{direction:{default:"column"}},i().createElement(h.zx,{component:"a",href:"".concat(c.Pu,"/").concat(c._1,"/systems"),variant:"link",isInline:!0},i().createElement("span",null,N.formatMessage(C.Z.systemsAffected,{count:t}))),i().createElement(n.k,{alignItems:{default:"alignItemsCenter"},spaceItems:{default:"spaceItemsXl"}},i().createElement(r.B,null,i().createElement(g.u,{colorScale:B&&0===b&&0===E&&0===w?[A.Z.value]:J,ariaDesc:"Patch systems chart",ariaTitle:"Patch systems chart",constrainToVisibleArea:!0,data:T,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:{bottom:0,left:0,right:0,top:0},height:100,width:100})),i().createElement("div",{className:"ins-c-legend"},T.map((function(e,t){return i().createElement("a",{key:e.url,href:e.url,className:"ins-c-legend__item"},i().createElement("span",{className:"ins-c-legend__dot",style:{"--ins-c-legend__dot--BackgroundColor":"".concat(J[t])}}),i().createElement("span",{className:"ins-c-legend__text"},e.y," ",(0,u.kC)(e.x)))}))))):i().createElement(p.Z,null))})};k.propTypes={systems:b().any,systemsStatus:b().string,fetchSystems:b().func,fetchSecurity:b().func,security:b().any,securityStatus:b().string,fetchBugs:b().func,bugs:b().any,bugsStatus:b().string,fetchEnhancements:b().func,enhancements:b().any,enhancementsStatus:b().string,selectedTags:b().arrayOf(b().string),workloads:u.ib,SID:b().arrayOf(b().string)};const w=(0,E.connect)((function(e){var t=e.DashboardStore;return{systems:t.patchmanSystems,systemsStatus:t.patchmanSystemsStatus,security:t.patchmanSecurity,securityStatus:t.patchmanSecurityStatus,bugs:t.patchmanBugs,bugsStatus:t.patchmanBugsStatus,enhancements:t.patchmanEnhancements,enhancementsStatus:t.patchmanEnhancementsStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchSystems:function(t){return e((0,f.Zw)(t))},fetchSecurity:function(t){return e((0,f.yZ)(t))},fetchBugs:function(t){return e((0,f.Nx)(t))},fetchEnhancements:function(t){return e((0,f.rQ)(t))}}}))(k)},15932:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(94015),n=a.n(s),r=a(23645),c=a.n(r)()(n());c.push([e.id,".dashboard .ins-c-patch__chart .pf-c-chart{margin-right:var(--pf-global--spacer--md);top:var(--pf-global--spacer--sm)}.dashboard .ins-c-pie-chart__legend .pf-c-chart{top:var(--pf-global--spacer--sm);left:var(--pf-global--spacer--md)}\n","",{version:3,sources:["webpack://./src/SmartComponents/PatchManager/PatchManagerCard.scss"],names:[],mappings:"AAAA,2CACgC,yCAAyC,CAAC,gCAAgC,CAD1G,gDACgJ,gCAAgC,CAAC,iCAAiC",sourcesContent:[".dashboard{\n.ins-c-patch__chart .pf-c-chart{margin-right:var(--pf-global--spacer--md);top:var(--pf-global--spacer--sm)}.ins-c-pie-chart__legend .pf-c-chart{top:var(--pf-global--spacer--sm);left:var(--pf-global--spacer--md)}\n\n}"],sourceRoot:""}]);const l=c},59123:(e,t,a)=>{"use strict";var s=a(93379),n=a.n(s),r=a(15932),c=n()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var l=r.default.locals;e.hot.accept(15932,(t=>{r=a(15932),function(e,t,a){if(!e&&t||e&&!t)return!1;var s;for(s in e)if(e[s]!==t[s])return!1;for(s in t)if(!e[s])return!1;return!0}(l,r.default.locals)?(l=r.default.locals,c(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){c()})),r.default.locals}}]);