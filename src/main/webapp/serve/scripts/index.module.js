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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyIsImluZGV4Lm1vZHVsZS50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxPQUFPLENBOENiO0FBOUNELFdBQU8sT0FBTyxFQUFDLENBQUM7SUFFZkEsSUFBYUEsWUFBWUE7UUFDdEJDLGdCQUFnQkE7UUFDaEJBLFNBRlVBLFlBQVlBLENBRVZBLGNBQW9DQSxFQUNwQ0Esa0JBQTRDQSxFQUM1Q0EsK0JBQStCQTtZQUMzQ0MsY0FBY0EsQ0FDVEEsS0FBS0EsQ0FBQ0EsS0FBS0EsRUFBRUE7Z0JBQ1pBLFFBQVFBLEVBQUVBLElBQUlBO2dCQUNkQSxPQUFPQSxFQUFFQTtvQkFDUEEsb0JBQW9CQSxFQUFHQSxVQUFTQSxjQUFjQTt3QkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDZCxDQUFDO2lCQUNGQTtnQkFDREEsR0FBR0EsRUFBRUEsTUFBTUE7Z0JBQ1hBLEtBQUtBLEVBQUtBO29CQUNSQSxPQUFPQSxFQUFXQTt3QkFDaEJBLFdBQVdBLEVBQUVBLG1DQUFtQ0E7cUJBQ2pEQTtvQkFDREEsYUFBYUEsRUFBRUE7d0JBQ2JBLFdBQVdBLEVBQUVBLDhCQUE4QkE7d0JBQzNDQSxVQUFVQSxFQUFHQSx5QkFBeUJBO3FCQUN2Q0E7b0JBQ0RBLGdCQUFnQkEsRUFBRUE7d0JBQ2hCQSxXQUFXQSxFQUFFQSw0Q0FBNENBO3dCQUN6REEsVUFBVUEsRUFBR0EsNEJBQTRCQTtxQkFDMUNBO29CQUNEQSxnQkFBZ0JBLEVBQUVBO3dCQUNoQkEsV0FBV0EsRUFBRUEsOENBQThDQTt3QkFDM0RBLFVBQVVBLEVBQUdBLDRCQUE0QkE7cUJBQzFDQTtpQkFDRkE7YUFDRkEsQ0FBQ0EsQ0FBQ0E7WUFHTEEsa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1lBRS9DQSxBQUNBQSx1QkFEdUJBO1lBQ3ZCQSwrQkFBK0JBLENBQUNBLE9BQU9BLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7UUFFN0RBLENBQUNBO1FBRUhELG1CQUFDQTtJQUFEQSxDQXpDREQsQUF5Q0VDLElBQUFEO0lBekNXQSxvQkFBWUEsR0FBWkEsWUF5Q1hBLENBQUFBO0FBR0hBLENBQUNBLEVBOUNNLE9BQU8sS0FBUCxPQUFPLFFBOENiOztBQzlDRCxvREFBb0Q7QUFDcEQsd0NBQXdDO0FBRXhDLElBQU8sT0FBTyxDQUliO0FBSkQsV0FBTyxPQUFPLEVBQUEsQ0FBQztJQUNkQSxZQUFZQSxDQUFDQTtJQUNiQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUN4Q0EsTUFBTUEsQ0FBQ0Esb0JBQVlBLENBQUNBLENBQUFBO0FBQ3ZCQSxDQUFDQSxFQUpNLE9BQU8sS0FBUCxPQUFPLFFBSWIiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIE9uZXNuYXAge1xyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBSb3V0ZXJDb25maWcge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyOiBuZy51aS5JVXJsUm91dGVyUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzRGVwZW5kZW5jaWVzIDogZnVuY3Rpb24odG9hc3RlclNlcnZpY2Upe1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgIHZpZXdzICAgOiB7XHJcbiAgICAgICAgICAgICdtYWluQCcgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29yZS9sYXlvdXRzL2RlZmF1bHQuaHRtbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3Rvb2xiYXJAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy90b29sYmFyL3Rvb2xiYXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdUb29sYmFyQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25hdmlnYXRpb25AYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9zaWRlbmF2L25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ05hdmlnYXRpb25Db250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAncXVpY2tQYW5lbEBhcHAnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL3NpZGVuYXYvcXVpY2stcGFuZWwvcXVpY2stcGFuZWwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdRdWlja1BhbmVsQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvZGFzaGJvYXJkJyk7XHJcblxyXG4gICAgICAvLyBjb21tb25zIHRyYW5zbGF0aW9uc1xyXG4gICAgICAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyLmFkZFBhcnQoJ3NjcmlwdHMvY29tbW9ucycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cdFxyXG5cdFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJpbmRleC5yb3V0ZXMudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdjb3Vyc2VzQXBwJywgWydhcHAuY29yZSddKVxyXG5cdFx0LmNvbmZpZyhSb3V0ZXJDb25maWcpXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=