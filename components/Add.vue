<template>
    <form @submit.prevent="add()">
        <input type="title" v-model="title">
        <button type="submit">add</button>
    </form>
</template>

<script setup>
import { useTodosStore } from '/store/todo';
const todosStore = useTodosStore();

const title = ref('');

const add = async () => {
    const options = {
        method: 'post',
        body: { title: title.value },
    };
    const res = await $fetch('api/add', options);
    todosStore.setTodos();
    title.value = '';
}
</script>