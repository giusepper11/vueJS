<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" >
    </div>
</template>

<script>
    import frutasMixin from './FrutasMixin'
    export default {
        name: "Frutas",
        mixins: [frutasMixin],
    }
</script>

<style scoped>

</style>