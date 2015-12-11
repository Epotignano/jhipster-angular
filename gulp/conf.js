/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
var paths = exports.paths = {
  app: 'src/main/application',
  dist: 'src/main/webapp/dist',
  test: 'src/test/javascript/spec',
  tmp: 'src/main/webapp',
  importPath: 'src/main/application/bower_components',
  scss: 'src/main/scss',
  port: 9000,
  apiPort: 8080,
  liveReloadPort: 35729
};


/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  //exclude: [/jquery/],
  directory: paths.app + '/bower_components'
};

exports.endsWith = function (str, suffix) {
    return str.indexOf('/', str.length - suffix.length) !== -1;
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
  'use strict';

  return function (err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
