<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{inverterNome}}</strong></p>
        <p>Idade do Usuario <strong>{{idade}}</strong></p>

        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
    import barramento from "../barramento";

    export default {
        props: {
            nome: {
                type: String, //checa tipo de dado recebido
                // required: true, // checa se prop foi inserida,
                default: 'Alo' // Valor padrao da prop
                // default: () => {
                //     return Array(10).fill(0).join(',')
                // } // Default gerado por função
            },
            reiniciarFn : Function,
            idade: Number
        },
        computed: {
            inverterNome() {
                return this.nome.split('').reverse().join('')
            },
        },
        methods: {
            reiniciarNome() {
                this.nome = 'Pedro';
                this.$emit('nomeMudou', this.nome)
            }
        },
        created() {
            barramento.$on('idadeMudou',(idade)=>{
                this.idade = idade
            })
        }
    }
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
