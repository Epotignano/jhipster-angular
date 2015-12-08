'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {

  gulp.watch([path.join(conf.paths.app, '/*.html'), 'bower.json'], ['inject']);

  gulp.watch([
    path.join(conf.paths.app, '/scripts/**/*.css'),
    path.join(conf.paths.app, '/scripts/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch([
    path.join(conf.paths.app, '/scripts/**/*.js'),
    path.join(conf.paths.app, '/scripts/**/*.ts')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch(path.join(conf.paths.app, '/scripts/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
});
