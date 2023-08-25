import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { todoData } from '../data/data.js';

export const useTodoStore = defineStore('todo', () => {
  

  const task = ref("")


  const todoContainer = ref(todoData)

  const deletedTodoContainer = ref([])


  const newTask = ref({})


  const newTask  = computed({
    get() {
      return someStore.someState
    },
    set(val) {
      someStore.someState = val
    }
  })




  function addTask(){

    if(task.value !== ""){

      newTask.value = {
        id: todoContainer.value.length + 1,
        task: task.value,
        time: "now", 
        position: todoContainer.value.length += 1,
        completed: false
      }

      todoContainer.value.push(newTask.value)

      task.value = ""
    }


  }

  const taskIndex = ref(0)

  function deleteTask(removeTask){
    
    taskIndex.value = todoContainer .value.indexOf(removeTask)

    todoContainer .value.splice(removeTask.value, 1)

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




  return {
    editTask,
    setCompletedDone, setCompletedPending,
    changePositionUp, changePositionDown,
    task, todoContainer, deletedTodoContainer,
    addTask, deleteTask 
  
  }
})

