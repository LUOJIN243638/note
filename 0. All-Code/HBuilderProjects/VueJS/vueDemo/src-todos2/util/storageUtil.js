/*
* 使用localStorage存储数据的工具模块
* 看向外暴露几个功能
* 1，函数：一个功能
* 2，对象：多个功能多个模块
读写功能
* * */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos(todos){
    window.localStorage.setItem(TODOS_KEY ,JSON.stringify(todos))
  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')

  }
}
