Skip to content Search or jump to… Pull requests Issues Marketplace Explore
@DinhPhuocLong DinhPhuocLong / pet-store Private 1 0 0 Code Issues Pull requests
Actions Projects Wiki Security Insights Settings
pet-store/Dashboard/components/SideBar.vue @kebinh1235 kebinh1235 fix Icon
Latest commit 18fda80 yesterday History 2 contributors @kebinh1235@DinhPhuocLong
101 lines (93 sloc) 7.49 KB

<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div
        class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-50"
        id="main-nav"
    >
        <div
            class="w-full h-20 border-b flex px-4 items-center justify-center mb-8"
        >
            <nuxt-link to="/">
                <img
                    src="../static/logo.png"
                    class="w-32 p-2"
                    title="Thương hiệu"
                />
            </nuxt-link>
        </div>

        <div class="mb-4 px-4">
            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 bg-gray-200 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M0 0v19h24v-19h-24zm22 17h-20v-15h20v15zm-6.599 4l2.599 3h-12l2.599-3h6.802zm-1.901-11.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5l.028-.29c.737.271 1.464-.441 1.202-1.186l.27-.024c.828 0 1.5.672 1.5 1.5zm-1.492-3.5c-3.785 0-6.008 3.275-6.008 3.275s2.418 3.725 6.008 3.725c3.866 0 5.992-3.725 5.992-3.725s-2.146-3.275-5.992-3.275zm-.008 6c-1.381 0-2.5-1.119-2.5-2.5 0-1.38 1.119-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5z"
                    />
                </svg>
                <span class="text-gray-700 ml-2">Bảng điều khiển</span>
            </div>
        </div>

        <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">DANH MỤC</p>
            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"
                    />
                </svg>
                <nuxt-link to="/category" class="text-gray-700 ml-2"
                    >Tất cả danh mục</nuxt-link
                >
            </div>

            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg
                    width="20"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                >
                    <path
                        d="M7 16.462l1.526-.723c1.792-.81 2.851-.344 4.349.232 1.716.661 2.365.883 3.077 1.164 1.278.506.688 2.177-.592 1.838-.778-.206-2.812-.795-3.38-.931-.64-.154-.93.602-.323.818 1.106.393 2.663.79 3.494 1.007.831.218 1.295-.145 1.881-.611.906-.72 2.968-2.909 2.968-2.909.842-.799 1.991-.135 1.991.72 0 .23-.083.474-.276.707-2.328 2.793-3.06 3.642-4.568 5.226-.623.655-1.342.974-2.204.974-.442 0-.922-.084-1.443-.25-1.825-.581-4.172-1.313-6.5-1.6v-5.662zm-1 6.538h-4v-8h4v8zm15-11.497l-6.5 3.468v-7.215l6.5-3.345v7.092zm-7.5-3.771v7.216l-6.458-3.445v-7.133l6.458 3.362zm-3.408-5.589l6.526 3.398-2.596 1.336-6.451-3.359 2.521-1.375zm10.381 1.415l-2.766 1.423-6.558-3.415 2.872-1.566 6.452 3.558z"
                    />
                </svg>
                <nuxt-link
                    :to="{ name: 'category', query: { type: 'product' } }"
                    class="text-gray-700 ml-2"
                    >Danh mục sản phẩm</nuxt-link
                >
            </div>

            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M20 12h-12v1h12v-1zm-9 2h-3v1h3v-1zm0 2h-3v1h3v-1zm9-2h-3v1h3v-1zm0 2h-3v1h3v-1zm-4-2h-4v3h4v-3zm6-7v12h-16v-12h16zm2-2h-20v18h20v-18zm-9.832 5.972l-.46-1.941h.505l.24 1.345.27-1.345h.492l.238 1.32.249-1.32h.482l-.501 1.941h-.5l-.238-1.284-.271 1.284h-.506zm-.579-.396h-.78v-.406h.698v-.393h-.698v-.35h.74v-.396h-1.215v1.941h1.255v-.396zm3.257.028c-.149 0-.324-.043-.466-.116l-.024-.013-.098.398.015.008c.102.058.318.119.547.119.581 0 .788-.328.788-.61 0-.272-.161-.458-.507-.586-.254-.096-.338-.145-.338-.247 0-.098.1-.161.254-.161.136 0 .266.03.388.088l.023.011.107-.39-.015-.007c-.145-.065-.311-.098-.495-.098-.442 0-.739.239-.739.593 0 .262.181.458.535.581.227.081.304.144.304.247 0 .117-.102.183-.279.183zm-6.016-.959l.691 1.327h.485v-1.941h-.438v1.189l-.641-1.189h-.536v1.941h.438v-1.327zm11.17-5.645h-19v17h-1v-18h20v1zm-2-2h-19v17h-1v-18h20v1z"
                    />
                </svg>
                <nuxt-link
                    :to="{ name: 'category', query: { type: 'blog' } }"
                    class="text-gray-700 ml-2"
                    >Danh mục tin tức</nuxt-link
                >
            </div>
        </div>

        <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">SẢN PHẨM</p>
            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg
                    width="24"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                >
                    <path
                        d="M23.623 21.679c-.493-.518-1.418-.716-2.01-1.158-.764-.571-.41-1.989.67-3.241-1.332-1.14-2.861-2.807-3.928-4.2l-5.026 4.703c1.144.989 3 3.005 3.928 4.199 1.329-1.037 2.842-1.265 3.366-.412.379.615.537 1.503 1.011 2.004.27.283.631.426.995.426.647 0 1.371-.509 1.371-1.372 0-.34-.125-.682-.377-.949zm-13.122-9.649v11.703l-10.501-5.602v-11.568l10.501 5.467zm1 11.703v-6.142s3.179 2.898 4.098 3.955l-4.098 2.187zm11.442-.772c-.182.173-.473.166-.645-.019-.176-.182-.166-.472.016-.645.184-.175.471-.168.645.017.174.181.168.471-.016.647zm-2.975-5.907c-.443.423-1.478-1.072-1.951-.621-.469.447 1.212 1.67.7 2.157-.395.377-1.135-.649-1.536-.266-.187.178-.005.541.101.845.182.525-.212.877-.789.27-.573-.606-.883-.936-1.53-1.565l3.314-3.158c.467.578.934 1.06 1.553 1.715.252.263.259.508.138.623zm2.033-10.426v9.035c-.852-.826-3.566-4.125-3.566-4.125l.004-3.076 3.562-1.834zm-16.889-3.416l10.609 5.524-4.719 2.428-10.473-5.453 4.583-2.499zm16.362 2.563l-4.664 2.4-10.641-5.54 4.831-2.635 10.474 5.775zm.527.291zm-22-.067l-.001.003v-.002l.001-.001z"
                    />
                </svg>
                <nuxt-link :to="{ name: 'product' }" class="text-gray-700 ml-2"
                    >Quản lý sản phẩm</nuxt-link
                >
            </div>

            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-stars"
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
                        d="M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
                    />
                    <path
                        d="M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
                    />
                    <path
                        d="M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
                    />
                </svg>
                <nuxt-link
                    :to="{ name: 'product-review' }"
                    class="text-gray-700 ml-2"
                    >Quản lý đánh giá</nuxt-link
                >
            </div>
        </div>

        <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">THƯƠNG HIỆU</p>
            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M19.647 15.247c-1.278 0-2.429.551-3.225 1.429l-7.788-3.846c.062-.343.079-.64.067-.942l8.058-4.231c.769.682 1.78 1.097 2.889 1.097 2.404-.001 4.352-1.949 4.352-4.353s-1.948-4.353-4.353-4.353-4.353 1.949-4.353 4.353c0 .18.012.356.033.53l-7.828 4.111c-.793-.829-1.908-1.347-3.146-1.347-2.405 0-4.353 1.949-4.353 4.353s1.948 4.353 4.353 4.353c1.013 0 1.943-.347 2.684-.927l8.26 4.078-.001.047c0 2.404 1.948 4.353 4.353 4.353s4.351-1.949 4.351-4.353-1.948-4.352-4.353-4.352z"
                    />
                </svg>
                <nuxt-link :to="{ name: 'brand' }" class="text-gray-700 ml-2">
                    Quản lý thương hiệu
                </nuxt-link>
            </div>
        </div>

        <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">TIN TỨC</p>
            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"/>
                </svg>
                <nuxt-link :to="{ name: 'blog' }" class="text-gray-700 ml-2">
                    Tất cả tin tức
                </nuxt-link>
            </div>


            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h10.189c3.163 0 9.811 7.223 9.811 9.614v3.887c-.624-.261-1.297-.422-2-.476v-2.569c0-4.106-6-2.456-6-2.456s1.518-6-2.638-6h-7.362v20h9.501c.313.749.765 1.424 1.319 2z"/>
                </svg>
                <nuxt-link :to="{ name: 'add-blog' }" class="text-gray-700 ml-2">
                    Thêm tin tức
                </nuxt-link>
            </div>
        </div>

        <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">NGƯỜI DÙNG</p>
            <div
                class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-users"
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
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <nuxt-link :to="{ name: 'user' }" class="text-gray-700 ml-2">
                    Quản lý người dùng
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
};
</script>
