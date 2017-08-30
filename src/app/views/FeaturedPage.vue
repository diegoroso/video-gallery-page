<template>
    <v-layout row wrap>
        <v-flex class="px-3" xs12 md7 lg8>
            <div class="display-1 my-4 color-default">Vídeo em destaque</div>
            <featured-video :feature="feature"></featured-video>
        </v-flex>
        <v-flex class="px-3" xs12 md5 lg4>
            <div class="display-1 my-4 color-default">+ Vídeos</div>
            <list-videos></list-videos>
        </v-flex>
    </v-layout>
</template>

<script>
    import ListVideos from '_components/ListVideos.vue'
    import FeaturedVideo from '_components/FeaturedVideo.vue'

    export default {
        name: 'FeaturedPage',

        components: {
            ListVideos,
            FeaturedVideo
        },

        computed: {
            feature () {
                return this.$store.state.videos.feature
            }
        },

        mounted () {
            this.$store.dispatch('getVideos', { quantity: 4 })
        }
    }
</script>

<style lang="scss" scoped></style>