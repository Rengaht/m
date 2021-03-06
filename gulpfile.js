var gulp = require('gulp');
var gutil=require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var less=require('gulp-less');
var cssmin=require('gulp-minify-css');
var concat=require('gulp-concat');

var refresh=require("gulp-refresh");

gulp.task('build_js', function () {
    return browserify({entries: 'src/js/app.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dest'))
        .pipe(refresh());
});
gulp.task('build_css',function(){
	return gulp.src(['src/less/app.less'])
				.pipe(less())
				//.pipe(concat('app.css'))
				//.pipe(cssmin())
				.pipe(gulp.dest('dest/css'))
				.pipe(refresh());
});

gulp.task('watch_js',function(){
	 gulp.watch('src/js/**/*.js', ['build_js']);   
});
gulp.task('watch_css',function(){
 	gulp.watch('src/less/**/*.less', ['build_css']);
});

gulp.task('watch', ['watch_js','watch_css']);

gulp.task('default', ['watch','build_js','build_css']);