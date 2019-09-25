import Vue from "vue";

export default new Vue({
    methods: {
        alterarDetalhes(user) {
            this.$emit('alterouLista', user)
        },
        quandoAlterouLista(callback) {
            this.$on('alterouLista', callback)
        }
    }
});