/*! For license information please see 40.1683285725390.e8e1b26ed06e4c6da348.js.LICENSE.txt */
(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[40,8287],{70:(e,t,n)=>{"use strict";n.d(t,{l:()=>s});var a=n(70655),r=n(93264),l=n(38296),c=n(54918),i=n(32203);const s=e=>{var{children:t=null,className:n="",component:s="div"}=e,o=(0,a._T)(e,["children","className","component"]);const{cardId:m,registerTitleId:u}=r.useContext(i.H),p=s,d=m?`${m}-title`:"";return r.useEffect((()=>(u(d),()=>u(""))),[u,d]),r.createElement(p,Object.assign({className:(0,l.i)(c.Z.cardTitle,n),id:d||void 0},o),t)};s.displayName="CardTitle"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>a,x:()=>o});var a,r=n(70655),l=n(93264),c=n(38296),i=n(62873),s=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(a||(a={}));const o=e=>{var{children:t=null,className:n="",component:m=a.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:d=!0}=e,h=(0,r._T)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const f=m,g=(0,s.S$)(o.displayName,p,d);return l.createElement(f,Object.assign({},g,h,{"data-pf-content":!0,className:(0,c.i)(u&&m===a.a&&i.Z.modifiers.visited,n)}),t)};o.displayName="Text"},62472:(e,t,n)=>{"use strict";n.d(t,{S$:()=>s,Z1:()=>o,dp:()=>i,ql:()=>m});var a=n(93264);let r=0;const l="OUIA-Generated-",c={};function i(e,t,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const s=(e,t,n=!0,a)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":o(e,t,a)}),o=(e,t,n)=>{const r=(0,a.useMemo)((()=>m(e,n)),[e,n]);return null!=t?t:r};function m(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,c[n]||(c[n]=0),`${l}${e}-${t?`${t}-`:""}${++c[n]}`}catch(n){return`${l}${e}-${t?`${t}-`:""}${++r}`}}},26128:(e,t,n)=>{"use strict";n.d(t,{Pj:()=>a.Z,k2:()=>r});var a=n(97846),r=(n(4436),n(13976),"rhcs-language")},20940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(93264),r=n.n(a),l=n(94184),c=n.n(l),i=n(45697),s=n.n(i),o=function(e){var t=e.iconListStyle,n=e.className,a=e.children,l=c()(n,"insd-c-icon-list");return r().createElement("ul",{className:l,style:t},a)};const m=o;o.propTypes={children:s().any.isRequired,iconListStyle:s().string,className:s().string}},31486:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(93264),r=n.n(a),l=n(94184),c=n.n(l),i=n(45697),s=n.n(i),o=function(e){var t=e.className,n=e.iconListItemStyle,a=e.children,l=c()(t,"insd-c-icon-list__item");return r().createElement("li",{className:l,style:n},a)};const m=o;o.propTypes={className:s().string,iconListItemStyle:s().string,children:s().any.isRequired}},3203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(4942),r=n(14938),l=n(93264),c=n.n(l),i=n(94184),s=n.n(i),o=n(45697),m=n.n(o),u=function(e){var t=e.className,n=e.hasGraphic,l=e.graphicRight,i=e.dark1000,o=e.fullBleed,m=e.style,u=e.children,p=s()(t,"insd-c-marketing-banner",(0,a.Z)({},"insd-m-with-graphic",n),(0,a.Z)({},"insd-m-graphic-right",l),(0,a.Z)({},"insd-m-dark-1000 pf-m-dark-1000",i),(0,a.Z)({},"insd-m-full-bleed",o));return c().createElement(r.PageSection,{className:p,style:m,isWidthLimited:!0},u)};const p=u;u.propTypes={children:m().any.isRequired,className:m().string,style:m().any,graphicRight:m().bool,hasGraphic:m().bool,dark1000:m().bool,fullBleed:m().bool,isWidthLimited:m().bool}},66400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(32045),r=n(32203),l=n(70),c=n(38779),i=n(62394),s=n(45697),o=n.n(s),m=n(14938),u=n(93264),p=n.n(u),d=n(68774),h=n(68340),f=n(47173),g=n(11306),E=n(86896),v=n(55140),y=function(e){var t=e.app,n=(0,E.Z)(),a=(0,v.Z)();return p().createElement(m.GridItem,{md:4},p().createElement(d.D,null,p().createElement(h.x,{component:h.q.h3},t.title),p().createElement(h.x,null,n.formatMessage(t.description)),p().createElement(c.D,{headingLevel:"h4"},p().createElement(f.zx,{variant:"link",isLarge:!0,isInline:!0,component:"a",href:"".concat(a.isBeta()||"/settings/content"===t.link?"/preview":"").concat(t.link)},"Get started ",p().createElement(g.ZP,null)))))};y.propTypes={app:o().object};const b=y;var k=n(73305),T=function(e){var t=e.appName,n=k.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].otherApps;return p().createElement(a.NP,{isWidthLimited:!0},p().createElement(r.Z,null,p().createElement(l.l,null,p().createElement(c.D,{headingLevel:"h3"},"Other Applications")),p().createElement(i.e,null,p().createElement(m.Grid,{hasGutter:!0,style:{marginTop:"16px",marginBottom:"16px"}},n.map((function(e){return p().createElement(b,{key:e.title,app:e})}))))))};T.propTypes={appName:o().string};const N=T},29673:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var a=n(93264),r=n.n(a),l=n(66400),c=n(95647),i=n(80188),s=n(45697),o=n.n(s),m=n(26128),u=function(e){var t=e.app,n=e.customInstructions,a=e.customButton,s=e.customText,o=e.customTitle;return r().createElement(m.Pj,null,r().createElement(r().Fragment,null,r().createElement(c.default,{appName:t,customInstructions:n,customButton:a,customText:s,customTitle:o}),r().createElement(l.default,{appName:t}),r().createElement(i.default,{appName:t})))};const p=u;u.propTypes={app:o().string,customInstructions:o().any,customButton:o().any,customText:o().string,customTitle:o().string}},95647:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>B});var a=n(98152),r=n(38779),l=n(47173),c=n(28191),i=n(92298),s=n(50693),o=n(16475),m=n(93264),u=n.n(m),p=n(20940),d=n(31486),h=n(3203),f=n(30893),g=n(86896),E=n(55140),v=n(45697),y=n.n(v),b=n(14938),k=function(e){return e.link?u().createElement(u().Fragment,null,u().createElement("a",{target:"_blank",href:"".concat(e.link),rel:"noreferrer",className:"pf-u-pl-lg"},e.instructions)):e.numberedLink?u().createElement("div",null,e.step,u().createElement("a",{target:"_blank",href:"".concat(e.numberedLink),rel:"noreferrer"},e.instructions)):e.plainText?u().createElement(u().Fragment,null,u().createElement("p",{className:e.plainText.length<4?"pf-u-pl-lg":""},e.plainText)):e.linkWithinText?u().createElement(u().Fragment,null,u().createElement("p",{className:"pf-u-pl-md"},e.partOne," ",u().createElement("a",{href:e.linkWithinText},e.anchorText)," ",e.partTwo)):u().createElement(u().Fragment,null,u().createElement("p",{className:(e.noPadding?"pf-u-pl-0":"pf-u-pl-md")+" pf-u-mb-0 "},e.instructions),u().createElement(b.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",isReadOnly:!0,className:"pf-u-p-sm pf-u-pt-xs pf-u-pl-md"},e.command))};const T=k;k.propTypes={item:y().object};var N=n(73305),x=function(e){var t=e.appName,n=e.description,v=void 0===n?N.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].header.description:n,y=e.commands,b=void 0===y?N.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].header.commands:y,k=e.bulletPoints,x=void 0===k?N.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].header.bulletPoints:k,B=e.customInstructions,Z=e.customButton,_=e.customText,w=e.customTitle,S=(0,g.Z)(),L=(0,E.Z)().hideGlobalFilter;(0,m.useEffect)((function(){return null==L||L(),function(){null==L||L(!1)}}),[L]);var P=(0,m.useState)(!1),I=(0,a.Z)(P,2),O=I[0],$=I[1],C=function(){return $(!O)};return u().createElement("div",{className:"insd-c-marketing-page warning"},u().createElement(h.Z,{dark1000:!0,style:{"--ins-c-marketing-banner--graphic--width-on-md":"200px","--ins-c-marketing-banner--graphic--width-on-xl":"400px"}},u().createElement(s.r,{lg:6,hasGutter:!0,className:"pf-u-pt-xl pf-u-pb-xl"},u().createElement(o.P,{className:"pf-u-pl-lg pf-u-pr-lg"},u().createElement(c.k,{direction:{default:"column"}},u().createElement(i.B,null,u().createElement(r.D,{headingLevel:"h1",size:"4xl"},t.replace("_"," "))),u().createElement(i.B,{spacer:{default:"spacerXl"}},u().createElement(r.D,{headingLevel:"h4",style:{maxWidth:"600px"}},v)),u().createElement(i.B,null,u().createElement(p.Z,{className:"pf-u-pl-sm "},x.map((function(e){return u().createElement(d.Z,{key:e},u().createElement(r.D,{headingLevel:"h4"},e))})))))),u().createElement(o.P,{style:{backgroundColor:"#fff"},className:O?"":"bannerBefore"},O?u().createElement(c.k,{className:"pf-u-p-lg",direction:{default:"column"},style:{color:"#151515"}},u().createElement("a",{className:"pf-u-pb-sm",onClick:C},"Go Back"),b.map((function(e){return T(e)}))):!O&&B?B($):u().createElement(c.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"},alignSelf:{default:"alignSelfCenter"},className:"bannerRight"},u().createElement(i.B,{className:"pf-u-pt-lg"},u().createElement(r.D,{headingLevel:"h1",size:"2xl",style:{color:"#151515"}},w||"Start using ".concat(t.replace("_"," ")," now"))),u().createElement(i.B,null,u().createElement("div",{style:{maxWidth:"600px",color:"#151515",textAlign:"center"}},u().createElement("p",null,_||S.formatMessage(f.Z.getStartedInsights)))),u().createElement(i.B,null,Z||u().createElement(l.zx,{onClick:C,className:"pf-u-p-md pf-u-font-size-md"}," Register your systems")),u().createElement(i.B,null,u().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},S.formatMessage(f.Z.notMember))))))))};const B=x;x.propTypes={appName:y().string,description:y().object,commands:y().array,bulletPoints:y().array,customInstructions:y().any,customButton:y().any,customText:y().string,customTitle:y().string}},80188:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(14938),r=n(28191),l=n(92298),c=n(50693),i=n(16475),s=n(93264),o=n.n(s),m=n(73305),u=n(45697),p=n.n(u),d=n(55140),h=function(e){var t=e.appName,n=e.documentation,s=void 0===n?m.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].documentation:n,u=(0,d.Z)();return o().createElement(a.PageSection,{className:"footer",isWidthLimited:!0},o().createElement(a.Card,null,o().createElement(c.r,{lg:4,hasGutter:!0,className:"pf-u-p-xl"},o().createElement(i.P,null,o().createElement(r.k,{direction:{default:"column"}},o().createElement(l.B,null,o().createElement(a.Title,{headingLevel:"h3",size:"lg"},t.replace("_"," ")," documentation")),s.map((function(e){return o().createElement(l.B,{key:e.title},o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:e.link},e.title))})))),o().createElement(i.P,null,o().createElement(r.k,{direction:{default:"column"},spacer:{default:"spacerSm"}},o().createElement(l.B,null,o().createElement(a.Title,{headingLevel:"h3",size:"lg"},"Learn about Insights")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},"Product page")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://access.redhat.com/documentation/en-us/red_hat_insights/2023"},"Product documentation")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights/data-application-security"},"Data privacy and controls in Insights")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://console.redhat.com/docs/api"},"APIs")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/blog/channel/red-hat-insights"},"Blog")))),o().createElement(i.P,null,o().createElement(r.k,{direction:{default:"column"}},o().createElement(l.B,null,o().createElement(a.Title,{headingLevel:"h3",size:"lg"},"Other bundles")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:" ".concat(u.isBeta()?"/preview":"","/openshift")},"OpenShift")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(u.isBeta()?"/preview":"","/application-services/overview")},"Application and Data Services")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(u.isBeta()?"/preview":"","/edge/")},"Edge Managment")),o().createElement(l.B,null,o().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(u.isBeta()?"/preview":"","/ansible/ansible-dashboard")},"Ansible Automation Platform")))))))};const f=h;h.propTypes={appName:p().string,documentation:p().array}},94184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},11452:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},92084:()=>{},66822:()=>{},314:()=>{},38299:()=>{},72816:()=>{},87462:(e,t,n)=>{"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},63366:(e,t,n)=>{"use strict";function a(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=../sourcemaps/40.2c2e9194c8d1702ebcdf6baf0ae287f4.js.map