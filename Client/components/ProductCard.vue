<template>
    <div>
        <div class="w-full box-border">
            <div
                class="relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden"
            >
                <nuxt-link
                    :to="{
                        name: 'product-detail',
                        params: { slug: product.slug }
                    }"
                >
                    <img
                        v-lazy="
                            product.product_images.length
                                ? product.product_images[0].imageUrl
                                : ''
                        "
                        class="mx-auto p-9"
                        width="450"
                        height="450"
                        :alt="product.name"
                    />

                    <!-- product buttons -->
                    <div
                        class="flex flex-col text-center absolute bottom-2 right-1"
                    >
                        <a
                            href="#"
                            class="iline-block text-center w-8 h-8 md:w-10 md:h-10 leading-8 md:leading-10
                                        border border-solid border-gray-300 mb-2 rounded-full
                                        transform translate-x-12 transition-all duration-300
                                        hover:text-white hover:bg-red-500
                                        opacity-0 product-buttons"
                        >
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </a>
                        <button
                            class="iline-block text-center w-8 h-8 md:w-10 md:h-10 leading-8 md:leading-10
                                        transform translate-x-12 transition-all duration-400
                                        hover:text-white hover:bg-red-500
                                        opacity-1 product-buttons
                                        border border-solid border-gray-300 mb-2 rounded-full"
                        >
                            <i class="far fa-heart focus:outline-none"></i>
                        </button>
                        <button
                            class="iline-block text-center w-10 h-10 leading-10 
                                        border border-solid border-gray-300 mb-2 rounded-full
                                        transform translate-x-12 transition-all duration-500
                                        hover:text-white hover:bg-red-500
                                        opacity-0 product-buttons hidden"
                        >
                            <i
                                class="fas fa-shopping-cart focus:outline-none"
                            ></i>
                        </button>
                    </div>
                </nuxt-link>
                <!-- sale -->
                <div
                    v-if="+product.salePrice"
                    class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2"
                >
                    -{{ product.salePrice | percentage }}
                </div>
                <!-- tag -->
            </div>
            <div class="py-4 text-[16px] font-bold text-center">
                <!-- star -->
                <div class="flex justify-center my-2">
                    <star-rating
                        :rating="countingStar(product.reviews)"
                        :read-only="true"
                        :star-size="20"
                        :show-rating="false"
                        :increment="0.01"
                    >
                    </star-rating>
                    <span class="text-xs text-gray-400">(1)</span>
                </div>
                <p class="mb-2">
                    <nuxt-link
                        class="hover:text-red-500"
                        :to="{
                            name: 'product-detail',
                            params: { slug: product.slug }
                        }"
                    >
                        {{ product.name }}
                    </nuxt-link>
                </p>
                <span class="text-red-600">{{
                    calculateSalePrice(product) | toVndCurrency
                }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        countingStar(reviews) {
            return (
                reviews.reduce((acc, curr) => acc + curr.rate, 0) /
                reviews.length
            );
        },
        calculateSalePrice(product) {
            return product.price - (product.salePrice / 100) * product.price;
        }
    }
};
</script>

<style></style>
