exports.ids = [24,1,2,3,4,11,13,14];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".author[data-v-0dc3fcce]:after{\n  content:\"\";\n  width:1px;\n  height:18px;\n  display:inline-block;\n  background:#dedede;\n  margin-left:1rem;\n  margin-right:1rem\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBrandSlider.vue?vue&type=template&id=30285469&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"clear-both mt-10"},[_vm._ssrNode("<h1 class=\"font-semibold text-4xl text-center mb-10 font-nunito\">\n        Thương hiệu nổi bật\n    </h1> "),_c('client-only',[_c('div',{attrs:{"uk-slider":""}},[_c('ul',{staticClass:"uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@s uk-child-width-1-6@m"},_vm._l((_vm.brands),function(brand){return _c('li',{key:brand.id,staticClass:"uk-transition-toggle border border-solid border-[#ebebeb] rounded-xl py-5 mb-px",attrs:{"tabindex":"0"}},[_c('nuxt-link',{attrs:{"to":{name: 'shop-by-brand', params: { slug: brand.slug }}}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(brand.imageUrl),expression:"brand.imageUrl"}],staticClass:"mx-auto",staticStyle:{"max-width":"175px","max-height":"120px"},attrs:{"alt":brand.name,"width":"175"}})])],1)}),0)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopBrandSlider.vue?vue&type=template&id=30285469&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBrandSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TopBrandSlidervue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      brands: state => state.brand.brands.filter(brand => brand.path_img != '')
    })
  }
});
// CONCATENATED MODULE: ./components/TopBrandSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopBrandSlidervue_type_script_lang_js_ = (TopBrandSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TopBrandSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopBrandSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f98d269"
  
)

