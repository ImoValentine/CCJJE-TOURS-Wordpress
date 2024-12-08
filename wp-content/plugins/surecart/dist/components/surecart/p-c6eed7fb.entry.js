import{r as s,c as i,h as t,a as e}from"./p-e97fde0a.js";import{s as a}from"./p-830ab1a3.js";import{s as r,b as o,g as n,a as c,c as l}from"./p-c4264df6.js";const p=":host{display:block;font-family:var(--sc-font-sans);font-size:var(--sc-checkout-font-size, 16px)}.collapse-link{display:flex;align-items:center;gap:0.35em}.summary__content--empty{display:none}.collapse-link__icon{width:18px;height:18px;color:var(--sc-order-collapse-link-icon-color, var(--sc-color-gray-500))}.item__product+.item__product{margin-top:20px}.empty{color:var(--sc-order-summary-color, var(--sc-color-gray-500))}.price{display:inline-block;opacity:0;visibility:hidden;transform:translateY(5px);transition:var(--sc-input-transition, var(--sc-transition-medium)) visibility ease, var(--sc-input-transition, var(--sc-transition-medium)) opacity ease, var(--sc-input-transition, var(--sc-transition-medium)) transform ease}.price--collapsed{opacity:1;visibility:visible;transform:translateY(0)}.summary{position:relative;user-select:none;cursor:pointer}.summary .collapse-link__icon{transition:transform 0.25s ease-in-out}.summary .scratch-price{text-decoration:line-through;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}.summary--open .collapse-link__icon{transform:rotate(180deg)}::slotted(*){margin:4px 0 !important}::slotted(sc-divider){margin:16px 0 !important}sc-line-item~sc-line-item{margin-top:14px}.total-price{white-space:nowrap}";const h=p;const m=class{constructor(t){s(this,t);this.scShow=i(this,"scShow",7);this.scHide=i(this,"scHide",7);this.loading=undefined;this.busy=undefined;this.closedText=wp.i18n.__("Show Summary","surecart");this.openText=wp.i18n.__("Summary","surecart");this.collapsible=false;this.collapsedOnMobile=false;this.collapsedOnDesktop=undefined;this.collapsed=false}isMobileScreen(){var s,i;const t=(s=document.body)===null||s===void 0?void 0:s.getClientRects();return(t===null||t===void 0?void 0:t.length)&&((i=t[0])===null||i===void 0?void 0:i.width)<781}componentWillLoad(){if(this.isMobileScreen()){this.collapsed=this.collapsed||this.collapsedOnMobile}else{this.collapsed=this.collapsed||this.collapsedOnDesktop}this.handleOpenChange()}handleClick(s){s.preventDefault();this.collapsed=!this.collapsed}renderHeader(){if(this.loading){return t("sc-line-item",null,t("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),t("sc-skeleton",{slot:"price",style:{width:"70px",display:"inline-block","--border-radius":"6px"}}),t("sc-skeleton",{slot:"currency",style:{width:"30px",display:"inline-block"}}))}return t("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},t("span",{class:"collapse-link",slot:"title",onClick:s=>this.handleClick(s),tabIndex:0,"aria-label":wp.i18n.sprintf(wp.i18n.__("Summary %s","surecart"),this.collapsed?wp.i18n.__("collapsed","surecart"):wp.i18n.__("expanded","surecart")),onKeyDown:s=>{if(s.key===" "){this.handleClick(s);a(wp.i18n.sprintf(wp.i18n.__("Summary %s","surecart"),this.collapsed?wp.i18n.__("collapsed","surecart"):wp.i18n.__("expanded","surecart")),"assertive")}}},this.collapsed?this.closedText||wp.i18n.__("Summary","surecart"):this.openText||wp.i18n.__("Summary","surecart"),t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"collapse-link__icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}))),t("span",{slot:"description"},t("slot",{name:"description"})),t("span",{slot:"price",class:{price:true,"price--collapsed":this.collapsed}},t("slot",{name:"price"})))}async handleOpenChange(){if(!this.collapsed){this.scShow.emit();await o(this.body);this.body.hidden=false;this.body.style.overflow="hidden";const{keyframes:s,options:i}=n(this.el,"summary.show");await c(this.body,l(s,this.body.scrollHeight),i);this.body.style.height="auto";this.body.style.overflow="visible"}else{this.scHide.emit();await o(this.body);this.body.style.overflow="hidden";const{keyframes:s,options:i}=n(this.el,"summary.hide");await c(this.body,l(s,this.body.scrollHeight),i);this.body.hidden=true;this.body.style.height="auto";this.body.style.overflow="visible"}}render(){return t("div",{key:"8918c561500c2a8b2c6bc59e3524ae6a76fb72e4",class:{summary:true,"summary--open":!this.collapsed}},this.collapsible&&this.renderHeader(),t("div",{key:"7f34f645358bf7cf3c51bae80aeb8016c4949f7b",ref:s=>this.body=s,class:{summary__content:true}},t("slot",{key:"05309f7be8b163c70a8eb7040c65dd8fe25bdc69"})))}get el(){return e(this)}static get watchers(){return{collapsed:["handleOpenChange"]}}};r("summary.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"ease"}});r("summary.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"ease"}});m.style=h;export{m as sc_summary};
//# sourceMappingURL=p-c6eed7fb.entry.js.map