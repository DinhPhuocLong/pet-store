exports.ids = [3];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=best-deal-slider.js.map