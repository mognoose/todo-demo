<template>
    <hr>
    <table>
        <tr class="list" v-for="(todo, index) in todos" :key="`todo-${index}`">
            <td @click="mark(todo.id, !todo.done)" :class="{done: todo.done}">
                <span>{{ todo.title }}</span>
            </td>
            <td @click="deleteTodo(todo.id)">
                <span>🚮</span>
            </td>
        </tr>
    </table>
</template>

<script setup>
import { useTodosStore } from '/store/todo';
import { storeToRefs } from 'pinia';

const todosStore = useTodosStore();
const {todos} = storeToRefs(todosStore);

onMounted(() => {
    getTodos();
});

const getTodos = async () => {
    todosStore.setTodos();
};

const mark = (id, state) => {
    todosStore.mark({id, state});
}

const deleteTodo = (id, state) => {
    todosStore.deleteTodo({id, state});
}

</script>

<style scoped>
.done {
    text-decoration: line-through;
}
span {
    cursor: pointer;
}

tr {
    border-bottom: 1px solid gray;
}
</style>