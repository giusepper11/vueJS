<template>
    <div class="barra-total">
        {{tasksDone}}%
        <div class="progress" :style="{width:tasksDone+'%'}">

        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: ['tasks'],
        computed: {
            tasksDone() {
                if (this.tasks.length === 0) {
                    return 0
                } else {
                    return Math.ceil((this.tasks.filter((a) => a.done === true).length / this.tasks.length) * 100)
                }
            }
        }
    }
</script>

<style scoped>
    .barra-total {
        display: flex;
        width: 80%;
        height: 20px;
        border: 1px solid #AAAAAA;
        justify-content: center;
        position: relative;
    }

    .progress {
        height: 20px;
        width: 100%;
        background-color: green;
        position: absolute;
        left: 0;
        max-width: 100%;
        z-index: -1;
    }
</style>