// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
// 创建web服务器
const app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));


// 服务器端：创建路由，响应给客户端，
//当客户端的html代码运行了之后，请求来了响应给她
// 对应01html文件
app.get('/first', (req, res) => {
	res.send('Hello, Ajax, this is a first file ');
});

// 对应02html文件
app.get('/responseData', (req, res) => {
	res.send({"name": "zhangsan"});
});

// 对应03html文件，req.query获取get请求参数
app.get('/get', (req, res) => {
	res.send(req.query);
});

// 对应04html文件 ，req.body获取post请求参数（body-parser模块）
app.post('/post', (req, res) => {
	res.send(req.body);
});

// 对应05html文件
app.post('/json', (req, res) => {
	res.send(req.body);
});

// 对应06html文件
app.get('/readystate', (req, res) => {
	res.send('hello');
});

// 对应07html文件
app.get('/error', (req, res) => {
	//console.log(abc);
	res.status(400).send('not ok');
});

// 对应08html文件
app.get('/cache', (req, res) => {
	fs.readFile('./test.txt', (err, result) => {
		res.send(result);
	});
});

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');