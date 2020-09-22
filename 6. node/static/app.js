//    访问静态资源

//1，迎入系统模块
//2，创建网站服务器
//3，为网站服务器对象添加请求事件
//4，实现路由功能
//	4.1 获取客户端请求方式
//	4.2 获取客户端的请求地址

const http = require("http");
const url = require("url");
const path = require('path');
const fs = require('fs');
const mime = require('mime')

const app = http.createServer();

app.on('request', (req, res) => { 
	//获取用户的请求路径
	let pathname = url.parse(req.url).pathname;

	pathname = pathname == '/' ? '/default.html': pathname

	//将用户的请求路径转换为实际的服务器硬盘路径
	let realPath = path.join(__dirname, 'public' + pathname);

	let type = mime.getType(realPath)

	// 读取文件
	fs.readFile(realPath, (error, result) => {
		if(error != null){
			res.writeHead(404,{
				'content-type': 'text/html;charset=utf8'
			})
			res.end('文件读取失败');
			return;
		}

		res.writeHead(200, {
			'content-type': type
		})

		res.end(result);
	})
});

app.listen(3000);
console.log("This server is booting!") 