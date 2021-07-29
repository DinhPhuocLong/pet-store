<template>
    <div
        v-if="visible"
        :class="type"
        class="w-96 absolute top-8 left-2/4 transform -translate-x-2/4"
        uk-alert
    >
        <a class="uk-alert-close" uk-close></a>
        <p>
            {{ message }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['message', 'alertType', 'visible'],
    computed: {
        type() {
            let type = '';
            switch (this.alertType) {
                case 'danger':
                    type = 'uk-alert-danger';
                    break;
                case 'success':
                    type = 'uk-alert-success';
                    break;
                default:
                // code block
            }
            return type;
        }
    }
};
</script>
