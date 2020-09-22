
const getRouter = require('router');// 引入路由模块
const router = getRouter();// 获取路由对象
const Student = require('../model/user.js');
const template = require('art-template');// 引入模板引擎
const querystring = require('querystring')// 处理字符串为对象格式

router.get('/add', (req, res) => {// 呈递学生档案信息页面,下载模板引擎 npm i art-template
	let html = template('index.art',{});
	res.end(html);
})

router.get('/list',async(req, res) => {// 呈递学生信息列表页面
	let students = await Student.find()// 查询all学生信息
	console.log(students)

	let html = template('list.art',{
		students: students
	});
	res.end(html);
})

router.post('/add',(req, res) => {// 实现学生信息添加功能
	let formData = '';// 接收post请求参数
	req.on('data', param => {
		formData += param;
	});
	req.on('end', async () => {// 将数据添加到数据库 	
		await Student.create(querystring.parse(formData)) 
		res.writeHead(301, {
			Location: '/list'
		});
		res.end()
	} )
})

module.exports = router