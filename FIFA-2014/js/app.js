var app = angular.module('cricketApp',['ngRoute','angular.filter']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "partials/matches.html",
		controller:"matchesController"
	})
	.when("/teams",{
		templateUrl: "partials/teams.html",
		controller:"teamsController"
	})
	.otherwise({
		redirectTo: "/"
	});
}]);