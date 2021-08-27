exports.ids = [25,15];
exports.modules = {

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=418c52a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full lg:max-w-[1440px] mx-auto px-4 my-10"},[_c('Alert',{attrs:{"visible":_vm.alert.isVisible,"message":_vm.alert.message,"alertType":_vm.alert.type}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full p-4 h-auto bg-no-repeat bg-center bg-cover\" style=\"background-image: url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-pet-simple-pink-banner-image_172322.jpg')\">","</div>",[_vm._ssrNode("<div class=\"flex items-center flex-wrap justify-between\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-1/2\"></div> "),_vm._ssrNode("<div class=\"w-full lg:w-1/2 py-10 lg:px-20\">","</div>",[_c('ValidationObserver',{ref:"form"},[_c('form',{staticClass:"bg-white shadow-md p-4 lg:p-8 rounded-md",on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit()},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onSubmit()}}},[_c('div',{staticClass:"my-2"},[_c('p',{staticClass:"font-bold text-[20px]"},[_vm._v("Đăng nhập")])]),_vm._v(" "),_c('div',{staticClass:"my-2"},[_c('ValidationProvider',{attrs:{"rules":"required","custom-messages":_vm.customErrorMessages.email},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.credentials.email),expression:"credentials.email"}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",class:{
                                        'border-red-600': errors[0]
                                    },attrs:{"type":"text","placeholder":"Tên đăng nhập..."},domProps:{"value":(_vm.credentials.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.credentials, "email", $event.target.value)}}}),_vm._v(" "),_c('p',{staticClass:"text-xs italic text-red-500"},[_vm._v("\n                                    "+_vm._s(errors[0])+"\n                                ")])]}}])}),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"required","custom-messages":_vm.customErrorMessages.password},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                                    var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.credentials.password),expression:"credentials.password"}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",class:{
                                        'border-red-600': errors[0]
                                    },attrs:{"type":"password","placeholder":"Mật khẩu..."},domProps:{"value":(_vm.credentials.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.credentials, "password", $event.target.value)}}}),_vm._v(" "),_c('p',{staticClass:"text-xs italic text-red-500"},[_vm._v("\n                                    "+_vm._s(errors[0])+"\n                                ")])]}}])}),_vm._v(" "),_c('button',{staticClass:"w-full my-2 p-2 bg-red-300 hover:bg-red-500 text-white rounded-md transition-all duration-500"},[_vm._v("\n                                Đăng nhập\n                            ")]),_vm._v(" "),_c('div',{staticClass:"flex items-center justify-between"},[_c('div',{staticClass:"text-[12px] lg:text-[14px] text-blue-500"},[_c('nuxt-link',{attrs:{"to":"/quen-mat-khau"}},[_vm._v("Quên mật khẩu?")])],1),_vm._v(" "),_c('div',{staticClass:"text-[12px] lg:text-[14px] text-blue-500"},[_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" Nhớ mật khẩu\n                                ")])]),_vm._v(" "),_c('p',{staticClass:"text-center text-gray-400 my-2"},[_vm._v("\n                                ------ HOẶC ------\n                            ")]),_vm._v(" "),_c('div',{staticClass:"flex items-center justify-center"},[_c('button',{staticClass:"w-32 p-2 bg-blue-500 text-white mx-4"},[_c('svg',{staticClass:"inline-block",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"22","height":"22","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z","fill":"white"}})]),_vm._v(" "),_c('span',{staticClass:"mx-2 text-[12px] lg:text-[14px]"},[_vm._v("Facebook")])]),_vm._v(" "),_c('button',{staticClass:"w-32 p-2 bg-red-500 text-white mx-4"},[_c('svg',{staticClass:"inline-block",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"22","height":"22","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z","fill-rule":"evenodd","clip-rule":"evenodd","fill":"white"}})]),_vm._v(" "),_c('span',{staticClass:"mx-2 text-[12px] lg:text-[14px]"},[_vm._v("Google")])])]),_vm._v(" "),_c('p',{staticClass:"text-center my-4"},[_vm._v("\n                                Bạn chưa có tài khoản?\n                                "),_c('br'),_vm._v(" "),_c('nuxt-link',{staticClass:"text-blue-500",attrs:{"to":"/dang-ky","href":"#"}},[_vm._v("\n                                    Đăng ký ngay\n                                ")])],1)],1)])])],1)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=418c52a8&

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.js
var vee_validate = __webpack_require__(8);

