app.controller("AdministradorController", function ($scope, $state, $http, AuthenticationService){
    //If user is not logged in


	  
var username = JSON.parse(localStorage.getItem('username'));

$scope.rockcero=undefined;
$scope.rock=undefined;
     
  	$scope.tablarelaciones=function (a){


 	var cancion=0;
  		

  		if(a==1)

{


	cancion=1;



	 var datos = {
      
      username:username,
      cancion:cancion 

  }




    $http.post('endpoints/administrador.php', datos).success(function(response){
      console.log(response);
      $scope.rockcero=Object.values(response[0]);
      console.log($scope.rockcero[0]);
      prueba=$scope.rockcero[0];
      $state.go("administrador");
    $scope.users = response;


    		
    }).error(function(error){
      console.error(error);
    })
         





}


  		if(a==2)

{

	cancion=2;



	 var datos = {
      
      cancion:cancion 

  }




    $http.post('endpoints/administrador.php', datos).success(function(response){
      console.log(Object.values(response[0]));
      $scope.rock=Object.values(response[0]);
      $state.go("administrador");
    	$scope.users = response;
    		
    }).error(function(error){
      console.error(error);
    })


}



     
}




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