/*
1）搭建网站服务器，实现客户端与服务器端的通信 http
2）连接数据库，创建用户集合，向集合中插入文档 mongoose
3）当用户访问/list时，将所有的用户信息查询出来
	- 实现路由功能，- 先获取用户的请求方式，请求地址/
	- 呈现用户列表页面
	- 从数据库中查询用户信息，将用户信息展是在例表中
	- 将用户信息和表格HTML进行拼接并将结果响应客户端
4）将用户访问/add时，呈现表单页面，并实现添加用户信息功能
5）当用户访问/modify时，呈现修改页面，并实现用户信息修改功能
	- 修改用户信息氛围两部：
	- 1，增加页面路由，呈现页面
		- 1.1 在点击修改按钮得时候，将用户ID传递到当前页面
		- 1.2 从数据库中查询当前用户信息，将用户信息展是到页面中
	- 2，实现用户修改功能
		- 2.1 指定表单得提交地址，请求方式
		- 2.2 找到用户，把最新得信息更新到数据库中

6）当用户访问/delete时，实现用户删除功能

mongoimport -d playground -c users --file ./user.json  
*/

const http = require('http')
const url = require('url')
const querystring = require('querystring')

require('./model/index.js')
const User = require('./model/user.js')


// 1, 创建服务器
const app = http.createServer()
// 	- 1.3, 为服务器对象添加请求事件
app.on('request', async (req, res) => {
    //3. 当用户访问/list时，将所有的用户信息查询出来
    // - 3.1 请求方式: req下的method属性
    const method = req.method;
    // - 3.2 请求地址
    const { pathname, query } = url.parse(req.url, true);
    // - 3.3 区分两种请求方式
    if (method == 'GET') {
        // Get ： 数据的请求，页面呈递
        if (pathname == '/list') {
        	//3.4 查询用户信息
        	let users = await User.find()
        	console.log(users);

        	// html字符串
        	let list = `        	   
        	    <!DOCTYPE html>
                <html lang="en">
                <head>
                	<meta charset="UTF-8">
                	<title>User List</title>
                	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
                </head>
                <body>
                	<div class="container">
                		<h6>
                			<a href="/add" class="btn btn-primary">Add Users</a>
                		</h6>
                		<table class="table table-striped table-bordered">
                			<tr>
                				<td>Users Name</td>
                				<td>Age</td>
                				<td>Hobbies</td>
                				<td>Email</td>
                				<td>Operation</td>
                			</tr>
               `;

            //对数据进行循环操作   
            users.forEach(item => {
            	list += `
                			<tr>
                				<td>${item.name}</td>
                				<td>${item.age}</td>
                				<td>
                				
            	`;

            	item.hobbies.forEach(item => {
            		list+=`<span>${item}</span>`;
            	})

            	list += `</td>
                				<td>${item.email}</td>
                				<td>
                					<a href="/remove?id=${item._id}" class="btn btn-danger btn-xs">Remove</a>
                					<a href="/modify?id=${item._id}" class="btn btn-success btn-xs">Modify</a>
                				</td>
                			</tr>`;

             });  

            list += ` `;

            list += `
                            </table>
                	</div>
                </body>
                </html>
            `;   
            res.end(list);
        }else if (pathname == '/add'){  // 4, 将用户访问/add时，呈现表单页面，并实现添加用户信息功能
        	let add = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                	<meta charset="UTF-8">
                	<title>User List</title>
                	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
                </head>
                <body>
                	<div class="container">
                		<h3>Add Users</h3>
                		<form method='post' action ="/add"> 
                		  <div class="form-group">
                		    <label>Users Name</label>
                		    <input name = 'name' type="text" class="form-control" placeholder="Please enter a user name">
                		  </div>
                		  <div class="form-group">
                		    <label>Password</label>
                		    <input name='password' type="password" class="form-control" placeholder="Please enter a password">
                		  </div>
                		  <div class="form-group">
                		    <label>Age</label>
                		    <input name="age" type="text" class="form-control" placeholder="Please enter your age">
                		  </div>
                		  <div class="form-group">
                		    <label>Email</label>
                		    <input name="email" type="email" class="form-control" placeholder="Please enter email address">
                		  </div>
                		  <div class="form-group">
                		    <label>Please choose your hobby</label>
                		    <div>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="football" name="hobbies"> football
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="basketball" name="hobbies"> basketball
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="rugby" name="hobbies"> rugby
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="coding" name="hobbies"> coding
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="smoking" name="hobbies"> reading
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="reading" name="hobbies">reading
                		    	</label>
                		    	<label class="checkbox-inline">
                		    	  <input type="checkbox" value="drinking" name="hobbies">drinking
                		    	</label>
                		    </div>
                		  </div>
                		  <button type="submit" class="btn btn-primary">Add Users</button>
                		</form>
                	</div>
                </body>
                </html>
        	`;
        	res.end(add);
        }else if (pathname == '/modify'){
        	let user = await User.findOne({_id: query.id})
        	let hobbies = ['football','basketball','rugby','coding','smoking','reading','drinking']
        	console.log(user)
        	// 5, 修改用户界面=添加用户界面
        	let modify = `
        		<!DOCTYPE html>
                <html lang="en">
                <head>
                	<meta charset="UTF-8">
                	<title>User List</title>
                	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
                </head>
                <body>
                	<div class="container">
                		<h3>Modify User</h3>
                		<form method='post' action ="/modify?id=${user._id}"> 
                		  <div class="form-group">
                		    <label>User Name</label>
                		    <input value="${user.name}" name = 'name' type="text" class="form-control" placeholder="Please enter a user name">
                		  </div>
                		  <div class="form-group">
                		    <label>Password</label>
                		    <input value="${user.password}" name='password' type="password" class="form-control" placeholder="Please enter a password">
                		  </div>
                		  <div class="form-group">
                		    <label>Age</label>
                		    <input value="${user.age}" name="age" type="text" class="form-control" placeholder="Please enter your age">
                		  </div>
                		  <div class="form-group">
                		    <label>Email</label>
                		    <input value="${user.email}" name="email" type="email" class="form-control" placeholder="Please enter your email address">
                		  </div>
                		  <div class="form-group">
                		    <label>Please choose your hobby?</label>
                		  <div>
        	`;

        	hobbies.forEach(item => {
        		// 5.1 判断当前循环项在不在用户得爱好数组里边
        		let isHobby = user.hobbies.includes(item)

        		if(isHobby){
        			modify += `
        				<label class="checkbox-inline">
                		     <input type="checkbox" value="${item}" name="hobbies" checked> ${item}
                	 	</label>

        			`;
        		}else{
        			modify += `
        				<label class="checkbox-inline">
                		     <input type="checkbox" value="${item}" name="hobbies"> ${item}
                	 	</label>
        			`;
        		}

        	})

        	modify += `
        	                	 </div>
                		  </div>
                		  <button type="submit" class="btn btn-primary">Modify User</button>
                		</form>
                	</div>
                </body>
                </html>
        	`;
        	res.end(modify);
        }else if (pathname == '/remove'){
        	// 6. 接收客户端来得id参数
        	//res.end(query.id) 
        	await User.findOneAndDelete({_id: query.id});
        	res.writeHead(301, {
        		Location: '/list'
        	});
        	res.end();
        }

    } else if (method == 'POST') { 
        // POST： 一般实现一些功能，添加修改删除
        if( pathname == "/add"){
        	// - 4.1 给表单添加action='/add'，当点击提交后，找到这里的路由
        	// - 4.1 接收用户提交的信息 data end
        	let formData = '';
        	//	 - 4.1.1 接收post参数
        	req.on('data', (param) => {
        		formData += param;
        	})
        	// 	 - 4.1.2 post 参数结婚接收完毕
        	req.on('end', async () => {
        		let user = querystring.parse(formData)

        		// - 4.1.3 将用户提交的信息添加到数据库中
        		await User.create(user);
        		// - 4.1.4 跳转页面/ 添加成功之后跳到列表页面
        		res.writeHead(301, {
        			// 301 重定向=跳转
        			Location: '/list'
        		});
        		// 重定向后定要结束，如果不，说明客户端当前请求没有结束，他就不会做跳转
        		res.end();

        	})

        	// - 4.2 将用户提交的信息添加到数据库中
        }else if (pathname == '/modify'){
        	// - 4.1 接收用户提交的信息 data end
        	let formData = '';
        	//	 - 4.1.1 接收post参数
        	req.on('data', (param) => {
        		formData += param;
        	})
        	// 	 - 4.1.2 post 参数结婚接收完毕
        	req.on('end', async () => {
        		let user = querystring.parse(formData)

        		// - 4.1.3 将用户提交的信息添加到数据库中
        		await User.updateOne({_id: query.id}, user);
        		// - 4.1.4 跳转页面/ 添加成功之后跳到列表页面
        		res.writeHead(301, {
        			// 301 重定向=跳转
        			Location: '/list' 
        		});
        		// 重定向后定要结束，如果不，说明客户端当前请求没有结束，他就不会做跳转
        		res.end();
        	})
        }

    }
}); 
// - 1.2 监听端口
app.listen(3000)


