exports.ids = [19];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=template&id=2a0477b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-12 mb-10"},[_vm._ssrNode("<div class=\"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto\">","</div>",[_vm._ssrNode("<div class=\"my-6 text-center\"><h1 class=\"text-[25px] lg:text-[32px] font-bold\">Giỏ hàng</h1></div> "),_vm._ssrNode("<div class=\"flex flex-wrap\">","</div>",[_vm._ssrNode("<div class=\"w-full lg:w-[70%] lg:pr-10\">","</div>",[_vm._ssrNode("<form action=\"#\">","</form>",[_vm._ssrNode("<table class=\"w-full\">","</table>",[_vm._ssrNode("<thead class=\"border border-gray-100\"><tr><th class=\"flex item-center p-4\">\n                                    Sản phẩm\n                                </th> <th class=\"p-4\">Giá</th> <th class=\"p-4\">Số lượng</th> <th class=\"p-4\">Thành tiền</th> <th class=\"w-20 p-4\"> </th></tr></thead> "),_vm._ssrNode("<tbody class=\"border border-gray-100\">","</tbody>",[_vm._ssrNode((_vm._ssrList((_vm.cart),function(item){return ("<tr class=\"text-center p-4\"><td class=\"flex items-center\"><a href=\"#\"><img"+(_vm._ssrAttr("src",item.product_images.length
                                                    ? item.product_images[0]
                                                          .imageUrl
                                                    : ''))+" class=\"w-24\"></a> <div class=\"inline-block align-middle ml-6\"><a href=\"#\" class=\"text-[13px] hover:text-red-500 transition-all duration-500\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.name)+"\n                                        ")+"</a></div></td> <td class=\"align-middle px-4\"><span>"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(item.price)))+"</span></td> <td class=\"align-middle px-4\"><div class=\"w-24 h-10 flex items-center border-2 border-gray-200 rounded-full\"><button class=\"focus:outline-none ml-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"red\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-minus\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></button> <input type=\"number\" placeholder=\"1\""+(_vm._ssrAttr("value",(item.quantity)))+" class=\"w-full text-center focus:outline-none\"> <button class=\"focus:outline-none mr-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"red\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-plus\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line> <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></button></div></td> <td class=\"align-middle px-4\"><span class=\"text-red-500 font-bold\">"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")((item.quantity * item.price))))+"</span></td> <td class=\"align-middle px-4\"><button><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\"><path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 \n                                            16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\" fill=\"red\"></path></svg></button></td></tr>")}))+" "+((!_vm.cart.length)?("<tr><td><p class=\"p-4 text-center w-full\">\n                                        Bạn chưa có sản phẩm nào trong giỏ\n                                        hàng\n                                    </p></td></tr>"):"<!---->")+" "),_vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td colspan=\"6\" class=\"border border-gray-100 p-4\">","</td>",[_vm._ssrNode("<div class=\"flex flex-wrap justify-between items-center\">","</div>",[_vm._ssrNode("<h2>","</h2>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n                                                Tiếp tục mua sắm\n                                            ")])],1)])])])],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full lg:w-[30%] mt-8 lg:mt-0\">","</div>",[_vm._ssrNode("<div class=\"bg-gray-100 shadow-md h-max\">","</div>",[_vm._ssrNode("<h2 class=\"text-[16px] p-4 bg-gray-200 font-bold\">\n                        Thông tin đơn hàng\n                    </h2> <div class=\"flex items-center justify-between p-4 border-t\"><p class=\"text-[16px] text-red-500 font-bold\">\n                            Tổng tiền:\n                        </p> <span class=\"text-[16px] text-red-500 font-bold\">"+_vm._ssrEscape(_vm._s(_vm._f("toVndCurrency")(_vm.total)))+"</span></div> <div class=\"flex items-center justify-between p-4 border-t\"><p>Bạn có thể nhập mã giảm giá ở trang thanh toán</p></div> "),_vm._ssrNode("<div class=\"p-4\">","</div>",[_c('nuxt-link',{staticClass:"w-full text-center block rounded-md p-4 bg-black text-white hover:bg-red-500 transition-all duration-500",attrs:{"to":{ name: 'checkout' }}},[_vm._v("\n                            Thanh toán\n                        ")])],1)],2)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/cart.vue?vue&type=template&id=2a0477b3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  computed: {
    cart() {
      let data = JSON.parse(JSON.stringify(this.$store.state.cart.cart));
      return data;
    },

    total() {
      return this.cart.reduce((acc, curr) => +curr.price * +curr.quantity + +acc, 0);
    }

  },
  methods: {
    updateCart(cartItem) {
      const id = cartItem.id;
      const quantity = cartItem.quantity;
      this.$store.dispatch('cart/updateCart', {
        id,
        quantity
      });
    },

    deleteCart(itemId) {
      this.$store.dispatch('cart/deleteCart', itemId);
    }

  }
});
// CONCATENATED MODULE: ./pages/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c7d89c50"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart.vue.js.map