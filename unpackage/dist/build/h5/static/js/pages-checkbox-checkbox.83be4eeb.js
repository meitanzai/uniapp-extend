(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-checkbox-checkbox"],{"062e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-77a2e765]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;margin-right:%?-20?%;font-size:%?28?%;text-align:center}.container>uni-view[data-v-77a2e765]{margin-bottom:%?20?%;padding-right:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.container.col_1>uni-view[data-v-77a2e765]{width:100%}.container.col_2>uni-view[data-v-77a2e765]{width:50%}.container.col_3>uni-view[data-v-77a2e765]{width:33.3333333%}.container .item[data-v-77a2e765]{line-height:%?68?%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;border:#e5e5e5 solid 1px;background-color:#fff;color:#333;position:relative;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.container .item.active[data-v-77a2e765]{background-color:#f5fff9;color:#42b983;border:#42b983 solid 1px}.container .item.active[data-v-77a2e765]:before{content:"";display:block;width:20px;height:20px;background-color:#42b983;position:absolute;right:-1px;bottom:-1px;z-index:1;-webkit-clip-path:polygon(100% 0,0 100%,100% 100%);clip-path:polygon(100% 0,0 100%,100% 100%)}.container .item.active[data-v-77a2e765]:after{content:"";display:block;width:4px;height:8px;border-right:#fff solid 2px;border-bottom:#fff solid 2px;-webkit-transform:rotate(25deg);-ms-transform:rotate(25deg);transform:rotate(25deg);position:absolute;right:2px;bottom:3px;z-index:2}',""])},1188:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("759d")),r={components:{"helang-checkbox":a.default},data:function(){return{index:-1,array:["复选框 - 三栏排序","复选框 - 二栏排序","复选框 - 一栏排序","复选框 - 流式排序","单选框 - 三栏排序"]}},onLoad:function(){},methods:{creatorList:function(){for(var t=[],e=1;e<16;e++)t.push({id:e,text:"第".concat(e,"项")});return t},bindPickerChange:function(t){var e=t.detail.value;this.index=e,4!=e?this.$refs.checkbox.set({type:"checkbox",column:3-e,list:this.creatorList()}):this.$refs.checkbox.set({type:"radio",index:2,column:3,list:this.creatorList()})},getData:function(){var t=this.$refs.checkbox.get();uni.showToast({title:"在控制台看数据",icon:"none",duration:1e3,mask:!1,success:function(){console.log(t)}})}}};e.default=r},"13de":function(t,e,n){"use strict";n.r(e);var i=n("1188"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"1bcf":function(t,e,n){var i=n("062e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0d2a757c",i,!0,{sourceMap:!1,shadowMode:!1})},"2c55":function(t,e,n){"use strict";n.r(e);var i=n("9a85"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"4f68":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.box[data-v-65f29c3c]{padding:%?10?% %?20?%}',""])},"759d":function(t,e,n){"use strict";n.r(e);var i=n("d6b7"),a=n("2c55");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("b9f1");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"77a2e765",null);e["default"]=c.exports},9242:function(t,e,n){"use strict";n.r(e);var i=n("d683"),a=n("13de");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("a768");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"65f29c3c",null);e["default"]=c.exports},"9a85":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a"),n("c5f6");var i={data:function(){return{list:[],index:-1,type:"checkbox",column:""}},methods:{change:function(t){var e=Number(t.currentTarget.dataset.i);"radio"!=this.type?this.list[e].checked?this.$set(this.list[e],"checked",!1):this.$set(this.list[e],"checked",!0):this.index=e},set:function(t){var e="checkbox",n=-1,i=["","col_1","col_2","col_3"];"radio"==t.type&&(e="radio",n=t.index>=0?t.index:-1),this.column=t.column in i?i[t.column]:"",this.type=e,this.index=n,this.list=t.list},get:function(){if("radio"==this.type)return this.index>=0?this.list[this.index]:null;var t=[];return this.list.forEach(function(e,n){e.checked&&t.push(e)}),t.length>0?t:null}}};e.default=i},a768:function(t,e,n){"use strict";var i=n("ff73"),a=n.n(i);a.a},b9f1:function(t,e,n){"use strict";var i=n("1bcf"),a=n.n(i);a.a},d683:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[n("v-uni-picker",{attrs:{value:0,range:t.array},on:{change:function(e){e=t.$handleEvent(e),t.bindPickerChange(e)}}},[n("v-uni-button",{attrs:{type:"default"}},[t._v(t._s(t.index>=0?t.array[t.index]:"请选择示例类型"))])],1),t.index>=0?n("v-uni-button",{staticStyle:{"margin-top":"20rpx"},attrs:{type:"default"},on:{click:function(e){e=t.$handleEvent(e),t.getData(e)}}},[t._v("获取已选择数据")]):t._e()],1),n("helang-checkbox",{ref:"checkbox"})],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d6b7:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container",class:t.column},t._l(t.list,function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"item",class:{active:"radio"==t.type&&t.index==i||"checkbox"==t.type&&e.checked},attrs:{"data-i":i},on:{click:function(e){e=t.$handleEvent(e),t.change(e)}}},[t._v(t._s(e.text))])],1)}),1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},ff73:function(t,e,n){var i=n("4f68");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("44500b1b",i,!0,{sourceMap:!1,shadowMode:!1})}}]);