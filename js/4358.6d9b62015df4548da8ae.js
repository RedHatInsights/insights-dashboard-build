(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[4358],{44358:(e,a,t)=>{"use strict";t.r(a),t.d(a,{DashboardFooter:()=>B,default:()=>_});var o=t(32045),n=t(60485),c=t(93264),i=t.n(c),s=t(22122),l=t(81253),r=(t(39900),t(47173)),p=t(28191),d=t(92298),m=t(11306),A=t(59303),u=t(45697),g=t.n(u),f=function(e){var a=e.className,t=e.appName,o=e.icon,c=e.title,u=e.body,g=e.url,f=e.buttonText,b=(0,l.Z)(e,["className","appName","icon","title","body","url","buttonText"]);return i().createElement("div",(0,s.Z)({className:"ins-c-app-block ins-c-app-block--".concat(t," ").concat(a),id:"ins-c-app-block--".concat(t)},b),i().createElement("div",{className:"ins-c-app-block__icon"},o),i().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"}},i().createElement(n.D,{headingLevel:"h3",size:"xs",className:"pf-u-pt-sm"},c),i().createElement(d.B,{spacer:{default:"spacerSm"}},i().createElement("p",{className:"pf-u-color-200 pf-u-font-size-sm"},u)),i().createElement(r.zx,{variant:"link",href:"".concat(A.Pu,"/").concat(g),isInline:!0,icon:i().createElement(m.ZP,null),iconPosition:"right"},i().createElement("span",null,f?{buttonText:f}:"Get started"))))};f.propTypes={appName:g().string,className:g().string,icon:g().any,title:g().string,body:g().string,url:g().string,buttonText:g().string};const b=t.p+"fonts/Icon-Red_Hat-Software_and_technologies-App_Secured-A-Red-RGB.svg";var C=t(20333);const h=t.p+"fonts/Icon-Red_Hat-Software_and_Technologies-Automation-A-Red-RGB.svg";var k=t(30893),v=t(86896),B=function(e){var a=e.supportsSap,t=(0,c.useContext)(C.B),s=(0,v.Z)();return!t.hasSystems||!a||t.remediations&&t.compliance?"":i().createElement(o.NP,{isWidthLimited:!0,className:"ins-c-dashboard-footer pf-u-pt-lg",variant:o.Dk.light},i().createElement(p.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsXl"}},i().createElement(n.D,{headingLevel:"h2",size:"xl"},s.formatMessage(k.Z.footerTitle)),i().createElement("div",{className:"ins-l-columns ins-m-3-col-on-xl"},!t.compliance&&i().createElement(f,{appName:"compliance",title:s.formatMessage(k.Z.complianceAppBlockHeader),body:s.formatMessage(k.Z.complianceAppBlockBody),url:"".concat(A.Pu,"/compliance/reports"),icon:i().createElement("img",{src:b,alt:"Insights Remediation Icon"})}),!t.remediations&&i().createElement(f,{appName:"remediation",title:s.formatMessage(k.Z.remediationsAppBlockHeader),body:s.formatMessage(k.Z.remediationsAppBlockBody),url:"".concat(A.Pu,"/remediations/"),icon:i().createElement("img",{src:h,alt:"Insights Remediation Icon"})}))))};B.propTypes={supportsSap:g().bool};const _=B},77012:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});var o=t(94015),n=t.n(o),c=t(23645),i=t.n(c)()(n());i.push([e.id,".dashboard .ins-c-app-block{display:grid;grid-template-columns:[icon] max-content [text] auto;align-self:start;gap:var(--pf-global--gutter--md)}.dashboard .ins-c-app-block>*{grid-column:text}.dashboard .ins-c-app-block .pf-c-button__icon{--pf-c-button__icon--m-end--MarginLeft: var(--pf-global--spacer--md);color:var(--pf-global--link--Color)}.dashboard .ins-c-app-block__icon{display:flex;align-content:center;justify-content:center;grid-area:icon;grid-row:1 / 3;width:3.75rem;height:3.75rem;border-radius:50%;background:var(--pf-global--BackgroundColor--200)}.dashboard .ins-c-app-block__icon>svg{font-size:var(--pf-global--icon--FontSize--lg);align-self:center}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/Template/AppBlockTemplate.scss"],names:[],mappings:"AAAA,4BACiB,YAAY,CAAC,oDAAoD,CAAC,gBAAgB,CAAC,gCAAgC,CADpI,8BACwJ,gBAAgB,CADxK,+CAC6M,oEAAuC,CAA8B,mCAAmC,CADrT,kCAC6U,YAAY,CAAC,oBAAoB,CAAC,sBAAsB,CAAC,cAAc,CAAC,cAAc,CAAC,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,iDAAiD,CADpgB,sCACgiB,8CAA8C,CAAC,iBAAiB",sourcesContent:[".dashboard{\n.ins-c-app-block{display:grid;grid-template-columns:[icon] max-content [text] auto;align-self:start;gap:var(--pf-global--gutter--md)}.ins-c-app-block>*{grid-column:text}.ins-c-app-block .pf-c-button__icon{--pf-c-button__icon--m-end--MarginLeft: var(--pf-global--spacer--md);color:var(--pf-global--link--Color)}.ins-c-app-block__icon{display:flex;align-content:center;justify-content:center;grid-area:icon;grid-row:1 / 3;width:3.75rem;height:3.75rem;border-radius:50%;background:var(--pf-global--BackgroundColor--200)}.ins-c-app-block__icon>svg{font-size:var(--pf-global--icon--FontSize--lg);align-self:center}\n\n}"],sourceRoot:""}]);const s=i},39900:(e,a,t)=>{"use strict";var o=t(93379),n=t.n(o),c=t(77012),i=n()(c.default,{insert:"head",singleton:!1});if(!c.default.locals||e.hot.invalidate){var s=c.default.locals;e.hot.accept(77012,(a=>{c=t(77012),function(e,a,t){if(!e&&a||e&&!a)return!1;var o;for(o in e)if(e[o]!==a[o])return!1;for(o in a)if(!e[o])return!1;return!0}(s,c.default.locals)?(s=c.default.locals,i(c.default)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),c.default.locals}}]);
//# sourceMappingURL=../sourcemaps/4358.b40bf7574ef961b5b21f.js.map