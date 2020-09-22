
/*
* 流式文件读取：
* 适用于大文件，可以分多次文件读取到内存
* */
var fs = require("fs");
var rs = fs.createReadStream("1.jpg");
var ws = fs.createWriteStream("1.jpg")
rs.once("open",function () {
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
});
//1,如果要读取一个可读流的数据，必须要为其绑定一个data事件
//data可绑定关闭，会自动读取
rs.on("data",function (data) {
    //console.log(data);
    ws.write(data);
});