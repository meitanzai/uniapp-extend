(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-checkbox"],{"0704":function(t,e,n){"use strict";n("4160"),n("a9e3"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{list:[],index:-1,type:"checkbox",column:""}},methods:{change:function(t){var e=this,n=Number(t.currentTarget.dataset.i);if("radio"==this.type)return this.index=n,void this.$nextTick((function(){e.$emit("change",e.get())}));if(this.list[n].checked)this.$set(this.list[n],"checked",!1);else{if(this.maxSize){var i=0;if(this.list.forEach((function(t,e){t.checked&&i++})),i>=this.maxSize)return void(this.maxFn&&this.maxFn())}this.$set(this.list[n],"checked",!0)}this.$nextTick((function(){e.$emit("change",e.get())}))},set:function(t){var e="checkbox",n=-1,i=["","col_1","col_2","col_3"];"radio"==t.type&&(e="radio",n=t.index>=0?t.index:-1),this.column=t.column in i?i[t.column]:"",this.type=e,this.index=n,this.list=t.list,t.maxSize>0&&t.maxFn?(this.maxSize=t.maxSize,this.maxFn=t.maxFn):(this.maxSize=void 0,this.maxFn=void 0)},get:function(){if("radio"==this.type)return this.index>=0?this.list[this.index]:null;var t=[];return this.list.forEach((function(e,n){1==e.checked&&t.push(e)})),t.length>0?t:null},checkAll:function(){var t=this;if("radio"==this.type)return null;this.list.forEach((function(e,n){t.$set(t.list[n],"checked",!0)}))},cancelAll:function(){var t=this;if("radio"==this.type)return this.index=-1,null;this.list.forEach((function(e,n){t.$set(t.list[n],"checked",!1)}))},invertAll:function(){var t=this;if("radio"==this.type)return this.index=-1,null;this.list.forEach((function(e,n){t.$set(t.list[n],"checked",!e.checked)}))}}};e.default=i},"2c55":function(t,e,n){"use strict";n.r(e);var i=n("0704"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},"58d0":function(t,e,n){var i=n("6f11");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("68ab23c1",i,!0,{sourceMap:!1,shadowMode:!1})},"5ece":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container",class:t.column},t._l(t.list,(function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"item",class:{active:"radio"==t.type&&t.index==i||"checkbox"==t.type&&e.checked},attrs:{"data-i":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._v(t._s(e.text))])],1)})),1)},c=[]},"6f11":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-143a4e6c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;margin-right:%?-20?%;font-size:%?28?%;text-align:center}.container > uni-view[data-v-143a4e6c]{margin-bottom:%?20?%;padding-right:%?20?%;box-sizing:border-box}.container.col_1 > uni-view[data-v-143a4e6c]{width:100%}.container.col_2 > uni-view[data-v-143a4e6c]{width:50%}.container.col_3 > uni-view[data-v-143a4e6c]{width:33.3333333%}.container .item[data-v-143a4e6c]{line-height:%?68?%;padding:0 %?20?%;box-sizing:border-box;border:#e5e5e5 solid 1px;background-color:#fff;color:#333;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .item.active[data-v-143a4e6c]{background-color:#f5fff9;color:#42b983;border:#42b983 solid 1px}.container .item.active[data-v-143a4e6c]::before{content:"";display:block;width:20px;height:20px;background-color:#42b983;position:absolute;right:-1px;bottom:-1px;z-index:1;-webkit-clip-path:polygon(100% 0,0 100%,100% 100%);clip-path:polygon(100% 0,0 100%,100% 100%)}.container .item.active[data-v-143a4e6c]::after{content:"";display:block;width:4px;height:8px;border-right:#fff solid 2px;border-bottom:#fff solid 2px;-webkit-transform:rotate(25deg);transform:rotate(25deg);position:absolute;right:2px;bottom:3px;z-index:2}',""]),t.exports=e},"759d":function(t,e,n){"use strict";n.r(e);var i=n("5ece"),a=n("2c55");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("b415");var o,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"143a4e6c",null,!1,i["a"],o);e["default"]=s.exports},"7def":function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("e25e"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("759d")),c={components:{"helang-checkbox":a.default},data:function(){return{pickerIndex:-1,array:["复选框 - 三栏排序","复选框 - 流式排序（最多只能选择5个）","单选框 - 二栏排序","单选框 - 一栏排序"],disabled:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.selectDemoType(1)}))},methods:{creatorList:function(){for(var t=[],e=1;e<16;e++)t.push({id:e,text:"第".concat(e,"项")});return t},onSelectType:function(t){var e=t.currentTarget.dataset.index;e=parseInt(e,10),this.selectDemoType(e)},selectDemoType:function(t){switch(t){case 0:this.$refs.checkbox.set({type:"checkbox",column:3,list:this.creatorList()}),this.disabled=!1;break;case 1:var e=this.creatorList();e.forEach((function(t,n){/^[1|4|7|9]$/.test(n)&&(e[n].checked=!0)})),this.$refs.checkbox.set({type:"checkbox",list:e,maxSize:5,maxFn:function(){uni.showToast({title:"最多只能选择5个",icon:"none",duration:1e3,mask:!1})}}),this.disabled=!1;break;case 2:this.$refs.checkbox.set({type:"radio",index:2,column:2,list:this.creatorList()}),this.disabled=!0;break;case 3:this.$refs.checkbox.set({type:"radio",column:1,list:this.creatorList()}),this.disabled=!0;break;default:}this.pickerIndex=t},getData:function(){var t=this.$refs.checkbox.get();uni.showToast({title:"在控制台看数据",icon:"none",duration:1e3,mask:!1,success:function(){console.log(t)}})},onChange:function(t){console.log(t)},check:function(){this.$refs.checkbox.checkAll(),this.getData()},cancel:function(){this.$refs.checkbox.cancelAll(),this.getData()},invert:function(){this.$refs.checkbox.invertAll(),this.getData()}}};e.default=c},"7f08":function(t,e,n){"use strict";n.r(e);var i=n("c251"),a=n("d5b0");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("c3ac");var o,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5c935664",null,!1,i["a"],o);e["default"]=s.exports},"8e9c":function(t,e,n){var i=n("aef8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a472512a",i,!0,{sourceMap:!1,shadowMode:!1})},aef8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-5c935664]{background-color:#f2f2f2}.panel[data-v-5c935664]{background-color:#fff;margin-bottom:%?20?%;padding:%?20?% %?20?% 0 %?20?%}.panel-head[data-v-5c935664]{font-size:%?28?%}.panel-body[data-v-5c935664]{margin-top:%?20?%;padding:%?20?% 0 0 0;border-top:#eee solid 1px;overflow:hidden}.panel-body > uni-button[data-v-5c935664]{display:block;float:left;margin:0 %?20?% %?20?% 0;border:#007aff solid 1px;padding:0 %?20?%;border-radius:0}.panel-body > uni-button[data-v-5c935664]:after{display:none}body.?%PAGE?%[data-v-5c935664]{background-color:#f2f2f2}',""]),t.exports=e},b415:function(t,e,n){"use strict";var i=n("58d0"),a=n.n(i);a.a},c251:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var i={helangCheckbox:n("759d").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"panel"},[n("v-uni-view",{staticClass:"panel-head"},[t._v("选择示例类型：")]),n("v-uni-view",{staticClass:"panel-body"},t._l(t.array,(function(e,i){return n("v-uni-button",{key:i,attrs:{type:t.pickerIndex==i?"primary":"default",size:"mini","data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectType.apply(void 0,arguments)}}},[t._v(t._s(e))])})),1)],1),n("v-uni-view",{staticClass:"panel"},[n("v-uni-view",{staticClass:"panel-head"},[t._v("操作：")]),n("v-uni-view",{staticClass:"panel-body"},[n("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[t._v("获取已选数据")]),n("v-uni-button",{attrs:{type:"default",size:"mini",disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.check.apply(void 0,arguments)}}},[t._v("全选")]),n("v-uni-button",{attrs:{type:"default",size:"mini",disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.invert.apply(void 0,arguments)}}},[t._v("反选")]),n("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消全部")])],1)],1),n("v-uni-view",{staticClass:"panel"},[n("v-uni-view",{staticClass:"panel-head"},[t._v("组件演示：")]),n("v-uni-view",{staticClass:"panel-body"},[n("helang-checkbox",{ref:"checkbox",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1)],1)],1)},c=[]},c3ac:function(t,e,n){"use strict";var i=n("8e9c"),a=n.n(i);a.a},d5b0:function(t,e,n){"use strict";n.r(e);var i=n("7def"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a}}]);