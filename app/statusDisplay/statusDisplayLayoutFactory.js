(function() {
  'use strict';

  function factory() {
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
      this.aquarium.attr('transform', 'translate(142.5,20)');
      this.sump.attr('transform', 'translate(170, 275)');
      this.lights.attr('transform', 'translate(142.5, 15)');
      this.pump.attr('transform', 'translate(320, 305)');
      this.aquariumReturn.attr('transform', 'translate(160, 15)');
      this.sumpReturn.attr('transform', 'translate(350, 15)');
    }

    return StatusDisplayLayoutFactory;
  }

  angular.module('aquamonitor.core')
    .factory('StatusDisplayLayoutFactory', factory);
})();
