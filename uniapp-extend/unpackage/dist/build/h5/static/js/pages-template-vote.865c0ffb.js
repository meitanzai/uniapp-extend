(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-vote"],{"2e02":function(t,n,i){"use strict";var e=i("349d"),o=i.n(e);o.a},3440:function(t,n,i){"use strict";i.r(n);var e=i("6b06"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"349d":function(t,n,i){var e=i("c63b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("410e0ba7",e,!0,{sourceMap:!1,shadowMode:!1})},"6b06":function(t,n,i){"use strict";i("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{list:[],isVote:!1,voteIndex:-1}},onLoad:function(){this.initList(),console.log(this.list)},methods:{initList:function(){var t=["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","台湾","香港","澳门"],n=t.map((function(t,n){var i=Math.floor(100*Math.random());return{name:t,count:i}}));this.list=n},onVote:function(t){if(!this.isVote){var n=t.currentTarget.dataset.index,i=this.list[n].count+1;this.$set(this.list[n],"count",i),this.isVote=!0,this.voteIndex=n,console.log(n)}}}};n.default=e},"725d":function(t,n,i){"use strict";i.r(n);var e=i("7637"),o=i("3440");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("2e02");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"63b01935",null,!1,e["a"],r);n["default"]=u.exports},7637:function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticClass:"t1"},[t._v("给自己的家乡投票")]),i("v-uni-view",{staticStyle:{height:"108rpx"}}),i("v-uni-view",{staticClass:"vote-list"},t._l(t.list,(function(n,e){return i("v-uni-view",{key:e,class:{active:e==t.voteIndex},attrs:{"data-index":e},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onVote.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(n.name))]),i("v-uni-view",{staticClass:"path",style:{width:n.count+"%"}},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isVote,expression:"isVote"}]})],1)],1)})),1)],1)},a=[]},c63b:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.t1[data-v-63b01935]{box-sizing:border-box;line-height:%?88?%;padding:0 %?30?%;position:fixed;width:100%;left:0;top:var(--window-top);font-size:%?28?%;border-bottom:#f1f1f1 solid 1px;background-color:#fff;z-index:5}.vote-list[data-v-63b01935]{font-size:%?28?%;padding:0 %?30?%}.vote-list > uni-view[data-v-63b01935]{box-sizing:border-box;height:%?90?%;margin-bottom:%?20?%;line-height:%?86?%;padding:0 %?20?%;position:relative;background-color:#f6f6f6;color:333}.vote-list > uni-view[data-v-63b01935]:active{background-color:#f1f1f1}.vote-list > uni-view.active[data-v-63b01935]{color:#42b983;background-color:#f5fff9}.vote-list > uni-view .path[data-v-63b01935]{position:absolute;height:2px;bottom:0;left:0;overflow:hidden}.vote-list > uni-view .path > uni-view[data-v-63b01935]{height:100%;width:100%;background-color:#42b983;-webkit-animation:run-data-v-63b01935 .5s ease-in-out 0s 1 normal;animation:run-data-v-63b01935 .5s ease-in-out 0s 1 normal}@-webkit-keyframes run-data-v-63b01935{from{width:0}to{width:100%}}@keyframes run-data-v-63b01935{from{width:0}to{width:100%}}',""]),t.exports=n}}]);