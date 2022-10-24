<template>
    <main>
        <!-- heading -->
        <header>
            <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
            <h1>Pinia Tasks</h1>
        </header>

        <!-- new task form -->
        <div class="new-task-form">
            <TaskForm/>
        </div>

        <!-- filter -->
        <nav class="filter">
            <button @click="filter = 'all'"  :class="{ 'active': filter === 'all'  }">All Tasks</button>
            <button @click="filter = 'favs'" :class="{ 'active': filter === 'favs' }">Fav Tasks</button>
        </nav>

        <!-- task list -->
        <div class="task-list" v-if="filter === 'all'">
            <p>You have {{ taskStore.totalCount }} task<template v-if="taskStore.totalCount > 1">s</template> left to do:</p>
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'favs'">
            <p>You have {{ taskStore.favCount }} fav<template v-if="taskStore.favCount > 1">s</template> left to do:</p>
            <div v-for="task in taskStore.favs">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script setup>
    import TaskDetails from './components/TaskDetails.vue';
    import TaskForm    from './components/TaskForm.vue';
    import { useTaskStore } from './stores/TaskStore.js';
    import { ref } from 'vue';

    const filter = ref('all');

    const taskStore = useTaskStore();
</script>

<style scoped>

</style>
