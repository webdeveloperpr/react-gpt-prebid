(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{204:function(e,n,r){"use strict";r.r(n),r.d(n,"spec",(function(){return s}));var i=r(278),t=r(277),a=r(281),s={version:"1.0",code:"rtbsolutions",aliases:["rtbss"],nurls:{},isBidRequestValid:function(e){return!!e.params.blockId},buildRequests:function(e,n){var r=this,i=[];return n.bids.forEach((function(e){var t=e.sizes[0][0],a=e.sizes[0][1],s={referer:n.refererInfo.referer,ua:navigator.userAgent,lang:r.getLanguage(),domain:r.getDomain(),width:t,height:a,type:"banner"};void 0!==e.params.s1&&(s.s1=e.params.s1),void 0!==e.params.s2&&(s.s2=e.params.s2),void 0!==e.params.s3&&(s.s3=e.params.s3),void 0!==e.params.s4&&(s.s4=e.params.s4),i.push({bid_id:e.bidId,block_id:e.params.blockId,ver:r.version,imp:s})})),{method:"POST",url:"https://dsp-eu-lb.rtbsolutions.pro/bid/hb",data:i,options:{contentType:"application/json"}}},interpretResponse:function(e,n){var r=this,i=[];return e.body.forEach((function(e){r.nurls[e.bid_id]=e.nurl;var n={requestId:e.bid_id,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creative_id,currency:e.currency,netRevenue:!0,ttl:360,ad:e.ad};i.push(n)})),i},onBidWon:function(e){Object(a.a)(this.nurls[e.requestId],null)},getLanguage:function(){var e=navigator.language?"language":"userLanguage",n=navigator[e].split("-")[0];return 2===n.length||3===n.length?n:""},getDomain:function(){if(!t.inIframe())return window.location.hostname;var e=window.document.location.ancestorOrigins;return e&&e.length>0?e[e.length-1]:void 0}};Object(i.registerBidder)(s)}}]);