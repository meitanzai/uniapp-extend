(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/photoList/photoList"],{"0341":function(t,n,e){"use strict";(function(t){function e(t){return i(t)||r(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{photoList:[],rows:10,page:1,isGet:!0,loadTxt:""}},onLoad:function(){this.getPhoto()},onReachBottom:function(){this.getPhoto()},methods:{getPhoto:function(){var n=this;this.isGet&&(this.isGet=!1,new Promise(function(e,o){1==n.page?t.showLoading({title:"加载中",mask:!0}):n.loadTxt="正在加载中",setTimeout(function(){for(var t=function(t){var n=t;return n<10?n="00"+n:n<100&&(n="0"+n),{index:n,url:"http://cued.xunlei.com/demos/publ/img/P_".concat(n,".jpg")}},o=[],r=0;r<10;r++)o.push(t((n.page-1)*n.rows+r));e(o)},1e3)}).then(function(o){1==n.page&&t.hideLoading(),n.photoList=[].concat(e(n.photoList),e(o)),n.showImages()}))},showImages:function(){var t=this,n=(this.page-1)*this.rows,e=function(){n<t.photoList.length?(t.$set(t.photoList[n],"active",!0),n++):(clearInterval(o),t.loadTxt="上拉加载更多",t.page++,t.isGet=!0)},o=setInterval(function(){e()},100)},previewPhoto:function(n){var e=n.currentTarget.dataset.index,o=this.photoList.map(function(t,n){return t.url});t.previewImage({current:o[e],urls:o})}}};n.default=a}).call(this,e("6e42")["default"])},"17f2":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},"8a09":function(t,n,e){"use strict";var o=e("cb2e"),r=e.n(o);r.a},cb2e:function(t,n,e){},cfb6:function(t,n,e){"use strict";e.r(n);var o=e("0341"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=r.a},d769:function(t,n,e){"use strict";e.r(n);var o=e("17f2"),r=e("cfb6");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("8a09");var a=e("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports}},[["5982","common/runtime","common/vendor"]]]);