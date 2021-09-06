<template>
    <ul>
        <li
            class="my-3"
            v-for="childrenCategory in childrenCategories"
            :key="childrenCategory.id"
        >
            <nuxt-link
                :to="{
                    name: redirect,
                    params: { slug: childrenCategory.slug }
                }"
                class="font-sans text-[13px] hover:text-yellow-500 text-gray-500 transition ease-out duration-300"
            >
                {{ childrenCategory.name }}
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        childrenCategories: {
            type: Array,
            require: true
        },
        redirect: {
            type: String,
            require: false,
            default: 'shop-by-category'
        }
    }
};
</script>

<style></style>
