const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { 
	useNewUrlParser: true,useUnifiedTopology: true  })
	.then(()=>{console.log("数据库连接成功！")})
	.catch(err => console.log(err, '数据库连接失败！'))

const postSchema = new mongoose.Schema ({
	title: {
		type:String,  
		required: [true, '请传入文章标题'], // 1,必选字段
		minlength: [2, '文章长度不能小于2'], 
		maxlength: [5, '文章长度不能超过5'],
		trim: true  //2, 去除字符串两边的空格
	},
	age: {
		type:Number,
		min: [18, '年龄最小不能小于18岁'],
		max: [100, '年龄最大不能超过100岁']
	},
	publishDate: {
		type: Date,
		default: Date.now   // 3, 默认值
	},
	category: {
		type: String,
		enum: {   // 4, 枚举当前字段可以有的值
			values: ['html','css','js','node.js'],
			message: '分类名称要在一定的范围内才可以'
		}
	},
	author: {
		type: String,
		validate: {
			validator: (v) =>{
				// 5，返回布尔值，true表示验证成功 v=要验证的值
				return v && v.length > 4
			},  // 6，自定义错误信息
			message: '传入的值不符合验证规则'
				
		}
	}
}) 
const Post = mongoose.model('Post', postSchema) //数据库中courses

Post.create({
	title: 'hello',
	age: 35,
	category: 'java',
	author: 'bd'
}).then(result => console.log(result))
.catch(error => {   // 7, 获取错误的具体信息
	const err = error.errors;

	for(var attr in err) {
		console.log(err[attr]['message'])
	}
})