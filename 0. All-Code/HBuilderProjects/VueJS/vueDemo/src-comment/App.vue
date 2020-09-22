<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
    <!-- 将左右连那个部分拆分，在这里引用两个组件 3步   -->
    <!--3，使用-->
      <Add :addComment = "addComment"/>
      <List :comments="comments" :deleteComment = "deleteComment"/>
    </div>
  </div>
</template>

<script>
  // 1， 引入组件
  import Add from './components/Add.vue'
  import List from "./components/List.vue"

    export default {

      data () {
        return{
          comments: [
            {
              name: 'LUOJIN',
              content: 'Vue hahahha'
            },
            {
              name: 'LUO',
              content: 'Vue heiheihei'
            },
            {
              name: 'JIN',
              content: 'Vue heheheee'
            }
          ]
        }
      },

      methods: {
        // add comments before array = unshift ,
        addComment (comment) {
          this.comments.unshift(comment)
        },
        // delete 指定下标的评论
        deleteComment(index){
          this.comments.splice(index, 1)
        }
      },
        // 2, 映射成标签
      components: {
        Add,
        List
      }
    }
</script>

<style scoped>

</style>
