(function() {
    'use strict';

    angular.module('aquamonitor', ['ui.router', 'aquamonitor.core'])
        .config(config)
        .run(run)
        .constant('_d3', d3)
        .constant('_lodash', _)
        .constant('_moment', moment);

    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/', '/monitor');

        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                templateUrl: 'app/layout/pageLayout.html'
            })
            .state('root.lock', {
                url: 'lock',
                views: {
                  'content@root': {
                    templateUrl: 'app/lock/lock.html',
                    controller: 'lockCtrl',
                    controllerAs: 'lockCtrl',
                  }
                }
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
            })
            .state('root.app.config', {
              url: 'config',
              abstract: true,
              views: {
                'content@root': {
                  templateUrl: 'app/layout/sideNavLayout.html'
                }
              }
            })
            .state('root.app.config.settings', {
              url: 'settings',
              views: {
                'sideNav@root.app.config': {
                  templateUrl: 'app/config/sideNav/sideNav.html'
                },
                'mainContent@root.app.config': {
                  templateUrl: 'app/config/settings/settings.html',
                  controller: 'settingsCtrl',
                  controllerAs: 'settingsCtrl'
                }
              }
            });
    }

    function run($rootScope, $state) {
        $rootScope.$state = $state;
    }

    angular.bootstrap(document, ['aquamonitor']);
})();
