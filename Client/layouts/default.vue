<template>
    <div class="border-box font-nunito antialiased mb-12 lg:mb-0 body-color">
        <header class="w-full nav-color lg:hidden">
            <HeaderMobile :badgeBg="'bg-white'" />
        </header>
        <HomeHeader />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    async fetch() { //server 
        await this.$store.dispatch('category/getCategory', 'product');
        await this.$store.dispatch('category/getBlogCategory', 'blog');
    },
    async created() {
        if(process.client) this.$store.dispatch('cart/getLocalStorageCart');
    },
};
</script>

<style></style>

<style scoped>
.nav-color {
    background-color: mistyrose !important;
}
.body-color {
    background-color: #ffffff;
}
</style>
