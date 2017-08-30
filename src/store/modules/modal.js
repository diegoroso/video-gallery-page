export default {
    state: {
        modal: false
    },
    mutations: {
        toggleModal (state) {
            state.modal = !state.modal
        }
    },
    actions: {
        toggleModal (context) {
            context.commit('toggleModal')
        }
    }
}