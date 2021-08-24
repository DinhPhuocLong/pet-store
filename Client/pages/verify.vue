<template> 



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
            const token = this.$route.query.token;
            const response = await this.$axios.get('http://localhost:8000/api/user/verify/' + token);
        } catch (e) {
            console.log(e);
        }
    }
};
</script>

<style></style>
