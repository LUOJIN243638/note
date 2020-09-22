console.log("load finished!");

// 配置但钱这个项目用到的模块 AMD遵从
require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "nav": "nav",
        "slide":"slide"
    },
    shim:{
        //设置依赖关系,先加载jQuery, 防止页面出现一些问题
        "jquery-cookies": ["jquery"]
    }
})

require(["nav", "slide"], function(nav,slide){
    nav.download();
    nav.banner();
    nav.leftNavTab();
    nav.topNavTab();
    nav.searchTab();

    //商品列表数据加载
    nav.download();
})