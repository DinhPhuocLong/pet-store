const resource = process.env.BASE_URL + '/category';
export default ($axios) => ({
    all(type) {
        let params = {};
        if (type) {
            params = {
                type
            }
        }
        return $axios.get(resource, {
            params
        });
    },
    categoryWithProduct(slug, params = {}) {
        return $axios.get(resource + `/p/${slug}`, {
            params
        });
    },
    categoryWithBlog(slug, params = {}) {
        return $axios.get(resource + `/b/${slug}`, {
            params
        });
    },
    store(payload) {
        return $axios.post(resource, payload);
    },
    show(id) {
        return $axios.get(`${resource}/${id}`);
    },
    update(id, payload) {
        return $axios.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return $axios.delete(`${resource}/${id}`);
    }
});
