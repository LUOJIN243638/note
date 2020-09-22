
/*
* buffer (缓冲区)
*  - 结构和数组很像，操作的方法和数组也类似
*  - JS原生数组性能比较差，服务器开发数组的类型不够用，存不了图片，视频（也就是二进制文件）等。
*  - Buffer专门用来存2进制数据的，比传统的性能要好很多。
*  - 不需要引入模块，直接使用
*  - buffer 中存的都是二进制数据，但是显示是都是16进制形式，16显示起来更短
*  - buffer 中的每一个元素大小从00-ff 十进制 0- 255 二进制 00000000-11111111
*  - 计算机里一个0 / 1就是一位，8个0 或者8个1 = 8bit
*     - 8bit = 1byte
*     - 1024byte = 1 KB
*     - 1024 kb = 1 mb
*     - 1024 mb = 1 gb
*     - 1024 gb = 1 tb
*     - buffer 中的一个元素，占用一个字节
*   - 再中文中，一个字占用三个字节
*   - buffer 一旦确定，大小不能改变。
* */
var str = "hello atguigu";

//1，将一个字符串保存到buffer中
var buf = Buffer.from(str);

console.log(buf.length); //13 字节占用内存的大小
console.log(str.length); //13 字符串的长度
console.log(buf); //<Buffer 68 65 6c 6c 6f 20 61 74 67 75 69 67 75>

//2，创建指定大小的buffer
//  - buffer 的所有构建函数 都不推荐使用
//var buf2 = new Buffer(10); //1024byte = 1k
//console.log(buf2.length); //10

//创建一个10字节的buffer
var buf2 = Buffer.alloc(10);
console.log(buf2); //<Buffer 00 00 00 00 00 00 00 00 00 00>
//通过索引给buffer赋值
buf2[0] = 88;// 会转成16进制0x开头
buf2[1] = 0xaa;
buf2[10] = 15; //没有10,没有变化，也没有报错，buffer的大小一旦确定不能改变。
//buffer是对底层内存的直接操作
buf2[3] = 256; //最大时255 没有256；0000000舍了全是0
buf2[4] = 556; //但是这个有，为什么？2c=101100(只去了后八位)=1000101100
console。log(buf2);

//读取里边的元素；只要数字再控制台或者页面输出,转成10进制输出
console。log(buf2[2]);
//转成16进制得到字符串，一般不需要转的
console。log(buf2[2].toString(16));
//可以遍历
for(var i=0; i<buf2.length; i++){
    console.log(buf2[i]);
}

//3,Buffer.allocUnsafe(10)创建一个指定大小的buffer ，但那时这里可能含有敏感数据
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3); //这个有值，刚才那个直接对内存操作，内存是反复使用的，使用alloc之前是会清空数据的，而这个没有清空是别人用过的数据

/*
* Buffer.from(str) 将一个字符串转换为buffer
* Buffer.alloc(size) 创建一个指定大小的buffer
* Buffer.allocUnsafe(size) 创建一个指定大小的buffer,但可能包含敏感数据，不安全
* buf4.toString() 讲里边数据转换成字符串
* */

var buf4 = Buffer.from("i am a text data");
console.log(buf4.toString())

