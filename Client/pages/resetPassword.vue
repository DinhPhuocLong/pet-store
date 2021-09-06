<template>
    <div class="w-full lg:max-w-[1440px] mx-auto px-4 my-10">
        <div
            class="w-full p-4 h-auto bg-no-repeat bg-center bg-cover"
            style="background-image: url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-animal-pet-background-material-image_164004.jpg')"
        >
            <div class="flex items-center flex-wrap justify-between">
                <div class="w-full lg:w-1/2"></div>
                <div class="w-full lg:w-1/2 py-10 lg:px-20">
                    <form class="bg-white shadow-md p-4 lg:p-8 rounded-md">
                        <div class="my-2">
                            <p class="font-bold text-[20px]">
                                Đổi lại mật khẩu
                            </p>
                        </div>
                        <div class="my-2">
                            <input
                                class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                type="password"
                                placeholder="Mật khẩu mới..."
                                v-model="password"
                            />
                            <input
                                class="w-full my-2 p-2 border border-gray-400 rounded-md"
                                type="password"
                                placeholder="Xác nhận mật khẩu mới..."
                                v-model="password_confirmation"
                            />
                            <button
                                @click.prevent="resetPassword()"
                                class="w-full flex justify-center my-2 p-2 bg-red-300 hover:bg-red-500 text-white rounded-md transition-all duration-500"
                            >
                                <svg v-if="loadingState"
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            password_confirmation: '',
            loadingState: false,
        };
    },
    methods: {
        async resetPassword() {
            const token = this.$route.query.token;
            try {
                await this.$axios.post(
                    process.env.BASE_URL + '/reset-password/' + token,
                    {
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    }
                );
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style></style>
