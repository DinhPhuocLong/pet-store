<template>
    <div class="sticky top-0 z-40">
        <div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">

            <!-- left navbar -->
            <div class="flex">
                <p>Chào mừng {{ $auth.user.name }}!</p>
                <!-- mobile hamburger -->
                <div class="inline-block lg:hidden flex items-center mr-4">
                    <button class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
                        @click="toggleSidebar()">
                        <svg class="h-5 w-5" v-bind:style="{ fill: 'black' }" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- right navbar -->
            <div class="flex items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
                    class="fill-current mr-3 hover:text-blue-500">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                </svg>
                <template v-if="!$auth.user.path_img">
                    <img src="../static/profile_image.jpg"
                    class="w-12 h-12 rounded-full shadow-lg" @click="dropDownOpen = !dropDownOpen">
                </template>
                <template v-else>
                    <img :src="$auth.user.imageUrl"
                    class="w-12 h-12 rounded-full shadow-lg" @click="dropDownOpen = !dropDownOpen">
                </template>

            </div>

        </div>

        <!-- dropdown menu -->
        <div class="absolute bg-gray-100 border border-t-0 shadow-xl text-gray-700 rounded-b-lg w-48 -bottom-32 right-0 mr-6"
            :class="dropDownOpen ? '' : 'hidden'">
            <a href="#" class="block px-4 py-2 hover:bg-gray-200">Tài Khoản</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-200">Cài đặt</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-200" @click.prevent="logout();">Đăng Xuất</a>
        </div>
        <!-- dropdown menu end -->

    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Navbar',
        computed: {
            ...mapState(['sideBarOpen', 'user'])
        },
        data() {
            return {
                dropDownOpen: false
            }
        },
        methods: {
            toggleSidebar() {
                this.$store.dispatch('toggleSidebar');
            },
            async logout() {
                try {
                    await this.$auth.logout();
                    // Message({
                    //     type: 'success',
                    //     message: 'Đã đăng xuất thành công'
                    // });
                    this.$router.push({ name: 'login'});

                } catch (error) {
                    // Message({
                    //     type: 'error',
                    //     message: 'Đã xảy ra lỗi'
                    // });
                }
                
            }
        }
    }
</script>