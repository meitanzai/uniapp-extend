(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-checkbox"],{"0704":function(t,e,n){"use strict";n("4160"),n("a9e3"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{list:[],index:-1,type:"checkbox",column:""}},methods:{change:function(t){var e=this,n=Number(t.currentTarget.dataset.i);if("radio"==this.type)return this.index=n,void this.$nextTick((function(){e.$emit("change",e.get())}));this.list[n].checked?this.$set(this.list[n],"checked",!1):this.$set(this.list[n],"checked",!0),this.$nextTick((function(){e.$emit("change",e.get())}))},set:function(t){var e="checkbox",n=-1,i=["","col_1","col_2","col_3"];"radio"==t.type&&(e="radio",n=t.index>=0?t.index:-1),this.column=t.column in i?i[t.column]:"",this.type=e,this.index=n,this.list=t.list},get:function(){if("radio"==this.type)return this.index>=0?this.list[this.index]:null;var t=[];return this.list.forEach((function(e,n){1==e.checked&&t.push(e)})),t.length>0?t:null},checkAll:function(){var t=this;if("radio"==this.type)return null;this.list.forEach((function(e,n){t.$set(t.list[n],"checked",!0)}))},cancelAll:function(){var t=this;if("radio"==this.type)return this.index=-1,null;this.list.forEach((function(e,n){t.$set(t.list[n],"checked",!1)}))},invertAll:function(){var t=this;if("radio"==this.type)return this.index=-1,null;this.list.forEach((function(e,n){t.$set(t.list[n],"checked",!e.checked)}))}}};e.default=i},"2c55":function(t,e,n){"use strict";n.r(e);var i=n("0704"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},"759d":function(t,e,n){"use strict";n.r(e);var i=n("aa0e"),c=n("2c55");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("fb16");var o,r=n("f0c5"),s=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"86d6807c",null,!1,i["a"],o);e["default"]=s.exports},"7def":function(t,e,n){"use strict";var i=n("ee27");n("4160"),n("e25e"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=i(n("759d")),a={components:{"helang-checkbox":c.default},data:function(){return{pickerIndex:-1,array:["复选框 - 三栏排序","复选框 - 流式排序","单选框 - 二栏排序","单选框 - 三栏排序"]}},mounted:function(){var t=this;this.$nextTick((function(){t.selectDemoType(1)}))},methods:{creatorList:function(){for(var t=[],e=1;e<16;e++)t.push({id:e,text:"第".concat(e,"项")});return t},onSelectType:function(t){var e=t.currentTarget.dataset.index;e=parseInt(e,10),this.selectDemoType(e)},selectDemoType:function(t){switch(t){case 0:this.$refs.checkbox.set({type:"checkbox",column:3,list:this.creatorList()});break;case 1:var e=this.creatorList();e.forEach((function(t,n){/^[1|4|6|7|8|9]$/.test(n)&&(e[n].checked=!0)})),this.$refs.checkbox.set({type:"checkbox",list:e});break;case 2:this.$refs.checkbox.set({type:"radio",index:2,column:2,list:this.creatorList()});break;case 3:this.$refs.checkbox.set({type:"radio",column:3,list:this.creatorList()});break;default:}this.pickerIndex=t},getData:function(){var t=this.$refs.checkbox.get();uni.showToast({title:"在控制台看数据",icon:"none",duration:1e3,mask:!1,success:function(){console.log(t)}})},onChange:function(t){console.log(t)},check:function(){this.$refs.checkbox.checkAll(),this.getData()},cancel:function(){this.$refs.checkbox.cancelAll(),this.getData()},invert:function(){this.$refs.checkbox.invertAll(),this.getData()}}};e.default=a},"7f08":function(t,e,n){"use strict";n.r(e);var i=n("dfe2"),c=n("d5b0");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("daca");var o,r=n("f0c5"),s=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"d4741d8a",null,!1,i["a"],o);e["default"]=s.exports},aa0e:function(t,e,n){"use strict";var i,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container",class:t.column},t._l(t.list,(function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"item",class:{active:"radio"==t.type&&t.index==i||"checkbox"==t.type&&e.checked},attrs:{"data-i":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._v(t._s(e.text))])],1)})),1)},a=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},b1a8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.box[data-v-d4741d8a]{padding:%?10?% %?20?%}',""]),t.exports=e},d5b0:function(t,e,n){"use strict";n.r(e);var i=n("7def"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},d6b2:function(t,e,n){var i=n("b1a8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("b3e52d4a",i,!0,{sourceMap:!1,shadowMode:!1})},d749:function(t,e,n){var i=n("ddcd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("e585586c",i,!0,{sourceMap:!1,shadowMode:!1})},daca:function(t,e,n){"use strict";var i=n("d6b2"),c=n.n(i);c.a},ddcd:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-86d6807c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;margin-right:%?-20?%;font-size:%?28?%;text-align:center}.container > uni-view[data-v-86d6807c]{margin-bottom:%?20?%;padding-right:%?20?%;box-sizing:border-box}.container.col_1 > uni-view[data-v-86d6807c]{width:100%}.container.col_2 > uni-view[data-v-86d6807c]{width:50%}.container.col_3 > uni-view[data-v-86d6807c]{width:33.3333333%}.container .item[data-v-86d6807c]{line-height:%?68?%;padding:0 %?20?%;box-sizing:border-box;border:#e5e5e5 solid 1px;background-color:#fff;color:#333;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .item.active[data-v-86d6807c]{background-color:#f5fff9;color:#42b983;border:#42b983 solid 1px}.container .item.active[data-v-86d6807c]::before{content:"";display:block;width:20px;height:20px;background-color:#42b983;position:absolute;right:-1px;bottom:-1px;z-index:1;-webkit-clip-path:polygon(100% 0,0 100%,100% 100%);clip-path:polygon(100% 0,0 100%,100% 100%)}.container .item.active[data-v-86d6807c]::after{content:"";display:block;width:4px;height:8px;border-right:#fff solid 2px;border-bottom:#fff solid 2px;-webkit-transform:rotate(25deg);transform:rotate(25deg);position:absolute;right:2px;bottom:3px;z-index:2}',""]),t.exports=e},dfe2:function(t,e,n){"use strict";var i={"helang-checkbox":n("759d").default},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[n("v-uni-view",[n("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[t._v("选择示例类型：")]),n("v-uni-view",t._l(t.array,(function(e,i){return n("v-uni-button",{key:i,staticStyle:{"margin-right":"10rpx"},attrs:{type:t.pickerIndex==i?"primary":"default",size:"mini","data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectType.apply(void 0,arguments)}}},[t._v(t._s(e))])})),1)],1),t.pickerIndex>=0?n("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[n("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[t._v("操作：")]),n("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[t._v("获取已选数据")]),n("v-uni-button",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.check.apply(void 0,arguments)}}},[t._v("全选")]),n("v-uni-button",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.invert.apply(void 0,arguments)}}},[t._v("反选")]),n("v-uni-button",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-view",{staticStyle:{"font-size":"28rpx","margin-top":"20rpx","padding-top":"20rpx","border-top":"#e5e5e5 solid 1px"}},[t._v("组件演示：")])],1):t._e()],1),n("helang-checkbox",{ref:"checkbox",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1)},a=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},fb16:function(t,e,n){"use strict";var i=n("d749"),c=n.n(i);c.a}}]);