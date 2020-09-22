/*
* 1，下载安装mongoose 并添加到依赖
* npm i mongoose --save
* 2，在项目中引入mongoose
* var mongoose = require("mongoose");
* 3, 连接mongoose数据库
* mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
* mongoose.connect('mongodb://数据库IP:端口号/数据库名',);
* --如果端口号是默认端口号（27017），则可以省略不写
* 4，断开数据库链接--一般不用 只需连接一次，除非项目停止服务器断开，负责不会断
* mongoose.disconnect()
*
* --监听mongod数据库的链接状态
*  --在mongoose对象中，有一属性叫connection，监听他监听数据的连接
*  --数据库链接成功和断开的事件
*   mongoose.connection.once("open",function(){});
*   mongoose.connection.once("open",function(){});
* */
//引入
var mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true, useUnifiedTopology: true});
//监听
mongoose.connection.once("open",function(){
    console.log("数据库链接成功！！！")
});
mongoose.connection.once("close",function(){
    console.log("数据库断开成功！！！")
});

//断开,一旦链接不会自己端，要这么断开
mongoose.disconnect();