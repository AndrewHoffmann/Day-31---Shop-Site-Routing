(function() {
    'use strict';

    angular
        .module('routing')
        .controller('SingleShipController', function(API,$stateParams) {

        	const vm = this;

            vm.ship = API.getSingleShip($stateParams.id);

        });
     
})();