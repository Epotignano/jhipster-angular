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
var Onesnap;
(function (Onesnap) {
    'use strict';
    angular.module('coursesApp', ['app.core', 'app.navigation', 'app.toolbar', 'app.components', 'dashboard']).config(Onesnap.RouterConfig);
})(Onesnap || (Onesnap = {}));

/// <reference path="../../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var AuthService = (function () {
        function AuthService($http) {
            //TODO pasarlo como constante, ahora es solo para probar
            this._apiUrl = 'http://localhost:8080';
        }
        return AuthService;
    })();
    Onesnap.AuthService = AuthService;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyIsImluZGV4Lm1vZHVsZS50cyIsImF1dGgvYXV0aC5zZXJ2aWNlLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUudHMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuQXV0aFNlcnZpY2UiLCJPbmVzbmFwLkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiT25lc25hcC5EYXNoYm9hcmQiLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUVwRCxJQUFPLE9BQU8sQ0FpQ2I7QUFqQ0QsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUNkQSxZQUFZQSxDQUFDQTtJQUViQSxJQUFhQSxZQUFZQTtRQUN2QkMsZ0JBQWdCQTtRQUNoQkEsU0FGV0EsWUFBWUEsQ0FFWEEsY0FBb0NBLEVBQ3BDQSxrQkFBNENBO1lBQ3hEQyxjQUFjQSxDQUNUQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQTtnQkFDWkEsR0FBR0EsRUFBRUEsTUFBTUE7Z0JBQ1hBLEtBQUtBLEVBQUtBO29CQUNSQSxPQUFPQSxFQUFXQTt3QkFDaEJBLFdBQVdBLEVBQUVBLG1DQUFtQ0E7cUJBQ2pEQTtvQkFDREEsYUFBYUEsRUFBRUE7d0JBQ2JBLFdBQVdBLEVBQUVBLDhCQUE4QkE7d0JBQzNDQSxVQUFVQSxFQUFHQSx5QkFBeUJBO3FCQUN2Q0E7b0JBQ0RBLGdCQUFnQkEsRUFBRUE7d0JBQ2hCQSxXQUFXQSxFQUFFQSw0Q0FBNENBO3dCQUN6REEsVUFBVUEsRUFBR0EsNEJBQTRCQTtxQkFDMUNBO2lCQUNGQTthQUNGQSxDQUFDQSxDQUFDQTtZQUdMQSxrQkFBa0JBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBRXJDQSx1QkFBdUJBO1FBRXpCQSxDQUFDQTtRQUVIRCxtQkFBQ0E7SUFBREEsQ0E3QkFELEFBNkJDQyxJQUFBRDtJQTdCWUEsb0JBQVlBLEdBQVpBLFlBNkJaQSxDQUFBQTtBQUNIQSxDQUFDQSxFQWpDTSxPQUFPLEtBQVAsT0FBTyxRQWlDYjs7QUNuQ0Qsb0RBQW9EO0FBQ3BELDBDQUEwQztBQUUxQyxJQUFPLE9BQU8sQ0FXYjtBQVhELFdBQU8sT0FBTyxFQUFBLENBQUM7SUFDZEEsWUFBWUEsQ0FBQ0E7SUFDYkEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFFeENBLGdCQUFnQkEsRUFFaEJBLGFBQWFBLEVBRWJBLGdCQUFnQkEsRUFDaEJBLFdBQVdBLENBQUNBLENBQUNBLENBQ1hBLE1BQU1BLENBQUNBLG9CQUFZQSxDQUFDQSxDQUFBQTtBQUN2QkEsQ0FBQ0EsRUFYTSxPQUFPLEtBQVAsT0FBTyxRQVdiOztBQ2RELEFBQ0EsdURBRHVEO0FBQ3ZELElBQU8sT0FBTyxDQXNCYjtBQXRCRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBR2ZBLElBQWFBLFdBQVdBO1FBR3ZCRyxTQUhZQSxXQUFXQSxDQUdYQSxLQUFzQkE7WUFDakNDLHdEQUF3REE7WUFIakRBLFlBQU9BLEdBQUdBLHVCQUF1QkEsQ0FBQ0E7UUFTMUNBLENBQUNBO1FBSUZELGtCQUFDQTtJQUFEQSxDQWRBSCxBQWNDRyxJQUFBSDtJQWRZQSxtQkFBV0EsR0FBWEEsV0FjWkEsQ0FBQUE7QUFLRkEsQ0FBQ0EsRUF0Qk0sT0FBTyxLQUFQLE9BQU8sUUFzQmI7O0FDdkJEOztHQUVHOztBQ0ZILEFBSUE7O0dBRkc7QUFDSCx1REFBdUQ7QUFDdkQsSUFBTyxPQUFPLENBS2I7QUFMRCxXQUFPLE9BQU87SUFBQ0EsSUFBQUEsU0FBU0EsQ0FLdkJBO0lBTGNBLFdBQUFBLFNBQVNBLEVBQUNBLENBQUNBO1FBRXhCSyxZQUFZQSxDQUFDQTtRQUViQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUNsQ0EsQ0FBQ0EsRUFMY0wsU0FBU0EsR0FBVEEsaUJBQVNBLEtBQVRBLGlCQUFTQSxRQUt2QkE7QUFBREEsQ0FBQ0EsRUFMTSxPQUFPLEtBQVAsT0FBTyxRQUtiOztBQ1REOztHQUVHO0FBQ0gsdURBQXVEO0FBRXZELElBQU8sT0FBTyxDQW1CYjtBQW5CRCxXQUFPLE9BQU87SUFBQ0EsSUFBQUEsU0FBU0EsQ0FtQnZCQTtJQW5CY0EsV0FBQUEsU0FBU0EsRUFBQ0EsQ0FBQ0E7UUFDeEJLLFlBQVlBLENBQUNBO1FBRWJBLElBQWFBLFlBQVlBO1lBQ3ZCQyxnQkFBZ0JBO1lBQ2hCQSxTQUZXQSxZQUFZQSxDQUVYQSxjQUFvQ0E7Z0JBQzlDQyxjQUFjQSxDQUNYQSxLQUFLQSxDQUFDQSxlQUFlQSxFQUFFQTtvQkFDdEJBLEdBQUdBLEVBQUVBLFlBQVlBO29CQUNqQkEsS0FBS0EsRUFBR0E7d0JBQ05BLFNBQVNBLEVBQUVBOzRCQUNUQSxXQUFXQSxFQUFFQSw4QkFBOEJBO3lCQUM1Q0E7cUJBQ0ZBO2lCQUNGQSxDQUFDQSxDQUFDQTtZQUVQQSxDQUFDQTtZQUVIRCxtQkFBQ0E7UUFBREEsQ0FmQUQsQUFlQ0MsSUFBQUQ7UUFmWUEsc0JBQVlBLEdBQVpBLFlBZVpBLENBQUFBO0lBQ0hBLENBQUNBLEVBbkJjTCxTQUFTQSxHQUFUQSxpQkFBU0EsS0FBVEEsaUJBQVNBLFFBbUJ2QkE7QUFBREEsQ0FBQ0EsRUFuQk0sT0FBTyxLQUFQLE9BQU8sUUFtQmI7QUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBSb3V0ZXJDb25maWcge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyOiBuZy51aS5JVXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgIHZpZXdzICAgOiB7XHJcbiAgICAgICAgICAgICdtYWluQCcgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29yZS9sYXlvdXRzL2RlZmF1bHQuaHRtbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3Rvb2xiYXJAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy90b29sYmFyL3Rvb2xiYXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdUb29sYmFyQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25hdmlnYXRpb25AYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9zaWRlbmF2L25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ05hdmlnYXRpb25Db250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcCcpO1xyXG5cclxuICAgICAgLy8gY29tbW9ucyB0cmFuc2xhdGlvbnNcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW5kZXgucm91dGVzLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwe1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgnY291cnNlc0FwcCcsIFsnYXBwLmNvcmUnLFxyXG5cdC8vIG5hdmlnYXRpb25cclxuXHQnYXBwLm5hdmlnYXRpb24nLFxyXG5cdC8vIHRvb2xiYXJcclxuXHQnYXBwLnRvb2xiYXInLCBcclxuXHQvL3RlbXBsYXRlIGNvbXBvbmVudHNcclxuXHQnYXBwLmNvbXBvbmVudHMnLFxyXG5cdCdkYXNoYm9hcmQnXSlcclxuXHRcdC5jb25maWcoUm91dGVyQ29uZmlnKVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbm1vZHVsZSBPbmVzbmFwIHtcclxuXHRcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cdFx0cHJpdmF0ZSBfYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XHJcblx0XHRcclxuXHRcdGNvbnN0cnVjdG9yKCRodHRwOiBuZy5JSHR0cFNlcnZpY2UpIHtcclxuXHRcdFx0Ly9UT0RPIHBhc2FybG8gY29tbyBjb25zdGFudGUsIGFob3JhIGVzIHNvbG8gcGFyYSBwcm9iYXJcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvNS8yMDE1LlxuICovXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvNS8yMDE1LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbm1vZHVsZSBPbmVzbmFwLkRhc2hib2FyZCB7XHJcblxyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcsIFtdKTtcclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvNS8yMDE1LlxyXG4gKi9cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5EYXNoYm9hcmQge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2FwcC5kYXNoYm9hcmQnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICAgIHZpZXdzIDoge1xyXG4gICAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2Rhc2hib2FyZCcpXHJcbiAgLmNvbmZpZyhPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWcpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=