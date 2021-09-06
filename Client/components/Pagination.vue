<template>
    <nav
        class="flex flex-row flex-nowrap justify-center items-center"
        aria-label="Pagination"
    >
        <nuxt-link
            :to="{
                name: routeName,
                params: { slug: slug },
                query: { keywords: keywords, page: current_page - 1 }
            }"
            v-bind:class="[current_page == 1 ? 'pointer-events-none' : '']"
            class="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
            href="#"
            title="Previous Page"
        >
            <span class="sr-only">Previous Page</span>
            <svg
                class="block w-4 h-4 fill-current"
                viewBox="0 0 256 512"
                aria-hidden="true"
                role="presentation"
            >
                <path
                    d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                ></path>
            </svg>
        </nuxt-link>
        <nuxt-link
            v-for="item in pages"
            :key="item.name"
            :to="{
                name: routeName,
                params: { slug: slug },
                query: { keywords: keywords, page: item.name }
            }"
            v-bind:class="[
                item.name == current_page
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
            ]"
            class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 hover:border-gray-300"
            href="#"
            title="Page 1"
        >
            {{ item.name }}
        </nuxt-link>
        <nuxt-link
            class="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
            :to="{
                name: routeName,
                params: { slug: slug },
                query: { keywords: keywords, page: current_page + 1 },
            }"
            title="Next Page"
            v-bind:class="[
                current_page == last_page ? 'pointer-events-none' : ''
            ]"
        >
            <span class="sr-only">Next Page</span>
            <svg
                class="block w-4 h-4 fill-current"
                viewBox="0 0 256 512"
                aria-hidden="true"
                role="presentation"
            >
                <path
                    d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                ></path>
            </svg>
        </nuxt-link>
    </nav>
</template>

<script>
export default {
    props: {
        offset: {
            type: Number,
            required: false,
            default: 3
        },
        last_page: {
            type: Number,
            required: true
        },
        current_page: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            slug: this.$route.params.slug,
            routeName: this.$route.name,
            keywords: this.$route.query.keywords
        };
    },
    computed: {
        startPage() {
            // When on the first page
            if (this.current_page === 1) {
                return 1;
            }
            // When on the last page
            if (this.current_page === this.last_page) {
                return this.last_page - this.offset + 1;
            }
            // When in between
            return this.current_page - 1;
        },
        endPage() {
            return Math.min(this.startPage + this.offset - 1, this.last_page);
        },
        pages() {
            const range = [];
            const startPage = this.startPage || 1;
            for (let i = startPage; i <= this.endPage; i++) {
                range.push({
                    name: i,
                });
            }

            return range;
        }
    }
};
</script>

<style></style>
