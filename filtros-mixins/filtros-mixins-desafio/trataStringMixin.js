export default {
    filters: {
        trocaEspaco(palavra) {
            return palavra.replace(/ /g, ',')
        }
    },
    computed: {
        ex1() {
            return this.frase
        },
        ex2() {
            return this.frase2
        }
    }
}