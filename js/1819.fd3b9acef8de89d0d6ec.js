/*! For license information please see 1819.fd3b9acef8de89d0d6ec.js.LICENSE.txt */
(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[1819],{20940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(32747),a=n.n(r),o=n(94184),l=n.n(o),i=n(45697),c=n.n(i),s=function(e){var t=e.iconListStyle,n=e.className,r=e.children,o=l()(n,"insd-c-icon-list");return a().createElement("ul",{className:o,style:t},r)};const u=s;s.propTypes={children:c().any.isRequired,iconListStyle:c().string,className:c().string}},31486:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(32747),a=n.n(r),o=n(94184),l=n.n(o),i=n(45697),c=n.n(i),s=function(e){var t=e.className,n=e.iconListItemStyle,r=e.children,o=l()(t,"insd-c-icon-list__item");return a().createElement("li",{className:o,style:n},r)};const u=s;s.propTypes={className:c().string,iconListItemStyle:c().string,children:c().any.isRequired}},3203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(4942),a=n(26318),o=n(32747),l=n.n(o),i=n(94184),c=n.n(i),s=n(45697),u=n.n(s),p=function(e){var t=e.className,n=e.hasGraphic,o=e.graphicRight,i=e.dark1000,s=e.fullBleed,u=e.style,p=e.children,m=c()(t,"insd-c-marketing-banner",(0,r.Z)({},"insd-m-with-graphic",n),(0,r.Z)({},"insd-m-graphic-right",o),(0,r.Z)({},"insd-m-dark-1000 pf-m-dark-1000",i),(0,r.Z)({},"insd-m-full-bleed",s));return l().createElement(a.PageSection,{className:m,style:u,isWidthLimited:!0},p)};const m=p;p.propTypes={children:u().any.isRequired,className:u().string,style:u().any,graphicRight:u().bool,hasGraphic:u().bool,dark1000:u().bool,fullBleed:u().bool,isWidthLimited:u().bool}},66400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(32045),a=n(32203),o=n(70),l=n(38779),i=n(62394),c=n(45697),s=n.n(c),u=n(26318),p=n(32747),m=n.n(p),h=n(68774),f=n(68340),d=n(11306),g=n(86896),v=n(62012),y=function(e){var t=e.app,n=(0,g.Z)();return m().createElement(u.GridItem,{md:4},m().createElement(h.D,null,m().createElement(f.x,{component:f.q.h3},t.title),m().createElement(f.x,null,n.formatMessage(t.description)),m().createElement(l.D,{headingLevel:"h4"},m().createElement(v.Link,{to:t.link,className:"pf-v5-c-button pf-m-link pf-m-inline pf-m-display-lg"},"Get started ",m().createElement(d.ZP,null)))))};y.propTypes={app:s().object};const E=y;var b=n(73305),w=function(e){var t=e.appName,n=b.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].otherApps;return m().createElement(r.NP,{isWidthLimited:!0},m().createElement(a.Z,null,m().createElement(o.l,null,m().createElement(l.D,{headingLevel:"h3"},"Other Applications")),m().createElement(i.e,null,m().createElement(u.Grid,{hasGutter:!0,style:{marginTop:"16px",marginBottom:"16px"}},n.map((function(e){return m().createElement(E,{key:e.title,app:e})}))))))};w.propTypes={appName:s().string};const k=w},29673:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(71002),a=n(15861),o=n(70885),l=n(45987),i=n(32747),c=n.n(i),s=n(66400),u=n(95647),p=n(80188),m=n(45697),h=n.n(m),f=n(26128),d=n(33366),g=["children"];function v(){v=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function p(e,t,n,r){var a=t&&t.prototype instanceof E?t:E,l=Object.create(a.prototype),i=new S(r||[]);return o(l,"_invoke",{value:B(e,n,i)}),l}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var h="suspendedStart",f="suspendedYield",d="executing",g="completed",y={};function E(){}function b(){}function w(){}var k={};u(k,i,(function(){return this}));var T=Object.getPrototypeOf,x=T&&T(T(P([])));x&&x!==n&&a.call(x,i)&&(k=x);var _=w.prototype=E.prototype=Object.create(k);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(o,l,i,c){var s=m(e[o],e,l);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==(0,r.Z)(p)&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var l;o(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return l=l?l.then(a,a):a()}})}function B(t,n,r){var a=h;return function(o,l){if(a===d)throw new Error("Generator is already running");if(a===g){if("throw"===o)throw l;return{value:e,done:!0}}for(r.method=o,r.arg=l;;){var i=r.delegate;if(i){var c=Z(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===h)throw a=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=d;var s=m(t,n,r);if("normal"===s.type){if(a=r.done?g:f,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a=g,r.method="throw",r.arg=s.arg)}}}function Z(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,Z(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=m(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var l=o.arg;return l?l.done?(n[t.resultName]=l.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):l:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,l=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return l.next=l}}throw new TypeError((0,r.Z)(t)+" is not iterable")}return b.prototype=w,o(_,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=u(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},L(N.prototype),u(N.prototype,c,(function(){return this})),t.AsyncIterator=N,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var l=new N(p(e,n,r,a),o);return t.isGeneratorFunction(n)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},L(_),u(_,s,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],i=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),s=a.call(l,"finallyLoc");if(c&&s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}var y=function(e){var t=e.children,n=(0,l.Z)(e,g);return t?c().createElement(E,n,t):c().createElement(b,n)},E=function(e){var t=e.app,n=e.customInstructions,r=e.customButton,l=e.customText,m=e.customTitle,h=e.appId,g=e.children,y=e.customFetchResults,E=(0,d.Vk)(),b=(0,i.useState)(!0),w=(0,o.Z)(b,2),k=w[0],T=w[1],x=(0,i.useRef)(!1);return(0,i.useEffect)((function(){x.current=!0;var e=function(){var e=(0,a.Z)(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{void 0!==y?x.current&&T(y):E.get("".concat("/api/inventory/v1/hosts?page=1&per_page=1")).then((function(e){var t=e.data;x.current&&T(t.total>0)}))}catch(e){console.log(e)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),function(){x.current=!1}}),[E,y,k]),k?g:c().createElement(f.Pj,null,c().createElement(c().Fragment,null,c().createElement(u.default,{appName:t,customInstructions:n,customButton:r,customText:l,customTitle:m,appId:h}),c().createElement(s.default,{appName:t}),c().createElement(p.default,{appName:t})))},b=function(e){var t=e.app,n=e.customInstructions,r=e.customButton,a=e.customText,o=e.customTitle,l=e.appId;return c().createElement(f.Pj,null,c().createElement(c().Fragment,null,c().createElement(u.default,{appName:t,customInstructions:n,customButton:r,customText:a,customTitle:o,appId:l}),c().createElement(s.default,{appName:t}),c().createElement(p.default,{appName:t})))};const w=y;b.propTypes={app:h().string,customInstructions:h().any,customButton:h().any,customText:h().string,customTitle:h().string,appId:h().string,children:h().any,fetchSystem:h().bool},E.propTypes={app:h().string,customInstructions:h().any,customButton:h().any,customText:h().string,customTitle:h().string,appId:h().string,children:h().any,customFetchResults:h().bool},y.propTypes={children:h().any,app:h().oneOf(["Advisor","Compliance","Drift","Insights","Content_management","Policies","Malware","Resource_optimization","Vulnerability","Images","Remediations","Inventory","Tasks"])}},95647:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var r=n(70885),a=n(38779),o=n(47173),l=n(28191),i=n(92298),c=n(50693),s=n(16475),u=n(32747),p=n.n(u),m=n(20940),h=n(31486),f=n(3203),d=n(30893),g=n(86896),v=n(55140),y=n(45697),E=n.n(y),b=n(26318),w=function(e){return e.link?p().createElement(p().Fragment,null,p().createElement("a",{target:"_blank",href:"".concat(e.link),rel:"noreferrer",className:"pf-v5-u-pl-lg"},e.instructions)):e.numberedLink?p().createElement("div",null,e.step,p().createElement("a",{target:"_blank",href:"".concat(e.numberedLink),rel:"noreferrer"},e.instructions)):e.plainText?p().createElement(p().Fragment,null,p().createElement("p",{className:e.plainText.length<4?"pf-v5-u-pl-lg":""},e.plainText)):e.linkWithinText?p().createElement(p().Fragment,null,p().createElement("p",{className:"pf-v5-u-pl-md"},e.partOne," ",p().createElement("a",{href:e.linkWithinText},e.anchorText)," ",e.partTwo)):e.singleClipboardCommand?p().createElement(p().Fragment,null,p().createElement(b.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",isReadOnly:!0,className:"pf-v5-u-p-sm pf-v5-u-pt-xs pf-v5-u-pl-md"},e.singleClipboardCommand)):p().createElement(p().Fragment,null,p().createElement("p",{className:(e.noPadding?"pf-v5-u-pl-0":"pf-v5-u-pl-md")+" pf-v5-u-mb-0 "},e.instructions),p().createElement(b.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",isReadOnly:!0,className:"pf-v5-u-p-sm pf-v5-u-pt-xs pf-v5-u-pl-md"},e.command))};const k=w;w.propTypes={item:E().object};var T=n(73305),x=function(e){var t=e.appName,n=e.description,y=void 0===n?T.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].header.description:n,E=e.commands,b=void 0===E?T.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].header.commands:E,w=e.bulletPoints,x=void 0===w?T.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].header.bulletPoints:w,_=e.customInstructions,L=e.customButton,N=e.customText,B=e.customTitle,Z=e.appId,I=(0,g.Z)(),C=(0,v.Z)().hideGlobalFilter;(0,u.useEffect)((function(){return null==C||C(),function(){null==C||C(!1)}}),[C]);var S=(0,u.useState)(!1),P=(0,r.Z)(S,2),O=P[0],R=P[1],j=function(){return R(!O)};return p().createElement("div",{className:"insd-c-marketing-page warning"},p().createElement(f.Z,{dark1000:!0,style:{"--ins-c-marketing-banner--graphic--width-on-md":"200px","--ins-c-marketing-banner--graphic--width-on-xl":"400px"}},p().createElement(c.r,{lg:6,hasGutter:!0,className:"pf-v5-u-pt-xl pf-v5-u-pb-xl"},p().createElement(s.P,{className:"pf-v5-u-pl-lg pf-v5-u-pr-lg"},p().createElement(l.k,{direction:{default:"column"}},p().createElement(i.B,null,p().createElement(a.D,{headingLevel:"h1",size:"4xl"},t.replace("_"," "))),p().createElement(i.B,{spacer:{default:"spacerXl"}},p().createElement(a.D,{headingLevel:"h4",style:{maxWidth:"600px"}},y)),p().createElement(i.B,null,p().createElement(m.Z,{className:"pf-v5-u-pl-sm "},x.map((function(e){return p().createElement(h.Z,{key:e},p().createElement(a.D,{headingLevel:"h4"},e))})))))),p().createElement(s.P,{style:{backgroundColor:"#fff"},className:O?"":"bannerBefore"},O?p().createElement(l.k,{className:"pf-v5-u-p-lg",direction:{default:"column"},style:{color:"#151515"}},p().createElement("a",{className:"pf-v5-u-pb-sm",onClick:j},"Go Back"),b.map((function(e){return k(e)}))):!O&&_?_(R):p().createElement(l.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"},alignSelf:{default:"alignSelfCenter"},className:"bannerRight"},p().createElement(i.B,{className:"pf-v5-u-pt-lg"},p().createElement(a.D,{headingLevel:"h1",size:"2xl",style:{color:"#151515"},ouiaId:"ZeroStateCustomAppTitle"},B||"Start using ".concat(t.replace("_"," ")," now"))),p().createElement(i.B,null,p().createElement("div",{style:{maxWidth:"600px",color:"#151515",textAlign:"center"}},p().createElement("p",null,N||I.formatMessage(d.Z.getStartedInsights)))),p().createElement(i.B,null,L||p().createElement(o.zx,{id:Z,onClick:j,className:"pf-v5-u-p-md pf-v5-u-font-size-md"}," Register your systems")),p().createElement(i.B,null,p().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/products/trials?products=rhel"},I.formatMessage(d.Z.notMember))))))))};const _=x;x.propTypes={appName:E().string,description:E().object,commands:E().array,bulletPoints:E().array,customInstructions:E().any,customButton:E().any,customText:E().string,customTitle:E().string,appId:E().string}},80188:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(26318),a=n(28191),o=n(92298),l=n(50693),i=n(16475),c=n(32747),s=n.n(c),u=n(73305),p=n(45697),m=n.n(p),h=n(55140),f=function(e){var t=e.appName,n=e.documentation,c=void 0===n?u.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].documentation:n,p=(0,h.Z)();return s().createElement(r.PageSection,{className:"footer",isWidthLimited:!0},s().createElement(r.Card,null,s().createElement(l.r,{lg:4,hasGutter:!0,className:"pf-v5-u-p-xl"},s().createElement(i.P,null,s().createElement(a.k,{direction:{default:"column"}},s().createElement(o.B,null,s().createElement(r.Title,{headingLevel:"h3",size:"lg"},t.replace("_"," ")," documentation")),c.map((function(e){return s().createElement(o.B,{key:e.title},s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:e.link},e.title))})))),s().createElement(i.P,null,s().createElement(a.k,{direction:{default:"column"},spacer:{default:"spacerSm"}},s().createElement(o.B,null,s().createElement(r.Title,{headingLevel:"h3",size:"lg"},"Learn about Insights")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},"Product page")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://access.redhat.com/documentation/en-us/red_hat_insights/2023"},"Product documentation")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights/data-application-security"},"Data privacy and controls in Insights")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://console.redhat.com/docs/api"},"APIs")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/blog/channel/red-hat-insights"},"Blog")))),s().createElement(i.P,null,s().createElement(a.k,{direction:{default:"column"}},s().createElement(o.B,null,s().createElement(r.Title,{headingLevel:"h3",size:"lg"},"Other bundles")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:" ".concat(p.isBeta()?"/preview":"","/openshift")},"OpenShift")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(p.isBeta()?"/preview":"","/application-services/overview")},"Application and Data Services")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(p.isBeta()?"/preview":"","/edge/")},"Edge Managment")),s().createElement(o.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(p.isBeta()?"/preview":"","/ansible/ansible-dashboard")},"Ansible Automation Platform")))))))};const d=f;f.propTypes={appName:m().string,documentation:m().array}},11452:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},92084:()=>{},66822:()=>{},314:()=>{},38299:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1819.e600b55e5b8f1a5b0dd028bc81dd95ea.js.map