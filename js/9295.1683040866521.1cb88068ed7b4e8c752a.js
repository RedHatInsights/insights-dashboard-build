"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[9295],{37619:(e,t,r)=>{r.d(t,{$:()=>s,S:()=>o});var n=r(70655),a=r(93264);r(66822);const i={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"};var o,l=r(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o||(o={}));const s=e=>{var{className:t="",size:r="xl","aria-valuetext":o="Loading...",isSVG:s=!1,diameter:c,isInline:u=!1,"aria-label":m,"aria-labelledBy":f}=e,p=(0,n._T)(e,["className","size","aria-valuetext","isSVG","diameter","isInline","aria-label","aria-labelledBy"]);const d=s?"svg":"span";return a.createElement(d,Object.assign({className:(0,l.i)(i.spinner,u?i.modifiers.inline:i.modifiers[r],t),role:"progressbar","aria-valuetext":o},s&&{viewBox:"0 0 100 100"},c&&{style:{"--pf-c-spinner--diameter":c}},m&&{"aria-label":m},f&&{"aria-labelledBy":f},!m&&!f&&{"aria-label":"Contents"},p),s?a.createElement("circle",{className:i.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):a.createElement(a.Fragment,null,a.createElement("span",{className:(0,l.i)(i.spinnerClipper)}),a.createElement("span",{className:(0,l.i)(i.spinnerLeadBall)}),a.createElement("span",{className:(0,l.i)(i.spinnerTailBall)})))};s.displayName="Spinner"},38779:(e,t,r)=>{r.d(t,{D:()=>u,H:()=>l});var n=r(70655),a=r(93264),i=r(38296);r(314);const o={modifiers:{"4xl":"pf-m-4xl","3xl":"pf-m-3xl","2xl":"pf-m-2xl",xl:"pf-m-xl",lg:"pf-m-lg",md:"pf-m-md",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"};var l,s,c=r(62472);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(l||(l={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(s||(s={}));const u=e=>{var{className:t="",children:r="",headingLevel:l,size:m=s[l],ouiaId:f,ouiaSafe:p=!0}=e,d=(0,n._T)(e,["className","children","headingLevel","size","ouiaId","ouiaSafe"]);const g=(0,c.S$)(u.displayName,f,p);return a.createElement(l,Object.assign({},g,d,{className:(0,i.i)(o.title,m&&o.modifiers[m],t)}),r)};u.displayName="Title"},97846:(e,t,r)=>{r.d(t,{Z:()=>te});var n=r(87462),a=r(4942),i=r(45987),o=r(93264),l=r.n(o),s=r(45697),c=r.n(s),u=r(70655),m=r(74806),f=r(680),p=r(25687),d=r(16284),g=r(88222),v=r(83695);function y(e,t){return Object.keys(e).reduce((function(r,n){return r[n]=(0,u.pi)({timeZone:t},e[n]),r}),{})}function h(e,t){return Object.keys((0,u.pi)((0,u.pi)({},e),t)).reduce((function(r,n){return r[n]=(0,u.pi)((0,u.pi)({},e[n]||{}),t[n]||{}),r}),{})}function b(e,t){if(!t)return e;var r=d.C.formats;return(0,u.pi)((0,u.pi)((0,u.pi)({},r),e),{date:h(y(r.date,t),y(e.date||{},t)),time:h(y(r.time,t),y(e.time||{},t))})}function R(e,t,r,n,a){var i=e.locale,o=e.formats,l=e.messages,s=e.defaultLocale,c=e.defaultFormats,m=e.onError,f=e.timeZone,d=e.defaultRichTextElements;void 0===r&&(r={id:""});var y=r.id,h=r.defaultMessage;(0,p.kG)(!!y,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var R=String(y),w=l&&Object.prototype.hasOwnProperty.call(l,R)&&l[R];if(Array.isArray(w)&&1===w.length&&w[0].type===v.wD.literal)return w[0].value;if(!n&&w&&"string"==typeof w&&!d)return w.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=(0,u.pi)((0,u.pi)({},d),n||{}),o=b(o,f),c=b(c,f),!w){if((!h||i&&i.toLowerCase()!==s.toLowerCase())&&m(new g.$6(r,i)),h)try{return t.getMessageFormat(h,s,c,a).format(n)}catch(e){return m(new g.X9('Error formatting default message for: "'+R+'", rendering default message verbatim',i,r,e)),"string"==typeof h?h:R}return R}try{return t.getMessageFormat(w,i,o,(0,u.pi)({formatters:t},a||{})).format(n)}catch(e){m(new g.X9('Error formatting message: "'+R+'", using '+(h?"default message":"id")+" as fallback.",i,r,e))}if(h)try{return t.getMessageFormat(h,s,c,a).format(n)}catch(e){m(new g.X9('Error formatting the default message for: "'+R+'", rendering message verbatim',i,r,e))}return"string"==typeof w?w:"string"==typeof h?h:R}var w=r(82644),E=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function O(e,t,r){var n=e.locale,a=e.formats,i=e.onError;void 0===r&&(r={});var o=r.format,l=o&&(0,w.TB)(a,"number",o,i)||{};return t(n,(0,w.L6)(r,E,l))}function T(e,t,r,n){void 0===n&&(n={});try{return O(e,t,n).format(r)}catch(t){e.onError(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting number.",t))}return String(r)}function S(e,t,r,n){void 0===n&&(n={});try{return O(e,t,n).formatToParts(r)}catch(t){e.onError(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting number.",t))}return[]}var j=r(11050),x=["numeric","style"];function D(e,t,r,n,a){void 0===a&&(a={}),n||(n="second"),Intl.RelativeTimeFormat||e.onError(new j.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',j.jK.MISSING_INTL_API));try{return function(e,t,r){var n=e.locale,a=e.formats,i=e.onError;void 0===r&&(r={});var o=r.format,l=!!o&&(0,w.TB)(a,"relative",o,i)||{};return t(n,(0,w.L6)(r,x,l))}(e,t,a).format(r,n)}catch(t){e.onError(new g.X9("Error formatting relative time.",t))}return String(r)}var F=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem"];function I(e,t,r,n){var a=e.locale,i=e.formats,o=e.onError,l=e.timeZone;void 0===n&&(n={});var s=n.format,c=(0,u.pi)((0,u.pi)({},l&&{timeZone:l}),s&&(0,w.TB)(i,t,s,o)),m=(0,w.L6)(n,F,c);return"time"!==t||m.hour||m.minute||m.second||m.timeStyle||m.dateStyle||(m=(0,u.pi)((0,u.pi)({},m),{hour:"numeric",minute:"numeric"})),r(a,m)}function P(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],i=r[1],o=void 0===i?{}:i,l="string"==typeof a?new Date(a||0):a;try{return I(e,"date",t,o).format(l)}catch(t){e.onError(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting date.",t))}return String(l)}function _(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],i=r[1],o=void 0===i?{}:i,l="string"==typeof a?new Date(a||0):a;try{return I(e,"time",t,o).format(l)}catch(t){e.onError(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting time.",t))}return String(l)}function N(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],i=r[1],o=r[2],l=void 0===o?{}:o,s=e.timeZone,c=e.locale,u=e.onError,m=(0,w.L6)(l,F,s?{timeZone:s}:{});try{return t(c,m).formatRange(a,i)}catch(e){u(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting date time range.",e))}return String(a)}function L(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],i=r[1],o=void 0===i?{}:i,l="string"==typeof a?new Date(a||0):a;try{return I(e,"date",t,o).formatToParts(l)}catch(t){e.onError(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting date.",t))}return[]}function M(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],i=r[1],o=void 0===i?{}:i,l="string"==typeof a?new Date(a||0):a;try{return I(e,"time",t,o).formatToParts(l)}catch(t){e.onError(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting time.",t))}return[]}var Z=["localeMatcher","type"];function A(e,t,r,n){var a=e.locale,i=e.onError;void 0===n&&(n={}),Intl.PluralRules||i(new j.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',j.jK.MISSING_INTL_API));var o=(0,w.L6)(n,Z);try{return t(a,o).select(r)}catch(e){i(new g.X9("Error formatting plural.",e))}return"other"}var C=["localeMatcher","type","style"],k=Date.now();function B(e,t,r,n){void 0===n&&(n={});var a=G(e,t,r,n).reduce((function(e,t){var r=t.value;return"string"!=typeof r?e.push(r):"string"==typeof e[e.length-1]?e[e.length-1]+=r:e.push(r),e}),[]);return 1===a.length?a[0]:a}function G(e,t,r,n){var a=e.locale,i=e.onError;void 0===n&&(n={}),Intl.ListFormat||i(new j.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',j.jK.MISSING_INTL_API));var o=(0,w.L6)(n,C);try{var l={},s=r.map((function(e,t){if("object"==typeof e){var r=function(e){return k+"_"+e+"_"+k}(t);return l[r]=e,r}return String(e)}));return t(a,o).formatToParts(s).map((function(e){return"literal"===e.type?e:(0,u.pi)((0,u.pi)({},e),{value:l[e.value]||e.value})}))}catch(e){i(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting list.",e))}return r}var z=["localeMatcher","style","type","fallback"];function U(e,t,r,n){var a=e.locale,i=e.onError;Intl.DisplayNames||i(new j.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',j.jK.MISSING_INTL_API));var o=(0,w.L6)(n,z);try{return t(a,o).of(r)}catch(e){i(new g.Rw(g.bc.FORMAT_ERROR,"Error formatting display name.",e))}}var X=r(61092);function $(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function K(e){return e?Object.keys(e).reduce((function(t,r){var n=e[r];return t[r]=(0,X.Gt)(n)?(0,f.dt)(n):n,t}),{}):e}var q=function(e,t,r,n){for(var a=[],i=4;i<arguments.length;i++)a[i-4]=arguments[i];var l=K(n),s=R.apply(void 0,(0,u.ev)([e,t,r,l],a));return Array.isArray(s)?o.Children.toArray(s):s},V=function(e,t){var r=e.defaultRichTextElements,n=(0,u._T)(e,["defaultRichTextElements"]),a=K(r),i=function(e,t){var r=(0,w.ax)(t),n=(0,u.pi)((0,u.pi)({},w.Z0),e),a=n.locale,i=n.defaultLocale,o=n.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new g.gb('Missing locale data for locale: "'+a+'" in Intl.NumberFormat. Using default locale: "'+i+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new g.gb('Missing locale data for locale: "'+a+'" in Intl.DateTimeFormat. Using default locale: "'+i+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(o&&o(new g.OV('"locale" was not configured, using "'+i+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),n.locale=n.defaultLocale||"en"),function(e){var t;e.defaultRichTextElements&&"string"==typeof((t=e.messages||{})?t[Object.keys(t)[0]]:void 0)&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}(n),(0,u.pi)((0,u.pi)({},n),{formatters:r,formatNumber:T.bind(null,n,r.getNumberFormat),formatNumberToParts:S.bind(null,n,r.getNumberFormat),formatRelativeTime:D.bind(null,n,r.getRelativeTimeFormat),formatDate:P.bind(null,n,r.getDateTimeFormat),formatDateToParts:L.bind(null,n,r.getDateTimeFormat),formatTime:_.bind(null,n,r.getDateTimeFormat),formatDateTimeRange:N.bind(null,n,r.getDateTimeFormat),formatTimeToParts:M.bind(null,n,r.getDateTimeFormat),formatPlural:A.bind(null,n,r.getPluralRules),formatMessage:R.bind(null,n,r),formatList:B.bind(null,n,r.getListFormat),formatListToParts:G.bind(null,n,r.getListFormat),formatDisplayName:U.bind(null,n,r.getDisplayNames)})}((0,u.pi)((0,u.pi)((0,u.pi)({},f.Z0),n),{defaultRichTextElements:a}),t);return(0,u.pi)((0,u.pi)({},i),{formatMessage:q.bind(null,{locale:i.locale,timeZone:i.timeZone,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:a},i.formatters)})};const H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cache=(0,w.Sn)(),t.state={cache:t.cache,intl:V($(t.props),t.cache),prevConfig:$(t.props)},t}return(0,u.ZT)(t,e),t.getDerivedStateFromProps=function(e,t){var r=t.prevConfig,n=t.cache,a=$(e);return(0,f.wU)(r,a)?null:{intl:V(a,n),prevConfig:a}},t.prototype.render=function(){return(0,f.lq)(this.state.intl),o.createElement(m.zt,{value:this.state.intl},this.props.children)},t.displayName="IntlProvider",t.defaultProps=f.Z0,t}(o.PureComponent);var J=r(26128);const Y=JSON.parse('{"en":{"default.cancel":"Cancel","default.save":"Save","default.delete":"Delete","default.remove":"Remove"},"cs":{"default.cancel":"Zrušit","default.save":"Save","default.delete":"Smazat","default.remove":"Odstranit"}}');function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(e){var t=e.locale,r=e.messages,a=(0,i.Z)(e,["locale","messages"]),o=t||localStorage.getItem(J.k2)||navigator.language.split(/[-_]/)[0]||"en";return l().createElement(H,(0,n.Z)({locale:o,messages:W(W({},Y[o]),r&&r.hasOwnProperty(o)?r[o]:r)},a))};ee.propTypes={locale:c().string,messages:c().object},ee.defaultProps={locale:null};const te=ee},13976:(e,t,r)=>{r(93264),r(97846)},4436:(e,t,r)=>{(0,r(50049).vU)({cancel:{id:"default.cancel",description:"Default cancel string",defaultMessage:"Cancel"},save:{id:"default.save",description:"Default save string",defaultMessage:"Save"},delete:{id:"default.delete",description:"Default delete string",defaultMessage:"Delete"},remove:{id:"default.remove",description:"Default remove string",defaultMessage:"Remove"}})},55140:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(54025),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};const i=function(e){var t,r=(0,n.useScalprum)(),i=(null===(t=r.api)||void 0===t?void 0:t.chrome)||{};return i=a(a({},i),{initialized:r.initialized}),"function"==typeof e?e(i):i}},4942:(e,t,r)=>{function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:()=>n})},45987:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(63366);function a(e,t){if(null==e)return{};var r,a,i=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},98152:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=../sourcemaps/9295.7bb11c299021c4e516a457e0ecae65db.js.map