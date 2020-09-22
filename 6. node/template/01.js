const template = require('art-template')
const path = require("path")

// template 方法 是用来拼接字符串的
// 1, 第一个字符串为 模板路径，绝对路径
// 2, 要在模板中显示的数据，对象类型

const views = path.join(__dirname, 'views', '01.art')

const html = template(views, {
	name: 'haha',
	age: 20,
	content: '<h1> 我是标题</h1>'
})

console.log(html)

