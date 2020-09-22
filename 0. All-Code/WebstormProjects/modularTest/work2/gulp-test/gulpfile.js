var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
//打包下边这些所有的 ，下边所有的方法都在这个对象里边

// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");
// var less = require("gulp-less");
// var cssClean = require("gulp-clean-css");
// var htmlMin = require("gulp-htmlmin");
// var livereLoad = require("gulp-livereload");
// var connect = require("gulp-connect");
// var open = require("open");

//注册任务
// gulp.task("task name",function () {
//     //配置任务操作
//
// });

//注册合并压缩js任务
//链式调用不用加分号
gulp.task('js',function () {
    return gulp.src("src/js/**/*.js") //找出目标源文件，讲数据督导gulp内存种
    .pipe($.concat("build.js")) //临时合并文件
    .pipe(gulp.dest("dist/js/")) //gulp.js执行
    .pipe($.uglify())  //压缩文件
    .pipe($.rename({suffix: ".min"})) //重命名
    .pipe(gulp.dest("dist/js/"))  //gulp.js执行
        .pipe($.livereLoad())//实时刷新
        .pipe($.connect,reload())
})

//注册转换less的任务
gulp.task('less',function () {
    return gulp.src("src/less/*.less")
        .pipe($.less()) //编译less文件为CSS
        .pipe(gulp.dest("src/css/")) //output
        .pipe($.livereLoad())//实时刷新
        .pipe($.connect,reload())
})

//合并并压缩css文件,["less"]执行完才开启css
gulp.task('css',["less"], function () {
    return gulp.src("src/css/*.css")
        .pipe($.concat("build.css"))
        .pipe($.rename({suffix: ".min"}))
        .pipe($.cleamCss({conpatibitility:"ie8"}))
        .pipe(gulp.dest("dist/css/"))
        .pipe($.livereLoad())//实时刷新
        .pipe($.connect,reload())

})

//注册压缩html任务
//打包合并html
//插件：npm i gulp-htmlmin --save-dev
gulp.task("html", function () {
    return gulp.src("index.html")
        .pipe($.htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest("dist/"))
        .pipe($.livereLoad())//实时刷新
        .pipe($.connect,reload())
})
//注册一个监视任务：半自动
gulp.task("watch",['default'],function () {
    livereLoad.listen(); //开启监听
    gulp.watch("src/js/*js",['js']) //确认目标以及绑定的任务
    gulp.watch(['src/css/*.css','src/less/*.css'])
})

//注册监视任务：全自动
gulp.task("server",['default'],function () {
    //配置服务器选项
    connect.server({
        root:"dist/",
        livereload:true,
        port:5000
    });
    //open这可以自动打开指定连接
    open("http://localhost:5000/");

    $.livereLoad.listen(); //开启监听
    gulp.watch("src/js/*js",['js']) //确认目标以及绑定的任务
    gulp.watch(['src/css/*.css','src/less/*.css'])
})


//注册默认任务
gulp.task("default", ["js","less","css","html"],['css']);

//下载三个包:插件
// npm i gulp-concat gulp-uglify gulp-rename --save-dev

//去掉return 就是同步了,但是加上效率高