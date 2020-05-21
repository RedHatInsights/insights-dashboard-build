(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1132:function(e,t,n){"use strict";n.r(t);var r=n(250),o=n.n(r),a=n(49),l=n.n(a),s=n(213),i=n(236),c=n(0),u=n.n(c),p=n(224),f=n(157),d=n(238),m=n(312),h=n(227),_=n(612),b=n(4),y=n.n(b),v=n(371),j=n(373),g=n(316),O=n(318),x=n(202),w=n(1),S=n(32),P=n(69),E=n(161),C=n(374),k=n.n(C),M=(n(987),n(269)),I=n(214);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var D=function(e){var t=e.fetchCompliance,n=e.complianceFetchStatus,r=e.complianceSummary;Object(c.useEffect)((function(){t()}),[t]);var o,a=Object(P.a)(),s={bottom:0,left:0,right:0,top:0},b=[M.chart_color_blue_300.value,M.chart_color_blue_200.value];return u.a.createElement(p.a,l()({appName:"Compliance",className:"ins-c-card__compliance"},"pending"!==n?{"data-ouia-safe":!0}:{"data-ouia-safe":!1}),u.a.createElement(p.d,{title:"Compliance"}),u.a.createElement(p.b,null,u.a.createElement(g.Stack,null,"fulfilled"===n&&Array.isArray(r.data)&&(r.data.length>0?u.a.createElement(u.a.Fragment,null,(o=r,o.data.length>1?o.data.slice(0,3):o.data.slice()).map((function(e,t){return u.a.createElement("div",{className:"ins-c-compliance__row",key:t},u.a.createElement("div",{className:"ins-c-compliance__row-item"},u.a.createElement(_.a,{ariaDesc:"Compliance score",ariaTitle:"Pie chart compliance",constrainToVisibleArea:!0,data:[{x:"Compliant",y:e.attributes.compliant_host_count},{x:"Non-compliant",y:e.attributes.total_host_count-e.attributes.compliant_host_count}],labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:s,height:65,width:65,colorScale:b})),u.a.createElement("div",{className:"ins-c-compliance__row-item"},u.a.createElement(g.Stack,null,u.a.createElement(O.StackItem,null,u.a.createElement(f.Button,{className:"ins-c-compliance__policy-link",component:"a",href:"/".concat(w.G,"/compliance/reports/").concat(e.id),variant:"link",isInline:!0},e.attributes.name)),u.a.createElement(O.StackItem,null,u.a.createElement(v.Split,{gutter:"sm"},u.a.createElement(j.SplitItem,null,a.formatMessage(E.a.compliantHostCount,{count:e.attributes.total_host_count})),u.a.createElement(j.SplitItem,null,a.formatMessage(E.a.compliantScore,{score:Math.trunc(e.attributes.compliant_host_count/e.attributes.total_host_count)})))))))})),u.a.createElement("div",{className:"ins-c-compliance__row"},u.a.createElement("div",{className:"ins-c-compliance__row-item"}),u.a.createElement("div",{className:"ins-c-compliance__row-item"},u.a.createElement(f.Button,{className:"ins-c-compliance__policy-link",component:"a",href:"/".concat(w.G,"/compliance/reports/"),variant:"link",isInline:!0},"fulfilled"===n&&Array.isArray(r.data)&&3-r.data.length>=1&&"".concat(3-r.data.length," more compliance reports"))))):u.a.createElement(i.EmptyState,{className:"ins-c-compliance__empty-state",variant:i.EmptyStateVariant.full},u.a.createElement(x.Title,{headingLevel:"h5",size:"sm"},a.formatMessage(E.a.complianceEmptyStateTitle)),u.a.createElement(d.EmptyStateBody,null,a.formatMessage(E.a.complianceEmptyStateBody)),u.a.createElement(m.EmptyStateSecondaryActions,null,u.a.createElement(f.Button,{variant:"link",href:"".concat(w.G,"/compliance/reports/"),component:"a"},a.formatMessage(E.a.complianceEmptyStateAction1)),u.a.createElement(f.Button,{variant:"link",component:"a",href:"https://www.open-scap.org/getting-started/"},a.formatMessage(E.a.complianceEmptyStateAction2))))),"pending"===n&&u.a.createElement(h.a,null),"rejected"===n&&u.a.createElement(I.a,{appName:"Compliance"}))))};D.propTypes={fetchCompliance:y.a.func,complianceSummary:y.a.object,complianceFetchStatus:y.a.string,intl:y.a.any};t.default=k()(Object(S.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({complianceSummary:e.DashboardStore.complianceSummary,complianceFetchStatus:e.DashboardStore.complianceFetchStatus},t)}),(function(e){return{fetchCompliance:function(t){return e(s.d(t))}}}))(D))},222:function(e,t,n){(t=n(18)(!1)).push([e.i,".pf-l-split{--pf-l-split--m-gutter--MarginRight: var(--pf-global--gutter);--pf-l-split--m-gutter--md--MarginRight: var(--pf-global--gutter--md);display:flex;flex-wrap:nowrap;padding:0;margin:0}@media screen and (max-width: 768px){.pf-l-split{--pf-l-split--m-gutter--MarginRight: var(--pf-l-split--m-gutter--md--MarginRight)}}.pf-l-split__item.pf-m-fill{flex-grow:1}.pf-l-split.pf-m-gutter>*:not(:last-child){margin-right:var(--pf-l-split--m-gutter--MarginRight)}\n",""]),e.exports=t},250:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(372),t.default={split:"pf-l-split",splitItem:"pf-l-split__item",modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"}}},370:function(e,t,n){(t=n(18)(!1)).push([e.i,".ins-c-compliance__policy-link{white-space:pre-wrap;text-align:left}.ins-c-compliance__empty-state.pf-c-empty-state{padding:0}.ins-c-compliance__empty-state .pf-c-empty-state__secondary{margin-top:var(--pf-global--spacer--md)}.ins-c-compliance__row{display:flex;flex-direction:row;width:100%}.ins-c-compliance__row:not(:first-child),.ins-c-compliance__row:only-of-type{padding-top:var(--pf-global--spacer--lg)}.ins-c-compliance__row-item:first-child{width:65px;margin-right:var(--pf-global--spacer--lg)}.ins-c-compliance__row-item:last-child{max-width:200px}.ins-c-compliance__row-item:last-child>.pf-l-stack .pf-l-stack__item .pf-l-split .pf-l-split__item{font-size:var(--pf-global--FontSize--sm)}\n",""]),e.exports=t},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Split=void 0;var r=c(n(4)),o=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(0)),a=c(n(252)),l=n(263),s=n(31);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.gutter,n=void 0===t?null:t,r=e.className,i=void 0===r?"":r,c=e.children,f=void 0===c?null:c,d=e.component,m=void 0===d?"div":d,h=p(e,["gutter","className","children","component"]),_=m;return o.createElement(_,u({},h,{className:(0,s.css)(a.default.split,n&&(0,l.getGutterModifier)(a.default,n,a.default.modifiers.gutter),i)}),f)};t.Split=f,f.propTypes={gutter:r.default.oneOfType([r.default.oneOf(["sm"]),r.default.oneOf(["md"]),r.default.oneOf(["lg"]),r.default.any]),children:r.default.node,className:r.default.string,component:r.default.node}},372:function(e,t,n){var r=n(20),o=n(222);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},l=r(o,a);if(!o.locals||e.hot.invalidate){var s=o.locals;e.hot.accept(222,(function(){"string"==typeof(o=(o=n(222)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(s,o.locals)?(s=o.locals,l(o)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=o.locals||{}},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SplitItem=void 0;var r=i(n(4)),o=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(0)),a=i(n(252)),l=n(31);function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.isFilled,n=void 0!==t&&t,r=e.className,s=void 0===r?"":r,i=e.children,p=void 0===i?null:i,f=u(e,["isFilled","className","children"]);return o.createElement("div",c({},f,{className:(0,l.css)(a.default.splitItem,n&&a.default.modifiers.fill,s)}),p)};t.SplitItem=p,p.propTypes={isFilled:r.default.bool,children:r.default.node,className:r.default.string}},374:function(e,t,n){var r;window,r=function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/RouterParams.js")}({"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*******************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"../../node_modules/@babel/runtime/helpers/createClass.js":
/*!****************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/createClass.js ***!
  \****************************************************************************************************************/
/*! no static exports found */function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*******************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"../../node_modules/@babel/runtime/helpers/inherits.js":
/*!*************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/inherits.js ***!
  \*************************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./setPrototypeOf */"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!****************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./objectWithoutPropertiesLoose */"../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!******************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ../helpers/typeof */"../../node_modules/@babel/runtime/helpers/typeof.js"),o=n(/*! ./assertThisInitialized */"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*******************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"../../node_modules/@babel/runtime/helpers/typeof.js":
/*!***********************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/typeof.js ***!
  \***********************************************************************************************************/
/*! no static exports found */function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},"../../node_modules/lodash/_SetCache.js":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_SetCache.js ***!
  \**********************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./isArray */"../../node_modules/lodash/isArray.js");e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return r(e)?e:[e]}},"../../node_modules/lodash/_Stack.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_Stack.js ***!
  \*******************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_listCacheClear */"../../node_modules/lodash/_listCacheClear.js"),o=n(/*! ./_listCacheDelete */"../../node_modules/lodash/_listCacheDelete.js"),a=n(/*! ./_listCacheGet */"../../node_modules/lodash/_listCacheGet.js"),l=n(/*! ./_listCacheHas */"../../node_modules/lodash/_listCacheHas.js"),s=n(/*! ./_listCacheSet */"../../node_modules/lodash/_listCacheSet.js");function i(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}i.prototype.clear=r,i.prototype.delete=o,i.prototype.get=a,i.prototype.has=l,i.prototype.set=s,e.exports=i},"../../node_modules/lodash/_arraySome.js":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_arraySome.js ***!
  \***********************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},"../../node_modules/lodash/_assocIndexOf.js":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_assocIndexOf.js ***!
  \**************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./eq */"../../node_modules/lodash/eq.js");e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},"../../node_modules/lodash/_baseIndexOf.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_baseIndexOf.js ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},"../../node_modules/lodash/_baseIsEqual.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_baseIsEqual.js ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_baseIsEqualDeep */"../../node_modules/lodash/_baseIsEqualDeep.js"),o=n(/*! ./isObjectLike */"../../node_modules/lodash/isObjectLike.js");e.exports=function e(t,n,a,l,s){return t===n||(null==t||null==n||!o(t)&&!o(n)?t!=t&&n!=n:r(t,n,a,l,e,s))}},"../../node_modules/lodash/_baseIsEqualDeep.js":
