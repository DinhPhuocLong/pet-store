const resource = process.env.BASE_URL + '/contact';
export default ($axios) => ({
    post(payload) {
        return $axios.post(`${resource}`, payload);
    },
});
