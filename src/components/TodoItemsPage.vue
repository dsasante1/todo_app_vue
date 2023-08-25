
<script setup>


import { useTodoStore } from '@/stores/todo'
import TodoCards from './TodoCards.vue'


const store = useTodoStore ()


const {todoContainer} = store 




</script>
<template>
    <div class="summary">
        <span>{{todoContainer.length}} Tasks Added</span> |
        <span>{{todoContainer.length}} Tasks Completed</span> |
        <span>{{todoContainer.length}} Tasks Pending</span> 
    </div>
    
  
    <div id="taskItems" v-if="todoContainer.length >= 1">

    <div v-for="(doTask, index) in todoContainer" :key="index">

        <TodoCards :todoData="doTask" :index="index"/>

</div>


</div>

<div v-else>
    <p>There are no tasks.  Add a task</p>
</div>

</template>



<style scoped>

.summary{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px;
}

</style>
    