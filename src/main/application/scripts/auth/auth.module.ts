/**
 * Created by mmasuyama on 10/21/2015.
 */

/// <reference path="../../../.tmp/typings/tsd.d.ts" />
/// <reference path="auth.route.ts" />
/// <reference path="auth.login.controller.ts" />

module Onesnap.Auth {
  'use strict';

  angular.module('auth', [])
    .controller('LoginController', LoginController)
    .service('AuthService', AuthService)
    .config(RouterConfig);
}

