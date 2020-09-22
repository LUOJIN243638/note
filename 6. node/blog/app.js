// express framwork 
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

// create a web serve
const app = express()

// Database connection
require('./model/connect')

// post request params
app.use(bodyParser.urlencoded({extended: false}))

// 配置session
app.use(session({
	secret: 'secret key',
	resave: false, //添加 resave 选项
	saveUninitialized: true, //添加 saveUninitialized 选项

}))

// the path where the template is 
// Template suffix and what view engine is it use 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')
app.engine('art', require('express-art-template'))


// open the static resource file
app.use(express.static(path.join(__dirname, 'public')))

// import route module
const home = require('./route/home')
const admin = require('./route/admin')

//拦截请求 判断用户登陆状态
app.use('/admin', require('./middleware/loginGuard.js'))



// Match the path for the route
app.use('/home', home)
app.use('/admin', admin)

// watch port 
app.listen(8080)
console.log("Web server started successfully, please visit localhost...")

