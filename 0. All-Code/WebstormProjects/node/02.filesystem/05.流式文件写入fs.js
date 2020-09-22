/*
* 流式文件写入
* 同步，异步都不适合大文件写入，性能差，容易导致内存溢出
*fs.createWriteStream(path[,options])
* */
var fs = require("fs");
//流式写入,创建一个可写流
var ws = fs.createWriteStream("hellp3.txt") ;
//可以通过建通open和close来监听流的打开和关闭
ws.once("open",function () { //once绑定一次性事件=on事件
    console.log("流打开了~~~")
});
ws.once("close",function () { //once绑定一次性事件=on事件
    console.log("流关闭了~~~")
});
//通过ws向文件中输出内容
ws.write("通过可写流写入文件的内容");
ws.write("哈哈哈哈哈哈");
ws.write("啦啦啦啦啦啦");
//关闭流
// ws.close(); //关了 就写入了一个 ，不能用这个，还没流完
ws.end(); //从前边那头拔了
