<template>
    <div>
        <zoom-image
            :visible="isZoomImage"
            :image="zoomImage"
            v-on:closeZoom="isZoomImage = false"
        ></zoom-image>
        <div class="w-full mt-12">
            <div
                class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto lg:flex gap-x-8 lg:border-b border-solid border-gray-300 pb-20"
            >
                <div class="lg:w-1/2">
                    <div
                        class="border border-solid border-gray-300 rounded-lg overflow-hidden relative py-12"
                    >
                        <img class="p-2 mx-auto" :src="activeImage" alt="" />
                        <div
                            class="absolute top-4 right-4 border border-solid border-gray-300 rounded-full p-1"
                        >
                            <svg
                                @click="imageZoom(activeImage)"
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-arrows-diagonal"
                                width="24"
                                height="24"
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
                                <polyline points="16 4 20 4 20 8" />
                                <line x1="14" y1="10" x2="20" y2="4" />
                                <polyline points="8 20 4 20 4 16" />
                                <line x1="4" y1="20" x2="10" y2="14" />
                            </svg>
                        </div>
                    </div>

                    <div class="grid grid-cols-4 gap-x-4 mt-4">
                        <div
                            v-for="(image, index) in product.product_images"
                            :key="index"
                            class="border border-solid border-black rounded-lg overflow-hidden"
                        >
                            <img
                                @click="changeActiveImage(image.imageUrl)"
                                :src="image.imageUrl"
                                :alt="image.name"
                            />
                        </div>
                    </div>
                </div>

                <div class="lg:w-1/2">
                    <!-- <ul
                        class="breadcum font-normal text-base text-gray-500 mt-4"
                    >
                        <li class="inline-block"><a href="#">Home</a></li>
                        <span
                            class="mx-1 inline-block"
                            style="vertical-align: middle;"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-chevron-right"
                                width="16"
                                height="16"
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
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </span>
                        <li class="inline-block"><a href="#">Shop</a></li>
                        <span
                            class="mx-1 inline-block"
                            style="vertical-align: middle;"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-chevron-right"
                                width="16"
                                height="16"
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
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </span>
                        <li class="inline text-black">
                            this text is fucking long, so it break to under line
                        </li>
                    </ul> -->
                    <h1 class="text-3xl font-semibold break-words leading-12">
                        {{ product.name }}
                    </h1>

                    <div class="flex gap-4 mt-4">
                        <span
                            class="line-through text-gray-400 text-lg font-semibold"
                            v-if="+product.salePrice"
                            >{{ product.price | toVndCurrency }}</span
                        >
                        <span class="text-xl font-semibold">{{
                            calculateSalePrice | toVndCurrency
                        }}</span>
                        <div
                            class="onsale text-center"
                            v-if="+product.salePrice"
                        >
                            <span class="pl-4 text-sm font-semibold">
                                {{ product.salePrice | percentage }}
                            </span>
                        </div>
                    </div>
                    <div>
                        <div
                            class="text-base text-gray-500"
                            v-html="product.description"
                        ></div>

                        <!-- <div class="flex flex-col items-start gap-x-2 mt-10">
                        <div class="flex gap-x-2">
                            <i class="bi bi-clock-history text-red-500 text-2xl"></i>
                            <h2 class="text-red-500 font-semibold text-[22px] relative">
                                Hurry up ! Deal ends in :
                            </h2>
                        </div>
                        <div class="grid grid-cols-4 gap-x-4 mt-4">
                            <div class="flex items-center flex-col">
                                <div class="w-[60px] h-[60px] border-2 border-solid border-red-500 rounded-full text-center leading-14 
                                    text-xl text-black font-bold">
                                    235
                                </div>
                                <span class="text-sm mt-3 font-bold">Days</span>
                            </div>
        
                            <div class="flex items-center flex-col">
                                <div class="w-[60px] h-[60px] border-2 border-solid border-red-500 rounded-full text-center leading-14 
                                    text-xl text-black font-bold">
                                    235
                                </div>
                                <span class="text-sm mt-3 font-bold">Hours</span>
                            </div>
        
                            <div class="flex items-center flex-col">
                                <div class="w-[60px] h-[60px] border-2 border-solid border-red-500 rounded-full text-center leading-14 
                                    text-xl text-black font-bold">
                                    235
                                </div>
                                <span class="text-sm mt-3 font-bold">Minutes</span>
                            </div>
        
                            <div class="flex items-center flex-col">
                                <div class="w-[60px] h-[60px] border-2 border-solid border-red-500 rounded-full text-center leading-14 
                                    text-xl text-black font-bold">
                                    235
                                </div>
                                <span class="text-sm mt-3 font-bold">Seconds</span>
                            </div>
                        </div>
                    </div> -->

                        <div class="border-b border-solid border-gray-300 pb-8">
                            <form
                                class="flex flex-wrap [480]:flex-nowrap w-full mt-4 items-center gap-x-2"
                            >
                                <div
                                    class="flex gap-x-2 w-full"
                                    style="flex: 1 0 calc(50% + 65px);"
                                >
                                    <div
                                        class="w-32 h-12 flex items-center border-2 border-gray-400 rounded-full"
                                    >
                                        <button
                                            class="focus:outline-none ml-3"
                                            @click.prevent="increaseQuantity()"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-plus"
                                                width="20"
                                                height="20"
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
                                                    x1="12"
                                                    y1="5"
                                                    x2="12"
                                                    y2="19"
                                                />
                                                <line
                                                    x1="5"
                                                    y1="12"
                                                    x2="19"
                                                    y2="12"
                                                />
                                            </svg>
                                        </button>
                                        <input
                                            class="w-full text-center focus:outline-none"
                                            type="number"
                                            v-model="quantity"
                                            placeholder="1"
                                        />
                                        <button
                                            class="focus:outline-none mr-3"
                                            @click.prevent="decreaseQuantity()"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-minus"
                                                width="20"
                                                height="20"
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
                                            </svg>
                                        </button>
                                    </div>
                                    <button
                                        @click.prevent="addToCart()"
                                        class="flex-grow h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-500"
                                    >
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div
                            class="mt-4 flex flex-col gap-y-4 border-b border-solid border-gray-300 pb-20 lg:border-0"
                        >
                            <!-- <span class="text-gray-500 text-md">
                                SKU:
                                <span class="text-black">D2300-1</span>
                            </span>

                            <span class="text-gray-500 text-md">
                                Danh mục:
                                <a href="#" class="text-black">
                                    Chó
                                </a>
                                ,
                                <a href="#" class="text-black">
                                    Chó
                                </a>
                                ,
                                <a href="#" class="text-black">
                                    Chó
                                </a>
                                ,
                                <a href="#" class="text-black">
                                    Chó
                                </a>
                                ,
                                <a href="#" class="text-black">
                                    Chó
                                </a>
                                ,
                                <a href="#" class="text-black">
                                    Chó
                                </a>
                                ,
                                <a href="#" class="text-black">
                                    Chó
                                </a>
                            </span> -->
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto border-b border-solid border-gray-200 mt-4 pb-10"
            >
                <h2 class="text-lg font-bold">
                    {{ `Đánh giá (${product.reviews.length})` }}
                </h2>

                <div
                    class="mt-10 border-b pb-8"
                    v-for="review in product.reviews"
                    :key="review.id"
                >
                    <div class="float-left mr-4">
                        <img
                            class="w-12 lg:w-16 rounded-full"
                            src="https://secure.gravatar.com/avatar/53444f91e698c0c7caa2dbc3bdbf93fc?s=70&d=mm&r=g"
                            alt=""
                        />
                    </div>
                    <div class="overflow-hidden leading-3">
                        <div class="flex justify-between">
                            <p
                                class="uppercase font-bold text-[12px] text-black"
                            >
                                {{ review.name }}
                            </p>
                            <client-only>
                                <star-rating
                                    :rating="review.rate"
                                    :read-only="true"
                                    :star-size="20"
                                    :show-rating="false"
                                ></star-rating>
                            </client-only>
                        </div>
                        <a class="font-normal text-[12px]" href="#"
                            >June 15, 2018</a
                        >
                    </div>
                    <div class="pt-4 lg:pl-20 clear-both lg:clear-none">
                        <p class="uppercase text-[12px] text-black">
                            {{ review.comment }}
                        </p>
                    </div>
                </div>

                <div id="comments" class="mt-10" v-if="!product.reviews.length">
                    <h2 class="text-2xl font-bold mb-10">Đánh giá</h2>
                    <p class="text-gray-500">Hiện chưa có đánh giá nào.</p>
                </div>

                <div id="reviews-form" class="mt-10">
                    <div
                        v-if="!product.reviews.length"
                        class="md:w-2/5 xl:w-2/5 border-2 border-solid border-black rounded-lg"
                    >
                        <span class="flex gap-x-2 items-center p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-pencil"
                                width="40"
                                height="40"
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
                                    d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                                />
                                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                            </svg>
                            Hãy là người đầu tiên đánh giá sản phẩm này!
                        </span>
                    </div>
                    <p class="text-gray-500 mt-10">
                        <span class="">Email của bạn sẽ không công khai!</span>
                        Trường bắt buộc sẽ được đánh dấu
                        <span class="text-red-500">*</span>
                    </p>

                    <div id="rating" class="flex items-center gap-x-3 my-4">
                        <span>Đánh giá sao của bạn:</span>
                        <client-only>
                            <star-rating
                                :star-size="20"
                                :show-rating="false"
                                :rating="rating"
                                v-model="rating"
                            >
                            </star-rating>
                        </client-only>
                    </div>

                    <CommentForm
                        :commentData="commentData"
                        v-on:formSubmit="submit"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ZoomImage from '../../components/UIcomponents/ZoomImage.vue';
