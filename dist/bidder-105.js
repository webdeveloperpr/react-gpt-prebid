(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{21:function(e,n,o){"use strict";o.r(n),o.d(n,"spec",(function(){return r}));var t=o(278),r={code:"adglare",isBidRequestValid:function(e){var n=e.params;return!("string"!=typeof n.domain||!n.domain.length||!n.zID||isNaN(n.zID)||"banner"!=n.type)},buildRequests:function(e,n){var o,t,r,i,d,s,p,a,c=window.innerWidth+"x"+window.innerHeight,m=window.devicePixelRatio||1,u=m*window.screen.width+"x"+m*window.screen.height,h=[],w=[],I=n.timeout||0,b=n.refererInfo.referer||"",R=n.refererInfo.reachedTop||"";for(o=0;o<e.length;o++){if(i=(r=e[o]).params.zID,d=r.params.domain,s=r.params.keywords||"",a=r.params.type,r.mediaTypes&&r.mediaTypes[a])for(t in r.mediaTypes[a].sizes)h.push(r.mediaTypes[a].sizes[t].join("x"));p="https://"+d+"/?"+encodeURIComponent(i)+"&pbjs&pbjs_version=1",p+="&pbjs_type="+encodeURIComponent(a),p+="&pbjs_timeout="+encodeURIComponent(I),p+="&pbjs_reachedtop="+encodeURIComponent(R),p+="&sizes="+encodeURIComponent(h.join(",")),p+="&screen="+encodeURIComponent(u),p+="&availscreen="+encodeURIComponent(c),p+="&referer="+encodeURIComponent(b),""!==s&&(p+="&keywords="+encodeURIComponent(s)),w.push({method:"GET",url:p,data:{},bidRequest:r})}return w},interpretResponse:function(e,n){var o=n.bidRequest,t=[],r={};return(e=e.body)&&"OK"==e.status&&o&&(r.requestId=o.bidId,r.bidderCode=o.bidder,r.cpm=e.cpm,r.width=e.width,r.height=e.height,r.ad=e.adhtml,r.ttl=e.ttl,r.creativeId=e.crID,r.netRevenue=!0,r.currency=e.currency,t.push(r)),t}};Object(t.registerBidder)(r)}}]);