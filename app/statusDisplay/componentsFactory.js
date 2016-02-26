(function() {
  function factory(_d3, $filter) {
    function ComponentsFactory() {
      this.d3 = _d3;
      this.$filter = $filter;
    }

    ComponentsFactory.prototype.getAquarium = function(container, temperature) {
      var aquariumGroup = container.append('g');

      var aquarium = aquariumGroup.append('rect')
        .attr('width', '485')
        .attr('height', '110')
        .attr('class', 'aquarium');

      var text = aquariumGroup.append('text')
        .text(this.$filter('temperature')(temperature))
        .attr('class', 'measurement')
        .attr('x', '380')
        .attr('y', '90');

        var waterLevel = aquariumGroup.append('path')
          .attr('class', 'water')
          .attr('d', 'M0 17 H485');

      return aquariumGroup;
    };

    ComponentsFactory.prototype.getSump = function(container, temperature) {
      var sumpGroup = container.append('g');

      var sump = sumpGroup.append('rect')
        .attr('width', '200')
        .attr('height', 60)
        .attr('class', 'sump');

      var text = sumpGroup.append('text')
        .text(this.$filter('temperature')(temperature))
        .attr('class', 'measurement')
        .attr('x', '25')
        .attr('y', '40');

      var waterLevel = sumpGroup.append('path')
        .attr('class', 'water')
        .attr('d', 'M0 15 H200');

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

    ComponentsFactory.prototype.getAquariumReturn = function(container, flowRate) {
      var returnGroup = container.append('g');

      var aquariumReturn = returnGroup.append('path')
        .attr('class', 'aquarium-return')
        .attr('d', 'M0 25 L0 110 L10 110 L10 10 M10 110 L20 110 L20 0 M20 95 L30 95 L30 192');

      var text = returnGroup.append('text')
        .text(this.$filter('flowRate')(flowRate))
        .attr('class', 'measurement')
        .attr('x', '40')
        .attr('y', '160');

      return returnGroup;
    };

    ComponentsFactory.prototype.getSumpReturn = function(container, flowRate) {
      var returnGroup = container.append('g');

      var sumpReturn = returnGroup.append('path')
        .attr('class', 'sump-return')
        .attr('d', 'M0 20 L0 0 L10 0 L10 217');

      var text = returnGroup.append('text')
        .text(this.$filter('flowRate')(flowRate))
        .attr('class', 'measurement')
        .attr('x', '20')
        .attr('y', '160');

      return returnGroup;
    };

    return ComponentsFactory;
  }



  angular.module('aquamonitor.core')
    .factory('ComponentsFactory', factory);
})();
