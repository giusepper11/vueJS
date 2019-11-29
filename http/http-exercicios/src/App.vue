<template>
    <div id="app" class="container">
        <h1>HTTP com Axios</h1>
        <b-card>
            <b-form-group label="Nome:">
                <b-form-input type="text" size="lg"
                              v-model="usuario.nome"
                              placeholder="Informe nome"/>
            </b-form-group>
            <b-form-group label="Email:">
                <b-form-input type="email" size="lg"
                              v-model="usuario.email"
                              placeholder="Informe Email"/>
            </b-form-group>
            <hr>
            <b-button @click="salvar" variant="danger" size="lg">Salvar</b-button>
            <b-button @click="obterUsuarios" variant="primary" size="lg" class="ml-2">Obter usuarios</b-button>
        </b-card>
        <hr>
        <b-list-group>
            <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
                <strong>Nome:</strong>{{usuario.nome}} <br>
                <strong>Email:</strong>{{usuario.email}} <br>
                <strong>ID:</strong>{{id}} <br>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    // import axios from 'axios'
    // axios localmente

    export default {
        data() {
            return {
                usuarios: [],
                usuario: {
                    nome: '',
                    email: ''
                }
            }
        },
        methods: {
            salvar() {
                console.log({...this.usuario});
                this.$http.post('usuarios.json', this.usuario)
                    .then(resp => {
                        this.usuario = {nome: '', email: ''}
                    })
            },
            obterUsuarios() {
                this.$http.get('https://curso-vue-e6bbc.firebaseio.com/' + 'usuarios.json')
                    .then(resp => {
                        // console.log(resp)
                        this.usuarios = resp.data;
                        console.log(this.usuarios)
                    })

            }
        }
        // created() {
        //     console.log('exec!!')
        //     this.$http.post('usuarios.json', {
        //         nome: 'Maria',
        //         email: 'teste@gmail.com'
        //     }).then(result => console.log(result))
        // }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 1.5rem;
    }

    #app h1 {
        text-align: center;
        margin: 50px;
    }
</style>
