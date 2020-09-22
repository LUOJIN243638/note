<template>
  <div class="container">
    <search/>
    <userMain/>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Main from './components/Main.vue'

    export default {
      components: {
        Search,
        userMain: Main
      }
    }
</script>

<style scoped>

</style>
