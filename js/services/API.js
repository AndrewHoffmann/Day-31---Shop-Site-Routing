(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http){
    
        let data = [{ "id": 0, "name": "X-Wing", "img": '/images/ships/x_wing.png', "manufacturer": 'Incom Corporation', "model": 'T-65', "class": 'Starfighter', "cost": "150,000"},
                    { "id": 1, "name": "Y-Wing", "img": '/images/ships/y_wing.png', "manufacturer": 'Koensayr Manufacturing', "model": 'BTL Y-wing starfighter', "class": 'Assault Starfighter', "cost": "135,000"},
                    { "id": 2, "name": "A-Wing", "img": '/images/ships/a_wing.jpg', "manufacturer": 'Incom Corporation', "model": 'RZ-1 A-wing interceptor', "class": 'Starfighter', "cost": "175,000"},
                    { "id": 3, "name": "B-Wing", "img": '/images/ships/b_wing.png', "manufacturer": 'Slayn & Korpil', "model": 'A/SF-01[4] B-wing starfighter', "class": 'Assault Starfighter', "cost": "220,000"},
                    { "id": 4, "name": "Snowspeeder", "img": '/images/ships/snowspeeder.png', "manufacturer": 'Incom Corporation', "model": 'T-47 airspeeder', "class": 'Starfighter', "cost": "1,200,000"},
                    { "id": 5, "name": "Millenium Falcon", "img": '/images/ships/falcon.png', "manufacturer": 'Corellian Engineering Corporation', "model": 'ModelModified YT-1300fp light freighter', "class": 'Freighter', "cost": "12,000,000"},
                    { "id": 6, "name": "Rebel Blockaderunner", "img": '/images/ships/blockade_runner.png', "manufacturer": 'Corellian Engineering Corporation', "model": 'CR90 corvette', "class": 'Freighter', "cost": "3,500,000"},
                    { "id": 7, "name": "Rebel Cruiser", "img": '/images/ships/cruiser.png', "manufacturer": 'Kuat Drive Yards', "model": 'EF76 Nebulon-B escort frigate', "class": 'Freighter', "cost": "8,500,000"},
                    { "id": 8, "name": "Rebel Transport", "img": '/images/ships/transport.png', "manufacturer": 'Gallofree Yards, Inc.', "model": 'GR-75 medium transport', "class": 'Freighter', "cost": "350,000"},
                    ];
			return {
			    getShips:()=>{
			    	return data;
			    },
			    getSingleShip:(id)=>{
			    	return data[id];
			    },
		  	
                getWeather:(city) => {
                    return $http({
                        type: "GET",
                        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`,
                    })
                }

            };
        });
})();