//冒泡排序
function bubble(arr){
for (var i=0; i < arr.length; i++){ //比较得伦茨
	for(var j = 0; j < arr.length-i-1; j++){ //每轮比较的次数
		if(arr[j] < arr[j+1]){
			var tmp = arr[j+1];
			arr[j+1] = arr[j];
			arr[j] = tmp;
		}
	}
}
}
//选择排序
function choose(arr){
	for(var i = 0; i < arr.length-1; i++){
   		for(var j = i + 1; j < arr.length; j++){
   			if(arr[i] > arr[j]){
   				var tmp=arr[i];
   				arr[i]=arr[j];
   				arr[j]=tmp;
   			}
   		}
   }
}

function $(vArg){ //由于变量名不确定，随便设置一个
	//<1> 对参数进行区分,用第一个字母去区分
	switch(vArg[0]){ 
		case"#":  //id
			return document.getElementById(vArg.substring(1)) //处理#
			break;
		case".": //className
			return elementByClassName(document,vArg.substring(1))
			break;
		default://对参数的前五个字符，进行判断
			var str = vArg.substring(0,5);
			if(str == "name="){ //name
				return document.getElementsByName(vArg.substring(5))
			}else{ //tagName
				return document.getElementsByTagName(vArg);
			}
				break;
			}
		}
function elementByClassName(parent,classStr){// 参数1-哪节点开始去找，参数2-class
 	//1，要找到parent下的所有元素节点
	var nodes=parent.getElementsByTagName('*')
	var result=[];//用来记录所有符合条件的元素节点
	for(var i = 0; i < nodes.length; i++){
	//2，如果符合条件，就添加到数组中
	if(nodes[i].className==classStr){
		result.push(nodes[i])
	}
	}
		return result;
}

//获取当前样式
function getStyle(elem,attr){
	return elem.currentStyle ? elem.currentStyle[attr]:getComputedStyle(elem)[attr];
}

//删除空白节点
function removeSpaceNode2(parent){
	var nodes = parent.childNodes;
	for (var i = nodes.length-1; i>= 0; i--){
    	if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
    		 	parent.removeChild(nodes[i]);
       	}
    }
}
	//1，删除空白节点的函数封装
function removeSpaceNode(nodes) {
 	var result = []; //用来存放不是空节点的节点
    for (var i = 0; i < nodes.length; i++){
  		if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
   		 	continue;
   	}
    }
   	return result;
}

//5，封装函数：创建一个带文本的元素节点
function createElementWidthTxt(tagName,txt){
	//首先很具tagName 去创建一个节点
	var node = document.createElement(tagName);
	var oTxt = document.createTextNode(txt);
	node.appendChild(oTxt);
	return node;
}

// DOM 里封装insertAfter()这个方法
function insertAfter(newNode, oldNode){
	//判断这个oldNode 是不是最后一节点
	var parent = oldNode.parentNode; //获取父节点
	if(oldNode == parent.lastChild){
		//最后一个节点，直接插入到子节点的末尾
		parent.appendChild(newNode);
	}else{
		//插入到oldNode的下一个节点之前
		parent.insertBefore(newNode, oldNode.nextSibling);
	}
}