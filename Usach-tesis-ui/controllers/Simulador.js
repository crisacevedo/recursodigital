
app.controller("Simulador1Controller", function($scope, $http, $state,AuthenticationService){

          var username = JSON.parse(localStorage.getItem('username'));
          var cancionid=0;
 










   $scope.ObtEvaInfo = 
   {
          ObtEva1elem1:undefined,
          ObtEva1elem2:undefined,  
          ObtEva1elem3:undefined,
          ObtEva1elem4: undefined,  
          ObtEva1elem5: undefined,  
         
         ObtEva2elem1: undefined,  
         ObtEva2elem2: undefined,  
          ObtEva2elem3: undefined,  
          ObtEva2elem4: undefined,  
          ObtEva2elem5: undefined,  
         
          ObtEva3elem1: undefined,  
          ObtEva3elem2: undefined,  
          ObtEva3elem3: undefined,  
          ObtEva3elem4: undefined,  
          ObtEva3elem5: undefined,  
         
         ObtEva4elem1: undefined, 
         ObtEva4elem2: undefined,  
         ObtEva4elem3: undefined,  
         ObtEva4elem4: undefined,  
         ObtEva4elem5: undefined,  
        
         ObtEva5elem1: undefined, 
         ObtEva5elem2: undefined,  
         ObtEva5elem3: undefined,  
         ObtEva5elem4: undefined,  
         ObtEva5elem5: undefined,
         ObtEva5elem6: undefined
            
      }


     
$scope.loadsong=function (a){
    
    var player=document.getElementById('player');
    var sourceOgg=document.getElementById('player');
    var sourceMp3=document.getElementById('player');
    if (a==1)
    {
 sourceMp3.src="audios/Kalimba.mp3";
   cancionid=a;
    }
    if (a==2)
 {
 sourceMp3.src="audios/Manu Chao - A Cosa (1).mp3";
 cancionid=a;
   
}
   player.load(); //just start buffering (preload)
   player.play(); //start playing
}







function maximo (arreglo2){
    
 var maximus=0;
 maximus=arreglo2[0];

for (var i = 0; i<10; i ++) {

           if (maximus<arreglo2[i])
          {
            maximus=arreglo2[i];
          } 

}
return maximus;

} 










      $scope.ObtEva = function (){
      
 var arreglo = 
       

//       console.log("hola");

        [ 
        [0,0,0,0,0] , 
        [0,0,0,0,0] , 
        [0,0,0,0,0] , 
        [0,0,0,0,0] , 
        [0,0,0,0,0] 
        ];
         












         arreglo[0][0]= $scope.ObtEvaInfo.ObtEva1elem1;  
         arreglo[0][1]= $scope.ObtEvaInfo.ObtEva1elem2;  
         arreglo[0][2]= $scope.ObtEvaInfo.ObtEva1elem3;  
         arreglo[0][3]= $scope.ObtEvaInfo.ObtEva1elem4;  
         arreglo[0][4]= $scope.ObtEvaInfo.ObtEva1elem5;  
         
         arreglo[1][0]= $scope.ObtEvaInfo.ObtEva1elem2;  
         arreglo[1][1]= $scope.ObtEvaInfo.ObtEva2elem2;  
         arreglo[1][2]= $scope.ObtEvaInfo.ObtEva2elem3;  
         arreglo[1][3]= $scope.ObtEvaInfo.ObtEva2elem4;  
         arreglo[1][4]= $scope.ObtEvaInfo.ObtEva2elem5;  
         
         arreglo[2][0]= $scope.ObtEvaInfo.ObtEva1elem3;  
         arreglo[2][1]= $scope.ObtEvaInfo.ObtEva2elem3;  
         arreglo[2][2]= $scope.ObtEvaInfo.ObtEva3elem3;  
         arreglo[2][3]= $scope.ObtEvaInfo.ObtEva3elem4;  
         arreglo[2][4]= $scope.ObtEvaInfo.ObtEva3elem5;  
         
         arreglo[3][0]= $scope.ObtEvaInfo.ObtEva1elem4; 
         arreglo[3][1]= $scope.ObtEvaInfo.ObtEva2elem4;  
         arreglo[3][2]= $scope.ObtEvaInfo.ObtEva3elem4;  
         arreglo[3][3]= $scope.ObtEvaInfo.ObtEva4elem4;  
         arreglo[3][4]= $scope.ObtEvaInfo.ObtEva4elem5;  
        
         arreglo[4][0]= $scope.ObtEvaInfo.ObtEva1elem5; 
         arreglo[4][1]= $scope.ObtEvaInfo.ObtEva2elem5;  
         arreglo[4][2]= $scope.ObtEvaInfo.ObtEva3elem5;  
         arreglo[4][3]= $scope.ObtEvaInfo.ObtEva4elem5;  
         arreglo[4][4]= $scope.ObtEvaInfo.ObtEva5elem5;  
         



 var arreglo2= 
       

//       console.log("hola");

        [0,0,0,0,0,0,0,0,0];
         

      arreglo2[0]= $scope.ObtEvaInfo.ObtEva1elem2;
      arreglo2[1]= $scope.ObtEvaInfo.ObtEva1elem3;
      arreglo2[2]= $scope.ObtEvaInfo.ObtEva1elem4;
      arreglo2[3]= $scope.ObtEvaInfo.ObtEva1elem5;
      arreglo2[4]= $scope.ObtEvaInfo.ObtEva2elem3;
      arreglo2[5]= $scope.ObtEvaInfo.ObtEva2elem4;
      arreglo2[6]= $scope.ObtEvaInfo.ObtEva2elem5;
      arreglo2[7]= $scope.ObtEvaInfo.ObtEva3elem4;
      arreglo2[8]= $scope.ObtEvaInfo.ObtEva3elem5;
      arreglo2[9]= $scope.ObtEvaInfo.ObtEva4elem5;
            
      var grado=maximo(arreglo2);
      console.log(grado);






    var data = {
      rock_reg: $scope.ObtEvaInfo.ObtEva1elem2,
      rock_pop: $scope.ObtEvaInfo.ObtEva1elem3,
      rock_ska: $scope.ObtEvaInfo.ObtEva1elem4,
      rock_jazz: $scope.ObtEvaInfo.ObtEva1elem5,
      reg_pop: $scope.ObtEvaInfo.ObtEva2elem3,
      reg_ska: $scope.ObtEvaInfo.ObtEva2elem4,
      reg_jazz: $scope.ObtEvaInfo.ObtEva2elem5,
      pop_ska: $scope.ObtEvaInfo.ObtEva3elem4,
      pop_jazz: $scope.ObtEvaInfo.ObtEva3elem5,
      ska_jazz: $scope.ObtEvaInfo.ObtEva4elem5,
      username:username,
      cancionid:cancionid,
      grado:grado,
      animo: $scope.ObtEvaInfo.ObtEva5elem6  
    }
   



   var categoria ="hola";
  var categoriacomparacion ="hola";
 var respuesta ="holi";
         var respuestatotal ="";
 var categorias = ["Rock", "Reggae", "Pop" ,"Ska ", "Jazz"];        

for (var i = 0; i<5; i ++) {

           for (var j = 0; j<5; j ++) {
               
                

                if(arreglo[i][j] <=0.5)       
           {           
                  
                  respuesta=" es no semejante a" ;
               
          }
 
         if(arreglo[i][j] >0.5 && arreglo[i][j] <=0.6)         
          {           
                  
                  respuesta="es poco similar a" ;   
               
           }
                



                if(arreglo[i][j]>0.6 && arreglo[i][j] <1)       
           {           
                  
                  respuesta="es similar a"    ;
               
            }
                 




                 if(arreglo[i][j] ==1)       
           {           
                  
                 respuesta="es igual a"    ;
               
            }
                 
            
               categoria=categorias[i];
               categoriacomparacion=categorias[j]; 
               respuestatotal= respuestatotal +respuesta+ " " + categoriacomparacion + ",";


              }


            respuestatotal= categoria + " " + respuestatotal;
          window.alert(respuestatotal);
    respuestatotal="";
            }
  

   

    $http.post('endpoints/simulador.php', data).success(function(response){
      console.log(response)
      $state.go("simulador");
    }).error(function(error){
      console.error(error);

    })
          
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
})