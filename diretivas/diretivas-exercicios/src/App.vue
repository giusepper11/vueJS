<template>
    <div id="app">
        <h1>Diretivas</h1>
        <hr>
        <p v-text="'Diretiva v-text'"></p>
        <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
        <hr>
        <p v-destaque>Usando diretiva personalizada</p>
        <p v-destaque="'red'">Usando diretiva personalizada</p>
        <p v-destaque="cor">Usando diretiva personalizada</p>
        <hr>
        <!--		<p v-teste:argumento.mod1.mod2="'valor'"></p>-->
        <p v-destaque:fundo="'red'">Usando diretiva personalizada com argumento</p>
        <hr>
        <p v-destaque:fundo.atrasar="'red'">Usando diretiva personalizada com modificador</p>
        <hr>
        <p v-destaque-local:fundo.atrasar="'red'">Usando diretiva local</p>
        <hr>
        <p v-destaque-local:fundo.atrasar.alternar="'red'">Usando multiplos modificadores</p>
        <hr>
        <p v-destaque-local:fundo.atrasar.alternar="{cor1: 'green', cor2:'red', atraso:2000, intervalo:200}">
            Usando valores complexos</p>
        <p v-destaque-local.atrasar="{cor1: 'green', atraso:5000}">
            Usando valores complexos</p>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                cor: 'blue'
            }
        },
        directives: {
            'destaque-local': {
                bind(el, binding, vNode) {
                    const aplicarCor = cor => {
                        if (binding.arg === 'fundo') {
                            el.style.backgroundColor = cor
                        } else {
                            el.style.color = cor
                        }
                    };
                    let atraso = 0;
                    if (binding.modifiers['atrasar']) atraso = 3000;

                    const cor1 = binding.value.cor1;
                    const cor2 = binding.value.cor2 || 'pink';
                    let corAtual = cor1;
                    setTimeout(() => {
                        if (binding.modifiers['alternar']) {
                            setInterval(() => {
                                corAtual = corAtual === cor1 ? cor2 : cor1;
                                aplicarCor(corAtual)
                            }, binding.value.intervalo);
                        } else {
                            aplicarCor(cor1)
                        }
                    }, binding.value.atraso);

                }
            }
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
</style>
