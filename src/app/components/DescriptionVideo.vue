<template>
    <div class="description">
        <div class="icons">
            <ico v-tooltip:left="{ html: `${feature.views} views` }" icon="views-ico blue-ico"></ico>
            <ico v-tooltip:left="{ html: feature.date }" class="ml-1" icon="date-ico"></ico>
        </div>
        <div class="title color-default" v-text="feature.title"></div>
        <div class="body-1 mt-3" v-text="feature.description"></div>
    </div>
</template>

<script>
    import Ico from '_components/Icons.vue'

    export default {
        name: 'DescriptionVideo',

        components: {
            Ico
        },

        computed: {
            feature () {
                return this.$store.state.videos.feature
            }
        }
    }
</script>

<style lang="scss" scoped>
    .description {
        position: relative;
        min-height: 50px;

        .icons {
            position: absolute;
            display: flex;
            right: 0;
        }

        .title {
            padding-right: 50px;
        }

        .body-1 {
            word-wrap: break-word;
        }
    }
</style>