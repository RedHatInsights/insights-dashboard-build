(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1282:function(t,e,a){"use strict";a.r(e);var s=a(189),n=a.n(s),i=a(613),r={critical:4,important:3,moderate:2,low:1},c=a(2),o=a.n(c),d=a(566),l=a(600),m=a(644),u=a(1),f=a.n(u),S=a(1026),v=a(18),h=a(156),p=a(45),g=a(575),y=function(t){var e=t.recStats,a=t.recStatsStatus,s=t.advisorFetchStatsRecs,i=t.advisorFetchStatsSystems,u=t.advisorIncidents,f=t.advisorIncidentsStatus,h=t.advisorFetchIncidents,p=t.systemsStats,y=t.systemsStatsStatus,w=t.intl,b=Object(c.useState)([]),E=n()(b,2),I=E[0],k=E[1];Object(c.useEffect)((function(){s(),i(),h()}),[h,s,i]),Object(c.useEffect)((function(){"fulfilled"===a&&k([{name:w.formatMessage(g.a.critical),y:e.total_risk[r.critical]},{name:w.formatMessage(g.a.important),y:e.total_risk[r.important]},{name:w.formatMessage(g.a.moderate),y:e.total_risk[r.moderate]},{name:w.formatMessage(g.a.low),y:e.total_risk[r.low]}])}),[w,e,a]);return o.a.createElement(d.a,{appName:"Advisor"},o.a.createElement(d.e,{title:"Advisor recommendations"}),o.a.createElement(d.c,null,"fulfilled"!==f?o.a.createElement(l.a,null):o.a.createElement(m.a,{data:u.meta.count,dataSize:"md",layout:"horizontal",linkDescription:w.formatMessage(g.a.incidentsDetected,{incidents:u.meta.count}),critical:u.meta.count>50?"true":"false",link:"".concat(v.v).concat("/advisor/recommendations?reports_shown=undefined&impacting=false&offset=0&limit=10&sort=-publish_date&incident=true")}),"fulfilled"!==a?o.a.createElement(l.a,null):o.a.createElement(S.a,{ariaDesc:"Advisor recommendations",ariaTitle:"Advisor recommendations chart",height:40,width:600,maxWidth:600,legendHeight:36,legendWidth:600,data:I,legendClick:function(){return[{target:"labels",mutation:function(t){var e=t.datum.name.split(" ")[1].toLowerCase();window.location.href="".concat(v.v,"/advisor/recommendations?total_risk=").concat(r[e],"&reports_shown=true&impacting=true&offset=0&limit=10")}}]}}),"fulfilled"!==y?o.a.createElement(l.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"".concat(v.v).concat("/advisor/recommendations?reports_shown=undefined&impacting=true&offset=0&limit=10&sort=-publish_date")},w.formatMessage(g.a.recsImpactingSystems,{totalRecs:e.total,systems:p.total})))))};y.propTypes={advisorFetchStatsRecs:f.a.func,recStats:f.a.object,recStatsStatus:f.a.string,advisorFetchStatsSystems:f.a.func,systemsStats:f.a.object,systemsStatsStatus:f.a.string,advisorIncidents:f.a.object,advisorIncidentsStatus:f.a.string,advisorFetchIncidents:f.a.func,intl:f.a.any};e.default=Object(p.c)(Object(h.connect)((function(t){var e=t.DashboardStore;return{recStats:e.advisorStatsRecs,recStatsStatus:e.advisorStatsRecsStatus,systemsStats:e.advisorStatsSystems,systemsStatsStatus:e.advisorStatsSystemsStatus,advisorIncidents:e.advisorIncidents,advisorIncidentsStatus:e.advisorIncidentsStatus}}),(function(t){return{advisorFetchStatsRecs:function(e){return t(i.b(e))},advisorFetchStatsSystems:function(e){return t(i.c(e))},advisorFetchIncidents:function(e){return t(i.a(e))}}}))(y))}}]);
//# sourceMappingURL=15.js.map