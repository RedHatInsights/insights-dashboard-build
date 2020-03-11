(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{988:function(t,e,a){"use strict";a.r(e);var n=a(735),s=a(2),r=a.n(s),o=a(631),c=a(470),i=a.n(c),l={critical:4,important:3,moderate:2,low:1},m=a(179),d=a(668),u=a(1),v=a.n(u),y=a(1015),p=a(1026),b=a(1027),f=a(1021),S=a(1022),h=a(1023),g=a(25),_=a(36),E=a(694),w=a(686),F=a.n(w),I=function(t){var e=t.history,a=t.data,n=t.intl,s=[{name:n.formatMessage(E.a.critical),y:a[l.critical]},{name:n.formatMessage(E.a.important),y:a[l.important]},{name:n.formatMessage(E.a.moderate),y:a[l.moderate]},{name:n.formatMessage(E.a.low),y:a[l.low]}],o=[g.global_palette_red_200.value,g.global_palette_orange_300.value,g.global_palette_gold_400.value,g.global_palette_gold_300.value],c=s.map((function(t){return{name:"".concat(t.y," ").concat(t.name),symbol:{type:null}}})),i=function(){return r.a.createElement(y.a,{text:function(t){var e=t.datum;return"".concat(e.name,": ").concat(e.y)},constrainToVisibleArea:!0})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{ariaDesc:"Advisor recommendations by severity",ariaTitle:"Advisor recommendations by severity",padding:{left:0,right:0,bottom:56,top:20},width:500,legendPosition:"bottom-left",height:110,legendComponent:r.a.createElement(b.a,{data:c,events:[{target:"labels",eventHandlers:{onClick:function(){return[{target:"labels",mutation:function(t){var a=t.datum.name.split(" ")[1].toLowerCase();e.push("/advisor/recommendations?total_risk=".concat(l[a],"&reports_shown=true&impacting=true&offset=0&limit=10"))}}]},onMouseOver:function(){return[{mutation:function(t){return{style:Object.assign({},t.style,{cursor:"pointer"})}}}]}}}],orientation:"horizontal",colorScale:o})},r.a.createElement(f.a,{axisComponent:r.a.createElement(r.a.Fragment,null)}),r.a.createElement(S.a,{horizontal:!0,colorScale:o},r.a.createElement(h.a,{barWidth:22,labelComponent:i(),data:[{name:s[0].name,y:s[0].y,x:1,label:s[0].name}]}),r.a.createElement(h.a,{barWidth:22,labelComponent:i(),data:[{name:s[1].name,y:s[1].y,x:1,label:s[1].name}]}),r.a.createElement(h.a,{barWidth:22,labelComponent:i(),data:[{name:s[2].name,y:s[2].y,x:1,label:s[2].name}]}),r.a.createElement(h.a,{barWidth:22,labelComponent:i(),data:[{name:s[3].name,y:s[3].y,x:1,label:s[3].name}]}))))};I.propTypes={history:v.a.object,data:v.a.object,intl:v.a.any};var j=Object(_.c)(F()(I)),C=a(152),k=function(t){var e=t.recStats,a=t.recStatsStatus,n=t.advisorFetchStatsRecs,c=t.advisorFetchStatsSystems,l=t.advisorIncidents,u=t.advisorIncidentsStatus,v=t.advisorFetchIncidents,y=t.intl;return Object(s.useEffect)((function(){n(),c(),v()}),[v,n,c]),r.a.createElement(o.a,{appName:"Advisor"},r.a.createElement(o.f,{title:"Advisor recommendations"}),r.a.createElement(o.c,null,"fulfilled"!==u?r.a.createElement(d.a,null):r.a.createElement("div",{className:"ins-c-summary"},r.a.createElement(i.a,{className:"ins-c-summary__icon ins-c-summary__icon-critical"}),r.a.createElement("span",{className:"ins-c-summary__emphasis"},l.meta.count),r.a.createElement("span",{className:"ins-c-summary__label"},r.a.createElement(m.Link,{to:"".concat("/advisor/recommendations?reports_shown=undefined&impacting=false&offset=0&limit=10&sort=-publish_date&incident=true")},y.formatMessage(E.a.incidentsDetected,{incidents:l.meta.count})))),"fulfilled"!==a?r.a.createElement(d.a,null):r.a.createElement(j,{data:e.total_risk})))};k.propTypes={advisorFetchStatsRecs:v.a.func,recStats:v.a.object,recStatsStatus:v.a.string,advisorFetchStatsSystems:v.a.func,systemsStats:v.a.object,systemsStatsStatus:v.a.string,advisorIncidents:v.a.object,advisorIncidentsStatus:v.a.string,advisorFetchIncidents:v.a.func,intl:v.a.any};e.default=Object(_.c)(F()(Object(C.connect)((function(t){var e=t.DashboardStore;return{recStats:e.advisorStatsRecs,recStatsStatus:e.advisorStatsRecsStatus,systemsStats:e.advisorStatsSystems,systemsStatsStatus:e.advisorStatsSystemsStatus,advisorIncidents:e.advisorIncidents,advisorIncidentsStatus:e.advisorIncidentsStatus}}),(function(t){return{advisorFetchStatsRecs:function(e){return t(n.b(e))},advisorFetchStatsSystems:function(e){return t(n.c(e))},advisorFetchIncidents:function(e){return t(n.a(e))}}}))(k)))}}]);
//# sourceMappingURL=13.js.map