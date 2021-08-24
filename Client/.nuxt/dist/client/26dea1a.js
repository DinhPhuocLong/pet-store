(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{484:function(t,e,r){"use strict";r.r(e);r(24),r(17),r(16),r(43),r(18),r(44);var n=r(5),o=r(12),l=(r(32),r(73)),c=r(40);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={middleware:function(t){var e=t.store,r=t.redirect;if(!e.state.cart.cart.length)return r("/")},components:{ValidationProvider:l.b,ValidationObserver:l.a},data:function(){return{shipmentDetails:{name:"",phone:"",email:"",address:"",userNote:""},customErrorMessages:{name:{required:"Hãy nhập tên của bạn!"},phone:{required:"Hãy nhập số điện thoại của bạn!"},address:{required:"Hãy nhập địa chỉ của bạn!"}},code:"",codeError:"",coupon:"",discount:""}},computed:m(m({},Object(c.b)({cart:function(t){return t.cart.cart}})),{},{total:function(){return this.cart.reduce((function(t,e){return+e.price*+e.quantity+ +t}),0)},newTotal:function(){if("fixed"===this.coupon.type)return this.discount=this.coupon.value,this.total-this.coupon.value;if("percent"===this.coupon.type){var t=this.total*(this.coupon.value/100);return this.discount=t,this.total-t}}}),methods:{checkCoupon:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("http://localhost:8000/api/coupon",{code:t.code});case 3:r=e.sent,t.coupon=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.codeError=e.t0.response.data.message;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},onSubmit:function(){var t=this;this.$refs.form.validate().then((function(e){e&&t.processPayment()}))},processPayment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m(m({},t.shipmentDetails),{},{cart:t.cart}),e.prev=1,e.next=4,t.$axios.post("http://localhost:8000/api/order",r);case 4:t.$store.dispatch("cart/clearCart"),t.$router.push({name:"thanks"}),t.$refs.form.reset(),t.shipmentDetails={name:"",phone:"",email:"",address:"",userNote:""},e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}}},h=r(3),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-12"},[r("div",{staticClass:"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto"},[t._m(0),t._v(" "),r("div",{staticClass:"flex flex-wrap"},[r("div",{staticClass:"w-full lg:w-[70%] lg:pr-10"},[r("h2",{staticClass:"text-[20px] font-bold"},[t._v("Thông tin giao hàng")]),t._v(" "),r("div",[r("ValidationObserver",{ref:"form"},[r("form",[r("div",{staticClass:"my-4"},[r("p",{staticClass:"font-bold my-2"},[t._v("\n                                    Họ và tên"),r("b",{staticClass:"text-red-500 ml-1"})]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required","custom-messages":t.customErrorMessages.name},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shipmentDetails.name,expression:"shipmentDetails.name"}],staticClass:"w-full border-b-2 border-gray-200 focus:outline-none py-2",class:{"border-red-600":n[0]},attrs:{placeholder:"Họ và tên...",type:"text"},domProps:{value:t.shipmentDetails.name},on:{input:function(e){e.target.composing||t.$set(t.shipmentDetails,"name",e.target.value)}}}),t._v(" "),r("p",{staticClass:"mt-1 text-sm italic text-red-500"},[t._v("\n                                        "+t._s(n[0])+"\n                                    ")])]}}])})],1),t._v(" "),r("div",{staticClass:"my-4"},[r("p",{staticClass:"font-bold my-2"},[t._v("\n                                    Điện thoại"),r("b",{staticClass:"text-red-500 ml-1"},[t._v("*")])]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|vnPhone","custom-messages":t.customErrorMessages.phone},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shipmentDetails.phone,expression:"shipmentDetails.phone"}],staticClass:"w-full border-b-2 border-gray-200 focus:outline-none py-2",class:{"border-red-600":n[0]},attrs:{placeholder:"Điện thoại...",type:"text"},domProps:{value:t.shipmentDetails.phone},on:{input:function(e){e.target.composing||t.$set(t.shipmentDetails,"phone",e.target.value)}}}),t._v(" "),r("p",{staticClass:"mt-1 text-sm italic text-red-500"},[t._v("\n                                        "+t._s(n[0])+"\n                                    ")])]}}])})],1),t._v(" "),r("div",{staticClass:"my-4"},[r("p",{staticClass:"font-bold my-2"},[t._v("\n                                    Email"),r("b",{staticClass:"text-red-500 ml-1"},[t._v("*")])]),t._v(" "),r("ValidationProvider",{attrs:{rules:"isValidateEmail"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shipmentDetails.email,expression:"shipmentDetails.email"}],staticClass:"w-full border-b-2 border-gray-200 focus:outline-none py-2",class:{"border-red-600":n[0]},attrs:{placeholder:"Email...",type:"text"},domProps:{value:t.shipmentDetails.email},on:{input:function(e){e.target.composing||t.$set(t.shipmentDetails,"email",e.target.value)}}}),t._v(" "),r("p",{staticClass:"mt-1 text-sm italic text-red-500"},[t._v("\n                                        "+t._s(n[0])+"\n                                    ")])]}}])})],1),t._v(" "),r("div",{staticClass:"my-4"},[r("p",{staticClass:"font-bold my-2"},[t._v("\n                                    Địa chỉ"),r("b",{staticClass:"text-red-500 ml-1"},[t._v("*")])]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required","custom-messages":t.customErrorMessages.address},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shipmentDetails.address,expression:"shipmentDetails.address"}],staticClass:"w-full border-b-2 border-gray-200 focus:outline-none py-2",class:{"border-red-600":n[0]},attrs:{placeholder:"Địa chỉ nhận hàng...",type:"text"},domProps:{value:t.shipmentDetails.address},on:{input:function(e){e.target.composing||t.$set(t.shipmentDetails,"address",e.target.value)}}}),t._v(" "),r("p",{staticClass:"mt-1 text-sm italic text-red-500"},[t._v("\n                                        "+t._s(n[0])+"\n                                    ")])]}}])})],1),t._v(" "),r("div",{staticClass:"my-4"},[r("p",{staticClass:"font-bold my-2"},[t._v("\n                                    Ghi chú"),r("b",{staticClass:"text-red-500 ml-1"},[t._v("*")])]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.shipmentDetails.userNote,expression:"shipmentDetails.userNote"}],staticClass:"w-full border border-gray-200 focus:outline-none p-2 rounded-md",attrs:{placeholder:"Nhập ghi chú (nếu có)...",rows:"4",cols:"50"},domProps:{value:t.shipmentDetails.userNote},on:{input:function(e){e.target.composing||t.$set(t.shipmentDetails,"userNote",e.target.value)}}})])])])],1)]),t._v(" "),r("div",{staticClass:"w-full lg:w-[30%] mt-8 lg:mt-0"},[r("div",{staticClass:"h-max"},[r("h2",{staticClass:"text-[16px] p-4 bg-gray-200 font-bold"},[t._v("\n                        Sản phẩm\n                    ")]),t._v(" "),r("div",{staticClass:"overflow-y-scroll",staticStyle:{height:"210px"}},t._l(t.cart,(function(e){return r("div",{key:e.id,staticClass:"flex items-center justify-around p-4 border-t"},[r("div",{staticClass:"w-24"},[r("img",{staticClass:"w-full",attrs:{src:e.product_images.length?e.product_images[0].imageUrl:"",alt:e.name}})]),t._v(" "),r("div",[r("p",[t._v(t._s(e.name))]),t._v(" "),r("span",[t._v("Số lượng: "+t._s(e.quantity))])]),t._v(" "),r("div",[r("span",[t._v(t._s(t._f("toVndCurrency")(e.price)))])])])})),0),t._v(" "),r("div",{staticClass:"flex items-center justify-between p-4 border-t"},[r("p",{staticClass:"font-bold"},[t._v("Tạm tính:")]),t._v(" "),r("span",[t._v(t._s(t._f("toVndCurrency")(t.total)))])]),t._v(" "),t.discount?r("div",{staticClass:"flex items-center justify-between p-4 border-t"},[r("p",{staticClass:"font-bold"},[t._v("Giảm giá:")]),t._v(" "),r("span",[t._v(t._s(t._f("toVndCurrency")(t.discount)))])]):t._e(),t._v(" "),r("div",{staticClass:"flex items-center justify-between p-4 border-t"},[r("p",{staticClass:"text-[16px] text-red-500 font-bold"},[t._v("\n                            Tổng tiền:\n                        ")]),t._v(" "),t.newTotal?r("span",{staticClass:"text-[16px] text-red-500 font-bold"},[t._v("\n                            "+t._s(t._f("toVndCurrency")(t.newTotal))+"\n                        ")]):r("span",{staticClass:"text-[16px] text-red-500 font-bold"},[t._v("\n                            "+t._s(t._f("toVndCurrency")(t.total))+"\n                        ")])]),t._v(" "),r("div",{staticClass:"flex items-center justify-between p-4 border-t"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"flex-1 p-2 rounded-full focus:outline-none border border-gray-300",class:{"border-red-600":t.codeError},attrs:{type:"text",placeholder:"Mã giảm giá..."},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),t.codeError?r("p",{staticClass:"mt-1 text-sm italic text-red-500"},[t._v("\n                            "+t._s(t.codeError)+"\n                        ")]):t._e(),t._v(" "),r("button",{staticClass:"mx-4 lg:w-24 min-w-max p-2 rounded-full bg-black text-white hover:bg-red-500 transition-all duration-500",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.checkCoupon()}}},[t._v("\n                            Cập nhật\n                        ")])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"p-4"},[r("button",{staticClass:"w-full rounded-md p-4 bg-black text-white hover:bg-red-500 transition-all duration-500 uppercase",on:{click:function(e){return e.preventDefault(),t.onSubmit()}}},[t._v("\n                            Xác nhận đơn hàng\n                        ")])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-6 text-center"},[r("h1",{staticClass:"text-[25px] lg:text-[32px] font-bold"},[t._v("\n                Thông tin đơn hàng\n            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col p-4 border-t"},[r("p",{staticClass:"font-bold"},[t._v("Phương thức thanh toán:")]),t._v(" "),r("ul",{staticClass:"mt-2"},[r("li",[r("input",{attrs:{type:"radio",name:"method",checked:""}}),t._v(" "),r("label",[t._v("Thanh toán khi nhận hàng")])]),t._v(" "),r("li",[r("input",{attrs:{type:"radio",name:"method"}}),t._v(" "),r("label",[t._v("MoMo")])])])])}],!1,null,null,null);e.default=component.exports}}]);