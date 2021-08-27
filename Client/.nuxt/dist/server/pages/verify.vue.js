exports.ids = [32];
exports.modules = {

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/verify.vue?vue&type=template&id=4e565efa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/verify.vue?vue&type=template&id=4e565efa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/verify.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var verifyvue_type_script_lang_js_ = ({
  // async asyncData({ app, params, route, error }) {
  //     const token = route.query.token;
  //     try {
  //         const response = await this.$axios.get('http://localhost:8000/api/user/verify/' + token);
  //     } catch (e) {
  //         console.log(error, token);
  //     }
  // },
  async created() {
    try {
      const token = this.$route.query.token;
      const response = await this.$axios.get('http://localhost:8000/api/user/verify/' + token);
    } catch (e) {
      console.log(e);
    }
  }

});
// CONCATENATED MODULE: ./pages/verify.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_verifyvue_type_script_lang_js_ = (verifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/verify.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_verifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7228e2b1"
  
)

/* harmony default export */ var verify = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=verify.vue.js.map