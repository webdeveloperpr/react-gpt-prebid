(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{77:function(e,t,s){"use strict";s.r(t),s.d(t,"spec",(function(){return n}));var r=s(278),o=s(279),i=s(277),n={code:"collectcent",supportedMediaTypes:[o.b,o.d,o.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.placementId)&&-1!==n.supportedMediaTypes.indexOf(e.params.traffic))},buildRequests:function(e,t){var s;try{s=window.top}catch(e){i.logMessage(e),s=window}for(var r=[],o=t?new URL(t.refererInfo.referer):s.location,n={secure:"https:"===o.protocol?1:0,deviceWidth:s.screen.width,deviceHeight:s.screen.height,host:o.host,page:o.pathname,placements:r},c=0;c<e.length;c++){var a=e[c],p=a.params;r.push({placementId:p.placementId,bidId:a.bidId,sizes:a.sizes,traffic:p.traffic})}return{method:"POST",url:"https://publishers.motionspots.com/?c=o&m=multi",data:n}},interpretResponse:function(e){try{e=e.body}catch(e){i.logMessage(e)}return e},getUserSyncs:function(){return[{type:"image",url:"https://publishers.motionspots.com/?c=o&m=cookie"}]}};Object(r.registerBidder)(n)}}]);