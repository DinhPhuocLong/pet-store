<template>
    <form class="flex flex-col md:flex-row md:gap-x-4 w-full">
        <div class="order-2 md:w-1/2">
            <p>
                <input
                    class="block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden"
                    type="text"
                    placeholder="Name*"
                    v-model="commentData.name"
                />
            </p>
            <p>
                <input
                    class="block focus:outline-none w-full border border-solid border-gray-300 px-4 py-5 mb-6 rounded-md overflow-hidden"
                    type="text"
                    placeholder="Email*"
                    v-model="commentData.email"
                />
            </p>

            <button @click.prevent="onSubmit"
                class="text-xs uppercase focus:outline-none w-full border border-solid border-black hover:border-petshop-orange hover:bg-petshop-orange hover:text-white font-bold py-6 rounded-md overflow-hidden"
            >
                Gửi
            </button>
        </div>

        <p class="w-full mb-6 order-1 md:order-2 md:w-1/2">
            <textarea
                class="w-full p-4 border border-solid border-gray-300 focus:outline-none rounded-md overflow-hidden"
                id="comment"
                name="comment"
                placeholder="Đánh giá của bạn*"
                cols="45"
                rows="9"
                v-model="commentData.comment"
            ></textarea>
        </p>
    </form>
</template>

<script>
export default {
    props: ['commentData'],
    methods: {
        onSubmit(event) {
            this.$emit('formSubmit', this.commentData);
        }
    }
}
</script>

<style>

</style>
