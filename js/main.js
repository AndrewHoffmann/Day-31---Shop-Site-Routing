(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

    // 	$locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });

    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
		        controller: 'MainController',
		        controllerAs: 'vm'
		      },
		   }
	    })

	    .state('singleShip', {
	      url: '/ship/:id',
	      views: {
		      'content': {
		        templateUrl: '../partials/singleShip.html',
		        controller: 'SingleShipController',
		        controllerAs: 'vm'
		      },
		   }
	    })

	    .state('shipType', {
	      url: '/shipType',
	      views: {
		      'content': {
		        templateUrl: '../partials/shipType.html',
		        controller: 'ShipController',
		        controllerAs: 'vm'
		      },
		   }
	    })

			.state('ships', {
	      url: '/ships',
	      views: {
		      'content': {
		        templateUrl: '../partials/ships.html',
		        controller: 'ShipController',
		        controllerAs: 'vm'
		      },
		   }
	    })

	    .state('login', {
	      url: '/login',
	      views: {
		      'content': {
		        templateUrl: '../partials/login.html',
		        controller: 'LoginController',
		        controllerAs: 'vm'
		      },
		   }
	    })
			
			.state('salesTeam', {
	      url: '/salesTeam',
	      views: {
		      'content': {
		        templateUrl: '../partials/salesTeam.html'
		      },
		   }
	    });
			
    });
        
})();