(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[286],{80708:(e,t,a)=>{"use strict";a.d(t,{m:()=>s});var l=a(70655),n=a(93264),i=a(38296),r=a(19778);const s=e=>{var{className:t="",children:a=null,id:s="",isHidden:o=!1,"aria-label":c,hasNoPadding:m=!1,rowid:d=""}=e,p=(0,l._T)(e,["className","children","id","isHidden","aria-label","hasNoPadding","rowid"]);return n.createElement("section",Object.assign({id:s,className:(0,i.i)(r.Z.dataListExpandableContent,t),hidden:o,"aria-label":c},p),n.createElement("div",{className:(0,i.i)(r.Z.dataListExpandableContentBody,m&&r.Z.modifiers.noPadding)},a))};s.displayName="DataListContent"},91921:(e,t,a)=>{"use strict";a.d(t,{o:()=>c});var l=a(70655),n=a(93264),i=a(38296),r=a(16975),s=a(80164);const o=e=>{const t="--pf-c-description-list--GridTemplateColumns--min",a=e;return Object.keys(a||{}).reduce(((e,l)=>"default"===l?Object.assign(Object.assign({},e),{[t]:a[l]}):Object.assign(Object.assign({},e),{[`${t}-on-${l}`]:a[l]})),{})},c=e=>{var{className:t="",children:a=null,isHorizontal:c=!1,isAutoColumnWidths:m,isAutoFit:d,isInlineGrid:p,columnModifier:f,autoFitMinModifier:u,orientation:g,style:h}=e,b=(0,l._T)(e,["className","children","isHorizontal","isAutoColumnWidths","isAutoFit","isInlineGrid","columnModifier","autoFitMinModifier","orientation","style"]);return n.createElement("dl",Object.assign({className:(0,i.i)(r.Z.descriptionList,c&&r.Z.modifiers.horizontal,m&&r.Z.modifiers.autoColumnWidths,d&&r.Z.modifiers.autoFit,(0,s.wt)(f,r.Z),(0,s.wt)(g,r.Z),p&&r.Z.modifiers.inlineGrid,t),style:u||h?Object.assign(Object.assign({},d?o(u):{}),h):void 0},b),a)};c.displayName="DescriptionList"},3025:(e,t,a)=>{"use strict";a.d(t,{b:()=>s});var l=a(70655),n=a(93264),i=a(16975),r=a(38296);const s=e=>{var{children:t=null,className:a}=e,s=(0,l._T)(e,["children","className"]);return n.createElement("dd",Object.assign({className:(0,r.i)(i.Z.descriptionListDescription,a)},s),n.createElement("div",{className:"pf-c-description-list__text"},t))};s.displayName="DescriptionListDescription"},58844:(e,t,a)=>{"use strict";a.d(t,{g:()=>r});var l=a(93264),n=a(16975),i=a(38296);const r=({className:e,children:t})=>l.createElement("div",{className:(0,i.i)(n.Z.descriptionListGroup,e)},t);r.displayName="DescriptionListGroup"},10550:(e,t,a)=>{"use strict";a.d(t,{M:()=>s});var l=a(70655),n=a(93264),i=a(16975),r=a(38296);const s=e=>{var{children:t,className:a}=e,s=(0,l._T)(e,["children","className"]);return n.createElement("dt",Object.assign({className:(0,r.i)(i.Z.descriptionListTerm,a)},s),n.createElement("span",{className:(0,r.i)(i.Z.descriptionListText)},t))};s.displayName="DescriptionListTerm"},69174:(e,t,a)=>{"use strict";a.d(t,{_:()=>u});var l=a(70655),n=a(93264),i=a(69870),r=a(46018),s=a(44059),o=a(47173),c=a(35224),m=a(38296),d=a(24307),p=a(6551);const f={blue:i.Z.modifiers.blue,cyan:i.Z.modifiers.cyan,green:i.Z.modifiers.green,orange:i.Z.modifiers.orange,purple:i.Z.modifiers.purple,red:i.Z.modifiers.red,grey:""},u=e=>{var{children:t,className:a="",color:u="grey",variant:g="filled",isEditable:h=!1,editableProps:b,isTruncated:E=!1,tooltipPosition:v,icon:x,onClose:w,onEditCancel:y,onEditComplete:_,closeBtn:C,closeBtnProps:L,href:N,isOverflowLabel:T,render:Z}=e,k=(0,l._T)(e,["children","className","color","variant","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnProps","href","isOverflowLabel","render"]);const[I,O]=(0,n.useState)(!1),M=n.createRef();n.useEffect((()=>(document.addEventListener("click",D),document.addEventListener("keydown",S),()=>{document.removeEventListener("click",D),document.removeEventListener("keydown",S)})));const D=e=>{I&&M&&M.current&&!M.current.contains(e.target)&&(_&&_(M.current.textContent),O(!1))},S=e=>{const a=e.key;if(M&&M.current&&M.current.contains(e.target)&&(!I||"Enter"!==a&&"Tab"!==a||(e.preventDefault(),e.stopImmediatePropagation(),_&&_(M.current.textContent),O(!1)),I&&"Escape"===a&&(e.preventDefault(),e.stopImmediatePropagation(),M.current.textContent=t,y&&y(t),O(!1)),!I&&"Enter"===a)){e.preventDefault(),e.stopImmediatePropagation(),O(!0);const t=e.target,a=document.createRange(),l=window.getSelection();a.selectNodeContents(t),a.collapse(!1),l.removeAllRanges(),l.addRange(a)}},z=T?"button":"span",A=N?"a":"span",P=C||n.createElement(o.zx,Object.assign({type:"button",variant:"plain",onClick:w},Object.assign({"aria-label":"label-close-button"},L)),n.createElement(d.ZP,null)),G=n.createRef(),j=n.useRef(),[W,R]=n.useState(!1);(0,p.L)((()=>{R(G.current&&G.current.offsetWidth<G.current.scrollWidth)}),[]);let B=n.createElement(n.Fragment,null,x&&n.createElement("span",{className:(0,m.i)(i.Z.labelIcon)},x),E&&n.createElement("span",{ref:G,className:(0,m.i)(i.Z.labelText)},t),!E&&t);h&&(B=n.createElement(n.Fragment,null,n.createElement("div",{className:(0,m.i)(s.Z.inlineEdit)},n.createElement("div",Object.assign({tabIndex:0,ref:M,className:(0,m.i)(s.Z.inlineEditEditableText),role:"textbox"},I&&{contentEditable:!0},{suppressContentEditableWarning:!0},b),t))));let F=n.createElement(A,Object.assign({className:(0,m.i)(i.Z.labelContent)},N&&{href:N}),B);return Z?F=n.createElement(n.Fragment,null,W&&n.createElement(c.u,{reference:j,content:t,position:v}),Z({className:i.Z.labelContent,content:B,componentRef:j})):W&&(F=n.createElement(c.u,{content:t,position:v},n.createElement(A,Object.assign({className:(0,m.i)(i.Z.labelContent)},N&&{href:N}),B))),n.createElement(z,Object.assign({},k,{className:(0,m.i)(i.Z.label,f[u],"outline"===g&&i.Z.modifiers.outline,T&&i.Z.modifiers.overflow,h&&r.Z.modifiers.editable,I&&i.Z.modifiers.editableActive,a)},h&&{onClick:e=>{null===e.target.closest("button")&&(O(!0),M.current.focus())}}),F,w&&P)};u.displayName="Label"},64403:(e,t,a)=>{"use strict";a.d(t,{ZB:()=>l,XB:()=>n,L1:()=>i,TM:()=>r,$4:()=>s,yu:()=>o});const l=a(93264).createContext(null),n=l.Provider,i=l.Consumer;var r,s;!function(e){e.single="single",e.checkbox="checkbox",e.typeahead="typeahead",e.typeaheadMulti="typeaheadmulti"}(r||(r={})),function(e){e.up="up",e.down="down"}(s||(s={}));const o={Tab:"Tab",Space:" ",Escape:"Escape",Enter:"Enter",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"}},24307:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>l});const l=(0,a(40400).IU)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},16975:(e,t,a)=>{"use strict";a(27567),t.Z={descriptionList:"pf-c-description-list",descriptionListDescription:"pf-c-description-list__description",descriptionListGroup:"pf-c-description-list__group",descriptionListTerm:"pf-c-description-list__term",descriptionListText:"pf-c-description-list__text",modifiers:{inlineGrid:"pf-m-inline-grid",autoColumnWidths:"pf-m-auto-column-widths",autoFit:"pf-m-auto-fit",compact:"pf-m-compact",fluid:"pf-m-fluid",helpText:"pf-m-help-text","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col",horizontal:"pf-m-horizontal",vertical:"pf-m-vertical","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm",horizontalOnSm:"pf-m-horizontal-on-sm",verticalOnSm:"pf-m-vertical-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md",horizontalOnMd:"pf-m-horizontal-on-md",verticalOnMd:"pf-m-vertical-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg",horizontalOnLg:"pf-m-horizontal-on-lg",verticalOnLg:"pf-m-vertical-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl",horizontalOnXl:"pf-m-horizontal-on-xl",verticalOnXl:"pf-m-vertical-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",verticalOn_2xl:"pf-m-vertical-on-2xl"}}},44059:(e,t,a)=>{"use strict";a(21626),t.Z={button:"pf-c-button",inlineEdit:"pf-c-inline-edit",inlineEditAction:"pf-c-inline-edit__action",inlineEditEditableText:"pf-c-inline-edit__editable-text",inlineEditGroup:"pf-c-inline-edit__group",inlineEditInput:"pf-c-inline-edit__input",inlineEditLabel:"pf-c-inline-edit__label",inlineEditValue:"pf-c-inline-edit__value",modifiers:{iconGroup:"pf-m-icon-group",footer:"pf-m-footer",column:"pf-m-column",valid:"pf-m-valid",plain:"pf-m-plain",actionGroup:"pf-m-action-group",enableEditable:"pf-m-enable-editable",inlineEditable:"pf-m-inline-editable",enable:"pf-m-enable",bold:"pf-m-bold"}}},69870:(e,t,a)=>{"use strict";a(82014),t.Z={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",outline:"pf-m-outline",overflow:"pf-m-overflow",editableActive:"pf-m-editable-active"}}},46018:(e,t,a)=>{"use strict";a(21064),t.Z={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},33818:(e,t,a)=>{"use strict";a.d(t,{u:()=>p});var l=a(45987),n=a(10310),i=a(80469),r=a(28738),s=a(93264),o=a.n(s),c=a(45697),m=a.n(c),d=["index"],p=function(e){var t=e.ariaDesc,a=e.ariaTitle,s=e.constrainToVisibleArea,c=e.data,m=e.legendData,p=e.padding,f=e.height,u=e.width,g=e.legendOrientation,h=e.colorScale,b=e.legend,E=e.legendWidth,v=e.legendHeight,x=e.legendClick,w=function(e){var t=e.index,i=(0,l.Z)(e,d);return o().createElement("a",{id:"".concat(a.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:x[t],className:"pf-c-button pf-m-link pf-m-inline"},o().createElement(n.Df,i))};return o().createElement("div",{className:"insd-c-pie-chart__row"},o().createElement("div",{style:{width:u,height:f,position:"relative"}},o().createElement(r.Td,{ariaDesc:t,ariaTitle:a,constrainToVisibleArea:s,data:c,height:f,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:p,width:u,colorScale:h}),o().createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a+" data"},o().createElement("tbody",null,c.map((function(e,t){return[o().createElement("tr",{key:t},o().createElement("td",null,e.y),o().createElement("td",null,e.x))]}))))),b&&o().createElement("div",{className:"insd-c-pie-chart__legend","aria-label":"Chart legend",style:{width:E,height:v}},o().createElement(i.Qk,{height:v,width:E,fontSize:14,data:m,rowGutter:{top:-5,bottom:-5},orientation:g,labelComponent:x&&o().createElement(w,null)})))};p.propTypes={ariaDesc:m().string,ariaTitle:m().string,constrainToVisibleArea:m().bool,data:m().array,legendData:m().array,padding:m().object,height:m().number,width:m().number,legendOrientation:m().string,colorScale:m().array,legend:m().bool,legendWidth:m().number,legendHeight:m().number,legendClick:m().any}},90851:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var l=a(29439),n=a(31765),i=a(61282),r=a(81217),s=a(14087),o=a(27511),c=a(47173),m=a(60485),d=a(68774),p=a(91921),f=a(58844),u=a(10550),g=a(3025),h=a(28191),b=a(92298),E=a(93264),v=a.n(E),x=a(93174),w=a(87462),y=a(45987),_=a(69174),C=a(80708),L=a(45697),N=a.n(L),T=function(e){var t=e.type;return v().createElement(v().Fragment,null,"lowSeverity"===t&&v().createElement("svg",{version:"1.1",xmlnsCc:"http://creativecommons.org/ns#",xmlnsDc:"http://purl.org/dc/elements/1.1/",xmlnsRdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",xmlnsSvg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",fill:"currentColor",height:"1em",width:"1em",viewBox:"0 0 320 512","aria-hidden":"true",role:"img"},v().createElement("path",{d:"M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"})),"moderateSeverity"===t&&v().createElement("svg",{version:"1.1",xmlnsCc:"http://creativecommons.org/ns#",xmlnsDc:"http://purl.org/dc/elements/1.1/",xmlnsRdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",xmlnsSvg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",fill:"currentColor",height:"1em",width:"1em",viewBox:"0 0 448 512","aria-hidden":"true",role:"img"},v().createElement("path",{d:"M416 304H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32zm0-192H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})),"importantSeverity"===t&&v().createElement("svg",{version:"1.1",xmlnsCc:"http://creativecommons.org/ns#",xmlnsDc:"http://purl.org/dc/elements/1.1/",xmlnsRdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",xmlnsSvg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",fill:"currentColor",height:"1em",width:"1em",viewBox:"0 0 320 512","aria-hidden":"true",role:"img"},v().createElement("path",{d:"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"})),"criticalSeverity"===t&&v().createElement("svg",{version:"1.1",xmlnsCc:"http://creativecommons.org/ns#",xmlnsDc:"http://purl.org/dc/elements/1.1/",xmlnsRdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",xmlnsSvg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",fill:"currentColor",height:"1em",width:".8em",viewBox:"0 0 10 10","aria-hidden":"true",role:"img"},v().createElement("polygon",{points:"10 10, 10 3, 5 0, 0 3, 0 10, 5 8"})))};T.propTypes={type:N().string};const Z=T;var k=a(90238),I=a(98756),O=a(30893),M=a(86896),D=["dataListItemTemplateContent","dataListItemTemplateDate","dataListItemTemplateSeverity","dataListItemTemplateKey","dataListItemTemplateName","dataListItemTemplateIsExpanded"],S=function(e){var t=e.dataListItemTemplateContent,a=e.dataListItemTemplateDate,n=e.dataListItemTemplateSeverity,d=e.dataListItemTemplateKey,p=e.dataListItemTemplateName,f=e.dataListItemTemplateIsExpanded,u=(0,y.Z)(e,D),g=(0,E.useState)(f),b=(0,l.Z)(g,2),L=b[0],N=b[1],T=(0,M.Z)();return v().createElement(i.L,(0,w.Z)({"aria-labelledby":"itemDescription-".concat(d),isExpanded:L,className:"insd-c-dashboard__list-item",key:d},u),v().createElement(r.V,{className:"insd-c-dashboard-data-list__controller-row"},v().createElement("div",{className:"pf-c-data-list__item-control"},v().createElement("div",{className:"pf-c-data-list__toggle",onClick:function(){return N(!L)},isExpanded:L,id:"data-list-toggle-".concat(p),"aria-controls":"data-list-item-".concat(p)},v().createElement(c.zx,{id:"data-list-item-".concat(p,"-toggle"),variant:c.Wu.plain,"aria-expanded":L,type:"button",className:"pf-m-link"},v().createElement("span",{className:"pf-c-data-list__toggle-text pf-c-button pf-m-inline pf-m-link"},L&&T.formatMessage(O.Z.collapse),!L&&T.formatMessage(O.Z.expand)),v().createElement("div",{className:"pf-c-data-list__toggle-icon"},v().createElement(x.ZP,null))))),v().createElement(s.p,{dataListCells:[v().createElement(o.K,{key:"key-".concat(d,"-datalist-cell"),className:"insd-c-dashboard-data-list__controller-row-cell"},v().createElement("div",{className:"insd-c-new-rules-severities"},v().createElement(h.k,{alignItems:{default:"alignItemsCenter"},alignSelf:{default:"alignSelfStretch"}},1===n&&v().createElement(_._,{icon:v().createElement(Z,{type:"lowSeverity"})},(0,I.kC)(T.formatMessage(O.Z.low))),2===n&&v().createElement(_._,{color:"blue",icon:v().createElement(Z,{type:"moderateSeverity"})},(0,I.kC)(T.formatMessage(O.Z.moderate))),3===n&&v().createElement(_._,{color:"orange",icon:v().createElement(Z,{type:"importantSeverity"})},(0,I.kC)(T.formatMessage(O.Z.important))),4===n&&v().createElement(_._,{color:"red",icon:v().createElement(Z,{type:"criticalSeverity"})},(0,I.kC)(T.formatMessage(O.Z.critical))))),v().createElement("span",{className:"insd-c-dashboard-data-list__date pf-u-color-200 pf-u-font-size-sm"},(0,I.kC)(T.formatMessage(O.Z.newRulesDateTitle))," ",v().createElement(k.DateFormat,{type:"onlyDate",date:a})),v().createElement(m.D,{headingLevel:"h4",size:"md",className:"pf-u-font-weight-light insd-c-title-toggle",id:"itemDescription-".concat(d)},v().createElement("span",null,(0,I.kC)(T.formatMessage({id:"itemTitle",description:"itemTitle",defaultMessage:p})))))]})),v().createElement(C.m,{"aria-label":"Primary Content Details",id:"ex-expand1",isHidden:!L},t))};S.propTypes={dataListItemTemplateContent:N().any,dataListItemTemplateDate:N().string,dataListItemTemplateSeverity:N().number,dataListItemTemplateKey:N().any,dataListItemTemplateName:N().string,dataListItemTemplateIsExpanded:N().bool,children:N().any};var z=a(69957),A=a(33818),P=a(59303),G=a(28216);const j=function(){var e=(0,M.Z)(),t=(0,E.useState)(JSON.parse(localStorage.getItem("dashboard_expanded_cta")||"true")),a=(0,l.Z)(t,2),w=a[0],y=a[1],_=(0,G.v9)((function(e){return e.DashboardStore.vulnerabilities})),C=_.recent_rules,L={1:["#2b9af3","#06c"],2:["#f4c145","#c58c00"],3:["#ec7a08","#8f4700"],4:["#c9190b","#470000"]},N={bottom:0,left:0,right:0,top:0};return v().createElement(n.FR,{className:"insd-c-dashboard-data-list insd-m-toggle-right-on-md insd-m-no-border pf-m-compact",gridBreakpoint:"none"},v().createElement(i.L,{"aria-labelledby":"collapse-all-text",isExpanded:w},v().createElement(r.V,{className:"insd-c-dashboard-data-list__title-row"},v().createElement(s.p,{dataListCells:[v().createElement(o.K,{key:"primary content"},v().createElement(h.k,{spaceItems:{default:"spaceItemsMd"},alignItems:{default:"alignItemsCenter"},flexWrap:{default:"nowrap"}},v().createElement(z.ZP,{className:"pf-u-font-size-xl pf-u-warning-color-100"}),v().createElement("span",{id:"collapse-all-text",className:"pf-u-font-weight-bold"},e.formatMessage(O.Z.latestCritical))))]}),v().createElement("div",{className:"pf-c-data-list__item-control"},v().createElement("div",{className:"pf-c-data-list__toggle",onClick:function(){localStorage.setItem("dashboard_expanded_cta","".concat(!w)),y(!w)},isExpanded:w,id:"data-list-toggle","aria-controls":"data-list-item"},v().createElement(c.zx,{id:"data-list-item-toggle",variant:c.Wu.plain,"aria-expanded":w,type:"button",className:"pf-m-link"},v().createElement("span",{className:"pf-c-data-list__toggle-text pf-c-button pf-m-inline pf-m-link"},w&&e.formatMessage(O.Z.collapseAll),!w&&e.formatMessage(O.Z.expand)),v().createElement("div",{className:"pf-c-data-list__toggle-icon"},v().createElement(x.ZP,null))))))),w&&(null==C?void 0:C.map((function(t,a){return v().createElement(S,{key:t.key,dataListItemTemplateKey:t.key,dataListItemTemplateName:t.name,dataListItemTemplateSeverity:t.severity,dataListItemTemplateDate:t.public_date,dataListItemTemplateContent:v().createElement(h.k,{direction:{default:"column",md:"row"},alignItems:{md:"alignItemsFlexStart"},spaceItems:{md:"spaceItems2xl"},flexWrap:{default:"nowrap"}},v().createElement(h.k,{direction:{default:"column"},flex:{md:"flex_3"}},v().createElement(b.B,{spacer:{default:"spacerXs"}},v().createElement(m.D,{headingLevel:"h4",size:"xl",className:"pf-u-font-weight-lights"},v().createElement("span",null,(0,I.kC)(e.formatMessage({id:"itemTitle",description:"itemTitle",defaultMessage:t.name}))))),v().createElement(d.D,{className:"insd-c-width-limiter",style:{"--insd-c-width-limiter--MaxWidth-on-lg":"50ch","--insd-c-width-limiter--MinWidth-on-lg":"50ch","--insd-c-width-limiter--MaxWidth-on-2xl":"70ch","--insd-c-width-limiter--MinWidth-on-2xl":"70ch"}},v().createElement("div",null,(0,I.kC)(e.formatMessage({id:"itemDescription-".concat(a),description:"itemDescription-".concat(a),defaultMessage:t.description})))),v().createElement(p.o,null,v().createElement(f.g,null,v().createElement(u.M,null,"Associated CVEs"),t.associated_cves.map((function(e){return v().createElement(g.b,{key:e.key},v().createElement("a",{href:"".concat(P.Pu,"/vulnerability/cves/").concat(e)},e))})))),v().createElement(h.k,{flex:{md:"flex_1",xl:"flexDefault"}},v().createElement(c.zx,{type:"a",href:"".concat(P.Pu,"/vulnerability/cves/").concat(t.associated_cves[0]),component:"a",variant:"secondary",isSmall:!0},e.formatMessage(O.Z.viewDetails)),t.node_id&&v().createElement("a",{href:"https://access.redhat.com/node/".concat(t.node_id),rel:"noreferrer",target:"_blank"},e.formatMessage(O.Z.moreAbout)))),v().createElement(h.k,{flex:{default:"flex_2"},alignItems:{default:"alignItemsCenter"}},v().createElement(h.k,{alignItems:{default:"alignItemsCenter"},flexWrap:{default:"nowrap"}},v().createElement(b.B,null,v().createElement(A.u,{ariaDesc:"--",ariaTitle:"--",data:[{x:"Total systems",y:_.system_count},{x:"Systems affected",y:t.systems_affected}],labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},padding:N,height:80,width:80,colorScale:L[t.severity]})),v().createElement(h.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"}},v().createElement("div",{className:"pf-u-font-size-2xl"},t.systems_affected),v().createElement("div",null,e.formatMessage(O.Z.systemsExposed))))))})}))))}},45467:()=>{},18192:()=>{},23055:()=>{},27567:()=>{},21626:()=>{},21064:()=>{},82014:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/286.619a1fcaad52d6ca19e0214cf6696501.js.map