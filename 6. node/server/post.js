// 1，引入创建web服务器模块
const http = require("http");
// 1.1, app 对象就是网站服务器对象
const app = http.createServer();
// 处理请求参数模块 
const querystring = require('querystring'); 



// 1.2, 当客户端有请求来的时候，执行回调函数  
app.on('request', (req, res) => {
	// post 参数是通过事件方式接收的
	// data 当请求参数传递的时候触发data事件
	// end 当参数传递完成时触发end事件

	let postParams = '';
	req.on('data', parmas => {
		postParams += parmas;
	});
	req.on('end', () => {
		// 将字符串转化为对象
		console.log(querystring.parse(postParams));
	});

	res.end("ok")

});

// 1.4, 监听端口，向外界提供服务
app.listen(3000);
console.log("web server 启动成功！");


