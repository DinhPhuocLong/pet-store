<template>
    <form class="flex flex-1 justify-center">
        <input
            type="text"
            class="w-full py-3.5 border border-solid border-gray-400 rounded-l-full pl-7 outline-none text-sm font-bold"
            placeholder="Tìm kiếm..."
            style="max-width: 700px"
            v-model="keywords"
            @keyup="debounce();"
        />
        <button type="submit" class="bg-black text-white px-7 rounded-r-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
        </button>
        <div class="w-full absolute top-14 p-2 bg-white shadow-md rounded-full">
            <div class="flex items-center justify-between">
                <div class="w-1/5 flex items-center justify-center mx-auto">
                    <img class="w-12" src="http://localhost:8000/storage/images/thuoc-nho-gay-cho-meo-thu-gian-beaphar-calming-300x300.jpg">
                </div>
                <div class="w-4/5">
                    <p>
                        Thuốc Nhỏ Gáy Cho Mèo Thư Giãn Beaphar Calming
                    </p>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            keywords: '',
            timeoutID: '',
            suggests: [],
        };
    },
    methods: {
        async showSuggestion() {
            try {
                const response = await this.$axios.post(process.env.BASE_URL + '/search', {
                    keywords: this.keywords,
                })
                this.suggests = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        debounce() {
            clearTimeout(this.timeoutID);
            this.timeoutID = setTimeout(_ => {
                this.showSuggestion()
            }, 1000)
        }
    }
};
</script>
