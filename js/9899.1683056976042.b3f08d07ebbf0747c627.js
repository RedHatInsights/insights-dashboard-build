(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[9899],{70:(e,t,n)=>{"use strict";n.d(t,{l:()=>s});var a=n(70655),r=n(93264),l=n(38296),c=n(54918),o=n(32203);const s=e=>{var{children:t=null,className:n="",component:s="div"}=e,i=(0,a._T)(e,["children","className","component"]);const{cardId:m,registerTitleId:p}=r.useContext(o.H),u=s,d=m?`${m}-title`:"";return r.useEffect((()=>(p(d),()=>p(""))),[p,d]),r.createElement(u,Object.assign({className:(0,l.i)(c.Z.cardTitle,n),id:d||void 0},i),t)};s.displayName="CardTitle"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>a,x:()=>i});var a,r=n(70655),l=n(93264),c=n(38296),o=n(62873),s=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(a||(a={}));const i=e=>{var{children:t=null,className:n="",component:m=a.p,isVisitedLink:p=!1,ouiaId:u,ouiaSafe:d=!0}=e,h=(0,r._T)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const f=m,E=(0,s.S$)(i.displayName,u,d);return l.createElement(f,Object.assign({},E,h,{"data-pf-content":!0,className:(0,c.i)(p&&m===a.a&&o.Z.modifiers.visited,n)}),t)};i.displayName="Text"},26128:(e,t,n)=>{"use strict";n.d(t,{Pj:()=>a.Z,k2:()=>r});var a=n(97846),r=(n(4436),n(13976),"rhcs-language")},66400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(32045),r=n(32203),l=n(70),c=n(62394),o=n(45697),s=n.n(o),i=n(14938),m=n(93264),p=n.n(m),u=n(68774),d=n(68340),h=n(47173),f=n(11306),E=n(86896),g=n(55140),b=function(e){var t=e.app,n=(0,E.Z)(),a=(0,g.Z)();return p().createElement(i.GridItem,{md:4},p().createElement(u.D,null,p().createElement(d.x,{component:d.q.h3},t.title),p().createElement(d.x,null,n.formatMessage(t.description)),p().createElement(d.x,{component:d.q.p},p().createElement(h.zx,{variant:"link",isLarge:!0,isInline:!0,component:"a",href:"".concat(a.isBeta()?"/beta":"").concat(t.link)},"Get started ",p().createElement(f.ZP,null)))))};b.propTypes={app:s().object};const v=b;var k=n(73305),_=function(e){var t=e.appName,n=k.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].otherApps;return p().createElement(a.NP,{isWidthLimited:!0},p().createElement(r.Z,null,p().createElement(l.l,null,"Other Applications"),p().createElement(c.e,null,p().createElement(i.Grid,{hasGutter:!0,style:{marginTop:"16px",marginBottom:"16px"}},n.map((function(e){return p().createElement(v,{key:e.title,app:e})}))))))};_.propTypes={appName:s().string};const N=_},29673:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(93264),r=n.n(a),l=n(66400),c=n(95647),o=n(80188),s=n(45697),i=n.n(s),m=n(26128),p=function(e){var t=e.app;return r().createElement(m.Pj,null,r().createElement(r().Fragment,null,r().createElement(c.default,{appName:t}),r().createElement(l.default,{appName:t}),r().createElement(o.default,{appName:t})))};const u=p;p.propTypes={app:i().string}},80188:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(14938),r=n(28191),l=n(92298),c=n(50693),o=n(16475),s=n(93264),i=n.n(s),m=n(73305),p=n(45697),u=n.n(p),d=function(e){var t=e.appName,n=e.documentation,s=void 0===n?m.Z["".concat(t.toUpperCase(),"_ZERO_STATE")].documentation:n;return i().createElement(a.PageSection,{className:"footer pf-u-p-lg"},i().createElement(a.Card,null,i().createElement(c.r,{lg:4,hasGutter:!0,className:"pf-u-p-xl"},i().createElement(o.P,null,i().createElement(r.k,{direction:{default:"column"}},i().createElement(l.B,null,i().createElement(a.Title,{headingLevel:"h1",size:"lg"},t," documentation")),s.map((function(e){return i().createElement(l.B,{key:e.title},i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:e.link},e.title))})))),i().createElement(o.P,null,i().createElement(r.k,{direction:{default:"column"},spacer:{default:"spacerSm"}},i().createElement(l.B,null,i().createElement(a.Title,{headingLevel:"h1",size:"lg"},"Learn about Insights")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights"},"Product page")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://access.redhat.com/documentation/en-us/red_hat_insights/2023"},"Product documentation")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/technologies/management/insights/data-application-security"},"Data privacy and controls in Insights")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://console.redhat.com/docs/api"},"APIs")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://www.redhat.com/en/blog/channel/red-hat-insights"},"Blog")))),i().createElement(o.P,null,i().createElement(r.k,{direction:{default:"column"}},i().createElement(l.B,null,i().createElement(a.Title,{headingLevel:"h1",size:"lg"},"Other bundles")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://console.redhat.com/openshift"},"OpenShift")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://console.redhat.com/application-services/overview"},"Application and Data Services")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://console.redhat.com/edge/"},"Edge Managment")),i().createElement(l.B,null,i().createElement("a",{component:"a",target:"_blank",rel:"noreferrer",href:"https://console.redhat.com/ansible/ansible-dashboard"},"Ansible Automation Platform")))))))};const h=d;d.propTypes={appName:u().string,documentation:u().array}},80598:()=>{},10108:()=>{},92084:()=>{},87462:(e,t,n)=>{"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},63366:(e,t,n)=>{"use strict";function a(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:()=>a})}}]);