<template>
    <div>
        <vue-good-table :columns="columns" :rows="blogs"></vue-good-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    label: '#',
                    field: 'id'
                },
                {
                    label: 'Title',
                    field: 'title'
                },
                {
                    label: 'Content',
                    field: 'content'
                },
                {
                    label: 'Summary',
                    field: 'summary'
                },
                {
                    label: 'Likes',
                    field: 'likes'
                },
                {
                    label: 'Likes',
                    field: 'likes'
                }
            ],
            blogs: []
        };
    },
    async created() {
        try {
            const response = await this.$services.Blog.all();
            this.blogs = response.data;
        } catch (error) {
            console.log(error);
        }
    }
};
</script>

<style></style>
