(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{227:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return f})),r.d(t,"_isInbounds",(function(){return v})),r.d(t,"_getPlatform",(function(){return h}));var n=r(278),i=r(277),o=r(279),s=r(280),a=r(287),c=r(315);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=Object(i.generateUUID)(),f={code:"sonobi",supportedMediaTypes:[o.b,o.d],isBidRequestValid:function(e){if(!e.params)return!1;if(!e.params.ad_unit&&!e.params.placement_id)return!1;if(!Object(i.deepAccess)(e,"mediaTypes.banner")&&!Object(i.deepAccess)(e,"mediaTypes.video"))return!1;if(Object(i.deepAccess)(e,"mediaTypes.banner")){if(!Object(i.deepAccess)(e,"mediaTypes.banner.sizes")&&!e.params.sizes)return!1}else if(Object(i.deepAccess)(e,"mediaTypes.video")){if("outstream"===Object(i.deepAccess)(e,"mediaTypes.video.context")&&!e.params.sizes)return!1;if("instream"===Object(i.deepAccess)(e,"mediaTypes.video.context")&&!Object(i.deepAccess)(e,"mediaTypes.video.playerSize"))return!1}return!0},buildRequests:function(e,t){var r=e.map((function(e){var t=function(e){if(e.params.ad_unit)return e.params.ad_unit;return e.params.placement_id}(e);return/^[\/]?[\d]+[[\/].+[\/]?]?$/.test(t)?(t="/"===t.charAt(0)?t:"/"+t,l({},"".concat(t,"|").concat(e.bidId),"".concat(b(e)).concat(m(e)))):/^[0-9a-fA-F]{20}$/.test(t)&&20===t.length?l({},e.bidId,"".concat(t,"|").concat(b(e)).concat(m(e))):void Object(i.logError)("The ad unit code or Sonobi Placement id for slot ".concat(e.bidId," is invalid"))})),n={};r.forEach((function(e){u(n,e)}));var o={key_maker:JSON.stringify(n),ref:t.refererInfo.referer,s:Object(i.generateUUID)(),pv:p,vp:h(),lib_name:"prebid",lib_v:"3.11.0",us:0};s.b.getConfig("userSync")&&s.b.getConfig("userSync").syncsPerBidder&&(o.us=s.b.getConfig("userSync").syncsPerBidder),c.a.canBidderRegisterSync("iframe","sonobi")?o.ius=1:o.ius=0,Object(i.deepAccess)(e[0],"params.hfa")&&(o.hfa=Object(i.deepAccess)(e[0],"params.hfa")),e[0].params.referrer&&(o.ref=e[0].params.referrer),t&&t.gdprConsent&&(o.gdpr=t.gdprConsent.gdprApplies?"true":"false",t.gdprConsent.consentString&&(o.consent_string=t.gdprConsent.consentString));var a=function(e){var t=(r=window.DigiTrust&&(s.b.getConfig("digiTrustId")||window.DigiTrust.getUser({member:e})),r&&r.success&&r.identity||null);var r;if(!t||t.privacy&&t.privacy.optout)return null;return t}("fhnS5drwmH");a&&(o.digid=a.id,o.digkeyv=a.keyv),e[0].schain&&(o.schain=JSON.stringify(e[0].schain)),Object(i.deepAccess)(e[0],"userId")&&Object.keys(e[0].userId).length>0&&(o.userid=JSON.stringify(e[0].userId));var d=e[0].params.keywords;return d&&(o.kw=d),t&&t.uspConsent&&(o.us_privacy=t.uspConsent),Object(i.isEmpty)(n)?null:{method:"GET",url:"https://apex.go.sonobi.com/trinity.json",withCredentials:!0,data:o,bidderRequests:e}},interpretResponse:function(e,t){var r=e.body,n=[],o=t.data.ref;return 0===Object.keys(r.slots).length||Object.keys(r.slots).forEach((function(e){var s=r.slots[e],c=e.split("|").slice(-1)[0],u=function(e,t){for(var r=0;r<e.length;r++)if(e[r].bidId===t)return e[r]}(t.bidderRequests,c),l=null;"video"===s.sbi_ct&&(l="video","outstream"===Object(i.deepAccess)(u,"mediaTypes.video.context")&&(l="outstream"));var p=g(l,o);if(s.sbi_aid&&s.sbi_mouse&&s.sbi_size){var f=d(s.sbi_size.split("x"),2),b=f[0],m=void 0===b?1:b,v=f[1],h=void 0===v?1:v,j={requestId:c,cpm:Number(s.sbi_mouse),width:Number(m),height:Number(h),ad:p(r.sbi_dc,s.sbi_aid),ttl:500,creativeId:s.sbi_crid||s.sbi_aid,aid:s.sbi_aid,netRevenue:!0,currency:"USD"};if(s.sbi_dozer&&(j.dealId=s.sbi_dozer),"video"===l)j.mediaType="video",j.vastUrl=p(r.sbi_dc,s.sbi_aid),delete j.ad,delete j.width,delete j.height;else if("outstream"===l&&u){j.mediaType="video",j.vastUrl=p(r.sbi_dc,s.sbi_aid),j.renderer=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.a.install({id:t.aid,url:"https://mtrx.go.sonobi.com/sbi_outstream_renderer.js",config:r,loaded:!1,adUnitCode:e});try{n.setRender(y)}catch(e){Object(i.logWarn)("Prebid Error calling setRender on renderer",e)}return n.setEventHandlers({impression:function(){return Object(i.logMessage)("Sonobi outstream video impression event")},loaded:function(){return Object(i.logMessage)("Sonobi outstream video loaded event")},ended:function(){Object(i.logMessage)("Sonobi outstream renderer video event")}}),n}(u.adUnitCode,j,Object(i.deepAccess)(u,"renderer.options"));var O=Object(i.deepAccess)(u,"params.sizes");Array.isArray(O)&&Array.isArray(O[0])&&(O=O[0]),O&&(j.width=O[0],j.height=O[1])}n.push(j)}})),n},getUserSyncs:function(e,t,r,n){var i=[];try{e.pixelEnabled&&t[0].body.sbi_px.forEach((function(e){i.push({type:e.type,url:e.url})}))}catch(e){}return i}};function b(e){return Object(i.deepAccess)(e,"mediaTypes.video")?"":e.params.sizes?Object(i.parseSizesInput)(e.params.sizes).join(","):Object(i.deepAccess)(e,"mediaTypes.banner.sizes")?Object(i.parseSizesInput)(Object(i.deepAccess)(e,"mediaTypes.banner.sizes")).join(","):e.sizes?Object(i.parseSizesInput)(e.sizes).join(","):void 0}function m(e){return e.params.floor?"|f=".concat(e.params.floor):""}var g=function(e,t){return function(r,n){return"video"===e||"outstream"===e?function(e,t,r){return"https://".concat(e,"apex.go.sonobi.com/vast.xml?vid=").concat(t,"&ref=").concat(encodeURIComponent(r))}(r,n,t):'<script type="text/javascript" src="'+"https://".concat(r,"apex.go.sonobi.com/sbi.js?aid=").concat(n,"&as=null&ref=").concat(encodeURIComponent(t))+'"><\/script>'}};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER;return e.innerWidth>=t&&e.innerWidth<r}};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=v(e),r={lt:768},n={lt:992,ge:768};return t(0,r.lt)?"mobile":t(n.ge,n.lt)?"tablet":"desktop"}function y(e){e.renderer.push((function(){var t=d(e.getSize().split("x"),2),r=t[0],n=t[1],i=new window.SbiOutstreamRenderer;i.init({vastUrl:e.vastUrl,height:n,width:r}),i.setRootElement(e.adUnitCode)}))}Object(n.registerBidder)(f)},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(283),i=r.n(n),o=r(277),s={},a=["criteo","outstream","adagio","browsi"];function c(e,t,r){if(t&&e){if(i()(a,t))return s[e]?(r&&"function"==typeof r&&(s[e].loaded?r():s[e].callbacks.push(r)),s[e].tag):(s[e]={loaded:!1,tag:null,callbacks:[]},r&&"function"==typeof r&&s[e].callbacks.push(r),o.logWarn("module ".concat(t," is loading external JavaScript")),function(t,r){var n=document.createElement("script");n.type="text/javascript",n.async=!0,s[e].tag=n,n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,r())}:n.onload=function(){r()};return n.src=t,o.insertElement(n),n}(e,(function(){s[e].loaded=!0;try{for(var t=0;t<s[e].callbacks.length;t++)s[e].callbacks[t]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));o.logError("".concat(t," not whitelisted for loading external JavaScript"))}else o.logError("cannot load external script without url and moduleCode")}},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return d}));var n=r(284),i=r(277),o=r(286),s=r.n(o);function a(e){var t=this,r=e.url,o=e.config,a=e.id,c=e.callback,d=e.loaded,u=e.adUnitCode;this.url=r,this.config=o,this.handlers={},this.id=a,this.loaded=d,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):i.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=c||function(){t.loaded=!0,t.process()},!function(e){var t=pbjs.adUnits,r=s()(t,(function(t){return t.code===e}));return!!(r&&r.renderer&&r.renderer.url&&r.renderer.render)}(u)?Object(n.a)(r,"outstream",this.callback):i.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(u))}function c(e){return!(!e||!e.url)}function d(e,t){e.render(t)}a.install=function(e){return new a({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},a.prototype.getConfig=function(){return this.config},a.prototype.setRender=function(e){this.render=e},a.prototype.setEventHandlers=function(e){this.handlers=e},a.prototype.handleVideoEvent=function(e){var t=e.id,r=e.eventName;"function"==typeof this.handlers[r]&&this.handlers[r](),i.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(r))},a.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){i.logError("Error processing Renderer command: ",e)}}}}]);