export default {
    components: { ZoomImage },
    layout: 'shop',
    data() {
        return {
            quantity: 1,
            zoomImage: '',
            isZoomImage: false,
            rating: 0,
            commentData: {
                name: '',
                email: '',
                comment: ''
            }
        };
    },
    async asyncData({ redirect, params, $services }) {
        try {
            const slug = params.slug;
            const response = await $services.Product.show(slug);
            return {
                product: response.data,
                activeImage: response.data.product_images.length
                    ? response.data.product_images[0].imageUrl
                    : ''
            };
        } catch (error) {
            redirect('/404');
        }
    },
    computed: {
        calculateSalePrice() {
            return (
                this.product.price -
                (this.product.salePrice / 100) * this.product.price
            );
        }
    },
    methods: {
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        increaseQuantity() {
            this.quantity++;
        },
        changeActiveImage(image) {
            this.activeImage = image;
        },
        imageZoom(activeImage) {
            this.isZoomImage = true;
            this.zoomImage = activeImage;
        },
        addToCart() {
            const item = { ...this.product };
            item.price = this.calculateSalePrice;
            this.$store.dispatch('cart/addToCart', {
                ...item,
                quantity: this.quantity
            });
        },
        async submit(payload) {
            let formData = {
                ...this.commentData,
                product_id: this.product.id,
                rate: this.rating
            };
            try {
                await this.$services.ProductReview.store(formData);
                this.commentData.name = '';
                this.commentData.email = '';
                this.commentData.comment = '';
                this.rating = 0;
                this.$nuxt.refresh();
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped>
.onsale {
    position: relative;
    width: 56px;
    height: 26px;
    border: 2px solid #ff4545;
    border-right: 0;
    color: #ff4545;
}
.onsale::before {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    right: -20px;
    border: 13px solid #ff4545;
    border-right-color: transparent;
    top: -2px;
    display: inline-block !important;
    z-index: -2;
}
.onsale::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    right: -15px;
    border: 11px solid #fff;
    border-right-color: transparent;
    top: 0;
    z-index: -1;
}
</style>
