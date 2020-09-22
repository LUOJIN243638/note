// IIFE模式 ：匿名函数自调用（闭包）

(function(window){
	let msg = "module3";
	function foo(){
		console.log("foo()",msg);
	}
	window.module3={
		foo:foo
		//=foo 用的是function 中的foo函数，同名属性可以省略
	}; 
	//给window添加了一个属性,这个属性是一个对象，对象里有个方法foo()
})(window)

//foo在我的函数内部，从外边看不进去，想要调用它，咋办？
//人家的内部数据是私有的，想要和外部通信，就需要暴露出来