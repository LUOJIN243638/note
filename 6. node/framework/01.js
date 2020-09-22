const express = require('express')

// 创建网站服务器
const app = express();
app.get('/', (req, res) => { 
	// send（）方法，不再是end
  	// 1, 内部检测相应内容的类型
  	// 2，会自动设置http状态码
  	// 3，会帮助我们自动设置响应的内容

  	res.send('hello express')

})
app.get('/list', (req, res) => { 
  	res.send({
  		name: 'luojin',
  		age: 20
  	})

})

app.listen(3000);
console.log("网站服务器启动成功")