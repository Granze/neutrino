'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    reactify = require('reactify'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver');

gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('scripts', function () {
  var browserified = transform(function (filename) {
    var b = browserify(filename);
    b.transform(reactify);
    return b.bundle();
  });
  return gulp.src('scripts/app.jsx')
    .pipe(browserified)
    .pipe(rename('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
  return gulp.src('styles/main.scss')
    .pipe(sass({sourceComments: 'map', sourceMap: 'sass'}))
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('scripts/**/*.jsx', ['scripts']);
  gulp.watch('styles/main.scss', ['styles']);
});

gulp.task('default', ['webserver', 'watch', 'scripts', 'styles']);
