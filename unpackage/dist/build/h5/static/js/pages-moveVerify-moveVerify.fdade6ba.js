(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-moveVerify-moveVerify"],{"0057":function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("23ae")),o={components:{"move-verify":a.default},data:function(){return{isFlag:!1}},methods:{verifyResult:function(){this.isFlag=!0}}};i.default=o},"0f79":function(t,i,e){"use strict";e.r(i);var n=e("0057"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},"168a":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"pathway",attrs:{id:"pathway"},on:{touchend:function(i){i=t.$handleEvent(i),t.onEnd(i)}}},[e("v-uni-view",{staticClass:"tips"},[t.isOk?e("v-uni-text",{staticStyle:{color:"#FFFFFF"}},[t._v("验证通过")]):e("v-uni-text",[t._v("拖动滑块验证")])],1),e("v-uni-view",{staticClass:"track",style:{transform:"translateX("+t.oldx+"px)"}}),e("v-uni-movable-area",{attrs:{animation:!0}},[e("v-uni-movable-view",{class:{active:t.isOk},attrs:{id:"track",x:t.x,direction:"horizontal"},on:{change:function(i){i=t.$handleEvent(i),t.onMove(i)}}})],1),t.isOk?e("v-uni-view",{staticClass:"disabled"}):t._e()],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"1d7e":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-button[data-v-495cf1ee]{margin:%?50?%;color:#fff}uni-button[data-v-495cf1ee]:after{display:none}.copy[data-v-495cf1ee]{text-align:center;font-size:%?28?%;color:#999;line-height:%?48?%}",""])},2359:function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("795b")),o={name:"move-verify",data:function(){return{x:0,oldx:0,isOk:!1,size:{}}},mounted:function(){var t=this,i=function(i){return new a.default(function(e,n){var a=uni.createSelectorQuery().in(t).select(i);a.fields({size:!0},function(t){e(t.width)}).exec()})};this.$nextTick(function(){i("#pathway").then(function(e){t.size.pathway=e,i("#track").then(function(i){t.size.track=i})})})},methods:{onMove:function(t){this.oldx=t.detail.x},onEnd:function(){var t=this;this.isOk||(this.oldx+1>this.size.pathway-this.size.track?(this.isOk=!0,this.$emit("result")):(this.x=this.oldx,this.$nextTick(function(){setTimeout(function(){t.x=0,t.oldx=0},100)})))}}};i.default=o},"23ae":function(t,i,e){"use strict";e.r(i);var n=e("168a"),a=e("676c");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("33cc");var c=e("2877"),u=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"48564f90",null);i["default"]=u.exports},"33cc":function(t,i,e){"use strict";var n=e("ea82"),a=e.n(n);a.a},"60a9":function(t,i,e){"use strict";var n=e("874b"),a=e.n(n);a.a},"676c":function(t,i,e){"use strict";e.r(i);var n=e("2359"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},"7e56":function(t,i,e){"use strict";e.r(i);var n=e("d0ce"),a=e("0f79");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("60a9");var c=e("2877"),u=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"495cf1ee",null);i["default"]=u.exports},"874b":function(t,i,e){var n=e("1d7e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("5146ca5f",n,!0,{sourceMap:!1,shadowMode:!1})},d0ce:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticStyle:{padding:"30px 15px"}},[e("move-verify",{on:{result:function(i){i=t.$handleEvent(i),t.verifyResult(i)}}}),e("v-uni-button",{style:{backgroundColor:t.isFlag?"#7ac23c":"#e64340"}},[t._v("校验结果："+t._s(t.isFlag?"已":"未")+"通过")]),e("v-uni-view",{staticClass:"copy"},[e("v-uni-view",[t._v("uni-app插件，拖动滑块校验插件")]),e("v-uni-view",[t._v("helang.love@qq.com")]),e("v-uni-view",{attrs:{decode:"true"}},[t._v("© 2019 河浪原创")])],1)],1)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},d796:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'.pathway[data-v-48564f90]{height:%?80?%;width:100%;background-color:#7ac23c;position:relative;overflow:hidden}.pathway .tips[data-v-48564f90]{position:absolute;top:0;left:0;width:100%;line-height:%?80?%;text-align:center;color:#666;font-size:%?32?%;z-index:3}.pathway .track[data-v-48564f90]{position:absolute;top:0;left:0;background-color:#eee;width:100%;height:100%;padding-left:0;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.pathway uni-movable-area[data-v-48564f90]{position:absolute;top:0;left:0;height:100%;width:100%;background:none;z-index:5}.pathway uni-movable-view[data-v-48564f90]{height:100%;width:%?100?%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border:#ddd solid 1px;background-position:50%;background-repeat:no-repeat;background-size:auto %?32?%;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==")}.pathway uni-movable-view.active[data-v-48564f90]{border:#7ac23c solid 1px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==")}.pathway .disabled[data-v-48564f90]{position:absolute;z-index:10;height:100%;width:100%;top:0;left:0}',""])},ea82:function(t,i,e){var n=e("d796");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("2e09847b",n,!0,{sourceMap:!1,shadowMode:!1})}}]);