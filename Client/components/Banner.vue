<template>
    <div>
        <client-only>
            <div
                uk-slider="animation: push; autoplay: true"
                class="rounded-lg overflow-hidden relative"
            >
                <div class="uk-slider-items">
                    <div
                        v-for="blog in saleBlogs"
                        :key="blog.id"
                        class="w-full h-[250px] ip6:h-[293px] md:h-[480px] lg:h-[580px] rounded-lg overflow-hidden"
                    >
                        <nuxt-link :to="{ name: 'blog-detail', params: { slug: blog.slug } }">
                            <img
                                class="w-full h-full object-cover"
                                :src="blog.thumbnailUrl"
                                height="590"
                                alt=""
                            />
                        </nuxt-link>
                        <div
                            class="absolute px-4 top-20 left-3 md:top-40 md:right-1/2 lg:text-center"
                        >
                            <!-- <p
                                class="uppercase text-[8px] md:text-[14px] font-normal text-gray-700"
                            >
                                Everything your pet need
                            </p>
                            <p
                                class="font-bold text-[24px] md:text-[52px] text-yellow-800 leading-6 md:leading-none"
                            >
                                Health & <br />
                                Wellness Services
                            </p>
                            <button
                                class="my-2 text-[16px] font-bold py-2 px-8 bg-yellow-800 text-white hover:bg-red-500 rounded-full"
                            >
                                shop now
                            </button> -->
                        </div>
                    </div>
                </div>
                <a
                    class="absolute left-2 top-2/4"
                    href="#"
                    uk-slidenav-previous
                    uk-slider-item="previous"
                ></a>
                <a
                    class="absolute right-2 top-2/4"
                    href="#"
                    uk-slidenav-next
                    uk-slider-item="next"
                ></a>
            </div>
        </client-only>
        <div class="w-full md:flex gap-4 mt-4">
            <div class="md:w-2/6 rounded-lg overflow-hidden mt-4 relative">
                <nuxt-link
                    :to="{
                        name: 'shop-by-category',
                        params: { slug: 'shop-cho-cho' }
                    }"
                >
                    <img
                        class="mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-7.jpg"
                        width="100%"
                        alt=""
                        style="max-height: 380px;"
                    />
                    <div class="absolute bottom-5 left-3 md:bottom-8 md:left-6">
                        <p
                            class="text-[25px] xl:text-[34px] text-yellow-800 leading-7 md:leading-10 my-2 font-bold"
                        >
                            Sản phẩm <br />
                            cho chó
                        </p>
                        <button
                            class="text-[16px] font-bold py-2 px-8 bg-yellow-800 text-white hover:bg-red-500 rounded-full"
                        >
                            Mua Ngay
                        </button>
                    </div>
                </nuxt-link>
            </div>
            <div class="md:w-2/6 rounded-lg overflow-hidden mt-4 relative">
                <nuxt-link
                    :to="{
                        name: 'shop-by-category',
                        params: { slug: 'shop-cho-meo' }
                    }"
                >
                    <img
                        class="mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-8.jpg"
                        width="100%"
                        alt=""
                        style="max-height: 380px;"
                    />
                    <div class="absolute bottom-5 left-3 md:bottom-8 md:left-6">
                        <p
                            class="text-[25px] xl:text-[34px] text-purple-900 leading-7 md:leading-10 my-2 font-bold"
                        >
                            Sản phẩm <br />
                            cho mèo
                        </p>
                        <button
                            class="text-[16px] font-bold py-2 px-8 bg-purple-900 text-white hover:bg-red-500 rounded-full"
                        >
                            Mua Ngay
                        </button>
                    </div>
                </nuxt-link>
            </div>

            <div class="md:w-2/6 rounded-lg overflow-hidden mt-4 relative">
                <nuxt-link
                    :to="{
                        name: 'shop-by-category',
                        params: { slug: 'shop-thu-y' }
                    }"
                >
                    <img
                        class="mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-9.jpg"
                        width="100%"
                        alt=""
                        style="max-height: 380px;"
                    />
                    <div class="absolute bottom-5 left-3 md:bottom-8 md:left-6">
                        <p
                            class="text-[25px] xl:text-[34px] text-blue-800 leading-7 md:leading-10 my-2 font-bold"
                        >
                            Chăm sóc<br />
                            sức khoẻ
                        </p>
                        <button
                            class="text-[16px] font-bold py-2 px-8 bg-blue-800 text-white hover:bg-red-500 rounded-full"
                        >
                            Mua Ngay
                        </button>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['saleBlogs']
};
</script>

<style></style>
