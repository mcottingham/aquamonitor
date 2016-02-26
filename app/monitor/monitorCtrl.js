(function() {
  'use strict';

  function MonitorCtrl() {
    console.log('here');
  }

  angular.module('aquamonitor.core')
    .controller('monitorCtrl', MonitorCtrl);
})();
