<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Home</a></router-link>
            <router-link to="/usuario" tag="li" active-class="active">
                <a>Users</a></router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>