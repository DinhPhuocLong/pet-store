exports.ids = [26,7];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("78564392", content, true, context)
};

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=template&id=3b1bc872&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"flex flex-col md:flex-row md:gap-x-4 w-full"},[_vm._ssrNode("<div class=\"order-2 md:w-1/2\"><p><input type=\"text\" placeholder=\"Họ và tên...*\""+(_vm._ssrAttr("value",(_vm.commentData.name)))+" class=\"block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden\"></p> <p><input type=\"text\" placeholder=\"Email...*\""+(_vm._ssrAttr("value",(_vm.commentData.email)))+" class=\"block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden\"></p> <button class=\"text-xs uppercase focus:outline-none w-full border border-solid border-black hover:border-petshop-orange hover:bg-petshop-orange hover:text-white font-bold py-6 rounded-md overflow-hidden\">\n            Gửi\n        </button></div> <p class=\"w-full mb-6 order-1 md:order-2 md:w-1/2\"><textarea id=\"comment\" name=\"comment\" placeholder=\"Đánh giá của bạn*\" cols=\"45\" rows=\"9\" class=\"w-full p-4 border border-solid border-gray-300 focus:outline-none rounded-md overflow-hidden\">"+_vm._ssrEscape(_vm._s(_vm.commentData.comment))+"</textarea></p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=template&id=3b1bc872&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentFormvue_type_script_lang_js_ = ({
  props: ['commentData'],
  methods: {
    onSubmit(event) {
      this.$emit('formSubmit', this.commentData);
    }

  }
});
// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentFormvue_type_script_lang_js_ = (CommentFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CommentForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ff64ba06"
  
)

