(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[5068],{5068:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ActionType:()=>f,createPromise:()=>l,default:()=>c});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!==t&&"object"===(void 0===t?"undefined":n(t))&&t&&"function"==typeof t.then}var i=r(34155),a=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[f.Pending,f.Fulfilled,f.Rejected],r=t.promiseTypeSuffixes||e,n=t.promiseTypeDelimiter||"_";return function(t){var e=t.dispatch;return function(t){return function(i){var f=void 0,l=void 0;if(!i.payload)return t(i);var c=i.payload;if(o(c))f=c;else if(o(c.promise))f=c.promise,l=c.data;else{if("function"!=typeof c&&"function"!=typeof c.promise)return t(i);if(f=c.promise?c.promise():c(),l=c.promise?c.data:void 0,!o(f))return t(u({},i,{payload:f}))}var p=i.type,y=i.meta,d=a(r,3),s=d[0],v=d[1],h=d[2],m=function(t,e){return u({type:[p,e?h:v].join(n)},null==t?{}:{payload:t},void 0!==y?{meta:y}:{},e?{error:!0}:{})};return t(u({type:[p,s].join(n)},void 0!==l?{payload:l}:{},void 0!==y?{meta:y}:{})),f.then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=m(t,!1);return e(r),{value:t,action:r}}),(function(t){var r=m(t,!0);throw e(r),t}))}}}}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dispatch;return"function"==typeof e?l()({dispatch:e}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/5068.b753c469edb901dcc3bc.js.map