<template>
    <div>
        <div class="title" v-text="title"></div>
        <div class="body-1 mt-3" v-text="description"></div>
    </div>
</template>

<script>
    export default {
        name: 'DescriptionVideo',

        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped></style>