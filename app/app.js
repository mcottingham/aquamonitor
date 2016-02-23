(function() {
  'use strict';

  angular.module('aquamonitor', ['ui.router'])
    .config(config)
    .run(run);

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
      });
  }

  function run() {

  }

  angular.bootstrap(document, ['aquamonitor']);
})();