/* harmony default export */ var TopBrandSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BestDealSlider.vue?vue&type=template&id=607950c9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-20 w-full"},[_vm._ssrNode("<h1 class=\"font-semibold text-3xl text-center mb-10\" data-v-607950c9>\n        Ưu đãi tốt \n    </h1> "),_c('client-only',[_c('div',{staticClass:"relative",attrs:{"uk-slider":""}},[_c('ul',{staticClass:"uk-slider-items uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-5@m"},_vm._l((_vm.saleProducts),function(saleProduct){return _c('div',{key:saleProduct.id,staticClass:"border border-solid border-[#ebebeb] rounded-md"},[_c('div',{staticClass:"relative product-img"},[_c('nuxt-link',{attrs:{"to":{ name: 'product-detail', params: { slug: saleProduct.slug } }}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(saleProduct.product_images.length ? saleProduct.product_images[0].imageUrl : ''),expression:"saleProduct.product_images.length ? saleProduct.product_images[0].imageUrl : ''"}],staticClass:"mx-auto",staticStyle:{"padding":"35px"},attrs:{"width":"450","height":"450","alt":saleProduct.name}}),_vm._v(" "),_c('div',{staticClass:"flex flex-col text-center absolute bottom-2 right-2"},[_c('a',{staticClass:"p-2 inline-block text-center w-10 h-10 leading-10 bg-white\n                                        border border-solid border-gray-300 mb-2 rounded-full\n                                        transform translate-x-20 transition-all duration-300\n                                        hover:text-white hover:bg-red-500\n                                        product-buttons opacity-0 focus:outline-none",attrs:{"href":"#"}},[_c('svg',{staticClass:"icon icon-tabler icon-tabler-arrow-narrow-right focus:outline-none",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"22","height":"22","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"#2c3e50","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('path',{attrs:{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('line',{attrs:{"x1":"5","y1":"12","x2":"19","y2":"12"}}),_vm._v(" "),_c('line',{attrs:{"x1":"15","y1":"16","x2":"19","y2":"12"}}),_vm._v(" "),_c('line',{attrs:{"x1":"15","y1":"8","x2":"19","y2":"12"}})])]),_vm._v(" "),_c('button',{staticClass:"p-2 inline-block text-center w-10 h-10 leading-10 bg-white\n                                        transform translate-x-20 transition-all duration-400\n                                        hover:text-white hover:bg-red-500\n                                        product-buttons opacity-0\n                                        border border-solid border-gray-300 mb-2 rounded-full focus:outline-none"},[_c('svg',{staticClass:"icon icon-tabler icon-tabler-heart focus:outline-none",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"22","height":"22","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"#2c3e50","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('path',{attrs:{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('path',{attrs:{"d":"M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"}})])]),_vm._v(" "),_c('button',{staticClass:"p-2 inline-block text-center w-10 h-10 leading-10 bg-white\n                                        border border-solid border-gray-300 mb-2 rounded-full\n                                        transform translate-x-20 transition-all duration-500\n                                        hover:text-white hover:bg-red-500\n                                        product-buttons opacity-0 focus:outline-none",on:{"click":function($event){$event.preventDefault();return _vm.addToCart(saleProduct);}}},[_c('svg',{staticClass:"icon icon-tabler icon-tabler-shopping-cart-plus focus:outline-none",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"22","height":"22","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"#2c3e50","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('path',{attrs:{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"6","cy":"19","r":"2"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"17","cy":"19","r":"2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M17 17h-11v-14h-2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"}}),_vm._v(" "),_c('path',{attrs:{"d":"M15 6h6m-3 -3v6"}})])])])]),_vm._v(" "),_c('div',{staticClass:"block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2"},[_vm._v("\n                            -"+_vm._s(_vm._f("percentage")(saleProduct.salePrice))+"\n                        ")]),_vm._v(" "),_c('div',{staticClass:"block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2"},[_vm._v("\n                            Hot\n                        ")])],1),_vm._v(" "),_c('div',{staticClass:"border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center"},[_c('div',{staticClass:"flex justify-center my-2"},[_c('button',{staticClass:"focus:outline-none mr-1",attrs:{"type":"button"}},[_c('svg',{staticClass:"block h-4 w-4 text-yellow-400",attrs:{"fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"d":"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}})])]),_vm._v(" "),_c('button',{staticClass:"focus:outline-none mr-1",attrs:{"type":"button"}},[_c('svg',{staticClass:"block h-4 w-4 text-yellow-400",attrs:{"fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"d":"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}})])]),_vm._v(" "),_c('button',{staticClass:"focus:outline-none mr-1",attrs:{"type":"button"}},[_c('svg',{staticClass:"block h-4 w-4 text-yellow-400",attrs:{"fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"d":"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}})])]),_vm._v(" "),_c('button',{staticClass:"focus:outline-none mr-1",attrs:{"type":"button"}},[_c('svg',{staticClass:"block h-4 w-4 text-yellow-400",attrs:{"fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"d":"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}})])]),_vm._v(" "),_c('span',{staticClass:"text-xs text-gray-400"},[_vm._v("(1)")])]),_vm._v(" "),_c('p',{staticClass:"truncate px-8"},[_c('nuxt-link',{staticClass:"hover:text-red-500 overflow-truncate",attrs:{"to":{ name: 'product-detail', params: { slug: saleProduct.slug } },"href":"#"}},[_vm._v(_vm._s(saleProduct.name))])],1),_vm._v(" "),_c('span',{staticClass:"inline-block text-red-500 text-md mt-2"},[_vm._v(_vm._s(_vm._f("toVndCurrency")(saleProduct.price)))])])])}),0),_vm._v(" "),_c('a',{staticClass:"absolute left-2 top-2/4",attrs:{"href":"#","uk-slidenav-previous":"","uk-slider-item":"previous"}}),_vm._v(" "),_c('a',{staticClass:"absolute right-2 top-2/4",attrs:{"href":"#","uk-slidenav-next":"","uk-slider-item":"next"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BestDealSlider.vue?vue&type=template&id=607950c9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BestDealSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BestDealSlidervue_type_script_lang_js_ = ({
  props: ["saleProducts"],
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addToCart', { ...product,
        quantity: 1
      });
    }

  }
});
// CONCATENATED MODULE: ./components/BestDealSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BestDealSlidervue_type_script_lang_js_ = (BestDealSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BestDealSlider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BestDealSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "607950c9",
  "40d2abb2"
  
)

/* harmony default export */ var BestDealSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TrendingProduct.vue?vue&type=template&id=d03c060c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-10 w-full"},[_vm._ssrNode("<h1 class=\"font-semibold text-3xl text-center mb-6\" data-v-d03c060c>\n        Sản phẩm thịnh hành\n    </h1> "),_vm._ssrNode("<div class=\"w-full owl:grid owl:grid-cols-4 owl:gap-4\" data-v-d03c060c>","</div>",_vm._l((_vm.trendingProducts),function(trendingProduct){return _vm._ssrNode("<div class=\"w-full box-border\" data-v-d03c060c>","</div>",[_vm._ssrNode("<div class=\"relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden\" data-v-d03c060c>","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'product-detail', params: { slug: trendingProduct.slug } }}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(trendingProduct.product_images.length ? trendingProduct.product_images[0].imageUrl : ''),expression:"trendingProduct.product_images.length ? trendingProduct.product_images[0].imageUrl : ''"}],staticClass:"mx-auto p-9",attrs:{"width":"450","height":"450","alt":trendingProduct.name}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col text-center absolute bottom-2 right-2\" data-v-d03c060c>","</div>",[_c('nuxt-link',{staticClass:"p-2 inline-block text-center w-10 h-10 leading-10 bg-white   \n                                        border border-solid border-gray-300 mb-2 rounded-full\n                                        transform translate-x-20 transition-all duration-300\n                                        hover:text-white hover:bg-red-500\n                                        product-buttons focus:outline-none",attrs:{"to":"/"}},[_c('svg',{staticClass:"icon icon-tabler icon-tabler-arrow-narrow-right focus:outline-none",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"22","height":"22","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"#2c3e50","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('path',{attrs:{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('line',{attrs:{"x1":"5","y1":"12","x2":"19","y2":"12"}}),_vm._v(" "),_c('line',{attrs:{"x1":"15","y1":"16","x2":"19","y2":"12"}}),_vm._v(" "),_c('line',{attrs:{"x1":"15","y1":"8","x2":"19","y2":"12"}})])]),_vm._ssrNode(" <button class=\"p-2 inline-block text-center w-10 h-10 leading-10 bg-white   \n                                        transform translate-x-20 transition-all duration-400\n                                        hover:text-white hover:bg-red-500\n                                        product-buttons\n                                        border border-solid border-gray-300 mb-2 rounded-full focus:outline-none\" data-v-d03c060c><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-heart focus:outline-none\" data-v-d03c060c><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-d03c060c></path> <path d=\"M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\" data-v-d03c060c></path></svg></button> <button class=\"p-2 inline-block text-center w-10 h-10 leading-10 bg-white   \n                                        border border-solid border-gray-300 mb-2 rounded-full\n                                        transform translate-x-20 transition-all duration-500\n                                        hover:text-white hover:bg-red-500\n                                        product-buttons focus:outline-none\" data-v-d03c060c><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-shopping-cart-plus focus:outline-none\" data-v-d03c060c><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-d03c060c></path> <circle cx=\"6\" cy=\"19\" r=\"2\" data-v-d03c060c></circle> <circle cx=\"17\" cy=\"19\" r=\"2\" data-v-d03c060c></circle> <path d=\"M17 17h-11v-14h-2\" data-v-d03c060c></path> <path d=\"M6 5l6.005 .429m7.138 6.573l-.143 .998h-13\" data-v-d03c060c></path> <path d=\"M15 6h6m-3 -3v6\" data-v-d03c060c></path></svg></button>")],2),_vm._ssrNode(" "+((+trendingProduct.salePrice)?("<div class=\"block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 left-2\" data-v-d03c060c>"+_vm._ssrEscape("\n                    -"+_vm._s(_vm._f("percentage")(trendingProduct.salePrice))+"\n                ")+"</div>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-10 py-4 text-[16px] font-bold text-center\" data-v-d03c060c>","</div>",[_vm._ssrNode("<p class=\"truncate\" data-v-d03c060c>","</p>",[_c('nuxt-link',{staticClass:"hover:text-red-500 overflow-truncate",attrs:{"to":{ name: 'product-detail', params: { slug: trendingProduct.slug } }}},[_vm._v("\n                        "+_vm._s(trendingProduct.name)+"\n                    ")])],1),_vm._ssrNode(" <span class=\"text-red-600\" data-v-d03c060c>"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(trendingProduct.price)))+"</span>")],2)],2)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TrendingProduct.vue?vue&type=template&id=d03c060c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TrendingProduct.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TrendingProductvue_type_script_lang_js_ = ({
  props: ['trendingProducts'],
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addToCart', { ...product,
        quantity: 1
      });
    }

  }
});
// CONCATENATED MODULE: ./components/TrendingProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TrendingProductvue_type_script_lang_js_ = (TrendingProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TrendingProduct.vue



function injectStyles (context) {
  
  var style1 = __webpack_require__(97)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TrendingProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d03c060c",
  "382a0ac4"
  
)

/* harmony default export */ var TrendingProduct = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutUsBanner.vue?vue&type=template&id=a0388b24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-20 w-[97%] xl:w-full mx-auto"},[_vm._ssrNode("<div class=\"w-11/12 md:w-full mx-auto\n        lg:bg-transparent text-center pt-10\n        bg-center bg-no-repeat px-6 lg:pb-32 \n        py-20 md:pt-24 overflow-hidden rounded-lg\" style=\"background: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-3.png'); background-color: #FFAF15;\\n        \">","</div>",[_vm._ssrNode("<p class=\"pt-10 text-4xl md:text-4xl text-white tracking-tight md:tracking-wide font-semibold leading-10 mb-4\">\n            Chào mừng đến với PETMARKET\n        </p> <p class=\"text-lg md:text-xl text-white font-semibold tracking-tight leading-6 mb-5\">\n        Siêu thị cho thú cưng của bạn!\n        </p> "),_c('nuxt-link',{staticClass:"inline-block py-2.5 px-8 \n                        font-bold text-white text-[16px]\n                        hover:bg-red-800\n                        rounded-full bg-black",attrs:{"to":"/gioi-thieu"}},[_vm._v("\n            Về chúng tôi\n        ")])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutUsBanner.vue?vue&type=template&id=a0388b24&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutUsBanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AboutUsBannervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/AboutUsBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutUsBannervue_type_script_lang_js_ = (AboutUsBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/AboutUsBanner.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutUsBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a6d325e"
  
)

/* harmony default export */ var AboutUsBanner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner.vue?vue&type=template&id=65b96433&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('client-only',[_c('div',{staticClass:"rounded-lg overflow-hidden relative",attrs:{"uk-slider":"animation: push; autoplay: true"}},[_c('div',{staticClass:"uk-slider-items"},[_c('div',{staticClass:"w-full h-[250px] ip6:h-[293px] md:h-[480px] lg:h-[580px] rounded-lg overflow-hidden"},[_c('img',{staticClass:"w-full h-full object-cover",attrs:{"src":__webpack_require__(92),"height":"590","alt":""}}),_vm._v(" "),_c('div',{staticClass:"absolute px-4 top-20 left-3 md:top-40 md:right-1/2 lg:text-center"})]),_vm._v(" "),_c('div',{staticClass:"w-full h-[250px] ip6:h-[293px] md:h-[480px] lg:h-[580px] rounded-lg overflow-hidden"},[_c('img',{staticClass:"w-full h-full object-cover",attrs:{"src":__webpack_require__(93),"height":"590","alt":""}}),_vm._v(" "),_c('div',{staticClass:"absolute px-4 top-20 left-3 md:top-40 md:right-1/2 lg:text-center"})]),_vm._v(" "),_c('div',{staticClass:"w-full h-[250px] ip6:h-[293px] md:h-[480px] lg:h-[580px] rounded-lg overflow-hidden"},[_c('img',{staticClass:"w-full h-full object-cover",attrs:{"src":__webpack_require__(94),"height":"590","alt":""}}),_vm._v(" "),_c('div',{staticClass:"absolute px-4 top-20 left-3 md:top-40 md:right-1/2 lg:text-center"})])]),_vm._v(" "),_c('a',{staticClass:"absolute left-2 top-2/4",attrs:{"href":"#","uk-slidenav-previous":"","uk-slider-item":"previous"}}),_vm._v(" "),_c('a',{staticClass:"absolute right-2 top-2/4",attrs:{"href":"#","uk-slidenav-next":"","uk-slider-item":"next"}})])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full md:flex gap-4 mt-4\">","</div>",[_vm._ssrNode("<div class=\"md:w-2/6 rounded-lg overflow-hidden mt-4 relative\">","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'shop-by-category', params: { slug: 'shop-cho-cho' } }}},[_c('img',{staticClass:"mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500",staticStyle:{"max-height":"380px"},attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-7.jpg","width":"100%","alt":""}}),_vm._v(" "),_c('div',{staticClass:"absolute bottom-5 left-3 md:bottom-8 md:left-6"},[_c('p',{staticClass:"text-[25px] xl:text-[34px] text-yellow-800 leading-7 md:leading-10 my-2 font-bold"},[_vm._v("\n                        Sản phẩm "),_c('br'),_vm._v("\n                        cho chó\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-[16px] font-bold py-2 px-8 bg-yellow-800 text-white hover:bg-red-500 rounded-full"},[_vm._v("\n                        Mua Ngay\n                    ")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"md:w-2/6 rounded-lg overflow-hidden mt-4 relative\">","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'shop-by-category', params: { slug: 'shop-cho-meo' } }}},[_c('img',{staticClass:"mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500",staticStyle:{"max-height":"380px"},attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-8.jpg","width":"100%","alt":""}}),_vm._v(" "),_c('div',{staticClass:"absolute bottom-5 left-3 md:bottom-8 md:left-6"},[_c('p',{staticClass:"text-[25px] xl:text-[34px] text-purple-900 leading-7 md:leading-10 my-2 font-bold"},[_vm._v("\n                        Sản phẩm "),_c('br'),_vm._v("\n                        cho mèo\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-[16px] font-bold py-2 px-8 bg-purple-900 text-white hover:bg-red-500 rounded-full"},[_vm._v("\n                        Mua Ngay\n                    ")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"md:w-2/6 rounded-lg overflow-hidden mt-4 relative\">","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'shop-by-category', params: { slug: 'shop-thu-y' } }}},[_c('img',{staticClass:"mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500",staticStyle:{"max-height":"380px"},attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-9.jpg","width":"100%","alt":""}}),_vm._v(" "),_c('div',{staticClass:"absolute bottom-5 left-3 md:bottom-8 md:left-6"},[_c('p',{staticClass:"text-[25px] xl:text-[34px] text-blue-800 leading-7 md:leading-10 my-2 font-bold"},[_vm._v("\n                        Chăm sóc"),_c('br'),_vm._v("\n                        sức khoẻ\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-[16px] font-bold py-2 px-8 bg-blue-800 text-white hover:bg-red-500 rounded-full"},[_vm._v("\n                        Mua Ngay\n                    ")])])])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Banner.vue?vue&type=template&id=65b96433&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Banner.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16350c62"
  
)

/* harmony default export */ var Banner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SmallBanner.vue?vue&type=template&id=31e97332&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-10 w-full"},[_vm._ssrNode("<div class=\"md:flex justify-center gap-4\"><a href=\"#\" class=\"block md:w-2/4 relative mb-4\"><img src=\"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-12.jpg\" alt=\"Banner Image\" class=\"rounded-lg overflow-hidden w-full\"> <div class=\"w-full px-4 lg:px-20 absolute top-2/4 transform -translate-y-2/4\"><div class=\"text-white text-xs font-bold mb-2 hidden lg:block\">\n                    20% OFF ALL ITEMS\n                </div> <h3 class=\"mb-2.5 text-white font-bold text-2xl lg:text-4xl\">\n                    Hot Summer <br>\n                    Deals\n                </h3> <p class=\"inline-block py-2.5 px-8 \n                        font-bold text-white text-[16px]\n                        hover:bg-red-800\n                        rounded-full bg-red-500\">\n                    Shop Now\n                </p></div></a> <a href=\"#\" class=\"block md:w-2/4 relative mb-4\"><img src=\"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-13.jpg\" alt=\"Banner Image\" class=\"rounded-lg overflow-hidden w-full\"> <div class=\"w-full px-4 lg:px-20 absolute top-2/4 transform -translate-y-2/4\"><div class=\"text-black text-xs font-bold mb-2 hidden lg:block\">\n                    TOYS, TREATS &amp; LEASHES\n                </div> <h3 class=\"mb-2.5 text-black font-bold text-2xl lg:text-4xl\">\n                    Now <br>\n                    At Wilone\n                </h3> <p class=\"inline-block py-2.5 px-8 \n                        font-bold text-white text-[16px]\n                        hover:bg-red-800\n                        rounded-full bg-red-500\">\n                    Shop Now\n                </p></div></a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SmallBanner.vue?vue&type=template&id=31e97332&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SmallBanner.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2960324d"
  
)

/* harmony default export */ var SmallBanner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog.vue?vue&type=template&id=0dc3fcce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-10 lg:mt-0"},[_vm._ssrNode("<h1 class=\"font-semibold text-4xl text-center mb-6\" data-v-0dc3fcce>Tin tức</h1> "),_c('client-only',[_c('div',{attrs:{"uk-slider":""}},[_c('div',{staticClass:"uk-position-relative"},[_c('ul',{staticClass:"uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid"},[_c('div',[_c('div',{staticClass:"rounded-lg border border-solid border-gray-[#ebebeb]"},[_c('img',{staticClass:"mx-auto rounded-lg rounded-b-none overflow-hidden",attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"my-4"},[_c('a',{staticClass:"text-xs font-bold tracking-widest text-yellow-600 ",attrs:{"href":"#"}},[_vm._v("BACK PACK")])]),_vm._v(" "),_c('h2',{staticClass:"leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Traveling Solo Is Awesome")])]),_vm._v(" "),_c('div',{staticClass:"flex items-center justify-center text-[13px] py-3.5"},[_c('div',{staticClass:"flex items-center author"},[_c('span',{staticClass:"text-gray-400 font-bold"},[_vm._v("\n                                            By :\n                                            "),_c('a',{staticClass:"ml-1 text-black hover:text-yellow-500",attrs:{"href":"#"}},[_vm._v("Long")])])]),_vm._v(" "),_c('div',{staticClass:"text-gray-400 font-bold hover:text-yellow-500"},[_vm._v("\n                                        4 comments\n                                    ")])])])])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"rounded-lg border border-solid border-gray-[#ebebeb]"},[_c('img',{staticClass:"mx-auto rounded-lg rounded-b-none overflow-hidden",attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"my-4"},[_c('a',{staticClass:"text-xs font-bold tracking-widest text-yellow-600 ",attrs:{"href":"#"}},[_vm._v("BACK PACK")])]),_vm._v(" "),_c('h2',{staticClass:"leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Traveling Solo Is Awesome")])]),_vm._v(" "),_c('div',{staticClass:"flex items-center justify-center text-[13px] py-3.5"},[_c('div',{staticClass:"flex items-center author"},[_c('span',{staticClass:"text-gray-400 font-bold"},[_vm._v("\n                                            By :\n                                            "),_c('a',{staticClass:"ml-1 text-black hover:text-yellow-500",attrs:{"href":"#"}},[_vm._v("Long")])])]),_vm._v(" "),_c('div',{staticClass:"text-gray-400 font-bold hover:text-yellow-500"},[_vm._v("\n                                        4 comments\n                                    ")])])])])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"rounded-lg border border-solid border-gray-[#ebebeb]"},[_c('img',{staticClass:"mx-auto rounded-lg rounded-b-none overflow-hidden",attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"my-4"},[_c('a',{staticClass:"text-xs font-bold tracking-widest text-yellow-600 ",attrs:{"href":"#"}},[_vm._v("BACK PACK")])]),_vm._v(" "),_c('h2',{staticClass:"leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Traveling Solo Is Awesome")])]),_vm._v(" "),_c('div',{staticClass:"flex items-center justify-center text-[13px] py-3.5"},[_c('div',{staticClass:"flex items-center author"},[_c('span',{staticClass:"text-gray-400 font-bold"},[_vm._v("\n                                            By :\n                                            "),_c('a',{staticClass:"ml-1 text-black hover:text-yellow-500",attrs:{"href":"#"}},[_vm._v("Long")])])]),_vm._v(" "),_c('div',{staticClass:"text-gray-400 font-bold hover:text-yellow-500"},[_vm._v("\n                                        4 comments\n                                    ")])])])])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"rounded-lg border border-solid border-gray-[#ebebeb]"},[_c('img',{staticClass:"mx-auto rounded-lg rounded-b-none overflow-hidden",attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"my-4"},[_c('a',{staticClass:"text-xs font-bold tracking-widest text-yellow-600 ",attrs:{"href":"#"}},[_vm._v("BACK PACK")])]),_vm._v(" "),_c('h2',{staticClass:"leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Traveling Solo Is Awesome")])]),_vm._v(" "),_c('div',{staticClass:"flex items-center justify-center text-[13px] py-3.5"},[_c('div',{staticClass:"flex items-center author"},[_c('span',{staticClass:"text-gray-400 font-bold"},[_vm._v("\n                                            By :\n                                            "),_c('a',{staticClass:"ml-1 text-black hover:text-yellow-500",attrs:{"href":"#"}},[_vm._v("Long")])])]),_vm._v(" "),_c('div',{staticClass:"text-gray-400 font-bold hover:text-yellow-500"},[_vm._v("\n                                        4 comments\n                                    ")])])])])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"rounded-lg border border-solid border-gray-[#ebebeb]"},[_c('img',{staticClass:"mx-auto rounded-lg rounded-b-none overflow-hidden",attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"my-4"},[_c('a',{staticClass:"text-xs font-bold tracking-widest text-yellow-600 ",attrs:{"href":"#"}},[_vm._v("BACK PACK")])]),_vm._v(" "),_c('h2',{staticClass:"leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Traveling Solo Is Awesome")])]),_vm._v(" "),_c('div',{staticClass:"flex items-center justify-center text-[13px] py-3.5"},[_c('div',{staticClass:"flex items-center author"},[_c('span',{staticClass:"text-gray-400 font-bold"},[_vm._v("\n                                            By :\n                                            "),_c('a',{staticClass:"ml-1 text-black hover:text-yellow-500",attrs:{"href":"#"}},[_vm._v("Long")])])]),_vm._v(" "),_c('div',{staticClass:"text-gray-400 font-bold hover:text-yellow-500"},[_vm._v("\n                                        4 comments\n                                    ")])])])])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"rounded-lg border border-solid border-gray-[#ebebeb]"},[_c('img',{staticClass:"mx-auto rounded-lg rounded-b-none overflow-hidden",attrs:{"src":"https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"my-4"},[_c('a',{staticClass:"text-xs font-bold tracking-widest text-yellow-600 ",attrs:{"href":"#"}},[_vm._v("BACK PACK")])]),_vm._v(" "),_c('h2',{staticClass:"leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Traveling Solo Is Awesome")])]),_vm._v(" "),_c('div',{staticClass:"flex items-center justify-center text-[13px] py-3.5"},[_c('div',{staticClass:"flex items-center author"},[_c('span',{staticClass:"text-gray-400 font-bold"},[_vm._v("\n                                            By :\n                                            "),_c('a',{staticClass:"ml-1 text-black hover:text-yellow-500",attrs:{"href":"#"}},[_vm._v("Long")])])]),_vm._v(" "),_c('div',{staticClass:"text-gray-400 font-bold hover:text-yellow-500"},[_vm._v("\n                                        4 comments\n                                    ")])])])])])])]),_vm._v(" "),_c('ul',{staticClass:"uk-slider-nav justify-center uk-dotnav mt-2"})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog.vue?vue&type=template&id=0dc3fcce&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blog.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0dc3fcce",
  "0bbc2158"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1044b13c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto mt-2 font-nunito mb-20"},[_c('Banner'),_vm._ssrNode(" "),_c('TopBrandSlider'),_vm._ssrNode(" "),_c('BestDealSlider',{attrs:{"saleProducts":_vm.saleProducts}}),_vm._ssrNode(" "),_c('SmallBanner'),_vm._ssrNode(" "),_c('TrendingProduct',{attrs:{"trendingProducts":_vm.trendingProducts}}),_vm._ssrNode(" "),_c('AboutUsBanner'),_vm._ssrNode(" "),_c('Blog')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1044b13c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: 'default',

  data() {
    return {
      saleProducts: '',
      trendingProducts: ''
    };
  },

  async fetch() {
    await this.$store.dispatch('product/getProducts');
    await this.$store.dispatch('brand/getBrands', {
      top: true
    });
  },

  created() {
    this.getSaleProduct();
    this.getTrendingProduct();
  },

  methods: {
    async getSaleProduct() {
      try {
        const response = await this.$services.Product.getSaleProduct();
        this.saleProducts = response.data;
      } catch (error) {
        throw error;
      }
    },

    async getTrendingProduct() {
      try {
        const response = await this.$services.Product.getTrendingProduct();
        this.trendingProducts = response.data;
      } catch (error) {
        throw error;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a7a2db6c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Banner: __webpack_require__(108).default,TopBrandSlider: __webpack_require__(103).default,BestDealSlider: __webpack_require__(104).default,SmallBanner: __webpack_require__(109).default,TrendingProduct: __webpack_require__(105).default,AboutUsBanner: __webpack_require__(106).default,Blog: __webpack_require__(110).default})


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3aa3d4e0", content, true, context)
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3dd55ffe", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("147c6454", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner1.16a9976.jpg";

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner2.de22baf.jpg";

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner3.b731533.jpg";

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestDealSlider_vue_vue_type_style_index_0_id_607950c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestDealSlider_vue_vue_type_style_index_0_id_607950c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestDealSlider_vue_vue_type_style_index_0_id_607950c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestDealSlider_vue_vue_type_style_index_0_id_607950c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestDealSlider_vue_vue_type_style_index_0_id_607950c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-img:hover .product-buttons[data-v-607950c9]{\n  opacity:1!important;\n  transform:translateX(0)!important\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingProduct_vue_vue_type_style_index_1_id_d03c060c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingProduct_vue_vue_type_style_index_1_id_d03c060c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingProduct_vue_vue_type_style_index_1_id_d03c060c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingProduct_vue_vue_type_style_index_1_id_d03c060c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingProduct_vue_vue_type_style_index_1_id_d03c060c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-img:hover .product-buttons[data-v-d03c060c]{\n  opacity:1!important;\n  transform:translateX(0)!important\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_0dc3fcce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_0dc3fcce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_0dc3fcce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_0dc3fcce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_0dc3fcce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=index.vue.js.map