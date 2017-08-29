<template>
    <v-layout row wrap>
        <v-flex class="px-3" xs12 md7 lg8>
            <div class="display-1 my-4">Vídeo em destaque</div>
            <featured-video></featured-video>
        </v-flex>
        <v-flex class="px-3" xs12 md5 lg4>
            <div class="display-1 my-4">+ Vídeos</div>
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

        mounted () {
            this.$store.dispatch('getVideos')
        }
    }
</script>

<style lang="scss" scoped></style>