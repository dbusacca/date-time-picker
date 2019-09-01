'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-dart-sass');
const del = require('del');
const { series } = require('gulp');

gulp.task('sass:clean', () => {
    return del('./dist/ng-pick-datetime/assets/**/*');
});

gulp.task('sass:compile', () => {
    return gulp
        .src('./projects/ng-pick-datetime/src/lib/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/ng-pick-datetime/assets/style'));
});

gulp.task('sass:copy', () => {
    return gulp
        .src('./projects/ng-pick-datetime/src/lib/sass/**/*.scss')
        .pipe(gulp.dest('./dist/ng-pick-datetime/assets/style'));
});

gulp.task('copy', () => {
    return gulp.src(['./*.md', './LICENSE']).pipe(gulp.dest('./dist/ng-pick-datetime/'));
});

exports.sass = series('sass:clean', 'sass:compile', 'sass:copy', 'copy');
