(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-talk"],{"035e":function(t,e,n){"use strict";n.r(e);var r=n("1151"),o=n("b65f");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("7d91");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"07b8986f",null,!1,r["a"],a);e["default"]=s.exports},1151:function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"tips color_fff size_12 align_c",class:{show:t.ajax.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getHistoryMsg.apply(void 0,arguments)}}},[t._v(t._s(t.ajax.loadText))]),n("v-uni-view",{staticClass:"box-1",attrs:{id:"list-box"}},[n("v-uni-view",{staticClass:"talk-list"},t._l(t.talkList,(function(e,r){return n("v-uni-view",{key:r,attrs:{id:"msg-"+e.id}},[n("v-uni-view",{staticClass:"item flex_col",class:1==e.type?"push":"pull"},[n("v-uni-image",{staticClass:"pic",attrs:{src:e.pic,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"content"},[t._v(t._s(e.content))])],1)],1)})),1)],1),n("v-uni-view",{staticClass:"box-2"},[n("v-uni-view",{staticClass:"flex_col"},[n("v-uni-view",{staticClass:"flex_grow"},[n("v-uni-input",{staticClass:"content",attrs:{type:"text",placeholder:"请输入聊天内容","placeholder-style":"color:#DDD;","cursor-spacing":6},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("v-uni-button",{staticClass:"send",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("发送")])],1)],1)],1)},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},2493:function(t,e,n){var r=n("fc4e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("6bdd8852",r,!0,{sourceMap:!1,shadowMode:!1})},"7d91":function(t,e,n){"use strict";var r=n("2493"),o=n.n(r);o.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",f="object"===typeof t,l=e.regeneratorRuntime;if(l)f&&(t.exports=l);else{l=e.regeneratorRuntime=f?t.exports:{},l.wrap=m;var u="suspendedStart",d="suspendedYield",b="executing",h="completed",p={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(C([])));w&&w!==r&&o.call(w,a)&&(v=w);var x=j.prototype=k.prototype=Object.create(v);_.prototype=x.constructor=j,j.constructor=_,j[s]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},L(z.prototype),z.prototype[c]=function(){return this},l.AsyncIterator=z,l.async=function(t,e,n,r){var o=new z(m(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),f=o.call(a,"finallyLoc");if(s&&f){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function m(t,e,n,r){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=T(t,n,a),i}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function _(){}function j(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function z(t){function e(n,r,i,a){var c=y(t[n],t,r);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&o.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function T(t,e,n){var r=u;return function(o,i){if(r===b)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return A()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=b;var s=y(t,e,n);if("normal"===s.type){if(r=n.done?h:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=y(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a7f6:function(t,e,n){"use strict";var r=n("ee27");n("99af"),n("26e9"),n("d3b7"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("d0ff"));n("96cf");var i=r(n("c964")),a={data:function(){return{talkList:[],ajax:{rows:20,page:1,flag:!0,loading:!0,loadText:"正在获取消息"},content:""}},mounted:function(){var t=this;this.$nextTick((function(){t.getHistoryMsg()}))},onPageScroll:function(t){t.scrollTop<5&&this.getHistoryMsg()},methods:{getHistoryMsg:function(){var t=this;if(this.ajax.flag){var e=function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.hideLoadTips(),t.ajax.flag=!1,e.next=4,t.joinHistoryMsg();case 4:n=e.sent,console.log("----- 模拟数据格式，供参考 -----"),console.log(n),r="",r=t.ajax.page>1?"#msg-".concat(t.talkList[0].id):"#msg-".concat(n[n.length-1].id),t.talkList=[].concat((0,o.default)(n),(0,o.default)(t.talkList)),t.$nextTick((function(){t.setPageScrollTo(r),t.hideLoadTips(!0),n.length<t.ajax.rows||(t.ajax.page++,setTimeout((function(){t.ajax.flag=!0}),200))}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}},joinHistoryMsg:function(){var t=this,e=function(){for(var e=[],n=(t.ajax.page-1)*t.ajax.rows,r=n+t.ajax.rows,o=n;o<r;o++)e.push({id:o,content:"这是历史记录的第".concat(o+1,"条消息"),type:Math.random()>.5?1:0,pic:"/static/logo.png"});return e.reverse(),e};return new Promise((function(t,n){setTimeout((function(){var n=e();t(n)}),1500)}))},setPageScrollTo:function(t){var e=uni.createSelectorQuery().in(this).select(t);e.boundingClientRect((function(t){uni.pageScrollTo({scrollTop:t.top-30,duration:0})})).exec()},hideLoadTips:function(t){var e=this;t?(this.ajax.loadText="消息获取成功",setTimeout((function(){e.ajax.loading=!1}),300)):(this.ajax.loading=!0,this.ajax.loadText="正在获取消息")},send:function(){var t=this;this.content?(uni.showLoading({title:"正在发送"}),setTimeout((function(){uni.hideLoading();var e={id:(new Date).getTime(),content:t.content,type:1,pic:"/static/logo.png"};t.talkList.push(e),t.$nextTick((function(){t.content="",uni.pageScrollTo({scrollTop:999999,duration:0})}))}),1500)):uni.showToast({title:"请输入有效的内容",icon:"none"})}}};e.default=a},b65f:function(t,e,n){"use strict";n.r(e);var r=n("a7f6"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));n("d3b7"),n("e6cf");function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(f){return void n(f)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}},d0ff:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if(Array.isArray(t))return r(t)}n.r(e);n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return o(t)||i(t)||a(t)||c()}n.d(e,"default",(function(){return s}))},fc4e:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*\r\n *  uni-app 全局样式表\r\n *  作者:helang\r\n *  邮箱:helang.love@qq.com\r\n*/\r\n/* 根元素样式 设置页面背景、字体大小、字体颜色，字符间距、长单词换行 */uni-page-body[data-v-07b8986f]{background-color:#f3f3f3;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#333;letter-spacing:0;word-wrap:break-word}\r\n/* 设置常用元素尺寸规则 */uni-view[data-v-07b8986f], uni-textarea[data-v-07b8986f], uni-input[data-v-07b8986f], uni-label[data-v-07b8986f], uni-form[data-v-07b8986f], uni-button[data-v-07b8986f], uni-image[data-v-07b8986f]{-webkit-box-sizing:border-box;box-sizing:border-box}\r\n/* 按钮样式处理 */uni-button[data-v-07b8986f]{font-size:%?28?%}\r\n/* 取消按钮默认的边框线效果 */uni-button[data-v-07b8986f]:after{border:none}\r\n/* 设置图片默认样式，取消默认尺寸 */uni-image[data-v-07b8986f]{display:block;height:auto;width:auto}\r\n/* 输入框默认字体大小 */uni-textarea[data-v-07b8986f], uni-input[data-v-07b8986f]{font-size:%?28?%}\r\n/* 列式弹性盒子 */.flex_col[data-v-07b8986f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}\r\n/* 行式弹性盒子 */.flex_row[data-v-07b8986f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start}\r\n/* 弹性盒子弹性容器 */.flex_col .flex_grow[data-v-07b8986f]{width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.flex_row .flex_grow[data-v-07b8986f]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}\r\n/* 弹性盒子允许换行 */.flex_col.flex_wrap[data-v-07b8986f]{-webkit-flex-wrap:wrap;flex-wrap:wrap}\r\n/* 弹性盒子居中对齐 */.flex_col.flex_center[data-v-07b8986f], .flex_row.flex_center[data-v-07b8986f]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\r\n/* 列式弹性盒子两端对齐 */.flex_col.flex_space[data-v-07b8986f]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\r\n/* 弹性盒子快速分栏 ,这里非常郁闷 uniapp 居然不支持 * 选择器 */.flex_col.flex_col_2 > uni-view[data-v-07b8986f]{width:50%}.flex_col.flex_col_3 > uni-view[data-v-07b8986f]{width:33.33333%}.flex_col.flex_col_4 > uni-view[data-v-07b8986f]{width:25%}.flex_col.flex_col_5 > uni-view[data-v-07b8986f]{width:20%}.flex_col.flex_col_6 > uni-view[data-v-07b8986f]{width:16.66666%}\r\n/* 字体颜色 */.color_333[data-v-07b8986f]{color:#333}.color_666[data-v-07b8986f]{color:#666}.color_999[data-v-07b8986f]{color:#999}.color_ccc[data-v-07b8986f]{color:#ccc}.color_fff[data-v-07b8986f]{color:#fff}.color_6dc[data-v-07b8986f]{color:#6dca6d}.color_d51[data-v-07b8986f]{color:#d51917}.color_09f[data-v-07b8986f]{color:#09f}\r\n/* 背景色*/.bg_fff[data-v-07b8986f]{background-color:#fff}\r\n/* 字体大小 */.size_10[data-v-07b8986f]{font-size:%?20?%}.size_12[data-v-07b8986f]{font-size:%?24?%}.size_14[data-v-07b8986f]{font-size:%?28?%}.size_16[data-v-07b8986f]{font-size:%?32?%}.size_18[data-v-07b8986f]{font-size:%?36?%}.size_20[data-v-07b8986f]{font-size:%?40?%}\r\n/* 字体加粗 */.font_b[data-v-07b8986f]{font-weight:700}\r\n/* 对齐方式 */.align_c[data-v-07b8986f]{text-align:center}.align_l[data-v-07b8986f]{text-align:left}.align_r[data-v-07b8986f]{text-align:right}\r\n/* 遮罩 */.shade[data-v-07b8986f]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.8);z-index:100}\r\n/* 弹窗 */.shade_box[data-v-07b8986f]{position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;z-index:101;min-width:%?200?%;min-height:%?200?%}uni-page-body[data-v-07b8986f]{background-color:#f3f3f3;font-size:%?28?%}\r\n/* 加载数据提示 */.tips[data-v-07b8986f]{position:fixed;left:0;top:var(--window-top);width:100%;z-index:9;background-color:rgba(0,0,0,.15);height:%?72?%;line-height:%?72?%;-webkit-transform:translateY(%?-80?%);transform:translateY(%?-80?%);-webkit-transition:-webkit-transform .3s ease-in-out 0s;transition:-webkit-transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s,-webkit-transform .3s ease-in-out 0s}.tips.show[data-v-07b8986f]{-webkit-transform:translateY(0);transform:translateY(0)}.box-1[data-v-07b8986f]{width:100%;height:auto;padding-bottom:%?100?%;-webkit-box-sizing:content-box;box-sizing:initial;\r\n  /* 兼容iPhoneX */margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom)}.box-2[data-v-07b8986f]{position:fixed;left:0;width:100%;bottom:0;height:auto;z-index:2;border-top:#e5e5e5 solid 1px;-webkit-box-sizing:content-box;box-sizing:initial;background-color:#f3f3f3;\r\n  /* 兼容iPhoneX */padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.box-2 > uni-view[data-v-07b8986f]{padding:0 %?20?%;height:%?100?%}.box-2 .content[data-v-07b8986f]{background-color:#fff;height:%?64?%;padding:0 %?20?%;border-radius:%?32?%;font-size:%?28?%}.box-2 .send[data-v-07b8986f]{background-color:#42b983;color:#fff;height:%?64?%;margin-left:%?20?%;border-radius:%?32?%;padding:0;width:%?120?%;line-height:%?62?%}.box-2 .send[data-v-07b8986f]:active{background-color:#5fc496}.talk-list[data-v-07b8986f]{padding-bottom:%?20?%\r\n  /* 消息项，基础类 */}.talk-list .item[data-v-07b8986f]{padding:%?20?% %?20?% 0 %?20?%;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;color:#333\r\n  /* 收到的消息 */\r\n  /* 发出的消息 */}.talk-list .item .pic[data-v-07b8986f]{width:%?92?%;height:%?92?%;border-radius:50%;border:#fff solid 1px}.talk-list .item .content[data-v-07b8986f]{padding:%?20?%;border-radius:4px;max-width:%?500?%;word-break:break-all;line-height:%?52?%;position:relative}.talk-list .item.pull .content[data-v-07b8986f]{margin-left:%?32?%;background-color:#fff}.talk-list .item.pull .content[data-v-07b8986f]::after{content:"";display:block;width:0;height:0;border-top:%?16?% solid transparent;border-bottom:%?16?% solid transparent;border-right:%?20?% solid #fff;position:absolute;top:%?30?%;left:%?-18?%}.talk-list .item.push[data-v-07b8986f]{\r\n  /* 主轴为水平方向，起点在右端。使不修改DOM结构，也能改变元素排列顺序 */-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.talk-list .item.push .content[data-v-07b8986f]{margin-right:%?32?%;background-color:#a0e959}.talk-list .item.push .content[data-v-07b8986f]::after{content:"";display:block;width:0;height:0;border-top:%?16?% solid transparent;border-bottom:%?16?% solid transparent;border-left:%?20?% solid #a0e959;position:absolute;top:%?30?%;right:%?-18?%}body.?%PAGE?%[data-v-07b8986f]{background-color:#f3f3f3;background-color:#f3f3f3}',""]),t.exports=e}}]);