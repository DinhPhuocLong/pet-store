const resource = process.env.BASE_URL + '/product-review';
export default ($axios) => ({
    all() {
        return $axios.get(resource);
    },
    update(id, payload) {
        return $axios.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return $axios.delete(`${resource}/${id}`);
    }
});
