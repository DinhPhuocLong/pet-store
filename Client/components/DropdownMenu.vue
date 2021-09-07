<template>
    <nav class="flex-grow px-8">
        <ul
            class="flex gap-4 xl:gap-8 items-center text-lg relative"
            :class="textColor || 'text-white'"
        >
            <li>
                <nuxt-link to="/" class="font-semibold">
                    Trang chủ
                </nuxt-link>
            </li>
            <li class="group" v-for="c in category" :key="c.id">
                <nuxt-link
                    :to="{ name: 'shop-by-category', params: { slug: c.slug } }"
                    class="font-semibold"
                >
                    {{ c.name }}
                    <svg
                        class="inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        :fill="textColor || 'white'"
                        :stroke="textColor || 'white'"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                        />
                    </svg>
                </nuxt-link>
                <!--Dropdown Menu-->
                <SubMenu :childrenCategories="c.children_categories" :redirect="'shop-by-category'" />
            </li>
            <li class="group" v-for="item in blogCate" :key="item.id">
                <nuxt-link
                    :to="{ name: 'blog', params: { slug: item.slug } }"
                    class="font-semibold"
                >
                    {{ item.name }}
                    <svg
                        class="inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        :fill="textColor || 'white'"
                        :stroke="textColor || 'white'"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                        />
                    </svg>
                </nuxt-link>
                <!--Dropdown Menu-->
                <SubMenu :childrenCategories="item.children_categories" :redirect="'blog'" />
            </li>
            <li class="relative group">
                <nuxt-link to="/gioi-thieu" class="font-semibold">
                    Giới thiệu
                </nuxt-link>
            </li>
            <li class="relative group">
                <nuxt-link to="/lien-he" class="font-semibold">
                    Liên hệ
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['textColor', 'category', 'blogCate'],
};
</script>
