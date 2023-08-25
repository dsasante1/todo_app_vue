import { ref, computed} from 'vue'
import { defineStore } from 'pinia'
import { todoData } from '../data/data.js';

export const useTodoStore = defineStore('todo', () => {
  

  const task = ref("")


  const todoContainer = ref(todoData)


  const deletedTodoContainer = ref([])

  const date = ref(new Date())


  const newTask = ref({})


 
    // add new task

  function addTask(){

    if(task.value !== ""){

      newTask.value = { 
      id: todoContainer.value.length,
      task: task.value,
      time: date.value.toGMTString(),   //
      position: todoContainer.value.length + 1,
      completed: true

    } 
      
      todoContainer.value.push(newTask.value)

      task.value = ""
    }


  }


   function deleteTask(removeTask){

    todoContainer.value.splice(removeTask, 1)

    deletedTodoContainer.value.push(task.value)

    task.value = ""

}

  // const currentPosition = ref(0)

  function changePositionUp(todoId){

    todoContainer.value[todoId].position += 1


    

  }


  function changePositionDown(todoId){
    if(todoContainer.value[todoId].position > 0){
      todoContainer.value[todoId].position -= 1

    } 
  }

  function setCompletedDone(todoId){
    todoContainer.value[todoId].completed = true

  }


  function setCompletedPending(todoId){
    todoContainer.value[todoId].completed = false

  }


  function editTask(todoId, newTask){
    todoContainer.value[todoId].task = newTask

  }



  const completedTasks = ref(0);
  const pendingTasks = ref(0);


  const numberOfCompletedTasks = computed(
      function getDone(){
        for(let task in todoContainer){
          if (task.completed === true){
                  completedTasks.value += 1
          }  
      }
  return completedTasks.value
   }
  )


  const numberOfPendingTasks = computed(
    function getDone(){
      for(let task in todoContainer){
        if (task.completed === false){
                pendingTasks.value += 1
        }  
    }
  return pendingTasks.value
 }
)








for(let task in todoContainer){
    if (task.completed === true){
            completedTasks.value += 1
    }else{
        pendingTasks.value += 1
    }
}



  return {
    editTask, newTask, numberOfPendingTasks, numberOfCompletedTasks ,
    setCompletedDone, setCompletedPending,
    changePositionUp, changePositionDown,
    task, todoContainer, deletedTodoContainer,
    addTask, deleteTask 
  
  }
})

