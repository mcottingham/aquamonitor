(function() {
    'use strict';

    function temperature() {
        return function(temperature) {
            var temp = temperature / 1000;
            return temp.toFixed(2) + ' C';
        };
    }

    function flowRate() {
        return function(flowRate) {
            var gphFlowRate = flowRate / 0.0630901966666667;
            return gphFlowRate.toFixed(2) + ' gph';
        }
    }

    angular.module('aquamonitor.core')
        .filter('temperature', temperature)
        .filter('flowRate', flowRate);
})();