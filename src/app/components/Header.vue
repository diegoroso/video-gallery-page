<template>
    <div class="main-header">
        <v-toolbar class="toolbar" dark>
            <v-toolbar-title class="toolbar__logo">
                <img src="~_images/logo.png"></img>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <search class="hidden-xs-only"></search>
            <div @mouseover="menuOpen" @mouseleave="menuClose" class="toolbar__menu hidden-xs-only mr-4">
                <span class="mr-2">MENU</span>
                <ico icon="menu-ico"></ico>
                <div v-show="menu" class="content-menu pa-2">
                    <v-list class="pa-0">
                        <v-list-tile v-for="item in items" :key="item.title">
                            <v-list-tile-action class="content-menu__icon">
                                <ico :icon="item.icon"></ico>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </div>
            </div>
            <div @click.stop="drawer = !drawer" class="toolbar__ico hidden-sm-and-up">
                <ico class="toolbar__ico__menu" icon="menu-ico"></ico>
            </div>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" class="navigation hidden-sm-and-up pa-2 pb-0" temporary overflow absolute right>
            <v-btn class="navigation__close ma-0" @click.stop="drawer = false" icon dark>
                <v-icon ripple dark>close</v-icon>
            </v-btn>
            <div class="text-xs-center py-4">
                <img src="~_images/logo.png"></img>
            </div>
            <search :animate="false" class="mb-2"></search>
            <v-card class="ma-0">
                <v-list class="navigation__menu py-0">
                    <v-list-tile v-for="item in items" :key="item.title">
                        <v-list-tile-action>
                            <ico :icon="item.icon"></ico>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import Ico from '_components/Icons.vue'
    import Search from '_components/Search.vue'

    export default {
        name: 'Header',

        components: {
            Ico,
            Search
        },

        data () {
            return {
                drawer: false,
                menu: false,
                items: [
                    { icon: 'star-ico', title: 'Destaques' },
                    { icon: 'video-ico', title: 'Vídeos' }
                ]
            }
        },

        methods: {
            menuOpen () {
                this.menu = true
            },
            menuClose () {
                this.menu = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~_sass/partials/vars";

    .main-header {

        .toolbar {
            background-color: $color-default !important;

            &__logo {
                display: flex;
            }

            &__menu {
                height: 100%;
                cursor: pointer;
                display: flex;
                position: relative;
                align-items: center;

                .content-menu {
                    top: 56px;
                    right: -15px;
                    width: 270px;
                    border: 1px solid #c8c8c8;
                    z-index: 1;
                    position: absolute;
                    background: #fff;
                    border-radius: 5px;

                    &__icon {
                        min-width: 40px;
                    }

                    &:after{
                        top: -10px;
                        right: 15px;
                        width: 0;
                        height: 0;
                        content: "";
                        position: absolute;
                        border-left: 10px solid transparent;
                        border-right: 10px solid transparent;
                        border-bottom: 10px solid #fff;
                    }
                }
            }

            &__ico {
                width: 16px;
                height: 16px;
                cursor: pointer;

                &__menu {
                    position: absolute;
                }
            }
        }

        .navigation {
            background-color: rgb(178, 68, 102) !important;

            &__menu {
                position: relative;
                background-color: #d3527b !important;
            }

            &__close {
                top: 10px;
                position: absolute;
            }
        }
    }
</style>