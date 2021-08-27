exports.ids = [21];
exports.modules = {

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=43fc9439&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-12"},[_vm._ssrNode("<div class=\"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto\">","</div>",[_vm._ssrNode("<div class=\"my-6 text-center\"><h1 class=\"text-[25px] lg:text-[32px] font-bold\">\n                Thông tin đơn hàng\n            </h1></div> "),_vm._ssrNode("<div class=\"flex flex-wrap\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[70%] lg:pr-10\">","</div>",[_vm._ssrNode("<h2 class=\"text-[20px] font-bold\">Thông tin giao hàng</h2> "),_vm._ssrNode("<div>","</div>",[_c('ValidationObserver',{ref:"form"},[_c('form',[_c('div',{staticClass:"my-4"},[_c('p',{staticClass:"font-bold my-2"},[_vm._v("\n                                    Họ và tên"),_c('b',{staticClass:"text-red-500 ml-1"})]),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"required","custom-messages":_vm.customErrorMessages.name},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.shipmentDetails.name),expression:"shipmentDetails.name"}],staticClass:"w-full border-b-2 border-gray-200 focus:outline-none py-2",class:{
                                            'border-red-600': errors[0]
                                        },attrs:{"placeholder":"Họ và tên...","type":"text"},domProps:{"value":(_vm.shipmentDetails.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.shipmentDetails, "name", $event.target.value)}}}),_vm._v(" "),_c('p',{staticClass:"mt-1 text-sm italic text-red-500"},[_vm._v("\n                                        "+_vm._s(errors[0])+"\n                                    ")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"my-4"},[_c('p',{staticClass:"font-bold my-2"},[_vm._v("\n                                    Điện thoại"),_c('b',{staticClass:"text-red-500 ml-1"},[_vm._v("*")])]),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"required|vnPhone","custom-messages":_vm.customErrorMessages.phone},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                                        var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.shipmentDetails.phone),expression:"shipmentDetails.phone"}],staticClass:"w-full border-b-2 border-gray-200 focus:outline-none py-2",class:{
                                            'border-red-600': errors[0]
                                        },attrs:{"placeholder":"Điện thoại...","type":"text"},domProps:{"value":(_vm.shipmentDetails.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.shipmentDetails, "phone", $event.target.value)}}}),_vm._v(" "),_c('p',{staticClass:"mt-1 text-sm italic text-red-500"},[_vm._v("\n                                        "+_vm._s(errors[0])+"\n                                    ")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"my-4"},[_c('p',{staticClass:"font-bold my-2"},[_vm._v("\n                                    Email"),_c('b',{staticClass:"text-red-500 ml-1"},[_vm._v("*")])]),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"isValidateEmail"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                                        var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.shipmentDetails.email),expression:"shipmentDetails.email"}],staticClass:"w-full border-b-2 border-gray-200 focus:outline-none py-2",class:{
                                            'border-red-600': errors[0]
                                        },attrs:{"placeholder":"Email...","type":"text"},domProps:{"value":(_vm.shipmentDetails.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.shipmentDetails, "email", $event.target.value)}}}),_vm._v(" "),_c('p',{staticClass:"mt-1 text-sm italic text-red-500"},[_vm._v("\n                                        "+_vm._s(errors[0])+"\n                                    ")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"my-4"},[_c('p',{staticClass:"font-bold my-2"},[_vm._v("\n                                    Địa chỉ"),_c('b',{staticClass:"text-red-500 ml-1"},[_vm._v("*")])]),_vm._v(" "),_c('ValidationProvider',{attrs:{"rules":"required","custom-messages":_vm.customErrorMessages.address},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                                        var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.shipmentDetails.address),expression:"shipmentDetails.address"}],staticClass:"w-full border-b-2 border-gray-200 focus:outline-none py-2",class:{
                                            'border-red-600': errors[0]
                                        },attrs:{"placeholder":"Địa chỉ nhận hàng...","type":"text"},domProps:{"value":(_vm.shipmentDetails.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.shipmentDetails, "address", $event.target.value)}}}),_vm._v(" "),_c('p',{staticClass:"mt-1 text-sm italic text-red-500"},[_vm._v("\n                                        "+_vm._s(errors[0])+"\n                                    ")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"my-4"},[_c('p',{staticClass:"font-bold my-2"},[_vm._v("\n                                    Ghi chú\n                                    >\n                                ")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.shipmentDetails.userNote),expression:"shipmentDetails.userNote"}],staticClass:"w-full border border-gray-200 focus:outline-none p-2 rounded-md",attrs:{"placeholder":"Nhập ghi chú (nếu có)...","rows":"4","cols":"50"},domProps:{"value":(_vm.shipmentDetails.userNote)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.shipmentDetails, "userNote", $event.target.value)}}})])])])],1)],2),_vm._ssrNode(" <div class=\"w-full lg:w-[30%] mt-8 lg:mt-0\"><div class=\"h-max\"><h2 class=\"text-[16px] p-4 bg-gray-200 font-bold\">\n                        Sản phẩm\n                    </h2> <div class=\"overflow-y-scroll\" style=\"height: 210px\">"+(_vm._ssrList((_vm.cart),function(item){return ("<div class=\"flex items-center justify-around p-4 border-t\"><div class=\"w-24\"><img"+(_vm._ssrAttr("src",item.product_images.length
                                            ? item.product_images[0]
                                                  .imageUrl
                                            : ''))+(_vm._ssrAttr("alt",item.name))+" class=\"w-full\"></div> <div><p>"+_vm._ssrEscape(_vm._s(item.name))+"</p> <span>"+_vm._ssrEscape("Số lượng: "+_vm._s(item.quantity))+"</span></div> <div><span>"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(item.price)))+"</span></div></div>")}))+"</div> <div class=\"flex items-center justify-between p-4 border-t\"><p class=\"font-bold\">Tạm tính:</p> <span>"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(_vm.total)))+"</span></div> "+((_vm.discount)?("<div class=\"flex items-center justify-between p-4 border-t\"><p class=\"font-bold\">Giảm giá:</p> <span>"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(_vm.discount)))+"</span></div>"):"<!---->")+" <div class=\"flex items-center justify-between p-4 border-t\"><p class=\"text-[16px] text-red-500 font-bold\">\n                            Tổng tiền:\n                        </p> "+((!_vm.newTotal)?("<span class=\"text-[16px] text-red-500 font-bold\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm._f("toVndCurrency")(_vm.total))+"\n                        ")+"</span>"):("<span class=\"text-[16px] text-red-500 font-bold\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm._f("toVndCurrency")(_vm.newTotal))+"\n                        ")+"</span>"))+"</div> <div class=\"flex items-center justify-between p-4 border-t\"><input type=\"text\" placeholder=\"Mã giảm giá...\""+(_vm._ssrAttr("value",(_vm.code)))+(_vm._ssrClass("flex-1 p-2 rounded-full focus:outline-none border border-gray-300",{
                                'border-red-600': _vm.codeError
                            }))+"> "+((_vm.codeError)?("<p class=\"mt-1 text-sm italic text-red-500\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.codeError)+"\n                        ")+"</p>"):"<!---->")+" <button type=\"submit\" class=\"mx-4 lg:w-24 min-w-max p-2 rounded-full bg-black text-white hover:bg-red-500 transition-all duration-500\">\n                            Cập nhật\n                        </button></div> <div class=\"flex flex-col p-4 border-t\"><p class=\"font-bold\">Phương thức thanh toán:</p> <ul class=\"mt-2\"><li><input type=\"radio\" name=\"method\" checked=\"checked\"> <label>Thanh toán khi nhận hàng</label></li> <li><input type=\"radio\" name=\"method\"> <label>MoMo</label></li></ul></div> <div class=\"p-4\"><button class=\"w-full rounded-md p-4 bg-black text-white hover:bg-red-500 transition-all duration-500 uppercase\">\n                            Xác nhận đơn hàng\n                        </button></div></div></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=43fc9439&

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.js
var vee_validate = __webpack_require__(8);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({
  middleware({
    store,
    redirect
  }) {
    if (!store.state.cart.cart.length) {
      return redirect('/');
    }
  },

  components: {
    ValidationProvider: vee_validate["ValidationProvider"],
    ValidationObserver: vee_validate["ValidationObserver"]
  },

  data() {
    return {
      shipmentDetails: {
        name: '',
        phone: '',
        email: '',
        address: '',
        userNote: ''
      },
      customErrorMessages: {
        name: {
          required: 'Hãy nhập tên của bạn!'
        },
        phone: {
          required: 'Hãy nhập số điện thoại của bạn!'
        },
        address: {
          required: 'Hãy nhập địa chỉ của bạn!'
        }
      },
      code: '',
      codeError: '',
      coupon: '',
      discount: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      cart: state => state.cart.cart
    }),

    total() {
      return this.cart.reduce((acc, curr) => +curr.price * +curr.quantity + +acc, 0);
    },

    newTotal() {
      if (this.coupon.type === 'fixed') {
        this.discount = this.coupon.value;
        return this.total - this.coupon.value;
      }

      if (this.coupon.type === 'percent') {
        let discount = this.total * (this.coupon.value / 100);
        this.discount = discount;
        return this.total - discount;
      }
    }

  },
  methods: {
    async checkCoupon() {
      try {
        const response = await this.$axios.post('http://localhost:8000/api/coupon', {
          code: this.code
        });
        this.coupon = response.data;
      } catch (error) {
        this.codeError = error.response.data.message;
      }
    },

    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        } else {
          this.processPayment();
        }
      });
    },

    async processPayment() {
      let payload = { ...this.shipmentDetails,
        cart: this.cart
      };

      try {
        await this.$axios.post('http://localhost:8000/api/order', payload);
        this.$store.dispatch('cart/clearCart');
        this.$router.push({
          name: 'thanks'
        });
        this.$refs.form.reset();
        this.shipmentDetails = {
          name: '',
          phone: '',
          email: '',
          address: '',
          userNote: ''
        };
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/checkout.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "45f7f0fe"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=checkout.vue.js.map