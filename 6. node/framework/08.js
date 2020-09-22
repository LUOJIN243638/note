//引入express 框架
const express = require('express')

const app = express()

// 导入其他两个路由模块
const home = require('./route/home.js')
const admin = require('./route/admin.js')

//路径匹配
app.use('/home',home)
app.use('/admin',admin)

app.listen(3000)