app.controller("MainController", function ($scope, $state, $http, AuthenticationService){
    //If user is not logged in


	var token;
	var username;
	if (localStorage['token']){
    token = JSON.parse(localStorage['token']);
	username = JSON.parse(localStorage['username']);	
	console.log(username);
	} else {
	token = "something stupid";
	}
	AuthenticationService.checkToken(token,username);



	
	$scope.logout = function(){
		var data = {
			token: token
		}
		
		$http.post('endpoints/logout.php', data).success(function(response){
			console.log(response)
			localStorage.clear();
			$state.go("login");
		}).error(function(error){
			console.error(error);
		})
	}


})