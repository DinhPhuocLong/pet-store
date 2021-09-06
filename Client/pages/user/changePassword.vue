<template>
    <div>
        <ValidationObserver
            ref="form"
            @submit.prevent="onSubmit()"
            @keyup.enter="onSubmit()"
        >
            <form>
                <div class="border-b">
                    <h2 class="text-xl font-bold">Thay đổi mật khẩu</h2>
                    <p class="text-xs text-gray-600">
                        Bạn có thể cập nhật những thông tin của tài khoản ở biểu
                        mẫu dưới đây
                    </p>
                </div>
                <div class="p-2 border-b">
                    <ValidationProvider
                        rules="required"
                        :custom-messages="customErrorMessages.currentPassword"
                        v-slot="{ errors }"
                    >
                        <div class="flex flex-col lg:flex-row flex-wrap my-4">
                            <p class="w-full lg:w-1/5">Mật khẩu hiện tại</p>
                            <input
                                class="w-full lg:w-1/2 border border-gray-200 rounded-md p-1"
                                type="password"
                                v-model="currentPassword"
                                :class="{
                                    'border-red-600': errors[0]
                                }"
                            />
                            <br />
                            <p class="ml-4 text-xs italic text-red-500">
                                {{ errors[0] }}
                            </p>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        rules="required|min:6|max:13"
                        vid="password"
                        :custom-messages="customErrorMessages.password"
                        v-slot="{ errors }"
                    >
                        <div class="flex flex-col lg:flex-row flex-wrap my-4">
                            <p class="w-full lg:w-1/5">Mật khẩu mới</p>
                            <input
                                class="w-full lg:w-1/2 border border-gray-200 rounded-md p-1"
                                type="password"
                                v-model="newPassword"
                                ref="password"
                                :class="{
                                    'border-red-600': errors[0]
                                }"
                            />
                            <br />
                            <p class="ml-4 text-xs italic text-red-500">
                                {{ errors[0] }}
                            </p>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        rules="required|confirmed:password"
                        :custom-messages="customErrorMessages.passwordConfirm"
                        v-slot="{ errors }"
                    >
                        <div class="flex flex-col lg:flex-row flex-wrap my-4">
                            <p class="w-full lg:w-1/5">Mật khẩu mới</p>
                            <input
                                class="w-full lg:w-1/2 border border-gray-200 rounded-md p-1"
                                type="password"
                                v-model="confirmation"
                                :class="{
                                    'border-red-600': errors[0]
                                }"
                            />
                            <br />
                            <p class="ml-4 text-xs italic text-red-500">
                                {{ errors[0] }}
                            </p>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="float-right mt-6">
                    <button class="p-2 bg-red-500 text-white rounded-md">
                        Cập nhật
                    </button>
                </div>
            </form>
        </ValidationObserver>

        <Alert
            :visible="alert.isVisible"
            :message="alert.message"
            :alertType="alert.type"
        />
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Alert from '@/components/UIcomponents/Alert';
export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        Alert
    },
    data() {
        return {
            currentPassword: '',
            newPassword: '',
            confirmation: '',
            customErrorMessages: {
                currentPassword: {
                    required: 'Hãy nhập mật khẩu hiện tại của bạn !'
                },
                password: { required: 'Hãy nhập mật khẩu mới của bạn !' },
                passwordConfirm: {
                    confirmed: 'Mật khẩu xác nhận không khớp',
                    required: 'Hãy nhập mật khẩu xác nhận'
                }
            },
            alert: {
                isVisible: false,
                message: '',
                type: ''
            }
        };
    },
    methods: {
        async updatePassword() {
            const passwordData = {
                current_password: this.currentPassword,
                new_password: this.newPassword
            };
            try {
                await this.$axios.patch(
                    process.env.BASE_URL + '/user/change-password',
                    { ...passwordData }
                );
                this.alertTrigger('success', 'Cập nhật mật khẩu thành công !', 2000);
                this.currentPassword = '';
                this.newPassword = '';
                this.confirmation = ''
                this.$refs.form.reset();
            } catch (error) {
                this.alertTrigger('danger', error.response.data.error, 2000);
            }
        },
        alertTrigger(type, msg, ms) {
            this.alert.isVisible = true;
            this.alert.type = type;
            this.alert.message = msg;
            setTimeout(_ => {
                this.alert.isVisible = false;
            }, ms);
        },
        onSubmit() {
            this.$refs.form.validate().then(success => {
                if (!success) {
                    return;
                } else {
                    this.updatePassword();
                }
            });
        }
    }
};
</script>

<style></style>
