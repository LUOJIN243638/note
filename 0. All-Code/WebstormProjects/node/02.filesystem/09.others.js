var fs = require("fs");
/*
* fs.existSync(path) -检查一个文件是否存在
* */
// var isExists = fs.existSync("a.jpg");
// console.log(isExists); //true
/*
* fs.stat(path, callback)
* fs.statSync(path)
* */
// fs.stat("a.jpg",function (err,stat) {
//     /*size文件的大小
//     isFile（） 是否是一个文件
//     isDirectory （） 是否是一个文件夹/目录
//     * */
//     console.log(stat,size);
// })

/*
* fs.unlink(path,callback)
* fs.unlinkSync(path) 删除文件
*
* fs.readdir(path【，options】,callback)
* fs.readdir(path【，options】) 读取一个目录中的文件
*
* fs.truncate(path,len,callback)
* fs.truncateSync(path,len) 截断文件
*
* fs.mkdir(path,mode,callback)
* fs.mkdirSync(path)
*
* fs。rmdir(path,callback)
* fs.rmdir(path)
*
* fs.rename(oldPath, newPath,callback)
* fs.renameSync(oldPath, newPath,)
*
* fs.watchFile(filename,options,listener(curr,prev))
* fs.watchSync(filename,options)
* */

fs.watchFile("hello2.txt",{interval:1000}，function(curr,prev){
   console.log("修改前文件的大小：" + prev.size);
   console.log("修改后文件的大小：" + curr.size);
});
