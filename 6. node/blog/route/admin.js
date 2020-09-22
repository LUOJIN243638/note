// express framwork 
const express = require('express')

const admin = express.Router()


admin.get('/login', require('./admin/loginPage'))

// login 
admin.post('/login', require('./admin/login'))

// create users list route
admin.get('/user', require('./admin/userPage'))

// 实现推出功能
admin.get('logout',require('./admin/logout'))


//创建用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'))

// 创建实现用户添加功能路由
admin.post('/user-edit', require('./admin/user-edit-fn'))


module.exports = admin; 