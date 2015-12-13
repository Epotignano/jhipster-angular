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

/**
 * Created by mmasuyama on 11/14/2015.
 */
/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        var entities;
        (function (entities) {
            var AutocompleteController = (function () {
                /** @ngInject */
                function AutocompleteController() {
                }
                return AutocompleteController;
            })();
            function entityAutocomplete() {
                var directive = {
                    scope: {
                        searchService: '=',
                        selectedItem: '='
                    },
                    templateUrl: 'app/components/entities/autocomplete.html'
                };
                return directive;
            }
            entities.entityAutocomplete = entityAutocomplete;
        })(entities = components.entities || (components.entities = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Components;
    (function (Components) {
        var Entities;
        (function (Entities) {
            var EntityEditorController = (function () {
                /** @ngInject */
                function EntityEditorController() {
                }
                return EntityEditorController;
            })();
            Entities.EntityEditorController = EntityEditorController;
            /** @ngInject */
            function entityEditor() {
                var directive = {
                    restrict: 'E',
                    scope: {
                        onSubmit: '=',
                        onCancel: '=',
                        formFields: '=',
                        entity: '='
                    },
                    templateUrl: 'app/components/entities/entities.editor.html',
                    controller: EntityEditorController,
                    controllerAs: 'vm',
                    bindToController: true
                };
                return directive;
            }
            Entities.entityEditor = entityEditor;
        })(Entities = Components.Entities || (Components.Entities = {}));
    })(Components = Onesnap.Components || (Onesnap.Components = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 11/5/2015.
 */
var Onesnap;
(function (Onesnap) {
    var Components;
    (function (Components) {
        var Entities;
        (function (Entities) {
            var FilterListController = (function () {
                /** @ngInject */
                function FilterListController() {
                }
                return FilterListController;
            })();
            Entities.FilterListController = FilterListController;
            /** @ngInject */
            function listFilter() {
                var directive = {
                    restrict: 'E',
                    scope: {
                        list: '=',
                        options: '='
                    },
                    templateUrl: 'app/components/entities/list.html',
                    controller: FilterListController,
                    controllerAs: 'vm',
                    bindToController: true
                };
                return directive;
            }
            Entities.listFilter = listFilter;
        })(Entities = Components.Entities || (Components.Entities = {}));
    })(Components = Onesnap.Components || (Onesnap.Components = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Components;
    (function (Components) {
        var Entities;
        (function (Entities) {
            /** @ngInject */
            var EntityListController = (function () {
                function EntityListController() {
                }
                EntityListController.prototype.columnIsSortable = function (entity) {
                    return (entity.sort) ? entity.key : '';
                };
                return EntityListController;
            })();
            Entities.EntityListController = EntityListController;
            /** @ngInject */
            function entityList() {
                var directive = {
                    restrict: 'E',
                    scope: {
                        thread: '=',
                        list: '=',
                        entityConf: '=',
                        options: '='
                    },
                    templateUrl: 'app/components/entities/entities.list.html',
                    controller: EntityListController,
                    controllerAs: 'vm',
                    bindToController: true
                };
                return directive;
            }
            Entities.entityList = entityList;
        })(Entities = Components.Entities || (Components.Entities = {}));
    })(Components = Onesnap.Components || (Onesnap.Components = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 11/10/2015.
 */
/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Components;
    (function (Components) {
        var Entities;
        (function (Entities) {
            var EntityDeletionController = (function () {
                /** @ngInject */
                function EntityDeletionController($mdDialog, $element, $q) {
                    var _this = this;
                    this.$mdDialog = $mdDialog;
                    this.$element = $element;
                    this.$q = $q;
                    this.executeDeletion = function () {
                        if (Array.isArray(_this.ngModel)) {
                            var promisesArray = [];
                            _this.ngModel.forEach(function (modelElement) {
                                var modelElementPromise = this.$q.defer();
                                promisesArray.push(modelElementPromise.promise);
                                this.deletionService(modelElement).then(this.deletionOnSuccess, this.deletionOnError);
                            });
                        }
                        else {
                            var _model = (_this.options.compareBy) ? _this.ngModel[_this.options.compareBy] : _this.ngModel;
                            if (_this.options.usePromise) {
                                _this.deletionService(_model);
                            }
                            else {
                                _this.deletionService(_model, _this.deletionCallback);
                            }
                        }
                    };
                    this.$element.bind('click', function () {
                        _this.submitDeletion(_this.collection, _this.ngModel);
                    });
                }
                EntityDeletionController.prototype.submitDeletion = function (ev, entity) {
                    var _this = this;
                    if (this.deletionService) {
                        if (this.options.askBeforeDelete) {
                            this.$mdDialog.show({
                                controller: DeletorDialogController,
                                controllerAs: 'dialogVm',
                                templateUrl: 'scripts/components/entities/entities.deletor.dialog.html',
                                parent: angular.element(document.body),
                                targetEvent: ev,
                                clickOutsideToClose: true,
                                locals: {
                                    'entity': entity,
                                    'showLabel': this.showLabel
                                }
                            }).then(function () {
                                _this.executeDeletion();
                            });
                        }
                        else {
                            this.executeDeletion();
                        }
                    }
                };
                return EntityDeletionController;
            })();
            var DeletorDialogController = (function () {
                /** @ngInject */
                function DeletorDialogController($mdDialog, $translate, entity, showLabel) {
                    this.$mdDialog = $mdDialog;
                    this.$translate = $translate;
                    this.entity = entity;
                    this.showLabel = showLabel;
                }
                DeletorDialogController.prototype.add = function (entity) {
                    this.$mdDialog.hide(entity);
                };
                DeletorDialogController.prototype.cancel = function () {
                    this.$mdDialog.cancel();
                };
                return DeletorDialogController;
            })();
            /** @ngInject */
            function entityDeletor() {
                var directive = {
                    scope: {
                        collection: '=',
                        ngModel: '=',
                        showLabel: '=',
                        deletionService: '=',
                        options: '=',
                        modalOptions: '=',
                        deletionOnSuccess: '=',
                        deletionOnError: '=',
                        deletionCallback: '=' //function that we should execute after deletion if the deletionService is not a proimise
                    },
                    controller: EntityDeletionController,
                    controllerAs: 'vm',
                    bindToController: true
                };
                return directive;
            }
            Entities.entityDeletor = entityDeletor;
        })(Entities = Components.Entities || (Components.Entities = {}));
    })(Components = Onesnap.Components || (Onesnap.Components = {}));
})(Onesnap || (Onesnap = {}));

/**
 * Created by mmasuyama on 11/6/2015.
 */
/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
/// <reference path="entities.list.ts" />
/// <reference path="entity.deletor.ts" />
/// <reference path="entities.filter.ts" />
/// <reference path="entities.editor.ts" />
var Onesnap;
(function (Onesnap) {
    var Components;
    (function (Components) {
        var Entities;
        (function (Entities) {
            angular.module('onesnap.components.entities', ['smart-table']).directive('entityList', Entities.entityList);
        })(Entities = Components.Entities || (Components.Entities = {}));
    })(Components = Onesnap.Components || (Onesnap.Components = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lmh0dHAuY29uZmlnLnRzIiwiaW5kZXgucm91dGVzLnRzIiwiaW5kZXgubW9kdWxlLnRzIiwiYXV0aC9hdXRoLnNlcnZpY2VzLnRzIiwiYXV0aC9hdXRoLmxvZ2luLmNvbnRyb2xsZXIudHMiLCJhdXRoL2F1dGgucm91dGUudHMiLCJhdXRoL2F1dGgubW9kdWxlLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUudHMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcy50cyIsInNldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJzZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUudHMiLCJjb21wb25lbnRzL2VudGl0aWVzL2F1dG9jb21wbGV0ZS50cyIsImNvbXBvbmVudHMvZW50aXRpZXMvZW50aXRpZXMuZWRpdG9yLnRzIiwiY29tcG9uZW50cy9lbnRpdGllcy9lbnRpdGllcy5maWx0ZXIudHMiLCJjb21wb25lbnRzL2VudGl0aWVzL2VudGl0aWVzLmxpc3QudHMiLCJjb21wb25lbnRzL2VudGl0aWVzL2VudGl0eS5kZWxldG9yLnRzIiwiY29tcG9uZW50cy9lbnRpdGllcy9lbnRpdGllcy5tb2R1bGUudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuaHR0cENvbmZpZyIsIk9uZXNuYXAuaHR0cENvbmZpZy5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuUm91dGVyQ29uZmlnIiwiT25lc25hcC5Sb3V0ZXJDb25maWcuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGgiLCJPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UiLCJPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UubG9naW4iLCJPbmVzbmFwLkF1dGguQXV0aFNlcnZpY2UubG9nb3V0IiwiT25lc25hcC5BdXRoLkxvZ2luQ29udHJvbGxlciIsIk9uZXNuYXAuQXV0aC5Mb2dpbkNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGguTG9naW5Db250cm9sbGVyLnNpZ25JbiIsIk9uZXNuYXAuQXV0aC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkF1dGguUm91dGVyQ29uZmlnLmNvbnN0cnVjdG9yIiwiT25lc25hcC5EYXNoYm9hcmQiLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWcuY29uc3RydWN0b3IiLCJPbmVzbmFwLlNldHRpbmdzIiwiT25lc25hcC5TZXR0aW5ncy5TZXR0aW5nc1NlcnZpY2UiLCJPbmVzbmFwLlNldHRpbmdzLlNldHRpbmdzU2VydmljZS5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuU2V0dGluZ3MuU2V0dGluZ3NTZXJ2aWNlLmdldFNpZGVNZW51IiwiYXBwIiwiYXBwLmNvbXBvbmVudHMiLCJhcHAuY29tcG9uZW50cy5lbnRpdGllcyIsImFwcC5jb21wb25lbnRzLmVudGl0aWVzLkF1dG9jb21wbGV0ZUNvbnRyb2xsZXIiLCJhcHAuY29tcG9uZW50cy5lbnRpdGllcy5BdXRvY29tcGxldGVDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiYXBwLmNvbXBvbmVudHMuZW50aXRpZXMuZW50aXR5QXV0b2NvbXBsZXRlIiwiT25lc25hcC5Db21wb25lbnRzIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkVudGl0eUVkaXRvckNvbnRyb2xsZXIiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRW50aXR5RWRpdG9yQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5lbnRpdHlFZGl0b3IiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRmlsdGVyTGlzdENvbnRyb2xsZXIiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRmlsdGVyTGlzdENvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMubGlzdEZpbHRlciIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5FbnRpdHlMaXN0Q29udHJvbGxlciIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5FbnRpdHlMaXN0Q29udHJvbGxlci5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5FbnRpdHlMaXN0Q29udHJvbGxlci5jb2x1bW5Jc1NvcnRhYmxlIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLmVudGl0eUxpc3QiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRW50aXR5RGVsZXRpb25Db250cm9sbGVyIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkVudGl0eURlbGV0aW9uQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5FbnRpdHlEZWxldGlvbkNvbnRyb2xsZXIuc3VibWl0RGVsZXRpb24iLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRGVsZXRvckRpYWxvZ0NvbnRyb2xsZXIiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRGVsZXRvckRpYWxvZ0NvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRGVsZXRvckRpYWxvZ0NvbnRyb2xsZXIuYWRkIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkRlbGV0b3JEaWFsb2dDb250cm9sbGVyLmNhbmNlbCIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5lbnRpdHlEZWxldG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFJcEQsSUFBTyxPQUFPLENBV2I7QUFYRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBQ2ZBLElBQWFBLFVBQVVBO1FBRXRCQyxTQUZZQSxVQUFVQSxDQUVGQSxhQUFnQ0E7WUFBaENDLGtCQUFhQSxHQUFiQSxh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d0JBQXdCQTtvQkFDcENBLFlBQVlBLEVBQUVBLElBQUlBO29CQUNsQkEsZ0JBQWdCQSxFQUFFQSxJQUFJQTtpQkFDdkJBLENBQUNBO2dCQUVGQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNuQkEsQ0FBQ0E7WUFwQmVsQixzQkFBYUEsR0FBYkEsYUFvQmZBLENBQUFBO1FBR0hBLENBQUNBLEVBL0d5QkQsUUFBUUEsR0FBUkEsbUJBQVFBLEtBQVJBLG1CQUFRQSxRQStHakNBO0lBQURBLENBQUNBLEVBL0djNUIsVUFBVUEsR0FBVkEsa0JBQVVBLEtBQVZBLGtCQUFVQSxRQStHeEJBO0FBQURBLENBQUNBLEVBL0dNLE9BQU8sS0FBUCxPQUFPLFFBK0diOztBQ25IRDs7R0FFRztBQUVILEFBTUEsMERBTjBEO0FBQzFELHlDQUF5QztBQUN6QywwQ0FBMEM7QUFDMUMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUUzQyxJQUFPLE9BQU8sQ0FHYjtBQUhELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxVQUFVQSxDQUd4QkE7SUFIY0EsV0FBQUEsVUFBVUE7UUFBQzRCLElBQUFBLFFBQVFBLENBR2pDQTtRQUh5QkEsV0FBQUEsUUFBUUEsRUFBQ0EsQ0FBQ0E7WUFDbENDLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLDZCQUE2QkEsRUFBRUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FDM0RBLFNBQVNBLENBQUNBLFlBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQSxDQUFDQTtRQUN6Q0EsQ0FBQ0EsRUFIeUJELFFBQVFBLEdBQVJBLG1CQUFRQSxLQUFSQSxtQkFBUUEsUUFHakNBO0lBQURBLENBQUNBLEVBSGM1QixVQUFVQSxHQUFWQSxrQkFBVUEsS0FBVkEsa0JBQVVBLFFBR3hCQTtBQUFEQSxDQUFDQSxFQUhNLE9BQU8sS0FBUCxPQUFPLFFBR2IiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5cclxuXHJcbm1vZHVsZSBPbmVzbmFwIHtcclxuXHRleHBvcnQgY2xhc3MgaHR0cENvbmZpZyB7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSAkaHR0cFByb3ZpZGVyIDogbmcuSUh0dHBQcm92aWRlcikge1xyXG5cdFx0XHR0aGlzLiRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnQ1NSRi1UT0tFTic7XHJcblx0XHRcdHRoaXMuJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkYtVE9LRU4nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXI6IG5nLnVpLklVcmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2FwcCcsIHtcclxuICAgICAgICAgIHVybDogJy9hcHAnLFxyXG4gICAgICAgICAgdmlld3MgICA6IHtcclxuICAgICAgICAgICAgJ21haW5AJyAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9jb3JlL2xheW91dHMvZGVmYXVsdC5odG1sJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndG9vbGJhckBhcHAnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL3Rvb2xiYXIvdG9vbGJhci5odG1sJyxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ1Rvb2xiYXJDb250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkBhcHAnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL3NpZGVuYXYvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXIgOiAnTmF2aWdhdGlvbkNvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwJyk7XHJcblxyXG4gICAgICAvLyBjb21tb25zIHRyYW5zbGF0aW9uc1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbmRleC5yb3V0ZXMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbmRleC5odHRwLmNvbmZpZy50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0YW5ndWxhci5tb2R1bGUoJ2NvdXJzZXNBcHAnLCBbJ2FwcC5jb3JlJyxcclxuXHQvLyBuYXZpZ2F0aW9uXHJcblx0J2FwcC5uYXZpZ2F0aW9uJyxcclxuXHQvLyB0b29sYmFyXHJcblx0J2FwcC50b29sYmFyJywgXHJcblx0Ly90ZW1wbGF0ZSBjb21wb25lbnRzXHJcblx0J2FwcC5jb21wb25lbnRzJyxcclxuXHQnYXV0aCcsXHJcblx0J3NldHRpbmdzJyxcclxuXHQnZGFzaGJvYXJkJ10pXHJcblx0XHQuY29uZmlnKFJvdXRlckNvbmZpZylcclxuXHRcdC5jb25maWcoaHR0cENvbmZpZylcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuQXV0aCB7XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcblx0XHRcclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IG5nLklIdHRwU2VydmljZSkge31cclxuXHRcdFxyXG5cdFx0Ly9tZXRob2RzXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0bG9naW4oY3JlZGVudGlhbHMpIHtcclxuXHRcdFx0dmFyIGRhdGEgPSAnal91c2VybmFtZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGNyZWRlbnRpYWxzLnVzZXJuYW1lKSArXHJcblx0XHRcdFx0JyZqX3Bhc3N3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoY3JlZGVudGlhbHMucGFzc3dvcmQpICtcclxuXHRcdFx0XHQnJnJlbWVtYmVyLW1lPScgKyBjcmVkZW50aWFscy5yZW1lbWJlck1lICsgJyZzdWJtaXQ9TG9naW4nO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vMTY5LjI1NC4zNy4xMzQ6ODA4MC9hcGkvYXV0aGVudGljYXRpb24nLCBkYXRhLCB7XHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0bG9nb3V0KCkge1xyXG5cdFx0XHQvLyBsb2dvdXQgZnJvbSB0aGUgc2VydmVyXHJcblx0XHRcdHRoaXMuJGh0dHAucG9zdCgnYXBpL2xvZ291dCcsIHt9KS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0Ly8gdG8gZ2V0IGEgbmV3IGNzcmYgdG9rZW4gY2FsbCB0aGUgYXBpXHJcblx0XHRcdFx0dGhpcy4kaHR0cC5nZXQoJ2FwaS9hY2NvdW50Jyk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMC8yMi8yMDE1LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJhdXRoLnNlcnZpY2VzLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwLkF1dGgge1xyXG5cclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGludGVyZmFjZSBJTG9naW4ge1xyXG5cclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgZXJyb3I6IG5nLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPHt9PjtcclxuICAgIHNpZ25JbigpIDogdm9pZDtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIgaW1wbGVtZW50cyBJTG9naW4ge1xyXG4gICAgcHVibGljIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZXJyb3I6IG5nLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPHt9PjtcclxuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWydBdXRoU2VydmljZSddO1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBBdXRoU2VydmljZTogT25lc25hcC5BdXRoLkF1dGhTZXJ2aWNlLCBwcml2YXRlICR0cmFuc2xhdGVcclxuICAgICkge31cclxuXHJcbiAgICBzaWduSW4gKCkge1xyXG4gICAgICB0aGlzLkF1dGhTZXJ2aWNlLmxvZ2luKHt1c2VybmFtZTogdGhpcy51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmR9KVxyXG4gICAgICAgIC50aGVuKChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4gIFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTAvMjEvMjAxNS5cclxuICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwLkF1dGgge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIsICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhY2Nlc3MnLCB7XHJcbiAgICAgICAgYWJzdHJhY3QgOiB0cnVlLFxyXG4gICAgICAgIHVybDogJy9hY2Nlc3MnLFxyXG4gICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAnbWFpbkAnICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2NvcmUvbGF5b3V0cy9iYXNpYy5odG1sJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FjY2Vzcy5wYWdlc19hdXRoX2xvZ2luJywge1xyXG4gICAgICAgIHVybCAgOiAnL2xvZ2luJyxcclxuICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hdXRoL2F1dGgubG9naW4uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIuYWRkUGFydCgnYXBwL2F1dGgnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDEwLzIxLzIwMTUuXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiYXV0aC5yb3V0ZS50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiYXV0aC5sb2dpbi5jb250cm9sbGVyLnRzXCIgLz5cblxubW9kdWxlIE9uZXNuYXAuQXV0aCB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyLm1vZHVsZSgnYXV0aCcsIFtdKVxuICAgIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXG4gICAgLnNlcnZpY2UoJ0F1dGhTZXJ2aWNlJywgQXV0aFNlcnZpY2UpXG4gICAgLmNvbmZpZyhSb3V0ZXJDb25maWcpO1xufVxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cbiAqL1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5tb2R1bGUgT25lc25hcC5EYXNoYm9hcmQge1xyXG5cclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnLCBbXSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuRGFzaGJvYXJkIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBSb3V0ZXJDb25maWcge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdhcHAuZGFzaGJvYXJkJywge1xyXG4gICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICB2aWV3cyA6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gIC5jb25maWcoT25lc25hcC5EYXNoYm9hcmQuUm91dGVyQ29uZmlnKTtcclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbm1vZHVsZSBPbmVzbmFwLlNldHRpbmdzIHtcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XHJcblx0XHRwcml2YXRlIG1vY2tNZW51ID0gW3tcclxuXHRcdFx0bGFiZWw6ICdDT1VSU0VTLlNFQ1RJT05fVElUTEUnLFxyXG5cdFx0XHRpY29uOiAnaWNvbi10aWxlLWZvdXInLFxyXG5cdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxhYmVsOiAnQ09NTU9OUy5MSVNUJyxcclxuXHRcdFx0XHRcdHNyZWY6ICdhcHAuY291cnNlcy5saXN0J1xyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxhYmVsOiAnQ09NTU9OUy5ORVcnLFxyXG5cdFx0XHRcdFx0c3JlZjogJ2FwcC5jb3Vyc2VzLmNyZWF0ZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0sIHtcclxuXHRcdFx0XHRsYWJlbDogJ1RFQUNIRVJTLlNFQ1RJT05fVElUTEUnLFxyXG5cdFx0XHRcdGljb246ICdpY29uLXRpbGUtZm91cicsXHJcblx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICdDT01NT05TLkxJU1QnLFxyXG5cdFx0XHRcdFx0XHRzcmVmOiAnYXBwLnRlYWNoZXJzLmxpc3QnXHJcblx0XHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICdDT01NT05TLk5FVycsXHJcblx0XHRcdFx0XHRcdHNyZWY6ICdhcHAudGVhY2hlcnMuY3JlYXRlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdGxhYmVsOiAnU1RVREVOVFMuU0VDVElPTl9USVRMRScsXHJcblx0XHRcdFx0aWNvbjogJ2ljb24tdGlsZS1mb3VyJyxcclxuXHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0NPTU1PTlMuTElTVCcsXHJcblx0XHRcdFx0XHRcdHNyZWY6ICdhcHAuc3R1ZGVudHMubGlzdCdcclxuXHRcdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0NPTU1PTlMuTkVXJyxcclxuXHRcdFx0XHRcdFx0c3JlZjogJ2FwcC5zdHVkZW50cy5jcmVhdGUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LCBdXHJcblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlICRodHRwOiBuZy5JSHR0cFNlcnZpY2UpIHtcclxuXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vVE9ETyBHZXQgc2lkZW1lbnUgb3B0aW9ucyBmcm9tIGFuIEFQSSBlbmRwb2ludDtcclxuXHRcdGdldFNpZGVNZW51KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tb2NrTWVudTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3NldHRpbmdzLnNlcnZpY2UudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuU2V0dGluZ3Mge1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdzZXR0aW5ncycsIFtdKVxyXG5cdFx0LnNlcnZpY2UoJ1NldHRpbmdzU2VydmljZScsIFNldHRpbmdzU2VydmljZSlcclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMS8xNC8yMDE1LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbm1vZHVsZSBhcHAuY29tcG9uZW50cy5lbnRpdGllcyB7XHJcblxyXG4gIGNsYXNzIEF1dG9jb21wbGV0ZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIC8qKiBAbmdJbmplY3QgKi8gXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgfVxyXG5cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUF1dG9jb21wbGV0ZSAoKTogbmcuSURpcmVjdGl2ZSB7XHJcblxyXG4gICAgdmFyIGRpcmVjdGl2ZSA9IDxuZy5JRGlyZWN0aXZlPntcclxuXHJcbiAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgc2VhcmNoU2VydmljZSA6ICc9JyxcclxuICAgICAgICBzZWxlY3RlZEl0ZW0gOiAnPSdcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGVVcmwgOiAnYXBwL2NvbXBvbmVudHMvZW50aXRpZXMvYXV0b2NvbXBsZXRlLmh0bWwnXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkaXJlY3RpdmU7XHJcblxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvNS8yMDE1LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbm1vZHVsZSBPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMge1xyXG5cclxuICBpbnRlcmZhY2UgSUVudGl0eUVkaXRvckNvbnRyb2xsZXIge31cclxuXHJcblxyXG4gIGV4cG9ydCBjbGFzcyBFbnRpdHlFZGl0b3JDb250cm9sbGVyIGltcGxlbWVudHMgSUVudGl0eUVkaXRvckNvbnRyb2xsZXIge1xyXG5cclxuICAgIC8qKiBAbmdJbmplY3QgKi8gXHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgfVxyXG5cclxuICAvKiogQG5nSW5qZWN0ICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUVkaXRvcigpOm5nLklEaXJlY3RpdmUge1xyXG5cclxuICAgIHZhciBkaXJlY3RpdmUgPSA8bmcuSURpcmVjdGl2ZT4ge1xyXG4gICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICBzY29wZToge1xyXG4gICAgICAgIG9uU3VibWl0OiAnPScsXHJcbiAgICAgICAgb25DYW5jZWw6ICc9JyxcclxuICAgICAgICBmb3JtRmllbGRzIDogJz0nLFxyXG4gICAgICAgIGVudGl0eTogJz0nXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZW50aXRpZXMvZW50aXRpZXMuZWRpdG9yLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiBFbnRpdHlFZGl0b3JDb250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cclxuICovXHJcblxyXG5tb2R1bGUgT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzIHtcclxuXHJcblxyXG4gIGludGVyZmFjZSBJRmlsdGVyTGlzdENvbnRyb2xsZXJ7fVxyXG5cclxuICBleHBvcnQgY2xhc3MgRmlsdGVyTGlzdENvbnRyb2xsZXIgaW1wbGVtZW50cyAgSUZpbHRlckxpc3RDb250cm9sbGVye1xyXG4gICAgcHVibGljIGxpc3Q7XHJcbiAgICBwdWJsaWMgb3B0aW9ucztcclxuXHJcbiAgICAvKiogQG5nSW5qZWN0ICovIFxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG4gIH1cclxuXHJcbiAgLyoqIEBuZ0luamVjdCAqL1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBsaXN0RmlsdGVyKCk6bmcuSURpcmVjdGl2ZSB7XHJcblxyXG4gICAgdmFyIGRpcmVjdGl2ZSA9IDxuZy5JRGlyZWN0aXZlPiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgbGlzdDogJz0nLFxyXG4gICAgICAgIG9wdGlvbnM6ICc9J1xyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2VudGl0aWVzL2xpc3QuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6IEZpbHRlckxpc3RDb250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICB9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMS81LzIwMTUuXHJcbiAqL1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxubW9kdWxlIE9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcyB7XHJcblxyXG5cclxuICBpbnRlcmZhY2UgSUVudGl0eUxpc3RDb250cm9sbGVyIHtcclxuICAgIGNvbHVtbklzU29ydGFibGUoZW50aXR5KVxyXG4gIH1cclxuXHJcbiAgLyoqIEBuZ0luamVjdCAqL1xyXG4gIGV4cG9ydCBjbGFzcyBFbnRpdHlMaXN0Q29udHJvbGxlciBpbXBsZW1lbnRzIElFbnRpdHlMaXN0Q29udHJvbGxlcntcclxuICAgIHB1YmxpYyB0aHJlYWQ7XHJcbiAgICBwdWJsaWMgbGlzdDtcclxuICAgIHB1YmxpYyBlbnRpdHlDb25mO1xyXG4gICAgcHVibGljIG9wdGlvbnM7XHJcblxyXG5cclxuICAgIGNvbHVtbklzU29ydGFibGUoZW50aXR5KSB7XHJcbiAgICAgIHJldHVybiAoZW50aXR5LnNvcnQpID8gZW50aXR5LmtleSA6ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBuZ0luamVjdCAqL1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnRpdHlMaXN0KCk6bmcuSURpcmVjdGl2ZSB7XHJcblxyXG4gICAgdmFyIGRpcmVjdGl2ZSA9IDxuZy5JRGlyZWN0aXZlPiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgdGhyZWFkOiAnPScsXHJcbiAgICAgICAgbGlzdDogJz0nLFxyXG4gICAgICAgIGVudGl0eUNvbmY6ICc9JyxcclxuICAgICAgICBvcHRpb25zOiAnPSdcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9lbnRpdGllcy9lbnRpdGllcy5saXN0Lmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiBFbnRpdHlMaXN0Q29udHJvbGxlcixcclxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMS8xMC8yMDE1LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbm1vZHVsZSBPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMge1xyXG5cclxuICBpbnRlcmZhY2UgSUVudGl0eURlbGV0aW9uQ29udHJvbGxlciB7XHJcbiAgICBleGVjdXRlRGVsZXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY2xhc3MgRW50aXR5RGVsZXRpb25Db250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBjb2xsZWN0aW9uO1xyXG4gICAgcHVibGljIG5nTW9kZWw7XHJcbiAgICBwdWJsaWMgZGVsZXRpb25TZXJ2aWNlOyAvL3NlcnZpY2UgZm9yIGRlbGV0ZSBlbGVtZW50IGlmIHRoZXJlIGlzIGFuIGludGVyYWN0aW9uIHdpdGggYW55IGFwaVxyXG4gICAgcHVibGljIG9wdGlvbnM7IC8vIGxpdmVVcGRhdGUgOiBib29sZWFuXHJcbiAgICBwdWJsaWMgY29tcGFyZUJ5O1xyXG4gICAgcHVibGljIHNob3dMYWJlbDtcclxuICAgIHB1YmxpYyBtb2RhbE9wdGlvbnM7XHJcbiAgICBwdWJsaWMgZGVsZXRpb25PblN1Y2Nlc3M7ICAvL2Z1bmN0aW9uIHRoYXQgd2Ugc2hvdWxkIGV4ZWN1dGUgb24gc3VjY2Vzc1xyXG4gICAgcHVibGljIGRlbGV0aW9uT25FcnJvcjsgIC8vZnVuY3Rpb24gdGhhdCB3ZSBzaG91bGQgZXhlY3V0ZSBvbiBlcnJvclxyXG4gICAgcHVibGljIGRlbGV0aW9uQ2FsbGJhY2s7XHJcblxyXG5cclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJG1kRGlhbG9nLCBwcml2YXRlICRlbGVtZW50LCBwcml2YXRlICRxKSB7XHJcblxyXG4gICAgICB0aGlzLiRlbGVtZW50LmJpbmQoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXREZWxldGlvbih0aGlzLmNvbGxlY3Rpb24sIHRoaXMubmdNb2RlbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGVEZWxldGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMubmdNb2RlbCkpIHtcclxuXHJcbiAgICAgICAgdmFyIHByb21pc2VzQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5uZ01vZGVsLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsRWxlbWVudCkge1xyXG4gICAgICAgICAgdmFyIG1vZGVsRWxlbWVudFByb21pc2UgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgICBwcm9taXNlc0FycmF5LnB1c2gobW9kZWxFbGVtZW50UHJvbWlzZS5wcm9taXNlKTtcclxuICAgICAgICAgIHRoaXMuZGVsZXRpb25TZXJ2aWNlKG1vZGVsRWxlbWVudCkudGhlbih0aGlzLmRlbGV0aW9uT25TdWNjZXNzLCB0aGlzLmRlbGV0aW9uT25FcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBfbW9kZWwgPSAodGhpcy5vcHRpb25zLmNvbXBhcmVCeSkgPyB0aGlzLm5nTW9kZWxbdGhpcy5vcHRpb25zLmNvbXBhcmVCeV0gOiB0aGlzLm5nTW9kZWw7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRpb25TZXJ2aWNlKF9tb2RlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGlvblNlcnZpY2UoX21vZGVsLCB0aGlzLmRlbGV0aW9uQ2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzdWJtaXREZWxldGlvbihldiwgZW50aXR5KSB7XHJcbiAgICAgIGlmICh0aGlzLmRlbGV0aW9uU2VydmljZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNrQmVmb3JlRGVsZXRlKSB7XHJcbiAgICAgIHRoaXMuJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IERlbGV0b3JEaWFsb2dDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2RpYWxvZ1ZtJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29tcG9uZW50cy9lbnRpdGllcy9lbnRpdGllcy5kZWxldG9yLmRpYWxvZy5odG1sJyxcclxuICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICB0YXJnZXRFdmVudDogZXYsXHJcbiAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICdlbnRpdHknOiBlbnRpdHksXHJcbiAgICAgICAgICAnc2hvd0xhYmVsJzogdGhpcy5zaG93TGFiZWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZURlbGV0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmV4ZWN1dGVEZWxldGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsYXNzIERlbGV0b3JEaWFsb2dDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzZWN0aW9uO1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkbWREaWFsb2csIHByaXZhdGUgJHRyYW5zbGF0ZSwgcHVibGljIGVudGl0eSwgcHVibGljIHNob3dMYWJlbCkge31cclxuICAgIGFkZChlbnRpdHkpIHtcclxuICAgICAgdGhpcy4kbWREaWFsb2cuaGlkZShlbnRpdHkpO1xyXG4gICAgfVxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICB0aGlzLiRtZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiogQG5nSW5qZWN0ICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eURlbGV0b3IoKTpuZy5JRGlyZWN0aXZlIHtcclxuXHJcbiAgICB2YXIgZGlyZWN0aXZlID0gPG5nLklEaXJlY3RpdmU+IHtcclxuICAgICAgc2NvcGU6IHtcclxuICAgICAgICBjb2xsZWN0aW9uOiAnPScsXHJcbiAgICAgICAgbmdNb2RlbDogJz0nLFxyXG4gICAgICAgIHNob3dMYWJlbDogJz0nLFxyXG4gICAgICAgIGRlbGV0aW9uU2VydmljZTogJz0nLCAvL3NlcnZpY2UgZm9yIGRlbGV0ZSBlbGVtZW50IGlmIHRoZXJlIGlzIGFuIGludGVyYWN0aW9uIHdpdGggYW55IGFwaVxyXG4gICAgICAgIG9wdGlvbnM6ICc9JywgLy8gbGl2ZVVwZGF0ZSA6IGJvb2xlYW5cclxuICAgICAgICBtb2RhbE9wdGlvbnM6ICc9JyxcclxuICAgICAgICBkZWxldGlvbk9uU3VjY2VzczogJz0nLCAvL2Z1bmN0aW9uIHRoYXQgd2Ugc2hvdWxkIGV4ZWN1dGUgb24gc3VjY2Vzc1xyXG4gICAgICAgIGRlbGV0aW9uT25FcnJvcjogJz0nLCAvL2Z1bmN0aW9uIHRoYXQgd2Ugc2hvdWxkIGV4ZWN1dGUgb24gZXJyb3JcclxuICAgICAgICBkZWxldGlvbkNhbGxiYWNrOiAnPScgLy9mdW5jdGlvbiB0aGF0IHdlIHNob3VsZCBleGVjdXRlIGFmdGVyIGRlbGV0aW9uIGlmIHRoZSBkZWxldGlvblNlcnZpY2UgaXMgbm90IGEgcHJvaW1pc2VcclxuICAgICAgfSxcclxuICAgICAgY29udHJvbGxlcjogRW50aXR5RGVsZXRpb25Db250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICB9XHJcblxyXG4gICAgXHJcbn1cclxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMS82LzIwMTUuXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZW50aXRpZXMubGlzdC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZW50aXR5LmRlbGV0b3IudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImVudGl0aWVzLmZpbHRlci50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZW50aXRpZXMuZWRpdG9yLnRzXCIgLz5cblxubW9kdWxlIE9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcyB7XG4gIGFuZ3VsYXIubW9kdWxlKCdvbmVzbmFwLmNvbXBvbmVudHMuZW50aXRpZXMnLCBbJ3NtYXJ0LXRhYmxlJ10pXG4gICAgLmRpcmVjdGl2ZSgnZW50aXR5TGlzdCcsIGVudGl0eUxpc3QpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9