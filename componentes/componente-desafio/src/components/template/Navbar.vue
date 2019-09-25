<template>
    <v-navigation-drawer app>
        <Navtoolbar/>
        <v-divider></v-divider>
        <Menulist/>
    </v-navigation-drawer>
</template>

<script>
    import Navtoolbar from "./Navtoolbar";
    import Menulist from "./Menulist";

    export default {
        name: "Navbar",
        components: {
            Navtoolbar,
            Menulist,
        },
    }
</script>

<style scoped>

</style>