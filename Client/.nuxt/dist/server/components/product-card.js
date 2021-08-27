exports.ids = [9];
exports.modules = {

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=68af19da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full box-border\">","</div>",[_vm._ssrNode("<div class=\"relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                    name: 'product-detail',
                    params: { slug: _vm.product.slug }
                }}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(
                        _vm.product.product_images.length
                            ? _vm.product.product_images[0].imageUrl
                            : ''
                    ),expression:"\n                        product.product_images.length\n                            ? product.product_images[0].imageUrl\n                            : ''\n                    "}],staticClass:"mx-auto p-9",attrs:{"width":"450","height":"450","alt":_vm.product.name}}),_vm._v(" "),_c('div',{staticClass:"flex flex-col text-center absolute bottom-2 right-1"},[_c('a',{staticClass:"iline-block text-center w-8 h-8 md:w-10 md:h-10 leading-8 md:leading-10\n                                    border border-solid border-gray-300 mb-2 rounded-full\n                                    transform translate-x-12 transition-all duration-300\n                                    hover:text-white hover:bg-red-500\n                                    opacity-0 product-buttons",attrs:{"href":"#"}},[_c('i',{staticClass:"fas fa-long-arrow-alt-right"})]),_vm._v(" "),_c('button',{staticClass:"iline-block text-center w-8 h-8 md:w-10 md:h-10 leading-8 md:leading-10\n                                    transform translate-x-12 transition-all duration-400\n                                    hover:text-white hover:bg-red-500\n                                    opacity-1 product-buttons\n                                    border border-solid border-gray-300 mb-2 rounded-full"},[_c('i',{staticClass:"far fa-heart focus:outline-none"})]),_vm._v(" "),_c('button',{staticClass:"iline-block text-center w-10 h-10 leading-10 \n                                    border border-solid border-gray-300 mb-2 rounded-full\n                                    transform translate-x-12 transition-all duration-500\n                                    hover:text-white hover:bg-red-500\n                                    opacity-0 product-buttons hidden"},[_c('i',{staticClass:"fas fa-shopping-cart focus:outline-none"})])])]),_vm._ssrNode(" "+((_vm.product.salePrice)?("<div class=\"block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2\">"+_vm._ssrEscape("\n                -"+_vm._s(_vm._f("percentage")(_vm.product.salePrice))+"\n            ")+"</div>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-4 text-[16px] font-bold text-center\">","</div>",[_vm._ssrNode("<div class=\"flex justify-center my-2\"><button type=\"button\" class=\"focus:outline-none mr-1\"><svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"block h-4 w-4 text-yellow-400\"><path d=\"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z\"></path></svg></button> <button type=\"button\" class=\"focus:outline-none mr-1\"><svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"block h-4 w-4 text-yellow-400\"><path d=\"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z\"></path></svg></button> <button type=\"button\" class=\"focus:outline-none mr-1\"><svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"block h-4 w-4 text-yellow-400\"><path d=\"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z\"></path></svg></button> <button type=\"button\" class=\"focus:outline-none mr-1\"><svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"block h-4 w-4 text-yellow-400\"><path d=\"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z\"></path></svg></button> <button type=\"button\" class=\"focus:outline-none mr-1\"><svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"block h-4 w-4 text-yellow-400\"><path d=\"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z\"></path></svg></button> <span class=\"text-xs text-gray-400\">(1)</span></div> "),_vm._ssrNode("<p class=\"mb-2\">","</p>",[_c('nuxt-link',{staticClass:"hover:text-red-500",attrs:{"to":"#"}},[_vm._v("\n                    "+_vm._s(_vm.product.name)+"\n                ")])],1),_vm._ssrNode(" <span class=\"text-red-600\">"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(_vm.product.price)))+"</span>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=68af19da&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  props: ['product']
});
// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProductCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "003c59d9"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-card.js.map