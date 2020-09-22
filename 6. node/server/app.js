// 1，引入创建web服务器模块
const http = require("http");
// 1.1, app 对象就是网站服务器对象
const app = http.createServer();
const url = require("url") //用于处理url地址

// 1.2, 当客户端有请求来的时候，执行回调函数  
app.on('request', (req, res) => {

	// 2, 获取请求
	// req.method()
	//console.log(req.method);

	//2.3 获取请求地址
	//req.url
	//console.log(req.url);

	//2.4 获取请求报文信息
	//req.headers
	//console.log(req.headers);
	//console.log(req.headers['accept']);

	//3 书写状态码res.writeHead
	res.writeHead(200, {
		"content-type": 'text/html;charset=utf8'
	});


	// 4 输出请求参数
	console.log(req.url);
	// 4.1 第一个参数：要解析的地址；第二个参数：解析成对象的形式
	// let params = url.parse(req.url, true).query;
	// console.log(params.name); 
	// console.log(params.age); 
	let { query, pathname } = url.parse(req.url, true);
	console.log(query.name)
	console.log(query.age)

	if(pathname == '/index' || pathname == '/'){
		res.end("<h2>welcome to Homepage!</h2>")
	}else if(pathname == '/list'){
		res.end("welcome to listpage!")
	}else{
		res.end("not found!")
	}

	if(req.method == "POST"){
		res.end("post")
	}else if(req.method == "GET"){
		res.end("get")
	}

	// 1.3. 请求来了调用res.end方法响应请求
	//res.end('<h2>hi! luojin! i recieved your request!</h2>');
});

// 1.4, 监听端口，向外界提供服务
app.listen(3000);
console.log("web server 启动成功！");


