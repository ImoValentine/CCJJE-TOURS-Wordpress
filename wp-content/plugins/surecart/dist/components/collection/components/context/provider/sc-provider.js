import{h}from"@stencil/core";export class ScProvider{constructor(){this.STENCIL_CONTEXT=void 0,this.consumers=[]}watchContext(e){this.consumers.forEach((t=>t(e)))}async mountConsumer(e){e.stopPropagation(),this.consumers=this.consumers.slice().concat([e.detail]),await e.detail(this.STENCIL_CONTEXT);const t=this.consumers.indexOf(e.detail),s=this.consumers.slice(0,t).concat(this.consumers.slice(t+1,this.consumers.length));this.consumers=s}disconnectedCallback(){this.consumers.map((e=>this.mountEmitter.emit(e)))}render(){return h("slot",{key:"955b9395739aec78543c20c13e993b6dad2735b6"})}static get is(){return"sc-provider"}static get properties(){return{STENCIL_CONTEXT:{type:"unknown",mutable:!1,complexType:{original:"{ [key: string]: any }",resolved:"{ [key: string]: any; }",references:{}},required:!1,optional:!1,docs:{tags:[],text:""}}}}static get states(){return{consumers:{}}}static get events(){return[{method:"mountEmitter",name:"mountConsumer",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"any",resolved:"any",references:{}}}]}static get watchers(){return[{propName:"STENCIL_CONTEXT",methodName:"watchContext"}]}static get listeners(){return[{name:"mountConsumer",method:"mountConsumer",target:void 0,capture:!1,passive:!1}]}}