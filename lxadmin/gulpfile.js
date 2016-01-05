"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect"); //Runs a local dev server
var open = require("gulp-open"); //Open a URL in a web browser
var browserify = require('browserify'); //Bundle JS
var reactify = require('reactify'); //transforms React JSX to JS
var source = require('vinyl-source-stream'); //Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

//Start a local development server
gulp.task("connect", function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

//Open url in web browser
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        //.pipe(open({ uri: config.devBaseUrl+':'+config.port+'/', app: 'Google Chrome'}));
        .pipe(open({ uri: config.devBaseUrl+':'+config.port+'/'}));
});

//Copy html to dist folder
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

//Compile js and copy js files to dist folder
gulp.task('js', function(){
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console)) //出错机制
        .pipe(source('bundle.js')) //browserify的输出名字
        .pipe(gulp.dest(config.paths.dist+'/scripts')) //gulp拷贝目录地址
        .pipe(connect.reload()); //重载服务器
});

//Concat css files to dist folder
gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist+'/css'))
        .pipe(connect.reload());
});

//从源码目录拷贝到目标目录
//在这里可以对图片进行优化
gulp.task('images', function(){
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    //发布favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
});

//Watch file changes
gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
    gulp.watch(config.paths.css, ['css']);
});

//Default css
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);