angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'
		}).otherwise({ redirectTo: '/' });

			// 	.when('/geeks', {
			// templateUrl: 'views/geek.html',
			// controller: 'GeekController',
			// resolve: {
            //  factory: checkRouting
            //     }	

	$locationProvider.html5Mode(true);

}]);




var checkRouting= function ($q, $rootScope, $location,$http) {
	console.log('angular authenticate')
	 var deferred = $q.defer();
			    $http.get("/getvalue")
            .success(function (response) {
				     $location.path("/login.html");
					     deferred.resolve(true);
               
            })

    // if ($rootScope.userProfile) {
    //     return true;
    // } else {
    //     var deferred = $q.defer();
    //     $http.post("/loadUserProfile", { userToken: "blah" })
    //         .success(function (response) {
    //             $rootScope.userProfile = response.userProfile;
    //             deferred.resolve(true);
    //         })
    //         .error(function () {
    //             deferred.reject();
    //             $location.path("/");
    //          });
    //     return deferred.promise;
    // }
};