const express = require('express')
const path = require('path')
const app = express()

// 1，告诉express框架使用什么模板引擎渲染什么后缀的模板文件
// 	- 参数1： 模板后缀
//	- 参数2： 使用的模板引擎
app.engine('art', require('express-art-template'))

// 2，告诉express框架模板存放的目录是什么
app.set('views', path.join(__dirname,'views'))

// 3，告诉express框架模板的默认后缀是什么 
app.set('view engine', 'art')

// 4, 渲染模板
//	- 拼接了模板路径，模板后缀
//  - 哪一个模板和哪一个数据进行拼接
//	- 将拼接结果响应给了客户端
app.get('/index', (req, res) => {
	res.render('index', {
		msg: 'message'
	})
})

app.get('/list',(req,res) => {
	res.render('list',{
		msg: 'list page'
	})
})

app.listen(3000)
