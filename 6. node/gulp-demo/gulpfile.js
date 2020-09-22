
//1，引入gulp模块
const gulp =require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//2, 使用gulp.task()建立任务
//参数一，任务名称
//参数二，任务回调函数
gulp.task('first', async() => {
	console.log("人生中第一个gulp文件执行了");

	//3，使用gulp.src()获取要处理的文件
	gulp.src("./src/css/base.css")

		//4，将处理后的文件输出到dist下的css目录,没有会帮我们创建
		.pipe(gulp.dest('dist/css'));

});

/*1， done => {
  console.log('Hello World!');
  done();

  2，async() =>{
  }
 解决： The following tasks did not complete: first
 Did you forget to signal async completion?
});*/


// html任务
//1.html文件中代码的压缩操作
//2，抽取html中公共代码
 gulp.task('htmlmin', async() => {
 	gulp.src("./src/*.html")

 		//先抽取公共代码在压缩
 		.pipe(fileinclude())
 		
 		//压缩html文件中的代码 ，折叠空格
 		.pipe(htmlmin({collapseWhitespace: true}))
 		.pipe(gulp.dest("dist"));
 });


//css任务
//1，less语法转换
//2，css代码压缩
gulp.task('cssmin', async() => {
	// 选择css目录下的所有less和css文件
	gulp.src(['./src/css/*.less', './src/css/*.css'])
		// 将less语法转为css
		.pipe(less())
		// 压缩css代码
		.pipe(csso())
		// 将处理结果输出
		.pipe(gulp.dest("dist/css"))
});

//JS任务
//1，ES6代码转换
//2，代码压缩
gulp.task("jsmin",async() => {
	gulp.src('./src/js/*.js')
		.pipe(babel({
			// 它可以判断当前代码的运行环境，将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        // 转化的代码压缩
        .pipe(uglify())
        // 输出
        .pipe(gulp.dest("dist/js")) 
});


// 复制文件夹
gulp.task('copy', async() => {
	gulp.src('./src/images/*')
		.pipe(gulp.dest("dist/images"))
	gulp.src("./src/lib/*")
		.pipe(gulp.dest("dist/lib"))
})

//建立build任务，构建任务
gulp.task('default', gulp.series('htmlmin','cssmin','jsmin','copy',done => done()));


//  gulp 4 解决方法
//  gulp.task('default', gulp.series('script', 'html', done => done()))


/*
     
gulp AssertionError [ERR_ASSERTION]: Task function must be specified

     // gulp3 可以 gulp4 不可以
gulp.task('default', ['script', 'html'], done => {
    console.log('default')
    done()
})

*/