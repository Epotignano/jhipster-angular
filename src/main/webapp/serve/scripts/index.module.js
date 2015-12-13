/// <reference path="../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var httpConfig = (function () {
        function httpConfig($httpProvider) {
            this.$httpProvider = $httpProvider;
            this.$httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
            this.$httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
        }
        return httpConfig;
    })();
    Onesnap.httpConfig = httpConfig;
})(Onesnap || (Onesnap = {}));

/// <reference path="../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('app', {
                url: '/app',
                views: {
                    'main@': {
                        templateUrl: 'scripts/core/layouts/default.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'scripts/toolbar/toolbar.html',
                        controller: 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: 'scripts/sidenav/navigation/navigation.html',
                        controller: 'NavigationController as vm'
                    }
                }
            });
            $urlRouterProvider.otherwise('/app');
            // commons translations
        }
        return RouterConfig;
    })();
    Onesnap.RouterConfig = RouterConfig;
})(Onesnap || (Onesnap = {}));

/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="./index.routes.ts" />
/// <reference path="./index.http.config.ts" />
var Onesnap;
(function (Onesnap) {
    'use strict';
    angular.module('coursesApp', ['app.core', 'app.navigation', 'app.toolbar', 'app.components', 'auth', 'settings', 'dashboard']).config(Onesnap.RouterConfig).config(Onesnap.httpConfig);
})(Onesnap || (Onesnap = {}));

