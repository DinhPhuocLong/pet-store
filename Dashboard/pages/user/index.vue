<template>
    <div>
        <h2 class="text-lg font-semibold mb-10">Danh sách người dùng</h2>
        <vue-good-table :columns="columns" :rows="users">
            <template slot="table-row" slot-scope="props">
                <span
                    v-if="props.column.field == 'status'"
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                    <span
                        aria-hidden
                        class="absolute inset-0 opacity-50 rounded-full"
                        v-bind:class="[
                            !props.row.status ? 'bg-green-300' : 'bg-red-300'
                        ]"
                    >
                    </span>
                    <span class="relative">
                        {{ status(props.row.status) }}
                    </span>
                </span>

                <span v-else-if="props.column.field == 'actions'">
                    <div class="flex items-center justify-center gap-x-2">
                        <button @click.prevent="showConfirmModal(props.row.id)">
                            <svg
                                v-if="!props.row.status"
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-ban"
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
                                <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
                            </svg>

                            <svg
                                v-else
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-lock-open"
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
                                <rect
                                    x="5"
                                    y="11"
                                    width="14"
                                    height="10"
                                    rx="2"
                                />
                                <circle cx="12" cy="16" r="1" />
                                <path d="M8 11v-5a4 4 0 0 1 8 0" />
                            </svg>
                        </button>
                    </div>
                </span>

                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>

        <Modal
            :visible="isShowModal"
            :confirmButton="modal.confirmText"
            v-on:confirm="banUser(banId)"
            v-on:cancel="hideConfirmModal()"
        >
            <div slot="modal-title">
                {{ modal.title }}
            </div>
            <div slot="modal-message">
                {{ modal.message }}
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from '@/components/UIcomponents/Modal.vue';
export default {
    middleware: ['unAuthenticated'],
    components: {
        Modal
    },
    data() {
        return {
            columns: [
                {
                    label: 'Tên',
                    field: 'name'
                },
                {
                    label: 'Email',
                    field: 'email'
                },
                {
                    label: 'Tình trạng',
                    field: 'status'
                },
                {
                    label: 'Ngày tạo',
                    field: 'created_at',
                    formatFn: this.$options.filters.formatDate
                },
                {
                    label: 'Hành động',
                    field: 'actions'
                }
            ],
            users: [],
            modal: {
                title: '',
                message: '',
                confirmText: ''
            },
            image: '',
            isShowModal: false
        };
    },
    async created() {
        try {
            const response = await this.$services.User.all('user');
            this.users = response.data;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        status(status) {
            if (!status) {
                return 'Hoạt động';
            }
            return 'Đã khoá';
        },
        async banUser(id) {
            try {
                await this.$services.User.block({ id });
                let user = this.users.find(user => user.id == id);
                user.status = !user.status;
                this.isShowModal = false;
            } catch (error) {
                console.log(error);
            }
        },
        showConfirmModal(id) {
            let user = this.users.find(user => user.id == id);
            if (!user.status) {
                this.modal.title = 'Khoá người dùng';
                this.modal.message = 'Bạn có chắc muốn khoá người dùng này!';
                this.modal.confirmText = 'Khoá';
            } else {
                this.modal.title = 'Mở Khoá người dùng';
                this.modal.message =
                    'Bạn có chắc muốn mở khoá cho người dùng này!';
                this.modal.confirmText = 'Đồng ý';
            }
            this.isShowModal = true;
            this.banId = id;
        },
        hideConfirmModal() {
            this.isShowModal = false;
        }
    }
};
</script>

<style scoped>
/* Toggle B */
input:checked ~ .dot {
    transform: translateX(160%);
    background-color: #48bb78 !important;
}
</style>
