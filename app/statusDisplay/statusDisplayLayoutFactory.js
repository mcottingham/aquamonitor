(function() {
  'use strict';

  function factory($window) {
    function StatusDisplayLayoutFactory(aquarium, sump, lights, pump, aquariumReturn, sumpReturn) {
      this.aquarium = aquarium;
      this.sump = sump;
      this.lights = lights;
      this.pump = pump;
      this.aquariumReturn = aquariumReturn;
      this.sumpReturn = sumpReturn;
    }

    StatusDisplayLayoutFactory.prototype.getDimensions = function(element) {
      return element.node().getBBox();
    }

    StatusDisplayLayoutFactory.prototype.layout = function(container) {
      var containerDimensions = this.getDimensions(container);

      this.aquarium.attr('transform', 'translate(0,20)');
      this.sump.attr('transform', 'translate(30, 200)');
      this.lights.attr('transform', 'translate(0, 3)');
      this.pump.attr('transform', 'translate(180, 230)');
      this.aquariumReturn.attr('transform', 'translate(25, 15)');
      this.sumpReturn.attr('transform', 'translate(210, 15)');

      container.select('g').attr('transform', 'translate(' + ($window.innerWidth - containerDimensions.width)/2 + ', 0)');
    }

    return StatusDisplayLayoutFactory;
  }

  angular.module('aquamonitor.core')
    .factory('StatusDisplayLayoutFactory', factory);
})();
