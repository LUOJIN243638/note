// 命名空间模式，简单的对象封装

let obj = {
	msg: "module2",
	foo(){
		console.log("foo()",this.msg)
	}
};

// 想输出这个msg ,现在是想要对象中的msg ,直接msg是问谁去要，、
//但是你是通过obj调用的
