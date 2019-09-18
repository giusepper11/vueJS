new Vue({
	el: '#desafio',
	data: {
		css: 'Init'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.css = !this.css
			}, 1000);
		},
		iniciarProgresso() {

		}
	},
	computed: {
		efeito() {
			if (this.css !== 'Init') {
				return {
					destaque: this.css,
					encolher: !this.css
				}
			}

		}
	}

})
