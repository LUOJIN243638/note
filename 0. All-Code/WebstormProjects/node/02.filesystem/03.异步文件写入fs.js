/*
   异步调用的方法，都是通过回调函数参数返回
*  回调函数有两个参数：
    1，err 错误对象，如果没有错，就是null,错误优先
    2，fd 文件的描述符
* */
//1,引入fs模块
var fs = require("fs");
var f;
//2,打开文件
fs.open("hello2.txt","w",function (err, fd) {
    //判断是否出错
    if(!err){
        //3,如果没有出错，直接写入
        fs.write(fd, "这是异步写入的内容", function (err) {
            if(!err){
                console.log(" write success!")
            }
            //4,关闭文件
            fs.close(fd,function (err) {
                if(!err){
                    console.log("File closed!")
                }
            })
        })
       // f = fd;
        // console.log(fd);
    }else{
        console.log(err);
    }
});

