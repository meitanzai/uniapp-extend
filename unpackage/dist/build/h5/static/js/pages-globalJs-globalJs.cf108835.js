(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-globalJs-globalJs"],{"25fb":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{}},onLoad:function(){console.log("统一资源标识符："),console.log(this.iGlobal.URI)},methods:{showLoad:function(){this.iGlobal.showLoading(),setTimeout(function(){uni.hideLoading()},3e3)},showToast:function(){this.iGlobal.showToast("登录成功","success")},isEmail:function(){this.iGlobal.regExps.email.test("1846492969@qq.com")?this.iGlobal.showToast("这是一个合法的邮箱"):this.iGlobal.showToast("这个邮箱不合法")},getData:function(t){var n=this.iGlobal.getData(t,"name");this.iGlobal.showToast("name : ".concat(n))},getRect:function(){var t=this;this.iGlobal.getRect("#helang-el").then(function(n){t.iGlobal.showToast("浏览器控制台查看结果"),console.log(n)})},request:function(){var t=this;this.iGlobal.showLoading(),this.iGlobal.request({url:"https://api.apiopen.top/getWangYiNews",data:{page:1,count:10},method:"POST"}).then(function(n){uni.hideLoading(),t.iGlobal.showToast("成功,看控制台","success"),console.log(n)}).catch(function(t){console.log("错误")})},upload:function(){this.iGlobal.showToast("文件上传，可参照 请求 接口自行添加")}}};n.default=o},"3c72":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-1aa5eb7c]{padding:%?50?%}.container>uni-view[data-v-1aa5eb7c]{margin-bottom:%?30?%}',""])},"747d":function(t,n,a){"use strict";a.r(n);var o=a("a032"),i=a("7956");for(var e in i)"default"!==e&&function(t){a.d(n,t,function(){return i[t]})}(e);a("8bd1");var s=a("2877"),u=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"1aa5eb7c",null);n["default"]=u.exports},7956:function(t,n,a){"use strict";a.r(n);var o=a("25fb"),i=a.n(o);for(var e in o)"default"!==e&&function(t){a.d(n,t,function(){return o[t]})}(e);n["default"]=i.a},"8bd1":function(t,n,a){"use strict";var o=a("add0"),i=a.n(o);i.a},a032:function(t,n,a){"use strict";var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.showToast(n)}}},[t._v("显示提示框")])],1),a("v-uni-view",[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.showLoad(n)}}},[t._v("显示加载")])],1),a("v-uni-view",[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.isEmail(n)}}},[t._v("常用正则校验")])],1),a("v-uni-view",[a("v-uni-button",{attrs:{type:"default","data-name":"helang","data-age":"24"},on:{click:function(n){n=t.$handleEvent(n),t.getData(n)}}},[t._v("获取自定义属性")])],1),a("v-uni-view",{attrs:{id:"helang-el"},on:{click:function(n){n=t.$handleEvent(n),t.getRect(n)}}},[a("v-uni-button",{attrs:{type:"default"}},[t._v("获取尺寸和位置")])],1),a("v-uni-view",[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.request(n)}}},[t._v("发送请求")])],1),a("v-uni-view",[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.upload(n)}}},[t._v("上传文件")])],1)],1)},i=[];a.d(n,"a",function(){return o}),a.d(n,"b",function(){return i})},add0:function(t,n,a){var o=a("3c72");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("0cd4889a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);