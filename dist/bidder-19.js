(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{281:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return f}));var n=r(288),o=r(280);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=r(277),a=f();function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.request,a=e.done;return function(e,f,l){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var p,y=s.method||(l?"POST":"GET"),h=document.createElement("a");h.href=e;var d="object"===u(f)&&null!==f?f:{success:function(){c.logMessage("xhr success")},error:function(t){c.logError("xhr error",null,t)}};if("function"==typeof f&&(d.success=f),(p=new window.XMLHttpRequest).onreadystatechange=function(){if(4===p.readyState){"function"==typeof a&&a(h.origin);var t=p.status;t>=200&&t<300||304===t?d.success(p.responseText,p):d.error(p.statusText,p)}},o.b.getConfig("disableAjaxTimeout")||(p.ontimeout=function(){c.logError("  xhr timeout after ",p.timeout,"ms")}),"GET"===y&&l){var v=Object(n.c)(e,s);i(v.search,l),e=Object(n.a)(v)}p.open(y,e,!0),o.b.getConfig("disableAjaxTimeout")||(p.timeout=t),s.withCredentials&&(p.withCredentials=!0),c._each(s.customHeaders,(function(t,e){p.setRequestHeader(e,t)})),s.preflight&&p.setRequestHeader("X-Requested-With","XMLHttpRequest"),p.setRequestHeader("Content-Type",s.contentType||"text/plain"),"function"==typeof r&&r(h.origin),"POST"===y&&l?p.send(l):p.send()}catch(t){c.logError("xhr construction",t)}}}},291:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return c})),r.d(e,"d",(function(){return a})),r.d(e,"c",(function(){return t})),r.d(e,"e",(function(){return f}));var n=r(292),o=r.n(n);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=o()({ready:o.a.SYNC|o.a.ASYNC|o.a.QUEUE}),c=u.get;function a(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,n=t.getHooks({hook:e});0===n.length&&t.before(e,r)}function t(t,e){u("async",(function(t){t.forEach((function(t){return e.apply(void 0,i(t))}))}),t)([])}function f(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];c(t).before((function(t,e){e.push(r),t(e)}))}},292:function(t,e){
/*
* @license MIT
* Fun Hooks v0.9.8
* (c) @snapwich
*/
c.SYNC=1,c.ASYNC=2,c.QUEUE=4;var r=Object.freeze({useProxy:!0,ready:0}),n=new WeakMap,o="2,1,0"===[1].reduce((function(t,e,r){return[t,e,r]}),2).toString()?Array.prototype.reduce:function(t,e){var r,n=Object(this),o=n.length>>>0,i=0;if(e)r=e;else{for(;i<o&&!(i in n);)i++;r=n[i++]}for(;i<o;)i in n&&(r=t(r,n[i],i,n)),i++;return r};function i(t,e){return Array.prototype.slice.call(t,e)}var u=Object.assign||function(t){return o.call(i(arguments,1),(function(t,e){return e&&Object.keys(e).forEach((function(r){t[r]=e[r]})),t}),t)};function c(t){var e,a={},f=[];function l(t,e){return"function"==typeof t?h.call(null,"sync",t,e):"string"==typeof t&&"function"==typeof e?h.apply(null,arguments):"object"==typeof t?s.apply(null,arguments):void 0}function s(t,e,r){var n=!0;void 0===e&&(e=Object.getOwnPropertyNames(t),n=!1);var o={},i=["constructor"];do{(e=e.filter((function(e){return!("function"!=typeof t[e]||-1!==i.indexOf(e)||e.match(/^_/))}))).forEach((function(e){var n=e.split(":"),i=n[0],u=n[1]||"sync";if(!o[i]){var c=t[i];o[i]=t[i]=h(u,c,r?[r,i]:void 0)}})),t=Object.getPrototypeOf(t)}while(n&&t);return o}function p(t){var r=Array.isArray(t)?t:t.split(".");return o.call(r,(function(n,o,i){var u=n[o],c=!1;return u||(i===r.length-1?(e||f.push((function(){c||console.warn("fun-hooks: referenced '"+t+"' but it was never created")})),n[o]=y((function(t){n[o]=t,c=!0}))):n[o]={})}),a)}function y(t){var e=[],r=[],o=function(){},i={before:function(t,r){return a.call(this,e,"before",t,r)},after:function(t,e){return a.call(this,r,"after",t,e)},getHooks:function(t){var n=e.concat(r);return"object"==typeof t&&(n=n.filter((function(e){return Object.keys(t).every((function(r){return e[r]===t[r]}))}))),u(n,{remove:function(){return n.forEach((function(t){t.remove()})),this}})},removeAll:function(){return this.getHooks().remove()}},c={install:function(n,i,u){this.type=n,o=u,u(e,r),t&&t(i)}};return n.set(i.after,c),i;function a(t,n,i,u){var c={hook:i,type:n,priority:u||10,remove:function(){var n=t.indexOf(c);-1!==n&&(t.splice(n,1),o(e,r))}};return t.push(c),t.sort((function(t,e){return e.priority-t.priority})),o(e,r),this}}function h(r,o,a){var l=o.after&&n.get(o.after);if(l){if(l.type!==r)throw"fun-hooks: recreated hookable with different type";return o}var s,h,d=a?p(a):y(),v={get:function(t,e){return d[e]||Reflect.get.apply(Reflect,arguments)}};return e||f.push(b),t.useProxy&&"function"==typeof Proxy&&Proxy.revocable?h=new Proxy(o,v):u(h=function(){return v.apply?v.apply(o,this,i(arguments)):o.apply(this,arguments)},d),n.get(h.after).install(r,h,(function(t,e){var n,o=[];t.length||e.length?(t.forEach(u),n=o.push(void 0)-1,e.forEach(u),s=function(t,e,u){var c,a=0,f="async"===r&&"function"==typeof u[u.length-1]&&u.pop();function l(t){"sync"===r?c=t:f&&f.apply(null,arguments)}function s(t){if(o[a]){var n=i(arguments);return s.bail=l,n.unshift(s),o[a++].apply(e,n)}"sync"===r?c=t:f&&f.apply(null,arguments)}return o[n]=function(){var n=i(arguments,1);"async"===r&&f&&(delete s.bail,n.push(s));var o=t.apply(e,n);"sync"===r&&s(o)},s.apply(null,u),c}):s=void 0;function u(t){o.push(t.hook)}b()})),h;function b(){!e&&("sync"!==r||t.ready&c.SYNC)&&("async"!==r||t.ready&c.ASYNC)?"sync"!==r&&t.ready&c.QUEUE?v.apply=function(){var t=arguments;f.push((function(){h.apply(t[1],t[2])}))}:v.apply=function(){throw"fun-hooks: hooked function not ready"}:v.apply=s}}return(t=u({},r,t)).ready?l.ready=function(){e=!0,function(t){for(var e;e=t.shift();)e()}(f)}:e=!0,l.get=p,l}t.exports=c},65:function(t,e,r){"use strict";r.r(e),r.d(e,"britepoolIdSubmodule",(function(){return a}));var n=r(277),o=r(281),i=r(291);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var a={name:"britepoolId",decode:function(t){return t&&"string"==typeof t.primaryBPID?{britepoolid:t.primaryBPID}:null},getId:function(t,e){var r=a.createParams(t,e),i=r.params,u=r.headers,c=r.url,f=r.getter,l=r.errors,s=null;return"function"==typeof f&&"function"!=typeof(s=f(i))?{id:a.normalizeValue(s)}:{callback:function(t){if(l.length>0)return l.forEach((function(t){return n.logError(t)})),void t();if(s)try{s((function(e){t(a.normalizeValue(e))}))}catch(e){""!==e&&n.logError(e),t()}else Object(o.a)(c,{success:function(e){var r=a.normalizeValue(e);t(r?{primaryBPID:r.primaryBPID}:null)},error:function(e){""!==e&&n.logError(e),t()}},JSON.stringify(i),{customHeaders:u,contentType:"application/json",method:"POST",withCredentials:!0})}}},createParams:function(t,e){var r=[],n={},o=c({},t);if(o.getter){if("function"!=typeof o.getter)return r.push("userIdTargeting - britepoolId submodule requires getter to be a function"),{errors:r}}else o.api_key&&(n["x-api-key"]=o.api_key);var i=o.url||"https://api.britepool.com/v1/britepool/id",u=o.getter;return delete o.api_key,delete o.url,delete o.getter,{params:o,headers:n,url:i,getter:u,errors:r}},normalizeValue:function(t){var e=null;if("object"===u(t))e=t;else if("string"==typeof t)try{e=JSON.parse(t)}catch(t){n.logError(t)}return e}};Object(i.e)("userId",a)}}]);