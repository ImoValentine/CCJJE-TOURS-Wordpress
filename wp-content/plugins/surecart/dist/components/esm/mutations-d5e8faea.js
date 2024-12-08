import{c as createStore}from"./index-06061d4e.js";import{g as getSerializedState}from"./utils-e9ee502a.js";import{g as getQueryArg,r as removeQueryArgs}from"./remove-query-args-938c53ea.js";import{s as speak}from"./index-c5a96d53.js";import{t as trackEvent}from"./google-a86aa761.js";import{m as maybeConvertAmount}from"./currency-a0c9bff4.js";import{a as addQueryArgs}from"./add-query-args-0e2a8393.js";import{s as state$2,o as onChange$2,v,c as checkoutMachine}from"./store-7020541e.js";import{g as getFormattedPrice,a as getHumanDiscount}from"./price-d5770168.js";const safeRead=(o,t)=>{try{return JSON.parse(o.getItem(t))}catch{return null}},debounce=o=>{let t=!1;return()=>{t||(t=!0,setTimeout((()=>{o(),t=!1}),0))}},createStorageStore=(o,t,n,i=!1)=>{var e;const d=createStore(null!==(e=safeRead(o,t))&&void 0!==e?e:n,((o,t)=>JSON.stringify(o)!==JSON.stringify(t))),u=debounce((()=>o.setItem(t,JSON.stringify(d.state))));return u(),i&&window.addEventListener("storage",(()=>{const n=safeRead(o,t);if(null!==n)for(const o in n)d.set(o,n[o])})),d.use({set:u,reset:u}),d},createLocalStore=(o,t,n=!1)=>createStorageStore(localStorage,o,t,n),{checkout:checkout$1}=getSerializedState(),notPersistCart="browser"!==(null==checkout$1?void 0:checkout$1.persist)||!!getQueryArg(window.location.href,"no_cart"),store$1=notPersistCart?createStore({live:{},test:{}}):createLocalStore("surecart-local-storage",{live:{},test:{}},!0),{state:state$1,onChange:onChange$1,on:on$2,set:set$1,get:get$1,dispose:dispose$1}=store$1;window.scStore=store$1;const{checkout:checkout}=getSerializedState(),{state:state,onChange:onChange,on:on$1,set:set,get:get,dispose:dispose,reset:reset}=createStore({formId:null,groupId:null,mode:"live",locks:[],product:null,checkout:null,currencyCode:"usd",abandonedCheckoutEnabled:!0,initialLineItems:[],isCheckoutPage:!1,validateStock:!1,persist:"browser",paymentMethodRequiresShipping:!1,...checkout},((o,t)=>JSON.stringify(o)!==JSON.stringify(t))),service=v(checkoutMachine);service.subscribe((o=>state$2.formState=o)),service.start(),onChange$2("formState",(()=>{const{formState:o}=state$2,{value:t}=o;void 0!==state$2.text.loading[t]&&speak(state$2.text.loading[t],"assertive")}));const{send:send}=service,updateFormState=o=>send(o);var _a;onChange("checkout",(o=>setCheckout(o,state.formId))),onChange("checkout",(o=>{(null==o?void 0:o.id)&&(state.mode=(null==o?void 0:o.live_mode)?"live":"test")})),onChange$2("formState",(({value:o})=>{var t,n,i,e;"draft"===o&&(null===(n=null===(t=state.checkout)||void 0===t?void 0:t.invoice)||void 0===n?void 0:n.status)&&"open"!==(null===(e=null===(i=state.checkout)||void 0===i?void 0:i.invoice)||void 0===e?void 0:e.status)&&updateFormState("LOCK")})),on$1("get",(o=>{if("checkout"===o){const o=getCheckout(state.formId,state.mode);(null==o?void 0:o.id)&&(state.checkout=o)}})),on$1("set",((o,t,n)=>{var i,e,d,u,l,r,c,a,v,s,m,p,y,_,h;if("checkout"!==o)return;if(!n||!t)return;if((null==t?void 0:t.total_amount)===(null==n?void 0:n.total_amount)&&(null==t?void 0:t.amount_due)===(null==n?void 0:n.total_amount))return;const w=getFormattedPrice({amount:t.amount_due,currency:t.currency}),f=getFormattedPrice({amount:t.total_amount,currency:t.currency}),g=(null===(e=null===(i=null==t?void 0:t.discount)||void 0===i?void 0:i.promotion)||void 0===e?void 0:e.code)!==(null===(u=null===(d=null==n?void 0:n.discount)||void 0===d?void 0:d.promotion)||void 0===u?void 0:u.code)&&(null===(r=null===(l=null==t?void 0:t.discount)||void 0===l?void 0:l.promotion)||void 0===r?void 0:r.code),C=[...(null===(a=null===(c=null==t?void 0:t.discount)||void 0===c?void 0:c.promotion)||void 0===a?void 0:a.code)===(null===(s=null===(v=null==n?void 0:n.discount)||void 0===v?void 0:v.promotion)||void 0===s?void 0:s.code)||(null===(p=null===(m=null==t?void 0:t.discount)||void 0===m?void 0:m.promotion)||void 0===p?void 0:p.code)?[]:[wp.i18n.__("Coupon code removed.","sc-coupon-form")],...g?[wp.i18n.sprintf(
// Translators: %1$s is the coupon code, %2$s is the human readable discount.
wp.i18n.__("Coupon code %1$s added. %2$s applied.","sc-coupon-form"),null===(_=null===(y=null==t?void 0:t.discount)||void 0===y?void 0:y.promotion)||void 0===_?void 0:_.code,getHumanDiscount(null===(h=null==t?void 0:t.discount)||void 0===h?void 0:h.coupon))]:[],t.total_amount===t.amount_due?wp.i18n.sprintf(wp.i18n.__("Checkout updated. The amount due is %1$s.","surecart"),w):wp.i18n.sprintf(wp.i18n.__("Checkout updated. The total amount for the checkout is %1$s and the amount due is %1$s.","surecart"),f,w)];speak(C.join(" "))}));const store=createStore((()=>({cart:{open:!1}})),((o,t)=>JSON.stringify(o)!==JSON.stringify(t))),toggleCart=(o=null)=>{if(!o)return;const t=new CustomEvent("scToggleCart",{bubbles:!0});document.dispatchEvent(t)},{on:on}=store;on("set",((o,t)=>{"cart"===o&&((null==t?void 0:t.open)?speak(wp.i18n.__("Cart Opened","surecart"),"assertive"):speak(wp.i18n.__("Cart Closed","surecart"),"assertive"))})),window.sc={...(null===window||void 0===window?void 0:window.sc)||{},cart:{...(null===(_a=null===window||void 0===window?void 0:window.sc)||void 0===_a?void 0:_a.cart)||{},toggle:toggleCart}},on$2("set",((o,t,n)=>Object.keys(t||{}).forEach((o=>handleCheckoutLineItemChange(t[o],null==n?void 0:n[o])))));const handleCheckoutLineItemChange=(o,t)=>{var n,i;const e=(null===(n=null==o?void 0:o.line_items)||void 0===n?void 0:n.data)||[],d=(null===(i=null==t?void 0:t.line_items)||void 0===i?void 0:i.data)||[];if(e.forEach((o=>{const t=d.find((t=>t.id===o.id));if(!t||(null==t?void 0:t.quantity)<(null==o?void 0:o.quantity)){const n=new CustomEvent("scAddedToCart",{detail:{...o,quantity:o.quantity-((null==t?void 0:t.quantity)||0)},bubbles:!0});document.dispatchEvent(n)}})),d.forEach((o=>{const t=e.find((t=>t.id===o.id));if(!t||(null==o?void 0:o.quantity)>(null==t?void 0:t.quantity)){const n=new CustomEvent("scRemovedFromCart",{detail:{...o,quantity:o.quantity-((null==t?void 0:t.quantity)||0)},bubbles:!0});document.dispatchEvent(n)}})),!(null==state?void 0:state.isCheckoutPage)&&JSON.stringify(e)!==JSON.stringify(d)){const n=new CustomEvent("scCartUpdated",{detail:{currentCart:o,previousCart:t},bubbles:!0});document.dispatchEvent(n)}};on("set",((o,t,n)=>{if("cart"===o&&(null==t?void 0:t.open)!==(null==n?void 0:n.open)&&(null==t?void 0:t.open)){const o=new CustomEvent("scViewedCart",{detail:state.checkout,bubbles:!0});document.dispatchEvent(o)}})),on$1("set",((o,t,n)=>{if("checkout"!==o)return;if(null==n?void 0:n.id)return;if(!(null==t?void 0:t.id))return;if(!state.isCheckoutPage)return;const i=new CustomEvent("scCheckoutInitiated",{detail:t,bubbles:!0});document.dispatchEvent(i)})),on$1("set",((o,t,n)=>{var i,e;if("checkout"!==o)return;if(!(null==t?void 0:t.status)||(null==n?void 0:n.status)===(null==t?void 0:t.status))return;if(!["paid","processing"].includes(t.status))return;const d=new CustomEvent("scOrderPaid",{detail:t,bubbles:!0});document.dispatchEvent(d);const u=new CustomEvent("scCheckoutCompleted",{detail:t,bubbles:!0});document.dispatchEvent(u);const l=((null===(i=null==t?void 0:t.line_items)||void 0===i?void 0:i.data)||[]).filter((o=>{var t;return(null===(t=null==o?void 0:o.price)||void 0===t?void 0:t.trial_duration_days)>0}));if(l.length>0){const o=new CustomEvent("scTrialStarted",{detail:l,bubbles:!0});document.dispatchEvent(o)}const r=((null===(e=null==t?void 0:t.line_items)||void 0===e?void 0:e.data)||[]).filter((o=>{var t;return(null===(t=null==o?void 0:o.price)||void 0===t?void 0:t.recurring_interval_count)>0}));if(r.length>0){const o=new CustomEvent("scSubscriptionStarted",{detail:r,bubbles:!0});document.dispatchEvent(o)}})),on$1("set",((o,t,n)=>{if("checkout"!==o)return;if(!state.isCheckoutPage)return;if(!(null==t?void 0:t.selected_shipping_choice))return;if((null==n?void 0:n.selected_shipping_choice)===(null==t?void 0:t.selected_shipping_choice))return;const i=new CustomEvent("scShippingInfoAdded",{detail:t,bubbles:!0});document.dispatchEvent(i)})),on$1("set",((o,t,n)=>{if("checkout"!==o)return;if(!state.isCheckoutPage)return;if(!(null==n?void 0:n.id))return;if(JSON.stringify(t)===JSON.stringify(n))return;const i=new CustomEvent("scCheckoutUpdated",{detail:{currentCheckout:t,previousCheckout:n},bubbles:!0});document.dispatchEvent(i)})),window.addEventListener("scAddedToCart",(o=>{var t,n,i,e,d,u,l,r,c,a,v,s;const m=o.detail;(null===(t=null==m?void 0:m.price)||void 0===t?void 0:t.product)&&trackEvent("add_to_cart",{currency:null===(n=m.price)||void 0===n?void 0:n.currency,value:maybeConvertAmount((null===(i=null==m?void 0:m.price)||void 0===i?void 0:i.amount)||0,(null===(e=m.price)||void 0===e?void 0:e.currency)||"USD"),items:[{item_id:null===(u=null===(d=m.price)||void 0===d?void 0:d.product)||void 0===u?void 0:u.id,item_name:null===(r=null===(l=m.price)||void 0===l?void 0:l.product)||void 0===r?void 0:r.name,item_variant:(m.variant_options||[]).join(" / "),price:maybeConvertAmount((null===(c=null==m?void 0:m.price)||void 0===c?void 0:c.amount)||0,(null===(a=m.price)||void 0===a?void 0:a.currency)||"USD"),currency:null===(v=m.price)||void 0===v?void 0:v.currency,quantity:m.quantity,discount:(null==m?void 0:m.discount_amount)?maybeConvertAmount((null==m?void 0:m.discount_amount)||0,(null===(s=m.price)||void 0===s?void 0:s.currency)||"USD"):0}]})})),window.addEventListener("scRemovedFromCart",(o=>{var t,n,i,e,d,u,l,r,c,a,v,s;const m=o.detail;(null===(t=null==m?void 0:m.price)||void 0===t?void 0:t.product)&&trackEvent("remove_from_cart",{currency:null===(n=m.price)||void 0===n?void 0:n.currency,value:maybeConvertAmount((null===(i=null==m?void 0:m.price)||void 0===i?void 0:i.amount)||0,(null===(e=m.price)||void 0===e?void 0:e.currency)||"USD"),items:[{item_id:null===(u=null===(d=m.price)||void 0===d?void 0:d.product)||void 0===u?void 0:u.id,item_name:null===(r=null===(l=m.price)||void 0===l?void 0:l.product)||void 0===r?void 0:r.name,item_variant:(m.variant_options||[]).join(" / "),price:maybeConvertAmount((null===(c=null==m?void 0:m.price)||void 0===c?void 0:c.amount)||0,(null===(a=m.price)||void 0===a?void 0:a.currency)||"USD"),currency:null===(v=m.price)||void 0===v?void 0:v.currency,quantity:m.quantity,discount:(null==m?void 0:m.discount_amount)?maybeConvertAmount((null==m?void 0:m.discount_amount)||0,(null===(s=m.price)||void 0===s?void 0:s.currency)||"USD"):0}]})})),window.addEventListener("scViewedCart",(o=>{var t;const n=o.detail;trackEvent("view_cart",{currency:n.currency,value:maybeConvertAmount(n.total_amount,n.currency),items:((null===(t=n.line_items)||void 0===t?void 0:t.data)||[]).map((o=>{var t,n,i,e,d,u,l,r,c;return{item_id:null===(n=null===(t=null==o?void 0:o.price)||void 0===t?void 0:t.product)||void 0===n?void 0:n.id,item_name:null===(e=null===(i=null==o?void 0:o.price)||void 0===i?void 0:i.product)||void 0===e?void 0:e.name,currency:null===(d=o.price)||void 0===d?void 0:d.currency,discount:o.discount_amount?maybeConvertAmount(o.discount_amount,null===(u=o.price)||void 0===u?void 0:u.currency):0,price:maybeConvertAmount(null===(l=null==o?void 0:o.price)||void 0===l?void 0:l.amount,null===(r=o.price)||void 0===r?void 0:r.currency),quantity:o.quantity,...(null===(c=null==o?void 0:o.variant_options)||void 0===c?void 0:c.length)?{item_variant:(o.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scCheckoutInitiated",(o=>{var t;const n=o.detail;trackEvent("begin_checkout",{currency:n.currency,value:maybeConvertAmount(n.total_amount,n.currency),items:((null===(t=n.line_items)||void 0===t?void 0:t.data)||[]).map((o=>{var t,n,i,e,d,u,l,r,c;return{item_id:null===(n=null===(t=null==o?void 0:o.price)||void 0===t?void 0:t.product)||void 0===n?void 0:n.id,item_name:null===(e=null===(i=null==o?void 0:o.price)||void 0===i?void 0:i.product)||void 0===e?void 0:e.name,currency:null===(d=o.price)||void 0===d?void 0:d.currency,discount:o.discount_amount?maybeConvertAmount(o.discount_amount,null===(u=o.price)||void 0===u?void 0:u.currency):0,price:maybeConvertAmount(null===(l=null==o?void 0:o.price)||void 0===l?void 0:l.amount,null===(r=o.price)||void 0===r?void 0:r.currency),quantity:o.quantity,...(null===(c=null==o?void 0:o.variant_options)||void 0===c?void 0:c.length)?{item_variant:(o.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scCheckoutCompleted",(o=>{var t;const n=o.detail;trackEvent("purchase",{transaction_id:null==n?void 0:n.id,value:maybeConvertAmount(null==n?void 0:n.total_amount,(null==n?void 0:n.currency)||"USD"),currency:(n.currency||"").toUpperCase(),items:((null===(t=null==n?void 0:n.line_items)||void 0===t?void 0:t.data)||[]).map((o=>{var t,i,e,d,u,l,r,c;return{item_id:null===(i=null===(t=null==o?void 0:o.price)||void 0===t?void 0:t.product)||void 0===i?void 0:i.id,currency:(n.currency||"").toUpperCase(),item_name:(null===(d=null===(e=null==o?void 0:o.price)||void 0===e?void 0:e.product)||void 0===d?void 0:d.name)||"",discount:(null==o?void 0:o.discount_amount)?maybeConvertAmount((null==o?void 0:o.discount_amount)||0,(null===(u=null==o?void 0:o.price)||void 0===u?void 0:u.currency)||"USD"):0,price:maybeConvertAmount((null===(l=null==o?void 0:o.price)||void 0===l?void 0:l.amount)||0,(null===(r=null==o?void 0:o.price)||void 0===r?void 0:r.currency)||"USD"),quantity:(null==o?void 0:o.quantity)||1,...(null===(c=null==o?void 0:o.variant_options)||void 0===c?void 0:c.length)?{item_variant:(o.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scPaymentInfoAdded",(o=>{var t;const n=o.detail;trackEvent("add_payment_info",{currency:n.currency,value:maybeConvertAmount(n.total_amount,n.currency),items:((null===(t=n.line_items)||void 0===t?void 0:t.data)||[]).map((o=>{var t,n,i,e,d,u,l,r,c;return{item_id:null===(n=null===(t=null==o?void 0:o.price)||void 0===t?void 0:t.product)||void 0===n?void 0:n.id,item_name:(null===(e=null===(i=null==o?void 0:o.price)||void 0===i?void 0:i.product)||void 0===e?void 0:e.name)||"",currency:null===(d=o.price)||void 0===d?void 0:d.currency,discount:o.discount_amount?maybeConvertAmount(o.discount_amount,null===(u=o.price)||void 0===u?void 0:u.currency):0,price:maybeConvertAmount(null===(l=null==o?void 0:o.price)||void 0===l?void 0:l.amount,null===(r=o.price)||void 0===r?void 0:r.currency),quantity:o.quantity,...(null===(c=null==o?void 0:o.variant_options)||void 0===c?void 0:c.length)?{item_variant:(o.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scShippingInfoAdded",(o=>{var t,n,i,e,d,u,l,r;const c=o.detail,a=null===(n=null===(t=null==c?void 0:c.shipping_choices)||void 0===t?void 0:t.data)||void 0===n?void 0:n.find((o=>o.id===(null==c?void 0:c.selected_shipping_choice))),v=(null===(i=null==a?void 0:a.shipping_method)||void 0===i?void 0:i.name)||"";trackEvent("add_shipping_info",{currency:c.currency,value:maybeConvertAmount(c.total_amount,c.currency),...(null===(d=null===(e=null==c?void 0:c.discount)||void 0===e?void 0:e.promotion)||void 0===d?void 0:d.code)?{coupon:null===(l=null===(u=null==c?void 0:c.discount)||void 0===u?void 0:u.promotion)||void 0===l?void 0:l.code}:{},...v?{shipping_tier:v}:"",items:((null===(r=c.line_items)||void 0===r?void 0:r.data)||[]).map((o=>{var t,n,i,e,d,u,l,r,c;return{item_id:null===(n=null===(t=null==o?void 0:o.price)||void 0===t?void 0:t.product)||void 0===n?void 0:n.id,item_name:(null===(e=null===(i=null==o?void 0:o.price)||void 0===i?void 0:i.product)||void 0===e?void 0:e.name)||"",currency:null===(d=o.price)||void 0===d?void 0:d.currency,discount:o.discount_amount?maybeConvertAmount(o.discount_amount,null===(u=o.price)||void 0===u?void 0:u.currency):0,price:maybeConvertAmount(null===(l=null==o?void 0:o.price)||void 0===l?void 0:l.amount,null===(r=o.price)||void 0===r?void 0:r.currency),quantity:o.quantity,...(null===(c=null==o?void 0:o.variant_options)||void 0===c?void 0:c.length)?{item_variant:(o.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scAddedToCart",(function(o){var t,n,i,e,d,u,l,r;if(!(null===window||void 0===window?void 0:window.fbq))return;const c=o.detail;if(!(null===(t=null==c?void 0:c.price)||void 0===t?void 0:t.product))return;const a=null===(n=null==c?void 0:c.price)||void 0===n?void 0:n.product,v=(null===(e=null===(i=null==a?void 0:a.product_collections)||void 0===i?void 0:i.data)||void 0===e?void 0:e.map((o=>o.name)))||[];window.fbq("track","AddToCart",{...v.length?{content_category:v.join(", ")}:{},content_ids:[a.id],content_name:(null==a?void 0:a.name)+((null===(d=null==c?void 0:c.variant_options)||void 0===d?void 0:d.length)?` - ${null==c?void 0:c.variant_options.join(" / ")}`:""),content_type:"product",contents:[{id:a.id,quantity:c.quantity}],currency:null===(u=null==c?void 0:c.price)||void 0===u?void 0:u.currency,value:maybeConvertAmount((null===(l=null==c?void 0:c.price)||void 0===l?void 0:l.amount)||0,(null===(r=null==c?void 0:c.price)||void 0===r?void 0:r.currency)||"USD")})})),window.addEventListener("scCheckoutInitiated",(function(o){var t,n,i,e;if(!(null===window||void 0===window?void 0:window.fbq))return;const d=o.detail;window.fbq("track","InitiateCheckout",{content_ids:null===(t=(null==d?void 0:d.line_items.data)||[])||void 0===t?void 0:t.map((o=>o.id)),contents:null===(n=(null==d?void 0:d.line_items.data)||[])||void 0===n?void 0:n.map((o=>({id:o.id,quantity:o.quantity}))),currency:null==d?void 0:d.currency,num_items:(null===(e=null===(i=null==d?void 0:d.line_items)||void 0===i?void 0:i.data)||void 0===e?void 0:e.length)||0,value:maybeConvertAmount(null==d?void 0:d.total_amount,(null==d?void 0:d.currency)||"USD")})})),window.addEventListener("scCheckoutCompleted",(function(o){var t,n,i;if(!(null===window||void 0===window?void 0:window.fbq))return;const e=o.detail;window.fbq("track","Purchase",{content_ids:null===(t=null==e?void 0:e.items)||void 0===t?void 0:t.map((o=>o.item_id)),content_name:"Purchase",content_type:"product",contents:null===(n=null==e?void 0:e.items)||void 0===n?void 0:n.map((o=>({id:o.item_id,quantity:o.quantity}))),currency:null==e?void 0:e.currency,num_items:null===(i=null==e?void 0:e.items)||void 0===i?void 0:i.length,value:maybeConvertAmount(null==e?void 0:e.total_amount,(null==e?void 0:e.currency)||"USD")})})),window.addEventListener("scTrialStarted",(function(o){(null===window||void 0===window?void 0:window.fbq)&&o.detail.forEach((o=>{var t,n,i;window.fbq("track","StartTrial",{currency:null===(t=o.price)||void 0===t?void 0:t.currency,value:maybeConvertAmount((null===(n=o.price)||void 0===n?void 0:n.amount)||0,(null===(i=o.price)||void 0===i?void 0:i.currency)||"USD")})}))})),window.addEventListener("scSubscriptionStarted",(function(o){(null===window||void 0===window?void 0:window.fbq)&&o.detail.forEach((o=>{var t,n,i;window.fbq("track","Subscribe",{currency:null===(t=o.price)||void 0===t?void 0:t.currency,value:maybeConvertAmount((null===(n=o.price)||void 0===n?void 0:n.amount)||0,(null===(i=o.price)||void 0===i?void 0:i.currency)||"USD")})}))})),window.addEventListener("scPaymentInfoAdded",(function(o){if(!(null===window||void 0===window?void 0:window.fbq))return;const t=o.detail;window.fbq("track","AddPaymentInfo",{content_category:"Payment Info Added",currency:null==t?void 0:t.currency})}));const getCheckout=(o,t)=>{var n;return(null===(n=store$1.state[t])||void 0===n?void 0:n[o])||{}},setCheckout=(o,t)=>{const n=(null==o?void 0:o.live_mode)?"live":"test";store$1.set(n,{...store$1.state[n],[t]:o}),state.formId===t&&state.mode===n&&(state.checkout=o),"url"===state.persist&&(null==o?void 0:o.id)&&window.history.replaceState({},document.title,addQueryArgs(window.location.href,{checkout_id:null==o?void 0:o.id}));const i=new CustomEvent("scCheckoutUpdated",{detail:{checkout:state.checkout,formId:state.formId,mode:state.mode},bubbles:!0});document.dispatchEvent(i)},clearCheckout=(o,t)=>{var n;const{[o]:i,...e}=store$1.state[t];window.history.replaceState({},document.title,removeQueryArgs(window.location.href,"redirect_status","coupon","line_items","confirm_checkout_id","checkout_id")),store$1.set(t,e);const d=JSON.parse(localStorage.getItem("surecart-local-storage")||"{}");(null===(n=d[t])||void 0===n?void 0:n[o])&&(delete d[t][o],localStorage.setItem("surecart-local-storage",JSON.stringify(d))),reset()};export{store as a,setCheckout as b,clearCheckout as c,onChange$1 as d,on$1 as e,getCheckout as g,onChange as o,state as s,toggleCart as t,updateFormState as u};