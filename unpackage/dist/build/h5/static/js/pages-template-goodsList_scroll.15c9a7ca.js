(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-goodsList_scroll"],{"0a9b":function(t,i,n){"use strict";var e=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("5df3"),n("ac6a");var o=e(n("795b")),a={data:function(){return{scrollHeight:"500px",leftArray:[],mainArray:[],topArr:[],leftIndex:0,scrollInto:""}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(i){t.scrollHeight="".concat(i.windowHeight,"px")}})},mounted:function(){this.getListData()},methods:{getListData:function(){var t=this;new o.default(function(t,i){uni.showLoading(),setTimeout(function(){for(var i=[],n=[],e=0;e<10;e++){i.push("".concat(e+1,"类商品"));for(var o=[],a=0;a<e+1;a++)o.push(a);n.push({title:"第".concat(e+1,"类商品标题"),list:o})}t({left:i,main:n})},1e3)}).then(function(i){console.log("-----------请求接口返回数据示例-------------"),console.log(i),uni.hideLoading(),t.leftArray=i.left,t.mainArray=i.main,t.$nextTick(function(){t.getElementTop()})})},getElementTop:function(){var t=this,i=[],n=function(t){return new o.default(function(i,n){var e=uni.createSelectorQuery().select(t);e.boundingClientRect(function(t){i(t.top)}).exec()})};this.mainArray.forEach(function(t,e){i.push(n("#item-".concat(e)))}),o.default.all(i).then(function(i){t.topArr=i})},mainScroll:function(t){for(var i=t.detail.scrollTop,n=0,e=this.topArr.length-1;e>=0;e--)if(i+2>=this.topArr[e]){n=e;break}this.leftIndex=n<0?0:n},leftTap:function(t){var i=t.currentTarget.dataset.index;this.scrollInto="item-".concat(i)}}};i.default=a},3764:function(t,i,n){"use strict";n.r(i);var e=n("0a9b"),o=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=o.a},"3b54":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list_box[data-v-59966f58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;font-size:%?28?%}.list_box .left[data-v-59966f58]{width:%?200?%;background-color:#f6f6f6;line-height:%?80?%;box-sizing:border-box;font-size:%?32?%}.list_box .left .item[data-v-59966f58]{padding-left:%?20?%;position:relative}.list_box .left .item[data-v-59966f58]:not(:first-child){margin-top:1px}.list_box .left .item[data-v-59966f58]:not(:first-child):after{content:"";display:block;height:0;border-top:#d6d6d6 solid 1px;width:%?620?%;position:absolute;top:-1px;right:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)\n          /* 1px像素 */}.list_box .left .item.active[data-v-59966f58]{color:#42b983;background-color:#fff}.list_box .main[data-v-59966f58]{background-color:#fff;padding-left:%?20?%;width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;box-sizing:border-box}.list_box .main .title[data-v-59966f58]{line-height:%?64?%;font-size:%?24?%;font-weight:700;color:#666;background-color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:19}.list_box .main .item[data-v-59966f58]{padding-bottom:%?10?%;border-bottom:#eee solid 1px}.list_box .main .goods[data-v-59966f58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;margin-bottom:%?10?%}.list_box .main .goods>uni-image[data-v-59966f58]{width:%?120?%;height:%?120?%;margin-right:%?16?%;margin-left:2px}.list_box .main .goods .describe[data-v-59966f58]{font-size:%?24?%;color:#999}.list_box .main .goods .money[data-v-59966f58]{font-size:%?24?%;color:#efba21}',""])},"5df3":function(t,i,n){"use strict";var e=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,n=this._i;return n>=i.length?{value:void 0,done:!0}:(t=e(i,n),this._i+=t.length,{value:t,done:!1})})},"69dc":function(t,i,n){"use strict";var e,o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"list_box"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},t._l(t.leftArray,function(i,e){return n("v-uni-view",{key:e,staticClass:"item",class:{active:e==t.leftIndex},attrs:{"data-index":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._v(t._s(i))])}),1)],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true","scroll-into-view":t.scrollInto,"scroll-with-animation":"true"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.mainScroll.apply(void 0,arguments)}}},t._l(t.mainArray,function(i,e){return n("v-uni-view",{key:e,staticClass:"item",attrs:{id:"item-"+e}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",[t._v(t._s(i.title))])],1),t._l(i.list,function(i,e){return n("v-uni-view",{key:e,staticClass:"goods"},[n("v-uni-image",{attrs:{src:"/static/logo.png",mode:""}}),n("v-uni-view",[n("v-uni-view",[t._v("第"+t._s(e+1)+"个商品标题")]),n("v-uni-view",{staticClass:"describe"},[t._v("第"+t._s(e+1)+"个商品的描述内容")]),n("v-uni-view",{staticClass:"money"},[t._v("第"+t._s(e+1)+"个商品的价格")])],1)],1)})],2)}),1)],1)],1)},a=[];n.d(i,"b",function(){return o}),n.d(i,"c",function(){return a}),n.d(i,"a",function(){return e})},"9b6f":function(t,i,n){"use strict";n.r(i);var e=n("69dc"),o=n("3764");for(var a in o)"default"!==a&&function(t){n.d(i,t,function(){return o[t]})}(a);n("e388");var r,s=n("f0c5"),l=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"59966f58",null,!1,e["a"],r);i["default"]=l.exports},aec4:function(t,i,n){var e=n("3b54");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("955515ea",e,!0,{sourceMap:!1,shadowMode:!1})},e388:function(t,i,n){"use strict";var e=n("aec4"),o=n.n(e);o.a}}]);