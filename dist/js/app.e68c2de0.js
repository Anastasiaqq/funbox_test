(function(t){function e(e){for(var s,r,c=e[0],a=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],i[r]&&p.push(i[r][0]),i[r]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/funbox_test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("e382"),n("6672");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop__container"},[n("div",{staticClass:"shop"},[n("h1",{staticClass:"shop__header"},[t._v("Ты сегодня покормил кота?")]),n("div",{staticClass:"shop__goods"},t._l(t.goods,function(t){return n("Item",{key:t.contents,attrs:{contents:t.contents,weight:t.weight,presents:t.presents,desc:t.desc,active:t.active}})}),1)])])},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item",class:t.myClass},[n("div",{staticClass:"item__card",on:{click:function(e){return t.selectHandler(e)}}},[n("div",{staticClass:"border noevent"}),n("div",{staticClass:"item__container noevent"},[n("p",{staticClass:"item__slogan noevent"},[t._v("Сказочное заморское яство")]),n("h2",{staticClass:"item__head noevent"},[t._v("Нямушка")]),n("p",{staticClass:"item__contents noevent"},[t._v(t._s(t.contents))]),n("ul",{staticClass:"item__presents_list noevent"},t._l(t.presents,function(e){return n("li",{key:e,staticClass:"item__presents_item noevent"},[t._v(t._s(e))])}),0)]),n("img",{staticClass:"item__img noevent",attrs:{src:t.cat,alt:"изображение пушистого кота голубого окраса"}}),n("div",{staticClass:"item__weight noevent"},[n("p",{staticClass:"number noevent"},[t._v(t._s(t.weight))]),n("p",{staticClass:"kilo noevent"},[t._v("кг")])])]),n("p",{staticClass:"item__desc",domProps:{innerHTML:t._s(t.description)}})])},l=[],u={name:"Item",props:{contents:{type:String,default:""},weight:{type:String,default:"0,5"},presents:{default:[]},desc:{type:String,default:""},active:{type:Boolean,default:!0}},data:function(){return{cat:n("c210"),selected:!1}},mounted:function(){},methods:{selectHandler:function(t){var e=this;this.active&&(t.target.onmouseleave=function(){e.selected=!e.selected})},buttonHandler:function(){this.active&&(this.selected=!this.selected)}},watch:{selected:function(){document.querySelector(".item__card").onmouseleave=""}},computed:{description:function(){var t="";return t=this.active?this.selected?this.desc:'Чего сидишь? Порадуй котэ, <button class="buy">купи.</button>':"Печалька, ".concat(this.contents," закончился."),t},myClass:function(){var t="";return this.selected?t="selected-border":this.active||(t="inactive"),t}}},d=u,p=n("2877"),f=Object(p["a"])(d,a,l,!1,null,null,null),v=f.exports,_={name:"Shop",data:function(){return{goods:[{contents:"с фуа-гра",weight:"0,5",presents:["10 порций","мышь в подарок"],desc:"Печень утки разварная с артишоками",active:!0},{contents:"с рыбой",weight:"2",presents:["40 порций","2 мыши в подарок"],desc:"Головы щучьи с чесноком да свежайшая сёмгушка",active:!0},{contents:"с курой",weight:"5",presents:["100 порций","5 мышей в подарок","заказчик доволен"],desc:"Филе из цыплят с трюфелями в бульоне",active:!1}]}},components:{Item:v}},h=_,m=Object(p["a"])(h,r,c,!1,null,null,null),g=m.exports,b={name:"app",components:{HelloWorld:g}},y=b,C=(n("034f"),Object(p["a"])(y,i,o,!1,null,null,null)),w=C.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,n){},6672:function(t,e,n){},c210:function(t,e,n){t.exports=n.p+"img/kote.caaa12fd.png"},e382:function(t,e,n){}});
//# sourceMappingURL=app.e68c2de0.js.map