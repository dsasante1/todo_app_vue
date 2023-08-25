
<script setup>


import { useTodoStore } from '@/stores/todo'


const store = useTodoStore ()


const {todoContainer} = store 

</script>
<template>
    <h1>Hello todo Items</h1>
    <h2>{{ todoContainer.length }}</h2>
</template>
<style scoped></style>
    