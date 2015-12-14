/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="./index.routes.ts" />
/// <reference path="./index.formly.conf.ts" />
/// <reference path="./index.http.config.ts" />

module Onesnap {
	'use strict';
	angular.module('coursesApp', ['app.core',
	// navigation
	'app.navigation',
	// toolbar
	'app.toolbar', 
	// template components
	'app.components',
	// our modules 
	'onesnap.auth', 'onesnap.commons',
	'onesnap.settings', 'onesnap.components',
	'onesnap.dashboard'])
		.config(RouterConfig)
		.config(httpConfig)
		.config(FormlyConfiguration)
};