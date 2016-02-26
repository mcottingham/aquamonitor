(function() {
  'use strict';

  function StatusDisplay(_d3, ComponentsFactory, StatusDisplayLayoutFactory) {

    function StatusDisplayController() {
    }

    function StatusDisplayLink(scope, elem, attr, ngModelCtrl) {
      var componentsFactory = new ComponentsFactory();

      scope.$watch(function() {
        return ngModelCtrl.$modelValue;
      }, draw, true);

      function draw() {
        angular.element(elem[0]).empty();

        var systemStatus = ngModelCtrl.$modelValue;
        var svg = _d3.select(elem[0]).append('svg:svg');
        var componentsContainer = svg.append('svg:g');

        var aquarium = componentsFactory.getAquarium(componentsContainer);
        var sump = componentsFactory.getSump(componentsContainer);
        var lights = componentsFactory.getLights(componentsContainer, systemStatus.lights);
        var pump = componentsFactory.getPump(componentsContainer, systemStatus.pump);
        var aquariumReturn = componentsFactory.getAquariumReturn(componentsContainer);
        var sumpReturn = componentsFactory.getSumpReturn(componentsContainer);

        var statusDisplayLayoutFactory = new StatusDisplayLayoutFactory(aquarium, sump, lights, pump, aquariumReturn, sumpReturn);
        statusDisplayLayoutFactory.layout(svg);
      }
    }

    return {
      restrict: 'E',
      require: 'ngModel',
      controller: StatusDisplayController,
      controllerAs: 'ctrl',
      link: StatusDisplayLink
    };
  }

  angular.module('aquamonitor.core')
  .directive('statusDisplay', StatusDisplay);
})();
