(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{743:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(a(727)),n=g(a(155)),c=g(a(156)),r=g(a(157)),u=g(a(158)),i=a(1),o=g(i),m=g(a(0)),d=a(393),f=a(68),s=a(159),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(728)),h=g(a(729));function g(e){return e&&e.__esModule?e:{default:e}}a(730);var y=function(e){function t(e){return(0,n.default)(this,t),(0,r.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,u.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.props.fetchCompliance()}},{key:"render",value:function(){var e,t=this.props,a=t.complianceFetchStatus,l=t.complianceSummary;return o.default.createElement(s.Card,{className:"ins-c-card__compliance"},o.default.createElement(s.CardHeader,null,o.default.createElement(s.Title,{size:"lg"},"Compliance")),o.default.createElement(s.CardBody,null,o.default.createElement(s.Stack,null,"fulfilled"===a&&Array.isArray(l.data)&&l.data.length>0&&(e=l,e.data.length>1?e.data.slice(0,2):e.data.slice()).map(function(e){return o.default.createElement(s.StackItem,{gutter:"sm",key:e.id},o.default.createElement(s.Split,{gutter:"md",key:e.id},o.default.createElement(s.SplitItem,{className:"ins-c-gauge pf-u-text-align-center"},o.default.createElement("div",{className:"ins-c-gauge__metrics-percentage"},100*e.attributes.score,"%"),o.default.createElement(d.Gauge,{label:e.attributes.name,value:100*e.attributes.score,width:82,height:82,timeframe:"30",identifier:"compliance-gauge-"+e.id})),o.default.createElement(s.SplitItem,null,o.default.createElement(s.Stack,null,o.default.createElement(s.StackItem,null,o.default.createElement("a",{href:"//apps/compliance/policies/"},e.attributes.name)),o.default.createElement(s.StackItem,null,e.attributes.compliant_host_count," of  ",e.attributes.total_host_count," systems")))))}),"pending"===a&&o.default.createElement(h.default,null))),o.default.createElement(s.CardFooter,null,o.default.createElement("a",{href:"//apps/compliance/policies/"},"View All","fulfilled"===a&&Array.isArray(l.data)&&l.data.length>1?" "+l.data.length+" ":" ","Compliance Policies")))}}]),t}(i.Component);y.propTypes={fetchCompliance:m.default.func,complianceSummary:m.default.object,complianceFetchStatus:m.default.string};t.default=(0,d.routerParams)((0,f.connect)(function(e,t){return(0,l.default)({complianceSummary:e.DashboardStore.complianceSummary,complianceFetchStatus:e.DashboardStore.complianceFetchStatus},t)},function(e){return{fetchCompliance:function(t){return e(p.fetchComplianceSummary(t))}}})(y))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map