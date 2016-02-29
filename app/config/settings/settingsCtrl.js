(function() {
  'use strict';

  function SettingsCtrl(_moment) {
    this._moment = _moment;

    this.settings = {
      lightsOn: {
        hour: 0,
        minute: 0
      },
      lightsOff: {
        hour: 0,
        minute: 0
      }
    };
  }

  SettingsCtrl.prototype.save = function() {
    console.log('save', this.settings);
  };

  angular.module('aquamonitor.core')
    .controller('settingsCtrl', SettingsCtrl);
})();
