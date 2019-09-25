<template>
    <div class="usuario-lista">
        <table>
            <thead>
            <tr>
                <th>#ID</th>
                <th>Nome</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id" @mouseover="selecionaUser(usuario)" @mouseleave="selecionaUser(false)">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nome }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import barramento from "../barramento";

    export default {
        props: {usuarios: Array},
        methods: {
            selecionaUser(user) {
                barramento.alterarDetalhes({...user})
            }
        }
    }
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
