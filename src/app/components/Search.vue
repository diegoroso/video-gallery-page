<template>
    <div :class="[{'animate' : animate}, 'input-search mr-4']">
        <input ref="input" type="text">
        <ico icon="search-ico" @click="focusInput" class="input-search__icon mr-2"></ico>
    </div>
</template>

<script>
    import Ico from '_components/Icons.vue'

    export default {
        name: 'InputSearch',

        components: {
            Ico
        },

        props: {
            animate: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            focusInput () {
                if (this.animate) {
                    this.$refs.input.focus()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-search {
        height: 34px;
        display: flex;
        position: relative;
        align-items: center;

        input {
            color: #FFF;
            height: 34px;
            cursor: pointer;
            border: 1px solid #FFF;
            padding: 6px;
            outline: none;
            border-radius: 5px;
            padding-right: 25px;

            &:focus {
                cursor: text;
                background: rgba(0, 0, 0, 0.1);
            }
        }

        &:not(.animate) {
            width: 100%;

            input {
                width: 100%;
                padding-right: 30px;
            }

            .input-search__icon {
                right: 5px;
                position: absolute;
            }
        }

        &.animate {
            input {
                top: 0;
                right: 0;
                width: 0px;
                opacity: 0;
                position: absolute;
                transition: width 1s cubic-bezier(0.000, 0.000, 0.000, 1.000), opacity .4s linear;

                &:focus {
                    width: 200px;
                    opacity: 1;
                    transition: width 1s cubic-bezier(0.000, 0.000, 0.000, 1.000), opacity 1s linear;
                }
            }
        }

        &__icon {
            cursor: pointer;
        }
    }
</style>