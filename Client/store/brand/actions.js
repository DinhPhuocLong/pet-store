export default {
    async getBrands({ commit }, params) {
        try {
            console.log(params)
            const response = await this.$services.Brand.all(params);
            commit("SET_BRAND", response.data);
        } catch (error) {
            console.log(error.data);
        }
    },
}





