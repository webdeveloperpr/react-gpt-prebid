(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{281:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return f}));var r=n(288),o=n(280);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=n(277),u=f();function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.request,u=e.done;return function(e,f,l){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var p,d=s.method||(l?"POST":"GET"),y=document.createElement("a");y.href=e;var g="object"===i(f)&&null!==f?f:{success:function(){c.logMessage("xhr success")},error:function(t){c.logError("xhr error",null,t)}};if("function"==typeof f&&(g.success=f),(p=new window.XMLHttpRequest).onreadystatechange=function(){if(4===p.readyState){"function"==typeof u&&u(y.origin);var t=p.status;t>=200&&t<300||304===t?g.success(p.responseText,p):g.error(p.statusText,p)}},o.b.getConfig("disableAjaxTimeout")||(p.ontimeout=function(){c.logError("  xhr timeout after ",p.timeout,"ms")}),"GET"===d&&l){var b=Object(r.c)(e,s);a(b.search,l),e=Object(r.a)(b)}p.open(d,e,!0),o.b.getConfig("disableAjaxTimeout")||(p.timeout=t),s.withCredentials&&(p.withCredentials=!0),c._each(s.customHeaders,(function(t,e){p.setRequestHeader(e,t)})),s.preflight&&p.setRequestHeader("X-Requested-With","XMLHttpRequest"),p.setRequestHeader("Content-Type",s.contentType||"text/plain"),"function"==typeof n&&n(y.origin),"POST"===d&&l?p.send(l):p.send()}catch(t){c.logError("xhr construction",t)}}}},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(283),o=n.n(r),a=n(277),i={},c=["criteo","outstream","adagio","browsi"];function u(t,e,n){if(e&&t){if(o()(c,e))return i[t]?(n&&"function"==typeof n&&(i[t].loaded?n():i[t].callbacks.push(n)),i[t].tag):(i[t]={loaded:!1,tag:null,callbacks:[]},n&&"function"==typeof n&&i[t].callbacks.push(n),a.logWarn("module ".concat(e," is loading external JavaScript")),function(e,n){var r=document.createElement("script");r.type="text/javascript",r.async=!0,i[t].tag=r,r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,n())}:r.onload=function(){n()};return r.src=e,a.insertElement(r),r}(t,(function(){i[t].loaded=!0;try{for(var e=0;e<i[t].callbacks.length;e++)i[t].callbacks[e]()}catch(t){a.logError("Error executing callback","adloader.js:loadExternalScript",t)}})));a.logError("".concat(e," not whitelisted for loading external JavaScript"))}else a.logError("cannot load external script without url and moduleCode")}},291:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return t})),n.d(e,"e",(function(){return f}));var r=n(292),o=n.n(r);function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=o()({ready:o.a.SYNC|o.a.ASYNC|o.a.QUEUE}),c=i.get;function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=t.getHooks({hook:e});0===r.length&&t.before(e,n)}function t(t,e){i("async",(function(t){t.forEach((function(t){return e.apply(void 0,a(t))}))}),t)([])}function f(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];c(t).before((function(t,e){e.push(n),t(e)}))}},292:function(t,e){
/*
* @license MIT
* Fun Hooks v0.9.8
* (c) @snapwich
*/
c.SYNC=1,c.ASYNC=2,c.QUEUE=4;var n=Object.freeze({useProxy:!0,ready:0}),r=new WeakMap,o="2,1,0"===[1].reduce((function(t,e,n){return[t,e,n]}),2).toString()?Array.prototype.reduce:function(t,e){var n,r=Object(this),o=r.length>>>0,a=0;if(e)n=e;else{for(;a<o&&!(a in r);)a++;n=r[a++]}for(;a<o;)a in r&&(n=t(n,r[a],a,r)),a++;return n};function a(t,e){return Array.prototype.slice.call(t,e)}var i=Object.assign||function(t){return o.call(a(arguments,1),(function(t,e){return e&&Object.keys(e).forEach((function(n){t[n]=e[n]})),t}),t)};function c(t){var e,u={},f=[];function l(t,e){return"function"==typeof t?y.call(null,"sync",t,e):"string"==typeof t&&"function"==typeof e?y.apply(null,arguments):"object"==typeof t?s.apply(null,arguments):void 0}function s(t,e,n){var r=!0;void 0===e&&(e=Object.getOwnPropertyNames(t),r=!1);var o={},a=["constructor"];do{(e=e.filter((function(e){return!("function"!=typeof t[e]||-1!==a.indexOf(e)||e.match(/^_/))}))).forEach((function(e){var r=e.split(":"),a=r[0],i=r[1]||"sync";if(!o[a]){var c=t[a];o[a]=t[a]=y(i,c,n?[n,a]:void 0)}})),t=Object.getPrototypeOf(t)}while(r&&t);return o}function p(t){var n=Array.isArray(t)?t:t.split(".");return o.call(n,(function(r,o,a){var i=r[o],c=!1;return i||(a===n.length-1?(e||f.push((function(){c||console.warn("fun-hooks: referenced '"+t+"' but it was never created")})),r[o]=d((function(t){r[o]=t,c=!0}))):r[o]={})}),u)}function d(t){var e=[],n=[],o=function(){},a={before:function(t,n){return u.call(this,e,"before",t,n)},after:function(t,e){return u.call(this,n,"after",t,e)},getHooks:function(t){var r=e.concat(n);return"object"==typeof t&&(r=r.filter((function(e){return Object.keys(t).every((function(n){return e[n]===t[n]}))}))),i(r,{remove:function(){return r.forEach((function(t){t.remove()})),this}})},removeAll:function(){return this.getHooks().remove()}},c={install:function(r,a,i){this.type=r,o=i,i(e,n),t&&t(a)}};return r.set(a.after,c),a;function u(t,r,a,i){var c={hook:a,type:r,priority:i||10,remove:function(){var r=t.indexOf(c);-1!==r&&(t.splice(r,1),o(e,n))}};return t.push(c),t.sort((function(t,e){return e.priority-t.priority})),o(e,n),this}}function y(n,o,u){var l=o.after&&r.get(o.after);if(l){if(l.type!==n)throw"fun-hooks: recreated hookable with different type";return o}var s,y,g=u?p(u):d(),b={get:function(t,e){return g[e]||Reflect.get.apply(Reflect,arguments)}};return e||f.push(h),t.useProxy&&"function"==typeof Proxy&&Proxy.revocable?y=new Proxy(o,b):i(y=function(){return b.apply?b.apply(o,this,a(arguments)):o.apply(this,arguments)},g),r.get(y.after).install(n,y,(function(t,e){var r,o=[];t.length||e.length?(t.forEach(i),r=o.push(void 0)-1,e.forEach(i),s=function(t,e,i){var c,u=0,f="async"===n&&"function"==typeof i[i.length-1]&&i.pop();function l(t){"sync"===n?c=t:f&&f.apply(null,arguments)}function s(t){if(o[u]){var r=a(arguments);return s.bail=l,r.unshift(s),o[u++].apply(e,r)}"sync"===n?c=t:f&&f.apply(null,arguments)}return o[r]=function(){var r=a(arguments,1);"async"===n&&f&&(delete s.bail,r.push(s));var o=t.apply(e,r);"sync"===n&&s(o)},s.apply(null,i),c}):s=void 0;function i(t){o.push(t.hook)}h()})),y;function h(){!e&&("sync"!==n||t.ready&c.SYNC)&&("async"!==n||t.ready&c.ASYNC)?"sync"!==n&&t.ready&c.QUEUE?b.apply=function(){var t=arguments;f.push((function(){y.apply(t[1],t[2])}))}:b.apply=function(){throw"fun-hooks: hooked function not ready"}:b.apply=s}}return(t=i({},n,t)).ready?l.ready=function(){e=!0,function(t){for(var e;e=t.shift();)e()}(f)}:e=!0,l.get=p,l}t.exports=c},66:function(t,e,n){"use strict";n.r(e),n.d(e,"addBrowsiTag",(function(){return d})),n.d(e,"setData",(function(){return g})),n.d(e,"isIdMatchingAdUnit",(function(){return h})),n.d(e,"browsiSubmodule",(function(){return v})),n.d(e,"init",(function(){return m}));var r=n(280),o=n(277),a=n(291),i=n(281),c=n(284);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={},s=null,p=null;function d(t){var e=Object(c.a)(t.u,"browsi");return e.async=!0,e.setAttribute("data-sitekey",l.siteKey),e.setAttribute("data-pubkey",l.pubKey),e.setAttribute("prebidbpt","true"),e.setAttribute("id","browsi-tag"),e.setAttribute("src",t.u),e.prebidData=o.deepClone(t),l.keyName&&(e.prebidData.kn=l.keyName),e}function y(){var t=window.top,e=t.document,n=null;try{n=o.getDataFromLocalStorage("__brtd")}catch(t){o.logError("unable to parse __brtd")}var r,a,c=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},{sk:l.siteKey,sw:t.screen&&t.screen.width||-1,sh:t.screen&&t.screen.height||-1,url:encodeURIComponent("".concat(e.location.protocol,"//").concat(e.location.host).concat(e.location.pathname))},{},n?{us:n}:{us:"{}"},{},document.referrer?{r:document.referrer}:{},{},document.title?{at:document.title}:{});r="//".concat(l.url,"/prebid?").concat((a=c,Object.keys(a).map((function(t){return t+"="+encodeURIComponent(a[t])})).join("&"))),Object(i.b)(l.auctionDelay||l.timeout||1e3)(r,{success:function(t,e){if(200===e.status)try{var n=JSON.parse(t);n&&n.p&&n.kn?g({p:n.p,kn:n.kn,pmd:n.pmd}):g({}),d(n)}catch(t){o.logError("unable to parse data"),g({})}else 204===e.status&&g({})},error:function(){g({}),o.logError("unable to get prediction data")}})}function g(t){s=t,"function"==typeof p&&(p(s),p=null)}function b(){return o.isGptPubadsDefined&&window.googletag.pubads().getSlots()}function h(t,e,n){if(!n||!n.length)return!0;var r=e.getAdUnitPath();return-1!==n.indexOf(r)}var v={name:"browsi",getData:function(t,e){try{n=function(n){var r=n.p;if(!r||!Object.keys(r).length)return e({});var a=b();if(!a||!a.length)return e({});var i=t.reduce((function(t,e){var a=e&&e.code;if(!a)return t;var i=function(t){var e=b();return e&&e.length&&e.filter((function(e){return e.getSlotElementId()===t}))[0]||null}(a);if(!i)return t;var c,u,f,s,p=function(t,e,n){if(t)try{return function(t,e,n,r){var o=t.p.replace(/['"]+/g,"").replace(/<DIV_ID>/g,e);return n&&(o=o.replace(/<AD_UNIT>/g,n)),r&&(o=o.replace(/<KEY_(\w+)>/g,r)),t.s&&(o=o.substring(t.s.s,t.s.e)),o}(t,n.getSlotElementId(),n.getAdUnitPath(),(function(t,e){return e&&n.getTargeting(e).join("_")||"NA"}))}catch(e){o.logError("failed to evaluate: ".concat(t))}return e}(n.pmd,a,i),d=r[p];if(!d)return t;if(d.p){if(!h(a,i,d.w))return t;t[a]=(c=d.p,u=n.kn,f=c<0?"NA":(Math.floor(10*c)/10).toFixed(2),(s={})[(l.keyName||u).toString()]=f.toString(),s)}return t}),{});return e(i)},s?(p=null,n(s)):p=n}catch(t){e({})}var n}};function m(t){var e=t.getConfig("realTimeData",(function(t){var n=t.realTimeData;try{(l=n.dataProviders&&n.dataProviders.filter((function(t){return t.name&&"browsi"===t.name.toLowerCase()}))[0].params).auctionDelay=n.auctionDelay,l.timeout=n.timeout}catch(t){l={}}l.siteKey&&l.pubKey&&l.url?(e(),y()):o.logError("missing params for Browsi provider")}))}Object(a.e)("realTimeData",v),m(r.b)}}]);