(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-checkbox"],{1395:function(t,e,i){"use strict";var n=i("4ea4");i("4160"),i("e25e"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("db99")),o={components:{"helang-checkbox":a.default},data:function(){return{pickerIndex:-1,array:["复选框 - 三栏排序","复选框 - 流式排序（最多只能选择5个）","单选框 - 二栏排序","单选框 - 一栏排序"],disabled:!1,disabledSelect:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.selectDemoType(1)}))},methods:{creatorList:function(){for(var t=[],e=1;e<16;e++)t.push({id:e,text:"第".concat(e,"项")});return t},onSelectType:function(t){var e=t.currentTarget.dataset.index;e=parseInt(e,10),this.selectDemoType(e)},selectDemoType:function(t){switch(t){case 0:this.$refs.checkbox.set({type:"checkbox",column:3,list:this.creatorList()}),this.disabled=!1;break;case 1:var e=this.creatorList();e.forEach((function(t,i){/^[1|4|7|9]$/.test(i)&&(e[i].checked=!0)})),this.$refs.checkbox.set({type:"checkbox",list:e,maxSize:5,maxFn:function(){uni.showToast({title:"最多只能选择5个",icon:"none",duration:1e3,mask:!1})}}),this.disabled=!1;break;case 2:this.$refs.checkbox.set({type:"radio",index:2,column:2,list:this.creatorList()}),this.disabled=!0;break;case 3:this.$refs.checkbox.set({type:"radio",column:1,list:this.creatorList()}),this.disabled=!0;break;default:}this.pickerIndex=t},getData:function(){var t=this.$refs.checkbox.get();uni.showToast({title:"在控制台看数据",icon:"none",duration:1e3,mask:!1,success:function(){console.log(t)}})},onChange:function(t){console.log(t)},check:function(){this.$refs.checkbox.checkAll(),this.getData()},cancel:function(){this.$refs.checkbox.cancelAll(),this.getData()},invert:function(){this.$refs.checkbox.invertAll(),this.getData()},reset:function(){this.$refs.checkbox.reset(),this.getData()},changeDisabled:function(){this.disabledSelect=!this.disabledSelect,this.$refs.checkbox.disabled(this.disabledSelect)},toCheckboxs:function(){uni.navigateTo({url:"./checkboxs",fail:function(t){console.log(t)}})}}};e.default=o},2657:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container",class:t.column},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"item",class:{active:"radio"==t.type&&t.index==n||"checkbox"==t.type&&e.checked,disabled:t.isDisabled},attrs:{"data-i":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._v(t._s(e.text))])],1)})),1)},o=[]},"38e7":function(t,e,i){"use strict";i.r(e);var n=i("1395"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3dd8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-58ea1da2]{background-color:#f2f2f2}.panel[data-v-58ea1da2]{background-color:#fff;margin-bottom:%?20?%;padding:%?20?% %?20?% 0 %?20?%}.panel-head[data-v-58ea1da2]{font-size:%?28?%}.panel-body[data-v-58ea1da2]{margin-top:%?20?%;padding:%?20?% 0 0 0;border-top:#eee solid 1px;overflow:hidden}.panel-body > uni-button[data-v-58ea1da2]{display:block;float:left;margin:0 %?20?% %?20?% 0;border:#007aff solid 1px;padding:0 %?20?%;border-radius:0}.panel-body > uni-button[data-v-58ea1da2]:after{display:none}body.?%PAGE?%[data-v-58ea1da2]{background-color:#f2f2f2}',""]),t.exports=e},7747:function(t,e,i){"use strict";i("4160"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{keyName:{type:Number|String,default:""}},data:function(){return{list:[],index:-1,type:"checkbox",column:"",isDisabled:!1,copyListData:"",copyIndexData:-1}},mounted:function(){},methods:{change:function(t){var e=this;if(!this.disabled()){var i=Number(t.currentTarget.dataset.i);if("radio"==this.type)return this.index=i,void this.$nextTick((function(){e.$emit("change",e.get(),e.$props.keyName)}));if(this.list[i].checked)this.$set(this.list[i],"checked",!1);else{if(this.maxSize){var n=0;if(this.list.forEach((function(t,e){t.checked&&n++})),n>=this.maxSize)return void(this.maxFn&&this.maxFn())}this.$set(this.list[i],"checked",!0)}this.$nextTick((function(){e.$emit("change",e.get(),e.$props.keyName)}))}},set:function(t){var e="checkbox",i=-1,n=["","col_1","col_2","col_3"];"radio"==t.type&&(e="radio",i=t.index>=0?t.index:-1),this.column=t.column in n?n[t.column]:"",this.type=e,this.index=i,this.list=t.list,t.maxSize>0&&t.maxFn?(this.maxSize=t.maxSize,this.maxFn=t.maxFn):(this.maxSize=void 0,this.maxFn=void 0),this.copyListData=JSON.stringify(t.list),this.copyIndexData=void 0===t.index?-1:t.index},get:function(){if("radio"==this.type)return this.index>=0?this.list[this.index]:null;var t=[];return this.list.forEach((function(e,i){1==e.checked&&t.push(e)})),t.length>0?t:null},checkAll:function(){var t=this;if(!this.disabled())return"radio"==this.type?null:void this.list.forEach((function(e,i){t.$set(t.list[i],"checked",!0)}))},cancelAll:function(){var t=this;if(!this.disabled())return"radio"==this.type?(this.index=-1,null):void this.list.forEach((function(e,i){t.$set(t.list[i],"checked",!1)}))},invertAll:function(){var t=this;if(!this.disabled())return"radio"==this.type?(this.index=-1,null):void this.list.forEach((function(e,i){t.$set(t.list[i],"checked",!e.checked)}))},reset:function(){this.list=JSON.parse(this.copyListData),this.index=this.copyIndexData},disabled:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(void 0===t)return this.isDisabled;this.isDisabled=t}}};e.default=n},8066:function(t,e,i){var n=i("3dd8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6db40e72",n,!0,{sourceMap:!1,shadowMode:!1})},"8d34":function(t,e,i){"use strict";var n=i("8066"),a=i.n(n);a.a},"9feb":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={helangCheckbox:i("db99").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"panel"},[i("v-uni-view",{staticClass:"panel-head"},[t._v("选择示例类型：")]),i("v-uni-view",{staticClass:"panel-body"},[t._l(t.array,(function(e,n){return i("v-uni-button",{key:n,attrs:{type:t.pickerIndex==n?"primary":"default",size:"mini","data-index":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectType.apply(void 0,arguments)}}},[t._v(t._s(e))])})),i("v-uni-button",{staticStyle:{color:"#F43F3B"},attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCheckboxs.apply(void 0,arguments)}}},[t._v("同页面多组件示例")])],2)],1),i("v-uni-view",{staticClass:"panel"},[i("v-uni-view",{staticClass:"panel-head"},[t._v("操作：")]),i("v-uni-view",{staticClass:"panel-body"},[i("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[t._v("获取已选数据")]),i("v-uni-button",{attrs:{type:"default",size:"mini",disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.check.apply(void 0,arguments)}}},[t._v("全选")]),i("v-uni-button",{attrs:{type:"default",size:"mini",disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.invert.apply(void 0,arguments)}}},[t._v("反选")]),i("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消全部")]),i("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset.apply(void 0,arguments)}}},[t._v("重置")]),i("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDisabled.apply(void 0,arguments)}}},[t._v(t._s(t.disabledSelect?"取消禁用":"禁用"))])],1)],1),i("v-uni-view",{staticClass:"panel"},[i("v-uni-view",{staticClass:"panel-head"},[t._v("组件演示：")]),i("v-uni-view",{staticClass:"panel-body"},[i("helang-checkbox",{ref:"checkbox",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1)],1)],1)},o=[]},a008:function(t,e,i){var n=i("dff3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("66c50d17",n,!0,{sourceMap:!1,shadowMode:!1})},a852:function(t,e,i){"use strict";i.r(e);var n=i("9feb"),a=i("38e7");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("8d34");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"58ea1da2",null,!1,n["a"],c);e["default"]=r.exports},ae12:function(t,e,i){"use strict";var n=i("a008"),a=i.n(n);a.a},db99:function(t,e,i){"use strict";i.r(e);var n=i("2657"),a=i("ecc2");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("ae12");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6b64dcfc",null,!1,n["a"],c);e["default"]=r.exports},dff3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-6b64dcfc]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;margin-right:%?-20?%;font-size:%?28?%;text-align:center}.container > uni-view[data-v-6b64dcfc]{margin-bottom:%?20?%;padding-right:%?20?%;box-sizing:border-box}.container.col_1 > uni-view[data-v-6b64dcfc]{width:100%}.container.col_2 > uni-view[data-v-6b64dcfc]{width:50%}.container.col_3 > uni-view[data-v-6b64dcfc]{width:33.3333333%}.container .item[data-v-6b64dcfc]{line-height:%?68?%;padding:0 %?20?%;box-sizing:border-box;border:#e5e5e5 solid 1px;background-color:#fff;color:#333;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .item.disabled[data-v-6b64dcfc]{background-color:#f1f1f1;color:#d8d8d8}.container .item.active[data-v-6b64dcfc]{background-color:#f5fff9;color:#42b983;border:#42b983 solid 1px}.container .item.active[data-v-6b64dcfc]::before{content:"";display:block;width:20px;height:20px;background-color:#42b983;position:absolute;right:-1px;bottom:-1px;z-index:1;-webkit-clip-path:polygon(100% 0,0 100%,100% 100%);clip-path:polygon(100% 0,0 100%,100% 100%)}.container .item.active[data-v-6b64dcfc]::after{content:"";display:block;width:3px;height:6px;border-right:#fff solid 2px;border-bottom:#fff solid 2px;-webkit-transform:rotate(25deg);transform:rotate(25deg);position:absolute;right:3px;bottom:3px;z-index:2}.container .item.active.disabled[data-v-6b64dcfc]{background-color:#f1f1f1;color:#d8d8d8;border:#e5e5e5 solid 1px}.container .item.active.disabled[data-v-6b64dcfc]::before{background-color:#d9d9d9}',""]),t.exports=e},ecc2:function(t,e,i){"use strict";i.r(e);var n=i("7747"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);