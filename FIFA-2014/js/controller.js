app.factory('matchesService',function($http){

	var matches={};
	matches.allMatches=function(){
		return $http({
			method:'GET',
			url:'http://worldcup.sfg.io/matches'
		});
	}
	matches.allTeams = function(){
		return $http({
			method:'GET',
			url:'http://worldcup.sfg.io/teams/'
		});
	}

	return matches;
});


app.controller('matchesController',function($scope,matchesService){
	$scope.names=[];
	matchesService.allMatches().success(function(data){
			$scope.names=data;
		});
});
app.controller('teamsController',function($scope,matchesService){
	$scope.teams=[];
	matchesService.allTeams().success(function(data){
		$scope.teams = data;
	});
	$scope.groupid='group_id';

});