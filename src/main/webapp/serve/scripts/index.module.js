/// <reference path="../../.tmp/typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider, $translatePartialLoaderProvider) {
            $stateProvider.state('app', {
                abstract: true,
                resolve: {
                    servicesDependencies: function (toasterService) {
                        return true;
                    },
                },
                url: '/app',
                views: {
                    'main@': {
                        templateUrl: 'core/layouts/default.hjjjjjjjtml'
                    },
                }
            });
            $urlRouterProvider.otherwise('/app/dashboard');
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
    angular.module('coursesApp', ['app.core', 'dashboard']).config(Onesnap.RouterConfig);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyIsImluZGV4Lm1vZHVsZS50cyIsImF1dGgvYXV0aC5zZXJ2aWNlLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUudHMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuQXV0aFNlcnZpY2UiLCJPbmVzbmFwLkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiT25lc25hcC5EYXNoYm9hcmQiLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUVwRCxJQUFPLE9BQU8sQ0E0Q2I7QUE1Q0QsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUNkQSxZQUFZQSxDQUFDQTtJQUViQSxJQUFhQSxZQUFZQTtRQUN2QkMsZ0JBQWdCQTtRQUNoQkEsU0FGV0EsWUFBWUEsQ0FFWEEsY0FBb0NBLEVBQ3BDQSxrQkFBNENBLEVBQzVDQSwrQkFBK0JBO1lBQzNDQyxjQUFjQSxDQUNUQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQTtnQkFDWkEsUUFBUUEsRUFBRUEsSUFBSUE7Z0JBQ2RBLE9BQU9BLEVBQUVBO29CQUNQQSxvQkFBb0JBLEVBQUdBLFVBQVNBLGNBQWNBO3dCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUM7aUJBQ0ZBO2dCQUNEQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsS0FBS0EsRUFBS0E7b0JBQ1JBLE9BQU9BLEVBQVdBO3dCQUNoQkEsV0FBV0EsRUFBRUEsa0NBQWtDQTtxQkFDaERBO2lCQWFGQTthQUNGQSxDQUFDQSxDQUFDQTtZQUdMQSxrQkFBa0JBLENBQUNBLFNBQVNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFFL0NBLHVCQUF1QkE7UUFFekJBLENBQUNBO1FBRUhELG1CQUFDQTtJQUFEQSxDQXhDQUQsQUF3Q0NDLElBQUFEO0lBeENZQSxvQkFBWUEsR0FBWkEsWUF3Q1pBLENBQUFBO0FBQ0hBLENBQUNBLEVBNUNNLE9BQU8sS0FBUCxPQUFPLFFBNENiOztBQzlDRCxvREFBb0Q7QUFDcEQsMENBQTBDO0FBRTFDLElBQU8sT0FBTyxDQUliO0FBSkQsV0FBTyxPQUFPLEVBQUEsQ0FBQztJQUNkQSxZQUFZQSxDQUFDQTtJQUNiQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUNyREEsTUFBTUEsQ0FBQ0Esb0JBQVlBLENBQUNBLENBQUFBO0FBQ3ZCQSxDQUFDQSxFQUpNLE9BQU8sS0FBUCxPQUFPLFFBSWI7O0FDUEQsQUFDQSx1REFEdUQ7QUFDdkQsSUFBTyxPQUFPLENBc0JiO0FBdEJELFdBQU8sT0FBTyxFQUFDLENBQUM7SUFHZkEsSUFBYUEsV0FBV0E7UUFHdkJHLFNBSFlBLFdBQVdBLENBR1hBLEtBQXNCQTtZQUNqQ0Msd0RBQXdEQTtZQUhqREEsWUFBT0EsR0FBR0EsdUJBQXVCQSxDQUFDQTtRQVMxQ0EsQ0FBQ0E7UUFJRkQsa0JBQUNBO0lBQURBLENBZEFILEFBY0NHLElBQUFIO0lBZFlBLG1CQUFXQSxHQUFYQSxXQWNaQSxDQUFBQTtBQUtGQSxDQUFDQSxFQXRCTSxPQUFPLEtBQVAsT0FBTyxRQXNCYjs7QUN2QkQ7O0dBRUc7O0FDRkgsQUFJQTs7R0FGRztBQUNILHVEQUF1RDtBQUN2RCxJQUFPLE9BQU8sQ0FLYjtBQUxELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxTQUFTQSxDQUt2QkE7SUFMY0EsV0FBQUEsU0FBU0EsRUFBQ0EsQ0FBQ0E7UUFFeEJLLFlBQVlBLENBQUNBO1FBRWJBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLFdBQVdBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQSxFQUxjTCxTQUFTQSxHQUFUQSxpQkFBU0EsS0FBVEEsaUJBQVNBLFFBS3ZCQTtBQUFEQSxDQUFDQSxFQUxNLE9BQU8sS0FBUCxPQUFPLFFBS2I7O0FDVEQ7O0dBRUc7QUFDSCx1REFBdUQ7QUFFdkQsSUFBTyxPQUFPLENBbUJiO0FBbkJELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxTQUFTQSxDQW1CdkJBO0lBbkJjQSxXQUFBQSxTQUFTQSxFQUFDQSxDQUFDQTtRQUN4QkssWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEsWUFBWUE7WUFDdkJDLGdCQUFnQkE7WUFDaEJBLFNBRldBLFlBQVlBLENBRVhBLGNBQW9DQTtnQkFDOUNDLGNBQWNBLENBQ1hBLEtBQUtBLENBQUNBLGVBQWVBLEVBQUVBO29CQUN0QkEsR0FBR0EsRUFBRUEsWUFBWUE7b0JBQ2pCQSxLQUFLQSxFQUFHQTt3QkFDTkEsU0FBU0EsRUFBRUE7NEJBQ1RBLFdBQVdBLEVBQUVBLDhCQUE4QkE7eUJBQzVDQTtxQkFDRkE7aUJBQ0ZBLENBQUNBLENBQUNBO1lBRVBBLENBQUNBO1lBRUhELG1CQUFDQTtRQUFEQSxDQWZBRCxBQWVDQyxJQUFBRDtRQWZZQSxzQkFBWUEsR0FBWkEsWUFlWkEsQ0FBQUE7SUFDSEEsQ0FBQ0EsRUFuQmNMLFNBQVNBLEdBQVRBLGlCQUFTQSxLQUFUQSxpQkFBU0EsUUFtQnZCQTtBQUFEQSxDQUFDQSxFQW5CTSxPQUFPLEtBQVAsT0FBTyxRQW1CYjtBQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXI6IG5nLnVpLklVcmxSb3V0ZXJQcm92aWRlcixcclxuICAgICAgICAgICAgICAgICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgc2VydmljZXNEZXBlbmRlbmNpZXMgOiBmdW5jdGlvbih0b2FzdGVyU2VydmljZSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVybDogJy9hcHAnLFxyXG4gICAgICAgICAgdmlld3MgICA6IHtcclxuICAgICAgICAgICAgJ21haW5AJyAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29yZS9sYXlvdXRzL2RlZmF1bHQuaGpqampqamp0bWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qJ3Rvb2xiYXJAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndG9vbGJhci90b29sYmFyLmh0bWwnLFxyXG4gICAgICAgICAgICAgIC8vY29udHJvbGxlciA6ICdUb29sYmFyQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25hdmlnYXRpb25AYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZGVuYXYvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICAgIC8vY29udHJvbGxlciA6ICdOYXZpZ2F0aW9uQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3F1aWNrUGFuZWxAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZGVuYXYvcXVpY2stcGFuZWwvcXVpY2stcGFuZWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgLy9jb250cm9sbGVyIDogJ1F1aWNrUGFuZWxDb250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL2Rhc2hib2FyZCcpO1xyXG5cclxuICAgICAgLy8gY29tbW9ucyB0cmFuc2xhdGlvbnNcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW5kZXgucm91dGVzLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwe1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgnY291cnNlc0FwcCcsIFsnYXBwLmNvcmUnLCAnZGFzaGJvYXJkJ10pXHJcblx0XHQuY29uZmlnKFJvdXRlckNvbmZpZylcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5tb2R1bGUgT25lc25hcCB7XHJcblx0XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRcdHByaXZhdGUgX2FwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnO1xyXG5cdFx0XHJcblx0XHRjb25zdHJ1Y3RvcigkaHR0cDogbmcuSUh0dHBTZXJ2aWNlKSB7XHJcblx0XHRcdC8vVE9ETyBwYXNhcmxvIGNvbW8gY29uc3RhbnRlLCBhaG9yYSBlcyBzb2xvIHBhcmEgcHJvYmFyXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cbiAqL1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5tb2R1bGUgT25lc25hcC5EYXNoYm9hcmQge1xyXG5cclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnLCBbXSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuRGFzaGJvYXJkIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBSb3V0ZXJDb25maWcge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdhcHAuZGFzaGJvYXJkJywge1xyXG4gICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICB2aWV3cyA6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gIC5jb25maWcoT25lc25hcC5EYXNoYm9hcmQuUm91dGVyQ29uZmlnKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9