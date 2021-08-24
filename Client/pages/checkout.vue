<template>
    <div class="mt-12">
        <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto">
            <div class="my-6 text-center">
                <h1 class="text-[25px] lg:text-[32px] font-bold">
                    Thông tin đơn hàng
                </h1>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-[70%] lg:pr-10">
                    <h2 class="text-[20px] font-bold">Thông tin giao hàng</h2>
                    <div>
                        <ValidationObserver ref="form">
                            <form>
                                <div class="my-4">
                                    <p class="font-bold my-2">
                                        Họ và tên<b
                                            class="text-red-500 ml-1"
                                        ></b>
                                    </p>
                                    <ValidationProvider
                                        rules="required"
                                        :custom-messages="
                                            customErrorMessages.name
                                        "
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            v-model="shipmentDetails.name"
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                            class="w-full border-b-2 border-gray-200 focus:outline-none py-2"
                                            placeholder="Họ và tên..."
                                            type="text"
                                        />
                                        <p
                                            class="mt-1 text-sm italic text-red-500"
                                        >
                                            {{ errors[0] }}
                                        </p>
                                    </ValidationProvider>
                                </div>
                                <div class="my-4">
                                    <p class="font-bold my-2">
                                        Điện thoại<b class="text-red-500 ml-1"
                                            >*</b
                                        >
                                    </p>
                                    <ValidationProvider
                                        rules="required|vnPhone"
                                        :custom-messages="
                                            customErrorMessages.phone
                                        "
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                            class="w-full border-b-2 border-gray-200 focus:outline-none py-2"
                                            placeholder="Điện thoại..."
                                            type="text"
                                            v-model="shipmentDetails.phone"
                                        />
                                        <p
                                            class="mt-1 text-sm italic text-red-500"
                                        >
                                            {{ errors[0] }}
                                        </p>
                                    </ValidationProvider>
                                </div>
                                <div class="my-4">
                                    <p class="font-bold my-2">
                                        Email<b class="text-red-500 ml-1">*</b>
                                    </p>
                                    <ValidationProvider
                                        rules="isValidateEmail"
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                            class="w-full border-b-2 border-gray-200 focus:outline-none py-2"
                                            placeholder="Email..."
                                            type="text"
                                            v-model="shipmentDetails.email"
                                        />
                                        <p
                                            class="mt-1 text-sm italic text-red-500"
                                        >
                                            {{ errors[0] }}
                                        </p>
                                    </ValidationProvider>
                                </div>
                                <div class="my-4">
                                    <p class="font-bold my-2">
                                        Địa chỉ<b class="text-red-500 ml-1"
                                            >*</b
                                        >
                                    </p>
                                    <ValidationProvider
                                        rules="required"
                                        :custom-messages="
                                            customErrorMessages.address
                                        "
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            :class="{
                                                'border-red-600': errors[0]
                                            }"
                                            class="w-full border-b-2 border-gray-200 focus:outline-none py-2"
                                            placeholder="Địa chỉ nhận hàng..."
                                            v-model="shipmentDetails.address"
                                            type="text"
                                        />
                                        <p
                                            class="mt-1 text-sm italic text-red-500"
                                        >
                                            {{ errors[0] }}
                                        </p>
                                    </ValidationProvider>
                                </div>
                                <div class="my-4">
                                    <p class="font-bold my-2">
                                        Ghi chú<b class="text-red-500 ml-1"
                                            >*</b
                                        >
                                    </p>
                                    <textarea
                                        class="w-full border border-gray-200 focus:outline-none p-2 rounded-md"
                                        placeholder="Nhập ghi chú (nếu có)..."
                                        rows="4"
                                        cols="50"
                                        v-model="shipmentDetails.userNote"
                                    ></textarea>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
                <div class="w-full lg:w-[30%] mt-8 lg:mt-0">
                    <div class="h-max">
                        <h2 class="text-[16px] p-4 bg-gray-200 font-bold">
                            Sản phẩm
                        </h2>
                        <div class="overflow-y-scroll" style="height: 210px">
                            <div
                                v-for="item in cart"
                                :key="item.id"
                                class="flex items-center justify-around p-4 border-t"
                            >
                                <div class="w-24">
                                    <img
                                        class="w-full"
                                        :src="
                                            item.product_images.length
                                                ? item.product_images[0]
                                                      .imageUrl
                                                : ''
                                        "
                                        :alt="item.name"
                                    />
                                </div>
                                <div>
                                    <p>{{ item.name }}</p>
                                    <span>Số lượng: {{ item.quantity }}</span>
                                </div>
                                <div>
                                    <span>{{
                                        item.price | toVndCurrency
                                    }}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-4 border-t"
                        >
                            <p class="font-bold">Tạm tính:</p>
                            <span>{{ total | toVndCurrency }}</span>
                        </div>

                        <div
                            v-if="discount"
                            class="flex items-center justify-between p-4 border-t"
                        >
                            <p class="font-bold">Giảm giá:</p>
                            <span>{{ discount | toVndCurrency }}</span>
                        </div>

                        <div
                            class="flex items-center justify-between p-4 border-t"
                        >
                            <p class="text-[16px] text-red-500 font-bold">
                                Tổng tiền:
                            </p>
                            <span
                                class="text-[16px] text-red-500 font-bold"
                                v-if="!newTotal"
                            >
                                {{ total | toVndCurrency }}
                            </span>

                            <span
                                class="text-[16px] text-red-500 font-bold"
                                v-else
                            >
                                {{ newTotal | toVndCurrency }}
                            </span>
                        </div>

                        <div
                            class="flex items-center justify-between p-4 border-t"
                        >
                            <input
                                class="flex-1 p-2 rounded-full focus:outline-none border border-gray-300"
                                type="text"
                                placeholder="Mã giảm giá..."
                                v-model="code"
                                :class="{
                                    'border-red-600': codeError
                                }"
                            />
                            <p
                                v-if="codeError"
                                class="mt-1 text-sm italic text-red-500"
                            >
                                {{ codeError }}
                            </p>
                            <button
                                @click.prevent="checkCoupon()"
                                class="mx-4 lg:w-24 min-w-max p-2 rounded-full bg-black text-white hover:bg-red-500 transition-all duration-500"
                                type="submit"
                            >
                                Cập nhật
                            </button>
                        </div>

                        <div class="flex flex-col p-4 border-t">
                            <p class="font-bold">Phương thức thanh toán:</p>
                            <ul class="mt-2">
                                <li>
                                    <input type="radio" name="method" checked />
                                    <label>Thanh toán khi nhận hàng</label>
                                </li>
                                <li>
                                    <input type="radio" name="method" />
                                    <label>MoMo</label>
                                </li>
                            </ul>
                        </div>

                        <div class="p-4">
                            <button
                                @click.prevent="onSubmit()"
                                class="w-full rounded-md p-4 bg-black text-white hover:bg-red-500 transition-all duration-500 uppercase"
                            >
                                Xác nhận đơn hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { mapState } from 'vuex';
