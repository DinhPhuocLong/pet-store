(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4,6],{418:function(t,e,n){var content=n(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("328121f9",content,!0,{sourceMap:!1})},419:function(t,e,n){"use strict";n(418)},420:function(t,e,n){var r=n(49)((function(i){return i[1]}));r.push([t.i,".alert[data-v-407226a2]{\n  -webkit-animation-name:fadeInDown-data-v-407226a2;\n          animation-name:fadeInDown-data-v-407226a2;\n  -webkit-animation-duration:.3s;\n          animation-duration:.3s;\n  -webkit-animation-timing-function:ease-in-out;\n          animation-timing-function:ease-in-out;\n  -webkit-animation-fill-mode:forwards;\n          animation-fill-mode:forwards\n}\n@-webkit-keyframes fadeInDown-data-v-407226a2{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@keyframes fadeInDown-data-v-407226a2{\n0%{\n    opacity:0;\n    transform:translate3d(-50%,-100%,0)\n}\nto{\n    opacity:1;\n    transform:translate3d(-50%,0,0)\n}\n}",""]),r.locals={},t.exports=r},421:function(t,e,n){"use strict";n.r(e);var r={props:["message","alertType","visible"],data:function(){return{successSvg:'<svg\n                width="1.8em"\n                height="1.8em"\n                viewBox="0 0 16 16"\n                class="bi bi-check"\n                fill="currentColor"\n                xmlns="http://www.w3.org/2000/svg"\n            >\n                <path\n                    fill-rule="evenodd"\n                    d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"\n                />\n            </svg>',errorSvg:'<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>\n                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>\n                        </svg>',alertIcon:""}},computed:{type:function(){var t;switch(this.alertType){case"danger":t="bg-red-500 border-red-700 text-red-500 ",this.alertIcon=this.errorSvg;break;case"success":t="bg-green-500 border-green-700 text-green-500 ",this.alertIcon=this.successSvg}return t}}},o=(n(419),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":"alert"}},[t.visible?n("div",{staticClass:"w-96 flex py-2 px-3 border-l-4 shadow-md mb-2 fixed top-8 left-2/4 transform -translate-x-2/4",class:t.type,staticStyle:{"z-index":"9999999"}},[n("div",{staticClass:"rounded-full bg-white mr-3",domProps:{innerHTML:t._s(t.alertIcon)}}),t._v(" "),n("div",{staticClass:"text-white max-w-xs "},[t._v("\n            "+t._s(t.message)+"\n        ")])]):t._e()])}),[],!1,null,"407226a2",null);e.default=component.exports},422:function(t,e,n){"use strict";n.r(e);var r={props:{visible:{type:Boolean,require:!0,default:!1}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.visible?n("div",{staticClass:"fixed z-50 inset-0 overflow-y-auto",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[n("div",{staticClass:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},[n("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[t._v("​")]),t._v(" "),n("div",{staticClass:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},[n("div",{staticClass:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},[n("div",{staticClass:"sm:flex sm:items-start"},[n("div",{staticClass:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[n("svg",{staticClass:"h-6 w-6 text-red-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})])]),t._v(" "),n("div",{staticClass:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[n("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900",attrs:{id:"modal-title"}},[t._t("modal-title",(function(){return[t._v("default title")]}))],2),t._v(" "),n("div",{staticClass:"mt-2"},[n("p",{staticClass:"text-sm text-gray-500"},[t._t("modal-message",(function(){return[t._v("default message")]}))],2)])])])]),t._v(" "),n("div",{staticClass:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},[n("button",{staticClass:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",attrs:{type:"button"},on:{click:function(e){return t.onConfirm()}}},[t._v("\n                        Xoá\n                    ")]),t._v(" "),n("button",{staticClass:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",attrs:{type:"button"},on:{click:function(e){return t.onCancel()}}},[t._v("\n                        Huỷ\n                    ")])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},440:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(63),n(33),n(421)),l=n(422),d=n(424),c={layout:"default",components:{StarRating:n.n(d).a,Alert:o.default,Modal:l.default},data:function(){return{alert:{type:"",message:"",isVisible:!1},isShowModal:!1,deleteId:"",reviews:[],columns:[{label:"Name",field:"name"},{label:"Email",field:"email"},{label:"Nội Dung",field:"comment"},{label:"Rating",field:"rate"},{label:"Tình trạng",field:"hidden"},{label:"Ngày Tạo",field:"created_at",formatFn:this.$options.filters.formatDate},{label:"Hành Động",field:"actions"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$services,o=t.redirect,e.prev=1,l=n.slug,e.next=5,r.Product.show(l);case 5:return d=e.sent,e.abrupt("return",{reviews:d.data});case 9:e.prev=9,e.t0=e.catch(1),o("/");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},methods:{alertTrigger:function(t,e,n){var r=this;this.alert.isVisible=!0,this.alert.message=e,this.alert.type=t,setTimeout((function(t){r.alert.isVisible=!1}),n)},showConfirmModal:function(t){this.isShowModal=!0,this.deleteId=t},hideConfirmModal:function(){this.isShowModal=!1},destroy:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$services.ProductReview.delete(t.deleteId);case 3:t.$nuxt.refresh(),t.isShowModal=!1,t.alertTrigger("success","Xoá thành công bình luận",2e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.alertTrigger("danger","Đã xảy ra lỗi khi xoá bình luận!",2e3);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},toggleReview:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e){r.next=6;break}return r.next=4,n.$services.ProductReview.update(t,{hidden:1});case 4:r.next=8;break;case 6:return r.next=8,n.$services.ProductReview.update(t,{hidden:0});case 8:n.$nuxt.refresh(),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},status:function(t){return t?"Ẩn":"Hiện"}}},m=n(18),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"mx-4"},[t._v(t._s(t.reviews.name))]),t._v(" "),n("div",{staticClass:"inline-block w-full border border-solid border-gray-200 overflow-x-auto mt-4"},[n("div",[n("vue-good-table",{attrs:{columns:t.columns,rows:t.reviews.reviews,"fixed-header":!0,styleClass:"vgt-table bordered","pagination-options":{enabled:!0,rowsPerPageLabel:"Đánh giá trên trang",nextLabel:"Trang kế",prevLabel:"Trang trước",ofLabel:"trên"},"search-options":{enabled:!0,trigger:"key-up",skipDiacritics:!0,placeholder:"Tìm kiếm..."}},scopedSlots:t._u([{key:"table-row",fn:function(e){return["hidden"==e.column.field?n("span",{staticClass:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"},[n("span",{staticClass:"absolute inset-0 opacity-50 rounded-full",class:[e.row.hidden?"bg-red-300":"bg-green-300"],attrs:{"aria-hidden":""}}),t._v(" "),n("span",{staticClass:"relative"},[t._v("\n                            "+t._s(t.status(e.row.hidden))+"\n                        ")])]):"actions"==e.column.field?n("span",[n("div",{staticClass:"flex items-center justify-center gap-x-2"},[n("button",[e.row.hidden?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},on:{click:function(n){return t.toggleReview(e.row.id,e.row.hidden)}}},[n("path",{attrs:{d:"M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"}})]):n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},on:{click:function(n){return t.toggleReview(e.row.id,e.row.hidden)}}},[n("path",{attrs:{d:"M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"}})])]),t._v(" "),n("button",{on:{click:function(n){return n.preventDefault(),t.showConfirmModal(e.row.id)}}},[n("svg",{staticClass:"icon icon-tabler icon-tabler-trash",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("line",{attrs:{x1:"4",y1:"7",x2:"20",y2:"7"}}),t._v(" "),n("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),t._v(" "),n("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}}),t._v(" "),n("path",{attrs:{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}}),t._v(" "),n("path",{attrs:{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}})])])])]):"rate"==e.column.field?n("span",[n("star-rating",{attrs:{rating:e.row.rate/10,"read-only":!0,"star-size":20,"show-rating":!1,increment:.01}})],1):n("span",[t._v("\n                        "+t._s(e.formattedRow[e.column.field])+"\n                    ")])]}}])})],1),t._v(" "),n("Alert",{attrs:{visible:t.alert.isVisible,alertType:t.alert.type,message:t.alert.message}}),t._v(" "),n("Modal",{attrs:{visible:t.isShowModal},on:{confirm:function(e){return t.destroy(t.deleteId)},cancel:function(e){return t.hideConfirmModal()}}},[n("div",{attrs:{slot:"modal-title"},slot:"modal-title"},[t._v("\n                Xoá bình luận\n            ")]),t._v(" "),n("div",{attrs:{slot:"modal-message"},slot:"modal-message"},[t._v("\n                Bạn có chắc là muốn xoá bình luận này chứ? Một khi sản phẩm\n                này thì sẽ không thể hoàn tác!\n            ")])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);