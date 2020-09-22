/*
* 路由器模块
* VueRouter()
* 1，引入他 他是vue插件，vue也要引入
* 2，向外暴露路由器对象;通过new产生路由器对象
* 3，产生N个路由，配置路由route【数组；中有很多对象】 --path: './about',
      component: About -
* 4，引入路由组件About， Home
* 5, 路由器配置，在main.js入口文件配置，刚创建Vue是配置-import router from './router'
*
* */
import Vue from 'vue'
import VueRouter from 'vue-router'


import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'

Vue.use(VueRouter)

export default new VueRouter({ //VueRouter配置他
  //N 个路由
  routes: [
    {
      path: './about',
      component: About
    },
    {
      path: './home',
      component: Home,
      // 2， 映射路由组件
      children: [
        {
          path: '/home/news', // path最左边的/代表根路由，不对
          component: News
        },
        {
          path: '/home/message', //简化写法
          component: Message
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about' //默认请求
    }
  ]
})
