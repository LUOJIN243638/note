const express = require('express')
const fs = require('fs')
const promisify = require('util').promisify

const readFile = promisify(fs.readFile)

const app = express();// 创建网站服务器

app.get('/index', async (req, res, next) => {
	try{
		await readFile('./aaa.js')
	}catch(ex) {
		next(ex);
	}
	
})
//捕获到了错误，这样程序就不会因为一个错误导致其他程序不能执行
//ENOENT: no such file or directory, open 'C:\Users\luojin\Desktop\bmcode\node\framework\aaa.js'

// 错误处理中间件
app.use((err, req, res, next) => {
	res.status(500).send(err.message)
})

app.listen(3000);
console.log("网站服务器启动成功")
    
 