

var a = 10;  //在函数中声明全局不要var
//a = 10;
/*
* 在node中有一个全局对象global，他的做哦那个就是和网页中的window类似，
* 在全局变量中都会最为global的属性保存
* 在全局中创建的函数都会作为global的方法保存
* */

//console.log(global.a);

//怎么证明在函数中运行，找一个东西只有函数里有，arguments
//arguments 为数组对象，类数组，全局里没有，如果这里有，说明运行在函数理了
/*
在我们的node执行模块化代码时，会首先在最上边添加如下代码
function (exports, require, module, _filename,_dirname){
在最底部添加如下代码
}
*/



console.log(arguments);

//arguments.callee 保存当前执行函数的对象
console.log(arguments.  callee);
