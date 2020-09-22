window.addEventListener('load', function () {
    //1, get Elements 

    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // foucs Widhth 
    var w = focus.offsetWidth;
    var ol = focus.children[1];

    // 2, 利用定时器自动轮播图片
    var index = 0;
    var timer = this.setInterval(function () {
        index++;
        // 移动端移动，tanslate 不用加定位
        translatex = -index * w;
        // ul 添加过渡效果，缓慢移动
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000)
    // 等着我们过度完成之后，再去判断 监听过度完成的事件 transitioned
    ul.addEventListener('transitionend', function () {
        // 无缝滚动 
        // 如果 index=3 说明走到了最后一张，立马跳回第一张
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        // 3, 小圆点跟随图片变化
        // 把当前索引号 的小 li 加上 current add
        ol.querySelector('li.current').classList.remove('current');
        // 让当前索引号 的小 Li 加上 current add 
        ol.children[index].classList.add('current');
    });

    // 4, 手指滑动轮播图
    // 触摸元素 touchstrat: 获取手指初始坐标
    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸，停止定时器
        clearInterval(timer);
    })

    // 移动手指 touchmove : 计算手指的滑动距离，并且移动盒子
    ul.addEventListener('touchmove', function (e) {
        // 就算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：盒子原来的位置 + 手指移动的距离
        var translatex = -index * w + moveX;
        // 手指拖动的时候，不需要过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true; // 如果用户手指移动过，我们再去判断否则不去判断效果
        e.preventDefault(); // 阻止滚动屏幕的行为
    })

    // 手指离开 根据移动距离，去判断是回弹 还是播放上一张 下一张
    ul.addEventListener('touchend', function (e) {
        // (1) 如果移动距离 大于50像素，播放上一张 或者下一张
        if (flag) {
            if (Math.abs(moveX) > 50) {
                // 如果右滑， ＋
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果左滑动 ， - 
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // (2) 如果移动距离 < 50像素，弹回去上一张 或者下一张
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        // 手指离开重新开启定时器
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            // 移动端移动，tanslate 不用加定位
            translatex = -index * w;
            // ul 添加过渡效果，缓慢移动
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000)
    })

    // go back 
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        // > = offsetTop
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    }) 
    goBack.addEventListener('click', function () {
        window.scroll(0, 0);
    })
})  
