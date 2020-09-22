/**
 * 自定义模块2
 * 这里也有闭包
 * 这种放使用起来更加方便
 *
 * return 暴露的 必须通过 执行函数之后财可以
 * window 直接就可以得到自己想要的东西
 *  - 代码压缩 window 可以压缩为w
 */
(function (window) {
  //私有的数据
  var msg = 'atguigu'
  var names = ['I', 'Love', 'you']

  //操作数据的函数
  function a() {
    console.log(msg.toUpperCase())
  }
  function b() {
    console.log(names.join(' '))
  }

  // 匿名函数嗲用的话， 向外暴露，通过window
  window.coolModule2 =  {
    doSomething: a,
    doOtherthing: b
  }
})(window)
