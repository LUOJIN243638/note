const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true,useUnifiedTopology: true  })
	.then(()=>{console.log("数据库连接成功！")})
	.catch(err => console.log(err, '数据库连接失败！'))


//1, 创建集合规则
const courseSchema = new mongoose.Schema ({
	name: String,  //课程名字
	author: String,  //课程作者
	isPublic: Boolean  //是否发布，状态
}) 
//2，使用规则创建集合
const Course = mongoose.model('Course', courseSchema) //数据库中courses

//3. 插入文档数据方法2
/*Course.create({
	name: 'JS',
	author: 'professor LUO',
	isPublic: false
},(err,result) => {
	console.log(err)
	console.log(result)
})*/

Course.create({name: 'JS2', author: 'professor LUO', isPublic: false})
.then(result => {
	console.log(result)
}) 