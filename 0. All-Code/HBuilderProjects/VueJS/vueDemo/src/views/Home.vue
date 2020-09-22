<template>
  <div>
    <h2>Home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!--3，使用路由组件-->
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
          <!--<a href="#/home/news" class="router-link-exact-active router-link-active">News</a>-->
        </li>
        <!--<li>
          <a href="#/home/message" class="">Message</a>
        </li>-->
      </ul>
      <ul>
        <router-view></router-view>
        <!--<li>News001</li>
        <li>News002</li>
        <li>News003</li>-->
        <hr />
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
