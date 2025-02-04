import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todosStore', {
    state: () => ({
        todos: [],
    }),
    actions: {
        async setTodos() {
            const res = await $fetch('/api/todos');
            this.todos = res.rows;
        },

        async mark(req) {
            const { id, state } = req;
            const res = await $fetch('/api/mark', {method: 'post', body: {id, state}});
            this.setTodos();
        },

        async deleteTodo(id) {
            const res = await $fetch('/api/delete', {method: 'post', body: {id}});
            this.setTodos();
        },
    },
});
