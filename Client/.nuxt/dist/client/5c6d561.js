(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{491:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(30),{data:function(){return{password:"",password_confirmation:"",loadingState:!1}},methods:{resetPassword:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query.token,e.prev=1,e.next=4,t.$axios.post("http://157.245.55.243/api/reset-password/"+r,{password:t.password,password_confirmation:t.password_confirmation});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()}}}),l=r(3),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full lg:max-w-[1440px] mx-auto px-4 my-10"},[r("div",{staticClass:"w-full p-4 h-auto bg-no-repeat bg-center bg-cover",staticStyle:{"background-image":"url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-animal-pet-background-material-image_164004.jpg')"}},[r("div",{staticClass:"flex items-center flex-wrap justify-between"},[r("div",{staticClass:"w-full lg:w-1/2"}),t._v(" "),r("div",{staticClass:"w-full lg:w-1/2 py-10 lg:px-20"},[r("form",{staticClass:"bg-white shadow-md p-4 lg:p-8 rounded-md"},[t._m(0),t._v(" "),r("div",{staticClass:"my-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",attrs:{type:"password",placeholder:"Mật khẩu mới..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"w-full my-2 p-2 border border-gray-400 rounded-md",attrs:{type:"password",placeholder:"Xác nhận mật khẩu mới..."},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}}),t._v(" "),r("button",{staticClass:"w-full flex justify-center my-2 p-2 bg-red-300 hover:bg-red-500 text-white rounded-md transition-all duration-500",on:{click:function(e){return e.preventDefault(),t.resetPassword()}}},[t.loadingState?r("svg",{staticClass:"animate-spin h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):r("span",[t._v("\n                                Xác nhận\n                            ")])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-2"},[r("p",{staticClass:"font-bold text-[20px]"},[t._v("\n                            Đổi lại mật khẩu\n                        ")])])}],!1,null,null,null);e.default=component.exports}}]);