/*!*****************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_baseIsEqualDeep.js ***!
  \*****************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_Stack */"../../node_modules/lodash/_Stack.js"),o=n(/*! ./_equalArrays */"../../node_modules/lodash/_equalArrays.js"),a=n(/*! ./_equalByTag */"../../node_modules/lodash/_equalByTag.js"),l=n(/*! ./_equalObjects */"../../node_modules/lodash/_equalObjects.js"),s=n(/*! ./_getTag */"../../node_modules/lodash/_getTag.js"),i=n(/*! ./isArray */"../../node_modules/lodash/isArray.js"),c=n(/*! ./isBuffer */"../../node_modules/lodash/isBuffer.js"),u=n(/*! ./isTypedArray */"../../node_modules/lodash/isTypedArray.js"),p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,d,m,h){var _=i(e),b=i(t),y=_?"[object Array]":s(e),v=b?"[object Array]":s(t),j=(y="[object Arguments]"==y?p:y)==p,g=(v="[object Arguments]"==v?p:v)==p,O=y==v;if(O&&c(e)){if(!c(t))return!1;_=!0,j=!1}if(O&&!j)return h||(h=new r),_||u(e)?o(e,t,n,d,m,h):a(e,t,y,n,d,m,h);if(!(1&n)){var x=j&&f.call(e,"__wrapped__"),w=g&&f.call(t,"__wrapped__");if(x||w){var S=x?e.value():e,P=w?t.value():t;return h||(h=new r),m(S,P,n,d,h)}}return!!O&&(h||(h=new r),l(e,t,n,d,m,h))}},"../../node_modules/lodash/_cacheHas.js":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_cacheHas.js ***!
  \**********************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_baseIndexOf */"../../node_modules/lodash/_baseIndexOf.js");e.exports=function(e,t){return!(null==e||!e.length)&&r(e,t,0)>-1}},"../../node_modules/lodash/_equalArrays.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_equalArrays.js ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_SetCache */"../../node_modules/lodash/_SetCache.js"),o=n(/*! ./_arraySome */"../../node_modules/lodash/_arraySome.js"),a=n(/*! ./_cacheHas */"../../node_modules/lodash/_cacheHas.js");e.exports=function(e,t,n,l,s,i){var c=1&n,u=e.length,p=t.length;if(u!=p&&!(c&&p>u))return!1;var f=i.get(e);if(f&&i.get(t))return f==t;var d=-1,m=!0,h=2&n?new r:void 0;for(i.set(e,t),i.set(t,e);++d<u;){var _=e[d],b=t[d];if(l)var y=c?l(b,_,d,t,e,i):l(_,b,d,e,t,i);if(void 0!==y){if(y)continue;m=!1;break}if(h){if(!o(t,(function(e,t){if(!a(h,t)&&(_===e||s(_,e,n,l,i)))return h.push(t)}))){m=!1;break}}else if(_!==b&&!s(_,b,n,l,i)){m=!1;break}}return i.delete(e),i.delete(t),m}},"../../node_modules/lodash/_equalByTag.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_equalByTag.js ***!
  \************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},"../../node_modules/lodash/_equalObjects.js":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_equalObjects.js ***!
  \**************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_getAllKeys */"../../node_modules/lodash/_getAllKeys.js"),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,a,l,s){var i=1&n,c=r(e),u=c.length;if(u!=r(t).length&&!i)return!1;for(var p=u;p--;){var f=c[p];if(!(i?f in t:o.call(t,f)))return!1}var d=s.get(e);if(d&&s.get(t))return d==t;var m=!0;s.set(e,t),s.set(t,e);for(var h=i;++p<u;){var _=e[f=c[p]],b=t[f];if(a)var y=i?a(b,_,f,t,e,s):a(_,b,f,e,t,s);if(!(void 0===y?_===b||l(_,b,n,a,s):y)){m=!1;break}h||(h="constructor"==f)}if(m&&!h){var v=e.constructor,j=t.constructor;v==j||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof j&&j instanceof j||(m=!1)}return s.delete(e),s.delete(t),m}},"../../node_modules/lodash/_getAllKeys.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_getAllKeys.js ***!
  \************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_overArg */"../../node_modules/lodash/_overArg.js")(Object.keys,Object);e.exports=r},"../../node_modules/lodash/_getTag.js":
