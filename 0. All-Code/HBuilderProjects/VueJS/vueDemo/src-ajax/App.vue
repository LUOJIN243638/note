<template>
    <div>
      <div v-if="!repoUrl">loading</div>
      <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      repoUrl: '',
      repoName: ''
    }
  },
  mounted() {
    // 发 ajax 请求获取数据,按关注量排序
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    this.$http.get(url).then(
      response => {
        const result = response.data
        mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoUrl = mostRepo.name
      },
      reponse => {
        alert("return error")
      }
    )

    // 使用axios发送Ajax请求
    axios.get(url).then(response => {
      const result = response.data
      mostRepo = result.items[0]
      this.repoUrl = mostRepo.html_url
      this.repoUrl = mostRepo.name
    }).catch(error=>{
      alert("error")
    })
  }
}

</script>

<style scoped>


</style>
