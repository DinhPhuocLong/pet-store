const resource = process.env.BASE_URL;
export default ($axios) => ({
    all(payload) {
        return $axios.get(`${resource}/user/all`, {
            params: {
                type: payload
            }
        });
    },
    block(payload) {
        return $axios.patch(`${resource}/user`, payload);
    }
});

