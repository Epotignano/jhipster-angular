var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var ngConstant = require('gulp-ng-constant-fork');
var parseString = require('xml2js').parseString;
var fs = require('fs');

var parseVersionFromPomXml = function() {
    var version;
    var pomXml = fs.readFileSync('pom.xml', 'utf8');
    parseString(pomXml, function (err, result) {
        version = result.project.version[0];
    });
    return version;
};

gulp.task('ngconstant:dev', function() {
    return ngConstant({
        dest: 'index.constants.js',
        name: 'coursesApp',
        deps:   false,
        noFile: true,
        interpolate: /\{%=(.+?)%\}/g,
        wrap: '/* jshint quotmark: false */\n"use strict";\n// DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE\n{%= __ngModule %}',
        constants: {
            ENV: 'dev',
            VERSION: parseVersionFromPomXml()
        }
    })
        .pipe(gulp.dest(conf.paths.app + '/scripts/'));
});

gulp.task('ngconstant:prod', function() {
    return ngConstant({
        dest: 'index.constants.js',
        name: 'coursesApp',
        deps:   false,
        noFile: true,
        interpolate: /\{%=(.+?)%\}/g,
        wrap: '/* jshint quotmark: false */\n"use strict";\n// DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE\n{%= __ngModule %}',
        constants: {
            ENV: 'prod',
            VERSION: parseVersionFromPomXml()
        }
    })
        .pipe(gulp.dest(conf.path.app + '/scripts/'));
});