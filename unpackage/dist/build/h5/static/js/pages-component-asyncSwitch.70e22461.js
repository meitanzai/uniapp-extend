(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-asyncSwitch"],{2759:function(n,e,t){"use strict";var i=t("9e92"),a=t.n(i);a.a},2983:function(n,e,t){var i=t("5f4b");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("4f06").default;a("2ead498e",i,!0,{sourceMap:!1,shadowMode:!1})},"48aa":function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("v-uni-view",{staticClass:"title"},[n._v("async-switch 组件示例")]),t("v-uni-view",{staticClass:"item"},[t("v-uni-view",[n._v("默认选中：")]),t("v-uni-view",[t("async-switch",{attrs:{checked:n.checked1},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.change1.apply(void 0,arguments)}}})],1)],1),t("v-uni-view",{staticClass:"item"},[t("v-uni-view",[n._v("默认未选中：")]),t("v-uni-view",[t("async-switch",{attrs:{checked:n.checked2},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.change2.apply(void 0,arguments)}}})],1)],1),t("v-uni-view",{staticClass:"item"},[t("v-uni-view",[n._v("默认禁用：")]),t("v-uni-view",[t("async-switch",{attrs:{checked:n.checked3,disabled:n.disabled3},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.change3.apply(void 0,arguments)}}})],1),t("v-uni-view",{staticStyle:{"margin-left":"20upx"}},[t("v-uni-button",{attrs:{type:n.disabled3?"primary":"warn",size:"mini"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.changeDisabled.apply(void 0,arguments)}}},[n._v(n._s(n.disabled3?"取消禁用":"启用禁用"))])],1)],1),t("v-uni-view",{staticClass:"copy"},[t("v-uni-view",[n._v("本demo由 setTimeout 模拟异步过程")]),t("v-uni-view",[n._v("uni-app 插件分享")]),t("v-uni-view",[n._v("2019 helang.love@qq.com")])],1)],1)},c=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return i}))},"5f4b":function(n,e,t){var i=t("24fb");e=i(!1),e.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.async-switch[data-v-2d795492]{display:inline-block;position:relative}.async-switch > uni-switch[data-v-2d795492]{margin:0}.async-switch > uni-button[data-v-2d795492]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}',""]),n.exports=e},"8ae3":function(n,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(t("ac91")),c={components:{"async-switch":a.default},data:function(){return{checked1:!0,checked2:!1,checked3:!0,disabled3:!0}},methods:{change1:function(){var n=this;uni.showLoading({title:"正在请求",mask:!0}),setTimeout((function(){uni.hideLoading(),n.checked1=!n.checked1}),1e3)},change2:function(){var n=this;uni.showLoading({title:"正在请求",mask:!0}),setTimeout((function(){uni.hideLoading(),n.checked2=!n.checked2}),1e3)},change3:function(){var n=this;uni.showLoading({title:"正在请求",mask:!0}),setTimeout((function(){uni.hideLoading(),n.checked3=!n.checked3}),1e3)},changeDisabled:function(){this.disabled3=!this.disabled3}}};e.default=c},"8f12":function(n,e,t){"use strict";t.r(e);var i=t("8ae3"),a=t.n(i);for(var c in i)"default"!==c&&function(n){t.d(e,n,(function(){return i[n]}))}(c);e["default"]=a.a},"9e92":function(n,e,t){var i=t("cdd8");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("4f06").default;a("ff3d3ed0",i,!0,{sourceMap:!1,shadowMode:!1})},a645:function(n,e,t){"use strict";var i=t("2983"),a=t.n(i);a.a},ac91:function(n,e,t){"use strict";t.r(e);var i=t("d26a"),a=t("ad1f");for(var c in a)"default"!==c&&function(n){t.d(e,n,(function(){return a[n]}))}(c);t("a645");var o,s=t("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2d795492",null,!1,i["a"],o);e["default"]=r.exports},ad1f:function(n,e,t){"use strict";t.r(e);var i=t("ba71"),a=t.n(i);for(var c in i)"default"!==c&&function(n){t.d(e,n,(function(){return i[n]}))}(c);e["default"]=a.a},ba71:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"async-switch",props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},color:{type:String,default:"#007aff"},disabledColor:{type:String,default:"#e5e5e5"}},data:function(){return{}},computed:{changeColor:function(){return this.disabled?this.disabledColor:this.color}},methods:{onChange:function(){this.disabled||this.$emit("change")}}};e.default=i},cdd8:function(n,e,t){var i=t("24fb");e=i(!1),e.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.title[data-v-2a284fa6]{text-align:center;padding:%?50?% 0;color:#333}.copy[data-v-2a284fa6]{font-size:%?28?%;text-align:center;padding:%?20?%;border:#ed4000 solid 1px;margin:%?30?% %?50?% 0 %?50?%;border-radius:4px;color:#ed4000}.item[data-v-2a284fa6]{padding:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;font-size:%?28?%;color:#333}.item > uni-view[data-v-2a284fa6]:first-child{width:%?200?%}',""]),n.exports=e},d26a:function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"async-switch"},[t("v-uni-switch",{attrs:{checked:n.checked,disabled:n.disabled,color:n.changeColor}}),t("v-uni-button",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.onChange.apply(void 0,arguments)}}})],1)},c=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return i}))},e69d:function(n,e,t){"use strict";t.r(e);var i=t("48aa"),a=t("8f12");for(var c in a)"default"!==c&&function(n){t.d(e,n,(function(){return a[n]}))}(c);t("2759");var o,s=t("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2a284fa6",null,!1,i["a"],o);e["default"]=r.exports}}]);