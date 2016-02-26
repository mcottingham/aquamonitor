(function() {
  'use strict';

  function StatusDisplay(_d3, ComponentsFactory) {
    var componentsFactory = new ComponentsFactory();

    function StatusDisplayController() {
      console.log('here');
    }

    function StatusDisplayLink(scope, elem, attr, ngModelCtrl) {
      angular.element(elem[0]).empty();
      var svg = _d3.select(elem[0])
              .append('svg:svg')
              .append('svg:g');


      var defs = svg.insert('svg:defs', 'g');

      var aquarium = componentsFactory.getAquarium(svg);
      var sump = componentsFactory.getSump(svg);
      var lights = componentsFactory.getLights(svg, true);
      var pump = componentsFactory.getPump(svg, true);
      var aquariumReturn = componentsFactory.getAquariumReturn(svg);
      var sumpReturn = componentsFactory.getSumpReturn(svg);
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
