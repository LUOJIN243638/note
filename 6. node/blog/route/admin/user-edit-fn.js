const Joi = require('joi');

module.exports = async (req, res) => {
	
	const schema = {
		username: Joi.string().min(2).max(30).required().error(new Error('username 没有通过验证')),
	 	email: Joi.string().email().required().error(new Error('email 没有通过验证')),
	 	password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('password 没有通过验证')),
	 	role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值没有通过验证')),
	 	state: Joi.number().valid(0,1).required().error(new Error('状态值没有通过验证'))
	};

    try {
       	await Joi.validate(req.body, schema);
    }catch(e){
   		res.redirect('/admin/user-edit?message='+ e.message)
   	}
			
	res.send(req.body)
}
		



