exports.ids = [8];
exports.modules = {

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=5d599280&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"flex flex-row flex-nowrap justify-center items-center",attrs:{"aria-label":"Pagination"}},[_c('nuxt-link',{staticClass:"flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300",class:[_vm.current_page == 1 ? 'pointer-events-none' : ''],attrs:{"to":{
            name: _vm.routeName,
            params: { slug: _vm.slug },
            query: { page: _vm.current_page - 1 }
        },"href":"#","title":"Previous Page"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Previous Page")]),_vm._v(" "),_c('svg',{staticClass:"block w-4 h-4 fill-current",attrs:{"viewBox":"0 0 256 512","aria-hidden":"true","role":"presentation"}},[_c('path',{attrs:{"d":"M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"}})])]),_vm._ssrNode(" "),_vm._l((_vm.pages),function(item){return _c('nuxt-link',{key:item.name,staticClass:"flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 hover:border-gray-300",class:[
            item.name == _vm.current_page
                ? 'bg-black text-white'
                : 'bg-white text-black'
        ],attrs:{"to":{
            name: _vm.routeName,
            params: { slug: _vm.slug },
            query: { page: item.name }
        },"href":"#","title":"Page 1"}},[_vm._v("\n        "+_vm._s(item.name)+"\n    ")])}),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300",class:[
            _vm.current_page == _vm.last_page ? 'pointer-events-none' : ''
        ],attrs:{"to":{
            name: _vm.routeName,
            params: { slug: _vm.slug },
            query: { page: _vm.current_page + 1 }
        },"title":"Next Page"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Next Page")]),_vm._v(" "),_c('svg',{staticClass:"block w-4 h-4 fill-current",attrs:{"viewBox":"0 0 256 512","aria-hidden":"true","role":"presentation"}},[_c('path',{attrs:{"d":"M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=5d599280&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: {
    offset: {
      type: Number,
      required: false,
      default: 3
    },
    last_page: {
      type: Number,
      required: true
    },
    current_page: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      slug: this.$route.params.slug,
      routeName: this.$route.name
    };
  },

  computed: {
    startPage() {
      // When on the first page
      if (this.current_page === 1) {
        return 1;
      } // When on the last page


      if (this.current_page === this.last_page) {
        return this.last_page - this.offset + 1;
      } // When in between


      return this.current_page - 1;
    },

    endPage() {
      return Math.min(this.startPage + this.offset - 1, this.last_page);
    },

    pages() {
      const range = [];
      const startPage = this.startPage || 1;

      for (let i = startPage; i <= this.endPage; i++) {
        range.push({
          name: i
        });
      }

      return range;
    }

  }
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Pagination.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4a455ed0"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pagination.js.map