<template>
  <ul class="todo-main">
  <!-- 5, li and css move to TodoItem and use item 3 steps-->
  <!-- 6, use it to product more & give it to TodoItemt-->
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
  // 5.1 import TodoItem
  import TodoItem from './TodoItem.vue'

    export default {
      // 5.2 set and receieve
      // 4, declare and recieve the todos
      props: {
        todos: Array,
        deleteTodo: Function
      },

      //5.3
      components: {
        TodoItem
      }
 }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
