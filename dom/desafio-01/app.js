new Vue({
    el: '#desafio',

    data: {
        nome: 'Giuseppe',
        idade:27,
        image: 'https://pplware.sapo.pt/wp-content/uploads/2017/06/google_00-1.jpg'
    },

    methods:{

        randNumber: function(){
            return Math.random()
        }

    }



})