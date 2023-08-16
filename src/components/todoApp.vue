<script setup>
import { ref } from 'vue';

const task = ref("")

const todo = ref([])


function addTask(){
    todo.value.push(task.value)
    task.value = ""

}



</script> 

<template>

    <div class="todo">

    <form @submit.prevent="addTask">
        <h1>The Todo App</h1>
      <label>
        Task
        <input type="text" v-model="task" placeholder="add task"/>
      </label>
    
   
    <br>
    <button type="submit">Add Task</button>  
    </form>
    <br>
    <div v-if="todo.length >= 1">
        <h1>Task List</h1>
    <ul>
        <li v-for="(index) of todo" :key="index">
            {{index}}

        </li>
    </ul>
    </div>
    <div v-else>
        <p>There are no tasks. Add a task</p>
    </div>

    </div>
    </template>
    
<style>

input{
    margin: 30px;
    height: 30px;
    border: solid 2px;
    border-radius: 10px;
}

button{
    border: solid 2px;
    border-radius: 10px;
    height: 30px;
}
</style>