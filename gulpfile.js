'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    reactify = require('reactify'),
    uglifyify = require('uglifyify'),
    del = require('del'),
    webserver = require('gulp-webserver');

gulp.task('clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('watchify', function () {
  var bundler = watchify(browserify('./scripts/app.jsx', watchify.args));

  function rebundle () {
    return bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(gulp.dest('dist/js'));
  }

  bundler.transform(reactify);
  bundler.transform(uglifyify);
  bundler.on('update', rebundle);
  return rebundle();
});

gulp.task('styles', function () {
  return gulp.src('styles/main.scss')
    .pipe(changed('dist/css'))
    .pipe(sass({sourceComments: 'map', sourceMap: 'sass'}))
    .pipe(autoprefixer('last 1 version'))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('styles/main.scss', ['styles']);
});

gulp.task('default', ['webserver', 'watch', 'watchify', 'styles']);
