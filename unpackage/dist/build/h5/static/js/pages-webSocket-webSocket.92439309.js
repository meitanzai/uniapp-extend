(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-webSocket-webSocket"],{"0e97":function(t,n,e){var i=e("e44d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("3af3cc9d",i,!0,{sourceMap:!1,shadowMode:!1})},"2a4d":function(t,n,e){"use strict";e.r(n);var i=e("cf70"),o=e("6650");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("6fe4");var a=e("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"0e721e71",null);n["default"]=u.exports},"41b6":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a481");var o=i(e("795b")),s=i(e("56d3")),a={data:function(){return{msgList:[],scrollHeight:"500px",isData:!1}},onLoad:function(){var t=this;s.default.data(function(n){t.msgList.push(n)})},mounted:function(){var t=this;this.$nextTick(function(){new o.default(function(t,n){uni.getSystemInfo({success:function(n){t(n)}})}).then(function(n){var e=uni.createSelectorQuery().select("#box");e.fields({size:!0},function(e){t.scrollHeight="".concat(n.windowHeight-e.height,"px")}).exec()}),/https/.test(window.location.protocol)&&uni.showModal({title:"河浪提醒",content:"因测试接口是ws的原因，请切换地址是http的地址查看功能演示",showCancel:!1,confirmText:"立即切换",success:function(){var t=window.location.href;t=t.replace("https:","http:"),window.open(t)}})})},methods:{start:function(){s.default.start()},send:function(){s.default.send("当前时间是".concat((new Date).getTime()))},off:function(){s.default.off()}}};n.default=a},6650:function(t,n,e){"use strict";e.r(n);var i=e("41b6"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a},"6fe4":function(t,n,e){"use strict";var i=e("0e97"),o=e.n(i);o.a},cf70:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"button",attrs:{id:"box"}},[e("v-uni-button",{attrs:{size:"mini",type:"warn"},on:{click:function(n){n=t.$handleEvent(n),t.start(n)}}},[t._v("打开连接")]),e("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){n=t.$handleEvent(n),t.send(n)}}},[t._v("发送当前时间")]),e("v-uni-button",{attrs:{size:"mini",type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.off(n)}}},[t._v("关闭连接")])],1),e("v-uni-view",[e("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},t._l(t.msgList,function(n,i){return e("v-uni-view",{key:i,staticClass:"item"},[t._v("第"+t._s(i+1)+"条消息："+t._s(n))])}),1)],1)],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},e44d:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.button[data-v-0e721e71]{padding:%?20?%}.button uni-button[data-v-0e721e71]{margin:0 %?10?%}.item[data-v-0e721e71]{padding:%?20?%}',""])}}]);