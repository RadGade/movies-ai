'use strict';

var gulp        = require('gulp');
var webpack     = require('gulp-webpack');
var less        = require('gulp-less');
var sourcemaps  = require('gulp-sourcemaps');

gulp.task('less', function () {
    return gulp.src('./less/styles.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('watch', function(){
    gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('default', ['watch']);
