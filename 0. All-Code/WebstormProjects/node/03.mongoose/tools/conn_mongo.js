/*
* 定义一个模块，定义连接mongoDB数据库
* */
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open",function(){
    console.log("数据库连接成功！！！")
});
