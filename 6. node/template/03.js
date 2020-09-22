const template = require('art-template')
const path = require("path")

const views = path.join(__dirname, 'views', '03.art')

const html = template(views, {
	users: [{
		name: 'haha',
		age: 20,
		sex: 'nan'
	},{
		name: 'hehe',
		age: 80,
		sex: 'nv'
	},{
		name: 'hihi',
		age: 50,
		sex: 'nv'
	}]
})

console.log(html)

// 希望把这些数据展示在一个UL列表当中，
//有多少个对象就有多少个li