"use strict";(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[3749],{31765:(e,t,i)=>{i.d(t,{lK:()=>o,MU:()=>c,FR:()=>m});var a=i(70655),r=i(93264),s=i(38296),d=i(19778),n=i(85314);const l={none:n.Z.modifiers.gridNone,always:"pf-m-grid",sm:n.Z.modifiers.gridSm,md:n.Z.modifiers.gridMd,lg:n.Z.modifiers.gridLg,xl:n.Z.modifiers.gridXl,"2xl":n.Z.modifiers.grid_2xl};var o;!function(e){e.nowrap="nowrap",e.truncate="truncate",e.breakWord="breakWord"}(o||(o={}));const c=r.createContext({isSelectable:!1});class m extends r.Component{constructor(){super(...arguments),this.dragFinished=!1,this.arrayCopy=r.Children.toArray(this.props.children),this.ref=r.createRef(),this.state={tempItemOrder:[],draggedItemId:null,draggingToItemIndex:null,dragging:!1},this.getIndex=e=>Array.from(this.ref.current.children).findIndex((t=>t.id===e)),this.move=e=>{const t=this.ref.current,i=Array.from(t.children);if(!i.map((e=>e.id)).every(((t,i)=>t===e[i]))){for(;t.firstChild;)t.removeChild(t.lastChild);e.forEach((e=>{t.appendChild(i.find((t=>t.id===e)))}))}},this.dragStart0=e=>{const{onDragStart:t}=this.props,i=e.id;e.classList.add(d.Z.modifiers.ghostRow),e.setAttribute("aria-pressed","true"),this.setState({draggedItemId:i,dragging:!0}),t&&t(i)},this.dragStart=e=>{e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",e.currentTarget.id),this.dragStart0(e.currentTarget)},this.onDragCancel=()=>{this.move(this.props.itemOrder),Array.from(this.ref.current.children).forEach((e=>{e.classList.remove(d.Z.modifiers.ghostRow),e.classList.remove(d.Z.modifiers.dragOver),e.setAttribute("aria-pressed","false")})),this.setState({draggedItemId:null,draggingToItemIndex:null,dragging:!1}),this.props.onDragCancel&&this.props.onDragCancel()},this.dragLeave=e=>{this.isValidDrop(e)||(this.move(this.props.itemOrder),this.setState({draggingToItemIndex:null}))},this.dragEnd0=e=>{e.classList.remove(d.Z.modifiers.ghostRow),e.classList.remove(d.Z.modifiers.dragOver),e.setAttribute("aria-pressed","false"),this.setState({draggedItemId:null,draggingToItemIndex:null,dragging:!1})},this.dragEnd=e=>{this.dragEnd0(e.target)},this.isValidDrop=e=>{const t=this.ref.current.getBoundingClientRect();return e.clientX>t.x&&e.clientX<t.x+t.width&&e.clientY>t.y&&e.clientY<t.y+t.height},this.drop=e=>{this.isValidDrop(e)?this.props.onDragFinish(this.state.tempItemOrder):this.onDragCancel()},this.dragOver0=e=>{const t=Array.from(this.ref.current.children).findIndex((t=>t.id===e));if(t!==this.state.draggingToItemIndex){const e=((e,t,i)=>{const a=e.indexOf(t);if(a===i)return e;const r=e.splice(a,1);return e.splice(i,0,r[0]),e})([...this.props.itemOrder],this.state.draggedItemId,t);this.move(e),this.setState({draggingToItemIndex:t,tempItemOrder:e})}},this.dragOver=e=>{e.preventDefault();const t=e.target.closest("li");if(!t||!this.ref.current.contains(t)||t.id===this.state.draggedItemId)return null;this.dragOver0(t.id)},this.handleDragButtonKeys=e=>{const{dragging:t}=this.state;if(" "!==e.key&&"Escape"!==e.key&&"Enter"!==e.key&&"ArrowUp"!==e.key&&"ArrowDown"!==e.key)return void(t&&e.preventDefault());e.preventDefault();const i=e.target.closest("li");if(" "===e.key||"Enter"===e.key&&!t)this.dragStart0(i);else if(t)if("Escape"===e.key||"Enter"===e.key)this.setState({dragging:!1}),this.dragFinished=!0,"Enter"===e.key?(this.dragEnd0(i),this.props.onDragFinish(this.state.tempItemOrder)):this.onDragCancel();else if("ArrowUp"===e.key){const e=i.previousSibling;e&&(this.dragOver0(e.id),i.querySelector(`.${d.Z.dataListItemDraggableButton}`).focus())}else if("ArrowDown"===e.key){const e=i.nextSibling;e&&(this.dragOver0(e.id),i.querySelector(`.${d.Z.dataListItemDraggableButton}`).focus())}}}componentDidUpdate(e){this.dragFinished&&(this.dragFinished=!1,this.setState({tempItemOrder:[...this.props.itemOrder],draggedItemId:null,dragging:!1})),e.itemOrder!==this.props.itemOrder&&this.move(this.props.itemOrder)}render(){const e=this.props,{className:t,children:i,onSelectDataListItem:n,selectedDataListItemId:o,isCompact:m,wrapModifier:g,onDragStart:p,onDragMove:f,onDragCancel:h,onDragFinish:u,gridBreakpoint:I,itemOrder:v}=e,b=(0,a._T)(e,["className","children","onSelectDataListItem","selectedDataListItemId","isCompact","wrapModifier","onDragStart","onDragMove","onDragCancel","onDragFinish","gridBreakpoint","itemOrder"]),{dragging:x}=this.state,D=void 0!==n,L=void 0!==u,_=L&&{onDragOver:this.dragOver,onDrop:this.dragOver,onDragLeave:this.dragLeave};return r.createElement(c.Provider,{value:{isSelectable:D,selectedDataListItemId:o,updateSelectedDataListItem:e=>{n(e)},isDraggable:L,dragStart:this.dragStart,dragEnd:this.dragEnd,drop:this.drop,dragKeyHandler:this.handleDragButtonKeys}},r.createElement("ul",Object.assign({className:(0,s.i)(d.Z.dataList,m&&d.Z.modifiers.compact,l[I],g&&d.Z.modifiers[g],x&&d.Z.modifiers.dragOver,t),style:b.style},b,_,{ref:this.ref}),i))}}m.displayName="DataList",m.defaultProps={children:null,className:"",selectedDataListItemId:"",isCompact:!1,gridBreakpoint:"md",wrapModifier:null}},27511:(e,t,i)=>{i.d(t,{K:()=>n});var a=i(70655),r=i(93264),s=i(38296),d=i(19778);const n=e=>{var{children:t=null,className:i="",width:n=1,isFilled:l=!0,alignRight:o=!1,isIcon:c=!1,wrapModifier:m=null}=e,g=(0,a._T)(e,["children","className","width","isFilled","alignRight","isIcon","wrapModifier"]);return r.createElement("div",Object.assign({className:(0,s.i)(d.Z.dataListCell,n>1&&d.Z.modifiers[`flex_${n}`],!l&&d.Z.modifiers.noFill,o&&d.Z.modifiers.alignRight,c&&d.Z.modifiers.icon,i,m&&d.Z.modifiers[m])},g),t)};n.displayName="DataListCell"},83048:(e,t,i)=>{i.d(t,{D:()=>o});var a=i(70655),r=i(93264),s=i(38296),d=i(19778),n=i(26499),l=i(31765);const o=e=>{var{className:t="",isDisabled:i=!1}=e,o=(0,a._T)(e,["className","isDisabled"]);return r.createElement(l.MU.Consumer,null,(({dragKeyHandler:e})=>r.createElement("button",Object.assign({className:(0,s.i)(d.Z.dataListItemDraggableButton,i&&d.Z.modifiers.disabled,t),onKeyDown:e,type:"button",disabled:i},o),r.createElement("span",{className:(0,s.i)(d.Z.dataListItemDraggableIcon)},r.createElement(n.ZP,null)))))};o.displayName="DataListDragButton"},61282:(e,t,i)=>{i.d(t,{L:()=>m});var a=i(70655),r=i(93264),s=i(38296),d=i(19778),n=i(31765),l=i(64403),o=i(83048);function c(e){if(!r.isValidElement(e))return null;if(e.type===o.D)return e;if(e.props.children)for(const t of r.Children.toArray(e.props.children)){const e=c(t);if(e)return e}return null}class m extends r.Component{render(){const e=this.props,{children:t,isExpanded:i,className:o,id:m,"aria-labelledby":g}=e,p=(0,a._T)(e,["children","isExpanded","className","id","aria-labelledby"]);return r.createElement(n.MU.Consumer,null,(({isSelectable:e,selectedDataListItemId:a,updateSelectedDataListItem:n,isDraggable:f,dragStart:h,dragEnd:u,drop:I})=>{const v=c(t),b=f&&{draggable:!v||!v.props.isDisabled,onDrop:I,onDragEnd:u,onDragStart:h};return r.createElement("li",Object.assign({id:m,className:(0,s.i)(d.Z.dataListItem,i&&d.Z.modifiers.expanded,e&&d.Z.modifiers.selectable,a&&a===m&&d.Z.modifiers.selected,o),"aria-labelledby":g},e&&{tabIndex:0,onClick:e=>{let t=e.target;for(;e.currentTarget!==t;){if("onclick"in t&&t.onclick||t.parentNode.classList.contains(d.Z.dataListItemAction)||t.parentNode.classList.contains(d.Z.dataListItemControl))return;t=t.parentNode}n(m)},onKeyDown:e=>{e.key===l.yu.Enter&&n(m)}},e&&a===m&&{"aria-selected":!0},p,b),r.Children.map(t,(e=>r.isValidElement(e)&&r.cloneElement(e,{rowid:g}))))}))}}m.displayName="DataListItem",m.defaultProps={isExpanded:!1,className:"",id:"",children:null,"aria-labelledby":""}},14087:(e,t,i)=>{i.d(t,{p:()=>n});var a=i(70655),r=i(93264),s=i(38296),d=i(19778);const n=e=>{var{className:t="",dataListCells:i,rowid:n=""}=e,l=(0,a._T)(e,["className","dataListCells","rowid"]);return r.createElement("div",Object.assign({className:(0,s.i)(d.Z.dataListItemContent,t)},l),i)};n.displayName="DataListItemCells"},81217:(e,t,i)=>{i.d(t,{V:()=>n});var a=i(70655),r=i(93264),s=i(38296),d=i(19778);const n=e=>{var{children:t,className:i="",rowid:n="",wrapModifier:l=null}=e,o=(0,a._T)(e,["children","className","rowid","wrapModifier"]);return r.createElement("div",Object.assign({className:(0,s.i)(d.Z.dataListItemRow,i,l&&d.Z.modifiers[l])},o),r.Children.map(t,(e=>r.isValidElement(e)&&r.cloneElement(e,{rowid:n}))))};n.displayName="DataListItemRow"},26499:(e,t,i)=>{i.d(t,{ZP:()=>a});const a=(0,i(40400).IU)({name:"GripVerticalIcon",height:512,width:320,svgPath:"M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0})},85314:(e,t,i)=>{i(18192),t.Z={dataList:"pf-c-data-list",dataListCell:"pf-c-data-list__cell",dataListExpandableContent:"pf-c-data-list__expandable-content",dataListItemContent:"pf-c-data-list__item-content",modifiers:{icon:"pf-m-icon",alignRight:"pf-m-align-right",noFill:"pf-m-no-fill",flex_2:"pf-m-flex-2",flex_3:"pf-m-flex-3",flex_4:"pf-m-flex-4",flex_5:"pf-m-flex-5",gridNone:"pf-m-grid-none",gridSm:"pf-m-grid-sm",gridMd:"pf-m-grid-md",gridLg:"pf-m-grid-lg",gridXl:"pf-m-grid-xl",grid_2xl:"pf-m-grid-2xl"}}},19778:(e,t,i)=>{i(23055),t.Z={dataList:"pf-c-data-list",dataListAction:"pf-c-data-list__action",dataListCell:"pf-c-data-list__cell",dataListCheck:"pf-c-data-list__check",dataListExpandableContent:"pf-c-data-list__expandable-content",dataListExpandableContentBody:"pf-c-data-list__expandable-content-body",dataListItem:"pf-c-data-list__item",dataListItemAction:"pf-c-data-list__item-action",dataListItemContent:"pf-c-data-list__item-content",dataListItemControl:"pf-c-data-list__item-control",dataListItemDraggableButton:"pf-c-data-list__item-draggable-button",dataListItemDraggableIcon:"pf-c-data-list__item-draggable-icon",dataListItemRow:"pf-c-data-list__item-row",dataListText:"pf-c-data-list__text",dataListToggle:"pf-c-data-list__toggle",dataListToggleIcon:"pf-c-data-list__toggle-icon",modifiers:{hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",icon:"pf-m-icon",alignRight:"pf-m-align-right",noFill:"pf-m-no-fill",flex_2:"pf-m-flex-2",flex_3:"pf-m-flex-3",flex_4:"pf-m-flex-4",flex_5:"pf-m-flex-5",gridNone:"pf-m-grid-none",gridSm:"pf-m-grid-sm",gridMd:"pf-m-grid-md",gridLg:"pf-m-grid-lg",gridXl:"pf-m-grid-xl",grid_2xl:"pf-m-grid-2xl",compact:"pf-m-compact",dragOver:"pf-m-drag-over",truncate:"pf-m-truncate",breakWord:"pf-m-break-word",nowrap:"pf-m-nowrap",selectable:"pf-m-selectable",selected:"pf-m-selected",ghostRow:"pf-m-ghost-row",expanded:"pf-m-expanded",disabled:"pf-m-disabled",noPadding:"pf-m-no-padding"}}}}]);
//# sourceMappingURL=../sourcemaps/3749.eb0caa355256b6d0307f9c7afcc74ad3.js.map