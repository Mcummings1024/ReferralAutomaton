var app = angular.module('refApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'RefCtrl',
		templateUrl: 'refView'
	});
	$routeProvider.when('/splashView',
	{
		controller: 'SplashCtrl',
		templateUrl: 'splashView'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/404',
		controller: 'WhoopsController',
		templateUrl: '404' 
	});
});