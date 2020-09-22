const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true,useUnifiedTopology: true  })
	.then(()=>{console.log("数据库连接成功！")})
	.catch(err => console.log(err, '数据库连接失败！'))


const userSchema = new mongoose.Schema ({
	name: String,  
	age: Number,  
	email: String,
	password: String,
	hobbies: [String]  

}) 
const User = mongoose.model('User', userSchema) //数据库中courses

//1, 查找到一条文档并删除，返回删除的文档，
//User.findOneAndDelete({_id: '5c09f2d9aeb04b22f846096b'}).then(result => console.log(result));

//2，删除多个,不传全部删除，要小心
//User.deleteMany({}).then(result => console.log(result));
