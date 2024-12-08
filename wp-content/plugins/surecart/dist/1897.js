"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1897],{1897:function(e,t,a){a.r(t),a.d(t,{sc_tab_group:function(){return l}});var n=a(9394),i=a(3029),s=a(2901),r=a(1346),l=function(){return(0,s.A)((function e(t){(0,i.A)(this,e),(0,r.r)(this,t),this.scTabHide=(0,r.c)(this,"scTabHide",7),this.scTabShow=(0,r.c)(this,"scTabShow",7),this.tabs=[],this.panels=[],this.activeTab=void 0}),[{key:"componentDidLoad",value:function(){var e=this;this.syncTabsAndPanels(),this.setAriaLabels(),this.setActiveTab(this.getActiveTab()||this.tabs[0],{emitEvents:!1}),this.mutationObserver=new MutationObserver((function(){e.syncTabsAndPanels()})),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,subtree:!0})}},{key:"disconnectedCallback",value:function(){this.mutationObserver.disconnect()}},{key:"syncTabsAndPanels",value:function(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels()}},{key:"setAriaLabels",value:function(){var e=this;this.tabs.map((function(t){var a=e.panels.find((function(e){return e.name===t.panel}));a&&(t.setAttribute("aria-controls",a.getAttribute("id")),a.setAttribute("aria-labelledby",t.getAttribute("id")))}))}},{key:"handleClick",value:function(e){var t=e.target.closest("sc-tab");(null==t?void 0:t.closest("sc-tab-group"))===this.el&&t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}},{key:"handleKeyDown",value:function(e){var t=e.target.closest("sc-tab");if((null==t?void 0:t.closest("sc-tab-group"))!==this.el)return!0;if(["Enter"," "].includes(e.key)&&t&&this.setActiveTab(t,{scrollBehavior:"smooth"}),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){var a=document.activeElement;if(a&&"sc-tab"===a.tagName.toLowerCase()){var n=this.tabs.indexOf(a);"Home"===e.key?n=0:"End"===e.key?n=this.tabs.length-1:"ArrowUp"===e.key?n=Math.max(0,n-1):"ArrowDown"===e.key&&(n=Math.min(this.tabs.length-1,n+1)),this.tabs[n].triggerFocus({preventScroll:!0}),e.preventDefault()}}}},{key:"setActiveTab",value:function(e,t){var a=this;if(t=Object.assign({emitEvents:!0,scrollBehavior:"auto"},t),e&&e!==this.activeTab&&!e.disabled){var n=this.activeTab;this.activeTab=e,this.tabs.map((function(e){return e.active=e===a.activeTab})),this.panels.map((function(e){return e.active=e.name===a.activeTab.panel})),t.emitEvents&&(n&&this.scTabHide.emit(n.panel),this.scTabShow.emit(this.activeTab.panel))}}},{key:"getActiveTab",value:function(){return this.getAllTabs().find((function(e){return e.active}))}},{key:"getAllChildren",value:function(){var e=this.el.shadowRoot.querySelectorAll("slot"),t=["sc-tab","sc-tab-panel"];return Array.from(e).map((function(e){var t;return null===(t=null==e?void 0:e.assignedElements)||void 0===t?void 0:t.call(e,{flatten:!0})})).flat().reduce((function(e,t){var a;return e.concat(t,(0,n.A)((null===(a=null==t?void 0:t.querySelectorAll)||void 0===a?void 0:a.call(t,"*"))||[]))}),[]).filter((function(e){var a,n;return t.includes(null===(n=null===(a=null==e?void 0:e.tagName)||void 0===a?void 0:a.toLowerCase)||void 0===n?void 0:n.call(a))}))}},{key:"getAllTabs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.getAllChildren().filter((function(t){return e?"sc-tab"===t.tagName.toLowerCase():"sc-tab"===t.tagName.toLowerCase()&&!t.disabled}))}},{key:"getAllPanels",value:function(){return this.getAllChildren().filter((function(e){return"sc-tab-panel"===e.tagName.toLowerCase()}))}},{key:"render",value:function(){var e=this;return(0,r.h)("div",{key:"4615c84a4e03e38e71f17d18ee83c881c3fa270e",part:"base",class:{"tab-group":!0},onClick:function(t){return e.handleClick(t)},onKeyDown:function(t){return e.handleKeyDown(t)}},(0,r.h)("div",{key:"129980bb4d68e7d3234ca8f0c538ecf88b072a64",class:"tab-group__nav-container",part:"nav"},(0,r.h)("div",{key:"5732db586ad42f62d019a67c72e5ca012a0a3899",class:"tab-group__nav"},(0,r.h)("div",{key:"e74e2bd5e5edd8ddb55b2b889e2d9fdcd3a134d8",part:"tabs",class:"tab-group__tabs",role:"tablist"},(0,r.h)("slot",{key:"e911d6c40c8c0d08fa8e2bbc161e65e4ada1d807",onSlotchange:function(){return e.syncTabsAndPanels()},name:"nav"})))),(0,r.h)("div",{key:"17ef1d5e0e4007acfc2d807be1fe3aa322b9dd99",part:"body",class:"tab-group__body"},(0,r.h)("slot",{key:"c8e6d80081395a64b853810e0fb5a68a48552343",onSlotchange:function(){return e.syncTabsAndPanels()}})))}},{key:"el",get:function(){return(0,r.a)(this)}}])}();l.style=":host{display:block;--sc-tabs-min-width:225px}.tab-group{display:flex;flex-wrap:wrap;position:relative;border:solid 1px transparent;border-radius:0;flex-direction:row}@media screen and (min-width: 750px){.tab-group{flex-wrap:nowrap}}.tab-group__tabs{display:flex;flex-wrap:wrap;flex:0 0 auto;flex-direction:column;margin-bottom:var(--sc-spacing-xx-large)}.tab-group__nav-container{order:1;flex:1 0 100%}@media screen and (min-width: 750px){.tab-group__nav-container{min-width:var(--sc-tabs-min-width);flex:0 1 auto}}.tab-group__body{flex:1 1 auto;order:2}@media screen and (min-width: 750px){.tab-group__body{padding:0 var(--sc-spacing-xx-large)}}::slotted(sc-tab){margin-bottom:var(--sc-spacing-xx-small)}"}}]);