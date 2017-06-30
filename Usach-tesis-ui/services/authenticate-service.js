app.service('AuthenticationService', ["$http", "$state", function($http, $state){
	var self = this;
	self.checkToken = function(token){
		var data = {token: token};
		
		$http.post("endpoints/checkToken.php", data).success(function(response){
			

			if (response === "authorized"){
				console.log("Logged in");
				$state.go("applicaction")
			} 


			if (response !== "authorized"){
				console.log("Logged out");
				$state.go("login")
			} 



		}).error(function(error){
			$state.go("login")
		})
		
	}

}]);