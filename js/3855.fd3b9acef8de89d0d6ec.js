"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[3855],{71710:(e,t,i)=>{i.d(t,{A:()=>f});var s=i(65353),a=i(32747),n=i(38296),r=i(47173),o=i(75824),l=i(24307);i(94498);const c="pf-v5-c-chip",p="pf-v5-c-chip__content",d="pf-v5-c-chip__text",h="pf-m-overflow";var u=i(41724),m=i(62472);class f extends a.Component{constructor(e){super(e),this.span=a.createRef(),this.setChipStyle=()=>({"--pf-v5-c-chip__text--MaxWidth":this.props.textMaxWidth}),this.renderOverflowChip=()=>{const e=this.props,{badge:t,children:i,className:r,onClick:o,ouiaId:l,textMaxWidth:u,style:f,component:b,tooltipPosition:v,isOverflowChip:C,closeBtnAriaLabel:g,isReadOnly:y}=e,x=(0,s._T)(e,["badge","children","className","onClick","ouiaId","textMaxWidth","style","component","tooltipPosition","isOverflowChip","closeBtnAriaLabel","isReadOnly"]),O=b;return a.createElement(O,Object.assign({onClick:o},u&&Object.assign({style:this.setChipStyle()},f),{className:(0,n.i)(c,h,r)},"button"===b?{type:"button"}:{},(0,m.dp)("OverflowChip",void 0!==l?l:this.state.ouiaStateId),x),a.createElement("span",{className:(0,n.i)(p)},a.createElement("span",{className:(0,n.i)(d)},i),t&&t))},this.renderChip=e=>{const{children:t,tooltipPosition:i}=this.props;return this.state.isTooltipVisible?a.createElement(o.u,{position:i,content:t},this.renderInnerChip(e)):this.renderInnerChip(e)},this.state={isTooltipVisible:!1,ouiaStateId:(0,m.ql)(f.displayName)}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.span.current&&this.span.current.offsetWidth<this.span.current.scrollWidth)})}renderInnerChip(e){const t=this.props,{badge:i,children:o,className:h,onClick:u,closeBtnAriaLabel:b,isReadOnly:v,isOverflowChip:C,tooltipPosition:g,component:y,ouiaId:x}=t,O=(0,s._T)(t,["badge","children","className","onClick","closeBtnAriaLabel","isReadOnly","isOverflowChip","tooltipPosition","component","ouiaId"]),N=y;return a.createElement(N,Object.assign({},this.props.textMaxWidth&&{style:this.setChipStyle()},{className:(0,n.i)(c,h)},this.state.isTooltipVisible&&{tabIndex:0},(0,m.dp)(f.displayName,void 0!==x?x:this.state.ouiaStateId),O),a.createElement("span",{className:(0,n.i)(p)},a.createElement("span",{ref:this.span,className:(0,n.i)(d),id:e},o),i&&i),!v&&a.createElement("span",{className:(0,n.i)("pf-v5-c-chip__actions")},a.createElement(r.zx,{onClick:u,variant:"plain","aria-label":b,id:`remove_${e}`,"aria-labelledby":`remove_${e} ${e}`,ouiaId:x||b},a.createElement(l.ZP,{"aria-hidden":"true"}))))}render(){const{isOverflowChip:e}=this.props;return a.createElement(u.w,null,(t=>e?this.renderOverflowChip():this.renderChip(this.props.id||t)))}}f.displayName="Chip",f.defaultProps={closeBtnAriaLabel:"close",className:"",isOverflowChip:!1,isReadOnly:!1,tooltipPosition:"top",onClick:e=>{},component:"div"}},73597:(e,t,i)=>{i.d(t,{Z:()=>b});var s=i(65353),a=i(32747);i(1580);const n="pf-v5-c-chip-group__label",r="pf-v5-c-chip-group__list-item",o="pf-m-category";var l=i(38296),c=i(47173),p=i(71710),d=i(75824),h=i(72781),u=i(80164),m=i(41724),f=i(62472);class b extends a.Component{constructor(e){super(e),this.headingRef=a.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:i}=this.props,{isTooltipVisible:s}=this.state;return s?a.createElement(d.u,{position:i,content:t},a.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,l.i)(n)},a.createElement("span",{id:e},t))):a.createElement("span",{ref:this.headingRef,className:(0,l.i)(n),id:e},t)}render(){const e=this.props,{categoryName:t,children:i,className:n,isClosable:d,closeBtnAriaLabel:v,"aria-label":C,onClick:g,onOverflowChipClick:y,numChips:x,expandedText:O,collapsedText:N,ouiaId:T,defaultIsOpen:I,tooltipPosition:E}=e,R=(0,s._T)(e,["categoryName","children","className","isClosable","closeBtnAriaLabel","aria-label","onClick","onOverflowChipClick","numChips","expandedText","collapsedText","ouiaId","defaultIsOpen","tooltipPosition"]),{isOpen:w}=this.state,_=a.Children.count(i),L=(0,u.tJ)(N,{remaining:a.Children.count(i)-x}),S=e=>{const s=w?a.Children.toArray(i):a.Children.toArray(i).slice(0,x);return a.createElement("div",Object.assign({className:(0,l.i)("pf-v5-c-chip-group",n,t&&o),role:"group"},t&&{"aria-labelledby":e},!t&&{"aria-label":C},(0,f.dp)(b.displayName,T)),a.createElement("div",{className:(0,l.i)("pf-v5-c-chip-group__main")},t&&this.renderLabel(e),a.createElement("ul",Object.assign({className:(0,l.i)("pf-v5-c-chip-group__list")},t&&{"aria-labelledby":e},!t&&{"aria-label":C},{role:"list"},R),s.map(((e,t)=>a.createElement("li",{className:(0,l.i)(r),key:t},e))),_>x&&a.createElement("li",{className:(0,l.i)(r)},a.createElement(p.A,{isOverflowChip:!0,onClick:e=>{this.toggleCollapse(),y(e)},component:"button"},w?O:L)))),d&&a.createElement("div",{className:(0,l.i)("pf-v5-c-chip-group__close")},a.createElement(c.zx,{variant:"plain","aria-label":v,onClick:g,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`,ouiaId:T||v},a.createElement(h.ZP,{"aria-hidden":"true"}))))};return 0===_?null:a.createElement(m.w,null,(e=>S(this.props.id||e)))}}b.displayName="ChipGroup",b.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numChips:3,isClosable:!1,onClick:e=>{},onOverflowChipClick:e=>{},closeBtnAriaLabel:"Close chip group",tooltipPosition:"top","aria-label":"Chip group category"}},49644:(e,t,i)=>{i.d(t,{J:()=>d});var s=i(65353),a=i(32747),n=i(12455),r=i(38296),o=i(68778),l=i(43047),c=i(69957);const p={success:o.ZP,error:l.ZP,warning:c.ZP},d=e=>{var{status:t,customIcon:i,className:o}=e,l=(0,s._T)(e,["status","customIcon","className"]);const c=t&&p[t];return a.createElement("span",Object.assign({className:(0,r.i)(n.Z.formControlIcon,t&&n.Z.modifiers.status,o)},l),i||a.createElement(c,null))}},92607:(e,t,i)=>{i.d(t,{BJ:()=>a,oi:()=>f,x:()=>s,y5:()=>m});var s,a,n=i(65353),r=i(32747),o=i(12455),l=i(38296),c=i(1774),p=i(80164),d=i(62472),h=i(84709),u=i(49644);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(s||(s={})),function(e){e.default="default",e.plain="plain"}(a||(a={}));class m extends r.Component{constructor(e){super(e),this.inputRef=r.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,p.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:i,onFocus:s}=this.props;(t||i)&&this.restoreText(),s&&s(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:i,onBlur:s}=this.props;(t||i)&&this.handleResize(),s&&s(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,d.ql)(m.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,h.p)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:i,type:s,value:a,placeholder:p,validated:h,onChange:m,onFocus:b,onBlur:v,isLeftTruncated:C,isStartTruncated:g,isExpanded:y,readOnly:x,readOnlyVariant:O,isRequired:N,isDisabled:T,customIcon:I,ouiaId:E,ouiaSafe:R}=e,w=(0,n._T)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),_=["success","error","warning"].includes(h);return r.createElement("span",{className:(0,l.i)(o.Z.formControl,O&&o.Z.modifiers.readonly,"plain"===O&&o.Z.modifiers.plain,T&&o.Z.modifiers.disabled,y&&o.Z.modifiers.expanded,I&&o.Z.modifiers.icon,_&&o.Z.modifiers[h],i)},r.createElement("input",Object.assign({},w,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:s,value:this.sanitizeInputValue(a),"aria-invalid":w["aria-invalid"]?w["aria-invalid"]:h===c.LD.error,required:N,disabled:T,readOnly:!!O||x,ref:t||this.inputRef,placeholder:p},(0,d.dp)(f.displayName,void 0!==E?E:this.state.ouiaStateId,R))),(I||_)&&r.createElement("span",{className:(0,l.i)(o.Z.formControlUtilities)},I&&r.createElement(u.J,{customIcon:I}),_&&r.createElement(u.J,{status:h})))}}m.displayName="TextInputBase",m.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:s.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const f=r.forwardRef(((e,t)=>r.createElement(m,Object.assign({},e,{innerRef:t}))));f.displayName="TextInput"},84709:(e,t,i)=>{i.d(t,{p:()=>a});var s=i(80164);const a=(e,t,i)=>{let a;if(s.Nq){const{ResizeObserver:s}=window;if(e&&s){const n=new s((e=>{i?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));n.observe(e),a=()=>n.unobserve(e)}else window.addEventListener("resize",t),a=()=>window.removeEventListener("resize",t)}return()=>{a&&a()}}},68778:(e,t,i)=>{i.d(t,{GR:()=>a,ZP:()=>r,rE:()=>n});var s=i(40400);const a={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},n=(0,s.I)(a),r=n},72781:(e,t,i)=>{i.d(t,{B9:()=>a,ZP:()=>r,xD:()=>n});var s=i(40400);const a={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},n=(0,s.I)(a),r=n},12455:(e,t,i)=>{i.d(t,{Z:()=>s}),i(90479);const s={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/3855.bbb287a7d4149fe23ca0b4c15d307288.js.map