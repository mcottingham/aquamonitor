(function() {
  'use strict';

  angular.module('aquamonitor', ['ui.router', 'aquamonitor.core'])
    .config(config)
    .run(run)
    .constant('_d3', d3);

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('', '/monitor');

        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                template: '<ui-view />'
            })

        .state('root.monitor', {
            url: 'monitor',
            templateUrl: 'app/monitor/monitor.html',
            controller: 'monitorCtrl',
            controllerAs: 'monitorCtrl'
        })
  }

  function run($rootScope, $state) {
    $rootScope.$state = $state;
  }

  angular.bootstrap(document, ['aquamonitor']);
})();
