/**
 * Created by Tarun on 7/7/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('concatCss', function () {
    gulp.src('app/css/*.css')
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest('app/css'));
});

gulp.task('cssmin', function () {
    gulp.src('app/css/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('release'));
});

gulp.task('jsmin', function () {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('release'));
});

// gulp.task('random', function () {
//     console.log('This is some random task!!!');
// });

// gulp.task('default', function () {
//     console.log('This is some default task!!!');
// });

gulp.task('default', ['sass', 'concatCss', 'cssmin', 'jsmin'], function () {
    console.log('All default tasks finished');
});