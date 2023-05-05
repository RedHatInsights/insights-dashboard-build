/*! For license information please see 9552.1683312745766.8d3ad6886503e573991c.js.LICENSE.txt */
(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[9552],{68425:(e,n,a)=>{"use strict";a.d(n,{C:()=>s});var t=a(70655),r=a(93264),i=a(38296),l=a(12971);const s=e=>{var{isRead:n=!1,className:a="",children:s="",screenReaderText:c}=e,o=(0,t._T)(e,["isRead","className","children","screenReaderText"]);return r.createElement("span",Object.assign({},o,{className:(0,i.i)(l.Z.badge,n?l.Z.modifiers.read:l.Z.modifiers.unread,a)}),s,c&&r.createElement("span",{className:"pf-screen-reader"},c))};s.displayName="Badge"},47173:(e,n,a)=>{"use strict";a.d(n,{L$:()=>r,Wu:()=>t,zx:()=>u});var t,r,i=a(70655),l=a(93264),s=a(80480),c=a(38296),o=a(37619),m=a(62472),p=a(68425);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(t||(t={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(r||(r={}));const d=e=>{var{children:n=null,className:a="",component:d="button",isActive:f=!1,isBlock:g=!1,isDisabled:b=!1,isAriaDisabled:h=!1,isLoading:y=null,isDanger:v=!1,spinnerAriaValueText:E,spinnerAriaLabelledBy:x,spinnerAriaLabel:N,isSmall:k=!1,isLarge:Z=!1,inoperableEvents:T=["onClick","onKeyPress"],isInline:S=!1,type:_=r.button,variant:C=t.primary,iconPosition:L="left","aria-label":w=null,icon:B=null,ouiaId:I,ouiaSafe:$=!0,tabIndex:A=null,innerRef:R,countOptions:O}=e,P=(0,i._T)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","isSmall","isLarge","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const j=(0,m.S$)(u.displayName,I,$,C),D=d,F="button"===D,z=S&&"span"===D,G=T.reduce(((e,n)=>Object.assign(Object.assign({},e),{[n]:e=>{e.preventDefault()}})),{});return l.createElement(D,Object.assign({},P,h?G:null,{"aria-disabled":b||h,"aria-label":w,className:(0,c.i)(s.Z.button,s.Z.modifiers[C],g&&s.Z.modifiers.block,b&&s.Z.modifiers.disabled,h&&s.Z.modifiers.ariaDisabled,f&&s.Z.modifiers.active,S&&C===t.link&&s.Z.modifiers.inline,v&&(C===t.secondary||C===t.link)&&s.Z.modifiers.danger,null!==y&&null!==n&&s.Z.modifiers.progress,y&&s.Z.modifiers.inProgress,k&&s.Z.modifiers.small,Z&&s.Z.modifiers.displayLg,a),disabled:F?b:null,tabIndex:null!==A?A:b?F?null:-1:h?null:z?0:void 0,type:F||z?_:null,role:z?"button":null,ref:R},j),y&&l.createElement("span",{className:(0,c.i)(s.Z.buttonProgress)},l.createElement(o.$,{size:o.S.md,isInline:S,"aria-valuetext":E,"aria-label":N,"aria-labelledby":x})),C===t.plain&&null===n&&B?B:null,C!==t.plain&&B&&"left"===L&&l.createElement("span",{className:(0,c.i)(s.Z.buttonIcon,s.Z.modifiers.start)},B),n,C!==t.plain&&B&&"right"===L&&l.createElement("span",{className:(0,c.i)(s.Z.buttonIcon,s.Z.modifiers.end)},B),O&&l.createElement("span",{className:(0,c.i)(s.Z.buttonCount,O.className)},l.createElement(p.C,{isRead:O.isRead},O.count)))},u=l.forwardRef(((e,n)=>l.createElement(d,Object.assign({innerRef:n},e))));u.displayName="Button"},37619:(e,n,a)=>{"use strict";a.d(n,{$:()=>c,S:()=>l});var t=a(70655),r=a(93264);a(66822);const i={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"};var l,s=a(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(l||(l={}));const c=e=>{var{className:n="",size:a="xl","aria-valuetext":l="Loading...",isSVG:c=!1,diameter:o,isInline:m=!1,"aria-label":p,"aria-labelledBy":d}=e,u=(0,t._T)(e,["className","size","aria-valuetext","isSVG","diameter","isInline","aria-label","aria-labelledBy"]);const f=c?"svg":"span";return r.createElement(f,Object.assign({className:(0,s.i)(i.spinner,m?i.modifiers.inline:i.modifiers[a],n),role:"progressbar","aria-valuetext":l},c&&{viewBox:"0 0 100 100"},o&&{style:{"--pf-c-spinner--diameter":o}},p&&{"aria-label":p},d&&{"aria-labelledBy":d},!p&&!d&&{"aria-label":"Contents"},u),c?r.createElement("circle",{className:i.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):r.createElement(r.Fragment,null,r.createElement("span",{className:(0,s.i)(i.spinnerClipper)}),r.createElement("span",{className:(0,s.i)(i.spinnerLeadBall)}),r.createElement("span",{className:(0,s.i)(i.spinnerTailBall)})))};c.displayName="Spinner"},38779:(e,n,a)=>{"use strict";a.d(n,{D:()=>m,H:()=>s});var t=a(70655),r=a(93264),i=a(38296);a(314);const l={modifiers:{"4xl":"pf-m-4xl","3xl":"pf-m-3xl","2xl":"pf-m-2xl",xl:"pf-m-xl",lg:"pf-m-lg",md:"pf-m-md",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"};var s,c,o=a(62472);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(s||(s={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(c||(c={}));const m=e=>{var{className:n="",children:a="",headingLevel:s,size:p=c[s],ouiaId:d,ouiaSafe:u=!0}=e,f=(0,t._T)(e,["className","children","headingLevel","size","ouiaId","ouiaSafe"]);const g=(0,o.S$)(m.displayName,d,u);return r.createElement(s,Object.assign({},g,f,{className:(0,i.i)(l.title,p&&l.modifiers[p],n)}),a)};m.displayName="Title"},62472:(e,n,a)=>{"use strict";a.d(n,{S$:()=>c,Z1:()=>o,dp:()=>s,ql:()=>m});var t=a(93264);let r=0;const i="OUIA-Generated-",l={};function s(e,n,a=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":a,"data-ouia-component-id":n}}const c=(e,n,a=!0,t)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":a,"data-ouia-component-id":o(e,n,t)}),o=(e,n,a)=>{const r=(0,t.useMemo)((()=>m(e,a)),[e,a]);return null!=n?n:r};function m(e,n){try{let a;return a="undefined"!=typeof window?`${window.location.href}-${e}-${n||""}`:`${e}-${n||""}`,l[a]||(l[a]=0),`${i}${e}-${n?`${n}-`:""}${++l[a]}`}catch(a){return`${i}${e}-${n?`${n}-`:""}${++r}`}}},12971:(e,n,a)=>{"use strict";a.d(n,{Z:()=>t}),a(11452);const t={badge:"pf-c-badge",modifiers:{read:"pf-m-read",unread:"pf-m-unread"},themeDark:"pf-theme-dark"}},80480:(e,n,a)=>{"use strict";a.d(n,{Z:()=>t}),a(34946);const t={badge:"pf-c-badge",button:"pf-c-button",buttonCount:"pf-c-button__count",buttonIcon:"pf-c-button__icon",buttonProgress:"pf-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end",overpassFont:"pf-m-overpass-font"},spinner:"pf-c-spinner",themeDark:"pf-theme-dark"}},20940:(e,n,a)=>{"use strict";a.d(n,{Z:()=>m});var t=a(93264),r=a.n(t),i=a(94184),l=a.n(i),s=a(45697),c=a.n(s),o=function(e){var n=e.iconListStyle,a=e.className,t=e.children,i=l()(a,"insd-c-icon-list");return r().createElement("ul",{className:i,style:n},t)};const m=o;o.propTypes={children:c().any.isRequired,iconListStyle:c().string,className:c().string}},31486:(e,n,a)=>{"use strict";a.d(n,{Z:()=>m});var t=a(93264),r=a.n(t),i=a(94184),l=a.n(i),s=a(45697),c=a.n(s),o=function(e){var n=e.className,a=e.iconListItemStyle,t=e.children,i=l()(n,"insd-c-icon-list__item");return r().createElement("li",{className:i,style:a},t)};const m=o;o.propTypes={className:c().string,iconListItemStyle:c().string,children:c().any.isRequired}},3203:(e,n,a)=>{"use strict";a.d(n,{Z:()=>d});var t=a(4942),r=a(14938),i=a(93264),l=a.n(i),s=a(94184),c=a.n(s),o=a(45697),m=a.n(o),p=function(e){var n=e.className,a=e.hasGraphic,i=e.graphicRight,s=e.dark1000,o=e.fullBleed,m=e.style,p=e.children,d=c()(n,"insd-c-marketing-banner",(0,t.Z)({},"insd-m-with-graphic",a),(0,t.Z)({},"insd-m-graphic-right",i),(0,t.Z)({},"insd-m-dark-1000 pf-m-dark-1000",s),(0,t.Z)({},"insd-m-full-bleed",o));return l().createElement(r.PageSection,{className:d,style:m,isWidthLimited:!0},p)};const d=p;p.propTypes={children:m().any.isRequired,className:m().string,style:m().any,graphicRight:m().bool,hasGraphic:m().bool,dark1000:m().bool,fullBleed:m().bool,isWidthLimited:m().bool}},95647:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>T});var t=a(98152),r=a(38779),i=a(47173),l=a(28191),s=a(92298),c=a(50693),o=a(16475),m=a(93264),p=a.n(m),d=a(20940),u=a(31486),f=a(3203),g=a(30893),b=a(86896),h=a(55140),y=a(45697),v=a.n(y),E=a(14938),x=function(e){return e.link?p().createElement(p().Fragment,null,p().createElement("a",{target:"_blank",href:"".concat(e.link),rel:"noreferrer",className:"pf-u-pl-lg"},e.instructions)):e.numberedLink?p().createElement("div",null,e.step,p().createElement("a",{target:"_blank",href:"".concat(e.numberedLink),rel:"noreferrer"},e.instructions)):e.plainText?p().createElement(p().Fragment,null,p().createElement("p",{className:e.plainText.length<4?"pf-u-pl-lg":""},e.plainText)):e.linkWithinText?p().createElement(p().Fragment,null,p().createElement("p",{className:"pf-u-pl-md"},e.partOne," ",p().createElement("a",{href:e.linkWithinText},e.anchorText)," ",e.partTwo)):e.singleClipboardCommand?p().createElement(p().Fragment,null,p().createElement(E.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",isReadOnly:!0,className:"pf-u-p-sm pf-u-pt-xs pf-u-pl-md"},e.singleClipboardCommand)):p().createElement(p().Fragment,null,p().createElement("p",{className:(e.noPadding?"pf-u-pl-0":"pf-u-pl-md")+" pf-u-mb-0 "},e.instructions),p().createElement(E.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",isReadOnly:!0,className:"pf-u-p-sm pf-u-pt-xs pf-u-pl-md"},e.command))};const N=x;x.propTypes={item:v().object};var k=a(73305),Z=function(e){var n=e.appName,a=e.description,y=void 0===a?k.Z["".concat(n.toUpperCase(),"_ZERO_STATE")].header.description:a,v=e.commands,E=void 0===v?k.Z["".concat(n.toUpperCase(),"_ZERO_STATE")].header.commands:v,x=e.bulletPoints,Z=void 0===x?k.Z["".concat(n.toUpperCase(),"_ZERO_STATE")].header.bulletPoints:x,T=e.customInstructions,S=e.customButton,_=e.customText,C=e.customTitle,L=(0,b.Z)(),w=(0,h.Z)().hideGlobalFilter;(0,m.useEffect)((function(){return null==w||w(),function(){null==w||w(!1)}}),[w]);var B=(0,m.useState)(!1),I=(0,t.Z)(B,2),$=I[0],A=I[1],R=function(){return A(!$)};return p().createElement("div",{className:"insd-c-marketing-page warning"},p().createElement(f.Z,{dark1000:!0,style:{"--ins-c-marketing-banner--graphic--width-on-md":"200px","--ins-c-marketing-banner--graphic--width-on-xl":"400px"}},p().createElement(c.r,{lg:6,hasGutter:!0,className:"pf-u-pt-xl pf-u-pb-xl"},p().createElement(o.P,{className:"pf-u-pl-lg pf-u-pr-lg"},p().createElement(l.k,{direction:{default:"column"}},p().createElement(s.B,null,p().createElement(r.D,{headingLevel:"h1",size:"4xl"},n.replace("_"," "))),p().createElement(s.B,{spacer:{default:"spacerXl"}},p().createElement(r.D,{headingLevel:"h4",style:{maxWidth:"600px"}},y)),p().createElement(s.B,null,p().createElement(d.Z,{className:"pf-u-pl-sm "},Z.map((function(e){return p().createElement(u.Z,{key:e},p().createElement(r.D,{headingLevel:"h4"},e))})))))),p().createElement(o.P,{style:{backgroundColor:"#fff"},className:$?"":"bannerBefore"},$?p().createElement(l.k,{className:"pf-u-p-lg",direction:{default:"column"},style:{color:"#151515"}},p().createElement("a",{className:"pf-u-pb-sm",onClick:R},"Go Back"),E.map((function(e){return N(e)}))):!$&&T?T(A):p().createElement(l.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"},alignSelf:{default:"alignSelfCenter"},className:"bannerRight"},p().createElement(s.B,{className:"pf-u-pt-lg"},p().createElement(r.D,{headingLevel:"h1",size:"2xl",style:{color:"#151515"}},C||"Start using ".concat(n.replace("_"," ")," now"))),p().createElement(s.B,null,p().createElement("div",{style:{maxWidth:"600px",color:"#151515",textAlign:"center"}},p().createElement("p",null,_||L.formatMessage(g.Z.getStartedInsights)))),p().createElement(s.B,null,S||p().createElement(i.zx,{onClick:R,className:"pf-u-p-md pf-u-font-size-md"}," Register your systems")),p().createElement(s.B,null,p().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},L.formatMessage(g.Z.notMember))))))))};const T=Z;Z.propTypes={appName:v().string,description:v().object,commands:v().array,bulletPoints:v().array,customInstructions:v().any,customButton:v().any,customText:v().string,customTitle:v().string}},94184:(e,n)=>{var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var s in a)t.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},11452:()=>{},34946:()=>{},66822:()=>{},314:()=>{},38299:()=>{},72816:()=>{},4942:(e,n,a)=>{"use strict";function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}a.d(n,{Z:()=>t})},98152:(e,n,a)=>{"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,r,i=[],l=!0,s=!1;try{for(a=a.call(e);!(l=(t=a.next()).done)&&(i.push(t.value),!n||i.length!==n);l=!0);}catch(e){s=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(s)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(n,{Z:()=>r})}}]);