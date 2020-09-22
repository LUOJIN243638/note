/**
 * 自定义模块1
 * 这里就用到了闭包
 */
function coolModule() {
  //私有的数据，在外边不能看见
  var msg = 'atguigu'
  var names = ['I', 'Love', 'you']

  //私有的操作数据的函数
  function doSomething() {
    console.log(msg.toUpperCase())
  }
  function doOtherthing() {
    console.log(names.join(' '))
  }

  //向外暴露包含多个方法的对象,
  // 对象封装起来 字符串 ： 对应函数名
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}
