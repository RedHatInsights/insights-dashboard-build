(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[9899],{70:(e,t,n)=>{"use strict";n.d(t,{l:()=>o});var a=n(70655),r=n(93264),l=n(38296),c=n(54918),i=n(32203);const o=e=>{var{children:t=null,className:n="",component:o="div"}=e,s=(0,a._T)(e,["children","className","component"]);const{cardId:m,registerTitleId:p}=r.useContext(i.H),u=o,d=m?`${m}-title`:"";return r.useEffect((()=>(p(d),()=>p(""))),[p,d]),r.createElement(u,Object.assign({className:(0,l.i)(c.Z.cardTitle,n),id:d||void 0},s),t)};o.displayName="CardTitle"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>a,x:()=>s});var a,r=n(70655),l=n(93264),c=n(38296),i=n(62873),o=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(a||(a={}));const s=e=>{var{children:t=null,className:n="",component:m=a.p,isVisitedLink:p=!1,ouiaId:u,ouiaSafe:d=!0}=e,h=(0,r._T)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const E=m,f=(0,o.S$)(s.displayName,u,d);return l.createElement(E,Object.assign({},f,h,{"data-pf-content":!0,className:(0,c.i)(p&&m===a.a&&i.Z.modifiers.visited,n)}),t)};s.displayName="Text"},26128:(e,t,n)=>{"use strict";n.d(t,{Pj:()=>a.Z,k2:()=>r});var a=n(97846),r=(n(4436),n(13976),"rhcs-language")},66400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(32045),r=n(32203),l=n(70),c=n(38779),i=n(62394),o=n(45697),s=n.n(o),m=n(14938),p=n(93264),u=n.n(p),d=n(68774),h=n(68340),E=n(47173),f=n(11306),g=n(86896),v=n(55140),b=function(e){var t=e.app,n=(0,g.Z)(),a=(0,v.Z)();return u().createElement(m.GridItem,{md:4},u().createElement(d.D,null,u().createElement(h.x,{component:h.q.h3},t.title),u().createElement(h.x,null,n.formatMessage(t.description)),u().createElement(c.D,{headingLevel:"h4"},u().createElement(E.zx,{variant:"link",isLarge:!0,isInline:!0,component:"a",href:"".concat(a.isBeta()?"/preview":"").concat(t.link)},"Get started ",u().createElement(f.ZP,null)))))};b.propTypes={app:s().object};const k=b;var _=n(73305),B=function(e){var t=e.appName,n=_.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].otherApps;return u().createElement(a.NP,{isWidthLimited:!0},u().createElement(r.Z,null,u().createElement(l.l,null,u().createElement(c.D,{headingLevel:"h3"},"Other Applications")),u().createElement(i.e,null,u().createElement(m.Grid,{hasGutter:!0,style:{marginTop:"16px",marginBottom:"16px"}},n.map((function(e){return u().createElement(k,{key:e.title,app:e})}))))))};B.propTypes={appName:s().string};const N=B},29673:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(93264),r=n.n(a),l=n(66400),c=n(95647),i=n(80188),o=n(45697),s=n.n(o),m=n(26128),p=function(e){var t=e.app;return r().createElement(m.Pj,null,r().createElement(r().Fragment,null,r().createElement(c.default,{appName:t}),r().createElement(l.default,{appName:t}),r().createElement(i.default,{appName:t})))};const u=p;p.propTypes={app:s().string}},80188:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var a=n(14938),r=n(28191),l=n(92298),c=n(50693),i=n(16475),o=n(93264),s=n.n(o),m=n(73305),p=n(45697),u=n.n(p),d=n(55140),h=function(e){var t=e.appName,n=e.documentation,o=void 0===n?m.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].documentation:n,p=(0,d.Z)();return s().createElement(a.PageSection,{className:"footer"},s().createElement(a.Card,null,s().createElement(c.r,{lg:4,hasGutter:!0,className:"pf-u-p-xl"},s().createElement(i.P,null,s().createElement(r.k,{direction:{default:"column"}},s().createElement(l.B,null,s().createElement(a.Title,{headingLevel:"h3",size:"lg"},t.replace("_"," ")," documentation")),o.map((function(e){return s().createElement(l.B,{key:e.title},s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:e.link},e.title))})))),s().createElement(i.P,null,s().createElement(r.k,{direction:{default:"column"},spacer:{default:"spacerSm"}},s().createElement(l.B,null,s().createElement(a.Title,{headingLevel:"h3",size:"lg"},"Learn about Insights")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},"Product page")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://access.redhat.com/documentation/en-us/red_hat_insights/2023"},"Product documentation")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights/data-application-security"},"Data privacy and controls in Insights")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://console.redhat.com/docs/api"},"APIs")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/blog/channel/red-hat-insights"},"Blog")))),s().createElement(i.P,null,s().createElement(r.k,{direction:{default:"column"}},s().createElement(l.B,null,s().createElement(a.Title,{headingLevel:"h3",size:"lg"},"Other bundles")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:" ".concat(p.isBeta()?"/preview":"","/openshift")},"OpenShift")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(p.isBeta()?"/preview":"","/application-services/overview")},"Application and Data Services")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(p.isBeta()?"/preview":"","/edge/")},"Edge Managment")),s().createElement(l.B,null,s().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"".concat(p.isBeta()?"/preview":"","/ansible/ansible-dashboard")},"Ansible Automation Platform")))))))};const E=h;h.propTypes={appName:u().string,documentation:u().array}},80598:()=>{},10108:()=>{},92084:()=>{},87462:(e,t,n)=>{"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},63366:(e,t,n)=>{"use strict";function a(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=../sourcemaps/9899.f56f7db335474e55fcb8717ff8e0ad35.js.map