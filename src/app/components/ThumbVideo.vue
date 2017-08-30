<template>
    <div class="thumb my-2" @click="changeFeature">
        <div class="thumb__media mr-2">
            <div class="thumb__media__img" :style="`background-image: url(${thumb.image.url});`"></div>
            <div class="thumb__media__time px-1" v-text="thumb.time"></div>
            <div class="thumb__media__shadow"></div>
        </div>
        <div class="thumb__description">
            <p class="thumb__description__titles my-2 color-default" v-text="thumb.title"></p>
            <div class="thumb__description__views"><ico icon="views-ico gray-ico mr-2"></ico> {{ thumb.views }} views</div>
        </div>
    </div>
</template>

<script>
    import Ico from '_components/Icons.vue'

    export default {
        name: 'ThumbVideo',

        components: {
            Ico
        },

        props: {
            thumb: {
                type: Object,
                required: true
            }
        },

        methods: {
            changeFeature () {
                this.$store.dispatch('changeFeature', this.thumb)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .thumb {
        cursor: pointer;
        @media (min-width: 600px) {
            display: flex;
        }

        &__media {
            position: relative;
            max-height: 95px;

            @media (max-width: 599px) {
                width: 100%;
                max-height: 150px;
            }

            &__img {
                width: 170px;
                height: 95px;
                background-size: cover;
                background-position: center;

                @media (max-width: 599px) {
                    width: 100%;
                    height: 150px;
                }
            }

            &__shadow {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                position: absolute;
                background: rgba(255, 255, 255, 0.4);
            }

            &__time {
                right: 10px;
                color: #fff;
                bottom: 0;
                position: absolute;
                background: rgba(0, 0, 0, 0.6);
                font-weight: bold;
            }
        }

        &__description {
            display: grid;
            align-content: space-between;

            &__titles {
                display: -webkit-box;
                overflow: hidden;
                font-size: 18px;
                line-height: 20px;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;

                @media (max-width: 599px) {
                    margin: 10px 0px;
                }
            }

            &__views {
                display: flex;
                color: #c8c8c8;
                font-weight: bold;
            }
        }

        &:hover {
            .thumb__media__shadow {
                background: transparent;
            }
        }
    }
</style>