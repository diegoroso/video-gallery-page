<template>
    <v-dialog v-if="open" v-model="open" absolute>
        <v-icon @click="closeModal" class="close">close</v-icon>
        <v-card class="pa-4">
            <iframe class="mt-4" :src="`https://www.youtube.com/embed/${feature.id}?iv_load_policy=3&modestbranding=1&rel=0&autoplay=1&showinfo=0`" frameborder="0"></iframe>
            <description class="my-2" v-if="feature.title"></description>
        </v-card>
    </v-dialog>
</template>

<script>
    import Description from '_components/DescriptionVideo.vue'

    export default {
        name: 'VideoModal',

        components: {
            Description
        },

        computed: {
            feature () {
                return this.$store.state.videos.feature
            },
            open () {
                return this.$store.state.modal.modal
            }
        },

        methods: {
            closeModal () {
                this.$store.dispatch('toggleModal')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .close {
        top: 15px;
        right: 15px;
        cursor: pointer;
        z-index: 1;
        position: absolute;
        font-size: 16px;
        font-weight: bold;
    }

    iframe {
        width: 100%;
        height: 290px;

        @media (max-width: 600px) {
            width: 100%;
            height: 125px;
        }
    }
</style>