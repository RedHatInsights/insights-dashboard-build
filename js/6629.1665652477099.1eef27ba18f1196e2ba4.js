"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[6629],{81969:(e,n,t)=>{t.r(n),t.d(n,{ScalprumComponent:()=>x,ScalprumContext:()=>S,ScalprumProvider:()=>P,default:()=>P,useLoadModule:()=>I,useModule:()=>A,useScalprum:()=>R});var r=t(93264),o=t.n(r),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},a=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))},c=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(e,n,t){void 0===t&&(t=!1);var r=window.__scalprum__.factories[e];if(r)if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window.__scalprum__.scalprumOptions.cacheTimeout)delete window.__scalprum__.factories[e];else{var o=r.modules[n];if(n)return o}},s=function(e,n){window.__scalprum__.pendingInjections[e]=n},l=function(e){var n=e.appsConfig,t=e.api,r=e.options,o=i({cacheTimeout:120},r);window.__scalprum__=i({appsConfig:n,pendingInjections:{},factories:{},scalprumOptions:o},t)},f=function(e){return window.__scalprum__.appsConfig[e]},p=function(e,n,t){void 0===t&&(t=!1);var r=void 0,o=new Promise((function(o,i){(r=document.createElement("script")).src=n,r.id=e,t?r.onload=function(){o([e,r])}:s(e,(function(){return o([e,r])})),r.onerror=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];console.log(n),t?i([n,r]):s(e,(function(){return i([n,r])}))}}));return void 0!==r&&document.body.appendChild(r),o};function h(e,n,t,r){return a(this,void 0,void 0,(function(){var o,i;return c(this,(function(a){switch(a.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(e,{method:"GET",headers:o})];case 1:return[4,a.sent().json()];case 2:return i=a.sent(),[2,Promise.all(Object.entries(i).filter((function(e){var n=e[0];return!t||n===t})).flatMap(r||function(e){return e[1].entry||e}).map((function(e){return p(n,e,!0)})))]}}))}))}function d(e,n){return a(this,void 0,void 0,(function(){var r,o,a,u;return c(this,(function(c){switch(c.label){case 0:if(void 0===e||0===e.length)throw new Error("Scope can't be undefined or empty");if(void 0===n||0===n.length)throw new Error("Module can't be undefined or empty");return n.startsWith("./")||console.warn("Your module "+n+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return c.sent(),[4,(r=window[e]).init(t.S.default)];case 2:return c.sent(),[4,window[e].get(n)];case 3:return o=c.sent(),window.__scalprum__.factories[e]||(window.__scalprum__.factories[e]={}),a={init:r.init,modules:i(i({},window.__scalprum__.factories[e].modules),(u={},u[n]=o(),u)),expiration:new Date},window.__scalprum__.factories[e]=a,[2,o()]}}))}))}var v=t(18446),y=t.n(v),m=function(){return o().createElement("span",null,"Error while loading component!")};function w(e,n,t){var r=this;return void 0===t&&(t=m),function(){return o=r,i=void 0,c=function(){var r,o;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,d(e,n)];case 1:return r=i.sent(),[3,3];case 2:return o=i.sent(),console.error(o),r={default:t},[3,3];case 3:return[2,r]}}))},new((a=void 0)||(a=Promise))((function(e,n){function t(e){try{u(c.next(e))}catch(e){n(e)}}function r(e){try{u(c.throw(e))}catch(e){n(e)}}function u(n){var o;n.done?e(n.value):(o=n.value,o instanceof a?o:new a((function(e){e(o)}))).then(t,r)}u((c=c.apply(o,i||[])).next())}));var o,i,a,c}}var b,g=(b=function(e,n){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},b(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}b(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),_=function(){return _=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},_.apply(this,arguments)},E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},k=function(){return o().createElement("span",null,"Error while loading component!")},C=function(e){var n=e.fallback,t=void 0===n?"loading":n,i=e.appName,a=e.scope,c=e.module,s=e.ErrorComponent,l=e.processor,d=e.innerRef,v=e.skipCache,y=void 0!==v&&v,m=E(e,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),b=f(i),g=b.scriptLocation,k=b.manifestLocation,C=(0,r.useState)(void 0),O=C[0],x=C[1],S=u(a,c,y),j=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(S)try{j.current&&x((function(){return S.default}))}catch(e){j.current&&x((function(){return s}))}else g?p(i,g).then((function(){j.current&&x((function(){return o().lazy(w(a,c,s))}))})).catch((function(){j.current&&x((function(){return s}))})):k&&h(k,i,a,l).then((function(){j.current&&x((function(){return o().lazy(w(a,c,s))}))})).catch((function(){j.current&&x((function(){return s}))}));return function(){j.current=!1}}),[i,a,S,y]),o().createElement(r.Suspense,{fallback:t},O?o().createElement(O,_({ref:d},m)):t)},O=function(e){function n(n){var t=e.call(this,n)||this;return t.state={hasError:!1},t.selfRepairAttempt=!1,t}return g(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}},n.prototype.shouldComponentUpdate=function(e,n){return this.state.hasError!==n.hasError||!y()(e,this.props)||!y()(n,this.state)},n.prototype.componentDidCatch=function(e,n){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",e.message),this.setState({error:e,errorInfo:n})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},n.prototype.render=function(){var e=this.props,n=e.ErrorComponent,t=void 0===n?o().createElement(k,null):n,i=E(e,["ErrorComponent"]);return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,o().createElement(C,_({},i,{skipCache:!0,ErrorComponent:function(){return o().createElement(r.Fragment,null,t)}}))):this.state.hasError&&this.selfRepairAttempt?o().cloneElement(t,_({},this.state)):o().createElement(C,_({},i,{ErrorComponent:function(){return o().createElement(r.Fragment,null,t)}}))},n.defaultProps={ErrorComponent:o().createElement(k,null)},n}(o().Component),x=o().forwardRef((function(e,n){return o().createElement(O,_({},e,{innerRef:n}))})),S=(0,r.createContext)({initialized:!1,config:{},api:void 0}),j=function(){return j=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},j.apply(this,arguments)};function P(e){var n=e.config,t=e.children,i=e.api,a=(0,r.useRef)(!1),c=(0,r.useState)({initialized:!1,config:{},api:i}),u=c[0],s=c[1];return(0,r.useEffect)((function(){"object"==typeof n&&(l({appsConfig:n,api:i}),s((function(e){return j(j({},e),{initialized:!0,config:n})})),a.current=!0),"function"==typeof n&&Promise.resolve(n()).then((function(e){s((function(n){return j(j({},n),{initialized:!0,config:e})})),l({appsConfig:e,api:i}),a.current=!0}))}),[n]),(0,r.useEffect)((function(){a.current&&s((function(e){return j(j({},e),{api:i})}))}),[i]),o().createElement(S.Provider,{value:u},t)}function R(e){var n=(0,r.useContext)(S);return"function"==typeof e?e(n):n}var T=function(){return T=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},T.apply(this,arguments)};function A(e,n,t,o){var i=this;void 0===o&&(o={});var a=T({skipCache:!1},o),c=(0,r.useState)(t),s=c[0],l=c[1],f=(0,r.useCallback)((function(){return t=i,r=void 0,c=function(){var t,r;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(o){switch(o.label){case 0:if(t=u(e,n,a.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,d(e,n)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+n+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=t,o.label=6;case 6:return l((function(){return r})),[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{u(c.next(e))}catch(e){n(e)}}function a(e){try{u(c.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}u((c=c.apply(t,r||[])).next())}));var t,r,o,c}),[e,n]);return(0,r.useEffect)((function(){f()}),[e,n]),s}var z=function(){return z=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},z.apply(this,arguments)},M=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))},G=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function I(e,n,t){var o=this,i=e.appName,a=e.scope,c=e.module,s=e.processor;void 0===t&&(t={});var l=z({skipCache:!1},t),v=f(i||a),y=v.scriptLocation,m=v.manifestLocation,w=(0,r.useState)(n),b=w[0],g=w[1],_=(0,r.useState)(),E=_[0],k=_[1],C=u(a,c,l.skipCache),O=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(O.current)if(C)try{d(a,c).then((function(e){g((function(){return e}))}))}catch(e){k((function(){return e}))}else y?p(i||a,y).then((function(){return M(o,void 0,void 0,(function(){var e;return G(this,(function(n){switch(n.label){case 0:return[4,d(a,c)];case 1:return e=n.sent(),g((function(){return e})),[2]}}))}))})).catch((function(e){k((function(){return e}))})):m&&h(m,i||a,a,s).then((function(){return M(o,void 0,void 0,(function(){var e;return G(this,(function(n){switch(n.label){case 0:return[4,d(a,c)];case 1:return e=n.sent(),g((function(){return e})),[2]}}))}))})).catch((function(e){k((function(){return e}))}));return function(){O.current=!1}}),[i,a,C,l.skipCache]),[b,E]}}}]);