const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(fn({a:1}))

function fn(obj){
	return function(req, res, next){
		if(obj.a == 1){
			console.log(req.url)
		}else{
			console.log(req.method)
		}
		next()
	}
}
app.get('/',(req,res) => {
	res.send('okay') 
})

app.listen(3000)

// app.use()需要传一个请求处理函数进去，现在为什么传方法的调用？
// 方法的调用也返回一个函数