<script setup>

defineProps(['todoData']);

import { useTodoStore } from '@/stores/todo'


const store = useTodoStore ()


const {
    setCompletedDone, setCompletedPending, 
    changePositionUp, changePositionDown,
     deleteTask, editTask 
    
    } = store 

</script>


<template>

   
    <span class="cardItem">


        <span class="leftContent">
        
        <!-- check and unchecked buttons -->

        <img v-if=" todoData.completed" @click="setCompletedPending(todoData.id)"   id="checkImg" src="@/assets/Rectangle 3.svg" alt="task icon"> 

        <span v-else @click="setCompletedDone(todoData.id)"  id="checkBackground"><img id="checkImg" src="@/assets/charm_tick.svg" alt="task icon"></span> 
        
        <span class="taskDetails">

            <!-- name of task -->
            <b v-if=" todoData.completed" id="tasks">{{ todoData.task }}</b> 
            <b v-else id="tasks"><s>{{ todoData.task }}</s></b>   
            
            <!-- time of task -->
            <span id="tasks">{{ todoData.time }}</span>   <!--{{time}}-->
        </span>



        </span>


       

        <span class="rightContent">

     

       <span>
        <!-- edit and delete tasks  -->

            <img id="editTask"  src="@/assets/akar-icons_edit.svg" alt="task icon"> 


            <img @click="deleteTask(todoData.id)" id="editTask" src="@/assets/Vector.svg" alt="task icon"> 
        </span>

        <!-- number showing the position of the task -->

       <span class="taskPosition">{{todoData.position}}</span>   <!--{{ position }} -->

        <!-- arrange Tasks up or down -->

        <span class="moveTasks">
            <img @click="changePositionUp(todoData.id)" id="arrangeTaskUp" src="@/assets/ant-design_caret-right-outlined.svg" alt="task icon"> 
            <img  @click="changePositionDown(todoData.id)" id="arrangeTaskDown" src="@/assets/ant-design_caret-right-outlined.svg" alt="task icon"> 
        </span>
        

    </span>
       
        <!-- <button @click="removeTask(index)">Delete</button> -->
   


</span>

</template>



<style scoped>



.cardItem{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
    border: solid 1px;

    margin-left: 150px;
    margin-right: 150px;



}


#checkBackground{
    background-color: blue;
  
    align-items: center;
    width: 25px;
    height: 30px;
 
}

#checkBackground img, #checkImg{
    width: 20px;
    height: 20px;
}


#checkImg{
    width: 30px;
    height: 50px;
}


.taskDetails{
    display: flex;
    flex-direction: column;

}


#tasks{
    width: 500px;
}



.leftContent, .rightContent{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
}




.taskPosition{
    background-color: rgb(187, 186, 186);
    width: 50px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
}


#editTask{
    padding: 5px;
}

.moveTasks{
    display: flex;
    flex-direction: column;
}

#arrangeTaskUp{
    width: 20px;
}


#arrangeTaskDown{
    transform: rotate(180deg); 
}

</style>
    