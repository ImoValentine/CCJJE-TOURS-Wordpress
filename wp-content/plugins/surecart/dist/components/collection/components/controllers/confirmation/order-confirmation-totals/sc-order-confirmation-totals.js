import{getHumanDiscount}from"../../../../functions/price";import{h}from"@stencil/core";import{__}from"@wordpress/i18n";import{openWormhole}from"stencil-wormhole";import{formatTaxDisplay}from"../../../../functions/tax";export class ScOrderConfirmationTotals{constructor(){this.order=void 0}renderDiscountLine(){var e,o,r,i,t,c,s,n,d,a,l,u,p,v,m;if(!(null===(r=null===(o=null===(e=this.order)||void 0===e?void 0:e.discount)||void 0===o?void 0:o.promotion)||void 0===r?void 0:r.code))return null;let f="";return(null===(t=null===(i=this.order)||void 0===i?void 0:i.discount)||void 0===t?void 0:t.coupon)&&(f=getHumanDiscount(null===(s=null===(c=this.order)||void 0===c?void 0:c.discount)||void 0===s?void 0:s.coupon)),h("sc-line-item",{style:{marginTop:"var(--sc-spacing-small)"}},h("span",{slot:"description"},__("Discount","surecart"),h("br",null),(null===(a=null===(d=null===(n=this.order)||void 0===n?void 0:n.discount)||void 0===d?void 0:d.promotion)||void 0===a?void 0:a.code)&&h("sc-tag",{type:"success",size:"small"},null===(p=null===(u=null===(l=this.order)||void 0===l?void 0:l.discount)||void 0===u?void 0:u.promotion)||void 0===p?void 0:p.code)),f&&h("span",{class:"coupon-human-discount",slot:"price-description"},"(",f,")"),h("sc-format-number",{slot:"price",type:"currency",currency:null===(v=this.order)||void 0===v?void 0:v.currency,value:-(null===(m=this.order)||void 0===m?void 0:m.discount_amount)}))}render(){var e,o,r,i,t,c,s,n,d,a;return h("div",{key:"6f135194bb15e9512e4c4b476d74966601bcfc95",class:{"line-item-totals":!0}},h("sc-line-item-total",{key:"fe7a0e6f1b3c22db8f8d102794e835110af9733c",checkout:this.order,total:"subtotal"},h("span",{key:"9c7dffdebd0dcea146649396642cc6c575c04e6f",slot:"description"},__("Subtotal","surecart"))),this.renderDiscountLine(),!!(null===(e=this.order)||void 0===e?void 0:e.bump_amount)&&h("sc-line-item",{key:"8d1539531739cf0afeddf4ca7552efeb04482cbf",style:{marginTop:"var(--sc-spacing-small)"}},h("span",{key:"a822494d9eeb1ceec4b5c70d39bdbed907a87ea1",slot:"description"},__("Bundle Discount","surecart")),h("sc-format-number",{key:"ef7cde22b517b05c801a6fc8d9cd7abedead1bfd",slot:"price",type:"currency",currency:null===(o=this.order)||void 0===o?void 0:o.currency,value:null===(r=this.order)||void 0===r?void 0:r.bump_amount})),!!(null===(i=this.order)||void 0===i?void 0:i.shipping_amount)&&h("sc-line-item",{key:"7d15cd38efe245392261809c645ba5162ffbea6b",style:{marginTop:"var(--sc-spacing-small)"}},h("span",{key:"16438cd11eb26631d5f12ffbc8ffd3b49f4982ea",slot:"description"},__("Shipping","surecart")),h("sc-format-number",{key:"e1f996f04a93862003a6800e4b1e1ef8e6a43d54",slot:"price",type:"currency",currency:null===(t=this.order)||void 0===t?void 0:t.currency,value:null===(c=this.order)||void 0===c?void 0:c.shipping_amount})),!!(null===(s=this.order)||void 0===s?void 0:s.tax_amount)&&h("sc-line-item",{key:"ae4ac9e8a5a33576ea925f167124035bf599bd87",style:{marginTop:"var(--sc-spacing-small)"}},h("span",{key:"036446ff1d775232e38dc3ab8b1ce18f0ba2d6e7",slot:"description"},formatTaxDisplay(null===(n=this.order)||void 0===n?void 0:n.tax_label)," ",`(${this.order.tax_percent}%)`),h("sc-format-number",{key:"c16ec750084c14c1b8ec05423218bff95805ffbc",slot:"price",type:"currency",currency:null===(d=this.order)||void 0===d?void 0:d.currency,value:null===(a=this.order)||void 0===a?void 0:a.tax_amount})),h("sc-divider",{key:"b6feba619e53fc855333b3c47187a0513f9639e1",style:{"--spacing":"var(--sc-spacing-small)"}}),h("sc-line-item-total",{key:"640ab08aed8edbfb72099454ebc07ae239e20d9a",checkout:this.order,size:"large","show-currency":!0},h("span",{key:"1e1512e02cb97abf907ae1e95e58dd8e1ea93570",slot:"description"},__("Total","surecart"))))}static get is(){return"sc-order-confirmation-totals"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-order-confirmation-totals.css"]}}static get styleUrls(){return{$:["sc-order-confirmation-totals.css"]}}static get properties(){return{order:{type:"unknown",mutable:!1,complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../../types",id:"src/types.ts::Checkout"}}},required:!1,optional:!1,docs:{tags:[],text:""}}}}}openWormhole(ScOrderConfirmationTotals,["order","busy","loading","empty"],!1);