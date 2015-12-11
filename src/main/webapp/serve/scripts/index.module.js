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
                    },
                    'navigation@app': {
                        templateUrl: 'scripts/sidenav/navigation/navigation.html',
                    },
                    'quickPanel@app': {
                        templateUrl: 'app/sidenav/quick-panel/quick-panel.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyIsImluZGV4Lm1vZHVsZS50cyIsImF1dGgvYXV0aC5zZXJ2aWNlLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLnRzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUudHMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuQXV0aFNlcnZpY2UiLCJPbmVzbmFwLkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiT25lc25hcC5EYXNoYm9hcmQiLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkRhc2hib2FyZC5Sb3V0ZXJDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUVwRCxJQUFPLE9BQU8sQ0FxQ2I7QUFyQ0QsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUNkQSxZQUFZQSxDQUFDQTtJQUViQSxJQUFhQSxZQUFZQTtRQUN2QkMsZ0JBQWdCQTtRQUNoQkEsU0FGV0EsWUFBWUEsQ0FFWEEsY0FBb0NBLEVBQ3BDQSxrQkFBNENBO1lBQ3hEQyxjQUFjQSxDQUNUQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQTtnQkFDWkEsR0FBR0EsRUFBRUEsTUFBTUE7Z0JBQ1hBLEtBQUtBLEVBQUtBO29CQUNSQSxPQUFPQSxFQUFXQTt3QkFDaEJBLFdBQVdBLEVBQUVBLG1DQUFtQ0E7cUJBQ2pEQTtvQkFDREEsYUFBYUEsRUFBRUE7d0JBQ2JBLFdBQVdBLEVBQUVBLDhCQUE4QkE7cUJBRTVDQTtvQkFDREEsZ0JBQWdCQSxFQUFFQTt3QkFDaEJBLFdBQVdBLEVBQUVBLDRDQUE0Q0E7cUJBRTFEQTtvQkFDREEsZ0JBQWdCQSxFQUFFQTt3QkFDaEJBLFdBQVdBLEVBQUVBLDBDQUEwQ0E7cUJBRXhEQTtpQkFDRkE7YUFDRkEsQ0FBQ0EsQ0FBQ0E7WUFHTEEsa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUVyQ0EsdUJBQXVCQTtRQUV6QkEsQ0FBQ0E7UUFFSEQsbUJBQUNBO0lBQURBLENBakNBRCxBQWlDQ0MsSUFBQUQ7SUFqQ1lBLG9CQUFZQSxHQUFaQSxZQWlDWkEsQ0FBQUE7QUFDSEEsQ0FBQ0EsRUFyQ00sT0FBTyxLQUFQLE9BQU8sUUFxQ2I7O0FDdkNELG9EQUFvRDtBQUNwRCwwQ0FBMEM7QUFFMUMsSUFBTyxPQUFPLENBV2I7QUFYRCxXQUFPLE9BQU8sRUFBQSxDQUFDO0lBQ2RBLFlBQVlBLENBQUNBO0lBQ2JBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLFVBQVVBLEVBRXhDQSxnQkFBZ0JBLEVBRWhCQSxhQUFhQSxFQUViQSxnQkFBZ0JBLEVBQ2hCQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUNYQSxNQUFNQSxDQUFDQSxvQkFBWUEsQ0FBQ0EsQ0FBQUE7QUFDdkJBLENBQUNBLEVBWE0sT0FBTyxLQUFQLE9BQU8sUUFXYjs7QUNkRCxBQUNBLHVEQUR1RDtBQUN2RCxJQUFPLE9BQU8sQ0FzQmI7QUF0QkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUdmQSxJQUFhQSxXQUFXQTtRQUd2QkcsU0FIWUEsV0FBV0EsQ0FHWEEsS0FBc0JBO1lBQ2pDQyx3REFBd0RBO1lBSGpEQSxZQUFPQSxHQUFHQSx1QkFBdUJBLENBQUNBO1FBUzFDQSxDQUFDQTtRQUlGRCxrQkFBQ0E7SUFBREEsQ0FkQUgsQUFjQ0csSUFBQUg7SUFkWUEsbUJBQVdBLEdBQVhBLFdBY1pBLENBQUFBO0FBS0ZBLENBQUNBLEVBdEJNLE9BQU8sS0FBUCxPQUFPLFFBc0JiOztBQ3ZCRDs7R0FFRzs7QUNGSCxBQUlBOztHQUZHO0FBQ0gsdURBQXVEO0FBQ3ZELElBQU8sT0FBTyxDQUtiO0FBTEQsV0FBTyxPQUFPO0lBQUNBLElBQUFBLFNBQVNBLENBS3ZCQTtJQUxjQSxXQUFBQSxTQUFTQSxFQUFDQSxDQUFDQTtRQUV4QkssWUFBWUEsQ0FBQ0E7UUFFYkEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDbENBLENBQUNBLEVBTGNMLFNBQVNBLEdBQVRBLGlCQUFTQSxLQUFUQSxpQkFBU0EsUUFLdkJBO0FBQURBLENBQUNBLEVBTE0sT0FBTyxLQUFQLE9BQU8sUUFLYjs7QUNURDs7R0FFRztBQUNILHVEQUF1RDtBQUV2RCxJQUFPLE9BQU8sQ0FtQmI7QUFuQkQsV0FBTyxPQUFPO0lBQUNBLElBQUFBLFNBQVNBLENBbUJ2QkE7SUFuQmNBLFdBQUFBLFNBQVNBLEVBQUNBLENBQUNBO1FBQ3hCSyxZQUFZQSxDQUFDQTtRQUViQSxJQUFhQSxZQUFZQTtZQUN2QkMsZ0JBQWdCQTtZQUNoQkEsU0FGV0EsWUFBWUEsQ0FFWEEsY0FBb0NBO2dCQUM5Q0MsY0FBY0EsQ0FDWEEsS0FBS0EsQ0FBQ0EsZUFBZUEsRUFBRUE7b0JBQ3RCQSxHQUFHQSxFQUFFQSxZQUFZQTtvQkFDakJBLEtBQUtBLEVBQUdBO3dCQUNOQSxTQUFTQSxFQUFFQTs0QkFDVEEsV0FBV0EsRUFBRUEsOEJBQThCQTt5QkFDNUNBO3FCQUNGQTtpQkFDRkEsQ0FBQ0EsQ0FBQ0E7WUFFUEEsQ0FBQ0E7WUFFSEQsbUJBQUNBO1FBQURBLENBZkFELEFBZUNDLElBQUFEO1FBZllBLHNCQUFZQSxHQUFaQSxZQWVaQSxDQUFBQTtJQUNIQSxDQUFDQSxFQW5CY0wsU0FBU0EsR0FBVEEsaUJBQVNBLEtBQVRBLGlCQUFTQSxRQW1CdkJBO0FBQURBLENBQUNBLEVBbkJNLE9BQU8sS0FBUCxPQUFPLFFBbUJiO0FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcCB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBleHBvcnQgY2xhc3MgUm91dGVyQ29uZmlnIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcixcclxuICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlcjogbmcudWkuSVVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgdXJsOiAnL2FwcCcsXHJcbiAgICAgICAgICB2aWV3cyAgIDoge1xyXG4gICAgICAgICAgICAnbWFpbkAnICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2NvcmUvbGF5b3V0cy9kZWZhdWx0Lmh0bWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0b29sYmFyQGFwcCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvdG9vbGJhci90b29sYmFyLmh0bWwnLFxyXG4gICAgICAgICAgICAgIC8vY29udHJvbGxlciA6ICdUb29sYmFyQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25hdmlnYXRpb25AYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9zaWRlbmF2L25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgICAvL2NvbnRyb2xsZXIgOiAnTmF2aWdhdGlvbkNvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdxdWlja1BhbmVsQGFwcCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWRlbmF2L3F1aWNrLXBhbmVsL3F1aWNrLXBhbmVsLmh0bWwnLFxyXG4gICAgICAgICAgICAgIC8vY29udHJvbGxlciA6ICdRdWlja1BhbmVsQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAnKTtcclxuXHJcbiAgICAgIC8vIGNvbW1vbnMgdHJhbnNsYXRpb25zXHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2luZGV4LnJvdXRlcy50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0YW5ndWxhci5tb2R1bGUoJ2NvdXJzZXNBcHAnLCBbJ2FwcC5jb3JlJyxcclxuXHQvLyBuYXZpZ2F0aW9uXHJcblx0J2FwcC5uYXZpZ2F0aW9uJyxcclxuXHQvLyB0b29sYmFyXHJcblx0J2FwcC50b29sYmFyJywgXHJcblx0Ly90ZW1wbGF0ZSBjb21wb25lbnRzXHJcblx0J2FwcC5jb21wb25lbnRzJyxcclxuXHQnZGFzaGJvYXJkJ10pXHJcblx0XHQuY29uZmlnKFJvdXRlckNvbmZpZylcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5tb2R1bGUgT25lc25hcCB7XHJcblx0XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHRcdHByaXZhdGUgX2FwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnO1xyXG5cdFx0XHJcblx0XHRjb25zdHJ1Y3RvcigkaHR0cDogbmcuSUh0dHBTZXJ2aWNlKSB7XHJcblx0XHRcdC8vVE9ETyBwYXNhcmxvIGNvbW8gY29uc3RhbnRlLCBhaG9yYSBlcyBzb2xvIHBhcmEgcHJvYmFyXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cbiAqL1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5tb2R1bGUgT25lc25hcC5EYXNoYm9hcmQge1xyXG5cclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnLCBbXSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuRGFzaGJvYXJkIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBSb3V0ZXJDb25maWcge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdhcHAuZGFzaGJvYXJkJywge1xyXG4gICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICB2aWV3cyA6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdkYXNoYm9hcmQnKVxyXG4gIC5jb25maWcoT25lc25hcC5EYXNoYm9hcmQuUm91dGVyQ29uZmlnKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9