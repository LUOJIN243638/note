const express = require('express')
const app = express()
const path = require('path')

//实现静态资源访问功能
//	- 利用app.use()这个中间件拦截所有请求，把请求交给express.static取处理
// 	- '/static' 写得话就是这个下访问，所有的都可以访问
app.use('/static',express.static(path.join(__dirname,'public')))
app.listen(3000)
