(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[977,809],{40688:function(n,t){"use strict";var e=this&&this.__assign||function(){return e=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},e.apply(this,arguments)},r=this&&this.__awaiter||function(n,t,e,r){return new(e||(e=Promise))((function(o,i){function a(n){try{c(r.next(n))}catch(n){i(n)}}function u(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,u)}c((r=r.apply(n,t||[])).next())}))},o=this&&this.__generator||function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.processManifest=t.injectScript=t.getAppsByRootLocation=t.getAppData=t.getApp=t.initializeApp=t.unmountAll=t.unmountAppsFromRoute=t.removeActiveApp=t.setActiveApp=t.initialize=t.setPendingInjection=t.getScalprum=t.GLOBAL_NAMESPACE=void 0,t.GLOBAL_NAMESPACE="__scalprum__",t.getScalprum=function(){return window[t.GLOBAL_NAMESPACE]};var i=function(n){var t={};return Object.values(n).forEach((function(n){var e=n.rootLocation,r=n.name;e&&t[e]?t[e].push(r):e&&(t[e]=[r])})),t};t.setPendingInjection=function(n,e){window[t.GLOBAL_NAMESPACE].pendingInjections[n]=e},t.initialize=function(n){var r=n.scalpLets,o=n.api;window[t.GLOBAL_NAMESPACE]=e({apps:{},appsMetaData:r,activeApps:{},scalpletRoutes:i(r),pendingInjections:{}},o)},t.setActiveApp=function(n){window[t.GLOBAL_NAMESPACE].activeApps[n]=!0},t.removeActiveApp=function(n){window[t.GLOBAL_NAMESPACE].activeApps[n]=!1},t.unmountAppsFromRoute=function(n){var e;null===(e=window[t.GLOBAL_NAMESPACE].scalpletRoutes[n])||void 0===e||e.forEach((function(n){return window[t.GLOBAL_NAMESPACE].apps[n].unmount()}))},t.unmountAll=function(){Object.entries(window[t.GLOBAL_NAMESPACE].activeApps).filter((function(n){var e=n[0];n[1]&&window[t.GLOBAL_NAMESPACE].apps[e].unmount()}))},t.initializeApp=function(n){if(void 0===window[t.GLOBAL_NAMESPACE])throw"Cannot inititlize app. Scalprum was not inititliazed!";window[t.GLOBAL_NAMESPACE].apps[n.name]={mount:function(r){var o=e(e({},r),window[t.GLOBAL_NAMESPACE]);return t.setActiveApp(n.name),n.mount(o)},unmount:function(){t.removeActiveApp(n.name),n.unmount()},update:n.update,nodeId:n.id},window[t.GLOBAL_NAMESPACE].pendingInjections[n.name]()},t.getApp=function(n){return window[t.GLOBAL_NAMESPACE].apps[n]},t.getAppData=function(n){return window[t.GLOBAL_NAMESPACE].appsMetaData[n]},t.getAppsByRootLocation=function(n){return Object.keys(window[t.GLOBAL_NAMESPACE].appsMetaData).filter((function(e){return window[t.GLOBAL_NAMESPACE].appsMetaData[e].rootLocation===n})).map((function(n){return e(e({},window[t.GLOBAL_NAMESPACE].appsMetaData[n]),{name:n})}))},t.injectScript=function(n,e,r){void 0===r&&(r=!1);var o=void 0,i=new Promise((function(i,a){(o=document.createElement("script")).src=e,o.id=n,r?o.onload=function(){i([name,o])}:t.setPendingInjection(n,(function(){return i([name,o])})),o.onerror=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];console.log(e),r?a([e,o]):t.setPendingInjection(n,(function(){return a([e,o])}))}}));return void 0!==o&&document.body.appendChild(o),i},t.processManifest=function(n,e,i,a){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,fetch(n)];case 1:return[4,o.sent().json()];case 2:return r=o.sent(),[2,Promise.all(Object.entries(r).filter((function(n){var t=n[0];return!i||t===i})).flatMap(a||function(n){return n[1].entry||n}).map((function(n){return t.injectScript(e,n,!0)})))]}}))}))}},25977:(n,t,e)=>{"use strict";e.r(t),e.d(t,{ScalprumComponent:()=>O,ScalprumContext:()=>S,ScalprumLink:()=>s,ScalprumProvider:()=>P,ScalprumRoute:()=>p,default:()=>P,useScalprum:()=>j});var r=e(40688),o=e(93264),i=e.n(o),a=e(3644),u=e(75662),c=function(){return c=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},c.apply(this,arguments)},p=function(n){var t,e=n.Placeholder,p=void 0===e?o.Fragment:e,l=n.elementId,s=n.appName,f=n.path,d=n.api,m=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e}(n,["Placeholder","elementId","appName","path","api"]),h=(null===(t=(0,r.getAppsByRootLocation)(f))||void 0===t?void 0:t[0]).scriptLocation;return(0,o.useEffect)((function(){var n=(0,r.getApp)(s),t=document.getElementById(l);if(n){var e=n.mount(d);(0,a.render)(e,t)}else(0,r.injectScript)(s,h).then((function(){var n=(0,r.getApp)(s).mount(d);(0,a.render)(n,t)}));return function(){(0,r.getApp)(s).unmount(),(0,a.unmountComponentAtNode)(t)}}),[f]),i().createElement(u.Route,c({},m,{path:f}),i().createElement("div",{id:l},i().createElement(p,null)))},l=function(){return l=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},l.apply(this,arguments)},s=function(n){var t=n.to,e=n.onClick,r=n.shouldUnmount,o=(n.unmount,function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e}(n,["to","onClick","shouldUnmount","unmount"])),a=(0,u.useLocation)().pathname;return i().createElement(u.Link,l({onClick:function(n){void 0===r?"string"==typeof t&&a!==t||"object"==typeof t&&t.pathname:"boolean"==typeof r||"function"==typeof r&&r(a,t),e&&e(n)},to:t},o))},f=e(18446),d=e.n(f),m=function(){return i().createElement("span",null,"Error while loading component!")};function h(n,t,r){var o=this;return void 0===r&&(r=m),function(){return i=o,a=void 0,c=function(){var o,i,a;return function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(u){switch(u.label){case 0:return u.trys.push([0,4,,5]),[4,e.I("default")];case 1:return u.sent(),[4,window[n].init(e.S.default)];case 2:return u.sent(),[4,window[n].get(t)];case 3:return i=u.sent(),o=i(),[3,5];case 4:return a=u.sent(),console.error(a),o={default:r},[3,5];case 5:return[2,o]}}))},new((u=void 0)||(u=Promise))((function(n,t){function e(n){try{o(c.next(n))}catch(n){t(n)}}function r(n){try{o(c.throw(n))}catch(n){t(n)}}function o(t){var o;t.done?n(t.value):(o=t.value,o instanceof u?o:new u((function(n){n(o)}))).then(e,r)}o((c=c.apply(i,a||[])).next())}));var i,a,u,c}}var v,y=(v=function(n,t){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},v(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}v(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),A=function(){return A=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},A.apply(this,arguments)},w=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e},E=function(){return i().createElement("span",null,"Error while loading component!")},b=function(n){var t=n.fallback,e=void 0===t?"loading":t,a=n.appName,u=n.api,c=n.scope,p=n.module,l=n.ErrorComponent,s=n.processor,f=n.innerRef,d=w(n,["fallback","appName","api","scope","module","ErrorComponent","processor","innerRef"]),m=(0,r.getAppData)(a),v=m.scriptLocation,y=m.manifestLocation,E=(0,o.useState)(void 0),b=E[0],g=E[1],O=(0,o.useState)(),S=O[0],L=O[1];return(0,o.useEffect)((function(){var n=(0,r.getApp)(a);return n?(null==n||n.mount(u),g((function(){return i().lazy(h(c,p,l))}))):v?(0,r.injectScript)(a,v).then((function(n){var t=n[1],e=(0,r.getApp)(a);null==e||e.mount(u),g((function(){return i().lazy(h(c,p,l))})),L((function(){return t}))})).catch((function(){g((function(){return l}))})):y&&(0,r.processManifest)(y,a,c,s).then((function(n){L((function(){return n.map((function(n){return n[1]}))}));var t=(0,r.getApp)(a);null==t||t.mount(u),g((function(){return i().lazy(h(c,p,l))}))})).catch((function(){g((function(){return l}))})),function(){var n=(0,r.getApp)(a);null==n||n.unmount(),S&&(Array.isArray(S)?S.forEach((function(n){return document.body.removeChild(n)})):document.body.removeChild(S))}}),[]),i().createElement(o.Suspense,{fallback:e},b?i().createElement(b,A({ref:f},d)):e)},g=function(n){function t(t){var e=n.call(this,t)||this;return e.state={hasError:!1},e}return y(t,n),t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.shouldComponentUpdate=function(n,t){return this.state.hasError!==t.hasError||!d()(n,this.props)||!d()(t,this.state)},t.prototype.componentDidCatch=function(n,t){console.error("Scalprum encountered an error!",n),console.log("Error info: ",JSON.stringify(t,null,2)),console.log("Component stack: ",t.componentStack),this.setState({error:n,errorInfo:t})},t.prototype.render=function(){var n=this.props,t=n.ErrorComponent,e=void 0===t?i().createElement(E,null):t,r=w(n,["ErrorComponent"]);return this.state.hasError?i().cloneElement(e,A({},this.state)):i().createElement(b,A({},r,{ErrorComponent:function(){return i().createElement(o.Fragment,null,e)}}))},t.defaultProps={ErrorComponent:i().createElement(E,null)},t}(i().Component),O=i().forwardRef((function(n,t){return i().createElement(g,A({},n,{innerRef:t}))})),S=(0,o.createContext)({initialized:!1,config:{},api:void 0}),L=function(){return L=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},L.apply(this,arguments)};function P(n){var t=n.config,e=n.children,a=n.api,u=(0,o.useRef)(!1),c=(0,o.useState)({initialized:!1,config:{},api:a}),p=c[0],l=c[1];return(0,o.useEffect)((function(){"object"==typeof t&&((0,r.initialize)({scalpLets:t,api:a}),l((function(n){return L(L({},n),{initialized:!0,config:t})})),u.current=!0),"function"==typeof t&&Promise.resolve(t()).then((function(n){l((function(t){return L(L({},t),{initialized:!0,config:n})})),(0,r.initialize)({scalpLets:n,api:a}),u.current=!0}))}),[t]),(0,o.useEffect)((function(){u.current&&l((function(n){return L(L({},n),{api:a})}))}),[a]),i().createElement(S.Provider,{value:p},e)}function j(n){var t=(0,o.useContext)(S);return"function"==typeof n?n(t):t}},18446:(n,t,e)=>{var r=e(90939);n.exports=function(n,t){return r(n,t)}}}]);