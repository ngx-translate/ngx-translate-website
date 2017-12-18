'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');
var watch = require('gulp-watch');


gulp.task('scss', function () {
    return gulp.src('./src/styles/theme.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/assets/css'));
});


gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: ['.', 'dist']
    });
});


gulp.task('livereload', function() {
    gulp.src(['./dist/**'])
        .pipe(watch('./dist/**'))
        .pipe(connect.reload());
});


gulp.task('copy', function() {
    gulp.src(['./src/html/index.html']).pipe(gulp.dest('./dist'));
    gulp.src(['./src/assets/**']).pipe(gulp.dest('./dist/assets'));
});


gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss', ['scss']);
    gulp.watch('./src/**', ['copy']);
});


gulp.task('default', ['scss', 'copy', 'webserver', 'livereload', 'watch']);
gulp.task('build', ['scss', 'copy']);
