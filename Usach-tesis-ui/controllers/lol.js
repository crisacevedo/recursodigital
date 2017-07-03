app.controller("AdministradorController", function ($scope, $state, $http, AuthenticationService){
    //If user is not logged in


	  
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




    $http.post('endpoints/administrador.php', data).success(function(response){
      console.log(response);
      $scope.rockcero=Object.values(response[0]);
      $state.go("administrador");
    $scope.users = response;
    		
    }).error(function(error){
      console.error(error);
    })




 var arreglo = 
       

//       console.log("hola");
		[ 
        [0,0,0,0,0,0,0,0,0,0] , 
        
        ];



         arreglo[0]= $scope.rockcero[0];  
         arreglo[1]= $scope.rockcero[1];  
         arreglo[2]= $scope.rockcero[2];  
         arreglo[3]= $scope.rockcero[3];
         arreglo[4]= $scope.rockcero[4]; 
         arreglo[5]= $scope.rockcero[5];  
         arreglo[6]= $scope.rockcero[6];  
         arreglo[7]= $scope.rockcero[7];  
         arreglo[8]= $scope.rockcero[8];  
         arreglo[9]= $scope.rockcero[9]; 
         console.log(response[0]);
         console.log($scope.rockcero[0]);
         

var chart = new CanvasJS.Chart("chartContainer",
{        
    data: [
    {
        type: "column",
        dataPoints: [
            { x: 1, y: arreglo[0] },
            { x: 1, y: arreglo[0] },
            { x: 1, y: arreglo[0] },
            { x: 1, y: arreglo[0] },
            { x: 1, y: arreglo[0] },
            { x: 1, y: arreglo[0] },
            { x: 1, y: $scope.rockcero[6] },
            { x: 1, y: $scope.rockcero[7] },
            { x: 1, y: $scope.rockcero[8] },
      		{ x: 1, y: $scope.rockcero[9] }
               
        ]
    }                   
    ]
});

//chart.render();



}


  		if(a==2)

{

	cancion=2;



	 var data = {
      
      cancion:cancion 

  }




    $http.post('endpoints/administrador.php', data).success(function(response){
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