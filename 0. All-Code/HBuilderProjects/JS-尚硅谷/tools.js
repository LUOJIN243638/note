/* 
1，获取指定元素当前样式
  参数1 - obj 要获取的元素  参数2- 要获取的样式名 
 */
function getStyle(obj, name){
	if(window.getComputedStyle){
		//正常浏览器
		return getComputedStyle(obj, null)[name];
	}else{
		//IE8
		return obj.currentStyle[name];
	}
}


/* 
2，事件对象函数
*/
var event = function(){
	   event = event || window.event;
}			
	
	
/*
3， 为指定元素绑定响应函数
参数：
	- obj 要绑定的对象
	- event 要绑定的事件字符串(不要on)
	- callback 回调函数
*/

function bind(obj, eventstr, callback){
	if(obj.addEventListener){
		//大部分浏览器
		obj.addEventListener(eventstr, callback, false);
	}else{
		//IE8 及一下
		/* this由调用方式决定 callback不让浏览器掉
		 callback.call(obj)
		 */
		obj.attachEvent("on"+eventstr, function(){
			//匿名函数中调用回调函数,this=obj
			callback.call(obj); 
		});
	} 
}	

/* 4，用来拖拽的函数 
参数：
	- obj 开启拖拽的元素
*/
function drag(obj){
	obj.onmousedown = function(event){
	
		//4. 解决问题：div的水平偏移量： clientX - 元素.offsetLeft
		
		//5，设置obj的捕获事件,松开就不要捕获了,chorm 不行
		// if(obj.setCapture){
		// 	obj.setCapture();
		// }
		obj.setCapture && obj.setCapture();
		
		event = event || window.event;
		var ol = event.clientX - obj.offsetLeft;
		var ot = event.clientY - obj.offsetTop;
		
		// 2， 跟着移动事件
		document.onmousemove = function(event){
				event = event || window.event;
				//获取鼠标坐标
				var left = event.clientX - ol;
				var top = event.clientY - ot;
				
				// 修改obj的位置
				obj.style.left = left + "px";
				obj.style.top = top + "px";
				
		}
		//3,鼠标松开
		document.onmouseup = function(){
		
			document.onmousemove = null;
			document.onmouseup = null;
			obj.releaseCapture && obj.releaseCapture();
		}
		return false;
		//4, 问题：希望鼠标指针的位置不会变 控制元素位置
	}
}

/* 
5，简单动画的函数 
参数： 
	- obj 要移动的动画对象
	- target 执行动画目标位置
	- speed 移动速度 
*/

function move(obj, attr, target, speed,callback) {
	//【解决问题2：】 在每次开启定时器的时候，把之前的定时关了
	clearInterval(obj.timer);
	//获取元素目前为止
	var current = parseInt(getStyle(obj,attr));
	
	//判断speed +- 
	if(current > target){
		speed = -speed;
	}
	
	//向执行动画的对象中添加一个timer，执行自己的动画
	obj.timer = setInterval(function(){
		var oldValue = parseInt(getStyle(obj,attr));
		var newValue = oldValue + speed;
		
		//【解决问题1：】判断新的值是不是 》500
		if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
			newValue = target;
		}
		
		/*
		【1，问题】+10 总能加到500， 但是+11，不会加到500 就不会停  
		【2，问题】+会越来越高，要关闭上一个定时器
		*/
		
		obj.style[attr] = newValue + 'px';
		
		if(newValue == target){
			clearInterval(obj.timer);
			//动画执行完毕 执行回调函数
			callback && callback();
		}
	},30)
};

/* 
6， 像一个函数中，添加指定的class类 
参数：
	- obj
	- cn 要添加的class
*/
function addClass(obj, cn){
   if(!hasClass(obj, cn)){
		obj.className += " " + cn; 
	}
};

// 判断有没有cn,有就不加了
function hasClass(obj, cn){
   //var reg = /\b2\b/;
   var reg = new RegExp("\\b"+cn+ "\\b");
		 
   return reg.test(obj.className);
};

// 删除一个元素中指定的class
function removeClass(obj, cn){
	var reg = new RegExp("\\b"+cn+ "\\b");
	
	obj.className = obj.className.replace(reg,"");
}

// 切换一个类
function toggleClass(obj, cn){
  if(hasClass(obj, cn)){
	  removeClass(obj, cn);
  }else{
	  addClass(obj, cn);
  } 
}