<template>
    <div>
        <button @click="click()">
            clicked
        </button>
    </div>
</template>

<script>
export default {
    layout: 'default',
    middleware: ['unAuthenticated'],
    methods: {
        
    }

}
</script>
