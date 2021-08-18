const resource = process.env.BASE_URL + '/blog';
export default ($axios) => ({
    all() {
        return $axios.get(resource);
    },
});

