<template>
    <h1>Verifing Email</h1>
</template>

<script>
export default {
    // async asyncData({ app, params, route, error }) {
    //     const token = route.query.token;
    //     try {
    //         const response = await this.$axios.get('http://localhost:8000/api/user/verify/' + token);
    //     } catch (e) {
    //         console.log(error, token);
    //     }
    // },
    async created() {
        try {
            const params = this.$route.query;
            const response = await this.$axios.get('http://localhost:8000/api/email/verify', {
                params: {
                    ...params
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    // id=28&hash=9e8e4c8bd21ec52e7e22f4a3653ddd7115bb1c56&
};
</script>

<style></style>
