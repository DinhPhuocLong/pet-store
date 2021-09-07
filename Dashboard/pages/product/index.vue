<template>
    <div>
        <UIcomponentsSlideOver
            v-on:close="closeSlideOver()"
            :isShowing="isShowingSlideOver"
            :title="'Thêm sản phẩm'"
        >
            <div slot="body">
                <ValidationObserver ref="form">
                    <form @submit.prevent="onSubmit()">
                        <div class="mb-8">
                            <label class="block mb-4">Tên sản phẩm</label>
                            <ValidationProvider
                                rules="required"
                                :custom-messages="customErrorMessages.name"
                                v-slot="{ errors }"
                            >
                                <input
                                    v-model="name"
                                    class="appearance-none border border-solid border-gray-300 w-full py-2 px-2
                                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    :class="{ 'border-red-600': errors[0] }"
                                />
                                <p class="mt-1 text-sm italic text-red-500">
                                    {{ errors[0] }}
                                </p>
                            </ValidationProvider>
                        </div>
                        <div class="mb-8">
                            <label class="block mb-4 bg-white"
                                >Mô tả sản phẩm</label
                            >
                            <div
                                style="min-height:150px;"
                                class="quill-editor"
                                :content="content"
                                @change="onEditorChange($event)"
                                @blur="onEditorBlur($event)"
                                @focus="onEditorFocus($event)"
                                @ready="onEditorReady($event)"
                                v-quill:myQuillEditor="editorOption"
                            ></div>
                        </div>

                        <div class="mb-8">
                            <label class="block mb-4">Danh mục</label>
                            <ValidationProvider
                                rules="required"
                                :custom-messages="customErrorMessages.category"
                                v-slot="{ errors }"
                            >
                                <select
                                    id="Currency"
                                    name="currency"
                                    v-model="category_id"
                                    :class="{ 'border-red-600': errors[0] }"
                                    class="w-full border border-solid border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 h-full py-2 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm"
                                >
                                    <option
                                        v-for="category in categoryOptions"
                                        :key="category.id"
                                        :value="category.id"
                                        v-html="category.name"
                                    >
                                    </option>
                                </select>
                                <p class="mt-1 text-sm italic text-red-500">
                                    {{ errors[0] }}
                                </p>
                            </ValidationProvider>
                        </div>

                        <div class="mb-8">
                            <label class="block mb-4">Thương hiệu</label>
                            <ValidationProvider
                                rules="required"
                                :custom-messages="customErrorMessages.brand"
                                v-slot="{ errors }"
                            >
                                <select
                                    v-model="brand"
                                    id="Currency"
                                    name="currency"
                                    :class="{ 'border-red-600': errors[0] }"
                                    class="w-full border border-solid border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 h-full py-2 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm"
                                >
                                    <option
                                        v-for="brand in brands"
                                        :value="brand.id"
                                        :key="brand.id"
                                        class="py-2"
                                    >
                                        {{ brand.name }}
                                    </option>
                                </select>
                                <p class="mt-1 text-sm italic text-red-500">
                                    {{ errors[0] }}
                                </p>
                            </ValidationProvider>
                        </div>

                        <div class="mb-8 flex gap-x-4">
                            <div class="w-2/4">
                                <label
                                    for="price"
                                    class="block text-sm font-medium text-gray-700"
                                    >Giá</label
                                >
                                <ValidationProvider
                                    rules="required|min_value:1"
                                    :custom-messages="customErrorMessages.price"
                                    v-slot="{ errors }"
                                >
                                    <div
                                        class="mt-1 relative rounded-md shadow-sm"
                                    >
                                        <div
                                            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                        >
                                            <span
                                                class="text-gray-500 sm:text-sm"
                                            >
                                                đ
                                            </span>
                                        </div>
                                        <input
                                            v-model="price"
                                            type="number"
                                            class="appearance-none border border-solid border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm py-2"
                                            placeholder="0.00"
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                        />
                                    </div>
                                    <p class="mt-1 text-sm italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>
                            </div>

                            <div class="w-2/4">
                                <label
                                    for="price"
                                    class="block text-sm font-medium text-gray-700"
                                    >Giảm giá</label
                                >
                                <ValidationProvider
                                    rules="required|min_value:1"
                                    :custom-messages="customErrorMessages.sale"
                                    v-slot="{ errors }"
                                >
                                    <div
                                        class="mt-1 relative rounded-md shadow-sm"
                                    >
                                        <div
                                            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                        >
                                            <span
                                                class="text-gray-500 sm:text-sm"
                                            >
                                                %
                                            </span>
                                        </div>
                                        <input
                                            v-model="salePrice"
                                            type="number"
                                            class="appearance-none border border-solid border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm py-2"
                                            placeholder="0"
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                        />
                                    </div>
                                    <p class="mt-1 text-sm italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>
                            </div>
                        </div>

                        <div class="mb-8">
                            <label class="block mb-4">Tags</label>
                                <input
                                    v-model="tags"
                                    class="appearance-none border border-solid border-gray-300 w-full py-2 px-2
                                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                        </div>

                        <div class="mb-2">
                            <span>Hình ảnh</span>
                            <div
                                class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer"
                            >
                                <div class="absolute">
                                    <div class="flex flex-col items-center ">
                                        <i
                                            class="fa fa-cloud-upload fa-3x text-gray-200"
                                        ></i>
                                        <span
                                            class="block text-blue-400 font-normal"
                                            >Browse files</span
                                        >
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    class="h-full w-full opacity-0"
                                    name=""
                                    multiple
                                    @change="onFileChange"
                                />
                            </div>
                        </div>
                        <div v-if="images" class="grid grid-cols-4 gap-x-2">
                            <div
                                id="preview-image"
                                v-for="(image, index) in images"
                                :key="index"
                                class="border border-solid border-gray-300 relative"
                                style="max-height: 120px"
                            >
                                <img :src="image" class="h-full" />
                                <div
                                    id="remove-button"
                                    class="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center opacity-0"
                                >
                                    <svg
                                        @click="removePreviewImage(index)"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-x"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M10 10l4 4m0 -4l-4 4" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10">
                            <button
                                type="submit"
                                class="mr-4 inline-block text-center lg:text-none py-2 px-10 text-md rounded-md text-white bg-blue-600 hover:bg-blue-800 transition-all duration-500"
                            >
                                Tạo mới
                            </button>
                            <button
                                @click.prevent="closeSlideOver()"
                                class="inline-block text-center lg:text-none py-2 px-10  text-md rounded-md text-white bg-blue-600 hover:bg-blue-800 transition-all duration-500"
                            >
                                Huỷ
                            </button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </UIcomponentsSlideOver>

        <div class="flex justify-end items-center gap-x-4">
            <div @click="openSlideOver()">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
                    />
                </svg>
            </div>
        </div>
        <div
            class="inline-block w-full border border-solid border-gray-200 overflow-x-auto mt-4"
        >
            <vue-good-table
                :columns="columns"
                :rows="products"
                :pagination-options="{
                    enabled: true,
                    rowsPerPageLabel: 'Sản phẩm trên trang',
                    nextLabel: 'Trang kế',
                    prevLabel: 'Trang trước',
                    ofLabel: 'trên'
                }"
                :search-options="{
                    enabled: true,
                    trigger: 'key-up',
                    skipDiacritics: true,
                    placeholder: 'Tìm kiếm...'
                }"
            >
                <template slot="table-row" slot-scope="props">
                    <span
                        v-if="props.column.field == 'hidden'"
                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                        <span
                            aria-hidden
                            class="absolute inset-0 opacity-50 rounded-full"
                            v-bind:class="[
                                !props.row.hidden
                                    ? 'bg-green-300'
                                    : 'bg-red-300'
                            ]"
                        >
                        </span>
                        <span class="relative">
                            {{ status(props.row.hidden) }}
                        </span>
                    </span>

                    <span v-else-if="props.column.field == 'actions'">
                        <div class="flex items-center justify-center gap-x-2">
                            <button @click.prevent="showConfirmModal(props.row.id);">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-trash"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#2c3e50"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <line x1="4" y1="7" x2="20" y2="7" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                    <path
                                        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                                    />
                                    <path
                                        d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
                                    />
                                </svg>
                            </button>

                            <nuxt-link
                                :to="{
                                    name: 'product-detail',
                                    params: { slug: props.row.slug }
                                }"
                                class="spin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-settings"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#2c3e50"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path
                                        d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                                    />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </nuxt-link>
                        </div>
                    </span>

                    <span
                        v-else-if="props.column.field == 'reviews'"
                        class="flex"
                    >
                        <star-rating
                            :rating="countingStar(props.row.reviews)"
                            :read-only="true"
                            :star-size="20"
                            :show-rating="false"
                            :increment="0.01"
                        >
                        </star-rating>
                        <nuxt-link :to="{ name: 'review-of-product', params: { slug: props.row.slug } }">{{
                            `(${props.row.reviews.length})`
                        }}</nuxt-link>
                    </span>
                    <span v-else>
                        {{ props.formattedRow[props.column.field] }}
                    </span>
                </template>
            </vue-good-table>
        </div>
        <Alert
            :visible="alert.isVisible"
            :alertType="alert.type"
            :message="alert.message"
        />

        <Modal
            :visible="isShowModal"
            v-on:confirm="destroy(deleteId)"
            v-on:cancel="hideConfirmModal()"
        >
            <div slot="modal-title">
                Xoá sản phẩm
            </div>
            <div slot="modal-message">
                Bạn có chắc là muốn xoá sản phẩm này chứ? Một khi sản phẩm này
                thì sẽ không thể hoàn tác!
            </div>
        </Modal>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Alert from '@/components/UIcomponents/Alert.vue';
