exports.ids = [7];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=template&id=6a4c8ea4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"flex flex-col md:flex-row md:gap-x-4 w-full"},[_vm._ssrNode("<div class=\"order-2 md:w-1/2\"><p><input type=\"text\" placeholder=\"Name*\""+(_vm._ssrAttr("value",(_vm.commentData.name)))+" class=\"block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden\"></p> <p><input type=\"text\" placeholder=\"Email*\""+(_vm._ssrAttr("value",(_vm.commentData.email)))+" class=\"block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden\"></p> <button class=\"text-xs uppercase focus:outline-none w-full border border-solid border-black hover:border-petshop-orange hover:bg-petshop-orange hover:text-white font-bold py-6 rounded-md overflow-hidden\">\n            Gửi\n        </button></div> <p class=\"w-full mb-6 order-1 md:order-2 md:w-1/2\"><textarea id=\"comment\" name=\"comment\" placeholder=\"Đánh giá của bạn*\" cols=\"45\" rows=\"9\" class=\"w-full p-4 border border-solid border-gray-300 focus:outline-none rounded-md overflow-hidden\">"+_vm._ssrEscape(_vm._s(_vm.commentData.comment))+"</textarea></p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=template&id=6a4c8ea4&

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

/***/ })

};;
//# sourceMappingURL=comment-form.js.map