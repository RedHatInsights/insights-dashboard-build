(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4,5,20],{1109:function(e,a,t){var n=t(7),r=t(897);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(897,(function(){"string"==typeof(r=(r=t(897)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=r.locals||{}},1222:function(e,a,t){"use strict";t.r(a);var n=t(865),r=t.n(n),i=t(178),o=t.n(i),l=(t(1109),t(242)),s=t(165),c=t(186),u=t(364),d=t(218),f=t(372),p=t(373),g=t(374),m=t(375),b=4,h=3,v=2,y=1,_=t(1),O=t.n(_),x=t(848),A=t(815),w=t(816),E=t(817),S=t(818),T=t(846),j=t(844),P=t(803),N=t(864),R=t(870),C=t(15),M=t.n(C),k=t(5),D=t(914),z=t(129),I=t(843),F=t(365);function H(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?H(Object(t),!0).forEach((function(a){r()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var V=function(e){var a,t,n,i=e.recStats,l=e.recStatsStatus,C=e.advisorFetchStatsRecs,M=e.advisorFetchStatsSystems,z=e.advisorIncidents,H=e.advisorIncidentsStatus,V=e.advisorFetchIncidents,B=e.selectedTags,K=e.workloads,W=Object(F.a)(),q=Object(_.useState)([]),G=o()(q,2),J=G[0],U=G[1],Q=Object(_.useState)([]),X=o()(Q,2),Y=X[0],Z=X[1],$=[A.a.value,w.a.value,E.a.value,S.a.value],ee={SAP:"sap_system"},ae="&reports_shown=true&impacting=true&offset=0&limit=10".concat((null==B?void 0:B.length)?"&tags=".concat(B.join()):"").concat((null==K?void 0:K.SAP)?"&sap_system=true":""),te=Y.map((function(e){var a=e.value;return"".concat(k.H,"/advisor/recommendations?category=").concat(a).concat(ae)})),ne=function(e){return"".concat(k.H,"/advisor/recommendations?total_risk=").concat(e).concat(ae)},re=Y.map((function(e){return{name:"".concat(e.y," ").concat(e.x," "),symbol:{fill:"".concat(e.fill," "),type:"square"}}}));return Object(_.useEffect)((function(){var e=L(L({},B.length&&{tags:B.join()}),K&&function(e){return Object.entries(e).map((function(e){var a=o()(e,2),t=a[0],n=a[1];return ee[t]&&!!n.isSelected&&r()({},"filter[system_profile][".concat(ee[t],"]"),n.isSelected)}))[0]}(K));C(e),M(e),V(e)}),[V,C,M,B,K]),Object(_.useEffect)((function(){if("fulfilled"===l){var e=i.total_risk,a=i.category;U([{title:"".concat(e[b]," ").concat(Object(D.a)(W.formatMessage(I.a.critical))," "),risk:b},{title:"".concat(e[h]," ").concat(Object(D.a)(W.formatMessage(I.a.important))," "),risk:h},{title:"".concat(e[v]," ").concat(Object(D.a)(W.formatMessage(I.a.moderate))," "),risk:v},{title:"".concat(e[y]," ").concat(Object(D.a)(W.formatMessage(I.a.low))," "),risk:y}]),Z([{x:W.formatMessage(I.a.availability,{count:a.Availability}),y:a.Availability,fill:$[0],value:1},{x:W.formatMessage(I.a.stability,{count:a.Stability}),y:a.Stability,fill:$[1],value:3},{x:W.formatMessage(I.a.performance,{count:a.Performance}),y:a.Performance,fill:$[2],value:4},{x:W.formatMessage(I.a.security,{count:a.Security}),y:a.Security,fill:$[3],value:2}])}}),[W,i,l]),O.a.createElement(x.a,{appName:"Advisor","data-ouia-safe":!0},"pending"===H?O.a.createElement(N.a,null):O.a.createElement(x.c,{titleClassName:(null==z||null===(a=z.meta)||void 0===a?void 0:a.count)?"ins-m-red":"ins-m-green",title:"".concat(W.formatMessage(I.a.incidents,{incidents:null==z||null===(t=z.meta)||void 0===t?void 0:t.count})," ")}," ",W.formatMessage(I.a.inAdvisor)," ",O.a.createElement(c.a,{component:"a",href:"".concat(k.H).concat("/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true"),variant:"link",isInline:!0},W.formatMessage(I.a.recommendations))),"rejected"===H?O.a.createElement(x.b,null,O.a.createElement(T.a,{appName:"Advisor"})):O.a.createElement(x.b,null,O.a.createElement(f.a,null,O.a.createElement(f.a,{grow:{default:"grow"}},O.a.createElement(p.a,null,O.a.createElement(u.a,{headingLevel:"h2",size:u.b.lg},"".concat(W.formatMessage(I.a.totalRisk)," "),(n=W.formatMessage(I.a.totalRiskDef,{em:function(e){return O.a.createElement("em",null,e)}}),O.a.createElement(s.a,{key:n,position:s.b.top,content:O.a.createElement("div",null,n)},O.a.createElement(c.a,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},O.a.createElement(j.a,null))))),O.a.createElement(g.a,{hasGutter:!0},J.map((function(e){var a=e.title,t=e.risk;return O.a.createElement(m.a,{span:6,key:a},O.a.createElement(c.a,{component:"a",href:ne(t),variant:"link",isInline:!0},O.a.createElement(P.a,{value:t,text:a})))}))))),O.a.createElement(d.a,{isVertical:!0}),O.a.createElement(f.a,{grow:{default:"grow"}},O.a.createElement(p.a,null,O.a.createElement(u.a,{headingLevel:"h2",size:u.b.lg},"".concat(W.formatMessage(I.a.category)," ")),O.a.createElement(R.a,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chartt",constrainToVisibleArea:!0,data:Y,colorScale:$,height:150,width:150,legend:"true",legendData:re,legendClick:te,legendOrientation:!0,legendHeight:80,legendWidth:130}))))))};V.propTypes={advisorFetchStatsRecs:M.a.func,recStats:M.a.object,recStatsStatus:M.a.string,advisorFetchStatsSystems:M.a.func,systemsStats:M.a.object,systemsStatsStatus:M.a.string,advisorIncidents:M.a.object,advisorIncidentsStatus:M.a.string,advisorFetchIncidents:M.a.func,selectedTags:M.a.array,workloads:M.a.object};a.default=Object(z.connect)((function(e){var a=e.DashboardStore;return{recStats:a.advisorStatsRecs,recStatsStatus:a.advisorStatsRecsStatus,systemsStats:a.advisorStatsSystems,systemsStatsStatus:a.advisorStatsSystemsStatus,advisorIncidents:a.advisorIncidents,advisorIncidentsStatus:a.advisorIncidentsStatus,selectedTags:a.selectedTags,workloads:a.workloads}}),(function(e){return{advisorFetchStatsRecs:function(a){return e(l.b(a))},advisorFetchStatsSystems:function(a){return e(l.c(a))},advisorFetchIncidents:function(a){return e(l.a(a))}}}))(V)},590:function(e,a,t){"use strict";var n=t(1),r=t.n(n),i=t(15),o=t.n(i),l=t(107),s=t(886),c=t(771),u=t(772),d=t(1221),f=t(1102),p=t(1215),g=t(834),m=t.n(g),b=t(842),h=t.n(b),v=t(835),y=t.n(v),_=t(876),O=t(953),x=t(1224);function A(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){w(e,a,t[a])}))}return e}function w(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var E=function(e){var a=e.slice,t=e.radius,n=e.innerRadius,r=e.cornerRadius;if(h()(e.pathFunction))return e.pathFunction(a);var i=l.a.degreesToRadians(e.padAngle),o=l.a.degreesToRadians(e.sliceStartAngle),s=l.a.degreesToRadians(e.sliceEndAngle);return x.a().cornerRadius(r).outerRadius(t).innerRadius(n||0)(y()({startAngle:o,endAngle:s,padAngle:i},a))},S=function(e){var a=(e=function(e){var a=l.a.evaluateStyle(e.style,e),t=l.a.evaluateProp(e.radius,m()({},e,{style:a})),n=l.a.evaluateProp(e.innerRadius,m()({},e,{style:a,radius:t})),r=l.a.evaluateProp(e.id,e),i=l.a.evaluateProp(e.cornerRadius,e),o=l.a.evaluateProp(e.padAngle,e),s=l.a.evaluateProp(e.sliceStartAngle,e),c=l.a.evaluateProp(e.sliceEndAngle,e);return m()({},e,{style:a,radius:t,innerRadius:n,id:r,cornerRadius:i,padAngle:o,sliceStartAngle:s,sliceEndAngle:c})}(e)).origin?"translate(".concat(e.origin.x,", ").concat(e.origin.y,")"):void 0;return r.a.cloneElement(e.pathComponent,A({},e.events,{d:E(e),style:e.style,transform:e.transform||a,className:e.className,role:e.role,shapeRendering:e.shapeRendering,clipPath:e.clipPath}))};S.propTypes=A({},_.a.primitiveProps,{cornerRadius:o.a.oneOfType([o.a.number,o.a.func]),datum:o.a.object,innerRadius:o.a.oneOfType([o.a.number,o.a.func]),padAngle:o.a.oneOfType([o.a.number,o.a.func]),pathComponent:o.a.element,pathFunction:o.a.func,radius:o.a.oneOfType([o.a.number,o.a.func]),slice:o.a.object,sliceEndAngle:o.a.oneOfType([o.a.number,o.a.func]),sliceStartAngle:o.a.oneOfType([o.a.number,o.a.func])}),S.defaultProps={pathComponent:r.a.createElement(O.a,null),role:"presentation",shapeRendering:"auto"};var T=S,j=t(860),P=t.n(j),N=t(855),R=t.n(N),C=t(892),M=function(e,a){return a<e?-1:a>e?1:a>=e?0:NaN},k=function(e){return e},D=t(891),z=t(945),I=function(e,a){var t=h()(e.padAngle)?0:e.padAngle;return function(){var e=k,a=M,t=null,n=Object(C.a)(0),r=Object(C.a)(D.m),i=Object(C.a)(0);function o(o){var l,s,c,u,d,f=o.length,p=0,g=new Array(f),m=new Array(f),b=+n.apply(this,arguments),h=Math.min(D.m,Math.max(-D.m,r.apply(this,arguments)-b)),v=Math.min(Math.abs(h)/f,i.apply(this,arguments)),y=v*(h<0?-1:1);for(l=0;l<f;++l)(d=m[g[l]=l]=+e(o[l],l,o))>0&&(p+=d);for(null!=a?g.sort((function(e,t){return a(m[e],m[t])})):null!=t&&g.sort((function(e,a){return t(o[e],o[a])})),l=0,c=p?(h-f*y)/p:0;l<f;++l,b=u)s=g[l],u=b+((d=m[s])>0?d*c:0)+y,m[s]={data:o[s],index:l,value:d,startAngle:b,endAngle:u,padAngle:v};return m}return o.value=function(a){return arguments.length?(e="function"==typeof a?a:Object(C.a)(+a),o):e},o.sortValues=function(e){return arguments.length?(a=e,t=null,o):a},o.sort=function(e){return arguments.length?(t=e,a=null,o):t},o.startAngle=function(e){return arguments.length?(n="function"==typeof e?e:Object(C.a)(+e),o):n},o.endAngle=function(e){return arguments.length?(r="function"==typeof e?e:Object(C.a)(+e),o):r},o.padAngle=function(e){return arguments.length?(i="function"==typeof e?e:Object(C.a)(+e),o):i},o}().sort(null).startAngle(l.a.degreesToRadians(e.startAngle)).endAngle(l.a.degreesToRadians(e.endAngle)).padAngle(l.a.degreesToRadians(t)).value((function(e){return e._y}))(a)},F=function(e){var a=e.colorScale,t=l.a.getDefaultStyles(e,"pie"),n=l.a.getStyles(e.style,t,"auto","100%"),r=Array.isArray(a)?a:z.a.getColorScale(a),i=l.a.getPadding(e),o=function(e,a){return"number"==typeof e.radius?e.radius:Math.min(e.width-a.left-a.right,e.height-a.top-a.bottom)/2}(e,i),s=function(e,a){var t=e.width,n=e.height,r=R()(e.origin)?e.origin:{};return{x:void 0!==r.x?r.x:(a.left-a.right+t)/2,y:void 0!==r.y?r.y:(a.top-a.bottom+n)/2}}(e,i),c=f.a.getData(e),u=I(e,c);return m()({},e,{style:n,colors:r,padding:i,defaultRadius:o,data:c,slices:u,origin:s})},H=function(e,a){var t=a.style,n=function(e,a,t){return e&&e.data&&e.data.fill?e.data.fill:a&&a[t%a.length]}(t,a.colors,e);return m()({fill:n},t.data)},L=function(e,a,t){return function(e){return null==e||h()(e)?e:"".concat(e)}(a.label?a.label:Array.isArray(e.labels)?e.labels[t]:h()(e.labels)?e.labels:a.xName||a._x)},V=function(e,a,t){var n=a.index,r=a.datum,i=a.data,o=a.slice,s=a.labelComponent,c=a.theme,u=t.style,d=t.defaultRadius,f=t.origin,p=t.width,g=t.height,b=l.a.evaluateProp(t.labelRadius,m()({text:e},a)),h=l.a.evaluateProp(t.labelPosition,m()({text:e},a))||"centroid",v=l.a.evaluateProp(t.labelPlacement,m()({text:e},a))||"vertical",_=m()({padding:0},u.labels),O=function(e,a,t){var n={startAngle:"startAngle"===t?a.startAngle:a.endAngle,endAngle:"endAngle"===t?a.endAngle:a.startAngle},r=m()({},a,n);return e.centroid(r)}(function(e,a,t){var n=t&&t.padding||0,r=a||e+n;return x.a().outerRadius(r).innerRadius(r)}(d,b,l.a.evaluateStyle(_,m()({labelRadius:b,text:e},a))),o,h),A=function(e,a,t){var n=0;return((n=void 0!==a.angle?t.angle:"centroid"===a?l.a.radiansToDegrees((e.startAngle+e.endAngle)/2):"startAngle"===a?l.a.radiansToDegrees(e.startAngle):l.a.radiansToDegrees(e.endAngle))<0?360-n:n)%360}(o,h,_),w=function(e,a){return"vertical"===a?0:"parallel"===a?e>180&&e<360?e+90:e-90:e>90&&e<270?e-180:e}(A,v),E=function(e,a){return"perpendicular"===a?e>90&&e<270?"bottom":"top":"parallel"===a?e>=0&&e<=180?"right":"left":e<45||e>315?"top":e>=45&&e<135?"right":e>=135&&e<225?"bottom":"left"}(A,v),S=_.textAnchor||function(e){return"top"===e||"bottom"===e?"middle":"right"===e?"start":"end"}(E),T=_.verticalAnchor||function(e){return"left"===e||"right"===e?"middle":"bottom"===e?"start":"end"}(E),j={width:p,height:g,index:n,datum:r,data:i,slice:o,orientation:E,text:e,style:_,x:Math.round(O[0])+f.x,y:Math.round(O[1])+f.y,textAnchor:S,verticalAnchor:T,angle:w};if(!l.a.isTooltip(s))return j;var P=c&&c.tooltip||{};return y()({},j,l.a.omit(P,["style"]))};function B(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function K(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,a){return!a||"object"!=typeof a&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}var q={endAngle:360,height:400,innerRadius:0,cornerRadius:0,padAngle:0,padding:30,width:400,startAngle:0,colorScale:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],labelPosition:"centroid"},G=function(e){function a(){return B(this,a),W(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}var t,n,r;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),t=a,(n=[{key:"shouldAnimate",value:function(){return Boolean(this.props.animate)}},{key:"render",value:function(){var e=a.animationWhitelist,t=a.role,n=l.a.modifyProps(this.props,q,t);if(this.shouldAnimate())return this.animateComponent(n,e);var r=this.renderData(n);return n.standalone?this.renderContainer(n.containerComponent,r):r}}])&&K(t.prototype,n),r&&K(t,r),a}(r.a.Component);Object.defineProperty(G,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","endAngle","height","innerRadius","cornerRadius","padAngle","padding","colorScale","startAngle","style","width"]}),Object.defineProperty(G,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryPie"}),Object.defineProperty(G,"role",{configurable:!0,enumerable:!0,writable:!0,value:"pie"}),Object.defineProperty(G,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:{onExit:{duration:500,before:function(){return{_y:0,label:" "}}},onEnter:{duration:500,before:function(){return{_y:0,label:" "}},after:function(e){return{y_:e._y,label:e.label}}}}}),Object.defineProperty(G,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{animate:o.a.oneOfType([o.a.bool,o.a.object]),colorScale:o.a.oneOfType([o.a.arrayOf(o.a.string),o.a.oneOf(["grayscale","qualitative","heatmap","warm","cool","red","green","blue"])]),containerComponent:o.a.element,cornerRadius:o.a.oneOfType([s.a.nonNegative,o.a.func]),data:o.a.array,dataComponent:o.a.element,endAngle:o.a.number,eventKey:o.a.oneOfType([o.a.func,s.a.allOfType([s.a.integer,s.a.nonNegative]),o.a.string]),events:o.a.arrayOf(o.a.shape({target:o.a.oneOf(["data","labels","parent"]),eventKey:o.a.oneOfType([o.a.func,s.a.allOfType([s.a.integer,s.a.nonNegative]),o.a.string]),eventHandlers:o.a.object})),externalEventMutations:o.a.arrayOf(o.a.shape({callback:o.a.function,childName:o.a.oneOfType([o.a.string,o.a.array]),eventKey:o.a.oneOfType([o.a.array,s.a.allOfType([s.a.integer,s.a.nonNegative]),o.a.string]),mutation:o.a.function,target:o.a.oneOfType([o.a.string,o.a.array])})),groupComponent:o.a.element,height:s.a.nonNegative,innerRadius:o.a.oneOfType([s.a.nonNegative,o.a.func]),labelComponent:o.a.element,labelPlacement:o.a.oneOfType([o.a.func,o.a.oneOf(["parallel","perpendicular","vertical"])]),labelPosition:o.a.oneOfType([o.a.func,o.a.oneOf(["startAngle","centroid","endAngle"])]),labelRadius:o.a.oneOfType([s.a.nonNegative,o.a.func]),labels:o.a.oneOfType([o.a.func,o.a.array]),name:o.a.string,origin:o.a.shape({x:s.a.nonNegative,y:s.a.nonNegative}),padAngle:o.a.oneOfType([s.a.nonNegative,o.a.func]),padding:o.a.oneOfType([o.a.number,o.a.shape({top:o.a.number,bottom:o.a.number,left:o.a.number,right:o.a.number})]),radius:o.a.oneOfType([s.a.nonNegative,o.a.func]),sharedEvents:o.a.shape({events:o.a.array,getEventState:o.a.func}),sortKey:o.a.oneOfType([o.a.func,s.a.allOfType([s.a.integer,s.a.nonNegative]),o.a.string,o.a.arrayOf(o.a.string)]),sortOrder:o.a.oneOf(["ascending","descending"]),standalone:o.a.bool,startAngle:o.a.number,style:o.a.shape({parent:o.a.object,data:o.a.object,labels:o.a.object}),theme:o.a.object,width:s.a.nonNegative,x:o.a.oneOfType([o.a.func,s.a.allOfType([s.a.integer,s.a.nonNegative]),o.a.string,o.a.arrayOf(o.a.string)]),y:o.a.oneOfType([o.a.func,s.a.allOfType([s.a.integer,s.a.nonNegative]),o.a.string,o.a.arrayOf(o.a.string)])}}),Object.defineProperty(G,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{data:[{x:"A",y:1},{x:"B",y:2},{x:"C",y:3},{x:"D",y:1},{x:"E",y:2}],standalone:!0,dataComponent:r.a.createElement(T,null),labelComponent:r.a.createElement(c.a,null),containerComponent:r.a.createElement(u.a,null),groupComponent:r.a.createElement("g",null),sortOrder:"ascending",theme:d.a.grayscale}}),Object.defineProperty(G,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return function(e,a){e=l.a.modifyProps(e,a,"pie");var t=F(e),n=t.slices,r=t.style,i=t.data,o=t.origin,s=t.defaultRadius,c=t.labels,u=t.events,d=t.sharedEvents,f=t.height,p=t.width,g=t.standalone,b=t.name,h=t.innerRadius,v=t.cornerRadius,_=t.padAngle,O=e.radius||s,x={parent:{standalone:g,height:f,width:p,slices:n,name:b,style:r.parent}};return n.reduce((function(a,n,r){var s=y()({},i[r],{startAngle:l.a.radiansToDegrees(n.startAngle),endAngle:l.a.radiansToDegrees(n.endAngle),padAngle:l.a.radiansToDegrees(n.padAngle)}),f=P()(s.eventKey)?r:s.eventKey,p={index:r,slice:n,datum:s,data:i,origin:o,innerRadius:h,radius:O,cornerRadius:v,padAngle:_,style:H(r,t)};a[f]={data:p};var g=L(e,s,r);if(null!=g||c&&(u||d)){var b=l.a.evaluateProp(g,p);a[f].labels=V(b,m()({},e,p),t)}return a}),x)}(e,q)}}),Object.defineProperty(G,"getData",{configurable:!0,enumerable:!0,writable:!0,value:f.a.getData}),Object.defineProperty(G,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});a.a=Object(p.a)(G)},836:function(e,a,t){var n=t(7),r=t(839);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(839,(function(){"string"==typeof(r=(r=t(839)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=r.locals||{}},837:function(e,a,t){(a=t(6)(!1)).push([e.i,".ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.ins-c-dashboard__card--header.ins-m-padding-small{padding-bottom:6px}.ins-c-dashboard__card--body{display:flex;flex-direction:column}.ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}\n",""]),e.exports=a},838:function(e,a,t){(a=t(6)(!1)).push([e.i,".ins-c-download-report__button.pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm);padding-right:0}.pf-c-button__icon{color:var(--pf-global--Color--100)}\n",""]),e.exports=a},839:function(e,a,t){(a=t(6)(!1)).push([e.i,".ins-c-dashboard__icon-finished{fill:var(--pf-global--success-color--200)}.ins-c-dashboard__icon-running{fill:var(--pf-global--primary-color--100)}.ins-c-dashboard__icon-warning{fill:var(--pf-global--warning-color--100)}.ins-c-dashboard__icon-critical{fill:var(--pf-global--danger-color--100)}.ins-c-dashboard__icon-info{fill:var(--pf-global--info-color--100)}\n",""]),e.exports=a},840:function(e,a,t){(a=t(6)(!1)).push([e.i,".pf-c-button.pf-m-link{font-size:var(--pf-global--FontSize--sm)}.pf-c-button__icon{color:var(--pf-global--Color--100)}.ins-c-dashboard__info-inline{display:flex;flex-direction:row;align-items:center}.ins-c-dashboard__info-inline p{font-size:var(--pf-global--FontSize--sm);margin-left:var(--pf-global--spacer--sm);color:var(--pf-global--primary-color--100)}.ins-c-dashboard__info-inline.ins-m-padding-top{padding-top:var(--pf-global--spacer--xs)}\n",""]),e.exports=a},841:function(e,a,t){(a=t(6)(!1)).push([e.i,".ins-c-dashboard__error-state{margin-left:auto;margin-right:auto}.ins-c-dashboard__error-state--isSmall{padding:0}\n",""]),e.exports=a},844:function(e,a,t){"use strict";var n=t(1),r=t.n(n),i=t(196),o=t.n(i);t(836);a.a=function(){return r.a.createElement(o.a,{className:"ins-c-dashboard__icon-info"})}},845:function(e,a,t){"use strict";var n=t(1),r=t.n(n),i=t(194),o=t.n(i);t(836);a.a=function(){return r.a.createElement(o.a,{className:"ins-c-dashboard__icon-critical"})}},846:function(e,a,t){"use strict";var n=t(1),r=t.n(n),i=t(15),o=t.n(i),l=t(776),s=t(777),c=t(365),u=t(843),d=(t(852),function(e){var a=e.appName,t=e.isSmall,n=Object(c.a)();return r.a.createElement(s.EmptyState,{variant:s.EmptyStateVariant.full,className:"ins-c-dashboard__error-state ".concat(t&&"ins-c-dashboard__error-state--isSmall")},t?r.a.createElement(s.EmptyStateBody,null,n.formatMessage(u.a.errorStateTitle,{appName:a})):r.a.createElement(l.Title,{headingLevel:"h2",size:"md"}," ",n.formatMessage(u.a.errorStateTitle,{appName:a})," "))});d.propTypes={appName:o.a.string.isRequired,isSmall:o.a.bool},a.a=d},847:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(1),r=t.n(n),i=t(15),o=t.n(i),l=t(844),s=t(195),c=t.n(s),u=(t(836),function(){return r.a.createElement(c.a,{className:"ins-c-dashboard__icon-warning"})}),d=t(845),f=(t(851),{warning:u,info:l.a,critical:d.a}),p=function(e){var a=e.message,t=e.state,n=e.systemInventory,i=f[t]||r.a.Fragment;return r.a.createElement("div",{className:"ins-c-dashboard__info-inline ".concat(n?" ins-m-padding-top":"")},r.a.createElement(i,{"aria-hidden":"true"}),r.a.createElement("p",null,a))};p.propTypes={message:o.a.string,state:o.a.string,systemInventory:o.a.boolean};a.b=p},848:function(e,a,t){"use strict";t.d(a,"a",(function(){return y})),t.d(a,"c",(function(){return _})),t.d(a,"b",(function(){return O}));var n=t(343),r=t.n(n),i=t(344),o=t.n(i),l=(t(849),t(241)),s=t(778),c=(t(781),t(784)),u=(t(785),t(780)),d=t(389),f=t(1),p=t.n(f),g=(t(779),t(850),t(847),t(782)),m=t(783),b=t(776),h=t(15),v=t.n(h),y=function(e){var a=e.appName,t=e.children,n=o()(e,["appName","children"]);return p.a.createElement(s.Card,r()({className:"ins-c-dashboard__card ins-c-dashboard__card--".concat(a)},n),t)};y.propTypes={appName:v.a.string,children:v.a.any};v.a.any;v.a.any,v.a.any,v.a.string,v.a.string;var _=function(e){var a=e.title,t=e.subtitle,n=e.onDownload,i=e.children,s=e.titleClassName,c=o()(e,["title","subtitle","onDownload","children","titleClassName"]);return p.a.createElement(u.CardHeader,r()({className:"ins-c-dashboard__card--header ".concat(t?" ins-m-padding-small ":"")},c),p.a.createElement(g.Level,null,a&&p.a.createElement(m.LevelItem,null,p.a.createElement(b.Title,{headingLevel:"h2",size:"lg",className:s}," ",a," ")),t&&p.a.createElement(m.LevelItem,null,p.a.createElement("h2",{className:"ins-c-dashboard__card--header-subtitle"},t)),p.a.createElement(m.LevelItem,null,i,n&&p.a.createElement(l.Button,{variant:"link",icon:p.a.createElement(d.a,null),onClick:n},"Report"))))};_.propTypes={title:v.a.string,titleClassName:v.a.string,subtitle:v.a.string,children:v.a.any,onDownload:v.a.func};var O=function(e){var a=e.children,t=e.isHorizontalLayout,n=o()(e,["children","isHorizontalLayout"]);return p.a.createElement(c.CardBody,r()({className:"ins-c-dashboard__card--body ".concat(t?" ins-m-horizontal":"")},n),a)};O.propTypes={isHorizontalLayout:v.a.any,children:v.a.any};v.a.any},849:function(e,a,t){var n=t(7),r=t(837);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(837,(function(){"string"==typeof(r=(r=t(837)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=r.locals||{}},850:function(e,a,t){var n=t(7),r=t(838);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(838,(function(){"string"==typeof(r=(r=t(838)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=r.locals||{}},851:function(e,a,t){var n=t(7),r=t(840);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(840,(function(){"string"==typeof(r=(r=t(840)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=r.locals||{}},852:function(e,a,t){var n=t(7),r=t(841);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(841,(function(){"string"==typeof(r=(r=t(841)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=r.locals||{}},853:function(e,a,t){(a=t(6)(!1)).push([e.i,".ins-c-pie-chart__row{display:flex;flex-direction:row}.visually-hidden{position:absolute !important;top:-40px;font-size:10px;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}\n",""]),e.exports=a},865:function(e,a){e.exports=function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}},870:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(344),r=t.n(n),i=t(343),o=t.n(i),l=(t(871),t(588)),s=t(213),c=t(786),u=t(1),d=t.n(u),f=t(15),p=t.n(f),g=function(e){var a=o()({},e),t=function(e){var t=e.index,n=r()(e,["index"]);return d.a.createElement("a",{id:"".concat(a.ariaTitle.toLowerCase().replace(/\s/g,"-"),"-legend-").concat(t+1),href:a.legendClick[t],className:"pf-c-button pf-m-link pf-m-inline"},d.a.createElement(l.a,n))};return d.a.createElement("div",{className:"ins-c-pie-chart__row"},d.a.createElement("div",{style:{width:a.width,height:a.height,position:"relative"}},d.a.createElement(c.a,{ariaDesc:a.ariaDesc,ariaTitle:a.ariaTitle,constrainToVisibleArea:a.constrainToVisibleArea,data:a.data,height:a.height,labels:function(e){var a=e.datum;return"".concat(a.x,": ").concat(a.y)},padding:a.padding,width:a.width,colorScale:a.colorScale}),d.a.createElement("table",{tabIndex:"0",className:"visually-hidden","aria-label":a.ariaTitle+" data"},a.data.map((function(e,a){return[d.a.createElement("tr",{key:a},d.a.createElement("td",null,e.y),d.a.createElement("td",null,e.x))]})))),"true"===a.legend&&d.a.createElement("div",{className:"ins-c-pie-chart__legend","aria-label":"Chart legend",style:{width:a.legendWidth,height:a.legendHeight}},d.a.createElement(s.a,{height:a.legendHeight,width:a.legendWidth,fontSize:14,data:a.legendData,rowGutter:{top:-5,bottom:-5},orientation:a.legendOrientation,labelComponent:a.legendClick&&d.a.createElement(t,null)})))};g.propTypes={ariaDesc:p.a.string,ariaTitle:p.a.string,constrainToVisibleArea:p.a.boolean,data:p.a.array,legendData:p.a.array,padding:p.a.object,height:p.a.number,width:p.a.number,legendOrientation:p.a.boolean,colorScale:p.a.array,legend:p.a.boolean,legendWidth:p.a.number,legendHeight:p.a.number,legendClick:p.a.any,index:p.a.any}},871:function(e,a,t){var n=t(7),r=t(853);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=n(r,i);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(853,(function(){"string"==typeof(r=(r=t(853)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,a){if(!e&&a||e&&!a)return!1;var t;for(t in e)if(e[t]!==a[t])return!1;for(t in a)if(!e[t])return!1;return!0}(l,r.locals)?(l=r.locals,o(r)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=r.locals||{}},897:function(e,a,t){var n=t(6),r=t(589);(a=n(!1)).i(r),a.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main .pf-c-card{min-height:100%}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.ins-m-green{color:var(--pf-global--palette--green-400)}.ins-m-red{color:var(--pf-global--palette--red-100)}\n",""]),e.exports=a},914:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e){return e[0].toUpperCase()+e.substring(1)}}}]);
//# sourceMappingURL=15.252498787cb60e61f371.js.map