(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1219:function(t,e,a){"use strict";a.r(e);a(826);var s=a(820),n={critical:4,important:3,moderate:2,low:1},r=a(2),c=a.n(r),o=a(704),i=a(197),l=a.n(i),m=a(744),d=a(1),u=a.n(d),f=a(1246),p=a(1257),v=a(1252),S=a(1253),y=a(1254),h=a(1258);const g="#f4c145",b="#f0ab00",E="#ec7a08",_="#a30000";var w=a(37),F=a(46),I=a(777),j=function(t){var e=t.data,a=t.intl,s=[{name:a.formatMessage(I.a.critical),y:e[n.critical]},{name:a.formatMessage(I.a.important),y:e[n.important]},{name:a.formatMessage(I.a.moderate),y:e[n.moderate]},{name:a.formatMessage(I.a.low),y:e[n.low]}],r=[_,E,b,g],o=s.map((function(t){return{name:"".concat(t.y," ").concat(t.name),symbol:{type:null}}}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{ariaDesc:"Advisor recommendations by severity",ariaTitle:"Advisor recommendations by severity",padding:{left:0,right:0,bottom:0,top:0},width:600,height:40,maxWidth:600},c.a.createElement(v.a,{axisComponent:c.a.createElement(c.a.Fragment,null)}),c.a.createElement(S.a,{horizontal:!0,colorScale:r},s.map((function(t){return c.a.createElement(y.a,{key:t,barWidth:22,labelComponent:c.a.createElement(f.a,{text:function(t){var e,a=t.datum;return"".concat((e=a.name,e[0].toUpperCase()+e.substring(1)),": ").concat(a.y)},constrainToVisibleArea:!0}),data:[{name:t.name,y:t.y,x:1,label:t.name}]})})))),c.a.createElement("span",{className:"stackChartLegend"},c.a.createElement(h.a,{data:o,responsive:!1,height:36,width:600,fontSize:14,events:[{target:"labels",eventHandlers:{onClick:function(){return[{target:"labels",mutation:function(t){var e=t.datum.name.split(" ")[1].toLowerCase();window.location.href="".concat(w.m,"/advisor/recommendations?total_risk=").concat(n[e],"&reports_shown=true&impacting=true&offset=0&limit=10")}}]},onMouseOver:function(){return[{mutation:function(t){return{style:Object.assign({},t.style,{cursor:"pointer"})}}}]}}}],orientation:"horizontal",colorScale:r})))};j.propTypes={data:u.a.object,intl:u.a.any};var M=Object(F.c)(j),k=a(155),x=function(t){var e=t.recStats,a=t.recStatsStatus,s=t.advisorFetchStatsRecs,n=t.advisorFetchStatsSystems,i=t.advisorIncidents,d=t.advisorIncidentsStatus,u=t.advisorFetchIncidents,f=t.systemsStats,p=t.systemsStatsStatus,v=t.intl;return Object(r.useEffect)((function(){s(),n(),u()}),[u,s,n]),c.a.createElement(o.a,{appName:"Advisor"},c.a.createElement(o.f,{title:"Advisor recommendations"}),c.a.createElement(o.c,null,"fulfilled"!==d?c.a.createElement(m.a,null):c.a.createElement("div",{className:"ins-c-summary"},c.a.createElement(l.a,{className:"ins-c-summary__icon ins-c-summary__icon-critical"}),c.a.createElement("span",{className:"ins-c-summary__emphasis"},i.meta.count),c.a.createElement("span",{className:"ins-c-summary__label"},c.a.createElement("a",{href:"".concat(w.m).concat("/advisor/recommendations?reports_shown=undefined&impacting=false&offset=0&limit=10&sort=-publish_date&incident=true")},v.formatMessage(I.a.incidentsDetected,{incidents:i.meta.count})))),"fulfilled"!==a?c.a.createElement(m.a,null):c.a.createElement(M,{data:e.total_risk}),"fulfilled"!==p?null:c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"".concat(w.m).concat("/advisor/recommendations?reports_shown=undefined&impacting=false&offset=0&limit=10&sort=-publish_date")},v.formatMessage(I.a.recsImpactingSystems,{totalRecs:e.total,systems:f.total})))))};x.propTypes={advisorFetchStatsRecs:u.a.func,recStats:u.a.object,recStatsStatus:u.a.string,advisorFetchStatsSystems:u.a.func,systemsStats:u.a.object,systemsStatsStatus:u.a.string,advisorIncidents:u.a.object,advisorIncidentsStatus:u.a.string,advisorFetchIncidents:u.a.func,intl:u.a.any};e.default=Object(F.c)(Object(k.connect)((function(t){var e=t.DashboardStore;return{recStats:e.advisorStatsRecs,recStatsStatus:e.advisorStatsRecsStatus,systemsStats:e.advisorStatsSystems,systemsStatsStatus:e.advisorStatsSystemsStatus,advisorIncidents:e.advisorIncidents,advisorIncidentsStatus:e.advisorIncidentsStatus}}),(function(t){return{advisorFetchStatsRecs:function(e){return t(s.b(e))},advisorFetchStatsSystems:function(e){return t(s.c(e))},advisorFetchIncidents:function(e){return t(s.a(e))}}}))(x))},779:function(t,e,a){(e=a(7)(!1)).push([t.i,".pf-c-chart{top:0}.stackChartLegend{left:-9px;position:relative}a{font-size:small}\n",""]),t.exports=e},826:function(t,e,a){var s=a(8),n=a(779);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},c=s(n,r),o=n.locals?n.locals:{};n.locals||t.hot.accept(779,(function(){var e=a(779);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[t.i,e,""]]),c(e)})),t.hot.dispose((function(){c()})),t.exports=o}}]);
//# sourceMappingURL=14.js.map