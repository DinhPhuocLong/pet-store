(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{464:function(t,e,r){"use strict";r.r(e);r(24),r(17),r(43),r(18),r(44);var n=r(12),c=(r(16),r(40));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({brands:function(t){return t.brand.brands.filter((function(t){return""!=t.path_img}))}}))},d=r(3),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clear-both mt-10"},[r("h1",{staticClass:"font-semibold text-4xl text-center mb-10 font-nunito"},[t._v("\n        Thương hiệu nổi bật\n    ")]),t._v(" "),r("client-only",[r("div",{attrs:{"uk-slider":""}},[r("ul",{staticClass:"uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@s uk-child-width-1-6@m"},t._l(t.brands,(function(t){return r("li",{key:t.id,staticClass:"uk-transition-toggle border border-solid border-[#ebebeb] py-5 mb-px",attrs:{tabindex:"0"}},[r("nuxt-link",{attrs:{to:{name:"shop-by-brand",params:{slug:t.slug}}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imageUrl,expression:"brand.imageUrl"}],staticClass:"mx-auto",staticStyle:{"max-width":"175px","max-height":"120px"},attrs:{alt:t.name,width:"175"}})])],1)})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);