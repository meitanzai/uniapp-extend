(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-goodsList_swiper"],{"1d40":function(t,i,e){"use strict";var n=e("badf"),a=e.n(n);a.a},7757:function(t,i,e){"use strict";e.r(i);var n=e("bde6"),a=e("8bf2");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("1d40");var r,l=e("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"1f9fb81d",null,!1,n["a"],r);i["default"]=s.exports},"8bf2":function(t,i,e){"use strict";e.r(i);var n=e("d3f6"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},badf:function(t,i,e){var n=e("e963");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("124e7e7d",n,!0,{sourceMap:!1,shadowMode:!1})},bde6:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"top--panel"},[e("v-uni-view",{staticStyle:{"background-color":"#ffaa00","text-align":"center","font-size":"28rpx",padding:"10px 0",color:"#fff"}},[e("v-uni-view",[t._v("这里顶部内容占位区域，不需要则删除")]),e("v-uni-view",[t._v("可添加需放在页面顶部的内容，比如banner图")])],1)],1),e("v-uni-view",{staticClass:"scroll-panel",attrs:{id:"scroll-panel"}},[e("v-uni-view",{staticClass:"list-box"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true","scroll-into-view":t.leftIntoView,"scroll-with-animation":!0}},t._l(t.leftArray,(function(i,n){return e("v-uni-view",{key:n,staticClass:"item",class:{active:n==t.leftIndex},attrs:{id:"left-"+n,"data-index":n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._v(t._s(i))])})),1)],1),e("v-uni-view",{staticClass:"main"},[e("v-uni-swiper",{staticClass:"swiper",style:{height:t.scrollHeight},attrs:{current:t.leftIndex,vertical:"true",duration:"300"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.mainArray,(function(i,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",[t._v(t._s(i.title))])],1),t._l(i.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"goods"},[e("v-uni-image",{attrs:{src:"/static/logo.png",mode:""}}),e("v-uni-view",[e("v-uni-view",[t._v("第"+t._s(n+1)+"个商品标题")]),e("v-uni-view",{staticClass:"describe"},[t._v("第"+t._s(n+1)+"个商品的描述内容")]),e("v-uni-view",{staticClass:"money"},[t._v("第"+t._s(n+1)+"个商品的价格")])],1)],1)}))],2)],1)],1)})),1)],1)],1)],1),e("v-uni-view",{staticClass:"bottom-panel"},[e("v-uni-view",{staticStyle:{"background-color":"#ffaa00","text-align":"center","font-size":"28rpx",padding:"10px 0",color:"#fff"}},[e("v-uni-view",[t._v("这里底部内容占位区域，不需要则删除")]),e("v-uni-view",[t._v("可添加需放在页面底部的内容，比如购物车栏目")])],1)],1)],1)},o=[]},d3f6:function(t,i,e){"use strict";e("a9e3"),e("d3b7"),e("ac1f"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{scrollHeight:"400px",leftArray:[],mainArray:[],leftIndex:0}},computed:{leftIntoView:function(){return"left-".concat(this.leftIndex>5?this.leftIndex-5:0)}},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.initScrollView().then((function(){t.getListData()}))}),200)}))},methods:{initScrollView:function(){var t=this;return new Promise((function(i,e){var n=uni.createSelectorQuery().select("#scroll-panel");n.boundingClientRect((function(e){t.scrollHeight="".concat(e.height,"px"),t.$nextTick((function(){i()}))})).exec()}))},getListData:function(){var t=this;new Promise((function(t,i){uni.showLoading(),setTimeout((function(){for(var i=[],e=[],n=0;n<25;n++){i.push("".concat(n+1,"类商品"));for(var a=[],o=Math.floor(15*Math.random())||8,r=0;r<o;r++)a.push(r);e.push({title:"第".concat(n+1,"类商品标题"),list:a})}t({left:i,main:e})}),1e3)})).then((function(i){console.log("-----------请求接口返回数据示例-------------"),console.log(i),uni.hideLoading(),t.leftArray=i.left,t.mainArray=i.main}))},leftTap:function(t){var i=t.currentTarget.dataset.index;this.leftIndex=Number(i)},swiperChange:function(t){var i=t.detail.current;this.leftIndex=Number(i)}}};i.default=n},e963:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-1f9fb81d], .container[data-v-1f9fb81d]{height:100%}\r\n/* 容器 */.container[data-v-1f9fb81d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start}.container > uni-view[data-v-1f9fb81d]{width:100%}.container .scroll-panel[data-v-1f9fb81d]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;height:0;overflow:hidden}.container .bottom-panel[data-v-1f9fb81d]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.list-box[data-v-1f9fb81d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;font-size:%?28?%}.list-box .left[data-v-1f9fb81d]{width:%?200?%;background-color:#f6f6f6;line-height:%?80?%;box-sizing:border-box;font-size:%?32?%}.list-box .left .item[data-v-1f9fb81d]{padding-left:%?20?%;position:relative}.list-box .left .item[data-v-1f9fb81d]:not(:first-child){margin-top:1px}.list-box .left .item[data-v-1f9fb81d]:not(:first-child)::after{content:"";display:block;height:0;border-top:#d6d6d6 solid 1px;width:%?620?%;position:absolute;top:-1px;right:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)\r\n  /* 1px像素 */}.list-box .left .item.active[data-v-1f9fb81d], .list-box .left .item[data-v-1f9fb81d]:active{color:#42b983;background-color:#fff}.list-box .main[data-v-1f9fb81d]{background-color:#fff;padding-left:%?20?%;width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;box-sizing:border-box}.list-box .main .swiper[data-v-1f9fb81d]{height:500px}.list-box .main .title[data-v-1f9fb81d]{line-height:%?64?%;font-size:%?24?%;font-weight:700;color:#666;background-color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:999}.list-box .main .item[data-v-1f9fb81d]{padding-bottom:%?10?%}.list-box .main .goods[data-v-1f9fb81d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;margin-bottom:%?10?%}.list-box .main .goods > uni-image[data-v-1f9fb81d]{width:%?120?%;height:%?120?%;margin-right:%?16?%;margin-left:2px}.list-box .main .goods .describe[data-v-1f9fb81d]{font-size:%?24?%;color:#999}.list-box .main .goods .money[data-v-1f9fb81d]{font-size:%?24?%;color:#efba21}',""]),t.exports=i}}]);