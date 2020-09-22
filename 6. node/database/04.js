const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true,useUnifiedTopology: true  })
	.then(()=>{console.log("数据库连接成功！")})
	.catch(err => console.log(err, '数据库连接失败！'))


//1, 创建集合规则
const userSchema = new mongoose.Schema ({
	name: String,  
	age: Number,  
	email: String,
	password: String,
	hobbies: [String]  

}) 
//2，使用规则创建集合
const User = mongoose.model('User', userSchema) //数据库中courses

//3, 查询用户集合中的所有文档
//User.find().then(result => console.log(result));
//3.1 通过id字段查找
//User.find({_id: '5c09f267aeb04b22f8460968'}).then(result => console.log(result));

//4，返回一个，默认返回第一条
//User.findOne().then(result => console.log(result));
//4.1 可以价条件
//User.findOne({name: '李四'}).then(result => console.log(result));

//5,20<age<50
//User.find({age: {$gt: 20, $lt: 50}}).then(result => console.log(result))

//6, 匹配包含 $in
//User.find({hobbies:{$in:['敲代码']}}).then(result => console.log(result))


//7,选择要查询的字段
//User.find().select('name email').then(result => console.log(result));

//8，根据年龄进行升序排列
//User.find().sort('age').then(result => console.log(result));

//9，根据年龄进行降序排列
//User.find().sort('-age').then(result => console.log(result));

//10，跳过前两个文档，只显示3个数
User.find().skip(2).limit(3).then(result => console.log(result));