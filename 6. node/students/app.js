// 引入一些模块
// 配置模板引擎
// 连接数据库
// 创建网站服务器和客户端的请求和访问
// 监听端口

const http = require('http') // 引用http mongoose模块
const template = require('art-template') // 引入模板引擎
const path = require('path')
const serveStatic = require('serve-static') // 引入静态资源访问模块
const dateformat = require('dateformat') // 处理日期的第三方模块
const router = require('./route/index.js')
const serve = serveStatic(path.join(__dirname, 'pubilc')) // 使用静态资源访问功能

template.defaults.root = path.join(__dirname, 'views'); //配置模板根目录
template.defaults.imports.dateformat = dateformat //处理日期格式方法

require('./model/connect.js')


const app = http.createServer() //创建网站服务器
app.on('request', (req, res) =>{ //当客户端访问服务器端的时候
	router(req, res, () => {}) // 启用路由
	serve(req, res, () => {}) // 启用静态资源访问功能 
});

app.listen(8080);
console.log('Server is booting');



/*
	1）建立项目文件夹 并生成描述文件
	2) 创建数据库服务器实现客户端和服务器端通信
	3）连接数据库并根据需求设计学院信息表
	4）创建路由并实现页面模板呈递
	5）实现静态资源访问 – css, js, 图片文件等
	6）实现学生信息添加功能 
	7）实现学生信息展示功能

model: 数据库相关代码
public： 静态资源
route: 路由
views: 模板
app.js: 入口文件，主文件

*/