new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibeAlerta() {
            alert('Alerta doido')
        },

        atualizaInputLive(ev) {
            this.valor = ev.target.value
        },

        

    }
})