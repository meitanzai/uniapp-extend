(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-swiper_video"],{"0d8d":function(t,n,e){"use strict";e.r(n);var i=e("5e74"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},4333:function(t,n,e){var i=e("4b0b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("370fac64",i,!0,{sourceMap:!1,shadowMode:!1})},"4b0b":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-3bc83488], .swiper[data-v-3bc83488], .swiper-item[data-v-3bc83488], .swiper-video[data-v-3bc83488]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.top-nav-bg[data-v-3bc83488]{position:fixed;z-index:9;top:0;width:%?750?%;height:%?200?%;left:0}.top-nav[data-v-3bc83488]{position:fixed;z-index:10;top:0;width:%?750?%;left:0}.top-nav-title[data-v-3bc83488]{height:44px;font-size:%?32?%;text-align:center;line-height:43px;font-size:20px;color:#fff}.bottom-text-bg[data-v-3bc83488]{position:fixed;z-index:1;bottom:0;width:%?750?%;height:%?800?%;left:0}',""]),t.exports=n},"51d8":function(t,n,e){"use strict";var i=e("4333"),a=e.n(i);a.a},"5e74":function(t,n,e){"use strict";var i=e("ee27");e("99af"),e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("d0ff")),r={data:function(){return{iStatusBarHeight:0,topNavBgUrl:"https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200409/2fd2310e8a4d1455134ee603376cd967.png",bottomTextBgUrl:"https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200409/8de63df9efea7efa0b116190bfb19385.png",params:{index:0,isPlay:!1},list:[]}},mounted:function(){uni.showModal({title:"提示",content:"该模板是nvue模板，仅APP平台可正常体验",showCancel:!1,confirmText:"我知道了"}),this.getVideoList(),this.iStatusBarHeight=uni.getSystemInfoSync().statusBarHeight},methods:{getVideoList:function(){var t=this;new Promise((function(t,n){for(var e=[],i=[114,251,135,320,269,542,196,322,179,218],a=0;a<10;a++)e.push({url:"https://learning.dcloud.io/video/chapter_0".concat(a,".mp4"),time:i[a]});t(e)})).then((function(n){console.log(n),t.list=[].concat((0,a.default)(t.list),(0,a.default)(n)),t.$nextTick((function(){setTimeout((function(){t.videoPlay(t.params.index)}),300)}))}))},videoPause:function(t){var n=uni.createVideoContext("video-".concat(t),this);n.pause(),this.params.isPlay=!1},videoPlay:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=uni.createVideoContext("video-".concat(t),this);n&&e.seek(0),e.play(),this.params.index=t,this.params.isPlay=!0,console.log(this.list[t])},onSwiperChange:function(t){var n=t.detail.current;this.videoPause(this.params.index),this.videoPlay(n,!0)},onPlay:function(t){},aa:function(t){var n=t.currentTarget.dataset.index;this.params.isPlay?this.videoPause(n):this.videoPlay(n)}}};n.default=r},"7de3":function(t,n,e){"use strict";e.r(n);var i=e("d0b8"),a=e("0d8d");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("51d8");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3bc83488",null,!1,i["a"],o);n["default"]=c.exports},d0b8:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-image",{staticClass:"top-nav-bg",attrs:{src:t.topNavBgUrl,mode:"widthFix"}}),e("v-uni-view",{staticClass:"top-nav",style:{paddingTop:t.iStatusBarHeight+"px"}},[e("v-uni-text",{staticClass:"top-nav-title"},[t._v("顶部导航栏")])],1),e("v-uni-swiper",{staticClass:"swiper",attrs:{vertical:!0},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.onSwiperChange.apply(void 0,arguments)}}},t._l(t.list,(function(n,i){return e("v-uni-swiper-item",{key:i},[e("v-uni-view",{staticClass:"swiper-item",attrs:{"data-index":i}},[e("v-uni-video",{staticClass:"swiper-video",attrs:{id:"video-"+i,src:n.url,controls:!1,loop:!0},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.onPlay.apply(void 0,arguments)}}})],1)],1)})),1)],1)},r=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}))},d0ff:function(t,n,e){"use strict";function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function a(t){if(Array.isArray(t))return i(t)}e.r(n);e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("fb6a"),e("25f0");function o(t,n){if(t){if("string"===typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,n):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||r(t)||o(t)||s()}e.d(n,"default",(function(){return c}))}}]);