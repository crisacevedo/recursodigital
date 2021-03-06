app.controller("LoginController", function($scope, $http, $state,AuthenticationService){
    
    //Variables
   $scope.signUpInfo = {
        username: undefined,
        password: undefined
        }
    
    $scope.loginInfo = {
        username: undefined,
        password: undefined
    }
    


    
    //Functions
    
    $scope.signUserUp = function (){
        var data = {
            username: $scope.signUpInfo.username,
            password: $scope.signUpInfo.password
        }
        
      

        $http.post("endpoints/signup.php", data).success(function(response){
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response));
            $state.go("login");
        }).error(function(error){
            console.error(error);
        });
    };
    

    $scope.loginUser = function () {
         var data = {
            username: $scope.loginInfo.username,
            password: $scope.loginInfo.password
        }
        
        $http.post("endpoints/login.php", data).success(function(response){
           
           
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response));
            localStorage.setItem("username", JSON.stringify($scope.loginInfo.username));
             var username = JSON.parse(localStorage.getItem('username'));
             var token = JSON.parse(localStorage.getItem('token'));
            console.log(username);  
            
            if(username=="administrador")
{

            $state.go("administrador");
}



            if(username!="administrador")
{

            $state.go("application");
}





        }).error(function(error){
            console.error(error);
        });
    
    }
    

    


    //Init

})