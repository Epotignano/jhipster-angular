'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('inject', ['scripts', 'styles'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/scripts/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/scripts/vendor.css')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.app, '/scripts/**/*.module.js'),
    path.join(conf.paths.app, '/scripts/**/*.js'),
    path.join(conf.paths.tmp, '/serve/scripts/**/*.module.js'),
    path.join(conf.paths.tmp, '/serve/scripts/**/*.js'),
    path.join('!' + conf.paths.app, '/scripts/**/*.spec.js'),
    path.join('!' + conf.paths.app, '/scripts/**/*.mock.js')
  ], { read: false });

  var injectOptions = {
    ignorePath: [conf.paths.app, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.app, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});