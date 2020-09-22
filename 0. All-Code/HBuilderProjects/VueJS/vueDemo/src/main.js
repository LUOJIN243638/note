import Vue from 'vue'
import App from './App.vue'
import router from './router' //5.1引入路由器

new Vue({ //*****配置对象：固定得属性名，不能随便修改
  el: "#app",
  components: { App },
  template: '<App/>',
  router //5.2 配置路由器
})

