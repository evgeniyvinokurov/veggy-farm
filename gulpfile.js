'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('concat', function () {
  return gulp.src('./assets/js/**/*.js')
    .pipe(concat("./static/all.js"))
    .pipe(gulp.dest('.'));
});
