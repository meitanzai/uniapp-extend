(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/weChat/weChat"],{2556:function(t,e,n){"use strict";n.r(e);var i=n("80f5"),o=n("a8f7");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("b53f");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"30ea2acc",null);e["default"]=s.exports},"80f5":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},a8f7:function(t,e,n){"use strict";n.r(e);var i=n("ed94"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=o.a},b53f:function(t,e,n){"use strict";var i=n("c2b2"),o=n.n(i);o.a},c2b2:function(t,e,n){},ed94:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{userList:[],winSize:{},showShade:!1,showPop:!1,popButton:["标为关注","置顶聊天","删除该聊天"],popStyle:"",pickerUserIndex:-1}},onLoad:function(){this.getListData(),this.getWindowSize()},methods:{listTap:function(){this.showShade||console.log(t("列表触摸事件触发"," at pages\\weChat\\weChat.vue:62"))},getListData:function(){for(var t=[],e=0;e<20;e++)t.push({name:"第".concat(e+1,"个用户"),time:"5月20日",info:"这是第".concat(e+1,"个用户的聊天信息")});this.userList=t},getWindowSize:function(){var t=this;n.getSystemInfo({success:function(e){t.winSize={witdh:e.windowWidth,height:e.windowHeight}}})},onLongPress:function(t){var e=this,n=[t.touches[0],"",t.currentTarget.dataset.index],i=n[0],o=n[1],c=n[2];o=i.clientY>this.winSize.height/2?"bottom:".concat(this.winSize.height-i.clientY,"px;"):"top:".concat(i.clientY,"px;"),i.clientX>this.winSize.witdh/2?o+="right:".concat(this.winSize.witdh-i.clientX,"px"):o+="left:".concat(i.clientX,"px"),this.popStyle=o,this.pickerUserIndex=Number(c),this.showShade=!0,this.$nextTick(function(){setTimeout(function(){e.showPop=!0},10)})},hidePop:function(){var t=this;this.showPop=!1,this.pickerUserIndex=-1,setTimeout(function(){t.showShade=!1},250)},pickerMenu:function(e){var i=Number(e.currentTarget.dataset.index);console.log(t("第".concat(this.pickerUserIndex+1,"个用户,第").concat(i+1,"个按钮")," at pages\\weChat\\weChat.vue:123")),n.showToast({title:"第".concat(this.pickerUserIndex+1,"个用户,第").concat(i+1,"个按钮"),icon:"none",mask:!0,duration:600}),this.hidePop()}}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["13cc","common/runtime","common/vendor"]]]);