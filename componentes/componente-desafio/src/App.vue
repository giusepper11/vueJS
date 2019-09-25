<template>
    <v-app>
        <Navbar/>
        <Toolbar/>
        <Carousel/>
        <Footer/>
    </v-app>
</template>

<script>


    import Navbar from "./components/template/Navbar";
    import Toolbar from "./components/template/Toolbar";
    import Carousel from "./components/widgets/Carousel";
    import Footer from "./components/template/Footer";

    export default {
        components: {
            Navbar,
            Toolbar,
            Carousel,
            Footer
        },

    }
</script>
