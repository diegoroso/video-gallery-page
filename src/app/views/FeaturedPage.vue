<template>
    <v-layout row wrap>
        <v-flex class="px-3" xs12 md8 lg8>
            <div class="display-1 my-4">Vídeo em destaque</div>
            <featured-video></featured-video>
        </v-flex>
        <v-flex class="px-3" xs12 md4 lg4>
            <div class="display-1 my-4">+ Vídeos</div>
        </v-flex>
    </v-layout>
</template>

<script>
    import FeaturedVideo from '_components/FeaturedVideo.vue'

    export default {
        name: 'FeaturedPage',

        components: {
            FeaturedVideo
        }
    }
</script>

<style lang="scss" scoped></style>