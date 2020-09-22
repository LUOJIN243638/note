const express = require('express')
const fs = require('fs')
const app = express();// 创建网站服务器

// 普通路由中间件
app.get('/index',(req, res,next) => {
	//throw new Error('程序发生了未知错误')
	fs.readFile('./demo.txt', 'utf8',(err,result)=>{
		if(err!=null){
			next(err)  
//ENOENT: no such file or directory, open 'C:\Users\luojin\Desktop\bmcode\node\framework\demo.txt'
		}else{
			res.send(result)
		}
	})
	//res.send('程序正常执行')
})

// 错误处理中间件
app.use((err, req, res, next) => {
	res.status(500).send(err.message)
})

app.listen(3000);
console.log("网站服务器启动成功")
    
