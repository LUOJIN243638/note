/*
    第三方软件

    gulp-scss
    gulp-minify-css
    gulp-rename

    cnpm i gulp-scss gulp-minify-css gulp-rename -D 

    把.scss文件  --》 css文件 ---》 压缩--》min.css

    gulp-scss / gulp-sass 看那个可以用 下那个
    cnpm i gulp-sass -D
    gulp build
 
*/
const gulp = require("gulp");
const scss = require("gulp-scss");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
/*
  index.scss--index.css--index.min.css(rename)
*/
gulp.task("scss",function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

/*
  rename 批量处理
*/ 
gulp.task("scssAll",function(){
    return gulp.src("stylesheet/*.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

// js 
gulp.task("scripts", function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

// html
gulp.task("copy-html", function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

// data 处理  
gulp.task("data", function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

//处理图片
gulp.task("images", function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

//一次执行多个任务
gulp.task("build", ["scss", "scripts","copy-html","data","scssAll","images"],function(){
    console.log("build successful!");
})


//watch
gulp.task("watch",function(){
    gulp.watch("stylesheet/index.scss",["scss"]);
    gulp.watch("stylesheet/*.scss",["scssAll"]);
    gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
    gulp.watch("*.html",["copy-html"]);
    gulp.watch(["*.json","!package.json"],["data"]);
    gulp.watch("images/**/*",['images']);
})

// //启动服务器 cnpm -i gulp-connect -D 
const connect = require("gulp-connect");
gulp.task("server", function(){
    connect.server({
        root:"dist",
        port: 8887,   //0-65535    
        livereload: true 
    })
})

//default task     gulp 
gulp.task("default",["watch","server"]);
