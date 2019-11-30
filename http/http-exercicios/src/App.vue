<template>
    <div id="app" class="container">
        <h1>HTTP com Axios</h1>
        <b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.kind">
            {{mensagem.texto}}
        </b-alert>
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
            <b-button @click="salvar" variant="success" size="lg">Salvar</b-button>
            <b-button @click="obterUsuarios" variant="primary" size="lg" class="ml-2">Obter usuarios</b-button>
        </b-card>
        <hr>
        <b-list-group>
            <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
                <strong>Nome:</strong>{{usuario.nome}} <br>
                <strong>Email:</strong>{{usuario.email}} <br>
                <strong>ID:</strong>{{id}} <br>
                <b-button variant="warning" size="lg"
                          @click="carregar(id)">Carregar
                </b-button>
                <b-button variant="danger" size="lg" class="ml-2"
                          @click="excluir(id)">Excluir
                </b-button>
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
                mensagens: [],
                usuarios: [],
                id: null,
                usuario: {
                    nome: '',
                    email: ''
                }
            }
        },
        methods: {
            salvar() {
                const metodo = this.id ? 'patch' : 'post';
                const finalUrl = this.id ? `/${this.id}.json` : '.json';
                this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
                    .then(_ => {
                            this.limpar();
                            this.mensagens.push({
                                texto: 'Operação realizada com sucesso',
                                kind: 'success'
                            })
                        }
                    )
            },

            obterUsuarios() {
                this.$http.get('https://curso-vue-e6bbc.firebaseio.com/' + 'usuarios.json')
                    .then(resp => {
                        // console.log(resp)
                        this.usuarios = resp.data;
                        console.log(this.usuarios)
                    })
            },

            limpar() {
                this.usuario.nome = '';
                this.usuario.email = '';
                this.id = null;
                this.mensagens = []
            },
            carregar(id) {
                this.id = id;
                this.usuario = {...this.usuarios[id]}
            },
            excluir(id) {
                this.$http.delete(`/usuarios/${id}.json`)
                    .then(_ => this.limpar())
                    .catch(err => {
                        this.mensagens.push({
                            texto: 'Problemas para excluir',
                            kind: 'danger'
                        })
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
