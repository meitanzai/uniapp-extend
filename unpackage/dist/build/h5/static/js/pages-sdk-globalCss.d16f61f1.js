(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sdk-globalCss"],{"001c":function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*\r\n *  uni-app 全局样式表\r\n *  作者:helang\r\n *  邮箱:helang.love@qq.com\r\n*/\r\n/* 根元素样式 设置页面背景、字体大小、字体颜色，字符间距、长单词换行 */uni-page-body[data-v-4fe18cab]{background-color:#f3f3f3;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#333;letter-spacing:0;word-wrap:break-word}\r\n/* 设置常用元素尺寸规则 */uni-view[data-v-4fe18cab], uni-textarea[data-v-4fe18cab], uni-input[data-v-4fe18cab], uni-label[data-v-4fe18cab], uni-form[data-v-4fe18cab], uni-button[data-v-4fe18cab], uni-image[data-v-4fe18cab]{-webkit-box-sizing:border-box;box-sizing:border-box}\r\n/* 按钮样式处理 */uni-button[data-v-4fe18cab]{font-size:%?28?%}\r\n/* 取消按钮默认的边框线效果 */uni-button[data-v-4fe18cab]:after{border:none}\r\n/* 设置图片默认样式，取消默认尺寸 */uni-image[data-v-4fe18cab]{display:block;height:auto;width:auto}\r\n/* 输入框默认字体大小 */uni-textarea[data-v-4fe18cab], uni-input[data-v-4fe18cab]{font-size:%?28?%}\r\n/* 列式弹性盒子 */.flex_col[data-v-4fe18cab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}\r\n/* 行式弹性盒子 */.flex_row[data-v-4fe18cab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start}\r\n/* 弹性盒子弹性容器 */.flex_col .flex_grow[data-v-4fe18cab]{width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.flex_row .flex_grow[data-v-4fe18cab]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}\r\n/* 弹性盒子允许换行 */.flex_col.flex_wrap[data-v-4fe18cab]{-webkit-flex-wrap:wrap;flex-wrap:wrap}\r\n/* 弹性盒子居中对齐 */.flex_col.flex_center[data-v-4fe18cab], .flex_row.flex_center[data-v-4fe18cab]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\r\n/* 列式弹性盒子两端对齐 */.flex_col.flex_space[data-v-4fe18cab]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\r\n/* 弹性盒子快速分栏 ,这里非常郁闷 uniapp 居然不支持 * 选择器 */.flex_col.flex_col_2 > uni-view[data-v-4fe18cab]{width:50%}.flex_col.flex_col_3 > uni-view[data-v-4fe18cab]{width:33.33333%}.flex_col.flex_col_4 > uni-view[data-v-4fe18cab]{width:25%}.flex_col.flex_col_5 > uni-view[data-v-4fe18cab]{width:20%}.flex_col.flex_col_6 > uni-view[data-v-4fe18cab]{width:16.66666%}\r\n/* 字体颜色 */.color_333[data-v-4fe18cab]{color:#333}.color_666[data-v-4fe18cab]{color:#666}.color_999[data-v-4fe18cab]{color:#999}.color_ccc[data-v-4fe18cab]{color:#ccc}.color_fff[data-v-4fe18cab]{color:#fff}.color_6dc[data-v-4fe18cab]{color:#6dca6d}.color_d51[data-v-4fe18cab]{color:#d51917}.color_09f[data-v-4fe18cab]{color:#09f}\r\n/* 背景色*/.bg_fff[data-v-4fe18cab]{background-color:#fff}\r\n/* 字体大小 */.size_10[data-v-4fe18cab]{font-size:%?20?%}.size_12[data-v-4fe18cab]{font-size:%?24?%}.size_14[data-v-4fe18cab]{font-size:%?28?%}.size_16[data-v-4fe18cab]{font-size:%?32?%}.size_18[data-v-4fe18cab]{font-size:%?36?%}.size_20[data-v-4fe18cab]{font-size:%?40?%}\r\n/* 字体加粗 */.font_b[data-v-4fe18cab]{font-weight:700}\r\n/* 对齐方式 */.align_c[data-v-4fe18cab]{text-align:center}.align_l[data-v-4fe18cab]{text-align:left}.align_r[data-v-4fe18cab]{text-align:right}\r\n/* 遮罩 */.shade[data-v-4fe18cab]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.8);z-index:100}\r\n/* 弹窗 */.shade_box[data-v-4fe18cab]{position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;z-index:101;min-width:%?200?%;min-height:%?200?%}.itme-box[data-v-4fe18cab]{padding:%?20?%;background-color:#fff;margin-bottom:%?20?%;line-height:%?80?%}.itme-box .title[data-v-4fe18cab]{padding-bottom:%?20?%;margin-bottom:%?20?%;border-bottom:#e5e5e5 solid 1px;line-height:normal}.demo-1[data-v-4fe18cab]{height:%?140?%;border:red solid 1px;padding:0 %?20?%}.demo-1 > uni-view[data-v-4fe18cab]:nth-child(1){background-color:#42b983}.demo-1 > uni-view[data-v-4fe18cab]:nth-child(2){background-color:#007aff}.demo-1 > uni-view[data-v-4fe18cab]:last-child{background-color:#dd524d}.demo-2[data-v-4fe18cab]{background-color:#fd673d;background-image:-webkit-gradient(linear,left top,right top,from(#fd673d),to(#ff1e0f));background-image:-webkit-linear-gradient(left,#fd673d,#ff1e0f);background-image:linear-gradient(90deg,#fd673d,#ff1e0f);padding:%?50?% %?20?% %?100?% %?20?%;line-height:normal}.demo-2 .pic[data-v-4fe18cab]{width:%?100?%;height:%?100?%;border-radius:50%;border:hsla(0,0%,100%,.5) solid %?10?%;margin-right:%?20?%}.demo-2 .edit[data-v-4fe18cab]{padding-right:%?20?%;position:relative;line-height:%?40?%;height:%?40?%}.demo-2 .edit[data-v-4fe18cab]:after{content:"";display:block;height:%?12?%;width:%?12?%;border-width:2px 2px 0 0;border-color:#fff;border-style:solid;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;top:%?14?%;right:0}.demo-3[data-v-4fe18cab]{height:%?120?%;background-color:#fff;position:relative;border-radius:4px;margin:%?-60?% %?30?% 0 %?30?%;-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc;line-height:normal}.label-box[data-v-4fe18cab]{line-height:normal}.label-box > uni-view[data-v-4fe18cab]{border:#e5e5e5 solid 1px;padding:%?4?% %?10?%;margin:0 %?10?% %?10?% 0;border-radius:3px}.copy[data-v-4fe18cab]{padding-top:%?20?%;margin-top:%?20?%;border-top:#e5e5e5 solid 1px;line-height:normal}body.?%PAGE?%[data-v-4fe18cab]{background-color:#f3f3f3}',""]),e.exports=i},"4a34":function(e,i,t){"use strict";t.r(i);var a=t("b9fa"),n=t("c1ce");for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);t("ba8f");var c,l=t("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"4fe18cab",null,!1,a["a"],c);i["default"]=r.exports},"8cdf":function(e,i,t){var a=t("001c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("232aa691",a,!0,{sourceMap:!1,shadowMode:!1})},aaf0:function(e,i){e.exports="data:image/png;base64,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UmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE0MjcxNTdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE0MjcxNDdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkE4RkFCN0M3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkE4RkFCN0Q3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZZ+3AAAB1ElEQVR42mJkAALtmZb/GfAAJkIKwIoYiAA4FV1JO0Ylk0hWxILLHTgV6cyywqoIIIAYiQinb8S4iYs036E7esgEJq6ABAGAACImMBmo5m6yDcLlR5gcNnnaumhADWIhJoOTbRC+9ILPa9+o4TWAAAIlyDVAOphCc1SYqGAICNwZxumIidi8NILz2qhBdCyPaOcicgq1wRnYAAFErRKSgZo+GzSOoWpQD1sHsRCjCDnzkpp90DM+If2jUTbqoFEHjZZDpJYroyFESeNmNFHTykEqg8g9bwACCNRiVAYyLgEx1wA7Zu3V9OMhVBt1opajBlsaCh7NZaMOGnXQgFeupHZjKO1CjUbZqINGHTTqoFEHjTpo1EGjDhqMgw342kejUTaahggpoOdg1WiUjTpoODoIvL7tzSBykB5AgPbtGIdBGIYCaBR16swROEQvzT06cxjm1lRFDC0LcpXC+xJzpIdJhOW8e4z359MVWSde1C32xRYasC0mCmascDZzrQz+7NgABAgQINnRY/iUrb5D9v9l9toqCBAgQIAAAQIESAABAgQIEKCD5ZK9QPaMigoCdIJP7NdjOyoIECBAgGQBGjB8zVDjam153T0OqInJbBAWfdg8AExKZVcA71uIAAAAAElFTkSuQmCC"},b9fa:function(e,i,t){"use strict";var a,n=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"itme-box"},[a("v-uni-view",{staticClass:"title"},[e._v("项目全局样式表 - 布局演示")]),a("v-uni-view",{staticClass:"demo-2"},[a("v-uni-view",{staticClass:"flex_col color_fff"},[a("v-uni-image",{staticClass:"pic",attrs:{src:t("aaf0"),mode:"aspectFill"}}),a("v-uni-view",{staticClass:"flex_grow"},[a("v-uni-view",{staticClass:"size_16",staticStyle:{"padding-bottom":"10rpx"}},[e._v("河浪（uni-app）")]),a("v-uni-view",{staticClass:"size_12"},[e._v("一个热爱分享又普通的web前端开发者")])],1),a("v-uni-view",{staticClass:"edit size_12"},[e._v("编辑")])],1)],1),a("v-uni-view",{staticClass:"demo-3 flex_col flex_col_3 color_999 align_c size_12"},[a("v-uni-view",[a("v-uni-view",[a("v-uni-text",{staticClass:"color_d51 font_b size_14"},[e._v("1024")]),a("v-uni-text",{staticStyle:{"padding-left":"6rpx"}},[e._v("元")])],1),a("v-uni-view",[e._v("可提金额")])],1),a("v-uni-view",[a("v-uni-view",[a("v-uni-text",{staticClass:"color_d51 font_b size_14"},[e._v("1102")]),a("v-uni-text",{staticStyle:{"padding-left":"6rpx"}},[e._v("元")])],1),a("v-uni-view",[e._v("即将到账")])],1),a("v-uni-view",[a("v-uni-view",[a("v-uni-text",{staticClass:"color_d51 font_b size_14"},[e._v("1988")]),a("v-uni-text",{staticStyle:{"padding-left":"6rpx"}},[e._v("元")])],1),a("v-uni-view",[e._v("累计收益")])],1)],1)],1),a("v-uni-view",{staticClass:"itme-box"},[a("v-uni-view",{staticClass:"title"},[e._v("弹性分列式布局 - 等比分列")]),a("v-uni-view",{staticClass:"flex_col flex_col_3 align_c demo-1 color_fff"},[a("v-uni-view",[e._v("等比分为3列")]),a("v-uni-view",[e._v("默认垂直居中")]),a("v-uni-view",[e._v("flex_col_3")])],1)],1),a("v-uni-view",{staticClass:"itme-box"},[a("v-uni-view",{staticClass:"title"},[e._v("弹性分列式布局 - 水平居中")]),a("v-uni-view",{staticClass:"flex_col flex_center flex_col_3 align_c demo-1 color_fff"},[a("v-uni-view",[e._v("我被水平居中了")]),a("v-uni-view",[e._v("flex_center")])],1)],1),a("v-uni-view",{staticClass:"itme-box"},[a("v-uni-view",{staticClass:"title"},[e._v("弹性分列式布局 - 两端对齐")]),a("v-uni-view",{staticClass:"flex_col flex_space flex_col_3 align_c demo-1 color_fff"},[a("v-uni-view",[e._v("我们被分开了")]),a("v-uni-view",[e._v("flex_space")])],1)],1),a("v-uni-view",{staticClass:"itme-box"},[a("v-uni-view",{staticClass:"title"},[e._v("弹性分列式布局 - 弹性设置")]),a("v-uni-view",{staticClass:"flex_col flex_center flex_col_3 align_c demo-1 color_fff"},[a("v-uni-view",[e._v("右边的是弹性的")]),a("v-uni-view",{staticClass:"flex_grow"},[e._v("flex_grow")])],1)],1),a("v-uni-view",{staticClass:"itme-box"},[a("v-uni-view",{staticClass:"title"},[e._v("弹性分列式布局 - 允许换行")]),a("v-uni-view",{staticClass:"flex_col flex_wrap flex_col_2 align_c demo-1 color_fff",staticStyle:{height:"220rpx"}},[a("v-uni-view",[e._v("请求换行")]),a("v-uni-view",[e._v("默认垂直居中")]),a("v-uni-view",[e._v("flex_wrap")])],1)],1),a("v-uni-view",{staticClass:"itme-box"},[a("v-uni-view",{staticClass:"title"},[e._v("弹性分行式布局 - 自动适应容器高度")]),a("v-uni-view",{staticClass:"flex_row flex_wrap flex_col_2 align_c demo-1 color_fff",staticStyle:{height:"600rpx",padding:"20rpx"}},[a("v-uni-view",{staticStyle:{width:"100%"}},[e._v("我被下面的弹性元素自动顶到了上方")]),a("v-uni-view",{staticClass:"flex_grow flex_col flex_center flex_wrap",staticStyle:{width:"100%"}},[a("v-uni-view",[e._v("我是分行式布局中的弹性元素")]),a("v-uni-view",[e._v("我会占满容器高度所有剩余的空间")])],1),a("v-uni-view",{staticStyle:{width:"100%"}},[e._v("flex_row")])],1)],1),a("v-uni-view",{staticClass:"itme-box"},[a("v-uni-view",{staticClass:"title"},[e._v("样式表内容清单：")]),a("v-uni-view",{staticClass:"label-box flex_col flex_wrap size_12 color_666"},[a("v-uni-view",[e._v("根元素样式")]),a("v-uni-view",[e._v("常用元素尺寸规则")]),a("v-uni-view",[e._v("弹性盒子")]),a("v-uni-view",[e._v("字体颜色")]),a("v-uni-view",[e._v("字体大小")]),a("v-uni-view",[e._v("对齐方式")]),a("v-uni-view",[e._v("弹窗")])],1),a("v-uni-view",{staticClass:"size_12 color_999 copy"},[a("v-uni-view",[e._v("更多使用，请查看 global.scss 文件。源码有详细注释")]),a("v-uni-view",[e._v("2019 helang.love@qq.com")])],1)],1)],1)},o=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return a}))},ba8f:function(e,i,t){"use strict";var a=t("8cdf"),n=t.n(a);n.a},c1ce:function(e,i,t){"use strict";t.r(i);var a=t("e5f5"),n=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(i,e,(function(){return a[e]}))}(o);i["default"]=n.a},e5f5:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{}},methods:{}};i.default=a}}]);