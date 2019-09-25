<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{inverterNome}}</strong></p>
    </div>
</template>

<script>
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
        },
        computed: {
            inverterNome() {
                return this.nome.split('').reverse().join('')
            }
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
