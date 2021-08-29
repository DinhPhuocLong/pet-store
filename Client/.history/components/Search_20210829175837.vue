<template>
    <form class="flex flex-1 justify-center relative">
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
        <div class="w-full absolute top-14 bg-white shadow-md" style="z-index: 9999;">
            <div v-if="suggests.length">
                <div class="flex items-center justify-between my-2 p-2" v-for="item in suggests" :key="item.id">
                    <div class="w-1/5 flex items-center justify-center mx-auto">
                        <img class="w-12" src="http://localhost:8000/storage/images/thuoc-nho-gay-cho-meo-thu-gian-beaphar-calming-300x300.jpg">
                    </div>
                    <div class="w-3/5">
                        <p>
                            {{ item.name }}
                        </p>
                    </div>
                    <div class="w-1/5 text-red-500 text-right">
                        <span class="text-right">
                            {{ item.price | toVndCurrency}}
                        </span>
                    </div>
                </div>
            </div>
            <div v-else>
                <h2 class="p-2 bg-black text-white">Lịch sử tìm kiếm</h2>
                <div class="flex justify-around items-center my-2 p-2 hover:bg-gray-200">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M11 6v8h7v-2h-5v-6h-2zm10.854 7.683l1.998.159c-.132.854-.351 1.676-.652 2.46l-1.8-.905c.2-.551.353-1.123.454-1.714zm-2.548 7.826l-1.413-1.443c-.486.356-1.006.668-1.555.933l.669 1.899c.821-.377 1.591-.844 2.299-1.389zm1.226-4.309c-.335.546-.719 1.057-1.149 1.528l1.404 1.433c.583-.627 1.099-1.316 1.539-2.058l-1.794-.903zm-20.532-5.2c0 6.627 5.375 12 12.004 12 1.081 0 2.124-.156 3.12-.424l-.665-1.894c-.787.2-1.607.318-2.455.318-5.516 0-10.003-4.486-10.003-10s4.487-10 10.003-10c2.235 0 4.293.744 5.959 1.989l-2.05 2.049 7.015 1.354-1.355-7.013-2.184 2.183c-2.036-1.598-4.595-2.562-7.385-2.562-6.629 0-12.004 5.373-12.004 12zm23.773-2.359h-2.076c.163.661.261 1.344.288 2.047l2.015.161c-.01-.755-.085-1.494-.227-2.208z"/>
                    </svg>
                    </div>
                    <div>
                        <a href="#">
                            Mèo con đi bộ ăn xúc xích khô bị đau bụng quá trời
                        </a>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" fill="red"/>
                        </svg>
                    </div>
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
        async search() {
            return this.$router.push()
        },
        debounce() {
            clearTimeout(this.timeoutID);
            this.timeoutID = setTimeout(_ => {
                this.showSuggestion()
            }, 300)
        }
    }
};
</script>
