var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open",function(){
    console.log("数据库链接成功！！！")
});
// 创建Schema模式对象，约束对象
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
//通过schema创建Model,，他是数据库的集合，有了model才能对数据库进行操作
//mongoose.model(modelName映射的集合名, schema约束条件):
//mongoose会自动将集合名变成复数
var StuModel = mongoose.model("student",stuSchema);
//创建文档
StuModel.create({
    name:"sunwukong",
    age: 18,
    address: "huaguoshan"
},function (err) {
    if(!err){
        console.log("插入成功！！")
    }
})