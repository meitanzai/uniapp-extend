(function(e){function n(n){for(var o,r,s=n[0],c=n[1],p=n[2],g=0,l=[];g<s.length;g++)r=s[g],a[r]&&l.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(n);while(l.length)l.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},a={index:0},i=[];function r(e){return s.p+"static/js/"+({"pages-component-asyncSwitch":"pages-component-asyncSwitch","pages-component-checkbox":"pages-component-checkbox","pages-component-highlight":"pages-component-highlight","pages-component-moveVerify":"pages-component-moveVerify","pages-component-pickerColor":"pages-component-pickerColor","pages-component-tab":"pages-component-tab","pages-index-index":"pages-index-index","pages-sdk-globalCss":"pages-sdk-globalCss","pages-sdk-globalJs":"pages-sdk-globalJs","pages-sdk-webSocket":"pages-sdk-webSocket","pages-template-goodsList":"pages-template-goodsList","pages-template-goodsList_scroll":"pages-template-goodsList_scroll","pages-template-goodsList_swiper":"pages-template-goodsList_swiper","pages-template-idiom":"pages-template-idiom","pages-template-photoList":"pages-template-photoList","pages-template-swiper_image":"pages-template-swiper_image","pages-template-swiper_video":"pages-template-swiper_video","pages-template-talk":"pages-template-talk","pages-template-weChat":"pages-template-weChat","pages-template-whackMole":"pages-template-whackMole"}[e]||e)+"."+{"pages-component-asyncSwitch":"70e22461","pages-component-checkbox":"6a13913c","pages-component-highlight":"439cef07","pages-component-moveVerify":"7bab2764","pages-component-pickerColor":"eeb06d57","pages-component-tab":"e1ec1ebe","pages-index-index":"a0ec6273","pages-sdk-globalCss":"3c228b75","pages-sdk-globalJs":"d3c2617e","pages-sdk-webSocket":"5a976db6","pages-template-goodsList":"4104b24e","pages-template-goodsList_scroll":"18b490ac","pages-template-goodsList_swiper":"f35e201c","pages-template-idiom":"2d6b82fb","pages-template-photoList":"b13aebfc","pages-template-swiper_image":"484234e5","pages-template-swiper_video":"99b70c7f","pages-template-talk":"b4d0200a","pages-template-weChat":"3d72ee7f","pages-template-whackMole":"ff8a99d2"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=a[e]=[n,o]}));n.push(t[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e),i=function(n){c.onerror=c.onload=null,clearTimeout(p);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,t[1](r)}a[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/uniapp-extend/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=n,c=c.slice();for(var g=0;g<c.length;g++)n(c[g]);var u=p;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("b1af")},"08e5":function(e,n,t){"use strict";t.r(n);var o=t("cf5b"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},"0e0a":function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*每个页面公共css */\n/*\n@import "./lib/global.scss";\n*/\n/* 条件编译，仅在H5平台生效 */::-webkit-scrollbar{display:none}',""]),e.exports=n},"164b":function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},"35e2":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pages:{"pages/index/index":{},"pages/component/pickerColor":{navigationBarTitleText:"颜色选择"},"pages/component/moveVerify":{navigationBarTitleText:"滑动验证"},"pages/template/photoList":{navigationBarTitleText:"有入场动画的图片列表"},"pages/sdk/globalJs":{navigationBarTitleText:"项目全局通用方法"},"pages/template/idiom":{navigationBarTitleText:"看图猜成语",navigationBarBackgroundColor:"#857ffc"},"pages/component/asyncSwitch":{navigationBarTitleText:"异步switch"},"pages/template/weChat":{navigationBarTitleText:"仿微信列表长按弹出菜单"},"pages/sdk/webSocket":{navigationBarTitleText:"webSocket SDK"},"pages/template/goodsList":{navigationBarTitleText:"商品双向联动列表"},"pages/component/checkbox":{navigationBarTitleText:"自定义复选/单选框"},"pages/component/highlight":{navigationBarTitleText:"指定内容高亮"},"pages/sdk/globalCss":{navigationBarTitleText:"项目全局样式表"},"pages/template/goodsList_scroll":{navigationBarTitleText:"滚动式双向联动列表"},"pages/template/goodsList_swiper":{navigationBarTitleText:"轮播式双向联动列表"},"pages/template/swiper_image":{navigationBarTitleText:"仿抖音图片轮播",navigationStyle:"custom"},"pages/component/tab":{navigationBarTitleText:"选项卡"},"pages/template/whackMole":{navigationBarTitleText:"打地鼠"},"pages/template/talk":{navigationBarTitleText:"即时通讯聊天"},"pages/template/swiper_video":{navigationBarTitleText:"仿抖音视频轮播"}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"UNI-APP 河浪插件分享",navigationBarBackgroundColor:"#42b983",backgroundColor:"#f3f3f3"}};n.default=o},"56d3":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=[!1,!0],a=o[0],i=o[1],r=o[2],s=function(){r=uni.connectSocket({url:"ws://123.207.167.163:9010/ajaxchattest",success:function(e){}}),r.onOpen((function(e){console.log("WebSocket连接已打开"),i=!1})),r.onError((function(e){console.log("WebSocket连接打开失败")})),r.onMessage((function(e){uni.$emit("dataSocket",e.data)}))},c=function(){a?console.log("不能重复打开连接"):(a=!0,uni.$on("startSocket",(function(){s()})))},p=function(){uni.$emit("startSocket",{})},g=function(e){uni.$on("dataSocket",(function(n){e&&e(n)}))},u=function(e){i?console.log("连接未打开，请先打开连接"):(console.log(e),r.send({data:e}))},l=function(){r.close({code:1e3,reason:"主动关闭",success:function(e){console.log("关闭连接成功"),i=!0},fail:function(e){console.log("关闭连接失败")}})},d={on:c,start:p,data:g,send:u,off:l};n.default=d},"7d98":function(e,n,t){"use strict";var o=t("dafc"),a=t.n(o);a.a},b1af:function(e,n,t){"use strict";var o=t("4ea4");t("8e6e"),t("ac6a"),t("456d");var a=o(t("bd86"));t("cadf"),t("551c"),t("f751"),t("097d"),t("f73e"),t("1c31"),t("921b");var i=o(t("e143")),r=o(t("f16b")),s=o(t("e380"));function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}i.default.config.productionTip=!1,i.default.prototype.iGlobal=s.default,r.default.mpType="app";var g=new i.default(p({},r.default));g.$mount()},c89f:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={appid:"__UNI__78AB2D6"};n.default=o},cf5b:function(e,n,t){"use strict";var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("56d3")),i={onLaunch:function(){console.log("%c 河浪原创作品，QQ:1846492969","color:#007aff;font-size:32px;"),uni.getSystemInfo({success:function(e){e.windowWidth>420&&!window.top.isPC&&(window.location.pathname="/uniapp-extend/static/html/pc.html")}}),a.default.on()},onShow:function(){},onHide:function(){}};n.default=i},dafc:function(e,n,t){var o=t("0e0a");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=t("4f06").default;a("45a6467c",o,!0,{sourceMap:!1,shadowMode:!1})},e380:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={request:"https://request.xxx.com",upload:"https://upload.xxx.com",images:"https://images.xxx.com"},a={email:/^[0-9a-zA-Z_]+@[0-9a-zA-Z_]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$/,mobile:/^(?:1\d{2})-?\d{5}(\d{3}|\*{3})$/,qq:/^[1-9][0-9]{4,9}$/,befitName:/^[a-z0-9A-Z\u4e00-\u9fa5]+$/,befitPwd:/^[a-z0-9A-Z_]+$/,allNumber:/^[0-9]+.?[0-9]$/},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中";uni.showLoading({title:e,mask:!0})},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500;uni.showToast({title:e,icon:n,duration:t,position:"center",mask:!0})},s=function(e,n){return n?e.currentTarget.dataset[n]:e.currentTarget.dataset},c=function(e){return new Promise((function(n,t){var o=uni.createSelectorQuery().select(e);o.fields({size:!0,rect:!0},(function(e){n(e)})).exec()}))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url||"";/http:|https:/.test(n)||(n=o.request+n);var t={"content-type":"application/x-www-form-urlencoded"};return new Promise((function(o,a){uni.request({url:n,method:e.method||"GET",dataType:"json",header:t,data:e.data,success:function(e){o(e.data)},fail:function(e){uni.hideLoading(),r("请求错误，请重试！"),a(e)}})}))},g={URI:o,regExps:a,showLoading:i,showToast:r,getData:s,getRect:c,request:p};n.default=g},f16b:function(e,n,t){"use strict";t.r(n);var o=t("164b"),a=t("08e5");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("7d98");var r,s=t("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=c.exports},f73e:function(e,n,t){"use strict";(function(e){var n=t("4ea4"),o=n(t("e143"));e["____78AB2D6____"]=!0,delete e["____78AB2D6____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"UNI-APP 河浪插件分享",navigationBarBackgroundColor:"#42b983",backgroundColor:"#f3f3f3"},networkTimeout:{request:5e3,connectSocket:5e3,uploadFile:5e3,downloadFile:5e3}},e.__uniConfig.router={mode:"hash",base:"/uniapp-extend/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("d439"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-component-pickerColor",(function(e){var n={component:t.e("pages-component-pickerColor").then(function(){return e(t("5643"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-component-moveVerify",(function(e){var n={component:t.e("pages-component-moveVerify").then(function(){return e(t("ad6c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-photoList",(function(e){var n={component:t.e("pages-template-photoList").then(function(){return e(t("a556"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-sdk-globalJs",(function(e){var n={component:t.e("pages-sdk-globalJs").then(function(){return e(t("2a56"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-idiom",(function(e){var n={component:t.e("pages-template-idiom").then(function(){return e(t("fa0b"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-component-asyncSwitch",(function(e){var n={component:t.e("pages-component-asyncSwitch").then(function(){return e(t("e69d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-weChat",(function(e){var n={component:t.e("pages-template-weChat").then(function(){return e(t("bd95"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-sdk-webSocket",(function(e){var n={component:t.e("pages-sdk-webSocket").then(function(){return e(t("f9c2"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-goodsList",(function(e){var n={component:t.e("pages-template-goodsList").then(function(){return e(t("98b7"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-component-checkbox",(function(e){var n={component:t.e("pages-component-checkbox").then(function(){return e(t("7f08"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-component-highlight",(function(e){var n={component:t.e("pages-component-highlight").then(function(){return e(t("a23c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-sdk-globalCss",(function(e){var n={component:t.e("pages-sdk-globalCss").then(function(){return e(t("4a34"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-goodsList_scroll",(function(e){var n={component:t.e("pages-template-goodsList_scroll").then(function(){return e(t("9b6f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-goodsList_swiper",(function(e){var n={component:t.e("pages-template-goodsList_swiper").then(function(){return e(t("d644"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-swiper_image",(function(e){var n={component:t.e("pages-template-swiper_image").then(function(){return e(t("5995"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-component-tab",(function(e){var n={component:t.e("pages-component-tab").then(function(){return e(t("b84b"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-whackMole",(function(e){var n={component:t.e("pages-template-whackMole").then(function(){return e(t("c400"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-talk",(function(e){var n={component:t.e("pages-template-talk").then(function(){return e(t("035e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-template-swiper_video",(function(e){var n={component:t.e("pages-template-swiper_video").then(function(){return e(t("7de3"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/component/pickerColor",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"颜色选择"})},[e("pages-component-pickerColor",{slot:"page"})])}},meta:{name:"pages-component-pickerColor",isNVue:!1,pagePath:"pages/component/pickerColor",windowTop:44}},{path:"/pages/component/moveVerify",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"滑动验证"})},[e("pages-component-moveVerify",{slot:"page"})])}},meta:{name:"pages-component-moveVerify",isNVue:!1,pagePath:"pages/component/moveVerify",windowTop:44}},{path:"/pages/template/photoList",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"有入场动画的图片列表"})},[e("pages-template-photoList",{slot:"page"})])}},meta:{name:"pages-template-photoList",isNVue:!1,pagePath:"pages/template/photoList",windowTop:44}},{path:"/pages/sdk/globalJs",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"项目全局通用方法"})},[e("pages-sdk-globalJs",{slot:"page"})])}},meta:{name:"pages-sdk-globalJs",isNVue:!1,pagePath:"pages/sdk/globalJs",windowTop:44}},{path:"/pages/template/idiom",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"看图猜成语",navigationBarBackgroundColor:"#857ffc"})},[e("pages-template-idiom",{slot:"page"})])}},meta:{name:"pages-template-idiom",isNVue:!1,pagePath:"pages/template/idiom",windowTop:44}},{path:"/pages/component/asyncSwitch",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"异步switch"})},[e("pages-component-asyncSwitch",{slot:"page"})])}},meta:{name:"pages-component-asyncSwitch",isNVue:!1,pagePath:"pages/component/asyncSwitch",windowTop:44}},{path:"/pages/template/weChat",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"仿微信列表长按弹出菜单"})},[e("pages-template-weChat",{slot:"page"})])}},meta:{name:"pages-template-weChat",isNVue:!1,pagePath:"pages/template/weChat",windowTop:44}},{path:"/pages/sdk/webSocket",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"webSocket SDK"})},[e("pages-sdk-webSocket",{slot:"page"})])}},meta:{name:"pages-sdk-webSocket",isNVue:!1,pagePath:"pages/sdk/webSocket",windowTop:44}},{path:"/pages/template/goodsList",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"商品双向联动列表"})},[e("pages-template-goodsList",{slot:"page"})])}},meta:{name:"pages-template-goodsList",isNVue:!1,pagePath:"pages/template/goodsList",windowTop:44}},{path:"/pages/component/checkbox",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"自定义复选/单选框"})},[e("pages-component-checkbox",{slot:"page"})])}},meta:{name:"pages-component-checkbox",isNVue:!1,pagePath:"pages/component/checkbox",windowTop:44}},{path:"/pages/component/highlight",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"指定内容高亮"})},[e("pages-component-highlight",{slot:"page"})])}},meta:{name:"pages-component-highlight",isNVue:!1,pagePath:"pages/component/highlight",windowTop:44}},{path:"/pages/sdk/globalCss",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"项目全局样式表"})},[e("pages-sdk-globalCss",{slot:"page"})])}},meta:{name:"pages-sdk-globalCss",isNVue:!1,pagePath:"pages/sdk/globalCss",windowTop:44}},{path:"/pages/template/goodsList_scroll",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"滚动式双向联动列表"})},[e("pages-template-goodsList_scroll",{slot:"page"})])}},meta:{name:"pages-template-goodsList_scroll",isNVue:!1,pagePath:"pages/template/goodsList_scroll",windowTop:44}},{path:"/pages/template/goodsList_swiper",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"轮播式双向联动列表"})},[e("pages-template-goodsList_swiper",{slot:"page"})])}},meta:{name:"pages-template-goodsList_swiper",isNVue:!1,pagePath:"pages/template/goodsList_swiper",windowTop:44}},{path:"/pages/template/swiper_image",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"仿抖音图片轮播",navigationStyle:"custom"})},[e("pages-template-swiper_image",{slot:"page"})])}},meta:{name:"pages-template-swiper_image",isNVue:!1,pagePath:"pages/template/swiper_image",windowTop:0}},{path:"/pages/component/tab",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"选项卡"})},[e("pages-component-tab",{slot:"page"})])}},meta:{name:"pages-component-tab",isNVue:!1,pagePath:"pages/component/tab",windowTop:44}},{path:"/pages/template/whackMole",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"打地鼠"})},[e("pages-template-whackMole",{slot:"page"})])}},meta:{name:"pages-template-whackMole",isNVue:!1,pagePath:"pages/template/whackMole",windowTop:44}},{path:"/pages/template/talk",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"即时通讯聊天"})},[e("pages-template-talk",{slot:"page"})])}},meta:{name:"pages-template-talk",isNVue:!1,pagePath:"pages/template/talk",windowTop:44}},{path:"/pages/template/swiper_video",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"仿抖音视频轮播"})},[e("pages-template-swiper_video",{slot:"page"})])}},meta:{name:"pages-template-swiper_video",isNVue:!0,pagePath:"pages/template/swiper_video",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))}});