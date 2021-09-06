<template>
    <div>
        <div class="mb-2 mt-2 lg:mt-0 border-b">
            <h2 class="text-[22px] font-bold">Thông tin cơ bản</h2>
            <p class="text-[12px] text-gray-600 mt-2">
                Bạn có thể cập nhật những thông tin của tài khoản ở biểu mẫu
                dưới đây
            </p>
        </div>
        <ValidationObserver
            ref="form"
            @submit.prevent="onSubmit()"
            @keyup.enter="onSubmit()"
        >
            <form>
                <div class="p-2 border-b">
                    <div
                        class="flex flex-col lg:flex-row flex-wrap my-4 text-[14px]"
                    >
                        <p class="w-full lg:w-1/5">Địa chỉ email</p>

                        <input
                            class="w-full lg:w-2/5 border border-gray-200 rounded-md p-1"
                            type="text"
                            v-model="user.email"
                            disabled
                        />
                    </div>

                    <ValidationProvider
                        rules="required|min:3|max:15"
                        :custom-messages="customErrorMessages.name"
                        v-slot="{ errors }"
                    >
                        <div
                            class="flex flex-col lg:flex-row flex-wrap my-4 text-[14px]"
                        >
                            <p class="w-full lg:w-1/5">Tên hiển thị</p>

                            <input
                                class="w-full lg:w-2/5 border border-gray-200 rounded-md p-1"
                                type="text"
                                v-model="user.name"
                                :class="{
                                    'border-red-600': errors[0]
                                }"
                            />
                            <br />
                            <p class="ml-4 text-xs italic text-red-500">
                                {{ errors[0] }}
                            </p>
                        </div>
                    </ValidationProvider>
                    <div
                        class="flex flex-col lg:flex-row flex-wrap my-4 text-[14px]"
                    >
                        <p class="w-full lg:w-1/5">Giới tính</p>
                        <div class="flex items-center">
                            <input
                                class="mx-2"
                                value="male"
                                name="gender"
                                v-model="user.gender"
                                type="radio"
                            />
                            Nam
                            <input
                                class="mx-2"
                                value="female"
                                name="gender"
                                v-model="user.gender"
                                type="radio"
                            />
                            Nữ
                        </div>
                    </div>
                    <div
                        class="flex flex-col lg:flex-row flex-wrap my-4 text-[14px]"
                    >
                        <p class="w-full lg:w-1/5">Ngày tháng</p>
                        <input
                            class="w-full lg:w-2/5 border border-gray-200 rounded-md p-1"
                            type="date"
                        />
                    </div>
                </div>
                <div class="float-right mt-6">
                    <button
                        class="p-2 bg-red-300 text-white rounded-md hover:bg-red-500 transition duration-500"
                    >
                        Cập nhật
                    </button>
                </div>
            </form>
        </ValidationObserver>
        <Alert
            :visible="alert.isVisible"
            :message="alert.message"
            :alertType="alert.type"
        />
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Alert from '@/components/UIcomponents/Alert.vue';
export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        Alert
    },
    data() {
        return {
            user: JSON.parse(JSON.stringify(this.$store.state.auth.user)),
            customErrorMessages: {
                name: {
                    required: 'Tên không được để trống !',
                    min: 'Tên tối thiểu {length} ký tự !',
                    max: 'Tên tối đa {length} ký tự !'
                }
            },
            alert: {
                isVisible: false,
                message: '',
                type: ''
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate().then(success => {
                if (!success || !this.$refs.form.ctx.changed) {
                    return;
                } else {
                    this.updateUserProfile();
                }
            });
        },
        async updateUserProfile() {
            const newUserData = {
                name: this.user.name,
                gender: this.user.gender
            };
            try {
                const response = await this.$axios.put(
                    process.env.BASE_URL + '/user',
                    newUserData
                );
                this.$auth.setUser(response.data);
                this.alertTrigger('success', 'Cập nhật thông tin thành công !', 2000);
                this.$refs.form.reset();
            } catch (error) {
                console.log(error.response.data);
            }
        },
        alertTrigger(type, msg, ms) {
            this.alert.isVisible = true;
            this.alert.type = type;
            this.alert.message = msg;
            setTimeout(_ => {
                this.alert.isVisible = false;
            }, ms);
        }
    }
};
</script>

<style></style>
