(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"spec",(function(){return r}));var d=n(278),r={code:"taphype",isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e){return e.map((function(e){return{method:"GET",url:"https://us-central1-taphype-internal.cloudfunctions.net/th-prebid",data:{placementId:e.params.placementId,url:encodeURIComponent(window.location.href),size:e.sizes[0][0]+"x"+e.sizes[0][1],rnd:Math.random(),bidId:e.bidId},options:{withCredentials:!1}}}))},interpretResponse:function(e,t){if(!e||!e.body||!e.body.ad)return[];var n=e.body,d=n.size.split(",");return[{requestId:t.data.bidId,cpm:n.price,width:d[0],height:d[1],creativeId:t.data.bidId,currency:n.currency||"USD",netRevenue:!0,ad:n.ad,ttl:360}]}};Object(d.registerBidder)(r)}}]);