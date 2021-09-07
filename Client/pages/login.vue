<template>
    <div class="w-full lg:max-w-[1440px] mx-auto px-4 my-10">
        <Alert
            :visible="alert.isVisible"
            :message="alert.message"
            :alertType="alert.type"
        />
        <div
            class="w-full p-4 h-auto bg-no-repeat bg-center bg-cover"
            style="background-image: url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-pet-simple-pink-banner-image_172322.jpg')"
        >
            <div class="flex items-center flex-wrap justify-between">
                <div class="w-full lg:w-1/2"></div>
                <div class="w-full lg:w-1/2 py-10 lg:px-20">
                    <ValidationObserver ref="form">
                        <form :disabled="loadingState"
                            class="bg-white shadow-md p-4 lg:p-8 rounded-md"
                            @submit.prevent="onSubmit()"
                            @keyup.enter="onSubmit()"
                        >
                            <div class="my-2">
                                <p class="font-bold text-[20px]">Đăng nhập</p>
                            </div>
                            <div class="my-2">
                                <ValidationProvider
                                    rules="required"
                                    :custom-messages="customErrorMessages.email"
                                    v-slot="{ errors }"
                                >
                                    <input
                                        class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                        type="text"
                                        placeholder="Tên đăng nhập..."
                                        v-model="credentials.email"
                                        :class="{
                                            'border-red-600': errors[0]
                                        }"
                                    />
                                    <p class="text-xs italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>

                                <ValidationProvider
                                    rules="required"
                                    :custom-messages="
                                        customErrorMessages.password
                                    "
                                    v-slot="{ errors }"
                                >
                                    <input
                                        class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                        type="password"
                                        placeholder="Mật khẩu..."
                                        v-model="credentials.password"
                                        :class="{
                                            'border-red-600': errors[0]
                                        }"
                                    />
                                    <p class="text-xs italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>
                                <button :disabled="loadingState"
                                    class="w-full my-2 p-2 bg-red-300 hover:bg-red-500 text-white rounded-md transition-all duration-500"
                                >
                                    <svg
                                        v-if="loadingState"
                                        class="animate-spin h-6 w-6 text-white inline-block"
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
                                    <span v-else> Đăng nhập </span>
                                </button>
                                <div class="flex items-center justify-between">
                                    <div
                                        class="text-[12px] lg:text-[14px] text-blue-500"
                                    >
                                        <nuxt-link to="/quen-mat-khau"
                                            >Quên mật khẩu?</nuxt-link
                                        >
                                    </div>
                                    <div
                                        class="text-[12px] lg:text-[14px] text-blue-500"
                                    >
                                        <input type="checkbox" /> Nhớ mật khẩu
                                    </div>
                                </div>
                                <p class="text-center text-gray-400 my-2">
                                    ------ HOẶC ------
                                </p>
                                <div class="flex items-center justify-center">
                                    <button
                                        class="w-32 p-2 bg-blue-500 text-white mx-4"
                                    >
                                        <svg
                                            class="inline-block"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                                                fill="white"
                                            />
                                        </svg>
                                        <span
                                            class="mx-2 text-[12px] lg:text-[14px]"
                                            >Facebook</span
                                        >
                                    </button>
                                    <button
                                        class="text-center w-32 p-2 bg-red-500 text-white mx-4"
                                    >
                                        <svg
                                            class="inline-block"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                fill="white"
                                            />
                                        </svg>
                                        <span
                                            class="mx-2 text-[12px] lg:text-[14px]"
                                            >Google</span
                                        >
                                    </button>
                                </div>
                                <p class="text-center my-4">
                                    Bạn chưa có tài khoản?
                                    <br />
                                    <nuxt-link
                                        to="/dang-ky"
                                        class="text-blue-500"
                                        href="#"
                                    >
                                        Đăng ký ngay
                                    </nuxt-link>
                                </p>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Alert from '../components/UIcomponents/Alert.vue';

export default {
    layout: 'default',
    components: {
        ValidationProvider,
        ValidationObserver,
        Alert
    },
    data() {
        return {
            loadingState: false,
            credentials: {
                email: '',
                password: ''
            },
            customErrorMessages: {
                email: { required: 'Hãy nhập email của bạn!' },
                password: { required: 'Hãy nhập mật khẩu của bạn!' }
            },
            alert: {
                isVisible: false,
                message: '',
                type: ''
            }
        };
    },
    methods: {
        //TODO: Test case 1 => catching form error before can send login request to server
        async login() {
            try {
                this.loadingState = true;
                await this.$auth.loginWith('laravelJWT', {
                    data: this.credentials
                });
                this.loadingState = false;
                this.alertTrigger('success', 'Đăng nhập thành công!', 2000);
                setTimeout(_ => {
                    this.$router.push({ name: 'home-page' });
                }, 2000);
            } catch (error) {
                this.loadingState = false;
                this.$refs.form.reset();
                this.credentials = {};
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
        // form validate
        onSubmit() {
            this.$refs.form.validate().then(success => {
                if (!success) {
                    return;
                } else {
                    this.login();
                }
            });
        }
    },
    beforeDestroy() {}
};
</script>

<style></style>
