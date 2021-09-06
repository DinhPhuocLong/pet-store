<template>
    <div class="my-10">
        <div class="w-full lg:max-w-[1440px] mx-auto px-4 lg:mt-6">
            <div class="text-center lg:mt-10">
                <!-- <div class="mt-6 lg:mb-0 text-red-400 font-bold text-[11px]">
                    <a
                        class="hover:text-red-600 tracking-widest uppercase tracking-widested"
                        href="#"
                        >Backpack</a
                    >
                    <span class="mr-1">,</span>
                    <a
                        class="hover:text-red-600 tracking-widest uppercase tracking-widested"
                        href="#"
                        >Fashion</a
                    >
                    <span class="mr-1">,</span>
                    <a
                        class="hover:text-red-600 tracking-widest uppercase tracking-widested"
                        href="#"
                        >Life Style</a
                    >
                </div> -->
                <h3
                    class="my-3 text-[30px] lg:text-[50px] font-bold leading-10"
                >
                    {{ blog.title }}
                </h3>
                <!-- <div class="text-[13px] text-gray-500">
                    By:
                    <a class="hover:text-red-400 font-bold text-black" href="#"
                        >Wpbingo</a
                    >
                    <span class="mx-2"> | </span>
                    <a class="hover:text-red-400" href="#">4 Comments</a>
                </div> -->
                <img class="rounded-xl my-8 mx-auto w-full" :src="blog.thumbnailUrl" alt="" />
            </div>
        </div>
        <div class="w-full lg:max-w-[1440px] mx-auto px-4 mt-10">
            <div class="flex flex-col flex-col-reverse lg:flex-row flex-wrap">
                <!--Blog Detail left-->
                <div class="w-full lg:w-[25%] lg:pr-4">
                    <BlogSidebar :recentPosts="recentPosts" />
                </div>
                <!--Blog Detail right-->
                <div class="w-full lg:w-[75%] lg:pl-8">
                    <div class="font-normal text-justify text-gray-500">
                        <!--Blog Detail Description-->
                        <div v-html="blog.content"></div>
                        <!-- Blog Detail Comments -->
                        <div class="mt-10">
                            <p
                                class="text-center text-[20px] font-bold text-black my-2"
                            >
                                {{ blog.comments.length }} Bình luận
                            </p>
                            <div
                                class="mt-10 border-b pb-8"
                                v-for="comment in blog.comments"
                                :key="comment.id"
                            >
                                <div class="float-left mr-4">
                                    <img
                                        class="w-12 lg:w-16 rounded-full border border-solid border-black"
                                        :src="comment.user.imageUrl"
                                        alt=""
                                    />
                                </div>
                                <div class="overflow-hidden leading-3">
                                    <div class="flex justify-between">
                                        <p
                                            class="uppercase font-bold text-[12px] text-black"
                                        >
                                            {{ comment.user.name }}
                                        </p>
                                        <button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z"
                                                    fill="gray"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <a
                                        class="font-normal text-[12px]"
                                        href="#"
                                        >{{
                                            comment.created_at | formatDate
                                        }}</a
                                    >
                                </div>
                                <div
                                    class="pt-4 lg:pl-20 clear-both lg:clear-none"
                                >
                                    <p>
                                        {{ comment.content }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!--Blog Detail Leave a Reply-->
                        <div v-if="!$auth.loggedIn">
                            <div class="text-center">
                                <p
                                    class="text-[20px] font-bold text-black mb-4"
                                >
                                    Hãy đăng nhập để bình luận
                                </p>
                            </div>
                        </div>

                        <div class="mt-10 text-center" v-else>
                            <div class="text-center">
                                <p
                                    class="text-[20px] font-bold text-black mb-4"
                                >
                                    Để lại bình luận
                                </p>
                            </div>
                            <textarea
                                class="w-full focus:outline-none border border-transparent bg-gray-100 rounded-md overflow-hidden p-4"
                                cols="45"
                                rows="8"
                                aria-required="true"
                                v-model="comment"
                                placeholder="*Bình luận..."
                            ></textarea>
                            <button
                                @click.prevent="sendComment()"
                                class="mt-4 lg:mt-6 rounded-full text-[12px] 
                                    focus:outline-none
                                    font-semibold min-w-max py-4 px-8 border uppercase hover:bg-red-500 hover:text-white transition-all duration-500"
                            >
                                Gửi bình luận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'shop',
    data() {
        return {
            comment: ''
        };
    },
    async asyncData({ $axios, params, redirect }) {
        const slug = params.slug;
        try {
            const respone = await $axios.get(
                process.env.BASE_URL + '/blog/' + slug
            );
            const recentPosts = await $axios.get(
                process.env.BASE_URL + '/blog',
                {
                    params: {
                        limit: 3
                    }
                }
            );
            return { blog: respone.data, recentPosts: recentPosts.data };
        } catch (error) {
            redirect('/404');
        }
    },
    methods: {
        async sendComment() {
            await this.$axios.post(process.env.BASE_URL + '/blog-comment', {
                blog_id: this.blog.id,
                comment: this.comment
            });
            this.comment = '';
            this.$nuxt.refresh();
        }
    }
};
</script>

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
