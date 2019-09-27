<template>
    <div id="app">
        <h1>Tarefas</h1>
        <ProgressBar :tasks="task_list"></ProgressBar>
		<TaskAdder :tasks="task_list"></TaskAdder>
        <Tasks :tasks="task_list"></Tasks>
    </div>
</template>

<script>
    import TaskAdder from "./components/TaskAdder";
    import ProgressBar from "./components/ProgressBar";
    import Tasks from "./components/Tasks";

    export default {
        components: {Tasks, ProgressBar, TaskAdder},
        data: () => {
            return {
                task_list: []
            }
        },

    }
</script>

<style>
    body {
        font-family: 'Lato', sans-serif;
        background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
        color: #FFF;
    }

    #app {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #app h1 {
        margin-bottom: 5px;
        font-weight: 300;
        font-size: 3rem;
    }
</style>
