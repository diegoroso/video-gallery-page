<template>
    <v-card class="pa-4">
        <template v-for="(video, index) in videos">
            <thumb-video
                :key="index"
                :video="video"
                class="mb-4"
            ></thumb-video>
        </template>
        <v-btn
            @click.native="more_videos"
            class="btn-more ma-0 mt-3"
            :loading="loader"
            :disabled="loader"
            outline> Carregar mais vídeos...</v-btn>
    </v-card>
</template>

<script>
    import ThumbVideo from '_components/ThumbVideo.vue'

    export default {
        name: 'ListVideo',

        components: {
            ThumbVideo
        },

        computed: {
            videos () {
                return this.$store.state.videos.data
            }
        },

        data () {
            return {
                loader: false
            }
        },

        methods: {
            more_videos () {
                this.loader = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-more {
        width: 100%;
    }
</style>