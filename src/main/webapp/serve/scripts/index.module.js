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
    angular.module('coursesApp', ['app.core']).config(Onesnap.RouterConfig);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyIsImluZGV4Lm1vZHVsZS50cyIsImF1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIk9uZXNuYXAiLCJPbmVzbmFwLlJvdXRlckNvbmZpZyIsIk9uZXNuYXAuUm91dGVyQ29uZmlnLmNvbnN0cnVjdG9yIiwiT25lc25hcC5BdXRoU2VydmljZSIsIk9uZXNuYXAuQXV0aFNlcnZpY2UuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sT0FBTyxDQThDYjtBQTlDRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBRWZBLElBQWFBLFlBQVlBO1FBQ3RCQyxnQkFBZ0JBO1FBQ2hCQSxTQUZVQSxZQUFZQSxDQUVWQSxjQUFvQ0EsRUFDcENBLGtCQUE0Q0EsRUFDNUNBLCtCQUErQkE7WUFDM0NDLGNBQWNBLENBQ1RBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBO2dCQUNaQSxRQUFRQSxFQUFFQSxJQUFJQTtnQkFDZEEsT0FBT0EsRUFBRUE7b0JBQ1BBLG9CQUFvQkEsRUFBR0EsVUFBU0EsY0FBY0E7d0JBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztpQkFDRkE7Z0JBQ0RBLEdBQUdBLEVBQUVBLE1BQU1BO2dCQUNYQSxLQUFLQSxFQUFLQTtvQkFDUkEsT0FBT0EsRUFBV0E7d0JBQ2hCQSxXQUFXQSxFQUFFQSxtQ0FBbUNBO3FCQUNqREE7b0JBQ0RBLGFBQWFBLEVBQUVBO3dCQUNiQSxXQUFXQSxFQUFFQSw4QkFBOEJBO3dCQUMzQ0EsVUFBVUEsRUFBR0EseUJBQXlCQTtxQkFDdkNBO29CQUNEQSxnQkFBZ0JBLEVBQUVBO3dCQUNoQkEsV0FBV0EsRUFBRUEsNENBQTRDQTt3QkFDekRBLFVBQVVBLEVBQUdBLDRCQUE0QkE7cUJBQzFDQTtvQkFDREEsZ0JBQWdCQSxFQUFFQTt3QkFDaEJBLFdBQVdBLEVBQUVBLDhDQUE4Q0E7d0JBQzNEQSxVQUFVQSxFQUFHQSw0QkFBNEJBO3FCQUMxQ0E7aUJBQ0ZBO2FBQ0ZBLENBQUNBLENBQUNBO1lBR0xBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtZQUUvQ0EsQUFDQUEsdUJBRHVCQTtZQUN2QkEsK0JBQStCQSxDQUFDQSxPQUFPQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO1FBRTdEQSxDQUFDQTtRQUVIRCxtQkFBQ0E7SUFBREEsQ0F6Q0RELEFBeUNFQyxJQUFBRDtJQXpDV0Esb0JBQVlBLEdBQVpBLFlBeUNYQSxDQUFBQTtBQUdIQSxDQUFDQSxFQTlDTSxPQUFPLEtBQVAsT0FBTyxRQThDYjs7QUM5Q0Qsb0RBQW9EO0FBQ3BELHdDQUF3QztBQUV4QyxJQUFPLE9BQU8sQ0FJYjtBQUpELFdBQU8sT0FBTyxFQUFBLENBQUM7SUFDZEEsWUFBWUEsQ0FBQ0E7SUFDYkEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FDeENBLE1BQU1BLENBQUNBLG9CQUFZQSxDQUFDQSxDQUFBQTtBQUN2QkEsQ0FBQ0EsRUFKTSxPQUFPLEtBQVAsT0FBTyxRQUliOztBQ1BELEFBQ0EsdURBRHVEO0FBQ3ZELElBQU8sT0FBTyxDQXNCYjtBQXRCRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBR2ZBLElBQWFBLFdBQVdBO1FBR3ZCRyxTQUhZQSxXQUFXQSxDQUdYQSxLQUFzQkE7WUFDakNDLHdEQUF3REE7WUFIakRBLFlBQU9BLEdBQUdBLHVCQUF1QkEsQ0FBQ0E7UUFTMUNBLENBQUNBO1FBSUZELGtCQUFDQTtJQUFEQSxDQWRBSCxBQWNDRyxJQUFBSDtJQWRZQSxtQkFBV0EsR0FBWEEsV0FjWkEsQ0FBQUE7QUFLRkEsQ0FBQ0EsRUF0Qk0sT0FBTyxLQUFQLE9BQU8sUUFzQmIiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIE9uZXNuYXAge1xyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBSb3V0ZXJDb25maWcge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyOiBuZy51aS5JVXJsUm91dGVyUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzRGVwZW5kZW5jaWVzIDogZnVuY3Rpb24odG9hc3RlclNlcnZpY2Upe1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgIHZpZXdzICAgOiB7XHJcbiAgICAgICAgICAgICdtYWluQCcgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29yZS9sYXlvdXRzL2RlZmF1bHQuaHRtbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3Rvb2xiYXJAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy90b29sYmFyL3Rvb2xiYXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdUb29sYmFyQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25hdmlnYXRpb25AYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9zaWRlbmF2L25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ05hdmlnYXRpb25Db250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAncXVpY2tQYW5lbEBhcHAnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL3NpZGVuYXYvcXVpY2stcGFuZWwvcXVpY2stcGFuZWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdRdWlja1BhbmVsQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvZGFzaGJvYXJkJyk7XHJcblxyXG4gICAgICAvLyBjb21tb25zIHRyYW5zbGF0aW9uc1xyXG4gICAgICAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyLmFkZFBhcnQoJ3NjcmlwdHMvY29tbW9ucycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cdFxyXG5cdFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJpbmRleC5yb3V0ZXMudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdjb3Vyc2VzQXBwJywgWydhcHAuY29yZSddKVxyXG5cdFx0LmNvbmZpZyhSb3V0ZXJDb25maWcpXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxubW9kdWxlIE9uZXNuYXAge1xyXG5cdFxyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcblx0XHRwcml2YXRlIF9hcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJztcclxuXHRcdFxyXG5cdFx0Y29uc3RydWN0b3IoJGh0dHA6IG5nLklIdHRwU2VydmljZSkge1xyXG5cdFx0XHQvL1RPRE8gcGFzYXJsbyBjb21vIGNvbnN0YW50ZSwgYWhvcmEgZXMgc29sbyBwYXJhIHByb2JhclxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9