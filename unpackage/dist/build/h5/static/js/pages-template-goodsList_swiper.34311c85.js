(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-goodsList_swiper"],{"20e7":function(t,i,e){"use strict";e.r(i);var n=e("6946"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},3378:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list_box[data-v-18e62b7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;font-size:%?28?%}.list_box .left[data-v-18e62b7f]{width:%?200?%;background-color:#f6f6f6;line-height:%?80?%;box-sizing:border-box;font-size:%?32?%}.list_box .left .item[data-v-18e62b7f]{padding-left:%?20?%;position:relative}.list_box .left .item[data-v-18e62b7f]:not(:first-child){margin-top:1px}.list_box .left .item[data-v-18e62b7f]:not(:first-child):after{content:"";display:block;height:0;border-top:#d6d6d6 solid 1px;width:%?620?%;position:absolute;top:-1px;right:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)\n          /* 1px像素 */}.list_box .left .item.active[data-v-18e62b7f],.list_box .left .item[data-v-18e62b7f]:active{color:#42b983;background-color:#fff}.list_box .main[data-v-18e62b7f]{background-color:#fff;padding-left:%?20?%;width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;box-sizing:border-box}.list_box .main .swiper[data-v-18e62b7f]{height:500px}.list_box .main .title[data-v-18e62b7f]{line-height:%?64?%;font-size:%?24?%;font-weight:700;color:#666;background-color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:999}.list_box .main .item[data-v-18e62b7f]{padding-bottom:%?10?%}.list_box .main .goods[data-v-18e62b7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;margin-bottom:%?10?%}.list_box .main .goods>uni-image[data-v-18e62b7f]{width:%?120?%;height:%?120?%;margin-right:%?16?%}.list_box .main .goods .describe[data-v-18e62b7f]{font-size:%?24?%;color:#999}.list_box .main .goods .money[data-v-18e62b7f]{font-size:%?24?%;color:#efba21}',""])},"56ba":function(t,i,e){var n=e("3378");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("43d32dae",n,!0,{sourceMap:!1,shadowMode:!1})},5769:function(t,i,e){"use strict";var n=e("56ba"),a=e.n(n);a.a},6946:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("c5f6");var n={data:function(){return{scrollHeight:"500px",leftArray:[],mainArray:[],leftIndex:0}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(i){t.scrollHeight="".concat(i.windowHeight,"px")}})},mounted:function(){this.getListData()},methods:{getListData:function(){for(var t=[],i=[],e=0;e<10;e++){t.push("".concat(e+1,"类商品"));for(var n=[],a=Math.floor(15*Math.random())||8,o=0;o<a;o++)n.push(o);i.push({title:"第".concat(e+1,"类商品标题"),list:n})}this.leftArray=t,this.mainArray=i},leftTap:function(t){var i=t.currentTarget.dataset.index;this.leftIndex=Number(i)},swiperChange:function(t){var i=t.detail.current;this.leftIndex=Number(i)}}};i.default=n},bf33:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"list_box"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},t._l(t.leftArray,function(i,n){return e("v-uni-view",{key:n,staticClass:"item",class:{active:n==t.leftIndex},attrs:{"data-index":n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._v(t._s(i))])}),1)],1),e("v-uni-view",{staticClass:"main"},[e("v-uni-swiper",{staticClass:"swiper",style:{height:t.scrollHeight},attrs:{current:t.leftIndex,vertical:"true",duration:"300"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.mainArray,function(i,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",[t._v(t._s(i.title))])],1),t._l(i.list,function(i,n){return e("v-uni-view",{key:n,staticClass:"goods"},[e("v-uni-image",{attrs:{src:"/static/logo.png",mode:""}}),e("v-uni-view",[e("v-uni-view",[t._v("第"+t._s(n+1)+"个商品标题")]),e("v-uni-view",{staticClass:"describe"},[t._v("第"+t._s(n+1)+"个商品的描述内容")]),e("v-uni-view",{staticClass:"money"},[t._v("第"+t._s(n+1)+"个商品的价格")])],1)],1)})],2)],1)],1)}),1)],1)],1)},o=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return n})},d644:function(t,i,e){"use strict";e.r(i);var n=e("bf33"),a=e("20e7");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("5769");var r,s=e("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"18e62b7f",null,!1,n["a"],r);i["default"]=l.exports}}]);