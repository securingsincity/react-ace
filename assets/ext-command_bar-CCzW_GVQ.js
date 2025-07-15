import{a0 as W}from"./theme-terminal-ylQyTtHj.js";function B(g,E){for(var c=0;c<E.length;c++){const p=E[c];if(typeof p!="string"&&!Array.isArray(p)){for(const b in p)if(b!=="default"&&!(b in g)){const $=Object.getOwnPropertyDescriptor(p,b);$&&Object.defineProperty(g,b,$.get?$:{enumerable:!0,get:()=>p[b]})}}}return Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}},D;function U(){return D||(D=1,function(g,E){ace.define("ace/ext/command_bar",["require","exports","module","ace/tooltip","ace/lib/event_emitter","ace/lib/lang","ace/lib/dom","ace/lib/oop","ace/lib/useragent"],function(c,p,b){var $=this&&this.__values||function(o){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&o[t],i=0;if(e)return e.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&i>=o.length&&(o=void 0),{value:o&&o[i++],done:!o}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},M=c("../tooltip").Tooltip,j=c("../lib/event_emitter").EventEmitter,L=c("../lib/lang"),f=c("../lib/dom"),F=c("../lib/oop"),H=c("../lib/useragent"),a="command_bar_tooltip_button",w="command_bar_button_value",k="command_bar_button_caption",y="command_bar_keybinding",d="command_bar_tooltip",C="MoreOptionsButton",P=100,R=4,O=function(o,t){return t.row>o.row||t.row===o.row&&t.column>o.column?o:t},T={Ctrl:{mac:"^"},Option:{mac:"⌥"},Command:{mac:"⌘"},Cmd:{mac:"⌘"},Shift:"⇧",Left:"←",Right:"→",Up:"↑",Down:"↓"},A=function(){function o(t,e){var i,l;e=e||{},this.parentNode=t,this.tooltip=new M(this.parentNode),this.moreOptions=new M(this.parentNode),this.maxElementsOnTooltip=e.maxElementsOnTooltip||R,this.$alwaysShow=e.alwaysShow||!1,this.eventListeners={},this.elements={},this.commands={},this.tooltipEl=f.buildDom(["div",{class:d}],this.tooltip.getElement()),this.moreOptionsEl=f.buildDom(["div",{class:d+" tooltip_more_options"}],this.moreOptions.getElement()),this.$showTooltipTimer=L.delayedCall(this.$showTooltip.bind(this),e.showDelay||P),this.$hideTooltipTimer=L.delayedCall(this.$hideTooltip.bind(this),e.hideDelay||P),this.$tooltipEnter=this.$tooltipEnter.bind(this),this.$onMouseMove=this.$onMouseMove.bind(this),this.$onChangeScroll=this.$onChangeScroll.bind(this),this.$onEditorChangeSession=this.$onEditorChangeSession.bind(this),this.$scheduleTooltipForHide=this.$scheduleTooltipForHide.bind(this),this.$preventMouseEvent=this.$preventMouseEvent.bind(this);try{for(var s=$(["mousedown","mouseup","click"]),n=s.next();!n.done;n=s.next()){var r=n.value;this.tooltip.getElement().addEventListener(r,this.$preventMouseEvent),this.moreOptions.getElement().addEventListener(r,this.$preventMouseEvent)}}catch(u){i={error:u}}finally{try{n&&!n.done&&(l=s.return)&&l.call(s)}finally{if(i)throw i.error}}}return o.prototype.registerCommand=function(t,e){var i=Object.keys(this.commands).length<this.maxElementsOnTooltip;!i&&!this.elements[C]&&this.$createCommand(C,{name:"···",exec:(function(){this.$shouldHideMoreOptions=!1,this.$setMoreOptionsVisibility(!this.isMoreOptionsShown())}).bind(this),type:"checkbox",getValue:(function(){return this.isMoreOptionsShown()}).bind(this),enabled:!0},!0),this.$createCommand(t,e,i),this.isShown()&&this.updatePosition()},o.prototype.isShown=function(){return!!this.tooltip&&this.tooltip.isOpen},o.prototype.isMoreOptionsShown=function(){return!!this.moreOptions&&this.moreOptions.isOpen},o.prototype.getAlwaysShow=function(){return this.$alwaysShow},o.prototype.setAlwaysShow=function(t){this.$alwaysShow=t,this.$updateOnHoverHandlers(!this.$alwaysShow),this._signal("alwaysShow",this.$alwaysShow)},o.prototype.attach=function(t){!t||this.isShown()&&this.editor===t||(this.detach(),this.editor=t,this.editor.on("changeSession",this.$onEditorChangeSession),this.editor.session&&(this.editor.session.on("changeScrollLeft",this.$onChangeScroll),this.editor.session.on("changeScrollTop",this.$onChangeScroll)),this.getAlwaysShow()?this.$showTooltip():this.$updateOnHoverHandlers(!0))},o.prototype.updatePosition=function(){if(this.editor){var t=this.editor.renderer,e;if(this.editor.selection.getAllRanges?e=this.editor.selection.getAllRanges():e=[this.editor.getSelectionRange()],!!e.length){for(var i=O(e[0].start,e[0].end),l=0,s;s=e[l];l++)i=O(i,O(s.start,s.end));var n=t.$cursorLayer.getPixelPosition(i,!0),r=this.tooltip.getElement(),u=window.innerWidth,h=window.innerHeight,_=this.editor.container.getBoundingClientRect();n.top+=_.top-t.layerConfig.offset,n.left+=_.left+t.gutterWidth-t.scrollLeft;var N=n.top>=_.top&&n.top<=_.bottom&&n.left>=_.left+t.gutterWidth&&n.left<=_.right;if(!N&&this.isShown()){this.$hideTooltip();return}else if(N&&!this.isShown()&&this.getAlwaysShow()){this.$showTooltip();return}var m=n.top-r.offsetHeight,v=Math.min(u-r.offsetWidth,n.left),V=m>=0&&m+r.offsetHeight<=h&&v>=0&&v+r.offsetWidth<=u;if(!V){this.$hideTooltip();return}if(this.tooltip.setPosition(v,m),this.isMoreOptionsShown()){m=m+r.offsetHeight,v=this.elements[C].getBoundingClientRect().left;var S=this.moreOptions.getElement(),h=window.innerHeight;m+S.offsetHeight>h&&(m-=r.offsetHeight+S.offsetHeight),v+S.offsetWidth>u&&(v=u-S.offsetWidth),this.moreOptions.setPosition(v,m)}}}},o.prototype.update=function(){Object.keys(this.elements).forEach(this.$updateElement.bind(this))},o.prototype.detach=function(){this.tooltip.hide(),this.moreOptions.hide(),this.$updateOnHoverHandlers(!1),this.editor&&(this.editor.off("changeSession",this.$onEditorChangeSession),this.editor.session&&(this.editor.session.off("changeScrollLeft",this.$onChangeScroll),this.editor.session.off("changeScrollTop",this.$onChangeScroll))),this.$mouseInTooltip=!1,this.editor=null},o.prototype.destroy=function(){this.tooltip&&this.moreOptions&&(this.detach(),this.tooltip.destroy(),this.moreOptions.destroy()),this.eventListeners={},this.commands={},this.elements={},this.tooltip=this.moreOptions=this.parentNode=null},o.prototype.$createCommand=function(t,e,i){var l=i?this.tooltipEl:this.moreOptionsEl,s=[],n=e.bindKey;n&&(typeof n=="object"&&(n=H.isMac?n.mac:n.win),n=n.split("|")[0],s=n.split("-"),s=s.map(function(h){if(T[h]){if(typeof T[h]=="string")return T[h];if(H.isMac&&T[h].mac)return T[h].mac}return h}));var r;i&&e.iconCssClass?r=["div",{class:["ace_icon_svg",e.iconCssClass].join(" "),"aria-label":e.name+" ("+e.bindKey+")"}]:(r=[["div",{class:w}],["div",{class:k},e.name]],s.length&&r.push(["div",{class:y},s.map(function(h){return["div",h]})])),f.buildDom(["div",{class:[a,e.cssClass||""].join(" "),ref:t},r],l,this.elements),this.commands[t]=e;var u=(function(h){this.editor&&this.editor.focus(),this.$shouldHideMoreOptions=this.isMoreOptionsShown(),!this.elements[t].disabled&&e.exec&&e.exec(this.editor),this.$shouldHideMoreOptions&&this.$setMoreOptionsVisibility(!1),this.update(),h.preventDefault()}).bind(this);this.eventListeners[t]=u,this.elements[t].addEventListener("click",u.bind(this)),this.$updateElement(t)},o.prototype.$setMoreOptionsVisibility=function(t){t?(this.moreOptions.setTheme(this.editor.renderer.theme),this.moreOptions.setClassName(d+"_wrapper"),this.moreOptions.show(),this.update(),this.updatePosition()):this.moreOptions.hide()},o.prototype.$onEditorChangeSession=function(t){t.oldSession&&(t.oldSession.off("changeScrollTop",this.$onChangeScroll),t.oldSession.off("changeScrollLeft",this.$onChangeScroll)),this.detach()},o.prototype.$onChangeScroll=function(){this.editor.renderer&&(this.isShown()||this.getAlwaysShow())&&this.editor.renderer.once("afterRender",this.updatePosition.bind(this))},o.prototype.$onMouseMove=function(t){if(!this.$mouseInTooltip){var e=this.editor.getCursorPosition(),i=this.editor.renderer.textToScreenCoordinates(e.row,e.column),l=this.editor.renderer.lineHeight,s=t.clientY>=i.pageY&&t.clientY<i.pageY+l;s?(!this.isShown()&&!this.$showTooltipTimer.isPending()&&this.$showTooltipTimer.delay(),this.$hideTooltipTimer.isPending()&&this.$hideTooltipTimer.cancel()):(this.isShown()&&!this.$hideTooltipTimer.isPending()&&this.$hideTooltipTimer.delay(),this.$showTooltipTimer.isPending()&&this.$showTooltipTimer.cancel())}},o.prototype.$preventMouseEvent=function(t){this.editor&&this.editor.focus(),t.preventDefault()},o.prototype.$scheduleTooltipForHide=function(){this.$mouseInTooltip=!1,this.$showTooltipTimer.cancel(),this.$hideTooltipTimer.delay()},o.prototype.$tooltipEnter=function(){this.$mouseInTooltip=!0,this.$showTooltipTimer.isPending()&&this.$showTooltipTimer.cancel(),this.$hideTooltipTimer.isPending()&&this.$hideTooltipTimer.cancel()},o.prototype.$updateOnHoverHandlers=function(t){var e=this.tooltip.getElement(),i=this.moreOptions.getElement();t?(this.editor&&(this.editor.on("mousemove",this.$onMouseMove),this.editor.renderer.getMouseEventTarget().addEventListener("mouseout",this.$scheduleTooltipForHide,!0)),e.addEventListener("mouseenter",this.$tooltipEnter),e.addEventListener("mouseleave",this.$scheduleTooltipForHide),i.addEventListener("mouseenter",this.$tooltipEnter),i.addEventListener("mouseleave",this.$scheduleTooltipForHide)):(this.editor&&(this.editor.off("mousemove",this.$onMouseMove),this.editor.renderer.getMouseEventTarget().removeEventListener("mouseout",this.$scheduleTooltipForHide,!0)),e.removeEventListener("mouseenter",this.$tooltipEnter),e.removeEventListener("mouseleave",this.$scheduleTooltipForHide),i.removeEventListener("mouseenter",this.$tooltipEnter),i.removeEventListener("mouseleave",this.$scheduleTooltipForHide))},o.prototype.$showTooltip=function(){this.isShown()||(this.tooltip.setTheme(this.editor.renderer.theme),this.tooltip.setClassName(d+"_wrapper"),this.tooltip.show(),this.update(),this.updatePosition(),this._signal("show"))},o.prototype.$hideTooltip=function(){this.$mouseInTooltip=!1,this.isShown()&&(this.moreOptions.hide(),this.tooltip.hide(),this._signal("hide"))},o.prototype.$updateElement=function(t){var e=this.commands[t];if(e){var i=this.elements[t],l=e.enabled;if(typeof l=="function"&&(l=l(this.editor)),typeof e.getValue=="function"){var s=e.getValue(this.editor);if(e.type==="text")i.textContent=s;else if(e.type==="checkbox"){var n=s?f.addCssClass:f.removeCssClass,r=i.parentElement===this.tooltipEl;i.ariaChecked=s,r?n(i,"ace_selected"):(i=i.querySelector("."+w),n(i,"ace_checkmark"))}}l&&i.disabled?(f.removeCssClass(i,"ace_disabled"),i.ariaDisabled=i.disabled=!1,i.removeAttribute("disabled")):!l&&!i.disabled&&(f.addCssClass(i,"ace_disabled"),i.ariaDisabled=i.disabled=!0,i.setAttribute("disabled",""))}},o}();F.implement(A.prototype,j),f.importCssString(`
.ace_tooltip.`.concat(d,`_wrapper {
    padding: 0;
}

.ace_tooltip .`).concat(d,` {
    padding: 1px 5px;
    display: flex;
    pointer-events: auto;
}

.ace_tooltip .`).concat(d,`.tooltip_more_options {
    padding: 1px;
    flex-direction: column;
}

div.`).concat(a,` {
    display: inline-flex;
    cursor: pointer;
    margin: 1px;
    border-radius: 2px;
    padding: 2px 5px;
    align-items: center;
}

div.`).concat(a,`.ace_selected,
div.`).concat(a,`:hover:not(.ace_disabled) {
    background-color: rgba(0, 0, 0, 0.1);
}

div.`).concat(a,`.ace_disabled {
    color: #777;
    pointer-events: none;
}

div.`).concat(a,` .ace_icon_svg {
    height: 12px;
    background-color: #000;
}

div.`).concat(a,`.ace_disabled .ace_icon_svg {
    background-color: #777;
}

.`).concat(d,".tooltip_more_options .").concat(a,` {
    display: flex;
}

.`).concat(d,".").concat(w,` {
    display: none;
}

.`).concat(d,".tooltip_more_options .").concat(w,` {
    display: inline-block;
    width: 12px;
}

.`).concat(k,` {
    display: inline-block;
}

.`).concat(y,` {
    margin: 0 2px;
    display: inline-block;
    font-size: 8px;
}

.`).concat(d,".tooltip_more_options .").concat(y,` {
    margin-left: auto;
}

.`).concat(y,` div {
    display: inline-block;
    min-width: 8px;
    padding: 2px;
    margin: 0 1px;
    border-radius: 2px;
    background-color: #ccc;
    text-align: center;
}

.ace_dark.ace_tooltip .`).concat(d,` {
    background-color: #373737;
    color: #eee;
}

.ace_dark div.`).concat(a,`.ace_disabled {
    color: #979797;
}

.ace_dark div.`).concat(a,`.ace_selected,
.ace_dark div.`).concat(a,`:hover:not(.ace_disabled) {
    background-color: rgba(255, 255, 255, 0.1);
}

.ace_dark div.`).concat(a,` .ace_icon_svg {
    background-color: #eee;
}

.ace_dark div.`).concat(a,`.ace_disabled .ace_icon_svg {
    background-color: #979797;
}

.ace_dark .`).concat(a,`.ace_disabled {
    color: #979797;
}

.ace_dark .`).concat(y,` div {
    background-color: #575757;
}

.ace_checkmark::before {
    content: '✓';
}
`),"commandbar.css",!1),p.CommandBarTooltip=A,p.TOOLTIP_CLASS_NAME=d,p.BUTTON_CLASS_NAME=a}),function(){ace.require(["ace/ext/command_bar"],function(c){g&&(g.exports=c)})}()}(x)),x.exports}var I=U();const Y=W(I),z=B({__proto__:null,default:Y},[I]);export{z as e};
