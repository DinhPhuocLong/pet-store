const resource = process.env.BASE_URL;
export default ($axios) => ({
    all() {
        return $axios.get(`${resource}/user/all`);
    },
    block(payload) {
        return $axios.patch(`${resource}/user`, payload);
    }
});

