/**
 * Created by mmasuyama on 10/22/2015.
 */
/// <reference path="../../../.tmp/typings/tsd.d.ts" />
/// <reference path="auth.services.ts" />

module Onesnap.Auth {

  'use strict';

  interface ILogin {

    username: string;
    password: string;
    error: ng.IHttpPromiseCallbackArg<{}>;
    signIn() : void;
  }

  export class LoginController implements ILogin {
    public username: string;
    public error: ng.IHttpPromiseCallbackArg<{}>;
    public password: string;

    static $inject = ['AuthService'];
    /** @ngInject */
    constructor(private AuthService: Onesnap.Auth.AuthService, private $translate
    ) {}

    signIn () {
      this.AuthService.login({username: this.username, password: this.password})
        .then((err) => {
          this.error = err;
        });
    }
  }
}

  
