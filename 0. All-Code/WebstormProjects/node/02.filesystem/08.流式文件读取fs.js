
/*
* 流式文件读取：
* 适用于大文件，可以分多次文件读取到内存
* */
var fs = require("fs");
var rs = fs.createReadStream("C:\\Users\\luojin\\Pictures\\Saved Pictures\\1.jpg");
var ws = fs.createWriteStream("a.jpg");
rs.pipe(ws); //在可读流中的内容直接输出到可写流
//其实不想监听也可以的
/*rs.once("open",function () {
    console.log("可读流打开了~~~")
});
rs.once("close",function () {
    console.log("可读流关闭了~~~")
    ws.end();
});
//2,想写怎么办？
ws.once("open",function () {
    console.log("可写流打开了~~~")
});
ws.once("close",function () {
    console.log("可写流关闭了~~~")
});*/

