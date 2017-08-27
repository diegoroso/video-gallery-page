<template>
    <div>
        <div class="display-1 my-4">Todos os vídeos do Canal</div>
        <v-layout row wrap>
            <v-flex v-for="(item, index) in items" :key="index" xs12 sm6 md4 lg3>
                <thumb-video
                    class="my-2"
                    :image="item.image"
                    :title="item.title"
                    :time="item.time"
                    :views="item.views"
                ></thumb-video>
            </v-flex>
        </v-layout>
        <div class="text-xs-center">
            <v-btn
                @click.native="loaderMore"
                class="loader-more mt-4"
                :loading="loader"
                :disable="loader"
                outline>Carregar mais videos...</v-btn>
        </div>
    </div>
</template>

<script>
    import ThumbVideo from '_components/ThumbVideo.vue'

    export default {
        name: 'AllVideosPage',

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
            loaderMore () {
                this.loader = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loader-more {
        width: 40%;
    }
</style>