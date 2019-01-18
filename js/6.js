(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{783:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=_(a(740)),r=_(a(152)),u=_(a(153)),n=_(a(154)),c=_(a(155)),m=a(1),s=_(m),o=_(a(0)),d=_(a(5)),f=a(399),i=a(69),p=a(17),S=a(156),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(741)),y=_(a(742));function _(e){return e&&e.__esModule?e:{default:e}}a(743);var E=function(e){function t(e){return(0,r.default)(this,t),(0,n.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.props.fetchOcpSummary(),this.props.fetchAwsSummary()}},{key:"render",value:function(){var e=this.props,t=e.ocpSummaryFetchStatus,a=e.awsSummaryFetchStatus,l=e.ocpSummary,r=e.awsSummary,u={},n={};function c(e){return s.default.createElement(S.Stack,{span:6,className:"ins-c-summary"},s.default.createElement(S.StackItem,{className:"ins-c-summary__title"},"OpenShift Total Charges"),s.default.createElement(S.StackItem,null,s.default.createElement(S.Level,{gutter:"sm"},s.default.createElement(S.LevelItem,null,s.default.createElement(S.Stack,null,s.default.createElement(S.StackItem,{className:"ins-c-summary__emphasis"},"$",e.total),s.default.createElement(S.StackItem,{className:"ins-c-summary__accent"},e.date))),s.default.createElement(S.LevelItem,null,s.default.createElement(S.Stack,null,s.default.createElement(S.StackItem,{className:"ins-c-summary__emphasis ins-m-"+e.deltaColor},e.delta,"%",function(e){switch(e){case"green":return s.default.createElement(p.CaretUpIcon,null);case"red":return s.default.createElement(p.CaretDownIcon,null);default:return}}(e.deltaColor)),s.default.createElement(S.StackItem,{className:"ins-c-summary__accent"},"Compared to ",e.filter," ago"))))))}return"fulfilled"===t&&l.total>0&&(u.title="OpenShift Total Charges",u.delta=Math.abs(Math.round(l.delta.percent)),u.deltaColor=l.delta.percent>0?"green":l.delta.percent<0?"red":"black",u.total=Math.round(100*l.total.charge)/100,u.date=(0,d.default)(l.data.date).format("MMMM Do YYYY"),u.filter=-1*l.filter.time_scope_value+" "+l.filter.time_scope_units),"fulfilled"===a&&r.total.value>0&&(n.title="AWS Total Cost",n.delta=Math.round(r.delta.percent),n.total=Math.round(100*r.total.value)/100,n.deltaColor=r.delta.percent>0?"green":r.delta.percent<0?"red":"black",n.date=(0,d.default)(r.data.date).format("MMMM Do YYYY"),n.filter=-1*r.filter.time_scope_value+" "+r.filter.time_scope_units),s.default.createElement(S.Card,{className:"ins-c-card__cost-management"},s.default.createElement(S.CardHeader,null,s.default.createElement(S.Title,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Cost Management")),s.default.createElement(S.CardBody,null,"fulfilled"===t&&u.total>0&&c(u)," ","fulfilled"===a&&n.total>0&&c(n)," ","pending"===t&&s.default.createElement(y.default,null),"fulfilled"===t&&"fulfilled"===a&&!u.total&&!n.total&&s.default.createElement("center",{className:"ins-c-summary"},s.default.createElement(p.DollarSignIcon,{className:"ins-c-summary__icon",size:"lg"}),s.default.createElement("div",{className:"ins-c-summary__label"},"No Money, No Problems!"))),s.default.createElement(S.CardFooter,null,s.default.createElement("a",{href:"/insightsbeta/platform/cost-management/"},"View All Cost/Charges")))}}]),t}(m.Component);E.propTypes={fetchOcpSummary:o.default.func,ocpSummary:o.default.object,ocpSummaryFetchStatus:o.default.string,fetchAwsSummary:o.default.func,awsSummary:o.default.object,awsSummaryFetchStatus:o.default.string};t.default=(0,f.routerParams)((0,i.connect)(function(e,t){return(0,l.default)({awsSummary:e.DashboardStore.awsSummary,awsSummaryFetchStatus:e.DashboardStore.awsSummaryFetchStatus,ocpSummary:e.DashboardStore.ocpSummary,ocpSummaryFetchStatus:e.DashboardStore.ocpSummaryFetchStatus},t)},function(e){return{fetchAwsSummary:function(t){return e(h.fetchAwsSummary(t))},fetchOcpSummary:function(t){return e(h.fetchOcpSummary(t))}}})(E))}}]);
//# sourceMappingURL=../sourcemaps/6.js.map