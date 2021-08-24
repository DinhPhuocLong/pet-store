const resource = process.env.BASE_URL + '/brand';
export default ($axios) => ({
    all(params) {
        console.log(params)
        return $axios.get(resource, {
                params
            });
    },
    productsByBrand(slug, params = {}) {
        return $axios.get(resource + `/${slug}`, {
            params
        });
    }
});
