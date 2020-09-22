/* IIFE模式增强：引入依赖 这就是现代模块化实现的基石 */

(function(window,$){ //声明
	let msg = "module4"; //私有化属性
	function foo(){
		console.log("foo()",msg);
	}
	window.module4 = foo;
	
	//添加当前页面背景色
	$("body").css("background","red");
})(window,jQuery)    //传实参

//思想依赖jQ,就要入住进来
