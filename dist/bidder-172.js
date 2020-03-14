(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"spec",(function(){return s})),n.d(t,"resetInvibes",(function(){return w})),n.d(t,"stubDomainOptions",(function(){return D}));var i=n(277),o=n(278);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a={BIDDER_CODE:"invibes",BID_ENDPOINT:"https://bid.videostep.com/Bid/VideoAdContent",SYNC_ENDPOINT:"https://k.r66net.com/GetUserSync",TIME_TO_LIVE:300,DEFAULT_CURRENCY:"EUR",PREBID_VERSION:2,METHOD:"GET",INVIBES_VENDOR_ID:436},s={code:a.BIDDER_CODE,isBidRequestValid:function(e){if(u&&"object"===r(u.bidResponse))return i.logInfo("Invibes Adapter - Bid response already received. Invibes only responds to one bid request per user visit"),!1;if("object"!==r(e.params))return!1;if(null==e.params.placementId)return!1;return!0},buildRequests:function(e,t){var n,i,o=[],r=(t=t||{}).auctionStart||Date.now();e.forEach((function(e){e.startTime=(new Date).getTime(),o.push(e.params.placementId),n=n||e.params.loginId,i=i||e.params.customEndpoint,d=d||e.params.customUserSync})),u.visitId=u.visitId||v(),b=y(),u.noCookies=u.noCookies||u.getCookie("ivNoCookie"),u.optIn=u.optIn||u.getCookie("ivOptIn")||function(e){if(e&&e.vendorData&&e.vendorData.vendorConsents)return!0==!!e.vendorData.vendorConsents[a.INVIBES_VENDOR_ID.toString(10)]?2:-2;return 0}(t.gdprConsent),C(u.domainOptions);var s=function(){var e={};try{e=JSON.parse(localStorage.ivbs)}catch(e){}var t,n=/[\\?&]([^=]+)=([^\\?&#]+)/g;for(;null!=(t=n.exec(window.location.href));)t.index===n.lastIndex&&n.lastIndex++,e[t[1].toLowerCase()]=t[2];return e}(),f={location:l(c),videoAdHtmlId:v(),showFallback:"0"===s.advs,ivbsCampIdsLocal:u.getCookie("IvbsCampIdsLocal"),bidParamsJson:JSON.stringify({placementIds:o,loginId:n,auctionStartTime:r,bidVersion:a.PREBID_VERSION}),capCounts:m(),vId:u.visitId,width:c.innerWidth,height:c.innerHeight,noc:!b,oi:u.optIn,kw:E};u.dom.id&&(f.lId=u.dom.id);var p="videoaddebug,advs,bvci,bvid,istop,trybvid,trybvci".split(",");for(var I in s)if(s.hasOwnProperty(I)){var g=s[I];(p.indexOf(I)>-1||/^vs|^invib/i.test(I))&&(f[I]=g)}return{method:a.METHOD,url:i||a.BID_ENDPOINT,data:f,options:{withCredentials:!0},bidRequests:e}},interpretResponse:function(e,t){return function(e,t){if(null==t||0===t.length)return i.logInfo("Invibes Adapter - No bids have been requested"),[];if(!e)return i.logInfo("Invibes Adapter - Bid response is empty"),[];var n=(e=(e=e.body||e).videoAdContentResult||e).BidModel;if("object"!==r(n))return i.logInfo("Invibes Adapter - Bidding is not configured"),[];if("object"===r(u.bidResponse))return i.logInfo("Invibes Adapter - Bid response already received. Invibes only responds to one bid request per user visit"),[];u.bidResponse=e;var o=e.Ads;if(!Array.isArray(o)||o.length<1)return null!=e.AdReason&&i.logInfo("Invibes Adapter - "+e.AdReason),i.logInfo("Invibes Adapter - No ads available"),[];var s=o[0];if(null==n.PlacementId)return i.logInfo("Invibes Adapter - No Placement Id in response"),[];for(var d=[],c=0;c<t.length;c++){var v=t[c];if(n.PlacementId==v.params.placementId){var l=f(v.sizes);d.push({requestId:v.bidId,cpm:s.BidPrice,width:n.Width||l[0],height:n.Height||l[1],creativeId:s.VideoExposedId,currency:n.Currency||a.DEFAULT_CURRENCY,netRevenue:!0,ttl:a.TIME_TO_LIVE,ad:p(n)});var m=Date.now();h.info("Bid auction started at "+n.AuctionStartTime+" . Invibes registered the bid at "+m+" ; bid request took a total of "+(m-n.AuctionStartTime)+" ms.")}else i.logInfo("Invibes Adapter - Incorrect Placement Id: "+v.params.placementId)}return d}(e,null!=t?t.bidRequests:null)},getUserSyncs:function(e){if(e.iframeEnabled)return function(){try{window.addEventListener&&window.addEventListener("message",g)}catch(e){}}(),{type:"iframe",url:function(){var e=d||a.SYNC_ENDPOINT;e+="?visitId="+u.visitId,e+="&optIn="+u.optIn;var t=u.getCookie("ivbsdid");t&&(e+="&ivbsdid="+encodeURIComponent(t));var n=u.getCookie("ivvbks");n&&(e+="&ivvbks="+encodeURIComponent(n));return e}()}}};Object(o.registerBidder)(s);var d,c=function(){var e=window;try{for(;top!==e;)e.parent.location.href.length&&(e=e.parent)}catch(e){}return e}(),u=c.invibes=c.invibes||{};function v(){return Math.round(1e12*Math.random()).toString(36).substring(0,10)}function l(e){return e.location.href.substring(0,300).split(/[?#]/)[0]}function f(e){for(var t=[0,0],n=0;n<e.length;n++)e[n][0]*e[n][1]>t[0]*t[1]&&(t=e[n]);return t}function p(e){return"<html>\n        <head><script type='text/javascript'>inDapIF=true;<\/script></head>\n          <body style='margin : 0; padding: 0;'>\n          creativeHtml\n          </body>\n        </html>".replace("creativeHtml",e.CreativeHtml)}function m(){var e=function(){try{return JSON.parse(localStorage.getItem("ivvcap"))||{}}catch(e){return{}}},t=function(){var t=(new Date).getTime(),n=e(),i=!1;Object.keys(n).forEach((function(e){n[e][1]<=t&&(delete n[e],i=!0)})),i&&function(e){localStorage.setItem("ivvcap",JSON.stringify(e))}(n)};return function(){t();var n=e();return Object.keys(n).filter((function(e){return n.hasOwnProperty(e)})).sort().map((function(e){return[e,n[e][0]]}))}().map((function(e){return e.join("=")})).join(",")}var I=function(){};function g(e){var t=e.data||{};1===t.ivbscd?u.setCookie(t.name,t.value,t.exdays,t.domain):2===t.ivbscd&&u.dom.graduate()}var b,h=localStorage&&localStorage.InvibesDEBUG?window.console:{info:I,error:I,log:I,warn:I,debug:I};u.Uid={generate:function(){var e=parseInt("zzzzzz",36),t=function(){return Math.floor(Math.random()*e).toString(36)};return t()+t()}},u.getCookie=function(e){var t,n,i,o=document.cookie.split(";");for(t=0;t<o.length;t++)if(n=o[t].substr(0,o[t].indexOf("=")),i=o[t].substr(o[t].indexOf("=")+1),(n=n.replace(/^\s+|\s+$/g,""))===e)return unescape(i)},u.setCookie=function(e,t,n,i){var o="ivNoCookie"==e||"IvbsCampIdsLocal"==e;if(!(u.noCookies&&!o&&(n||0)>=0)){n>365&&(n=365),i=i||b;var r=new Date,a=24*n*60*60*1e3;r.setTime(r.getTime()+a);var s=t+(n?"; expires="+r.toUTCString():"");s+=";domain="+i+";path=/",document.cookie=e+"="+s}};var y=function(){var e=u.Uid.generate(),t=location.hostname.split(".");if(1===t.length)return location.hostname;for(var n=t.length-1;n>=0;n--){var i="."+t.slice(n).join(".");if(u.setCookie(e,e,1,i),u.getCookie(e)===e)return u.setCookie(e,e,-1,i),i}},C=function(e){if(!u.dom){var t,n={cname:"ivbsdid",load:function(){var e=u.getCookie(this.cname)||"";try{return JSON.parse(e)}catch(e){}},save:function(e){u.setCookie(this.cname,JSON.stringify(e),365)}},i=(e=e||{}).persistence||n;(t=i.load()||{id:u.Uid.generate(),cr:(new Date).getTime(),hc:1}).id.match(/\./)&&(t.id=u.Uid.generate());var o=function(){t.cr&&(delete t.cr,delete t.hc,i.save(t),a())},r=function(){t.id=u.Uid.generate(),i.save(t)},a=function(){u.dom={get id(){return!t.cr&&u.optIn>0?t.id:void 0},get tempId(){return u.optIn>0?t.id:void 0},graduate:o,regen:r}};t.cr&&!e.noVisit&&(t.hc<2&&t.hc++,(t.hc>=2&&function(e){if(!e.cr)return!1;if(e.cr<151e10)return!1;return(new Date).getTime()-e.cr>864e5}(t)||e.skipGraduation)&&o()),i.save(t),a(),h.info("Did="+u.dom.id)}},E=function(){var e=document.getElementsByTagName("head")[0],t=e?e.getElementsByTagName("meta"):[];function n(e,t){var n=e.replace(/[<>~|\\"`!@#$%^&*()=+?]/g,"");var i=n.split(/[\s,;.:]+/).filter((function(e,t,n){return""!==e&&n.indexOf(e)===t}));n="";for(var o=0;o<i.length;o++){if((n+=i[o]).length>=t)return n;o<i.length-1&&(n+=",")}return n}function i(e,i,o){e=e||"keywords",i=i||100;for(var r=o=o||"",a=0;a<t.length;a++){if(t[a].name&&t[a].name.toLowerCase()===e.toLowerCase())return n(o+","+t[a].content||"",i);t[a].name&&t[a].name.toLowerCase().indexOf(e.toLowerCase())>-1&&(r=o+","+t[a].content||"")}return n(r,i)}var o=i("keywords",300);return(!o||o.length<292)&&(!(o=i("description",300,o))||o.length<292)&&(o=function(t,i){return t=t||300,n((i=i||"")+","+((document.title||e)&&e.getElementsByTagName("title")[0]?e.getElementsByTagName("title")[0].innerHTML:""),t)}(300,o)),o}();function w(){u.optIn=void 0,u.noCookies=void 0,u.dom=void 0,u.bidResponse=void 0,u.domainOptions=void 0}function D(e){u.domainOptions={persistence:e}}}}]);