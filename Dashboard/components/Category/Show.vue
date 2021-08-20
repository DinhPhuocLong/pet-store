<template>
    <div class="font-nunito">
        <h1 class="text-3xl font-bold">{{ categoryTitle }}</h1>
        <div class="w-full xl:flex mt-10">
            <div class="xl:w-1/4">
                <h2 class="text-lg font-semibold">Thêm danh mục</h2>
                <ValidationObserver ref="form">
                    <form class="mt-4" @submit.prevent="onSubmit()">
                        <div class="mb-8">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="name"
                            >
                                Tên
                            </label>
                            <ValidationProvider
                                rules="required"
                                :custom-messages="customErrorMessages.name"
                                v-slot="{ errors }"
                            >
                                <input
                                    class="appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    v-model="newCategory.name"
                                    :class="{ 'border-red-600': errors[0] }"
                                />
                                <p class="mt-1 text-sm italic text-red-500">
                                    {{ errors[0] }}
                                </p>
                            </ValidationProvider>
                        </div>

                        <div class="mb-8">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="name"
                            >
                                Đường dẫn thân thiện(slug)
                            </label>
                            <input
                                class="appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                v-model="newCategory.slug"
                            />
                        </div>

                        <div class="mb-8">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="name"
                            >
                                Danh mục cha
                            </label>
                            <select
                                class="py-1 px-2"
                                v-model="newCategory.parent_id"
                            >
                                <option class="" value="">Trống</option>
                                <option
                                    v-for="option in selectOptions"
                                    :value="option.id"
                                    :key="option.id"
                                    v-html="option.name"
                                >
                                </option>
                            </select>
                        </div>

                        <div class="mb-8" v-if="!title">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="name"
                            >
                                Loại danh mục
                            </label>
                            <select
                                class="py-1 px-2"
                                v-model="newCategory.type"
                            >
                                <option value="product">
                                    Danh mục sản phẩm
                                </option>

                                <option value="blog">
                                    Danh mục tin tức
                                </option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            class="py-1 px-4 bg-blue-500 rounded-sm text-white hover:bg-blue-700"
                        >
                            Thêm danh mục
                        </button>
                    </form>
                </ValidationObserver>
            </div>
            <div class="xl:w-3/4 ml-10">
                <select
                    class="py-0.5 px-1.5 text-sm border border-solid border-gray-400 rounded-sm"
                    v-model="tableAction"
                >
                    <option value="-1">Hành động</option>
                    <option value="delete">Xoá</option>
                </select>
                <button
                    class="py-0.5 px-1.5 text-sm border border-solid bg-none border-gray-400 rounded-sm"
                    :disabled="isDisabled"
                    @click="console()"
                >
                    Áp dụng
                </button>
                <div
                    class="inline-block w-full border border-solid border-gray-200 overflow-x-auto mt-4"
                >
                    <vue-good-table
                        :columns="columns"
                        :rows="tableCategoryData"
                        styleClass="vgt-table striped"
                        :pagination-options="{
                            enabled: true,
                            rowsPerPageLabel: 'Bản ghi trên trang',
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
                        :select-options="{
                            selectionText: 'bản ghi đã chọn',
                            enabled: true,
                            clearSelectionText: 'xoá',
                            selectOnCheckboxOnly: true
                        }"
                    >
                        <template
                            slot="table-row"
                            slot-scope="props"
                            class="block w-full"
                        >
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

                            <span v-else-if="props.column.field == 'name'">
                                <span>
                                    {{ props.row.name }}
                                </span>
                                <div
                                    class="w-full text-black text-[12px] absolute px-5 left-0 bottom-0 opacity-0
                                group-hover:opacity-100 group-hover:visible transition-all duration-500"
                                >
                                    <nuxt-link
                                        :to="{
                                            name: 'category-slug',
                                            params: { slug: props.row.slug }
                                        }"
                                        class="hover:text-blue-400"
                                    >
                                        Chỉnh sửa
                                    </nuxt-link>
                                    <span> | </span>
                                    <button
                                        @click.prevent="
                                            showConfirm(props.row.id)
                                        "
                                        class="hover:text-blue-400"
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </span>

                            <span v-else>
                                {{ props.formattedRow[props.column.field] }}
                            </span>
                        </template>
                    </vue-good-table>
                </div>
            </div>
        </div>
        <Modal
            :visible="isShowModal"
            v-on:confirm="destroy(deleteId)"
            v-on:cancel="cancelDestroy()"
        >
            <div slot="modal-title">
                Xoá danh mục
            </div>
            <div slot="modal-message">
                Bạn có chắc là muốn xoá danh mục này chứ? Một khi danh mục này
                được xoá thì toàn bộ sản phẩm của nó cũng sẽ bị xoá!
            </div>
        </Modal>

        <Alert
            :visible="alert.isVisible"
            :message="alert.message"
            :alertType="alert.type"
        />
    </div>
