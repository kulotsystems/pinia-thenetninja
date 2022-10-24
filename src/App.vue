<template>
    <main>
        <!-- heading -->
        <header>
            <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
            <h1>Pinia Tasks</h1>
        </header>

        <!-- task list -->
        <div class="task-list">
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script setup>
    import TaskDetails from './components/TaskDetails.vue';
    import { useTaskStore } from './stores/TaskStore.js';

    const taskStore = useTaskStore();
</script>

<style scoped>

</style>
