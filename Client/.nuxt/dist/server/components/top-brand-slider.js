exports.ids = [13];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=top-brand-slider.js.map