</template>

<script>
import util from '../../helpers/util';
import Modal from '../../components/UIcomponents/Modal.vue';
import Alert from '../../components/UIcomponents/Alert.vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
    props: ['category', 'title'],
    components: {
        ValidationProvider,
        ValidationObserver,
        Modal,
        Alert
    },
    data() {
        return {
            tableAction: -1,
            isShowModal: false,
            deleteId: '',
            newCategory: {
                name: '',
                slug: '',
                parent_id: '',
                type: ''
            },
            customErrorMessages: {
                name: { required: 'Tên danh mục không được để trống!' },
                keywords: { required: 'Từ khoá không được để trống!' }
            },
            columns: [
                {
                    label: 'Tên',
                    field: 'name',
                    tdClass: 'relative group'
                },
                {
                    label: 'Từ Khoá',
                    field: 'age',
                    type: 'number'
                },
                {
                    label: 'Đường Dẫn',
                    field: 'slug'
                },
                {
                    label: 'Người Tạo',
                    field: 'user'
                },
                {
                    label: 'Tình Trạng',
                    field: 'hidden'
                },
                {
                    label: 'Ngày Tạo',
                    field: 'created_at',
                    formatFn: this.$options.filters.formatDate
                }
            ],
            alert: {
                isVisible: false,
                message: '',
                type: ''
            }
        };
    },
    created() {
        if (!this.title) {
            this.newCategory.type = 'product';
        } else {
            this.newCategory.type = this.title;
        }
    },
    watch: {    
        title: function(newVal, oldVal) { 
            if (!newVal) {
                this.newCategory.type = 'product';
            } else {
                this.newCategory.type = newVal;
            }
        }
    },
    computed: {
        categoryTitle() {
            if (!this.title) return 'Tất cả danh mục';
            if (this.title == 'blog') return 'Danh mục tin tức';
            if (this.title == 'product') return 'Danh mục sản phẩm';
        },
        isDisabled() {
            if (this.tableAction == -1) {
                return true;
            }
            return false;
        },
        selectOptions() {
            const tree = this.category;
            return util.recursiveCategory(tree, '&nbsp;&nbsp;');
        },
        tableCategoryData() {
            const tree = this.category;
            return util.recursiveCategory(tree, '-');
        }
    },
    methods: {
        status(status) {
            if (status) {
                return 'Ẩn';
            }
            return 'Hiện';
        },
        async categoryStore() {
            try {
                await this.$services.Category.store(
                    this.newCategory
                );
                this.newCategory.name = '';
                this.newCategory.slug = '';
                this.newCategory.parent_id = '';
                this.newCategory.keywords = '';
                this.$refs.form.reset();
                this.alertTrigger('Thêm danh mục thành công', 'success', 2000);
                this.$emit('refresh-data');
            } catch (error) {
                this.alertTrigger(error.response.data, 'danger', 2000);
            }
        },
        alertTrigger(msg, type, ms) {
            this.alert.isVisible = true;
            this.alert.message = msg;
            this.alert.type = type;
            setTimeout(_ => {
                this.alert.isVisible = false;
            }, ms);
        },
        onSubmit() {
            this.$refs.form.validate().then(success => {
                if (!success) {
                    return;
                } else {
                    this.categoryStore();
                }
            });
        },
        showConfirm(id) {
            this.isShowModal = true;
            this.deleteId = id;
        },
        cancelDestroy() {
            this.isShowModal = false;
        },
        async destroy(id) {
            try {
                await this.$services.Category.delete(id);
                this.isShowModal = false;
                this.alertTrigger('Xoá thành công danh mục!', 'success', 2000);
                this.$emit('refresh-data');
            } catch (error) {
                this.alertTrigger(error.response.data, 'danger', 2000);
            }
        }
    }
};
</script>

<style></style>
