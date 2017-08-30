<template>
    <div>
        <iframe :src="`https://www.youtube.com/embed/${feature.id}?iv_load_policy=3&modestbranding=1&rel=0&autoplay=1&showinfo=0`" frameborder="0"></iframe>
        <v-card class="card-description mt-4 pa-4">
            <description v-if="feature.title"></description>
            <div v-if="feature.description" class="shadow-effect"></div>
        </v-card>
    </div>
</template>

<script>
    import Description from '_components/DescriptionVideo.vue'

    export default {
        name: 'FeaturedVideo',

        components: {
            Description
        },

        props: {
            feature: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    iframe {
        width: 100%;

        @media (min-width: 1424px) {
            height: 520px;
        }
        @media (min-width: 1024px) and (max-width: 1423px) {
            height: 368px;
        }

        @media (min-width: 400px) and (max-width: 1024px) {
            height: 324px;
        }

        @media (max-width: 399px) {
            height: 210px;
        }
    }

    .card-description {
        max-height: 156px;
        overflow: hidden;
        transition: max-height 2s;

        .shadow-effect {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50%;
            transition: box-shadow 2s ease-in-out;
            box-shadow: inset 0px -80px 100px 0px white;
        }

        &:hover {
            transition: max-height 2s ease-in-out;
            max-height: 1000px;
            overflow: auto;

            .shadow-effect {
                visibility: hidden;
                box-shadow: inset 0px 0px 0px 0px white;
                transition: box-shadow 1s ease-in-out, visibility 1s;
            }
        }
    }
</style>