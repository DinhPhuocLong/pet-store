(window.webpackJsonp=window.webpackJsonp||[]).push([[27,8],{462:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("78564392",content,!0,{sourceMap:!1})},468:function(t,e,r){"use strict";r.r(e);var n={props:["commentData"],methods:{onSubmit:function(t){this.$emit("formSubmit",this.commentData)}}},o=r(3),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"flex flex-col md:flex-row md:gap-x-4 w-full"},[r("div",{staticClass:"order-2 md:w-1/2"},[r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.commentData.name,expression:"commentData.name"}],staticClass:"block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden",attrs:{type:"text",placeholder:"Họ và tên...*"},domProps:{value:t.commentData.name},on:{input:function(e){e.target.composing||t.$set(t.commentData,"name",e.target.value)}}})]),t._v(" "),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.commentData.email,expression:"commentData.email"}],staticClass:"block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden",attrs:{type:"text",placeholder:"Email...*"},domProps:{value:t.commentData.email},on:{input:function(e){e.target.composing||t.$set(t.commentData,"email",e.target.value)}}})]),t._v(" "),r("button",{staticClass:"text-xs uppercase focus:outline-none w-full border border-solid border-black hover:border-petshop-orange hover:bg-petshop-orange hover:text-white font-bold py-6 rounded-md overflow-hidden",on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("\n            Gửi\n        ")])]),t._v(" "),r("p",{staticClass:"w-full mb-6 order-1 md:order-2 md:w-1/2"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentData.comment,expression:"commentData.comment"}],staticClass:"w-full p-4 border border-solid border-gray-300 focus:outline-none rounded-md overflow-hidden",attrs:{id:"comment",name:"comment",placeholder:"Đánh giá của bạn*",cols:"45",rows:"9"},domProps:{value:t.commentData.comment},on:{input:function(e){e.target.composing||t.$set(t.commentData,"comment",e.target.value)}}})])])}),[],!1,null,null,null);e.default=component.exports},474:function(t,e,r){"use strict";r(462)},475:function(t,e,r){var n=r(22)((function(i){return i[1]}));n.push([t.i,'.onsale[data-v-43225aec]{\n  position:relative;\n  width:56px;\n  height:26px;\n  border:2px solid #ff4545;\n  border-right:0;\n  color:#ff4545\n}\n.onsale[data-v-43225aec]:before{\n  content:"";\n  position:absolute;\n  width:26px;\n  height:26px;\n  right:-20px;\n  border:13px solid #ff4545;\n  border-right-color:transparent;\n  top:-2px;\n  display:inline-block!important;\n  z-index:-2\n}\n.onsale[data-v-43225aec]:after{\n  content:"";\n  position:absolute;\n  width:22px;\n  height:22px;\n  right:-15px;\n  border:11px solid #fff;\n  border-right-color:transparent;\n  top:0;\n  z-index:-1\n}',""]),n.locals={},t.exports=n},482:function(t,e,r){"use strict";r.r(e);r(24),r(17),r(16),r(43),r(18),r(44);var n=r(12),o=r(5),l=(r(31),r(30),r(74));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"shop",components:{ValidationProvider:l.b,ValidationObserver:l.a},data:function(){return{rating:0,commentData:{name:"",email:"",comment:""}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.redirect,n=t.params,o=t.$services,e.prev=1,l=n.slug,e.next=5,o.Product.show(l);case 5:return c=e.sent,e.abrupt("return",{product:c.data});case 9:e.prev=9,e.t0=e.catch(1),r("/404");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},computed:{calculateSalePrice:function(){return this.product.price-this.product.salePrice/100*this.product.price}},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=d(d({},e.commentData),{},{product_id:e.product.id,rate:e.rating}),t.prev=1,t.next=4,e.$services.ProductReview.store(r);case 4:e.commentData.name="",e.commentData.email="",e.commentData.comment="",e.rating=0,e.$nuxt.refresh(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}},v=(r(474),r(3)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"w-full mt-12"},[r("div",{staticClass:"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto lg:flex gap-x-8 lg:border-b border-solid border-gray-300 pb-20"},[r("div",{staticClass:"lg:w-1/2"},[r("div",{staticClass:"border border-solid border-gray-300 rounded-lg overflow-hidden relative py-12"},[r("img",{staticClass:"p-2 mx-auto",attrs:{src:t.product.product_images.length?t.product.product_images[0].imageUrl:"",alt:""}}),t._v(" "),r("div",{staticClass:"absolute top-4 right-4 border border-solid border-gray-300 rounded-full p-1"},[r("svg",{staticClass:"icon icon-tabler icon-tabler-arrows-diagonal",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),r("polyline",{attrs:{points:"16 4 20 4 20 8"}}),t._v(" "),r("line",{attrs:{x1:"14",y1:"10",x2:"20",y2:"4"}}),t._v(" "),r("polyline",{attrs:{points:"8 20 4 20 4 16"}}),t._v(" "),r("line",{attrs:{x1:"4",y1:"20",x2:"10",y2:"14"}})])])]),t._v(" "),r("div",{staticClass:"grid grid-cols-4 gap-x-4 mt-4"},t._l(t.product.product_images,(function(image,t){return r("div",{key:t,staticClass:"border border-solid border-black rounded-lg overflow-hidden"},[r("img",{attrs:{src:image.imageUrl,alt:image.name}})])})),0)]),t._v(" "),r("div",{staticClass:"lg:w-1/2"},[r("h1",{staticClass:"text-3xl font-semibold break-words leading-12"},[t._v("\n                    "+t._s(t.product.name)+"\n                ")]),t._v(" "),r("div",{staticClass:"flex gap-4 mt-4"},[+t.product.salePrice?r("span",{staticClass:"line-through text-gray-400 text-lg font-semibold"},[t._v(t._s(t._f("toVndCurrency")(t.product.price)))]):t._e(),t._v(" "),r("span",{staticClass:"text-xl font-semibold"},[t._v(t._s(t._f("toVndCurrency")(t.calculateSalePrice)))]),t._v(" "),+t.product.salePrice?r("div",{staticClass:"onsale text-center"},[r("span",{staticClass:"pl-4 text-sm font-semibold"},[t._v("\n                            "+t._s(t._f("percentage")(t.product.salePrice))+"\n                        ")])]):t._e()]),t._v(" "),r("div",{},[r("p",{staticClass:"text-base text-gray-500",domProps:{innerHTML:t._s(t.product.description)}}),t._v(" "),r("div",{staticClass:"border-b border-solid border-gray-300 pb-8"},[r("form",{staticClass:"flex flex-wrap [480]:flex-nowrap w-full mt-4 items-center gap-x-2"},[r("div",{staticClass:"flex gap-x-2 w-full",staticStyle:{flex:"1 0 calc(50% + 65px)"}},[r("div",{staticClass:"w-32 h-12 flex items-center border-2 border-gray-400 rounded-full"},[r("button",{staticClass:"focus:outline-none ml-3"},[r("svg",{staticClass:"icon icon-tabler icon-tabler-plus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),r("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),t._v(" "),r("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])]),t._v(" "),r("input",{staticClass:"w-full text-center focus:outline-none",attrs:{type:"number",value:"1",placeholder:"1"}}),t._v(" "),r("button",{staticClass:"focus:outline-none mr-3"},[r("svg",{staticClass:"icon icon-tabler icon-tabler-minus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),r("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])])]),t._v(" "),r("button",{staticClass:"flex-grow h-12 bg-gray-800 text-white rounded-full"},[t._v("\n                                    Thêm vào giỏ\n                                ")])]),t._v(" "),r("button",{staticClass:"h-12 text-white nav-color rounded-full mt-4 [480]:mt-0",staticStyle:{flex:"1 0 calc(50% - 65px)"}},[t._v("\n                                Mua ngay\n                            ")])]),t._v(" "),r("div",{staticClass:"md:flex gap-x-10"},[r("button",{staticClass:"flex items-center mt-6 gap-x-2"},[r("span",{staticClass:"flex items-center justify-center w-12 h-12 text-center vertical border border-solid border-gray-400 rounded-full"},[r("svg",{staticClass:"icon icon-tabler icon-tabler-heart",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"rgb(34, 34, 34)",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"}})])]),t._v("\n                                Yêu thích\n                            ")]),t._v(" "),r("button",{staticClass:"flex items-center mt-6 gap-x-2"},[r("span",{staticClass:"flex items-center justify-center w-12 h-12 text-center vertical border border-solid border-gray-400 rounded-full"},[r("svg",{staticClass:"icon icon-tabler icon-tabler-switch-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"rgb(34, 34, 34)",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397"}}),t._v(" "),r("path",{attrs:{d:"M18 4l3 3l-3 3"}}),t._v(" "),r("path",{attrs:{d:"M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397"}}),t._v(" "),r("path",{attrs:{d:"M18 20l3 -3l-3 -3"}})])]),t._v("\n                                So sánh\n                            ")])])]),t._v(" "),t._m(0)])])]),t._v(" "),r("div",{staticClass:"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto border-b border-solid border-gray-200 mt-4 pb-10"},[r("h2",{staticClass:"text-lg font-bold"},[t._v("\n                "+t._s("Đánh giá ("+t.product.reviews.length+")")+"\n            ")]),t._v(" "),t._l(t.product.reviews,(function(e){return r("div",{key:e.id,staticClass:"mt-10 border-b pb-8"},[t._m(1,!0),t._v(" "),r("div",{staticClass:"overflow-hidden leading-3"},[r("div",{staticClass:"flex justify-between"},[r("p",{staticClass:"uppercase font-bold text-[12px] text-black"},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),r("client-only",[r("star-rating",{attrs:{rating:e.rate,"read-only":!0,"star-size":20,"show-rating":!1}})],1)],1),t._v(" "),r("a",{staticClass:"font-normal text-[12px]",attrs:{href:"#"}},[t._v("June 15, 2018")])]),t._v(" "),r("div",{staticClass:"pt-4 lg:pl-20 clear-both lg:clear-none"},[r("p",{staticClass:"uppercase text-[12px] text-black"},[t._v("\n                        "+t._s(e.comment)+"\n                    ")])])])})),t._v(" "),t.product.reviews.length?t._e():r("div",{staticClass:"mt-10",attrs:{id:"comments"}},[r("h2",{staticClass:"text-2xl font-bold mb-10"},[t._v("Đánh giá")]),t._v(" "),r("p",{staticClass:"text-gray-500"},[t._v("Hiện chưa có đánh giá nào.")])]),t._v(" "),r("div",{staticClass:"mt-10",attrs:{id:"reviews-form"}},[t.product.reviews.length?t._e():r("div",{staticClass:"md:w-2/5 xl:w-2/5 border-2 border-solid border-black rounded-lg"},[r("span",{staticClass:"flex gap-x-2 items-center p-4"},[r("svg",{staticClass:"icon icon-tabler icon-tabler-pencil",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"}}),t._v(" "),r("line",{attrs:{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"}})]),t._v("\n                        Hãy là người đầu tiên đánh giá sản phẩm này!\n                    ")])]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"flex items-center gap-x-3 my-4",attrs:{id:"rating"}},[r("span",[t._v("Đánh giá sao của bạn:")]),t._v(" "),r("client-only",[r("star-rating",{attrs:{"star-size":20,"show-rating":!1,rating:t.rating},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1)],1),t._v(" "),r("CommentForm",{attrs:{commentData:t.commentData},on:{formSubmit:t.submit}})],1)],2)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4 flex flex-col gap-y-4 border-b border-solid border-gray-300 pb-20 lg:border-0"},[r("span",{staticClass:"text-gray-500 text-md"},[t._v("\n                            Tags:\n                            "),r("a",{staticClass:"text-black",attrs:{href:"#"}},[t._v("\n                                Đồ ăn\n                            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"float-left mr-4"},[e("img",{staticClass:"w-12 lg:w-16 rounded-full",attrs:{src:"https://secure.gravatar.com/avatar/53444f91e698c0c7caa2dbc3bdbf93fc?s=70&d=mm&r=g",alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-gray-500 mt-10"},[r("span",{},[t._v("Email của bạn sẽ không công khai!")]),t._v("\n                    Trường bắt buộc sẽ được đánh dấu\n                    "),r("span",{staticClass:"text-red-500"},[t._v("*")])])}],!1,null,"43225aec",null);e.default=component.exports;installComponents(component,{CommentForm:r(468).default})}}]);