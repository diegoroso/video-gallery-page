<template>
    <div class="description">
        <v-layout>
            <v-flex xs10>
                <div class="title" v-text="title"></div>
            </v-flex>
            <v-flex xs2>
                <ico icon="views-ico gray-ico" v-tooltip:left="{ html: 'Top tooltip' }"></ico>
                <ico icon="views-ico gray-ico" v-tooltip:right="{ html: 'Top tooltip' }"></ico>
            </v-flex>
        </v-layout>
        <div class="body-1 mt-3" v-text="description"></div>
    </div>
</template>

<script>
    import Ico from '_components/Icons.vue'

    export default {
        name: 'DescriptionVideo',

        components: {
            Ico
        },

        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .description {
        min-height: 50px;

        .body-1 {
            word-wrap: break-word;
        }
    }
</style>