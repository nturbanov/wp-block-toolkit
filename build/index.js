!function(){var e={999:function(e,t,n){"use strict";n.r(t),n.d(t,{InlineNotice:function(){return a},PostControl:function(){return c},RequireBlocks:function(){return g},SortablePostsControl:function(){return Ce},TaxonomyControl:function(){return Ee},useAllPosts:function(){return Ie},useRequiredBlocks:function(){return h}});var o=window.wp.element,r=n(184),i=n.n(r),a=e=>{let{children:t,status:n="warning",size:r="regular"}=e;const a=i()("wpbt-inline-notice",`is-${n}`,`is-size-${r}`);return(0,o.createElement)("div",{className:a},t)},l=window.wp.components;const s=e=>({label:e.title.raw,value:e.id});var c=e=>{let{label:t,posts:n,value:r,onChange:i}=e;const[a,c]=(0,o.useState)([]);return(0,o.useEffect)((()=>{n&&c(n.map(s))}),[n]),null===typeof n?(0,o.createElement)(l.Spinner,null):(0,o.createElement)(u,null,(0,o.createElement)(l.ComboboxControl,{label:t,value:r,onChange:i,options:a}))};const u=e=>{let{children:t}=e;return(0,o.createElement)("div",{className:"wpbt-combobox-wrapper"},t)};var d=window.wp.i18n,f=window.wp.data;function h(e){const t=(0,f.useSelect)((e=>e("core/blocks").getBlockTypes().map((e=>e.name))),[]),n=e.filter((e=>!t.includes(e)));return{missingBlocks:n,hasRequiredBlocks:!n.length}}var p=JSON.parse('{"textdomain":"wp-block-toolkit"}'),g=e=>{let{children:t,blocks:n}=e;const{textdomain:r}=p,{hasRequiredBlocks:i,missingBlocks:l}=h(n);return(0,o.createElement)(o.Fragment,null,i?t:(0,o.createElement)(a,{status:"error"},(0,d.__)("Couldn't find all the required blocks. Please install and activate the following blocks: ",r),(0,o.createElement)("strong",null,l.join(", "))))};function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.apply(this,arguments)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function v(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);_n=!0);}catch(e){a=!0,r=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw r}}return i}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach((function(t){x(e,t,n[t])}))}return e}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),e}function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}var N=window.React,D=window.ReactDOM,A=n(143),P=n.n(A);var M=n(697),j=n.n(M),L=function(){function e(){S(this,e),x(this,"refs",{})}return C(e,[{key:"add",value:function(e,t){this.refs[e]||(this.refs[e]=[]),this.refs[e].push(t)}},{key:"remove",value:function(e,t){var n=this.getIndex(e,t);-1!==n&&this.refs[e].splice(n,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var e=this;return this.refs[this.active.collection].find((function(t){return t.node.sortableInfo.index==e.active.index}))}},{key:"getIndex",value:function(e,t){return this.refs[e].indexOf(t)}},{key:"getOrderedRefs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.active.collection;return this.refs[e].sort(W)}}]),e}();function W(e,t){return e.node.sortableInfo.index-t.node.sortableInfo.index}function B(e,t){return Object.keys(e).reduce((function(n,o){return-1===t.indexOf(o)&&(n[o]=e[o]),n}),{})}var K={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},H=function(){if("undefined"==typeof window||"undefined"==typeof document)return"";var e=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return"ms"===t?"ms":t&&t.length?t[0].toUpperCase()+t.substr(1):""}();function G(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}function U(e,t){e.style["".concat(H,"Transform")]=null==t?"":"translate3d(".concat(t.x,"px,").concat(t.y,"px,0)")}function F(e,t){e.style["".concat(H,"TransitionDuration")]=null==t?"":"".concat(t,"ms")}function X(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}function Y(e,t,n){return Math.max(e,Math.min(n,t))}function q(e){return"px"===e.substr(-2)?parseFloat(e):0}function V(e){var t=window.getComputedStyle(e);return{bottom:q(t.marginBottom),left:q(t.marginLeft),right:q(t.marginRight),top:q(t.marginTop)}}function z(e,t){var n=t.displayName||t.name;return n?"".concat(e,"(").concat(n,")"):e}function $(e,t){var n=e.getBoundingClientRect();return{top:n.top+t.top,left:n.left+t.left}}function J(e){return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches.length?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}}function Q(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length}function Z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,top:0};if(e){var o={left:n.left+e.offsetLeft,top:n.top+e.offsetTop};return e.parentNode===t?o:Z(e.parentNode,t,o)}}function ee(e,t,n){return e<n&&e>t?e-1:e>n&&e<t?e+1:e}function te(e){var t=e.lockOffset,n=e.width,o=e.height,r=t,i=t,a="px";if("string"==typeof t){var l=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);P()(null!==l,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',t),r=parseFloat(t),i=parseFloat(t),a=l[1]}return P()(isFinite(r)&&isFinite(i),"lockOffset value should be a finite. Given %s",t),"%"===a&&(r=r*n/100,i=i*o/100),{x:r,y:i}}function ne(e){var t=e.height,n=e.width,o=e.lockOffset,r=Array.isArray(o)?o:[o,o];P()(2===r.length,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",o);var i=b(r,2),a=i[0],l=i[1];return[te({height:t,lockOffset:a,width:n}),te({height:t,lockOffset:l,width:n})]}function oe(e){return e instanceof HTMLElement?function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(e){return n.test(t[e])}))}(e)?e:oe(e.parentNode):null}function re(e){var t=window.getComputedStyle(e);return"grid"===t.display?{x:q(t.gridColumnGap),y:q(t.gridRowGap)}:{x:0,y:0}}var ie="BUTTON",ae="INPUT",le="OPTION",se="TEXTAREA",ce="SELECT";function ue(e){var t,n="input, textarea, select, canvas, [contenteditable]",o=e.querySelectorAll(n),r=e.cloneNode(!0);return(t=r.querySelectorAll(n),function(e){if(Array.isArray(e))return y(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,t){"file"!==e.type&&(e.value=o[t].value),"radio"===e.type&&e.name&&(e.name="__sortableClone__".concat(e.name)),"CANVAS"===e.tagName&&o[t].width>0&&o[t].height>0&&e.getContext("2d").drawImage(o[t],0,0)})),r}function de(e){return null!=e.sortableHandle}var fe=function(){function e(t,n){S(this,e),this.container=t,this.onScrollCallback=n}return C(e,[{key:"clear",value:function(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(e){var t=this,n=e.translate,o=e.minTranslate,r=e.maxTranslate,i=e.width,a=e.height,l={x:0,y:0},s={x:1,y:1},c=this.container,u=c.scrollTop,d=c.scrollLeft,f=c.scrollHeight,h=c.scrollWidth,p=0===u,g=f-u-c.clientHeight==0,m=0===d,y=h-d-c.clientWidth==0;n.y>=r.y-a/2&&!g?(l.y=1,s.y=10*Math.abs((r.y-a/2-n.y)/a)):n.x>=r.x-i/2&&!y?(l.x=1,s.x=10*Math.abs((r.x-i/2-n.x)/i)):n.y<=o.y+a/2&&!p?(l.y=-1,s.y=10*Math.abs((n.y-a/2-o.y)/a)):n.x<=o.x+i/2&&!m&&(l.x=-1,s.x=10*Math.abs((n.x-i/2-o.x)/i)),this.interval&&(this.clear(),this.isAutoScrolling=!1),0===l.x&&0===l.y||(this.interval=setInterval((function(){t.isAutoScrolling=!0;var e={left:s.x*l.x,top:s.y*l.y};t.container.scrollTop+=e.top,t.container.scrollLeft+=e.left,t.onScrollCallback(e)}),5))}}]),e}(),he={axis:j().oneOf(["x","y","xy"]),contentWindow:j().any,disableAutoscroll:j().bool,distance:j().number,getContainer:j().func,getHelperDimensions:j().func,helperClass:j().string,helperContainer:j().oneOfType([j().func,"undefined"==typeof HTMLElement?j().any:j().instanceOf(HTMLElement)]),hideSortableGhost:j().bool,keyboardSortingTransitionDuration:j().number,lockAxis:j().string,lockOffset:j().oneOfType([j().number,j().string,j().arrayOf(j().oneOfType([j().number,j().string]))]),lockToContainerEdges:j().bool,onSortEnd:j().func,onSortMove:j().func,onSortOver:j().func,onSortStart:j().func,pressDelay:j().number,pressThreshold:j().number,keyCodes:j().shape({lift:j().arrayOf(j().number),drop:j().arrayOf(j().number),cancel:j().arrayOf(j().number),up:j().arrayOf(j().number),down:j().arrayOf(j().number)}),shouldCancelStart:j().func,transitionDuration:j().number,updateBeforeSortStart:j().func,useDragHandle:j().bool,useWindowAsScrollContainer:j().bool},pe={lift:[32],drop:[32],cancel:[27],up:[38,37],down:[40,39]},ge={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:function(e){var t=e.node;return{height:t.offsetHeight,width:t.offsetWidth}},hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:pe,shouldCancelStart:function(e){return-1!==[ae,se,ce,le,ie].indexOf(e.target.tagName)||!!X(e.target,(function(e){return"true"===e.contentEditable}))},transitionDuration:300,useWindowAsScrollContainer:!1},me=Object.keys(he);function ye(e){P()(!(e.distance&&e.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}function ve(e,t){try{var n=e()}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,value)}var be=(0,N.createContext)({manager:{}}),xe={index:j().number.isRequired,collection:j().oneOfType([j().number,j().string]),disabled:j().bool},we=Object.keys(xe);const Se=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){var e,t;S(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return x(T(T(t=k(this,(e=I(n)).call.apply(e,[this].concat(r))))),"wrappedInstance",(0,N.createRef)()),t}return _(n,t),C(n,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(e){this.node&&(e.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),e.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),e.collection!==this.props.collection&&(this.unregister(e.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var e=this.props,t=e.collection,n=e.disabled,o=e.index,r=(0,D.findDOMNode)(this);r.sortableInfo={collection:t,disabled:n,index:o,manager:this.context.manager},this.node=r,this.ref={node:r},this.context.manager.add(t,this.ref)}},{key:"unregister",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.collection;this.context.manager.remove(e,this.ref)}},{key:"getWrappedInstance",value:function(){return P()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var t=o.withRef?this.wrappedInstance:null;return(0,N.createElement)(e,m({ref:t},B(this.props,we)))}}]),n}(N.Component),x(t,"displayName",z("sortableElement",e)),x(t,"contextType",be),x(t,"propTypes",xe),x(t,"defaultProps",{collection:0}),n}((e=>{let{value:t,onRemove:n}=e;return(0,o.createElement)("div",{className:"wpbt-sortable-posts-control__sortable-item"},(0,o.createElement)("span",null,t.label),(0,o.createElement)("div",{className:"wpbt-sortable-posts-control__sortable-remove",onClick:()=>n(t)}))})),Oe=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(e){var t;S(this,n),x(T(T(t=k(this,I(n).call(this,e)))),"state",{}),x(T(T(t)),"handleStart",(function(e){var n=t.props,o=n.distance,r=n.shouldCancelStart;if(2!==e.button&&!r(e)){t.touched=!0,t.position=J(e);var i=X(e.target,(function(e){return null!=e.sortableInfo}));if(i&&i.sortableInfo&&t.nodeIsChild(i)&&!t.state.sorting){var a=t.props.useDragHandle,l=i.sortableInfo,s=l.index,c=l.collection;if(l.disabled)return;if(a&&!X(e.target,de))return;t.manager.active={collection:c,index:s},Q(e)||"A"!==e.target.tagName||e.preventDefault(),o||(0===t.props.pressDelay?t.handlePress(e):t.pressTimer=setTimeout((function(){return t.handlePress(e)}),t.props.pressDelay))}}})),x(T(T(t)),"nodeIsChild",(function(e){return e.sortableInfo.manager===t.manager})),x(T(T(t)),"handleMove",(function(e){var n=t.props,o=n.distance,r=n.pressThreshold;if(!t.state.sorting&&t.touched&&!t._awaitingUpdateBeforeSortStart){var i=J(e),a={x:t.position.x-i.x,y:t.position.y-i.y},l=Math.abs(a.x)+Math.abs(a.y);t.delta=a,o||r&&!(l>=r)?o&&l>=o&&t.manager.isActive()&&t.handlePress(e):(clearTimeout(t.cancelTimer),t.cancelTimer=setTimeout(t.cancel,0))}})),x(T(T(t)),"handleEnd",(function(){t.touched=!1,t.cancel()})),x(T(T(t)),"cancel",(function(){var e=t.props.distance;t.state.sorting||(e||clearTimeout(t.pressTimer),t.manager.active=null)})),x(T(T(t)),"handlePress",(function(e){try{var n=t.manager.getActive(),o=function(){if(n){var o=function(){var n=f.sortableInfo.index,o=V(f),r=re(t.container),c=t.scrollContainer.getBoundingClientRect(),g=a({index:n,node:f,collection:h});if(t.node=f,t.margin=o,t.gridGap=r,t.width=g.width,t.height=g.height,t.marginOffset={x:t.margin.left+t.margin.right+t.gridGap.x,y:Math.max(t.margin.top,t.margin.bottom,t.gridGap.y)},t.boundingClientRect=f.getBoundingClientRect(),t.containerBoundingRect=c,t.index=n,t.newIndex=n,t.axis={x:i.indexOf("x")>=0,y:i.indexOf("y")>=0},t.offsetEdge=Z(f,t.container),t.initialOffset=J(p?w({},e,{pageX:t.boundingClientRect.left,pageY:t.boundingClientRect.top}):e),t.initialScroll={left:t.scrollContainer.scrollLeft,top:t.scrollContainer.scrollTop},t.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},t.helper=t.helperContainer.appendChild(ue(f)),G(t.helper,{boxSizing:"border-box",height:"".concat(t.height,"px"),left:"".concat(t.boundingClientRect.left-o.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(t.boundingClientRect.top-o.top,"px"),width:"".concat(t.width,"px")}),p&&t.helper.focus(),s&&(t.sortableGhost=f,G(f,{opacity:0,visibility:"hidden"})),t.minTranslate={},t.maxTranslate={},p){var m=d?{top:0,left:0,width:t.contentWindow.innerWidth,height:t.contentWindow.innerHeight}:t.containerBoundingRect,y=m.top,v=m.left,b=m.width,x=y+m.height,S=v+b;t.axis.x&&(t.minTranslate.x=v-t.boundingClientRect.left,t.maxTranslate.x=S-(t.boundingClientRect.left+t.width)),t.axis.y&&(t.minTranslate.y=y-t.boundingClientRect.top,t.maxTranslate.y=x-(t.boundingClientRect.top+t.height))}else t.axis.x&&(t.minTranslate.x=(d?0:c.left)-t.boundingClientRect.left-t.width/2,t.maxTranslate.x=(d?t.contentWindow.innerWidth:c.left+c.width)-t.boundingClientRect.left-t.width/2),t.axis.y&&(t.minTranslate.y=(d?0:c.top)-t.boundingClientRect.top-t.height/2,t.maxTranslate.y=(d?t.contentWindow.innerHeight:c.top+c.height)-t.boundingClientRect.top-t.height/2);l&&l.split(" ").forEach((function(e){return t.helper.classList.add(e)})),t.listenerNode=e.touches?e.target:t.contentWindow,p?(t.listenerNode.addEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.addEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.addEventListener("keydown",t.handleKeyDown)):(K.move.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortMove,!1)})),K.end.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortEnd,!1)}))),t.setState({sorting:!0,sortingIndex:n}),u&&u({node:f,index:n,collection:h,isKeySorting:p,nodes:t.manager.getOrderedRefs(),helper:t.helper},e),p&&t.keyMove(0)},r=t.props,i=r.axis,a=r.getHelperDimensions,l=r.helperClass,s=r.hideSortableGhost,c=r.updateBeforeSortStart,u=r.onSortStart,d=r.useWindowAsScrollContainer,f=n.node,h=n.collection,p=t.manager.isKeySorting,g=function(){if("function"==typeof c){t._awaitingUpdateBeforeSortStart=!0;var n=ve((function(){var t=f.sortableInfo.index;return Promise.resolve(c({collection:h,index:t,node:f,isKeySorting:p},e)).then((function(){}))}),(function(e,n){if(t._awaitingUpdateBeforeSortStart=!1,e)throw n;return n}));if(n&&n.then)return n.then((function(){}))}}();return g&&g.then?g.then(o):o()}}();return Promise.resolve(o&&o.then?o.then((function(){})):void 0)}catch(e){return Promise.reject(e)}})),x(T(T(t)),"handleSortMove",(function(e){var n=t.props.onSortMove;"function"==typeof e.preventDefault&&e.cancelable&&e.preventDefault(),t.updateHelperPosition(e),t.animateNodes(),t.autoscroll(),n&&n(e)})),x(T(T(t)),"handleSortEnd",(function(e){var n=t.props,o=n.hideSortableGhost,r=n.onSortEnd,i=t.manager,a=i.active.collection,l=i.isKeySorting,s=t.manager.getOrderedRefs();t.listenerNode&&(l?(t.listenerNode.removeEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("keydown",t.handleKeyDown)):(K.move.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortMove)})),K.end.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortEnd)})))),t.helper.parentNode.removeChild(t.helper),o&&t.sortableGhost&&G(t.sortableGhost,{opacity:"",visibility:""});for(var c=0,u=s.length;c<u;c++){var d=s[c],f=d.node;d.edgeOffset=null,d.boundingClientRect=null,U(f,null),F(f,null),d.translate=null}t.autoScroller.clear(),t.manager.active=null,t.manager.isKeySorting=!1,t.setState({sorting:!1,sortingIndex:null}),"function"==typeof r&&r({collection:a,newIndex:t.newIndex,oldIndex:t.index,isKeySorting:l,nodes:s},e),t.touched=!1})),x(T(T(t)),"autoscroll",(function(){var e=t.props.disableAutoscroll,n=t.manager.isKeySorting;if(e)t.autoScroller.clear();else{if(n){var o=w({},t.translate),r=0,i=0;return t.axis.x&&(o.x=Math.min(t.maxTranslate.x,Math.max(t.minTranslate.x,t.translate.x)),r=t.translate.x-o.x),t.axis.y&&(o.y=Math.min(t.maxTranslate.y,Math.max(t.minTranslate.y,t.translate.y)),i=t.translate.y-o.y),t.translate=o,U(t.helper,t.translate),t.scrollContainer.scrollLeft+=r,void(t.scrollContainer.scrollTop+=i)}t.autoScroller.update({height:t.height,maxTranslate:t.maxTranslate,minTranslate:t.minTranslate,translate:t.translate,width:t.width})}})),x(T(T(t)),"onAutoScroll",(function(e){t.translate.x+=e.left,t.translate.y+=e.top,t.animateNodes()})),x(T(T(t)),"handleKeyDown",(function(e){var n=e.keyCode,o=t.props,r=o.shouldCancelStart,i=o.keyCodes,a=w({},pe,void 0===i?{}:i);t.manager.active&&!t.manager.isKeySorting||!(t.manager.active||a.lift.includes(n)&&!r(e)&&t.isValidSortingTarget(e))||(e.stopPropagation(),e.preventDefault(),a.lift.includes(n)&&!t.manager.active?t.keyLift(e):a.drop.includes(n)&&t.manager.active?t.keyDrop(e):a.cancel.includes(n)?(t.newIndex=t.manager.active.index,t.keyDrop(e)):a.up.includes(n)?t.keyMove(-1):a.down.includes(n)&&t.keyMove(1))})),x(T(T(t)),"keyLift",(function(e){var n=e.target,o=X(n,(function(e){return null!=e.sortableInfo})).sortableInfo,r=o.index,i=o.collection;t.initialFocusedNode=n,t.manager.isKeySorting=!0,t.manager.active={index:r,collection:i},t.handlePress(e)})),x(T(T(t)),"keyMove",(function(e){var n=t.manager.getOrderedRefs(),o=n[n.length-1].node.sortableInfo.index,r=t.newIndex+e,i=t.newIndex;if(!(r<0||r>o)){t.prevIndex=i,t.newIndex=r;var a=ee(t.newIndex,t.prevIndex,t.index),l=n.find((function(e){return e.node.sortableInfo.index===a})),s=l.node,c=t.containerScrollDelta,u=l.boundingClientRect||$(s,c),d=l.translate||{x:0,y:0},f=u.top+d.y-c.top,h=u.left+d.x-c.left,p=i<r,g=p&&t.axis.x?s.offsetWidth-t.width:0,m=p&&t.axis.y?s.offsetHeight-t.height:0;t.handleSortMove({pageX:h+g,pageY:f+m,ignoreTransition:0===e})}})),x(T(T(t)),"keyDrop",(function(e){t.handleSortEnd(e),t.initialFocusedNode&&t.initialFocusedNode.focus()})),x(T(T(t)),"handleKeyEnd",(function(e){t.manager.active&&t.keyDrop(e)})),x(T(T(t)),"isValidSortingTarget",(function(e){var n=t.props.useDragHandle,o=e.target,r=X(o,(function(e){return null!=e.sortableInfo}));return r&&r.sortableInfo&&!r.sortableInfo.disabled&&(n?de(o):o.sortableInfo)}));var o=new L;return ye(e),t.manager=o,t.wrappedInstance=(0,N.createRef)(),t.sortableContextValue={manager:o},t.events={end:t.handleEnd,move:t.handleMove,start:t.handleStart},t}return _(n,t),C(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.useWindowAsScrollContainer,n=this.getContainer();Promise.resolve(n).then((function(n){e.container=n,e.document=e.container.ownerDocument||document;var o=e.props.contentWindow||e.document.defaultView||window;e.contentWindow="function"==typeof o?o():o,e.scrollContainer=t?e.document.scrollingElement||e.document.documentElement:oe(e.container)||e.container,e.autoScroller=new fe(e.scrollContainer,e.onAutoScroll),Object.keys(e.events).forEach((function(t){return K[t].forEach((function(n){return e.container.addEventListener(n,e.events[t],!1)}))})),e.container.addEventListener("keydown",e.handleKeyDown)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach((function(t){return K[t].forEach((function(n){return e.container.removeEventListener(n,e.events[t])}))})),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(e){var t=this.props,n=t.lockAxis,o=t.lockOffset,r=t.lockToContainerEdges,i=t.transitionDuration,a=t.keyboardSortingTransitionDuration,l=void 0===a?i:a,s=this.manager.isKeySorting,c=e.ignoreTransition,u=J(e),d={x:u.x-this.initialOffset.x,y:u.y-this.initialOffset.y};if(d.y-=window.pageYOffset-this.initialWindowScroll.top,d.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=d,r){var f=b(ne({height:this.height,lockOffset:o,width:this.width}),2),h=f[0],p=f[1],g={x:this.width/2-h.x,y:this.height/2-h.y},m={x:this.width/2-p.x,y:this.height/2-p.y};d.x=Y(this.minTranslate.x+g.x,this.maxTranslate.x-m.x,d.x),d.y=Y(this.minTranslate.y+g.y,this.maxTranslate.y-m.y,d.y)}"x"===n?d.y=0:"y"===n&&(d.x=0),s&&l&&!c&&F(this.helper,l),U(this.helper,d)}},{key:"animateNodes",value:function(){var e=this.props,t=e.transitionDuration,n=e.hideSortableGhost,o=e.onSortOver,r=this.containerScrollDelta,i=this.windowScrollDelta,a=this.manager.getOrderedRefs(),l=this.offsetEdge.left+this.translate.x+r.left,s=this.offsetEdge.top+this.translate.y+r.top,c=this.manager.isKeySorting,u=this.newIndex;this.newIndex=null;for(var d=0,f=a.length;d<f;d++){var h=a[d].node,p=h.sortableInfo.index,g=h.offsetWidth,m=h.offsetHeight,y={height:this.height>m?m/2:this.height/2,width:this.width>g?g/2:this.width/2},v=c&&p>this.index&&p<=u,b=c&&p<this.index&&p>=u,x={x:0,y:0},w=a[d].edgeOffset;w||(w=Z(h,this.container),a[d].edgeOffset=w,c&&(a[d].boundingClientRect=$(h,r)));var S=d<a.length-1&&a[d+1],O=d>0&&a[d-1];S&&!S.edgeOffset&&(S.edgeOffset=Z(S.node,this.container),c&&(S.boundingClientRect=$(S.node,r))),p!==this.index?(t&&F(h,t),this.axis.x?this.axis.y?b||p<this.index&&(l+i.left-y.width<=w.left&&s+i.top<=w.top+y.height||s+i.top+y.height<=w.top)?(x.x=this.width+this.marginOffset.x,w.left+x.x>this.containerBoundingRect.width-y.width&&S&&(x.x=S.edgeOffset.left-w.left,x.y=S.edgeOffset.top-w.top),null===this.newIndex&&(this.newIndex=p)):(v||p>this.index&&(l+i.left+y.width>=w.left&&s+i.top+y.height>=w.top||s+i.top+y.height>=w.top+m))&&(x.x=-(this.width+this.marginOffset.x),w.left+x.x<this.containerBoundingRect.left+y.width&&O&&(x.x=O.edgeOffset.left-w.left,x.y=O.edgeOffset.top-w.top),this.newIndex=p):v||p>this.index&&l+i.left+y.width>=w.left?(x.x=-(this.width+this.marginOffset.x),this.newIndex=p):(b||p<this.index&&l+i.left<=w.left+y.width)&&(x.x=this.width+this.marginOffset.x,null==this.newIndex&&(this.newIndex=p)):this.axis.y&&(v||p>this.index&&s+i.top+y.height>=w.top?(x.y=-(this.height+this.marginOffset.y),this.newIndex=p):(b||p<this.index&&s+i.top<=w.top+y.height)&&(x.y=this.height+this.marginOffset.y,null==this.newIndex&&(this.newIndex=p))),U(h,x),a[d].translate=x):n&&(this.sortableGhost=h,G(h,{opacity:0,visibility:"hidden"}))}null==this.newIndex&&(this.newIndex=this.index),c&&(this.newIndex=u);var C=c?this.prevIndex:u;o&&this.newIndex!==C&&o({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:C,isKeySorting:c,nodes:a,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return P()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var e=this.props.getContainer;return"function"!=typeof e?(0,D.findDOMNode)(this):e(o.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var t=o.withRef?this.wrappedInstance:null;return(0,N.createElement)(be.Provider,{value:this.sortableContextValue},(0,N.createElement)(e,m({ref:t},B(this.props,me))))}},{key:"helperContainer",get:function(){var e=this.props.helperContainer;return"function"==typeof e?e():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){return this.props.useWindowAsScrollContainer?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),n}(N.Component),x(t,"displayName",z("sortableList",e)),x(t,"defaultProps",ge),x(t,"propTypes",he),n}((e=>{let{items:t,onItemRemove:n}=e;return(0,o.createElement)("div",{className:"wpbt-sortable-posts-control__sortable-list"},t.map(((e,t)=>(0,o.createElement)(Se,{key:`item-${e.value}`,index:t,value:e,onRemove:n}))))}));var Ce=e=>{let{label:t,posts:n,value:r,onChange:a}=e;const{textdomain:c}=p,[u,f]=(0,o.useState)([]),[h,g]=(0,o.useState)([]),[m,y]=(0,o.useState)("");return(0,o.useEffect)((()=>{n&&f(n.map(s))}),[n]),(0,o.useEffect)((()=>{const e=m?u.filter((e=>e.label.toLowerCase().includes(m.toLowerCase()))):u;g(e)}),[u,m]),null===typeof n?(0,o.createElement)(l.Spinner,null):u&&u.length?(0,o.createElement)(l.BaseControl,{label:t,className:"wpbt-sortable-posts-control"},(0,o.createElement)("h4",{className:"wpbt-sortable-posts-control__subtitle"},(0,d.__)("Select posts",c)),(0,o.createElement)("input",{type:"text",placeholder:(0,d.__)("Search",c),value:m,onChange:e=>y(e.target.value),className:"wpbt-sortable-posts-control__search"}),(0,o.createElement)("div",{className:"wpbt-sortable-posts-control__list"},h.map(((e,t)=>{const n=r.find((t=>t===e.value)),l=i()("wpbt-sortable-posts-control__option",{"is-selected":n});return(0,o.createElement)("button",{key:t,onClick:()=>((e,t)=>{a(t?r.filter((t=>t!==e.value)):[...r,e.value])})(e,n),className:l},e.label)}))),(0,o.createElement)("h4",{className:"wpbt-sortable-posts-control__subtitle"},(0,d.__)("Select order",c)),(0,o.createElement)("div",{className:"wpbt-sortable-posts-control__list"},(0,o.createElement)(Oe,{items:r.map((e=>u.find((t=>t.value===e)))),onSortEnd:e=>{let{oldIndex:t,newIndex:n}=e;var o,i,l;a((i=t,l=n,(o=(o=r).slice()).splice(l<0?o.length+l:l,0,o.splice(i,1)[0]),o))},distance:5,onItemRemove:e=>{a(r.filter((t=>t!==e.value)))}}))):null},Ee=e=>{let{label:t,taxonomies:n,value:r,onChange:i}=e;const[a,s]=(0,o.useState)(""),[c,u]=(0,o.useState)(n);return(0,o.useEffect)((()=>{if(n){const e=a?n.filter((e=>{let{name:t}=e;return t.toLowerCase().includes(a.toLowerCase())})):n;u(e)}}),[n,a]),null===typeof n?(0,o.createElement)(l.Spinner,null):(0,o.createElement)(l.BaseControl,{label:t},(0,o.createElement)(Te,{value:a,onChange:e=>s(e.target.value)}),(0,o.createElement)(ke,null,!!c&&c.map((e=>{let{id:t,name:n}=e;return(0,o.createElement)(l.CheckboxControl,{key:t,label:(0,o.createElement)(o.RawHTML,null,n),checked:r.includes(t),onChange:e=>((e,t)=>{i(t?[...r,e]:r.filter((t=>t!==e)))})(t,e)})}))))};const Te=e=>{let{value:t,onChange:n}=e;const{textdomain:r}=p;return(0,o.createElement)("div",{className:"wpbt-search-input"},(0,o.createElement)("input",{type:"text",placeholder:(0,d.__)("Search",r),value:t,onChange:n}))},ke=e=>{let{children:t}=e;return(0,o.createElement)("div",{className:"wpbt-checkbox-wrapper"},t)};function Ie(e){return(0,f.useSelect)((t=>t("core").getEntityRecords("postType",e,{per_page:-1,orderby:"title",order:"asc",status:"publish"})),[e])}},184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)o.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},143:function(e){"use strict";e.exports=function(e,t,n,o,r,i,a,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,a,l],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},703:function(e,t,n){"use strict";var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o=n(999);module.exports=o}();