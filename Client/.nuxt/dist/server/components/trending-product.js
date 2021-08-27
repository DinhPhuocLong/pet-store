exports.ids = [14];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=trending-product.js.map