const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//下载body-parser第三方模块
//拦截所有请求 
//extend: false 方法内部使用querystring模块处理请求参数的格式
//extend: true 方法内部使用第三方模块 qs 处理请求参数格式
app.use(bodyParser.urlencoded({extend: false}))
app.post('/add',(req,res) => {
	res.send(req.body) //req.body获取post参数
})

app.listen(3000)

// app.use()需要传一个请求处理函数进去，现在为什么传方法的调用？
// 方法的调用也返回一个函数