
app.controller("Simulador2Controller", function($scope, $http, $state,AuthenticationService){

    
var username = JSON.parse(localStorage.getItem('username'));

$scope.rockcero=0;
$scope.rock=0;
     
  	$scope.tablarelaciones=function (a){


 	var cancion=0;
  		if(a==1)

{


	cancion=1;



	 var data = {
      
      username:username,
      cancion:cancion 

  }




    $http.post('endpoints/simulador2.php', data).success(function(response){
      console.log(response);
      $scope.rockcero=Object.values(response[0]);
      $state.go("simulador2");
    $scope.users = response;
    		
    }).error(function(error){
      console.error(error);
    })

}


  		if(a==2)

{

	cancion=2;



	 var data = {
      
      username:username,
      cancion:cancion 

  }




    $http.post('endpoints/simulador2.php', data).success(function(response){
      console.log(Object.values(response[0]));
      $scope.rock=Object.values(response[0]);
      $state.go("simulador2");
    	$scope.users = response;
    		
    }).error(function(error){
      console.error(error);
    })


}



     
}





   
var token;
	if (localStorage['token']){
    token = JSON.parse(localStorage['token']);
	} else {
	token = "something stupid";
	}
	AuthenticationService.checkToken(token);
	
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









 //$http.get('endpoints/simulador2.php').
   //     success(function(data) {
     //       // here the data from the api is assigned to a variable named users
       //     $scope.users = data;
    	//	 });





//    $http.get('endpoints/simulador2.php').success(function(response){
  //    console.log(response)
      //$state.go("simulador2");
    //}).error(function(error){
      //console.error(error);
    //})
})

