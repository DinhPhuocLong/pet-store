(window.webpackJsonp=window.webpackJsonp||[]).push([[30,16],{443:function(e,t,r){var content=r(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("328121f9",content,!0,{sourceMap:!1})},447:function(e,t,r){"use strict";r(443)},448:function(e,t,r){var n=r(22)((function(i){return i[1]}));n.push([e.i,".alert[data-v-407226a2]{\n  -webkit-animation-name:fadeInDown-data-v-407226a2;\n          animation-name:fadeInDown-data-v-407226a2;\n  -webkit-animation-duration:.3s;\n          animation-duration:.3s;\n  -webkit-animation-timing-function:ease-in-out;\n          animation-timing-function:ease-in-out;\n  -webkit-animation-fill-mode:forwards;\n          animation-fill-mode:forwards\n}\n@-webkit-keyframes fadeInDown-data-v-407226a2{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@keyframes fadeInDown-data-v-407226a2{\n0%{\n    opacity:0;\n    transform:translate3d(-50%,-100%,0)\n}\nto{\n    opacity:1;\n    transform:translate3d(-50%,0,0)\n}\n}",""]),n.locals={},e.exports=n},452:function(e,t,r){"use strict";r.r(t);var n={props:["message","alertType","visible"],data:function(){return{successSvg:'<svg\n                width="1.8em"\n                height="1.8em"\n                viewBox="0 0 16 16"\n                class="bi bi-check"\n                fill="currentColor"\n                xmlns="http://www.w3.org/2000/svg"\n            >\n                <path\n                    fill-rule="evenodd"\n                    d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"\n                />\n            </svg>',errorSvg:'<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>\n                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>\n                        </svg>',alertIcon:""}},computed:{type:function(){var e;switch(this.alertType){case"danger":e="bg-red-500 border-red-700 text-red-500 ",this.alertIcon=this.errorSvg;break;case"success":e="bg-green-500 border-green-700 text-green-500 ",this.alertIcon=this.successSvg}return e}}},o=(r(447),r(3)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{"enter-active-class":"alert"}},[e.visible?r("div",{staticClass:"w-96 flex py-2 px-3 border-l-4 shadow-md mb-2 fixed top-8 left-2/4 transform -translate-x-2/4",class:e.type,staticStyle:{"z-index":"9999999"}},[r("div",{staticClass:"rounded-full bg-white mr-3",domProps:{innerHTML:e._s(e.alertIcon)}}),e._v(" "),r("div",{staticClass:"text-white max-w-xs "},[e._v("\n            "+e._s(e.message)+"\n        ")])]):e._e()])}),[],!1,null,"407226a2",null);t.default=component.exports},489:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(63),r(30),r(74)),l=r(452),d={layout:"default",components:{ValidationProvider:o.b,ValidationObserver:o.a,Alert:l.default},data:function(){return{alert:{isVisible:!1,message:"",type:""},registerCredentials:{name:"",username:"",email:"",password:"",password_confirm:""},customErrorMessages:{username:{required:"Hãy nhập tên người dùng!"},email:{required:"Hãy nhập email của bạn!"},password:{required:"Hãy nhập mật khẩu của bạn!"},password_confirm:{required:"Hãy nhập mật khẩu xác nhận!"}}}},methods:{register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$services.Auth.register(e.registerCredentials);case 3:t.sent,e.registerCredentials={name:"",username:"",email:"",password:"",password_confirm:""},e.$router.push({name:"login"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("lỗi");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},alertTrigger:function(e,t,r){var n=this;this.alert.isVisible=!0,this.alert.type=e,this.alert.message=t,setTimeout((function(e){n.alert.isVisible=!1}),r)},onSubmit:function(){var e=this;this.$refs.form.validate().then((function(t){t&&e.register()}))}}},c=r(3),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full lg:max-w-[1440px] mx-auto px-4 my-10"},[r("div",{staticClass:"w-full p-4 h-auto bg-no-repeat bg-center bg-cover",staticStyle:{"background-image":"url('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cute-cartoon-dog-banner-image_177827.jpg')"}},[r("Alert",{attrs:{visible:e.alert.isVisible,message:e.alert.message,alertType:e.alert.type}}),e._v(" "),r("div",{staticClass:"flex items-center flex-wrap justify-between"},[r("div",{staticClass:"w-full lg:w-1/2 py-10 lg:px-20"},[r("ValidationObserver",{ref:"form",on:{key:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit()},submit:function(t){return t.preventDefault(),e.onSubmit()}}},[r("form",{staticClass:"bg-white shadow-md p-4 lg:p-8 rounded-md"},[r("div",{staticClass:"my-2"},[r("p",{staticClass:"font-bold text-[20px]"},[e._v("Đăng ký")])]),e._v(" "),r("div",{staticClass:"my-2"},[r("ValidationProvider",{attrs:{rules:"required","custom-messages":e.customErrorMessages.username},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.registerCredentials.username,expression:"registerCredentials.username"}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",class:{"border-red-600":n[0]},attrs:{type:"text",placeholder:"Tên đăng nhập..."},domProps:{value:e.registerCredentials.username},on:{input:function(t){t.target.composing||e.$set(e.registerCredentials,"username",t.target.value)}}}),e._v(" "),r("p",{staticClass:"text-xs italic text-red-500"},[e._v("\n                                    "+e._s(n[0])+"\n                                ")])]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required","custom-messages":e.customErrorMessages.email},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.registerCredentials.email,expression:"registerCredentials.email"}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",class:{"border-red-600":n[0]},attrs:{type:"text",placeholder:"Email..."},domProps:{value:e.registerCredentials.email},on:{input:function(t){t.target.composing||e.$set(e.registerCredentials,"email",t.target.value)}}}),e._v(" "),r("p",{staticClass:"text-xs italic text-red-500"},[e._v("\n                                    "+e._s(n[0])+"\n                                ")])]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required","custom-messages":e.customErrorMessages.name},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.registerCredentials.name,expression:"registerCredentials.name"}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",class:{"border-red-600":n[0]},attrs:{type:"text",placeholder:"Họ và tên..."},domProps:{value:e.registerCredentials.name},on:{input:function(t){t.target.composing||e.$set(e.registerCredentials,"name",t.target.value)}}}),e._v(" "),r("p",{staticClass:"text-xs italic text-red-500"},[e._v("\n                                    "+e._s(n[0])+"\n                                ")])]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required","custom-messages":e.customErrorMessages.password},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.registerCredentials.password,expression:"registerCredentials.password"}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",class:{"border-red-600":n[0]},attrs:{type:"password",placeholder:"Mật khẩu..."},domProps:{value:e.registerCredentials.password},on:{input:function(t){t.target.composing||e.$set(e.registerCredentials,"password",t.target.value)}}}),e._v(" "),r("p",{staticClass:"text-xs italic text-red-500"},[e._v("\n                                    "+e._s(n[0])+"\n                                ")])]}}])}),e._v(" "),r("ValidationProvider",{attrs:{rules:"required","custom-messages":e.customErrorMessages.password_confirm},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.registerCredentials.password_confirm,expression:"\n                                        registerCredentials.password_confirm\n                                    "}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",class:{"border-red-600":n[0]},attrs:{type:"password",placeholder:"Xác Nhận Mật khẩu..."},domProps:{value:e.registerCredentials.password_confirm},on:{input:function(t){t.target.composing||e.$set(e.registerCredentials,"password_confirm",t.target.value)}}}),e._v(" "),r("p",{staticClass:"text-xs italic text-red-500"},[e._v("\n                                    "+e._s(n[0])+"\n                                ")])]}}])}),e._v(" "),r("button",{staticClass:"w-full my-2 p-2 bg-red-300 hover:bg-red-500 text-white rounded-md transition-all duration-500"},[e._v("\n                                Đăng ký\n                            ")]),e._v(" "),r("p",{staticClass:"text-center my-4"},[e._v("\n                                Bạn đã có tài khoản?\n                                "),r("br"),e._v(" "),r("nuxt-link",{staticClass:"text-blue-500",attrs:{to:"/dang-nhap"}},[e._v("Đăng nhập ngay")])],1)],1)])])],1),e._v(" "),r("div",{staticClass:"w-full lg:w-1/2"})])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);