(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{136:function(t,e,n){"use strict";n.r(e),n.d(e,"liveIntentIdSubmodule",(function(){return s}));var r=n(277),o=n(281),i=n(291);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"liveIntentId",decode:function(t){return t&&"string"==typeof t.unifiedId?function(t){var e={lipbid:t.unifiedId};return delete t.unifiedId,{lipb:a({},e,{},t)}}(t):void 0},getId:function(t){var e=t&&t.publisherId;if(e||"string"==typeof e){var n="https://idx.liadm.com",i="prebid";t.url&&(n=t.url),t.partner&&(i=t.partner);var u=(t.identifiersToResolve||[]).concat(["_li_duid"]).reduce((function(t,e){var n=r.getCookie(e)||r.getDataFromLocalStorage(e),o=e.replace("_li_duid","duid");return n&&("object"===c(n)?t[o]=JSON.stringify(n):t[o]=n),t}),{}),a=r.parseQueryStringParameters(u),f="".concat(n,"/idex/").concat(i,"/").concat(e,"?").concat(a);return{callback:function(t){Object(o.a)(f,(function(e){var n={};if(e)try{n=JSON.parse(e)}catch(t){r.logError(t)}t(n)}),void 0,{method:"GET",withCredentials:!0})}}}r.logError("".concat("liveIntentId"," - publisherId must be defined, not a '").concat(e,"'"))}};Object(i.e)("userId",s)},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return f}));var r=n(288),o=n(280);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=n(277),a=f();function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.request,a=e.done;return function(e,f,s){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var p,y=l.method||(s?"POST":"GET"),d=document.createElement("a");d.href=e;var h="object"===c(f)&&null!==f?f:{success:function(){u.logMessage("xhr success")},error:function(t){u.logError("xhr error",null,t)}};if("function"==typeof f&&(h.success=f),(p=new window.XMLHttpRequest).onreadystatechange=function(){if(4===p.readyState){"function"==typeof a&&a(d.origin);var t=p.status;t>=200&&t<300||304===t?h.success(p.responseText,p):h.error(p.statusText,p)}},o.b.getConfig("disableAjaxTimeout")||(p.ontimeout=function(){u.logError("  xhr timeout after ",p.timeout,"ms")}),"GET"===y&&s){var b=Object(r.c)(e,l);i(b.search,s),e=Object(r.a)(b)}p.open(y,e,!0),o.b.getConfig("disableAjaxTimeout")||(p.timeout=t),l.withCredentials&&(p.withCredentials=!0),u._each(l.customHeaders,(function(t,e){p.setRequestHeader(e,t)})),l.preflight&&p.setRequestHeader("X-Requested-With","XMLHttpRequest"),p.setRequestHeader("Content-Type",l.contentType||"text/plain"),"function"==typeof n&&n(d.origin),"POST"===y&&s?p.send(s):p.send()}catch(t){u.logError("xhr construction",t)}}}},291:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return t})),n.d(e,"e",(function(){return f}));var r=n(292),o=n.n(r);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=o()({ready:o.a.SYNC|o.a.ASYNC|o.a.QUEUE}),u=c.get;function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=t.getHooks({hook:e});0===r.length&&t.before(e,n)}function t(t,e){c("async",(function(t){t.forEach((function(t){return e.apply(void 0,i(t))}))}),t)([])}function f(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];u(t).before((function(t,e){e.push(n),t(e)}))}},292:function(t,e){
/*
* @license MIT
* Fun Hooks v0.9.8
* (c) @snapwich
*/
u.SYNC=1,u.ASYNC=2,u.QUEUE=4;var n=Object.freeze({useProxy:!0,ready:0}),r=new WeakMap,o="2,1,0"===[1].reduce((function(t,e,n){return[t,e,n]}),2).toString()?Array.prototype.reduce:function(t,e){var n,r=Object(this),o=r.length>>>0,i=0;if(e)n=e;else{for(;i<o&&!(i in r);)i++;n=r[i++]}for(;i<o;)i in r&&(n=t(n,r[i],i,r)),i++;return n};function i(t,e){return Array.prototype.slice.call(t,e)}var c=Object.assign||function(t){return o.call(i(arguments,1),(function(t,e){return e&&Object.keys(e).forEach((function(n){t[n]=e[n]})),t}),t)};function u(t){var e,a={},f=[];function s(t,e){return"function"==typeof t?d.call(null,"sync",t,e):"string"==typeof t&&"function"==typeof e?d.apply(null,arguments):"object"==typeof t?l.apply(null,arguments):void 0}function l(t,e,n){var r=!0;void 0===e&&(e=Object.getOwnPropertyNames(t),r=!1);var o={},i=["constructor"];do{(e=e.filter((function(e){return!("function"!=typeof t[e]||-1!==i.indexOf(e)||e.match(/^_/))}))).forEach((function(e){var r=e.split(":"),i=r[0],c=r[1]||"sync";if(!o[i]){var u=t[i];o[i]=t[i]=d(c,u,n?[n,i]:void 0)}})),t=Object.getPrototypeOf(t)}while(r&&t);return o}function p(t){var n=Array.isArray(t)?t:t.split(".");return o.call(n,(function(r,o,i){var c=r[o],u=!1;return c||(i===n.length-1?(e||f.push((function(){u||console.warn("fun-hooks: referenced '"+t+"' but it was never created")})),r[o]=y((function(t){r[o]=t,u=!0}))):r[o]={})}),a)}function y(t){var e=[],n=[],o=function(){},i={before:function(t,n){return a.call(this,e,"before",t,n)},after:function(t,e){return a.call(this,n,"after",t,e)},getHooks:function(t){var r=e.concat(n);return"object"==typeof t&&(r=r.filter((function(e){return Object.keys(t).every((function(n){return e[n]===t[n]}))}))),c(r,{remove:function(){return r.forEach((function(t){t.remove()})),this}})},removeAll:function(){return this.getHooks().remove()}},u={install:function(r,i,c){this.type=r,o=c,c(e,n),t&&t(i)}};return r.set(i.after,u),i;function a(t,r,i,c){var u={hook:i,type:r,priority:c||10,remove:function(){var r=t.indexOf(u);-1!==r&&(t.splice(r,1),o(e,n))}};return t.push(u),t.sort((function(t,e){return e.priority-t.priority})),o(e,n),this}}function d(n,o,a){var s=o.after&&r.get(o.after);if(s){if(s.type!==n)throw"fun-hooks: recreated hookable with different type";return o}var l,d,h=a?p(a):y(),b={get:function(t,e){return h[e]||Reflect.get.apply(Reflect,arguments)}};return e||f.push(v),t.useProxy&&"function"==typeof Proxy&&Proxy.revocable?d=new Proxy(o,b):c(d=function(){return b.apply?b.apply(o,this,i(arguments)):o.apply(this,arguments)},h),r.get(d.after).install(n,d,(function(t,e){var r,o=[];t.length||e.length?(t.forEach(c),r=o.push(void 0)-1,e.forEach(c),l=function(t,e,c){var u,a=0,f="async"===n&&"function"==typeof c[c.length-1]&&c.pop();function s(t){"sync"===n?u=t:f&&f.apply(null,arguments)}function l(t){if(o[a]){var r=i(arguments);return l.bail=s,r.unshift(l),o[a++].apply(e,r)}"sync"===n?u=t:f&&f.apply(null,arguments)}return o[r]=function(){var r=i(arguments,1);"async"===n&&f&&(delete l.bail,r.push(l));var o=t.apply(e,r);"sync"===n&&l(o)},l.apply(null,c),u}):l=void 0;function c(t){o.push(t.hook)}v()})),d;function v(){!e&&("sync"!==n||t.ready&u.SYNC)&&("async"!==n||t.ready&u.ASYNC)?"sync"!==n&&t.ready&u.QUEUE?b.apply=function(){var t=arguments;f.push((function(){d.apply(t[1],t[2])}))}:b.apply=function(){throw"fun-hooks: hooked function not ready"}:b.apply=l}}return(t=c({},n,t)).ready?s.ready=function(){e=!0,function(t){for(var e;e=t.shift();)e()}(f)}:e=!0,s.get=p,s}t.exports=u}}]);