(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1360:function(t,e,a){"use strict";a.r(e);var s=a(159),n=a.n(s),i=a(581),r={critical:4,important:3,moderate:2,low:1},o=a(2),c=a.n(o),d=a(589),m=a(298),l=a(591),u=a(642),f=a(1),S=a.n(f),v=a(1049),p=a(12),h=a(155),g=a(332),y=a(533),b=a(588),w=function(t){var e=t.recStats,a=t.recStatsStatus,s=t.advisorFetchStatsRecs,i=t.advisorFetchStatsSystems,f=t.advisorIncidents,S=t.advisorIncidentsStatus,h=t.advisorFetchIncidents,w=t.systemsStats,E=t.systemsStatsStatus,I=Object(g.a)(),k=Object(o.useState)([]),_=n()(k,2),j=_[0],F=_[1];Object(o.useEffect)((function(){s(),i(),h()}),[h,s,i]),Object(o.useEffect)((function(){"fulfilled"===a&&F([{name:I.formatMessage(y.a.critical),y:e.total_risk[r.critical]},{name:I.formatMessage(y.a.important),y:e.total_risk[r.important]},{name:I.formatMessage(y.a.moderate),y:e.total_risk[r.moderate]},{name:I.formatMessage(y.a.low),y:e.total_risk[r.low]}])}),[I,e,a]);return"rejected"===S?c.a.createElement(d.a,{appName:"Advisor","data-ouia-safe":!0},c.a.createElement(d.d,{title:"Advisor recommendations"}),c.a.createElement(d.b,null,c.a.createElement(b.a,{appName:"Advisor"}))):c.a.createElement(d.a,{appName:"Advisor"},c.a.createElement(d.d,{title:"Advisor recommendations"}),c.a.createElement(d.b,null,"fulfilled"!==S?c.a.createElement(l.a,null):c.a.createElement(u.a,{data:f.meta.count,dataSize:"md",layout:"horizontal",linkDescription:I.formatMessage(y.a.incidentsDetected,{incidents:f.meta.count}),critical:f.meta.count>50?"true":"false",link:"".concat(p.G).concat("/advisor/recommendations?reports_shown=undefined&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true")}),"fulfilled"!==a?c.a.createElement(l.a,null):c.a.createElement(v.a,{ariaDesc:"Advisor recommendations",ariaTitle:"Advisor recommendations chart",height:40,width:600,maxWidth:600,legendHeight:36,legendWidth:600,data:j,legendClick:function(){return[{target:"labels",mutation:function(t){var e=t.datum.name.split(" ")[1].toLowerCase();window.location.href="".concat(p.G,"/advisor/recommendations?total_risk=").concat(r[e],"&reports_shown=true&impacting=true&offset=0&limit=10")}}]}}),"fulfilled"!==E?c.a.createElement(l.a,null):c.a.createElement(m.Button,{component:"a",href:"".concat(p.G).concat("/advisor/recommendations?reports_shown=undefined&impacting=true&offset=0&limit=10&sort=-publish_date"),variant:"link",isInline:!0},I.formatMessage(y.a.recsImpactingSystems,{totalRecs:e.total,systems:w.total}))))};w.propTypes={advisorFetchStatsRecs:S.a.func,recStats:S.a.object,recStatsStatus:S.a.string,advisorFetchStatsSystems:S.a.func,systemsStats:S.a.object,systemsStatsStatus:S.a.string,advisorIncidents:S.a.object,advisorIncidentsStatus:S.a.string,advisorFetchIncidents:S.a.func};e.default=Object(h.connect)((function(t){var e=t.DashboardStore;return{recStats:e.advisorStatsRecs,recStatsStatus:e.advisorStatsRecsStatus,systemsStats:e.advisorStatsSystems,systemsStatsStatus:e.advisorStatsSystemsStatus,advisorIncidents:e.advisorIncidents,advisorIncidentsStatus:e.advisorIncidentsStatus}}),(function(t){return{advisorFetchStatsRecs:function(e){return t(i.b(e))},advisorFetchStatsSystems:function(e){return t(i.c(e))},advisorFetchIncidents:function(e){return t(i.a(e))}}}))(w)}}]);
//# sourceMappingURL=14.js.map