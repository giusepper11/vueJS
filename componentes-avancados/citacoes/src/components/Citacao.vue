<template>
    <div class="citacao">
        <!--        TAG VUE pra passar o conteudo montado onde chamou esse container-->
        <slot name="autor"></slot>
        <slot></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
    export default {
        created() {
            console.log('created')
        },
        destroyed() {
            console.log('destroyed')
        },
        // Metodos de ciclo de vida dos componentes dinamicos
        activated() {
            console.log('activated')
        },
        deactivated() {
            console.log('deactivated')
        },

    }
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
    h1 {
        color: red !important;
    }
</style>
