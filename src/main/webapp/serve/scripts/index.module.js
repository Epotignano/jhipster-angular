var Onesnap;
(function (Onesnap) {
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
                        templateUrl: 'scripts/core/layouts/default.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'scripts/toolbar/toolbar.html',
                        controller: 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: 'scripts/sidenav/navigation/navigation.html',
                        controller: 'NavigationController as vm'
                    },
                    'quickPanel@app': {
                        templateUrl: 'scripts/sidenav/quick-panel/quick-panel.html',
                        controller: 'QuickPanelController as vm'
                    }
                }
            });
            $urlRouterProvider.otherwise('/app/dashboard');
            // commons translations
            $translatePartialLoaderProvider.addPart('scripts/commons');
        }
        return RouterConfig;
    })();
    Onesnap.RouterConfig = RouterConfig;
})(Onesnap || (Onesnap = {}));

/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="index.routes.ts" />
var Onesnap;
(function (Onesnap) {
    'use strict';
    angular.module('coursesApp', ['app.core']);
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyIsImluZGV4Lm1vZHVsZS50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxPQUFPLENBOENiO0FBOUNELFdBQU8sT0FBTyxFQUFDLENBQUM7SUFFZkEsSUFBYUEsWUFBWUE7UUFDdEJDLGdCQUFnQkE7UUFDaEJBLFNBRlVBLFlBQVlBLENBRVZBLGNBQW9DQSxFQUNwQ0Esa0JBQTRDQSxFQUM1Q0EsK0JBQStCQTtZQUMzQ0MsY0FBY0EsQ0FDVEEsS0FBS0EsQ0FBQ0EsS0FBS0EsRUFBRUE7Z0JBQ1pBLFFBQVFBLEVBQUVBLElBQUlBO2dCQUNkQSxPQUFPQSxFQUFFQTtvQkFDUEEsb0JBQW9CQSxFQUFHQSxVQUFTQSxjQUFjQTt3QkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDZCxDQUFDO2lCQUNGQTtnQkFDREEsR0FBR0EsRUFBRUEsTUFBTUE7Z0JBQ1hBLEtBQUtBLEVBQUtBO29CQUNSQSxPQUFPQSxFQUFXQTt3QkFDaEJBLFdBQVdBLEVBQUVBLG1DQUFtQ0E7cUJBQ2pEQTtvQkFDREEsYUFBYUEsRUFBRUE7d0JBQ2JBLFdBQVdBLEVBQUVBLDhCQUE4QkE7d0JBQzNDQSxVQUFVQSxFQUFHQSx5QkFBeUJBO3FCQUN2Q0E7b0JBQ0RBLGdCQUFnQkEsRUFBRUE7d0JBQ2hCQSxXQUFXQSxFQUFFQSw0Q0FBNENBO3dCQUN6REEsVUFBVUEsRUFBR0EsNEJBQTRCQTtxQkFDMUNBO29CQUNEQSxnQkFBZ0JBLEVBQUVBO3dCQUNoQkEsV0FBV0EsRUFBRUEsOENBQThDQTt3QkFDM0RBLFVBQVVBLEVBQUdBLDRCQUE0QkE7cUJBQzFDQTtpQkFDRkE7YUFDRkEsQ0FBQ0EsQ0FBQ0E7WUFHTEEsa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1lBRS9DQSxBQUNBQSx1QkFEdUJBO1lBQ3ZCQSwrQkFBK0JBLENBQUNBLE9BQU9BLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7UUFFN0RBLENBQUNBO1FBRUhELG1CQUFDQTtJQUFEQSxDQXpDREQsQUF5Q0VDLElBQUFEO0lBekNXQSxvQkFBWUEsR0FBWkEsWUF5Q1hBLENBQUFBO0FBR0hBLENBQUNBLEVBOUNNLE9BQU8sS0FBUCxPQUFPLFFBOENiOztBQzlDRCxvREFBb0Q7QUFDcEQsd0NBQXdDO0FBRXhDLElBQU8sT0FBTyxDQUdiO0FBSEQsV0FBTyxPQUFPLEVBQUEsQ0FBQztJQUNkQSxZQUFZQSxDQUFDQTtJQUNiQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFBQTtBQUMzQ0EsQ0FBQ0EsRUFITSxPQUFPLEtBQVAsT0FBTyxRQUdiIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBPbmVzbmFwIHtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgUm91dGVyQ29uZmlnIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcixcclxuICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlcjogbmcudWkuSVVybFJvdXRlclByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2FwcCcsIHtcclxuICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICBzZXJ2aWNlc0RlcGVuZGVuY2llcyA6IGZ1bmN0aW9uKHRvYXN0ZXJTZXJ2aWNlKXtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdXJsOiAnL2FwcCcsXHJcbiAgICAgICAgICB2aWV3cyAgIDoge1xyXG4gICAgICAgICAgICAnbWFpbkAnICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2NvcmUvbGF5b3V0cy9kZWZhdWx0Lmh0bWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0b29sYmFyQGFwcCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvdG9vbGJhci90b29sYmFyLmh0bWwnLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXIgOiAnVG9vbGJhckNvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICduYXZpZ2F0aW9uQGFwcCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvc2lkZW5hdi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdOYXZpZ2F0aW9uQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3F1aWNrUGFuZWxAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9zaWRlbmF2L3F1aWNrLXBhbmVsL3F1aWNrLXBhbmVsLmh0bWwnLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXIgOiAnUXVpY2tQYW5lbENvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL2Rhc2hib2FyZCcpO1xyXG5cclxuICAgICAgLy8gY29tbW9ucyB0cmFuc2xhdGlvbnNcclxuICAgICAgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdzY3JpcHRzL2NvbW1vbnMnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHRcclxuXHRcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiaW5kZXgucm91dGVzLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwe1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgnY291cnNlc0FwcCcsIFsnYXBwLmNvcmUnXSlcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==