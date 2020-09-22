//创建网站服务器

//1，迎入系统模块
//2，创建网站服务器
//3，为网站服务器对象添加请求事件
//4，实现路由功能
//	4.1 获取客户端请求方式
//	4.2 获取客户端的请求地址

const http = require("http");
const url = require("url");
const app = http.createServer();

app.on('request', (req, res) => { //有请求来就会执行这个函数
	//	4.1 获取客户端请求方式
	const method = req.method.toLowerCase(); //大写的GET/POST
	//	4.2 获取客户端的请求地址
	const pathname = url.parse(req.url).pathname;

	// 响应中文处理：防止中文乱码
	res.writeHead(200, {
		'content-type': 'text/html;charset=utf8'
	})

	if(method == 'get'){

		if(pathname == '/' || pathname == "/index"){
			res.end("welcome to first homepage!")
		}else if(pathname == "/list"){
			res.end("welcome to listpage!")
		}else{
			res.end("您访问的页面不存在！")
		}

	}else if(method == 'post'){
		
	}

});
// 监听端口
app.listen(3000);
console.log("This server is booting!")