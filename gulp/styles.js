'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles', function () {
  var sassOptions = {
    style: 'expanded'
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.app, '/scripts/**/*.scss'),
    path.join('!' + conf.paths.app, '/scripts/index.scss')
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      console.log(filePath);
      console.log(filePath.replace(conf.paths.app + '/scripts/', ''))
      filePath = filePath.replace(conf.paths.app + '/scripts/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

console.log(path.join(conf.paths.app, '/scripts/index.scss'));
  
  return gulp.src([
    path.join(conf.paths.app, '/index.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/scripts/')))
    .pipe(browserSync.reload({ stream: true }));
});