/*!********************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_getTag.js ***!
  \********************************************************************************************/
/*! no static exports found */function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},"../../node_modules/lodash/_listCacheClear.js":
/*!****************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_listCacheClear.js ***!
  \****************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(){this.__data__=[],this.size=0}},"../../node_modules/lodash/_listCacheDelete.js":
/*!*****************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_listCacheDelete.js ***!
  \*****************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_assocIndexOf */"../../node_modules/lodash/_assocIndexOf.js"),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():o.call(t,n,1),--this.size,0))}},"../../node_modules/lodash/_listCacheGet.js":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_listCacheGet.js ***!
  \**************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_assocIndexOf */"../../node_modules/lodash/_assocIndexOf.js");e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},"../../node_modules/lodash/_listCacheHas.js":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_listCacheHas.js ***!
  \**************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_assocIndexOf */"../../node_modules/lodash/_assocIndexOf.js");e.exports=function(e){return r(this.__data__,e)>-1}},"../../node_modules/lodash/_listCacheSet.js":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_listCacheSet.js ***!
  \**************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_assocIndexOf */"../../node_modules/lodash/_assocIndexOf.js");e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},"../../node_modules/lodash/_overArg.js":
/*!*********************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/_overArg.js ***!
  \*********************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},"../../node_modules/lodash/eq.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/eq.js ***!
  \***************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},"../../node_modules/lodash/isArray.js":
/*!********************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/isArray.js ***!
  \********************************************************************************************/
