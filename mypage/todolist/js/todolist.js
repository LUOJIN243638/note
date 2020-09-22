// 入口函数
$(function () {
    // 1, 判断用户是不是按下了 回车 按下回车，把完整数据 存储到本地存储里
    // 存数据格式 var todolist = [{title:"xxx", done: false}]

    // 每次一打开，就渲染加载页面, 可以看到以前的数据
    // 但是这里有【bug】, 加载之后，会调用获取数据函数，回车有会调用一次load(); ol 里有数据的情况下，在追加了一次
    // 所以在加载之前，把ol 里 内容 ，在加载
    load();

    $("#title").on("keydown", function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("please input your schedule!~")
            } else {
                // 先读取本地存储原来的数据（以后会多次使用）
                var local = getData();
                //     console.log(local); // 看有没有存数据
                //把local数组进行更新数据，把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                //把这个数组local 存储给本地数据（以后会多次使用）
                // local 是局部变量，作为参数传给下边的函数
                saveData(local);
                // 2, todolist 本地存储数据熏染加载到页面
                load();
                // 安樂回車 清空文本框内容
                $(this).val("");
            }
        }
    })

    // 3， 删除操作，删除的是本地存储的数据，他里边没有了，就不会渲染了
    //获取本地数据， 删完了，再保存给 本地存储； 给每个小a 自定义一个属性，index
    // on 给动态创建的元素绑定事件，click 是不行的: 事件委托
    $("ol,ul").on("click", "a", function () {
        // 獲取本地數據
        var data = getData();
        console.log(data);

        // 修改數據:attr("")獲取自定義屬性
        var index = $(this).attr("id");
        console.log(index);
        data.splice(index, 1); // 刪完了刷新頁面還會回來，所以要保存給本地存儲
        // 保存到本地存儲: data裏邊的數據刪掉，修改完的再存本地
        saveData(data);
        // 重新渲染頁面
        load();
    })

    // 4, 正在進行和已經完成操作
    $("ol, ul").on("click", "input", function () {
        // 獲取本地數據
        var data = getData();
        // 修改數據: 兄弟A 的索引號
        var index = $(this).siblings("a").attr("id");
        console.log(index);
        // prop 獲取固有屬性
        data[index].done = $(this).prop("checked");
        console.log(data);
        // 保存到本地存儲: data裏邊的數據刪掉，修改完的再存本地
        saveData(data);
        // 重新渲染頁面
        load();
    })




    // 读取本地数据 
    function getData() {
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            // 本地存储里是字符串格式，要转成对象才能用 
            return JSON.parse(data);
        } else {
            // 返回数组对象
            return [];
        }
    }

    //保存本地存储数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data))
    }

    // load 函数 渲染加载 页面， 数据对象格式才能用
    function load() {
        // 先读取本地操作
        var data = getData();
        // 先打印看有没有拿到
        console.log(data);

        // 所以在遍历之前，把ol 里 内容清空，在加载
        $("ol,ul").empty();

        var todoCount = 0;
        var doneCount = 0;

        // 遍历数据
        $.each(data, function (i, n) {
            //console.log(n);  i = index; n = 想要的数据
            // 在ol 里创建小li
            if (n.done) {
                $("ul").prepend("<li><input type = 'checkbox' checked> <p>" + n.title + "</p> <a href = 'javascript:;' id=" + i + "></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type = 'checkbox'> <p>" + n.title + "</p> <a href = 'javascript:;' id=" + i + "></a></li>");
                todoCount++;
            }
        });

        // 全部遍歷完畢 才統計數據
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

})