(function() {
    'use strict';

    angular
        .module('routing')
        .controller('ShipController', function(API) {

        	const vm = this;

            vm.ships = API.getShips();
        
        });
     
})();