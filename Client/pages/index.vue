<template>
    <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto mt-2 font-nunito mb-20">
        <Banner />
        <TopBrandSlider />
        <BestDealSlider :saleProducts="saleProducts" />
        <SmallBanner />
        <TrendingProduct :trendingProducts="trendingProducts" />
        <AboutUsBanner />
        <Blog />
    </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            saleProducts: '',
            trendingProducts: ''
        };
    },
    async fetch() {
        await this.$store.dispatch('product/getProducts');
        await this.$store.dispatch('brand/getBrands', { top: true });
    },
    created() {
        this.getSaleProduct();
        this.getTrendingProduct();
    },
    methods: {
        async getSaleProduct() {
            try {
                const response = await this.$services.Product.getSaleProduct();
                this.saleProducts = response.data;
            } catch (error) {
                throw error;
            }
        },
        async getTrendingProduct() {
            try {
                const response = await this.$services.Product.getTrendingProduct();
                this.trendingProducts = response.data;
            } catch (error) {
                throw error;
            }
        }
    }
};
</script>
