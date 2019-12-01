<template>
    <div class="usuario-detalhe">
        <h3>Usuario detalhe</h3>
        <p><strong>Código:</strong> {{id}}</p>
        <!--        <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`">-->
        <!--        <router-link tag="button" primario :to="`/usuario/${id}/editar`">editar-->
        <router-link tag="button" primario :to="{name: 'editarUsuario', params: {id},
                        query: {completo: false, lingua:'pt'}, hash:'#rodape'}">
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "UsuarioDetalhe",
        props: ['id'],
        beforeRouteEnter(to, from, next){
            console.log('antes de entrar -> dentro do componente detalhe')
            next()
        }
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     $route(to, from) {
        //         this.id = to.params.id
        //     }
        // }
    }
</script>

<style scoped>

</style>