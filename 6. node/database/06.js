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

//1, 
User.updateOne({name:'李四'},{name: '李狗蛋'}).then(result=>console.log(result));

//2, 
User.updateMany({},{age: 56}).then(result=>console.log(result));
