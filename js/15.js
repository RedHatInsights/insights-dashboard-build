(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1286:function(t,e,a){"use strict";a.r(e);var s=a(190),n=a.n(s),i=a(619),r={critical:4,important:3,moderate:2,low:1},c=a(2),o=a.n(c),d=a(569),l=a(605),m=a(649),u=a(1),f=a.n(u),S=a(1032),v=a(18),h=a(155),p=a(331),g=a(576),y=function(t){var e=t.recStats,a=t.recStatsStatus,s=t.advisorFetchStatsRecs,i=t.advisorFetchStatsSystems,u=t.advisorIncidents,f=t.advisorIncidentsStatus,h=t.advisorFetchIncidents,y=t.systemsStats,w=t.systemsStatsStatus,b=Object(p.a)(),E=Object(c.useState)([]),I=n()(E,2),k=I[0],F=I[1];Object(c.useEffect)((function(){s(),i(),h()}),[h,s,i]),Object(c.useEffect)((function(){"fulfilled"===a&&F([{name:b.formatMessage(g.a.critical),y:e.total_risk[r.critical]},{name:b.formatMessage(g.a.important),y:e.total_risk[r.important]},{name:b.formatMessage(g.a.moderate),y:e.total_risk[r.moderate]},{name:b.formatMessage(g.a.low),y:e.total_risk[r.low]}])}),[b,e,a]);return o.a.createElement(d.a,{appName:"Advisor"},o.a.createElement(d.e,{title:"Advisor recommendations"}),o.a.createElement(d.c,null,"fulfilled"!==f?o.a.createElement(l.a,null):o.a.createElement(m.a,{data:u.meta.count,dataSize:"md",layout:"horizontal",linkDescription:b.formatMessage(g.a.incidentsDetected,{incidents:u.meta.count}),critical:u.meta.count>50?"true":"false",link:"".concat(v.v).concat("/advisor/recommendations?reports_shown=undefined&impacting=false&offset=0&limit=10&sort=-publish_date&incident=true")}),"fulfilled"!==a?o.a.createElement(l.a,null):o.a.createElement(S.a,{ariaDesc:"Advisor recommendations",ariaTitle:"Advisor recommendations chart",height:40,width:600,maxWidth:600,legendHeight:36,legendWidth:600,data:k,legendClick:function(){return[{target:"labels",mutation:function(t){var e=t.datum.name.split(" ")[1].toLowerCase();window.location.href="".concat(v.v,"/advisor/recommendations?total_risk=").concat(r[e],"&reports_shown=true&impacting=true&offset=0&limit=10")}}]}}),"fulfilled"!==w?o.a.createElement(l.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"".concat(v.v).concat("/advisor/recommendations?reports_shown=undefined&impacting=true&offset=0&limit=10&sort=-publish_date")},b.formatMessage(g.a.recsImpactingSystems,{totalRecs:e.total,systems:y.total})))))};y.propTypes={advisorFetchStatsRecs:f.a.func,recStats:f.a.object,recStatsStatus:f.a.string,advisorFetchStatsSystems:f.a.func,systemsStats:f.a.object,systemsStatsStatus:f.a.string,advisorIncidents:f.a.object,advisorIncidentsStatus:f.a.string,advisorFetchIncidents:f.a.func};e.default=Object(h.connect)((function(t){var e=t.DashboardStore;return{recStats:e.advisorStatsRecs,recStatsStatus:e.advisorStatsRecsStatus,systemsStats:e.advisorStatsSystems,systemsStatsStatus:e.advisorStatsSystemsStatus,advisorIncidents:e.advisorIncidents,advisorIncidentsStatus:e.advisorIncidentsStatus}}),(function(t){return{advisorFetchStatsRecs:function(e){return t(i.b(e))},advisorFetchStatsSystems:function(e){return t(i.c(e))},advisorFetchIncidents:function(e){return t(i.a(e))}}}))(y)}}]);
//# sourceMappingURL=15.js.map