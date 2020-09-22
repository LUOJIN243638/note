const express = require('express')
const path = require('path')
const app = express()

app.engine('art', require('express-art-template'))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'art')

app.locals.users = [{
	name: 'luojin',
	age: 20
},
{
	name: 'hahhaa',
	age: 30
}]


app.get('/index', (req, res) => {
	// 不希望在这里查询一下
	res.render('index', {
		msg: '首页'
	})
})

app.get('/list',(req,res) => {
	// 不希望在这里再查询一下
	res.render('list',{
		msg: '列表页'
	})
})

app.listen(3000)
