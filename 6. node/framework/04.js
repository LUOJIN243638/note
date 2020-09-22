const express = require('express')
const app = express();// 创建网站服务器

// app.use((req, res, next) => { // 网站公告
// 	res.send("当前网站正在维护.....")
// })


app.use('/admin',(req, res, next) => {
	let isLogin = true;
	if(isLogin){
		next()  // 如果用户登陆，请求继续向下执行
	}else{
		res.send('您还没有登陆，不能访问当前页面')
	}
})

app.get('/admin', (req, res) => { 
  	res.send('您已经登陆，可以访问当前页面了')
})

app.use((req,res,next) => {// 这个在网站的最后边,在listen前边
	res.status(404).send('当前访问的页面不存在的')
})

app.listen(3000);
console.log("网站服务器启动成功")
    
