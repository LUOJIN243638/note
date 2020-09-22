//处理首页导航部分 轮播图 生命模块遵从AMD

define(["jquery"], function($){
    function download(){
        // 1， download data by ajax function(jquery)
        $.ajax({
            type: "get",
            url: "../data/nav.json",
            success: function(result){
                // alert(result);
                var bannerArr  = result.banner;

                //把数据填到页面上
                for(var i = 0; i < bannerArr.length; i++){
                    $(`<a href="${bannerArr[i].url}">
                    <img class = 'swiper-lazy swiper-lazy-loaded' src = '../images/banner/${bannerArr[i].img}'/>
                </a>`).appendTo("#J_homeSwiper .swiper-slide");

                var node = $(`<a href="#" class = 'swiper-pagination-bullet'></a>`);
                if(i ==  0){
                    node.addClass("swiper-pagination-bullet-active");
                }
                    node.appendTo("#J_homeSwiper .swiper-pagination");
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })
        leftNavDownload();
        topNavDownload();
    }

    //1.1实现轮播效果
    function banner(){
        var iNow = 0;  //当前显示图片的下标 
        var aImgs = null; //记录图片  
        var aBtns = null; //记录小圆圈

        var timer = setInterval(function(){
            iNow++;
            tab();

        },2500);

        // 1.2 封装切换函数
        function tab(){
            if(!aImgs){
                aImgs = $("#J_homeSwiper .swiper-slide").find("a");
            }
            if(!aBtns){
                aBtns = $("#J_homeSwiper .swiper-pagination").find("a");
            }
            if(iNow == 5){
                iNow = 0;
            }

            //图片切换
            aImgs.hide().css("opacity", 0.2).eq(iNow).show().animate({opacity: 1}, 500);
            //小圆点切换
            aBtns.removeClass("swiper-pagination-bullet-active").eq(iNow).addClass("swiper-pagination-bullet-active");
        }

        //1.3 添加鼠标移入和移除
        $("#J_homeSwiper, .swiper-button-next, .swiper-button-prev").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab();   
            },2500);
        })

        //1.4 点击小圆圈，实现切换 - 事件委托
        $("#J_homeSwiper .swiper-pagination").on("click", "a", function(){
            iNow = $(this).index();
            tab();
            return false; //stop <a>'s default 行为
        })

        $(".swiper-button-next, .swiper-button-prev").click(function(){
            if(this.className == ".swiper-button-prev"){
                //如果再往前点就会变成-1张图片，不能让他变成-1，要让他回到最后一张图片
                iNow--;
                if(iNow==-1){
                    iNow = 4;
                }
            }else{
                iNow++;
            }
            tab();
        })
    
    }

    //2， 侧边导航栏的数据加载
    function leftNavDownload(){
        $.ajax({
            url: "../data/nav.json",
            success: function(result){
                var sideArr = result.sideNav;
                //alert(sideArr);
                for(var i = 0; i < 5; i++){
                    var node = $(`<li class = 'category-item'>
                    <a href = "/index.html" class = 'title'>
                        ${sideArr[i].title}
                        <em class = 'iconfont-arrow-right-big'></em>
                    </a>
                    <div class="children clearfix"> 
                    </div>
                </li>`);
                node.appendTo("#J_categoryList");
            
                //取出当 前这个选项的子节点
                var childArr = sideArr[i].child;
                //all cols
                var col = Math.ceil(childArr.length / 6);
                //九三一共多少列，对应多少class样式
                node.find("div.children").addClass("children-col-" + col);
                //通过循环，创建右侧上面每一个数据
                for (var j = 0; j < childArr.length; j++){
                    if(j % 6 == 0){
                        var newUl = $(`<ul class="children-list children-list-col children-list-col-${parseInt(j / 6)}">
                    </ul>`); 
                        newUl.appendTo(node.find("div.children"));
                    }
                    $(`<li>
                    <a href="http://www.mi.com/redminote8pro" data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.2" class="link clearfix" data-stat-id="d678e8386e9cb0fb" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-d678e8386e9cb0fb', 'http://www.mi.com/redminote8pro', 'pcpid', '31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.2']);">
                        <img src="${childArr[j].img}" width="40" height="40" alt="" class="thumb">
                        <span class="text">${childArr[j].title}</span>
                    </a>
                </li>`).appendTo(newUl);
                  }
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }

    //2.1 给侧边导航 添加移入移出效果 选项卡切换效果 事件委托
    function leftNavTab(){
        $("#J_categoryList").on("mouseenter", ".category-item", function(){
            $(this).addClass("category-item-active");
        })
        $("#J_categoryList").on("mouseleave", ".category-item", function(){
            $(this).removeClass("category-item-active");
        })

    }

    // 3, down top nav data
    function topNavDownload(){
        $.ajax({
            url: "../data/nav.json",
            success: function(result){
                var topNavArr = result.topNav;
                topNavArr.push({title: "serve"}, {title:"comunity"});
                for(var i = 0; i < topNavArr.length; i++){
                    $(`<li data-index = "${i}" class = "nav-item">
                    <a href = "javascript: void(0);" class = "link">
                        <span class = "text">${topNavArr[i].title}</span>
                    </a>
                   </li>`).appendTo(".site-header .header-nav .nav-list");

                   var node = $(`<ul class="children-list clearfix" style="display: ${i == 0 ? "block": "none"}"></ul>`);
                   node.appendTo("#J_navMenu .container")

                   //取出所有的子菜单
                  if (topNavArr[i].childs){
                    var childArr = topNavArr[i].childs;
                    for (var j = 0; j < childArr.length; j++){
                        $(`<li>
                        <a href="#">
                            <div class="figure figure-thumb">
                                <img src="${childArr[j].img}"s alt="">
                            </div>
                            <div class="title">${childArr[j].a}</div>
                            <p class = "price">${childArr[j].i}</p>
                        </a>
                    </li>`).appendTo(node);
                    }
                  }
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })
    } 

    //顶部导航添加移入移出效果
    function topNavTab(){
        $(".header-nav .nav-list").on("mouseenter","nav-item", function(){
            $(this).addClass("nav-item-active");
        })
        $(".header-nav .nav-list").on("mouseleave","nav-item", function(){
            $(this).removeClass("nav-item-active");
        })

    }

    //search
    function searchTab(){
        $("#search").focus(function(){
            $("#J_keywordList").removeClass("hide").addClass("show");
        }).blur(function(){
            $("#J_keywordList").removeClass("show").addClass("hide");
        })

    }


    return {
        download: download,
        banner: banner,
        leftNavTab: leftNavTab,
        topNavTab: topNavTab,
        searchTab: searchTab
    } 
})
 