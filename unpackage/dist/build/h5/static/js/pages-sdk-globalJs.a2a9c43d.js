(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sdk-globalJs"],{"2a56":function(n,t,o){"use strict";o.r(t);var a=o("5670"),i=o("3e70");for(var e in i)"default"!==e&&function(n){o.d(t,n,function(){return i[n]})}(e);o("8d80");var s,u=o("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"eb3c3356",null,!1,a["a"],s);t["default"]=c.exports},"3e70":function(n,t,o){"use strict";o.r(t);var a=o("fccf"),i=o.n(a);for(var e in a)"default"!==e&&function(n){o.d(t,n,function(){return a[n]})}(e);t["default"]=i.a},5670:function(n,t,o){"use strict";var a,i=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("v-uni-view",{staticClass:"container"},[o("v-uni-view",[o("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.showToast.apply(void 0,arguments)}}},[n._v("显示提示框")])],1),o("v-uni-view",[o("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.showLoad.apply(void 0,arguments)}}},[n._v("显示加载")])],1),o("v-uni-view",[o("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.isEmail.apply(void 0,arguments)}}},[n._v("常用正则校验")])],1),o("v-uni-view",[o("v-uni-button",{attrs:{type:"default","data-name":"helang","data-age":"24"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.getData.apply(void 0,arguments)}}},[n._v("获取自定义属性")])],1),o("v-uni-view",{attrs:{id:"helang-el"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.getRect.apply(void 0,arguments)}}},[o("v-uni-button",{attrs:{type:"default"}},[n._v("获取尺寸和位置")])],1),o("v-uni-view",[o("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.request.apply(void 0,arguments)}}},[n._v("发送请求")])],1),o("v-uni-view",[o("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.upload.apply(void 0,arguments)}}},[n._v("上传文件")])],1)],1)},e=[];o.d(t,"b",function(){return i}),o.d(t,"c",function(){return e}),o.d(t,"a",function(){return a})},5946:function(n,t,o){t=n.exports=o("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-eb3c3356]{padding:%?50?%}.container>uni-view[data-v-eb3c3356]{margin-bottom:%?30?%}',""])},"8d80":function(n,t,o){"use strict";var a=o("ba0a"),i=o.n(a);i.a},ba0a:function(n,t,o){var a=o("5946");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=o("4f06").default;i("bce553e6",a,!0,{sourceMap:!1,shadowMode:!1})},fccf:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},onLoad:function(){console.log("统一资源标识符："),console.log(this.iGlobal.URI)},methods:{showLoad:function(){this.iGlobal.showLoading(),setTimeout(function(){uni.hideLoading()},3e3)},showToast:function(){this.iGlobal.showToast("登录成功","success")},isEmail:function(){this.iGlobal.regExps.email.test("1846492969@qq.com")?this.iGlobal.showToast("这是一个合法的邮箱"):this.iGlobal.showToast("这个邮箱不合法")},getData:function(n){var t=this.iGlobal.getData(n,"name");this.iGlobal.showToast("name : ".concat(t))},getRect:function(){var n=this;this.iGlobal.getRect("#helang-el").then(function(t){n.iGlobal.showToast("浏览器控制台查看结果"),console.log(t)})},request:function(){var n=this;this.iGlobal.showLoading(),this.iGlobal.request({url:"https://api.apiopen.top/getWangYiNews",data:{page:1,count:10},method:"POST"}).then(function(t){uni.hideLoading(),n.iGlobal.showToast("成功,看控制台","success"),console.log(t)}).catch(function(n){console.log("错误")})},upload:function(){this.iGlobal.showToast("文件上传，可参照 请求 接口自行添加")}}};t.default=a}}]);