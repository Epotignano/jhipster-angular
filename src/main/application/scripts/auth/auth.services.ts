/// <reference path="../../../.tmp/typings/tsd.d.ts" />

module Onesnap.Auth {

	export class AuthService {
		
		constructor(private $http: ng.IHttpService) {}
		
		//methods
		
		
		login(credentials) {
			var data = 'j_username=' + encodeURIComponent(credentials.username) +
				'&j_password=' + encodeURIComponent(credentials.password) +
				'&remember-me=' + credentials.rememberMe + '&submit=Login';
			return this.$http.post('http://169.254.37.134:8080/api/authentication', data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(response) {
				return response;
			});
		}
		
		logout() {
			// logout from the server
			this.$http.post('api/logout', {}).success(function(response) {
				// to get a new csrf token call the api
				this.$http.get('api/account');
				return response;
			});
		}


	}



}