//默认暴露，可以暴露任意数据类型

/*export default () => {
    console.log("我是默认暴露的箭头函数！");
}*/
export default {
    msg: 'default export!',
        foo(){
        console.log(this.msg);
    }
}