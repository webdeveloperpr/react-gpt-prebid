(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"spec",(function(){return c}));var i=t(277),o=t(280),r=t(278),d=t(279);function a(e,n){i.logInfo("-NoBid- "+e,n)}function s(e,n){function t(e,n){var t=function(e,n){for(var t=0;t<n.length;t++)if(n[t].d===e)return n[t];return!1}(e.div,n)||{};return e.account&&(t.s=e.account),e.sizes&&(t.z=e.sizes),e.div&&(t.d=e.div),e.targeting?t.g=e.targeting:t.g={},e.companion&&(t.c=e.companion),e.div&&function(e,n,t){for(var i=e.length-1;i>=0;i--){var o=e[i];o[n]&&o[n]===t&&e.splice(i,1)}}(n,"d",e.div),e.sizeMapping&&(t.sm=e.sizeMapping),e.siteId&&(t.sid=e.siteId),e.rtb&&(t.rtb=e.rtb),n.push(t),n}if(void 0!==window.nobid.refreshLimit&&window.nobid.refreshLimit<window.nobid.refreshCount)return!1;var r,d=(r="_ublock",i.getCookie(r));if(d)return a("Request blocked for user. hours: ",d),!1;for(var s=[],u=0,c=[],p=0;p<e.length;p++){var l=e[p],g=l.adUnitCode;s.push(g);var f=l.sizes;(u=void 0!==l.params.siteId&&l.params.siteId?l.params.siteId:u)&&l.params&&l.params.tags?t({div:g,sizes:f,rtb:l.params.tags,siteId:u},c):u&&t({div:g,sizes:f,siteId:u},c)}return!!u&&function(t,r,d){var a,s,u,c,p,l,g,f,b={};b.sid=r,b.l=function(e){var n="";return n=e&&e.refererInfo&&e.refererInfo.referer?e.refererInfo.referer:window.context&&window.context.location&&window.context.location.href?window.context.location.href:document.location.href,encodeURIComponent(n.replace(/\%/g,""))}(n),b.tt=encodeURIComponent(document.title),b.tt=b.tt.replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm,""),b.a=function(e,n){var t=[];if(e&&e.length){if(n){var i=[];e instanceof Array?i=e:i.push(e);for(var o=0,r=n.length;o<r;o++){var d=n[o];d&&d.d&&i.indexOf(d.d)>-1&&t.push(d)}}}else t=n;return t}(t,d||[]),b.t=(a=new Date,s=function(e){return e<=9?"0"+e:""+e},u=a.getDate(),c=a.getFullYear(),p=a.getMonth()+1,l=a.getHours(),g=a.getMinutes(),f=a.getSeconds(),c+"-"+s(p)+"-"+s(u)+" "+s(l)+":"+s(g)+":"+s(f)),b.tz=Math.round((new Date).getTimezoneOffset()),b.r=function(){try{var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return"".concat(e,"x").concat(n)}catch(e){i.logWarn("Could not parse screen dimensions, error details:",e)}}(),b.lang=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,b.ref=document.referrer,b.gdpr=function(e){var n={};return e&&e.gdprConsent&&(n={consentString:e.gdprConsent.consentString,consentRequired:"boolean"==typeof e.gdprConsent.gdprApplies&&e.gdprConsent.gdprApplies}),n}(n),b.usp=function(e){var n="";return e&&e.uspConsent&&(n=e.uspConsent),n}(n);var w=function(e){return e&&e.length>0?e[0].schain:null}(e);w&&(b.schain=w);var v=!0===o.b.getConfig("coppa")?{coppa:!0}:e&&e.length>0?e[0].coppa:null;return v&&(b.coppa=v),b}(s,u,c)}function u(e,n){var t=function(e,n){for(var t=0;t<n.length;t++)if(n[t].adUnitCode==e)return n[t];return!1};!function(e){e&&void 0!==e.rlimit&&(window.nobid.refreshLimit=e.rlimit)}(e),function(e){e&&void 0!==e.ublock&&function(e,n,t){var o=new Date;o.setTime(o.getTime()+60*t*60*1e3);var r="expires="+o.toUTCString();i.setCookie(e,n,r)}("_ublock","1",e.ublock)}(e);for(var o=[],r=0;e.bids&&r<e.bids.length;r++){var a=e.bids[r];if(!(a.bdrid<100)&&n&&n.bidderRequest&&n.bidderRequest.bids){window.nobid.bidResponses[""+a.id]=a;var s=t(a.divid,n.bidderRequest.bids);if(s){var u={requestId:s.bidId,cpm:1*(a.price?a.price:a.bucket?a.bucket:0),width:a.size.w,height:a.size.h,creativeId:a.creativeid||"",dealId:a.dealid||"",currency:"USD",netRevenue:!0,ttl:300,ad:a.adm,mediaType:d.b};o.push(u)}}}return o}window.nobidVersion="1.2.3",window.nobid=window.nobid||{},window.nobid.bidResponses=window.nobid.bidResponses||{},window.nobid.timeoutTotal=0,window.nobid.bidWonTotal=0,window.nobid.refreshCount=0,window.nobid.renderTag=function(e,n,t){a("nobid.renderTag()",n);var i=window.nobid.bidResponses[""+n];if(i&&i.adm2){a("nobid.renderTag() found tag",n);var o=i.adm2;return e.write(o),void e.close()}a("nobid.renderTag() tag NOT FOUND *ERROR*",n)};var c={code:"nobid",supportedMediaTypes:[d.b],isBidRequestValid:function(e){return a("isBidRequestValid",e),!!e.params.siteId},buildRequests:function(e,n){if(a("validBidRequests",e),!e||e.length<=0)a("Empty validBidRequests");else{var t=s(e,n);if(t){window.nobid.refreshCount++;var o,r,d=JSON.stringify(t).replace(/'|&|#/g,"");return{method:"POST",url:(o="https://ads.servenobid.com/",(r="function"==typeof i.getParameterByName&&i.getParameterByName("nobid-env"))?"beta"==r?o="https://beta.servenobid.com/":"dev"==r?o="//localhost:8282/":"qa"==r&&(o="https://qa-ads.nobid.com/"):o="https://ads.servenobid.com/",o+"adreq?cb="+Math.floor(11e3*Math.random())),data:d,bidderRequest:n}}}},interpretResponse:function(e,n){return a("interpretResponse -> serverResponse",e),a("interpretResponse -> bidRequest",n),u(e.body,n)},getUserSyncs:function(e,n,t,o){if(e.iframeEnabled){var r="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?r+="?gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):r+="?gdpr_consent=".concat(t.consentString)),o&&(r.length>0?r+="&":r+="?",r+="usp_consent="+o),[{type:"iframe",url:"https://public.servenobid.com/sync.html"+r}]}if(e.pixelEnabled&&n.length>0){var d=[];return n[0].body.syncs&&n[0].body.syncs.length>0&&n[0].body.syncs.forEach((function(e){d.push({type:"image",url:e})})),d}return i.logWarn("-NoBid- Please enable iframe based user sync.",e),[]},onTimeout:function(e){return window.nobid.timeoutTotal++,a("Timeout total: "+window.nobid.timeoutTotal,e),window.nobid.timeoutTotal},onBidWon:function(e){return window.nobid.bidWonTotal++,a("BidWon total: "+window.nobid.bidWonTotal,e),window.nobid.bidWonTotal}};Object(r.registerBidder)(c)}}]);