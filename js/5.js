(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{782:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(s(740)),n=p(s(152)),l=p(s(153)),r=p(s(154)),c=p(s(155)),i=s(1),u=p(i),o=p(s(0)),m=s(399),f=s(69),d=s(17),_=s(156),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t.default=e,t}(s(741)),h=p(s(742));function p(e){return e&&e.__esModule?e:{default:e}}s(743);var g=function(e){function t(e){return(0,n.default)(this,t),(0,r.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.props.fetchConfigAssessment()}},{key:"render",value:function(){var e=this.props,t=e.configAssessmentFetchStatus,s=e.configAssessment,a=new Array;return"fulfilled"===t&&[{severity:"Critical",label:"Critical"},{severity:"Error",label:"High"},{severity:"Warn",label:"Medium"},{severity:"Info",label:"Low"}].some(function(e){if(s.rules.severity[e.severity]>0&&(a.push({label:e.label,value:s.rules.severity[e.severity]}),a.length>1))return!0}),u.default.createElement(_.Card,{className:"ins-c-card__config-assessment"},u.default.createElement(_.CardHeader,null,u.default.createElement(_.Title,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Configuration Assessment")),u.default.createElement(_.CardBody,null,"fulfilled"===t&&Array.isArray(a)&&a.length>0&&a.map(function(e){return u.default.createElement("div",{className:"ins-c-summary",key:e.label},function(e){switch(e){case"Critical":return u.default.createElement(d.ExclamationCircleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-critical"});case"High":return u.default.createElement(d.ExclamationTriangleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-high"});case"Medium":return u.default.createElement(d.ExclamationTriangleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-medium"});case"Low":return u.default.createElement(d.ExclamationIcon,{className:"ins-c-summary__icon ins-c-summary__icon-low"})}}(e.label),u.default.createElement("span",{className:"ins-c-summary__emphasis"},e.value),u.default.createElement("span",{className:"ins-c-summary__label"},u.default.createElement("a",{href:"/insightsbeta/platform/advisor/"},e.label," Rule Hits")))}),"pending"===t&&u.default.createElement(h.default,null),"fulfilled"===t&&(!Array.isArray(a)||0===a.length)&&u.default.createElement("div",{className:"ins-c-summary"},u.default.createElement(d.CheckCircleIcon,{className:"ins-c-summary__icon ins-c-summary__icon-check"}),u.default.createElement("span",{className:"ins-c-summary__label"},"You have no issues"))),u.default.createElement(_.CardFooter,null,u.default.createElement("a",{href:"/insightsbeta/platform/advisor/"},"View All",s.rules&&s.rules.total>0?" "+s.rules.total+" ":""," Rule Hits")))}}]),t}(i.Component);g.propTypes={fetchConfigAssessment:o.default.func,configAssessment:o.default.object,configAssessmentFetchStatus:o.default.string};t.default=(0,m.routerParams)((0,f.connect)(function(e,t){return(0,a.default)({configAssessment:e.DashboardStore.configAssessment,configAssessmentFetchStatus:e.DashboardStore.configAssessmentFetchStatus},t)},function(e){return{fetchConfigAssessment:function(t){return e(y.fetchConfigAssessment(t))}}})(g))}}]);
//# sourceMappingURL=../sourcemaps/5.js.map