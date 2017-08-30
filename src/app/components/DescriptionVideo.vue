<template>
    <div class="description">
        <div class="icons">
            <ico v-tooltip:left="{ html: `${views} views` }" icon="views-ico blue-ico"></ico>
            <ico v-tooltip:left="{ html: date }" class="ml-1" icon="date-ico"></ico>
        </div>
        <div class="title color-default" v-text="feature.title"></div>
        <div class="body-1 mt-3" v-text="feature.description"></div>
    </div>
</template>

<script>
    import Ico from '_components/Icons.vue'
    import { date, views } from '_app/filters/index.js'

    export default {
        name: 'DescriptionVideo',

        components: {
            Ico
        },

        computed: {
            feature () {
                return this.$store.state.videos.feature
            },
            date () {
                return date(this.$store.state.videos.feature.date, 'DD [de] MMMM [de] YYYY')
            },
            views () {
                return views(this.$store.state.videos.feature.views)
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