(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-idiom"],{"0aad":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-1a5f0a3e]{height:100%}\r\n/* 列式弹性盒子 */.flex_col[data-v-1a5f0a3e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}\r\n/* 行式弹性盒子 */.flex_row[data-v-1a5f0a3e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start}\r\n/* 弹性盒子弹性容器 */.flex_col .flex_grow[data-v-1a5f0a3e]{width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.flex_row .flex_grow[data-v-1a5f0a3e]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}\r\n/* 弹性盒子允许换行 */.flex_col.flex_wrap[data-v-1a5f0a3e]{-webkit-flex-wrap:wrap;flex-wrap:wrap}\r\n/* 弹性盒子居中对齐 */.flex_col.flex_center[data-v-1a5f0a3e],\r\n.flex_row.flex_center[data-v-1a5f0a3e]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\r\n/* 列式弹性盒子两端对齐 */.flex_col.flex_space[data-v-1a5f0a3e]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.container[data-v-1a5f0a3e]{position:relative;height:100%;font-size:%?28?%;color:#333}.container > uni-image[data-v-1a5f0a3e]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.container > uni-view[data-v-1a5f0a3e]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2}.container .content_box[data-v-1a5f0a3e]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 %?20?% %?80?% %?20?%}.container .content_box .top_label[data-v-1a5f0a3e]{margin-bottom:%?30?%;text-align:center;color:#0069b7}.container .content_box .top_label > uni-view[data-v-1a5f0a3e]{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:hsla(0,0%,100%,.8);width:%?200?%;line-height:%?60?%;-webkit-border-radius:%?30?%;border-radius:%?30?%;padding:0 %?20?%}.container .img_box[data-v-1a5f0a3e]{background-color:#0069b7;padding:%?30?% %?40?%;-webkit-border-radius:8px;border-radius:8px}.container .img_box > uni-image[data-v-1a5f0a3e]{height:%?400?%;width:100%}.container .img_box .btn[data-v-1a5f0a3e]{margin:%?20?% %?100?% 0 %?100?%}.container .img_box .btn > uni-view[data-v-1a5f0a3e]{color:#fff;line-height:%?70?%;width:%?150?%;text-align:center;-webkit-border-radius:%?35?%;border-radius:%?35?%;font-size:%?30?%}.container .img_box .btn > uni-view.b1[data-v-1a5f0a3e]{background-color:#41cf5a}.container .img_box .btn > uni-view.b1[data-v-1a5f0a3e]:active{background-color:#4cd565}.container .img_box .btn > uni-view.b2[data-v-1a5f0a3e]{background-color:#ffb047}.container .img_box .btn > uni-view.b2[data-v-1a5f0a3e]:active{background-color:#faba63}.container .selected_box[data-v-1a5f0a3e]{margin:%?40?% %?100?%}.container .selected_box > uni-view[data-v-1a5f0a3e]{width:%?80?%;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?32?%}.container .selected_box > uni-view.item[data-v-1a5f0a3e]{background-color:#fff;-webkit-border-radius:3px;border-radius:3px;color:#0069b7}.container .selected_box > uni-view.reset[data-v-1a5f0a3e]{color:#0069b7}.container .select_box[data-v-1a5f0a3e]{margin:%?10?% %?50?% 0 %?50?%}.container .select_box > uni-view[data-v-1a5f0a3e]{width:20%;line-height:%?68?%;text-align:center;margin-bottom:%?20?%;color:#fff}.container .select_box > uni-view > uni-view[data-v-1a5f0a3e]{height:%?68?%;width:%?68?%;margin:0 auto;background-color:#0069b7;-webkit-border-radius:3px;border-radius:3px}.container .select_box > uni-view > uni-view[data-v-1a5f0a3e]:active{background-color:#1e85d7}',""]),e.exports=t},7735:function(e,t,i){var n=i("0aad");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("bbb31a5a",n,!0,{sourceMap:!1,shadowMode:!1})},7883:function(e,t,i){"use strict";var n=i("7735"),a=i.n(n);a.a},aff5:function(e,t,i){"use strict";i.r(t);var n=i("d784a"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},bfdd:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[["/static/images/idiom/008.jpg","一见钟情射箭字中穿黄爱河浪原创","一见钟情","喻男女双方第一次见面便互相喜爱。"],["/static/images/idiom/001.jpg","一刀两断文字书写墨水难行原创作","一刀两断","比喻断绝关系。形容行事乾脆爽快。"],["/static/images/idiom/002.jpg","一日千里走路行步阳山示炸品分享","一日千里","形容良马跑得很快。比喻进步神速或事业发展得很快。"],["/static/images/idiom/004.jpg","一目了然眼睛看视文字平洗转载好","一目了然","看一眼就完全清楚明白。"],["/static/images/idiom/010.jpg","一刻千金头转向嚣浮轻巧鹰欢迎用","一刻千金","一刻时光，价值千金。形容时间非常宝贵。"]],a={dataList:n};t.default=a},c9be:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-image",{attrs:{src:"/static/images/idiom/bg.jpg",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"flex_col"},[i("v-uni-view",{staticClass:"content_box"},[i("v-uni-view",{staticClass:"flex_col flex_space top_label"},[i("v-uni-view",[e._v("称号："+e._s(e.title))]),i("v-uni-view",[e._v("金币："+e._s(e.gold))]),i("v-uni-view",[e._v("关卡："+e._s(e.passIndex+1))])],1),i("v-uni-view",{staticClass:"img_box"},[i("v-uni-image",{attrs:{src:e.list[e.passIndex][0],mode:"aspectFill"}}),i("v-uni-view",{staticClass:"btn flex_col flex_space"},[i("v-uni-view",{staticClass:"b1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.useHelp.apply(void 0,arguments)}}},[e._v("提 示")]),i("v-uni-view",{staticClass:"b2",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.share.apply(void 0,arguments)}}},[e._v("分 享")])],1)],1),i("v-uni-view",{staticClass:"flex_col flex_space selected_box"},[e._l(e.selected,(function(t,n){return i("v-uni-view",{key:n,staticClass:"item",attrs:{"data-index":n},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelPicker.apply(void 0,arguments)}}},[e._v(e._s(t.txt))])})),i("v-uni-view",{staticClass:"reset",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.resetPicker.apply(void 0,arguments)}}},[e._v("重选")])],2),i("v-uni-view",{staticClass:"select_box flex_col flex_wrap"},e._l(e.selectList,(function(t,n){return i("v-uni-view",{key:n},[i("v-uni-view",{attrs:{"data-index":n},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.picker.apply(void 0,arguments)}}},[e._v(e._s(t))])],1)})),1)],1)],1)],1)},s=[]},d784a:function(e,t,i){"use strict";var n=i("4ea4");i("c740"),i("4160"),i("4e82"),i("a9e3"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("bfdd")),s={data:function(){return{list:a.default.dataList,passIndex:0,gold:20,selected:[{},{},{},{}],selectList:[]}},onLoad:function(){this.setPassInfo()},computed:{title:function(){return this.passIndex<10?"童生":this.passIndex<30?"秀才":this.passIndex<50?"举人":this.passIndex<100?"贡士":this.passIndex<200?"进士":this.passIndex<200?"探花":this.passIndex<500?"榜眼":"状元"}},methods:{setPassInfo:function(){for(var e=[],t=0;t<4;t++)e.push({txt:"",index:-1});var i=this.list[this.passIndex][1];i=i.split("").sort((function(){return Math.random()>.5?-1:1})),this.selected=e,this.selectList=i},nextPass:function(){this.list.length-1<=this.passIndex?uni.showToast({title:"恭喜已通关",icon:"success",duration:2e3}):(this.passIndex++,this.setPassInfo())},picker:function(e){var t=this,i=Number(e.currentTarget.dataset.index);if(this.selectList[i]){var n=this.selected.findIndex((function(e,i){return!t.selected[i].txt}));this.$set(this.selected,n,{txt:this.selectList[i],index:i}),this.$set(this.selectList,i,""),this.$nextTick((function(){t.verify()}))}},verify:function(){var e=this;if(this.findIndex()<0){var t=this.list[this.passIndex];this.gold+=5,uni.showModal({title:t[2],content:"[释义]:".concat(t[3]),showCancel:!1,confirmText:"下一关",success:function(){e.nextPass()}})}},findIndex:function(){var e=this,t=this.list[this.passIndex][2],i=this.selected.findIndex((function(i,n){return e.selected[n].txt!=t.charAt(n)}));return i},resetPicker:function(){var e=this,t=[];this.selected.forEach((function(i,n){i.index>=0&&e.$set(e.selectList,i.index,i.txt),t.push({txt:"",index:-1})})),this.selected=t},cancelPicker:function(e){var t=Number(e.currentTarget.dataset.index);this.selected[t].index<0||(this.$set(this.selectList,this.selected[t].index,this.selected[t].txt),this.$set(this.selected,t,{txt:"",index:-1}))},useHelp:function(){var e=this;if(this.gold<10)uni.showToast({title:"金币不足",icon:"none",duration:2e3});else{var t=this.findIndex(),i=this.selectList.findIndex((function(i,n){if(i==e.list[e.passIndex][2].charAt(t))return n}));this.selected[t].index>=0&&this.$set(this.selectList,this.selected[t].index,this.selected[t].txt),this.$set(this.selected,t,{txt:this.selectList[i],index:i}),this.$set(this.selectList,i,""),this.$nextTick((function(){e.gold-=10,e.verify()}))}},share:function(){uni.showModal({title:"欢迎体验看图猜成语",content:"河浪原创，文明转载\nhelang.love@qq.com\n2019 uni-app 示例源码分享",showCancel:!1,confirmText:"我知道了"})}}};t.default=s},fa0b:function(e,t,i){"use strict";i.r(t);var n=i("c9be"),a=i("aff5");for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("7883");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1a5f0a3e",null,!1,n["a"],o);t["default"]=c.exports}}]);