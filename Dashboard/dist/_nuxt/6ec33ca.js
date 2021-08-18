(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{418:function(e,t,n){"use strict";n(26),n(19),n(20),n(49),n(50);var r=n(14);n(25),n(30);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={recursiveCategory:function(e,t){var n=[];return function e(r,o){r.forEach((function(r){n.push(l(l({},r),{},{name:o+r.name})),e(r.children_categories||[],o+t)}))}(e,""),n}}},420:function(e,t,n){"use strict";n.r(t);var r=n(4),o=(n(33),n(30),n(9),n(39),n(418)),l=n(94),c={props:["category","title"],components:{ValidationProvider:l.b,ValidationObserver:l.a},data:function(){return{tableAction:-1,newCategory:{name:"",slug:"",parent_id:"",type:"product"},customErrorMessages:{name:{required:"Tên danh mục không được để trống!"},keywords:{required:"Từ khoá không được để trống!"}},columns:[{label:"Tên",field:"name"},{label:"Từ Khoá",field:"age",type:"number"},{label:"Đường Dẫn",field:"slug"},{label:"Người Tạo",field:"user"},{label:"Tình Trạng",field:"hidden"},{label:"Ngày Tạo",field:"created_at",formatFn:this.$options.filters.formatDate}],rows:[{id:1,name:"John",age:20,createdAt:"",score:.03343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.03343},{id:4,name:"Chris",age:55,createdAt:"2011-10-11",score:.03343},{id:5,name:"Dan",age:40,createdAt:"2011-10-21",score:.03343},{id:6,name:"John",age:20,createdAt:"2011-10-31",score:.03343}]}},computed:{categoryTitle:function(){return this.title?"blog"==this.title?"Danh mục tin tức":"product"==this.title?"Danh mục sản phẩm":void 0:"Tất cả danh mục"},isDisabled:function(){return-1==this.tableAction},selectOptions:function(){var e=this.category;return o.a.recursiveCategory(e,"&nbsp;&nbsp;")},tableCategoryData:function(){var e=this.category;return o.a.recursiveCategory(e,"-")}},methods:{status:function(e){return e?"Ẩn":"Hiện"},categoryStore:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$services.Category.store(e.newCategory);case 3:t.sent,e.newCategory.name="",e.newCategory.slug="",e.newCategory.parent_id="",e.newCategory.keywords="",e.$refs.form.reset(),e.$emit("refresh-data"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})))()},onSubmit:function(){var e=this;this.$refs.form.validate().then((function(t){t&&e.categoryStore()}))},destroy:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$services.Category.delete(e);case 3:t.$emit("refresh-data"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){console.log("console.log")}))}},d=n(18),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"font-nunito"},[n("h1",{staticClass:"text-3xl font-bold"},[e._v(e._s(e.categoryTitle))]),e._v(" "),n("div",{staticClass:"w-full xl:flex mt-10"},[n("div",{staticClass:"xl:w-1/4"},[n("h2",{staticClass:"text-lg font-semibold"},[e._v("Thêm danh mục")]),e._v(" "),n("ValidationObserver",{ref:"form"},[n("form",{staticClass:"mt-4",on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[n("div",{staticClass:"mb-8"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"name"}},[e._v("\n                            Tên\n                        ")]),e._v(" "),n("ValidationProvider",{attrs:{rules:"required","custom-messages":e.customErrorMessages.name},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCategory.name,expression:"newCategory.name"}],staticClass:"appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",class:{"border-red-600":r[0]},domProps:{value:e.newCategory.name},on:{input:function(t){t.target.composing||e.$set(e.newCategory,"name",t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm italic text-red-500"},[e._v("\n                                "+e._s(r[0])+"\n                            ")])]}}])})],1),e._v(" "),n("div",{staticClass:"mb-8"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"name"}},[e._v("\n                            Đường dẫn thân thiện(slug)\n                        ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCategory.slug,expression:"newCategory.slug"}],staticClass:"appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",domProps:{value:e.newCategory.slug},on:{input:function(t){t.target.composing||e.$set(e.newCategory,"slug",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"mb-8"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"name"}},[e._v("\n                            Danh mục cha\n                        ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCategory.parent_id,expression:"newCategory.parent_id"}],staticClass:"py-1 px-2",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.newCategory,"parent_id",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[e._v("Trống")]),e._v(" "),e._l(e.selectOptions,(function(option){return n("option",{key:option.id,domProps:{value:option.id,innerHTML:e._s(option.name)}})}))],2)]),e._v(" "),n("button",{staticClass:"py-1 px-4 bg-blue-500 rounded-sm text-white hover:bg-blue-700",attrs:{type:"submit"}},[e._v("\n                        Thêm danh mục\n                    ")])])])],1),e._v(" "),n("div",{staticClass:"xl:w-3/4 ml-10"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.tableAction,expression:"tableAction"}],staticClass:"py-0.5 px-1.5 text-sm border border-solid border-gray-400 rounded-sm",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.tableAction=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"-1"}},[e._v("Hành động")]),e._v(" "),n("option",{attrs:{value:"delete"}},[e._v("Xoá")])]),e._v(" "),n("button",{staticClass:"py-0.5 px-1.5 text-sm border border-solid bg-none border-gray-400 rounded-sm",attrs:{disabled:e.isDisabled},on:{click:function(t){return e.console()}}},[e._v("\n                Áp dụng\n            ")]),e._v(" "),n("div",{staticClass:"inline-block w-full border border-solid border-gray-200 overflow-x-auto mt-4"},[n("vue-good-table",{attrs:{columns:e.columns,rows:e.tableCategoryData,styleClass:"vgt-table striped","pagination-options":{enabled:!0,rowsPerPageLabel:"Bản ghi trên trang",nextLabel:"Trang kế",prevLabel:"Trang trước",ofLabel:"trên"},"search-options":{enabled:!0,trigger:"key-up",skipDiacritics:!0,placeholder:"Tìm kiếm..."},"select-options":{selectionText:"bản ghi đã chọn",enabled:!0,clearSelectionText:"xoá"}},scopedSlots:e._u([{key:"table-row",fn:function(t){return["hidden"==t.column.field?n("span",{staticClass:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"},[n("span",{staticClass:"absolute inset-0 opacity-50 rounded-full",class:[t.row.hidden?"bg-red-300":"bg-green-300"],attrs:{"aria-hidden":""}}),e._v(" "),n("span",{staticClass:"relative"},[e._v("\n                                "+e._s(e.status(t.row.hidden))+"\n                            ")])]):n("span",[e._v("\n                            "+e._s(t.formattedRow[t.column.field])+"\n                        ")])]}}])})],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);