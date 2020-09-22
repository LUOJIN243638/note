const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { 
	useNewUrlParser: true,useUnifiedTopology: true  })
	.then(()=>{console.log("数据库连接成功！")})
	.catch(err => console.log(err, '数据库连接失败！'))

// 1, 创建用户集合规则
const userSchema = new mongoose.Schema ({
	name: {
		type: String,
		required: true
	}
}) 

// 2，创建文章集合规则
const postSchema =  new mongoose.Schema ({
	title: {
		type: String
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
})

const User = mongoose.model('User',userSchema) 
const Post = mongoose.model('Post', postSchema) 

// 3，创建用户
//User.create({name: 'luojin'}).then(result=>console.log(result))

// 4, 创建一篇文章
//Post.create({title: '你好', author: '5ec25ae06acb0d31482e2dc3'}).then(result=>console.log(result))

// 5, 查询作者信息
Post.find().populate('author').then(result=>console.log(result))