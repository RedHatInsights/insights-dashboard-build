(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1147:function(t,e,a){"use strict";a.r(e);var s=a(25),n=a.n(s),i=a(213),r={critical:4,important:3,moderate:2,low:1},c=a(0),o=a.n(c),d=a(224),m=a(157),l=a(214),u=a(229),f=a(303),S=a(4),v=a.n(S),p=a(782),h=a(1),g=a(32),y=a(161),b=a(69),w=function(t){var e=t.recStats,a=t.recStatsStatus,s=t.advisorFetchStatsRecs,i=t.advisorFetchStatsSystems,S=t.advisorIncidents,v=t.advisorIncidentsStatus,g=t.advisorFetchIncidents,w=t.systemsStats,E=t.systemsStatsStatus,I=Object(b.a)(),k=Object(c.useState)([]),_=n()(k,2),j=_[0],F=_[1];Object(c.useEffect)((function(){s(),i(),g()}),[g,s,i]),Object(c.useEffect)((function(){"fulfilled"===a&&F([{name:I.formatMessage(y.a.critical),y:e.total_risk[r.critical]},{name:I.formatMessage(y.a.important),y:e.total_risk[r.important]},{name:I.formatMessage(y.a.moderate),y:e.total_risk[r.moderate]},{name:I.formatMessage(y.a.low),y:e.total_risk[r.low]}])}),[I,e,a]);var M=j.map((function(t){var e=t.name.toLowerCase();return"".concat(h.G,"/advisor/recommendations?total_risk=").concat(r[e],"&reports_shown=true&impacting=true&offset=0&limit=10")}));return o.a.createElement(d.a,{appName:"Advisor","data-ouia-safe":!0},o.a.createElement(d.d,{title:"Advisor recommendations"}),"rejected"===v?o.a.createElement(d.b,null,o.a.createElement(l.a,{appName:"Advisor"})):o.a.createElement(d.b,null,"fulfilled"!==v?o.a.createElement(u.a,null):o.a.createElement(f.a,{data:S.meta.count,dataSize:"md",layout:"horizontal",linkDescription:I.formatMessage(y.a.incidentsDetected,{incidents:S.meta.count}),critical:S.meta.count>50?"true":"false",link:"".concat(h.G).concat("/advisor/recommendations?reports_shown=undefined&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true")}),"fulfilled"!==a?o.a.createElement(u.a,null):o.a.createElement(p.a,{ariaDesc:I.formatMessage(y.a.advisorChartDescription),ariaTitle:"Advisor recommendations chart",height:40,width:600,maxWidth:600,legendHeight:36,legendWidth:600,data:j,legendClick:M}),"fulfilled"!==E?o.a.createElement(u.a,null):o.a.createElement(m.Button,{component:"a",href:"".concat(h.G).concat("/advisor/recommendations?reports_shown=undefined&impacting=true&offset=0&limit=10&sort=-publish_date"),variant:"link",isInline:!0},I.formatMessage(y.a.recsImpactingSystems,{totalRecs:e.total,systems:w.total}))))};w.propTypes={advisorFetchStatsRecs:v.a.func,recStats:v.a.object,recStatsStatus:v.a.string,advisorFetchStatsSystems:v.a.func,systemsStats:v.a.object,systemsStatsStatus:v.a.string,advisorIncidents:v.a.object,advisorIncidentsStatus:v.a.string,advisorFetchIncidents:v.a.func};e.default=Object(g.connect)((function(t){var e=t.DashboardStore;return{recStats:e.advisorStatsRecs,recStatsStatus:e.advisorStatsRecsStatus,systemsStats:e.advisorStatsSystems,systemsStatsStatus:e.advisorStatsSystemsStatus,advisorIncidents:e.advisorIncidents,advisorIncidentsStatus:e.advisorIncidentsStatus}}),(function(t){return{advisorFetchStatsRecs:function(e){return t(i.b(e))},advisorFetchStatsSystems:function(e){return t(i.c(e))},advisorFetchIncidents:function(e){return t(i.a(e))}}}))(w)}}]);
//# sourceMappingURL=14.js.map