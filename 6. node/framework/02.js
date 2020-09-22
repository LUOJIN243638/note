
const express = require('express')

// 创建网站服务器
const app = express();
app.get('/request', (req, res, next) => { 
	req.name = 'luojin'
	next() // 当前执行完成后，还会向下匹配中间件
})
app.get('/request', (req, res) => { 
  	res.send(req.name)
})

app.listen(3000);
console.log("网站服务器启动成功")