(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-swiper_image"],{"0318":function(t,a,e){"use strict";var i=e("9d06"),n=e.n(i);n.a},"16f3":function(t,a,e){"use strict";e.r(a);var i=e("f8fb"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},2909:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=s;var i=c(e("6005")),n=c(e("db90")),o=c(e("06c5")),r=c(e("3427"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,i.default)(t)||(0,n.default)(t)||(0,o.default)(t)||(0,r.default)()}},3427:function(t,a,e){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i},"3a08":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*\r\n *  uni-app 全局样式表\r\n *  作者:helang\r\n *  邮箱:helang.love@qq.com\r\n*/\r\n/* 根元素样式 设置页面背景、字体大小、字体颜色，字符间距、长单词换行 */uni-page-body[data-v-04ac0840]{background-color:#f3f3f3;font-size:%?28?%;box-sizing:border-box;color:#333;letter-spacing:0;word-wrap:break-word}\r\n/* 设置常用元素尺寸规则 */uni-view[data-v-04ac0840], uni-textarea[data-v-04ac0840], uni-input[data-v-04ac0840], uni-label[data-v-04ac0840], uni-form[data-v-04ac0840], uni-button[data-v-04ac0840], uni-image[data-v-04ac0840]{box-sizing:border-box}\r\n/* 按钮样式处理 */uni-button[data-v-04ac0840]{font-size:%?28?%}\r\n/* 取消按钮默认的边框线效果 */uni-button[data-v-04ac0840]:after{border:none}\r\n/* 设置图片默认样式，取消默认尺寸 */uni-image[data-v-04ac0840]{display:block;height:auto;width:auto}\r\n/* 输入框默认字体大小 */uni-textarea[data-v-04ac0840], uni-input[data-v-04ac0840]{font-size:%?28?%}\r\n/* 列式弹性盒子 */.flex-col[data-v-04ac0840]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:center}\r\n/* 行式弹性盒子 */.flex-row[data-v-04ac0840]{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start}\r\n/* 弹性盒子弹性容器 */.flex-col > uni-view.flex-grow[data-v-04ac0840]{width:0;flex-grow:1}.flex-row > uni-view.flex-grow[data-v-04ac0840]{height:0;flex-grow:1}\r\n/* 弹性盒子允许换行 */.flex-col.flex-wrap[data-v-04ac0840]{flex-wrap:wrap}\r\n/* 弹性盒子居中对齐 */.flex-col.flex-center[data-v-04ac0840], .flex-row.flex-center[data-v-04ac0840]{justify-content:center}\r\n/* 列式弹性盒子两端对齐 */.flex-col.flex-space[data-v-04ac0840]{justify-content:space-between}\r\n/* 弹性盒子快速分栏 ,这里非常郁闷 uniapp 居然不支持 * 选择器 */.flex-col.flex-col-2 > uni-view[data-v-04ac0840]{width:50%}.flex-col.flex-col-3 > uni-view[data-v-04ac0840]{width:33.33333%}.flex-col.flex-col-4 > uni-view[data-v-04ac0840]{width:25%}.flex-col.flex-col-5 > uni-view[data-v-04ac0840]{width:20%}.flex-col.flex-col-6 > uni-view[data-v-04ac0840]{width:16.66666%}\r\n/* 字体颜色 */.color-333[data-v-04ac0840]{color:#333}.color-666[data-v-04ac0840]{color:#666}.color-999[data-v-04ac0840]{color:#999}.color-ccc[data-v-04ac0840]{color:#ccc}.color-fff[data-v-04ac0840]{color:#fff}.color-6dc[data-v-04ac0840]{color:#6dca6d}.color-d51[data-v-04ac0840]{color:#d51917}.color-09f[data-v-04ac0840]{color:#09f}\r\n/* 背景色*/.bg-fff[data-v-04ac0840]{background-color:#fff}\r\n/* 字体大小 */.size-10[data-v-04ac0840]{font-size:%?20?%}.size-12[data-v-04ac0840]{font-size:%?24?%}.size-14[data-v-04ac0840]{font-size:%?28?%}.size-16[data-v-04ac0840]{font-size:%?32?%}.size-18[data-v-04ac0840]{font-size:%?36?%}.size-20[data-v-04ac0840]{font-size:%?40?%}\r\n/* 字体加粗 */.font-b[data-v-04ac0840]{font-weight:700}\r\n/* 对齐方式 */.align-c[data-v-04ac0840]{text-align:center}.align-l[data-v-04ac0840]{text-align:left}.align-r[data-v-04ac0840]{text-align:right}\r\n/* 遮罩 */.shade[data-v-04ac0840]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.8);z-index:100}\r\n/* 弹窗 */.shade-box[data-v-04ac0840]{position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;z-index:101;min-width:%?200?%;min-height:%?200?%}uni-page-body[data-v-04ac0840]{background-color:#76beff}uni-page-body[data-v-04ac0840],\r\n.swiper[data-v-04ac0840],\r\n.swiper-item[data-v-04ac0840]{height:100%}\r\n/* 标题栏 */.title[data-v-04ac0840]{position:fixed;top:0;left:0;width:100%;height:auto;padding-top:0;z-index:10;background-color:hsla(0,0%,100%,.08);box-shadow:0 0 10px hsla(0,0%,100%,.08)}.title > uni-view[data-v-04ac0840]{height:44px}.title .box1[data-v-04ac0840]{width:%?100?%;margin:0 %?40?%;font-size:%?40?%}.title .tab > uni-view[data-v-04ac0840]{margin:0 %?30?%;line-height:%?64?%;font-size:%?32?%;position:relative;color:hsla(0,0%,100%,.5);letter-spacing:2px}.title .tab > uni-view.active[data-v-04ac0840]{color:#fff}.title .tab > uni-view.active[data-v-04ac0840]:after{content:"";display:block;height:2px;position:absolute;width:70%;background-color:#fff;border-radius:1px;left:15%;bottom:0}.swiper .swiper-item[data-v-04ac0840]{position:relative;background:#fff;overflow:hidden\r\n  /* 添加阴影遮罩，增强文字显示 */}.swiper .swiper-item > uni-image[data-v-04ac0840]:nth-child(1){display:block;width:100%;height:100%;box-sizing:initial;padding:40px 30px;position:absolute;z-index:1;top:-40px;left:-30px;-webkit-filter:blur(20px);filter:blur(20px)}.swiper .swiper-item > uni-image[data-v-04ac0840]:nth-child(2){display:block;width:100%;height:100%;position:absolute;z-index:2;top:0;left:0}.swiper .swiper-item[data-v-04ac0840]:after{content:"";display:block;position:absolute;left:0;bottom:0;width:100%;height:65%;z-index:3;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.5))}.info-box[data-v-04ac0840]{position:absolute;bottom:%?80?%;left:%?50?%;z-index:4;color:#fff;width:%?500?%}.info-box > uni-view[data-v-04ac0840]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sidebar[data-v-04ac0840]{position:absolute;bottom:%?100?%;right:%?50?%;z-index:5;color:#fff;text-align:center\r\n  /* 按钮点击缩放效果 */}.sidebar .pic[data-v-04ac0840]{margin-bottom:%?20?%}.sidebar .pic > uni-image[data-v-04ac0840]{width:%?80?%;height:%?80?%;border-radius:50%;border:#fff solid 1px}.sidebar .like[data-v-04ac0840]{font-size:%?72?%;margin-bottom:%?20?%}.sidebar .like > uni-view[data-v-04ac0840]{font-size:%?20?%;margin-top:0}.sidebar .read[data-v-04ac0840]{font-size:%?64?%;margin-bottom:%?80?%}.sidebar .read > uni-view[data-v-04ac0840]{font-size:%?20?%;margin-top:%?-6?%}.sidebar .menu[data-v-04ac0840]{width:%?80?%;height:%?80?%;border-radius:50%;border:rgba(0,0,0,.5) solid %?14?%;box-sizing:border-box}.sidebar .menu > uni-image[data-v-04ac0840]{width:100%;height:100%;border-radius:50%}.sidebar > uni-view[data-v-04ac0840]{transition:-webkit-transform .05s ease 0s;transition:transform .05s ease 0s;transition:transform .05s ease 0s,-webkit-transform .05s ease 0s}.sidebar > uni-view[data-v-04ac0840]:active{-webkit-transform:scale(.95);transform:scale(.95)}body.?%PAGE?%[data-v-04ac0840]{background-color:#f3f3f3;background-color:#76beff}',""]),t.exports=a},"48c4":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uniIcons:e("69a7").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticStyle:{height:"100%"}},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{staticClass:"flex-col color_fff"},[e("v-uni-view",{staticClass:"box1"},[e("uni-icons",{attrs:{type:"search",size:"20",color:"#fff"}})],1),e("v-uni-view",{staticClass:"flex-grow flex-col flex-center tab"},[e("v-uni-view",{class:{active:0==t.listType},attrs:{"data-type":"0"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeType.apply(void 0,arguments)}}},[t._v("关注")]),e("v-uni-view",{class:{active:1==t.listType},attrs:{"data-type":"1"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeType.apply(void 0,arguments)}}},[t._v("推荐")])],1),e("v-uni-view",{staticClass:"box1"})],1)],1),e("v-uni-swiper",{staticClass:"swiper",attrs:{duration:t.duration,vertical:!0,current:t.activeIndex},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.onChange.apply(void 0,arguments)}}},t._l(t.dataList,(function(a,i){return e("v-uni-swiper-item",{key:i},[t.activeIndex>=i-1?e("v-uni-view",{staticClass:"swiper-item"},[e("v-uni-image",{attrs:{src:a,mode:"aspectFill"}}),e("v-uni-image",{attrs:{src:a,mode:"aspectFit"}}),e("v-uni-view",{staticClass:"info-box"},[e("v-uni-view",{staticClass:"size_16"},[t._v("@ 第"+t._s(i+1)+"个用户")]),e("v-uni-view",[t._v("第1集 | 这是个什么作品")]),e("v-uni-view",{staticClass:"size_12"},[t._v("合集名称第"+t._s(i+1)+"个用户原创")])],1),e("v-uni-view",{staticClass:"sidebar"},[e("v-uni-view",{staticClass:"pic"},[e("v-uni-image",{attrs:{src:a,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"like"},[e("uni-icons",{attrs:{type:"chat",size:"30",color:"#fff"}}),e("v-uni-view",[t._v("12.1w")])],1),e("v-uni-view",{staticClass:"read"},[e("uni-icons",{attrs:{type:"redo",size:"30",color:"#fff"}}),e("v-uni-view",[t._v("4554")])],1),e("v-uni-view",{staticClass:"menu"},[e("v-uni-image",{attrs:{src:a,mode:"aspectFill"}})],1)],1)],1):t._e()],1)})),1)],1)},o=[]},6005:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var i=n(e("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,i.default)(t)}},"9d06":function(t,a,e){var i=e("3a08");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("309254f2",i,!0,{sourceMap:!1,shadowMode:!1})},"9e05":function(t,a,e){"use strict";e.r(a);var i=e("48c4"),n=e("16f3");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("0318");var r,c=e("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"04ac0840",null,!1,i["a"],r);a["default"]=s.exports},db90:function(t,a,e){"use strict";function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=i},f8fb:function(t,a,e){"use strict";var i=e("4ea4");e("99af"),e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("2909")),o=i(e("69a7")),r={components:{uniIcons:o.default},data:function(){return{listType:1,activeIndex:0,duration:300,rows:10,page:1,dataList:[]}},onLoad:function(){this.getList()},methods:{changeType:function(t){this.listType=t.currentTarget.dataset.type,this.page=1,this.getList()},getList:function(){var t=this;1==this.page&&uni.showLoading({title:"正在加载",mask:!0}),new Promise((function(t,a){var e=function(){for(var t=[],a=0;a<10;a++)t.push("/static/images/douyin/".concat(a,".jpg"));return t};setTimeout((function(){t(e())}),500)})).then((function(a){uni.hideLoading(),1==t.page?(t.duration=0,t.$nextTick((function(){t.dataList=a,t.activeIndex=0,t.$nextTick((function(){t.duration=300}))}))):t.dataList=[].concat((0,n.default)(t.dataList),(0,n.default)(a)),t.page++}))},onChange:function(t){var a=t.detail.current;this.activeIndex=a,a==this.dataList.length-3&&(console.log("add data"),this.getList())}}};a.default=r}}]);