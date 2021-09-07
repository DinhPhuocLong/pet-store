<template>
    <div v-if="visible">
        <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            style="z-index: 999"
            aria-hidden="true"
        ></div>
        <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style="z-index: 999; width: 42rem; height: 36rem;"
        >
            <div class="w-full h-full relative">
                <img :src="image" class="w-full h-full" alt="" />
                <button class="absolute -top-4 -right-6" @click="close">
                    <svg
                        style="color: white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            require: false
        },
        visible: {
            type: Boolean,
            default: false,
            require: true
        }
    },
    methods: {
        close() {
            this.$emit('closeZoom');
        }
    }
};
</script>

<style></style>
