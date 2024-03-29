export default {
    async getCategory({ commit }, type) {
        try {
            const response = await this.$services.Category.all(type);
            commit("SET_CATEGORY", response.data);
        } catch (error) {
            throw error;
        }
    },
    async getBlogCategory({ commit }, type) {
        try {
            const response = await this.$services.Category.all(type);
            commit("SET_BLOG_CATE", response.data);
        } catch (error) {
            throw error;
        }
    }
}





