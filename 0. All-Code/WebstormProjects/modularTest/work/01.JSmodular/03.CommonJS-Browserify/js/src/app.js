
let module1 = require("./module1");
let module2 = require("./module2");
let module3 = require("./module3");

module1.foo();
module2();
module3.foo();
module3.bar();

//对源文件打包处理
//browserify js/src/app/js -o js/dist/dundle.js


