/*最终要把其他的模块汇集成主模块*/
let uniq = require("uniq");

let module1 = require("./modules/module1");
let module2 = require("./modules/module2");
let module3 = require("./modules/module3");

module1.foo();
module2();
module3.foo();
module3.bar();

let result = uniq(module3.arr);
console.log(result);
//[ 1, 11, 2, 3, 4, 5 ] 去重＋排序（按照编码顺序排）

//运行：node app.js