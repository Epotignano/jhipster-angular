/// <reference path="../../../.tmp/typings/tsd.d.ts" />
/// <reference path="./settings.service.ts" />

module Onesnap.Settings {
	angular.module('onesnap.settings', [])
		.service('SettingsService', SettingsService)
}