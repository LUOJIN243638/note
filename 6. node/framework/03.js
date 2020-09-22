const express = require('express')
const app = express();// 创建网站服务器

app.use((req, res, next) => {// 接收所有请求的中间件
	console.log('请求走了app.use中间件')
	next()
})
// 当用户端访问/request的请求时候走当前中间件
app.use('/request',(req, res, next) => {
	console.log('请求走了app.use中间件 /request')
	next()
})

app.use('/list',(req, res) => {
	res.send('/list')  //请求走了app.use中间件
})

app.get('/request', (req, res, next) => { 
	req.name = 'luojin'
	next() 
})
app.get('/request', (req, res) => { 
  	res.send(req.name)
})

app.listen(3000);
console.log("网站服务器启动成功")
