(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-gradientNav"],{"05d9":function(t,e,i){"use strict";var a=i("c9f2"),n=i.n(a);n.a},"20fc":function(t,e,i){"use strict";i.r(e);var a=i("d05e"),n=i("b275");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("05d9");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"007c75c0",null,!1,a["a"],o);e["default"]=s.exports},4349:function(t,e,i){"use strict";var a=i("cb99"),n=i.n(a);n.a},6057:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top-swiper[data-v-530be6df]{margin-bottom:%?30?%}.top-swiper .bg[data-v-530be6df]{padding-top:0;box-sizing:initial;width:100%;position:relative}.top-swiper .bg .placeholder[data-v-530be6df]{box-sizing:initial;padding-top:%?600?%;height:44px}.top-swiper .bg .image[data-v-530be6df]{box-sizing:initial;position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;overflow:hidden}.top-swiper .bg .image[data-v-530be6df]::after{content:"";position:absolute;width:100%;height:100%;z-index:1;bottom:0;left:0;height:65%;background-image:-webkit-linear-gradient(top,transparent,#fff);background-image:linear-gradient(180deg,transparent,#fff)}.top-swiper .bg .image > uni-image[data-v-530be6df]{position:absolute;box-sizing:initial;padding:60px;top:0;left:0;width:100%;height:80%;top:-60px;left:-60px;-webkit-filter:blur(50px);filter:blur(50px)}.top-swiper .box[data-v-530be6df]{padding-top:0;box-sizing:initial;position:absolute;z-index:5;top:0;left:0;width:100%;height:auto}.top-swiper .swiper[data-v-530be6df]{height:%?600?%;margin:0 %?20?%}.top-swiper .swiper .le-img[data-v-530be6df]{width:100%;height:100%;display:block;-webkit-transform:scale(.9);transform:scale(.9);-webkit-transition:-webkit-transform .3s ease-in-out 0s;transition:-webkit-transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s,-webkit-transform .3s ease-in-out 0s;border-radius:4px}.top-swiper .swiper .le-img.le-active[data-v-530be6df]{-webkit-transform:scale(1);transform:scale(1)}',""]),t.exports=e},"9bcf":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*\r\n *  uni-app 全局样式表\r\n *  作者:helang\r\n *  邮箱:helang.love@qq.com\r\n*/\r\n/* 根元素样式 设置页面背景、字体大小、字体颜色，字符间距、长单词换行 */uni-page-body[data-v-007c75c0]{background-color:#f3f3f3;font-size:%?28?%;box-sizing:border-box;color:#333;letter-spacing:0;word-wrap:break-word}\r\n/* 设置常用元素尺寸规则 */uni-view[data-v-007c75c0], uni-textarea[data-v-007c75c0], uni-input[data-v-007c75c0], uni-label[data-v-007c75c0], uni-form[data-v-007c75c0], uni-button[data-v-007c75c0], uni-image[data-v-007c75c0]{box-sizing:border-box}\r\n/* 按钮样式处理 */uni-button[data-v-007c75c0]{font-size:%?28?%}\r\n/* 取消按钮默认的边框线效果 */uni-button[data-v-007c75c0]:after{border:none}\r\n/* 设置图片默认样式，取消默认尺寸 */uni-image[data-v-007c75c0]{display:block;height:auto;width:auto}\r\n/* 输入框默认字体大小 */uni-textarea[data-v-007c75c0], uni-input[data-v-007c75c0]{font-size:%?28?%}\r\n/* 列式弹性盒子 */.flex-col[data-v-007c75c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}\r\n/* 行式弹性盒子 */.flex-row[data-v-007c75c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start}\r\n/* 弹性盒子弹性容器 */.flex-col > uni-view.flex-grow[data-v-007c75c0]{width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.flex-row > uni-view.flex-grow[data-v-007c75c0]{height:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}\r\n/* 弹性盒子允许换行 */.flex-col.flex-wrap[data-v-007c75c0]{-webkit-flex-wrap:wrap;flex-wrap:wrap}\r\n/* 弹性盒子居中对齐 */.flex-col.flex-center[data-v-007c75c0], .flex-row.flex-center[data-v-007c75c0]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\r\n/* 列式弹性盒子两端对齐 */.flex-col.flex-space[data-v-007c75c0]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\r\n/* 弹性盒子快速分栏 ,这里非常郁闷 uniapp 居然不支持 * 选择器 */.flex-col.flex-col-2 > uni-view[data-v-007c75c0]{width:50%}.flex-col.flex-col-3 > uni-view[data-v-007c75c0]{width:33.33333%}.flex-col.flex-col-4 > uni-view[data-v-007c75c0]{width:25%}.flex-col.flex-col-5 > uni-view[data-v-007c75c0]{width:20%}.flex-col.flex-col-6 > uni-view[data-v-007c75c0]{width:16.66666%}\r\n/* 字体颜色 */.color-333[data-v-007c75c0]{color:#333}.color-666[data-v-007c75c0]{color:#666}.color-999[data-v-007c75c0]{color:#999}.color-ccc[data-v-007c75c0]{color:#ccc}.color-fff[data-v-007c75c0]{color:#fff}.color-6dc[data-v-007c75c0]{color:#6dca6d}.color-d51[data-v-007c75c0]{color:#d51917}.color-09f[data-v-007c75c0]{color:#09f}\r\n/* 背景色*/.bg-fff[data-v-007c75c0]{background-color:#fff}\r\n/* 字体大小 */.size-10[data-v-007c75c0]{font-size:%?20?%}.size-12[data-v-007c75c0]{font-size:%?24?%}.size-14[data-v-007c75c0]{font-size:%?28?%}.size-16[data-v-007c75c0]{font-size:%?32?%}.size-18[data-v-007c75c0]{font-size:%?36?%}.size-20[data-v-007c75c0]{font-size:%?40?%}\r\n/* 字体加粗 */.font-b[data-v-007c75c0]{font-weight:700}\r\n/* 对齐方式 */.align-c[data-v-007c75c0]{text-align:center}.align-l[data-v-007c75c0]{text-align:left}.align-r[data-v-007c75c0]{text-align:right}\r\n/* 遮罩 */.shade[data-v-007c75c0]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.8);z-index:100}\r\n/* 弹窗 */.shade-box[data-v-007c75c0]{position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;z-index:101;min-width:%?200?%;min-height:%?200?%}uni-page-body[data-v-007c75c0]{background-color:#fff}\r\n/* 标题栏 */.title[data-v-007c75c0]{position:fixed;top:0;left:0;width:100%;height:auto;padding-top:0;z-index:10;background-color:rgba(66,185,131,0);color:hsla(0,0%,100%,.8)}.title > uni-view[data-v-007c75c0]{height:44px}.title .box1[data-v-007c75c0]{width:%?60?%;margin:0 %?40?%;font-size:%?36?%}.title .tab > uni-view[data-v-007c75c0]{margin:0 %?30?%;line-height:%?64?%;font-size:%?36?%;position:relative;letter-spacing:0;-webkit-transition:-webkit-transform .3s ease-in-out 0s;transition:-webkit-transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s,-webkit-transform .3s ease-in-out 0s;-webkit-transform:scale(1);transform:scale(1)}.title .tab > uni-view.active[data-v-007c75c0]{color:#fff;-webkit-transform:scale(1.15);transform:scale(1.15)}.title.style2[data-v-007c75c0]{color:#fff;background-color:#42b983}.title.style2 .tab > uni-view.active[data-v-007c75c0]{color:#fff}body.?%PAGE?%[data-v-007c75c0]{background-color:#f3f3f3;background-color:#fff}',""]),t.exports=e},a4d0:function(t,e,i){"use strict";i.r(e);var a=i("f474"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a78b:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"top-swiper"},[i("v-uni-view",{staticClass:"bg"},[i("v-uni-view",{staticClass:"placeholder"}),i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{attrs:{src:t.swiper.list[t.swiper.index],mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticStyle:{height:"44px"}}),i("v-uni-swiper",{staticClass:"swiper",attrs:{"previous-margin":t.swiper.margin,"next-margin":t.swiper.margin,circular:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.swiper.list,(function(e,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-image",{staticClass:"le-img",class:{"le-active":t.swiper.index==a},attrs:{src:e}})],1)})),1)],1)],1)],1)},r=[]},b275:function(t,e,i){"use strict";i.r(e);var a=i("d57e"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},c374:function(t,e,i){"use strict";i.r(e);var a=i("a78b"),n=i("a4d0");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("4349");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"530be6df",null,!1,a["a"],o);e["default"]=s.exports},c9f2:function(t,e,i){var a=i("9bcf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("bbb897f2",a,!0,{sourceMap:!1,shadowMode:!1})},cb99:function(t,e,i){var a=i("6057");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3558e516",a,!0,{sourceMap:!1,shadowMode:!1})},d05e:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"title",class:t.topNavStyle.class,style:t.topNavStyle.style},[i("v-uni-view",{staticClass:"flex-col"},[i("v-uni-view",{staticClass:"box1"}),i("v-uni-view",{staticClass:"flex-grow flex-col flex-center tab"},t._l(t.topNavArr,(function(e,a){return i("v-uni-view",{key:a,class:{active:t.topNavIndex==a},attrs:{"data-index":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTopNav.apply(void 0,arguments)}}},[t._v(t._s(e))])})),1),i("v-uni-view",{staticClass:"box1 align-r"})],1)],1),i("card-swiper"),i("v-uni-view",{staticStyle:{height:"600px"}},[i("v-uni-view",{staticStyle:{"padding-top":"50rpx","text-align":"center"}},[t._v("向上滚动查看标题栏渐变效果")])],1)],1)},r=[]},d57e:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("c374")),r={data:function(){return{topNavIndex:0,topNavArr:["推荐","热门","新作"],pageScrollTop:0}},components:{cardSwiper:n.default},computed:{topNavStyle:function(){var t=this.pageScrollTop/100;return{class:t>=.85?"style2":"",style:"background-color: rgba(66, 185, 131,".concat(t>=1?1:t,");")}}},onLoad:function(){},onPageScroll:function(t){this.pageScrollTop=Math.floor(t.scrollTop)},methods:{changeTopNav:function(t){this.topNavIndex=t.currentTarget.dataset.index},toSearch:function(){uni.navigateTo({url:"/pages/search/search"})}}};e.default=r},f474:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{swiper:{margin:"150rpx",index:0,list:["/static/images/douyin/0.jpg","/static/images/douyin/4.jpg","/static/images/douyin/7.jpg"]}}},components:{},mounted:function(){},methods:{swiperChange:function(t){this.swiper.index=t.detail.current}}};e.default=a}}]);