<template>
    <div>
        <div class="display-1 my-4 color-default">Resultados para: "{{ searchText }}"</div>
        <div class="text-xs-center" v-if="loading">
            <v-progress-circular indeterminate v-bind:size="50" class="red--text"></v-progress-circular>
        </div>
        <template v-else>
            <v-layout v-if="videos" row wrap>
                <v-flex v-for="(video, index) in videos" :key="index" xs12 md4 lg3>
                    <thumb-video
                        @click.native="openModal"
                        :thumb="video"
                    ></thumb-video>
                </v-flex>
            </v-layout>
            <div v-else class="text-xs-center my-4">
                <v-progress-circular indeterminate v-bind:size="50" class="red--text"></v-progress-circular>
            </div>
            <div class="headline" v-if="!videos[0]">Não há resultados para essa busca.</div>
            <div v-if="channel.nextPageToken" class="text-xs-center">
                <v-btn
                    @click.native="moreVideos"
                    class="loader-more ma-0 mt-4"
                    :loading="loader"
                    :disable="loader"
                    outline>Carregar mais videos...</v-btn>
            </div>
        </template>
        <video-modal></video-modal>
    </div>
</template>

<script>
    import VideoModal from '_components/VideoModal.vue'
    import ThumbVideo from '_components/ThumbVideo.vue'

    export default {
        name: 'AllVideosPage',

        components: {
            VideoModal,
            ThumbVideo
        },

        computed: {
            searchText () {
                return this.$route.query.q
            },
            videos () {
                return this.$store.state.videos.data
            },
            channel () {
                return this.$store.state.videos.channel
            }
        },

        watch: {
            searchText (text) {
                this.loading = true
                this.$store.dispatch('getVideos', { quantity: 12, nextPage: null, search: text })
            },
            videos () {
                this.loading = false
            }
        },

        data () {
            return {
                loading: false,
                loader: false
            }
        },

        methods: {
            openModal () {
                this.$store.dispatch('toggleModal')
            },
            moreVideos () {
                this.loader = true
                this.$store.dispatch('getVideos', { quantity: 12, nextPage: this.channel.nextPageToken, search: this.searchText })
                    .then(() => {
                        setTimeout(() => {
                            this.loader = false
                        }, 1000)
                    })
            }
        },

        mounted () {
            this.loading = true
            this.$store.dispatch('getVideos', { quantity: 12, nextPage: null, search: this.searchText })
        }
    }
</script>

<style lang="scss" scoped>
    .loader-more {
        width: 40%;

        @media (max-width: 600px) {
            width: 100%;
        }
    }
</style>