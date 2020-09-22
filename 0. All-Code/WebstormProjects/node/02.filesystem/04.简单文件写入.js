/*
* 简单文件写入 fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options])
* file 要操作文件的路径
* data 指定写入的数据
* options 可选，可以对写入的进行一些设置
* callback 当写入完成后执行的函数
* flag : r w a
* */
//引入fs模块
var fs = require("fs");
fs.writeFile("hello.txt","这是通过writeFile写入的内容",function (err) {
    if(!err){
        console.log("写入成功！");
    }
})
