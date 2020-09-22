 
const mongoose = require('mongoose')// 数据库部分

mongoose.connect('mongodb://localhost/playground',{ useUnifiedTopology: true,useNewUrlParser: true })
.then(() => console.log('数据库连接成功'))
.catch(() => console.log('数据库连接失败'))

