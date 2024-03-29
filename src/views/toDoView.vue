<script setup>
import { ref, watch, computed } from 'vue';
import { uid } from 'uid';
import ToDoCreator from '../components/toDoCreator.vue';
import ToDoItem from '../components/toDoItem.vue';
import { Icon } from "@iconify/vue";


const todoList = ref([]);

watch(todoList, () => {
  setTodoListLocalStorage();
}, {
  deep: true,
});

const todoCompleted = computed(() => {
  return todoList.value.every((todo) => todo.isCompleted)
});

const setTodoListLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
};

const fetchTodoList = () => {
  const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
  if (savedTodoList) {
    todoList.value = savedTodoList;
  }
}

fetchTodoList();

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: null,
    isEditing: null,
  });
;}

const toggleTodoComplete = (todoPos) => {
  todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted;
};

const toggleEditTodo = (todoPos) => {
  todoList.value[todoPos].isEditing= !todoList.value[todoPos].isEditing;
};

const updateTodo = (todoVal, todoPos) => {
  todoList.value[todoPos].todo = todoVal;
};

const deleteTodo = (todoId) => {
  todoList.value = todoList.value.filter((todo) => todo.id != todoId);
};

</script>

<template>
  <main>
    <h1>Create To-Do</h1>
    <ToDoCreator @create-todo="createTodo" />
    <ul class="todo-list" v-if="todoList.length > 0">
      <ToDoItem 
        v-for="(todo, index) in todoList" 
        :todo="todo" 
        :index ="index" 
        @toggle-complete = "toggleTodoComplete"
        @edit-todo = "toggleEditTodo" 
        @update-todo = "updateTodo"
        @delete-todo = "deleteTodo"
      />
    </ul>
    <p class="todos-msg" v-else>
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no to-do's to complete! Add one!</span>
    </p>
    <p class="todos-msg" v-if="todoCompleted && todoList.length > 0">
      <Icon icon="noto-v1:party-popper" />
      <span>You have completed all your to-do's! Cheers!</span>
    
    </p>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>
