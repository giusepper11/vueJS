new Vue({
    el: '#desafio',
    data: {
        array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
        livro: {
            titulo: 'O Senhor dos Anéis',
            autor: 'J.R.R. Tolkiens',
            volume: '3'
        },
        dataex1: true,
        aluno: {
            id: 10,
            nome: 'Maria',
            notas: [7.67, 8.33, 6.98, 9.21]
        }
    },
    methods: {
        alterap() {
            this.dataex1 = !this.dataex1
        }
    },
    computed: {}
});
