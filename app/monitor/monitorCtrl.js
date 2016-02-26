(function() {
  'use strict';

  function MonitorCtrl() {
    this.systemStatus = {
      sumpProbe: 17936,
      aquariumProbe: 18250,
      sumpReturn: 25,
      aquariumReturn: 25,
      pump: true,
      lights: true
    };
  }

  angular.module('aquamonitor.core')
    .controller('monitorCtrl', MonitorCtrl);
})();
