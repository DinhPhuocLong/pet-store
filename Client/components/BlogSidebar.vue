<template>
    <div>
        <!--Blog Search-->
        <div class="mt-8 lg:mt-0">
            <form action="#">
                <fieldset
                    class="border-2 border-gray-200 rounded-md py-2 lg:py-0"
                >
                    <legend class="mx-4 text-[22px] px-2 font-medium">
                        Tìm kiếm
                    </legend>
                    <div class="flex items-center px-4 pb-3">
                        <div class="relative w-full h-full">
                            <input
                                class="focus:outline-none w-full px-4 py-2 rounded-full border border-gray-400"
                                placeholder="Nhập thông tin..."
                                type="text"
                            />
                            <div
                                class="absolute top-0 right-0 bg-black h-full w-14 rounded-tr-full rounded-br-full pt-2 pl-4"
                            >
                                <button class="focus:outline-none">
                                    <svg
                                        class="inline-block"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 
                                                9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 
                                                0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <!--Blog Recent Post-->
        <div class="mt-8 md:mt-10">
            <fieldset class="border-2 border-gray-200 rounded-md">
                <legend class="mx-4 text-[22px] px-2 font-medium">
                    Bài viết gần đây
                </legend>
                <div class="flex py-4 px-6" v-for="recentPost in recentPosts" :key="recentPost.id">
                    <div class="w-20 rounded-md overflow-hidden">
                        <img
                            class="object-cover h-full w-full"
                            :src="recentPost.thumbnailUrl"
                            alt=""
                        />
                    </div>
                    <div class="leading-5 pl-4">
                        <p class="my-1 text-[11px] text-gray-400">
                            {{ recentPost.created_at | formatDate }}
                        </p>
                        <nuxt-link
                            :to="{ name: 'blog-detail', params: { slug: recentPost.slug } }"
                            class="hover:text-red-500 text-[16px] font-bold"
                            >{{ recentPost.title }}</nuxt-link>
                    </div>
                </div>

            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    props: ['recentPosts'],
}
</script>

<style>

</style>
