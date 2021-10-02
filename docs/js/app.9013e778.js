(function(t){function e(e){for(var r,a,o=e[0],u=e[1],s=e[2],f=0,b=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"01f2":function(t,e,n){"use strict";n("e2b5")},1:function(t,e){},2:function(t,e){},3:function(t,e){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i=Object(r["d"])("h1",{class:"text-center"},"Histogram Distance",-1),c=Object(r["d"])("h2",null,"Images:",-1),a={ref:"imageContainer",class:"image-container mb-6"},o=Object(r["d"])("h2",null,"Cross Distances:",-1),u={class:"distances-container mb-6"},s=["src"],l=["src"],f=Object(r["d"])("h2",null,"Histogram Image 1/2 (r-channel):",-1),b={ref:"plotContainer"};function p(t,e,n,p,d,m){return Object(r["h"])(),Object(r["c"])("div",null,[i,c,Object(r["d"])("div",a,null,512),o,Object(r["d"])("div",u,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(t.imageUrls,(function(t,e){return Object(r["h"])(),Object(r["c"])("img",{class:"mini-image top",src:t,key:t,style:Object(r["g"])({"grid-column":e+2})},null,12,s)})),128)),(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(t.imageUrls,(function(t,e){return Object(r["h"])(),Object(r["c"])("img",{class:"mini-image side",src:t,key:t,style:Object(r["g"])({"grid-row":e+2})},null,12,l)})),128)),(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(t.distances,(function(e,n){return Object(r["h"])(),Object(r["c"])(r["a"],{key:n},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(e,(function(e,i){return Object(r["h"])(),Object(r["c"])("div",{key:n+""+i,style:Object(r["g"])({"grid-row":n+2,"grid-column":i+2,"--lightness":20+60*e/2+"%"}),class:"distance-positioner"},[Object(r["d"])("span",null,Object(r["k"])(t.formatDistance(e)),1)],4)})),128))],64)})),128))]),f,Object(r["d"])("div",b,null,512)])}var d=n("9ab4"),m=function(){function t(){}return t.prototype.computeHist=function(t){var e=this,n=t.im,r=t.nbins,i=void 0===r?20:r,c=this.createBins(i),a=n.data.reduce((function(t,e,n){var r=n%4;return 3!==r&&t[r].push(e),t}),[[],[],[]]).map((function(t){return t.sort((function(t,e){return t-e}))})).map((function(t){return e.distributeOnBins({c:t,bins:c})}));return{r:a[0],g:a[1],b:a[2],bins:c}},t.prototype.distributeOnBins=function(t){for(var e=t.c,n=t.bins,r=Array(n.length-1).fill(0),i=0,c=function(t){var c=e.findIndex((function(e){return e>n[t]}));if(-1===c)return r[t-1]=(e.length-i)/e.length,"break";r[t-1]=(c-i)/e.length,i=c},a=1;a<n.length;a++){var o=c(a);if("break"===o)break}return r},t.prototype.createBins=function(t){for(var e=[],n=Math.floor(256/t),r=0;r<=256;r+=n)e.push(r);return e[e.length-1]=Math.max(256,e[e.length-1]),e},t.prototype.computeDist=function(t,e){var n=this;return["r","g","b"].map((function(r){return n.computeHistogramDistance({f:t[r],g:e[r]})})).reduce((function(t,e){return t+e}),0)},t.prototype.computeHistogramDistance=function(t){var e=t.f,n=t.g;return 1-e.reduce((function(t,e,r){return t+Math.min(e,n[r])}),0)},t}(),h=new m,g=n("6612"),j=n.n(g),O=n("030a"),v=300,y=Object(r["e"])({name:"App",data:function(){return{publicPath:"/",distances:[],imageUrls:[]}},mounted:function(){return Object(d["a"])(this,void 0,void 0,(function(){var t,e,n,r,i=this;return Object(d["b"])(this,(function(c){switch(c.label){case 0:return[4,Promise.all(Object(d["c"])(Array(6)).map((function(t,e){var n=i.$refs.imageContainer,r=document.createElement("canvas");return n.append(r),[r,e]})).map((function(t){var e=t[0],n=t[1];return Object(d["a"])(i,void 0,void 0,(function(){var t,r,i;return Object(d["b"])(this,(function(c){switch(c.label){case 0:return t=5===n,[4,this.drawImage(e,this.publicPath+"image"+n+".jpg",t)];case 1:return r=c.sent(),[4,w(e)];case 2:return i=c.sent(),[2,{imageData:r,url:i}]}}))}))})))];case 1:return t=c.sent(),this.imageUrls=t.map((function(t){var e=t.url;return e})),this.distances=t.map((function(t){var e=t.imageData;return h.computeHist({im:e})})).map((function(t,e,n){return n.map((function(e){return h.computeDist(t,e)}))})),e=document.querySelector(":root"),e.style.setProperty("--number-images",""+this.imageUrls.length),n=h.computeHist({im:t[0].imageData}),r=h.computeHist({im:t[1].imageData}),this.plot(n,r),[2]}}))}))},components:{},methods:{drawImage:function(t,e,n){return new Promise((function(r){var i=new Image;i.src=e,i.addEventListener("load",(function(){var e=v/i.width;i.width=v,i.height=e*i.height,t.width=i.width,t.height=i.height;var c=t.getContext("2d");n&&(c.filter="grayscale(100%)"),c.drawImage(i,0,0,i.width,i.height),r(c.getImageData(0,0,t.width,t.height))}))}))},formatDistance:function(t){return j()(t<1e-5?0:t).format("0.00")},plot:function(t,e){var n={height:500,width:900,xaxis:{range:[0,255]}},r={responsive:!0,displayModeBar:!1,displaylogo:!1};O["newPlot"](this.$refs.plotContainer,[{name:"Image 1",x:t.bins,y:t.r,type:"bar",opacity:.5,marker:{color:"red"}},{name:"Image 2",x:e.bins,y:e.r,type:"bar",opacity:.5,marker:{color:"blue"}}],n,r)}}});function w(t){return new Promise((function(e){t.toBlob((function(t){return e(URL.createObjectURL(t))}))}))}n("01f2");var x=n("6b0d"),P=n.n(x);const k=P()(y,[["render",p]]);var D=k,I=(n("bddf"),n("9319"));n("098b"),n("e1ae"),n("4121");Object(r["b"])(D).use(I["a"]).mount("#app")},e2b5:function(t,e,n){}});
//# sourceMappingURL=app.9013e778.js.map