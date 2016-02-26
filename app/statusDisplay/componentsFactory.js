(function() {
  function factory(_d3) {
    function ComponentsFactory() {
      this.d3 = _d3;
    }

    ComponentsFactory.prototype.getAquarium = function(container) {
      var aquariumGroup = container.append('g');

      var aquarium = aquariumGroup.append('rect')
        .attr('width', '485')
        .attr('height', '110')
        .attr('class', 'aquarium');

      var waterLevel = aquariumGroup.append('rect')
        .attr('class', 'water')
        .attr('width', '485')
        .attr('height', '91')
        .attr('y', '18');

      return aquariumGroup;
    };

    ComponentsFactory.prototype.getSump = function(container) {
      var sumpGroup = container.append('g');

      var sump = sumpGroup.append('rect')
        .attr('width', '200')
        .attr('height', 60)
        .attr('class', 'sump');

      var waterLevel = sumpGroup.append('rect')
        .attr('class', 'water')
        .attr('width', '200')
        .attr('height', 50)
        .attr('y', 10);

      return sumpGroup;
    };

    ComponentsFactory.prototype.getLights = function(container, illuminated) {
      var lights = container.append('path')
        .attr('d', 'M0 0 H485')
        .attr('class', function() {
          return 'lights ' + (illuminated ? 'on' : 'off');
        });

      return lights;
    };

    ComponentsFactory.prototype.getPump = function(container, running) {
      var pump = container.append('g')
        .attr('class', function() {
          return 'pump ' + (running ? 'on' : 'off');
        });

      pump.append('path')
        .attr('d', 'M0 10 H20 M20 0 H40');

      pump.append('circle')
          .attr('cx', '20')
          .attr('cy', '10')
          .attr('r', '10');

      return pump;
    };

    ComponentsFactory.prototype.getAquariumReturn = function(container) {
      var aquariumReturn = container.append('path')
        .attr('class', 'aquarium-return')
        .attr('d', 'M0 25 L0 110 L10 110 L10 10 M10 110 L20 110 L20 0 M20 95 L30 95 L30 270');

      return aquariumReturn;
    };

    ComponentsFactory.prototype.getSumpReturn = function(container) {
      var sumpReturn = container.append('path')
        .attr('class', 'sump-return')
        .attr('d', 'M0 20 L0 0 L10 0 L10 290');

      return sumpReturn;
    };

    return ComponentsFactory;
  }



  angular.module('aquamonitor.core')
    .factory('ComponentsFactory', factory);
})();