// EXTERNAL MODULE: ./components/UIcomponents/Alert.vue + 4 modules
var Alert = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    ValidationProvider: vee_validate["ValidationProvider"],
    ValidationObserver: vee_validate["ValidationObserver"],
    Alert: Alert["default"]
  },

  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      customErrorMessages: {
        email: {
          required: 'Hãy nhập email của bạn!'
        },
        password: {
          required: 'Hãy nhập mật khẩu của bạn!'
        }
      },
      alert: {
        isVisible: false,
        message: '',
        type: ''
      }
    };
  },

  methods: {
    //TODO: Test case 1 => catching form error before can send login request to server
    async login() {
      try {
        await this.$auth.loginWith('laravelJWT', {
          data: this.credentials
        });
        this.alertTrigger('success', 'Đăng nhập thành công!', 2000);
        setTimeout(_ => {
          this.$router.push({
            name: 'home-page'
          });
        }, 2000);
      } catch (error) {
        this.alertTrigger('danger', error.response.data.error, 2000);
      }
    },

    alertTrigger(type, msg, ms) {
      this.alert.isVisible = true;
      this.alert.type = type;
      this.alert.message = msg;
      setTimeout(_ => {
        this.alert.isVisible = false;
      }, ms);
    },

    // form validate
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        } else {
          this.login();
        }
      });
    }

  },

  beforeDestroy() {}

});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "75d63561"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("328121f9", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_407226a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_407226a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_407226a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_407226a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_407226a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".alert[data-v-407226a2]{\n  -webkit-animation-name:fadeInDown-data-v-407226a2;\n          animation-name:fadeInDown-data-v-407226a2;\n  -webkit-animation-duration:.3s;\n          animation-duration:.3s;\n  -webkit-animation-timing-function:ease-in-out;\n          animation-timing-function:ease-in-out;\n  -webkit-animation-fill-mode:forwards;\n          animation-fill-mode:forwards\n}\n@-webkit-keyframes fadeInDown-data-v-407226a2{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@keyframes fadeInDown-data-v-407226a2{\n0%{\n    opacity:0;\n    transform:translate3d(-50%,-100%,0)\n}\nto{\n    opacity:1;\n    transform:translate3d(-50%,0,0)\n}\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UIcomponents/Alert.vue?vue&type=template&id=407226a2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"enter-active-class":"alert"}},[(_vm.visible)?_c('div',{staticClass:"w-96 flex py-2 px-3 border-l-4 shadow-md mb-2 fixed top-8 left-2/4 transform -translate-x-2/4",class:_vm.type,staticStyle:{"z-index":"9999999"}},[_c('div',{staticClass:"rounded-full bg-white mr-3",domProps:{"innerHTML":_vm._s(_vm.alertIcon)}}),_vm._v(" "),_c('div',{staticClass:"text-white max-w-xs "},[_vm._v("\n            "+_vm._s(_vm.message)+"\n        ")])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UIcomponents/Alert.vue?vue&type=template&id=407226a2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UIcomponents/Alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Alertvue_type_script_lang_js_ = ({
  props: ['message', 'alertType', 'visible'],

  data() {
    return {
      successSvg: `<svg
                width="1.8em"
                height="1.8em"
                viewBox="0 0 16 16"
                class="bi bi-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
            </svg>`,
      errorSvg: `<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                        </svg>`,
      alertIcon: ''
    };
  },

  computed: {
    type() {
      let type;

      switch (this.alertType) {
        case 'danger':
          type = 'bg-red-500 border-red-700 text-red-500 ';
          this.alertIcon = this.errorSvg;
          break;

        case 'success':
          type = 'bg-green-500 border-green-700 text-green-500 ';
          this.alertIcon = this.successSvg;
          break;

        default:
      }

      return type;
    }

  }
});
// CONCATENATED MODULE: ./components/UIcomponents/Alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var UIcomponents_Alertvue_type_script_lang_js_ = (Alertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/UIcomponents/Alert.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  UIcomponents_Alertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "407226a2",
  "1175b4a0"
  
)

/* harmony default export */ var Alert = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.vue.js.map