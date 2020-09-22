/*module.exports.name = "孙悟空";
exports.age = 18;
exports.sayName = function(){
    console.log("i am sun wu hong !~~`");
}*/

// 如果想一下导出三个呢？ 但是只写exports这里就会报错？
//为啥呢？本质上是一个对象
//module.exports: 改的变量，既可以. /直接赋值
//exports 只能向外暴露内部变量

module.exports = {
    name: "猪八戒",
    sayName: function(){
        console.log("i am zhubajie~~ ");
    }
};