/* harmony default export */ var CommentForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_43225aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_43225aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_43225aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_43225aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_43225aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".onsale[data-v-43225aec]{\n  position:relative;\n  width:56px;\n  height:26px;\n  border:2px solid #ff4545;\n  border-right:0;\n  color:#ff4545\n}\n.onsale[data-v-43225aec]:before{\n  content:\"\";\n  position:absolute;\n  width:26px;\n  height:26px;\n  right:-20px;\n  border:13px solid #ff4545;\n  border-right-color:transparent;\n  top:-2px;\n  display:inline-block!important;\n  z-index:-2\n}\n.onsale[data-v-43225aec]:after{\n  content:\"\";\n  position:absolute;\n  width:22px;\n  height:22px;\n  right:-15px;\n  border:11px solid #fff;\n  border-right-color:transparent;\n  top:0;\n  z-index:-1\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_slug.vue?vue&type=template&id=43225aec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full mt-12\" data-v-43225aec>","</div>",[_vm._ssrNode("<div class=\"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto lg:flex gap-x-8 lg:border-b border-solid border-gray-300 pb-20\" data-v-43225aec><div class=\"lg:w-1/2\" data-v-43225aec><div class=\"border border-solid border-gray-300 rounded-lg overflow-hidden relative py-12\" data-v-43225aec><img"+(_vm._ssrAttr("src",_vm.product.product_images.length
                                ? _vm.product.product_images[0].imageUrl
                                : ''))+" alt class=\"p-2 mx-auto\" data-v-43225aec> <div class=\"absolute top-4 right-4 border border-solid border-gray-300 rounded-full p-1\" data-v-43225aec><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-arrows-diagonal\" data-v-43225aec><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-43225aec></path> <polyline points=\"16 4 20 4 20 8\" data-v-43225aec></polyline> <line x1=\"14\" y1=\"10\" x2=\"20\" y2=\"4\" data-v-43225aec></line> <polyline points=\"8 20 4 20 4 16\" data-v-43225aec></polyline> <line x1=\"4\" y1=\"20\" x2=\"10\" y2=\"14\" data-v-43225aec></line></svg></div></div> <div class=\"grid grid-cols-4 gap-x-4 mt-4\" data-v-43225aec>"+(_vm._ssrList((_vm.product.product_images),function(image,index){return ("<div class=\"border border-solid border-black rounded-lg overflow-hidden\" data-v-43225aec><img"+(_vm._ssrAttr("src",image.imageUrl))+(_vm._ssrAttr("alt",image.name))+" data-v-43225aec></div>")}))+"</div></div> <div class=\"lg:w-1/2\" data-v-43225aec><h1 class=\"text-3xl font-semibold break-words leading-12\" data-v-43225aec>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.product.name)+"\n                ")+"</h1> <div class=\"flex gap-4 mt-4\" data-v-43225aec>"+((+_vm.product.salePrice)?("<span class=\"line-through text-gray-400 text-lg font-semibold\" data-v-43225aec>"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(_vm.product.price)))+"</span>"):"<!---->")+" <span class=\"text-xl font-semibold\" data-v-43225aec>"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(_vm.calculateSalePrice)))+"</span> "+((+_vm.product.salePrice)?("<div class=\"onsale text-center\" data-v-43225aec><span class=\"pl-4 text-sm font-semibold\" data-v-43225aec>"+_vm._ssrEscape("\n                            "+_vm._s(_vm._f("percentage")(_vm.product.salePrice))+"\n                        ")+"</span></div>"):"<!---->")+"</div> <div data-v-43225aec><p class=\"text-base text-gray-500\" data-v-43225aec>"+(_vm._s(_vm.product.description))+"</p> <div class=\"border-b border-solid border-gray-300 pb-8\" data-v-43225aec><form class=\"flex flex-wrap [480]:flex-nowrap w-full mt-4 items-center gap-x-2\" data-v-43225aec><div class=\"flex gap-x-2 w-full\" style=\"flex: 1 0 calc(50% + 65px);\" data-v-43225aec><div class=\"w-32 h-12 flex items-center border-2 border-gray-400 rounded-full\" data-v-43225aec><button class=\"focus:outline-none ml-3\" data-v-43225aec><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-plus\" data-v-43225aec><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-43225aec></path> <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\" data-v-43225aec></line> <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" data-v-43225aec></line></svg></button> <input type=\"number\" value=\"1\" placeholder=\"1\" class=\"w-full text-center focus:outline-none\" data-v-43225aec> <button class=\"focus:outline-none mr-3\" data-v-43225aec><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-minus\" data-v-43225aec><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-43225aec></path> <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" data-v-43225aec></line></svg></button></div> <button class=\"flex-grow h-12 bg-gray-800 text-white rounded-full\" data-v-43225aec>\n                                    Thêm vào giỏ\n                                </button></div> <button class=\"h-12 text-white nav-color rounded-full mt-4 [480]:mt-0\" style=\"flex: 1 0 calc(50% - 65px);\" data-v-43225aec>\n                                Mua ngay\n                            </button></form> <div class=\"md:flex gap-x-10\" data-v-43225aec><button class=\"flex items-center mt-6 gap-x-2\" data-v-43225aec><span class=\"flex items-center justify-center w-12 h-12 text-center vertical border border-solid border-gray-400 rounded-full\" data-v-43225aec><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"rgb(34, 34, 34)\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-heart\" data-v-43225aec><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-43225aec></path> <path d=\"M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\" data-v-43225aec></path></svg></span>\n                                Yêu thích\n                            </button> <button class=\"flex items-center mt-6 gap-x-2\" data-v-43225aec><span class=\"flex items-center justify-center w-12 h-12 text-center vertical border border-solid border-gray-400 rounded-full\" data-v-43225aec><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"rgb(34, 34, 34)\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-switch-3\" data-v-43225aec><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-43225aec></path> <path d=\"M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397\" data-v-43225aec></path> <path d=\"M18 4l3 3l-3 3\" data-v-43225aec></path> <path d=\"M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397\" data-v-43225aec></path> <path d=\"M18 20l3 -3l-3 -3\" data-v-43225aec></path></svg></span>\n                                So sánh\n                            </button></div></div> <div class=\"mt-4 flex flex-col gap-y-4 border-b border-solid border-gray-300 pb-20 lg:border-0\" data-v-43225aec><span class=\"text-gray-500 text-md\" data-v-43225aec>\n                            Tags:\n                            <a href=\"#\" class=\"text-black\" data-v-43225aec>\n                                Đồ ăn\n                            </a></span></div></div></div></div> "),_vm._ssrNode("<div class=\"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto border-b border-solid border-gray-200 mt-4 pb-10\" data-v-43225aec>","</div>",[_vm._ssrNode("<h2 class=\"text-lg font-bold\" data-v-43225aec>"+_vm._ssrEscape("\n                "+_vm._s(("Đánh giá (" + (_vm.product.reviews.length) + ")"))+"\n            ")+"</h2> "),_vm._l((_vm.product.reviews),function(review){return _vm._ssrNode("<div class=\"mt-10 border-b pb-8\" data-v-43225aec>","</div>",[_vm._ssrNode("<div class=\"float-left mr-4\" data-v-43225aec><img src=\"https://secure.gravatar.com/avatar/53444f91e698c0c7caa2dbc3bdbf93fc?s=70&d=mm&r=g\" alt class=\"w-12 lg:w-16 rounded-full\" data-v-43225aec></div> "),_vm._ssrNode("<div class=\"overflow-hidden leading-3\" data-v-43225aec>","</div>",[_vm._ssrNode("<div class=\"flex justify-between\" data-v-43225aec>","</div>",[_vm._ssrNode("<p class=\"uppercase font-bold text-[12px] text-black\" data-v-43225aec>"+_vm._ssrEscape("\n                            "+_vm._s(review.name)+"\n                        ")+"</p> "),_c('client-only',[_c('star-rating',{attrs:{"rating":review.rate,"read-only":true,"star-size":20,"show-rating":false}})],1)],2),_vm._ssrNode(" <a href=\"#\" class=\"font-normal text-[12px]\" data-v-43225aec>June 15, 2018</a>")],2),_vm._ssrNode(" <div class=\"pt-4 lg:pl-20 clear-both lg:clear-none\" data-v-43225aec><p class=\"uppercase text-[12px] text-black\" data-v-43225aec>"+_vm._ssrEscape("\n                        "+_vm._s(review.comment)+"\n                    ")+"</p></div>")],2)}),_vm._ssrNode(" "+((!_vm.product.reviews.length)?("<div id=\"comments\" class=\"mt-10\" data-v-43225aec><h2 class=\"text-2xl font-bold mb-10\" data-v-43225aec>Đánh giá</h2> <p class=\"text-gray-500\" data-v-43225aec>Hiện chưa có đánh giá nào.</p></div>"):"<!---->")+" "),_vm._ssrNode("<div id=\"reviews-form\" class=\"mt-10\" data-v-43225aec>","</div>",[_vm._ssrNode(((!_vm.product.reviews.length)?("<div class=\"md:w-2/5 xl:w-2/5 border-2 border-solid border-black rounded-lg\" data-v-43225aec><span class=\"flex gap-x-2 items-center p-4\" data-v-43225aec><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-pencil\" data-v-43225aec><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-43225aec></path> <path d=\"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4\" data-v-43225aec></path> <line x1=\"13.5\" y1=\"6.5\" x2=\"17.5\" y2=\"10.5\" data-v-43225aec></line></svg>\n                        Hãy là người đầu tiên đánh giá sản phẩm này!\n                    </span></div>"):"<!---->")+" <p class=\"text-gray-500 mt-10\" data-v-43225aec><span data-v-43225aec>Email của bạn sẽ không công khai!</span>\n                    Trường bắt buộc sẽ được đánh dấu\n                    <span class=\"text-red-500\" data-v-43225aec>*</span></p> "),_vm._ssrNode("<div id=\"rating\" class=\"flex items-center gap-x-3 my-4\" data-v-43225aec>","</div>",[_vm._ssrNode("<span data-v-43225aec>Đánh giá sao của bạn:</span> "),_c('client-only',[_c('star-rating',{attrs:{"star-size":20,"show-rating":false,"rating":_vm.rating},model:{value:(_vm.rating),callback:function ($$v) {_vm.rating=$$v},expression:"rating"}})],1)],2),_vm._ssrNode(" "),_c('CommentForm',{attrs:{"commentData":_vm.commentData},on:{"formSubmit":_vm.submit}})],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/_slug.vue?vue&type=template&id=43225aec&scoped=true&

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.js
var vee_validate = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  layout: 'shop',
  components: {
    ValidationProvider: vee_validate["ValidationProvider"],
    ValidationObserver: vee_validate["ValidationObserver"]
  },

  data() {
    return {
      rating: 0,
      commentData: {
        name: '',
        email: '',
        comment: ''
      }
    };
  },

  async asyncData({
    redirect,
    params,
    $services
  }) {
    try {
      const slug = params.slug;
      const response = await $services.Product.show(slug);
      return {
        product: response.data
      };
    } catch (error) {
      redirect('/404');
    }
  },

  computed: {
    calculateSalePrice() {
      return this.product.price - this.product.salePrice / 100 * this.product.price;
    }

  },
  methods: {
    async submit(payload) {
      let formData = { ...this.commentData,
        product_id: this.product.id,
        rate: this.rating
      };

      try {
        await this.$services.ProductReview.store(formData);
        this.commentData.name = '';
        this.commentData.email = '';
        this.commentData.comment = '';
        this.rating = 0;
        this.$nuxt.refresh();
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/product/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/product/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43225aec",
  "4d206655"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommentForm: __webpack_require__(107).default})


/***/ })

};;
//# sourceMappingURL=_slug.vue.js.map