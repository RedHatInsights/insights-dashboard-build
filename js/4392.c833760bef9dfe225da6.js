(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[4392],{29849:(i,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var e=a(94015),n=a.n(e),l=a(23645),r=a.n(l)()(n());r.push([i.id,".dashboard :root{--ins-color--orange: #ec7a08}.dashboard button:focus{outline:none}.dashboard .ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.dashboard .ins-c-summary__emphasis{font-size:32px;font-size:2rem}.dashboard .ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.dashboard .ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.dashboard .ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.dashboard .ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.dashboard .ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.dashboard .ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.dashboard .ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.dashboard .ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.dashboard .ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.dashboard .ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.dashboard .ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.dashboard .page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.dashboard .ins-m-green{color:var(--pf-global--palette--green-400)}.dashboard .ins-m-red{color:var(--pf-global--palette--red-100)}.dashboard .pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.dashboard .ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.dashboard .ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;max-width:var(--ins-c-width-limiter--MaxWidth)}@media (min-width: 576px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}.dashboard .ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(\n        auto-fit,\n        minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr)\n    );--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.dashboard .ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}\n","",{version:3,sources:["webpack://./src/SmartComponents/Advisor/Advisor.scss"],names:[],mappings:"AAAA,iBACM,4BAAoB,CAD1B,wBACgD,YAAY,CAD5D,kCACoF,0CAA0C,CAD9H,oCACwJ,cAAc,CAAC,cAAc,CADrL,yCACoN,uCAAuC,CAD3P,qCACsR,0CAA0C,CADhU,uCAC6V,wCAAwC,CADrY,oCAC+Z,wCAAwC,CADvc,qCACke,wCAAwC,CAD1gB,sCACsiB,yCAAyC,CAD/kB,qCAC0mB,wCAAwC,CADlpB,iCACyqB,kBAAkB,CAAC,qBAAqB,CADjtB,wEAC+wB,gBAAgB,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,oBAAoB,CAD11B,4BAC42B,gBAAgB,CAAC,gBAAgB,CAD74B,4CAC+6B,eAAe,CAAC,iBAAiB,CADh9B,oDAC0/B,wCAAwC,CADliC,wBACgjC,0CAA0C,CAD1lC,sBACsmC,wCAAwC,CAD9oC,mDACurC,iFAA2C,CADluC,kCACgyC,0CAA0C,CAD10C,gCACg2C,qCAAgC,CAAM,8CAA8C,CAAC,0BADr7C,gCACo+C,0FAA0F,CAAE,CAAA,0BADhkD,gCAC+mD,sIAAsI,CAAE,CAAA,0BADvvD,gCACsyD,kLAAkL,CAAE,CAAA,2BAD19D,gCAC0gE,8NAA8N,CAAE,CAAA,2BAD1uE,gCAC0xE,2QAA2Q,CAAE,CADviF,0BACsjF,kEAAqC,CAA8B,+DAAkC,CAA8B,gDAA0C,CAAO,iGAAkD,CAAgD;;;KAAqC,CAG32F,uCAAkC,CAAM,YAAY,CAAC,+DAA+D,CAAC,yDAAyD,CAAC,gGAAkD,CAJvO,sCAIiT,8CAA8C,CAAC,oDAAoD,CAAC,0BAJrZ,0BAI8b,sJAAkD,CAAsG,CAAA,0BAJtlB,0BAI+nB,4MAAkD,CAA4J,CAAA,0BAJ70B,0BAIs3B,kQAAkD,CAAkN,CAAA,2BAJ1nC,0BAIoqC,wTAAkD,CAAwQ,CAAA,2BAJ99C,0BAIwgD,+WAAkD,CAA+T",sourcesContent:[".dashboard{\n:root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.ins-m-green{color:var(--pf-global--palette--green-400)}.ins-m-red{color:var(--pf-global--palette--red-100)}.pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;max-width:var(--ins-c-width-limiter--MaxWidth)}@media (min-width: 576px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}.ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(\n        auto-fit,\n        minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr)\n    );--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}\n\n}"],sourceRoot:""}]);const s=r},41603:(i,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>F});var e=a(59713),n=a.n(e),l=a(63038),r=a.n(l),s=(a(32796),a(64169)),o=a(44479),m=a(47173),d=a(60485),c=a(56186),u=a(28191),A=a(92298),p=a(50693),f=a(16475),C=a(97522),h=a.n(C),g=a(81404),v=a(81976),w=a(20365),x=a(89142),b=a(84616),y=a(59562),G=a(58916),T=a(58093),_=a(44089),D=a(90693),k=a(82141),B=a(85875),M=a(45697),S=a.n(M),W=a(20999),E=a(86588),Z=a(18623),I=a(86896);function j(i,t){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.push.apply(a,e)}return a}function P(i){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){n()(i,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(a,t))}))}return i}var O=function(i){var t,a,e,n=i.recStats,l=i.recStatsStatus,s=i.advisorFetchStatsRecs,M=i.advisorFetchStatsSystems,S=i.advisorIncidents,E=i.advisorIncidentsStatus,j=i.advisorFetchIncidents,O=i.selectedTags,F=i.workloads,R=i.SID,z=[x.ZP.value,b.ZP.value,y.ZP.value,G.ZP.value],q=(0,I.Z)(),J=(0,C.useState)([]),N=r()(J,2),Y=N[0],L=N[1],H=(0,C.useState)([]),Q=r()(H,2),V=Q[0],K=Q[1],U=(0,C.useState)(),$=r()(U,2),X=$[0],ii=$[1],ti="&reports_shown=true&impacting=true&offset=0&limit=10".concat(null!=O&&O.length?"&tags=".concat(null==O?void 0:O.join()):"").concat(null!=F&&F.SAP?"&sap_system=true":"").concat(null!=R&&R.length?"&sap_sids=".concat(null==R?void 0:R.join()):""),ai=V.map((function(i){var t=i.value;return"".concat(W.Pu,"/advisor/recommendations?category=").concat(t).concat(ti)})),ei=function(i){return"".concat(W.Pu,"/advisor/recommendations?total_risk=").concat(i).concat(ti)},ni=V.map((function(i){return{name:"".concat(i.y," ").concat(i.x," "),symbol:{fill:"".concat(i.fill," "),type:"square"}}}));return(0,C.useEffect)((function(){var i=P(P({},(0,v.nY)(F,R)),(null==O?void 0:O.length)>0&&{tags:O});s(i),M(i),j(i)}),[j,s,M,O,F,R]),(0,C.useEffect)((function(){if("fulfilled"===l){var i=n.total_risk,t=n.category,a=t.Stability+t.Availability+t.Performance+t.Security;L([{title:"".concat(i[4]," ").concat((0,v.kC)(q.formatMessage(Z.Z.critical))," "),risk:4},{title:"".concat(i[3]," ").concat((0,v.kC)(q.formatMessage(Z.Z.important))," "),risk:3},{title:"".concat(i[2]," ").concat((0,v.kC)(q.formatMessage(Z.Z.moderate))," "),risk:2},{title:"".concat(i[1]," ").concat((0,v.kC)(q.formatMessage(Z.Z.low))," "),risk:1}]),K([{x:q.formatMessage(Z.Z.availability,{count:t.Availability}),y:t.Availability,fill:z[0],value:1},{x:q.formatMessage(Z.Z.stability,{count:t.Stability}),y:t.Stability,fill:z[1],value:3},{x:q.formatMessage(Z.Z.performance,{count:t.Performance}),y:t.Performance,fill:z[2],value:4},{x:q.formatMessage(Z.Z.security,{count:t.Security}),y:t.Security,fill:z[3],value:2},0===a&&{x:q.formatMessage(Z.Z.category),y:"0"}]),ii(0===a?[w.ZP.value]:z)}}),[q,n,l]),h().createElement(g.wh,{appName:"Advisor","data-ouia-safe":!0},"pending"===E&&h().createElement(k.Z,null),"fulfilled"===E&&h().createElement(g.ME,{titleClassName:null!=S&&null!==(t=S.meta)&&void 0!==t&&t.count?"ins-m-red":"ins-m-green",title:"".concat(q.formatMessage(Z.Z.incidents,{incidents:null==S||null===(a=S.meta)||void 0===a?void 0:a.count})," ")}," ",q.formatMessage(Z.Z.inAdvisor)," ",h().createElement(m.zx,{component:"a",href:"".concat(W.Pu).concat("/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true"),variant:"link",isInline:!0},q.formatMessage(Z.Z.recommendations))),"rejected"===E?h().createElement(g.jA,null,h().createElement(T.Z,{appName:"Advisor"})):h().createElement(g.jA,null,h().createElement(u.k,null,h().createElement(u.k,{grow:{default:"grow"}},h().createElement(A.B,null,h().createElement(d.D,{headingLevel:"h2",size:d.H.lg},"".concat(q.formatMessage(Z.Z.totalRisk)," "),(e=q.formatMessage(Z.Z.totalRiskDef,{em:function(i){return h().createElement("em",null,i)}}),h().createElement(o.u,{key:e,position:o.D.top,content:h().createElement("div",null,e)},h().createElement(m.zx,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},h().createElement(_.Z,null))))),h().createElement(p.r,{hasGutter:!0},Y.map((function(i){var t=i.title,a=i.risk;return h().createElement(f.P,{span:6,key:t},h().createElement(m.zx,{component:"a",href:ei(a),variant:"link",isInline:!0},h().createElement(D.Z,{value:a,text:t})))}))))),h().createElement(c.i,{isVertical:!0}),h().createElement(u.k,{grow:{default:"grow"}},h().createElement(A.B,null,h().createElement(d.D,{headingLevel:"h2",size:d.H.lg},"".concat(q.formatMessage(Z.Z.category)," ")),h().createElement(B.u,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chartt",constrainToVisibleArea:!0,data:V,colorScale:X,height:150,width:150,legend:"true",legendData:ni,legendClick:ai,legendOrientation:!0,legendHeight:80,legendWidth:130}))))))};O.propTypes={advisorFetchStatsRecs:S().func,recStats:S().object,recStatsStatus:S().string,advisorFetchStatsSystems:S().func,systemsStats:S().object,systemsStatsStatus:S().string,advisorIncidents:S().object,advisorIncidentsStatus:S().string,advisorFetchIncidents:S().func,selectedTags:S().array,workloads:v.ib,SID:S().arrayOf(S().string)};const F=(0,E.connect)((function(i){var t=i.DashboardStore;return{recStats:t.advisorStatsRecs,recStatsStatus:t.advisorStatsRecsStatus,systemsStats:t.advisorStatsSystems,systemsStatsStatus:t.advisorStatsSystemsStatus,advisorIncidents:t.advisorIncidents,advisorIncidentsStatus:t.advisorIncidentsStatus,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID}}),(function(i){return{advisorFetchStatsRecs:function(t){return i(s.$i(t))},advisorFetchStatsSystems:function(t){return i(s.l5(t))},advisorFetchIncidents:function(t){return i(s.ag(t))}}}))(O)},32796:(i,t,a)=>{"use strict";var e=a(93379),n=a.n(e),l=a(29849),r=n()(l.default,{insert:"head",singleton:!1});if(!l.default.locals||i.hot.invalidate){var s=l.default.locals;i.hot.accept(29849,(t=>{l=a(29849),function(i,t,a){if(!i&&t||i&&!t)return!1;var e;for(e in i)if(i[e]!==t[e])return!1;for(e in t)if(!i[e])return!1;return!0}(s,l.default.locals)?(s=l.default.locals,r(l.default)):i.hot.invalidate()}))}i.hot.dispose((function(){r()})),l.default.locals}}]);
//# sourceMappingURL=4392.c833760bef9dfe225da6.js.map