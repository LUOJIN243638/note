

// 1，在普通函数定义前加上async关键字，就变成异步函数了
// 2，异步函数默认返回值是promise对象
// 3, 在异步函数内部使用throw关键字抛出错误

// await 关键字
// 1，只能出现在异步函数内部中
// 2， 后边跟 promise 对象，暂停异步函数的执行，等待promise对象返回结果后在向下执行

/*async function fn() {
	throw 'error is made'
	return 123; // promise { 123 }
}
fn().then(function (){
	console.log(data)  //123
}).catch(function(err){
	console.log(err)
})*/

async function p1(){
	return 'p1'
}

async function p2(){
	return 'p2'
}

async function p3(){
	return 'p3'
}

// 保证顺序执行
async function run() {
	let r1 = await p1()
	let r2 = await p2()
	let r3 = await p3()
	console.log(r1)
	console.log(r2)
	console.log(r3)
}
run()