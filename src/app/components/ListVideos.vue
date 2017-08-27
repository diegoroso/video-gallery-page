<template>
    <v-card class="pa-4">
        <template v-for="(item, index) in items">
            <thumb-video
                :key="index"
                :image="item.image"
                :title="item.title"
                :time="item.time"
                :views="item.views"
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

        data () {
            return {
                loader: false,
                items: [
                    {
                        image: 'https://blog.emania.com.br/content/uploads/2015/12/Papel-de-Parede-de-Paisagem.jpg',
                        title: 'Mapa VAGAS',
                        time: '2:30',
                        views: '729'
                    }
                ]
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