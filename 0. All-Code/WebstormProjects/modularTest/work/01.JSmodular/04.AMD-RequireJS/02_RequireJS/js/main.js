(function () {

    requirejs.config({
        baseUrl: "js/", //基本路径
        paths:{   //配置路径
            dataService:"./modules/dataService",
            alerter:"./modules/alerter",
            jquery:"./libs/jquery-3.4.1.js",
            angular: "./libs/angular"
        },
        shim:{
            angular:{
                exports: "angular"
            }
        }
    });

    requirejs(["alerter","angular"], function (alerter,angular) {
        alerter.showMsg();
        console.log(angular);
    })
})()