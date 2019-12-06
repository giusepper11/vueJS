<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Stock from "../portfolio/Stock";

    export default {
        name: "Portfolio",
        components: {Stock},
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio' //cria uma variavel computada stocks
            })
        }
    }
</script>

<style scoped>

</style>