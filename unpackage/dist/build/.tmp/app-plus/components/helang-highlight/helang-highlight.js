(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/helang-highlight/helang-highlight"],{1315:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"2bad":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"highlight",props:{content:{type:String,default:""},keys:{type:String,default:""},color:{type:String,default:"#FD463E"},weight:{type:Boolean,default:!1}},computed:{html:function(){if(""===this.keys)return this.content;var t=new RegExp("(".concat(this.keys,")"),"gm"),e=this.color||"#FD463E",n=this.weight?"bold":"normal",r='<span style="color:'+e+";font-weight: "+n+';">$1</span>';return this.content.replace(t,r)}},data:function(){return{}}};e.default=r},c12e:function(t,e,n){"use strict";n.r(e);var r=n("2bad"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},f92e:function(t,e,n){"use strict";n.r(e);var r=n("1315"),a=n("c12e");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var u=n("2877"),i=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/helang-highlight/helang-highlight-create-component',
    {
        'components/helang-highlight/helang-highlight-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("f92e"))
        })
    },
    [['components/helang-highlight/helang-highlight-create-component']]
]);                
