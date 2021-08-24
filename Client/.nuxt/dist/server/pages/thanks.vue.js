exports.ids = [29];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("314b9598", content, true, context)
};

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_0041cc68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_0041cc68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_0041cc68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_0041cc68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_0041cc68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0041cc68]{\n  box-sizing:border-box\n}\nbody[data-v-0041cc68]{\n  background:#fff;\n  background:linear-gradient(180deg,#fff 0,#e1e8ed);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffffff\",endColorstr=\"#e1e8ed\",GradientType=0);\n  height:100%;\n  margin:0;\n  background-repeat:no-repeat;\n  background-attachment:fixed\n}\n.wrapper-1[data-v-0041cc68]{\n  width:100%;\n  height:100vh;\n  display:flex;\n  flex-direction:column\n}\n.wrapper-2[data-v-0041cc68]{\n  padding:30px;\n  text-align:center\n}\nh1[data-v-0041cc68]{\n  font-family:\"Kaushan Script\",cursive;\n  font-size:4em;\n  letter-spacing:3px;\n  color:#5892ff;\n  margin:0 0 20px\n}\n.wrapper-2 p[data-v-0041cc68]{\n  margin:0;\n  font-size:1.3em;\n  color:#aaa;\n  font-family:\"Source Sans Pro\",sans-serif;\n  letter-spacing:1px\n}\n.go-home[data-v-0041cc68]{\n  color:#fff;\n  background:#5892ff;\n  border:none;\n  padding:10px 50px;\n  margin:30px 0;\n  border-radius:30px;\n  text-transform:capitalize;\n  box-shadow:0 10px 16px 1px #aec7fb\n}\n.footer-like[data-v-0041cc68]{\n  margin-top:auto;\n  background:#d7e6fe;\n  padding:6px;\n  text-align:center\n}\n.footer-like p[data-v-0041cc68]{\n  margin:0;\n  padding:4px;\n  color:#5892ff;\n  font-family:\"Source Sans Pro\",sans-serif;\n  letter-spacing:1px\n}\n.footer-like p a[data-v-0041cc68]{\n  text-decoration:none;\n  color:#5892ff;\n  font-weight:600\n}\n@media (min-width:360px){\nh1[data-v-0041cc68]{\n    font-size:4.5em\n}\n.go-home[data-v-0041cc68]{\n    margin-bottom:20px\n}\n}\n@media (min-width:600px){\n.content[data-v-0041cc68]{\n    max-width:1000px;\n    margin:0 auto\n}\n.wrapper-1[data-v-0041cc68]{\n    height:auto;\n    max-width:620px;\n    margin:50px auto 0;\n    box-shadow:4px 8px 40px 8px rgba(88,146,255,.2)\n}\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thanks.vue?vue&type=template&id=0041cc68&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content mb-10"},[_vm._ssrNode("<div class=\"wrapper-1\" data-v-0041cc68>","</div>",[_vm._ssrNode("<div class=\"wrapper-2\" data-v-0041cc68>","</div>",[_vm._ssrNode("<h1 data-v-0041cc68>Cảm ơn</h1> <p data-v-0041cc68>Đơn hàng của bạn đã đặt thành công</p> "),_c('nuxt-link',{staticClass:"go-home inline-block",attrs:{"to":"/"}},[_vm._v("\n                Về trang chủ\n            ")])],2),_vm._ssrNode(" <div class=\"footer-like\" data-v-0041cc68><p data-v-0041cc68>Chúc quý khách một ngày tốt lành!</p></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thanks.vue?vue&type=template&id=0041cc68&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thanks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var thanksvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/thanks.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_thanksvue_type_script_lang_js_ = (thanksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thanks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_thanksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0041cc68",
  "71222901"
  
)

/* harmony default export */ var thanks = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=thanks.vue.js.map