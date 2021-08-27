<template>
    <!-- header desktop -->
    <header class="w-full hidden lg:block">
        <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto py-4">
            <!-- header top -->
            <div class="flex items-center justify-between pb-8">
                <div class="w-1/4">
                    <!-- logo -->
                    <nuxt-link to="/"
                        ><img
                            class="max-h-28 pr-10"
                            src="../static/logo.png"
                            alt="logo"
                    /></nuxt-link>
                </div>
                <!-- search -->
                <Search />
                <!-- icon right -->
                <div
                    class="w-1/4 flex justify-end items-center gap-5 text-2xl text-black pl-10"
                >
                    <div v-if="!$auth.loggedIn">
                        <nuxt-link to="/dang-nhap">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-login"
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <circle cx="12" cy="7" r="4" />
                                <path
                                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                                />
                                <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                            </svg>
                        </nuxt-link>
                    </div>
                    <div v-else class="relative">
                        <button
                            @click="profileDropDown = !profileDropDown"
                            class="block h-7 w-7 rounded-full overflow-hidden focus:outline-none"
                        >
                            <img
                                class="h-full w-full border-black object-cover"
                                :src="
                                    $auth.user.path_img
                                        ? $auth.user.path_img
                                        : 'https://www.pngkey.com/png/detail/230-2301779_best-classified-apps-default-user-profile.png'
                                "
                                alt="avatar"
                            />
                        </button>

                        <div
                            v-if="profileDropDown"
                            class="absolute text-base right-0 w-32 mt-2 py-2 bg-white border rounded shadow-xl"
                        >
                            <nuxt-link
                                to="/profile"
                                href="#"
                                class="transition-colors duration-200 block px-4 py-1 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                                >Profile</nuxt-link
                            >
                            <div class="py-2">
                                <hr />
                            </div>
                            <span
                                @click="logout()"
                                class="transition-colors duration-200 block px-4 py-1 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                            >
                                Logout
                            </span>
                        </div>
                    </div>
                    <div>
                        <nuxt-link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-heart"
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path
                                    d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                                />
                            </svg>
                        </nuxt-link>
                    </div>
                    <nuxt-link to="/gio-hang" class="shopping-cart relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-shopping-cart"
                            width="27"
                            height="27"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                        <span
                            class="inline-block nav-color w-5 h-5 leading-5 absolute rounded-full font-sans text-white text-xs text-center -top-2 -right-3"
                        >
                            {{ cart.length }}
                        </span>
                    </nuxt-link>
                </div>
            </div>
            <!-- header bottom -->
            <div
                class="flex items-center justify-between nav-color rounded-full py-3"
            >
                <!-- nav menu-->
                <DropdownMenu :category="category" />
                <div
                    class="w-auto text-white font-semibold text-md leading-none pr-4"
                >
                    <span>Miễn phí giao hàng cho đơn hàng > 100k</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        data() {
            return {
                profileDropDown: false
            };
        },
        ...mapState({
            category: state => {
                return state.category.category;
            },
            cart: state => state.cart.cart
        })
    },
    methods: {
        async logout() {
            try {
                await this.$auth.logout();
                this.$router.push({ name: 'home-page' });
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped>
.nav-color {
    background-color: #ed6436 !important;
}
</style>
