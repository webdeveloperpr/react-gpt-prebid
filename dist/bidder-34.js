(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{317:function(t,e,n){n(318),t.exports=n(296).Array.findIndex},318:function(t,e,n){"use strict";var r=n(295),o=n(313)(6),a="findIndex",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(308)(a)},55:function(t,e,n){"use strict";n.r(e),n.d(e,"spec",(function(){return g}));var r=n(278),o=n(288),a=n(277),i=n(317),c=n.n(i),s=n(283),d=n.n(s);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p=function(t){return Array.isArray(t)&&2===t.length?"".concat(t[0],"x").concat(t[1]):t},m=function(t){return t.split("x").map(Number)},y=function(t){return d()(["300x250","320x50"],t)},b=function(t){return d()(["video","native"],t)},v=function(t,e){return"300x250"===e?[e].concat(l(t)):[].concat(l(t),[e])},h=function(t){return"video"===t},w=function(t){return"fullwidth"===t},A=function(t){return[].concat(l(t.filter(Boolean)),["241394079772386"])[0]},g={code:"audienceNetwork",supportedMediaTypes:["banner","video"],isBidRequestValid:function(t){return"object"===f(t.params)&&"string"==typeof t.params.placementId&&t.params.placementId.length>0&&Array.isArray(t.sizes)&&t.sizes.length>0&&(!w(t.params.format)||t.sizes.map(p).some((function(t){return"300x250"===t})))&&(b(t.params.format)||t.sizes.map(p).some(y))},buildRequests:function(t,e){var n=[],r=[],i=[],s=[],d=[],l=[];t.forEach((function(t){return t.sizes.map(p).filter((function(e){return function(t,e){return w(e)&&"300x250"===p(t)||b(e)||y(p(t))}(e,t.params.format)})).reduce(v,[]).slice(0,1).forEach((function(e){var o=u(function(t,e){return w(e)?["300x250",null]:[t,e]}(e,t.params.format),2),a=o[0],c=o[1];n.push(t.params.placementId),r.push(c||a),i.push(a),s.push(function(t){return h(t)?"":"6.0.web"}(c)),d.push(t.params.platform),l.push(t.bidId)}))}));var f=Boolean(window&&window.location&&"string"==typeof window.location.search&&-1!==window.location.search.indexOf("anhb_testmode")).toString(),g=encodeURIComponent(Object(a.deepAccess)(e,"refererInfo.canonicalUrl")||Object(a.deepAccess)(e,"refererInfo.referer")),j=A(d),I=Object(a.generateUUID)(),x={placementids:n,adformats:r,testmode:f,pageurl:g,sdk:s,adapterver:"1.3.0",platform:j,platver:"3.11.0",cb:I},S=c()(r,h);if(-1!==S){var N=u(m(i[S]),2);x.playerwidth=N[0],x.playerheight=N[1]}var k=Object(o.b)(x);return[{adformats:r,data:k,method:"GET",requestIds:l,sizes:i,url:"https://an.facebook.com/v2/placementbid.json",pageurl:g}]},interpretResponse:function(t,e){var n=t.body,r=e.adformats,o=e.requestIds,a=e.sizes,i=e.pageurl,c=n.bids,s=void 0===c?{}:c;return Object.keys(s).map((function(t){return s[t]})).reduce((function(t,e){return t.concat(e)}),[]).map((function(t,e){var n=t.bid_id,c=t.placement_id,s=t.bid_price_cents,d=r[e],l=u(m(p(a[e])),2),f=l[0],y=l[1],b=function(t,e,n){var r="native"===e?'<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>':"";return"<html>\n  <head>".concat("native"===e?'<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>':"",'</head>\n  <body>\n    <div style="display:none;position:relative;">\n      <script type="text/javascript" src="https://connect.facebook.net/en_US/fbadnw60-tag.js" async><\/script>\n      <script type="text/javascript">\n        window.ADNW = window.ADNW || {};\n        window.ADNW.v60 = window.ADNW.v60 || {};\n        window.ADNW.v60.slots = window.ADNW.v60.slots || [];\n        window.ADNW.v60.slots.push({\n          rootElement: document.currentScript.parentElement,\n          placementid: \'').concat(t,"',\n          format: '").concat(e,"',\n          bidid: '").concat(n,"',\n          testmode: false,\n          onAdLoaded: function(rootElement) {\n            console.log('Audience Network [").concat(t,"] ad loaded');\n            rootElement.style.display = 'block';\n          },\n          onAdError: function(errorCode, errorMessage) {\n            console.log('Audience Network [").concat(t,"] error (' + errorCode + ') ' + errorMessage);\n          }\n        });\n      <\/script>\n      ").concat(r,"\n    </div>\n  </body>\n</html>")}(c,d,n),v={requestId:o[e],cpm:s/100,width:f,height:y,ad:b,ttl:600,creativeId:c,netRevenue:!0,currency:"USD",hb_bidder:"fan",fb_bidid:n,fb_format:d,fb_placementid:c};return h(d)&&(v.mediaType="video",v.vastUrl="https://an.facebook.com/v1/instream/vast.xml?placementid=".concat(c,"&pageurl=").concat(i,"&playerwidth=").concat(f,"&playerheight=").concat(y,"&bidid=").concat(n),v.ttl=3600),v}))},transformBidParams:function(t,e){return Object(a.convertTypes)({placementId:"string"},t)}};Object(r.registerBidder)(g)}}]);