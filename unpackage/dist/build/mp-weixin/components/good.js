(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/good"],{"4a4f":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"detai",props:{data:{type:Object,default:{}}},data:function(){return{}},methods:{toGoodDetail:function(){t.setStorage({key:"goodInfo",data:this.$props.data,success:function(){t.navigateTo({url:"/pages/good-detail/good-detail"})}})},addToCart:function(){var n=this;t.getStorage({key:"goodInfo",success:function(t){n.$store.commit("addItem",t.data),console.log("vuex新加属性是响应式",n.$store.state.cart.itemList)}}),t.showToast({title:"加入购物车成功",icon:"none"})}}};n.default=a}).call(this,a("543d")["default"])},"8a2c":function(t,n,a){"use strict";a.r(n);var e=a("4a4f"),o=a.n(e);for(var u in e)"default"!==u&&function(t){a.d(n,t,(function(){return e[t]}))}(u);n["default"]=o.a},a43a:function(t,n,a){},b56d:function(t,n,a){"use strict";a.r(n);var e=a("b9b7"),o=a("8a2c");for(var u in o)"default"!==u&&function(t){a.d(n,t,(function(){return o[t]}))}(u);a("c830");var c,r=a("f0c5"),i=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);n["default"]=i.exports},b9b7:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement;t._self._c},u=[]},c830:function(t,n,a){"use strict";var e=a("a43a"),o=a.n(e);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/good-create-component',
    {
        'components/good-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b56d"))
        })
    },
    [['components/good-create-component']]
]);
