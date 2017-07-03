var app = angular.module("UserAuthTutorial", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
	$stateProvider
        .state("login", {
        url:"/",
        controller: "LoginController",
        templateUrl: "views/login.html"
        })
        
        .state("reg", {
        url:"/reg",
        controller: "LoginController",
        templateUrl: "views/registro.html"
        })
        
        .state("application", {
        url:"/app",
        controller: "MainController",
        templateUrl: "views/principal.html",
        params: {'test': null}
        })

		.state("simulador", {
		url:"/simulador",
		controller: "Simulador1Controller",
		templateUrl: "views/simulador.html",
		params: {'test': null}
		})

		.state("simulador2", {
		url:"/simulador2",
		controller: "Simulador2Controller",
		templateUrl: "views/simulador2.html",
		params: {'test': null}
		})

		.state("eer", {
		url:"/eer",
		controller: "MainController",
		templateUrl: "views/eer.html",
		params: {'test': null}
		})

		.state("conjuntos", {
		url:"/conjuntos",
		controller: "MainController",
		templateUrl: "views/conjuntos.html",
		params: {'test': null}
		})

		.state("logica", {
		url:"/logica",
		controller: "MainController",
		templateUrl: "views/logica.html",
		params: {'test': null}
		})
		
		.state("modelos", {
		url:"/modelos",
		controller: "MainController",
		templateUrl: "views/modelos.html",
		params: {'test': null}
		})
		
		.state("unificado", {
		url:"/unificado",
		controller: "MainController",
		templateUrl: "views/unificado.html",
		params: {'test': null}
		})

		.state("administrador", {
		url:"/administrador",
		controller: "AdministradorController",
		templateUrl: "views/administrador.html",
		params: {'test': null}
		})
		




})

