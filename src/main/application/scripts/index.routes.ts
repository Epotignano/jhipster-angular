module Onesnap {
	
	export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider,
                $urlRouterProvider: ng.ui.IUrlRouterProvider,
                $translatePartialLoaderProvider) {
    $stateProvider
        .state('app', {
          abstract: true,
          resolve: {
            servicesDependencies : function(toasterService){
              return true;
            } ,
          },
          url: '/app',
          views   : {
            'main@'         : {
              templateUrl: 'scripts/core/layouts/default.html'
            },
            'toolbar@app': {
              templateUrl: 'scripts/toolbar/toolbar.html',
              controller : 'ToolbarController as vm'
            },
            'navigation@app': {
              templateUrl: 'scripts/sidenav/navigation/navigation.html',
              controller : 'NavigationController as vm'
            },
            'quickPanel@app': {
              templateUrl: 'scripts/sidenav/quick-panel/quick-panel.html',
              controller : 'QuickPanelController as vm'
            }
          }
        });


      $urlRouterProvider.otherwise('/app/dashboard');

      // commons translations
      $translatePartialLoaderProvider.addPart('scripts/commons');

    }

  }
	
	
}