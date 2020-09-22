/*
文件系统
    - 通过node.js 来操作文件
    - 使用文件系统，需要引入fs模块，fs式核心模块，直接引入，不需下载
同步文件的写入
    - 手动操作
     1，打开 ：fs.openSync(path[, flags[, mode]]) 异步的
      - path: 路径 要打开文件的路径
      - flags: 打开文件要操作的类型 r-可读 w-可写
      - mode：设置文件的操作权限 一般不传
     返回值：
      -该方法会返回一个文件的描述符作为结果，可通过这个符号进行各种操作
     2，写入 ：
     fs.writeSync(fd, string[, position[, encoding]])
      - fd, 文件描述符，往那个文件里写，传入写入文件的描述符
      - string 写入内容
      - position写入的起始位置，一般不传
      - encoding 编码 一般也不传
     3，关闭 fs.closeSync(fd)
*/
var fs = require("fs");//console.log(fs);
var fd = fs.openSync("hello.txt", 'w'); // open file
//write content,20从索引的位置开始写
var wc = fs.writeSync(fd, "today is so good!",20);
console.log(wc);
// 关闭文件
fs.closeSync(fd);