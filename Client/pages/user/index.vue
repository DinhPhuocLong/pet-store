<template>
    <!-- <div class="w-full">
        <div
            class="flex justify-center items-center bg-center bg-cover bg-no-repeat py-9"
            style="background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg')"
        >
            <div class="w-28 relative">
                <img
                    class="w-full"
                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    alt=""
                />
                <div
                    class="absolute bottom-0 right-0 bg-red-500 rounded-full p-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        />
                        <path
                            d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        />
                        <line x1="16" y1="5" x2="19" y2="8" />
                    </svg>
                </div>
                <p class="text-center">K Bình</p>
            </div>
        </div>
        <div class="bg-gray-200">
            <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto p-4">
                <div
                    class="w-full bg-white shadow-md px-4 py-20 flex flex-wrap"
                >
                    <div class="w-full lg:w-1/5 border-r">
                        <div>
                            <ul>
                                <li class="p-2 border-b">
                                    <nuxt-link
                                        to="/profile"
                                        class="hover:text-blue-500 transition duration-500">
                                        Thông tin cá nhân
                                    </nuxt-link>
                                </li>
                                <li class="p-2 border-b">
                                    <nuxt-link
                                        to="/profile/change-password"
                                        class="hover:text-blue-500 transition duration-500">
                                        Thay đổi mật khẩu
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full lg:w-4/5 lg:pl-8">
                        <nuxt-child />
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <div class="w-full">
        <div
            class="flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat py-9"
            :style="{
                backgroundImage: `url(${require('@/static/profile-background.jpeg')})`
            }"
        >
            <div class="w-24 h-24 rounded-full overflow-hidden relative">
                <img
                    v-if="!$auth.user.path_img"
                    class="w-full h-full object-cover"
                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    alt=""
                />
                <img
                    v-else
                    class="w-full h-full object-cover"
                    :src="$auth.user.imageUrl"
                    :alt="'ảnh đại diện của ' + $auth.user.name"
                />
                <input
                    type="file"
                    class="hidden"
                    ref="userImageInput"
                    @change="onImageChange"
                />
                <button @click="uploadImage()">trigger</button>
                <div class="absolute bottom-0 right-0">
                    <button
                        @click="changeProfileImage()"
                        class="bg-red-500 rounded-full p-1 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-edit"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                            />
                            <path
                                d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                            />
                            <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                    </button>
                </div>
            </div>
            <p class="text-center font-bold">K Bình</p>
        </div>

        <div style="background: #c5c5c524">
            <div
                class="w-[94%] xl:w-11/12 max-w-[980px] mx-auto p-4 relative -top-10"
            >
                <div
                    class="w-full bg-white shadow-md px-4 pt-4 pb-20 flex flex-wrap rounded-md"
                >
                    <div class="w-full lg:w-1/5 lg:border-r">
                        <div class="pb-6 lg:pb-0">
                            <ul class="text-[14px] ">
                                <li class="p-2 border-b hover:bg-gray-100">
                                    <span>
                                        <svg
                                            class="inline mr-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M12 2c3.032 0 5.5 2.467 5.5 5.5 0 1.458-.483 3.196-3.248 5.59 4.111 1.961 6.602 5.253 7.482 8.909h-19.486c.955-4.188 4.005-7.399 7.519-8.889-1.601-1.287-3.267-3.323-3.267-5.61 0-3.033 2.468-5.5 5.5-5.5zm0-2c-4.142 0-7.5 3.357-7.5 7.5 0 2.012.797 3.834 2.086 5.182-5.03 3.009-6.586 8.501-6.586 11.318h24c0-2.791-1.657-8.28-6.59-11.314 1.292-1.348 2.09-3.172 2.09-5.186 0-4.143-3.358-7.5-7.5-7.5z"
                                            />
                                        </svg>
                                    </span>
                                    <nuxt-link
                                        class="hover:text-red-500 transition duration-500"
                                        to="/profile"
                                    >
                                        Thông tin cá nhân
                                    </nuxt-link>
                                </li>
                                <li class="p-2 border-b hover:bg-gray-100">
                                    <span>
                                        <svg
                                            class="inline mr-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
                                            />
                                        </svg>
                                    </span>
                                    <nuxt-link
                                        class="hover:text-red-500 transition duration-500"
                                        to="/profile/change-password"
                                    >
                                        Thay đổi mật khẩu
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full lg:w-4/5 lg:pl-8">
                        <nuxt-child />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: ''
        };
    },
    methods: {
        async uploadImage() {
            try {
                let formData = new FormData();
                formData.append('image', this.image);
                formData.append('_method', 'PUT');
                const response = await this.$axios.post(
                    process.env.BASE_URL  + '/user',
                    formData
                );
                this.$auth.setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        },
        changeProfileImage() {
            this.$refs.userImageInput.click();
        },
        onImageChange($event) {
            this.image = $event.target.files[0];
            this.uploadImage();
        }
    }
};
</script>

<style></style>
