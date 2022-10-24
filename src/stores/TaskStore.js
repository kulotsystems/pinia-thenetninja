import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: 'buy some milk'  , isFav: false },
            { id: 2, title: 'play Gloomhaven', isFav: true  },
        ]
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
    }
});