export default {
    middleware({ store, redirect }) {
        if (!store.state.cart.cart.length) {
            return redirect('/');
        }
    },
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            shipmentDetails: {
                name: '',
                phone: '',
                email: '',
                address: '',
                userNote: ''
            },
            customErrorMessages: {
                name: { required: 'Hãy nhập tên của bạn!' },
                phone: { required: 'Hãy nhập số điện thoại của bạn!' },
                address: { required: 'Hãy nhập địa chỉ của bạn!' }
            },
            code: '',
            codeError: '',
            coupon: '',
            discount: ''
        };
    },
    computed: {
        ...mapState({
            cart: state => state.cart.cart
        }),
        total() {
            return this.cart.reduce(
                (acc, curr) => +curr.price * +curr.quantity + +acc,
                0
            );
        },
        newTotal() {
            if (this.coupon.type === 'fixed') {
                this.discount = this.coupon.value;
                return this.total - this.coupon.value;
            }
            if (this.coupon.type === 'percent') {
                let discount = this.total * (this.coupon.value / 100);
                this.discount = discount;
                return this.total - discount;
            }
        }
    },
    methods: {
        async checkCoupon() {
            try {
                const response = await this.$axios.post(
                    'http://localhost:8000/api/coupon',
                    { code: this.code }
                );
                this.coupon = response.data;
            } catch (error) {
                this.codeError = error.response.data.message;
            }
        },
        onSubmit() {
            this.$refs.form.validate().then(success => {
                if (!success) {
                    return;
                } else {
                    this.processPayment();
                }
            });
        },
        async processPayment() {
            let payload = {
                ...this.shipmentDetails,
                cart: this.cart
            };
            try {
                await this.$axios.post(
                    'http://localhost:8000/api/order',
                    payload
                );
                this.$store.dispatch('cart/clearCart');
                this.$router.push({ name: 'thanks' });
                this.$refs.form.reset();
                this.shipmentDetails = {
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    userNote: ''
                };
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style></style>
