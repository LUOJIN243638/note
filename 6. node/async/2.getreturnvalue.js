function getMsg(callback) {
	setTimeout(function(){
		callback({
			msg: 'hello nodejs'
		})
		
	},2000)
	// return undefined
}


getMsg(function(data){
	console.log(data)
})
//const msg = getMsg();
//console.log(msg);