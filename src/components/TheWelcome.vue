<script setup>
import { ref } from 'vue';

const task = ref("")

const todo = ref([])

const date = ref(new Date())


function addTask(){
    if (task.value !== ""){
    todo.value.push(task.value)
    task.value = ""
    }

}


const taskIndex = ref(0)


function removeTask(deleteTask){
    
    taskIndex.value = todo.value.indexOf(deleteTask)

    todo.value.splice(taskIndex.value, 1)

   

}



</script> 

<template>

    <div class="todo">
        <div class="addTodo">
            <input type="text" v-model="task" placeholder="add task"/>

        </div>
        

    
   
    <br>
    <button id="submit" type="submit" @click="addTask">Add Task</button>  

    <br>
    <div id="taskItems" v-if="todo.length >= 1">
        <h1>Task List</h1>
    
        <span v-for="(index, value) of todo" :key="value">
            <span id="cardItem">
            <img id="taskLogo" src="@/assets/task.svg" alt="task icon"> 
            <span id="tasks">{{index}}</span>
            
            <span id="taskDate">{{ date.toGMTString() }}</span>
           
            <button @click="removeTask(index)">Delete</button>

            </span>
         

        </span>
       
  
    </div>
    <div v-else>
        <p>There are no tasks. Add a task</p>
    </div>

    </div>



    
    </template>
    
<style>


.todo{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.addTodo{
    padding: 20px;
}

input{

    height: 40px;
    width: 400px;
    border: solid 2px;
    border-radius: 10px;
    text-align: center;
}

button{
    border: solid 2px;
    border-radius: 10px;
    height: 40px;
    width: 100px;
}

#taskItems{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;   
}

#taskLogo{
    width: 25px;
    height: 30px;
}

#cardItem{
    
    display: flex;
    flex-direction: row;

    gap: 30px;
}

#tasks{
    font-size: large;
    width: 100px;
    word-wrap: normal;
    word-break: break-all;
 
}


#taskDate{
    font-size: large;
    width: 500px;
    text-align: center;
}


</style>