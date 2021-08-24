const resource = process.env.BASE_URL + '/product-review';
export default ($axios) => ({
    store(payload) {
        return $axios.post(resource, payload);
    },
});
