// 定义一个有依赖的模块
//让他依赖于dataSevice

(function (window,dataService) {
    let msg = "alerter.js";
    function showMsg() {
        console.log(msg, dataService.getName());
    }
    window.alerter = {showMsg};
})(window,dataService)