<template>
    <v-card class="pa-4">
        <div id="card" class="custom-card">
            <template v-for="(video, index) in videos">
                <thumb-video
                    :key="index"
                    :thumb="video"
                    class="my-2"
                ></thumb-video>
            </template>
        </div>
        <v-btn
            @click.native="moreVideos"
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
            },
            channel () {
                return this.$store.state.videos.channel
            }
        },

        data () {
            return {
                loader: false,
                more: 0
            }
        },

        methods: {
            moreVideos () {
                this.loader = true
                this.$store.dispatch('getVideos', { quantity: 4, nextPage: this.channel.nextPageToken })
                    .then(() => {
                        setTimeout(() => {
                            this.more += 1
                            const card = document.getElementById('card')
                            card.scrollTop = 420 * this.more
                            this.loader = false
                        }, 500)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .custom-card {
        height: 420px;
        overflow: auto;
    }

    .btn-more {
        width: 100%;
    }
</style>