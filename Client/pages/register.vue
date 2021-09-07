<template>
    <div class="w-full lg:max-w-[1440px] mx-auto px-4 my-10">
        <div
            class="w-full p-4 h-auto bg-no-repeat bg-center bg-cover"
            style="background-image: url('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cute-cartoon-dog-banner-image_177827.jpg')"
        >
            <Alert
                :visible="alert.isVisible"
                :message="alert.message"
                :alertType="alert.type"
            />
            <div class="flex items-center flex-wrap justify-between">
                <div class="w-full lg:w-1/2 py-10 lg:px-20">
                    <ValidationObserver
                        ref="form"
                        @key.enter="onSubmit()"
                        @submit.prevent="onSubmit()"
                    >
                        <form class="bg-white shadow-md p-4 lg:p-8 rounded-md">
                            <div class="my-2">
                                <p class="font-bold text-[20px]">Đăng ký</p>
                            </div>
                            <div class="my-2">
                                <ValidationProvider
                                    rules="required|min:6|max:20"
                                    :custom-messages="
                                        customErrorMessages.username
                                    "
                                    v-slot="{ errors }"
                                >
                                    <input
                                        class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                        type="text"
                                        placeholder="Tên đăng nhập..."
                                        v-model="registerCredentials.username"
                                        :class="{
                                            'border-red-600': errors[0]
                                        }"
                                    />
                                    <p class="text-xs italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>

                                <ValidationProvider
                                    rules="required|isValidateEmail"
                                    :custom-messages="customErrorMessages.email"
                                    v-slot="{ errors }"
                                >
                                    <input
                                        class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                        type="text"
                                        placeholder="Email..."
                                        v-model="registerCredentials.email"
                                        :class="{
                                            'border-red-600': errors[0]
                                        }"
                                    />
                                    <p class="text-xs italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>

                                <ValidationProvider
                                    rules="required|min:3|max:20"
                                    :custom-messages="customErrorMessages.name"
                                    v-slot="{ errors }"
                                >
                                    <input
                                        class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                        type="text"
                                        placeholder="Họ và tên..."
                                        v-model="registerCredentials.name"
                                        :class="{
                                            'border-red-600': errors[0]
                                        }"
                                    />
                                    <p class="text-xs italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>

                                <ValidationProvider
                                    rules="required|min:6|max:20"
                                    vid="password"
                                    :custom-messages="
                                        customErrorMessages.password
                                    "
                                    v-slot="{ errors }"
                                >
                                    <input
                                        class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                        type="password"
                                        ref="password"
                                        placeholder="Mật khẩu..."
                                        v-model="registerCredentials.password"
                                        :class="{
                                            'border-red-600': errors[0]
                                        }"
                                    />
                                    <p class="text-xs italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>

                                <ValidationProvider
                                    rules="required|confirmed:password"
                                    :custom-messages="
                                        customErrorMessages.password_confirmation
                                    "
                                    v-slot="{ errors }"
                                >
                                    <input
                                        class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                        type="password"
                                        placeholder="Xác Nhận Mật khẩu..."
                                        v-model="
                                            registerCredentials.password_confirmation
                                        "
                                        :class="{
                                            'border-red-600': errors[0]
                                        }"
                                    />
                                    <p class="text-xs italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>

                                <button
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
                                    <span v-else> Đăng ký </span>
                                </button>
                                <p class="text-center my-4">
                                    Bạn đã có tài khoản?
                                    <br />
                                    <nuxt-link
                                        to="/dang-nhap"
                                        class="text-blue-500"
                                        >Đăng nhập ngay</nuxt-link
                                    >
                                </p>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
                <div class="w-full lg:w-1/2"></div>
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
            alert: {
                isVisible: false,
                message: '',
                type: ''
            },
            registerCredentials: {
                name: '',
                username: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            customErrorMessages: {
                username: {
                    required: 'Hãy nhập tên đăng nhập!',
                    min: 'Tên đăng nhập tối thiểu {length} ký tự !',
                    max: 'Tên đăng nhập tối đa {length} ký tự !'
                },
                name: {
                    required: 'Hãy nhập họ và tên của bạn !',
                    min: 'Họ và tên tối thiểu {length} ký tự !',
                    max: 'Họ và tên tối đa {length} ký tự !'
                },
                email: { required: 'Hãy nhập email của bạn!' },
                password: {
                    required: 'Hãy nhập mật khẩu của bạn!',
                    min: 'Mật khẩu tối thiểu {length} ký tự !',
                    max: 'Mật khẩu tối đa {length} ký tự !'
                },
                password_confirmation: {
                    required: 'Hãy nhập mật khẩu xác nhận!',
                    confirmed: 'Mật khẩu xác nhận không khớp',
                }
            }
        };
    },
    methods: {
        async register() {
            this.loadingState = true;
            try {
                const response = await this.$services.Auth.register(
                    this.registerCredentials
                );
                this.loadingState = false;
                this.registerCredentials = {
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                };
                this.alertTrigger(
                    'success',
                    'Đăng ký tài khoản thành công',
                    2000
                );
                this.$router.push({ name: 'login' });
            } catch (error) {
                this.registerCredentials = {};
                this.loadingState = false;
                this.$refs.form.reset();
                this.alertTrigger('danger', 'Email này đã tồn tại', 2000);
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
                    this.register();
                }
            });
        }
    }
};
</script>

<style></style>