import Modal from '@/components/UIcomponents/Modal.vue';
import StarRating from 'vue-star-rating';
import util from '../../helpers/util';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
    middleware: ['unAuthenticated'],
    layout: 'dashboard',
    components: {
        StarRating,
        ValidationProvider,
        ValidationObserver,
        Alert,
        Modal
    },
    data() {
        return {
            isShowModal: false,
            deleteId: '',
            isShowingSlideOver: false,
            editorOption: {
                placeholder: 'Vui lòng nhập gì đó',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block']
                    ]
                }
            },
            files: '',
            images: [],
            name: '',
            category_id: '',
            price: '',
            salePrice: '',
            content: '',
            brand: '',
            tags: '',
            brands: [],
            columns: [
                {
                    label: '#',
                    field: 'id'
                },
                {
                    label: 'Tên sản phẩm',
                    field: 'name',
                    tdClass: 'relative group'
                },
                {
                    label: 'Danh mục',
                    field: 'category.name'
                },
                {
                    label: 'Thương Hiệu',
                    field: 'brand.name'
                },
                {
                    label: 'Giá',
                    field: 'price',
                    formatFn: this.$options.filters.toVndCurrency
                },
                {
                    label: 'Khuyến Mãi',
                    field: 'salePrice',
                    formatFn: this.$options.filters.percentage
                },
                {
                    label: 'Rating',
                    field: 'reviews'
                },
                {
                    label: 'Tình Trạng',
                    field: 'hidden'
                },
                {
                    label: 'Khởi Tạo',
                    field: 'created_at',
                    formatFn: this.$options.filters.formatDate
                },
                {
                    label: 'Hành Động',
                    field: 'actions',
                    sortable: false
                }
            ],
            alert: {
                type: '',
                message: '',
                isVisible: false
            },
            customErrorMessages: {
                name: { required: 'Tên sản phẩm không được để trống!' },
                price: {
                    required: 'Vui lòng nhập giá sản phẩm!',
                    min_value: 'Giá của sản phẩm phải lớn hơn 0'
                },
                brand: { required: 'Vui lòng chọn thương hiệu cho sản phẩm!' },
                category: { required: 'Vui lòng chọn danh mục cho sản phẩm!' },
                sale: { min_value: 'Giảm giá tối thiểu 1%' }
            }
        };
    },
    async created() {
        this.$store.dispatch('product/getProducts');
        this.$store.dispatch('category/getCategory', 'product');
        this.getBrand();
    },
    computed: {
        ...mapState({
            products: state => {
                return state.product.products;
            },
            categories: state => {
                return state.category.category;
            }
        }),
        categoryOptions() {
            const tree = this.categories;
            return util.recursiveCategory(tree, '&nbsp;&nbsp;');
        }
    },
    methods: {
        alertTrigger(type, msg, ms) {
            this.alert.isVisible = true;
            this.alert.message = msg;
            this.alert.type = type;
            setTimeout(_ => {
                this.alert.isVisible = false;
            }, ms);
        },
        countingStar(reviews) {
            return (
                reviews.reduce((acc, curr) => acc + curr.rate, 0) /
                reviews.length /
                10
            );
        },
        async getBrand() {
            const response = await this.$services.Brand.all();
            this.brands = response.data;
        },
        onSubmit() {
            this.$refs.form.validate().then(success => {
                if (!success) {
                    return;
                } else {
                    this.addNewProduct();
                }
            });
        },
        async addNewProduct() {
            try {
                const formData = new FormData();
                if (this.files.length) {
                    this.files.forEach(file => {
                        formData.append('src[]', file);
                    });
                }
                formData.append('slug', '');
                formData.append('name', this.name);
                formData.append('price', this.price);
                formData.append('salePrice', this.salePrice);
                formData.append('description', this.content);
                formData.append('category_id', this.category_id);
                formData.append('brand_id', this.brand);
                formData.append('tags', this.tags);
                await this.$services.Product.store(formData);
                this.files = '';
                this.name = '';
                this.category_id = '';
                this.content = '';
                this.images = [];
                this.salePrice = '';
                this.price = '';
                this.$refs.form.reset();
                this.alertTrigger('success', 'Thêm thành công sản phẩm!', 2000);
                this.$store.dispatch('product/getProducts');
            } catch (error) {
                const msg = error.response.data.message;
                this.alertTrigger('danger', msg, 2000);
            }
        },
        showConfirmModal(id) {
            this.isShowModal = true;
            this.deleteId = id;
        },
        hideConfirmModal() {
            this.isShowModal = false;
        },
        async destroy() {
            try {
                await this.$services.Product.delete(this.deleteId);
                this.isShowModal = false;
                this.$store.dispatch('product/getProducts');
                this.alertTrigger('success', 'Xoá thành công sản phẩm', 2000);
            } catch (error) {
                this.alertTrigger('danger', 'Đã xảy ra lỗi khi xoá sản phẩm!', 2000);
            }
        },
        onFileChange(event) {
            console.log(event.target.files.FileList);
            let files = event.target.files || event.dataTransfer.files;
            console.log(files);
            if (!files.length) return;
            this.files = files;
            this.createImage(files);
        },
        createImage(files) {
            let vm = this;
            for (let index = 0; index < files.length; index++) {
                let reader = new FileReader();
                reader.onload = function(event) {
                    const imageUrl = event.target.result;
                    vm.images.push(imageUrl);
                };
                reader.readAsDataURL(files[index]);
            }
        },
        removePreviewImage(index) {
            this.images.splice(index, 1);
        },
        status(status) {
            if (!status) {
                return 'Hiện';
            }
            return 'Ẩn';
        },
        openSlideOver() {
            this.isShowingSlideOver = true;
        },
        closeSlideOver() {
            this.isShowingSlideOver = false;
            this.images = [];
        },
        onEditorBlur(editor) {
            // console.log("editor blur!", editor);
        },
        onEditorFocus(editor) {
            // console.log("editor focus!", editor);
        },
        onEditorReady(editor) {
            // console.log("editor ready!", editor);
        },
        onEditorChange({ editor, html, text }) {
            // console.log("editor change!", editor, html, text);
            this.content = html;
        }
    }
};
</script>

<style scoped>
#preview-image:hover #remove-button {
    opacity: 1;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}

.spin {
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>