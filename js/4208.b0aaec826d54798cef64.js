(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[4208],{722474:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(894015),s=a.n(n),r=a(923645),c=a.n(r)()(s());c.push([e.id,".dashboard .ins-c-patch__chart .pf-c-chart{margin-right:var(--pf-global--spacer--md);top:var(--pf-global--spacer--sm)}.dashboard .ins-c-pie-chart__legend .pf-c-chart{top:var(--pf-global--spacer--sm);left:var(--pf-global--spacer--md)}\n","",{version:3,sources:["webpack://./src/SmartComponents/PatchManager/PatchManagerCard.scss"],names:[],mappings:"AAAA,2CACgC,yCAAyC,CAAC,gCAAgC,CAD1G,gDACgJ,gCAAgC,CAAC,iCAAiC",sourcesContent:[".dashboard{\n.ins-c-patch__chart .pf-c-chart{margin-right:var(--pf-global--spacer--md);top:var(--pf-global--spacer--sm)}.ins-c-pie-chart__legend .pf-c-chart{top:var(--pf-global--spacer--sm);left:var(--pf-global--spacer--md)}\n\n}"],sourceRoot:""}]);const l=c},964208:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var n=a(896156),s=(a(656296),a(420999)),r=a(97522),c=a.n(r),l=a(681404),u=a(864169),i=a(481976),o=a(506202),f=a(858093),h=a(382141),m=a(285875),p=a(45697),g=a.n(p),d=a(119960),y=a(784076),b=a(618131),v=a(843476),S=a(518623),A=a(586896);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){var t=e.systems,a=e.systemsStatus,n=e.fetchSystems,u=e.fetchSecurity,p=e.securityStatus,g=e.security,v=e.bugs,E=e.fetchBugs,O=e.bugsStatus,P=e.enhancements,w=e.fetchEnhancements,_=e.enhancementsStatus,j=e.selectedTags,D=e.workloads,M=e.SID,Z=(0,A.Z)(),k=[a,p,O,_].every((function(e){return"fulfilled"===e})),T=[{x:Z.formatMessage(S.Z.securityAdvisories,{count:g}),y:g,fill:b.default.value},{x:Z.formatMessage(S.Z.bugfixAdvisories,{count:v}),y:v,fill:y.default.value},{x:Z.formatMessage(S.Z.enhancementAdvisories,{count:P}),y:P,fill:d.default.value}],x=T.map((function(e){return{name:"".concat(e.y," ").concat(e.x),symbol:{fill:"".concat(e.fill),type:"circle"}}})),N=[b.default.value,y.default.value,d.default.value];return(0,r.useEffect)((function(){var e=C(C({},(0,i.nY)(D,M)),(null==j?void 0:j.length)>0&&{tags:j});n(e),u(e),E(e),w(e)}),[n,u,E,w,D,M,j]),"rejected"===a?c().createElement(l.wh,{appName:"PatchManager",className:"ins-c-dashboard__card--Patch"},c().createElement(l.ME,{subtitle:Z.formatMessage(S.Z.patchTitle)}),c().createElement(l.jA,null,c().createElement(f.Z,{appName:"Patch",isSmall:!0}))):c().createElement(l.wh,{appName:"PatchManager",className:"ins-c-dashboard__card--Patch"},c().createElement(l.ME,{title:Z.formatMessage(S.Z.patchTitle),subtitle:c().createElement(o.Button,{component:"a",href:"".concat(s.Pu,"/").concat(s._1,"/systems"),variant:"link",isInline:!0},c().createElement("span",null,Z.formatMessage(S.Z.systemsAffected,{count:t})))}),c().createElement(l.jA,null,k?c().createElement(c().Fragment,null,c().createElement("div",{className:"ins-c-patch__chart"},c().createElement(m.u,{ariaDesc:"Patch systems chart",ariaTitle:"Patch systems chart",constrainToVisibleArea:!0,data:T,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:{bottom:0,left:0,right:0,top:0},height:65,width:65,colorScale:N,legend:"true",legendData:x,legendOrientation:"vertical",legendHeight:75,legendWidth:200}))):c().createElement(h.Z,null)))};O.propTypes={systems:g().number,systemsStatus:g().string,fetchSystems:g().func,fetchSecurity:g().func,security:g().number,securityStatus:g().string,fetchBugs:g().func,bugs:g().number,bugsStatus:g().string,fetchEnhancements:g().func,enhancements:g().number,enhancementsStatus:g().string,selectedTags:g().arrayOf(g().string),workloads:i.ib,SID:g().arrayOf(g().string)};const P=(0,v.connect)((function(e){var t=e.DashboardStore;return{systems:t.patchmanSystems,systemsStatus:t.patchmanSystemsStatus,security:t.patchmanSecurity,securityStatus:t.patchmanSecurityStatus,bugs:t.patchmanBugs,bugsStatus:t.patchmanBugsStatus,enhancements:t.patchmanEnhancements,enhancementsStatus:t.patchmanEnhancementsStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(e){return{fetchSystems:function(t){return e((0,u.Zw)(t))},fetchSecurity:function(t){return e((0,u.yZ)(t))},fetchBugs:function(t){return e((0,u.Nx)(t))},fetchEnhancements:function(t){return e((0,u.rQ)(t))}}}))(O)},656296:(e,t,a)=>{"use strict";var n=a(893379),s=a.n(n),r=a(722474),c=s()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var l=r.default.locals;e.hot.accept(722474,(t=>{r=a(722474),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(l,r.default.locals)?(l=r.default.locals,c(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){c()})),r.default.locals}}]);
//# sourceMappingURL=4208.b0aaec826d54798cef64.js.map