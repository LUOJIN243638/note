// 引入bcrypt
const bcrypt = require('bcryptjs')

// 生成随机字符串
// 数值越大，生成的随机字符串复杂度越高

async function run () {
	const salt = await bcrypt.genSalt(10)

	// 对密码进行加密
	const result = await bcrypt.hash('123456', salt)
	console.log(salt)
	console.log(result)
}

run()
