(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-weChat"],{"0155":function(t,e,i){"use strict";i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{userList:[],winSize:{},showShade:!1,showPop:!1,popButton:["标为关注","置顶聊天","删除该聊天"],popStyle:"",pickerUserIndex:-1}},onLoad:function(){this.getListData(),this.getWindowSize(),document.onLong=function(t){t=t||window.event;t.preventDefault()}},methods:{listTap:function(){this.showShade||console.log("列表触摸事件触发")},getListData:function(){for(var t=[],e=0;e<20;e++)t.push({name:"第".concat(e+1,"个用户"),time:"5月20日",info:"这是第".concat(e+1,"个用户的聊天信息")});this.userList=t},getWindowSize:function(){var t=this;uni.getSystemInfo({success:function(e){t.winSize={witdh:e.windowWidth,height:e.windowHeight}}})},onLongPress:function(t){var e=this,i=[t.touches[0],"",t.currentTarget.dataset.index],n=i[0],o=i[1],a=i[2];o=n.clientY>this.winSize.height/2?"bottom:".concat(this.winSize.height-n.clientY,"px;"):"top:".concat(n.clientY,"px;"),n.clientX>this.winSize.witdh/2?o+="right:".concat(this.winSize.witdh-n.clientX,"px"):o+="left:".concat(n.clientX,"px"),this.popStyle=o,this.pickerUserIndex=Number(a),this.showShade=!0,this.$nextTick((function(){setTimeout((function(){e.showPop=!0}),10)}))},hidePop:function(){var t=this;this.showPop=!1,this.pickerUserIndex=-1,setTimeout((function(){t.showShade=!1}),250)},pickerMenu:function(t){var e=Number(t.currentTarget.dataset.index);console.log("第".concat(this.pickerUserIndex+1,"个用户,第").concat(e+1,"个按钮")),uni.showToast({title:"第".concat(this.pickerUserIndex+1,"个用户,第").concat(e+1,"个按钮"),icon:"none",mask:!0,duration:600}),this.hidePop()}}};e.default=n},"3c31":function(t,e,i){"use strict";i.r(e);var n=i("0155"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"3f31":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 列式弹性盒子 */.flex_col[data-v-0406d8b9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}\r\n/* 弹性盒子弹性容器 */.flex_col .flex_grow[data-v-0406d8b9]{width:0;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1}.flex_row .flex_grow[data-v-0406d8b9]{-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1}\r\n/* 弹性盒子允许换行 */.flex_col.flex_wrap[data-v-0406d8b9]{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}\r\n/* 列表 */.list[data-v-0406d8b9]{background-color:#fff;font-size:%?28?%;color:#333;-webkit-user-select:none;user-select:none;touch-callout:none}.list > uni-view[data-v-0406d8b9]{padding:%?24?% %?30?%;position:relative}.list > uni-view[data-v-0406d8b9]:active, .list > uni-view.active[data-v-0406d8b9]{background-color:#f3f3f3}.list > uni-view uni-image[data-v-0406d8b9]{height:%?80?%;width:%?80?%;border-radius:4px;margin-right:%?20?%}.list > uni-view > uni-view[data-v-0406d8b9]{line-height:%?40?%}.list > uni-view > uni-view .time[data-v-0406d8b9],\r\n.list > uni-view > uni-view .info[data-v-0406d8b9]{color:#999;font-size:%?24?%}.list > uni-view > uni-view .time[data-v-0406d8b9]{width:%?150?%;text-align:right}.list > uni-view > uni-view .info[data-v-0406d8b9]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list > uni-view[data-v-0406d8b9]:not(:first-child){margin-top:1px}.list > uni-view[data-v-0406d8b9]:not(:first-child)::after{content:"";display:block;height:0;border-top:#ccc solid 1px;width:%?620?%;position:absolute;top:-1px;right:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)\r\n  /* 1px像素 */}\r\n/* 遮罩 */.shade[data-v-0406d8b9]{position:fixed;z-index:100;top:0;right:0;bottom:0;left:0;-webkit-touch-callout:none}.shade .pop[data-v-0406d8b9]{position:fixed;z-index:101;width:%?200?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?28?%;text-align:left;color:#333;background-color:#fff;-webkit-box-shadow:0 0 5px rgba(0,0,0,.5);box-shadow:0 0 5px rgba(0,0,0,.5);line-height:%?80?%;-webkit-transition:-webkit-transform .15s ease-in-out 0s;transition:-webkit-transform .15s ease-in-out 0s;transition:transform .15s ease-in-out 0s;transition:transform .15s ease-in-out 0s,-webkit-transform .15s ease-in-out 0s;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-transform:scale(0);transform:scale(0)}.shade .pop.show[data-v-0406d8b9]{-webkit-transform:scale(1);transform:scale(1)}.shade .pop > uni-view[data-v-0406d8b9]{padding:0 %?20?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.shade .pop > uni-view[data-v-0406d8b9]:active{background-color:#f3f3f3}',""]),t.exports=e},4393:function(t,e,i){"use strict";var n=i("d4b7"),o=i.n(n);o.a},aaf0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAAEi6oPRAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE0MjcxNTdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE0MjcxNDdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkE4RkFCN0M3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkE4RkFCN0Q3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZZ+3AAAB1ElEQVR42mJkAALtmZb/GfAAJkIKwIoYiAA4FV1JO0Ylk0hWxILLHTgV6cyywqoIIIAYiQinb8S4iYs036E7esgEJq6ABAGAACImMBmo5m6yDcLlR5gcNnnaumhADWIhJoOTbRC+9ILPa9+o4TWAAAIlyDVAOphCc1SYqGAICNwZxumIidi8NILz2qhBdCyPaOcicgq1wRnYAAFErRKSgZo+GzSOoWpQD1sHsRCjCDnzkpp90DM+If2jUTbqoFEHjZZDpJYroyFESeNmNFHTykEqg8g9bwACCNRiVAYyLgEx1wA7Zu3V9OMhVBt1opajBlsaCh7NZaMOGnXQgFeupHZjKO1CjUbZqINGHTTqoFEHjTpo1EGjDhqMgw342kejUTaahggpoOdg1WiUjTpoODoIvL7tzSBykB5AgPbtGIdBGIYCaBR16swROEQvzT06cxjm1lRFDC0LcpXC+xJzpIdJhOW8e4z359MVWSde1C32xRYasC0mCmascDZzrQz+7NgABAgQINnRY/iUrb5D9v9l9toqCBAgQIAAAQIESAABAgQIEKCD5ZK9QPaMigoCdIJP7NdjOyoIECBAgGQBGjB8zVDjam153T0OqInJbBAWfdg8AExKZVcA71uIAAAAAElFTkSuQmCC"},bd95:function(t,e,i){"use strict";i.r(e);var n=i("d349"),o=i("3c31");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("4393");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"0406d8b9",null,!1,n["a"],s);e["default"]=c.exports},d349:function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"list"},t._l(t.userList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"flex_col",class:{active:t.pickerUserIndex==o},attrs:{"data-index":o},on:{longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.onLongPress.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.listTap.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("aaf0"),mode:"aspectFill"}}),n("v-uni-view",{staticClass:"flex_grow"},[n("v-uni-view",{staticClass:"flex_col"},[n("v-uni-view",{staticClass:"flex_grow"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"time"},[t._v(t._s(e.time))])],1),n("v-uni-view",{staticClass:"info"},[t._v(t._s(e.info))])],1)],1)})),1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showShade,expression:"showShade"}],staticClass:"shade",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hidePop.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pop",class:{show:t.showPop},style:t.popStyle},t._l(t.popButton,(function(e,i){return n("v-uni-view",{key:i,attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerMenu.apply(void 0,arguments)}}},[t._v(t._s(e))])})),1)],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},d4b7:function(t,e,i){var n=i("3f31");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("d06a1140",n,!0,{sourceMap:!1,shadowMode:!1})}}]);