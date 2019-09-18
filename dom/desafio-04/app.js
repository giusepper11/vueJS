new Vue({
    el: '#desafio',
    data: {
        css: 'Init',
        cssex21: 'classe1',
        cssex22: 'classe2',
        cssex3: '',
        cssex41: '',
        cssex42: '',
        cssex5: '',
        percent: 0,
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.css = !this.css
            }, 1000);
        },
        iniciarProgresso() {
            setInterval(() => {
                if (this.percent < 100) {


                    this.percent += 10
                }
            }, 500)


        },
    },
    computed: {
        efeito() {
            if (this.css !== 'Init') {
                return {
                    destaque: this.css,
                    encolher: !this.css
                }
            }

        },

        ex4() {

            return {
                destaque: this.cssex41 === 'true'
            }
        },

        progressBar() {
            return {
                backgroundColor: 'red',
                height: '20 px', margin: '20px',
                width: `${2*this.percent}px`
            };
        }

    }

})
;
