(function() {
    'use strict';

    angular.module('aquamonitor', ['ui.router', 'aquamonitor.core'])
        .config(config)
        .run(run)
        .constant('_d3', d3);

    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('/', '/monitor');

        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                templateUrl: 'app/layout/pageLayout.html'
            })
            .state('root.app', {
                abstract: true,
                views: {
                    'topNav@root': {
                        templateUrl: 'app/topNav/topNav.html'
                    }
                }
            })
            .state('root.app.monitor', {
                url: 'monitor',
                views: {
                    'content@root': {
                        templateUrl: 'app/monitor/monitor.html',
                        controller: 'monitorCtrl',
                        controllerAs: 'monitorCtrl'
                    }
                }
            });
    }

    function run($rootScope, $state) {
        $rootScope.$state = $state;
    }

    angular.bootstrap(document, ['aquamonitor']);
})();