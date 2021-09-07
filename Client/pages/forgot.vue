<template>
    <div class="w-full lg:max-w-[1440px] mx-auto px-4 my-10">
        <div
            class="w-full p-4 h-auto bg-no-repeat bg-center bg-cover"
            style="background-image: url('https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-minimalist-wind-cat-dog-pet-cat-food-dog-food-footprint-pet-image_227159.jpg')"
        >
            <div class="flex items-center justify-center">
                <div class="w-full lg:w-1/2 py-10 lg:px-20">
                    <form 
                        class="bg-white shadow-md p-4 lg:p-8 rounded-md"
                        :disabled="loadingState"
                    >
                        <div class="my-2">
                            <p class="font-bold text-[20px]">Quên mật khẩu</p>
                        </div>
                        <div class="my-2">
                            <ValidationObserver
                                ref="form"
                                @key.enter="onSubmit()"
                                @submit.prevent="onSubmit()"
                            >
                                <form action="">
                                    <ValidationProvider
                                        rules="required|isValidateEmail"
                                        :custom-messages="
                                            customErrorMessages.email
                                        "
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                            type="text"
                                            placeholder="Email..."
                                            v-model="email"
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                        />
                                        <p class="text-xs italic text-red-500">
                                            {{ errors[0] }}
                                        </p>
                                    </ValidationProvider>
                                </form>
                            </ValidationObserver>

                            <button
                                :disabled="loadingState"
                                @click.prevent="sendMail()"
                                class="w-full flex justify-center my-2 p-2 bg-red-300 hover:bg-red-500 text-white rounded-md transition-all duration-500"
                            >
                                <svg
                                    v-if="loadingState"
                                    class="animate-spin h-6 w-6 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                <span v-else> Gửi mã xác thực</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Alert
            :visible="alert.isVisible"
            :message="alert.message"
            :alertType="alert.type"
        />
    </div>
</template>

<script>
import Alert from '@/components/UIcomponents/Alert';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
    components: {
        Alert,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            email: '',
            loadingState: false,
            alert: {
                isVisible: false,
                message: '',
                type: ''
            },
            customErrorMessages: {
                email: { required: 'Hãy nhập email của bạn!' }
            }
        };
    },
    methods: {
        async sendMail() {
            try {
                this.loadingState = true;
                await this.$axios.post(
                    process.env.BASE_URL + '/reset-password',
                    {
                        email: this.email
                    }
                );
                this.email = '';
                this.loadingState = false;
                this.alertTrigger(
                    'success',
                    'Truy cập email của bạn để lấy lại mật khẩu',
                    2000
                );
            } catch (error) {
                this.email = '';
                this.loadingState = false;
                this.alertTrigger('danger', 'Đã xảy ra lỗi !', 2000);
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
                    this.sendMail();
                }
            });
        }
    }
};
</script>

<style></style>
