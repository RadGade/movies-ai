'use strict';

var gulp        = require('gulp');
var webpack     = require('gulp-webpack');
var less        = require('gulp-less');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('webpack', function(){
    return gulp.src('./src/app.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

gulp.task('less', function () {
    return gulp.src('./less/styles.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*.js', ['webpack']);
    gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('browser-sync', ['watch'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});
