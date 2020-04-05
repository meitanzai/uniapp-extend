(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-whackMole"],{"206e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*\r\n *  uni-app 全局样式表\r\n *  作者:helang\r\n *  邮箱:helang.love@qq.com\r\n*/\n/* 根元素样式 设置页面背景、字体大小、字体颜色，字符间距、长单词换行 */uni-page-body[data-v-07908b5a]{background-color:#f3f3f3;font-size:%?28?%;box-sizing:border-box;color:#333;letter-spacing:0;word-wrap:break-word}\n/* 设置常用元素尺寸规则 */uni-view[data-v-07908b5a], uni-textarea[data-v-07908b5a], uni-input[data-v-07908b5a], uni-label[data-v-07908b5a], uni-form[data-v-07908b5a], uni-button[data-v-07908b5a], uni-image[data-v-07908b5a]{box-sizing:border-box}\n/* 按钮样式处理 */uni-button[data-v-07908b5a]{font-size:%?28?%}\n/* 取消按钮默认的边框线效果 */uni-button[data-v-07908b5a]:after{border:none}\n/* 设置图片默认样式，取消默认尺寸 */uni-image[data-v-07908b5a]{display:block;height:auto;width:auto}\n/* 输入框默认字体大小 */uni-textarea[data-v-07908b5a], uni-input[data-v-07908b5a]{font-size:%?28?%}\n/* 列式弹性盒子 */.flex_col[data-v-07908b5a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}\n/* 行式弹性盒子 */.flex_row[data-v-07908b5a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start}\n/* 弹性盒子弹性容器 */.flex_col .flex_grow[data-v-07908b5a]{width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.flex_row .flex_grow[data-v-07908b5a]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}\n/* 弹性盒子允许换行 */.flex_col.flex_wrap[data-v-07908b5a]{-webkit-flex-wrap:wrap;flex-wrap:wrap}\n/* 弹性盒子居中对齐 */.flex_col.flex_center[data-v-07908b5a], .flex_row.flex_center[data-v-07908b5a]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n/* 列式弹性盒子两端对齐 */.flex_col.flex_space[data-v-07908b5a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/* 弹性盒子快速分栏 ,这里非常郁闷 uniapp 居然不支持 * 选择器 */.flex_col.flex_col_2 > uni-view[data-v-07908b5a]{width:50%}.flex_col.flex_col_3 > uni-view[data-v-07908b5a]{width:33.33333%}.flex_col.flex_col_4 > uni-view[data-v-07908b5a]{width:25%}.flex_col.flex_col_5 > uni-view[data-v-07908b5a]{width:20%}.flex_col.flex_col_6 > uni-view[data-v-07908b5a]{width:16.66666%}\n/* 字体颜色 */.color_333[data-v-07908b5a]{color:#333}.color_666[data-v-07908b5a]{color:#666}.color_999[data-v-07908b5a]{color:#999}.color_ccc[data-v-07908b5a]{color:#ccc}.color_fff[data-v-07908b5a]{color:#fff}.color_6dc[data-v-07908b5a]{color:#6dca6d}.color_d51[data-v-07908b5a]{color:#d51917}.color_09f[data-v-07908b5a]{color:#09f}\n/* 背景色*/.bg_fff[data-v-07908b5a]{background-color:#fff}\n/* 字体大小 */.size_10[data-v-07908b5a]{font-size:%?20?%}.size_12[data-v-07908b5a]{font-size:%?24?%}.size_14[data-v-07908b5a]{font-size:%?28?%}.size_16[data-v-07908b5a]{font-size:%?32?%}.size_18[data-v-07908b5a]{font-size:%?36?%}.size_20[data-v-07908b5a]{font-size:%?40?%}\n/* 字体加粗 */.font_b[data-v-07908b5a]{font-weight:700}\n/* 对齐方式 */.align_c[data-v-07908b5a]{text-align:center}.align_l[data-v-07908b5a]{text-align:left}.align_r[data-v-07908b5a]{text-align:right}\n/* 遮罩 */.shade[data-v-07908b5a]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.8);z-index:100}\n/* 弹窗 */.shade_box[data-v-07908b5a]{position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;z-index:101;min-width:%?200?%;min-height:%?200?%}uni-page-body[data-v-07908b5a]{background-color:#45454d}.box .result[data-v-07908b5a]{line-height:%?100?%;padding:%?50?% %?30?%;font-size:%?40?%;color:#fff}.box .item[data-v-07908b5a]{height:%?250?%;position:relative}.box .item > uni-image[data-v-07908b5a]{position:absolute}.box .item > uni-image.hole[data-v-07908b5a]{width:100%;height:100%;top:0;left:0;z-index:1}.box .item > uni-image.mouse[data-v-07908b5a]{width:66%;height:66%;top:17%;left:17%;z-index:2}.box .item > uni-image.boom[data-v-07908b5a]{width:100%;height:100%;top:0;left:0;z-index:3}body.?%PAGE?%[data-v-07908b5a]{background-color:#f3f3f3;background-color:#45454d}',""]),t.exports=a},"40af":function(t,a,e){var i=e("206e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6e78685f",i,!0,{sourceMap:!1,shadowMode:!1})},"8e68":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"result flex_col flex_col_2"},[e("v-uni-view",{staticClass:"align_l"},[t._v("时间："+t._s(t.time))]),e("v-uni-view",{staticClass:"align_r"},[t._v("得分："+t._s(t.countResult))])],1),e("v-uni-view",{staticClass:"flex_col flex_col_3 flex_wrap"},t._l(t.list,(function(a,i){return e("v-uni-view",{key:i,staticClass:"item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.whack(i)}}},[e("v-uni-image",{staticClass:"hole",attrs:{src:"/static/images/whackMole/hole.png",mode:"aspectFit"}}),e("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:1==a,expression:"item == 1"}],staticClass:"mouse",attrs:{src:"/static/images/whackMole/mouse.png",mode:"aspectFit"}}),e("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:2==a,expression:"item == 2"}],staticClass:"boom",attrs:{src:"/static/images/whackMole/boom.png",mode:"aspectFit"}})],1)})),1)],1)},o=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},b3b7:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("ac6a");var i={data:function(){return{list:[0,0,0,0,0,0,0,0,0],result:0,time:30,flag:!0}},mounted:function(){this.showMouse(),this.downTime()},computed:{countResult:function(){return 10*this.result}},onUnload:function(){clearTimeout(this.aTime),clearInterval(this.bTime),clearInterval(this.cTime)},methods:{whack:function(t){var a=this;1==this.list[t]&&(this.flag?(this.$set(this.list,t,2),this.result++,function(t){a.aTime=setTimeout((function(){a.$set(a.list,t,0)}),800)}(t)):uni.showToast({title:"时间已结束",icon:"none"}))},showMouse:function(){var t=this,a=function(){var a=[];return t.list.forEach((function(t,e){0==t&&a.push(e)})),a};this.bTime=setInterval((function(){if(t.flag){var e=a();if(!(e.length<3)){var i=Math.floor(Math.random()*e.length);t.$set(t.list,e[i],1)}}}),500)},restart:function(){this.list=[0,0,0,0,0,0,0,0,0],this.result=0,this.time=30,this.flag=!0},downTime:function(){var t=this;this.cTime=setInterval((function(){t.time>0?t.time--:t.flag&&(t.flag=!1,a())}),1e3);var a=function(){uni.showModal({title:"游戏结束",content:"得分：".concat(t.countResult),cancelText:"不玩了",confirmText:"重新挑战",success:function(a){a.confirm&&t.restart()}})}}}};a.default=i},c1d5:function(t,a,e){"use strict";e.r(a);var i=e("b3b7"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},c400:function(t,a,e){"use strict";e.r(a);var i=e("8e68"),n=e("c1d5");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("fe50");var l,r=e("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"07908b5a",null,!1,i["a"],l);a["default"]=s.exports},fe50:function(t,a,e){"use strict";var i=e("40af"),n=e.n(i);n.a}}]);