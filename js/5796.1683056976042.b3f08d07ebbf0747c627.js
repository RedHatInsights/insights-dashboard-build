/*! For license information please see 5796.1683056976042.b3f08d07ebbf0747c627.js.LICENSE.txt */
(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[5796],{62472:(e,n,t)=>{"use strict";t.d(n,{S$:()=>c,Z1:()=>s,dp:()=>i,ql:()=>f});var r=t(93264);let o=0;const u="OUIA-Generated-",a={};function i(e,n,t=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":t,"data-ouia-component-id":n}}const c=(e,n,t=!0,r)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":t,"data-ouia-component-id":s(e,n,r)}),s=(e,n,t)=>{const o=(0,r.useMemo)((()=>f(e,t)),[e,t]);return null!=n?n:o};function f(e,n){try{let t;return t="undefined"!=typeof window?`${window.location.href}-${e}-${n||""}`:`${e}-${n||""}`,a[t]||(a[t]=0),`${u}${e}-${n?`${n}-`:""}${++a[t]}`}catch(t){return`${u}${e}-${n?`${n}-`:""}${++o}`}}},35664:(e,n,t)=>{"use strict";t.d(n,{i:()=>s,Z:()=>f});var r=t(93264),o=t.n(r),u=t(14938),a=t(94184),i=t.n(a),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)},s={xs:"xs",sm:"sm",md:"md",lg:"lg"};const f=function(e){var n,t=e.size,r=void 0===t?s.md:t,a=e.isDark,f=void 0!==a&&a,p=e.className,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["size","isDark","className"]);return o().createElement(u.Skeleton,c({className:i()("ins-c-skeleton","ins-c-skeleton__".concat(r),(n={},n["ins-m-dark"]=f,n),p)},l))}},94184:(e,n)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var u=typeof t;if("string"===u||"number"===u)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===u)if(t.toString===Object.prototype.toString)for(var i in t)r.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},34155:e=>{var n,t,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"==typeof clearTimeout?clearTimeout:u}catch(e){t=u}}();var i,c=[],s=!1,f=-1;function p(){s&&i&&(s=!1,i.length?c=i.concat(c):f=-1,c.length&&l())}function l(){if(!s){var e=a(p);s=!0;for(var n=c.length;n;){for(i=c,c=[];++f<n;)i&&i[f].run();f=-1,n=c.length}i=null,s=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===u||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function d(e,n){this.fun=e,this.array=n}function v(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new d(e,n)),1!==c.length||s||a(l)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},28216:(e,n,t)=>{"use strict";t.d(n,{zt:()=>p,dC:()=>ee.unstable_batchedUpdates,$j:()=>z,I0:()=>V,v9:()=>Y});var r=t(93264),o=t.n(r),u=(t(45697),o().createContext(null)),a=function(e){e()},i=function(){return a},c={notify:function(){},get:function(){return[]}};function s(e,n){var t,r=c;function o(){a.onStateChange&&a.onStateChange()}function u(){t||(t=n?n.addNestedSub(o):e.subscribe(o),r=function(){var e=i(),n=null,t=null;return{clear:function(){n=null,t=null},notify:function(){e((function(){for(var e=n;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],t=n;t;)e.push(t),t=t.next;return e},subscribe:function(e){var r=!0,o=t={callback:e,next:null,prev:t};return o.prev?o.prev.next=o:n=o,function(){r&&null!==n&&(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}())}var a={addNestedSub:function(e){return u(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(t)},trySubscribe:u,tryUnsubscribe:function(){t&&(t(),t=void 0,r.clear(),r=c)},getListeners:function(){return r}};return a}var f="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;const p=function(e){var n=e.store,t=e.context,a=e.children,i=(0,r.useMemo)((function(){var e=s(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),c=(0,r.useMemo)((function(){return n.getState()}),[n]);f((function(){var e=i.subscription;return e.trySubscribe(),c!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,c]);var p=t||u;return o().createElement(p.Provider,{value:i},a)};var l=t(87462),d=t(63366),v=t(8679),m=t.n(v),h=t(72973),y=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],b=["reactReduxForwardedRef"],g=[],w=[null,null];function P(e,n){var t=e[1];return[n.payload,t+1]}function O(e,n,t){f((function(){return e.apply(void 0,n)}),t)}function S(e,n,t,r,o,u,a){e.current=r,n.current=o,t.current=!1,u.current&&(u.current=null,a())}function C(e,n,t,r,o,u,a,i,c,s){if(e){var f=!1,p=null,l=function(){if(!f){var e,t,l=n.getState();try{e=r(l,o.current)}catch(e){t=e,p=e}t||(p=null),e===u.current?a.current||c():(u.current=e,i.current=e,a.current=!0,s({type:"STORE_UPDATED",payload:{error:t}}))}};return t.onStateChange=l,t.trySubscribe(),l(),function(){if(f=!0,t.tryUnsubscribe(),t.onStateChange=null,p)throw p}}}var x=function(){return[null,0]};function T(e,n){void 0===n&&(n={});var t=n,a=t.getDisplayName,i=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,c=t.methodName,f=void 0===c?"connectAdvanced":c,p=t.renderCountProp,v=void 0===p?void 0:p,T=t.shouldHandleStateChanges,E=void 0===T||T,N=t.storeKey,M=void 0===N?"store":N,$=(t.withRef,t.forwardRef),R=void 0!==$&&$,j=t.context,k=void 0===j?u:j,q=(0,d.Z)(t,y),D=k;return function(n){var t=n.displayName||n.name||"Component",u=i(t),a=(0,l.Z)({},q,{getDisplayName:i,methodName:f,renderCountProp:v,shouldHandleStateChanges:E,storeKey:M,displayName:u,wrappedComponentName:t,WrappedComponent:n}),c=q.pure,p=c?r.useMemo:function(e){return e()};function y(t){var u=(0,r.useMemo)((function(){var e=t.reactReduxForwardedRef,n=(0,d.Z)(t,b);return[t.context,e,n]}),[t]),i=u[0],c=u[1],f=u[2],v=(0,r.useMemo)((function(){return i&&i.Consumer&&(0,h.isContextConsumer)(o().createElement(i.Consumer,null))?i:D}),[i,D]),m=(0,r.useContext)(v),y=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch);Boolean(m)&&Boolean(m.store);var T=y?t.store:m.store,N=(0,r.useMemo)((function(){return function(n){return e(n.dispatch,a)}(T)}),[T]),M=(0,r.useMemo)((function(){if(!E)return w;var e=s(T,y?null:m.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[T,y,m]),$=M[0],R=M[1],j=(0,r.useMemo)((function(){return y?m:(0,l.Z)({},m,{subscription:$})}),[y,m,$]),k=(0,r.useReducer)(P,g,x),q=k[0][0],Z=k[1];if(q&&q.error)throw q.error;var _=(0,r.useRef)(),F=(0,r.useRef)(f),A=(0,r.useRef)(),B=(0,r.useRef)(!1),U=p((function(){return A.current&&f===F.current?A.current:N(T.getState(),f)}),[T,q,f]);O(S,[F,_,B,f,U,A,R]),O(C,[E,T,$,N,F,_,B,A,R,Z],[T,$,N]);var L=(0,r.useMemo)((function(){return o().createElement(n,(0,l.Z)({},U,{ref:c}))}),[c,n,U]);return(0,r.useMemo)((function(){return E?o().createElement(v.Provider,{value:j},L):L}),[v,L,j])}var T=c?o().memo(y):y;if(T.WrappedComponent=n,T.displayName=y.displayName=u,R){var N=o().forwardRef((function(e,n){return o().createElement(T,(0,l.Z)({},e,{reactReduxForwardedRef:n}))}));return N.displayName=u,N.WrappedComponent=n,m()(N,n)}return m()(T,n)}}function E(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function N(e,n){if(E(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(var o=0;o<t.length;o++)if(!Object.prototype.hasOwnProperty.call(n,t[o])||!E(e[t[o]],n[t[o]]))return!1;return!0}function M(e){return function(n,t){var r=e(n,t);function o(){return r}return o.dependsOnOwnProps=!1,o}}function $(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function R(e,n){return function(n,t){t.displayName;var r=function(e,n){return r.dependsOnOwnProps?r.mapToProps(e,n):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(n,t){r.mapToProps=e,r.dependsOnOwnProps=$(e);var o=r(n,t);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=$(o),o=r(n,t)),o},r}}const j=[function(e){return"function"==typeof e?R(e):void 0},function(e){return e?void 0:M((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?M((function(n){return function(e,n){var t={},r=function(r){var o=e[r];"function"==typeof o&&(t[r]=function(){return n(o.apply(void 0,arguments))})};for(var o in e)r(o);return t}(e,n)})):void 0}],k=[function(e){return"function"==typeof e?R(e):void 0},function(e){return e?void 0:M((function(){return{}}))}];function q(e,n,t){return(0,l.Z)({},t,e,n)}const D=[function(e){return"function"==typeof e?function(e){return function(n,t){t.displayName;var r,o=t.pure,u=t.areMergedPropsEqual,a=!1;return function(n,t,i){var c=e(n,t,i);return a?o&&u(c,r)||(r=c):(a=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return q}}];var Z=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function _(e,n,t,r){return function(o,u){return t(e(o,u),n(r,u),u)}}function F(e,n,t,r,o){var u,a,i,c,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1;return function(o,v){return d?function(o,d){var v,m,h=!p(d,a),y=!f(o,u);return u=o,a=d,h&&y?(i=e(u,a),n.dependsOnOwnProps&&(c=n(r,a)),s=t(i,c,a)):h?(e.dependsOnOwnProps&&(i=e(u,a)),n.dependsOnOwnProps&&(c=n(r,a)),s=t(i,c,a)):y?(v=e(u,a),m=!l(v,i),i=v,m&&(s=t(i,c,a)),s):s}(o,v):(i=e(u=o,a=v),c=n(r,a),s=t(i,c,a),d=!0,s)}}function A(e,n){var t=n.initMapStateToProps,r=n.initMapDispatchToProps,o=n.initMergeProps,u=(0,d.Z)(n,Z),a=t(e,u),i=r(e,u),c=o(e,u);return(u.pure?F:_)(a,i,c,e,u)}var B=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function U(e,n,t){for(var r=n.length-1;r>=0;r--){var o=n[r](e);if(o)return o}return function(n,r){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+r.wrappedComponentName+".")}}function L(e,n){return e===n}function H(e){var n=void 0===e?{}:e,t=n.connectHOC,r=void 0===t?T:t,o=n.mapStateToPropsFactories,u=void 0===o?k:o,a=n.mapDispatchToPropsFactories,i=void 0===a?j:a,c=n.mergePropsFactories,s=void 0===c?D:c,f=n.selectorFactory,p=void 0===f?A:f;return function(e,n,t,o){void 0===o&&(o={});var a=o,c=a.pure,f=void 0===c||c,v=a.areStatesEqual,m=void 0===v?L:v,h=a.areOwnPropsEqual,y=void 0===h?N:h,b=a.areStatePropsEqual,g=void 0===b?N:b,w=a.areMergedPropsEqual,P=void 0===w?N:w,O=(0,d.Z)(a,B),S=U(e,u,"mapStateToProps"),C=U(n,i,"mapDispatchToProps"),x=U(t,s,"mergeProps");return r(p,(0,l.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:S,initMapDispatchToProps:C,initMergeProps:x,pure:f,areStatesEqual:m,areOwnPropsEqual:y,areStatePropsEqual:g,areMergedPropsEqual:P},O))}}const z=H();function I(){return(0,r.useContext)(u)}function W(e){void 0===e&&(e=u);var n=e===u?I:function(){return(0,r.useContext)(e)};return function(){return n().store}}var K=W();function G(e){void 0===e&&(e=u);var n=e===u?K:W(e);return function(){return n().dispatch}}var V=G(),J=function(e,n){return e===n};function Q(e){void 0===e&&(e=u);var n=e===u?I:function(){return(0,r.useContext)(e)};return function(e,t){void 0===t&&(t=J);var o=n(),u=function(e,n,t,o){var u,a=(0,r.useReducer)((function(e){return e+1}),0)[1],i=(0,r.useMemo)((function(){return s(t,o)}),[t,o]),c=(0,r.useRef)(),p=(0,r.useRef)(),l=(0,r.useRef)(),d=(0,r.useRef)(),v=t.getState();try{if(e!==p.current||v!==l.current||c.current){var m=e(v);u=void 0!==d.current&&n(m,d.current)?d.current:m}else u=d.current}catch(e){throw c.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+c.current.stack+"\n\n"),e}return f((function(){p.current=e,l.current=v,d.current=u,c.current=void 0})),f((function(){function e(){try{var e=t.getState();if(e===l.current)return;var r=p.current(e);if(n(r,d.current))return;d.current=r,l.current=e}catch(e){c.current=e}a()}return i.onStateChange=e,i.trySubscribe(),e(),function(){return i.tryUnsubscribe()}}),[t,i]),u}(e,t,o.store,o.subscription);return(0,r.useDebugValue)(u),u}}var X,Y=Q(),ee=t(3644);X=ee.unstable_batchedUpdates,a=X},88359:(e,n)=>{"use strict";var t=60103,r=60106,o=60107,u=60108,a=60114,i=60109,c=60110,s=60112,f=60113,p=60120,l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;t=v("react.element"),r=v("react.portal"),o=v("react.fragment"),u=v("react.strict_mode"),a=v("react.profiler"),i=v("react.provider"),c=v("react.context"),s=v("react.forward_ref"),f=v("react.suspense"),p=v("react.suspense_list"),l=v("react.memo"),d=v("react.lazy"),v("react.block"),v("react.server.block"),v("react.fundamental"),v("react.debug_trace_mode"),v("react.legacy_hidden")}n.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case o:case a:case u:case f:case p:return e;default:switch(e=e&&e.$$typeof){case c:case s:case d:case l:case i:return e;default:return n}}case r:return n}}}(e)===c}},72973:(e,n,t)=>{"use strict";e.exports=t(88359)},87462:(e,n,t)=>{"use strict";function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:()=>r})},63366:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:()=>r})}}]);