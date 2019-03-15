(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{770:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=_(a(727)),r=_(a(155)),u=_(a(156)),m=_(a(157)),c=_(a(158)),n=a(1),s=_(n),o=_(a(0)),d=_(a(4)),f=a(393),i=a(68),p=a(160),S=a(159),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(728)),h=_(a(729));function _(e){return e&&e.__esModule?e:{default:e}}a(730);var E=function(e){function t(e){return(0,r.default)(this,t),(0,m.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.props.fetchOcpSummary(),this.props.fetchAwsSummary()}},{key:"render",value:function(){var e=this.props,t=e.ocpSummaryFetchStatus,a=e.awsSummaryFetchStatus,l=e.ocpSummary,r=e.awsSummary,u={},m={};function c(e){return s.default.createElement(S.Stack,{span:6,className:"ins-c-summary"},s.default.createElement(S.StackItem,{className:"ins-c-summary__title"},e.title),s.default.createElement(S.StackItem,null,s.default.createElement(S.Level,{gutter:"sm"},s.default.createElement(S.LevelItem,null,s.default.createElement(S.Stack,null,s.default.createElement(S.StackItem,{className:"ins-c-summary__emphasis"},"$",e.total),s.default.createElement(S.StackItem,{className:"ins-c-summary__accent"},e.date))),s.default.createElement(S.LevelItem,null,s.default.createElement(S.Stack,null,s.default.createElement(S.StackItem,{className:"ins-c-summary__emphasis ins-m-"+e.deltaColor},e.delta,"%",function(e){switch(e){case"green":return s.default.createElement(p.CaretDownIcon,null);case"red":return s.default.createElement(p.CaretUpIcon,null);default:return}}(e.deltaColor)),s.default.createElement(S.StackItem,{className:"ins-c-summary__accent"},"Compared to ",e.filter," ago"))))))}return"fulfilled"===t&&l.meta.total.cost.value>0&&(u.title="OpenShift Total Cost",u.delta=Math.abs(Math.round(l.meta.delta.percent)),u.deltaColor=l.meta.delta.percent>0?"green":l.meta.delta.percent<0?"red":"black",u.total=Math.round(100*l.meta.total.cost.value)/100,u.date=(0,d.default)(l.data.date).format("MMMM Do YYYY"),u.filter=-1*l.meta.filter.time_scope_value+" "+l.meta.filter.time_scope_units),"fulfilled"===a&&r.meta.total.cost.value>0&&(m.title="Cloud (AWS) Cost",m.delta=Math.round(100*r.meta.delta.percent)/100,m.total=Math.round(100*r.meta.total.cost.value)/100,m.deltaColor=r.meta.delta.percent>0?"green":r.meta.delta.percent<0?"red":"black",m.date=(0,d.default)(r.data.date).format("MMMM Do YYYY"),m.filter=-1*r.meta.filter.time_scope_value+" "+r.meta.filter.time_scope_units),s.default.createElement(S.Card,{className:"ins-c-card__cost-management"},s.default.createElement(S.CardHeader,null,s.default.createElement(S.Title,{className:"pf-u-mt-0 pf-u-mb-0",size:"lg"},"Cost Management")),s.default.createElement(S.CardBody,null,"fulfilled"===t&&u.total>0&&c(u)," ","fulfilled"===a&&m.total>0&&c(m)," ","pending"===t&&s.default.createElement(h.default,null),"fulfilled"===t&&"fulfilled"===a&&!u.total&&!m.total&&s.default.createElement("center",{className:"ins-c-summary"},s.default.createElement(p.DollarSignIcon,{className:"ins-c-summary__icon",size:"lg"}),s.default.createElement("div",{className:"ins-c-summary__label"},"No Money, No Problems!"))),s.default.createElement(S.CardFooter,null,s.default.createElement("a",{href:"//beta/apps/cost-management/"},"View All Cost")))}}]),t}(n.Component);E.propTypes={fetchOcpSummary:o.default.func,ocpSummary:o.default.object,ocpSummaryFetchStatus:o.default.string,fetchAwsSummary:o.default.func,awsSummary:o.default.object,awsSummaryFetchStatus:o.default.string};t.default=(0,f.routerParams)((0,i.connect)(function(e,t){return(0,l.default)({awsSummary:e.DashboardStore.awsSummary,awsSummaryFetchStatus:e.DashboardStore.awsSummaryFetchStatus,ocpSummary:e.DashboardStore.ocpSummary,ocpSummaryFetchStatus:e.DashboardStore.ocpSummaryFetchStatus},t)},function(e){return{fetchAwsSummary:function(t){return e(y.fetchAwsSummary(t))},fetchOcpSummary:function(t){return e(y.fetchOcpSummary(t))}}})(E))}}]);
//# sourceMappingURL=../sourcemaps/5.js.map