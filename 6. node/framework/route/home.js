const express = require('express')
const home = express.Router()
home.get('/index', (req,res)=>{
	res.send('欢迎来到我的首页页面')
})
module.exports = home;

