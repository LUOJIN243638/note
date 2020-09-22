define(["jquery"], function($){
    //下载数据的函数
    function download(){
        $.ajax({
            url: "../data/slide.json",
            success: function(result){
                // alert(result);
                var slideArr = result.data.list.list;
                

            },
            error: function(msg){
                console.log(msg);
            }
        })
    }
    return{
        download: download
    }
})