(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-goodsList_swiper"],{"20e7":function(t,e,i){"use strict";i.r(e);var n=i("7438"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},5769:function(t,e,i){"use strict";var n=i("7584"),a=i.n(n);a.a},7438:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n={data:function(){return{scrollHeight:"500px",leftArray:[],mainArray:[],leftIndex:0}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.scrollHeight="".concat(e.windowHeight,"px")}})},mounted:function(){this.getListData()},methods:{getListData:function(){for(var t=[],e=[],i=0;i<10;i++){t.push("".concat(i+1,"类商品"));for(var n=[],a=Math.floor(15*Math.random())||8,o=0;o<a;o++)n.push(o);e.push({title:"第".concat(i+1,"类商品标题"),list:n})}this.leftArray=t,this.mainArray=e},leftTap:function(t){var e=t.currentTarget.dataset.index;this.leftIndex=Number(e)},swiperChange:function(t){var e=t.detail.current;this.leftIndex=Number(e)}}};e.default=n},7584:function(t,e,i){var n=i("7abb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7bc37ad2",n,!0,{sourceMap:!1,shadowMode:!1})},"7abb":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list_box[data-v-18e62b7f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;font-size:%?28?%}.list_box .left[data-v-18e62b7f]{width:%?200?%;background-color:#f6f6f6;line-height:%?80?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?32?%}.list_box .left .item[data-v-18e62b7f]{padding-left:%?20?%;position:relative}.list_box .left .item[data-v-18e62b7f]:not(:first-child){margin-top:1px}.list_box .left .item[data-v-18e62b7f]:not(:first-child):after{content:"";display:block;height:0;border-top:#d6d6d6 solid 1px;width:%?620?%;position:absolute;top:-1px;right:0;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5)\n          /* 1px像素 */}.list_box .left .item.active[data-v-18e62b7f],.list_box .left .item[data-v-18e62b7f]:active{color:#42b983;background-color:#fff}.list_box .main[data-v-18e62b7f]{background-color:#fff;padding-left:%?20?%;width:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box}.list_box .main .swiper[data-v-18e62b7f]{height:500px}.list_box .main .title[data-v-18e62b7f]{line-height:%?64?%;font-size:%?24?%;font-weight:700;color:#666;background-color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:999}.list_box .main .item[data-v-18e62b7f]{padding-bottom:%?10?%}.list_box .main .goods[data-v-18e62b7f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;margin-bottom:%?10?%}.list_box .main .goods>uni-image[data-v-18e62b7f]{width:%?120?%;height:%?120?%;margin-right:%?16?%}.list_box .main .goods .describe[data-v-18e62b7f]{font-size:%?24?%;color:#999}.list_box .main .goods .money[data-v-18e62b7f]{font-size:%?24?%;color:#efba21}',""])},bf33:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"list_box"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},t._l(t.leftArray,function(e,n){return i("v-uni-view",{key:n,staticClass:"item",class:{active:n==t.leftIndex},attrs:{"data-index":n},on:{click:function(e){e=t.$handleEvent(e),t.leftTap(e)}}},[t._v(t._s(e))])}),1)],1),i("v-uni-view",{staticClass:"main"},[i("v-uni-swiper",{staticClass:"swiper",style:{height:t.scrollHeight},attrs:{current:t.leftIndex,vertical:"true",duration:"300"},on:{change:function(e){e=t.$handleEvent(e),t.swiperChange(e)}}},t._l(t.mainArray,function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",[t._v(t._s(e.title))])],1),t._l(e.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"goods"},[i("v-uni-image",{attrs:{src:"/static/logo.png",mode:""}}),i("v-uni-view",[i("v-uni-view",[t._v("第"+t._s(n+1)+"个商品标题")]),i("v-uni-view",{staticClass:"describe"},[t._v("第"+t._s(n+1)+"个商品的描述内容")]),i("v-uni-view",{staticClass:"money"},[t._v("第"+t._s(n+1)+"个商品的价格")])],1)],1)})],2)],1)],1)}),1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},d644:function(t,e,i){"use strict";i.r(e);var n=i("bf33"),a=i("20e7");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("5769");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"18e62b7f",null);e["default"]=r.exports}}]);