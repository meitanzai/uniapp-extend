(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-moveVerify"],{"23ae":function(t,n,i){"use strict";i.r(n);var e=i("ac33"),a=i("676c");for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);i("6cf1");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"20550414",null,!1,e["a"],c);n["default"]=r.exports},49104:function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticStyle:{padding:"30px 15px"}},[i("move-verify",{ref:"verifyElement",on:{result:function(n){arguments[0]=n=t.$handleEvent(n),t.verifyResult.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"result",class:{is:t.resultData.flag}},[i("v-uni-text",[t._v("校验结果：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.resultData.flag?"已":"未")+"通过")]),i("v-uni-text",[t._v("，拖动次数：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.resultData.count||0))])],1),i("v-uni-button",{staticStyle:{"margin-top":"30rpx"},attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.verifyReset.apply(void 0,arguments)}}},[t._v("重置插件（恢复默认）")])],1)],1)},o=[];i.d(n,"b",function(){return a}),i.d(n,"c",function(){return o}),i.d(n,"a",function(){return e})},"4fb2":function(t,n,i){"use strict";var e=i("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("23ae")),o={components:{"move-verify":a.default},data:function(){return{resultData:{}}},methods:{verifyResult:function(t){console.log(t),this.resultData=t},verifyReset:function(){this.$refs.verifyElement.reset(),this.resultData={}}}};n.default=o},"56dd":function(t,n,i){"use strict";var e=i("ef7b"),a=i.n(e);a.a},"676c":function(t,n,i){"use strict";i.r(n);var e=i("6be8"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},"6be8":function(t,n,i){"use strict";var e=i("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("795b")),o={name:"move-verify",data:function(){return{x:0,oldx:0,isOk:!1,size:{},count:0,isMove:!1}},mounted:function(){var t=this,n=function(n){return new a.default(function(i,e){var a=uni.createSelectorQuery().in(t).select(n);a.fields({size:!0},function(t){i(t.width)}).exec()})};this.$nextTick(function(){n(".on-pathway").then(function(i){t.size.pathway=i,n(".on-track").then(function(n){t.size.track=n})})})},methods:{onMove:function(t){this.oldx=t.detail.x},onEnd:function(){var t=this;this.isOk||this.oldx<1||(this.count++,this.x=this.oldx,this.oldx+1>this.size.pathway-this.size.track?(this.isOk=!0,this.$emit("result",{flag:!0,count:this.count})):(this.$nextTick(function(){setTimeout(function(){t.x=0,t.oldx=0},100)}),this.$emit("result",{flag:!1,count:this.count})))},reset:function(){this.x=0,this.oldx=0,this.count=0,this.isOk=!1}}};n.default=o},"6cf1":function(t,n,i){"use strict";var e=i("81cc"),a=i.n(e);a.a},7123:function(t,n,i){"use strict";i.r(n);var e=i("4fb2"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},"81cc":function(t,n,i){var e=i("cfb6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("00d5040c",e,!0,{sourceMap:!1,shadowMode:!1})},ac33:function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"pathway on-pathway",on:{touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.onEnd.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tips"},[t.isOk?i("v-uni-text",{staticStyle:{color:"#FFFFFF"}},[t._v("验证通过")]):i("v-uni-text",[t._v("拖动滑块验证")])],1),i("v-uni-view",{staticClass:"track",style:{transform:"translateX("+t.oldx+"px)"}}),i("v-uni-movable-area",{attrs:{animation:!0}},[i("v-uni-movable-view",{staticClass:"on-track",class:{active:t.isOk},attrs:{x:t.x,direction:"horizontal",disabled:t.isOk},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.onMove.apply(void 0,arguments)}}})],1)],1)},o=[];i.d(n,"b",function(){return a}),i.d(n,"c",function(){return o}),i.d(n,"a",function(){return e})},ad6c:function(t,n,i){"use strict";i.r(n);var e=i("49104"),a=i("7123");for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);i("56dd");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"b2ccdd58",null,!1,e["a"],c);n["default"]=r.exports},cfb6:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.pathway[data-v-20550414]{height:%?80?%;width:100%;background-color:#7ac23c;position:relative;overflow:hidden\n  /* 提示信息 */\n  /* 滑动轨道 */\n  /* 禁止 */}.pathway .tips[data-v-20550414]{position:absolute;top:0;left:0;width:100%;line-height:%?80?%;text-align:center;color:#666;font-size:%?32?%;z-index:3}.pathway .track[data-v-20550414]{position:absolute;top:0;left:0;background-color:#eee;width:100%;height:100%;padding-left:0;box-sizing:initial;-webkit-transform:translateX(0);transform:translateX(0)}.pathway uni-movable-area[data-v-20550414]{position:absolute;top:0;left:0;height:100%;width:100%;background:none;z-index:5}.pathway uni-movable-view[data-v-20550414]{height:100%;width:%?100?%;box-sizing:border-box;background-color:#fff;border:#ddd solid 1px;background-position:50%;background-repeat:no-repeat;background-size:auto %?32?%;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==")}.pathway uni-movable-view.active[data-v-20550414]{border:#7ac23c solid 1px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==")}.pathway .disabled[data-v-20550414]{position:absolute;z-index:10;height:100%;width:100%;top:0;left:0}',""])},e450:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.result[data-v-b2ccdd58]{border:#e64340 solid 1px;margin:%?50?% 0 0 0;padding:%?30?%;font-size:%?36?%;color:#e64340}.result.is[data-v-b2ccdd58]{border:#7ac23c solid 1px;color:#7ac23c}',""])},ef7b:function(t,n,i){var e=i("e450");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("6ca1cebe",e,!0,{sourceMap:!1,shadowMode:!1})}}]);