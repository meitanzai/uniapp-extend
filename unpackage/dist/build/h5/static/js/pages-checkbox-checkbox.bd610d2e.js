(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-checkbox-checkbox"],{"13de":function(t,e,n){"use strict";n.r(e);var i=n("a1d7"),c=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=c.a},"2c55":function(t,e,n){"use strict";n.r(e);var i=n("b229"),c=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=c.a},"5b92":function(t,e,n){"use strict";var i=n("ea57"),c=n.n(i);c.a},"6b96":function(t,e,n){var i=n("c42e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("e19798ea",i,!0,{sourceMap:!1,shadowMode:!1})},"759d":function(t,e,n){"use strict";n.r(e);var i=n("e098"),c=n("2c55");for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);n("5b92");var o=n("2877"),a=Object(o["a"])(c["default"],i["a"],i["b"],!1,null,"171628fb",null);e["default"]=a.exports},8689:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-171628fb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;margin-right:%?-20?%;font-size:%?28?%;text-align:center}.container>uni-view[data-v-171628fb]{margin-bottom:%?20?%;padding-right:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.container.col_1>uni-view[data-v-171628fb]{width:100%}.container.col_2>uni-view[data-v-171628fb]{width:50%}.container.col_3>uni-view[data-v-171628fb]{width:33.3333333%}.container .item[data-v-171628fb]{line-height:%?68?%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;border:#e5e5e5 solid 1px;background-color:#fff;color:#333;position:relative;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.container .item.active[data-v-171628fb]{background-color:#f5fff9;color:#42b983;border:#42b983 solid 1px}.container .item.active[data-v-171628fb]:before{content:"";display:block;width:20px;height:20px;background-color:#42b983;position:absolute;right:-1px;bottom:-1px;z-index:1;-webkit-clip-path:polygon(100% 0,0 100%,100% 100%);clip-path:polygon(100% 0,0 100%,100% 100%)}.container .item.active[data-v-171628fb]:after{content:"";display:block;width:4px;height:8px;border-right:#fff solid 2px;border-bottom:#fff solid 2px;-webkit-transform:rotate(25deg);-ms-transform:rotate(25deg);transform:rotate(25deg);position:absolute;right:2px;bottom:3px;z-index:2}',""])},9242:function(t,e,n){"use strict";n.r(e);var i=n("cd7c"),c=n("13de");for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);n("c8c1");var o=n("2877"),a=Object(o["a"])(c["default"],i["a"],i["b"],!1,null,"4cdf3ca4",null);e["default"]=a.exports},a1d7:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a");var c=i(n("e814")),r=i(n("759d")),o={components:{"helang-checkbox":r.default},data:function(){return{pickerIndex:-1,array:["复选框 - 三栏排序","复选框 - 流式排序","单选框 - 二栏排序","单选框 - 三栏排序"]}},mounted:function(){var t=this;this.$nextTick(function(){t.selectDemoType(1)})},methods:{creatorList:function(){for(var t=[],e=1;e<16;e++)t.push({id:e,text:"第".concat(e,"项")});return t},onSelectType:function(t){var e=t.currentTarget.dataset.index;e=(0,c.default)(e,10),this.selectDemoType(e)},selectDemoType:function(t){switch(t){case 0:this.$refs.checkbox.set({type:"checkbox",column:3,list:this.creatorList()});break;case 1:var e=this.creatorList();e.forEach(function(t,n){/^[1|4|6|7|8|9]$/.test(n)&&(e[n].checked=!0)}),this.$refs.checkbox.set({type:"checkbox",list:e});break;case 2:this.$refs.checkbox.set({type:"radio",index:2,column:2,list:this.creatorList()});break;case 3:this.$refs.checkbox.set({type:"radio",column:3,list:this.creatorList()});break;default:}this.pickerIndex=t},getData:function(){var t=this.$refs.checkbox.get();uni.showToast({title:"在控制台看数据",icon:"none",duration:1e3,mask:!1,success:function(){console.log(t)}})},onChange:function(t){console.log(t)},check:function(){this.$refs.checkbox.checkAll(),this.getData()},cancel:function(){this.$refs.checkbox.cancelAll(),this.getData()},invert:function(){this.$refs.checkbox.invertAll(),this.getData()}}};e.default=o},b229:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a"),n("c5f6");var i={data:function(){return{list:[],index:-1,type:"checkbox",column:""}},methods:{change:function(t){var e=this,n=Number(t.currentTarget.dataset.i);if("radio"==this.type)return this.index=n,void this.$nextTick(function(){e.$emit("change",e.get())});this.list[n].checked?this.$set(this.list[n],"checked",!1):this.$set(this.list[n],"checked",!0),this.$nextTick(function(){e.$emit("change",e.get())})},set:function(t){var e="checkbox",n=-1,i=["","col_1","col_2","col_3"];"radio"==t.type&&(e="radio",n=t.index>=0?t.index:-1),this.column=t.column in i?i[t.column]:"",this.type=e,this.index=n,this.list=t.list},get:function(){if("radio"==this.type)return this.index>=0?this.list[this.index]:null;var t=[];return this.list.forEach(function(e,n){1==e.checked&&t.push(e)}),t.length>0?t:null},checkAll:function(){var t=this;if("radio"==this.type)return null;this.list.forEach(function(e,n){t.$set(t.list[n],"checked",!0)})},cancelAll:function(){var t=this;if("radio"==this.type)return this.index=-1,null;this.list.forEach(function(e,n){t.$set(t.list[n],"checked",!1)})},invertAll:function(){var t=this;if("radio"==this.type)return this.index=-1,null;this.list.forEach(function(e,n){t.$set(t.list[n],"checked",!e.checked)})}}};e.default=i},c42e:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.box[data-v-4cdf3ca4]{padding:%?10?% %?20?%}',""])},c8c1:function(t,e,n){"use strict";var i=n("6b96"),c=n.n(i);c.a},cd7c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[n("v-uni-view",[n("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[t._v("选择示例类型：")]),n("v-uni-view",t._l(t.array,function(e,i){return n("v-uni-button",{key:i,staticStyle:{"margin-right":"10rpx"},attrs:{type:t.pickerIndex==i?"primary":"default",size:"mini","data-index":i},on:{click:function(e){e=t.$handleEvent(e),t.onSelectType(e)}}},[t._v(t._s(e))])}),1)],1),t.pickerIndex>=0?n("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[n("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[t._v("操作：")]),n("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.getData(e)}}},[t._v("获取已选数据")]),n("v-uni-button",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"default",size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.check(e)}}},[t._v("全选")]),n("v-uni-button",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"default",size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.invert(e)}}},[t._v("反选")]),n("v-uni-button",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"default",size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.cancel(e)}}},[t._v("取消")]),n("v-uni-view",{staticStyle:{"font-size":"28rpx","margin-top":"20rpx","padding-top":"20rpx","border-top":"#e5e5e5 solid 1px"}},[t._v("组件演示：")])],1):t._e()],1),n("helang-checkbox",{ref:"checkbox",on:{change:function(e){e=t.$handleEvent(e),t.onChange(e)}}})],1)},c=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c})},e098:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container",class:t.column},t._l(t.list,function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"item",class:{active:"radio"==t.type&&t.index==i||"checkbox"==t.type&&e.checked},attrs:{"data-i":i},on:{click:function(e){e=t.$handleEvent(e),t.change(e)}}},[t._v(t._s(e.text))])],1)}),1)},c=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c})},ea57:function(t,e,n){var i=n("8689");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("2c8661b8",i,!0,{sourceMap:!1,shadowMode:!1})}}]);