(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsList/goodsList"],{"0d79":function(t,n,e){"use strict";e.r(n);var i=e("3789"),o=e("8a4b");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("5c08");var c=e("2877"),a=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=a.exports},3789:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"5c08":function(t,n,e){"use strict";var i=e("68be"),o=e.n(i);o.a},"68be":function(t,n,e){},"8a4b":function(t,n,e){"use strict";e.r(n);var i=e("fac4"),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);n["default"]=o.a},fac4:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{scrollHeight:"500px",leftArray:[],mainArray:[],topArr:[],leftIndex:0,isMainScroll:!1,scrollInto:"",tipsTop:"0px"}},onLoad:function(){var n=this;t.getSystemInfo({success:function(t){n.scrollHeight="".concat(t.windowHeight,"px")}})},computed:{},mounted:function(){this.getListData()},methods:{getListData:function(){for(var t=this,n=[],e=[],i=0;i<10;i++){n.push("".concat(i+1,"类商品"));for(var o=[],r=0;r<i+1;r++)o.push(r);e.push({title:"第".concat(i+1,"类商品标题"),list:o})}this.leftArray=n,this.mainArray=e,this.$nextTick(function(){t.getElementTop()})},getElementTop:function(){var n=this,e=[],i=function(n){return new Promise(function(e,i){var o=t.createSelectorQuery().select(n);o.boundingClientRect(function(t){e(t.top)}).exec()})};this.mainArray.forEach(function(t,n){e.push(i("#item-".concat(n)))}),i("#scroll-el").then(function(t){var i=t;Promise.all(e).then(function(t){n.tipsTop="".concat(i,"px"),n.topArr=t})})},mainScroll:function(t){var n=this;if(this.isMainScroll){var e=t.detail.scrollTop,i=-1;i=e>=this.topArr[this.topArr.length-1]?this.topArr.length-1:this.topArr.findIndex(function(t,i){return n.topArr[i+1]>=e}),this.leftIndex=i<0?0:i}},mainTouch:function(){this.isMainScroll=!0},leftTap:function(t){var n=t.currentTarget.dataset.index;this.isMainScroll=!1,this.leftIndex=Number(n),this.scrollInto="item-".concat(n)}}};n.default=e}).call(this,e("6e42")["default"])}},[["5b04","common/runtime","common/vendor"]]]);