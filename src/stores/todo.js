import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('todo', () => {
  

  const task = ref("")
  const todoContainer = ref([])

  const deletedTodoContainer = ref([])




  function addTask(){
    todoContainer.value.push(task.value)
    task.value = ""

  }

  const taskIndex = ref(0)

  function deleteTask(deleteTask){
    
    taskIndex.value = todoContainer .value.indexOf(deleteTask)

    todoContainer .value.splice(deleteTask.value, 1)

    deletedTodoContainer.value.push(task.value)

    task.value = ""

}


  return {addTask, deleteTask }
})

