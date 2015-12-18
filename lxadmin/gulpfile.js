"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect"); //Runs a local dev server
var open = require("gulp-open"); //Open a URL in a web browser
var browserify = require('browserify'); //Bundle JS
var reactify = require('reactify'); //transforms React JSX to JS
var source = require('vinyl-source-stream'); //Use conventional text streams with Gulp

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
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

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open('', { url: config.devBaseUrl+':'+config.port+'/'}));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function(){
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console)) //出错机制
        .pipe(source('bundle.js')) //browserify的输出名字
        .pipe(gulp.dest(config.paths.dist+'/scripts')) //gulp拷贝目录地址
        .pipe(connect.reload()); //重载服务器
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'open', 'watch']);