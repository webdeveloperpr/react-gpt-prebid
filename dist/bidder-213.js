(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return c}));var n=r(278),i=r(279),o=r(281),a=r(277);function d(e){if(!(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency))return!1;switch(e.mediaType){case i.b:return Boolean(e.width&&e.height&&e.ad);case i.d:return Boolean(e.vastXml||e.vastUrl)}return!1}function s(e){var t=[];return e.sizes.forEach((function(e){t.push({width:e[0],height:e[1]})})),t}var c={code:"project-limelight",supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params)},buildRequests:function(e,t){var r;try{(r=window.top).location.toString()}catch(e){a.logMessage(e),r=window}for(var n=[],i={secure:"https:"===location.protocol,deviceWidth:r.screen.width,deviceHeight:r.screen.height,adUnits:n},o=0;o<e.length;o++){var d=e[o],c=d.params;n.push({id:c.adUnitId,bidId:d.bidId,transactionId:d.transactionId,sizes:s(d),type:c.adUnitType.toUpperCase()})}return{method:"POST",url:"https://ads.project-limelight.com/hb",data:i}},onBidWon:function(e){var t=e.pbMg;""!==e.nurl&&(e.nurl=e.nurl.replace(/\$\{AUCTION_PRICE\}/,t),Object(o.a)(e.nurl,null))},interpretResponse:function(e){for(var t=[],r=e.body,n=r.length,i=0;i<n;i++){var o=r[i];d(o)&&t.push(o)}return t}};Object(n.registerBidder)(c)}}]);