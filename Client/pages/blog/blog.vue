<template>
    <div>
        <!-- Blog Content-->
        <div class="w-full lg:max-w-[1440px] mx-auto px-4 my-10">
            <div class="flex flex-col lg:flex-row flex-wrap">
                <!--Blog left-->
                <div class="w-full lg:w-[25%] lg:pr-4">
                    <BlogSidebar :recentPosts="recentPosts"/>
                </div>
                <!--Blog right-->
                <div class="w-full lg:w-[75%] lg:pl-8">
                    <div
                        class="blog-content mb-8"
                        v-for="blog in blogs"
                        :key="blog.id"
                    >
                        <img :src="blog.thumbnailUrl" class="rounded-xl" />
                        <!-- <ul
                            class="flex items-center mt-6 lg:mb-0 text-red-400 font-bold text-[11px]"
                        >
                            <li>
                                <a
                                    class="hover:text-red-600 tracking-widest uppercase"
                                    href="#"
                                    >Backpack</a
                                >
                            </li>
                            <span class="mr-1">,</span>
                            <li>
                                <a
                                    class="hover:text-red-600 tracking-widest uppercase"
                                    href="#"
                                    >Fashion</a
                                >
                            </li>
                            <span class="mr-1">,</span>
                            <li>
                                <a
                                    class="hover:text-red-600 tracking-widest uppercase"
                                    href="#"
                                    >Life Style</a
                                >
                            </li>
                        </ul> -->
                        <h3 class="my-3 text-[34px] font-bold leading-10">
                            {{ blog.title }}
                        </h3>
                        <div class="text-[13px] text-gray-400">
                            <!-- By:
                            <a class="hover:text-red-400" href="#">Wpbingo</a> -->
                            <!-- <span class="inline-block mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8"
                                    height="8"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M17.428 5h-17.428l6.616 7-6.616 7h17.428l6.572-7z"
                                        fill="gray"
                                    />
                                </svg>
                            </span> -->
                            <a class="hover:text-red-400" href="#"
                                >4 Comments</a
                            >
                            <p class="text-[15px] mt-2">
                                {{ blog.summary }}
                            </p>
                        </div>
                        <div class="flex items-center justify-between my-6">
                            <div>
                                <button
                                    class="focus:outline-none text-[14px] px-4 md:px-8 py-2.5 bg-yellow-500 hover:bg-black rounded-full text-white transition-all duration-500"
                                >
                                    Tiếp tục đọc
                                </button>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <!--Blog page-->
                    <!-- <div class="mt-8 lg:mt-10">
                        <Pagination />
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'shop',
    async asyncData({ $axios, params, redirect, $services, query }) {
        const slug = params.slug;
        const blogs = await $services.Category.categoryWithBlog(
            slug,
            query
        );
        const recentPosts = await $axios.get(process.env.BASE_URL + '/blog', {
            params: {
                limit: 3
            }
        })
        return { blogs: blogs.data, recentPosts: recentPosts.data };
    },
};
</script>

<style></style>
