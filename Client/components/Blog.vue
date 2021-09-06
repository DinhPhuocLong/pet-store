<template>
    <div class="mt-10 lg:mt-0">
        <h1 class="font-semibold text-4xl text-center mb-6">Tin tức</h1>
        <client-only>
            <div uk-slider>
                <div class="uk-position-relative">
                        <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
                            <div v-for="blog in blogs" :key="blog.id" class="flex">
                                <div class="rounded-lg border border-solid border-gray-[#ebebeb]">
                                    <img
                                        class="mx-auto rounded-lg rounded-b-none overflow-hidden w-full object-cover"
                                        :src="blog.thumbnailUrl"
                                        style="max-height: 210px"
                                        alt=""
                                    />
                                    <div class="text-center">
                                    <!-- title -->
                                    <h2
                                        class="leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500"
                                    >
                                        <nuxt-link :to="{ name: 'blog-detail', params: { slug: blog.slug } }">
                                            {{ blog.title }}
                                        </nuxt-link>
                                    </h2>
                                    <div
                                        class="flex items-center justify-center text-[13px] py-3.5"
                                    >
                                        <div class="flex items-center author mt-auto">
                                            <span
                                                class="text-gray-400 font-bold"
                                            >
                                                Đăng bởi :
                                                <a
                                                    class="ml-1 text-black hover:text-yellow-500"
                                                    href="#"
                                                    > {{ blog.author }}</a
                                                >
                                            </span>
                                        </div>
                                        <div
                                            class="text-gray-400 font-bold hover:text-yellow-500"
                                        >
                                            {{ blog.comments.length }} bình luận
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </ul>
                </div>

                <ul class="uk-slider-nav justify-center uk-dotnav mt-2"></ul>
            </div>
        </client-only>
    </div>
</template>

<script>
export default {
    props: ['blogs']
}
</script>

<style>

</style>

<style scoped>
.author::after {
    content: '';
    width: 1px;
    height: 18px;
    display: inline-block;
    background: #dedede;
    @apply mx-4;
}
</style>
