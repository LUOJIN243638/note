<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click = "add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
      //指定属性命/属性值的类型/必要性
      //接收父组件的数据
      props: {
        addComment: {
          type: Function,
          required: true
        }
      },

      //一旦在input 写入 v-model 就去定义方法 data() {return { }}
      data(){
        return{
          name: '',
          content: ''
        }
      },
      methods: {
        add () {
          // 0，先检查输入的合法性 const 取出name comment
          const name = this.name.trim()
          const content = this.content.trim()
          if(!name || !content){ // all is false,return
            alert("姓名或者内容不能为空")
            return
          }
          //1，根据输入的数据，封成一个comment对象
          const comment = {
            name,
            content
          }
          //2，添加到comments中,在App组件，数据在那个组件，更新数据的行为（方法）就应该定义在那个组件
          this.addComment(comment)

          //3，clear input
          this.name = ''
          this.content = ''
        }
      }
    }
</script>

<style scoped>

</style>
