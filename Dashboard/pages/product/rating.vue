<template>
    <div
        class="inline-block w-full border border-solid border-gray-200 overflow-x-auto mt-4"
    >
        <vue-good-table
            :columns="columns"
            :rows="reviews"
            :fixed-header="true"
            styleClass="vgt-table bordered"
            :pagination-options="{
                enabled: true,
                rowsPerPageLabel: 'Đánh giá trên trang',
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
                            !props.row.hidden ? 'bg-green-300' : 'bg-red-300'
                        ]"
                    >
                    </span>
                    <span class="relative">
                        {{ status(props.row.hidden) }}
                    </span>
                </span>

                <span v-else-if="props.column.field == 'actions'">
                    <div class="flex items-center justify-center gap-x-2">
                        <button>
                            <svg
                                v-if="!props.row.hidden"
                                @click="toggleReview(props.row.id, props.row.hidden)"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
                                />
                            </svg>

                            <svg
                                v-else
                                @click="toggleReview(props.row.id, props.row.hidden)"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"
                                />
                            </svg>
                        </button>

                        <button @click.prevent="showConfirmModal(props.row.id)">
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
                    </div>
                </span>

                <span v-else-if="props.column.field == 'rate'">
                    <star-rating
                        :rating="props.row.rate / 10"
                        :read-only="true"
                        :star-size="20"
                        :show-rating="false"
                        :increment="0.01"
                    >
                    </star-rating>
                </span>
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>
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
                Xoá bình luận
            </div>
            <div slot="modal-message">
                Bạn có chắc là muốn xoá bình luận này chứ? Một khi sản phẩm này
                thì sẽ không thể hoàn tác!
            </div>
        </Modal>
    </div>
</template>

<script>
import Alert from '@/components/UIcomponents/Alert.vue';
import Modal from '@/components/UIcomponents/Modal.vue';
import StarRating from 'vue-star-rating';
export default {
    layout: 'default',
    components: {
        StarRating,
        Alert,
        Modal
    },
    data() {
        return {
            alert: {
                type: '',
                message: '',
                isVisible: false
            },
            isShowModal: false,
            deleteId: '',
            reviews: [],
            columns: [
                {
                    label: 'Sản Phẩm',
                    field: 'product.name',
                    width: '300px'
                },
                {
                    label: 'Name',
                    field: 'name'
                },
                {
                    label: 'Email',
                    field: 'email'
                },
                {
                    label: 'Nội Dung',
                    field: 'comment'
                },
                {
                    label: 'Rating',
                    field: 'rate'
                },
                {
                    label: 'Tình trạng',
                    field: 'hidden'
                },
                {
                    label: 'Ngày Tạo',
                    field: 'created_at',
                    formatFn: this.$options.filters.formatDate
                },
                {
                    label: 'Hành Động',
                    field: 'actions'
                }
            ]
        };
    },
    async created() {
        try {
            const response = await this.$services.ProductReview.all();
            this.reviews = response.data;
        } catch (error) {
            console.log(error);
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
        showConfirmModal(id) {
            this.isShowModal = true;
            this.deleteId = id;
        },
        hideConfirmModal() {
            this.isShowModal = false;
        },
        async destroy() {
            try {
                await this.$services.ProductReview.delete(this.deleteId);
                this.reviews = this.reviews.filter(item => item.id != this.deleteId);
                this.isShowModal = false;
                this.alertTrigger('success', 'Xoá thành công bình luận', 2000);
            } catch (error) {
                this.alertTrigger('danger', 'Đã xảy ra lỗi khi xoá bình luận!', 2000);
            }
        },
        async toggleReview(id, status) {
            try {
                if (!status) {
                    await this.$services.ProductReview.update(id, { hidden: 1 });
                } else {
                    await this.$services.ProductReview.update(id, { hidden: 0 });
                }
                let updatedReview = this.reviews.find(review => review.id == id);
                updatedReview.hidden = !status
            } catch (error) {
                console.log(error);
            }
        },
        status(status) {
            if (!status) {
                return 'Hiện';
            }
            return 'Ẩn';
        }
    }
};
</script>
