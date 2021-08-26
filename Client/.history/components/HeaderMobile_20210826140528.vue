<template>
    <div>
        <div
            class="w-[94%] xl:w-11/12 mx-auto py-4 flex justify-between font-bold"
        >
            <!--Navbar Menu Mobile-->
            <button class="toggle-open-menu focus:outline-none" @click="mobileMenu = !mobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" fill="red"/>
                </svg>
            </button>
            <!--Navbar Menu Mobile Items-->
            <div
                class="toggle-menu-items fixed top-0 left-0 bg-white shadow-md w-60 h-full animate-OpenMenuMobile"
                style="display:none; z-index: 9999;"
            >
                <div class="p-3 flex justify-end font-bold bg-red-500">
                    <button
                        @click="mobileMenu = false"
                        class="toggle-close-menu text-white focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <div>
                    <ul>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <a href="#">Trang chủ</a>
                        </li>
                        <li
                            class="toggle-menu-items-link p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500 flex items-center justify-between"
                        >
                            <a href="/danh-muc/san-pham-thu-y">Sản phẩm thú y</a>
                            <button
                                class="toggle-menu-items-link-btn focus:outline-none"
                            >
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </li>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <a href="/danh-muc/san-pham-cho-cho">Sản phẩm cho chó</a>
                        </li>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <a href="/danh-muc/san-pham-cho-meo">Sản phẩm cho mèo</a>
                        </li>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <nuxt-link to="/tin-tuc">Tin tức</nuxt-link>
                        </li>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <nuxt-link to="/gioi-thieu">Giới thiệu</nuxt-link>
                        </li>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <nuxt-link to="/lien-he">Liên hệ</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!--Navbar logo-->
            <nuxt-link to="/">
                <img
                    class="max-h-20"
                    src="../static/logo.png"
                    alt="logo"
                />
            </nuxt-link>
            <!--Navbar shopping cart-->
            <div class="flex items-center gap-2">
                <i class="fas fa-stream"></i>
                <div class="shopping-cart relative mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" fill="red"/>
                    </svg>
                    <!-- <i class="fas fa-shopping-bag text-white text-xl relative"></i> -->
                    <span
                        class="flex w-4 h-4 text-xs font-arial rounded-full items-center justify-center absolute -top-2 -right-2"
                        :class="badgeBg"
                        >0</span
                    >
                </div>
            </div>
        </div>
        <!-- header mobile fixed bottom -->
        <div
            class="lg:hidden w-full fixed z-50 bottom-0 text-lg bg-white"
            style="box-shadow: 0 1px 12px 2px hsl(0deg 0% 56% / 30%);"
        >
            <div
                class="w-[94%] xl:w-11/12 mx-auto grid grid-cols-4 text-center py-3"
            >
                <div class="">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block icon icon-tabler icon-tabler-building-store"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <path
                                d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"
                            />
                            <line x1="5" y1="21" x2="5" y2="10.85" />
                            <line x1="19" y1="21" x2="19" y2="10.85" />
                            <path
                                d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"
                            />
                        </svg>
                    </a>
                </div>
                <div class="">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block icon icon-tabler icon-tabler-user"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="7" r="4" />
                            <path
                                d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                            />
                        </svg>
                    </a>
                </div>
                <div class="">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block icon icon-tabler icon-tabler-search"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </a>
                </div>
                <div class="">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block icon icon-tabler icon-tabler-heart"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["iconColor", "badgeBg"],
    data() {
        return {
            mobileMenu: false,
        }
    }
}
</script>

<style>
.nav-color {
    background-color: #ed6436 !important;
}
</style>
