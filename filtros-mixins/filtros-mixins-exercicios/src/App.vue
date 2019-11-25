<template>
    <div id="app">
        <h1>Filtros & Mixins</h1>
        <hr>
        <p>{{usuarioLogado}}</p>
        <p>{{cpf | cpfMask | inverter}}</p>
        <input type="text" :value="cpf | cpfMask">
        <hr>
        <Frutas/>
        <hr>
        <template>
            <div>
                <ul>
                    <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
                </ul>
                <input type="text" v-model="fruta" @keydown.enter="add">
            </div>
        </template>
    </div>
</template>

<script>
    import frutasMixin from './FrutasMixin'
    import usuarioMixin from './usuarioMixin'
    import Frutas from "./Frutas";

    export default {
        filters: {
            cpfMask(valor) {
                const arr = valor.split('');
                arr.splice(3, 0, '.');
                arr.splice(7, 0, '.');
                arr.splice(11, 0, '-');
                return arr.join('')
            }
        },
        mixins: [frutasMixin,usuarioMixin],
        components: {
            Frutas
        },
		created(){
			console.log('Criado dentro do APP')
		},
        data() {
            return {
                cpf: '60070080090',

            }
        },
        methods: {

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-size: 2.5rem;
    }

    input {
        font-size: 2.5rem;
    }
</style>
