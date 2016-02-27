(function() {
  'use strict';

  function MonitorCtrl($timeout) {
    this.systemStatus = {
      sumpProbe: 17936,
      aquariumProbe: 18250,
      sumpReturn: 25,
      aquariumReturn: 25,
      pump: true,
      lights: true,
      bubbler: true,
      filter: true,
      healthy: true
    };
  }

  MonitorCtrl.prototype.lightsClick = function() {
    this.systemStatus.lights = !this.systemStatus.lights;
  };

  MonitorCtrl.prototype.pumpClick = function() {
    this.systemStatus.pump = !this.systemStatus.pump;
  };

  MonitorCtrl.prototype.bubblerClick = function() {
    this.systemStatus.bubbler = !this.systemStatus.bubbler;
  };

  MonitorCtrl.prototype.filterClick = function() {
    this.systemStatus.filter = !this.systemStatus.filter;
  }

  angular.module('aquamonitor.core')
    .controller('monitorCtrl', MonitorCtrl);
})();
