(function() {
  'use strict';

  function LockCtrl($scope, _lodash) {
    this.$scope = $scope;
    this._lodash = _lodash;

    this.passcode = '';
    this.digits = [
      {number: '1', alpha: ' '},
      {number: '2', alpha: 'abc'},
      {number: '3', alpha: 'def'},
      {number: '4', alpha: 'ghi'},
      {number: '5', alpha: 'jkl'},
      {number: '6', alpha: 'mno'},
      {number: '7', alpha: 'pqrs'},
      {number: '8', alpha: 'tuv'},
      {number: '9', alpha: 'wxyz'},
      {number: '*', alpha: ''},
      {number: '0', alpha: '+'},
      {number: '#', alpha: ''},
    ];

    this.init();
  }

  LockCtrl.prototype.init = function($) {
    var $this = this;
    var pattern = /[0-9|\*|\#|\+]/;
    $this.$scope.$watch(function() {
      return $this.passcode;
    }, function(newPasscode) {
      var passcode = '';
      $this._lodash.forEach(newPasscode, function(character) {
        var digit = $this.findDigit(character).number;
        if(digit) {
          passcode += digit;
        }
        else {
          $this.passcode = $this.passcode.substr(0, $this.passcode.length-1);
        }
      });

      if(passcode.length === 4) {
        $this.submitPasscode(passcode);
      }
    })
  };

  LockCtrl.prototype.findDigit = function(character) {
    character = character.toLowerCase();
    var digit = this._lodash.find(this.digits, function(digit) {
      return digit.number === character || digit.alpha.indexOf(character) >= 0;
    });

    return digit || {};
  };

  LockCtrl.prototype.digitClick = function(digit) {
    this.passcode += digit.number;
  };

  LockCtrl.prototype.backspace = function() {
    this.passcode = this.passcode.substr(0, this.passcode.length-1);
  };

  LockCtrl.prototype.submitPasscode = function(passcode) {
    console.log(passcode);
    this.resetPasscode();
  };

  LockCtrl.prototype.resetPasscode = function() {
    this.passcode = '';
  };

  angular.module('aquamonitor.core')
    .controller('lockCtrl', LockCtrl);
})();
