<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 3, use components-->
      <!--go TodoHeader and declare and recieve-->
      <!--
       二：1. vue 自定义事件:给TodoHeader绑定事件监听addTodo
       绑定事件监听卸载父组件上，代替传递函数，
       父子之间的函数传递

       三， 1，方法绑定：代替函数
       ref 找到标签，但是一般用二，更简单

       四，1，组件间通信 pubSub-js 下载库 没有位置的限制，父子，祖孙都可以
       npm i --save pubsub-js
       消息订阅与发布  = 绑定事件监听和触发事件
       PubSub 向外提供两个方法
       SubScribe
       Publish

       五，1，slot 插槽 外边向里边的传标签 饿了么webApp 头部组件，
       变化 不仅仅是数据变化 设计组件的时候，设计一些占位，给里边传东西，才会显示

       -->
     <!--<TodoHeader @addTodo="addTodo"/>-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer>
        <input type="checkbox" v-model="isAllChecked" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}} / 全部2{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize>0" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
  // 1， 引入组件
    import  TodoHeader from './components/TodoHeader.vue'
    import TodoList from "./components/TodoList.vue"
    import TodoFooter from "./components/TodoFooter.vue"
    import PubSub from 'pubsub-js'
    import storageUtils from './util/storageUtil.js'

    export default {
      // 1,초기화 data
      data () {
        return {
          //从localStorage读取todos
          // 深度监视
          todos: storageUtils.readTodos()
        }
      },

      // 计算属性
      computed:{
        completeSize () {
          return this.todos.reduce((preTotal, todo)=> preTotal + (todo.complete ? 1:0),0)
        },
        isAllChecked: {
          get () {
            return this.completeSize === this.todos.length && this.completeSize > 0
          },
          set (value) {
            this.seleteAllTodos(value)
          }
        }
      },
      /*三， 1，执行一些异步代码
      * 2，绑定addTodo事件监听 给TodoHeader
      * */
      mounted() {
        this.$refs.header.$on('addTodo',this.addTodo)
        //this.$on('addTodo',this.addTodo) // 这是给APP绑定不对啊

        //四，2订阅消息 没有自己的this 用外部的 --箭头函数的作用
        PubSub.subscribe('deleteTodo', (msg,index) => {
          this.deleteTodo(index)
        })
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
          /*handler: function (value) {
            // 将todos最新的值的JSON数据，保存在localStorage
            storageUtils.saveTodos(value)
          }*/
          handler: storageUtils.saveTodos
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
