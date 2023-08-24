<script setup>

defineProps(['product']);

</script>


<template>
    
    <div>
        <span id="cardItem">
        
        <!-- check and unchecked buttons -->

        <img id="taskLogo" src="@/assets/task.svg" alt="task icon"> 
        <img id="taskLogo" src="@/assets/task.svg" alt="task icon"> 

        <span class="taskDetails">
            <!-- name of task -->
            <p id="tasks">{{index}}</p>
            
            <!-- time of task -->
            <p id="tasks">{{index}}</p>
        </span>
       
       <!-- edit and delete tasks  -->

        <img id="taskLogo" src="@/assets/task.svg" alt="task icon"> 
        <img id="taskLogo" src="@/assets/task.svg" alt="task icon"> 

        <!-- number showing the position of the task -->

        <span class="taskPosition">{{ position }}</span>

        <!-- arrange Tasks up or down -->

        <span class="arrangeTasks">
            <img id="taskLogo" src="@/assets/task.svg" alt="task icon"> 
            <img id="taskLogo" src="@/assets/task.svg" alt="task icon"> 
        </span>
        
       
        <button @click="removeTask(index)">Delete</button>

        </span>
   


</div>


</template>
<style scoped></style>
    