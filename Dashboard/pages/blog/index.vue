<template>
    <div>
        <vue-good-table :columns="columns" :rows="blogs">
            <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'actions'">
                    <div class="flex items-center justify-center gap-x-2">
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                            />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </div>
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
import Alert from '@/components/UIcomponents/Alert.vue';
import Modal from '@/components/UIcomponents/Modal.vue';
export default {
    middleware: ['unAuthenticated'],
    components: {
        Alert,
        Modal
    },
    data() {
        return {
            columns: [
                {
                    label: '#',
                    field: 'id'
                },
                {
                    label: 'Tiêu Đề',
                    field: 'title'
                },

                {
                    label: 'Tóm tắt',
                    field: 'summary'
                },
                {
                    label: 'Hành động',
                    field: 'actions'
                }
            ],
            blogs: [],
            alert: {
                type: '',
                message: '',
                isVisible: false
            },
            isShowModal: false,
            deleteId: '',
        };
    },
    async created() {
        try {
            const response = await this.$services.Blog.all();
            this.blogs = response.data;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        showConfirmModal(id) {
            this.isShowModal = true;
            this.deleteId = id;
        },
        hideConfirmModal() {
            this.isShowModal = false;
        },
        async destroy() {
            try {
                await this.$axios.delete(process.env.BASE_URL + `/blog/${this.deleteId}`);
                this.blogs = this.blogs.filter(blog => blog.id != this.deleteId);
                this.isShowModal = false;
                this.alertTrigger('success', 'Xoá thành công tin tức', 2000);
            } catch (error) {
                this.alertTrigger(
                    'danger',
                    'Đã xảy ra lỗi khi xoá tin tức!',
                    2000
                );
            }
        },
        alertTrigger(type, msg, ms) {
            this.alert.isVisible = true;
            this.alert.message = msg;
            this.alert.type = type;
            setTimeout(_ => {
                this.alert.isVisible = false;
            }, ms);
        },
    }
};
</script>

<style></style>
