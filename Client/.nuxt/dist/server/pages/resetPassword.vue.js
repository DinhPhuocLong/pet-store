exports.ids = [30];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/resetPassword.vue?vue&type=template&id=4a8952b2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full lg:max-w-[1440px] mx-auto px-4 my-10"},[_vm._ssrNode("<div class=\"w-full p-4 h-auto bg-no-repeat bg-center bg-cover\" style=\"background-image: url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-animal-pet-background-material-image_164004.jpg')\"><div class=\"flex items-center flex-wrap justify-between\"><div class=\"w-full lg:w-1/2\"></div> <div class=\"w-full lg:w-1/2 py-10 lg:px-20\"><form class=\"bg-white shadow-md p-4 lg:p-8 rounded-md\"><div class=\"my-2\"><p class=\"font-bold text-[20px]\">\n                            Đổi lại mật khẩu\n                        </p></div> <div class=\"my-2\"><input type=\"password\" placeholder=\"Mật khẩu mới...\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"w-full my-2 p-2 border border-gray-400 rounded-md\"> <input type=\"password\" placeholder=\"Xác nhận mật khẩu mới...\""+(_vm._ssrAttr("value",(_vm.password_confirmation)))+" class=\"w-full my-2 p-2 border border-gray-400 rounded-md\"> <button class=\"w-full flex justify-center my-2 p-2 bg-red-300 hover:bg-red-500 text-white rounded-md transition-all duration-500\">"+((_vm.loadingState)?("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" class=\"animate-spin h-6 w-6 text-white\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" class=\"opacity-25\"></circle> <path fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\" class=\"opacity-75\"></path></svg>"):("<span>\n                                Xác nhận\n                            </span>"))+"</button></div></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/resetPassword.vue?vue&type=template&id=4a8952b2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/resetPassword.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var resetPasswordvue_type_script_lang_js_ = ({
  data() {
    return {
      password: '',
      password_confirmation: '',
      loadingState: false
    };
  },

  methods: {
    async resetPassword() {
      const token = this.$route.query.token;

      try {
        await this.$axios.post("http://157.245.55.243/api" + '/reset-password/' + token, {
          password: this.password,
          password_confirmation: this.password_confirmation
        });
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/resetPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_resetPasswordvue_type_script_lang_js_ = (resetPasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/resetPassword.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_resetPasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "12e7aafc"
  
)

/* harmony default export */ var resetPassword = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=resetPassword.vue.js.map