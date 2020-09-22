<template>
  <div>
    <h2 v-if="firstView">请输入用户名搜索</h2>
    <h2 v-if="loading">LOADING....</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

    export default {
        data () {
            return {
              firstView: true,
              loading: false,
              users: null, //[{url: '', avatar_url: '', name:''}]
              errorMsg: ''
            }
        },
      mounted() {
          // 点击search 以后发ajax请求, 在search点击后，
        // 通知后边得用户做什么事=组件间通信 = 兄弟间得通信
        // 点击search--》 父组件--》main

        // 订阅搜索消息，触发事件
        PubSub.subscribe('search', (msg, searchName)=>{
          //说明需要发AJAX请求进行搜
          const url = `https://api.github.com/search/users?q=${searchName}`

          // 更新状态（请求中）
          this.firstView = false
          this.loading = true
          this.users = null
          this.errorMsg=''

          // 发Ajax请求
          axios.get(url).then(response=>{
            const result = response.data
            const users = result.items.map(item => ({
              url: item.html_url,
              avatar_url: item.avatar_url,
              name:item.login
            }))

            //成功，更新成功状态
            this.loading = false
            this.users = users
          }).catch(error=>{
            this.loading=false
            this.errorMsg="请求失败error!"
          })
          //失败。
        })
      }
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
