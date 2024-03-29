<template>
    <div class="font-mono bg-gray-400 h-screen">
        <!-- Container -->
        <Alert
            :visible="alert.isVisible"
            :message="alert.message"
            :alertType="alert.type"
        />
        <div class="container mx-auto">
            <div class="flex justify-center px-6">
                <!-- Row -->
                <div class="w-full xl:w-3/4 lg:w-11/12 flex mt-32">
                    <!-- Col -->
                    <div
                        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                        style="background-image: url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"
                    ></div>
                    <!-- Col -->
                    <div
                        class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none"
                    >
                        <h3 class="pt-4 text-2xl text-center">Đăng nhập</h3>
                        <ValidationObserver ref="form">
                            <form
                                @submit.prevent="onSubmit()"
                                @keyup.enter="onSubmit()"
                                class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                            >
                                <div class="mb-4">
                                    <label
                                        class="block mb-2 text-sm font-bold text-gray-700"
                                        for="username"
                                    >
                                        Email
                                    </label>
                                    <ValidationProvider
                                        rules="required|isValidateEmail"
                                        :custom-messages="
                                            customErrorMessages.email
                                        "
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            id="field"
                                            name="field"
                                            class="w-full px-3 py-2  mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Email"
                                            v-model="credentials.email"
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                        />
                                        <p class="text-xs italic text-red-500">
                                            {{ errors[0] }}
                                        </p>
                                    </ValidationProvider>
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block mb-2 text-sm font-bold text-gray-700"
                                        for="password"
                                    >
                                        Mật khẩu
                                    </label>
                                    <ValidationProvider
                                        rules="required"
                                        :custom-messages="
                                            customErrorMessages.password
                                        "
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            name="email"
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            v-model="credentials.password"
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                        />
                                        <p class="text-xs italic text-red-500">
                                            {{ errors[0] }}
                                        </p>
                                    </ValidationProvider>
                                </div>
                                <div class="mb-4">
                                    <input
                                        class="mr-2 leading-tight"
                                        type="checkbox"
                                        id="checkbox_id"
                                    />
                                    <label class="text-sm" for="checkbox_id">
                                        Lưu đăng nhập
                                    </label>
                                </div>
                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Đăng nhập
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./forgot-password.html"
                                    >
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Alert from '../components/UIcomponents/Alert.vue';

export default {
    layout: 'login',
    middleware: ['authenticated'],
    components: {
        ValidationProvider,
        ValidationObserver,
        Alert
    },
    data() {
        return {
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
                const response = await this.$auth.loginWith('laravelJWT', {
                    data: this.credentials
                });
                if (!response.data.level) {
                    this.logout();
                    this.$router.push({ name: 'unauthorized' });
                } else {
                    this.alertTrigger('success', 'Đăng nhập thành công', 2000);
                    this.$router.push({ name: 'dashboard' });
                }
            } catch (error) {
                this.alertTrigger('danger', error.response.data.error, 2000);
            }
        },
        async logout() {
            await this.$auth.logout();
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
