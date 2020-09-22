/*
1,创建入口文件jS ,
2, 在创建一个外层组件App.vue
3, 创建一个外部文件夹Components:里边是拆分的静态页面
  - 左边 Add.vue
  - 右边 List.vue
  - 右边的里边 Item.vue
4,写main.js因为他是固定不变的

上面完成之后
实现静态组件，拆分样式
1,在页面映入css样式
*/

// 1，引入，大小写注意
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// 声明使用插件
Vue.use(VueResource) //内部会给vm对象和组件对象添加一个属性：$http

// 2，new Vue 实例：将其映射成标签,再写一个模板
new Vue({
  el: "#app",
  components: { App },
  template: '<App/>'
})