/*! no static exports found */function(e,t){var n=Array.isArray;e.exports=n},"../../node_modules/lodash/isBuffer.js":
/*!*********************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/isBuffer.js ***!
  \*********************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(){return!1}},"../../node_modules/lodash/isEqual.js":
/*!********************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/isEqual.js ***!
  \********************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./_baseIsEqual */"../../node_modules/lodash/_baseIsEqual.js");e.exports=function(e,t){return r(e,t)}},"../../node_modules/lodash/isObjectLike.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/isObjectLike.js ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},"../../node_modules/lodash/isTypedArray.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/lodash/isTypedArray.js ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(){return!1}},"./src/RouterParams.js":
/*!*****************************!*\
  !*** ./src/RouterParams.js ***!
  \*****************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t){(0,c.default)(f,t);var n,r=(n=f,function(){var e,t=(0,i.default)(n);if(m()){var r=(0,i.default)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,s.default)(this,e)});function f(){return(0,a.default)(this,f),r.apply(this,arguments)}return(0,l.default)(f,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,n=t.params,r=t.path,o=t.url,a=e.onPathChange,l=e.location;(0,p.matchPath)(l.pathname,{path:o,exact:!0})&&a&&a({params:n,path:r})}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.match,n=t.params,r=t.path,o=t.url,a=e.onPathChange,l=e.location,s=e.routerData;!s||(0,d.default)(n,s.params)&&r===s.path||(0,p.matchPath)(l.pathname,{path:o,exact:!0})&&a&&a({params:n,path:r})}},{key:"render",value:function(){var t=this.props,n=(t.onPathChange,t.routerData,t.staticContext,(0,o.default)(t,["onPathChange","routerData","staticContext"]));return u.default.createElement(e,n)}}]),f}(u.default.Component);return(0,p.withRouter)((0,f.connect)((function(e){return{routerData:e.routerData}}),(function(e){return{onPathChange:function(t){return e({type:"@@INSIGHTS-CORE/NAVIGATION",payload:t})}}}))(t))};var o=r(n(/*! @babel/runtime/helpers/objectWithoutProperties */"../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(n(/*! @babel/runtime/helpers/classCallCheck */"../../node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(n(/*! @babel/runtime/helpers/createClass */"../../node_modules/@babel/runtime/helpers/createClass.js")),s=r(n(/*! @babel/runtime/helpers/possibleConstructorReturn */"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(n(/*! @babel/runtime/helpers/getPrototypeOf */"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(n(/*! @babel/runtime/helpers/inherits */"../../node_modules/@babel/runtime/helpers/inherits.js")),u=r(n(/*! react */"react")),p=n(/*! react-router-dom */"react-router-dom"),f=n(/*! react-redux */"react-redux"),d=r(n(/*! lodash/isEqual */"../../node_modules/lodash/isEqual.js"));function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(t,n){t.exports=e},"react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */function(e,n){e.exports=t},"react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=n}})},e.exports=r(n(0),n(32),n(34))},987:function(e,t,n){var r=n(20),o=n(370);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},l=r(o,a);if(!o.locals||e.hot.invalidate){var s=o.locals;e.hot.accept(370,(function(){"string"==typeof(o=(o=n(370)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(s,o.locals)?(s=o.locals,l(o)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=o.locals||{}}}]);
//# sourceMappingURL=10.js.map