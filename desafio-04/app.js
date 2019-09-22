new Vue({
	el: '#desafio',
	data: {
		efeitoStyle : 'Init'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.efeitoStyle = !this.efeitoStyle				
			}, 1000);

		},
		iniciarProgresso() {

		}
	},
	computed:{
		trocaEstilo ()  {
			
			console.log(this.efeitoStyle);
			
			if (this.efeitoStyle !== 'Init'){

				return {
					destaque : this.efeitoStyle,
					encolher : !this.efeitoStyle
				}
			} 

		}
	}
})
