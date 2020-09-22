<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 3, use components-->
      <!--go TodoHeader and declare and recieve-->
      <TodoHeader :addTodo='addTodo'/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :seleteAllTodos="seleteAllTodos"/>
    </div>
  </div>
</template>

<script>
  // 1， 引入组件
    import  TodoHeader from './components/TodoHeader.vue'
    import TodoList from "./components/TodoList.vue"
    import TodoFooter from "./components/TodoFooter.vue"

    export default {
      // 1,초기화 data
      data () {
        return {
          //从localStorage读取todos
          // 深度监视
          todos: JSON.parse(window.localStorage.getItem("todos_key") || '[]')
        }
      },

      // update data
      methods: {
        addTodo(todo) {
          // remove and tell todoheader
          this.todos.unshift(todo)
        },

        deleteTodo(index){
          this.todos.splice(index,1)
        },

        //删除所有选中的todo
        deleteCompleteTodos(){
          this.todos = this.todos.filter(todo=>!todo.complete)

        },

        //全选或者全部选，
        seleteAllTodos (check) {
          this.todos.forEach(todo=>todo.complete = check)
        }
      },

      // 深度监视
      watch: {
        todos: {
          deep: true,
          handler: function (value) {
            // 将todos最新的值的JSON数据，保存在localStorage
            window.localStorage.setItem("todos_key",JSON.stringify(value))
          }
        }

      },
        // 2, 映射成标签
      components: {
        TodoHeader,
        TodoList,
        TodoFooter
      }
    }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
