"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[224],{35224:(e,t,n)=>{n.d(t,{u:()=>m,D:()=>f});var o=n(70655),r=n(93264),i=n(16356),s=n(38296);const a=e=>{var{className:t,children:n,isLeftAligned:a}=e,c=(0,o._T)(e,["className","children","isLeftAligned"]);return r.createElement("div",Object.assign({className:(0,s.i)(i.Z.tooltipContent,a&&i.Z.modifiers.textAlignLeft,t)},c),n)};a.displayName="TooltipContent";const c=e=>{var{className:t}=e,n=(0,o._T)(e,["className"]);return r.createElement("div",Object.assign({className:(0,s.i)(i.Z.tooltipArrow,t)},n))};c.displayName="TooltipArrow";var p=n(64190);const l={name:"--pf-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-c-tooltip--MaxWidth)"};var f,u=n(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right"}(f||(f={}));let d=1;const m=e=>{var{content:t,position:n="top",trigger:f="mouseenter focus",isVisible:m=!1,isContentLeftAligned:h=!1,enableFlip:b=!0,className:g="",entryDelay:y=300,exitDelay:x=0,appendTo:O=(()=>document.body),zIndex:w=9999,maxWidth:v=l.value,distance:E=15,aria:j="describedby",flipBehavior:M=["top","right","bottom","left","top","right","bottom"],id:D="pf-tooltip-"+d++,children:k,animationDuration:L=300,reference:T,boundary:N,isAppLauncher:P,tippyProps:W}=e,A=(0,o._T)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","reference","boundary","isAppLauncher","tippyProps"]);const C=f.includes("mouseenter"),B=f.includes("focus"),S=f.includes("click"),R="manual"===f,[F,$]=r.useState(!1),[q,H]=r.useState(0),_=r.useRef(null),U=r.useRef(null),I=r.useRef(null),V=e=>{e.forEach((e=>{e.current&&clearTimeout(e.current)}))};r.useEffect((()=>()=>{V([_,I,U])}),[]),r.useEffect((()=>{m?z():Z()}),[m]);const z=()=>{V([_,I]),U.current=setTimeout((()=>{$(!0),H(1)}),y)},Z=()=>{V([U]),I.current=setTimeout((()=>{H(0),_.current=setTimeout((()=>$(!1)),L)}),x)},K={top:i.Z.modifiers.top,bottom:i.Z.modifiers.bottom,left:i.Z.modifiers.left,right:i.Z.modifiers.right},Y=v!==l.value,J=r.createElement("div",Object.assign({className:(0,s.i)(i.Z.tooltip,g),role:"tooltip",id:D,style:{maxWidth:Y?v:null,opacity:q,transition:(0,u.K)(L)}},A),r.createElement(c,null),r.createElement(a,{isLeftAligned:h},t));return r.createElement(u.r,{trigger:"none"!==j&&F?"describedby"===j&&k&&k.props&&!k.props["aria-describedby"]?r.cloneElement(k,{"aria-describedby":D}):"labelledby"===j&&k.props&&!k.props["aria-labelledby"]?r.cloneElement(k,{"aria-labelledby":D}):k:k,reference:T,popper:J,popperMatchesTriggerWidth:!1,appendTo:O,isVisible:F,positionModifiers:K,distance:E,placement:n,onMouseEnter:C&&z,onMouseLeave:C&&Z,onFocus:B&&z,onBlur:B&&Z,onDocumentClick:S&&((e,t)=>{F?Z():e.target===t&&z()}),onDocumentKeyDown:R?null:e=>{R||e.keyCode===p.nx.ESCAPE_KEY&&F&&Z()},onTriggerEnter:R?null:e=>{e.keyCode===p.nx.ENTER&&(F?Z():z())},enableFlip:b,zIndex:w,flipBehavior:M})};m.displayName="Tooltip"},11801:(e,t,n)=>{n.d(t,{L:()=>i});var o=n(93264),r=n(3644);class i extends o.Component{componentDidMount(){const e=r.findDOMNode(this);this.props.onFoundRef(e)}render(){return this.props.children||null}}i.displayName="FindRefWrapper"},69121:(e,t,n)=>{n.d(t,{r:()=>he,K:()=>me});var o=n(93264),r=n(3644),i=n(11801);function s(e){const t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function a(e){if("[object Window]"!==e.toString()){const t=e.ownerDocument;return t?t.defaultView:window}return e}function c(e){const t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function p(e){return e instanceof a(e).Element||e instanceof Element}function l(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function f(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return(p(e)?e.ownerDocument:e.document).documentElement}function d(e){return s(u(e)).left+c(e).scrollLeft}function m(e){return a(e).getComputedStyle(e)}function h(e){const{overflow:t,overflowX:n,overflowY:o}=m(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function b(e,t,n=!1){const o=u(t),r=s(e),i=l(t);let p={scrollLeft:0,scrollTop:0},m={x:0,y:0};var b,g;return(i||!i&&!n)&&(("body"!==f(t)||h(o))&&(p=(b=t)!==a(b)&&l(b)?{scrollLeft:(g=b).scrollLeft,scrollTop:g.scrollTop}:c(b)),l(t)?(m=s(t),m.x+=t.clientLeft,m.y+=t.clientTop):o&&(m.x=d(o))),{x:r.left+p.scrollLeft-m.x,y:r.top+p.scrollTop-m.y,width:r.width,height:r.height}}function g(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function y(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||e.host||u(e)}function x(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:l(e)&&h(e)?e:x(y(e))}function O(e,t=[]){const n=x(e),o="body"===f(n),r=a(n),i=o?[r].concat(r.visualViewport||[],h(n)?n:[]):n,s=t.concat(i);return o?s:s.concat(O(y(i)))}function w(e){return["table","td","th"].indexOf(f(e))>=0}function v(e){if(!l(e)||"fixed"===m(e).position)return null;const t=e.offsetParent;if(t){const e=u(t);if("body"===f(t)&&"static"===m(t).position&&"static"!==m(e).position)return e}return t}function E(e){const t=a(e);let n=v(e);for(;n&&w(n)&&"static"===m(n).position;)n=v(n);return n&&"body"===f(n)&&"static"===m(n).position?t:n||function(e){let t=y(e);for(;l(t)&&["html","body"].indexOf(f(t))<0;){const e=m(t);if("none"!==e.transform||"none"!==e.perspective||e.willChange&&"auto"!==e.willChange)return t;t=t.parentNode}return null}(e)||t}const j="top",M="bottom",D="right",k="left",L="auto",T=[j,M,D,k],N="start",P="clippingParents",W="viewport",A="popper",C=T.reduce(((e,t)=>e.concat([`${t}-start`,`${t}-end`])),[]),B=[...T,L].reduce(((e,t)=>e.concat([t,`${t}-start`,`${t}-end`])),[]),S=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function R(e){const t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[...e.requires||[],...e.requiresIfExists||[]].forEach((e=>{if(!n.has(e)){const n=t.get(e);n&&r(n)}})),o.push(e)}return e.forEach((e=>{t.set(e.name,e)})),e.forEach((e=>{n.has(e.name)||r(e)})),o}function F(e){let t;return()=>(t||(t=new Promise((n=>{Promise.resolve().then((()=>{t=void 0,n(e())}))}))),t)}const $={placement:"bottom",modifiers:[],strategy:"absolute"};function q(...e){return!e.some((e=>!(e&&"function"==typeof e.getBoundingClientRect)))}function H(e={}){const{defaultModifiers:t=[],defaultOptions:n=$}=e;return function(e,o,r=n){let i={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},$),n),modifiersData:{},elements:{reference:e,popper:o},attributes:{},styles:{}},s=[],a=!1;const c={state:i,setOptions(r){l(),i.options=Object.assign(Object.assign(Object.assign({},n),i.options),r),i.scrollParents={reference:p(e)?O(e):e.contextElement?O(e.contextElement):[],popper:O(o)};const a=function(e){const t=R(e);return S.reduce(((e,n)=>e.concat(t.filter((e=>e.phase===n)))),[])}(function(e){const t=e.reduce(((e,t)=>{const n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((e=>t[e]))}([...t,...i.options.modifiers]));return i.orderedModifiers=a.filter((e=>e.enabled)),i.orderedModifiers.forEach((({name:e,options:t={},effect:n})=>{if("function"==typeof n){const o=n({state:i,name:e,instance:c,options:t}),r=()=>{};s.push(o||r)}})),c.update()},forceUpdate(){if(a)return;const{reference:e,popper:t}=i.elements;if(q(e,t)){i.rects={reference:b(e,E(t),"fixed"===i.options.strategy),popper:g(t)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((e=>i.modifiersData[e.name]=Object.assign({},e.data)));for(let e=0;e<i.orderedModifiers.length;e++){if(!0===i.reset){i.reset=!1,e=-1;continue}const{fn:t,options:n={},name:o}=i.orderedModifiers[e];"function"==typeof t&&(i=t({state:i,options:n,name:o,instance:c})||i)}}},update:F((()=>new Promise((e=>{c.forceUpdate(),e(i)})))),destroy(){l(),a=!0}};if(!q(e,o))return c;function l(){s.forEach((e=>e())),s=[]}return c.setOptions(r).then((e=>{!a&&r.onFirstUpdate&&r.onFirstUpdate(e)})),c}}H();const _={passive:!0};function U(e){return e.split("-")[0]}function I(e){return e.split("-")[1]}function V(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z({reference:e,element:t,placement:n}){const o=n?U(n):null,r=n?I(n):null,i=e.x+e.width/2-t.width/2,s=e.y+e.height/2-t.height/2;let a;switch(o){case j:a={x:i,y:e.y-t.height};break;case M:a={x:i,y:e.y+e.height};break;case D:a={x:e.x+e.width,y:s};break;case k:a={x:e.x-t.width,y:s};break;default:a={x:e.x,y:e.y}}const c=o?V(o):null;if(null!=c){const n="y"===c?"height":"width";switch(r){case N:a[c]=Math.floor(a[c])-Math.floor(e[n]/2-t[n]/2);break;case"end":a[c]=Math.floor(a[c])+Math.ceil(e[n]/2-t[n]/2)}}return a}const Z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K({popper:e,popperRect:t,placement:n,offsets:o,position:r,gpuAcceleration:i,adaptive:s}){let{x:c,y:p}=function({x:e,y:t}){const n=window.devicePixelRatio||1;return{x:Math.round(e*n)/n||0,y:Math.round(t*n)/n||0}}(o);const l=o.hasOwnProperty("x"),f=o.hasOwnProperty("y");let d=k,m=j;const h=window;if(s){let o=E(e);o===a(e)&&(o=u(e)),n===j&&(m=M,p-=o.clientHeight-t.height,p*=i?1:-1),n===k&&(d=D,c-=o.clientWidth-t.width,c*=i?1:-1)}const b=Object.assign({position:r},s&&Z);return i?Object.assign(Object.assign({},b),{[m]:f?"0":"",[d]:l?"0":"",transform:(h.devicePixelRatio||1)<2?`translate(${c}px, ${p}px)`:`translate3d(${c}px, ${p}px, 0)`}):Object.assign(Object.assign({},b),{[m]:f?`${p}px`:"",[d]:l?`${c}px`:"",transform:""})}const Y={left:"right",right:"left",bottom:"top",top:"bottom"};function J(e){return e.replace(/left|right|bottom|top/g,(e=>Y[e]))}const X={start:"end",end:"start"};function G(e){return e.replace(/start|end/g,(e=>X[e]))}function Q(e,t){const n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){let n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ee(e){return Object.assign(Object.assign({},e),{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===W?ee(function(e){const t=a(e),n=u(e),o=t.visualViewport;let r=n.clientWidth,i=n.clientHeight,s=0,c=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,c=o.offsetTop)),{width:r,height:i,x:s+d(e),y:c}}(e)):l(t)?function(e){const t=s(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){const t=u(e),n=c(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let s=-n.scrollLeft+d(e);const a=-n.scrollTop;return"rtl"===m(o||t).direction&&(s+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:s,y:a}}(u(e)))}function ne(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function oe(e,t){return t.reduce(((t,n)=>(t[n]=e,t)),{})}function re(e,t={}){const{placement:n=e.placement,boundary:o=P,rootBoundary:r=W,elementContext:i=A,altBoundary:a=!1,padding:c=0}=t,d=ne("number"!=typeof c?c:oe(c,T)),h=i===A?"reference":A,b=e.elements.reference,g=e.rects.popper,x=e.elements[a?h:i],w=function(e,t,n){const o="clippingParents"===t?function(e){const t=O(y(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&l(e)?E(e):e;return p(n)?t.filter((e=>p(e)&&Q(e,n)&&"body"!==f(e))):[]}(e):[].concat(t),r=[...o,n],i=r[0],s=r.reduce(((t,n)=>{const o=te(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),te(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(p(x)?x:x.contextElement||u(e.elements.popper),o,r),v=s(b),k=z({reference:v,element:g,strategy:"absolute",placement:n}),L=ee(Object.assign(Object.assign({},g),k)),N=i===A?L:v,C={top:w.top-N.top+d.top,bottom:N.bottom-w.bottom+d.bottom,left:w.left-N.left+d.left,right:N.right-w.right+d.right},B=e.modifiersData.offset;if(i===A&&B){const e=B[n];Object.keys(C).forEach((t=>{const n=[D,M].indexOf(t)>=0?1:-1,o=[j,M].indexOf(t)>=0?"y":"x";C[t]+=e[o]*n}))}return C}function ie(e,t,n){return Math.max(e,Math.min(t,n))}function se(e,t,n={x:0,y:0}){return{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[j,D,M,k].some((t=>e[t]>=0))}const ce=H({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:()=>{},effect:function({state:e,instance:t,options:n}){const{scroll:o=!0,resize:r=!0}=n,i=a(e.elements.popper),s=[...e.scrollParents.reference,...e.scrollParents.popper];return o&&s.forEach((e=>{e.addEventListener("scroll",t.update,_)})),r&&i.addEventListener("resize",t.update,_),()=>{o&&s.forEach((e=>{e.removeEventListener("scroll",t.update,_)})),r&&i.removeEventListener("resize",t.update,_)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function({state:e,name:t}){e.modifiersData[t]=z({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function({state:e,options:t}){const{gpuAcceleration:n=!0,adaptive:o=!0}=t,r={placement:U(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),K(Object.assign(Object.assign({},r),{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),K(Object.assign(Object.assign({},r),{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function({state:e}){Object.keys(e.elements).forEach((t=>{const n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];l(r)&&f(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((e=>{const t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function({state:e}){const t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),()=>{Object.keys(e.elements).forEach((n=>{const o=e.elements[n],r=e.attributes[n]||{},i=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]).reduce(((e,t)=>(e[t]="",e)),{});l(o)&&f(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((e=>{o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function({state:e,options:t,name:n}){const{offset:o=[0,0]}=t,r=B.reduce(((t,n)=>(t[n]=function(e,t,n){const o=U(e),r=[k,j].indexOf(o)>=0?-1:1;let[i,s]="function"==typeof n?n(Object.assign(Object.assign({},t),{placement:e})):n;return i=i||0,s=(s||0)*r,[k,D].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,e.rects,o),t)),{}),{x:i,y:s}=r[e.placement];null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=s),e.modifiersData[n]=r}},{name:"flip",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){if(e.modifiersData[n]._skip)return;const{mainAxis:o=!0,altAxis:r=!0,fallbackPlacements:i,padding:s,boundary:a,rootBoundary:c,altBoundary:p,flipVariations:l=!0,allowedAutoPlacements:f}=t,u=e.options.placement,d=U(u),m=[u,...i||(d!==u&&l?function(e){if(U(e)===L)return[];const t=J(e);return[G(e),t,G(t)]}(u):[J(u)])].reduce(((t,n)=>t.concat(U(n)===L?function(e,t={}){const{placement:n,boundary:o,rootBoundary:r,padding:i,flipVariations:s,allowedAutoPlacements:a=B}=t,c=I(n),p=c?s?C:C.filter((e=>I(e)===c)):T;let l=p.filter((e=>a.indexOf(e)>=0));0===l.length&&(l=p);const f=l.reduce(((t,n)=>(t[n]=re(e,{placement:n,boundary:o,rootBoundary:r,padding:i})[U(n)],t)),{});return Object.keys(f).sort(((e,t)=>f[e]-f[t]))}(e,{placement:n,boundary:a,rootBoundary:c,padding:s,flipVariations:l,allowedAutoPlacements:f}):n)),[]),h=e.rects.reference,b=e.rects.popper,g=new Map;let y=!0,x=m[0];for(let t=0;t<m.length;t++){const n=m[t],i=U(n),l=I(n)===N,f=[j,M].indexOf(i)>=0,u=f?"width":"height",d=re(e,{placement:n,boundary:a,rootBoundary:c,altBoundary:p,padding:s});let O=f?l?D:k:l?M:j;h[u]>b[u]&&(O=J(O));const w=J(O),v=[];if(o&&v.push(d[i]<=0),r&&v.push(d[O]<=0,d[w]<=0),v.every((e=>e))){x=n,y=!1;break}g.set(n,v)}if(y)for(let e=l?3:1;e>0;e--){const t=m.find((t=>{const n=g.get(t);if(n)return n.slice(0,e).every((e=>e))}));if(t){x=t;break}}e.placement!==x&&(e.modifiersData[n]._skip=!0,e.placement=x,e.reset=!0)},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){const{mainAxis:o=!0,altAxis:r=!1,boundary:i,rootBoundary:s,altBoundary:a,padding:c,tether:p=!0,tetherOffset:l=0}=t,f=re(e,{boundary:i,rootBoundary:s,padding:c,altBoundary:a}),u=U(e.placement),d=I(e.placement),m=!d,h=V(u),b="x"===h?"y":"x",y=e.modifiersData.popperOffsets,x=e.rects.reference,O=e.rects.popper,w="function"==typeof l?l(Object.assign(Object.assign({},e.rects),{placement:e.placement})):l,v={x:0,y:0};if(y){if(o){const t="y"===h?j:k,n="y"===h?M:D,o="y"===h?"height":"width",r=y[h],i=y[h]+f[t],s=y[h]-f[n],a=p?-O[o]/2:0,c=d===N?x[o]:O[o],l=d===N?-O[o]:-x[o],u=e.elements.arrow,b=p&&u?g(u):{width:0,height:0},L=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},T=L[t],P=L[n],W=ie(0,x[o],b[o]),A=m?x[o]/2-a-W-T-w:c-W-T-w,C=m?-x[o]/2+a+W+P+w:l+W+P+w,B=e.elements.arrow&&E(e.elements.arrow),S=B?"y"===h?B.clientTop||0:B.clientLeft||0:0,R=e.modifiersData.offset?e.modifiersData.offset[e.placement][h]:0,F=y[h]+A-R-S,$=y[h]+C-R,q=ie(p?Math.min(i,F):i,r,p?Math.max(s,$):s);y[h]=q,v[h]=q-r}if(r){const e="x"===h?j:k,t="x"===h?M:D,n=y[b],o=ie(n+f[e],n,n-f[t]);y[b]=o,v[b]=o-n}e.modifiersData[n]=v}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function({state:e,name:t}){const n=e.elements.arrow,o=e.modifiersData.popperOffsets,r=U(e.placement),i=V(r),s=[k,D].indexOf(r)>=0?"height":"width";if(!n||!o)return;const a=e.modifiersData[`${t}#persistent`].padding,c=g(n),p="y"===i?j:k,l="y"===i?M:D,f=e.rects.reference[s]+e.rects.reference[i]-o[i]-e.rects.popper[s],u=o[i]-e.rects.reference[i],d=E(n),m=d?"y"===i?d.clientHeight||0:d.clientWidth||0:0,h=f/2-u/2,b=a[p],y=m-c[s]-a[l],x=m/2-c[s]/2+h,O=ie(b,x,y),w=i;e.modifiersData[t]={[w]:O,centerOffset:O-x}},effect:function({state:e,options:t,name:n}){let{element:o="[data-popper-arrow]",padding:r=0}=t;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o),o))&&Q(e.elements.popper,o)&&(e.elements.arrow=o,e.modifiersData[`${n}#persistent`]={padding:ne("number"!=typeof r?r:oe(r,T))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function({state:e,name:t}){const n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,i=re(e,{elementContext:"reference"}),s=re(e,{altBoundary:!0}),a=se(i,n),c=se(s,o,r),p=ae(a),l=ae(c);e.modifiersData[t]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:l},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]});var pe=n(6551);const le=e=>e.reduce(((e,[t,n])=>(e[t]=n,e)),{}),fe=[];var ue=n(38296);n(45467);const de={left:"right",right:"left",bottom:"top",top:"bottom"},me=e=>`opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`,he=({trigger:e,popper:t,popperMatchesTriggerWidth:n=!0,direction:s="down",position:a="left",placement:c,appendTo:p=(()=>document.body),zIndex:l=9999,isVisible:f=!0,positionModifiers:u,distance:d=0,onMouseEnter:m,onMouseLeave:h,onFocus:b,onBlur:g,onDocumentClick:y,onTriggerClick:x,onTriggerEnter:O,onPopperClick:w,onDocumentKeyDown:v,enableFlip:E=!0,flipBehavior:j="flip",reference:M})=>{const[D,k]=o.useState(null),[L,T]=o.useState(null),[N,P]=o.useState(null),[W,A]=o.useState(!1),C=L||D,B=o.useCallback((e=>y(e,C,N)),[f,D,L,N,y]);o.useEffect((()=>{A(!0)}),[]),o.useEffect((()=>{M&&(M.current?T(M.current):"function"==typeof M&&T(M()))}),[M]);const S=(e,t,n)=>{e&&t&&t.addEventListener(n,e)},R=(e,t,n)=>{e&&t&&t.removeEventListener(n,e)};o.useEffect((()=>(S(m,C,"mouseenter"),S(h,C,"mouseleave"),S(b,C,"focus"),S(g,C,"blur"),S(x,C,"click"),S(O,C,"keydown"),S(w,N,"click"),y&&S(B,document,"click"),S(v,document,"keydown"),()=>{R(m,C,"mouseenter"),R(h,C,"mouseleave"),R(b,C,"focus"),R(g,C,"blur"),R(x,C,"click"),R(O,C,"keydown"),R(w,N,"click"),y&&R(B,document,"click"),R(v,document,"keydown")})),[D,N,m,h,b,g,x,O,w,y,v,L]);const F=()=>{if(c)return c;let e="up"===s?"top":"bottom";return"center"!==a&&(e=`${e}-${"right"===a?"end":"start"}`),e},$=o.useMemo(F,[s,a,c]),q=o.useMemo((()=>(e=>e.replace(/left|right|bottom|top/g,(e=>de[e])))(F())),[s,a,c]),H=o.useMemo((()=>({name:"sameWidth",enabled:n,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>(e.elements.popper.style.width=`${e.elements.reference.offsetWidth}px`,()=>{})})),[n]),{styles:_,attributes:U}=((e,t,n={})=>{const r=o.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||fe},[s,a]=o.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"}},attributes:{}}),c=o.useMemo((()=>({name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=Object.keys(e.elements);a({styles:le(t.map((t=>[t,e.styles[t]||{}]))),attributes:le(t.map((t=>[t,e.attributes[t]])))})},requires:["computeStyles"]})),[]),p=o.useMemo((()=>{const e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[...i.modifiers,c,{name:"applyStyles",enabled:!1}]};return t=r.current,n=e,JSON.stringify(t)===JSON.stringify(n)?r.current||e:(r.current=e,e);var t,n}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),l=o.useRef();return(0,pe.L)((()=>{l&&l.current&&l.current.setOptions(p)}),[p]),(0,pe.L)((()=>{if(null==e||null==t)return;const o=(n.createPopper||ce)(e,t,p);return l.current=o,()=>{o.destroy(),l.current=null}}),[e,t,n.createPopper]),{state:l.current?l.current.state:null,styles:s.styles,attributes:s.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}})(C,N,{placement:$,modifiers:[{name:"offset",options:{offset:[0,d]}},{name:"preventOverflow",enabled:!1},{name:"hide",enabled:!0},{name:"flip",enabled:$.startsWith("auto")||E,options:{fallbackPlacements:"flip"===j?[q]:j}},H]}),I=o.cloneElement(t,Object.assign({className:(0,ue.i)(t.props&&t.props.className,u&&(()=>{if(U&&U.popper&&U.popper["data-popper-placement"]){const e=U.popper["data-popper-placement"];return u[e]}return u.top})()),style:Object.assign(Object.assign(Object.assign({},t.props&&t.props.style||{}),_.popper),{zIndex:l})},U.popper));return o.createElement(o.Fragment,null,!M&&e&&o.createElement(i.L,{onFoundRef:e=>k(e)},e),W&&f&&r.createPortal(o.createElement(i.L,{onFoundRef:e=>P(e)},I),"function"==typeof p?p():p))};he.displayName="Popper"},6551:(e,t,n)=>{n.d(t,{L:()=>r});var o=n(93264);const r=n(80164).Nq?o.useLayoutEffect:o.useEffect},16356:(e,t,n)=>{n(49854),t.Z={modifiers:{top:"pf-m-top",bottom:"pf-m-bottom",left:"pf-m-left",right:"pf-m-right",textAlignLeft:"pf-m-text-align-left"},tooltip:"pf-c-tooltip",tooltipArrow:"pf-c-tooltip__arrow",tooltipContent:"pf-c-tooltip__content"}}}]);
//# sourceMappingURL=../sourcemaps/224.5c666801c03471dd68c08989316b1edf.js.map