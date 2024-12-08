import{r as e,c as i,h as t,a as o}from"./p-e97fde0a.js";import{p as s}from"./p-9ef0f73f.js";import{s as l}from"./p-fab02ef6.js";import{o as a,s as d,u as r}from"./p-322d462c.js";import{o as n}from"./p-d7296e4c.js";import"./p-31cd2403.js";import{g as c,s as u}from"./p-e9824b3f.js";import{c as p}from"./p-d1f5a7ef.js";import{c as v}from"./p-1f60f497.js";import{b as f}from"./p-46b57a87.js";import{a as m}from"./p-401e165e.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";import"./p-d3366af3.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-6ec14893.js";import"./p-93127aa7.js";import"./p-07b1b1ed.js";const h="sc-stripe-payment-element{display:block}sc-stripe-payment-element [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}";const y=h;const b=class{constructor(t){e(this,t);this.scPaid=i(this,"scPaid",7);this.scSetState=i(this,"scSetState",7);this.scPaymentInfoAdded=i(this,"scPaymentInfoAdded",7);this.error=undefined;this.confirming=false;this.loaded=false;this.styles=undefined}async componentWillLoad(){this.fetchStyles()}async handleStylesChange(){this.createOrUpdateElements()}async fetchStyles(){this.styles=await this.getComputedStyles()}getComputedStyles(){return new Promise((e=>{let i=setInterval((()=>{const t=window.getComputedStyle(document.body);const o=t.getPropertyValue("--sc-color-primary-500");if(o){clearInterval(i);e(t)}}),100)}))}async componentDidLoad(){const{processor_data:e}=c("stripe")||{};try{u.instances.stripe=await s.loadStripe(e===null||e===void 0?void 0:e.publishable_key,{stripeAccount:e===null||e===void 0?void 0:e.account_id})}catch(e){this.error=(e===null||e===void 0?void 0:e.message)||wp.i18n.__("Stripe could not be loaded","surecart");return}this.createOrUpdateElements();this.handleUpdateElement();this.unlistenToCheckout=a("checkout",(()=>{this.fetchStyles();this.createOrUpdateElements();this.handleUpdateElement()}));this.unlistenToFormState=n("formState",(()=>{var e;if(!((e=d===null||d===void 0?void 0:d.checkout)===null||e===void 0?void 0:e.payment_method_required))return;if("paying"===p()){this.maybeConfirmOrder()}}))}disconnectedCallback(){this.unlistenToFormState();this.unlistenToCheckout()}getElementsConfig(){var e,i,t,o;const s=getComputedStyle(this.el);return{mode:((e=d.checkout)===null||e===void 0?void 0:e.remaining_amount_due)>0?"payment":"setup",amount:(i=d.checkout)===null||i===void 0?void 0:i.remaining_amount_due,currency:(t=d.checkout)===null||t===void 0?void 0:t.currency,setupFutureUsage:((o=d.checkout)===null||o===void 0?void 0:o.reusable_payment_method_required)?"off_session":null,appearance:{variables:{colorPrimary:s.getPropertyValue("--sc-color-primary-500")||"black",colorText:s.getPropertyValue("--sc-input-label-color")||"black",borderRadius:s.getPropertyValue("--sc-input-border-radius-medium")||"4px",colorBackground:s.getPropertyValue("--sc-input-background-color")||"white",fontSizeBase:s.getPropertyValue("--sc-input-font-size-medium")||"16px",colorLogo:s.getPropertyValue("--sc-stripe-color-logo")||"light",colorLogoTab:s.getPropertyValue("--sc-stripe-color-logo-tab")||"light",colorLogoTabSelected:s.getPropertyValue("--sc-stripe-color-logo-tab-selected")||"light",colorTextPlaceholder:s.getPropertyValue("--sc-input-placeholder-color")||"black"},rules:{".Input":{border:s.getPropertyValue("--sc-input-border")}}}}}createOrUpdateElements(){var e,i,t,o,s;if(!((e=d===null||d===void 0?void 0:d.checkout)===null||e===void 0?void 0:e.payment_method_required))return;if(!u.instances.stripe)return;if(((i=d.checkout)===null||i===void 0?void 0:i.status)&&["paid","processing"].includes((t=d.checkout)===null||t===void 0?void 0:t.status))return;if(!u.instances.stripeElements){u.instances.stripeElements=u.instances.stripe.elements(this.getElementsConfig());const e=f("shipping");u.instances.stripeElements.create("payment",{defaultValues:{billingDetails:{name:(o=d.checkout)===null||o===void 0?void 0:o.name,email:(s=d.checkout)===null||s===void 0?void 0:s.email,...!!e?{address:e}:{}}},fields:{billingDetails:{email:"never"}}}).mount(this.container);this.element=u.instances.stripeElements.getElement("payment");this.element.on("ready",(()=>this.loaded=true));this.element.on("change",(e=>{var i,t,o,s,l,a,r;const n=["cashapp","klarna","clearpay"];d.paymentMethodRequiresShipping=n.includes((i=e===null||e===void 0?void 0:e.value)===null||i===void 0?void 0:i.type);if(e.complete){this.scPaymentInfoAdded.emit({checkout_id:(t=d.checkout)===null||t===void 0?void 0:t.id,currency:(o=d.checkout)===null||o===void 0?void 0:o.currency,processor_type:"stripe",total_amount:(s=d.checkout)===null||s===void 0?void 0:s.total_amount,line_items:(l=d.checkout)===null||l===void 0?void 0:l.line_items,payment_method:{billing_details:{email:(a=d.checkout)===null||a===void 0?void 0:a.email,name:(r=d.checkout)===null||r===void 0?void 0:r.name}}})}}));return}u.instances.stripeElements.update(this.getElementsConfig())}handleUpdateElement(){var e,i;if(!this.element)return;if(((e=d.checkout)===null||e===void 0?void 0:e.status)!=="draft")return;const{name:t,email:o}=d.checkout;const{line_1:s,line_2:l,city:a,state:r,country:n,postal_code:c}=((i=d.checkout)===null||i===void 0?void 0:i.shipping_address)||{};this.element.update({defaultValues:{billingDetails:{name:t,email:o,address:{line1:s,line2:l,city:a,state:r,country:n,postal_code:c}}},fields:{billingDetails:{email:"never"}}})}async submit(){if((l===null||l===void 0?void 0:l.id)!=="stripe")return;const{error:e}=await u.instances.stripeElements.submit();if(e){console.error({error:e});r("REJECT");v(e);this.error=e.message;return}}async maybeConfirmOrder(){var e,i,t,o,s,a,r,n,c,u,p,v,f,m;if((l===null||l===void 0?void 0:l.id)!=="stripe")return;if(((i=(e=d.checkout)===null||e===void 0?void 0:e.payment_intent)===null||i===void 0?void 0:i.processor_type)!=="stripe")return;if(!((a=(s=(o=(t=d.checkout)===null||t===void 0?void 0:t.payment_intent)===null||o===void 0?void 0:o.processor_data)===null||s===void 0?void 0:s.stripe)===null||a===void 0?void 0:a.type))return;if(!((u=(c=(n=(r=d.checkout)===null||r===void 0?void 0:r.payment_intent)===null||n===void 0?void 0:n.processor_data)===null||c===void 0?void 0:c.stripe)===null||u===void 0?void 0:u.client_secret))return;return await this.confirm((m=(f=(v=(p=d.checkout)===null||p===void 0?void 0:p.payment_intent)===null||v===void 0?void 0:v.processor_data)===null||f===void 0?void 0:f.stripe)===null||m===void 0?void 0:m.type)}async confirm(e,i={}){var t,o,s,l;const a={elements:u.instances.stripeElements,clientSecret:(l=(s=(o=(t=d.checkout)===null||t===void 0?void 0:t.payment_intent)===null||o===void 0?void 0:o.processor_data)===null||s===void 0?void 0:s.stripe)===null||l===void 0?void 0:l.client_secret,confirmParams:{return_url:m(window.location.href,{...d.checkout.id?{checkout_id:d.checkout.id}:{}}),payment_method_data:{billing_details:{email:d.checkout.email}}},redirect:"if_required",...i};if(this.confirming)return;if(!u.instances.stripe)return;try{this.scSetState.emit("PAYING");const i=e==="setup"?await u.instances.stripe.confirmSetup(a):await u.instances.stripe.confirmPayment(a);if(i===null||i===void 0?void 0:i.error){this.error=i.error.message;throw i.error}else{this.scSetState.emit("PAID");this.scPaid.emit()}}catch(e){console.error(e);r("REJECT");v(e);if(e.message){this.error=e.message}}finally{this.confirming=false}}render(){return t("div",{key:"51340b38bf6a3b1756e4eeb1ad745c12276a8ec9",class:"sc-stripe-payment-element","data-testid":"stripe-payment-element"},!!this.error&&t("sc-text",{key:"d6ae19c90d8cf0e61b4792e510dc11919987c66c",style:{color:"var(--sc-color-danger-500)","--font-size":"var(--sc-font-size-small)",marginBottom:"0.5em"}},this.error),t("div",{key:"16877b04b62a471a1622c20455eed590509e304c",class:"loader",hidden:this.loaded},t("div",{key:"912fc957a045e065c2990a193b7edecc4f70f802",class:"loader__row"},t("div",{key:"7558062bd77d0bf57127a57b738a3d9155fb64bf",style:{width:"50%"}},t("sc-skeleton",{key:"b690ebd050c2a0915a4595bed6cf1f9c3a46b674",style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",{key:"0475389fa3f4ad26a4d9dfeea57f01cce398089d"})),t("div",{key:"188116864da05517d67c900d348ec2b1e671daa6",style:{flex:"1"}},t("sc-skeleton",{key:"43d4e870295a0c27be0f8a4a062e7190482e016a",style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",{key:"887ac89e1a2aec4b3d71f31604ce899694a11f8d"})),t("div",{key:"62a4517c09f18f64a8a78622a16370391aef4e8c",style:{flex:"1"}},t("sc-skeleton",{key:"8724f112a63e335618923b1f7fbd05f958b996d6",style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",{key:"831be5169bb405976bd6bf159fcbb1e3abb89509"}))),t("div",{key:"9797bbfc92a1d2cdeb91bd068f6f67fe06599466",class:"loader__details"},t("sc-skeleton",{key:"4c4eb2be142001a468ad6c121a7e987f5ee563e3",style:{height:"1rem"}}),t("sc-skeleton",{key:"939c821e0dc999927cfc8a4989a195f44c209bfa",style:{height:"1rem",width:"30%"}}))),t("div",{key:"097c7359f81285da209a01c1b8f0ea5e1ac20033",hidden:!this.loaded,class:"sc-payment-element-container",ref:e=>this.container=e}))}get el(){return o(this)}static get watchers(){return{styles:["handleStylesChange"]}}};b.style=y;export{b as sc_stripe_payment_element};
//# sourceMappingURL=p-dd4bb4c1.entry.js.map