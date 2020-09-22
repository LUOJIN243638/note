<?php
header("string:content-type:text/html;charset=utf-8");
//拿到提交的值
/*echo $_GET["user"];
echo "<br>";
echo $_GET["pass"];*/

/*1, 变量$variable：
全局和
局部变量: 当函数调用运行完后，清除变量
1）不能直接调全局变量 利用$GLOBALS['b'],一次性调用
2）global $b; 将$b指向全局变量，如果多次调用，可以这么用
静态变量=JS闭包： 当函数调用运行完成后，不清除，执行一次，也不会清除，保留下来
static $c=0;
$c++;
echo $c; //1
3）超全局变量
print_r($_SERVER); 打印超全局变量$_SERVER
print_r($_REQUEST); 收集get/post请求，如果不确定是那种请求，可利用它获取
print_r($_GET);
print_r($_POST);
print_r($_FILES);
print_r($_COOKIES);....
4)魔术变量
echo __LINE__ 当前代码第几行
--FILE__ 完整路径
__FUCNTION__ 当前函数名
__CLASS 当前类名
*/

/*
2, 打印输出
echo $a, $b;  echo返回给前端（AJAX）页面，提交方式不能返回只能跳转
prinf $a; 只能打印一个数据，返回一个1=true，便是打印成功
区别：
echo print $a;
print echo 不行是错的
print_r(); 打印数组
var_dump($a); 打印类型和值
var_dump($_REQUEST) 打印数组，变量等类型和值，不能返回的
  */

/*
 3，条件语句
$a = 20;
if($a < 10){echo "abc";}else{
echo "cde";}
________________
if($a < 10){echo "abc";}
elseif($a===20){echo "cde";}
else{echo "fng";}
________________
switch ($a){
    case 10:
        break;
    case 20:
        .....
    default:
        break;
}
________________
$i = 0;
while($i<10){$i++}
________________
do {$i++}while($i<10);
________________
for($i=0; $i<10;$i++){ }
________________
foreach() 数组
*/

/*
 4，数据类型
string
number
float //var_dump($a);
boolean
数组 count()获取数组长度 ￥arr = array(1,2,3,4)
    - print_r($arr);
    - echo count($arr);
    - php箭头语法 JS点语法
    - $arr1 = array("id" => 10001, "name" => "iphone9");
      echo count($arr1);
    - 关联性数组遍历
      foreach($arr1 as $key=> $item){
        echo $key,"$nbsp;"$item;
        echo "<br>";
      }
    - 一般数组遍历
    foreach($arr1 as $value){
        echo $value;
        echo "<br>";
      }
数组排序
sort() 升序
rsort() 降序
asort() 根据值， 以升序对关联数组进行排序
ksort() 根据键，
arsort() 以降序对关联数组进行排序
krsort()

JSON 数据类型 ： json_encode()  json_decode()
echo js_encode($arr);将json数组转字符串
echo js_encode($arr1);将json字符串转为数组

面向对象
class Box{ //函数名和类名一样=JS中的构造函数
    var $w = 0;
    function Box($_w){
        //php使用健头语法
        $this->w=$_w;
    }
    function play(){
        echo $this->w;
    }
}
$box1 = new Box(_w: 20);
$box1->play();

NULL 空值
gettype() 返回数据类型
判断类型： is_int(); is_bool(); is_array(); is_string(); is_double();

 * */

