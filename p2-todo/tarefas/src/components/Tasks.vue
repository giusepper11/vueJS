<template>
    <div class="tasks-container">
        <div v-for="(task, ix) in tasks" :key="ix" :class="[(task.done) ? 'task-done':'task-undone']">
            {{task.taskname}}
            <button @click="task.done = !task.done">Done</button>
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tasks",
        props: ['tasks'],
    }
</script>

<style scoped>
    .task-done {
        color: green;
        font-size: 1.7rem;
    }

    .task-undone {
        color: red;
        font-size: 1.7rem;
    }
</style>