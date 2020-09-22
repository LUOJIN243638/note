const guard = (req, res,next) => {
	//判断用户访问的是不是登陆页面
	//判断用户的登陆状态
	//如果是登陆的 请求放行
	//如果不是登陆的，将请求重定向为登陆页面
	if(req.url != '/login' && !req.session.username){
		res.redirect('/admin/login')
	}else{
		next()
	}
}

module.exports = guard