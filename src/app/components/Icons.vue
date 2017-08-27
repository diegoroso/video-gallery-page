<template>
    <i :class="['ico', icon]"></i>
</template>

<script>
    export default {
        name: 'Icons',

        props: {
            icon: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ico {
        background: url('~_images/icons.png');
        background-repeat: no-repeat;
        display: inline-block;

        &.star-ico {
            width: 24px;
            height: 24px;
            background-position-x: 0px;
            background-position-y: 0px;
        }

        &.video-ico {
            width: 24px;
            height: 24px;
            background-position-x: -25px;
            background-position-y: 0px;
        }

        &.search-ico {
            width: 16px;
            height: 16px;
            background-position-x: 0px;
            background-position-y: -25px;
        }

        &.menu-ico {
            width: 16px;
            height: 16px;
            background-position-x: -17px;
            background-position-y: -25px;
        }

        &.views-ico {
            width: 24px;
            height: 19px;
            &.gray-ico {
                background-position-x: -25px;
                background-position-y: -42px;
            }
            &.blue-ico {
                background-position-x: 0px;
                background-position-y: 0px;
            }
        }

        &.date-ico {
            width: 19px;
            height: 19px;
            background-position-x: 0px;
            background-position-y: 0px;
        }
    }
</style>