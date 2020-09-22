const Joi = require('joi');

// 定义对象的验证规则
const schema = {
 	username: Joi.string().min(2).max(30).required().error(new Error('username 没有通过验证')),
 	password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 	email: Joi.string().email()
};




async function run() {
	try {
		// 实施验证
		await Joi.validate({ username: 'ab'}, schema);
	}catch(ex){
		console.log(ex.message)
		return
	}
	console.log('验证通过')
}

run()