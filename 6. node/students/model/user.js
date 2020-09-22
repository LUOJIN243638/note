const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({// 设定学生集合规则
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 10
	},
	age: {
		type: Number,
		min: 10,
		max: 40
	},
	sex: {
		type: String
	},
	email: {
		type: String
	},
	hobbies: [ String ],
	collage: String,
	enterDate: {
		type: Date,
		dafault: Date.now
	}
})
const Student = mongoose.model('Student', studentSchema);// 创建学生信息集合
module.exports = Student// 将学生信息集合导出