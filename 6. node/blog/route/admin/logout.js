module.exports = (req, res) => {
	req.session.destory(function(){
		res.clearCookie('connect.sid')
		res.redirect('/admin/login')
	})
}