<template>
    <v-app>
        <main-header></main-header>
        <main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </main>
    </v-app>
</template>

<script>
    import MainHeader from '_components/Header.vue'

    export default {
        name: 'App',

        components: {
            MainHeader
        }
    }
</script>

<style lang="scss"></style>