import{h}from"@stencil/core";import{__}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";import apiFetch from"../../../../functions/fetch";import{onFirstVisible}from"../../../../functions/lazy";export class ScDownloadsList{constructor(){this.query={page:1,per_page:10},this.allLink=void 0,this.heading=void 0,this.isCustomer=void 0,this.requestNonce=void 0,this.purchases=[],this.loading=void 0,this.busy=void 0,this.error=void 0,this.pagination={total:0,total_pages:0}}componentWillLoad(){onFirstVisible(this.el,(()=>{this.initialFetch()}))}async initialFetch(){if(this.isCustomer)try{this.loading=!0,await this.getItems()}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||__("Something went wrong","surecart")}finally{this.loading=!1}}async fetchItems(){if(this.isCustomer)try{this.busy=!0,await this.getItems()}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||__("Something went wrong","surecart")}finally{this.busy=!1}}async getItems(){const e=await await apiFetch({path:addQueryArgs("surecart/v1/purchases/",{expand:["product","product.downloads","download.media"],downloadable:!0,revoked:!1,...this.query}),parse:!1});return this.pagination={total:parseInt(e.headers.get("X-WP-Total")),total_pages:parseInt(e.headers.get("X-WP-TotalPages"))},this.purchases=await e.json(),this.purchases}nextPage(){this.query.page=this.query.page+1,this.fetchItems()}prevPage(){this.query.page=this.query.page-1,this.fetchItems()}render(){var e;return h("sc-purchase-downloads-list",{key:"81c0c9665a0039623b851a5b519cca34f5bdf81f",heading:this.heading,allLink:this.allLink&&this.pagination.total_pages>1?this.allLink:"",loading:this.loading,busy:this.busy,requestNonce:this.requestNonce,error:this.error,purchases:this.purchases},h("span",{key:"9b295257cc9f6e060d3b433c6098524605a64634",slot:"heading"},h("slot",{key:"fee93edb49150167b7ba0fe808ceb4f24855a364",name:"heading"},this.heading||__("Downloads","surecart"))),h("sc-pagination",{key:"4e4c4577801b8bd242ea35a121fe120000a3ce62",slot:"after",page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:null===(e=null==this?void 0:this.purchases)||void 0===e?void 0:e.length,onScNextPage:()=>this.nextPage(),onScPrevPage:()=>this.prevPage()}))}static get is(){return"sc-dashboard-downloads-list"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-dashboard-downloads-list.scss"]}}static get styleUrls(){return{$:["sc-dashboard-downloads-list.css"]}}static get properties(){return{query:{type:"any",mutable:!0,complexType:{original:"any",resolved:"any",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Customer id to fetch subscriptions"},attribute:"query",reflect:!1,defaultValue:"{\n    page: 1,\n    per_page: 10,\n  }"},allLink:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"all-link",reflect:!1},heading:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"heading",reflect:!1},isCustomer:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"is-customer",reflect:!1},requestNonce:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"request-nonce",reflect:!1}}}static get states(){return{purchases:{},loading:{},busy:{},error:{},pagination:{}}}static get elementRef(){return"el"}}