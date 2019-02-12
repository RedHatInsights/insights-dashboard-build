(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{769:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(a(727)),n=g(a(155)),s=g(a(156)),i=g(a(157)),r=g(a(158)),c=a(1),u=g(c),o=g(a(0)),m=a(393),f=a(68),d=a(160),h=a(159),_=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(728)),p=g(a(729));function g(e){return e&&e.__esModule?e:{default:e}}a(730);var y=function(e){function t(e){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,r.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.fetchInsights()}},{key:"render",value:function(){var e=this.props,t=e.insightsFetchStatus,a=e.insights,l=new Array;return"fulfilled"===t&&[{id:1,label:"Critical",link:"critical-risk/"},{id:2,label:"High",link:"high-risk/"},{id:3,label:"Medium",link:"medium-risk/"},{id:4,label:"Low",link:"low-risk/"}].some(function(e){if(a.rules.total_risk[e.id]>0&&(l.push({label:e.label,value:a.rules.total_risk[e.id],link:e.link}),l.length>1))return!0}),u.default.createElement(h.Card,{className:"ins-c-card__insights"},u.default.createElement(h.CardHeader,null,u.default.createElement(h.Title,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Insights")),u.default.createElement(h.CardBody,null,"fulfilled"===t&&Array.isArray(l)&&l.length>0&&l.map(function(e){return u.default.createElement("div",{className:"ins-c-summary",key:e.label},function(e){switch(e){case"Critical":return u.default.createElement(d.ExclamationCircleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-critical"});case"High":return u.default.createElement(d.ExclamationTriangleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-high"});case"Medium":return u.default.createElement(d.ExclamationTriangleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-medium"});case"Low":return u.default.createElement(d.ExclamationIcon,{className:"ins-c-summary__icon ins-c-summary__icon-low"})}}(e.label),u.default.createElement("span",{className:"ins-c-summary__emphasis"},e.value),u.default.createElement("span",{className:"ins-c-summary__label"},u.default.createElement("a",{href:"/insightsbeta/platform/advisor/actions/"+e.link},e.label," Risk Rule Hits")))}),"pending"===t&&u.default.createElement(p.default,null),"fulfilled"===t&&(!Array.isArray(l)||0===l.length)&&u.default.createElement("div",{className:"ins-c-summary"},u.default.createElement(d.CheckCircleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-check"}),u.default.createElement("span",{className:"ins-c-summary__label"},"You have no issues"))),u.default.createElement(h.CardFooter,null,u.default.createElement("a",{href:"/insightsbeta/platform/advisor/"},"View All",a.rules&&a.rules.total>0?" "+a.rules.total+" ":""," Rule Hits")))}}]),t}(c.Component);y.propTypes={fetchInsights:o.default.func,insights:o.default.object,insightsFetchStatus:o.default.string};t.default=(0,m.routerParams)((0,f.connect)(function(e,t){return(0,l.default)({insights:e.DashboardStore.insights,insightsFetchStatus:e.DashboardStore.insightsFetchStatus},t)},function(e){return{fetchInsights:function(t){return e(_.fetchInsights(t))}}})(y))}}]);
//# sourceMappingURL=../sourcemaps/6.js.map