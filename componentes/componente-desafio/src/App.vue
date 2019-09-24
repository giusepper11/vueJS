<template>
    <v-app>
        <Navbar/>
        <Toolbar/>
        <Carousel/>
        <Footer/>
    </v-app>
</template>

<script>


    import Navbar from "./Navbar";
    import Toolbar from "./Toolbar";
    import Carousel from "./Carousel";
    import Footer from "./Footer";

    export default {
        components: {
            Navbar,
            Toolbar,
            Carousel,
            Footer
        },

    }
</script>
