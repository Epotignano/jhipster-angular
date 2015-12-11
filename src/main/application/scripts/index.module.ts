/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="./index.routes.ts" />

module Onesnap{
	'use strict';
	angular.module('coursesApp', ['app.core',
	// navigation
	'app.navigation',
	// toolbar
	'app.toolbar', 
	//template components
	'app.components',
	'dashboard'])
		.config(RouterConfig)
}