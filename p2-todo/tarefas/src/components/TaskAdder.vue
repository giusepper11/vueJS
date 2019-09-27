<template>
    <div>
        <input type="text" id="task-input" placeholder="Nova Tarefa?" v-model="task_input">
        <button @click="addTask">+</button>
    </div>

</template>

<script>
    import TaskModel from '../models/TaskModel'

    export default {
        data: () => {
            return {
                task_input: ''
            }
        },
        props: ['tasks'],
        methods: {
            addTask() {
                let tasksnames = this.tasks.map(a => a.taskname);
                if ((this.task_input.length > 0) && (tasksnames.indexOf(this.task_input) === -1)) {
                    this.tasks.push(new TaskModel(this.task_input));
                    this.task_input = ''
                }

            }
        }
    }
</script>

<style scoped>

</style>