"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1936],{4805:function(e,r,t){t.d(r,{a:function(){return p},b:function(){return u},g:function(){return d}});var n=t(4467),o=t(296);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return c(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var _n=0,n=function(){};return{s:n,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw o}}}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function u(e){for(var r,t="",n=Object.entries(e);r=n.shift();){var i=r,a=(0,o.A)(i,2),c=a[0],u=a[1];if(Array.isArray(u)||u&&u.constructor===Object){var l,d=s(Object.entries(u).reverse());try{for(d.s();!(l=d.n()).done;){var p=(0,o.A)(l.value,2),f=p[0],h=p[1];n.unshift(["".concat(c,"[").concat(f,"]"),h])}}catch(e){d.e(e)}finally{d.f()}}else void 0!==u&&(null===u&&(u=""),t+="&"+[c,u].map(encodeURIComponent).join("="))}return t.substr(1)}function l(e){try{return decodeURIComponent(e)}catch(r){return e}}function d(e){return(function(e){var r;try{r=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(r)return r}(e)||"").replace(/\+/g,"%20").split("&").reduce((function(e,r){var t=r.split("=").filter(Boolean).map(l),n=(0,o.A)(t,2),i=n[0],s=n[1],c=void 0===s?"":s;return i&&function(e,r,t){for(var n=r.length,o=n-1,i=0;i<n;i++){var s=r[i];!s&&Array.isArray(e)&&(s=e.length.toString()),s=["__proto__","constructor","prototype"].includes(s)?s.toUpperCase():s;var c=!isNaN(Number(r[i+1]));e[s]=i===o?t:e[s]||(c?[]:{}),Array.isArray(e[s])&&!c&&(e[s]=a({},e[s])),e=e[s]}}(e,i.replace(/\]/g,"").split("["),c),e}),Object.create(null))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;if(!r||!Object.keys(r).length)return e;var t=e,n=e.indexOf("?");return-1!==n&&(r=Object.assign(d(e),r),t=t.substr(0,n)),t+"?"+u(r)}},4883:function(e,r,t){t.d(r,{a:function(){return q},h:function(){return H}});var n=t(467),o=t(45),i=t(296),a=t(4467),s=t(9280),c=t.n(s),u=t(4805),l=t(3506),d=["rest_route"],p=["path","url"],f=["url","path","data","parse"];function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,a.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r){return void 0!==(0,l.g)(e,r)}function w(e){var r=e.split("?"),t=r[1],n=r[0];return t?n+"?"+t.split("&").map((function(e){return e.split("=")})).map((function(e){return e.map(decodeURIComponent)})).sort((function(e,r){return e[0].localeCompare(r[0])})).map((function(e){return e.map(encodeURIComponent)})).map((function(e){return e.join("=")})).join("&"):n}var y=function(e,r){var t,n,o=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(t=e.namespace.replace(/^\/|\/$/g,""),o=(n=e.endpoint.replace(/^\//,""))?t+"/"+n:t),delete e.namespace,delete e.endpoint,r(v(v({},e),{},{path:o}))};function m(e,r){return Promise.resolve(r?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}var b=function(e){return e.json?e.json():Promise.reject(e)},_=function(e){return function(e){if(!e)return{};var r=e.match(/<([^>]+)>; rel="next"/);return r?{next:r[1]}:{}}(e.headers.get("link")).next},O=function(e){var r=!!e.path&&-1!==e.path.indexOf("per_page=-1"),t=!!e.url&&-1!==e.url.indexOf("per_page=-1");return r||t},j=function(){var e=(0,n.A)(c().mark((function e(r,t){var n,i,a,s,l,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.parse){e.next=2;break}return e.abrupt("return",t(r));case 2:if(O(r)){e.next=4;break}return e.abrupt("return",t(r));case 4:return e.next=6,q(v(v({},(f={per_page:100},void 0,void 0,h=(c=r).path,g=c.url,v(v({},(0,o.A)(c,p)),{},{url:g&&(0,u.a)(g,f),path:h&&(0,u.a)(h,f)}))),{},{parse:!1}));case 6:return n=e.sent,e.next=9,b(n);case 9:if(i=e.sent,Array.isArray(i)){e.next=12;break}return e.abrupt("return",i);case 12:if(a=_(n)){e.next=15;break}return e.abrupt("return",i);case 15:s=[].concat(i);case 16:if(!a){e.next=27;break}return e.next=19,q(v(v({},r),{},{path:void 0,url:a,parse:!1}));case 19:return l=e.sent,e.next=22,b(l);case 22:d=e.sent,s=s.concat(d),a=_(l),e.next=16;break;case 27:return e.abrupt("return",s);case 28:case"end":return e.stop()}var c,f,h,g}),e)})));return function(_x,r){return e.apply(this,arguments)}}(),k=new Set(["PATCH","PUT","DELETE"]),P=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e:204===e.status?null:e.json?e.json():Promise.reject(e)}(e,r)).catch((function(e){return x(e,r)}))};function x(e){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw e;return function(e){var r={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!e||!e.json)throw r;return e.json().catch((function(){throw r}))}(e).then((function(e){var r={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw e||r}))}var A,S,E,T,D,C,M,I={Accept:"application/json, */*;q=0.1"},L={credentials:"include"},R=[function(e,r){return"string"!=typeof e.url||g(e.url,"_locale")||(e.url=(0,u.a)(e.url,{_locale:"user"})),"string"!=typeof e.path||g(e.path,"_locale")||(e.path=(0,u.a)(e.path,{_locale:"user"})),r(e)},y,function(e,r){var t=e.method,n=void 0===t?"GET":t;return k.has(n.toUpperCase())&&(e=v(v({},e),{},{headers:v(v({},e.headers),{},{"X-HTTP-Method-Override":n,"Content-Type":"application/json"}),method:"POST"})),r(e)},j],N=function(e){if(e.status>=200&&e.status<300)return e;throw e},U=function(e){var r=e.url,t=e.path,n=e.data,i=e.parse,a=void 0===i||i,s=(0,o.A)(e,f),c=e.body,u=e.headers;return u=v(v({},I),u),n&&(c=JSON.stringify(n),u["Content-Type"]="application/json"),window.fetch(r||t||window.location.href,v(v(v({},L),s),{},{body:c,headers:u})).then((function(e){return Promise.resolve(e).then(N).catch((function(e){return x(e,a)})).then((function(e){return P(e,a)}))}),(function(e){if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function q(e){return R.reduceRight((function(e,r){return function(t){return r(t,e)}}),U)(e).catch((function(r){return"rest_cookie_invalid_nonce"!==r.code?Promise.reject(r):window.fetch(q.nonceEndpoint).then(N).then((function(e){return e.text()})).then((function(r){return q.nonceMiddleware.nonce=r,q(e)}))}))}q.use=function(e){R.unshift(e)},q.setFetchHandler=function(e){U=e},q.createNonceMiddleware=function(e){var r=function e(r,t){var n=r.headers,o=void 0===n?{}:n;for(var i in o)if("x-wp-nonce"===i.toLowerCase()&&o[i]===e.nonce)return t(r);return t(v(v({},r),{},{headers:v(v({},o),{},{"X-WP-Nonce":e.nonce})}))};return r.nonce=e,r},q.createPreloadingMiddleware=function(e){var r=Object.fromEntries(Object.entries(e).map((function(e){var r=(0,i.A)(e,2),t=r[0],n=r[1];return[w(t),n]})));return function(e,t){var n=e.parse,i=void 0===n||n,a=e.path;if(!a&&e.url){var s=(0,u.g)(e.url),c=s.rest_route,l=(0,o.A)(s,d);"string"==typeof c&&(a=(0,u.a)(c,l))}if("string"!=typeof a)return t(e);var p=e.method||"GET",f=w(a);if("GET"===p&&r[f]){var h=r[f];return delete r[f],m(h,!!i)}if("OPTIONS"===p&&r[p]&&r[p][f]){var v=r[p][f];return delete r[p][f],m(v,!!i)}return t(e)}},q.createRootURLMiddleware=function(e){return function(r,t){return y(r,(function(r){var n,o=r.url,i=r.path;return"string"==typeof i&&(n=e,-1!==e.indexOf("?")&&(i=i.replace("?","&")),i=i.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(i=i.replace("?","&")),o=n+i),t(v(v({},r),{},{url:o}))}))}},q.fetchAllMiddleware=j,q.mediaUploadMiddleware=function(e,r){if(!function(e){var r=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&r}(e))return r(e);var t=0,n=function e(n){return t++,r({path:"/wp/v2/media/".concat(n,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return t<5?e(n):(r({path:"/wp/v2/media/".concat(n,"?force=true"),method:"DELETE"}),Promise.reject())}))};return r(v(v({},e),{},{parse:!1})).catch((function(r){var t=r.headers.get("x-wp-upload-attachment-id");return r.status>=500&&r.status<600&&t?n(t).catch((function(){return!1!==e.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(r)})):x(r,e.parse)})).then((function(r){return P(r,e.parse)}))},q.createThemePreviewMiddleware=function(e){return function(r,t){if("string"==typeof r.url){var n=(0,l.g)(r.url,"wp_theme_preview");void 0===n?r.url=(0,u.a)(r.url,{wp_theme_preview:e}):""===n&&(r.url=(0,l.r)(r.url,"wp_theme_preview"))}if("string"==typeof r.path){var o=(0,l.g)(r.path,"wp_theme_preview");void 0===o?r.path=(0,u.a)(r.path,{wp_theme_preview:e}):""===o&&(r.path=(0,l.r)(r.path,"wp_theme_preview"))}return t(r)}},q.fetchAllMiddleware=null,q.use(q.createRootURLMiddleware((null===(S=null===(A=null===window||void 0===window?void 0:window.parent)||void 0===A?void 0:A.scData)||void 0===S?void 0:S.root_url)||(null===(E=null===window||void 0===window?void 0:window.scData)||void 0===E?void 0:E.root_url))),(null===(T=null===window||void 0===window?void 0:window.scData)||void 0===T?void 0:T.nonce)&&(q.nonceMiddleware=q.createNonceMiddleware(null===(D=null===window||void 0===window?void 0:window.scData)||void 0===D?void 0:D.nonce),q.use(q.nonceMiddleware)),(null===(C=null===window||void 0===window?void 0:window.scData)||void 0===C?void 0:C.nonce_endpoint)&&(q.nonceEndpoint=null===(M=null===window||void 0===window?void 0:window.scData)||void 0===M?void 0:M.nonce_endpoint),q.use((function(e,r){return e.path=(0,u.a)(e.path,{t:Date.now()}),r(e)})),q.use((function(e,r){var t=r(e);return t.catch((function(e){return"invalid_json"===e.code&&(e.message=wp.i18n.__("The response is not a valid JSON response.","surecart"),e.additional_errors=[{code:"invalid_json",message:wp.i18n.sprintf(/* translators: %s: URL to debug settings page */
wp.i18n.__("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),'<a href="'.concat("https://surecart.com/docs/is-not-a-valid-json-response/",'" target="_blank" rel="noopener noreferrer">').concat(wp.i18n.__("More Information","surecart"),"</a>"))}]),Promise.reject(e)})),t}));var z=function(e){var r={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==e?void 0:e.code)&&(null==e?void 0:e.message))throw e;if(!e||!e.json)throw r;return e.json().catch((function(){throw r}))},H=function(){var e=(0,n.A)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(r);case 2:if("rest_cookie_invalid_nonce"===(t=e.sent).code){e.next=5;break}throw t;case 5:return e.abrupt("return",window.fetch(q.nonceEndpoint).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.text()})).then((function(e){q.nonceMiddleware.nonce=e})));case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},2942:function(e,r,t){t.d(r,{o:function(){return n}});var n=function(e,r){new window.IntersectionObserver((function(e,t){e[0].intersectionRatio>0&&(r(),t.unobserve(e[0].target))})).observe(e)}},3506:function(e,r,t){t.d(r,{g:function(){return o},r:function(){return i}});var n=t(4805);function o(e,r){return(0,n.g)(e)[r]}function i(e){var r=e.indexOf("?");if(-1===r)return e;for(var t=(0,n.g)(e),o=e.substr(0,r),i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];a.forEach((function(e){return delete t[e]}));var c=(0,n.b)(t);return c?o+"?"+c:o}},1936:function(e,r,t){t.r(r),t.d(r,{sc_orders_list:function(){return w}});var n=t(9394),o=t(2284),i=t(4467),a=t(467),s=t(3029),c=t(2901),u=t(9280),l=t.n(u),d=t(1346),p=t(4883),f=t(2942),h=t(4805);function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,i.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w=function(){return(0,c.A)((function e(r){(0,s.A)(this,e),(0,d.r)(this,r),this.query={page:1,per_page:10},this.allLink=void 0,this.heading=void 0,this.isCustomer=void 0,this.orders=[],this.loading=void 0,this.busy=void 0,this.error=void 0,this.pagination={total:0,total_pages:0}}),[{key:"componentWillLoad",value:function(){var e=this;(0,f.o)(this.el,(function(){e.initialFetch()}))}},{key:"initialFetch",value:(t=(0,a.A)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,this.getOrders();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(this.error),this.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Something went wrong","surecart");case 10:return e.prev=10,this.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[0,6,10,13]])}))),function(){return t.apply(this,arguments)})},{key:"fetchOrders",value:(r=(0,a.A)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.busy=!0,e.next=4,this.getOrders();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(this.error),this.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Something went wrong","surecart");case 10:return e.prev=10,this.busy=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[0,6,10,13]])}))),function(){return r.apply(this,arguments)})},{key:"getOrders",value:(e=(0,a.A)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isCustomer){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,p.a)({path:(0,h.a)("surecart/v1/orders/",g({expand:["checkout","checkout.line_items","checkout.charge"]},this.query)),parse:!1});case 4:return e.next=6,e.sent;case 6:return r=e.sent,this.pagination={total:parseInt(r.headers.get("X-WP-Total")),total_pages:parseInt(r.headers.get("X-WP-TotalPages"))},e.next=10,r.json();case 10:return this.orders=e.sent,e.abrupt("return",this.orders);case 12:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)})},{key:"nextPage",value:function(){this.query.page=this.query.page+1,this.fetchOrders()}},{key:"prevPage",value:function(){this.query.page=this.query.page-1,this.fetchOrders()}},{key:"renderStatusBadge",value:function(e){var r=e.status,t=e.checkout.charge;if(t&&"object"===(0,o.A)(t)){if(null==t?void 0:t.fully_refunded)return(0,d.h)("sc-tag",{type:"danger"},wp.i18n.__("Refunded","surecart"));if(null==t?void 0:t.refunded_amount)return(0,d.h)("sc-tag",{type:"info"},wp.i18n.__("Partially Refunded","surecart"))}return(0,d.h)("sc-order-status-badge",{status:r})}},{key:"renderLoading",value:function(){return(0,d.h)("sc-card",{noPadding:!0},(0,d.h)("sc-stacked-list",null,(0,d.h)("sc-stacked-list-row",{style:{"--columns":"4"},"mobile-size":500},(0,n.A)(Array(4)).map((function(){return(0,d.h)("sc-skeleton",{style:{width:"100px",display:"inline-block"}})})))))}},{key:"renderEmpty",value:function(){return(0,d.h)("div",null,(0,d.h)("sc-divider",{style:{"--spacing":"0"}}),(0,d.h)("slot",{name:"empty"},(0,d.h)("sc-empty",{icon:"shopping-bag"},wp.i18n.__("You don't have any orders.","surecart"))))}},{key:"renderList",value:function(){var e=this;return this.orders.map((function(r){var t,n,o=r.checkout,i=r.created_at,a=r.id;if(!o)return null;var s=o.line_items,c=o.amount_due,u=o.currency,l=o.charge;return(0,d.h)("sc-stacked-list-row",{href:(0,h.a)(window.location.href,{action:"show",model:"order",id:a}),style:{"--columns":"4"},"mobile-size":500},(0,d.h)("div",null,"string"!=typeof l&&(0,d.h)("sc-format-date",{class:"order__date",date:1e3*((null==l?void 0:l.created_at)||i),month:"short",day:"numeric",year:"numeric"})),(0,d.h)("div",null,(0,d.h)("sc-text",{truncate:!0,style:{"--color":"var(--sc-color-gray-500)"}},wp.i18n.sprintf(wp.i18n._n("%s item","%s items",(null===(t=null==s?void 0:s.pagination)||void 0===t?void 0:t.count)||0,"surecart"),(null===(n=null==s?void 0:s.pagination)||void 0===n?void 0:n.count)||0))),(0,d.h)("div",{class:"orders-list__status"},e.renderStatusBadge(r),(0,d.h)("sc-order-shipment-badge",{status:null==r?void 0:r.shipment_status})),(0,d.h)("div",null,(0,d.h)("sc-format-number",{type:"currency",currency:u,value:c})))}))}},{key:"renderContent",value:function(){var e;return this.loading?this.renderLoading():0===(null===(e=this.orders)||void 0===e?void 0:e.length)?this.renderEmpty():(0,d.h)("sc-card",{"no-padding":!0},(0,d.h)("sc-stacked-list",null,this.renderList()))}},{key:"render",value:function(){var e,r,t=this;return(0,d.h)("sc-dashboard-module",{key:"81febd589198881547fad4fa01b1a23c8c9aa028",class:"orders-list",error:this.error},(0,d.h)("span",{key:"57501cfa3f99a138c46d2e7b7223e24f2d4ad687",slot:"heading"},(0,d.h)("slot",{key:"8ebd01686589d1ff033476683b66e300a1ffe6d8",name:"heading"},this.heading||wp.i18n.__("Order History","surecart"))),!!this.allLink&&!!(null===(e=this.orders)||void 0===e?void 0:e.length)&&(0,d.h)("sc-button",{key:"fa832436f13e2ba836498f923e50a308d66e5280",type:"link",href:this.allLink,slot:"end","aria-label":wp.i18n.sprintf(wp.i18n.__("View all %s","surecart"),this.heading||wp.i18n.__("Order History","surecart"))},wp.i18n.__("View all","surecart"),(0,d.h)("sc-icon",{key:"b990e397c09ef824eebaa979ab33189d0126fe2a","aria-hidden":"true",name:"chevron-right",slot:"suffix"})),this.renderContent(),!this.allLink&&(0,d.h)("sc-pagination",{key:"33cc38ceaf851e6fca9e578c0afc3abe4185e6ab",page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:null===(r=null==this?void 0:this.orders)||void 0===r?void 0:r.length,onScNextPage:function(){return t.nextPage()},onScPrevPage:function(){return t.prevPage()}}),this.busy&&(0,d.h)("sc-block-ui",{key:"e7a9ca604e47bfaa10e694c3f1b50997ef9b370d"}))}},{key:"el",get:function(){return(0,d.a)(this)}}]);var e,r,t}();w.style=":host{display:block}.orders-list{display:grid;gap:0.75em}.orders-list__status{display:flex;align-items:center;gap:var(--sc-spacing-x-small)}.orders-list__heading{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between}.orders-list__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.orders-list a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.order__row{color:var(--sc-color-gray-800);text-decoration:none;display:grid;align-items:center;justify-content:space-between;gap:0;grid-template-columns:1fr 1fr 1fr auto;margin:0;padding:var(--sc-spacing-small) var(--sc-spacing-large)}.order__row:not(:last-child){border-bottom:1px solid var(--sc-color-gray-200)}.order__row:hover{background:var(--sc-color-gray-50)}.order__date{font-weight:var(--sc-font-weight-semibold)}"},45:function(e,r,t){t.d(r,{A:function(){return o}});var n=t(8587);function o(e,r){if(null==e)return{};var t,o,i=(0,n.A)(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},8587:function(e,r,t){function n(e,r){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}t.d(r,{A:function(){return n}})}}]);