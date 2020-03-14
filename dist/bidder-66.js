(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{285:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(282),i=n(281);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=n(289),c=n(277),u=r.EVENTS,d=u.AUCTION_INIT,p=u.AUCTION_END,l=u.REQUEST_BIDS,y=u.BID_REQUESTED,b=u.BID_TIMEOUT,T=u.BID_RESPONSE,f=u.NO_BID,v=u.BID_WON,g=u.BID_ADJUSTMENT,I=u.BIDDER_DONE,E=u.SET_TARGETING,h=u.AD_RENDER_FAILED,m=u.ADD_AD_UNITS;function S(e){var t,n=e.url,r=e.analyticsType,u=e.global,S=e.handler,N=[],D=0,O=!0;return function(){if(O){for(var e=0;e<N.length;e++)N[e]();N.push=function(e){e()},O=!1}c.logMessage("event count sent to ".concat(u,": ").concat(D))}(),{track:function(e){var t=e.eventType,n=e.args;"bundle"===this.getAdapterType()&&window[u](S,t,n);"endpoint"===this.getAdapterType()&&A.apply(void 0,arguments)},enqueue:_,enableAnalytics:w,disableAnalytics:function(){c._each(t,(function(e,t){s.off(t,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:w},getAdapterType:function(){return r},getGlobal:function(){return u},getHandler:function(){return S},getUrl:function(){return n}};function A(e){var t=e.eventType,r=e.args,a=e.callback;Object(i.a)(n,a,JSON.stringify({eventType:t,args:r}))}function _(e){var t=e.eventType,n=e.args,r=this;u&&window[u]&&t&&n?this.track({eventType:t,args:n}):N.push((function(){D++,r.track({eventType:t,args:n})}))}function w(e){var n,r=this,i=this;"object"!==o(e)||"object"!==o(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(s.getEvents().forEach((function(e){if(e){var t=e.eventType,n=e.args;t!==b&&_.call(i,{eventType:t,args:n})}})),a(n={},l,(function(e){return r.enqueue({eventType:l,args:e})})),a(n,y,(function(e){return r.enqueue({eventType:y,args:e})})),a(n,T,(function(e){return r.enqueue({eventType:T,args:e})})),a(n,f,(function(e){return r.enqueue({eventType:f,args:e})})),a(n,b,(function(e){return r.enqueue({eventType:b,args:e})})),a(n,v,(function(e){return r.enqueue({eventType:v,args:e})})),a(n,g,(function(e){return r.enqueue({eventType:g,args:e})})),a(n,I,(function(e){return r.enqueue({eventType:I,args:e})})),a(n,E,(function(e){return r.enqueue({eventType:E,args:e})})),a(n,p,(function(e){return r.enqueue({eventType:p,args:e})})),a(n,h,(function(e){return r.enqueue({eventType:h,args:e})})),a(n,m,(function(e){return r.enqueue({eventType:m,args:e})})),a(n,d,(function(t){t.config="object"===o(e)&&e.options||{},r.enqueue({eventType:d,args:t})})),t=n,c._each(t,(function(e,t){s.on(t,e)}))):c.logMessage('Analytics adapter for "'.concat(u,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return c.logMessage('Analytics adapter for "'.concat(u,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}},41:function(e,t,n){"use strict";n.r(t);var r=n(281),i=n(285),a=n(290),o=n(282),s=n(288),c=n(277);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=u(Object(i.a)({emptyUrl:"",analyticsType:"endpoint"}),{track:function(e){var t,n,r=e.eventType,i=e.args;switch(r){case o.EVENTS.AUCTION_INIT:d.context.events.auctionInit={timeout:i.timeout},d.context.auctionTimestamp=i.timestamp;break;case o.EVENTS.BID_REQUESTED:d.context.auctionId=i.auctionId,d.context.events.bidRequests.push({bidderCode:(n=i).bidderCode,time:n.start,bids:n.bids.map((function(e){return{transactionId:e.transactionId,adUnitCode:e.adUnitCode,bidId:e.bidId,start:e.startTime,sizes:c.parseSizesInput(e.sizes).toString(),params:e.params}}))});break;case o.EVENTS.BID_ADJUSTMENT:break;case o.EVENTS.BID_TIMEOUT:d.context.events.bidTimeout=i.map((function(e){return e.bidder})).filter(c.uniques);break;case o.EVENTS.BIDDER_DONE:break;case o.EVENTS.BID_RESPONSE:d.context.events.bidResponses.push(function(e,t){return{bidderCode:e.bidder,transactionId:e.transactionId,adUnitCode:e.adUnitCode,statusMessage:e.statusMessage,mediaType:e.mediaType,renderedSize:e.size,cpm:e.cpm,currency:e.currency,netRevenue:e.netRevenue,timeToRespond:e.timeToRespond,bidId:t===o.EVENTS.BID_TIMEOUT?e.bidId:e.requestId,dealId:e.dealId,status:e.status,creativeId:e.creativeId.toString()}}(i,r));break;case o.EVENTS.BID_WON:p({bidWons:(t=i,[{bidderCode:t.bidder,adUnitCode:t.adUnitCode,statusMessage:t.statusMessage,mediaType:t.mediaType,renderedSize:t.size,cpm:t.cpm,currency:t.currency,netRevenue:t.netRevenue,timeToRespond:t.timeToRespond,bidId:t.requestId,dealId:t.dealId,status:t.status,creativeId:t.creativeId.toString()}])});break;case o.EVENTS.AUCTION_END:p(d.context.events)}}});function p(e){var t,n=s.a({protocol:"https",hostname:d.context.host,pathname:"/pbrx/v2",search:{pid:d.context.initOptions.publisherId,aid:d.context.auctionId,ats:d.context.auctionTimestamp,aav:"v2.01",iob:(t=window,t&&t.IntersectionObserver&&t.IntersectionObserverEntry&&t.IntersectionObserverEntry.prototype&&"intersectionRatio"in t.IntersectionObserverEntry.prototype?"1":"0"),pbv:pbjs.version,sz:window.screen.width+"x"+window.screen.height}});Object(r.a)(n,void 0,JSON.stringify(e),{contentType:"text/plain",method:"POST",withCredentials:!0})}d.context={},d.originEnableAnalytics=d.enableAnalytics,d.enableAnalytics=function(e){e.options.publisherId?(d.context={events:{bidRequests:[],bidResponses:[]},initOptions:e.options,host:e.options.host||"hbarxs.adxcg.net"},d.originEnableAnalytics(e)):c.logError("PublisherId option is not defined. Analytics won't work")},a.default.registerAnalyticsAdapter({adapter:d,code:"adxcg"}),t.default=d}}]);