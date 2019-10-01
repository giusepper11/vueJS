<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task v-for="(task, id) in tasks" :key="task.name" :task="task"
                  @taskDeleted="$emit('taskDeleted',id)"
                  @taskStateChanged="$emit('taskStateChanged',id)"></Task>
        </template>
        <p v-else class="no-task">Sua vida está em dia</p>
    </div>
</template>

<script>

    import Task from "./Task";

    export default {
        name: "TaskGrid",
        props: {
            tasks: {type: Array, required: true}
        },
        components: {Task}
    }
</script>

<style scoped>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #aaa;
        font-size: 1.2rem;
    }
</style>