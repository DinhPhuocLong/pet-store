<template>
    <div
        class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto mt-2 font-nunito mb-20"
    >
        <Banner :saleBlogs="saleBlogs" />
        <TopBrandSlider />
        <BestDealSlider :saleProducts="saleProducts" />
        <SmallBanner />
        <TrendingProduct :trendingProducts="trendingProducts" />
        <AboutUsBanner />
        <Blog :blogs="blogs"/>
    </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            saleProducts: '',
            trendingProducts: '',
            blogs: [],
            saleBlogs: [],
        };
    },
    async fetch() {
        await this.$store.dispatch('product/getProducts');
        await this.$store.dispatch('brand/getBrands', { top: true });
    },
    created() {
        this.getSaleProduct();
        this.getTrendingProduct();
        this.getSaleBlog();
        this.getBlog();
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
        async getSaleBlog() {
            try {
                const response = await this.$services.Category.categoryWithBlog('tin-tuc-khuyen-mai');
                this.saleBlogs = response.data;
            } catch (error) {
                throw error;
            }
        },
        async getBlog() {
            try {
                const response = await this.$axios.get(process.env.BASE_URL + '/blog', {
                    params: {
                        limit: 6
                    }
                })
                this.blogs = response.data;
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
        },
    }
};
</script>
