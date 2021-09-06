<template>
    <div class="mt-20 w-full">
        <h1 class="font-semibold text-3xl text-center mb-10">
            Ưu đãi tốt
        </h1>
        <client-only>
            <div uk-slider class="relative">
                <ul
                    class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-5@m"
                >
                    <div
                        class="border border-solid border-[#ebebeb] rounded-md"
                        v-for="saleProduct in saleProducts"
                        :key="saleProduct.id"
                    >
                        <div class="relative product-img">
                            <nuxt-link
                                :to="{
                                    name: 'product-detail',
                                    params: { slug: saleProduct.slug }
                                }"
                            >
                                <img
                                    v-lazy="
                                        saleProduct.product_images.length
                                            ? saleProduct.product_images[0]
                                                  .imageUrl
                                            : ''
                                    "
                                    class="mx-auto"
                                    width="450"
                                    height="450"
                                    :alt="saleProduct.name"
                                    style="padding: 35px;"
                                />
                                <!-- product buttons -->
                                <div
                                    class="flex flex-col text-center absolute bottom-2 right-2"
                                >
                                    <nuxt-link
                                        :to="{
                                            name: 'product-detail',
                                            params: { slug: saleProduct.slug }
                                        }"
                                        class="p-2 inline-block text-center w-10 h-10 leading-10 bg-white
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons opacity-0 focus:outline-none"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-arrow-narrow-right focus:outline-none"
                                            width="22"
                                            height="22"
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
                                            <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                            />
                                            <line
                                                x1="15"
                                                y1="16"
                                                x2="19"
                                                y2="12"
                                            />
                                            <line
                                                x1="15"
                                                y1="8"
                                                x2="19"
                                                y2="12"
                                            />
                                        </svg>
                                    </nuxt-link>
                                    <button
                                        @click.prevent="addToCart(saleProduct)"
                                        class="p-2 inline-block text-center w-10 h-10 leading-10 bg-white
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons opacity-0 focus:outline-none"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-shopping-cart-plus focus:outline-none"
                                            width="22"
                                            height="22"
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
                                            <circle cx="6" cy="19" r="2" />
                                            <circle cx="17" cy="19" r="2" />
                                            <path d="M17 17h-11v-14h-2" />
                                            <path
                                                d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"
                                            />
                                            <path d="M15 6h6m-3 -3v6" />
                                        </svg>
                                    </button>
                                </div>
                            </nuxt-link>
                            <!-- sale -->
                            <div
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2"
                            >
                                -{{ saleProduct.salePrice | percentage }}
                            </div>
                            <!-- tag -->
                        </div>
                        <div
                            class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center"
                        >
                            <!-- star -->
                            <div class="flex justify-center items-center my-2">
                                <star-rating
                                    :rating="countingStar(saleProduct.reviews)"
                                    :read-only="true"
                                    :star-size="20"
                                    :show-rating="false"
                                    :increment="0.01"
                                >
                                </star-rating>
                                <span class="text-xs text-gray-400">({{ saleProduct.reviews.length }})</span>
                            </div>
                            <p class="truncate px-8">
                                <nuxt-link
                                    :to="{
                                        name: 'product-detail',
                                        params: { slug: saleProduct.slug }
                                    }"
                                    class="hover:text-red-500 overflow-truncate"
                                    href="#"
                                    >{{ saleProduct.name }}</nuxt-link
                                >
                            </p>
                            <span
                                class="inline-block text-red-500 text-md mt-2"
                                >{{ saleProduct.price | toVndCurrency }}</span
                            >
                        </div>
                    </div>
                </ul>
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
    </div>
</template>

<script>
export default {
    props: ['saleProducts'],
    methods: {
        addToCart(product) {
            this.$store.dispatch('cart/addToCart', {
                ...product,
                quantity: 1
            });
        },
        countingStar(reviews) {
            return (
                reviews.reduce((acc, curr) => acc + curr.rate, 0) /
                reviews.length
            );
        },
    }
};
</script>

<style scoped>
.product-img:hover .product-buttons {
    opacity: 1 !important;
    transform: translateX(0) !important;
}
</style>
