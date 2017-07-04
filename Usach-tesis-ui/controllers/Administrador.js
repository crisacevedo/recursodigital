app.controller("AdministradorController", function ($scope, $state, $http, AuthenticationService){
    //If user is not logged in


    
var username = JSON.parse(localStorage.getItem('username'));

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawChart);
//google.charts.setOnLoadCallback(drawMaterial);


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


  var data = google.visualization.arrayToDataTable([
         ['Relacion de similitud', 'Valor por el usuario'],
         ['rock_reg', parseFloat($scope.rockcero[0])],
         ['rock_pop', parseFloat($scope.rockcero[1])],
         ['rockcero_ska', parseFloat($scope.rockcero[2])],
         ['rockcero_jazz', parseFloat($scope.rockcero[3])],
         ['reg_pop', parseFloat($scope.rockcero[4])],
         ['reg_ska', parseFloat($scope.rockcero[5])],
         ['reg_jazz', parseFloat($scope.rockcero[6])],
         ['pop_ska', parseFloat($scope.rockcero[7])],
         ['pop_jazz', parseFloat($scope.rockcero[8])],
         ['ska_jazz', parseFloat($scope.rockcero[9])]
     
      ]);

      //var view = new google.visualization.DataView(data);
      //view.setColumns([0, 1,
        //               { calc: "stringify",
          //               sourceColumn: 1,
            //             type: "string",
              //           role: "annotation" },
                //       2]);

      var options = {
        title: "Reporte cancion 1 de promedio de las relaciones de similitud",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
      chart.draw(data, options);

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
      var valor=parseFloat($scope.rock[9]);
     var data = google.visualization.arrayToDataTable([
         ['Relacion de similitud', 'Valor por el usuario'],
         ['rock_reg', parseFloat($scope.rock[0])],
         ['rock_pop', parseFloat($scope.rock[1])],
         ['rock_ska', parseFloat($scope.rock[2])],
         ['rock_jazz', parseFloat($scope.rock[3])],
         ['reg_pop', parseFloat($scope.rock[4])],
         ['reg_ska', parseFloat($scope.rock[5])],
         ['reg_jazz', parseFloat($scope.rock[6])],
         ['pop_ska', parseFloat($scope.rock[7])],
         ['pop_jazz', parseFloat($scope.rock[8])],
         ['ska_jazz', parseFloat($scope.rock[9])]
     
      ]);

      //var view = new google.visualization.DataView(data);
      //view.setColumns([0, 1,
        //               { calc: "stringify",
          //               sourceColumn: 1,
            //             type: "string",
              //           role: "annotation" },
                //       2]);

      var options = {
        title: "Reporte cancion 2 de promedio de las relaciones de similitud",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div2"));
      chart.draw(data, options);







 //var data = google.visualization.arrayToDataTable([
   //       ['Id cancion','rock_reg','rock_pop','rock_ska','rock_jazz','reg_pop','reg_ska','reg_jazz','pop_ska','pop_jazz','ska_jazz'],
         //['2',$scope.rock[0],$scope.rock[1],$scope.rock[2],$scope.rock[3],$scope.rock[4],$scope.rock[5],$scope.rock[6],$scope.rock[7],$scope.rock[8],$scope.rock[9] ]]);
     //     ['100','9','8','7','6','5','4','3','2','1','0']]);
                 


       // var options = {
     //     chart: {
       //     title: 'Reporte de cancion 1 del promedio de los valores ingresados por los usuarios en las relaciones de similitud',
            
         // },
         // bars: 'vertical',
         //height: 400
        //};

       // var chart = new google.charts.Bar(document.getElementById('chart_div'));

       // chart.draw(data, options);


        
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