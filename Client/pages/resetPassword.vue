<template>
    <div class="w-full lg:max-w-[1440px] mx-auto px-4 my-10">
        <div
            class="w-full p-4 h-auto bg-no-repeat bg-center bg-cover"
            style="background-image: url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-animal-pet-background-material-image_164004.jpg')"
        >
            <div class="flex items-center flex-wrap justify-between">
                <div class="w-full lg:w-1/2"></div>
                <div class="w-full lg:w-1/2 py-10 lg:px-20">
                    <ValidationObserver
                        ref="form"
                        @key.enter="onSubmit()"
                        @submit.prevent="onSubmit()"
                    >
                        <form class="bg-white shadow-md p-4 lg:p-8 rounded-md">
                            <div class="my-2">
                                <p class="font-bold text-[20px]">
                                    Đổi lại mật khẩu
                                </p>
                            </div>
                            <div class="my-2">
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
                                        placeholder="Mật khẩu mới..."
                                        v-model="password"
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
                                        placeholder="Xác nhận mật khẩu mới..."
                                        v-model="password_confirmation"
                                        :class="{
                                            'border-red-600': errors[0]
                                        }"
                                    />
                                    <p class="text-xs italic text-red-500">
                                        {{ errors[0] }}
                                    </p>
                                </ValidationProvider>

                                <button
                                    @click.prevent="resetPassword()"
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
                                    <span v-else>
                                        Xác nhận
                                    </span>
                                </button>
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
    components: {
        ValidationProvider,
        ValidationObserver,
        Alert
    },
    data() {
        return {
            
            password: '',
            password_confirmation: '',
            loadingState: false,
            customErrorMessages: {
                password: {
                    required: 'Hãy nhập mật khẩu của bạn!',
                    min: 'Mật khẩu tối thiểu {length} ký tự !',
                    max: 'Mật khẩu tối đa {length} ký tự !'
                },
                password_confirmation: {
                    required: 'Hãy nhập mật khẩu xác nhận!',
                    confirmed: 'Mật khẩu xác nhận không khớp'
                }
            }
        };
    },
    methods: {
        async resetPassword() {
            const token = this.$route.query.token;
            try {
                this.loadingState = true;
                await this.$axios.post(
                    process.env.BASE_URL + '/reset-password/' + token,
                    {
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    }
                );
                this.loadingState = false;
                alertTrigger('success', 'Đặt lại mật khẩu thành công', 2000);
                this.$router.push({ name: login });
            } catch (error) {
                this.loadingState = false;
                console.log(error);
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
                    this.resetPassword();
                }
            });
        }
    }
};
</script>

<style></style>