/// <reference path="../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Auth;
    (function (Auth) {
        var AuthService = (function () {
            function AuthService($http) {
                this.$http = $http;
            }
            //methods
            AuthService.prototype.login = function (credentials) {
                var data = 'j_username=' + encodeURIComponent(credentials.username) + '&j_password=' + encodeURIComponent(credentials.password) + '&remember-me=' + credentials.rememberMe + '&submit=Login';
                return this.$http.post('http://169.254.37.134:8080/api/authentication', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (response) {
                    return response;
                });
            };
            AuthService.prototype.logout = function () {
                // logout from the server
                this.$http.post('api/logout', {}).success(function (response) {
                    // to get a new csrf token call the api
                    this.$http.get('api/account');
                    return response;
                });
            };
            return AuthService;
        })();
        Auth.AuthService = AuthService;
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 10/22/2015.
 */
/// <reference path="../../../.tmp/typings/tsd.d.ts" />
/// <reference path="auth.services.ts" />
var Onesnap;
(function (Onesnap) {
    var Auth;
    (function (Auth) {
        'use strict';
        var LoginController = (function () {
            /** @ngInject */
            function LoginController(AuthService, $translate) {
                this.AuthService = AuthService;
                this.$translate = $translate;
            }
            LoginController.prototype.signIn = function () {
                var _this = this;
                this.AuthService.login({ username: this.username, password: this.password }).then(function (err) {
                    _this.error = err;
                });
            };
            LoginController.$inject = ['AuthService'];
            return LoginController;
        })();
        Auth.LoginController = LoginController;
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 10/21/2015.
 */
/// <reference path="../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Auth;
    (function (Auth) {
        'use strict';
        var RouterConfig = (function () {
            /** @ngInject */
            function RouterConfig($stateProvider, $translatePartialLoaderProvider) {
                $stateProvider.state('access', {
                    abstract: true,
                    url: '/access',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/core/layouts/basic.html'
                        }
                    }
                });
                $stateProvider.state('access.pages_auth_login', {
                    url: '/login',
                    views: {
                        'content': {
                            templateUrl: 'scripts/auth/auth.login.html',
                            controller: 'LoginController as vm'
                        }
                    }
                });
                $translatePartialLoaderProvider.addPart('app/auth');
            }
            return RouterConfig;
        })();
        Auth.RouterConfig = RouterConfig;
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 10/21/2015.
 */
/// <reference path="../../../.tmp/typings/tsd.d.ts" />
/// <reference path="auth.route.ts" />
/// <reference path="auth.login.controller.ts" />
var Onesnap;
(function (Onesnap) {
    var Auth;
    (function (Auth) {
        'use strict';
        angular.module('auth', []).controller('LoginController', Auth.LoginController).service('AuthService', Auth.AuthService).config(Auth.RouterConfig);
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 11/5/2015.
 */

/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Dashboard;
    (function (Dashboard) {
        'use strict';
        angular.module('dashboard', []);
    })(Dashboard = Onesnap.Dashboard || (Onesnap.Dashboard = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Dashboard;
    (function (Dashboard) {
        'use strict';
        var RouterConfig = (function () {
            /** @ngInject */
            function RouterConfig($stateProvider) {
                $stateProvider.state('app.dashboard', {
                    url: '/dashboard',
                    views: {
                        'content': {
                            templateUrl: 'app/dashboard/dashboard.html'
                        }
                    }
                });
            }
            return RouterConfig;
        })();
        Dashboard.RouterConfig = RouterConfig;
    })(Dashboard = Onesnap.Dashboard || (Onesnap.Dashboard = {}));
})(Onesnap || (Onesnap = {}));
angular.module('dashboard').config(Onesnap.Dashboard.RouterConfig);

/// <reference path="../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Settings;
    (function (Settings) {
        var SettingsService = (function () {
            function SettingsService($http) {
                this.$http = $http;
                this.mockMenu = [{
                    label: 'COURSES.SECTION_TITLE',
                    icon: 'icon-tile-four',
                    items: [
                        {
                            label: 'COMMONS.LIST',
                            sref: 'app.courses.list'
                        },
                        {
                            label: 'COMMONS.NEW',
                            sref: 'app.courses.create'
                        }
                    ]
                }, {
                    label: 'TEACHERS.SECTION_TITLE',
                    icon: 'icon-tile-four',
                    items: [
                        {
                            label: 'COMMONS.LIST',
                            sref: 'app.teachers.list'
                        },
                        {
                            label: 'COMMONS.NEW',
                            sref: 'app.teachers.create'
                        }
                    ]
                }, {
                    label: 'STUDENTS.SECTION_TITLE',
                    icon: 'icon-tile-four',
                    items: [
                        {
                            label: 'COMMONS.LIST',
                            sref: 'app.students.list'
                        },
                        {
                            label: 'COMMONS.NEW',
                            sref: 'app.students.create'
                        }
                    ]
                },];
            }
            //TODO Get sidemenu options from an API endpoint;
            SettingsService.prototype.getSideMenu = function () {
                return this.mockMenu;
            };
            return SettingsService;
        })();
        Settings.SettingsService = SettingsService;
    })(Settings = Onesnap.Settings || (Onesnap.Settings = {}));
})(Onesnap || (Onesnap = {}));

/// <reference path="../../../.tmp/typings/tsd.d.ts" />
/// <reference path="./settings.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Settings;
    (function (Settings) {
        angular.module('settings', []).service('SettingsService', Settings.SettingsService);
    })(Settings = Onesnap.Settings || (Onesnap.Settings = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lmh0dHAuY29uZmlnLnRzIiwiaW5kZXgucm91dGVzLnRzIiwiaW5kZXgubW9kdWxlLnRzIiwiYXV0aC9hdXRoLnNlcnZpY2VzLnRzIiwiYXV0aC9hdXRoLmxvZ2luLmNvbnRyb2xsZXIudHMiLCJhdXRoL2F1dGgucm91dGUudHMiLCJhdXRoL2F1dGgubW9kdWxlLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUudHMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcy50cyIsInNldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJzZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuaHR0cENvbmZpZyIsIk9uZXNuYXAuaHR0cENvbmZpZy5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuUm91dGVyQ29uZmlnIiwiT25lc25hcC5Sb3V0ZXJDb25maWcuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGgiLCJPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UiLCJPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UubG9naW4iLCJPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UubG9nb3V0IiwiT25lc25hcC5BdXRoLkxvZ2luQ29udHJvbGxlciIsIk9uZXNuYXAuQXV0aC5Mb2dpbkNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGguTG9naW5Db250cm9sbGVyLnNpZ25JbiIsIk9uZXNuYXAuQXV0aC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkF1dGguUm91dGVyQ29uZmlnLmNvbnN0cnVjdG9yIiwiT25lc25hcC5EYXNoYm9hcmQiLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWcuY29uc3RydWN0b3IiLCJPbmVzbmFwLlNldHRpbmdzIiwiT25lc25hcC5TZXR0aW5ncy5TZXR0aW5nc1NlcnZpY2UiLCJPbmVzbmFwLlNldHRpbmdzLlNldHRpbmdzU2VydmljZS5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuU2V0dGluZ3MuU2V0dGluZ3NTZXJ2aWNlLmdldFNpZGVNZW51Il0sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFJcEQsSUFBTyxPQUFPLENBV2I7QUFYRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBQ2ZBLElBQWFBLFVBQVVBO1FBRXRCQyxTQUZZQSxVQUFVQSxDQUVGQSxhQUFnQ0E7WUFBaENDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFtQkE7WUFDbkRBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLEdBQUdBLFlBQVlBLENBQUNBO1lBQzFEQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxDQUFDQSxjQUFjQSxHQUFHQSxjQUFjQSxDQUFDQTtRQUM3REEsQ0FBQ0E7UUFDRkQsaUJBQUNBO0lBQURBLENBTkFELEFBTUNDLElBQUFEO0lBTllBLGtCQUFVQSxHQUFWQSxVQU1aQSxDQUFBQTtBQUlGQSxDQUFDQSxFQVhNLE9BQU8sS0FBUCxPQUFPLFFBV2I7O0FDZkQsb0RBQW9EO0FBRXBELElBQU8sT0FBTyxDQWlDYjtBQWpDRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBQ2RBLFlBQVlBLENBQUNBO0lBRWJBLElBQWFBLFlBQVlBO1FBQ3ZCRyxnQkFBZ0JBO1FBQ2hCQSxTQUZXQSxZQUFZQSxDQUVYQSxjQUFvQ0EsRUFDcENBLGtCQUE0Q0E7WUFDeERDLGNBQWNBLENBQ1RBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBO2dCQUNaQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsS0FBS0EsRUFBS0E7b0JBQ1JBLE9BQU9BLEVBQVdBO3dCQUNoQkEsV0FBV0EsRUFBRUEsbUNBQW1DQTtxQkFDakRBO29CQUNEQSxhQUFhQSxFQUFFQTt3QkFDYkEsV0FBV0EsRUFBRUEsOEJBQThC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QUFRQSxLQUFSQSxnQkFBUUEsUUFHdEJBO0FBQURBLENBQUNBLEVBSE0sT0FBTyxLQUFQLE9BQU8sUUFHYiIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcblxyXG5cclxubW9kdWxlIE9uZXNuYXAge1xyXG5cdGV4cG9ydCBjbGFzcyBodHRwQ29uZmlnIHtcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlICRodHRwUHJvdmlkZXIgOiBuZy5JSHR0cFByb3ZpZGVyKSB7XHJcblx0XHRcdHRoaXMuJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdDU1JGLVRPS0VOJztcclxuXHRcdFx0dGhpcy4kaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRi1UT0tFTic7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcCB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBleHBvcnQgY2xhc3MgUm91dGVyQ29uZmlnIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcixcclxuICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlcjogbmcudWkuSVVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgdXJsOiAnL2FwcCcsXHJcbiAgICAgICAgICB2aWV3cyAgIDoge1xyXG4gICAgICAgICAgICAnbWFpbkAnICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2NvcmUvbGF5b3V0cy9kZWZhdWx0Lmh0bWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0b29sYmFyQGFwcCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvdG9vbGJhci90b29sYmFyLmh0bWwnLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXIgOiAnVG9vbGJhckNvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICduYXZpZ2F0aW9uQGFwcCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvc2lkZW5hdi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdOYXZpZ2F0aW9uQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAnKTtcclxuXHJcbiAgICAgIC8vIGNvbW1vbnMgdHJhbnNsYXRpb25zXHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2luZGV4LnJvdXRlcy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2luZGV4Lmh0dHAuY29uZmlnLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwe1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgnY291cnNlc0FwcCcsIFsnYXBwLmNvcmUnLFxyXG5cdC8vIG5hdmlnYXRpb25cclxuXHQnYXBwLm5hdmlnYXRpb24nLFxyXG5cdC8vIHRvb2xiYXJcclxuXHQnYXBwLnRvb2xiYXInLCBcclxuXHQvL3RlbXBsYXRlIGNvbXBvbmVudHNcclxuXHQnYXBwLmNvbXBvbmVudHMnLFxyXG5cdCdhdXRoJyxcclxuXHQnc2V0dGluZ3MnLFxyXG5cdCdkYXNoYm9hcmQnXSlcclxuXHRcdC5jb25maWcoUm91dGVyQ29uZmlnKVxyXG5cdFx0LmNvbmZpZyhodHRwQ29uZmlnKVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5BdXRoIHtcclxuXHJcblx0ZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRcdFxyXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSAkaHR0cDogbmcuSUh0dHBTZXJ2aWNlKSB7fVxyXG5cdFx0XHJcblx0XHQvL21ldGhvZHNcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRsb2dpbihjcmVkZW50aWFscykge1xyXG5cdFx0XHR2YXIgZGF0YSA9ICdqX3VzZXJuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQoY3JlZGVudGlhbHMudXNlcm5hbWUpICtcclxuXHRcdFx0XHQnJmpfcGFzc3dvcmQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChjcmVkZW50aWFscy5wYXNzd29yZCkgK1xyXG5cdFx0XHRcdCcmcmVtZW1iZXItbWU9JyArIGNyZWRlbnRpYWxzLnJlbWVtYmVyTWUgKyAnJnN1Ym1pdD1Mb2dpbic7XHJcblx0XHRcdHJldHVybiB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly8xNjkuMjU0LjM3LjEzNDo4MDgwL2FwaS9hdXRoZW50aWNhdGlvbicsIGRhdGEsIHtcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsb2dvdXQoKSB7XHJcblx0XHRcdC8vIGxvZ291dCBmcm9tIHRoZSBzZXJ2ZXJcclxuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KCdhcGkvbG9nb3V0Jywge30pLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHQvLyB0byBnZXQgYSBuZXcgY3NyZiB0b2tlbiBjYWxsIHRoZSBhcGlcclxuXHRcdFx0XHR0aGlzLiRodHRwLmdldCgnYXBpL2FjY291bnQnKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG59IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDEwLzIyLzIwMTUuXHJcbiAqL1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImF1dGguc2VydmljZXMudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuQXV0aCB7XHJcblxyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgaW50ZXJmYWNlIElMb2dpbiB7XHJcblxyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBlcnJvcjogbmcuSUh0dHBQcm9taXNlQ2FsbGJhY2tBcmc8e30+O1xyXG4gICAgc2lnbkluKCkgOiB2b2lkO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIExvZ2luQ29udHJvbGxlciBpbXBsZW1lbnRzIElMb2dpbiB7XHJcbiAgICBwdWJsaWMgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBlcnJvcjogbmcuSUh0dHBQcm9taXNlQ2FsbGJhY2tBcmc8e30+O1xyXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJ0F1dGhTZXJ2aWNlJ107XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIEF1dGhTZXJ2aWNlOiBPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UsIHByaXZhdGUgJHRyYW5zbGF0ZVxyXG4gICAgKSB7fVxyXG5cclxuICAgIHNpZ25JbiAoKSB7XHJcbiAgICAgIHRoaXMuQXV0aFNlcnZpY2UubG9naW4oe3VzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZH0pXHJcbiAgICAgICAgLnRoZW4oKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvciA9IGVycjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiAgXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMC8yMS8yMDE1LlxyXG4gKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuQXV0aCB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBleHBvcnQgY2xhc3MgUm91dGVyQ29uZmlnIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlciwgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlcikge1xyXG5cclxuICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FjY2VzcycsIHtcclxuICAgICAgICBhYnN0cmFjdCA6IHRydWUsXHJcbiAgICAgICAgdXJsOiAnL2FjY2VzcycsXHJcbiAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICdtYWluQCcgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29yZS9sYXlvdXRzL2Jhc2ljLmh0bWwnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYWNjZXNzLnBhZ2VzX2F1dGhfbG9naW4nLCB7XHJcbiAgICAgICAgdXJsICA6ICcvbG9naW4nLFxyXG4gICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2F1dGgvYXV0aC5sb2dpbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdhcHAvYXV0aCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTAvMjEvMjAxNS5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJhdXRoLnJvdXRlLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJhdXRoLmxvZ2luLmNvbnRyb2xsZXIudHNcIiAvPlxuXG5tb2R1bGUgT25lc25hcC5BdXRoIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhdXRoJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcilcbiAgICAuc2VydmljZSgnQXV0aFNlcnZpY2UnLCBBdXRoU2VydmljZSlcbiAgICAuY29uZmlnKFJvdXRlckNvbmZpZyk7XG59XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvNS8yMDE1LlxuICovXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvNS8yMDE1LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbm1vZHVsZSBPbmVzbmFwLkRhc2hib2FyZCB7XHJcblxyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcsIFtdKTtcclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvNS8yMDE1LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5EYXNoYm9hcmQge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2FwcC5kYXNoYm9hcmQnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICAgIHZpZXdzIDoge1xyXG4gICAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcpXHJcbiAgLmNvbmZpZyhPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWcpO1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxubW9kdWxlIE9uZXNuYXAuU2V0dGluZ3Mge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcclxuXHRcdHByaXZhdGUgbW9ja01lbnUgPSBbe1xyXG5cdFx0XHRsYWJlbDogJ0NPVVJTRVMuU0VDVElPTl9USVRMRScsXHJcblx0XHRcdGljb246ICdpY29uLXRpbGUtZm91cicsXHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdDT01NT05TLkxJU1QnLFxyXG5cdFx0XHRcdFx0c3JlZjogJ2FwcC5jb3Vyc2VzLmxpc3QnXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdDT01NT05TLk5FVycsXHJcblx0XHRcdFx0XHRzcmVmOiAnYXBwLmNvdXJzZXMuY3JlYXRlJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSwge1xyXG5cdFx0XHRcdGxhYmVsOiAnVEVBQ0hFUlMuU0VDVElPTl9USVRMRScsXHJcblx0XHRcdFx0aWNvbjogJ2ljb24tdGlsZS1mb3VyJyxcclxuXHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0NPTU1PTlMuTElTVCcsXHJcblx0XHRcdFx0XHRcdHNyZWY6ICdhcHAudGVhY2hlcnMubGlzdCdcclxuXHRcdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0NPTU1PTlMuTkVXJyxcclxuXHRcdFx0XHRcdFx0c3JlZjogJ2FwcC50ZWFjaGVycy5jcmVhdGUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0bGFiZWw6ICdTVFVERU5UUy5TRUNUSU9OX1RJVExFJyxcclxuXHRcdFx0XHRpY29uOiAnaWNvbi10aWxlLWZvdXInLFxyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnQ09NTU9OUy5MSVNUJyxcclxuXHRcdFx0XHRcdFx0c3JlZjogJ2FwcC5zdHVkZW50cy5saXN0J1xyXG5cdFx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnQ09NTU9OUy5ORVcnLFxyXG5cdFx0XHRcdFx0XHRzcmVmOiAnYXBwLnN0dWRlbnRzLmNyZWF0ZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sIF1cclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IG5nLklIdHRwU2VydmljZSkge1xyXG5cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly9UT0RPIEdldCBzaWRlbWVudSBvcHRpb25zIGZyb20gYW4gQVBJIGVuZHBvaW50O1xyXG5cdFx0Z2V0U2lkZU1lbnUoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm1vY2tNZW51O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc2V0dGluZ3Muc2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5TZXR0aW5ncyB7XHJcblx0YW5ndWxhci5tb2R1bGUoJ3NldHRpbmdzJywgW10pXHJcblx0XHQuc2VydmljZSgnU2V0dGluZ3NTZXJ2aWNlJywgU2V0dGluZ3NTZXJ2aWNlKVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9