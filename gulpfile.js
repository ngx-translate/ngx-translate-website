'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const connect = require('gulp-connect');
const watch = require('gulp-watch');

gulp.task('scss', () => gulp.src('./src/styles/theme.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/assets/css')));

gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        root: ['.', 'dist']
    });
});

gulp.task('livereload', () => gulp.src(['./dist/**'])
    .pipe(watch('./dist/**'))
    .pipe(connect.reload()));

gulp.task('copy-index', () => gulp.src(['./src/html/index.html']).pipe(gulp.dest('./dist')));
gulp.task('copy-assets', () => gulp.src(['./src/assets/**']).pipe(gulp.dest('./dist/assets')));
gulp.task('copy', gulp.parallel('copy-index', 'copy-assets'));

gulp.task('watch-scss', () => gulp.watch('./src/**/*.scss', ['scss']));
gulp.task('watch-src', () => gulp.watch('./src/**', ['copy']));
gulp.task('watch', gulp.parallel('watch-scss', 'watch-src'));

gulp.task('default', gulp.series('scss', 'copy', 'webserver', 'livereload', 'watch'));
gulp.task('build', gulp.series('scss', 'copy'));
