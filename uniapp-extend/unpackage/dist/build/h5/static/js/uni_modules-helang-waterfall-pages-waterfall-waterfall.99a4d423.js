(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-helang-waterfall-pages-waterfall-waterfall"],{"0b91":function(t,e,n){"use strict";var a=n("4346"),r=n.n(a);r.a},"1e47":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.waterfall-item[data-v-2c19ea0a]{padding:%?16?%;background-color:#fff;border-radius:4px;font-size:%?28?%;color:#666;margin-bottom:%?20?%}.waterfall-item uni-image[data-v-2c19ea0a]{display:block;width:100%;height:%?350?%}.waterfall-item .content[data-v-2c19ea0a]{margin-top:%?16?%}.waterfall-item .content .money[data-v-2c19ea0a]{color:#fa3534;margin-top:%?8?%}.waterfall-item .content .label[data-v-2c19ea0a]{background-color:#fa3534;color:#fff;font-size:%?20?%;padding:%?4?% %?16?%;border-radius:%?20?%}.waterfall-item .content .shop-name[data-v-2c19ea0a]{font-size:%?20?%;color:#999}',""]),t.exports=e},2909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var a=l(n("6005")),r=l(n("db90")),i=l(n("06c5")),o=l(n("3427"));function l(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,a.default)(t)||(0,r.default)(t)||(0,i.default)(t)||(0,o.default)()}},3427:function(t,e,n){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},4346:function(t,e,n){var a=n("de2b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("7a0829d6",a,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var a=r(n("6b75"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t))return(0,a.default)(t)}},"65a4":function(t,e,n){"use strict";var a=n("b39e"),r=n.n(a);r.a},"6d29":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("2909")),i=a(n("7f01")),o={components:{"helang-waterfall":i.default},data:function(){return{leftHeight:0,rightHeight:0,leftList:[],rightList:[],ajax:{load:!0,loadTxt:"",rows:10,page:1}}},onReady:function(){this.getList()},onReachBottom:function(){this.getList()},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.ajax.page=1,t.leftHeight=0,t.rightHeight=0,t.ajax.load=!0,t.getList()}),800)},methods:{onHeight:function(t,e){"left"==e?this.leftHeight+=t:this.rightHeight+=t},onClick:function(t,e){console.log(t,e),"left"==e?console.log(this.leftList[t]):console.log(this.rightList[t]);var n={left:"左",right:"右"};uni.showToast({title:"".concat(n[e],"侧列表第").concat(t+1,"个被点击"),icon:"none"})},getList:function(){var t=this;this.ajax.load&&(this.ajax.load=!1,this.ajax.loadTxt="加载中",setTimeout((function(){for(var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;return Math.floor(Math.random()*e)+t},n=["桃花坞里桃花庵，桃花庵里桃花仙；","桃花仙人种桃树，又摘桃花卖酒钱。","酒醒只在花前坐，酒醉还来花下眠；半醒半醉日复日，花落花开年复年。","但愿老死花酒间，不愿鞠躬车马前；","车尘马足富者趣，酒盏花枝贫者缘。若将富贵比贫贱，","一在平地一在天；若将贫贱比车马，他得驱驰我得闲。","别人笑我太疯癫，我笑他人看不穿；不见五陵豪杰墓，无花无酒锄作田。"],a=[],r=0;r<10;r++)a.push({url:"/uni_modules/helang-waterfall/static/waterfall/".concat(e(0,3),".jpg"),title:n[e(0,n.length)],money:e(9,9999),label:"官方自营",shop:"唐诗三百首旗舰店"});t.addList(a)}),1e3))},addList:function(t){if(console.log(t),!t||t.length<1)this.ajax.loadTxt="没有更多了";else{var e=this.leftHeight-this.rightHeight,n=0,a=e>0?1:0,i=[],o=[],l=function(t){return e>=600&&t<3?(n=1,"right"):e<=-600&&t<3?(n=-1,"left"):e>=350&&t<2?"right":e<=-350&&t<2?(n=-1,"left"):(a+n)%2==0?"left":"right"};t.forEach((function(t,e){"left"==l(e)?i.push(t):o.push(t),a++})),1==this.ajax.page?(this.leftList=i,this.rightList=o,uni.stopPullDownRefresh()):(this.leftList=[].concat((0,r.default)(this.leftList),(0,r.default)(i)),this.rightList=[].concat((0,r.default)(this.rightList),(0,r.default)(o))),this.ajax.load=!0,this.ajax.loadTxt="上拉加载更多",this.ajax.page++}}}};e.default=o},"75ac":function(t,e,n){var a=n("faf7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("6c57db16",a,!0,{sourceMap:!1,shadowMode:!1})},"7f01":function(t,e,n){"use strict";n.r(e);var a=n("cdc4"),r=n("ebb7");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("65a4");var o,l=n("f0c5"),s=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,"2c19ea0a",null,!1,a["a"],o);e["default"]=s.exports},a069:function(t,e,n){"use strict";n.r(e);var a=n("fd5d"),r=n("ed98");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("0b91"),n("a2a3");var o,l=n("f0c5"),s=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,"414edfbf",null,!1,a["a"],o);e["default"]=s.exports},a2a3:function(t,e,n){"use strict";var a=n("75ac"),r=n.n(a);r.a},b39e:function(t,e,n){var a=n("1e47");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("24fa3932",a,!0,{sourceMap:!1,shadowMode:!1})},bdc4:function(t,e,n){"use strict";n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"helang-waterfall",props:{params:{type:Object,default:function(){return{}}},tag:{type:String|Number,default:""},index:{type:Number,default:-1}},data:function(){return{}},methods:{emitHeight:function(t){var e=this,n=uni.createSelectorQuery().in(this);n.select(".waterfall-item").boundingClientRect((function(t){var n=Math.floor(t.height);e.$emit("height",n,e.$props.tag)})).exec()},onTap:function(){this.$emit("click",this.$props.index,this.$props.tag)}}};e.default=a},cdc4:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"waterfall-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.params.url,mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.emitHeight.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.emitHeight.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[t._v(t._s(t.params.title))]),n("v-uni-view",{staticClass:"money"},[t._v(t._s(t.params.money)+"元")]),n("v-uni-view",{staticStyle:{margin:"0 0 8rpx 0"}},[n("v-uni-text",{staticClass:"label"},[t._v(t._s(t.params.label))])],1),n("v-uni-view",{staticClass:"shop-name"},[t._v(t._s(t.params.shop))])],1)],1)},i=[]},db90:function(t,e,n){"use strict";function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},de2b:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-414edfbf]{background-color:#f3f3f3}body.?%PAGE?%[data-v-414edfbf]{background-color:#f3f3f3}',""]),t.exports=e},ebb7:function(t,e,n){"use strict";n.r(e);var a=n("bdc4"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},ed98:function(t,e,n){"use strict";n.r(e);var a=n("6d29"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},faf7:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.waterfall-box[data-v-414edfbf]{padding:%?20?% %?10?%;box-sizing:border-box}.waterfall-box > uni-view[data-v-414edfbf]{padding:0 %?10?%}.h-flex-x[data-v-414edfbf]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start}.h-flex-x.h-flex-2 > uni-view[data-v-414edfbf]{width:50%}.load-txt[data-v-414edfbf]{padding:0 0 %?20?% 0;text-align:center;color:#999;font-size:%?24?%}',""]),t.exports=e},fd5d:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={helangWaterfall:n("7f01").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"waterfall-box h-flex-x h-flex-2"},[n("v-uni-view",t._l(t.leftList,(function(e,a){return n("helang-waterfall",{key:a,attrs:{params:e,tag:"left",index:a},on:{height:function(e){arguments[0]=e=t.$handleEvent(e),t.onHeight.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})})),1),n("v-uni-view",t._l(t.rightList,(function(e,a){return n("helang-waterfall",{key:a,attrs:{params:e,tag:"right",index:a},on:{height:function(e){arguments[0]=e=t.$handleEvent(e),t.onHeight.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})})),1)],1),n("v-uni-view",{staticClass:"load-txt"},[t._v(t._s(t.ajax.loadTxt))])],1)},i=[]}}]);