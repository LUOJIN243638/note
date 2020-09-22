function getData(callback) {
	callback('123') //形参
}

getData(function(n){ //实参
	console.log('callback(）函数被调用了')
	console.log(n)
})