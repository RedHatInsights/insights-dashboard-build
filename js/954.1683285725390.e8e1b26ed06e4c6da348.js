(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[954],{70:(e,a,n)=>{"use strict";n.d(a,{l:()=>c});var t=n(70655),l=n(93264),i=n(38296),s=n(54918),r=n(32203);const c=e=>{var{children:a=null,className:n="",component:c="div"}=e,p=(0,t._T)(e,["children","className","component"]);const{cardId:m,registerTitleId:o}=l.useContext(r.H),d=c,u=m?`${m}-title`:"";return l.useEffect((()=>(o(u),()=>o(""))),[o,u]),l.createElement(d,Object.assign({className:(0,i.i)(s.Z.cardTitle,n),id:u||void 0},p),a)};c.displayName="CardTitle"},37619:(e,a,n)=>{"use strict";n.d(a,{$:()=>c,S:()=>s});var t=n(70655),l=n(93264);n(66822);const i={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"};var s,r=n(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(s||(s={}));const c=e=>{var{className:a="",size:n="xl","aria-valuetext":s="Loading...",isSVG:c=!1,diameter:p,isInline:m=!1,"aria-label":o,"aria-labelledBy":d}=e,u=(0,t._T)(e,["className","size","aria-valuetext","isSVG","diameter","isInline","aria-label","aria-labelledBy"]);const f=c?"svg":"span";return l.createElement(f,Object.assign({className:(0,r.i)(i.spinner,m?i.modifiers.inline:i.modifiers[n],a),role:"progressbar","aria-valuetext":s},c&&{viewBox:"0 0 100 100"},p&&{style:{"--pf-c-spinner--diameter":p}},o&&{"aria-label":o},d&&{"aria-labelledBy":d},!o&&!d&&{"aria-label":"Contents"},u),c?l.createElement("circle",{className:i.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):l.createElement(l.Fragment,null,l.createElement("span",{className:(0,r.i)(i.spinnerClipper)}),l.createElement("span",{className:(0,r.i)(i.spinnerLeadBall)}),l.createElement("span",{className:(0,r.i)(i.spinnerTailBall)})))};c.displayName="Spinner"},68340:(e,a,n)=>{"use strict";n.d(a,{q:()=>t,x:()=>p});var t,l=n(70655),i=n(93264),s=n(38296),r=n(62873),c=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(t||(t={}));const p=e=>{var{children:a=null,className:n="",component:m=t.p,isVisitedLink:o=!1,ouiaId:d,ouiaSafe:u=!0}=e,f=(0,l._T)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const h=m,x=(0,c.S$)(p.displayName,d,u);return i.createElement(h,Object.assign({},x,f,{"data-pf-content":!0,className:(0,s.i)(o&&m===t.a&&r.Z.modifiers.visited,n)}),a)};p.displayName="Text"},38779:(e,a,n)=>{"use strict";n.d(a,{D:()=>m,H:()=>r});var t=n(70655),l=n(93264),i=n(38296);n(314);const s={modifiers:{"4xl":"pf-m-4xl","3xl":"pf-m-3xl","2xl":"pf-m-2xl",xl:"pf-m-xl",lg:"pf-m-lg",md:"pf-m-md",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"};var r,c,p=n(62472);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(r||(r={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(c||(c={}));const m=e=>{var{className:a="",children:n="",headingLevel:r,size:o=c[r],ouiaId:d,ouiaSafe:u=!0}=e,f=(0,t._T)(e,["className","children","headingLevel","size","ouiaId","ouiaSafe"]);const h=(0,p.S$)(m.displayName,d,u);return l.createElement(r,Object.assign({},h,f,{className:(0,i.i)(s.title,o&&s.modifiers[o],a)}),n)};m.displayName="Title"},62472:(e,a,n)=>{"use strict";n.d(a,{S$:()=>c,Z1:()=>p,dp:()=>r,ql:()=>m});var t=n(93264);let l=0;const i="OUIA-Generated-",s={};function r(e,a,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":a}}const c=(e,a,n=!0,t)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":p(e,a,t)}),p=(e,a,n)=>{const l=(0,t.useMemo)((()=>m(e,n)),[e,n]);return null!=a?a:l};function m(e,a){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${a||""}`:`${e}-${a||""}`,s[n]||(s[n]=0),`${i}${e}-${a?`${a}-`:""}${++s[n]}`}catch(n){return`${i}${e}-${a?`${a}-`:""}${++l}`}}},66400:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>y});var t=n(32045),l=n(32203),i=n(70),s=n(38779),r=n(62394),c=n(45697),p=n.n(c),m=n(14938),o=n(93264),d=n.n(o),u=n(68774),f=n(68340),h=n(47173),x=n(11306),v=n(86896),g=n(55140),E=function(e){var a=e.app,n=(0,v.Z)(),t=(0,g.Z)();return d().createElement(m.GridItem,{md:4},d().createElement(u.D,null,d().createElement(f.x,{component:f.q.h3},a.title),d().createElement(f.x,null,n.formatMessage(a.description)),d().createElement(s.D,{headingLevel:"h4"},d().createElement(h.zx,{variant:"link",isLarge:!0,isInline:!0,component:"a",href:"".concat(t.isBeta()||"/settings/content"===a.link?"/preview":"").concat(a.link)},"Get started ",d().createElement(x.ZP,null)))))};E.propTypes={app:p().object};const N=E;var $=n(73305),b=function(e){var a=e.appName,n=$.Z["".concat(a.toUpperCase(),"_ZERO_STATE")].otherApps;return d().createElement(t.NP,{isWidthLimited:!0},d().createElement(l.Z,null,d().createElement(i.l,null,d().createElement(s.D,{headingLevel:"h3"},"Other Applications")),d().createElement(r.e,null,d().createElement(m.Grid,{hasGutter:!0,style:{marginTop:"16px",marginBottom:"16px"}},n.map((function(e){return d().createElement(N,{key:e.title,app:e})}))))))};b.propTypes={appName:p().string};const y=b},11452:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},92084:()=>{},66822:()=>{},314:()=>{}}]);
//# sourceMappingURL=../sourcemaps/954.06e9c1cb59ba2dc39bc58a0aaaea5738.js.map