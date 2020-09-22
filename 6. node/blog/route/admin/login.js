// 导入用户集合构造函数
const { User } = require('../../model/user')
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
	//npm install body-parser
	const {email, password} = req.body

	/*if (email.trim().length == 0 || password.trim().length == 0) {
		return res.status(400).send('<h4>email address or password error!</h4>')
	}*/
	if (email.trim().length == 0 || password.trim().length == 0) {
		return res.status(400).render('admin/error',{msg: 'email address or password error!'})
	}

	// 根据邮箱地址查询用户信息
	// 如果查寻到了用户user变量的值是对象类型，对象中是用户信息
	// 如果没有查询用户， user变空
	let user = await User.findOne({email})
	if(user){
		//将客户端传来的莫玛和用户信息中的密码进行比对
		let isValid = await bcrypt.compare(password, user.password)
		if(isValid){
			//将用户名存储在req.username请求对像中
			req.session.username = user.username
			//res.send('login successfully!')
			req.app.locals.userInfo = user
			res.redirect('/admin/user')
		}else{
			res.status(400).render('admin/error',{msg: 'email address or password error!'})
		}
	}else{
		res.status(400).render('admin/error',{msg: 'email address or password error!'})
	}
}

