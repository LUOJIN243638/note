var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open",function(){
    console.log("数据库链接成功！！！")
});
var Schema = mongoose.Schema;
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type:String,
        default: "female"
    },
    address: String
});
var StuModel = mongoose.model("student",stuSchema);
/*
* model的方法：
* -有了model就可以对数据库进行增删改查*
* Model.create(doc(s),(callback))
* -用来创建一个或者多个文档并添加到数据库中
* -参数：doc(s)可以是一个文档对象，也可以是一个文档对象的数组
*        callback 可以写可以不写
*
*查询得：
* Model.find() 总是返回数组
* Model.findById()
* Model.findOne()
* --conditions
* --projection 投影 要什么些什么，不要为负
* --options 查询选项
* --callback 必须写
* */
stuModel.find({name:"猪八戒"},"name age -_id ",{skip:3,limit:1},function (err) {
    if(!err){
        console.log(doc)
    }
})

/*
StuModel.create([
    {
        name:"猪八戒",
        age: 13,
        gender: "male",
        address: "女儿国"
    },{
        name:"孙悟空",
        age: 15,
        gender: "male",
        address: "花果山"
    },{
    }
],function (err) {
    if(!err){
        console.log("插入成功！！！")
    }
})*/
