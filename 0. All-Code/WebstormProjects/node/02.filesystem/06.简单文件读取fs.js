/*
* 1, 同步文件读取
* 2，异步文件读取
* 3，简单文件读取
*   - fs.readFile(path[, options], callback)
*   - fs.readFileSync(path[, options])
* 4，流式文件读取
* */
var fs = require("fs");
var path = "C:\\Users\\luojin\\Pictures\\Saved Pictures\\1.jpg"
fs.readFile(path,function (err,data) {
    if(!err){
        //console.log(data);
        //将读到的文件data写入文件
        fs.writeFile("./02.filesystem/06.hello.jpg",data,function (err) {
            if (!err){
                console.log("文件写入成功！")
            }
        })
    }
});
