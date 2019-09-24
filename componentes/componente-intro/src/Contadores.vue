<template>
    <div class="contadores">
        <Contador v-for="c in 5" :key="c"></Contador>
    </div>
</template>

<script>
    import Contador from "./Contador";

    export default {
        name: "Contadores",
        components: {
            Contador
        }
    }
</script>

<style scoped>

</style>