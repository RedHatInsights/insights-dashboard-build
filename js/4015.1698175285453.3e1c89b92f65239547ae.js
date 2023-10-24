/*! For license information please see 4015.1698175285453.3e1c89b92f65239547ae.js.LICENSE.txt */
(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[4015],{95957:(e,n,t)=>{"use strict";function a(e,n){var t=n&&n.cache?n.cache:p,a=n&&n.serializer?n.serializer:c;return(n&&n.strategy?n.strategy:s)(e,{cache:t,serializer:a})}function r(e,n,t,a){var r,i=null==(r=a)||"number"==typeof r||"boolean"==typeof r?a:t(a),l=n.get(i);return void 0===l&&(l=e.call(this,a),n.set(i,l)),l}function i(e,n,t){var a=Array.prototype.slice.call(arguments,3),r=t(a),i=n.get(r);return void 0===i&&(i=e.apply(this,a),n.set(r,i)),i}function l(e,n,t,a,r){return t.bind(n,e,a,r)}function s(e,n){return l(e,this,1===e.length?r:i,n.cache.create(),n.serializer)}t.d(n,{A:()=>m,Z:()=>a});var c=function(){return JSON.stringify(arguments)};function o(){this.cache=Object.create(null)}o.prototype.get=function(e){return this.cache[e]},o.prototype.set=function(e,n){this.cache[e]=n};var p={create:function(){return new o}},m={variadic:function(e,n){return l(e,this,i,n.cache.create(),n.serializer)},monadic:function(e,n){return l(e,this,r,n.cache.create(),n.serializer)}}},68425:(e,n,t)=>{"use strict";t.d(n,{C:()=>s});var a=t(70655),r=t(93264),i=t(38296),l=t(12971);const s=e=>{var{isRead:n=!1,className:t="",children:s="",screenReaderText:c}=e,o=(0,a._T)(e,["isRead","className","children","screenReaderText"]);return r.createElement("span",Object.assign({},o,{className:(0,i.i)(l.Z.badge,n?l.Z.modifiers.read:l.Z.modifiers.unread,t)}),s,c&&r.createElement("span",{className:"pf-screen-reader"},c))};s.displayName="Badge"},47173:(e,n,t)=>{"use strict";t.d(n,{L$:()=>r,Wu:()=>a,zx:()=>d});var a,r,i=t(70655),l=t(93264),s=t(80480),c=t(38296),o=t(37619),p=t(62472),m=t(68425);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(a||(a={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(r||(r={}));const u=e=>{var{children:n=null,className:t="",component:u="button",isActive:f=!1,isBlock:g=!1,isDisabled:b=!1,isAriaDisabled:h=!1,isLoading:y=null,isDanger:v=!1,spinnerAriaValueText:E,spinnerAriaLabelledBy:x,spinnerAriaLabel:N,isSmall:Z=!1,isLarge:k=!1,inoperableEvents:T=["onClick","onKeyPress"],isInline:S=!1,type:_=r.button,variant:C=a.primary,iconPosition:w="left","aria-label":I=null,icon:L=null,ouiaId:B,ouiaSafe:A=!0,tabIndex:O=null,innerRef:$,countOptions:R}=e,P=(0,i._T)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","isSmall","isLarge","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const j=(0,p.S$)(d.displayName,B,A,C),z=u,D="button"===z,F=S&&"span"===z,G=T.reduce(((e,n)=>Object.assign(Object.assign({},e),{[n]:e=>{e.preventDefault()}})),{});return l.createElement(z,Object.assign({},P,h?G:null,{"aria-disabled":b||h,"aria-label":I,className:(0,c.i)(s.Z.button,s.Z.modifiers[C],g&&s.Z.modifiers.block,b&&s.Z.modifiers.disabled,h&&s.Z.modifiers.ariaDisabled,f&&s.Z.modifiers.active,S&&C===a.link&&s.Z.modifiers.inline,v&&(C===a.secondary||C===a.link)&&s.Z.modifiers.danger,null!==y&&null!==n&&s.Z.modifiers.progress,y&&s.Z.modifiers.inProgress,Z&&s.Z.modifiers.small,k&&s.Z.modifiers.displayLg,t),disabled:D?b:null,tabIndex:null!==O?O:b?D?null:-1:h?null:F?0:void 0,type:D||F?_:null,role:F?"button":null,ref:$},j),y&&l.createElement("span",{className:(0,c.i)(s.Z.buttonProgress)},l.createElement(o.$,{size:o.S.md,isInline:S,"aria-valuetext":E,"aria-label":N,"aria-labelledby":x})),C===a.plain&&null===n&&L?L:null,C!==a.plain&&L&&"left"===w&&l.createElement("span",{className:(0,c.i)(s.Z.buttonIcon,s.Z.modifiers.start)},L),n,C!==a.plain&&L&&"right"===w&&l.createElement("span",{className:(0,c.i)(s.Z.buttonIcon,s.Z.modifiers.end)},L),R&&l.createElement("span",{className:(0,c.i)(s.Z.buttonCount,R.className)},l.createElement(m.C,{isRead:R.isRead},R.count)))},d=l.forwardRef(((e,n)=>l.createElement(u,Object.assign({innerRef:n},e))));d.displayName="Button"},37619:(e,n,t)=>{"use strict";t.d(n,{$:()=>c,S:()=>l});var a=t(70655),r=t(93264);t(66822);const i={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"};var l,s=t(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(l||(l={}));const c=e=>{var{className:n="",size:t="xl","aria-valuetext":l="Loading...",isSVG:c=!1,diameter:o,isInline:p=!1,"aria-label":m,"aria-labelledBy":u}=e,d=(0,a._T)(e,["className","size","aria-valuetext","isSVG","diameter","isInline","aria-label","aria-labelledBy"]);const f=c?"svg":"span";return r.createElement(f,Object.assign({className:(0,s.i)(i.spinner,p?i.modifiers.inline:i.modifiers[t],n),role:"progressbar","aria-valuetext":l},c&&{viewBox:"0 0 100 100"},o&&{style:{"--pf-c-spinner--diameter":o}},m&&{"aria-label":m},u&&{"aria-labelledBy":u},!m&&!u&&{"aria-label":"Contents"},d),c?r.createElement("circle",{className:i.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):r.createElement(r.Fragment,null,r.createElement("span",{className:(0,s.i)(i.spinnerClipper)}),r.createElement("span",{className:(0,s.i)(i.spinnerLeadBall)}),r.createElement("span",{className:(0,s.i)(i.spinnerTailBall)})))};c.displayName="Spinner"},38779:(e,n,t)=>{"use strict";t.d(n,{D:()=>p,H:()=>s});var a=t(70655),r=t(93264),i=t(38296);t(314);const l={modifiers:{"4xl":"pf-m-4xl","3xl":"pf-m-3xl","2xl":"pf-m-2xl",xl:"pf-m-xl",lg:"pf-m-lg",md:"pf-m-md",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"};var s,c,o=t(62472);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(s||(s={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(c||(c={}));const p=e=>{var{className:n="",children:t="",headingLevel:s,size:m=c[s],ouiaId:u,ouiaSafe:d=!0}=e,f=(0,a._T)(e,["className","children","headingLevel","size","ouiaId","ouiaSafe"]);const g=(0,o.S$)(p.displayName,u,d);return r.createElement(s,Object.assign({},g,f,{className:(0,i.i)(l.title,m&&l.modifiers[m],n)}),t)};p.displayName="Title"},62472:(e,n,t)=>{"use strict";t.d(n,{S$:()=>c,Z1:()=>o,dp:()=>s,ql:()=>p});var a=t(93264);let r=0;const i="OUIA-Generated-",l={};function s(e,n,t=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":t,"data-ouia-component-id":n}}const c=(e,n,t=!0,a)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":t,"data-ouia-component-id":o(e,n,a)}),o=(e,n,t)=>{const r=(0,a.useMemo)((()=>p(e,t)),[e,t]);return null!=n?n:r};function p(e,n){try{let t;return t="undefined"!=typeof window?`${window.location.href}-${e}-${n||""}`:`${e}-${n||""}`,l[t]||(l[t]=0),`${i}${e}-${n?`${n}-`:""}${++l[t]}`}catch(t){return`${i}${e}-${n?`${n}-`:""}${++r}`}}},12971:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a}),t(11452);const a={badge:"pf-c-badge",modifiers:{read:"pf-m-read",unread:"pf-m-unread"},themeDark:"pf-theme-dark"}},80480:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a}),t(34946);const a={badge:"pf-c-badge",button:"pf-c-button",buttonCount:"pf-c-button__count",buttonIcon:"pf-c-button__icon",buttonProgress:"pf-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end",overpassFont:"pf-m-overpass-font"},spinner:"pf-c-spinner",themeDark:"pf-theme-dark"}},55140:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var a=t(54025),r=function(){return r=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},r.apply(this,arguments)};const i=function(e){var n,t=(0,a.useScalprum)(),i=(null===(n=t.api)||void 0===n?void 0:n.chrome)||{};return i=r(r({},i),{initialized:t.initialized}),"function"==typeof e?e(i):i}},20940:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var a=t(93264),r=t.n(a),i=t(94184),l=t.n(i),s=t(45697),c=t.n(s),o=function(e){var n=e.iconListStyle,t=e.className,a=e.children,i=l()(t,"insd-c-icon-list");return r().createElement("ul",{className:i,style:n},a)};const p=o;o.propTypes={children:c().any.isRequired,iconListStyle:c().string,className:c().string}},31486:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var a=t(93264),r=t.n(a),i=t(94184),l=t.n(i),s=t(45697),c=t.n(s),o=function(e){var n=e.className,t=e.iconListItemStyle,a=e.children,i=l()(n,"insd-c-icon-list__item");return r().createElement("li",{className:i,style:t},a)};const p=o;o.propTypes={className:c().string,iconListItemStyle:c().string,children:c().any.isRequired}},3203:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var a=t(4942),r=t(14938),i=t(93264),l=t.n(i),s=t(94184),c=t.n(s),o=t(45697),p=t.n(o),m=function(e){var n=e.className,t=e.hasGraphic,i=e.graphicRight,s=e.dark1000,o=e.fullBleed,p=e.style,m=e.children,u=c()(n,"insd-c-marketing-banner",(0,a.Z)({},"insd-m-with-graphic",t),(0,a.Z)({},"insd-m-graphic-right",i),(0,a.Z)({},"insd-m-dark-1000 pf-m-dark-1000",s),(0,a.Z)({},"insd-m-full-bleed",o));return l().createElement(r.PageSection,{className:u,style:p,isWidthLimited:!0},m)};const u=m;m.propTypes={children:p().any.isRequired,className:p().string,style:p().any,graphicRight:p().bool,hasGraphic:p().bool,dark1000:p().bool,fullBleed:p().bool,isWidthLimited:p().bool}},95647:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>T});var a=t(98152),r=t(38779),i=t(47173),l=t(28191),s=t(92298),c=t(50693),o=t(16475),p=t(93264),m=t.n(p),u=t(20940),d=t(31486),f=t(3203),g=t(30893),b=t(86896),h=t(55140),y=t(45697),v=t.n(y),E=t(14938),x=function(e){return e.link?m().createElement(m().Fragment,null,m().createElement("a",{target:"_blank",href:"".concat(e.link),rel:"noreferrer",className:"pf-u-pl-lg"},e.instructions)):e.numberedLink?m().createElement("div",null,e.step,m().createElement("a",{target:"_blank",href:"".concat(e.numberedLink),rel:"noreferrer"},e.instructions)):e.plainText?m().createElement(m().Fragment,null,m().createElement("p",{className:e.plainText.length<4?"pf-u-pl-lg":""},e.plainText)):e.linkWithinText?m().createElement(m().Fragment,null,m().createElement("p",{className:"pf-u-pl-md"},e.partOne," ",m().createElement("a",{href:e.linkWithinText},e.anchorText)," ",e.partTwo)):e.singleClipboardCommand?m().createElement(m().Fragment,null,m().createElement(E.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",isReadOnly:!0,className:"pf-u-p-sm pf-u-pt-xs pf-u-pl-md"},e.singleClipboardCommand)):m().createElement(m().Fragment,null,m().createElement("p",{className:(e.noPadding?"pf-u-pl-0":"pf-u-pl-md")+" pf-u-mb-0 "},e.instructions),m().createElement(E.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",isReadOnly:!0,className:"pf-u-p-sm pf-u-pt-xs pf-u-pl-md"},e.command))};const N=x;x.propTypes={item:v().object};var Z=t(73305),k=function(e){var n=e.appName,t=e.description,y=void 0===t?Z.Z["".concat(n.toUpperCase(),"_ZERO_STATE")].header.description:t,v=e.commands,E=void 0===v?Z.Z["".concat(n.toUpperCase(),"_ZERO_STATE")].header.commands:v,x=e.bulletPoints,k=void 0===x?Z.Z["".concat(n.toUpperCase(),"_ZERO_STATE")].header.bulletPoints:x,T=e.customInstructions,S=e.customButton,_=e.customText,C=e.customTitle,w=e.appId,I=(0,b.Z)(),L=(0,h.Z)().hideGlobalFilter;(0,p.useEffect)((function(){return null==L||L(),function(){null==L||L(!1)}}),[L]);var B=(0,p.useState)(!1),A=(0,a.Z)(B,2),O=A[0],$=A[1],R=function(){return $(!O)};return m().createElement("div",{className:"insd-c-marketing-page warning"},m().createElement(f.Z,{dark1000:!0,style:{"--ins-c-marketing-banner--graphic--width-on-md":"200px","--ins-c-marketing-banner--graphic--width-on-xl":"400px"}},m().createElement(c.r,{lg:6,hasGutter:!0,className:"pf-u-pt-xl pf-u-pb-xl"},m().createElement(o.P,{className:"pf-u-pl-lg pf-u-pr-lg"},m().createElement(l.k,{direction:{default:"column"}},m().createElement(s.B,null,m().createElement(r.D,{headingLevel:"h1",size:"4xl"},n.replace("_"," "))),m().createElement(s.B,{spacer:{default:"spacerXl"}},m().createElement(r.D,{headingLevel:"h4",style:{maxWidth:"600px"}},y)),m().createElement(s.B,null,m().createElement(u.Z,{className:"pf-u-pl-sm "},k.map((function(e){return m().createElement(d.Z,{key:e},m().createElement(r.D,{headingLevel:"h4"},e))})))))),m().createElement(o.P,{style:{backgroundColor:"#fff"},className:O?"":"bannerBefore"},O?m().createElement(l.k,{className:"pf-u-p-lg",direction:{default:"column"},style:{color:"#151515"}},m().createElement("a",{className:"pf-u-pb-sm",onClick:R},"Go Back"),E.map((function(e){return N(e)}))):!O&&T?T($):m().createElement(l.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"},alignSelf:{default:"alignSelfCenter"},className:"bannerRight"},m().createElement(s.B,{className:"pf-u-pt-lg"},m().createElement(r.D,{headingLevel:"h1",size:"2xl",style:{color:"#151515"},ouiaId:"ZeroStateCustomAppTitle"},C||"Start using ".concat(n.replace("_"," ")," now"))),m().createElement(s.B,null,m().createElement("div",{style:{maxWidth:"600px",color:"#151515",textAlign:"center"}},m().createElement("p",null,_||I.formatMessage(g.Z.getStartedInsights)))),m().createElement(s.B,null,S||m().createElement(i.zx,{id:w,onClick:R,className:"pf-u-p-md pf-u-font-size-md"}," Register your systems")),m().createElement(s.B,null,m().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/products/trials?products=rhel"},I.formatMessage(g.Z.notMember))))))))};const T=k;k.propTypes={appName:v().string,description:v().object,commands:v().array,bulletPoints:v().array,customInstructions:v().any,customButton:v().any,customText:v().string,customTitle:v().string,appId:v().string}},94184:(e,n)=>{var t;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var l=r.apply(null,t);l&&e.push(l)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var s in t)a.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},11452:()=>{},34946:()=>{},66822:()=>{},314:()=>{},38299:()=>{},72816:()=>{},4942:(e,n,t)=>{"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:()=>a})},98152:(e,n,t)=>{"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(a=t.next()).done)&&(i.push(a.value),!n||i.length!==n);l=!0);}catch(e){s=!0,r=e}finally{try{l||null==t.return||t.return()}finally{if(s)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:()=>r})}}]);
//# sourceMappingURL=../sourcemaps/4015.624a4c40e4f5b992acb59575e63e8306.js.map