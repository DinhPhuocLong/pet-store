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
                                    rules="required"
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
                                    rules="required"
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
                                    rules="required"
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
                                    rules="required"
                                    :custom-messages="
                                        customErrorMessages.password_confirm
                                    "
                                    v-slot="{ errors }"
                                >
                                    <input
                                        class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                        type="password"
                                        placeholder="Xác Nhận Mật khẩu..."
                                        v-model="
                                            registerCredentials.password_confirm
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
                                    Đăng ký
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
                password_confirm: ''
            },
            customErrorMessages: {
                username: { required: 'Hãy nhập tên người dùng!' },
                email: { required: 'Hãy nhập email của bạn!' },
                password: { required: 'Hãy nhập mật khẩu của bạn!' },
                password_confirm: { required: 'Hãy nhập mật khẩu xác nhận!' }
            }
        };
    },
    methods: {
        async register() {
            try {
                const response = await this.$services.Auth.register(
                    this.registerCredentials
                );
                this.registerCredentials = {
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    password_confirm: ''
                };
                this.$router.push({ name: 'login' })
            } catch (error) {
                console.log(`lỗi`);
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
