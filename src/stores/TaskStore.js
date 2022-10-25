import {defineStore} from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks  : [],
        loading: false
    }),

    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav);
        },

        favCount() {
            return this.tasks.reduce((accumulator, current) => {
                return current.isFav ? accumulator + 1 : accumulator
            }, 0);
        },

       // using arrow function
        totalCount: (state) => {
            return state.tasks.length;
        }
    },

    actions: {
        async getTasks() {
            this.loading   = true;
            const response = await fetch('http://localhost:3000/tasks');
            this.tasks     = await response.json();
            this.loading   = false;
        },

        addTask(task) {
            this.tasks.push(task);
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id;
            });
        },

        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id);
            task.isFav = !task.isFav;
        }
    }
});
